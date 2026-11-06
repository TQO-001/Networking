# OT Presentation: Talking Points (60 min)

**Presenter:** Thulani Langa | **Audience:** OT Network Engineering Department | **Deck:** 23 slides + md notes + 3 live demos

> How to use this: tick each box as you finish it. Each segment has the same layout: **Slides / Time / Notes to open**, then **SAY**, then **SHOW**, then **BRIDGE** (the sentence that gets you to the next segment). If you lose your place, read the BRIDGE line of the last segment you finished.

---

## 0. Before you start

### 0.1 Pre-flight checklist (do this the day before, and again 10 min before)
- [ ] Deck open on slide 1, in presenter mode, backup copy on a USB stick
- [ ] Obsidian vault open (`Networking/`), starred or pinned the notes in section 0.3 so you are not hunting for files
- [ ] **Driller Bill** (web app) running and tested, logged in or local data loaded, one drill pre-selected
- [ ] **Driller Bill terminal version** (`ios_simulator`, run with `python3 main.py`) tested once
- [ ] **Spinning Jenny** open with the Sun Daddy network ready to rebuild or pre-built as a fallback
- [ ] **Holly Bibley** open with `topology_exports/01-mcc_room.holly-bibley.json` ready to import
- [ ] Screenshots of each demo saved as a fallback in case the live demo fails
- [ ] Water, phone on silent, notifications off on the presenting machine
- [ ] Clock or timer visible (see timing table below)

### 0.2 Timing table (one-glance version)

| # | Segment | Slides | Minutes | Start at |
|---|---|---|---|---|
| 1 | Opening and background | 1-4 | 3 | 0:00 |
| 2 | Tasks overview | 5-6 | 2 | 0:03 |
| 3 | Task 01 + Driller Bill (**DEMO 1**) | 7-11 | 11 | 0:05 |
| 4 | Task 02: Industrial switch | 12 | 2 | 0:16 |
| 5 | Task 03 + Spinning Jenny (**DEMO 2**) | 13-14 | 10 | 0:18 |
| 6 | Task 04 Home Assistant + Task 05 Thin clients | 15-16 | 5 | 0:28 |
| 7 | Task 06: Raspberry Pi, Node-RED, OPC UA | 17 | 5 | 0:33 |
| 8 | Task 07: Access points | 18 | 4 | 0:38 |
| 9 | Task 08: Switch reconfiguration | 19 | 2 | 0:42 |
| 10 | Task 09: Server diagnosis | 20 | 3 | 0:44 |
| 11 | Mapping the network + Holly Bibley (**DEMO 3**) | 21-22 | 7 | 0:47 |
| 12 | The future + close | 23 | 3 | 0:54 |
| 13 | Questions | | 3-6 | 0:57 |

**Checkpoints:** you should be at Task 03 by **0:18**, at Task 06 by **0:33**, and at Holly Bibley by **0:47**. If you are more than 3 minutes behind at any checkpoint, use the cut list in section 14.

### 0.3 Notes to have open in tabs (all under `01-Notes/01-Beginner/02-Industrial_Networking/`)
- [ ] `01-Tasks/01-Switch_Configuration/01-Switch_Configuration.md`
- [ ] `01-Tasks/03-Adding_A_Server_To_A_Network/05-firewall_configuration.md` (the EtherChannel section)
- [ ] `01-Tasks/05-Setting_Up_A_Thin_Client/01-thin_client_setup.md`
- [ ] `01-Tasks/06-RaspBerry_Pi_Configuration/07-mistakes_and_stuff.md`
- [ ] `01-Tasks/07-Setting_Up_Access_Point/04-shadowing.md`
- [ ] `01-Tasks/09-Server-Diagnoses/03-troubleshooting.md`
- [ ] `00-Holly_Bibley/Dept_34/00-sl7_index.md` and `09-open_issues_and_questions.md`

