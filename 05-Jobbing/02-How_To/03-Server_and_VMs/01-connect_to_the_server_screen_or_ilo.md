---
tags: [jobbing, how-to, server]
---
# Connect to the server screen or iLO

↩ Back to the guide: [[03-hpe_server_esxi_and_vms|HPE ProLiant server: from power-on to VMs and a firewall]]

> **Use this when:** You need to see what the server is doing, locally or from your laptop.

## What you need
- [ ] Local: a VGA monitor + USB keyboard/mouse
- [ ] Remote: an Ethernet cable from the dedicated **iLO port** to a switch, and your laptop on the same network

## Steps
**A. Local (KVM style)**
- [ ] Plug a monitor into the VGA port and keyboard/mouse into USB.
- [ ] Plug in the power cable. Fans spin loudly for a few seconds then go quiet: that is the iLO chip starting, the server itself is still off.
- [ ] Press the power button (front panel, right-hand side). Wait 1 to 2 minutes for the HPE splash screen.

**B. Remote (iLO)**
- [ ] The iLO port is the single isolated port with the iLO logo, separate from the block of four NIC ports. Cable it to the switch.
- [ ] Power the server. Pull out the plastic **tag** on the front-right and write down the default iLO URL, user (`Administrator`) and the **8-character password**.
- [ ] Browse to that URL (or find `ILO<serial-number>` in the DHCP client list) and accept the certificate warning. Log in. You now have a virtual screen.

## Check it worked
- [ ] You can see POST / the HPE screen locally or in the iLO console.

## Gotchas
- The Gen8 has **iLO 4**. One of your notes calls it iLO 5. Everything you did was iLO 4.
- Your laptop must be in the same subnet as the iLO address to reach it.

## Source notes
- [[03-server_setup_documentation|03-server_setup_documentation]]
- [[00-server_configuration|00-server_configuration]]
