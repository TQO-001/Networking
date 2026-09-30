# 04 — Guided Drills

Sidebar → **LEARN → Guided drills**. This is the original Driller Bill command trainer: short, focused modules that teach one skill at a time, then make you type it from memory.

Each module follows the same path: **Learn → Simulate → Drill**.

## 1. The Drills screen

A tab bar sits at the top of every Guided drills page:

| Tab | What it does |
|---|---|
| **Drills** | The module library (default) |
| **Notes** | 12 built-in Markdown study notes |
| **Sandbox** | An open terminal with no objectives |
| **Progress** | Your XP, attempts and best scores per module |
| **Create drill** | Author a drill and export it as JSON |
| **⚡ Speed run** | Starts a timed drill on the currently selected module |

Clicking **Guided drills** in the sidebar while you are inside any of these returns you to the library.

### Finding a module
- Use the category chips: **All modules**, **Switches**, **Routers**, **Servers**, **Firewalls**.
- Type in **Filter modules…** to search titles, summaries and tags.
- Each card shows difficulty, number of objectives, number of steps and how many times you completed it.

## 2. The 22 modules

### Switches (15)
| Module | You learn |
|---|---|
| VLANs & Access Ports | Create VLANs, assign access ports |
| Trunking & Native VLANs | Trunk ports, allowed VLANs, native VLAN |
| Spanning Tree (PortFast & BPDU Guard) | Edge-port protection |
| EtherChannel & LACP | Bundling links |
| CDP & LLDP Neighbor Discovery | Discovering neighbours |
| Port Security Fundamentals | Limiting MACs per port |
| DHCP Snooping & Dynamic ARP Inspection | Layer 2 attack defences |
| VTP & the Revision Number Trap | Why VTP can wipe your VLANs |
| Interface Troubleshooting & Err-Disabled Recovery | Diagnosing and recovering ports |
| Basic Management Setup (Real SSH) | Hostname, users, SSH |
| Backup, Restore & Config Rollback | Saving and reverting configs |
| Boot Process & Password Recovery | Recovering access |
| Factory Reset & Flash Cleanup | Wiping a device |
| IOS Image & Flash Management | Images and flash storage |
| Full Device (All Commands) | Open surface with no scripted objectives |

### Routers (3)
Inter-VLAN Routing · Static Routing & Interfaces · OSPF Area 0

### Servers (2)
Linux Server Essentials · Web Services & Host Firewall

### Firewalls (2)
ASA Interfaces & Access Policy · NAT, ACLs & Verification

Difficulty is shown as beginner, intermediate or advanced.

## 3. Walkthrough: your first module

Use **VLANs & Access Ports**.

- [ ] Click **Drills**, filter to *Switches*, and find *VLANs & Access Ports*
- [ ] Click **Learn**. Read each theory card; the small caption above the title is the command it teaches
- [ ] Click **Watch simulation** (or **Simulate** on the card)
- [ ] Use **Run step** to see what each command does to the device, then **Next step →**
- [ ] Click **Start drill** (or **Start terminal practice →**)
- [ ] Type the commands yourself. The objectives list on the left ticks off as the device reaches each required state
- [ ] Click **Finish & analyse** to see your results

### Learn (theory)
Cards explaining the concept and the exact command. A "full-device" module has no theory; it is a free command surface.

### Simulate
Shows the **expected command** for each step with an explanation, and a mini terminal. **Run step** executes the step shown. **Next step →** moves on, and **← Previous** goes back; the device state is rebuilt so it always matches "everything before this step has run". On the last step the button becomes **Practice yourself →**.

### Drill (hands-on)
A terminal with a live **objectives** list, an error counter, and the **Twin** live panel (section 6). The prompt changes with mode. Controls: `Enter` run, `↑`/`↓` history, `?` help.

Objectives are checked against the **resulting device state**, not against exact wording. Different valid command orders both count.

## 4. Scoring and XP

| Situation | XP |
|---|---|
| All objectives completed (standard) | 100 |
| All objectives completed (Speed run) | 150 plus 1 per second under the target time |
| Partial completion | 12 per objective, minimum 20 |
| Sandbox / full-device (no objectives) | 0 |

