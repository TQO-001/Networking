# How the IOS Simulator Works

This walks through the *logic*, not just the code — the goal is that you
could close this file, open a blank one, and rebuild the whole thing
yourself, because you understand *why* each piece exists, not just *what*
it does.

The project has 5 pieces. Each one has exactly one job:

```
device.py        -> what the fake device IS (its data)
commands_data.py -> what commands EXIST (declarative list, no logic)
engine.py         -> how typed text becomes state changes + output (the brain)
progress.py       -> remembers what you've mastered, across runs
main.py            -> the loop that connects your keyboard to the engine
```

Keep that separation in your head as you rebuild it. The single biggest
design decision in this whole project is: **commands are data, not code.**
Everything else follows from that one choice.

---

## 1. The core idea: commands are data, not `if` statements

The naive way to build this would be:

```python
if command == "enable":
    mode = "priv_exec"
elif command == "configure terminal":
    mode = "global_config"
elif command.startswith("hostname "):
    hostname = command.split(" ", 1)[1]
# ...30 more elif branches, and it gets worse from here
```

This breaks down fast because IOS commands have variable parts
(`hostname SW1`, `interface gi0/1`, `ip address 10.0.0.1 255.255.255.0`),
mode restrictions (some commands only work in some modes), and
device restrictions (`vlan 10` only makes sense on a switch).

Instead, each command is described as **data** — a dictionary — and one
generic matching function handles ALL of them the same way:

```python
{
    "id": "hostname",
    "modes": ["global_config"],
    "device": "both",
    "pattern": ["hostname", "<name>"],
    "action": "set_hostname",
    "explain": "...",
}
```

Why this matters for you rebuilding it: **once the matcher works for one
command, it works for all 23 of them, and for the 24th one you add
yourself.** You're not writing new parsing logic every time you add a
command — you're just adding a new row of data. This is the single
biggest lesson in the whole project: when you find yourself about to
write the 10th nearly-identical `if` branch, stop and ask "can this be a
table instead?"

**Checklist for this section:**
- [ ] I understand why hardcoded if/elif doesn't scale for this problem
- [ ] I understand that a "pattern" is just a list of expected words
- [ ] I understand `<name>` means "capture whatever word is here"

---

## 2. The state model (`device.py`)

A real switch or router has stuff that persists: a hostname, a set of
interfaces, VLANs, routes. If you `ip address 1.1.1.1 255.255.255.0` on
an interface and then walk away and come back, that IP is still there.
That's `DeviceState` — a plain data container with no command-parsing
knowledge at all. It doesn't know what "typing a command" even means.

```python
@dataclass
class DeviceState:
    device_type: str
    hostname: str
    mode: str = "user_exec"
    current_interface: Optional[str] = None
    interfaces: Dict[str, Interface] = field(default_factory=dict)
    vlans: Dict[int, Vlan] = field(default_factory=dict)
    static_routes: List[StaticRoute] = field(default_factory=list)
    ...
```

Why a `dataclass`? It's just a container with fields — you don't want to
hand-write `__init__` for 10 fields. `@dataclass` generates that for you.
If you're rebuilding this and don't know dataclasses yet, a plain class
with `self.x = x` in `__init__` works identically — dataclasses are a
convenience, not a requirement.

**Why interfaces are a dict, not a list:** you constantly need "give me
the interface named GigabitEthernet0/1" — a dict does that in one lookup
(`state.interfaces["GigabitEthernet0/1"]`). A list would mean scanning
every element every time. Same reasoning for `vlans` being keyed by VLAN
ID.

**The `mode` field is the single most important piece of state.** Almost
everything else in the engine exists to answer one question: *"given the
current mode, which commands are even legal right now?"* This is what
makes `interface gi0/1` fail when you're not in `(config)#` — it's not a
special case, it's just the normal mode filter doing its job.

**The prompt is *computed*, not stored:**

```python
def prompt(self) -> str:
    suffix = {
        "user_exec": ">",
        "priv_exec": "#",
        "global_config": "(config)#",
        ...
    }[self.mode]
    return f"{self.hostname}{suffix}"
```

This is a design principle worth internalizing: **never store something
you can derive.** If you stored `self.prompt_string` separately, you'd
have to remember to update it every single place you change `mode` or
`hostname` — and you *will* forget one of those places eventually. Instead,
the prompt is a pure function of two fields that already exist. One
source of truth, no way for it to drift out of sync.

