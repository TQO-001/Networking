# 14 - Capstone: Smart Office Monitor

**Time:** 6 to 10 hours over 4 to 5 sessions | **Difficulty:** Hard | **Needs:** files 02 to 13
**Mirrors:** your whole workplace system, rebuilt as your own original project with fake devices

---

## PROGRESS (milestones)
- [ ] M1: Lab ready and architecture drawn
- [ ] M2: Power monitoring (Modbus → MQTT → HA sensors)
- [ ] M3: Comfort and lights automation
- [ ] M4: Schedules, data logging, dashboard
- [ ] M5: Reliability, tests, backup, Git, README
- [ ] M6: Deployed and run on the Pi (or a Pi-like Linux) for 24 hours
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
This is the project you show in interviews and put on GitHub. It proves you can combine sensors, a protocol (Modbus), a broker (MQTT), a platform (Home Assistant), logic, data storage, a dashboard, and good engineering habits. It uses **your own fake office**, so you can share it publicly without exposing anything from your workplace.

---

## 2. CONCEPTS: ARCHITECTURE

```
 fake_pm.py (Modbus TCP)  -----> Node-RED "Power"  --MQTT--> Mosquitto --> HA sensors
 fake_env.py (MQTT temp)  --------------------------------------^             |
                                                                               v
 HA helpers (fake motion, light, aircon, temperature)  <--> Node-RED "Comfort"
                                                      <--> Node-RED "Lights"
                                                      <--> Node-RED "Schedules"
 Node-RED "Data"  --> SQL (readings, events)
 Node-RED "Dashboard" + "Ops" (errors, health, watchdog)
```

### Tabs to build
| Tab | Job | Reuses from |
|---|---|---|
| `Power` | Read 7 Modbus values, publish to MQTT, create HA sensors | 09, 10 |
| `Comfort` | Temperature → aircon with hysteresis, minimum run time, `unavailable` handling, light-linked rule | 03, 06, 07 |
| `Lights` | Motion → lights with extend; night gate; late-night control | 08 |
| `Schedules` | Table-driven daily/weekday schedule for fans and aircons | 07, 12 |
| `Data` | Log readings and events to SQL, nightly cleanup | 11 |
| `Dashboard` | Gauges, chart, alarm list, device switches | 03 |
| `Ops` | Catch, status, watchdog, health API | 12 |

---

## 3. LAPTOP (Windows) - STEP BY STEP

### M1: Lab ready and architecture drawn
- [ ] HA lab (file 05) running with helpers:
  - `input_number.office_temp` (10 to 40)
  - `input_boolean.office_motion`, `input_boolean.passage_motion`
  - `input_boolean.office_light`, `input_boolean.passage_light`
  - `input_boolean.office_aircon`, `input_boolean.rec_fan`
- [ ] Mosquitto, Python simulators and Node-RED running (`fake_pm.py` from file 09).
- [ ] Draw the architecture on paper or in draw.io and save a picture for your README.
- [ ] Create the Git repository `smart-office-monitor` with folders `flows/`, `simulators/`, `docs/`, `tests/`.

### M2: Power monitoring
- [ ] Table-driven Modbus read for the 7 values (file 09).
- [ ] Publish each value to a **structured** topic such as `office/meter1/active_power` (an improvement over flat names like `PM3059`).
- [ ] HA sensors for each value with correct unit, device class and state class (file 10, MQTT discovery).
- [ ] Gauges for current, voltage, power, plus a chart of power.
- [ ] Alarm: current imbalance above 10 percent between phases for 1 minute.

### M3: Comfort and lights
- [ ] `Comfort`: aircon ON at or above 24 for 2 minutes (use 10 s while testing); OFF at or below 22. Never switch more than once every 3 minutes.
- [ ] Ignore the aircon while the office light is off (the "light off → aircon off" rule), but make it a clear, configurable flag.
- [ ] Handle `unavailable` / `unknown` temperature safely and raise an alert after 10 minutes of no data.
- [ ] `Lights`: either motion sensor turns on the passage light for 4 minutes (extends on new motion), night only.
- [ ] Late-night rule: no motion for 1 hour → office light off, then restore at a set time.

### M4: Schedules, data, dashboard
- [ ] `Schedules`: a device table (name, entity, on time, off time, weekdays only) in one function (file 12), switching the fan and aircon.
- [ ] `Data`: write power, temperature and events (aircon on/off, motion) to SQL with parameterised queries. Nightly cleanup keeps 30 days.
- [ ] `Dashboard`: gauges, chart, last 10 events table, manual switches for each device, alarm indicators.