### 0.4 Fix these on the slides before you present
These are small, but a technical audience will notice them.
- [ ] **Slide 3:** "Who me is?" (typo)
- [ ] **Slide 4:** looks like an empty photo slide, add the photo or remove the slide
- [ ] **Slide 8:** "a almost perfect copy" should be "an almost perfect copy"
- [ ] **Slide 11:** "Packet Tracker" should be "Packet Tracer"
- [ ] **Slides 6, 12, 18:** "a industrial switch", "a Access Point" should be "an"
- [ ] **Slide 20:** says the server's "power pins were disconnected from the motherboard". Your notes say the **front-panel header pins (power switch, reset, power LED)** were unseated. Say it that precisely, because "power pins" sounds like the PSU connector.
- [ ] **Slide 22:** the text is written in the second person ("a tool you're developing"). Rewrite it as "a tool I'm developing".
- [ ] **Agenda (slide 2) lists "03-The future" but there is no future slide.** Add one. A draft is in segment 12.
- [ ] Slide 18 says the HMI was on the "commercial network". Decide in advance how you want to word that, since your audience works there.

---

## 1. Opening and background

**Slides:** 1-4 | **Time:** 3 min | **Notes to open:** none
- [ ] Done

**SAY**
- [ ] Greet the room and say what this is: a walkthrough of what you have done since you started, task by task, plus three tools you built along the way.
- [ ] Say the structure out loud so people can relax: "Three parts: background, tasks completed, and the future. About 55 minutes, with questions at the end. I will be switching between the slides, my notes, and three live demos."
- [ ] Background (slide 3-4), keep it to 60-90 seconds. Suggested beats:
  - Who you are, your route into IT and OT, and that you work as an IT technician.
  - You are new to industrial networking, so each task started with "learn how it works first, then do it".
  - Your approach in one line: **learn the theory, write it down, practise, then do the real thing.** Everything in the notes follows that pattern.
- [ ] Set expectations on tone: some tasks were practice, some were real plant work, and some were shadowing. You will say which is which.

**BRIDGE:** "Let me show you the full list of what I have worked on."

---

## 2. Tasks overview

**Slides:** 5-6 | **Time:** 2 min | **Notes to open:** none
- [ ] Done

**SAY**
- [ ] Slide 6 is the whole journey on one page. Point out the **three types of task** so people can sort them as you go:
  - **Practice** (01, 02, 03): learning on lab gear, nothing live.
  - **Real or shadowed plant work** (05, 07, 09): the first work that was not for practice.
  - **Ongoing or in progress** (03.5 firewall, 04 Home Assistant, 10 mapping the network).
- [ ] Mention the two side projects at the bottom: **Driller Bill** and **Holly Bibley**, plus **Spinning Jenny** which appears inside task 03. Tell them you will demo all three.
- [ ] Be upfront that 03.5 (firewall configuration) is marked "to be continued" and not finished.

**BRIDGE:** "I will start where I started: a Cisco switch and a lot of commands."

---

## 3. Task 01: Switch configuration and Driller Bill

**Slides:** 7-11 | **Time:** 11 min (about 4 min on slides, 6-7 min demo) | **Notes to open:** `01-Switch_Configuration.md`
- [ ] Done

**SAY (slide 7, about 2 min)**
- [ ] The first task: a **Cisco Catalyst IE-3300 rugged switch** to get comfortable with the Cisco CLI.
- [ ] The brief was concrete: rename the switch to `IND-ED-TEST`, create VLANs 10-50 with one port each (one named MGMT), give the MGMT VLAN `192.168.10.2/24`, and enable SSH and Telnet.
- [ ] Alongside it you worked through **15 drill exercises** (the list on the slide). You can group them for the audience rather than reading all 15:
  - Recovery: boot and password recovery, factory reset, IOS image and flash, backup and rollback.
  - Core switching: VLANs, trunking and native VLANs, EtherChannel and LACP.
  - Protection: port security, STP PortFast and BPDU Guard, DHCP snooping and DAI.
  - Awareness: VTP and the revision number trap, CDP and LLDP, inter-VLAN routing.