**Interface name abbreviations** (`gi0/1` → `GigabitEthernet0/1`) are
solved with an ordered list of `(alias, canonical)` pairs, checked
longest-alias-first-ish by putting more specific ones first:

```python
INTERFACE_PREFIX_ALIASES = [
    ("gigabitethernet", "GigabitEthernet"),
    ("gig", "GigabitEthernet"),
    ("gi", "GigabitEthernet"),
    ("fastethernet", "FastEthernet"),
    ("fa", "FastEthernet"),
    ...
]
```

`resolve_interface_name("gi0/1")` walks this list, finds the first alias
the input starts with, and glues the canonical prefix onto whatever came
after it (`0/1`). Same pattern you'll see again for command keyword
abbreviations in section 4.

**Checklist for this section:**
- [ ] I can explain why `mode` is stored but `prompt` is not
- [ ] I understand why interfaces/vlans are dicts keyed by name/ID
- [ ] I could write `resolve_interface_name` myself from the alias list idea

---

## 3. The command table (`commands_data.py`)

This is deliberately the *only* file with zero logic in it — just a
Python list of dicts. That's on purpose: it means extending the
simulator (adding `banner motd`, OSPF, port-security, whatever) never
requires touching the matching engine. You add a dict, you add one small
function, done.

Every entry has the same five fields:

| Field | Meaning |
|---|---|
| `modes` | which mode(s) this command works in |
| `device` | `"both"`, `"switch"`, or `"router"` |
| `pattern` | the literal words + capture placeholders |
| `action` | the name of the function that runs on a match |
| `explain` | the one-line teaching hint (or `None` for `show` commands) |

**Pattern syntax, the whole thing:**
- a plain lowercase word (`"hostname"`, `"ip"`) → must match that word exactly
- `"<name>"` → capture exactly one token, store it under the key `name`
- `"<text>"` as the **last** token only → capture everything remaining,
  spaces and all (used for `description`, where the value itself has
  spaces in it — a single-token capture would only grab the first word)

That's it. Two rules cover every command in the file. When you add a
new command, you're just asking: "what literal words does this need, and
where does a variable value go?"

**Checklist for this section:**
- [ ] I understand why this file has no functions, only data
- [ ] I understand when to use `<name>` vs `<text>`
- [ ] I could add a new command entry (e.g. `banner motd <text>`) myself

---

## 4. The matching engine (`engine.py`) — the actual brain

This is the part worth understanding line-by-line, because it's the part
that generalizes to basically any "parse structured commands" problem
you'll ever face, not just this one.

### 4a. Tokenize, then alias-substitute

```python
raw_tokens = raw.split()                       # keeps original case
lower_tokens = [t.lower() for t in raw_tokens]  # for matching
```

Two parallel lists, kept in sync by index. `lower_tokens` is what gets
compared against the pattern (`"HOSTNAME"` should match `"hostname"`).
`raw_tokens` is what gets *captured* into values — because a hostname or
description shouldn't get lowercased just because we lowercased our copy
for comparison purposes.

Then abbreviation handling — but only on the first two words:

```python
KEYWORD_ALIASES = {"conf": "configure", "int": "interface", "sh": "show", ...}

for i in (0, 1):
    if lower_tokens[i] in KEYWORD_ALIASES:
        lower_tokens[i] = KEYWORD_ALIASES[lower_tokens[i]]
```

**Why only tokens 0 and 1, not the whole line?** Because if you
substituted everywhere, and someone typed `hostname sh` (a genuinely
valid, if silly, hostname), it would get mangled into `hostname show`.
Restricting substitution to the command-keyword positions means captured
*values* are never touched. This is a small thing but it's the kind of
bug that's invisible until it randomly corrupts someone's data — worth
noticing as a pattern.

### 4b. The three-way match result

For each candidate command (already filtered down to ones legal in the
current mode/device), try to line it up against the typed tokens:

```python
def _try_match(pattern, lower_tokens, raw_tokens):
    ...
    return ("match", values, i)       # fully matched, here's the captured data
    return ("incomplete", None, i)    # ran out of input, but everything so far was valid
    return ("no_match", None, i)      # a word straight-up didn't match
```

