# 00-Switch Ops
## 11 - Spanning Tree Fundamentals (PortFast & BPDU Guard)

**What It Is:** How switches automatically prevent Layer 2 loops when redundant physical paths exist, and the edge-port optimizations (PortFast, BPDU Guard) that make end-device ports come up fast without weakening loop protection.

**Why It's Important:** A Layer 2 loop (e.g. two switches accidentally connected by two separate cables, both active) causes a broadcast storm that can take an entire network down within seconds — frames circulate endlessly, MAC tables flap, and CPU utilization spikes. Spanning Tree Protocol (STP) is the automatic defense against this, and it's active by default on every Cisco switch — you rarely configure the core algorithm, but you frequently need to configure PortFast/BPDU Guard correctly on edge ports.

## Overview & Mechanics

- **The core problem**: with redundant links between switches, a frame can loop indefinitely, since Ethernet frames have no TTL like IP packets do. STP solves this by calculating a loop-free logical topology and **blocking** redundant physical paths, only using them if the primary path fails.
- **Root Bridge election**: every switch has a Bridge ID (priority + MAC address). The switch with the lowest Bridge ID becomes the **Root Bridge** — the reference point every other switch calculates its shortest path to. In production, the root should be deliberately set (`spanning-tree vlan <id> root primary` or a manually lowered priority) on a stable, central, high-capacity switch — never left to chance/default election, which could elect an edge switch as root and create a suboptimal or fragile topology.
- **Port states** (802.1D classic STP): Blocking → Listening → Learning → Forwarding, with a default total convergence time of ~30-50 seconds — this delay is exactly why an end-user port (like a PC's) doesn't need it (see PortFast below). Modern switches typically run **Rapid PSTP (802.1w)**, which converges in seconds instead, but the state logic concept is the same.
- **BPDUs (Bridge Protocol Data Units)**: the control-plane messages switches exchange to run the STP algorithm — root bridge info, port roles, timers.
- **PortFast**: tells STP to skip the Listening/Learning delay on a specific port and go straight to Forwarding — intended **only** for ports connecting to end devices (PCs, printers) that will never introduce a loop. Never configure PortFast on a port connecting to another switch.
- **BPDU Guard**: the safety net for PortFast — if a PortFast-enabled port ever receives a BPDU (meaning something that behaves like a switch, not an end device, got plugged in — intentionally or accidentally), the port is immediately put into **err-disabled** state rather than being allowed to participate in STP. This is what protects you from someone plugging a small unmanaged switch with an accidental loop into what was assumed to be a "safe" end-user port.

## Step-by-Step Drill

```text
enable
configure terminal

! --- Step 1: Confirm current STP mode and root bridge status ---
! (do this before changing anything)
do show spanning-tree summary

! --- Step 2 (on the intended core/root switch only): claim the root role ---
spanning-tree vlan 1,10,20,30,40,50,99 root primary
! This automatically lowers the bridge priority enough to win
! root election for the listed VLANs.

! --- Step 3: Enable PortFast on a genuine end-device access port ---
interface fastethernet0/1
 switchport mode access
 spanning-tree portfast

! --- Step 4: Enable BPDU Guard on the same port (the safety net) ---
 spanning-tree bpduguard enable
exit

! --- Step 5 (alternative, global default for all access ports): ---
! enables PortFast automatically on every access port switch-wide,
! without needing it per-interface. Use with care — confirm no
! trunk/uplink ports are accidentally in access mode first.
spanning-tree portfast default
spanning-tree portfast bpduguard default

! --- Step 6: Save ---
end
copy running-config startup-config
```

**Verification commands:**
```text
show spanning-tree summary
show spanning-tree vlan 10
show spanning-tree interface fastethernet0/1 detail
show interfaces status err-disabled
```

## Common failure points

- **Enabling PortFast on a port connecting to another switch** — this is the actual dangerous mistake: the port skips STP's loop-detection delay entirely, so if that link is part of a loop, the loop becomes active immediately instead of being caught during the Listening/Learning phase. Always pair PortFast with BPDU Guard so an accidental switch-to-switch PortFast port gets shut down rather than causing a storm.
- **Assuming root bridge election "just works"**: left to default priority (32768 for every switch), the tiebreaker falls to MAC address — meaning whichever switch happens to have the lowest MAC could become root, which might be an edge switch far from the network core. Deliberately set root priority on your intended core switch.
- **Confusing PortFast's *purpose*** — it doesn't disable STP on that port, it only skips the initial delay states; the port is still running STP and will still react (via BPDU Guard) if something unexpected shows up.
- **Not checking for err-disabled ports after enabling BPDU Guard broadly** — if `spanning-tree portfast bpduguard default` is applied switch-wide and any access-mode port turns out to actually be a switch-to-switch link, that port will immediately go err-disabled; check `show interfaces status err-disabled` right after making this change.

---
*Tip: BPDU Guard is what turns a scary "someone looped my switch" incident into a single err-disabled port that recovers in five minutes instead of a network-wide broadcast storm — always pair it with PortFast, never deploy one without the other.*