- [ ] One example worth telling: **the VTP revision number trap** (drill 12). A switch with a higher revision number can overwrite the VLAN database of the whole domain. It is a classic reason to understand a feature before using it.
- [ ] A line from your notes worth repeating: some objectives are not used in a real environment, but understanding **why** something is or is not used is the point.

**SHOW:** open `01-Switch_Configuration.md`, scroll to the "Concepts explored" list and the `show running-config` output. Do not read it, just show that it exists and is documented.

**SAY (slide 8, about 1 min): why Driller Bill exists**
- [ ] At work you had the switch. At home you did not. Packet Tracer worked but was slow for just practising commands.
- [ ] So you built a fake Cisco IOS CLI in Python: real prompts, real-looking output, real-looking errors, and no hardware, GNS3 or licence needed.

**DEMO 1a: the terminal version (about 1 min)**
- [ ] Run `python3 main.py`, choose **Switch**.
- [ ] Show the prompt changing: `Switch>` then `enable` then `Switch#` then `configure terminal` then `Switch(config)#`.
- [ ] Type one deliberately wrong command to show the IOS-style `% Invalid input detected at '^' marker.` error.
- [ ] Set a VLAN or an IP, then run `show vlan brief` to show that **state persists** and shows up in `show` commands.
- [ ] Say: "That was version one. It was a terminal program with no dependencies."

**SAY (slide 9): the AI warning slide (about 30 sec)**
- [ ] Keep the humour, then be straightforward: yes, you used AI to expand Driller Bill, and you want to be clear about it.
- [ ] Draw the line honestly. A useful framing: **AI helped build the tools, the plant knowledge and the hands-on tasks are yours.** Your notes file for the Pi (`07-mistakes_and_stuff.md`) even carries a disclaimer that it was AI-compiled from your real mistakes. That kind of labelling is a good habit to mention.

**SAY (slides 10-11, about 1 min)**
- [ ] Enhancement 1: the drills are built in. Three modes: **Learn** (concept explained), **Simulate** (watch the commands execute in real time), **Drill** (you do it).
- [ ] Enhancement 2: a GUI, and a simple network simulation without Packet Tracer.

**DEMO 1b: the web app (about 4 min)**
- [ ] Open **Guided drills** and pick one (suggested: *VLANs & Access Ports* or *Trunking & Native VLANs*, since they match tasks you did).
- [ ] Show the three modes in order: **Learn**, then **Simulate**, then **Drill**. Run a few commands in Drill mode.
- [ ] Open **CLI Lab** and show a repair case on a live IOS device. The guide names these cases: `vlan20-trunk`, `server-access`, `recover-trunk`. `recover-trunk` is a good one to fix on screen.
- [ ] If time allows, flash the **Topology workbench** to show "build and trace your own network".
- [ ] Mention the scale in one sentence: it is a CCNA 200-301 study platform with timed exams, a mistake bank, spaced-repetition review, and 22 command-drill modules. It stores data locally on the device by default, with optional cloud sync.
- [ ] **If the demo breaks:** use the screenshots, and say "this is what you would see".

**BRIDGE:** "After practising on the CLI, the next task was getting a real industrial switch into a working state."

---

## 4. Task 02: Setting up an industrial switch

**Slides:** 12 | **Time:** 2 min | **Notes to open:** `02-Setting_Up_A_Industrial_Switch/03-hardware_installation_guide.md`
- [ ] Done

