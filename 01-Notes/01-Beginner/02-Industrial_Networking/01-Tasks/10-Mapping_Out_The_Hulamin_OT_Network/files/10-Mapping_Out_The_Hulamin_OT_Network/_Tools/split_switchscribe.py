#!/usr/bin/env python3
"""
split_switchscribe.py  --  split a SwitchScribe single-file report into Obsidian notes.

    python split_switchscribe.py "Management Switches.md" OUTPUT_DIR [--prefix 03]

Creates, inside OUTPUT_DIR:
    00-Management_Switches_Overview.md   generator notes, collection summary, failures, manual-capture to-do
    01-Switch_Summary.md                 the switch table
    02-Switch_Links.md                   the switch-to-switch link table
    03-Neighbour_Groups.md               the neighbour groups and their switches
    Switches/<switch name>.md            one note per switch (Device Info, Connected Ports, Raw CLI)

Nothing is dropped: every line of the report ends up in one of these files.
Links of the form [[#Switch-Name]] are rewritten to [[Switch Name]] so they work across files.
"""
import re, os, sys, collections

OV, SUM, LNK, GRP = ('00-Management_Switches_Overview', '01-Switch_Summary', '02-Switch_Links', '03-Neighbour_Groups')

def key(s): return re.sub(r'[^a-z0-9]', '', s.lower())

