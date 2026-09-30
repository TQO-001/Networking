# Driller Bill — User Guide (v36)

Driller Bill is a CCNA (200-301 v1.1) study platform that runs in your browser. It combines timed practice exams, a stateful Cisco IOS lab, network simulation tools, and a library of guided command drills. Everything is stored locally on your device unless you turn on optional cloud sync.

## How this guide is organised

| File | Covers | Read it when |
|---|---|---|
| `00-START-HERE.md` | Map of the app, study plan, quick shortcuts | First visit |
| `01-Setup-and-Navigation.md` | Install, running, sidebar, URLs, mobile, settings | Before anything else |
| `02-Exams-and-Assessment.md` | Console, exam modes, taking an exam, results, mistakes, spaced repetition | Studying theory |
| `03-Network-Labs.md` | CLI Lab, Topology, Protocol, Flow, Packet, Packet Workshop, Advanced PBQs | Practising configuration and troubleshooting |
| `04-Guided-Drills.md` | The 22 command drill modules, Speed run, Sandbox, Twin, notes, drill builder | Learning IOS commands |
| `05-System-Data-and-Cloud.md` | Question studio, backups, reset, cloud sync, troubleshooting, FAQ | Protecting data, fixing problems |

Every file has its own **Troubleshooting** and **Tips & shortcuts** section at the end.

## The sidebar at a glance

| Section | Item | What it is | Guide |
|---|---|---|---|
| START | Console | Home: build an exam, see history | 02 |
| LEARN | Guided drills | Command drills, notes, sandbox | 04 |
| LEARN | Question studio | Write your own questions | 05 |
| PRACTICE | Mistake bank | Every question you missed | 02 |
| PRACTICE | Review queue | Spaced-repetition flashcards | 02 |
| PRACTICE | Progress & analytics | Scores by domain and objective | 02 |
| NETWORK LAB | CLI Lab | Repair cases on live IOS devices | 03 |
| NETWORK LAB | Topology workbench | Build and trace your own network | 03 |
| NETWORK LAB | Protocol Lab | Fix DHCP, NAT, STP, LACP, OSPF | 03 |
| NETWORK LAB | Flow Lab | Watch protocol exchanges step by step | 03 |
| NETWORK LAB | Packet Lab | Follow a packet hop by hop | 03 |
| NETWORK LAB | Packet Workshop | Build your own packet and test it | 03 |
| NETWORK LAB | Advanced PBQs | Multi-fault, exam-style scenarios | 03 |
| SYSTEM | Data & recovery | Backup and restore | 05 |
| SYSTEM | Cloud sync | Optional account sync | 05 |

The **Quick start** buttons at the bottom of the sidebar (Full simulation, Scenario form) start an exam immediately.

## Suggested study plan (8 weeks)

Tick the boxes as you go. Adjust the pace to your exam date. The plan assumes about 1 hour on weekdays and 2 hours on one weekend day.

### Week 0 — Get oriented
- [ ] Read `01-Setup-and-Navigation.md`
- [ ] Take a **CCNA Sprint** (20 questions) cold, just to set a baseline
- [ ] Open **Progress & analytics** and note your three weakest domains
- [ ] Create a first backup (Data & recovery → Generate backup JSON)

### Week 1 — Network Fundamentals (domain 1, 20%)
- [ ] Domain Drill: *Network Fundamentals*
- [ ] Guided drills → Notes: 01, 02, 03
- [ ] Exhibit Lab (20 questions)
- [ ] Clear the Review queue every day it has cards due

### Week 2 — Network Access (domain 2, 20%)
- [ ] Notes 07 (VLANs, trunks and STP)
- [ ] Guided drills: VLANs & Access Ports, Trunking & Native VLANs
- [ ] Guided drills: Spanning Tree, EtherChannel & LACP, CDP & LLDP
- [ ] CLI Lab: `vlan20-trunk`, `server-access`, `recover-trunk`
- [ ] Domain Drill: *Network Access*

### Week 3 — IP Connectivity part 1 (domain 3, 25%)
- [ ] Notes 04 (IPv4 & subnetting) and 08 (routing)
- [ ] CLI Lab: `static-route`
- [ ] Guided drills: Inter-VLAN Routing
- [ ] Flow Lab: *VLAN 20 delivery*, *Inter-router packet path*

### Week 4 — IP Connectivity part 2 and IP Services (domains 3 and 4)
- [ ] Protocol Lab: *PRO-05 Normalize OSPF timers*
- [ ] Flow Lab: *OSPF adjacency*, *DHCP DORA*, *NAT overload flow*
- [ ] Protocol Lab: *PRO-01 DHCP*, *PRO-02 NAT*
- [ ] Domain Drills for domains 3 and 4

### Week 5 — Security and Automation (domains 5 and 6)
- [ ] Guided drills: Port Security, DHCP Snooping & DAI
- [ ] Notes 10 (network security)
- [ ] Domain Drills for domains 5 and 6

### Week 6 — Troubleshooting and hands-on
- [ ] Packet Lab: work through every flow
- [ ] Packet Workshop: build 3 packets of your own and trace them
- [ ] Advanced PBQs: PBQ-03, PBQ-04, PBQ-05
- [ ] Notes 11 (troubleshooting methodology)

### Week 7 — Exam pressure
- [ ] Advanced PBQs: PBQ-01 and PBQ-02 (the EXAM-difficulty cases)
- [ ] **Remediation** form (built from your weakest objectives), twice
- [ ] Scenario Form (30 questions)
- [ ] Guided drills: Speed run on any two modules you find hard

### Week 8 — Full simulation
- [ ] Full Blueprint (100 questions, 120 minutes), under exam conditions
- [ ] Review every wrong answer in the Mistake bank
- [ ] Second Full Blueprint 3 to 4 days later
- [ ] Final backup

## Quick shortcuts

| Where | Keys | Action |
|---|---|---|
| During an exam | `1` `2` `3` `4` | Select answer A to D (toggles on multiple-response questions) |
| During an exam | `N` / `P` | Next / previous question |
| During an exam | `M` | Mark or unmark for review |
| Drill / sandbox terminal | `Enter` | Run the command |
| Drill / sandbox terminal | `↑` `↓` | Recall command history |
| Drill / sandbox terminal | `?` | IOS help |
| Mobile menu open | `Esc` | Close the menu |
| Anywhere | Browser Back / Forward | Move between sections |

Exam shortcuts are ignored while a text field is focused and when Ctrl, Cmd or Alt is held, so Ctrl+P (print) and Ctrl+N are safe.
