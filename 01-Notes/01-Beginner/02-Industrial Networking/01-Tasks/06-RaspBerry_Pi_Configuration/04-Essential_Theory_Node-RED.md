Learn at least a general amount of how everything you're working with works

> [!info] **Info**
> ==You do not need to be a full-time programmer to use Node-RED==, but you do need to understand how data moves through it, what a message is, and how it connects to the industrial protocols and devices you already know. This file starts from zero and builds up to a working mental model.

# 2. Theory
## 2.1 What Node-RED is and why OT uses it

**Node-RED** is a **low-code, flow-based programming tool**. Instead of writing code line by line, you drag **nodes** onto a canvas in your browser and connect them with **wires**. Data flows along the wires from one node to the next.

- Built on **Node.js** (JavaScript runs underneath).
- Created at IBM in 2013, now an open-source project under the **OpenJS Foundation**.
- Runs on almost anything: a Raspberry Pi, a Windows or Linux server, a Docker container, or a cloud VM.
- The editor is a **web page**, so you build flows from any browser on the network.

### The idea in one sentence
> Something happens (a trigger or incoming data) → the data is changed or checked → something is done with it (stored, shown, sent, alerted).

### Why it fits OT and your toolkit
In industrial environments you constantly have to move data between systems that don't naturally talk to each other: a PLC speaking **Modbus**, a sensor publishing **MQTT**, a SCADA system wanting **OPC UA**, a database, a dashboard, an email alert. Node-RED is the **glue** between them. Typical jobs:

| **Job** | **Example** |
| --- | --- |
| Protocol translation | Read Modbus registers from a device and publish them as MQTT |
| Data collection | Poll sensors every 10 seconds and store readings in a database |
| Dashboards | Live temperature and status page on a screen |
| Alerts | Email or message someone when a value crosses a threshold |
| Automation | Call a web API or run a script when something happens |
| Prototyping | Build a working proof of concept in an afternoon |

### Where it does *not* replace things
Node-RED is great for integration and prototypes, but it is **not a safety system or a hard real-time controller**. Anything that must react in guaranteed milliseconds or protect people (emergency stops, safety interlocks) belongs in a PLC or dedicated safety hardware, not in a Node.js program on a Pi.

### Connection to what you already know
- **Purdue model:** Node-RED usually sits as a **gateway/edge node** between levels (reading from Level 1-2 devices, serving data upward). Where you place it affects security (see 2.10).
- **Python skills:** The logic ideas (variables, if/else, loops) are identical. Only the syntax changes: Node-RED's code nodes use **JavaScript**.
- **Raspberry Pi notes:** A Pi 4 is a very common home for Node-RED.

- [ ] I can explain what Node-RED does and what it should not be used for

---
## 2.2 The Editor and Core Concepts

### The editor layout (default address `http://<ip-address>:1880`)
| **Area** | **What it is** |
| --- | --- |
| **Palette** (left) | The library of available nodes. Drag from here |
| **Workspace / canvas** (centre) | Where you build flows. Each tab is a separate **flow** |
| **Sidebar** (right) | Info, **Debug**, Help, Configuration nodes, Context data tabs |
| **Deploy button** (top right) | Sends your changes live. **Nothing runs until you Deploy** |
| **Menu** (top right) | Import, Export, Manage palette, Settings |

### The vocabulary
| **Term** | **Meaning** |
| --- | --- |
| **Node** | A single building block with one job (e.g. "read a Modbus register") |
| **Wire** | A line connecting an output of one node to the input of another |
| **Flow** | A tab containing connected nodes. Also used for the whole running program |
| **Message (`msg`)** | The data packet travelling along the wires (see 2.3) |
| **Subflow** | A group of nodes packaged as one reusable node |
| **Palette** | The collection of installable nodes |
| **Config node** | Shared settings, e.g. an MQTT broker's address used by several nodes |

