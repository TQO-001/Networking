# 00-Switch Ops
## 10 - Port Security Fundamentals

**What It Is:** Restricting which MAC addresses may communicate through an access port, and defining what happens when an unauthorized MAC shows up.

**Why It's Important:** Defends against MAC flooding attacks (overflowing the CAM table to force hub-like flooding, exposing traffic to sniffing) and against unauthorized devices being plugged into wall jacks — one of the most common baseline security controls on real edge-facing switch ports.

## Overview & Mechanics

- The switch learns source MAC addresses per port and can store them:
  - **Dynamically** — learned, lost on reboot.
  - **Statically** — manually configured (`switchport port-security mac-address <mac>`).
  - **Sticky** — dynamically learned MACs are automatically converted into running-config entries (and persist across reboots once saved to startup-config) — combines the convenience of dynamic learning with the persistence of static entries.
- `switchport port-security maximum <n>` caps how many secure MAC addresses can be active simultaneously on the port (default 1).
- **Violation actions**, triggered by a frame from an unrecognized MAC or exceeding the max:
  - `protect` — silently drops offending traffic, no log, no shutdown.
  - `restrict` — drops offending traffic AND increments a violation counter AND logs/sends an SNMP trap.
  - `shutdown` (default) — puts the port into **err-disabled** state, blocking all traffic until manually recovered (see file 06) or auto-recovered via `errdisable recovery`.
- Port security must be explicitly enabled per interface (`switchport port-security`) — setting a maximum alone does nothing without this.
- Only applies to **access ports** (trunk ports support it in limited configurations, generally not the default use case).

## Step-by-Step Drill

```text
enable
configure terminal

! --- Step 1: Confirm the port is in access mode ---
interface fastethernet0/5
 switchport mode access
 switchport access vlan 10

! --- Step 2: Enable port security ---
 switchport port-security

! --- Step 3: Set the maximum number of secure MAC addresses ---
 switchport port-security maximum 2

! --- Step 4: Enable sticky learning ---
 switchport port-security mac-address sticky

! --- Step 5: Set the violation action ---
 switchport port-security violation restrict

! --- Step 6: Enable the port ---
 no shutdown
exit

! --- Step 7 (recommended): auto-recover err-disabled ports globally ---
errdisable recovery cause psecure-violation
errdisable recovery interval 300

! --- Step 8: Save ---
end
copy running-config startup-config
```

**Verification commands:**
```text
show port-security
show port-security interface fastethernet0/5
show port-security address
show interfaces fastethernet0/5 status
```

## Common failure points

- **Setting a maximum without enabling `switchport port-security` first** — the command is accepted but has no effect until port security itself is turned on for that interface.
- **Using `shutdown` (default) violation mode on a busy production port without `errdisable recovery` configured** — one accidental extra device (e.g. a small unmanaged switch someone plugged in) takes the port fully down until someone manually cycles it.
- **Sticky learning on a port that already has multiple devices behind an existing unmanaged switch/hub** — the first N devices seen get learned as secure MACs up to the max; anything beyond that becomes a violation, which can look like port security "broke" a working setup rather than doing exactly what it was configured to do.
- **Forgetting this only applies to access ports** — attempting the same approach on a trunk port needs different configuration (`switchport port-security` on a trunk has additional caveats around per-VLAN maximums) and isn't the default use case covered here.

---
*Tip: `restrict` is often a better starting violation mode than the default `shutdown` for ports you're actively rolling out security on — it logs violations without taking the port down, letting you see what's actually happening before committing to a hard shutdown policy.*
