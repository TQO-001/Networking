# Connected devices - Network_23_CD_A19_Provisional

[Network index](00-index.md)

9 end-device record(s) came from CDP/LLDP (9 advertise a name). A further 15 active port(s) report no neighbour at all.

| Switch | Port | Device | Type (from LLDP text) | IP | LLDP description | Identified |
|---|---|---|---|---|---|---|
| [[IND-SW-CDRF_ScalperPiller42]] | `Fa1/8` | SLCNG - Campsdrift HAP | unclassified endpoint | 192.168.177.2 | MikroTik | yes |
| [[IND-SW-CD_SubStation1]] | `Fa1/3` | Managed Redundant Switch 03182 | unclassified endpoint | 192.168.127.253 | EDS-408A-MM-ST | yes |
| [[IND-SW-CD_SubStation1]] | `Fa1/6` | axis-b8a44f78a516 | unclassified endpoint | 192.168.162.24 | Linux | yes |
| [[IND-SW-CD_SubStation1]] | `Fa1/6` | axis-e82725158d17 | unclassified endpoint | 192.168.162.46 | Linux | yes |
| [[IND-SW-CD_SubStation1]] | `Fa1/6` | axis-e82725134a6e | unclassified endpoint | 192.168.162.45 | Linux | yes |
| [[IND-SW-CD_SubStation1]] | `Gi1/2` | moxa | unclassified endpoint | — | — | yes |
| [[IND-SW-CD_SubStation4]] | `Fa1/3` | axis-e827251582e1 | unclassified endpoint | 192.168.162.47 | AXIS M3125-LVE Dome Camera 11.11.128 | yes |
| [[IND-SW-CD_SubStation4]] | `Fa1/3` | axis-e82725159e0c | unclassified endpoint | 192.168.162.48 | Linux | yes |
| [[IND-SW-CD_SubStation4]] | `Fa1/4` | axis-e827251582e1 | unclassified endpoint | 192.168.162.47 | Linux | yes |

## Neighbour switches not in the collected inventory

| Switch | Port | Neighbour | Remote port | IP | Description |
|---|---|---|---|---|---|
| [[IND-SW-CD_SubStation1]] | `Fa1/3` | Diesel_CP01 | Fa1/7 | 192.168.1.70 | cisco 1783-BMS10CGL |

## Active ports with no CDP/LLDP neighbour (device unknown)

| Switch | Ports | Port list |
|---|---|---|
| [[IND-SW-CDRF_ScalperPiller42]] | 2 | Fa1/1, Fa1/4 |
| [[IND-SW-CD_A19]] | 6 | Gi1/0/1-3, Gi1/0/8, Gi1/0/24, Gi1/0/28 |
| [[IND-SW-CD_SubStation1]] | 6 | Fa1/1-2, Fa1/4-5, Fa1/7-8 |
| [[IND-SW-CD_SubStation4]] | 1 | Fa1/2 |

Device types are read from the LLDP text only and are **not confirmed**. Unknown devices are kept as reported.