**SAY**
- [ ] Hardware: **Cisco Catalyst IE-3300** with a **PWR-IE240W-PCAC-L** power supply (54V DC output, DIN-rail mounted).
- [ ] Same method as before: write the essential theory first. Your notes cover electricity basics, AC versus DC, wire gauge (AWG), terminal blocks and torque, and DIN rail mounting.
- [ ] What the task covered: install, verify the boot-up sequence, configure, connect to other devices.
- [ ] One good story: the equipment arrived **with no cables**. Your unboxing note flags this as something that matters later, because you still need a console cable, power wiring, and the right SFPs.
- [ ] Safety and honesty: your own notes say AC power connections should be made by **qualified personnel**. Say that this is documentation of the procedure and the safety rules, and that you rely on qualified colleagues for the live AC terminations.
- [ ] A technical detail worth knowing: the IE-3300's DC input is rated 9.6-60V, but you need **48V for PoE and 54V for PoE+**, which is why the 54V supply is the recommended match.

**SHOW:** the hardware installation guide, scrolled to the safety section.

**BRIDGE:** "That was one switch. The next task was the biggest one: a whole network built around a server."

---

## 5. Task 03: Adding a server to a network, and Spinning Jenny

**Slides:** 13-14 | **Time:** 10 min (about 5 min on the task, 5 min demo) | **Notes to open:** `03-Adding_A_Server_To_A_Network/01-sun_daddy_network_task.md`, then `05-firewall_configuration.md`
- [ ] Done

**SAY (slide 13, about 5 min)**
- [ ] Your own note calls this the biggest task: "once you can do this, you should be ready to work in the plant".
- [ ] The brief: reload an **HPE ProLiant DL360p Gen8**, install the OS, create **3 VMs** on **RAID 5**, set up a **virtual firewall**, and make the network talk. Final test: ping VM3 from a laptop.
- [ ] Devices: two switches (an IE-3300 and an IE-3000), the server, and a laptop.
- [ ] The design, simply:
  - **VLAN 10:** management only. Switches and the ESXi host live here. The firewall deliberately has no interface here, so a mistake in production traffic cannot take down management.
  - **VLAN 12:** VM1 and VM2.
  - **VLAN 11:** VM3.
  - A **pfSense VM** with one virtual NIC per VLAN routes between 11 and 12.
- [ ] A detail that shows thinking: the two laptop identities you first planned could not prove the task, because neither crossed the firewall. You added a third identity on VLAN 12 so that "laptop to VM3" really goes **laptop, firewall, VM3**. Only a ping that crosses the firewall proves routing.
- [ ] **The bug story (tell this one, it is your best):**
  - You bonded three server NICs into an EtherChannel with LACP and got `LACP currently not enabled on the remote port`.
  - Cause: ESXi's free standard vSwitch **does not support LACP**. That needs a distributed switch, which needs vCenter.
  - Fix, in two parts that must go together: switch the Cisco side to static (`channel-group 1 mode on`), and set the ESXi teaming policy to **Route based on IP hash**.
  - Lesson: a bad EtherChannel makes the firewall **look** broken even when every rule is right. Check the physical and link layer before blaming the firewall.
- [ ] Small honesty points you can include: pfSense still labels the internal interface "WAN" because the installer forces one, and the switches still carry a leftover default gateway you documented as harmless.

**SHOW:** open `05-firewall_configuration.md` at the EtherChannel section ("Why It Broke Routing, and the Fix"). Show the `%ETC-5-L3DONTBNDL2` error line, then the fix.

**SAY (slide 14: Spinning Jenny, about 1 min)**
- [ ] Motivation, in your words: you struggled to make networks communicate because you did not understand the firewall setup, and you did not want to struggle like that again.
- [ ] What it is: a quick way to **plan** a network, showing how things connect, which network(s) each device is on, and how they communicate. A simpler alternative to Packet Tracer.
- [ ] Be clear about what it is not: it is a planning tool, not a full simulator.

