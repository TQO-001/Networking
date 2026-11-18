---
tags: [jobbing, how-to, server]
---
# Install ESXi from USB

↩ Back to the guide: [[03-hpe_server_esxi_and_vms|HPE ProLiant server: from power-on to VMs and a firewall]]

> **Use this when:** A fresh ESXi host is needed on the server.

## What you need
- [ ] ESXi ISO (6.5 in your task, archived copies exist on archive.org)
- [ ] **Rufus** on a Windows PC and a USB stick
- [ ] Keyboard and screen on the server

## Steps
- [ ] In Rufus select the ISO and set **Partition scheme = MBR**.
- [ ] Plug the stick into the server and restart.
- [ ] At the HP ProLiant screen press the **Boot Menu** key (**F11**), choose the USB and follow the installer. Create a `root` password.
- [ ] In the console set up the **Management Network**: select the right network adapter (`vmnic`), set a static IP in the range you chose.
- [ ] Put your PC in that same subnet.
- [ ] **Ping both ways** (PC to server, server to PC) before this host goes onto a permanent network.
- [ ] Browse to `https://<esxi-ip>` and log in as `root`.

## Check it worked
- [ ] The ESXi web UI loads and you can log in.

## Gotchas
- If Rufus is left on GPT/default you get a warning at boot. Use MBR.
- If you ever remove `vmnic0` or break the management interface, the server console's Management Network menu is your only way back in.
- If your PC cannot reach the server, check the subnet first. A router will not bridge you from `192.168.1.x` into another range.

## Source notes
- [[03-server_setup_documentation|03-server_setup_documentation]]
