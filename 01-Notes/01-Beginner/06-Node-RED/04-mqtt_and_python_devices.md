# 04 - MQTT and Python Devices

**Time:** 75 to 90 minutes | **Difficulty:** Medium | **Needs:** files 02 and 03; Python installed
**Mirrors:** tab "MQTT" and the `mqtt out` nodes on "Office Power Meter" (topics `PM3001`, `PM3003`, and so on)

---

## PROGRESS
- [ ] Mosquitto installed and running on the laptop
- [ ] Python publisher script running
- [ ] Node-RED subscribes and shows data
- [ ] Node-RED publishes back to a topic
- [ ] Topic wildcards tested
- [ ] Retained message and last-will tested
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
MQTT is the messaging glue between your devices and Home Assistant. Tasmota switches talk MQTT, and your power meter values are passed to HA through MQTT topics. Using Python as the "device" also gives you a way to test anything without hardware.

---

## 2. CONCEPTS

| Term | Meaning |
|---|---|
| Broker | The server that routes messages (Mosquitto) |
| Publish / Subscribe | Devices publish to a topic; anyone subscribed receives it |
| Topic | A text path such as `plant/office1/temp`. Case-sensitive |
| `+` wildcard | One level: `plant/+/temp` |
| `#` wildcard | Everything below: `plant/#` |
| QoS | Delivery guarantee: 0 at most once, 1 at least once, 2 exactly once |
| Retained message | The broker remembers the last value for new subscribers |
| Last Will (LWT) | A message the broker publishes if a device disappears. Tasmota uses this for `Online/Offline` |

At work, your power meter flow publishes values to topics like `PM3059` (active power). A flat topic name works but a structured one (`building/meter1/active_power`) scales better.

---

## 3. LAPTOP (Windows) - STEP BY STEP

### Step 1: install and configure Mosquitto
- [ ] Download the Windows installer from mosquitto.org and install it.
- [ ] Open `C:\Program Files\mosquitto\mosquitto.conf` as Administrator. Add at the bottom:
```
listener 1883
allow_anonymous true
```
This is for **local practice only**. Never use anonymous access on a real network.
- [ ] Press Win+R → `services.msc` → **Mosquitto Broker** → Restart.
- [ ] Test (second PowerShell window): `"C:\Program Files\mosquitto\mosquitto_sub.exe" -h localhost -t "test/#" -v`
- [ ] In a third window: `"C:\Program Files\mosquitto\mosquitto_pub.exe" -h localhost -t "test/hello" -m "hi"` and see it appear.

### Step 2: Python device (`C:\node-red-lab\fake_meter.py`)
```python
import json
import random
import time
import paho.mqtt.client as mqtt

client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
client.connect("localhost", 1883)
client.loop_start()

current = 12.0
while True:
    current = max(0, min(40, current + random.uniform(-0.5, 0.5)))
    client.publish("building/meter1/current_a", f"{current:.2f}")
    client.publish("building/meter1/status", json.dumps({"ok": True, "ts": time.time()}))
    print("published", round(current, 2))
    time.sleep(2)
```
- [ ] Run: `python C:\node-red-lab\fake_meter.py`

### Step 3: Node-RED subscribes
- [ ] Add **mqtt in**. Server: new broker config `localhost` port `1883`. Topic `building/meter1/#`. Output: **auto-detect**.
- [ ] Wire to debug. Deploy. Watch two topics arrive.
- [ ] Filter on one topic: add a **switch** on `msg.topic` equal to `building/meter1/current_a`.
- [ ] Wire that to a **ui-gauge** (range 0 to 40) for a live dashboard.

### Step 4: Node-RED publishes
- [ ] inject (every 10 s) → function:
```javascript
msg.topic = "building/meter1/command";
msg.payload = JSON.stringify({ action: "ping", ts: Date.now() });
return msg;
```
- [ ] → **mqtt out** (same broker). Subscribe in PowerShell with `mosquitto_sub -t "building/#" -v` to see it.

### Step 5: retained messages and last will
- [ ] In the mqtt out node tick **Retain**. Publish once. Start a new `mosquitto_sub` and see the retained value arrive immediately.
- [ ] In the broker config (Node-RED), set a **Last Will** topic `building/nodered/status`, payload `offline`, and a **Birth** message `online`. Stop and start Node-RED and watch the status topic change.
- [ ] Clear a retained message: publish an empty retained message to the topic: `mosquitto_pub -t building/meter1/status -r -n`.

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP
- [ ] Find the MQTT broker config in Node-RED at work (the Mosquitto broker). Note the topic naming but don't copy credentials.
- [ ] If you have permission, subscribe from a laptop/terminal with `mosquitto_sub` using the account you were given: `mosquitto_sub -h <broker> -t "#" -v` can be heavy on a busy system. Prefer specific topics (`PM#`).
- [ ] Open HA → Settings → Devices & services → MQTT → Configure → "Listen to a topic" to watch messages safely.
- [ ] List the topics you see for Tasmota devices: `stat/...`, `tele/...`, `cmnd/...`. Tasmota uses `cmnd` for commands, `stat` for results, `tele` for periodic telemetry.

---

## 5. CHECKPOINT
- [ ] Stop the Python script and the gauge freezes. Restart it and the gauge moves again.
- [ ] You can explain `+` vs `#` and what a retained message is.
- [ ] You can see Node-RED's own online/offline status through the last will.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| mqtt node says disconnected | Mosquitto not running, or the `listener` / `allow_anonymous` lines are missing |
| Python `CallbackAPIVersion` error | `pip install -U "paho-mqtt>=2.0"` |
| Topic doesn't match | Topics are case-sensitive and `/` matters |
| Old values keep appearing | A retained message is stored; clear it with an empty retained publish |
| Debug floods | Narrow the topic from `#` to something specific |
| Cannot connect from another PC | Windows Firewall, or the broker only listens on localhost |

---

## 7. STRETCH
- [ ] Run a second script as `meter2` and use `building/+/current_a` to subscribe to both.
- [ ] Publish JSON with several values and unpack them with a function.
- [ ] Turn on username/password in Mosquitto (`mosquitto_passwd`) and update Node-RED and Python to use them.

---

## 8. SELF-TEST
1. What does `+` match and what does `#` match?
2. When would you set the retain flag?
3. What is a Last Will message for?
4. What is Tasmota's `cmnd/` topic used for?
5. Why is `allow_anonymous true` a bad idea on a shared network?

---

## 9. DONE
- [ ] File 04 complete. Next: **05 - Home Assistant Lab and Connection**.
