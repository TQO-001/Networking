# IOS Simulator

A fake Cisco IOS CLI for practicing real switch/router syntax — no lab
hardware, no GNS3, no packet tracer license needed. Type real Cisco
commands, get real Cisco-style prompts, output, and errors.

## Run it

```
python3 main.py
```

No pip installs required — everything is Python standard library.

You'll be asked to pick Switch or Router. From there it behaves like a
real device: `enable` → `configure terminal` → `interface gi0/1` → etc.
Progress is saved separately per device type in
`progress_switch.json` / `progress_router.json` in this folder.

## What it simulates

- Real prompt changes: `Switch>` → `Switch#` → `Switch(config)#` →
  `Switch(config-if)#` / `Switch(config-vlan)#`
- Real IOS-style errors:
  - `% Invalid input detected at '^' marker.` with the caret positioned
    at the offending word
  - `% Incomplete command.` when you've typed a valid prefix but stopped short
- **State that persists and shows up in `show` commands** — set an IP
  address, `no shutdown` an interface, assign a VLAN, and it'll reflect
  correctly in `show ip interface brief`, `show vlan brief`,
  `show running-config`, etc.
- Mode-gating: commands only work in the mode they actually belong to
  (e.g. you can't run `interface gi0/1` from privileged EXEC — you have
  to be in `(config)#` first). This is one of the most common real
  beginner mistakes, so it's enforced here too.
- Common abbreviations (`en`, `conf t`, `int gi0/1`, `sh run`, `wr mem`)

## Trainer-only commands (not real IOS)

| Command | What it does |
|---|---|
| `?` | List valid commands for your current mode |
| `explain on` / `explain off` | Toggle the one-line "why this matters" hint after each successful command |
| `progress` | Checklist of every command, mastered vs not, for this device type |
| `reset` | Wipe the current device back to factory defaults (doesn't touch progress) |

## Extending the command list

Everything is in `commands_data.py` — one dict per command:

```python
{
    "id": "hostname",
    "modes": ["global_config"],
    "device": "both",                 # "both" | "switch" | "router"
    "pattern": ["hostname", "<name>"],
    "action": "set_hostname",
    "explain": "Sets the device's hostname...",
}
```

- Plain words in `pattern` must match literally.
- `<name>` style tokens capture exactly one word.
- `<text>` **as the last token** captures the rest of the line (use this
  for anything with spaces, like `description`).

If you add a new command, you also need a matching function in the
`ACTIONS` dict at the bottom of `engine.py` — copy the closest existing
one and adjust. Most new commands are 3-5 lines.

Good next commands to add as you go through CCNA: `banner motd`,
`line console 0` / `password` / `login`, `spanning-tree` basics,
`show spanning-tree`, VTP, port-security, DHCP snooping, OSPF/EIGRP
(`router ospf 1`, `network ...`).

## Known limitations (v1)

- No IP/subnet-mask format validation — it'll accept garbage in
  `ip address` fields. Good for pure syntax practice, not for catching
  addressing mistakes.
- Caret error position is approximate (based on single-space-normalized
  tokens, not your exact original spacing).
- Abbreviation support is limited to the list in `KEYWORD_ALIASES` in
  `commands_data.py` — add to it if you hit one that "should" work.
- No trunk-allowed-VLAN lists, no STP/routing protocol simulation yet —
  see "Extending" above.

## Files

- `main.py` — REPL entry point, device selection
- `engine.py` — command matching, mode transitions, fake output generation
- `device.py` — device/interface/VLAN state model
- `commands_data.py` — **the file you'll actually edit** as you learn more
- `progress.py` — persistence for the mastered-commands checklist
- `test_engine.py` — scripted walkthrough for both device types (`python3 test_engine.py`)
