# Raspberry Pi 4 B + Grove AM2302 (DHT22) Setup Guide (Node-RED)
This guide covers connecting a Grove AM2302 (DHT22) Temperature & Humidity Sensor to a Raspberry Pi 4 Model B using jumper wires and reading sensor data using **Node-RED**.

 ![[Pasted image 20261002120400.jpg|345]]  ![[Pasted image 20261002120601.jpg|344]]

> Grove Temperature & Humidity Sensor Pro with connecting cable

## 6.1 Wiring & Pinout
Insert **Male-to-Female jumper wires** into the female socket at the free end of your Grove cable, then connect the female ends to the Raspberry Pi GPIO header:  

|**Grove PCB Label**|**Cable Wire Color**|**Raspberry Pi Physical Pin**|**Header Function**|
|---|---|---|---|
|**SIG**|**Yellow**|**Pin 7**|**GPIO 4**|
|**NC**|**White**|_Not Connected_|Leave disconnected|
|**VCC**|**Red**|**Pin 1**|**3.3V Power**|
|**GND**|**Black**|**Pin 6**|**Ground (GND)**|

> [!note] **Note:** The white wire (NC) is not connected because single-bus digital sensors only require a single data line._

## 6.2 Node-RED Configuration

1. Open the menu in the top-right corner of Node-RED and select **Manage palette** -> **Install** tab.
2. Search for `node-red-contrib-dht-sensor` and click **Install**.
3. Drag a **rpi-dht22** node from the palette onto your canvas.
4. Double-click the **rpi-dht22** node and configure its properties:
    - **Sensor Model:** `DHT22` (or `AM2302`)
    - **Pin Number:** `4` (corresponds to GPIO 4 / Physical Pin 7)
5. Drag an **Inject** node (set to trigger periodically, e.g., every 5 seconds) and wire it to the input of the **rpi-dht22** node.
6. Drag a **Debug** node and wire it to the output of the **rpi-dht22** node.
7. Click **Deploy** in the top-right corner.

## 6.3 Node-RED Flow
You can import this flow directly into Node-RED (**Menu** -> **Import** -> paste JSON):
```json
[
    {
        "id": "inject_sensor_read",
        "type": "inject",
        "z": "flow_dht22",
        "name": "Trigger Every 5s",
        "props": [],
        "repeat": "5",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "x": 170,
        "y": 120,
        "wires": [
            [
                "dht22_node"
            ]
        ]
    },
    {
        "id": "dht22_node",
        "type": "rpi-dht22",
        "z": "flow_dht22",
        "name": "Grove AM2302",
        "topic": "dht22",
        "dhttype": "22",
        "pin": "4",
        "x": 380,
        "y": 120,
        "wires": [
            [
                "debug_output"
            ]
        ]
    },
    {
        "id": "debug_output",
        "type": "debug",
        "z": "flow_dht22",
        "name": "Sensor Output",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 600,
        "y": 120,
        "wires": []
    }
]
```

Your flow should look like this: ![[Pasted image 20261002151614.png]]