**DEMO 2: Spinning Jenny (about 4 min)**
- [ ] Rebuild the Sun Daddy network on the canvas: two switches, the server, the pfSense firewall, VM1, VM2, VM3, the laptop. Use VLAN 10, 11, 12.
- [ ] Show the **packet trace**: laptop on VLAN 12 to VM3 on VLAN 11, passing through the firewall. This is the same ping from the task.
- [ ] Show the **config generator** and the **hypervisor setup guide** if they apply to this topology.
- [ ] Close with: "If I had this before the task, the VLAN plan would have taken minutes, not days."
- [ ] *(Adjust the clicks above to match the real UI of the app. I have not seen it, only your description of it.)*

**BRIDGE:** "That was lab and practice work. The next two tasks are where it got real."

---

## 6. Tasks 04 and 05: Home Assistant and thin clients

**Slides:** 15-16 | **Time:** 5 min (1.5 + 3.5) | **Notes to open:** `04-Home-Assistant/02-maintenance.md`, `05-Setting_Up_A_Thin_Client/01-thin_client_setup.md`
- [ ] Done

**SAY: Home Assistant (slide 15, about 1.5 min)**
- [ ] Ongoing maintenance, not a one-off build. You look for problems, fix them, update software, and repair old **Node-RED** configurations.
- [ ] Examples from your notes: dashboard cards showing "entity unavailable" for some energy and power meter readings, and a missing entity for an aircon switch.
- [ ] Be honest about the state: the aircon entity is **semi-resolved**. You could match it to an existing entity but could not turn it on.
- [ ] Why it matters: this is where you first met Node-RED, which pays off in task 06.

**SAY: Thin clients (slide 16, about 3.5 min)**
- [ ] **This is the first task that was not for practice.** Say that plainly.
- [ ] Hardware in your notes: HP thin clients that become operator screens.
- [ ] Summarise the 15 steps into 5 stages, instead of reading the slide:
  1. **Identify:** pick the name and label the unit with the name and IP.
  2. **Network:** admin mode, static IP on the `192.168.193.0` network, naming convention, VNC, ping the gateway `192.168.193.1`.
  3. **Application:** Ignition server at `192.168.193.2:8088`, Perspective, launch the CCL2 SCADA project, pick the process that matches the device name, copy its link.
  4. **Lock down:** browser kiosk mode, rename to `CCL2-[Process]`, remove tabbing, home, back and forward.
  5. **Resilience:** auto-start on boot and auto-reconnect if closed.
- [ ] The why behind the kiosk lockdown: operators should see one process screen and nothing else, and it should always come back up by itself.

**SHOW:** `01-thin_client_setup.md` and one or two of the screenshots (IP configuration, kiosk setup).

**BRIDGE:** "The most enjoyable task was the one where I got to build a small piece of OT end to end: sensor to data."

---

## 7. Task 06: Raspberry Pi, Node-RED and OPC UA

**Slides:** 17 | **Time:** 5 min | **Notes to open:** `06-RaspBerry_Pi_Configuration/06-sensor_setup.md`, `07-mistakes_and_stuff.md`
- [ ] Done

**SAY**
- [ ] Three parts, and say them as a pipeline: **Pi setup** (desktop and remote access) with a **temperature and humidity sensor** (Grove AM2302 / DHT22), then **Node-RED** reading the sensor and showing a dashboard, then an **OPC UA server** so industrial clients can read the data.
- [ ] Why it matters for OT: OPC UA is the standard way industrial systems exchange data. Doing this on a cheap single-board computer makes the idea concrete.
- [ ] How you checked it worked: you connected a client (UaExpert in your notes) to the OPC UA server and read the live values.
- [ ] **The best lesson (tell this one):**
  - Reading the sensor from a Python script kept failing with timeouts ("GPIO timing pulse missed").
  - The DHT22 sends pulses lasting tens of microseconds. Python on a normal Linux system gets paused by the scheduler and misses them.
  - Fix: let the **kernel driver** handle the timing (a device tree overlay) and read the result from a file.
  - Lesson in one line: **when a protocol is timing-critical, let the layer closest to the hardware handle it.**
