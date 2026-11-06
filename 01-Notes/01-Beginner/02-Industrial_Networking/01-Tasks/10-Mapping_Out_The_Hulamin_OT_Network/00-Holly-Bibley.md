# A Practical Guide to Logical Network Mapping -Theory
## How to draw VLANs, devices, ports, IP addresses, and connections
This is more of a combination of a set of skills to help you not only understand and map out your network, but it is essential in helping you diagnose any problems within it. If you understand how systems and devices are communicating, it will help you out when troubleshooting, as you know how to narrow down the cause of any disturbance or issues that may arise in the network.

Holly Bibley is the name I came up with for this skill, because the full network of any enterprise specifically for me at Hulamin, is called the Bible for network engineers, or at least that's what my managers call it...

---

## 1. What you are drawing

The method you described is a form of **logical network diagramming**. It shows how devices are grouped into networks or VLANs, which interfaces connect them, and how traffic can move between those networks.

It is different from a physical diagram:
- **Logical diagram:** VLANs, IP subnets, device roles, interface relationships, gateways, and traffic paths.
- **Physical diagram:** Actual equipment locations, racks, patch panels, cables, switch ports, and cable routes.

A useful diagram can contain both types of information, but keep the meaning of every line clear.

### The key idea

A horizontal line represents a **shared logical network or VLAN segment** in the style you described. Device boxes attach to that line, and labels identify the interface or port involved. A second VLAN gets its own line. If traffic can pass between VLANs, show the Layer 3 device—often a firewall or router—connecting to each VLAN, with the relevant interface IP addresses.

**Important:** A VLAN is not literally a cable or a single straight line. The line is a drawing convention that represents membership in, or connection to, that logical segment. The real network may contain switches and multiple physical links that the simplified diagram omits. Make this convention explicit in the diagram legend.

---

## 2. Learn the symbols

| Symbol | Meaning | What to write |
|---|---|---|
| Horizontal line | A VLAN / logical Layer 2 segment | VLAN ID, VLAN name, subnet |
| Rectangle | A network device | Device role/type, hostname |
| Label beside a device | Device details | Management IP, hostname, model if useful |
| Label beside a connection | Interface/port | Local interface and, if known, far-end interface |
| Firewall between two VLAN lines | A device routing/filtering traffic between networks | Interface name, IP, zone, gateway role |
| Dashed line (optional) | A special or indirect relationship | Explain it in the legend |
| Arrow (optional) | Direction of a particular flow | Use only when direction matters |

### Use precise labels

Try to distinguish these items:

- **VLAN ID:** for example, `VLAN 20`
- **VLAN name:** for example, `OT-CONTROL`
- **Subnet/CIDR:** for example, `10.20.20.0/24`
- **Device IP:** an address assigned to a device interface, for example `10.20.20.21`
- **Default gateway:** the Layer 3 address devices in that subnet use to reach other networks, for example `10.20.20.1`
- **Port/interface:** for example, `Gi1/0/12`, `Eth1/2`, or `port3`

Do not write only “IP” if it is unclear whether the address is a device address, interface address, or gateway.

---

## 3. Start with one VLAN

Suppose a small control network contains two devices. These example addresses are fictional and are only for learning.

- VLAN ID: `20`
- VLAN name: `OT-CONTROL`
- Subnet: `10.20.20.0/24`
- Gateway: `10.20.20.1`
- PLC: `PLC-01`, address `10.20.20.21`
- Engineering workstation: `ENG-WS-01`, address `10.20.20.31`

### Example 1 — one logical VLAN

```text
             VLAN 20 — OT-CONTROL — 10.20.20.0/24
========================================================================
          |                                      |
       Gi1/0/12                               Gi1/0/18
          |                                      |
   +----------------+                    +----------------------+
   | PLC            |                    | Engineering          |
   | PLC-01         |                    | workstation           |
   | IP 10.20.20.21 |                    | ENG-WS-01             |
   +----------------+                    | IP 10.20.20.31        |
                                         +----------------------+

                 Default gateway: 10.20.20.1
```

This shows both devices associated with the same logical segment. In a real network, they might connect to different switch ports on one or more switches. The simplified line does not mean they are physically wired directly to one another.

