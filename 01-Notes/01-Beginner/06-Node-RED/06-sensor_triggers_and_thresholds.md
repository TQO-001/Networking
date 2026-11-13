# 06 - Sensor Triggers and Thresholds

**Time:** 75 to 90 minutes | **Difficulty:** Medium | **Needs:** files 03 and 05
**Mirrors:** tab "Engineering Offices Aircons" (temperature at or above a limit for 2 minutes → aircon on; poll state every 60 s; current state check)

---

## PROGRESS
- [ ] `events: state` with a numeric condition built
- [ ] "for" delay (time in state) tested
- [ ] Both outputs used (condition true / false)
- [ ] `poll state` and `current state` tested
- [ ] Safe "dry run" version built before any real service call
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
At work, a Zigbee temperature sensor decides when an aircon switches on. This is the most common automation pattern: **sensor → condition → action**. Getting the condition details right (numbers vs text, "for how long", "only on change") prevents flapping aircons and wasted power.

---

## 2. CONCEPTS

### The three ways to read state
| Node | When it runs | Use it for |
|---|---|---|
| **events: state** | Every time the entity changes | Reacting to something (motion, temperature rising) |
| **poll state** | On a timer (e.g. every 60 s) | Sensors that update slowly, or a heartbeat |
| **current state** | When a message arrives | Checking "what is it right now?" mid-flow |

### Key settings on `events: state`
| Setting | What it does | In your workplace flow |
|---|---|---|
| Entity | Which entity to watch | A temperature sensor |
| If State | A condition (`>=`, `is`, and so on) and a value | `>= 22` |
| For | Condition must hold this long before firing | 2 minutes |
| Output only on state change | Don't re-send if nothing changed | on |
| Two outputs | 1 = condition true, 2 = condition false | output 1 → aircon on |

Important: HA states are **text**. In the `If State` row choose type **number** when comparing numerically.

---

## 3. LAPTOP (Windows) - STEP BY STEP

Use your HA lab from file 05. Entities: `input_number.fake_temperature`, `input_boolean.fake_aircon`.

### Part A: simple threshold
- [ ] Add **events: state**. Entity `input_number.fake_temperature`. If State: `>=` **number** `24`. Leave For at 0. Output on change only: ticked.
- [ ] Output 1 → debug named `HOT`. Output 2 → debug named `COOL`.
- [ ] Deploy. Drag the HA slider (Settings → Helpers → open the helper) above and below 24 and watch each output.

### Part B: add "for" so short spikes are ignored
- [ ] Change **For** to `2` minutes (for testing use `10` seconds).
- [ ] Move the slider above 24, then back below within 5 seconds. Nothing should fire.
- [ ] Hold it above 24 for 10+ seconds. The `HOT` output now fires.

### Part C: act on the result (to the fake aircon)
- [ ] Output 1 → **call service**: `homeassistant.turn_on` entity `input_boolean.fake_aircon`.
- [ ] Output 2 → **call service**: `homeassistant.turn_off` entity `input_boolean.fake_aircon`.
- [ ] Now add hysteresis: set output 1's condition to `>= 24` and use a second `events: state` with `<= 22` for turning off, instead of using output 2 of the first node. (Your workplace flow uses output 1 only; hysteresis is a safer improvement.)

### Part D: check state before acting
Avoid sending "turn_on" if it is already on:
- [ ] Insert a **current state** node (entity `input_boolean.fake_aircon`) between the `HOT` output and the turn-on service call.
- [ ] In the current state node, set the condition so it only passes the message on when the state **is not** `on` (the node has an "if state" option; its second output carries messages that fail the condition).
- [ ] Test by manually switching `fake_aircon` on in HA, then driving the temperature high. The flow should stay quiet.

### Part E: poll
- [ ] Add **poll state** (entity `input_number.fake_temperature`, every 10 seconds) → function:
```javascript
const t = Number(msg.payload);
if (isNaN(t)) {                 // sensor unavailable or unknown
    node.warn("Temperature unavailable: " + msg.payload);
    return null;
}
flow.set("lastTemp", t);
msg.payload = t;
return msg;
```
- [ ] → ui-gauge (optional) or debug. Notice `unavailable` / `unknown` strings: real Zigbee sensors report these when they lose connection.

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP (READ-ONLY)
- [ ] Open the "Engineering Offices Aircons" tab.
- [ ] Double-click the `events: state` node and read: entity, If State, For, outputs. **Cancel** to close.
- [ ] Write down in plain English: "When ______ is ______ for ______, then ______."
- [ ] In HA Developer tools → States, find that temperature entity. Check: does it include a `unit_of_measurement` attribute? Is the state ever `unavailable`?
- [ ] Look at the **History** page for the sensor to see how it behaves over a day (spikes, gaps).
- [ ] Ask yourself: what happens if the sensor battery dies? (Answer: state becomes `unavailable`, the condition never fires, the aircon stays as it is.)

Do not change the live node. If you have an improvement (hysteresis, unavailable-handling), build it in a copy on your PRACTICE tab and show your manager.

---

## 5. CHECKPOINT
- [ ] A temperature above the limit for the set time turns the fake aircon on.
- [ ] A short spike does nothing.
- [ ] You handled `unavailable` and `unknown` without errors.
- [ ] You can describe the work flow in one sentence.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| Condition never fires | The compare type is string; choose number |
| Fires on startup only | "Output initially" setting; check what you want |
| Fires repeatedly | "Output only on state change" is off |
| Output 2 does nothing | Output 2 is "condition false"; wire something to it if needed |
| Service call has no effect | Entity id typo or wrong domain |
| NaN in function | State is `unavailable`/`unknown`; guard with `isNaN` |
| Flapping aircon | Add hysteresis (two thresholds) or a minimum run time |

---

## 7. STRETCH
- [ ] Add a time-of-day limit: only run between 06:00 and 18:00 (function node comparing `new Date().getHours()`).
- [ ] Add a "window open" input (`input_boolean.fake_window`) that blocks the aircon.
- [ ] Send yourself a notification when the sensor is `unavailable` for over 10 minutes.

---

## 8. SELF-TEST
1. Why must you choose type **number** for the If State value?
2. What does the "For" setting protect against?
3. Which node would you use to check the aircon state before turning it on?
4. What does it mean when a Zigbee sensor shows `unavailable`?
5. What are two problems with using one threshold and no delay?

---

## 9. DONE
- [ ] File 06 complete. Next: **07 - Switch Control and Schedules**.
