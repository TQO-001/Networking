# IOS file management: backup, restore, and upgrade

Every switch's config and IOS image live in flash memory. Knowing how to move those files around — off to a TFTP server for safekeeping, or a new image in for an upgrade — is a core day-to-day skill, and it's also your safety net before doing anything risky to a production switch.

### Step 1: See what's actually in flash

```text
ACCESS-SW-10#show flash
```
or, on newer IOS, the more general form:
```text
ACCESS-SW-10#dir flash:
```
This lists every file in flash — IOS images, the saved config, log files — along with sizes, so you know what you're working with (and whether you have room for a new image) before doing anything else.

### Step 2: Check the currently running IOS version

```text
ACCESS-SW-10#show version
```
This tells you the exact IOS image currently loaded and running, the switch model, uptime, and the configuration register value (relevant later for boot behavior).

### Step 3: Back up the running config to a TFTP server

Before making any risky change, back up the current config:
```text
ACCESS-SW-10#copy running-config tftp
Address or name of remote host []? 10.10.1.20
Destination filename [ACCESS-SW-10-confg]? ACCESS-SW-10-backup.cfg
```
This is a quick, cheap habit worth building — it costs seconds and can save hours if a change goes wrong.

### Step 4: Copy an IOS image to flash from a TFTP server (upgrade)

```text
ACCESS-SW-10#copy tftp flash
Address or name of remote host []? 10.10.1.20
Source filename []? c2960x-universalk9-mz.152-7.E5.bin
Destination filename [c2960x-universalk9-mz.152-7.E5.bin]?
```
The switch will warn you if there isn't enough free space in flash — you may need to `delete flash:<old-image>` first (see Step 6).

### Step 5: Verify the copied image before trusting it

Always verify the file wasn't corrupted in transfer before you rely on it to boot the switch:
```text
ACCESS-SW-10#verify /md5 flash:c2960x-universalk9-mz.152-7.E5.bin
```
Compare the resulting hash against the MD5 checksum published by Cisco for that image. A mismatch means don't boot from it — re-download and try again.

### Step 6: Point the boot process at the new image

```text
ACCESS-SW-10(config)#boot system flash:c2960x-universalk9-mz.152-7.E5.bin
```
This tells the switch which image to load on the *next* reload — it does not take effect immediately. Save the config, then reload during a maintenance window:
```text
ACCESS-SW-10(config)#end
ACCESS-SW-10#copy running-config startup-config
ACCESS-SW-10#reload
```

### Step 7: Clean up old images once you've confirmed the new one is stable

```text
ACCESS-SW-10#delete flash:c2960x-universalk9-mz.152-6.E3.bin
```
Don't do this until you've confirmed the switch booted successfully on the new image and it's been stable for a while — keeping the old image around is your rollback path if the upgrade goes badly.

### Step 8: Restore a config from backup (disaster recovery)

If you ever need to push a saved config back onto a switch:
```text
ACCESS-SW-10#copy tftp running-config
Address or name of remote host []? 10.10.1.20
Source filename []? ACCESS-SW-10-backup.cfg
```
Copying into `running-config` merges the backup on top of whatever's currently running (it doesn't clear existing config first) — for a truly clean restore, copy into `startup-config` instead and reload.

## What "good" looks like

A backed-up config before any risky change (a 30-second habit that pays for itself the first time something goes wrong), a verified image hash before trusting a new IOS image, boot pointed explicitly at the intended image rather than left to default flash-scanning behavior, and old images kept around as a rollback path until the new one has proven itself stable.
