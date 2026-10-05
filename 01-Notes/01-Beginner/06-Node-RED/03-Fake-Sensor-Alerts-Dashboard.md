# 03 - Fake Sensor, Alerts and Dashboard

**Time:** 60 to 90 minutes | **Difficulty:** Easy | **Needs:** file 02 done
**Mirrors:** gauges on the "Office Power Meter" tab (`ui_gauge` nodes), plus the temperature threshold idea

---

## PROGRESS
- [ ] Fake temperature sensor built
- [ ] Hysteresis alert built (no flapping)
- [ ] Dashboard 2.0 installed
- [ ] Gauge, chart, text widgets working
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
Your workplace flows display power meter values on gauges and react to temperatures. Here you build the same two ideas with a fake sensor. You also learn **hysteresis**, a trick that stops devices switching on and off every few seconds.

---

## 2. CONCEPTS

| Term | Meaning |
|---|---|
| Fake sensor | A function that produces believable values |
| Threshold | A limit that triggers an action |
| Hysteresis | Use two limits (on at 24, off at 22) so a value hovering around one number doesn't flip constantly |
| Dashboard | A web page of widgets (gauges, charts, buttons) served by Node-RED |
| Group / Page / Base | Dashboard 2.0 layout hierarchy; each widget needs a group |

Note: your workplace flows use `ui_gauge` nodes, which come from the **older** `node-red-dashboard`. New work should use **Dashboard 2.0** (`@flowfuse/node-red-dashboard`). The ideas are the same; the widget names start with `ui-` and use groups/pages.

---

## 3. LAPTOP (Windows) - STEP BY STEP

### Part A: fake temperature sensor
- [ ] inject (repeat every **1 second**) → function:
```javascript
// Random walk between 15 and 35 degrees
let temp = context.get("temp") || 22;
temp += (Math.random() - 0.5) * 0.8;
temp = Math.max(15, Math.min(35, temp));
context.set("temp", temp);
msg.payload = Math.round(temp * 10) / 10;
msg.topic = "office_temp";
return msg;
```
- [ ] → debug. Deploy. Watch it drift slowly.
- [ ] Tip: change `0.8` to `3` for faster swings while testing.

### Part B: alert with hysteresis
- [ ] After the sensor, add a function with **2 outputs**:
```javascript
const ON_AT  = 24;   // turn the "aircon" on at or above this
const OFF_AT = 22;   // turn it off at or below this
let on = flow.get("airconOn") || false;

if (!on && msg.payload >= ON_AT) {
    flow.set("airconOn", true);
    return [{ payload: "ON",  temp: msg.payload }, null];
}
if (on && msg.payload <= OFF_AT) {
    flow.set("airconOn", false);
    return [null, { payload: "OFF", temp: msg.payload }];
}
return [null, null];   // nothing to do
```
- [ ] Output 1 → debug `AIRCON ON`. Output 2 → debug `AIRCON OFF`.
- [ ] Deploy. Notice it only fires once per crossing. Compare with a plain `>= 24` switch, which fires every second.

### Part C: dashboard
- [ ] Menu → **Manage palette** → **Install** → search `@flowfuse/node-red-dashboard` → Install.
- [ ] Add a **ui-gauge** node. Create a **Page** and **Group** when prompted (names: `Practice`, `Office`). Range 10 to 40. Wire the sensor function output to it.
- [ ] Add a **ui-chart** (line, X axis: last 5 minutes) in the same group.
- [ ] Add a **ui-text** node for the aircon state; wire both hysteresis outputs to it. Set its label to `Aircon`.
- [ ] Deploy and open `http://localhost:1880/dashboard`.
- [ ] Add a **ui-slider** (10 to 40) that sets the context value to force a temperature for testing. Use a function:
```javascript
context.set("temp", Number(msg.payload));   // NOTE: context belongs to this node
return null;
```
Because `context` is per-node, switch the sensor function to `flow.get("temp")` / `flow.set("temp", temp)` so the slider function can use `flow.set("temp", Number(msg.payload))` and affect the sensor.

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP
- [ ] Open the Node-RED dashboard URL at work (ask where it is, usually `http://<pi-ip>:1880/ui` for the old dashboard or `/dashboard` for 2.0).
- [ ] Compare it with the "Office Power Meter" gauges. Which flow node feeds which gauge?
- [ ] Note the gauge ranges and units. Do they match the meter (A, V, kW, kWh)?
- [ ] **Do not** install Dashboard 2.0 on the work instance without permission; it can sit alongside the old one but is still a change.

---

## 5. CHECKPOINT
- [ ] The gauge and chart move.
- [ ] The alert switches ON once at 24 and OFF once at 22, not every second.
- [ ] The slider forces the value and triggers the alert.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| Dashboard page 404 | Dashboard 2.0 is at `/dashboard`, the old one at `/ui` |
| Widget not showing | It has no group/page assigned; open the node and set them |
| Alert fires every second | You used a plain `>=` switch; use the hysteresis function |
| Slider does nothing | The sensor and slider use different context scopes; both must use `flow` |
| Values look like text | Wrap in `Number(...)` |

---

## 7. STRETCH
- [ ] Add a `ui-button` to manually override the aircon state.
- [ ] Add a minimum run time: don't switch OFF within 2 minutes of switching ON (store a timestamp in flow context).
- [ ] Add a ui-notification that appears when the aircon turns ON.

---

## 8. SELF-TEST
1. What is hysteresis and what problem does it prevent?
2. Why does the old `ui_gauge` differ from `ui-gauge`?
3. Why must the sensor and slider share `flow` context?
4. What would happen to a physical aircon if you used a single threshold with a noisy sensor?

---

## 9. DONE
- [ ] File 03 complete. Next: **04 - MQTT and Python Devices**.
