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

> [!note] **Why the raw numbers look big (That's what she said):** the Linux IIO system reports temperature in *milli-degrees* and humidity in *milli-percent*, so you divide by **1000**. This avoids decimal points in kernel code. Always check the scale against a real reading you can sanity-check (room temperature is about 20-30 C).

**Real-world test:** BLOW IT! Jokes, breathe gently on the sensor. Humidity should jump up and then drift back. If it does, the whole chain (sensor, wiring, kernel driver) works.

> [!note] **`iio:device0` is hard-coded in this project.**
> The number can change if you add other IIO hardware. The proper check is `cat /sys/bus/iio/devices/iio:device*/name` and looking for the one called `dht11`. For one sensor on one Pi, `iio:device0` is fine.

## 6.4 Install the FlowFuse Dashboard Nodes

The flow uses the modern **Dashboard 2** nodes (`@flowfuse/node-red-dashboard`). They are different nodes from the older "Dashboard 1" (`node-red-dashboard`, the `ui_gauge` family). Do not mix them up, **I did**, now I don't know how to uninstall it 😘.

1. In Node-RED open the menu (top-right) and choose **Manage palette**.
2. Open the **Install** tab.
3. Search `@flowfuse/node-red-dashboard` and click **Install**.
4. Restart Node-RED if prompted.

![[Pasted image 20261007122952.png]]

> [!note] If you import the flow **before** installing these nodes, they will appear as grey "unknown" nodes. Install the package and redeploy, or re-import.

## 6.5 Import the Flow

1. Menu (top-right) then **Import**.
2. Choose **select a file to import** and pick `DHT22_Environmental_Monitor_Flow.json` (or paste its contents, it's somewhere in this folder, find it kid).
3. Choose **new flow** and click **Import**.
4. Click **Deploy**.

### `DHT22_Environmental_Monitor_Flow.json`:
```JSON
[
    {
        "id": "c2753ebf717df5cf",
        "type": "tab",
        "label": "DHT22 Environmental Monitor",
        "disabled": false,
        "info": "DHT22 -> Linux IIO -> Exec -> Parse -> Timestamp -> Validate -> FlowFuse Dashboard"
    },
    {
        "id": "24602ea70bc319c1",
        "type": "inject",
        "z": "c2753ebf717df5cf",
        "name": "Get Reading",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "5",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 200,
        "wires": [
            [
                "915eb2b2d9304821"
            ]
        ]
    },
    {
        "id": "915eb2b2d9304821",
        "type": "exec",
        "z": "c2753ebf717df5cf",
        "command": "printf 'temperature='; cat /sys/bus/iio/devices/iio:device0/in_temp_input; printf 'humidity='; cat /sys/bus/iio/devices/iio:device0/in_humidityrelative_input",
        "addpay": "",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "Read DHT22",
        "x": 320,
        "y": 200,
        "wires": [
            [
                "503cd747f9ffaa37"
            ],
            [
                "eabca7f0f0892b40"
            ],
            []
        ]
    },
    {
        "id": "503cd747f9ffaa37",
        "type": "function",
        "z": "c2753ebf717df5cf",
        "name": "Parse Sensor Data",
        "func": "// Input: msg.payload is the raw text from the Exec node, e.g.\n//   temperature=25400\n//   humidity=48000\n// Output: msg.payload = { temperature: 25.4, humidity: 48 }\n// Property names are LOWERCASE on purpose: JavaScript is case-sensitive,\n// and the validation node reads payload.temperature / payload.humidity.\n\nconst lines = String(msg.payload).trim().split(\"\\n\");\n\nlet temperature;   // stays undefined if the line is missing or malformed\nlet humidity;\n\nfor (const line of lines) {\n    // Only accept exactly \"key=digits\" so half-written lines are ignored\n    const match = line.trim().match(/^(temperature|humidity)=(-?\\d+)$/);\n    if (!match) {\n        continue;\n    }\n    const key = match[1];\n    const scaled = Number(match[2]) / 1000;      // IIO uses a 1000x scale\n    const value = Math.round(scaled * 10) / 10;  // 1 decimal place\n\n    if (key === \"temperature\") {\n        temperature = value;\n    } else {\n        humidity = value;\n    }\n}\n\nmsg.payload = {\n    temperature: temperature,\n    humidity: humidity\n};\n\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 200,
        "wires": [
            [
                "163e09bd1b612316"
            ]
        ]
    },
    {
        "id": "163e09bd1b612316",
        "type": "function",
        "z": "c2753ebf717df5cf",
        "name": "Add Timestamp",
        "func": "// Stored as ISO 8601 in UTC (the trailing Z). Convert to local time only when displaying.\nmsg.payload.timestamp = new Date().toISOString();\n\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 720,
        "y": 200,
        "wires": [
            [
                "a7ea4a62204aa672"
            ]
        ]
    },
    {
        "id": "a7ea4a62204aa672",
        "type": "function",
        "z": "c2753ebf717df5cf",
        "name": "Validate Sensor Reading",
        "func": "// TWO OUTPUTS:\n//   Output 1 = VALID   -> dashboard + debug\n//   Output 2 = INVALID -> error status + debug\n// return [msg, null]  sends msg out of output 1 only\n// return [null, msg]  sends msg out of output 2 only\n\nconst temperature = msg.payload.temperature;\nconst humidity = msg.payload.humidity;\n\nconst errors = [];\n\n// Number.isFinite() is false for undefined, null, NaN and Infinity,\n// and typeof check rejects strings and other non-numbers.\nconst tempIsNumber = typeof temperature === \"number\" && Number.isFinite(temperature);\nconst humIsNumber = typeof humidity === \"number\" && Number.isFinite(humidity);\n\nif (!tempIsNumber) {\n    errors.push(\"Invalid temperature\");\n} else if (temperature < -40 || temperature > 80) {\n    errors.push(\"Temperature outside expected range\");\n}\n\nif (!humIsNumber) {\n    errors.push(\"Invalid humidity\");\n} else if (humidity < 0 || humidity > 100) {\n    errors.push(\"Humidity outside expected range\");\n}\n\nif (errors.length > 0) {\n    msg.payload = {\n        valid: false,\n        errors: errors,\n        reading: msg.payload\n    };\n    return [null, msg];\n}\n\nmsg.payload.valid = true;\nmsg.payload.status = \"OK\";\n\nreturn [msg, null];\n",
        "outputs": 2,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 930,
        "y": 200,
        "wires": [
            [
                "ea2c5b3d64424733",
                "be9b8ef8a5e6d30b"
            ],
            [
                "37987edc4232deb7",
                "f03321021c63e1c7"
            ]
        ]
    },
    {
        "id": "ea2c5b3d64424733",
        "type": "debug",
        "z": "c2753ebf717df5cf",
        "name": "Debug: VALID",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1160,
        "y": 140,
        "wires": []
    },
    {
        "id": "37987edc4232deb7",
        "type": "debug",
        "z": "c2753ebf717df5cf",
        "name": "Debug: INVALID",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1160,
        "y": 300,
        "wires": []
    },
    {
        "id": "eabca7f0f0892b40",
        "type": "debug",
        "z": "c2753ebf717df5cf",
        "name": "Debug: EXEC ERROR",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 360,
        "y": 280,
        "wires": []
    },
    {
        "id": "be9b8ef8a5e6d30b",
        "type": "function",
        "z": "c2753ebf717df5cf",
        "name": "Prepare Dashboard Messages",
        "func": "// Takes ONE valid reading and splits it into four clean messages,\n// one per dashboard widget. Each widget reads msg.payload.\n//   Output 1 -> temperature gauge + chart  (number)\n//   Output 2 -> humidity gauge + chart     (number)\n//   Output 3 -> status text                (string)\n//   Output 4 -> last-updated text          (string)\n// msg.topic is the series name the charts use.\n\nconst reading = msg.payload;\n\nconst updated = new Date(reading.timestamp).toLocaleString(\"en-ZA\", {\n    timeZone: \"Africa/Johannesburg\",\n    hour12: false\n});\n\nreturn [\n    { payload: reading.temperature, topic: \"Temperature\" },\n    { payload: reading.humidity, topic: \"Humidity\" },\n    { payload: reading.status },\n    { payload: updated }\n];\n",
        "outputs": 4,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1190,
        "y": 200,
        "wires": [
            [
                "d53356228ccfb41e",
                "0911ce5330224a08"
            ],
            [
                "a873b17eddbfc319",
                "97bcac5ea64d787d"
            ],
            [
                "d69deaf663230d42"
            ],
            [
                "caed0596daf83585"
            ]
        ]
    },
    {
        "id": "f03321021c63e1c7",
        "type": "function",
        "z": "c2753ebf717df5cf",
        "name": "Build Error Status",
        "func": "// Turns a rejected reading into a short status line for the dashboard.\n// The gauges keep their last valid value; only the status text changes.\nconst errors = msg.payload.errors || [\"Unknown error\"];\n\nreturn { payload: \"SENSOR ERROR: \" + errors.join(\"; \") };\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1170,
        "y": 380,
        "wires": [
            [
                "d69deaf663230d42"
            ]
        ]
    },
    {
        "id": "d53356228ccfb41e",
        "type": "ui-gauge",
        "z": "c2753ebf717df5cf",
        "name": "Temperature Gauge",
        "group": "a1ed80d0555a6349",
        "order": 1,
        "width": 3,
        "height": 3,
        "gtype": "gauge-34",
        "gstyle": "needle",
        "title": "Temperature",
        "units": "°C",
        "icon": "",
        "prefix": "",
        "suffix": "",
        "segments": [
            {
                "from": "-10",
                "color": "#3b82f6"
            },
            {
                "from": "18",
                "color": "#5cd65c"
            },
            {
                "from": "28",
                "color": "#ffc800"
            },
            {
                "from": "35",
                "color": "#ea5353"
            }
        ],
        "min": -10,
        "max": 50,
        "sizeThickness": 16,
        "sizeGap": 4,
        "sizeKeyThickness": 8,
        "styleRounded": true,
        "styleGlow": false,
        "className": "",
        "x": 1480,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "a873b17eddbfc319",
        "type": "ui-gauge",
        "z": "c2753ebf717df5cf",
        "name": "Humidity Gauge",
        "group": "a1ed80d0555a6349",
        "order": 2,
        "width": 3,
        "height": 3,
        "gtype": "gauge-34",
        "gstyle": "needle",
        "title": "Humidity",
        "units": "% RH",
        "icon": "",
        "prefix": "",
        "suffix": "",
        "segments": [
            {
                "from": "0",
                "color": "#ffc800"
            },
            {
                "from": "30",
                "color": "#5cd65c"
            },
            {
                "from": "70",
                "color": "#3b82f6"
            }
        ],
        "min": 0,
        "max": 100,
        "sizeThickness": 16,
        "sizeGap": 4,
        "sizeKeyThickness": 8,
        "styleRounded": true,
        "styleGlow": false,
        "className": "",
        "x": 1480,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "d69deaf663230d42",
        "type": "ui-text",
        "z": "c2753ebf717df5cf",
        "group": "a1ed80d0555a6349",
        "order": 3,
        "width": 6,
        "height": 1,
        "name": "System Status",
        "label": "System Status",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#717171",
        "wrapText": false,
        "className": "",
        "value": "payload",
        "valueType": "msg",
        "x": 1480,
        "y": 220,
        "wires": []
    },
    {
        "id": "caed0596daf83585",
        "type": "ui-text",
        "z": "c2753ebf717df5cf",
        "group": "a1ed80d0555a6349",
        "order": 4,
        "width": 6,
        "height": 1,
        "name": "Last Updated",
        "label": "Last Updated (SAST)",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#717171",
        "wrapText": false,
        "className": "",
        "value": "payload",
        "valueType": "msg",
        "x": 1480,
        "y": 280,
        "wires": []
    },
    {
        "id": "0911ce5330224a08",
        "type": "ui-chart",
        "z": "c2753ebf717df5cf",
        "group": "cce980f7d691c1f6",
        "name": "Temperature Chart",
        "label": "Temperature (°C)",
        "order": 1,
        "chartType": "line",
        "category": "topic",
        "categoryType": "msg",
        "xAxisLabel": "",
        "xAxisProperty": "",
        "xAxisPropertyType": "timestamp",
        "xAxisType": "time",
        "xAxisFormat": "",
        "xAxisFormatType": "auto",
        "xmin": "",
        "xmax": "",
        "yAxisLabel": "",
        "yAxisProperty": "payload",
        "yAxisPropertyType": "msg",
        "ymin": "",
        "ymax": "",
        "action": "append",
        "stackSeries": false,
        "pointShape": "false",
        "pointRadius": 4,
        "showLegend": false,
        "removeOlder": 1,
        "removeOlderUnit": "3600",
        "removeOlderPoints": "",
        "colors": [
            "#ea5353",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728"
        ],
        "textColor": [
            "#666666"
        ],
        "textColorDefault": true,
        "gridColor": [
            "#e5e5e5"
        ],
        "gridColorDefault": true,
        "width": 6,
        "height": 4,
        "className": "",
        "interpolation": "linear",
        "x": 1480,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "97bcac5ea64d787d",
        "type": "ui-chart",
        "z": "c2753ebf717df5cf",
        "group": "cce980f7d691c1f6",
        "name": "Humidity Chart",
        "label": "Humidity (% RH)",
        "order": 2,
        "chartType": "line",
        "category": "topic",
        "categoryType": "msg",
        "xAxisLabel": "",
        "xAxisProperty": "",
        "xAxisPropertyType": "timestamp",
        "xAxisType": "time",
        "xAxisFormat": "",
        "xAxisFormatType": "auto",
        "xmin": "",
        "xmax": "",
        "yAxisLabel": "",
        "yAxisProperty": "payload",
        "yAxisPropertyType": "msg",
        "ymin": "0",
        "ymax": "100",
        "action": "append",
        "stackSeries": false,
        "pointShape": "false",
        "pointRadius": 4,
        "showLegend": false,
        "removeOlder": 1,
        "removeOlderUnit": "3600",
        "removeOlderPoints": "",
        "colors": [
            "#3b82f6",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728"
        ],
        "textColor": [
            "#666666"
        ],
        "textColorDefault": true,
        "gridColor": [
            "#e5e5e5"
        ],
        "gridColorDefault": true,
        "width": 6,
        "height": 4,
        "className": "",
        "interpolation": "linear",
        "x": 1480,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "a1ed80d0555a6349",
        "type": "ui-group",
        "name": "Current Conditions",
        "page": "9396840b5b34e3fa",
        "width": "6",
        "height": "1",
        "order": 1,
        "showTitle": true,
        "className": "",
        "visible": "true",
        "disabled": "false",
        "groupType": "default"
    },
    {
        "id": "cce980f7d691c1f6",
        "type": "ui-group",
        "name": "History (last hour)",
        "page": "9396840b5b34e3fa",
        "width": "6",
        "height": "1",
        "order": 2,
        "showTitle": true,
        "className": "",
        "visible": "true",
        "disabled": "false",
        "groupType": "default"
    },
    {
        "id": "9396840b5b34e3fa",
        "type": "ui-page",
        "name": "Environment",
        "ui": "476888e48ef8c66f",
        "path": "/environment",
        "icon": "home",
        "layout": "grid",
        "theme": "381146ee04665a6a",
        "breakpoints": [
            {
                "name": "Default",
                "px": "0",
                "cols": "3"
            },
            {
                "name": "Tablet",
                "px": "576",
                "cols": "6"
            },
            {
                "name": "Small Desktop",
                "px": "768",
                "cols": "9"
            },
            {
                "name": "Desktop",
                "px": "1024",
                "cols": "12"
            }
        ],
        "order": 1,
        "className": "",
        "visible": "true",
        "disabled": "false"
    },
    {
        "id": "476888e48ef8c66f",
        "type": "ui-base",
        "name": "Environment Monitor",
        "path": "/dashboard",
        "includeClientData": true,
        "acceptsClientConfig": [
            "ui-notification",
            "ui-control"
        ],
        "showPathInSidebar": false,
        "headerContent": "page",
        "navigationStyle": "default",
        "titleBarStyle": "default",
        "showReconnectNotification": true,
        "notificationDisplayTime": 1,
        "showDisconnectNotification": true,
        "allowInstall": true
    },
    {
        "id": "381146ee04665a6a",
        "type": "ui-theme",
        "name": "Environment Theme",
        "colors": {
            "surface": "#ffffff",
            "primary": "#0094ce",
            "bgPage": "#eeeeee",
            "groupBg": "#ffffff",
            "groupOutline": "#cccccc"
        },
        "sizes": {
            "pagePadding": "12px",
            "groupGap": "12px",
            "groupBorderRadius": "4px",
            "widgetGap": "12px"
        }
    },
    {
        "id": "35733c3d2d6420d0",
        "type": "global-config",
        "env": [],
        "modules": {
            "@flowfuse/node-red-dashboard": "1.33.0"
        }
    }
]
```

## 6.6 The Flow, Node by Node
### Node-RED vocabulary used here

| Term                 | Meaning                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| **Message (`msg`)**  | A JavaScript object that travels from node to node along the wires                                        |
| **`msg.payload`**    | The conventional property that carries the main data. Most nodes read and write this one                  |
| **Wire / output**    | A node can have several outputs. Each is a separate exit. Wires connect an output to the next node's input |

### The nodes
![[Pasted image 20261007123351.png]]

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
![[Pasted image 20261007123504.png]]

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
#### The `Parse: Sensor Data` function Node
```JavaScript
// Input: msg.payload is the raw text from the Exec node, e.g.
//   temperature=25400
//   humidity=48000
// Output: msg.payload = { temperature: 25.4, humidity: 48 }
// Property names are LOWERCASE on purpose: JavaScript is case-sensitive,
// and the validation node reads payload.temperature / payload.humidity.

const lines = String(msg.payload).trim().split("\n");

let temperature;   // stays undefined if the line is missing or malformed
let humidity;

for (const line of lines) {
    // Only accept exactly "key=digits" so half-written lines are ignored
    const match = line.trim().match(/^(temperature|humidity)=(-?\d+)$/);
    if (!match) {
        continue;
    }

    const key = match[1];
    const scaled = Number(match[2]) / 1000;      // IIO uses a 1000x scale
    const value = Math.round(scaled * 10) / 10;  // 1 decimal place

    if (key === "temperature") {
        temperature = value;
    } else {
        humidity = value;
    }
}
  
msg.payload = {
    temperature: temperature,
    humidity: humidity
};

return msg;
```

#### The `Add Timestamp` function node
```JavaScript
// Stored as ISO 8601 in UTC (the trailing Z). Convert to local time only when displaying.
msg.payload.timestamp = new Date().toISOString();

return msg;
```

#### The `Validate Sensor Reading` function node
On the setup tab ensure this function has 2 outputs
```JavaScript
// TWO OUTPUTS:
//   Output 1 = VALID   -> dashboard + debug
//   Output 2 = INVALID -> error status + debug
// return [msg, null]  sends msg out of output 1 only
// return [null, msg]  sends msg out of output 2 only
const temperature = msg.payload.temperature;
const humidity = msg.payload.humidity;
const errors = [];
  
// Number.isFinite() is false for undefined, null, NaN and Infinity,
// and typeof check rejects strings and other non-numbers.
const tempIsNumber = typeof temperature === "number" && Number.isFinite(temperature);
const humIsNumber = typeof humidity === "number" && Number.isFinite(humidity);
  
if (!tempIsNumber) {
    errors.push("Invalid temperature");
} else if (temperature < -40 || temperature > 80) {
    errors.push("Temperature outside expected range");
}
  
if (!humIsNumber) {
    errors.push("Invalid humidity");
} else if (humidity < 0 || humidity > 100) {
    errors.push("Humidity outside expected range");
}
  
if (errors.length > 0) {
    msg.payload = {
        valid: false,
        errors: errors,
        reading: msg.payload
    };
    return [null, msg];
}
  
msg.payload.valid = true;
msg.payload.status = "OK";
  
return [msg, null];
```

#### The `Prepare Dashboard Messages` function node
On the setup tab ensure this function has 4 outputs
```JavaScript
// Takes ONE valid reading and splits it into four clean messages,
// one per dashboard widget. Each widget reads msg.payload.
//   Output 1 -> temperature gauge + chart  (number)
//   Output 2 -> humidity gauge + chart     (number)
//   Output 3 -> status text                (string)
//   Output 4 -> last-updated text          (string)
// msg.topic is the series name the charts use.
  
const reading = msg.payload;
  
const updated = new Date(reading.timestamp).toLocaleString("en-ZA", {
    timeZone: "Africa/Johannesburg",
    hour12: false
});

return [
    { payload: reading.temperature, topic: "Temperature" },
    { payload: reading.humidity, topic: "Humidity" },
    { payload: reading.status },
    { payload: updated }
];
```

#### The `Build Error Status` function node
```JavaScript
// Turns a rejected reading into a short status line for the dashboard.
// The gauges keep their last valid value; only the status text changes.
const errors = msg.payload.errors || ["Unknown error"];

return { payload: "SENSOR ERROR: " + errors.join("; ") };
```

#### Breakdown
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

### How it should look
#### Temperature Chart
Live Temperature and Humidity
![[Pasted image 20261007131108.png]]

#### 
Record and History of Temperature and Humidity
![[Pasted image 20261007131132.png]]
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

| Symptom                                                  | Likely cause                                            | What to do                                                                                         |
| -------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `No such file or directory` on the `iio:device0` path    | Overlay not loaded                                      | Check the line is above/outside `[pi5]`, then reboot. Run `ls /sys/bus/iio/devices/`               |
| `iio:device0` missing but `iio:device1` exists           | Different device number                                 | Run `cat /sys/bus/iio/devices/iio:device*/name` and use the one named `dht11`                      |
| Occasional `Input/output error` in **Debug: EXEC ERROR** | The DHT22 missed a read. This is normal for DHT sensors | Ignore single failures. Validation drops the bad cycle and the next reading in 5 s is usually fine |
| Constant `Input/output error`                            | Loose wire or wrong pin                                 | Re-seat yellow (pin 7), red (pin 1), black (pin 6). Test with `cat` in the terminal                |
| Dashboard shows `SENSOR ERROR: ...`                      | Last reading rejected                                   | Check **Debug: INVALID** for the exact reason                                                      |
| Humidity above 100 or temperature wildly wrong           | Corrupted read                                          | Validation should reject it. Check **Debug: INVALID**                                              |
| Python says `Unable to set line 4 to input`              | Kernel driver owns GPIO 4 (expected)                    | Do not use Python GPIO. Read the IIO files                                                         |
| Grey "unknown" nodes after import                        | Dashboard 2 package not installed                       | Install `@flowfuse/node-red-dashboard` (section 6.4), redeploy                                     |
| Dashboard page not found                                 | Wrong URL                                               | Use `http://<pi-ip>:1880/dashboard/environment`                                                    |
| `apt update` says "Not live until ..."                   | Pi clock is wrong                                       | `sudo systemctl restart systemd-timesyncd`, wait, check with `date`                                |
| `node-red-start` / `node-red-stop` not found             | Node.js managed by NVM, helper commands are not created | Run `node-red` directly, or manage it with PM2                                                     |
> Don't forget to **Deploy** after every change.
