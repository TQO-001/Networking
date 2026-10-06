# Raspberry Pi 4 B + Grove AM2302 (DHT22) Setup Guide (Node-RED)

This guide connects a Grove AM2302 (DHT22) Temperature & Humidity Sensor to a Raspberry Pi 4 Model B and shows the readings on a **FlowFuse Dashboard** (Dashboard 2) in Node-RED.

The sensor is read through the **Linux kernel's IIO interface**, not through a Python GPIO library and not through the `rpi-dht22` Node-RED node. I was gonna crashout, but I decided it would be more productive to document my mistakes, the full list of what went wrong on the way here is in `07-Mistakes_and_Stuff.md`.

 ![[Pasted image 20261002120400.jpg|345]]  ![[Pasted image 20261002120601.jpg|344]]

> Grove Temperature & Humidity Sensor Pro with connecting cable

## 6.1 Hardware & Wiring

Insert **Male-to-Female jumper wires** into the female socket at the free end of your Grove cable, then connect the female ends to the Raspberry Pi GPIO header:
![[Pasted image 20261005103037.jpg|298]]

| **Grove PCB Label** | **Cable Wire Color** | **Raspberry Pi Physical Pin** | **Header Function**   |
| ------------------- | -------------------- | ----------------------------- | --------------------- |
| **SIG**             | **Yellow**           | **Pin 7**                     | **GPIO 4**            |
| **NC**              | **White**            | _Not Connected_               | Leave disconnected    |
| **VCC**             | **Red**              | **Pin 1**                     | **3.3V Power**        |
| **GND**             | **Black**            | **Pin 6**                     | **Ground (GND)**      |
![[Pasted image 20260929150700.png]]

> [!note] **Note:** The white wire (NC) is not connected because single-bus digital sensors only need a single data line. Don't fully understand what that means but just ignore it, it doesn't matter.

