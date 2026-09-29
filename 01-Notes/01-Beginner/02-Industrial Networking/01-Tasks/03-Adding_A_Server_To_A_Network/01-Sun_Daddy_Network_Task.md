> [Check Out](https://www.storagereview.com/review/hp-proliant-dl360p-gen8-server-review)
# Task Breakdown
This is the big bad doo doo daddy of Tasks. Once you are able to do the following task, you should be ready to work in the Plant — make sure you understand the fundamentals of every part of this task.

## Devices on the network
- Switch 1 : **Cisco Catalyst IE-3300-8T2X** feat. **Cisco PWR-IE240W-PCAC-L**
- Switch 2: **Cisco Catalyst IE-3000 Rugged Switch IE-3000-4TC**
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
![[Sun-daddy-network.png]]

---
The Firewall (FW) acts as the default gateway performing inter-VLAN routing. It's a **pfSense VM with two virtual NICs** — one per VLAN, each vNIC tagged into its VLAN by ESXi's port groups, so pfSense itself never has to know about VLAN tags at all.

**VLAN 10 is management-only, and pfSense doesn't touch it.** SW1, SW2, and the ESXi host all live here (`192.168.10.0/24`) purely so I can manage the physical/virtual infrastructure itself. pfSense has no interface on VLAN 10 at all — it only routes between VLAN 11 and VLAN 12. That's intentional: my management plane and my "production" VLANs are kept completely separate, so a mistake on one can't take down the other.

**VM1/VM2 live on VLAN 12, VM3 lives on VLAN 11.** This is a change from an earlier version of this doc where VM1/VM2 were VLAN 10 — I moved them to make room for VLAN 10 to become the pure management network above, instead of doing double duty as both "VM1/VM2's network" and "half of my switch management."

**VLAN Trunking Across Switches:** Both switches have **VLAN 10, 11, and 12** defined in their VLAN database. The trunk link between them carries all three so the Laptop (whichever identity it's using — see below) can reach whatever it needs to, through the firewall where required.

**Server port(s) must be a trunk, not access — and now it's three ports bonded together.** My server pushes VLAN 11 (VM3) and VLAN 12 (VM1/VM2) traffic, plus VLAN 10 management traffic for the host itself, down to Switch 1. I bonded three physical NICs (`vmnic1`, `vmnic2`, `vmnic3`) into a static EtherChannel to Switch 1's `Gi1/3–1/5` for extra bandwidth/redundancy — full story and the LACP-vs-static gotcha I hit is in `05-FireWall_Configuration.md`, Section 6 (yes, EtherChannel isn't really a firewall topic, but that's where the config for it and the vSwitch teaming policy both live, so I documented it there rather than scattering it).

### Network Addressing Plan

| **Device**                                         | **Interface / Role**                                     | **IP Address**          | **Subnet Mask** | **Default Gateway**       |
| -------------------------------------------------- | -------------------------------------------------------- | ----------------------- | --------------- | ------------------------- |
| **Virtual Firewall — em2 (VLAN12)**                | VLAN 12 gateway                                          | `192.168.12.1`          | `255.255.255.0` | N/A                       |
| **Virtual Firewall — em1 (LAN)**                   | VLAN 11 gateway (see naming note below)                  | `192.168.11.1`          | `255.255.255.0` | N/A                       |
| **Virtual Firewall — em0 (WAN)**                   | VLAN 10 gateway (see naming note below)                  | `192.168.10.1`          | `255.255.255.0` | N/A                       |
| **Switch 1**                                       | Interface Vlan10 (management)                            | `192.168.10.200`        | `255.255.255.0` | `192.168.10.1` (see note) |
| **Switch 2**                                       | Interface Vlan10 (management)                            | `192.168.10.201`        | `255.255.255.0` | `192.168.10.1` (see note) |
| **ESXi host (vmk0)**                               | VLAN 10, reached over the trunk like everything else now | `192.168.10.2`          | `255.255.255.0` | N/A                       |
| **VM1 / VM2**                                      | VLAN 12 Host                                             | `192.168.12.10` / `.11` | `255.255.255.0` | `192.168.12.1`            |
| **VM3**                                            | VLAN 11 Host                                             | `192.168.11.10`         | `255.255.255.0` | `192.168.11.1`            |
| **Laptop — management identity (SW2 `Fa1/2`)**     | VLAN 10 Host                                             | `192.168.10.50`         | `255.255.255.0` | `192.168.10.1` (see note) |
| **Laptop — VM3-diagnostic identity (SW2 `Fa1/1`)** | VLAN 11 Host                                             | `192.168.11.3`          | `255.255.255.0` | `192.168.11.1`            |

> **Note on the `192.168.10.1` gateway:** both switches still have `ip default-gateway 192.168.10.1` configured, but nothing actually lives at that address anymore — pfSense doesn't have an interface on VLAN 10. It's harmless (management traffic destined off-VLAN-10 just has nowhere to go and dies quietly), but it's a leftover, not a real route. I'm leaving it in the configs since it doesn't hurt anything, just flagging it so future-me doesn't go looking for a device that isn't there.

> **Note on "WAN":** pfSense forces you to have a WAN interface during setup, and I didn't reassign it, so my second vNIC is still literally named "WAN" even though it's routing my internal VLAN 11, not the internet. I unblocked "private networks" and "bogon networks" on it and added a pass-all rule, so it behaves exactly like any other internal interface.

> **Third laptop identity, added for the actual task requirement:** my original two laptop identities (VLAN 10 management, VLAN 11 direct-to-VM3-diagnostic) can't actually complete Task step 5 — VLAN 10 isn't routed anywhere, and VLAN 11 is the same VLAN VM3 is already on, so that ping never crosses the firewall at all. `Fa1/3` on Switch 2, access VLAN 12, is the one that actually proves cross-VLAN routing works (laptop on VLAN 12 → pfSense → VM3 on VLAN 11), which is what "ping VM3 from Laptop" is actually testing.

> **One-Ethernet-port laptop problem, now with three identities instead of two:** I still only have one Ethernet port, so I'm swapping between three different cable/IP combos depending on what I'm doing, instead of two. Still works, still occasionally makes me want to throw the laptop.

### Step-by-Step Assignment Procedure
**1. Configure Firewall Interfaces & Inter-VLAN Routing**

- **WAN (em0):** `192.168.10.1 /24`. 
- **LAN (em1):** `192.168.11.1 /24`.
- **VLAN12 (em2):** `192.168.12.1 /24`.
- Uncheck "Block private networks and loopback addresses" and "Block bogon networks" on this interface, since it's carrying private RFC1918 traffic, not a real internet uplink.
- Add a **Pass / IPv4 / any / any** firewall rule on both LAN and VLAN12 tab and the WAN tab so traffic between `192.168.10.0/24`, `192.168.11.0/24` and `192.168.12.0/24` isn't silently dropped.

**2. Configure Switches (VLANs & Trunking)**

- **SW1 & SW2:** VLAN 10, 11, and 12 all created on both. Server-facing link (now a 3-port EtherChannel) is a **trunk** allowing all three VLANs. SW1↔SW2 trunk allows all three too.
- **SW2 laptop ports:** `Fa1/1` access VLAN 11, `Fa1/2` access VLAN 10, `Fa1/3` access VLAN 12.

**3. Configure ESXi Virtual Networking**

- `vmnic1`, `vmnic2`, `vmnic3` bonded into one EtherChannel-matched uplink team on `vSwitch1`, teaming policy "Route based on IP hash." Port groups `VLAN_10`, `VLAN_11`, `VLAN_12` on that same vSwitch — `vmk0` (host management) sits on `VLAN_10` now, reached over the trunk instead of a private direct cable. Full detail in `03-Server_Setup_Documentation.md`, Step 0E, and the EtherChannel-specific explanation in `05-FireWall_Configuration.md`, Section 6.

**4. Assign IP Addresses on End Devices**

- **VM 1:** `192.168.12.10 /24`, gateway `192.168.12.1`
- **VM 2:** `192.168.12.11 /24`, gateway `192.168.12.1`
- **VM 3:** `192.168.11.10 /24`, gateway `192.168.11.1`
- **Laptop (via Switch 2, whichever identity is plugged in):** see the addressing table above.
