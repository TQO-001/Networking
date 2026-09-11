# 00-Switch Ops
## 02 - Factory Reset & Flash Cleanup

**What It Is:** The procedure to fully wipe a switch back to out-of-box state — both the saved configuration in NVRAM and the VLAN database file in flash — before redeploying it, decommissioning it, or handing it off.

**Why It's Important:** Switches store configuration in two *separate* places, and this is the single most common reason a "factory reset" doesn't actually reset everything: `startup-config` lives in NVRAM, but VLAN and VTP information lives in a completely separate binary file, `vlan.dat`, in flash. Erase only the config and reload, and the switch will boot up with a blank hostname/passwords but still carrying every old VLAN — which, if that switch gets plugged into a live VTP domain, can propagate a stale (or worse, higher-revision, empty) VLAN database and wipe out VLANs across every other switch in that domain. This is the exact mistake that causes real outages.

## Overview & Mechanics

- **`startup-config`** (NVRAM) — hostname, passwords, interface config, SVIs, VTP domain name/mode/password. Removed with `erase startup-config`.
- **`vlan.dat`** (flash) — the VLAN database: VLAN IDs, names, MTU, state, and the **VTP configuration revision number**. This file exists independently of the config so that VTP can update VLAN info across a domain without needing a full config sync. Removed with `delete flash:vlan.dat`.
- **The VTP revision trap:** every time you add/modify/delete a VLAN, the VTP revision number increments — and it persists in `vlan.dat` even through `erase startup-config` + reload if you skip the flash cleanup step. A switch with a stale but *high* revision number, added later to a live VTP domain, is treated as more authoritative than switches that have been running fine for months — its (possibly empty or outdated) VLAN database can silently overwrite theirs. Always assume any switch you're redeploying has a poisoned revision number until you've wiped `vlan.dat`.
- **Reload behavior:** `reload` always asks "Save?" if running-config differs from startup-config. Answering `no` here is deliberate — you want the reload to come up on the *already-erased* startup-config, not accidentally re-save whatever happens to still be in running memory.

## Step-by-Step Drill

```text
! --- Step 1: Enter privileged EXEC mode ---
Switch> enable
Switch#

! --- Step 2: Confirm what's currently in flash before touching anything ---
Switch# dir flash:
! Look for vlan.dat in the listing — if it's not there, this switch
! has never had a non-default VLAN and step 4 can be skipped.

! --- Step 3: Erase the startup configuration in NVRAM ---
Switch# erase startup-config
Erasing the nvram filesystem will remove all configuration files! Continue? [confirm]
<press Enter>

! --- Step 4: Delete the separate VLAN database file from flash ---
Switch# delete flash:vlan.dat
Delete filename [vlan.dat]?
<press Enter to confirm filename>
Delete flash:vlan.dat? [confirm]
<press Enter>

! --- Step 5: Reload WITHOUT saving the current running-config ---
Switch# reload
System configuration has been modified. Save? [yes/no]: no
Proceed with reload? [confirm]
<press Enter>
```

**Post-reload verification (should reflect true factory defaults):**
```text
show running-config
show vlan brief
show vtp status
show version
```
*Expect: no hostname (`Switch>` prompt), VLAN 1 only, VTP configuration revision 0, and (on first boot after a full erase) the switch may drop into the express/initial setup dialog — you can type `no` to skip it and go straight to the CLI.*

## Common failure points

- **Only running `erase startup-config`, skipping `vlan.dat`** — the switch looks "reset" (no hostname, no passwords) but still carries old VLANs and a live VTP revision number. This is invisible until the switch is plugged into another VTP domain and starts overwriting VLANs elsewhere.
- **Answering `yes` to "Save?" on reload** — this re-writes running-config back into the now-erased startup-config, undoing Step 3 entirely. Always answer `no` here after an intentional erase.
- **Reconnecting via SSH immediately after reload** — you just erased the SSH/VTY/enable config too. You will need physical console access (serial, 9600 baud) to configure the switch again from scratch; it will not be reachable over the network until basic management config (see file 05) is redone.
- **On the IE 3000 specifically:** flash filesystem naming can differ slightly depending on whether it has a CompactFlash card installed vs. onboard flash — run `dir flash:` first (Step 2) to confirm the exact filesystem name before typing `delete` commands, rather than assuming `flash:` is always correct.

---
*Real-world note: always confirm you're on the right switch before erasing — hostname and `show cdp neighbors` on adjacent devices are your two fastest sanity checks. There's no "undo" on `erase startup-config` once you've deleted `vlan.dat` too.*
