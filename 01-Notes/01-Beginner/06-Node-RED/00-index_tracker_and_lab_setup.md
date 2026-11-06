# 00 - Index, Tracker and Lab Setup

**Goal:** Get good enough at Node-RED + Home Assistant (HA) to work on your workplace system and put it on your CV.
**Based on:** your workplace `flows.json` (8 tabs: Modbus power meter, MQTT → HA sensors, lights, aircons, rec fans, SQL transfer).
**Replaces:** the earlier single-file `04-Node-RED-Practice-Projects.md`. This set is more detailed and split into one file per project.

---

## HOW EVERY PROJECT FILE IS LAID OUT (identical each time)

| Section | Meaning |
|---|---|
| PROGRESS | Checkboxes for that project |
| 1. WHY THIS MATTERS | Link to your work and your CV |
| 2. CONCEPTS | The theory you need, short |
| 3. LAPTOP (Windows) | Home practice, step by step |
| 4. WORK PI / HOME ASSISTANT | What changes at work, and the safety rules |
| 5. CHECKPOINT | How you know it works |
| 6. COMMON MISTAKES | Fixes for things that usually go wrong |
| 7. STRETCH | Optional extras |
| 8. SELF-TEST | Questions to answer without looking |
| 9. DONE | Tick, then go to the next file |

**Rule:** one project per sitting (30 to 90 minutes). Stop at the checkpoint, tick the box, rest.

---

## MASTER TRACKER

### Phase 1 - Node-RED foundations (no Home Assistant needed)
- [ ] 01 - Workplace Flows Walkthrough (read-only, no building)
- [ ] 02 - Node-RED Basics
- [ ] 03 - Fake Sensor, Alerts and Dashboard
- [ ] 04 - MQTT and Python Devices

### Phase 2 - Home Assistant + Sonoff-style devices (mirrors your work tabs)
- [ ] 05 - Home Assistant Lab and Node-RED Connection
- [ ] 06 - Sensor Triggers and Thresholds (mirrors "Engineering Offices Aircons")
- [ ] 07 - Switch Control and Schedules (mirrors "Lights", "Rec Fan", "Aircons")
- [ ] 08 - Motion-Activated Lights (mirrors "Lights" motion section)

### Phase 3 - Industrial data and data movement
- [ ] 09 - Modbus Power Meter (mirrors "Office Power Meter", "Power Meter")
- [ ] 10 - Publishing Data into Home Assistant (mirrors "MQTT" tab)
- [ ] 11 - SQL Data Transfer (mirrors "HASS & OPCUA Data Transfer")

### Phase 4 - Professional finish
- [ ] 12 - Refactoring and Reliable Flows
- [ ] 13 - Raspberry Pi Deployment
- [ ] 14 - Capstone: Smart Office Monitor
- [ ] 15 - CV and Portfolio

**Suggested pace:** 2 projects a week → about 8 weeks. Faster is fine; skipping the checkpoints is not.

---

## YOUR TWO ENVIRONMENTS

| | HOME (laptop) | WORK (Pi / live HA) |
|---|---|---|
| OS | Windows | Raspberry Pi 4 Model B (and the HA system) |
| Risk | None. Break anything | Real lights, aircons, meters. Be careful |
| Devices | Fake ones (helpers, Python scripts) | Real Sonoff/Tasmota/Zigbee devices |
| Goal | Learn and experiment | Observe, then make approved changes only |

### Work safety rules (apply to every project)
- [ ] Ask your manager before installing, changing or deploying anything at work.
- [ ] **Export a backup of `flows.json` before touching anything** (Menu → Export → all flows, save with the date).
- [ ] Do your work in a copy of a tab or a new tab named `PRACTICE - <your name>`. Never edit a live tab directly.
- [ ] Never call a service on a real light/aircon/fan unless you have permission and know who is affected.
- [ ] Prefer read-only nodes at work: `events: state`, `poll state`, `current state`, `get entities`.
- [ ] Do not copy the workplace `flows.json` to your personal computer, GitHub or cloud tools. It contains internal IP addresses, database queries and staff names. Build your own version for your portfolio (see file 15).

---

## LAB SETUP

You have two ways to run Home Assistant at home. Pick ONE (A is closer to work).

