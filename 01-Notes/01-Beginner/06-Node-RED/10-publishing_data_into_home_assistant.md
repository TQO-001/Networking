# 10 - Publishing Data into Home Assistant

**Time:** 90 minutes | **Difficulty:** Medium to Hard | **Needs:** files 04, 05 and 09
**Mirrors:** tab "MQTT" (`mqtt in` PM3001 … PM2703 → `ha-sensor` with units) and the `mqtt out` nodes on "Office Power Meter"

---

## PROGRESS
- [ ] Full path understood: Modbus → MQTT → Node-RED → HA sensor
- [ ] HA MQTT integration connected to the broker
- [ ] Method 1: sensor created with Node-RED entity nodes (like work)
- [ ] Method 2: sensor created with MQTT discovery (no extra integration)
- [ ] Units, device class and state class set correctly
- [ ] Sensor charted in HA
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
This is how real-world numbers (amps, volts, kW) become **entities** in Home Assistant, where they can be charted, logged and used in automations. It also shows you how MQTT and Node-RED glue different systems together.

---

## 2. CONCEPTS

### The whole path at work
```
Power meter --Modbus--> Node-RED ("Office Power Meter" tab)
                         |-> ui_gauge
                         |-> mqtt out (topic PM3001, PM3003 ...)
                                  |
                              Mosquitto broker
                                  |
Node-RED ("MQTT" tab) <-- mqtt in (PM3001 ...)
                         |-> ha-sensor  (name + unit "A")  --> Home Assistant sensor
```