def split(src, out):
    L = open(src, encoding='utf-8').read().split('\n')
    # ---- heading map, fence-aware
    infence = False; heads = []
    for i, l in enumerate(L):
        if l.startswith('```'): infence = not infence
        if not infence:
            m = re.match(r'^(#{1,6}) (.*)$', l)
            if m: heads.append((i, len(m[1]), m[2].strip()))
    def find(level, text):
        for i, lv, t in heads:
            if lv == level and t == text: return i
        raise SystemExit(f'heading not found: {text}')
    i_toc = find(2, 'Table of Contents'); i_ov = find(2, 'Network Overview')
    i_gr = find(2, 'Neighbour Groups'); i_fail = find(2, 'Collection Failures')
    pre = L[:i_toc]

    def sub(a, b, text):  # lines of a ### subsection inside [a,b)
        s = [i for i, lv, t in heads if lv == 3 and t == text and a <= i < b][0]
        e = min([i for i, lv, t in heads if i > s and lv <= 3] + [b])
        return L[s + 1:e]
    def trim(x):
        x = list(x)
        while x and x[-1].strip() in ('', '---'): x.pop()
        while x and not x[0].strip(): x.pop(0)
        return x
    summary = trim(sub(i_ov, i_gr, 'Switch Summary'))
    links = trim(sub(i_ov, i_gr, 'Switch-to-Switch Links'))
    csum = trim(sub(i_ov, i_gr, 'Collection Summary'))

    # ---- groups and switch sections
    groups = []; sections = []   # sections: dict(name, group, lines)
    gh = [(i, t) for i, lv, t in heads if lv == 3 and i_gr < i < i_fail and t.startswith('Group ')]
    sh = [(i, t) for i, lv, t in heads if lv == 4 and i_gr < i < i_fail]
    for n, (i, t) in enumerate(gh):
        nxt = gh[n + 1][0] if n + 1 < len(gh) else i_fail
        sw_line = next(l for l in L[i + 1:nxt] if l.startswith('**Switches:**'))
        groups.append(dict(title=t, num=re.match(r'Group (\d+)', t)[1], switches_line=sw_line, start=i, end=nxt))
    for n, (i, t) in enumerate(sh):
        nxt = min([j for j, _ in sh if j > i] + [g['start'] for g in groups if g['start'] > i] + [i_fail])
        g = [g for g in groups if g['start'] < i < g['end']][0]
        sections.append(dict(name=t, group=g, lines=trim(L[i + 1:nxt])))
    fail = trim(L[i_fail + 1:])
    names = [s['name'] for s in sections]
    kmap = {}
    for n in names:
        if key(n) in kmap: raise SystemExit('name collision: ' + n)
        kmap[key(n)] = n
    gmap = {f"Group {g['num']}": g for g in groups}
    unresolved = collections.Counter()

    def rewrite(text, in_table=False):
        def rep(m):
            a = m[1]
            if key(a) in kmap: return f'[[{kmap[key(a)]}]]'
            if a in gmap:
                g = gmap[a]
                return f'[[{GRP}#{g["title"]}]]' if in_table else f'[[{GRP}#{g["title"]}|{a}]]'
            unresolved[a] += 1; return m[0]
        return re.sub(r'\[\[#([^\]|]+)\]\]', rep, text)

    os.makedirs(os.path.join(out, 'Switches'), exist_ok=True)
    def write(name, lines, sub=''):
        with open(os.path.join(out, sub, name + '.md'), 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines).rstrip() + '\n')
    nav = f'[[{OV}|Overview]] · [[{SUM}|Switch summary]] · [[{LNK}|Switch links]] · [[{GRP}|Neighbour groups]]'

    # ---- per-switch notes
    for s in sections:
        g = s['group']; body = []; fence = False
        for l in s['lines']:
            if l.startswith('```'): fence = not fence
            if not fence and l.startswith('##### '): l = '## ' + l[6:]
            body.append(rewrite(l, in_table=l.startswith('|')))
        write(s['name'], [f"# {s['name']}", '', nav + f' · [[{GRP}#{g["title"]}|Group {g["num"]}]]', ''] + body, 'Switches')

    # ---- summary / links
    write(SUM, ['# Switch Summary', '', nav, ''] + [rewrite(l, True) for l in summary])
    write(LNK, ['# Switch-to-Switch Links', '', nav, ''] + [rewrite(l, True) for l in links])

    # ---- groups
    gl = ['# Neighbour Groups', '', nav, '',
          'Discovery groups are calculated from resolved LLDP/CDP switch neighbours. Unresolved endpoints remain listed under their local switch. '
          'Group 1 is the connected plant network; every other group is a single switch with no resolved switch neighbour.', '']
    for g in groups:
        gl += [f'## {g["title"]}', '', '**Switches:**', '']
        for a in re.findall(r'\[\[#([^\]|]+)\]\]', g['switches_line']):
            gl.append(f'- [[{kmap[key(a)]}]]')
        gl.append('')
    write(GRP, gl)

    # ---- overview
    footer = [l for l in fail if l.startswith('*Generated')]
    fail_body = [l for l in fail if not l.startswith('*Generated')]
    while fail_body and fail_body[-1].strip() in ('', '---'): fail_body.pop()
    fl = []
    for l in fail_body:
        if l.startswith('|') and not l.startswith('| Switch') and not l.startswith('| ---'):
            cells = l.split('|'); n = cells[1].strip()
            if n in names: cells[1] = f' [[{n}]] '; l = '|'.join(cells)
        fl.append(l)
    todo = []
    for l in fail:
        m = re.match(r'^\| (.+?)\s+\| `([\d.]+)`\s+\| (\w+)\s+\| (.*?)\s*\|$', l)
        if m and m[3] in ('failed', 'partial'):
            why = m[4]
            why = ('timeout - device did not answer on SSH' if 'Timeout' in why else 'login failed' if 'Authentication' in why
                   else 'enable mode failed' if 'enable mode' in why else why.rstrip('.'))
            todo.append(f'- [ ] [[{m[1]}]] ({m[2]}) - {why}')
    ov = pre[:]
    while ov and not ov[-1].strip(): ov.pop()
    ov = [pre[0].replace('# ', '# ', 1)] + [''] + [l for l in pre[1:] if l.strip()] + ['', nav, '',
        '## Contents', '',
        '| Note | Contents |', '|---|---|',
        f'| [[{SUM}]] | One row per switch: model, IP, ports, up, UTP / fiber in use, status |',
        f'| [[{LNK}]] | Every switch-to-switch link with media type and what saw it |',
        f'| [[{GRP}]] | The neighbour groups and the switches in each |',
        '| `Switches/` | One note per switch: Device Info, Connected Ports, Raw CLI Output |', '',
        '## Collection Summary', ''] + csum + ['', '## Collection Failures', ''] + fl + ['',
        '## Manual capture to-do', '', 'Switches SwitchScribe could not fully collect. Capture them by hand with the commands in the documentation guide.', ''] + todo + (['', '---', ''] + footer if footer else [''])
    write(OV, ov)
    return dict(switches=len(sections), groups=len(groups), unresolved=dict(unresolved), names=names, sections=sections, todo=len(todo))

if __name__ == '__main__':
    r = split(sys.argv[1], sys.argv[2])
    print(f"{r['switches']} switch notes, {r['groups']} groups, {r['todo']} to-do items, unresolved links: {r['unresolved'] or 'none'}")
