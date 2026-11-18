---
tags: [jobbing, how-to, server]
---
# Configure ESXi networking and port groups

↩ Back to the guide: [[03-hpe_server_esxi_and_vms|HPE ProLiant server: from power-on to VMs and a firewall]]

> **Use this when:** The host needs its uplinks bonded and port groups per VLAN (the part that cost you hours).

## What you need
- [ ] Switch ports prepared as a trunk/EtherChannel ([[12-build_an_etherchannel|EtherChannel guide]])
- [ ] Three NICs cabled to the switch (your lab: `vmnic1`, `vmnic2`, `vmnic3` into Gi1/3 to Gi1/5)

## Steps
- [ ] **Networking, Virtual switches, Add standard virtual switch** named `vSwitch1`. Add all three vmnics as uplinks.
- [ ] Edit `vSwitch1`, **Teaming and failover**:
  - Load balancing = **Route based on IP hash** (default "originating port ID" is wrong for a static EtherChannel)
  - All three vmnics **Active**
- [ ] **Security**: Promiscuous mode, MAC address changes, Forged transmits = **Accept** (pfSense needs it to route between VLANs).
- [ ] **Port groups** on `vSwitch1`: `VLAN_10` (ID 10), `VLAN_11` (ID 11), `VLAN_12` (ID 12).
- [ ] Move `vmk0` onto `VLAN_10`, static IP `192.168.10.2/24`, no gateway needed.

## Check it worked
- [ ] ESXi host reachable at `192.168.10.2` through the trunk.
- [ ] `show etherchannel summary` on the switch shows the bundle up.

## Gotchas
- Static EtherChannel (`channel-group 1 mode on`) needs **IP hash** on ESXi. Without it you get "sometimes it works" flapping.
- A free standard vSwitch does not speak LACP, so use static `mode on` on the switch.
- Never VM-network a VM on the default `VM Network` group if you need VLANs. It is not tagged.

## Source notes
- [[03-server_setup_documentation|03-server_setup_documentation]]
- [[02-switches_documentation|02-switches_documentation]]
- [[05-firewall_configuration|05-firewall_configuration]]