> [!warning] **Physical pin vs GPIO number**
> "Pin 7" (physical, counting along the header) and "GPIO 4" (the chip's own numbering) are the **same wire**. Pin 4 (physical) is a **5V power pin**, which is not GPIO 4. Mixing these up caused the first set of fake readings

## 6.2 Enable the Kernel Driver (Device Tree Overlay)

The kernel has a built-in driver for DHT-type sensors. You switch it on with one line in the boot config.

1. Open the config file:
   ```bash
   sudo nano /boot/firmware/config.txt
   ```
2. Add this line **in the general section** (above any `[pi5]`, `[cm4]` etc. block), or put `[all]` on the line above it:
   ```
   [all]
   dtoverlay=dht11,gpiopin=4,dht22=1
   ```
3. Save (`Ctrl+O`, `Enter`) and exit (`Ctrl+X`).
4. Reboot:
   ```bash
   sudo reboot
   ```

What the line means:

| Part             | Meaning                                                        |
| ---------------- | -------------------------------------------------------------- |
| `dtoverlay=dht11` | Load the kernel's DHT driver (the module is named `dht11`)     |
| `gpiopin=4`      | The data wire is on GPIO 4 (physical pin 7)                    |
| `dht22=1`        | Treat the sensor as a DHT22/AM2302 (different data format than a DHT11) |

> [!warning] **Section headers in config.txt matter**
> Lines under `[pi5]` only apply to a Raspberry Pi 5. On a Pi 4 B they are silently ignored, and no error tells you so. Our overlay was first placed under `[pi5]` and did nothing.

> [!warning] **The kernel now owns GPIO 4**
> While this overlay is active, no other program (Python, `gpiod`, etc.) can use GPIO 4. Trying gives `Unable to set line 4 to input`. That is expected, not a fault.

## 6.3 Check the Sensor From the Terminal (Do This Before Node-RED)

```bash
ls /sys/bus/iio/devices/
```
You should see `iio:device0` (possibly `iio:device1` too if other IIO devices exist).

```bash
ls /sys/bus/iio/devices/iio:device0/
```
Expected files:
```
in_humidityrelative_input   in_temp_input   name   of_node   power   subsystem   uevent   waiting_for_supplier
```

```bash
cat /sys/bus/iio/devices/iio:device0/name
cat /sys/bus/iio/devices/iio:device0/in_temp_input
cat /sys/bus/iio/devices/iio:device0/in_humidityrelative_input
```

Example output:

| Command target               | Raw output | Meaning              |
| ---------------------------- | ---------- | -------------------- |
| `in_temp_input`              | `25400`    | 25.4 degrees C       |
| `in_humidityrelative_input`  | `48000`    | 48.0 % relative humidity |

**Why the raw numbers look big:** the Linux IIO system reports temperature in *milli-degrees* and humidity in *milli-percent*, so you divide by **1000**. This avoids decimal points in kernel code. Always check the scale against a real reading you can sanity-check (room temperature is about 20-30 C).

**Real-world test:** breathe gently on the sensor. Humidity should jump up and then drift back. If it does, the whole chain (sensor, wiring, kernel driver) works.

> [!note] **`iio:device0` is hard-coded in this project.**
> The number can change if you add other IIO hardware. The proper check is `cat /sys/bus/iio/devices/iio:device*/name` and looking for the one called `dht11`. For one sensor on one Pi, `iio:device0` is fine.

## 6.4 Install the FlowFuse Dashboard Nodes

The flow uses the modern **Dashboard 2** nodes (`@flowfuse/node-red-dashboard`). They are different nodes from the older "Dashboard 1" (`node-red-dashboard`, the `ui_gauge` family). Do not mix them up, **I did**, now I don't know how to uninstall it.

1. In Node-RED open the menu (top-right) and choose **Manage palette**.
2. Open the **Install** tab.
3. Search `@flowfuse/node-red-dashboard` and click **Install**.
4. Restart Node-RED if prompted.

> [!note] If you import the flow **before** installing these nodes, they will appear as grey "unknown" nodes. Install the package and redeploy, or re-import.

You do **not** need `node-red-contrib-dht-sensor` or the `rpi-dht22` node any more. If they are installed, leave them alone or remove them. The flow never uses them.

## 6.5 Import the Flow

1. Menu (top-right) then **Import**.
2. Choose **select a file to import** and pick `DHT22_Environmental_Monitor_Flow.json` (or paste its contents, it's somewhere in this folder).
3. Choose **new flow** and click **Import**.
4. Click **Deploy**.

## 6.6 The Flow, Node by Node
### Node-RED vocabulary used here

| Term                 | Meaning                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| **Message (`msg`)**  | A JavaScript object that travels from node to node along the wires                                        |
| **`msg.payload`**    | The conventional property that carries the main data. Most nodes read and write this one                  |
| **Wire / output**    | A node can have several outputs. Each is a separate exit. Wires connect an output to the next node's input |

### The nodes

| # | Node name                    | Type     | What it does                                                                 | Why it exists                                                                                  |
| - | ---------------------------- | -------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 1 | **Get Reading**              | inject   | Fires every 5 seconds, and once right after Deploy                           | It is the clock. The sensor does not push data; we ask for it                                  |
| 2 | **Read DHT22**               | exec     | Runs one shell command that prints both values                               | Asks Linux for the values. No Python, no extra library                                         |
| 3 | **Parse Sensor Data**        | function | Turns text into `{ temperature, humidity }` as numbers, divided by 1000      | Text like `temperature=25400` is not usable by gauges or comparisons                           |
| 4 | **Add Timestamp**            | function | Adds `timestamp` as an ISO 8601 UTC string                                   | Every reading needs to say when it happened, for charts, logs and a future database            |
| 5 | **Validate Sensor Reading**  | function | Checks the numbers. **Two outputs**: 1 = valid, 2 = invalid                  | Stops garbage (like 150% humidity) reaching the dashboard                                      |
| 6 | **Debug: VALID**             | debug    | Shows valid messages in the debug sidebar                                    | Lets you see what the dashboard is receiving                                                   |
| 7 | **Debug: INVALID**           | debug    | Shows rejected readings with the reasons                                     | Lets you see what was thrown away and why                                                      |
| 8 | **Debug: EXEC ERROR**        | debug    | Shows the command's error text (stderr)                                      | Shows kernel read failures like `Input/output error`                                           |
| 9 | **Prepare Dashboard Messages** | function | Splits one valid reading into 4 messages (one per widget)                 | Dashboard widgets read `msg.payload`, so each needs its own message with just its value        |
| 10 | **Build Error Status**      | function | Turns a rejection into text such as `SENSOR ERROR: Humidity outside expected range` | The dashboard shows a failure instead of silently freezing                              |

### The Exec command

```bash
printf 'temperature='; cat /sys/bus/iio/devices/iio:device0/in_temp_input; printf 'humidity='; cat /sys/bus/iio/devices/iio:device0/in_humidityrelative_input
```

It prints two labelled lines:
```
temperature=25400
humidity=48000
```
`printf` writes the label (no newline), then `cat` writes the number (with a newline). A predictable `key=value` format makes the parser simple.

### Parsing: how the code works

```javascript
const lines = String(msg.payload).trim().split("\n");
```
`msg.payload` is the Exec output. `split("\n")` cuts it into one string per line.

```javascript
const match = line.trim().match(/^(temperature|humidity)=(-?\d+)$/);
```
Only a line that is exactly `temperature=<digits>` or `humidity=<digits>` is accepted. Half-written lines are ignored, so a failed read leaves the value `undefined` instead of becoming a false `0`.

```javascript
const scaled = Number(match[2]) / 1000;
```
`Number("25400")` converts text to the number 25400, then `/ 1000` gives 25.4.

```javascript
msg.payload = { temperature: temperature, humidity: humidity };
```
Replaces the text with an object. Property names are **lowercase** because JavaScript is case-sensitive: `payload.Temperature` and `payload.temperature` are different properties.

### Validation: two outputs

```javascript
return [msg, null];   // goes out of output 1 (VALID)
return [null, msg];   // goes out of output 2 (INVALID)
```
A Function node returns an **array with one slot per output**. `null` in a slot means "send nothing there". The node **must be configured with Outputs: 2**, otherwise the second slot has nowhere to go.

Rules checked:

| Value       | Accepted range  | Also rejected                               |
| ----------- | --------------- | ------------------------------------------- |
| Temperature | -40 to 80 C     | `undefined`, `null`, `NaN`, `Infinity`, text |
| Humidity    | 0 to 100 %      | `undefined`, `null`, `NaN`, `Infinity`, text |

The range -40 to 80 C is the DHT22's specified measuring range.

### Message structure

Valid reading:
```json
{
    "temperature": 25.4,
    "humidity": 48,
    "timestamp": "2026-10-06T07:45:00.000Z",
    "valid": true,
    "status": "OK"
}
```

Rejected reading:
```json
{
    "valid": false,
    "errors": ["Humidity outside expected range"],
    "reading": {
        "temperature": 25.4,
        "humidity": 150,
        "timestamp": "2026-10-06T07:45:00.000Z"
    }
}
```

> [!note] **Timestamps and time zones**
> The trailing `Z` means UTC. South Africa is UTC+2, so `07:45Z` is `09:45` local. Store UTC, convert for display. The dashboard's "Last Updated" text does that conversion (Africa/Johannesburg).

> [!note] **Keep the data machine-readable.**
> Do not put text like `"Temperature: 25.4 C"` into the pipeline. Keep clean numbers and let the dashboard format them. Then the same data can later feed a database, alerts, MQTT, Grafana or Home Assistant with no changes to the sensor code.

## 6.7 The FlowFuse Dashboard

The flow creates its own configuration nodes:

| Config node | Name / value                                                      |
| ----------- | ----------------------------------------------------------------- |
| `ui-base`   | "Environment Monitor", path `/dashboard`                          |
| `ui-theme`  | "Environment Theme"                                               |
| `ui-page`   | "Environment", path `/environment`                                |
| `ui-group`  | "Current Conditions" and "History (last hour)"                    |

Widgets:

| Widget            | Shows                                     |
| ----------------- | ----------------------------------------- |
| Temperature gauge | Current temperature, -10 to 50 C          |
| Humidity gauge    | Current humidity, 0 to 100 % RH           |
| System Status     | `OK`, or `SENSOR ERROR: ...` after a rejected reading |
| Last Updated      | Time of the last valid reading (South African time) |
| Two line charts   | Temperature and humidity over the last hour |

**How to open it:**

```
http://<pi-ip-address>:1880/dashboard/environment
```
Find the Pi's address with `hostname -I`. Replace `1880` if you run Node-RED on a different port. Open the same link from a phone or laptop on the same network.

**Behaviour to know:** when a reading is rejected, the gauges keep their **last valid value** and only the status text changes. The chart only receives valid readings, so rejected readings leave gaps rather than false points.

## 6.8 Why Linux IIO Instead of a Python GPIO Library

The DHT22 sends data as a stream of pulses whose lengths are measured in **microseconds**. Reading it from a normal program means the program must watch the pin with microsecond accuracy while Linux is also running everything else. A tiny scheduling delay misses a pulse.

| Approach                                  | What happened here                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------------ |
| `rpi-dht22` Node-RED node                 | Returned fake values (100 / 110, then 0.00) and kept doing so with the sensor unplugged |
| Python `adafruit-circuitpython-dht`       | `DHT sensor not found` and `Read timeout: GPIO timing pulse missed`            |
| **Kernel driver (IIO) + Exec `cat`**      | Real readings: 25.4 C, 48 % RH. **This is what we use**                       |

The kernel driver does the timing inside the kernel, where it is far more precise, and publishes the result as two small files. Node-RED only has to read a file. Do not add a Python GPIO library back in: the kernel owns GPIO 4 and the library will fail with `Unable to set line 4 to input`.

> [!note] **Why Exec + `cat` and not the "file in" node?**
> Reading the same files with Node-RED's `file in` node produced `EIO` and `ETIMEDOUT` errors. Reading them with `cat` through an Exec node worked. The exact internal reason was not proven, so treat it as an observed fact: **use Exec with `cat`**.

## 6.9 Troubleshooting

| Symptom                                                  | Likely cause                                              | What to do                                                                                  |
| -------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `No such file or directory` on the `iio:device0` path    | Overlay not loaded                                        | Check the line is above/outside `[pi5]`, then reboot. Run `ls /sys/bus/iio/devices/`        |
| `iio:device0` missing but `iio:device1` exists           | Different device number                                   | Run `cat /sys/bus/iio/devices/iio:device*/name` and use the one named `dht11`               |
| Occasional `Input/output error` in **Debug: EXEC ERROR** | The DHT22 missed a read. This is normal for DHT sensors   | Ignore single failures. Validation drops the bad cycle and the next reading in 5 s is usually fine |
| Constant `Input/output error`                            | Loose wire or wrong pin                                   | Re-seat yellow (pin 7), red (pin 1), black (pin 6). Test with `cat` in the terminal         |
| Dashboard shows `SENSOR ERROR: ...`                      | Last reading rejected                                     | Check **Debug: INVALID** for the exact reason                                               |
| Humidity above 100 or temperature wildly wrong           | Corrupted read                                            | Validation should reject it. Check **Debug: INVALID**                                       |
| Python says `Unable to set line 4 to input`              | Kernel driver owns GPIO 4 (expected)                      | Do not use Python GPIO. Read the IIO files                                                  |
| Grey "unknown" nodes after import                        | Dashboard 2 package not installed                         | Install `@flowfuse/node-red-dashboard` (section 6.4), redeploy                              |
| Dashboard page not found                                 | Wrong URL                                                 | Use `http://<pi-ip>:1880/dashboard/environment`                                             |
| `apt update` says "Not live until ..."                   | Pi clock is wrong                                         | `sudo systemctl restart systemd-timesyncd`, wait, check with `date`                         |
| `node-red-start` / `node-red-stop` not found             | Node.js managed by NVM, helper commands are not created   | Run `node-red` directly, or manage it with PM2                                              |

> [!warning] **Limit of the validation.**
> Range checks catch *impossible* values (humidity 150 %). They cannot catch a wrong value that is still *plausible* (a sudden 12.3 C in a warm room). If that becomes a problem, add a "changed too fast" check as an extra, visible rule that flags the reading, rather than quietly replacing it with the previous value. Replacing it would hide a sensor or driver fault.

## 6.10 Final Verification Checklist

- [ ] Sensor wired: yellow to pin 7, red to pin 1, black to pin 6, white unconnected
- [ ] `dtoverlay=dht11,gpiopin=4,dht22=1` is in the general / `[all]` section of `config.txt`
- [ ] Pi rebooted after editing `config.txt`
- [ ] `ls /sys/bus/iio/devices/` shows `iio:device0`
- [ ] `cat` of `in_temp_input` returns a number like `25400`
- [ ] `cat` of `in_humidityrelative_input` returns a number like `48000`
- [ ] Breathing on the sensor changes the humidity reading
- [ ] `@flowfuse/node-red-dashboard` installed in the palette
- [ ] Flow imported and **Deployed**
- [ ] **Debug: VALID** shows `temperature`, `humidity`, `timestamp`, `valid: true`, `status: "OK"`
- [ ] **Debug: INVALID** stays empty during normal operation
- [ ] Failure test done: temporarily change humidity max from `100` to `40` in the validation node, Deploy, confirm readings go to **Debug: INVALID**, then change it back and Deploy
- [ ] Dashboard opens at `/dashboard/environment` and shows gauges, status `OK`, last updated time and charts

> Don't forget to **Deploy** after every change.