### M5: Reliability, tests, backup, Git
- [ ] `Ops`: catch → error log file; status node for Modbus and MQTT; watchdog if no meter data for 60 s.
- [ ] Health API: `GET /api/health` returns uptime, last meter reading time, and alarm states as JSON.
- [ ] Persistent context storage enabled.
- [ ] Every node named; every tab has a comment node; groups used.
- [ ] Remove secrets: tokens and passwords only in Node-RED credentials, never in code.
- [ ] Export flows to `flows/flows.json` and commit. Add `.gitignore` for `*_cred.json`.
- [ ] README with: what it is, architecture picture, how to run (step by step), screenshot of the dashboard, known limitations.

### M6: Run on the Pi
- [ ] Follow file 13: install/enable, import flows, set autostart, make a backup, check Pi health.
- [ ] Let it run for 24 hours. Check the error log and disk usage the next day.

---

## 4. TEST HARNESS (Python)

Drive the scenarios automatically with the Home Assistant REST API. Save as `tests/scenarios.py`. Keep the token in an environment variable, never in the file.

```python
import os
import time
import requests

HA = os.environ.get("HA_URL", "http://homeassistant.local:8123")
TOKEN = os.environ["HA_TOKEN"]            # set with: $env:HA_TOKEN = "<token>"
H = {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}

def call(domain, service, **data):
    r = requests.post(f"{HA}/api/services/{domain}/{service}", headers=H, json=data, timeout=10)
    r.raise_for_status()

def state(entity):
    r = requests.get(f"{HA}/api/states/{entity}", headers=H, timeout=10)
    r.raise_for_status()
    return r.json()["state"]

def check(label, ok):
    print(("PASS " if ok else "FAIL ") + label)

# Scenario 1: hot office turns the aircon on (use short timings in your flow while testing)
call("input_boolean", "turn_on", entity_id="input_boolean.office_light")
call("input_number", "set_value", entity_id="input_number.office_temp", value=27)
time.sleep(20)
check("aircon on when hot", state("input_boolean.office_aircon") == "on")

# Scenario 2: cool office turns it off
call("input_number", "set_value", entity_id="input_number.office_temp", value=20)
time.sleep(20)
check("aircon off when cool", state("input_boolean.office_aircon") == "off")

# Scenario 3: motion turns passage light on
call("input_boolean", "turn_on", entity_id="input_boolean.passage_motion")
time.sleep(3)
check("passage light on after motion", state("input_boolean.passage_light") == "on")
```
- [ ] Adjust the sleeps to match your test timings.
- [ ] Add a scenario for each requirement below.

---

## 5. CHECKPOINT: ACCEPTANCE TESTS

| # | Test | Pass? |
|---|---|---|
| 1 | Power, voltage and current gauges move and match the simulator | [ ] |
| 2 | HA shows 7 sensors with correct units | [ ] |
| 3 | Temperature above limit for the delay turns the aircon on; below the lower limit turns it off | [ ] |
| 4 | A 5 second spike does not switch the aircon | [ ] |
| 5 | Setting temperature to `unavailable` raises an alert and does not crash | [ ] |
| 6 | Motion turns the passage light on and it stays on while motion repeats | [ ] |
| 7 | Schedule table switches the fan at the right times | [ ] |
| 8 | SQL table has rows for power, temperature and events | [ ] |
| 9 | Stopping `fake_pm.py` triggers the watchdog within 60 s | [ ] |
| 10 | Restarting Node-RED keeps schedules and context working | [ ] |
| 11 | `/api/health` returns correct JSON | [ ] |
| 12 | Flows, simulators, tests and README are in Git without secrets | [ ] |
| 13 | 24 hours on the Pi with no unexplained errors | [ ] |

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| Too much at once | Finish one milestone, commit, then move on |
| Everything on one tab | Split by job (Power, Comfort, Lights...) |
| Logic duplicated | Use tables and subflows |
| Tests pass only on your laptop | Document setup steps and test them on a clean machine/folder |
| Aircon flapping | Hysteresis plus a minimum run time |
| Commit contains a token | Rotate the token immediately and clean the history |
| README skipped | Reviewers read the README first; a flows file alone is not a project |

---

## 7. STRETCH
- [ ] Add an HA Energy dashboard using the kWh sensor.
- [ ] Add a daily summary report (kWh used, hours of aircon, motion counts) sent as a CSV or email.
- [ ] Add a REST endpoint to change thresholds with validation and a limit on allowed values.
- [ ] Re-implement one piece (for example the SQL logger) in Python as a FastAPI service and compare.

---

## 8. SELF-TEST
1. Walk through what happens from a Modbus register to a Home Assistant sensor.
2. Which parts of the system need hysteresis or time delays, and why?
3. How do you stop a failure in one tab taking down the others?
4. What would you change first if this had to monitor 20 offices?
5. What would you check in the first 5 minutes if the dashboard froze at work?

---

## 9. DONE
- [ ] File 14 complete. Next: **15 - CV and Portfolio**.