### Nodes have inputs on the left, outputs on the right
- **Input nodes** (e.g. `inject`, `mqtt in`) have **no input**, only outputs. They start a flow.
- **Output nodes** (e.g. `debug`, `mqtt out`) have **no outputs**. They end a flow.
- **Processing nodes** (e.g. `function`, `change`) have both.

### The Deploy options
| **Option** | **Effect** |
| --- | --- |
| Full | Restarts all flows |
| Modified Flows | Restarts only flows (tabs) you changed |
| Modified Nodes | Restarts only the nodes you changed |

"Modified Nodes" is quickest while testing. If something behaves oddly, do a **Full** deploy.

### Your first flow (hello world)
`inject` → `debug`
1. Drag an **inject** node (button to send a message) onto the canvas.
2. Drag a **debug** node (prints messages to the Debug sidebar).
3. Wire the inject output to the debug input.
4. Click **Deploy**, then click the button on the inject node.
5. Open the **Debug** tab (bug icon). A timestamp appears. You have just sent a message through a flow.

- [ ] I can explain nodes, wires, flows and Deploy
- [ ] I can build and run inject → debug

---
## 2.3 The Message Object (`msg`)

This is the single most important concept. **Everything in Node-RED is a message.** A message is a **JavaScript object**, which is like a dictionary of named values (the same as a Python `dict`).

```javascript
{
  _msgid: "a1b2c3...",       // unique id, added automatically
  topic: "plant/boiler/temp",// optional label, often used for routing
  payload: 78.4              // the actual data, the most important property
}
```

### The rules to remember
> [!tip] Message rules
> 1. **`msg.payload` is the main data.** Most nodes read it and write to it.
> 2. **`msg.topic` is a label.** Useful for saying what the data is (and it is the topic in MQTT).
> 3. **You can add any property you like**, e.g. `msg.unit = "°C"`.
> 4. **Nodes pass the same message along.** If a node changes `msg.payload`, the next node sees the changed version.
> 5. **A node usually runs once per incoming message.** No message in, nothing happens.
> 6. **Payload types vary.** It can be a number, string, boolean, object, array or buffer. Check the type when something fails (use the debug node).

### Payload types you'll see
| **Type** | **Example** | **Typical source** |
| --- | --- | --- |
| Number | `23.5` | Sensor reading |
| String | `"ON"` | Text from an API or MQTT |
| Boolean | `true` | Status bit |
| Object | `{ temp: 23.5, hum: 40 }` | Parsed JSON |
| Array | `[1, 2, 3]` | Modbus register block |
| Buffer | raw bytes | TCP/serial/binary data |

### Strings versus numbers: a classic trap
Data arriving over MQTT is usually a **string**, even if it looks like a number. `"23.5" + 1` gives `"23.51"` (joined as text), not `24.5`. Convert first with `Number(msg.payload)` or `parseFloat(msg.payload)`.

### Accessing nested values
```javascript
msg.payload.temp          // property of an object
msg.payload[0]            // first item of an array
msg.payload.sensors[2].value
```
A `change` or `switch` node uses the same path style, e.g. `payload.temp`.

- [ ] I can describe what a message is and what `msg.payload` and `msg.topic` do
- [ ] I know why a string "23.5" can break maths

---
## 2.4 Essential Core Nodes

You will use a small group of nodes for most flows. Learn these first.

### Input / trigger nodes
| **Node** | **What it does** |
| --- | --- |
| **inject** | Sends a message on a click, on a schedule (every N seconds, or a time of day), or once at startup |
| **mqtt in** | Receives messages from an MQTT broker topic |
| **http in** | Starts a flow when a web request arrives (build your own API) |
| **tcp in / udp in** | Receives raw network data |
| **file in** | Reads a file |
| **catch** | Starts a flow when another node throws an error |