**What to check:**
1. Is the VLAN ID shown?
2. Is the VLAN name shown?
3. Is the subnet shown in CIDR notation?
4. Does each device have a hostname and IP?
5. Are the interface/port labels attached to the correct device?
6. Is the gateway identified, even if it is drawn elsewhere?

### A practical naming pattern

Use a consistent format such as:

```text
[Device role/type]
Hostname: PLC-01
IP:       10.20.20.21
VLAN:     20
Port:     Gi1/0/12
```

If space is tight, put hostname and IP in the box and put the port beside the connection. Keep the same convention throughout the diagram.

---

## 4. Add a second VLAN

Now imagine a separate supervisory network:

- VLAN ID: `30`
- VLAN name: `OT-SUPERVISORY`
- Subnet: `10.20.30.0/24`
- Gateway: `10.20.30.1`
- SCADA server: `SCADA-01`, address `10.20.30.10`

Draw a separate line for the second VLAN. Do **not** join the two VLAN lines directly merely because the networks communicate. Show the Layer 3 device that connects them.

### Example 2 — two VLANs with a firewall between them

```text
 VLAN 20 — OT-CONTROL — 10.20.20.0/24
====================================================================
          |                                      |
       Gi1/0/12                               Gi1/0/18
          |                                      |
   +----------------+                    +----------------------+
   | PLC            |                    | Engineering          |
   | PLC-01         |                    | workstation           |
   | 10.20.20.21    |                    | ENG-WS-01             |
   +----------------+                    | 10.20.20.31           |
                                         +----------------------+
                         |
                         | Firewall interface / gateway
                         | VLAN 20: 10.20.20.1
                  +------------------------+
                  | FIREWALL               |
                  | FW-OT-01                |
                  | Policy controls traffic|
                  +------------------------+
                         | Firewall interface / gateway
                         | VLAN 30: 10.20.30.1
                         |
====================================================================
 VLAN 30 — OT-SUPERVISORY — 10.20.30.0/24
                         |
                      Eth1/2
                         |
                  +--------------------+
                  | SCADA server       |
                  | SCADA-01           |
                  | 10.20.30.10        |
                  +--------------------+
```

This is a conceptual layout. Your workplace may use a different arrangement: for example, a firewall may connect to a switch using a trunk that carries several VLANs, or the firewall may have separate physical interfaces. Draw the arrangement that is actually configured, not the arrangement that looks neatest.

### What the firewall details mean

| Detail | Example | Explanation |
|---|---|---|
| Firewall hostname | `FW-OT-01` | Name used to identify the device |
| VLAN 20 interface IP | `10.20.20.1/24` | Gateway/interface address for VLAN 20, if the firewall is the gateway |
| VLAN 30 interface IP | `10.20.30.1/24` | Gateway/interface address for VLAN 30, if the firewall is the gateway |
| Interface names | `port1`, `port2`, `Eth1/1` | Names vary by vendor and configuration |
| Security zones | `OT-CONTROL`, `OT-SUPERVISORY` | Optional grouping used by the firewall |
| Policy | `PLC → SCADA: allowed ports only` | Summarizes permitted traffic; the actual policy must be verified |

Do not assume that a firewall is the gateway just because it sits between two lines in a drawing. Verify the actual interface configuration and routing design. Sometimes a Layer 3 switch performs the routing, while a firewall filters only selected paths.

---

## 5. How devices communicate

Use this sequence to reason about a typical connection from a device in VLAN 20 to a server in VLAN 30.

1. **The source device checks the destination address.** If the destination is outside its own IP subnet, it sends the traffic to its configured default gateway.
2. **The device resolves the gateway's local Layer 2 address** using the relevant neighbor-discovery mechanism (ARP for IPv4).
3. **The frame travels through the local VLAN.** Switches forward it according to their MAC address tables and VLAN configuration.
4. **The Layer 3 gateway receives the packet.** This may be a firewall, router, or Layer 3 switch.
5. **Routing and policy are evaluated.** The device checks the route and, if applicable, the firewall rules, zones, and any other relevant controls.
6. **The packet is forwarded into the destination VLAN** if the route and policies permit it.
7. **The destination device receives the packet.** The reply follows the applicable return route and policies.

A line diagram helps you see the logical segments and gateway relationships. It does not, by itself, prove that a flow is permitted. To prove communication, check routes, VLAN membership, access-control rules, endpoint settings, and relevant logs or test results.

### Flow example

