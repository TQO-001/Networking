---
tags: [jobbing, how-to, thin-client]
---
# Make the thin client start on its own

↩ Back to the guide: [[02-thinpro_thin_client_setup|HP ThinPro thin client: from USB stick to a self-starting SCADA screen]]

> **Use this when:** After boot the screen/app should appear with no clicks, and after a power cut the unit should power itself back on.
> ◇ = **not from your notes** (general knowledge or the web). Double-check it on the device before relying on it.

## What you need
- [ ] Admin mode, terminal access, the app already working when launched by hand

## Steps
### A. The app starts by itself after boot
- [ ] ThinPro does **not** read `~/.config/autostart/*.desktop`. Delete one if you made it: `rm -f /home/user/.config/autostart/ignition-perspective-workstation.desktop`
- [ ] **Browser kiosk route:** just enable auto-connect/auto-start on the browser connection ([[05-set_up_a_kiosk_browser_for_ignition_perspective|kiosk guide]]).
- [ ] **Workstation route:** stop the restart loop first. Edit `/persistent/ignition/perspectiveworkstation/perspectiveworkstation.sh`: in the `# Launch` section add `exec` before the java command and delete the trailing `&` (and the `/dev/null 2>&1`). Test it by hand and confirm exactly one java process: `ps aux | grep java`.
- [ ] Optional single-instance lock: use this as the command line below: `flock -n /tmp/perspective.lock /persistent/ignition/perspectiveworkstation/perspectiveworkstation.sh`
- [ ] Open **Connections** (Connection Manager), **Add**, type **Custom**, name it `Perspective Workstation`, command line as above. Click **Connect** once to test.
- [ ] Edit it, **Advanced**, **Autostart = 1**. Make sure **Keep Alive / Restart on Exit / Automatic Reconnect** are **off** (they caused the respawn loop).
- [ ] Make sure the normal session user can see the connection, not only admin.

### B. The unit powers on by itself after a power loss
- [ ] ◇ Power the unit on and tap **F10** to open the BIOS (Computer Setup).
- [ ] ◇ Look under the **Advanced / Power-On Options** area for **After Power Loss** and set it to **On** (choices are usually Off / On / Previous state, default Off).
- [ ] Save and exit the BIOS.

## Check it worked
- [ ] Cold reboot: the app opens by itself, once, no terminal.
- [ ] `ps aux | grep java` shows one process (Workstation route).
- [ ] Close the app: it returns to the desktop without relaunching.
- [ ] Pull the power cord and put it back: the unit turns itself on.

## Gotchas
- ◇ **I could not confirm the After Power Loss option on the t655 specifically.** HP's manuals list it on other HP thin client BIOSes (default Off). An HP forum answer said one older model (t240) did not expose it at all. If you cannot find it on your unit, it may not be offered. The fallback is a managed power strip or PDU that restores power, plus the unit's own setting if present.
- "Keep Alive" or "Restart on exit" together with the raw launch script caused the endless relaunch in your notes. `exec` fixes it, so keep those off.
- If there is no **Connections** icon and the desktop is bare, it may be a **Smart Zero** image. Try `which hptc-connection-admin hptc-config-wizard` to find the right tool.

## Source notes
- [[02-ignition_perspective_workstation_master_guide|02-ignition_perspective_workstation_master_guide]]
- [[01-thin_client_setup|01-thin_client_setup]]
