# Core infrastructure

[[00-management_networks_index|All networks]] · [[01-network_overview|Network overview]]

The shared layer that every provisional network hangs off. The core is **not part of any network**: it is the boundary.

| Device | IP | Collected | Role (inferred) | Networks |
|---|---|---|---|---|
| [[Unclassified-192.168.160.110]] | 192.168.160.110 | yes | Core stack (ind-Core1-MSR, probable) | 21 |
| [[Unclassified-192.168.160.107]] | 192.168.160.107 | **failed** | Core (IND-SW-CD-CORE) | 14 |

## Contents

- [Topology](01-topology_and_connections.md)
- [Identity evidence](02-core_identity_evidence.md)
- Not in the inventory: two Nexus 5672UP switches (`SW-EDNL-MCompRoomN5K`, `SW-EDNL-ICompRoomN5K`), several ProLiant DL380 Gen10 servers (VLAN 251 `Simplivity_Data`), and a few Allen-Bradley / Cisco small-business switches reported as neighbours.

## Progress

- [x] Core 1 collected
- [ ] CD-CORE collected (failed: enable mode)
- [ ] Hostname of 192.168.160.110 confirmed on the device
- [ ] `show etherchannel summary` on both cores
- [ ] Nexus 5672UP pair collected
