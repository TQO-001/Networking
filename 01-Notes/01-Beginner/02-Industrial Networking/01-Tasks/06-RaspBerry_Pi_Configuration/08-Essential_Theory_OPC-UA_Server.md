Learn at least a general amount of how everything you're working with works

> [!info] **Info**
> ==You do not need to be an OPC UA specialist or write a server from scratch==, but you do need to understand what a server is in OPC UA, how data is organised inside it, how a client finds and reads that data, and how it is kept secure. This file starts from zero and builds up to a working mental model, then ties it back to your Node-RED and DHT22 work.

> [!tip] Check this out
> https://softwaretoolbox.com/resources

# 2. Theory
## 2.1 What OPC UA is and why industry uses it

**OPC UA** (Open Platform Communications **Unified Architecture**) is a **vendor-neutral standard** for moving industrial data between machines and software in a structured, secure way. It is published by the **OPC Foundation** and standardised as **IEC 62541**.

### The problem it solves
Industrial equipment from different manufacturers speaks different languages. Before OPC, every pairing of a device and a SCADA package needed its own custom driver. OPC UA gives everyone **one common way to describe and exchange data**.

### Classic OPC versus OPC UA
| **Item** | **Classic OPC (OPC DA)** | **OPC UA** |
| --- | --- | --- |
| Built on | Microsoft COM/DCOM | Its own protocol, no DCOM |
| Platforms | Windows only | Windows, Linux, embedded devices, cloud |
| Security | Weak, depends on Windows settings | Built in: certificates, signing, encryption, user login |
| Data model | Flat list of tags | Rich tree with types, relationships and descriptions |
| Firewalls | DCOM is painful to firewall | Uses a single configurable port |

> Classic OPC is old and often still seen in legacy plants. OPC UA is the modern replacement and is what you will meet in new projects.

### How it compares to the protocols you already know
| **Protocol** | **Style** | **What the data looks like** | **Security** |
| --- | --- | --- | --- |
| **Modbus** | Client asks, device answers | Bare 16-bit registers. You need the manual to know what they mean | None built in |
| **MQTT** | Publish/subscribe through a broker | A topic and a payload of whatever the sender chose | Optional (TLS, passwords) |
| **OPC UA** | Client/server (plus an optional publish/subscribe mode) | **Named, typed, organised** values with units and quality | Built in and strong |

The key difference is that an OPC UA server **describes its own data**. A client can connect, **browse** what is there, and see names, types and quality without a register map.

### Where it sits in OT
- **PLCs and machines** (Siemens, Rockwell, Beckhoff and many others) often contain a built-in OPC UA server.
- **SCADA, MES and historians** act as OPC UA **clients** and collect from many servers.
- **Gateways and edge devices** (like Node-RED on a Pi) can be a **client** that reads from a PLC, a **server** that exposes data to others, or both.
- In **Purdue model** terms it usually carries data **upwards** from Level 1-2 devices to Level 3 and above. Where the server sits determines who can reach it (see 2.11).

### Connection to what you already know
- **Node-RED notes (04):** OPC UA was listed there as one of three industrial protocols. This file is the deep dive.
- **Sensor project (06 / 07):** the DHT22 flow produces clean validated readings. An OPC UA server is one way to make those readings available to industrial software (see 2.9).

- [ ] I can explain what OPC UA is and why it replaced classic OPC
- [ ] I can explain how it differs from Modbus and MQTT

---
## 2.2 The Client/Server Model

### The two roles
| **Role** | **Job** | **Examples** |
| --- | --- | --- |
| **Server** | **Holds the data** and publishes it. Waits for connections | A PLC, a gateway, a simulation server, a Node-RED server node |
| **Client** | **Connects to a server** and reads, writes or subscribes | SCADA, a test tool like UaExpert, a Node-RED client node |

> [!tip] **Common confusion**
> "Server" does not mean "big powerful computer". It only means **the side that owns the data and waits to be asked**. A tiny PLC can be an OPC UA server. A Raspberry Pi can be one too.

A client connects to **one** server at a time per connection, but a program can open many client connections, and a server can handle many clients together.

### The endpoint URL
Every server is reached through an **endpoint URL**:

```
opc.tcp://<hostname-or-ip>:<port>/<optional-path>
```

