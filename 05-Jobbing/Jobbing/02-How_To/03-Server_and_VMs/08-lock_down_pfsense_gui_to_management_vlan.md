---
tags: [jobbing, how-to, server]
---
# Lock down the pfSense GUI to the management VLAN

↩ Back to the guide: [[03-hpe_server_esxi_and_vms|HPE ProLiant server: from power-on to VMs and a firewall]]

> **Use this when:** The firewall web interface must only be reachable from the management VLAN.

## What you need
- [ ] pfSense installed and routing ([[07-set_up_a_pfsense_firewall_vm|guide]])
- [ ] A device on VLAN 10 to test from

## Steps
- [ ] **Firewall, Aliases, Ports**: add `Admin_Ports` with `80`, `443`, `22`.
- [ ] **Firewall, Aliases, IP**: add `pfSense_Gateways` (Host(s)) with `192.168.10.1`, `192.168.11.1`, `192.168.12.1`.
- [ ] **Firewall, Rules, VLAN10**, in this order (top to bottom): allow ping (ICMP echo), RDP `3389`, VNC `5900`, SMB `445`, then **allow web UI** to destination `192.168.10.1` on `Admin_Ports`, then a **block** to `pfSense_Gateways` on `Admin_Ports`.
- [ ] On every **other** interface, put a **block** rule at the very top: TCP from any to `pfSense_Gateways` on `Admin_Ports`.
- [ ] Save and Apply Changes after each rule.

## Check it worked
- [ ] From VLAN 10: `https://192.168.10.1` opens the login. `https://192.168.11.1` and `https://192.168.12.1` time out.
- [ ] From VLAN 11 or 12: all three gateway IPs are blocked on 80/443.

## Gotchas
- pfSense accepts web logins on **every** interface IP by default. Without the block rules anyone can reach the login on their own gateway address.
- Rule order matters. First match wins.

## Source notes
- [[05-firewall_configuration|05-firewall_configuration]]
