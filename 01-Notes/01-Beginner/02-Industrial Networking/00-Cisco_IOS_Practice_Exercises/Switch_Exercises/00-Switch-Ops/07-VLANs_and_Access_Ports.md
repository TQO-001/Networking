# 00-Switch Ops
## 07 - VLANs & Access Port Assignment

**What It Is:** Creating VLANs and assigning switch ports to them in access mode — the fundamental building block of Layer 2 network segmentation.

**Why It's Important:** Without VLANs, every device on a switch shares one broadcast domain — traffic separation between departments, device types, or security zones is impossible. Nearly every other topic in this folder (trunking, EtherChannel, port security, inter-VLAN routing) assumes VLANs already exist and are assigned correctly.

## Overview & Mechanics

- A **VLAN** is a logical broadcast domain enforced by the switch's forwarding hardware (ASIC), keyed by VLAN ID in the MAC address table. Devices in different VLANs cannot communicate without a Layer 3 device routing between them (see file 13).
- **VLAN ID range**: 1–4094. VLAN 1 exists by default on every port and is also the default native VLAN — best practice is to never carry user data on VLAN 1 in production.
- VLANs are stored in `vlan.dat` in flash (see file 02) — not in the text-based running/startup-config. This is why VLANs survive a plain `erase startup-config` if `vlan.dat` isn't also deleted.
- **Access port**: a port assigned to exactly one VLAN. Frames arrive/leave untagged; the switch internally associates the frame with the port's configured VLAN for forwarding decisions, then strips any internal tagging before delivering it out another access port in the same VLAN.
- `switchport nonegotiate` disables DTP (Dynamic Trunking Protocol) negotiation on the port — appropriate on access ports since you never want them to accidentally negotiate into trunk mode.

## Step-by-Step Drill

```text
enable
configure terminal

! --- Step 1: Create individual VLANs ---
vlan 10
 name SALES
exit

vlan 20
 name ENGINEERING
exit

! --- Step 2: Create multiple VLANs at once with range syntax ---
vlan 30,40,50
exit

! --- Step 3: Name the range-created VLANs individually ---
vlan 30
 name VOICE
exit
vlan 40
 name GUEST
exit
vlan 50
 name SERVERS
exit

! --- Step 4: Assign a single port to an access VLAN ---
interface fastethernet0/1
 switchport mode access
 switchport access vlan 10
 switchport nonegotiate
 no shutdown
exit

! --- Step 5: Assign a contiguous range of ports at once ---
interface range fastethernet0/2 - 10
 switchport mode access
 switchport access vlan 20
 switchport nonegotiate
 no shutdown
exit

! --- Step 6: Save ---
end
copy running-config startup-config
```

**Verification commands:**
```text
show vlan brief
show interfaces status
show interfaces fastethernet0/1 switchport
show mac address-table vlan 10
```

## Common failure points

- **Creating a VLAN but forgetting to assign any port to it** — `show vlan brief` will list it with zero ports, which is valid but means nothing is actually using it yet; a common source of "I configured the VLAN but it's not working" confusion.
- **Typo'd VLAN ID on `switchport access vlan`** — IOS will silently auto-create a new VLAN if the ID doesn't exist yet, rather than erroring, which can leave you with a stray unnamed VLAN and a port that isn't in the VLAN you meant.
- **Forgetting `no shutdown`** on newly configured interfaces, especially ones that came from a factory-default or freshly-erased switch where all ports may start administratively down depending on platform defaults.
- **Deleting a VLAN that ports are still assigned to** — the ports don't get reassigned automatically; they become "inactive" (shown in `show vlan brief` output) and pass no traffic until reassigned to a valid VLAN.

---
*Tip: name every VLAN meaningfully (`name SALES`, not left blank) — six months from now `show vlan brief` should tell you what a VLAN is for without needing to cross-reference a spreadsheet.*