| **Part** | **Meaning** |
| --- | --- |
| `opc.tcp` | The OPC UA binary protocol over TCP (most common) |
| `<hostname-or-ip>` | The machine running the server |
| `<port>` | The port. **4840** is the standard registered port, but many servers use a different one |
| `<path>` | Optional label some servers add |

Example: `opc.tcp://192.168.1.50:4840`

> [!warning] **The endpoint a server advertises must be reachable by the client.**
> A server may tell clients to connect to a hostname they cannot resolve (for example the Pi's local name). If a client finds the server but then fails to connect, compare the endpoint it was given with the address you can actually reach.

### What happens when a client connects (in plain words)
1. The client contacts the server and asks: **"which endpoints do you offer?"** (security options listed)
2. The client picks one and opens a **secure channel**, exchanging certificates unless security is off.
3. The client opens a **session** and proves who it is (anonymous, username/password or certificate).
4. The client now **browses, reads, writes or subscribes**.
5. When finished the client closes the session.

### Optional second mode: Pub/Sub
OPC UA also defines a **publish/subscribe** mode (often over MQTT or UDP). It is useful for one-to-many data distribution. For the first steps, **ignore it** and focus on client/server.

- [ ] I can explain the difference between an OPC UA server and a client
- [ ] I can read an endpoint URL and say what each part means

---
## 2.3 The Address Space: How a Server Organises Data

This is the heart of OPC UA. A server's data is arranged as a **tree-like network of nodes** called the **address space**. A client **browses** it, much like opening folders on a computer.

### What a "node" is here
> [!note] **Do not confuse these two meanings of "node"**
> - A **Node-RED node** is a building block on the canvas.
> - An **OPC UA node** is an item in the server's address space (a folder, a value, a method).
> The same word means two unrelated things. The notes below say "OPC UA node" or "Node-RED node" whenever it could be unclear.

### Types of OPC UA node (NodeClass)
| **NodeClass** | **What it is** | **Everyday comparison** |
| --- | --- | --- |
| **Object** | A container or thing, e.g. "Boiler 1" or "Environment" | A folder |
| **Variable** | Holds a **value** that changes, e.g. a temperature | A file with live contents |
| **Method** | A function a client can call, e.g. "Start pump" | A button or command |
| **View** | A filtered subset of the address space | A shortcut collection |
| **ObjectType / VariableType** | Templates describing what an Object or Variable should look like | A class or blueprint |
| **ReferenceType / DataType** | Define relationship kinds and value kinds | Rules of the system |

**For most practical work you only deal with Objects (folders), Variables (values) and sometimes Methods.**

### References: how nodes connect
Nodes are linked by **references**, which are typed relationships.

| **Reference** | **Meaning** |
| --- | --- |
| **Organizes** | "This folder contains that item" (tidy grouping) |
| **HasComponent** | "This object is made up of that part" |
| **HasProperty** | "This node has a descriptive property" (e.g. units) |
| **HasTypeDefinition** | "This object is built from that template" |

### Attributes: what each node knows about itself
| **Attribute** | **Meaning** |
| --- | --- |
| **NodeId** | Its unique address (see 2.4) |
| **BrowseName** | The programmatic name |
| **DisplayName** | The human-friendly name shown in tools |
| **Description** | Optional explanation |
| **Value** | (Variables) the current value |
| **DataType** | (Variables) what kind of value it is (see 2.5) |
| **AccessLevel** | Whether it can be read, written or both |

### The standard starting folders
Every server has the same top structure:

```
Root
 ├── Objects        <- your data usually goes under here
 │     ├── Server   <- built-in information about the server itself
 │     └── (your own folders and variables)
 ├── Types          <- templates and definitions
 └── Views
```

### An example you can picture
```
Objects
 └── Environment                 (Object)
       ├── Temperature           (Variable, Double, 25.4)
       ├── Humidity              (Variable, Double, 48.0)
       ├── Status                (Variable, String, "OK")
       └── LastUpdate            (Variable, String, "2026-10-06T07:45:00.000Z")
```

A client connects, opens **Objects**, opens **Environment** and sees four named values. No register numbers and no manual needed.

- [ ] I can explain the address space and the difference between an Object and a Variable
- [ ] I can tell which meaning of "node" is meant (Node-RED or OPC UA)

---
## 2.4 NodeIds: How Every Item Is Addressed

Every OPC UA node has a unique address called a **NodeId**. You will type these constantly, so learn the format.

```
ns=<namespace index>;<type>=<identifier>
```

| **Part** | **Meaning** |
| --- | --- |
| `ns=` | **Namespace index**: which "naming group" the identifier belongs to |
| `i=` | Identifier is a **numeric** value |
| `s=` | Identifier is a **string** (readable name) |
| `g=` | Identifier is a **GUID** |
| `b=` | Identifier is **opaque bytes** |

### Examples
| **NodeId** | **Meaning** |
| --- | --- |
| `ns=0;i=85` | The standard **Objects** folder (namespace 0 is the OPC UA standard itself) |
| `ns=0;i=2253` | The standard **Server** object |
| `ns=1;s=Temperature` | A variable called "Temperature" in namespace 1 |
| `ns=2;i=1001` | A numerically addressed item in namespace 2 |
| `ns=3;s=Boiler1.Pressure` | A string identifier that happens to contain dots |

### Namespaces
- **Namespace 0** is always reserved for the standard OPC UA definitions.
- Other namespaces belong to the server's application or to vendor specifications. **Namespace 1** is commonly the server's own application namespace, but this is a convention, not a rule.
- Each namespace also has a **namespace URI**, a globally unique text name.

> [!warning] **The namespace index is not guaranteed to be stable.**
> The number (`ns=2`) is assigned by the server and can differ between servers, or after a server's configuration changes. The URI is the stable identity. If a client suddenly says "node not found" after a server change, check whether the namespace index shifted.

### Finding a NodeId
Do not guess. **Browse** with a client tool (see 2.10), find the variable, and copy its NodeId from the attributes panel.

- [ ] I can read a NodeId and say what `ns`, `i` and `s` mean
- [ ] I know the namespace index can change and the URI is the stable identity

---
## 2.5 Data Types, Values and Quality

### A value is more than a number
When a client reads a variable it does not just get `25.4`. It gets a **DataValue** containing several things:

| **Part** | **Meaning** |
| --- | --- |
| **Value** | The actual data (a number, string, etc.) |
| **StatusCode** | The **quality** of the value: Good, Uncertain or Bad |
| **SourceTimestamp** | When the **original source** (e.g. the sensor) produced it |
| **ServerTimestamp** | When the **server** last updated it |

### Common data types
| **Type** | **What it holds** | **Example** |
| --- | --- | --- |
| **Boolean** | True/false | `true` (pump running) |
| **Int16 / Int32 / Int64** | Whole numbers, signed | `-40` |
| **UInt16 / UInt32 / UInt64** | Whole numbers, unsigned | `1500` |
| **Float** | Decimal, single precision (about 7 digits) | `25.4` |
| **Double** | Decimal, double precision (about 15 digits) | `25.4` |
| **String** | Text | `"OK"` |
| **DateTime** | A point in time (UTC) | `2026-10-06T07:45:00Z` |
| **ByteString** | Raw bytes | Binary blob |

The server declares each variable's type. Writing the **wrong type** (for example text into a Double) is rejected.

### Status codes: the quality of a value
| **Category** | **Meaning** |
| --- | --- |
| **Good** | The value is trustworthy |
| **Uncertain** | The value might be usable but is not fully reliable (e.g. sensor out of range) |
| **Bad** | The value is not usable (e.g. a communication failure, sensor disconnected) |

Common names you will see in errors: `BadNodeIdUnknown`, `BadTypeMismatch`, `BadUserAccessDenied`, `BadSecurityChecksFailed`, `BadCommunicationError`.

### Why this matters for your sensor work
In your DHT22 flow, a rejected reading is sent down the **INVALID** path instead of being shown as if it were real. OPC UA has the same philosophy built in: **quality travels with the value**. A well-designed server marks a failed sensor as **Bad** instead of leaving the last number sitting there looking healthy. A simple server may not do this automatically, so remember it as a design goal even if a basic node can't do it yet.

### Engineering units
Units (like °C or %) are usually carried as **properties** (for example an "EngineeringUnits" property) or just put in the variable's description. A client cannot assume units unless the server says so.

- [ ] I can describe what a DataValue contains
- [ ] I know what Good / Uncertain / Bad quality mean and why it matters

---
## 2.6 The Services: What a Client Can Do

A client uses a small set of **services** to work with a server.

| **Service** | **What it does** | **Used for** |
| --- | --- | --- |
| **Browse** | Lists what is under a node | Exploring and discovering the address space |
| **Read** | Gets the current value of one or more nodes | One-off checks, slow polling |
| **Write** | Sets the value of a writable variable | Changing setpoints (**careful**) |
| **Call** | Runs a Method on the server | Triggering an action |
| **Subscribe / MonitoredItems** | The server **pushes changes** to the client | Live data. Preferred over polling |
| **HistoryRead** | Reads stored history (if the server keeps it) | Trends |

### Read versus Subscribe
| **Approach** | **How it works** | **Trade-off** |
| --- | --- | --- |
| **Polling (Read)** | Client asks every N seconds | Simple. Wasteful, and can miss quick changes |
| **Subscription** | Client says "tell me when this changes" | Efficient and responsive. More concepts to learn |

### Subscription settings you will meet
| **Setting** | **Meaning** |
| --- | --- |
| **Publishing interval** | How often the server sends batched updates to the client |
| **Sampling interval** | How often the server checks the underlying value for changes |
| **Queue size** | How many changes to keep if the client is slow |
| **Deadband** | Ignore changes smaller than a threshold (cuts noise) |
| **Keep-alive** | Regular "I'm still here" message so a dead connection is noticed |

> [!note] **A subscription only reports changes.**
> If a value stays exactly the same, the client gets no new message. This surprises people who expect a steady stream. If you need a regular heartbeat, use polling or watch the timestamp variable.

### Read versus Write: the risk difference
Reading is low risk. **Writing to a variable can change a physical process** (a setpoint, a motor command). In real plants, writes need permission, an access-control plan and careful testing. For this learning project, keep variables **read-only to clients** unless you have a reason.

- [ ] I can name the main services and what each does
- [ ] I can explain why subscriptions are usually better than polling

---
## 2.7 Security in OPC UA

OPC UA was designed with security in mind. You still have to **configure** it properly, since a server set to "no security" is as open as Modbus.

### The three layers
| **Layer** | **What it answers** | **How it works** |
| --- | --- | --- |
| **Application authentication** | "Is this *program* who it claims to be?" | **X.509 certificates** exchanged and trusted by each side |
| **Message security** | "Can anyone read or alter the data in transit?" | **Signing** and **encryption** |
| **User authentication** | "Is this *person* allowed in?" | Anonymous, username + password, or user certificate |

### Security modes
| **Mode** | **Meaning** |
| --- | --- |
| **None** | No signing, no encryption. Useful only for first tests on an isolated network |
| **Sign** | Messages are signed (tampering is detected) but readable |
| **SignAndEncrypt** | Signed **and** encrypted. The one to use in real deployments |

### Security policies (the algorithms)
A **security policy** is the exact set of cryptographic algorithms used. Examples you will see: `None`, `Basic256Sha256`, `Aes128_Sha256_RsaOaep`, `Aes256_Sha256_RsaPss`.

> [!warning] **Older policies are deprecated.**
> Policies such as `Basic128Rsa15` and `Basic256` use outdated algorithms and are deprecated in current OPC UA specifications. Prefer the newer policies where both sides support them, and check what your server and clients actually support.

### Certificates and the trust step (where beginners get stuck)
Each application (client and server) has its own **certificate**. The first time they meet, neither trusts the other.

1. The client connects. The server sees an unknown certificate and **rejects it**, usually storing it in a **rejected** folder.
2. An administrator **moves that certificate to the trusted folder** (or clicks "trust" in the tool).
3. The client must also **trust the server's certificate** (a prompt appears in most client tools).
4. Reconnect. It now works.

Typical error when this step is missed: `BadSecurityChecksFailed` or `BadCertificateUntrusted`.

> [!info] **Why it feels annoying**
> The trust step is the security. It proves that a human decided "yes, this program may talk to this server". A system that auto-trusts everything defeats the purpose.

### Certificate details that cause trouble
| **Issue** | **What happens** |
| --- | --- |
| **Expired certificate** | Connection refused |
| **Hostname/URI mismatch** | The certificate's name does not match the endpoint, so it can be rejected |
| **Wrong clock** | A device with a wrong clock sees valid certificates as "not yet valid" or "expired" (the same cause as the `apt` "Not live until" problem in 07) |

- [ ] I can explain the three security layers
- [ ] I can describe the certificate trust steps and what error appears if they are skipped

---
## 2.8 OPC UA in Node-RED

> [!info] **Check the package's own help**
> Node names, options and defaults vary between versions. Treat this section as a map, then confirm exact settings in the **Help** sidebar of each node and the package's documentation page.

### The package
Node-RED does not include OPC UA by default. Install it from **Menu → Manage palette → Install**:

```
node-red-contrib-opcua
```

It is built on the **node-opcua** JavaScript library, which also runs on its own outside Node-RED.

### The nodes (names as commonly shown in the palette)
| **Node** | **What it does** |
| --- | --- |
| **OpcUa-Client** | Connects to an OPC UA server. Actions include read, write, subscribe, browse and method calls |
| **OpcUa-Item** | Builds a message containing a NodeId (and a value or data type) to feed the client |
| **OpcUa-Browser** | Browses a server's address space |
| **OpcUa-Event** | Subscribes to server events |
| **OpcUa-Method** | Calls a method on a server |
| **OpcUa-Server** | Runs an **OPC UA server inside Node-RED** that other clients can connect to |

### Two directions: Node-RED as client versus as server
```
Node-RED as CLIENT                          Node-RED as SERVER
                                            
 PLC / OPC UA server  <--- reads ---  Node-RED      Node-RED  --- publishes --->  SCADA / UaExpert
 (owns the data)                      (collector)    (owns the data)               (collector)
```

| **Question** | **Node-RED is a client** | **Node-RED is a server** |
| --- | --- | --- |
| Who owns the data? | The other device | Node-RED (from your flow) |
| Who connects to whom? | Node-RED connects out | Others connect in to Node-RED |
| Typical use | Collect PLC data into MQTT, a database or a dashboard | Make sensor data available to SCADA or other OPC UA software |
| Network rule | Allow outbound to the server's port | Allow **inbound** to the server's port |

### How the OpcUa-Server node typically works
In the usual setup you:
1. Drag an **OpcUa-Server** node onto a flow and set its **port** and name (the server node has its own default port, so check the field).
2. **Deploy.** The server starts and listens.
3. Send messages **into** the server node to **create and update variables**. The topic carries the NodeId and data type, and the payload carries the value.

A message in this style (confirm the exact syntax in the node's Help):

```javascript
msg.topic = "ns=1;s=Temperature;datatype=Double";
msg.payload = 25.4;
return msg;
```

The first time such a message arrives, the variable is created. Later messages with the same topic update its value.

### Useful Node-RED habits for OPC UA
- Put OPC UA nodes on **their own flow tab** so the server's life cycle is clear.
- Use **consistent NodeId naming** (for example `ns=1;s=Environment.Temperature`).
- Keep the server flow separate from the sensor-reading flow if you can, and connect them with **link nodes**.
- After a deploy, **restart the client tool's connection**. Servers re-create their address space each time they start.

> [!warning] **Redeploying restarts the server.**
> Deploying changes that touch the server node restarts it. Connected clients are disconnected, and variables only exist again after the next message creates them. If a variable is missing after a deploy, trigger the flow once to repopulate it.

- [ ] I can tell Node-RED as client from Node-RED as server
- [ ] I know which package to install and where to read the exact node settings

---
## 2.9 Applying It: Publishing the DHT22 Readings

This section is an **idea sketch**, not a tested flow. It shows how your existing sensor project could feed an OPC UA server.

### The architecture
```
DHT22 → Linux IIO → Exec → Parse → Timestamp → Validate
                                                   │
                                  ┌─ VALID ───────┼──→ Dashboard (existing)
                                  │                └──→ Prepare OPC UA messages → [OpcUa-Server]
                                  └─ INVALID ──────→ Debug / error status (nothing sent to OPC UA)
```

Branch from the **VALID** output only, so the OPC UA server never exposes values the validation layer rejected.

### The address space to aim for
```
Objects
 └── Environment
       ├── Temperature   (Double)   °C
       ├── Humidity      (Double)   % RH
       ├── Status        (String)
       └── LastUpdate    (String, ISO 8601 UTC)
```

### A "Prepare OPC UA messages" Function node (sketch)
```javascript
// Input: one VALID reading
// { temperature: 25.4, humidity: 48, timestamp: "...", valid: true, status: "OK" }
// Output: four messages sent out of ONE output, one per OPC UA variable

const r = msg.payload;

return [[
    { topic: "ns=1;s=Environment.Temperature;datatype=Double", payload: r.temperature },
    { topic: "ns=1;s=Environment.Humidity;datatype=Double",    payload: r.humidity },
    { topic: "ns=1;s=Environment.Status;datatype=String",      payload: r.status },
    { topic: "ns=1;s=Environment.LastUpdate;datatype=String",  payload: r.timestamp }
]];
```

> [!tip] **Why the double square brackets?**
> From the function-node return table in 04: `return [[a, b], null]` sends **several messages out of the same output**. Here there is only one output, so `return [[a, b, c, d]]` sends all four, one after the other, from that single output.

### Design points to think about
| **Question** | **Why it matters** |
| --- | --- |
| **Numbers as numbers** | Keep temperature and humidity as Doubles. Do not turn them into text like "25.4 C" |
| **What if the sensor fails?** | The last value stays in the server and looks healthy. A good design adds a `Status` variable and the `LastUpdate` time so a client can tell the data is stale |
| **Read-only?** | Clients should only read sensor values. Do not allow writes |
| **Time zone** | Keep timestamps in UTC and let the client convert |
| **Names** | Choose names a SCADA engineer would understand without help |

### Checking staleness
A client that sees `Temperature = 25.4` cannot tell whether that number is 5 seconds or 5 hours old. That is why `LastUpdate` (or the node's timestamps) matters. A sensible rule for clients: **if the update time is older than a few polling cycles, treat the value as unreliable.**

- [ ] I can sketch how a validated reading becomes OPC UA variables
- [ ] I can explain why only VALID readings go to the server and why a timestamp variable is useful

---
## 2.10 What the Task Might Actually Be (and What to Ask)

You said you are not sure what you are supposed to do. "OPC UA server" can mean several quite different jobs. Here is how to tell them apart.

| **Possible meaning** | **What it involves** | **Likely deliverable** |
| --- | --- | --- |
| **A. Learn how an OPC UA server works** | Understand the concepts, browse an existing server with a client tool | Notes or a short explanation (this file covers it) |
| **B. Connect to an existing OPC UA server** (a PLC or a simulator) | Node-RED acts as a **client**. You need the endpoint URL, security settings and NodeIds | A flow that reads values and shows or stores them |
| **C. Run your own OPC UA server** | Node-RED acts as a **server**, publishing data like the DHT22 readings | A server that a SCADA or test client can browse |
| **D. Use or configure a PLC's built-in OPC UA server** | Enable it and set permissions in the PLC's engineering software | A PLC that exposes chosen tags |
| **E. Bridge protocols** | Read from Modbus or MQTT and republish through OPC UA (or the reverse) | A gateway flow |

### Questions that will tell you which one it is
1. **"Where is the data coming from, and where should it go?"** (this alone usually decides between B, C and E)
2. **"Is there an existing OPC UA server I should connect to, and who gives me its address and credentials?"**
3. **"Should Node-RED be the client or the server?"**
4. **"What system needs to read the data (SCADA, historian, a person with a test tool)?"**
5. **"What security policy is required, and who manages the certificates?"**
6. **"Is read-only enough, or does anything need to write back?"**
7. **"Which network segment will this sit in, and what firewall rules apply?"**

> [!tip] **If you can't ask yet**
> Option C (publish the DHT22 readings from Node-RED and read them with a free client tool) is the best practice exercise. It makes you handle every concept in this file (namespaces, NodeIds, data types, a server endpoint, security, testing) without needing any special equipment.

- [ ] I know the main things "OPC UA server" could mean
- [ ] I have a list of questions to ask to find out which one applies

---
## 2.11 Testing with a Client and Troubleshooting

### Test clients (free options)
| **Tool** | **Notes** |
| --- | --- |
| **UaExpert** | Popular free OPC UA test client from Unified Automation. Windows and Linux |
| **Prosys OPC UA Browser** | Free browser-style client from Prosys |
| **Node-RED OpcUa-Client** | Use a second flow to read your own server (a quick self-test) |

> [!info] **Check the tools' own sites for current downloads and versions.**

### Test order (like your layered approach in 07)
1. **Is the server running?** Check the Node-RED node status and debug output.
2. **Can the client reach the machine and port?** (`ping`, and a port check)
3. **Connect with security set to None first**, on an isolated test network only.
4. **Browse.** Open `Objects` and look for your folder and variables.
5. **Read a value** and compare it to what Node-RED shows.
6. **Watch it update** (add the variable to a data view and wait for the next reading).
7. **Only then** turn on security and repeat, working through the certificate trust step.

### Checking the port from another machine
```bash
nc -vz <server-ip> <port>
```
If it fails, the server is not listening, the port is wrong, or a firewall is blocking it.

### Using UaExpert as a quick example (steps in general terms)
1. Add a new server and enter the **endpoint URL**.
2. Choose a security setting (None for the first test).
3. Connect. Accept or trust any certificate prompt.
4. In the address space panel, expand **Objects**.
5. Drag a variable into the data-access view and watch its value.

### Troubleshooting table
| **Symptom** | **Likely cause** | **What to do** |
| --- | --- | --- |
| **Connection refused / timeout** | Server not running, wrong port, or firewall | Check the server node, confirm the port, test with `nc -vz` |
| **Finds the server, then cannot connect** | The advertised endpoint uses a hostname/IP the client can't reach | Use a reachable address, or set the server's advertised host appropriately |
| **`BadSecurityChecksFailed` / certificate untrusted** | Certificate not yet trusted | Move the rejected certificate to the trusted list on the server, and trust the server's certificate in the client |
| **`BadCertificate...` time-related errors** | Wrong system clock | Fix the clock (compare 07, problem 14) |
| **`BadUserAccessDenied`** | Wrong or missing credentials, or anonymous login not allowed | Check the user settings on the server |
| **`BadNodeIdUnknown`** | Wrong NodeId, wrong namespace index, or variable not created yet | Browse for the real NodeId. Trigger the flow so the variable is created |
| **`BadTypeMismatch`** | Writing the wrong data type (e.g. text to a Double) | Match the variable's declared type |
| **Variable exists but never changes** | The value is not being updated, or subscription only reports changes | Check the source flow, check the timestamp variable |
| **Variables missing after a redeploy** | The server restarted and rebuilt its address space | Trigger the flow again so the variables are re-created |
| **Values look wrong by a factor of 1000** | Raw sensor scaling was not applied before publishing | Publish the converted value (see 07, problem 6) |

- [ ] I can test a server with a client tool in a sensible order
- [ ] I can match a common OPC UA error to its likely cause

---
## 2.12 Security Rules (know these by heart)

> [!danger] **Why this matters**
> An OPC UA server is a **doorway into your process data**. If it allows anonymous access with no security, anyone who can reach the port can read it (and write to it, if writes are allowed).

> [!danger] **The short list**
> 1. **Do not leave a production server on Security Mode None.** None is for first tests on an isolated network.
> 2. **Use SignAndEncrypt** with a modern security policy where the equipment supports it.
> 3. **Do not auto-trust every certificate.** The trust decision is the control.
> 4. **Disable anonymous access** unless there is a clear reason. Use named users with strong passwords or certificates.
> 5. **Do not put passwords or private keys in flow files** or function nodes. Use credential fields or environment variables.
> 6. **Keep the server read-only** unless writing is required and approved.
> 7. **Never expose the port to the internet.** Keep it on a segmented network, controlled by firewall rules (think Purdue zones and VLANs).
> 8. **Open only the single port the server needs**, not a wide range.
> 9. **Keep the clock correct.** Certificates depend on time.
> 10. **Protect the certificate and key files.** Anyone holding a trusted private key can impersonate that application.
> 11. **Do not use OPC UA or Node-RED for safety functions.** Emergency stops and interlocks belong in a PLC or safety system.
> 12. **Get permission before connecting to production equipment**, and test on a simulator first.
> 13. **Back up before you change** a server flow that is in production use.

- [ ] I can recite the security rules and explain why anonymous, no-security servers are risky

---
## 2.13 Good Habits

- **Browse before you write code.** Know the real NodeIds first.
- **Name things clearly** (`Environment.Temperature`, not `var1`).
- **Test in layers**: server running, client reaching it, browse works, values update, then security.
- **Keep quality and time with the value.** A number without a timestamp is half the story.
- **Document the endpoint, namespace, NodeIds and security settings** in a notes file for whoever uses it next.
- **Write down every error you hit** and what fixed it, as you did in `07-Mistakes_and_Stuff.md`.
- **One change at a time.** Redeploy and retest after each.

### A suggested way to learn (in order)
1. Install a **free test client** (UaExpert or similar).
2. Browse a **public or simulated OPC UA server** and read some values.
3. Install `node-red-contrib-opcua` and read a value with the **client** node.
4. Build a minimal **server** flow with one variable (a counter).
5. Connect to your own server with the test client and watch the counter.
6. Publish the **DHT22 readings** into the server (section 2.9).
7. Add **security**: certificates, then a user.
8. Document everything.

- [ ] I can follow the learning order above

---
## Quick Reference Card

| **Item** | **Value** |
| --- | --- |
| Standard name | OPC UA (IEC 62541) |
| Standard registered port | **4840** (many servers use others, so check) |
| Endpoint format | `opc.tcp://<host>:<port>` |
| NodeId format | `ns=<n>;i=<number>` or `ns=<n>;s=<string>` |
| Standard Objects folder | `ns=0;i=85` |
| Standard Server object | `ns=0;i=2253` |
| Namespace 0 | The OPC UA standard itself |
| Node-RED package | `node-red-contrib-opcua` |
| Run a server in Node-RED | **OpcUa-Server** node |
| Read data from a server | **OpcUa-Client** node |
| Value quality | Good / Uncertain / Bad (StatusCode) |
| Security modes | None / Sign / SignAndEncrypt |
| Free test client | UaExpert, Prosys OPC UA Browser |
| Port check | `nc -vz <ip> <port>` |
| Send several messages from one output | `return [[a, b, c]];` |

---
## Terms to Know

| **Term** | **Meaning** |
| --- | --- |
| OPC UA | Open Platform Communications Unified Architecture. Secure, vendor-neutral industrial data standard |
| OPC Foundation | The organisation that maintains the standard |
| Classic OPC / OPC DA | The older Windows/DCOM-based predecessor |
| Server | The side that owns the data and waits for connections |
| Client | The side that connects and reads, writes or subscribes |
| Endpoint | The URL and security options a server offers |
| Session | An authenticated conversation between a client and a server |
| Address space | The tree of nodes a server exposes |
| OPC UA node | An item in the address space (Object, Variable, Method) |
| Object | A folder-like container node |
| Variable | A node that holds a value |
| Method | A function a client can call |
| NodeId | The unique address of a node (`ns=1;s=Temperature`) |
| Namespace | A naming group. Index 0 is the standard |
| Namespace URI | The stable, unique name of a namespace |
| Reference | A typed link between nodes (Organizes, HasComponent) |
| Attribute | A fact about a node (Value, DataType, DisplayName) |
| Browse | List what is under a node |
| Read / Write | Get or set a value |
| Subscription | Server pushes changes to the client |
| Monitored item | One variable being watched inside a subscription |
| Deadband | Minimum change before an update is sent |
| DataValue | Value plus quality plus timestamps |
| StatusCode | Quality indicator (Good / Uncertain / Bad) |
| Variant | The container OPC UA uses to hold a value of any type |
| Security policy | The set of cryptographic algorithms in use |
| Security mode | None, Sign, or SignAndEncrypt |
| X.509 certificate | The digital identity of a client or server application |
| Trust list | The certificates a server or client has chosen to trust |
| Pub/Sub | OPC UA's publish/subscribe mode (separate from client/server) |
| Gateway / edge node | A device that translates and passes data between networks |
| Purdue model | Layered reference model for industrial network architecture |
| node-opcua | The JavaScript OPC UA library used by `node-red-contrib-opcua` |
| UaExpert | Free OPC UA test client |

---
## Overall Completion
- [ ] All section checkboxes above are ticked
- [ ] I can explain in my own words what an OPC UA server does and how a client uses it
- [ ] I can describe how the DHT22 readings could be published through an OPC UA server
- [ ] I know which questions to ask to find out what the task actually is
- [ ] I am ready for the next section: Setup and Configuration
