# 00-Switch Ops
## 12 - VTP & the Revision Number Trap

**What It Is:** VLAN Trunking Protocol (VTP) — a Cisco protocol for synchronizing VLAN databases across multiple switches automatically — and the well-known configuration-revision hazard that makes many real environments deliberately avoid it.

**Why It's Important:** VTP can save real work in a large, actively-changing VLAN environment, but its default behavior (any switch can push VLAN changes domain-wide) has caused enough real outages that understanding — and often deliberately disabling — it is considered essential knowledge, not optional.

## Overview & Mechanics

- **VTP domain**: a named group of switches that will synchronize VLAN databases with each other. Switches only synchronize if they're in the *same* domain name (case-sensitive) — this is the first checkpoint that determines whether VTP does anything at all between two switches.
- **VTP modes**:
  - **Server** (default) — can create/modify/delete VLANs; changes are advertised to the whole domain.
  - **Client** — cannot create/modify VLANs locally; only receives and applies updates from a server.
  - **Transparent** — does NOT participate in VTP synchronization at all; VLANs are configured locally on that switch only, but the switch still forwards VTP advertisements it receives on trunk ports through to other switches (relay behavior, without applying the changes itself).
  - **Off** (VTPv3 only) — doesn't participate or relay at all.
- **Configuration revision number**: increments by 1 every time a VLAN is added/modified/deleted on a VTP server. When two switches in the same domain compare notes, **the switch with the higher revision number wins** — its VLAN database overwrites the other's, regardless of which one is actually "correct" or more current. This is the trap: a switch pulled from storage, with an old but *high* revision number from months ago, can be plugged into a live domain and instantly overwrite everyone else's current VLAN database with stale data.
- This is exactly why file 02 (Factory Reset & Flash Cleanup) insists on deleting `vlan.dat`, not just erasing startup-config — the revision number lives in that file and survives a config-only erase.
- **Why many real networks just use Transparent mode everywhere**: it removes the propagation risk entirely — each switch's VLAN database is local and explicit, at the cost of having to configure VLANs manually on every switch. Given how damaging a revision-number incident can be, many production environments consider this trade worth making.

## Step-by-Step Drill: Setting Up VTP Server/Client (when you DO want it)

```text
enable
configure terminal

! --- Step 1 (on the intended server switch): set domain and mode ---
vtp domain LAUGHTALE-CORP
vtp mode server
vtp password VtpSecure123!

! --- Step 2 (on client switches): join the same domain, set client mode ---
vtp domain LAUGHTALE-CORP
vtp mode client
vtp password VtpSecure123!

! --- Step 3: confirm the trunk between them is up (VTP only propagates over trunks) ---
do show interfaces trunk

! --- Step 4: create a VLAN on the SERVER only — it should propagate ---
vlan 60
 name TEST-VTP
exit

! --- Step 5: Save ---
end
copy running-config startup-config
```

## Step-by-Step Drill: The Safer Default — Transparent Mode Everywhere

```text
enable
configure terminal

! --- Step 1: Put every switch in Transparent mode ---
vtp mode transparent

! --- Step 2: Configure VLANs locally on THIS switch as normal ---
vlan 10
 name SALES
exit

! --- Step 3: Save ---
end
copy running-config startup-config

! Repeat VLAN creation locally on every other switch in the network —
! no automatic propagation, but also no risk of one switch's stale
! database overwriting everyone else's.
```

**Verification commands:**
```text
show vtp status
show vtp password
show vlan brief
```
*`show vtp status` — check "VTP Operating Mode" and "Configuration Revision" on every switch before connecting it to a live network.*

## Common failure points

- **Plugging a "reset" switch into a live VTP domain without wiping `vlan.dat`** — see file 02. This is the single most cited real-world VTP incident pattern; always verify `show vtp status` revision number is 0 (or the domain name is blank/mismatched, which also prevents sync) before trusting a switch you didn't personally factory-reset.
- **Mismatched VTP passwords or domain names** — switches simply won't synchronize, silently. `show vtp status` on both sides is the fast way to confirm domain name matches exactly (case-sensitive) and check for password mismatch indicators.
- **Assuming Client mode is "safe"** — a client switch cannot originate changes, but it can still receive and apply a higher-revision update from elsewhere in the domain, including a bad one. Client mode protects against *this switch* causing an incident, not against receiving one.
- **VTP pruning left enabled/disabled inconsistently** — VTP pruning (a separate optional feature that restricts VLAN traffic to only trunks that need it) needs to match across the domain to behave predictably; check `show vtp status` for pruning state if traffic seems to unexpectedly not cross certain trunks.

---
*Tip: when in doubt about a switch's VTP history, put it in Transparent mode before connecting its trunk to anything else — you can always change it later once you've confirmed clean `vlan.dat` state, but you can't un-overwrite a domain's VLAN database after the fact.*