Why three outcomes and not just true/false? Because IOS itself gives you
different error messages depending on which of these happened:

- You typed `show ip` and stopped → that's a valid *prefix* of `show ip
  interface brief`, just incomplete → `"% Incomplete command."`
- You typed `shwo ip route` → the very first word is wrong → `"% Invalid
  input detected at '^' marker."` with the caret under `shwo`

If you collapsed this to a single true/false, you'd lose the ability to
tell those two situations apart, and you'd give the wrong error message
in one of them. This is a case where the extra state (three outcomes
instead of two) isn't complexity for its own sake — it's carrying
information you actually need downstream.

### 4c. Deciding what error to show

The engine tries the typed line against *every* candidate command for
the current mode, and remembers two things across all those attempts:
whether *any* candidate said "incomplete", and how far the *best*
`no_match` attempt got (`best_fail_idx`) before it diverged.

```python
if saw_incomplete:
    return "% Incomplete command."
return self._caret_error(raw, raw_tokens, best_fail_idx)
```

`best_fail_idx` is what lets the caret point at roughly the right word —
it's tracking "how many words in did the closest-matching command still
agree with you," and pointing the error at the word right after that.

### 4d. Dispatch: a dictionary of functions, same trick as section 1

Once a command matches, we need to actually *run* something. Same
philosophy as the command table itself — no `if cmd_id == "hostname":
...elif cmd_id == "shutdown": ...`. Instead:

```python
ACTIONS = {
    "set_hostname": _act_set_hostname,
    "shutdown_if": _act_shutdown_if,
    "enter_interface": _act_enter_interface,
    ...
}

def _dispatch(self, cmd, values):
    fn = ACTIONS[cmd["action"]]
    return fn(self, values) or ""
```

The `"action"` string in each command's data entry is literally the key
into this dictionary. This is called a **dispatch table**, and it's the
same underlying idea as the command-pattern table: instead of branching
on a value, you use the value to *look up* what to do. It's a pattern
you'll use constantly once you notice it — anywhere you're tempted to
write a long `if/elif` chain that all branches on comparing the same
variable, a dict lookup usually replaces it more cleanly.

Each individual action function is small on purpose — it only touches
`DeviceState`, and returns a string (or nothing) to print:

```python
def _act_shutdown_if(eng, v):
    eng._cur_if().admin_down = True
    eng.state.saved = False
```

**Checklist for this section:**
- [ ] I can explain the difference between "no_match" and "incomplete" and why both exist
- [ ] I understand why `raw_tokens` and `lower_tokens` are separate lists
- [ ] I understand what a dispatch table is and could write one from scratch
- [ ] I could add a new action function and register it in `ACTIONS`

---

## 5. Mode transitions

Mode changes are mostly just "this action sets `state.mode` to a fixed
new value" (`enable` → always goes to `priv_exec`). The one genuinely
context-dependent transition is `exit`, because what it does depends on
*where you currently are*:

```python
MODE_AFTER_EXIT = {
    "priv_exec": "user_exec",
    "global_config": "priv_exec",
    "interface_config": "global_config",
    "vlan_config": "global_config",
}
```

This is another small table-instead-of-branches moment: `exit`'s
behavior is "look up my current mode in this table," not a 4-way
`if/elif` on `state.mode`. And from `user_exec`, `exit` doesn't appear in
the table at all — it means something entirely different (quit the
program), which is why that case is handled as a special check before
the table lookup rather than being crammed into it.

**Checklist for this section:**
- [ ] I understand why `exit` needs a lookup table instead of one fixed target mode
- [ ] I understand why `user_exec` is handled as a special case, not a table entry

---

## 6. Generating fake `show` output from state

This is the payoff for keeping `DeviceState` accurate: every `show`
command is just a function that reads `self.state` and formats it as
text. Nothing is hardcoded — `show running-config` walks
`state.interfaces`, `state.vlans`, `state.static_routes` and reconstructs
IOS config syntax from whatever's actually in there:

```python
for name, iface in s.interfaces.items():
    lines.append(f"interface {name}")
    if iface.description:
        lines.append(f" description {iface.description}")
    if iface.ip:
        lines.append(f" ip address {iface.ip} {iface.mask}")
    if iface.admin_down:
        lines.append(" shutdown")
```

