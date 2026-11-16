---
tags: [jobbing, how-to, server]
---
# Create a VM

↩ Back to the guide: [[03-hpe_server_esxi_and_vms|HPE ProLiant server: from power-on to VMs and a firewall]]

> **Use this when:** You need a Windows (or other) VM on the host.

## What you need
- [ ] ESXi host with `vSwitch1` and port groups ([[05-configure_esxi_networking_and_port_groups|guide]])
- [ ] OS ISO uploaded to the datastore (drag and drop)

## Steps
- [ ] **Virtual Machines, Create / Register VM, Create a new virtual machine**.
- [ ] Name it, pick the guest OS (e.g. Windows 10, 64-bit), choose the datastore.
- [ ] Resources used in your task: 2 vCPU, 8 GB RAM, 100 GB disk.
- [ ] Network adapter: the right **port group** (not the default `VM Network`).
- [ ] Mount the ISO, finish, power on, install the OS.
- [ ] Set a static IP in the VM. Your lab plan: VM1 `192.168.12.10` and VM2 `192.168.12.11` (gateway `192.168.12.1`, port group `VLAN_12`), VM3 `192.168.11.10` (gateway `192.168.11.1`, port group `VLAN_11`).

## Check it worked
- [ ] The VM boots and has the expected static IP.
- [ ] After the firewall exists, VMs on different VLANs can ping each other.

## Gotchas
- Gateways will not answer until the firewall is configured. Do not panic.
- Windows Firewall on the target VM must allow inbound ping, or nothing matters.

## Source notes
- [[04-creating_vms_documentation|04-creating_vms_documentation]]
