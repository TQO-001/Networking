---
tags: [jobbing, how-to, thin-client]
---
# Enable VNC remote access

↩ Back to the guide: [[02-thinpro_thin_client_setup|HP ThinPro thin client: from USB stick to a self-starting SCADA screen]]

> **Use this when:** You want to see and control the thin client from your workstation without walking to it.

## What you need
- [ ] Admin mode on the thin client
- [ ] A VNC viewer on your workstation (RealVNC is what the notes list)

## Steps
- [ ] Open system settings and go to **Remote Management / VNC**.
- [ ] Enable the VNC server and set an **administrative access password**.
- [ ] Set VNC to **start automatically at boot**.
- [ ] From your workstation, connect to `<thin-client-ip>`.

## Check it worked
- [ ] A VNC session opens after a thin client reboot, without anyone touching it.

## Gotchas
- The access point task in your notes ends with "Remember to enable VNC". It is easy to forget and then you have to go back on site.
- HP Device Manager (HPDm) is the other management route listed in your notes.

## Source notes
- [[01-thin_client_setup|01-thin_client_setup]]
