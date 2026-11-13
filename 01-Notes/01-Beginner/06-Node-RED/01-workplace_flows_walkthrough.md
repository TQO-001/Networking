# 01 - Workplace Flows Walkthrough

**Time:** 60 to 90 minutes (reading only) | **Difficulty:** Easy | **Needs:** your uploaded `flows.json`
**Mirrors:** all 8 tabs and the 1 subflow in your workplace export
**Rule:** this file is read-only. Do not change anything on the live system.

---

## PROGRESS
- [ ] Opened the flows on the LAPTOP in a throwaway Node-RED (see section 3)
- [ ] Read the map of the 8 tabs
- [ ] Traced one flow end to end per tab
- [ ] Read the "worth verifying" list and noted questions for my manager
- [ ] Answered the self-test

---

## 1. WHY THIS MATTERS
Learning from your own workplace flows is the fastest route to being useful at work. Every project in this set copies a pattern you will find here, so you will recognise it when you see it on the job.

---

## 2. CONCEPTS: THE MAP

Your export has 8 tabs, 1 subflow and about 190 nodes. Summary:

| Tab | What it does | Main nodes | Practice file |
|---|---|---|---|
| **Office Power Meter** | Reads a power meter over Modbus TCP (currents A/B/C/avg, voltage, active power, energy kWh), shows gauges, publishes each value to MQTT | inject, function, modbus-flex-getter, modbus-response, ui_gauge, mqtt out | 09, 10 |
| **MQTT** | Receives those MQTT values (topics like `PM3001`) and creates Home Assistant sensors with units | mqtt in, ha-sensor | 10 |
| **Power Meter** | Test/diagnostic flow: reads single registers from the meter | inject, function, modbus-read | 09 |
| **Engineering Offices Aircons** | If the engineering office temperature is at or above a limit for a few minutes, switch an aircon on; also polls the temperature every 60 s | events: state, poll state, current state, call service | 06 |
| **Lights** | Motion sensors turn passage and kitchen lights on for a few minutes; timers switch some passage lights on/off daily; light switches also turn aircons on/off; late-night control turns off lights when there has been no motion | events: state, trigger, call service, eztimer | 07, 08 |
| **Rec Fan** | Timers switch recirculation fans on and off | eztimer, call service | 07 |
| **Aircons** | Timers switch office aircons on and off | eztimer, call service | 07 |
| **HASS & OPCUA Data Transfer** | Moves values between MQTT, Home Assistant and a SQL Server database | mqtt in, function, api-current-state, MSSQL | 11 |
| **Subflow: Schneider PowerLogic PM5110** | A reusable block that reads a block of registers and converts them to named values (currents, voltages, power, THD, and so on) | modbus-flex-getter, functions, delay, join, change | 09, 12 |

---

### Pattern 1: Modbus power meter (tab "Office Power Meter")
```
inject (Pulse Source)
   -> function  (builds a Modbus request)
   -> modbus-flex-getter  (talks to the meter)
   -> modbus-response
   -> function  (converts two 16-bit registers into a decimal number)
   -> ui_gauge  +  mqtt out
```
- The request function sets: function code **3** (read holding registers), a unit id, a start **address** (for example 3001), and a **quantity of 2**, because one decimal number needs two registers.
- The conversion function reads a 4-byte **big-endian float** (`readFloatBE`) and rounds it to 2 decimals with `toFixed(2)`.
- Six values are read this way, each with its own request and conversion function. That repeated structure is a good refactoring exercise (file 12).

### Pattern 2: MQTT into Home Assistant (tab "MQTT")
```
mqtt in (topic PM3001)  ->  ha-sensor (name + unit "A")
```
Each `ha-sensor` is tied to a **ha-entity-config** that sets name and unit of measurement. This is how a Modbus value becomes a real HA sensor you can chart or use in automations.

### Pattern 3: Threshold control (tab "Engineering Offices Aircons")
```
events: state (temperature sensor, >= 22 for 2 minutes, only on change)
   output 1 -> debug + "Aircon on"
   output 2 -> (unused)
```
Two outputs: output 1 fires when the condition is true, output 2 when it is false.

### Pattern 4: Motion lights (tab "Lights")
```
events: state (motion sensor is "on")
   -> trigger (send turn_on now, send turn_off after 4 minutes, extend timer on new motion)
   -> call service (light switch)
```
Several motion sensors can share one trigger, so any movement extends the timer.

### Pattern 5: Schedules (tabs "Lights", "Rec Fan", "Aircons")
```
eztimer (on time / off time, days of week, optional dawn/dusk)
   -> call service (turn_on / turn_off)
```
The eztimer nodes use your Home Assistant home zone for latitude/longitude so sunrise and sunset can drive the schedule.

