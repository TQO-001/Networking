# 00-Switch Ops
## 08 - Trunking & Native VLANs

**What It Is:** Configuring a link to carry multiple VLANs between switches (or to a router/firewall) using 802.1Q tagging, and correctly setting the native (untagged) VLAN.

**Why It's Important:** Every switch-to-switch uplink in a segmented network needs to be a trunk — without it, VLANs created on one switch have no way to reach the same VLAN on another switch. Native VLAN mismatches are also one of the most common real-world misconfigurations, and are a known security weakness (VLAN hopping) if left on the default.

## Overview & Mechanics

- **802.1Q tagging**: the switch inserts a 4-byte tag (12-bit VLAN ID + 3-bit CoS priority + 1-bit CFI/DEI) into the Ethernet frame header between the source MAC and EtherType fields, so the receiving switch knows which VLAN the frame belongs to.
- **Native VLAN**: the one exception to tagging — frames in the native VLAN cross the trunk **untagged**, for compatibility with older/non-802.1Q-aware equipment. Default is VLAN 1 on both ends.
- **Native VLAN mismatch**: if the two ends of a trunk disagree on which VLAN is native, untagged frames get placed into the wrong VLAN on arrival. CDP detects and flags this (`%CDP-4-NATIVE_VLAN_MISMATCH`). Best practice: set native VLAN to a dedicated, unused VLAN ID (not VLAN 1, not any VLAN carrying real traffic).
- **Allowed VLAN list**: by default a trunk carries VLANs 1–4094. `switchport trunk allowed vlan` prunes this down to only the VLANs actually needed across that link, reducing unnecessary flooding.
- **DTP (Dynamic Trunking Protocol)**: `switchport mode dynamic auto/desirable` negotiates trunking automatically. Production trunks should use `switchport mode trunk` + `switchport nonegotiate` for a predictable, non-negotiated link rather than relying on DTP.

## Step-by-Step Drill

```text
enable
configure terminal

! --- Step 1: Create a dedicated, unused native VLAN ---
vlan 999
 name NATIVE_UNUSED
exit

! --- Step 2: Configure the uplink port as a trunk ---
interface gigabitethernet0/1
 switchport trunk encapsulation dot1q
! (omit this line on switches that only support 802.1Q with no
! negotiation option, e.g. most 2960/IE3000 platforms)
 switchport mode trunk

! --- Step 3: Set the native VLAN explicitly (must match both ends) ---
 switchport trunk native vlan 999

! --- Step 4: Restrict which VLANs are permitted across the trunk ---
 switchport trunk allowed vlan 10,20,30,40,50,99

! --- Step 5: Disable DTP negotiation ---
 switchport nonegotiate
 no shutdown
exit

! --- Step 6: Save ---
end
copy running-config startup-config
```

**Verification commands:**
```text
show interfaces trunk
show interfaces gigabitethernet0/1 switchport
show cdp neighbors detail
```
*Check `show interfaces trunk` on both ends — native VLAN and allowed VLAN list must match exactly.*

## Common failure points

- **Native VLAN mismatch between the two ends** — silent unless CDP is enabled and you're actually reading the logs/CDP output; causes intermittent, hard-to-diagnose connectivity issues for the native VLAN's traffic.
- **Forgetting `switchport trunk allowed vlan`** — trunk defaults to carrying all 4094 VLANs, including ones that shouldn't cross that particular link, unnecessarily increasing broadcast traffic and blast radius.
- **Leaving DTP enabled on both sides with mismatched modes** — e.g. one side `dynamic auto`, the other also `dynamic auto`: neither side initiates, and the link never actually becomes a trunk despite both being "trunk-capable." At least one side needs `dynamic desirable` or `trunk` for DTP to succeed, which is exactly why forcing `switchport mode trunk` + `nonegotiate` on both ends is the reliable production approach.
- **Adding a VLAN to one switch's VLAN database but forgetting to add it to the trunk's allowed list** — the VLAN exists and even has ports assigned, but traffic for it never crosses the uplink; a classic "it's configured but not working" trap.

---
*Tip: always verify `show interfaces trunk` on BOTH ends of a link after any trunk change — a config that looks right on one switch means nothing if the other end disagrees.*
