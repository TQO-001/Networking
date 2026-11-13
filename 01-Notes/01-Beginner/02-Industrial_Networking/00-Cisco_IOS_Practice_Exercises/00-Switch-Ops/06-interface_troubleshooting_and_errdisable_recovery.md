# 00-Switch Ops
## 06 - Interface Troubleshooting & Err-Disabled Recovery

**What It Is:** The standard diagnostic workflow for "this port/link isn't working" — how to read interface status output, spot duplex/speed mismatches and cabling issues, and recover a port that's gone into err-disabled state.

**Why It's Important:** This is the single most common day-to-day task on the job — someone reports "my port doesn't work" or a link light is amber/off, and you need a fast, repeatable diagnostic sequence rather than guessing. Err-disabled ports specifically are a common source of confusion for newcomers because the port shows as physically "up" in some views but passes zero traffic.

## Overview & Mechanics

- **Interface states**: `show interfaces status` (or `show ip interface brief`) shows both a **line protocol** state and an **administrative** state:
  - `notconnect` — no cable/link partner detected.
  - `connected` — link is up and passing traffic normally.
  - `disabled` — administratively shut down (`shutdown` was configured).
  - `err-disabled` — the port detected a problem (security violation, loop, etc.) and the switch **automatically shut it down** as a protective action. This is distinct from a manual `shutdown` — the interface config still shows `no shutdown`, but the port is nonetheless down until manually recovered.
- **Common err-disable causes**: port-security violations (see file 10), BPDU Guard tripping on a port that received a spanning-tree BPDU it shouldn't have (see file 11), a detected loop, or link flapping (the interface going up/down repeatedly in a short window).
- **Duplex/speed mismatch**: if one side of a link is fixed at 100/full and the other is set to auto-negotiate, auto-negotiation can settle on half-duplex, producing a mismatch — this manifests as slow performance and a rising counter of **late collisions** and **CRC errors** in `show interfaces`, not as a link that's simply down. This is a classic "it's technically connected but something's wrong" fault that's easy to miss if you only check for link up/down.
- **`show interfaces <int>` counters worth knowing**: `input errors`, `CRC`, `runts`, `giants` (physical/cabling issues); `output errors`, `collisions`, `late collision` (duplex mismatch indicator — late collisions should essentially never appear on a full-duplex switched network); `Last input`/`Last output` (whether traffic is actually flowing).

## Step-by-Step Drill: General Interface Diagnosis

```text
! --- Step 1: Get a fast overview of every port's state at once ---
Switch# show interfaces status

! --- Step 2: Narrow in on the specific port in question ---
Switch# show interfaces fastethernet0/5

! --- Step 3: Check for a shutdown vs err-disabled distinction ---
Switch# show running-config interface fastethernet0/5
! If it shows "shutdown" in the config, it was manually disabled.
! If "show interfaces status" says err-disabled but the config
! shows "no shutdown", it's a protective auto-shutdown.

! --- Step 4: Check speed/duplex settings on both sides ---
Switch# show interfaces fastethernet0/5 | include duplex|speed

! --- Step 5: If mismatched, force matching values on both ends ---
! (Auto-negotiate on both sides is usually best; if forcing, both
! ends MUST match exactly — never force one side and leave the
! other on auto.)
configure terminal
interface fastethernet0/5
 speed 100
 duplex full
exit
```

## Step-by-Step Drill: Recovering an Err-Disabled Port

```text
! --- Step 1: Confirm the port is err-disabled and identify the cause ---
Switch# show interfaces status err-disabled

! --- Step 2: Check the specific reason (violation type, etc.) ---
Switch# show port-security interface fastethernet0/5
! (or relevant show command for the triggering feature, e.g.
! show spanning-tree interface fastethernet0/5 detail for BPDU Guard)

! --- Step 3: Fix the underlying cause BEFORE re-enabling the port ---
! (e.g. remove the rogue device, correct a cabling loop, adjust
! port-security max/violation settings — re-enabling without
! fixing the cause just triggers the same shutdown again)

! --- Step 4: Manually recover the port ---
configure terminal
interface fastethernet0/5
 shutdown
 no shutdown
exit

! --- Step 5 (recommended, do this once, globally): enable auto-recovery ---
! so err-disabled ports come back on their own after a timeout,
! instead of requiring a manual shutdown/no shutdown every time.
configure terminal
errdisable recovery cause psecure-violation
errdisable recovery cause bpduguard
errdisable recovery cause link-flap
errdisable recovery interval 300
exit
```

**Verification commands:**
```text
show interfaces status
show interfaces fastethernet0/5
show errdisable recovery
show errdisable detect
show interfaces fastethernet0/5 counters errors
```

## Common failure points

- **Confusing `disabled` (manual shutdown) with `err-disabled` (auto-shutdown)** in `show interfaces status` output — they look similar at a glance but need completely different fixes (`no shutdown` alone vs. fixing a root cause first, then `shutdown`/`no shutdown`).
- **Re-enabling an err-disabled port without fixing the cause** — it will typically just trip again within seconds, especially for port-security or BPDU Guard violations, and repeated cycling can make the actual root cause (rogue device, loop, bad cable) harder to spot in the logs.
- **Forcing speed/duplex on only one side of a link** — this guarantees a mismatch. Either both ends are set to `auto`, or both ends are explicitly forced to the same values; never mix.
- **Ignoring error counters because the port shows "connected"** — a link can be up and passing *some* traffic while quietly racking up CRC errors or late collisions from a bad cable or duplex mismatch, degrading performance without ever showing as fully down.

---
*Tip: `show interfaces status` is your fastest "what's going on with this switch right now" command — get comfortable reading its columns (Port / Name / Status / Vlan / Duplex / Speed / Type) at a glance before diving into any single interface's full detail.*
