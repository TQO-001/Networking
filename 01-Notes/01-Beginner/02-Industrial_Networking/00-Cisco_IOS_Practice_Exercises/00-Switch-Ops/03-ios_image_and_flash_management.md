# 00-Switch Ops
## 03 - IOS Image & Flash Management

**What It Is:** How to inspect, upgrade, and manage the IOS image and flash storage on a switch — including copying a new image in over TFTP, telling the switch which image to boot, and checking/activating feature licenses.

**Why It's Important:** Flash fills up. IOS versions go end-of-life and stop getting security patches. A switch shipped from a vendor or pulled from storage may be running an old image that's missing a feature you need (or has a bug fixed in a later release). This is routine lifecycle work — every network technician eventually has to upgrade a switch's IOS without turning it into a brick.

## Overview & Mechanics

- **Flash filesystem** holds the IOS `.bin` (or `.tar`/`.pkg` on newer platforms) image file(s), plus `vlan.dat` and any saved config backups you choose to store there. `dir flash:` lists contents and shows free space at the bottom.
- **The `BOOT` environment variable** (set via `boot system flash:<filename>`) tells the bootloader which image to load if there are multiple images in flash. If unset, the switch just loads the first valid image it finds — fine with one image, ambiguous and risky with two.
- **TFTP transfer**: the classic method for moving an IOS image onto a switch — `copy tftp: flash:` — requires a TFTP server reachable from the switch's management IP (a laptop running a TFTP server app on the same subnet/VLAN is the common lab/field setup). TFTP has no authentication and is unencrypted, which is fine for a controlled internal transfer but is exactly why it should never be exposed outside a management network.
- **Old-image cleanup**: before copying a new image in, check free space with `dir flash:` and `show flash:` — an interrupted copy due to insufficient space can leave a partially-written, unbootable image file, which is why you delete the old image (or confirm space is sufficient) *before* starting the copy, not after it fails.
- **Licensing**: on platforms with feature-based licensing (`show license`, `show version` license info section), some features (like advanced IP services or certain security features) are gated behind a license tier even if the code exists on flash. The IE 3000 and most fixed-config Catalyst switches largely ship with a fixed feature set (no separate license activation needed for standard L2/basic L3 features) but `show version` is still the command to confirm exactly what feature set/license level is active before assuming a command will work.

## Step-by-Step Drill: Copying a New IOS Image via TFTP

```text
! --- Step 1: Check current flash contents and free space ---
Switch# dir flash:
Switch# show flash:

! --- Step 2: Confirm the switch can reach the TFTP server ---
Switch# ping 192.168.99.50
! (192.168.99.50 = example TFTP server IP on the management VLAN)

! --- Step 3: If space is tight, delete the old/unused image first ---
Switch# delete flash:c2960-lanbasek9-mz.old-version.bin
Delete filename [c2960-lanbasek9-mz.old-version.bin]?
<press Enter>
Delete flash:c2960-lanbasek9-mz.old-version.bin? [confirm]
<press Enter>

! --- Step 4: Copy the new image from the TFTP server into flash ---
Switch# copy tftp: flash:
Address or name of remote host []? 192.168.99.50
Source filename []? c2960-lanbasek9-mz.new-version.bin
Destination filename [c2960-lanbasek9-mz.new-version.bin]?
<press Enter to accept default>
! Transfer progress displays as a string of exclamation marks (!)

! --- Step 5: Verify the file copied completely and correctly ---
Switch# dir flash:
Switch# verify flash:c2960-lanbasek9-mz.new-version.bin

! --- Step 6: Point the boot variable at the new image ---
Switch# configure terminal
Switch(config)# boot system flash:c2960-lanbasek9-mz.new-version.bin
Switch(config)# exit

! --- Step 7: Save config and reload to boot the new image ---
Switch# copy running-config startup-config
Switch# reload
```

**Verification commands:**
```text
show version
show boot
dir flash:
show flash:
show license
```

## Common failure points

- **Copying a new image without checking free space first** — a failed copy mid-transfer due to a full flash can leave a corrupted partial file; delete it and confirm space before retrying.
- **Forgetting `boot system`** — with two valid images in flash, the switch may boot whichever one it finds first (often the older one alphabetically/positionally), not the one you just spent 20 minutes copying in.
- **TFTP transfer stalling or timing out** — almost always a reachability issue: wrong TFTP server IP, a firewall/ACL blocking UDP 69, or the switch's management SVI/gateway isn't actually configured yet (see file 05). Ping the TFTP server first, always.
- **Reloading before verifying the copy** — always run `verify flash:<filename>` (checksum check) before reloading into a brand-new image; a bad reload with no working image in flash means you're straight back to file 01's recovery territory, except this time there may be no working IOS at all (recoverable via `Xmodem` from ROMMON, but painful and slow).

---
*Tip: label your TFTP-served IOS files with the exact version in the filename (not just "switch-ios-new.bin") — six months from now, `dir flash:` needs to tell you at a glance what's actually running.*
