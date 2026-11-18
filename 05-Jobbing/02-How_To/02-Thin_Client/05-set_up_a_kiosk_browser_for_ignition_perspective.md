---
tags: [jobbing, how-to, thin-client]
---
# Set up a kiosk browser for Ignition Perspective

↩ Back to the guide: [[02-thinpro_thin_client_setup|HP ThinPro thin client: from USB stick to a self-starting SCADA screen]]

> **Use this when:** The screen should open straight onto one Ignition process page and nothing else.
> ◇ = **not from your notes** (general knowledge or the web). Double-check it on the device before relying on it.

## What you need
- [ ] Thin client on the network with its static IP (previous guides)
- [ ] The Ignition gateway reachable: `http://192.168.193.2:8088`
- [ ] Which process this unit shows (COATER1, COATER2, LEVELLER, EXIT)

## Steps
- [ ] Open the browser and go to `http://192.168.193.2:8088`.
- [ ] Click **Perspective**, then **Launch**, then **CCL2 SCADA Project** (the first one listed).
- [ ] On the right, open **Process** and pick the one matching this unit's name.
- [ ] Copy the full URL from the address bar once the page loads.
- [ ] Open the browser's **application profile / connection manager** ◇ and set:
  - Target URL = the link you copied
  - Name = `CCL2-<Process Name>`
  - **Kiosk mode** on, with all sub-options off
  - Remove: tabbing, home button, back/forward buttons
  - **Auto-connect / auto-start** on, so it relaunches when closed and on boot
- [ ] Reboot to test.

## Check it worked
- [ ] After a reboot the unit shows full-screen SCADA for its process, with no desktop or browser controls.

## Gotchas
- If the page loads data for the wrong section you copied the wrong process link.
- ◇ In ThinPro this is normally a **Web Browser**-type connection in Connection Manager (Add, choose Web Browser). Menu names vary by ThinPro version, trust what is on your screen.
- Turn kiosk on **last**, after you have confirmed the URL works. A kiosk screen is awkward to debug.

## Source notes
- [[01-thin_client_setup|01-thin_client_setup]]
