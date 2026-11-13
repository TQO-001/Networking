# 00-Switch Ops
## 04 - Backup, Restore & Config Rollback

**What It Is:** How to save a switch's configuration off the device itself (so a hardware failure or a bad change doesn't mean starting from zero), and how to restore or roll back to a known-good config when something breaks.

**Why It's Important:** `copy running-config startup-config` only protects you against a power loss — it does nothing if you make a bad change and need to go back to *yesterday's* config, or if the switch itself dies and gets replaced. Off-device backups and a rollback plan are what separate "I broke it and I have no way back" from "I broke it, give me 90 seconds."

## Overview & Mechanics

- **`running-config` vs `startup-config`**: running-config is the live, active config in RAM — every command you type modifies it immediately. startup-config is what gets loaded at boot. `copy running-config startup-config` (or the older `write memory` / `wr`) is how you make a change permanent — until you run this, a reboot or power loss reverts everything.
- **Off-box backup**: copying `running-config` (or `startup-config`) to a TFTP/SCP/FTP server, exactly like copying an IOS image but in the opposite direction. This is the actual "backup" — a config sitting only in the switch's own NVRAM is not backed up, it's just saved.
- **The `archive` feature**: IOS can automatically timestamp and store copies of the config locally (and optionally push them off-box) every time you save, building a local history — `archive config` + `path` + `write-memory` triggers automatic archiving on every `copy run start`.
- **`configure replace`**: takes a saved config file and makes the running-config match it exactly — additions *and deletions* — unlike `copy <file> running-config`, which only merges commands in without removing anything not present in the file. This is the real "rollback" tool: it calculates the delta and applies it, with a built-in safety net (`configure replace flash:file.cfg` uses a two-phase commit and can auto-revert if the change breaks connectivity to the terminal, when using `configure confirm`).

## Step-by-Step Drill: Manual Backup & Restore via TFTP

```text
! --- Step 1: Back up the current running-config to a TFTP server ---
Switch# copy running-config tftp:
Address or name of remote host []? 192.168.99.50
Destination filename [switch-confg]? SW-01-2026-08-20.cfg

! --- Step 2: Confirm the file landed on the TFTP server ---
! (check the TFTP server's root folder on the laptop/PC side)

! --- Step 3 (restore scenario): copy a saved config BACK onto a switch ---
! NOTE: this MERGES the file into running-config, it does not remove
! anything currently configured that isn't in the file.
Switch# copy tftp: running-config
Address or name of remote host []? 192.168.99.50
Source filename []? SW-01-2026-08-20.cfg
Destination filename [running-config]?
<press Enter>

! --- Step 4: Save the restored config so it survives a reload ---
Switch# copy running-config startup-config
```

## Step-by-Step Drill: True Rollback with `configure replace`

```text
! --- Step 1: Copy a known-good backup config into flash first ---
Switch# copy tftp: flash:
Address or name of remote host []? 192.168.99.50
Source filename []? SW-01-2026-08-20.cfg
Destination filename [SW-01-2026-08-20.cfg]?
<press Enter>

! --- Step 2: Replace the running-config with the flash-stored version ---
! This calculates the DIFF and applies additions AND removals to make
! running-config match the file exactly.
Switch# configure replace flash:SW-01-2026-08-20.cfg

! --- Step 3 (safer variant, remote sessions): auto-revert if it breaks connectivity ---
Switch# configure replace flash:SW-01-2026-08-20.cfg time 5
! If your own SSH session doesn't confirm within 5 minutes
! (e.g. because the change locked you out), the switch
! automatically reverts to the pre-change config.
Switch# configure confirm
! Run this manually once you've verified the change is good,
! to cancel the pending auto-revert.

! --- Step 4: Save once confirmed good ---
Switch# copy running-config startup-config
```

**Verification commands:**
```text
show archive
show archive config differences
dir flash:
show running-config | include hostname
```

## Common failure points

- **Assuming `copy tftp: running-config` removes old config** — it doesn't. If your backup file doesn't include an interface config that's currently live, that live config stays. Use `configure replace` when you need an exact rollback, not a merge.
- **Never testing your backups** — a backup you've never restored is a guess, not a backup. Periodically restore a saved config to a lab switch to confirm the file is actually usable.
- **Making changes over a remote session without a safety net** — if you're SSHed in and about to push a big change (especially anything touching the management VLAN, trunk to your own uplink, or vty access), use `configure replace ... time N` or at minimum have physical/console access as a fallback before you start.
- **No filenames with dates/versions** — `switch-confg` (the IOS default suggestion, note the typo is IOS's, not yours) tells you nothing six months later. Always name backups with date and switch identity.

---
*Tip: back up the config to a TFTP/SCP server as a habit, immediately after you finish any successful change and confirm it saved — not "later." Later is when the switch reboots unexpectedly and you realize you never actually took the backup.*