### Processing nodes
| **Node** | **What it does** |
| --- | --- |
| **function** | Runs your own JavaScript on each message (see 2.5) |
| **change** | Set, change, delete or move message properties without code |
| **switch** | Routes messages down different outputs by condition (like `if / elif / else`) |
| **range** | Scales a number from one range to another (e.g. 4-20 mA to 0-100 °C) |
| **delay** | Holds messages or rate-limits them |
| **trigger** | Sends a message, then resets after a time (also good for timeouts) |
| **split / join** | Break an array into single messages, or combine many back into one |
| **template** | Builds text from a pattern, e.g. `Boiler is {{payload}} °C` |
| **json / csv / xml / yaml** | Convert text to objects and back |
| **batch / sort** | Group or order messages |

### Output nodes
| **Node** | **What it does** |
| --- | --- |
| **debug** | Prints a message to the Debug sidebar (also to the node status or console) |
| **mqtt out** | Publishes to an MQTT topic |
| **http response** | Sends the reply back to an `http in` |
| **http request** | Calls an external API |
| **file** | Writes to a file |
| **exec** | Runs a command on the host machine (powerful: see 2.10) |
| **link in / link out** | Jump between flows or tidy up long wires |

### The `change` node: no-code editing
A `change` node holds a list of rules:
- **Set** `msg.payload` to a value or expression
- **Change** a search-and-replace inside a property
- **Delete** a property
- **Move** a property to another one

It accepts **JSONata** expressions for light maths, e.g. `payload / 10`.

### The `switch` node: routing
Checks one property against rules (`==`, `<`, `>`, `between`, `contains`, `is true`, `otherwise`). Each rule is a separate output, so it answers questions like "is temperature above 80?" and sends the message to the right place.

### The `range` node: scaling (very common in OT)
Industrial sensors often give raw values. For example, a 4-20 mA signal read as raw counts needs scaling to engineering units:
```
Input range 0 to 65535   →   Output range 0 to 100 (%)
```
Choose **Scale and limit to target range** so values outside the range can't go wild.

### Quick pattern: threshold alert
```
[inject every 10s] → [read sensor] → [switch: > 80?] → [template: "Too hot: {{payload}}"] → [email / mqtt out]
                                          └ otherwise → [debug]
```

- [ ] I can name the core input, processing and output nodes
- [ ] I can choose between `change`, `switch` and `function` for a simple job

---
## 2.5 The Function Node and JavaScript Basics

When the built-in nodes aren't enough, the **function** node runs your code. If you know Python, here is a translation of the syntax.

### Python versus JavaScript
| **Idea** | **Python** | **JavaScript** |
| --- | --- | --- |
| Variable | `x = 5` | `let x = 5;` (or `const x = 5;`) |
| Comment | `# note` | `// note` |
| If | `if x > 5:` | `if (x > 5) { ... }` |
| Else if | `elif` | `else if` |
| And / Or / Not | `and` / `or` / `not` | `&&` / `||` / `!` |
| Equality | `==` | `===` (strict, preferred) |
| Dict | `{"a": 1}` | `{ a: 1 }` |
| List | `[1, 2]` | `[1, 2]` |
| For loop | `for i in items:` | `for (const i of items) { ... }` |
| Function | `def f(x):` | `function f(x) { ... }` |
| Print | `print(x)` | `node.warn(x)` (in Node-RED) |
| Statement end | newline | `;` (recommended) |
| None | `None` | `null` |
| String format | `f"{x} units"` | `` `${x} units` `` |

Blocks use **curly braces `{ }`**, not indentation.

### The basic function pattern
Every function node receives `msg` and must **return** a message (or nothing):

```javascript
// Convert raw value to temperature and flag if too hot
let raw = Number(msg.payload);
let temp = raw / 10;               // e.g. 784 → 78.4

msg.payload = temp;
msg.unit = "°C";
msg.alarm = temp > 80;

return msg;                        // send it to the next node
```

### What a function can return
| **Return** | **Effect** |
| --- | --- |
| `return msg;` | Sends the message out the single output |
| `return null;` | Sends nothing (the flow stops here for this message) |
| `return [msg1, msg2];` | Sends one message to **each of two outputs** (set outputs to 2) |
| `return [msg, null];` | Sends only to the first output |
| `return [[a, b], null];` | Sends two messages out the first output |

