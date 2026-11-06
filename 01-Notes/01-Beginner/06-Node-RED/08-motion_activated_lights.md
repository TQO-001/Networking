# 08 - Motion-Activated Lights

**Time:** 75 to 90 minutes | **Difficulty:** Medium | **Needs:** files 05 and 07
**Mirrors:** "Lights" tab: Kitchen motion, Passage motion, ITPassage motion, PLPassage motion → `trigger` (4 minutes, extend) → lights; and the "ITOffice motion" late-night control (no motion for 1 hour)

---

## PROGRESS
- [ ] Motion → light with timeout built
- [ ] Timer extends on repeat motion
- [ ] Multiple sensors share one trigger
- [ ] Light-level / time-of-day gate added
- [ ] Late-night "no motion" control built
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
Sonoff Zigbee motion sensors are cheap and common. Your passage lights depend on them. This project teaches the `trigger` node, the single most useful timing node in building automation.

---

## 2. CONCEPTS

### How the work flow behaves
```
Motion sensor says "on"
   -> trigger node sends {"service":"turn_on"} immediately
   -> after 4 minutes with no new motion, sends {"service":"turn_off"}
   -> if motion happens again before 4 minutes, the timer restarts (extend = on)
   -> call service (homeassistant) applies turn_on / turn_off to the lights
```

### Trigger node settings you will see
| Setting | Meaning |
|---|---|
| Send (op1) | First message, sent immediately |
| Then (op2) | Message sent after the delay |
| Duration | How long to wait (4 minutes at work) |
| Extend delay if new message arrives | Restart the timer on each new message |
| Reset | Optional message that cancels the timer |

### Sonoff motion sensor behaviour
- State `on` = motion detected. State `off` = no motion (after the sensor's own internal hold time).
- Battery powered; reports `unavailable` if it loses the Zigbee network.
- Your late-night rule listens for `off` **for 1 hour** (meaning no motion for an hour).

---

## 3. LAPTOP (Windows) - STEP BY STEP

Entities: `input_boolean.fake_motion`, `input_boolean.fake_light`. In HA you can flip `fake_motion` by hand to simulate movement.

### Part A: motion turns the light on, then off after a delay
- [ ] **events: state**: entity `input_boolean.fake_motion`, If State `is` `on`, For `0`, "Output on change only" **off**, 2 outputs.
- [ ] Output 1 → **trigger** node:
  - Send: **JSON** `{"service":"turn_on"}`
  - Then: **wait for** `30` seconds (use 30 s for testing, 4 minutes at work), then send **JSON** `{"service":"turn_off"}`
  - Tick **extend delay if new message arrives**.
- [ ] → **call service** (domain `homeassistant`, service `turn_on`, entity `input_boolean.fake_light`).
- [ ] Deploy. Turn the fake motion on (and off) in HA. The light turns on, then off about 30 seconds later.

Note the "Output on change only" setting. A motion sensor sends repeated `on` events while you move; for lights you want every one so the timer extends.

### Part B: the extend behaviour
- [ ] Flip the fake motion off and on again every 15 seconds for a minute. The light should stay on until 30 seconds after the last flip.
- [ ] Untick "extend" and repeat. The light now turns off 30 seconds after the **first** motion, even while people are still moving. This is why extend matters.

### Part C: several sensors, one light group
- [ ] Create a second Toggle helper `Fake Motion 2`.
- [ ] Wire a second **events: state** output 1 into the **same** trigger node. Either sensor now keeps the light on.
- [ ] Wire the trigger output to two `call service` nodes (`fake_light` and a second toggle `fake_light_2`), as your passage flows do for several lights.

### Part D: gate by time of day
Only turn lights on at night:
- [ ] Put a function before the trigger:
```javascript
const h = new Date().getHours();
const isNight = (h >= 18 || h < 6);
if (!isNight) { return null; }       // daytime: ignore motion
return msg;
```
- [ ] Test with a wide range (`h >= 0`) then narrow it. Better still, use the HA `sun.sun` entity: add a **current state** node on `sun.sun` and only continue when its state is `below_horizon`.

### Part E: late-night control (no motion for a long time)
Your IT office rule: when there has been no motion for an hour, switch the lights off; later turn control back on.
- [ ] **events: state** on `input_boolean.fake_motion`, If State `is` `off`, **For** `1` minute (use minutes, not hours, while testing), output on change only.
- [ ] Output 1 → **trigger**: Send `{"service":"turn_off"}` then after `5` minutes send `{"service":"turn_on"}` (at work the second delay is 15 hours).
- [ ] → **call service** (`homeassistant`, `input_boolean.fake_light_2`).
- [ ] Read the logic: "when the room has been empty for a while, turn the light off; after a long time, restore it".
- [ ] Question to consider: is restoring the light "on" 15 hours later desired in all cases? That's something to ask rather than assume.

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP (READ-ONLY)
- [ ] Open the "Lights" tab motion section. For each motion sensor, record: entity id, If State, For, which trigger it feeds, which lights it controls.
- [ ] In HA Developer tools → States, find each motion entity. Note attributes (battery, last seen, link quality if shown).
- [ ] History page: how often does each sensor fire in a day? Are there sensors that never fire? That could mean a dead battery.
- [ ] Ask whether any passage has a manual wall switch, since motion and manual control can conflict.

Do not walk in front of motion sensors repeatedly during testing at work, and do not force-trigger a sensor.

---

## 5. CHECKPOINT
- [ ] Motion turns the fake light on; it turns off after the delay.
- [ ] Repeated motion extends the delay.
- [ ] A second sensor shares the same trigger.
- [ ] The late-night rule switches off and later restores.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| Light turns off while people are still there | "Extend" is off, or "Output on change only" is ticked, so repeated motion isn't passed on |
| Light flickers on/off | Two flows controlling the same light; find the second one |
| Trigger never turns off | Op2 set to "nothing"; set it to a JSON turn_off |
| `call service` ignores the JSON | The payload override needs `service` as a key and valid JSON |
| Sensor shows `unavailable` | Zigbee issue or battery; the flow will never fire |
| Light stays on after restart | The trigger timer is in memory only; add a catch-up check on startup |
| Wrong state value | Motion states are strings `on`/`off`, not booleans |

---

## 7. STRETCH
- [ ] Add a manual override: if the wall switch is turned on by hand, disable motion control for 2 hours.
- [ ] Add a brightness change (use `light.turn_on` with `brightness_pct` data) for night mode.
- [ ] Log each motion event (timestamp, sensor) to a CSV and count events per hour.

---

## 8. SELF-TEST
1. What does "extend delay if new message arrives" do?
2. What is the difference between the two outputs of `events: state`?
3. Why does the work flow send JSON like `{"service":"turn_on"}` instead of just "on"?
4. What does a motion sensor's `off` state mean exactly?
5. What could go wrong if two flows control the same light?

---

## 9. DONE
- [ ] File 08 complete. Next: **09 - Modbus Power Meter**.