### Two ways to create an HA sensor
| Method | How | Needs |
|---|---|---|
| **1. Entity nodes** (`ha-sensor` with `ha-entity-config`) | Node-RED creates the entity inside HA | The **Node-RED Companion** custom integration installed in HA (check the node's help panel and ask at work how it was set up) |
| **2. MQTT discovery** | You publish a JSON "config" message and then values; HA builds the sensor itself | Only the MQTT integration, no extra install |

### Sensor attributes that matter
| Attribute | Example | Why |
|---|---|---|
| `unit_of_measurement` | `A`, `V`, `kW`, `kWh` | Needed for correct charts |
| `device_class` | `current`, `voltage`, `power`, `energy` | HA picks icons and graph types |
| `state_class` | `measurement` for live values, `total_increasing` for energy meters | Needed for long-term statistics and the Energy dashboard |

Your workplace entity configs set name and unit; device class and state class are left empty. Setting them is an easy improvement to propose.

---

## 3. LAPTOP (Windows) - STEP BY STEP

### Step 0: connect HA to your broker
- **Option A lab (HAOS VM):** Settings → Devices & services → the **MQTT** integration appears automatically when the Mosquitto add-on is running. Configure it. The add-on uses HA user accounts for login, so create a HA user (for example `mqttuser`) with a password and use it in Node-RED and Python as well.
- **Option B lab (Docker HA):** Settings → Devices & services → Add integration → MQTT → broker = your Windows IP (not `localhost`, because HA runs in a container), port `1883`. Make sure Mosquitto on Windows allows connections from the container (`listener 1883` + `allow_anonymous true` for practice, and Windows Firewall rule for port 1883).

### Step 1: fake meter publishes like the work flow
Reuse `fake_pm.py` (Modbus) from file 09 together with the Node-RED reader. After the conversion function, add:
- [ ] A **mqtt out** node (same broker). Use a function before it to set the topic by value:
```javascript
const map = {
  current_a:    "PM3001",
  current_b:    "PM3003",
  current_c:    "PM3005",
  current_avg:  "PM3009",
  voltage_ll:   "PM3027",
  active_power: "PM3059",
  energy_kwh:   "PM2703"
};
msg.topic = map[msg.topic] || msg.topic;
msg.payload = String(msg.payload);
return msg;
```
- [ ] Use the same topic names as your workplace flows so you recognise them.
- [ ] Verify with `mosquitto_sub -h localhost -t "PM#" -v`.

If you did not finish file 09, publish fake values with a quick Python script or an inject + function node instead.

### Step 2 (Method 1): HA entity nodes
- [ ] Install the Node-RED Companion integration in HA (via HACS; this is a custom integration). If you cannot or do not want to, skip to Method 2.
- [ ] **mqtt in** topic `PM3001` (output: auto-detect) → **ha-sensor** node.
- [ ] Edit the ha-sensor: create an **Entity Config** named `PowerMeterCurrentA`: Name `LAB PM Current A`, Unit `A`, Device class `current`, State class `measurement`. State = `msg.payload`.
- [ ] Deploy. In HA → Settings → Entities, find the new sensor.

### Step 3 (Method 2): MQTT discovery
Send a config message once (retained) and then keep publishing values to the state topic.
- [ ] inject → function → mqtt out (retain on):
```javascript
msg.topic = "homeassistant/sensor/lab_pm_active_power/config";
msg.retain = true;
msg.payload = JSON.stringify({
  name: "LAB PM Active Power",
  unique_id: "lab_pm_active_power",
  state_topic: "PM3059",
  unit_of_measurement: "kW",
  device_class: "power",
  state_class: "measurement",
  device: { identifiers: ["lab_pm"], name: "Lab Power Meter" }
});
return msg;
```
- [ ] Click inject once. HA creates `sensor.lab_pm_active_power` and fills it from topic `PM3059`.
- [ ] Repeat for the energy sensor with `unit_of_measurement: "kWh"`, `device_class: "energy"`, `state_class: "total_increasing"`.

### Step 4: use it
- [ ] HA → History or a Dashboard card (Statistics graph) to chart `LAB PM Active Power`.
- [ ] Optional: add `sensor.lab_pm_energy` to the Energy dashboard (Settings → Dashboards → Energy).

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP (READ-ONLY)
- [ ] On the "MQTT" tab, open each `ha-sensor` and its entity config. Build a table: MQTT topic → HA name → unit → device class → state class.
- [ ] In HA, find the resulting entities. Compare their friendly names and units with the table.
- [ ] Look at one sensor's **History** and check the units on the y axis.
- [ ] Settings → Devices & services → MQTT → Configure → Listen to topic `PM#` to watch values arrive (read-only).
- [ ] Ask whether the energy sensor is used in the HA Energy dashboard. If not, it probably needs `total_increasing` / `energy`.

---

## 5. CHECKPOINT
- [ ] You see a live sensor in HA whose values came from your Python Modbus simulator.
- [ ] Unit, device class and state class are all set.
- [ ] You can explain Method 1 versus Method 2 in two sentences each.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| HA sensor never appears (Method 2) | MQTT integration not connected; check the discovery topic starts with `homeassistant/` |
| Sensor appears but says `unknown` | No value published yet, or `state_topic` doesn't match |
| Duplicate sensors | `unique_id` changed; delete the old entity |
| Container HA can't reach `localhost` broker | `localhost` inside Docker means the container itself; use your PC's IP |
| Sensor has no graph | Missing unit or state class |
| `ha-sensor` node errors | Companion integration missing, or node not connected to the server |
| Old value stays after deleting the sensor | A retained message is still on the broker; clear it with an empty retained publish |

---

## 7. STRETCH
- [ ] Publish a **binary_sensor** (for example "meter online") using MQTT discovery.
- [ ] Add an availability topic so HA shows the sensor as `unavailable` when Node-RED stops publishing.
- [ ] Create an HA automation: if active power stays above 12 kW for 10 minutes, send a notification.

---

## 8. SELF-TEST
1. What is an MQTT discovery message and why is it retained?
2. Which two attributes allow a sensor to be used for long-term statistics and the Energy dashboard?
3. What is the difference between `measurement` and `total_increasing`?
4. Why does HA in Docker not reach a broker at `localhost`?
5. What could be improved in the work entity configs?

---

## 9. DONE
- [ ] File 10 complete. Next: **11 - SQL Data Transfer**.
