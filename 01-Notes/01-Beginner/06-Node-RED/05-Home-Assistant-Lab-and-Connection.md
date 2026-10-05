# 05 - Home Assistant Lab and Node-RED Connection

**Time:** 90 to 120 minutes (mostly waiting for downloads) | **Difficulty:** Medium | **Needs:** files 02 to 04
**Mirrors:** the `server` config node ("Home Assistant", add-on mode) used by every Home Assistant node in your workplace flows

---

## PROGRESS
- [ ] Chose lab Option A (VM) or Option B (Docker)
- [ ] Home Assistant running and onboarded
- [ ] Fake devices (helpers) created
- [ ] Node-RED connected to Home Assistant
- [ ] Read a state, called a service, and listened for a change
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
Every light, aircon and sensor flow at work depends on the Node-RED ↔ Home Assistant connection. Here you build your own safe copy so you can practise switching things on and off without touching a real office.

---

## 2. CONCEPTS

| Term | Meaning |
|---|---|
| Home Assistant OS (HAOS) | A ready-made appliance: HA plus the Add-on store |
| Add-on | An app inside HAOS (Node-RED, Mosquitto) |
| Helper | A virtual entity you create for testing (toggle = fake switch/sensor, number = fake temperature) |
| Long-lived access token | A password-like key that lets Node-RED talk to HA from outside |
| Websocket | How the HA nodes talk to HA in real time |
| Server config node | The Node-RED node that stores the HA address and token |

At work, your flows use the add-on connection (the server node is marked **add-on**), so no token is typed in. At home with Option B you will use a URL and token.

---

## 3. LAPTOP (Windows) - STEP BY STEP

### OPTION A: Home Assistant OS in VirtualBox (closest to work)
- [ ] Install VirtualBox. Check your laptop has virtualization enabled in BIOS/UEFI.
- [ ] Go to home-assistant.io → Installation → choose the **Generic x86-64 / virtual machine** image for VirtualBox (a `.vdi` file) and download it. Unzip it.
- [ ] VirtualBox → New: Type **Linux**, Version **Other Linux (64-bit)**, RAM **4096 MB**, 2 CPUs. Use the existing virtual disk (the `.vdi`).
- [ ] Settings → System → tick **Enable EFI**.
- [ ] Settings → Network → Adapter 1 → **Bridged Adapter** (so the VM gets its own address on your network).
- [ ] Start the VM. After a few minutes open `http://homeassistant.local:8123` (or the IP the VM console shows).
- [ ] Create your owner account and finish onboarding.
- [ ] Settings → **Add-ons** → Add-on store → install **Mosquitto broker** and **Node-RED** (Node-RED may be listed under "Home Assistant Community Add-ons"; add that repository if asked). Start both, tick "Start on boot" and "Show in sidebar".
- [ ] Node-RED opens from the HA sidebar. In its `server` config node, tick the add-on option (it uses the Supervisor connection automatically).

### OPTION B: Home Assistant in Docker (lighter)
- [ ] Install Docker Desktop for Windows (needs WSL2).
- [ ] PowerShell:
```
docker run -d --name homeassistant --restart=unless-stopped -v C:\ha-config:/config -p 8123:8123 ghcr.io/home-assistant/home-assistant:stable
```
- [ ] Open `http://localhost:8123`, finish onboarding.
- [ ] Your Windows Node-RED connects with a token (next section). There is no add-on store in this option.

### Create the fake devices (both options)
Settings → Devices & services → **Helpers** → Create helper:
- [ ] **Toggle** named `Fake Aircon` → entity `input_boolean.fake_aircon`
- [ ] **Toggle** named `Fake Light` → entity `input_boolean.fake_light`
- [ ] **Toggle** named `Fake Motion` → entity `input_boolean.fake_motion`
- [ ] **Number** named `Fake Temperature`, min 10, max 40, step 0.5, unit `°C`, mode slider → entity `input_number.fake_temperature`

Check the real entity ids under Settings → Entities; use exactly what HA shows.

### Connect Node-RED (Option B or standalone Windows Node-RED)
- [ ] In HA: click your name (bottom-left) → **Security** tab → **Long-lived access tokens** → Create. Copy the token now; HA shows it once.
- [ ] Palette → install `node-red-contrib-home-assistant-websocket`.
- [ ] Drag any HA node (for example **events: state**), edit it, and click the pencil beside **Server**.
- [ ] Base URL: `http://localhost:8123` (or the VM's address). Access token: paste. Deploy. The node should show **Connected**.

### Three first flows
**1. Read a state**
- [ ] inject → **current state** (entity `input_number.fake_temperature`) → debug. Click inject; the payload is the number as text.

**2. Call a service (turn something on)**
- [ ] inject → **call service**. Domain `homeassistant`, Service `turn_on`, Entity `input_boolean.fake_light`. Deploy and click inject.
- [ ] In HA, watch the `Fake Light` toggle flip. Repeat with `turn_off`.

**3. Listen for a change**
- [ ] **events: state** (entity `input_boolean.fake_motion`) → debug. Flip the toggle in HA and watch the message. Open the message and find `payload`, `data.old_state`, `data.new_state`.

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP
Read-only exploration:
- [ ] In Node-RED at work, open the Home Assistant `server` config node (any HA node → pencil icon). Note it is in add-on mode. **Do not edit.**
- [ ] In HA at work: Settings → Devices & services → Integrations. List which integrations exist (MQTT, Tasmota, Zigbee/ZHA, and so on).
- [ ] Settings → Add-ons: confirm Node-RED and Mosquitto exist.
- [ ] Developer tools → **States**: filter by `tasmota`, `ms01`, `th01` and note state values and attributes. This is read-only.
- [ ] Developer tools → **Actions** (formerly Services): look at the `homeassistant.turn_on` action to see the fields, but **do not run it** on a real device.

---

## 5. CHECKPOINT
- [ ] You flipped `input_boolean.fake_light` from Node-RED and saw it change in HA.
- [ ] You flipped `input_boolean.fake_motion` in HA and saw Node-RED react.
- [ ] You can explain add-on mode vs token mode.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| HA page won't load in the VM | Network adapter isn't bridged; check the VM console for its IP; wait 5 to 10 minutes on first boot |
| VM won't boot | EFI not enabled in VirtualBox System settings |
| Node shows "Unauthorized" | Token wrong or expired; create a new one |
| Entity not found in the dropdown | Use the entity id exactly as HA shows (it can differ from the friendly name) |
| Service call does nothing | Domain/service mismatch, or the entity doesn't support that service |
| State is text, not a number | HA states are strings; use `Number(msg.payload)` |
| Option B can't find add-ons | Docker HA has no add-on store; use Option A |

---

## 7. STRETCH
- [ ] Use **get entities** to list all `input_boolean` entities.
- [ ] Use **events: all** to see every HA event while you click around (careful, it's noisy).
- [ ] Create an HA **automation** that does the same thing as one of your Node-RED flows and compare the two ways of doing it.

---

## 8. SELF-TEST
1. What is the difference between an entity id and a friendly name?
2. Why are HA states always strings?
3. What does the Node-RED add-on connection do that a token connection doesn't need?
4. Which Home Assistant node reads a state once, and which one listens for changes?
5. Where do you find real entity ids at work without changing anything?

---

## 9. DONE
- [ ] File 05 complete. Next: **06 - Sensor Triggers and Thresholds**.