### Useful helpers inside a function node
| **Helper** | **Use** |
| --- | --- |
| `node.warn("text")` | Writes a warning to the Debug sidebar. Good for quick logging |
| `node.error("text", msg)` | Raises an error (can be caught by a `catch` node) |
| `node.status({fill:"green", shape:"dot", text:"ok"})` | Shows a status under the node |
| `node.send(msg)` | Sends a message early (for async code or many outputs) |
| `context`, `flow`, `global` | Store values (see 2.6) |

### Beware: modifying and reusing messages
If you send the **same** `msg` to multiple places and one changes it, the others see the change. Use `RED.util.cloneMessage(msg)` to make an independent copy when you need to.

### Defensive coding (OT data is messy)
Always assume values can be missing or wrong:

```javascript
if (typeof msg.payload !== "number" || isNaN(msg.payload)) {
    node.warn("Bad payload: " + msg.payload);
    return null;
}
```

- [ ] I can write a function node that changes a value and returns the message
- [ ] I understand `return msg`, `return null` and returning to multiple outputs

---
## 2.6 Context: Remembering Things

Normally a flow forgets everything between messages. **Context** is Node-RED's memory.

| **Scope** | **Who can see it** | **Use for** |
| --- | --- | --- |
| **Node** (`context`) | Only this one node | Counters, previous value, state |
| **Flow** (`flow`) | All nodes on the same tab | Shared settings inside one flow |
| **Global** (`global`) | Every flow | Shared values across tabs |

```javascript
// Keep a running count
let count = context.get("count") || 0;
count = count + 1;
context.set("count", count);
msg.payload = count;
return msg;

// Share a value between nodes on the flow
flow.set("lastTemp", msg.payload);
let t = flow.get("lastTemp");
```

### Important: context is lost on restart by default
It lives in memory. If Node-RED restarts, it resets. To keep values across restarts, enable **file-based context storage** in `settings.js` (`contextStorage` using `localfilesystem`). Do this if you rely on stored counters or setpoints.

### Config values and secrets
Don't hardcode passwords in function nodes. Use **credentials fields** inside nodes that support them (stored encrypted in a separate file) or environment variables.

- [ ] I know the three context scopes and that default context is wiped on restart

---
## 2.7 Industrial Protocols: MQTT, Modbus, OPC UA

You will use these through add-on nodes. Here is the theory behind each.

### MQTT
**MQTT** is a lightweight **publish/subscribe** messaging protocol, very common for sensors and IoT.

| **Concept** | **Meaning** |
| --- | --- |
| **Broker** | The central server that receives and distributes messages (e.g. **Mosquitto**) |
| **Publisher** | Sends a message to a topic |
| **Subscriber** | Receives messages for topics it asked for |
| **Topic** | A path-like label, e.g. `plant/boiler1/temp` |
| **Wildcards** | `+` matches one level, `#` matches everything below (`plant/+/temp`, `plant/#`) |
| **QoS 0 / 1 / 2** | At most once / at least once / exactly once delivery |
| **Retain** | Broker keeps the last message so new subscribers get it immediately |
| **Last Will (LWT)** | Message the broker sends if a client disconnects unexpectedly |

- Default port: **1883** (unencrypted), **8883** (TLS).
- Clients never talk to each other directly, only via the broker.
- Node-RED has `mqtt in` and `mqtt out` built in. A broker is configured once as a **config node**.
- Good topic design is hierarchical: `site/area/device/measurement`.

### Modbus
**Modbus** is an old, simple, widely used industrial protocol between a **client (master)** and **server (slave/device)**.