- [ ] Mention that you kept a "mistakes" file deliberately, with every failure recorded, so the next one is faster to recognise.

**SHOW:** `07-mistakes_and_stuff.md` (headings only, to show how many real problems it records), then one dashboard or flow screenshot from the `images/` folder.

**BRIDGE:** "Next, the first time I touched the actual plant network."

---

## 8. Task 07: Access points

**Slides:** 18 | **Time:** 4 min | **Notes to open:** `07-Setting_Up_Access_Point/04-shadowing.md`
- [ ] Done

**SAY**
- [ ] **The problem:** the existing wireless link (a Data Eagle industrial radio) could not carry multiple VLANs at once. As a result an **HMI had to be connected to the commercial network** instead of the OT network. That does not meet segmentation requirements.
- [ ] **The solution:** a pair of **Moxa industrial wireless access points** acting as a bridge, to put the HMI back on the OT VLAN.
- [ ] **What you did:** configured a switch and the two APs in advance, then shadowed your mentor on site. Slave unit in the server rack, master at the HMI, a temporary test access port on the switch.
- [ ] A practical lesson: the master and slave had to be **swapped**, because the position that needed a power supply was not the one you planned. That was not in your documentation beforehand, so you updated it.
- [ ] **Be honest about the status.** Your own shadow report says: initial link test passed (units could ping), but there are two open items, **intermittent drops** and a **network address range** problem (the range used was reserved for routers and firewalls), and commissioning is still pending. A fair summary: "the bridge works in principle and tests well, and the remaining work is stability and commissioning."
- [ ] Say what you learned about segmentation: a single device on the wrong network undermines the whole design.

**SHOW:** the progress tracker checklist in `04-shadowing.md` (it already uses ticked and unticked boxes).

**BRIDGE:** "Then I went back to switches, but not for learning."

---

## 9. Task 08: Switch reconfiguration

**Slides:** 19 | **Time:** 2 min | **Notes to open:** `08-Switch_Configuration/02-issues_and_changes.md`
- [ ] Done

**SAY**
- [ ] "Back to basics?" No. This task was resetting **two already-configured switches** and rebuilding them to a **reference configuration**.
- [ ] Why you call it the hardest: it is real configuration, not a learning exercise, and every concept in it is worth exploring further.
- [ ] A concrete example of what made it hard: you were on a **Catalyst 9200L** this time, an enterprise switch, not an industrial one. Two `errdisable recovery` causes you expected (`link-monitor-failure`, `oam-remote-failure`) **do not exist on that platform**, and your notes record that.
- [ ] Another one: `no aaa new-model` was already set in the initial configuration, and you documented it as worth noting.
- [ ] The takeaway: **commands and features differ by platform**, so a reference config is a starting point, not copy-paste.

**SHOW:** `02-issues_and_changes.md`, the `errdisable recovery cause ?` output.

**BRIDGE:** "The last hands-on task was a very different kind of problem: a server that would not turn on."

---

## 10. Task 09: Server diagnosis

**Slides:** 20 | **Time:** 3 min | **Notes to open:** `09-Server-Diagnoses/03-troubleshooting.md`
- [ ] Done

**SAY**
- [ ] Shadow task. You and your mentor went to collect a server reported as not working.
- [ ] The symptom: network link lights came on, but the machine had **no power LED, no fan, no POST**.
- [ ] **Root cause:** the **front-panel header pins** (power switch, reset, power LED) were unseated from the motherboard. Reseating them fixed the power-on. Say it exactly like this, and not "power pins".
- [ ] But that was not the only fault. Your notes list: coil whine after about 5 minutes, a VGA port that only worked at a certain angle, and a Windows XP boot loop.
- [ ] Decision: **back up the hard drive and replace the server.** The replacement had to offer enough **legacy PCI slots** for the data-acquisition cards (your notes mention National Instruments PCI cards).
- [ ] Your note to remember and to say aloud: on legacy industrial systems, a boot loop often signals a failing drive, so **clone the disk before any repair or write operation**.
- [ ] First time with legacy systems: **activating Windows XP** and installing the drivers.