This is why setting an IP earlier in the session correctly shows up in
`show running-config`, `show ip interface brief`, *and* `show ip route`
later — they're all just different views over the same underlying state,
not three separately-maintained copies of the truth. If you ever catch
yourself updating "the same fact" in two different places in a program,
that's usually a sign it should be one piece of state with multiple
read-only views, like this.

**Checklist for this section:**
- [ ] I understand why the three `show` commands never go out of sync with each other
- [ ] I could write a new `show` command by reading `state` and formatting it

---

## 7. Progress tracking (`progress.py`)

Deliberately the simplest file in the project — a JSON file on disk,
keyed by device type, containing the list of command `id`s you've
successfully run at least once:

```python
def save(path, device_type, mastered):
    data = _load_all(path)
    data[device_type] = sorted(mastered)
    with open(path, "w") as f:
        json.dump(data, f, indent=2)
```

The engine marks a command "mastered" the moment `_try_match` returns
`"match"` for it for the first time — that's the only hook point needed.
Nothing about matching or dispatch had to change to add progress
tracking; it just observes the result.

**Checklist for this section:**
- [ ] I understand why progress tracking didn't require changing the matcher
- [ ] I could add a similar "observe and log" feature without touching engine logic

---

## 8. The REPL (`main.py`)

The thinnest layer on purpose — it does exactly three things, forever:
print the prompt, read a line, hand it to `engine.feed()` and print
whatever comes back.

```python
while True:
    prompt = engine.state.prompt() + " "
    line = input(prompt)
    output = engine.feed(line)
    if output:
        print(output)
    if engine.quit_requested:
        break
```

Notice `main.py` never looks at `state.mode`, never touches
`ACTIONS`, never parses anything. It doesn't need to know *how* the
engine works, only that "feed it text, print what it gives back." This
is the point of splitting things into files the way we did — you could
swap this whole file out for a web front-end or a Discord bot later, and
`engine.py` wouldn't need to change at all, because nothing about how
commands are matched or executed lives here.

**Checklist for this section:**
- [ ] I understand why `main.py` doesn't know about modes or the command table
- [ ] I could swap the REPL for a different interface without touching `engine.py`

---

## 9. If you're rebuilding this from scratch — suggested order

Don't try to write all five files at once. Build in this order, testing
as you go, so each layer works before you build the next on top of it:

- [ ] **Step 1** — `DeviceState` with just `hostname` and `mode`. No
      interfaces, no VLANs yet. Write `prompt()` and test it changes
      correctly when you manually set `state.mode = "priv_exec"`.
- [ ] **Step 2** — One command in `commands_data.py` (`enable`), one
      action function, and a minimal `_try_match` that only handles
      literal-word patterns (no `<capture>` support yet). Get
      `enable` actually changing the mode end to end.
- [ ] **Step 3** — Add `<name>`-style captures to `_try_match`. Add
      `hostname <name>` as your second command and confirm it updates
      `state.hostname`.
- [ ] **Step 4** — Add the three-way match result (`match` /
      `incomplete` / `no_match`) and the two IOS-style error messages.
      Deliberately type broken commands and check you get the right one.
- [ ] **Step 5** — Add `Interface` objects and the `interface <if>` /
      `description <text>` / `shutdown` / `no shutdown` commands. Add
      `show ip interface brief` reading from that state.
- [ ] **Step 6** — Add VLANs and switch-only commands, gated by the
      `device` field. Confirm router-mode rejects `vlan 10`.
- [ ] **Step 7** — Add `progress.py` and hook the "first successful
      match" event into it.
- [ ] **Step 8** — Add the trainer-only meta-commands (`?`, `explain
      on/off`, `progress`, `reset`) in `main.py` or `engine.py`.

If you rebuild it in that order, at every step you have something that
actually runs — which matters a lot more for actually finishing this
than trying to design the whole thing perfectly before writing any code.

---

## The one-paragraph summary

Everything a command *needs* is described as data (a pattern, a mode
list, a device list). One generic function turns typed text into either
a match (with captured values) or one of two specific failure states. A
second generic lookup (the `ACTIONS` dict) turns a matched command into
a state change. All device knowledge lives in one place (`DeviceState`),
so every `show` command is just a different way of reading the same
truth. That's the whole architecture — the rest is just adding more rows
to the table.