| **Concept** | **Meaning** |
| --- | --- |
| **Modbus TCP** | Runs over Ethernet, **TCP port 502** |
| **Modbus RTU** | Runs over serial (RS-485/RS-232) |
| **Unit ID / slave ID** | Address of the device on the bus |
| **Coil** | 1-bit read/write (e.g. relay output) |
| **Discrete input** | 1-bit read-only (e.g. switch status) |
| **Input register** | 16-bit read-only (e.g. measurement) |
| **Holding register** | 16-bit read/write (e.g. setpoint, or many measurements) |

- Everything is addressed by **numbers**, so you need the device's **register map** (from its manual) to know what each address means.
- Registers are 16-bit. A 32-bit value or float takes **two registers**, and **byte/word order** differs by manufacturer. If a value looks wildly wrong, suspect byte order.
- Raw values are often **scaled** (e.g. 784 = 78.4 °C), so check the manual for the scale factor.
- Node-RED uses the add-on package **`node-red-contrib-modbus`**.
- Modbus has **no built-in security** (no authentication or encryption). Treat any network with Modbus as needing segmentation.

### OPC UA
**OPC UA** is the modern, secure, vendor-neutral industrial standard.

- Default port **4840**.
- Data is organised as a **tree of nodes** (objects, variables) with names and types, not bare register numbers.
- Supports **security**: certificates, encryption, user authentication.
- Node-RED uses **`node-red-contrib-opcua`**.
- It works well for SCADA/PLC integration (Siemens, Rockwell and others expose OPC UA servers).

### Other protocols you might meet
| **Protocol** | **Notes** |
| --- | --- |
| **HTTP / REST** | Built-in `http request` / `http in` |
| **TCP / UDP / serial** | Built in, for raw devices |
| **Siemens S7** | Add-on S7 nodes |
| **EtherNet/IP, BACnet, KNX, DNP3** | Add-on nodes exist for many |
| **WebSocket** | Built in |

### Pattern: protocol translator
```
[Modbus read every 5s] → [function: scale + build object] → [mqtt out: plant/boiler1/data]
```
This takes data from a device that only speaks Modbus and makes it available to anything that can read MQTT.

- [ ] I can explain publish/subscribe, topics and the role of a broker
- [ ] I know Modbus needs a register map and I know the standard ports (1883, 502, 4840)

---
## 2.8 Dashboards, Databases and Alerts

### Dashboard
A **dashboard** is a web page of gauges, charts, buttons and text built from Node-RED nodes.

| **Package** | **Notes** |
| --- | --- |
| **FlowFuse Dashboard** (`@flowfuse/node-red-dashboard`, "Dashboard 2.0") | The actively maintained, modern version. Prefer this for new work |
| **node-red-dashboard** (original) | The older version, which is no longer actively developed |

Common nodes: gauge, chart, text, button, switch, slider, notification. Layout is arranged in **pages → groups → widgets**. The dashboard is served from the same Node-RED instance on a path (commonly `/dashboard`).

### Storing data
| **Option** | **Good for** |
| --- | --- |
| **InfluxDB** (`node-red-contrib-influxdb`) | Time-series sensor data (very common with Grafana) |
| **PostgreSQL / MySQL / SQLite** | Relational data (add-on nodes) |
| **File node (CSV/JSON)** | Simple logs |
| **MQTT retained messages** | Last known value only |

Pair InfluxDB with **Grafana** for professional trend charts.

### Alerts
- **E-mail** node (`node-red-node-email`) for emails.
- **HTTP request** to push to chat tools, webhooks or SMS gateways.
- Use a **`trigger`** or rate limit so an alarm doesn't send hundreds of emails in a minute.

### Alarm hygiene: avoid flapping
A value hovering around its limit (e.g. 79.9, 80.1, 79.9) will fire again and again. Use **hysteresis**: alarm at 80, only clear once below 75.

- [ ] I know where dashboards, databases and alerts fit in a flow

---
## 2.9 Installing and Running Node-RED (on a Pi)

> [!info] Check the official docs
> Supported Node.js versions and install commands change over time. Always confirm against **nodered.org/docs/getting-started** before installing.

