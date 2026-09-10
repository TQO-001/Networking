> [Check Out](https://www.storagereview.com/review/hp-proliant-dl360p-gen8-server-review)
# Task Breakdown
This is the big doo doo daddy of Tasks. Once you are able to do the following task, you should be ready to work in the Plant — make sure you understand the fundamentals of every part of this task.

## Devices on the network
- Switch 1 : **Cisco Catalyst IE-3300 Rugged Switch IE-3000-4TC
- Switch 2: **Cisco CatalystIE-3300-8T2X** feat. **Cisco PWR-IE240W-PCAC-L**
- Server 1: **HPE ProLiant DL360p Gen8 Server**
- Laptop: **My Personal Laptop**

## Sub-Tasks
1. Reload the server, download and install the OS for the server.
2. Setup the network:
	1. Connect the switches together.
	2. Connect the **Server 1** to **Switch 1**.
	3. Connect the **Laptop** to **Switch 2**.
3. Create **3 VMs** on the server and RAID 5
4. Setup a **Virtual Firewall**
5. Ping **VM3** from **Laptop**

---
# Simulation
To simulate this environment in Cisco Packet Tracer, exact physical hardware like the Cisco Catalyst IE-3300 Rugged series or a physical HPE ProLiant RAID server are replaced with Packet Tracer equivalents. The hardware devices map to the following Packet Tracer stock models:

* **Switch 1 & Switch 2 (IE-3300):** Use **Cisco 3650-24PS** or **2960-24TT** switches.
* **Server 1 (HPE ProLiant):** Use the standard **Server** device.
* **Virtual Firewall:** Use a **Cisco ASA 5505** or **ASA 5506-X** firewall device.
* **VM1, VM2, VM3:** Represented by **PC** devices (since Packet Tracer cannot run nested hypervisors/VMs on a single server, each VM is represented by a separate PC connected to an interface/switch).
* **Laptop:** Use the standard **Laptop** device.

![[Pasted image 20260902095446.png]]

> Okay so I did try to do the simulation, but I don't think I can do it with a configuration which won't majorly differ from the actual network build, with packet tracer I would have to make a lot of concessions and "what if's" and "because's". It would be much more productive to actually just do it IRL. You can try and do it, it would be beneficial in the long run but you would have to add an additional switch and stuff, so it's up to you son, but that's a yikes from me dawg.

---
# Planning
### Sun Daddy Network Layout
![[Sun-daddy-network (1).png]]

---
The Firewall (FW) acts as the default gateway performing inter-VLAN routing. It's a **pfSense VM with two virtual NICs** — one per VLAN, each vNIC tagged into its VLAN by ESXi's port groups, so pfSense itself never has to know about VLAN tags at all. That's simpler to reason about than router-on-a-stick with tagged sub-interfaces, and it's the design I actually landed on after a lot of back-and-forth.

**No management VLAN.** I originally tried adding a VLAN 110 management network on my mentor's suggestion, and it's what caused most of my lost-access headaches — every time I touched it I locked myself out of something. It's not part of the actual task requirements (task only asks me to route between VLAN 10 and VLAN 11 and get a successful ping), so I ripped it back out. If my mentor still wants a dedicated management subnet later, that's a clean addition on top of a *working* network — not something to fight with while I'm still getting the basics up.

**VLAN Trunking Across Switches:** Both switches must have **VLAN 10** and **VLAN 11** defined in their VLAN database. The trunk link between them carries both VLANs so the Laptop (VLAN 10, on Switch 2) can reach VM3 (VLAN 11, on the Server) through the firewall.

**Server port must be a trunk, not access.** My server sends VM1/VM2 traffic (VLAN 10) and VM3 traffic (VLAN 11) down **one physical cable** into Switch 1. An access port can only carry one VLAN — so the port connecting the server to Switch 1 has to be a trunk carrying both.

### Network Addressing Plan

| **Device**                                       | **Interface / Role**                                               | **IP Address**          | **Subnet Mask** | **Default Gateway** |
| ------------------------------------------------ | ------------------------------------------------------------------ | ----------------------- | --------------- | ------------------- |
| **Virtual Firewall — em1 (LAN)**                 | VLAN 10 gateway                                                    | `192.168.10.1`          | `255.255.255.0` | N/A                 |
| **Virtual Firewall — em0 (WAN)**                 | VLAN 11 gateway (see note below)                                   | `192.168.11.1`          | `255.255.255.0` | N/A                 |
| **Switch 1**                                     | Interface Vlan10 (management)                                      | `192.168.10.254`        | `255.255.255.0` | `192.168.10.1`      |
| **Switch 2**                                     | Interface Vlan11 (management)                                      | `192.168.11.254`        | `255.255.255.0` | `192.168.11.1`      |
| **ESXi host (vmk0)**                             | Private direct link to my laptop only — never touches the switches | `192.168.10.2`          | `255.255.255.0` | N/A                 |
| **VM1 / VM2**                                    | VLAN 10 Host                                                       | `192.168.10.10` / `.11` | `255.255.255.0` | `192.168.10.1`      |
| **VM3**                                          | VLAN 11 Host                                                       | `192.168.11.10`         | `255.255.255.0` | `192.168.11.1`      |
| **Laptop (plugged into Switch 2, Fa1/1)**        | VLAN 10 Host                                                       | `192.168.10.50`         | `255.255.255.0` | `192.168.10.1`      |
| **Laptop (plugged directly into server vmnic0)** | Emergency management link only                                     | `192.168.10.3`          | `255.255.255.0` | N/A                 |

> **Note on "WAN":** pfSense forces you to have a WAN interface during setup, and I didn't reassign it, so my second vNIC is still literally named "WAN" even though it's routing my internal VLAN 11, not the internet. I unblocked "private networks" and "bogon networks" on it (pfSense blocks those on WAN by default, assuming a WAN is internet-facing) and added a pass-all rule, so it behaves exactly like any other internal interface. I could rename/reassign it to something like OPT1 later, but since it already works, I'm leaving it alone for now — less to break.

> **One-Ethernet-port laptop problem:** my laptop only has one Ethernet port. I can't be plugged into the server (`192.168.10.3`) and into Switch 2 (`192.168.10.50`) at the same time — I have to physically unplug/replug and change my IP settings depending on which one I'm doing. See the Fix-It Guide for the exact swap procedure.

> I do wanna note something, I am very lazy so I ended up never changing the IP of the laptop for the server or switch and only use `192.168.10.50`. I know, I'm bad, but at least I know I'm bad. Lol, did you get the reference? Family Guy? Nah but for real the only reason I didn't is because while it is good practice you don't _strictly_ have to.

### Step-by-Step Assignment Procedure
**1. Configure Firewall Interfaces & Inter-VLAN Routing**

- **LAN (em1):** `192.168.10.1 /24`.
- **WAN (em0):** `192.168.11.1 /24`. Uncheck "Block private networks and loopback addresses" and "Block bogon networks" on this interface (Interfaces → WAN), since it's carrying private RFC1918 traffic, not a real internet uplink.
- Add a **Pass / IPv4 / any / any** firewall rule on both the LAN tab and the WAN tab so traffic between `192.168.10.0/24` and `192.168.11.0/24` isn't silently dropped (pfSense denies everything by default).

**2. Configure Switches (VLANs & Trunking)**

- **SW1:** Create VLAN 10 (`vlan 10`). Server-facing port is a **trunk** allowing VLAN 10 and 11.
- **SW2:** Create VLAN 11 (`vlan 11`). Laptop's port is an **access** port on VLAN 10 (matches the laptop's actual IP).
- **Trunk Link:** SW1 ↔ SW2 trunk allows VLAN 10 and 11 (`switchport trunk allowed vlan 10,11`).

**3. Configure ESXi Virtual Networking**

- Two separate vSwitches — one dedicated to the direct laptop link (`vmnic0`), one dedicated to the trunk to Switch 1 (`vmnic1`). Full detail is in `03-Server_Setup_Documentation.md`, Step 0E — this split is what fixed my "plugging in the switch cable kills my direct laptop connection" problem.
- Port groups on the trunk vSwitch, tagged per VLAN: VLAN 10 → VM1, VM2, pfSense LAN. VLAN 11 → VM3, pfSense WAN.

**4. Assign IP Addresses on End Devices**

- **VM 1:** `192.168.10.10 /24`, gateway `192.168.10.1`
- **VM 2:** `192.168.10.11 /24`, gateway `192.168.10.1`
- **VM 3:** `192.168.11.10 /24`, gateway `192.168.11.1`
- **Laptop (via Switch 2):** `192.168.10.50 /24`, gateway `192.168.10.1`
