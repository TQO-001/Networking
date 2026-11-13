# 00-Switch Ops
## 13 - Inter-VLAN Routing (SVI Routing & Router-on-a-Stick)

**What It Is:** How devices in different VLANs actually communicate with each other — since VLANs are isolated broadcast domains by design, something has to route between them at Layer 3. Two common methods: a multilayer switch routing directly via SVIs, or a router-on-a-stick using a single trunk link to an external router.

**Why It's Important:** VLANs alone only achieve segmentation, not connectivity between segments. Every real network needs some devices in different VLANs to reach each other (e.g. a workstation VLAN needs to reach a server VLAN) — this is where that actually happens.

## Overview & Mechanics

- **Why VLANs can't talk to each other on their own**: a Layer 2 switch forwards based on MAC address within a single broadcast domain. A frame destined for a device in a different VLAN has no Layer 2 path there — it needs to be routed (re-encapsulated with a new destination MAC, decremented TTL) by something operating at Layer 3.
- **Method 1 — SVI Routing on a multilayer switch**: if the switch supports Layer 3 (`ip routing` capable — check `show ip routing` availability; the IE 3000 and Layer 2-only switches do NOT support this, they'd need Method 2), enabling `ip routing` globally lets every VLAN's SVI act as that VLAN's default gateway directly on the switch, with routing calculated in hardware (ASIC-based, very fast). This is the standard approach in modern access/distribution layer designs where a multilayer switch is available.
- **Method 2 — Router-on-a-Stick**: when only a Layer 2 switch is available (common with fixed-config switches like the IE 3000), a single physical link to an external router is configured as an 802.1Q trunk, and the router creates a **subinterface** per VLAN (e.g. `GigabitEthernet0/0.10` for VLAN 10), each with an IP address that serves as that VLAN's default gateway. The router does the actual routing between subinterfaces; the switch just tags/untags frames.
- Either way, every end device's default gateway must point at the correct VLAN's routing IP (the SVI, or the router subinterface) — a device configured with the wrong gateway will never reach other VLANs even if everything else is correct.

## Step-by-Step Drill: Method 1 — SVI Routing (Multilayer Switch)

```text
enable
configure terminal

! --- Step 1: Enable IP routing globally (this switch must support L3) ---
ip routing

! --- Step 2: Create VLANs if not already present ---
vlan 10
 name SALES
exit
vlan 20
 name ENGINEERING
exit

! --- Step 3: Configure each VLAN's SVI with an IP — this becomes the gateway ---
interface vlan 10
 ip address 192.168.10.1 255.255.255.0
 no shutdown
exit

interface vlan 20
 ip address 192.168.20.1 255.255.255.0
 no shutdown
exit

! --- Step 4: Assign access ports to their VLANs as normal ---
interface range fastethernet0/1 - 5
 switchport mode access
 switchport access vlan 10
 no shutdown
exit

! --- Step 5: Save ---
end
copy running-config startup-config
```

## Step-by-Step Drill: Method 2 — Router-on-a-Stick (Layer 2-only Switch)

```text
! --- On the SWITCH: configure the link to the router as a trunk ---
enable
configure terminal
interface fastethernet0/24
 switchport trunk encapsulation dot1q
 switchport mode trunk
 switchport trunk allowed vlan 10,20
 no shutdown
exit
end
copy running-config startup-config

! --- On the ROUTER: create subinterfaces, one per VLAN ---
enable
configure terminal

! --- Step 1: Enable the physical interface (no IP on it directly) ---
interface gigabitethernet0/0
 no shutdown
exit

! --- Step 2: Create a subinterface for VLAN 10 ---
interface gigabitethernet0/0.10
 encapsulation dot1q 10
 ip address 192.168.10.1 255.255.255.0
exit

! --- Step 3: Create a subinterface for VLAN 20 ---
interface gigabitethernet0/0.20
 encapsulation dot1q 20
 ip address 192.168.20.1 255.255.255.0
exit

! --- Step 4: Save ---
end
copy running-config startup-config
```

**Verification commands (either method):**
```text
show ip route
show ip interface brief
show vlan brief
show interfaces trunk
ping 192.168.20.5
```

## Common failure points

- **Trying SVI routing on a Layer 2-only switch (e.g. the IE 3000's base image)** — `ip routing` either isn't available or does nothing useful without the right feature set; verify with `show ip routing` / check the switch's documented capabilities before assuming Method 1 will work — this is the most likely reason a "why won't inter-VLAN routing work" problem shows up on fixed L2 hardware.
- **Forgetting `encapsulation dot1q <vlan>` on a router subinterface** — the subinterface exists but won't process tagged frames for that VLAN at all; this is the single most common router-on-a-stick mistake.
- **VLAN missing from the trunk's `allowed vlan` list** — routing config on the router subinterface is perfect, but if the switch-side trunk doesn't permit that VLAN across the link, frames never arrive at the router in the first place.
- **End device pointing at the wrong default gateway** — a device statically configured with the old gateway IP (or a DHCP scope still handing out a stale gateway) will silently fail to reach other VLANs even though the routing config itself is correct; always double-check the end device's actual configured gateway when troubleshooting "can't reach VLAN X."

---
*Tip: `ping` from the router/multilayer switch itself to a host in each VLAN first — if that works but end-device-to-end-device pings don't, the problem is almost always the end device's gateway setting, not your routing config.*