### Common ways to run it
| **Method** | **Notes** |
| --- | --- |
| **Raspberry Pi script** | The official install script for Pi OS/Debian installs Node.js, Node-RED and a service in one go |
| **Docker** | `nodered/node-red` image; easy to move and back up |
| **npm** | `npm install -g node-red` on any machine with Node.js |
| **Windows / macOS** | Possible via npm |
| **FlowFuse / cloud** | Hosted options |

### On a Pi (the usual route)
The official script (from nodered.org) installs Node.js and Node-RED and sets Node-RED up as a **systemd service**. After installation:

```bash
node-red-start                         # start it (and see the log)
node-red-stop                          # stop it
node-red-restart                       # restart
node-red-log                           # view the log
sudo systemctl enable nodered.service  # start automatically at boot
sudo systemctl status nodered.service  # check it is running
```

Then open `http://<pi-ip>:1880` from any computer on the network.

### Where things live
| **Path** | **Contents** |
| --- | --- |
| `~/.node-red/` | The user directory |
| `~/.node-red/flows.json` | **Your flows.** Back this up |
| `~/.node-red/settings.js` | Main configuration (security, ports, context storage) |
| `~/.node-red/package.json` | List of installed add-on nodes |
| `~/.node-red/node_modules/` | Installed add-on nodes |
| `~/.node-red/flows_cred.json` | Encrypted credentials |

### Installing extra nodes
- In the editor: **Menu → Manage palette → Install**, then search by name (e.g. `modbus`).
- Or in the terminal: `cd ~/.node-red && npm install node-red-contrib-modbus`, then restart.

### Backups: import and export
- **Menu → Export** produces your flows as **JSON** you can copy or save.
- **Menu → Import** pastes JSON back in. This is how people share flows.
- Keep `flows.json` and `flows_cred.json` in version control (Git) or backed up regularly, but **do not publish credentials**.

### Projects feature
Node-RED has an optional **Projects** feature that links your flows to a Git repository, giving you version history. Worth enabling once you build anything serious.

- [ ] I know how to start/stop Node-RED, where my flows are saved and how to install extra nodes
- [ ] I know to back up `flows.json`

---
## 2.10 Security Rules (know these by heart)

> [!danger] Why this matters more than usual
> The Node-RED editor can run **arbitrary code on the machine** (via function and exec nodes) and can reach every device the machine can reach. Anyone who gets into the editor effectively controls the host and everything it can talk to. In an OT network, that is a serious risk.

> [!danger] The short list
> 1. **Turn on authentication for the editor** (`adminAuth` in `settings.js`). A default install has none.
> 2. **Never expose port 1880 to the internet.** Keep it on a trusted, segmented network.
> 3. **Use HTTPS** if the network isn't fully trusted.
> 4. **Don't put passwords or keys in flows or function nodes.** Use credential fields or environment variables.
> 5. **Be careful with the `exec` node and imported flows.** Read any flow you import from the internet before deploying. A flow is code.
> 6. **Install only well-known nodes**, since add-ons run with full access.
> 7. **Segment Modbus and other unauthenticated protocols.** Put the Node-RED gateway where it can read the devices but isn't reachable by everyone (think Purdue zones, firewalls and VLANs).
> 8. **Secure the MQTT broker** with usernames and TLS where possible.
> 9. **Do not use Node-RED for safety functions.** Keep emergency stops and interlocks in the PLC or safety system.
> 10. **Writing to controllers is different from reading.** Reading Modbus registers is low risk. Writing setpoints or coils can change the physical process, so get permission and test carefully.
> 11. **Back up before you change** a flow that is in production use.

- [ ] I can recite the security rules and explain why the editor must not be exposed

---
## 2.11 Debugging and Good Habits