Progress tracks attempts, completions, best score and total XP per module, stored locally and separate from your exam history.

### Speed run
- Target time = 12 seconds per step, minimum 1 minute, maximum 15 minutes.
- Hard limit = 1.5 × the target. The drill auto-finishes at the limit and is marked timed out.
- Score = 40% accuracy + 40% objective completion + 20 bonus points if finished within target.
- Accuracy is the share of commands that did not produce an error.

## 5. Sandbox

**Sandbox** tab → choose any module in the dropdown → type freely. No objectives, no XP. The Twin records everything so you can export it afterwards. Use it to explore or to rehearse a config before a lab.

## 6. Twin (Command Co-Pilot)

Twin silently records every command, output, mode change, error and suspected typo while you practise.

### During a drill
The right-hand **Twin live** panel shows command count, errors, typos and time, plus the latest command. Nothing needs to be turned on.

### After a drill
On the results screen click **Open Twin**. Tabs: **live**, **documentation**, **errors**, **improvements**, **Cue Cards**.

| Download | Contents |
|---|---|
| **Twin ZIP** | All four files below |
| `Documentation.md` | Your session as a documented config walkthrough |
| `Errors.md` | Each error with category (syntax, wrong-mode, wrong-order, incomplete, ambiguous) |
| `Areas-of-improvement.md` | Theory sections linked to your errors, most-hit first |
| `Cue-Cards.md` | Recall cards for the module's first eight theory sections (not tailored to your mistakes) |

### Privacy
Before display or export, Twin **redacts** values that look sensitive: `enable secret`, `enable password`, user passwords, `key-string` and SNMP community strings. Redaction is pattern-based, so still read exports before sharing them.

### Typo flag
A command that failed but is very close to an expected step is marked **TYPO?**. It is a hint, not a verdict.

## 7. Notes

**Notes** tab: 12 chapters on network fundamentals, OSI/TCP-IP, Ethernet & switching, IPv4 & subnetting, TCP/IP protocols, IPv6, VLANs/trunks/STP, routing, network services, security, troubleshooting and the Cisco IOS CLI. Pick one from the list to read it, and use **↓ Download note** to save a copy.

## 8. Create drill

**Create drill** tab exports a drill definition you can share.

- [ ] Choose an **Engine** (an existing simulator module) and give the drill an **ID**, **Title**, **Difficulty** and **Summary**
- [ ] Write the **Command steps**, one per line
- [ ] Add one or more **objectives**: an id, a label, and a state check (a state path and the value it must equal, for example `mode` equals `global`)
- [ ] Click **↓ Export Drill JSON**

The file uses schema version 1. To contribute it, follow `src/driller-bill/content/drills/README.md` (copy `vlan-access-port.json` as a template). That file mentions a `validate:drills` command; in this project the validator is `npm run validate:driller-bill`.

The Create drill screen only exports; I found no control that loads a custom drill back into the app.

## Troubleshooting

| Problem | Fix |
|---|---|
| Objective will not tick although the command looks right | Objectives check device state. Confirm you are in the right mode and on the right interface, and check for an error line above |
| Every command shows an "Invalid input" style error | Wrong mode. Use `enable`, then `configure terminal`, then the sub-mode |
| Nothing happens when I press Enter | Click inside the terminal to focus it |
| Speed run ended by itself | You reached the hard limit; the result is marked timed out |
| I left a drill and lost my commands | **Exit drill** discards the session (you are warned once you have typed commands). Finish first if you want the Twin export |
| Progress tab is empty | It lists modules you have attempted. Complete or finish at least one drill |
| "Open Twin" is missing from the Drills tab | Twin opens from the results screen after finishing a drill; it reflects your last session |
| Notes show raw Markdown symbols | Notes display as plain text; they are readable but not rendered |

## Tips and shortcuts

- Do the modules in the order: VLANs → Trunking → Spanning Tree → EtherChannel → Port Security.
- Watch the simulation once, then drill twice: first slowly, then a Speed run.
- Read `Areas-of-improvement.md` before your next attempt at the same module.
- Use the Sandbox as a scratch pad to test a command before using it in a graded lab.
- `?` in any terminal shows help for the current mode.
- Notes 07 and 12 pair well with the switch modules; notes 08 with the router modules.