```text
PLC-01
10.20.20.21
   |
   | VLAN 20: 10.20.20.0/24
   v
Default gateway / firewall interface
10.20.20.1
   |
   | Routing + firewall policy check
   | Is PLC-to-SCADA traffic permitted?
   v
Firewall interface in VLAN 30
10.20.30.1
   |
   | VLAN 30: 10.20.30.0/24
   v
SCADA-01
10.20.30.10
```

The diagram describes the intended path. If policy denies the flow, the devices are still shown on connected networks, but the application traffic will not pass.

---

## 6. Ports: what to label

A connection label can mean different things in different diagrams, so be explicit. In the line-and-box style, it commonly means the switch port or device interface through which the device joins that VLAN.

For a direct link between two network devices, record **both ends** when known:

```text
SW-OT-01 Gi1/0/24  ----------------  FW-OT-01 port1
```

For an endpoint connected to a switch:

```text
PLC-01 Ethernet1  ----  SW-OT-01 Gi1/0/12
```

Useful details include:
- Device/interface at each end
- VLAN access assignment or trunk status
- Native VLAN, if relevant and confirmed
- Allowed VLAN list on a trunk, if relevant
- Link aggregation membership, if applicable
- Link speed, only if useful to the task

**Avoid ambiguity:** `Gi1/0/12` on its own does not tell the reader which switch owns that port. Write `SW-OT-01 Gi1/0/12` where necessary.

### Access port versus trunk

- **Access port:** normally carries one configured data VLAN for an endpoint.
- **Trunk port:** can carry multiple VLANs between network devices, according to the trunk configuration.

Do not draw a trunk as if it were an ordinary endpoint access port. Label it `TRUNK` and, where useful, list the allowed VLANs. Verify actual configuration rather than inferring it from the cable or device type.

---

## 7. A repeatable drawing workflow

Use this order every time:

### Step 1 — Define the scope

Write down the purpose of the diagram. For example: “Show the logical path between the PLC VLAN and SCADA VLAN, including gateway interfaces and switch ports.”

Decide what is in scope:
- One cabinet, site, cell/area, or whole network?
- Only OT devices, or IT and OT?
- Only VLANs and gateways, or also physical switches and links?

### Step 2 — Collect facts before drawing

Use approved documentation and authorized read-only access. Gather:
- Hostname and device role/type
- IP address and subnet mask/prefix
- VLAN ID and VLAN name
- Default gateway
- Switch hostname and local port
- Device interface name
- Firewall/router interface and IP
- Trunk/access mode, if relevant
- Link to the source of the information and when it was verified

Do not guess missing IPs or ports. Mark unknowns as `TBC` or `UNVERIFIED` and follow up.

### Step 3 — Draw the VLAN segments

Draw one horizontal line for each VLAN using your chosen convention. Put the VLAN ID, name, and subnet above it. Arrange related VLANs near each other, leaving enough room for labels.

### Step 4 — Add device boxes

Place endpoints above or below the correct VLAN line. Keep device boxes similar in size. Include device role/type, hostname, and IP address.

### Step 5 — Connect devices and label interfaces

Draw short, clean connectors from each device to its VLAN line. Put the port/interface label close to the connector. If the actual topology includes switches, show them where needed instead of hiding an important hop.

### Step 6 — Add gateways and inter-VLAN devices

Place the router, Layer 3 switch, or firewall where its role is clearest. Connect it to each relevant VLAN. Label every relevant interface with its name and IP/prefix. If a trunk carries several VLANs, show that accurately and label it.

### Step 7 — Show security boundaries and flows

If useful, label firewall zones and summarize the permitted traffic at a high level, such as `PLC → SCADA: TCP 4840 permitted`. Only state that a flow is permitted if the rule has been checked. Avoid putting secrets or sensitive credentials in diagrams.

### Step 8 — Add a legend and document control

Include:
- Diagram title and scope
- Site/area
- Author or team, if appropriate
- Date last verified
- Version
- Legend explaining what each line means
- Source/verification notes
- `UNVERIFIED` labels for information not yet confirmed

### Step 9 — Validate with another source

Compare the diagram with approved IPAM records, switch VLAN/port configuration, routing tables, firewall interface settings, and the relevant network documentation. Have a senior engineer review it before using it for changes or troubleshooting.

---

## 8. Suggested visual layout

A clean page usually reads from top to bottom or left to right:

1. **VLAN / subnet heading**
2. **Endpoint devices**
3. **Switch or access layer**, if needed to explain the real connection
4. **Gateway/firewall boundary**
5. **Other VLAN / subnet**
6. **Legend, notes, and verification status**

Keep lines straight, avoid crossing connectors, and use consistent labels. Do not rely on color alone: label every VLAN so the diagram remains readable when printed in grayscale.

### Example legend

```text
Solid horizontal line = logical VLAN segment
Solid connector       = device/interface association
Firewall box          = Layer 3/security boundary (role must be verified)
IP/prefix              = address assigned to the named interface/device
TBC                    = information not yet confirmed
```

---

## 9. Common mistakes to avoid

1. **Treating a VLAN line as a physical cable.** It is a visual representation of a logical segment.
2. **Mixing up subnet and device IP.** `10.20.20.0/24` is the network prefix; `10.20.20.21` is an example host address.
3. **Forgetting the prefix length.** An IP without `/24`, a subnet mask, or equivalent context can be incomplete.
4. **Assuming every firewall interface is a gateway.** Verify routing and interface configuration.
5. **Showing VLANs connected without identifying the Layer 3 path.** Explain which device routes between them.
6. **Writing a port without its device name.** `SW-OT-01 Gi1/0/12` is clearer than `Gi1/0/12`.
7. **Drawing a trunk like an access port.** Label trunks and document their VLAN behavior when relevant.
8. **Claiming connectivity based on the drawing alone.** The diagram is a model; configuration and tests establish actual behavior.
9. **Using unverified information as fact.** Mark it as unverified until checked.
10. **Overcrowding one diagram.** Use a high-level overview plus detailed diagrams when the network is large.

---

## 10. A reusable blank template

Copy this for each VLAN and fill in the verified information.

```text
DIAGRAM TITLE:
SITE / AREA:
PURPOSE / SCOPE:
LAST VERIFIED:
VERSION:

VLAN ID:
VLAN NAME:
SUBNET / PREFIX:
DEFAULT GATEWAY:
LAYER 3 DEVICE:
GATEWAY INTERFACE:
GATEWAY INTERFACE IP:

DEVICE 1
  Role/type:
  Hostname:
  Device IP / prefix:
  VLAN:
  Device interface:
  Connected switch:
  Switch port:
  Verification status:

DEVICE 2
  Role/type:
  Hostname:
  Device IP / prefix:
  VLAN:
  Device interface:
  Connected switch:
  Switch port:
  Verification status:

INTER-VLAN COMMUNICATION
  Source VLAN:
  Destination VLAN:
  Routing device:
  Relevant interfaces:
  Required traffic / ports:
  Firewall policy verified?:
  Return path verified?:

NOTES / UNKNOWN ITEMS:
LEGEND:
```

---

## 11. Practice exercise

Create a diagram from these fictional details:

- VLAN 100 — `OT-CONTROL` — `192.168.100.0/24`
- Gateway on firewall `FW-01`: `192.168.100.1/24`, interface `port2`
- PLC `PLC-01`: `192.168.100.20/24`, connected to switch `SW-01`, port `Gi1/0/5`
- VLAN 200 — `OT-SCADA` — `192.168.200.0/24`
- Gateway on `FW-01`: `192.168.200.1/24`, interface `port3`
- SCADA server `SCADA-01`: `192.168.200.10/24`, connected to `SW-02`, port `Gi1/0/10`

Your diagram should show:
1. Two separate VLAN lines with IDs, names, and subnet prefixes.
2. One device box for the PLC and one for the SCADA server.
3. Both switch names and endpoint switch ports.
4. `FW-01` connected to both VLANs, with `port2` and `port3` and their respective IP addresses.
5. A note that inter-VLAN traffic depends on routing and firewall policy.

### Self-check

- Can someone identify which VLAN each endpoint belongs to?
- Can they find the device IP, subnet, gateway, and switch port?
- Is the inter-VLAN routing/security device clear?
- Are the two gateway IPs associated with the correct VLANs?
- Have you avoided claiming that traffic is allowed without checking the firewall policy?
- Are unknowns visibly marked rather than guessed?

---

**The most important habit:** draw what is verified, label what each line means, and mark what you still need to confirm. A readable diagram is useful; an accurate and verifiable diagram is operationally trustworthy.