| Option | What | Pros | Cons |
|---|---|---|---|
| **A. HA OS in a virtual machine** | Run Home Assistant OS in VirtualBox (or Hyper-V) | Has the Add-on store: Node-RED add-on and Mosquitto add-on, exactly like work | Needs about 4 GB RAM and 32 GB disk |
| **B. HA Container in Docker** | Run Home Assistant in Docker Desktop, Node-RED on Windows | Lighter | No add-on store, so Node-RED and Mosquitto run separately |

Projects 02 to 04 and 09 work with standalone Node-RED on Windows regardless of the option you choose.

### Step 1 - Node-RED on Windows (needed for both options)
- [ ] Install Node.js LTS from nodejs.org.
- [ ] PowerShell: `npm install -g --unsafe-perm node-red`
- [ ] Start: `node-red` then open `http://localhost:1880`
- [ ] Your flows live in `C:\Users\<you>\.node-red\flows.json`.

Palette nodes you will install over the projects (Menu → Manage palette → Install):

| Palette package | Used in |
|---|---|
| `@flowfuse/node-red-dashboard` | 03, 09, 14 |
| `node-red-contrib-home-assistant-websocket` | 05 to 14 |
| `node-red-contrib-eztimer` | 07, 14 |
| `node-red-contrib-modbus` | 09, 14 |
| `node-red-contrib-mssql-plus` (SQL Server) or `node-red-node-sqlite` | 11 |

### Step 2 - Python tools
- [ ] Make a folder `C:\node-red-lab` for your scripts.
- [ ] PowerShell: `pip install "paho-mqtt>=2.0" "pymodbus==3.6.9"`

### Step 3 - MQTT broker (Mosquitto)
- [ ] Windows: install Mosquitto from mosquitto.org, then see file 04 for the config lines.
- [ ] Option A lab: use the HA **Mosquitto broker** add-on instead (file 05 and 10).

### Step 4 - Home Assistant lab (file 05 walks you through it)
- [ ] Option A: HA OS VM + Node-RED add-on + Mosquitto add-on.
- [ ] Option B: HA Container in Docker + long-lived access token.

---

## HOME ASSISTANT VOCABULARY (read once)

| Term | Meaning | Example from your workplace flows |
|---|---|---|
| Entity | One thing HA tracks (a switch, a sensor) | `switch.tasmota_2` |
| `entity_id` | Its unique id: `domain.name` | `binary_sensor.kitchen_ms01_iaszone` |
| Domain | The type of entity | `switch`, `sensor`, `binary_sensor` |
| State | The current value, always a string | `"on"`, `"off"`, `"22.4"` |
| Attributes | Extra data on the entity | unit, battery, friendly name |
| Service / Action | A command you can call | `homeassistant.turn_on` |
| Integration | Support for a device brand/protocol | MQTT, ZHA, Tasmota |
| Helper | A fake/virtual entity you create | toggle (on/off), number |
| Add-on | An app that runs next to HA OS | Node-RED, Mosquitto |

### Sonoff in plain words
Sonoff is a hardware brand. In your flows you can see two kinds:
- **Tasmota-flashed switches** (entities like `switch.tasmota_2`) that control aircons, lights and fans.
- **Zigbee sensors** that look like Sonoff SNZB models: temperature/humidity (entity names containing `th01`) and motion (names containing `ms01`, `iaszone`).

Switches report `on`/`off`. Motion sensors report `on` (motion) / `off` (clear). Temperature sensors report a number as text.

---

## FILES IN THIS SET

| File | Topic |
|---|---|
| 00 | This file |
| 01 | Workplace flows walkthrough |
| 02 | Node-RED basics |
| 03 | Fake sensor, alerts, dashboard |
| 04 | MQTT and Python devices |
| 05 | Home Assistant lab and connection |
| 06 | Sensor triggers and thresholds |
| 07 | Switch control and schedules |
| 08 | Motion-activated lights |
| 09 | Modbus power meter |
| 10 | Publishing data into Home Assistant |
| 11 | SQL data transfer |
| 12 | Refactoring and reliable flows |
| 13 | Raspberry Pi deployment |
| 14 | Capstone: smart office monitor |
| 15 | CV and portfolio |

- [ ] Index read. Next: **01 - Workplace Flows Walkthrough**.
