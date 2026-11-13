# 00-Switch Ops
## 09 - EtherChannel & LACP

**What It Is:** Bundling multiple physical links between two switches into one logical link for combined bandwidth and redundancy, using LACP to negotiate the bundle.

**Why It's Important:** Without EtherChannel, Spanning Tree would block all but one of several redundant parallel links between the same two switches (to prevent a loop), wasting the extra cabling. EtherChannel is the standard way to actually use multiple physical uplinks between switches simultaneously.

## Overview & Mechanics

- Bundles 2–8 physical ports into one logical `Port-channel` interface. STP sees a single logical link, not several parallel physical ones, so it doesn't need to block anything.
- **LACP** (802.3ad/802.1AX) is the standards-based negotiation protocol; both sides exchange LACPDUs to confirm they agree on bundling before traffic flows, preventing a half-configured channel from silently misbehaving. (Cisco's proprietary alternative is PAgP — LACP is the more broadly compatible choice.)
- **LACP modes**: `active` sends LACPDUs and initiates negotiation; `passive` only responds if the other side initiates. At least one side must be `active` — two `passive` sides never form a channel.
- **Member port config must match exactly** before bundling: same speed, duplex, trunk/access mode, allowed VLANs, native VLAN. A mismatch causes the port to be **suspended** rather than joining the bundle — the switch protecting you from a broken aggregation rather than silently forwarding traffic incorrectly.
- **Load balancing** across bundled links is hash-based (`port-channel load-balance`), typically using source/destination MAC or IP — not simple round-robin, so distribution across member links won't always be perfectly even.

## Step-by-Step Drill

```text
enable
configure terminal

! --- Step 1: Configure member ports IDENTICALLY before bundling ---
interface range gigabitethernet0/1 - 2
 switchport trunk encapsulation dot1q
 switchport mode trunk
 switchport trunk native vlan 999
 switchport trunk allowed vlan 10,20,30,40,50,99
 switchport nonegotiate
exit

! --- Step 2: Bundle the interfaces using LACP active mode ---
interface range gigabitethernet0/1 - 2
 channel-group 1 mode active
exit

! --- Step 3: Configure the resulting logical Port-channel interface ---
interface port-channel 1
 description Uplink-to-SW2-LACP
 switchport trunk encapsulation dot1q
 switchport mode trunk
 switchport trunk native vlan 999
 switchport trunk allowed vlan 10,20,30,40,50,99
 switchport nonegotiate
 no shutdown
exit

! --- Step 4 (optional): set the load-balancing hash algorithm ---
port-channel load-balance src-dst-ip

! --- Step 5: Save ---
end
copy running-config startup-config
```

**Verification commands:**
```text
show etherchannel summary
show etherchannel port-channel
show interfaces port-channel 1
show spanning-tree interface port-channel 1
```
*In `show etherchannel summary`, member port flags: `P` = bundled successfully, `I` = individual/not bundled, `s` = suspended due to config mismatch.*

## Common failure points

- **Mismatched member port config** (different VLANs allowed, different native VLAN, one access/one trunk) — the port shows as suspended (`s`) in `show etherchannel summary` instead of joining the bundle; always fix member config to match exactly, then re-check.
- **Both ends set to `passive`** — LACP never negotiates, the channel never forms, and there's no error, just ports that stay individual.
- **Configuring `channel-group` before the member interfaces have matching config** — do the interface config first (Step 1), then bundle (Step 2); bundling mismatched interfaces first and fixing them after tends to leave them suspended until a manual `shutdown`/`no shutdown` cycle.
- **Forgetting to configure the Port-channel interface itself** — the physical members are bundled, but if you only configured trunking on the individual interfaces before bundling and never on `interface port-channel 1`, later changes made only at the physical-port level can be inconsistent; once bundled, treat the Port-channel interface as the primary place to make ongoing config changes.

---
*Tip: `show etherchannel summary` is the fast sanity check after any change here — glance at the flag column before assuming a channel is working correctly.*