### Pattern 6: Linked behaviour
Light switch off/on → aircons off/on. So aircons follow the lights in some offices.

---

## 3. LAPTOP (Windows) - STEP BY STEP (safe, read-only exploration)

You are going to look at the workplace flows without letting them run against anything real.

- [ ] Ask your manager if it is OK to keep a copy of the flows on your laptop for learning. If the answer is no, do this part at work only (section 4).
- [ ] If yes: start a **separate** Node-RED so it cannot touch work systems. In PowerShell: `node-red -u C:\node-red-readonly` (this makes a new, empty user directory).
- [ ] Menu → Import → paste or select the flows file → Import.
- [ ] **Do not press Deploy.** The flows point at real IP addresses and a real HA server, and they would not run correctly on your laptop anyway.
- [ ] Click each tab and walk through it with the map in section 2.

For each tab write one sentence in your own words:
- [ ] Office Power Meter: ______________________
- [ ] MQTT: ______________________
- [ ] Power Meter: ______________________
- [ ] Engineering Offices Aircons: ______________________
- [ ] Lights: ______________________
- [ ] Rec Fan: ______________________
- [ ] Aircons: ______________________
- [ ] HASS & OPCUA Data Transfer: ______________________

### Reading tricks inside the editor
- Select a node and open the **help sidebar** (book icon) to read what that node type does.
- Double-click a node to see its settings; read-only unless you press Done.
- The **debug sidebar** only shows output when flows are deployed and running.
- Use `Ctrl+F` to search all nodes by name (for example "aircon" or "3059").

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP

- [ ] Open Node-RED at work (read-only mindset).
- [ ] In the Node-RED sidebar, open the **Home Assistant** side panel if you have one, and look at the entity list so you can match node entity ids to real devices.
- [ ] In HA, Settings → Devices & services → Entities: search `tasmota`, `ms01`, `th01` to see the devices behind the node entity ids.
- [ ] Watch the debug sidebar on a tab for 10 minutes to see real traffic (if debug nodes are enabled).
- [ ] Make notes of how each real room is named.

**Do not:** press Deploy, enable/disable nodes, click inject buttons, or toggle switches.

---

## 5. CHECKPOINT
- [ ] You can draw the Modbus → MQTT → HA sensor path from memory.
- [ ] You can explain what "temperature at or above 22 for 2 minutes" does and why the "for" part matters.
- [ ] You can explain what the trigger node's "extend" option does for motion lights.

---

## 6. WORTH VERIFYING (questions for your manager, not changes to make yourself)

While reading, a few things looked like they deserve a second look. They may be fine or intentional; the point is to ask, not to fix.

- **Khan Office Aircon:** the ON node and the OFF node appear to point at two different switch entities. Check whether both entities exist and which one controls the real unit.
- **Apprentice Workshop:** the node names say "Aircon1 ON" and "Aircon2 OFF" but both target the same switch entity. It may just be naming.
- **Power meter reads:** the meter IP and unit id are typed into many function nodes. If the meter ever changes, each node needs editing (see file 12 for a safer design).
- **Two nodes for one idea:** the Lights tab contains aircon on/off nodes too (Leon, Stiaan, and so on). It is worth knowing which tab owns which aircon so nothing is controlled twice.
- **Debug nodes** left on in production can fill the debug sidebar and use memory.

---

## 7. STRETCH
- [ ] Make a table of every Home Assistant entity id used in the flows, with a column for room and device type.
- [ ] Draw the whole system as a diagram: sensors → Zigbee/Tasmota/Modbus → HA/MQTT → Node-RED → actions.
- [ ] List every place the flows repeat the same logic and could be tidier.

---

## 8. SELF-TEST
1. Why does the power meter read use a **quantity of 2** registers per value?
2. What does the second output of an `events: state` node do?
3. What is the difference between `events: state`, `poll state`, and `current state`?
4. What does `extend` do on a trigger node?
5. Why is `homeassistant.turn_on` used instead of `switch.turn_on`?
6. Why must you never press Deploy on the imported flows on your laptop?

(Answers: 1 - one 32-bit float is stored across two 16-bit registers. 2 - it fires when the condition is false. 3 - events: state reacts to changes; poll state asks on a timer; current state reads once on demand. 4 - each new message restarts the timer. 5 - it works across switch/light/input_boolean domains. 6 - the flows point at real devices and servers.)

---

## 9. DONE
- [ ] File 01 complete. Next: **02 - Node-RED Basics**.
