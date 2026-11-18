---
tags: [jobbing, reference, vlan]
---
# Work VLAN list

↩ Back to the index: [[00-index|Jobbing index]]

> ◇ = **not from your notes**. The "pattern" lines are my own observation from your tables, so check them before relying on them.

## 1. Plant OT network (SL7 and related switches)
All 18 documented switches are managed in **VLAN 560** (`192.168.160.x`). VLAN names differ from switch to switch in your notes. The **Name to use** column is the name on the network diagram legend.

| VLAN | Name to use | What it is for | Addresses seen in your notes |
|---|---|---|---|
| 560 | Management | Switch management (SSH/SNMP) | `192.168.160.x` on every switch |
| 561 | IND-CESMS | CESMS network | `192.168.192.99` |
| 567 | CTTL5_Mgaurd | CTLL5 machine guarding | `192.168.167.50` |
| 574 | IND-AnnealingFurnace | Annealing furnace | `192.168.174.200` |
| 579 | PTTL_Network | PTTL network | `192.168.179.100` |
| 581 | PTTL_ACDrives | PTTL AC drives | `192.168.181.146` to `.150` |
| 590 | EDPowerMeters | Power meters | (none on the SVI) |
| 591 | SL7 | SL7 / PLC networks | `10.18.14.250`, `.251`; end devices on `192.168.191.x` |
| 592 | Crane | Crane | (none on the SVI) |
| 593 | Ignition | Ignition SCADA, thin clients | `192.168.193.x` (thin clients on `192.168.193.0/24`, gateway `.1`, Ignition `.2`) |

◇ Pattern: most VLANs use `192.168.1<NN>.x`, where `<NN>` is the last two digits of the VLAN (560 = `.160`, 567 = `.167`, 574 = `.174`, 579 = `.179`, 581 = `.181`, 593 = `.193`). The exceptions are the VLAN 561 SVI (`192.168.192.99`) and the VLAN 591 SVIs (`10.18.14.x`).

Misspellings seen on the switches (`Igntion`, `CTTL5_Mgaurd`) are in your open-issues list. Use the legend names when you create a VLAN.

## 2. Cold mill switch `CM-S6-H001` (Catalyst 9200L)
| VLAN | Name | Ports |
|---|---|---|
| 1 | default | Gi1/0/1, trunks Te1/1/1 to 3 |
| 10 | ClientServer | Gi1/0/5 to 12 |
| 11 | (unnamed, VLAN0011) | none |
| 20 | control | Gi1/0/13 to 20 |
| 30 | Thin_Client | Gi1/0/21 to 24 |
| 40 | MNGT | Gi1/0/2 to 4 |

SVIs in the task note: VLAN 1 `172.16.8.250`, VLAN 10 `172.16.12.204`, VLAN 40 `192.16.8.204` (looks like a typo for `192.168.x`). NTP `172.16.12.21`. Domain `iitcoldmill.local`.

## 3. Crane access-point switch `IND-SW-EDNL-CM-Crane` (IE-3300)
| VLAN | Name | Ports |
|---|---|---|
| 560 | Management | SVI `192.168.160.126`, gateway `192.168.160.1` |
| 561 | IND-CESMS | Gi1/7 to 9 |
| 590 | powermeters | none |
| 593 | ignition | Gi1/10 (the Moxa AP) |