**SHOW:** the "Step-by-Step Diagnostic Routine" and the "Critical Data Preservation Notice" in `03-troubleshooting.md`.

**BRIDGE:** "All of that was single devices. The last piece is the whole picture: mapping the network."

---

## 11. Mapping the network and Holly Bibley

**Slides:** 21-22 | **Time:** 7 min (about 3 min talk, 4 min demo) | **Notes to open:** `00-Holly_Bibley/Dept_34/00-sl7_index.md`, `09-open_issues_and_questions.md`
- [ ] Done

**SAY (slide 21, about 2 min): mapping the Hulamin OT network**
- [ ] What you did: connected to the switches, captured the CLI output, and documented how the network is built. The SL7 area alone is **18 Cisco switches**, all managed on VLAN 560, in a **tree**, from 1 hop to **9 hops** deep, with a single link to the plant core.
- [ ] You documented per room and per switch (LV room, electric room, operating desk, A17 and cooling towers, core, and so on), with the raw CLI output kept for all 18.
- [ ] You compared your live captures against the existing diagram. **Frame this carefully and constructively:** "Diagrams drift, that is normal, and the value is knowing exactly where." Examples to mention: some port labels differ, many switch models differ, and a few things are missing from the drawing (the plant core uplink, a Moxa switch, a VMware host, a Siemens PLC network).
- [ ] You turned this into an **open issues list** with checkboxes, so it is a to-do list for correcting the diagram, not a complaint.

**SAY (slide 22: Holly Bibley, about 1 min)**
- [ ] Name: the full plant network documentation is known to your managers as the "Bible", so you named your tool after it.
- [ ] Idea: today the network is documented by hand in Visio. Holly Bibley is a dedicated app for **designing and documenting topologies**, with a longer-term aim of **discovering** the network automatically.
- [ ] The logical diagramming method behind it is in your notes: a horizontal line is a VLAN segment, boxes are devices, labels carry interface, IP and port details.

**DEMO 3: Holly Bibley (about 4 min)**
- [ ] Import `topology_exports/01-mcc_room.holly-bibley.json` (project **MCC_Room**, with VLANs such as 193 *Ignition* and 191 *IND-SL5*).
- [ ] Show the VLANs, the devices on each, and how a device's details show up.
- [ ] Show the **export** to prove the data is portable and can be shared and versioned.
- [ ] Then flip to `SL7_Network.pdf` for contrast: "this is the drawing I compared against."
- [ ] State the honest status: working design and documentation tool today, automatic discovery is the next step.
- [ ] *(Adjust the clicks to the real UI. I have only seen the export file and your description.)*

**BRIDGE:** "So that is where I am. Here is where I would like to go."

---

## 12. The future and close

**Slides:** 23 (and a new future slide, see below) | **Time:** 3 min | **Notes to open:** none
- [ ] Done

**Suggested future slide (add it before "Thank you")**
- Finish the open work: Moxa commissioning, firewall configuration (03.5), correct the SL7 diagram, extend the mapping beyond SL7
- Holly Bibley: feed it from real CLI data (CDP and LLDP neighbours) toward automatic discovery
- Next task: Node-RED (theory notes already written)
- Initiative ideas to discuss: OT security and segmentation, network automation, plant telemetry, asset management and incident response