### Debugging toolkit
| **Tool** | **Use** |
| --- | --- |
| **Debug node** | Put one after any node to see exactly what the message looks like |
| **Debug sidebar** | Shows output, with a filter for "current flow" |
| **Node status** | Under many nodes: connected / disconnected / error |
| **Catch node** | Catches errors from nodes on the tab |
| **`node-red-log`** | Shows startup and error messages in the terminal |
| **Disable a node** | Right-click → disable, to test without deleting |

### Troubleshooting order
1. **Did I Deploy?**
2. **Is the node getting a message?** (add a debug node before it)
3. **What type is `msg.payload`?** (string vs number)
4. **Does the node's configuration match the target?** (IP, port, topic, unit ID, register address)
5. **Can the machine reach the target?** (`ping`, `nc -vz <ip> 502`)
6. **Check the log** (`node-red-log`).

### Good habits
- **Name your nodes and tabs** clearly. Double-click, set a Name.
- **Add comment nodes** to explain sections.
- **Keep flows small and left-to-right.** Use link nodes and subflows to avoid spaghetti.
- **Use consistent topic names** and units.
- **Validate input** before using it.
- **Group nodes** (Ctrl+G) and colour the groups.
- **Export a copy** before big changes.
- **One job per flow tab.**

### A suggested way to learn (in order)
1. inject → debug
2. inject → change → debug
3. inject → function → switch → two debug nodes
4. mqtt in (public test broker or local Mosquitto) → debug
5. Add a dashboard gauge
6. Read a Modbus (or simulated) value, scale it, publish to MQTT
7. Store it in a database and chart it

- [ ] I can troubleshoot a flow that isn't working using the checklist

---
## Quick Reference Card

| **Item** | **Value** |
| --- | --- |
| Editor address | `http://<ip>:1880` |
| Default MQTT port | 1883 (8883 TLS) |
| Modbus TCP port | 502 |
| OPC UA port | 4840 |
| Main data property | `msg.payload` |
| Label property | `msg.topic` |
| Flow file | `~/.node-red/flows.json` |
| Config file | `~/.node-red/settings.js` |
| Start / stop | `node-red-start` / `node-red-stop` |
| Run at boot | `sudo systemctl enable nodered.service` |
| Log | `node-red-log` |
| Send to next node | `return msg;` |
| Stop the message | `return null;` |
| Log from a function | `node.warn(...)` |
| Node memory | `context.get/set` |
| Flow memory | `flow.get/set` |
| Global memory | `global.get/set` |
| Convert to number | `Number(msg.payload)` |

---
## Terms to Know
| **Term** | **Meaning** |
| --- | --- |
| Node-RED | Browser-based, flow-based programming tool built on Node.js |
| Node | One building block in a flow |
| Wire | Connection that carries messages between nodes |
| Flow | A tab of connected nodes |
| Message (`msg`) | JavaScript object that travels through the flow |
| Payload | The main data inside a message |
| Palette | Library of installable nodes |
| Deploy | Push your changes live |
| Subflow | Reusable group of nodes |
| Context | Node-RED's memory (node, flow, global) |
| JSONata | Small expression language used in `change` and other nodes |
| MQTT | Publish/subscribe messaging protocol |
| Broker | Server that routes MQTT messages (e.g. Mosquitto) |
| Topic | MQTT message label/address |
| QoS | MQTT delivery guarantee level |
| Modbus | Simple industrial client/server protocol |
| Register | 16-bit storage location in a Modbus device |
| OPC UA | Secure, modern industrial data standard |
| Hysteresis | Different on and off thresholds to stop alarm flapping |
| Gateway / edge node | Device that translates and passes data between networks |
| Dashboard | Web page of gauges and charts from Node-RED |
| InfluxDB / Grafana | Time-series database and charting tool |
| systemd | Linux service manager that runs Node-RED at boot |

---
## Overall Completion
- [ ] All section checkboxes above are ticked
- [ ] I can explain in my own words how a message moves through a flow
- [ ] I can describe how Node-RED connects a Modbus or MQTT device to a dashboard or database
- [ ] I am ready for Section 3: Setup and Configuration
