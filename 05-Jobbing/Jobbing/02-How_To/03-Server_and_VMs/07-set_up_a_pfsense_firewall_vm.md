---
tags: [jobbing, how-to, server]
---
# Set up a pfSense firewall VM

↩ Back to the guide: [[03-hpe_server_esxi_and_vms|HPE ProLiant server: from power-on to VMs and a firewall]]

> **Use this when:** Two VLANs need to route to each other and the switches cannot do it.

## What you need
- [ ] pfSense installer ISO uploaded to the datastore
- [ ] Port groups `VLAN_10`, `VLAN_11`, `VLAN_12` existing

## Steps
- [ ] Create a VM: OS family **Other**, OS **FreeBSD (64-bit)**. Mount the pfSense ISO and install.
- [ ] Give it one virtual NIC per VLAN it must route, each on the matching port group. Your console steps assigned `em0`, `em1`, `em2`.
- [ ] Console menu **1** (Assign interfaces): answer **n** to VLANs, then `em0` = WAN, `em1` = LAN, `em2` = optional (VLAN 12).
- [ ] Console menu **2** (Set IPs), no upstream gateway:
  - WAN `192.168.10.1/24`
  - LAN `192.168.11.1/24`
  - VLAN 12 interface `192.168.12.1/24`
- [ ] From a VM on VLAN 12 browse to `https://192.168.12.1` and log in.
- [ ] **Interfaces, WAN, Reserved networks**: untick *Block private networks* and *Block bogon networks* (this "WAN" is an internal VLAN).
- [ ] Firewall rules: pfSense denies all by default. Add specific allow rules per interface (next guide).

## Check it worked
- [ ] The three interfaces show the right IPs on the console banner.
- [ ] VM on VLAN 12 can ping VM on VLAN 11.

## Gotchas
- pfSense insists on a WAN and a LAN. Your first NIC became LAN, second became WAN even though neither is the internet. Fine.
- Your note says "two network adapters" but then assigns three interfaces. Use one adapter per interface you assign, and check against your last working setup.
- `Pass any/any` on all tabs worked in the lab and your note labels it **do not use in production**. It also defeats any block rules below it (rules run top to bottom).

## Source notes
- [[05-firewall_configuration|05-firewall_configuration]]
- [[01-sun_daddy_network_task|01-sun_daddy_network_task]]
