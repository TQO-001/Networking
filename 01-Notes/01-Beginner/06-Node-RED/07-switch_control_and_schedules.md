# 07 - Switch Control and Schedules

**Time:** 75 to 90 minutes | **Difficulty:** Medium | **Needs:** file 05 (HA lab)
**Mirrors:** tabs "Rec Fan", "Aircons" and the timer parts of "Lights" (`eztimer` → `call service`), plus "light switch off → aircon off"

---

## PROGRESS
- [ ] `call service` on/off tested
- [ ] `eztimer` installed
- [ ] Time-of-day schedule built
- [ ] Day-of-week schedule built
- [ ] Sunrise/sunset schedule built
- [ ] Linked behaviour built (light off → aircon off)
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
Most of your workplace flows are schedules: fans, aircons and passage lights on and off at set times. Many tabs are copies of the same pattern, so once you understand one `eztimer → call service` pair you understand most of the system.

---

## 2. CONCEPTS

| Term | Meaning |
|---|---|
| `call service` (action) | Tells HA to do something: `homeassistant.turn_on` / `turn_off` |
| `homeassistant.turn_on` | A generic action that works for switches, lights, input_booleans |
| `eztimer` | A scheduler node with on/off times, days, and optional sunrise/sunset |
| Startup message | Option to send the correct state when Node-RED restarts |
| Latitude / longitude | Needed for sunrise/sunset; at work taken from the HA home zone |
| Payload override | `call service` can take `msg.payload` such as `{"service":"turn_off"}` to change what it does |

Why a generic `homeassistant.turn_on` instead of `switch.turn_on`? It works for many entity types, so you can reuse the same flow shape.

---

## 3. LAPTOP (Windows) - STEP BY STEP

Entities: `input_boolean.fake_light`, `input_boolean.fake_aircon` (from file 05).

### Part A: manual control with dashboard buttons
- [ ] **ui-switch** (Dashboard 2.0) → function:
```javascript
msg.payload = { service: msg.payload ? "turn_on" : "turn_off" };
return msg;
```
- [ ] → **call service** (domain `homeassistant`, entity `input_boolean.fake_light`). Leave service as `turn_on`; the payload overrides it.
- [ ] Flip the dashboard switch and watch the HA toggle. This payload-override trick is the same idea your trigger nodes use at work.

### Part B: simple daily schedule
- [ ] Palette → install `node-red-contrib-eztimer`.
- [ ] Add an **eztimer** node named `Switch ON/OFF Fake Light`.
- [ ] Settings: Timer type **on/off**. ON at a time a minute or two from now. OFF 2 minutes after. Days: all. Property to send on `msg.payload`: ON value `turn_on`, OFF value `turn_off`.
- [ ] Wire it to a function that converts text to the payload form:
```javascript
msg.payload = { service: msg.payload };   // "turn_on" or "turn_off"
return msg;
```
- [ ] → **call service** (`homeassistant`, `input_boolean.fake_light`). Deploy and wait. Watch the toggle follow the schedule.

(Your workplace timers send the strings `turn_on` and `turn_off` directly into the service nodes. Both approaches work; the function above makes the override explicit.)

### Part C: day-of-week
- [ ] Copy the timer. Untick Saturday and Sunday. Add a **comment** node saying "Weekdays only".
- [ ] Test by temporarily ticking only today's day.

### Part D: sunrise / sunset
- [ ] On the timer set **Latitude/Longitude source** to manual and enter your location (get coordinates from a map).
- [ ] Set ON = sunset with offset `-15` minutes, OFF = `22:00`.
- [ ] Use the node's status text to see the next on/off time.

### Part E: linked behaviour (light off → aircon off)
Your work flow `ENG_Office_SW1`: when a light switch turns off, the aircons turn off; when it turns on, they turn on.
- [ ] **events: state** on `input_boolean.fake_light`, If State `is` **off**, For `0`, output on change only, two outputs.
- [ ] Output 1 (light is off) → **call service** `homeassistant.turn_off` `input_boolean.fake_aircon`.
- [ ] Output 2 (light is on) → **call service** `homeassistant.turn_on` `input_boolean.fake_aircon`.
- [ ] Deploy. Toggle the light in HA and watch the aircon follow.
- [ ] Think about it: should aircon really turn on every time the light turns on? That's a design choice. Discuss options (only if temperature is high, only in working hours).

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP (READ-ONLY)
- [ ] Open "Rec Fan" and "Aircons" tabs. For each timer record: name, ON time, OFF time, days, and which entity it controls. Put it in a table in your notes.
- [ ] Open the timer's help panel. Look at the status text under each timer in the editor, which shows the next scheduled event.
- [ ] Check whether any timer is **suspended** (it is greyed or has a status that says so).
- [ ] Compare two timers that look identical (for example, two aircons) and note differences.
- [ ] Ask your manager how overrides are handled (for example, someone turning an aircon on manually after hours).

Never click a timer's inject button or toggle real entities from HA while testing.

---

## 5. CHECKPOINT
- [ ] A scheduled on/off pair controls the fake light by itself.
- [ ] The weekday-only timer ignores a weekend (or a day you unticked).
- [ ] Light off turns the fake aircon off automatically.
- [ ] You can read a workplace timer and describe its schedule in one sentence.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| Timer never fires | Not deployed, or wrong time zone on the Node-RED machine (check the system clock) |
| Sunrise/sunset wrong | Latitude/longitude not set or wrong sign (South Africa is negative latitude) |
| Wrong action happens | `call service` has a fixed service but the payload overrides it; check both |
| Restart leaves the device in the wrong state | Enable "send events on startup" in the timer, or add a catch-up inject |
| Two flows fight over one device | One timer and one state-change flow both control the same entity; map who owns what |
| Time looks one hour off | Node-RED vs system time zone; check both |

---

## 7. STRETCH
- [ ] Add a manual override: a dashboard switch that disables the timer until the next ON time.
- [ ] Build a small function that reads a list of devices and creates the same timer for each (preview of file 12).
- [ ] Add a randomised offset of up to 5 minutes (staggered switch-on reduces power spikes).

---

## 8. SELF-TEST
1. What does `homeassistant.turn_on` do that `switch.turn_on` does not?
2. What are two reasons a timer might not fire?
3. How does the `msg.payload` override change what a `call service` node does?
4. What happens to a timer if Node-RED restarts at 14:00 and the schedule says ON at 07:00?
5. Why is "light off → aircon off" a good energy rule, and what is a risk?

---

## 9. DONE
- [ ] File 07 complete. Next: **08 - Motion-Activated Lights**.