**SAY**
- [ ] **Near term (things already in motion):** finish the Moxa commissioning with your mentor, continue the firewall task, apply the SL7 diagram corrections, and take the same mapping approach to the rest of the plant.
- [ ] **Tools:** Holly Bibley moving from manual entry toward discovery. A natural first step is reading neighbour data from the switches you already capture (CDP and LLDP are in your drill list).
- [ ] **Learning:** Node-RED for your next task, and building out your notes on the Purdue model and OT fundamentals (that note is still a stub).
- [ ] **Initiatives, as ideas for discussion, not commitments:** you are moving toward an initiative and shadowing phase and would like to propose a few small projects that give the plant measurable value. Four areas you are exploring: **OT security and segmentation** (the Moxa task is a good example of why), **network automation**, **IT/OT telemetry**, and **asset management and incident response**.
- [ ] **Ask the room for something:** "Which of these would be most useful to the department?" That makes the Q&A start with a real question.
- [ ] **Thank people:** your mentor, the people who let you shadow, and the department. Then the "Thank you" slide.

---

## 13. Questions: answers to have ready

- [ ] Read through these once before presenting

**"Did AI write all this?"**
AI helped me build the tools and organise some notes. The tasks, the troubleshooting and the plant work were done by me and my mentors. My notes label AI-compiled material, such as the Pi mistakes file.

**"Why build your own tools instead of using Packet Tracer?"**
Packet Tracer is fine, but it was slow for pure command practice and heavy for quick planning. Building the tools made me understand the concepts better, and they are lighter for what I needed.

**"Is Spinning Jenny a real simulator?"**
No, it is a planning and visualisation tool for VLANs, devices and traffic paths. For real validation I use the actual gear.

**"Is Holly Bibley ready to replace Visio?"**
Not yet. It documents and exports today, and discovery is the next step. I would pitch it as a complement first.

**"What would you do differently?"**
Read the platform documentation before assuming a feature exists (the 9200L errdisable example), and document hardware constraints such as power and cabling before going on site (the Moxa master and slave swap).

**"Is the Moxa bridge finished?"**
It tested well and meets the requirement in principle. Intermittent drops, the address range, and commissioning are still open.

**"How do you avoid breaking production?"**
I practise on lab gear first, I shadow on live work, and I follow my mentor's change process. I have not made unsupervised changes to live plant equipment. *(Say this only if it is true for you.)*

**"Why static EtherChannel and not LACP?"**
ESXi's free standard vSwitch does not support LACP. The static bundle plus IP-hash teaming is what matches.

**"What about electrical work?"**
I documented the wiring procedure and safety rules. Live AC terminations are for qualified personnel.

**"Which Purdue level is the Moxa bridge at?"**
Be ready to say that your Purdue notes are still a stub, and that you would confirm with your mentor. It is better to say that than to guess.

---

## 14. If you are running late: cut list (in this order)

- [ ] 1. Skip Demo 1a (terminal version), go straight to the web app. Saves about 1 min.
- [ ] 2. Cut slide 7's grouping of all 15 drills down to a single sentence. Saves about 1 min.
- [ ] 3. Shorten Task 04 Home Assistant to one sentence. Saves about 1 min.
- [ ] 4. Skip the config generator in the Spinning Jenny demo. Saves about 1 min.
- [ ] 5. Skip the Topology workbench flash in Demo 1b. Saves about 1 min.
- [ ] 6. Compress Task 02 to 60 seconds. Saves about 1 min.

**If you are running early:** extend Task 06 (show the OPC UA client reading live values), or show the `Dept_34` index with the full 18-switch inventory.

---

## 15. Progress tracker for the day

- [ ] 1. Opening and background
- [ ] 2. Tasks overview
- [ ] 3. Task 01 + Driller Bill (Demo 1)
- [ ] 4. Task 02
- [ ] 5. Task 03 + Spinning Jenny (Demo 2)
- [ ] 6. Tasks 04 and 05
- [ ] 7. Task 06
- [ ] 8. Task 07
- [ ] 9. Task 08
- [ ] 10. Task 09
- [ ] 11. Mapping + Holly Bibley (Demo 3)
- [ ] 12. Future + close
- [ ] 13. Questions
