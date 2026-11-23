# Connected devices - Network_21_CD-Effluent_6A_Provisional

[Network index](00-index.md)

6 end-device record(s) came from CDP/LLDP (6 advertise a name). A further 22 active port(s) report no neighbour at all.

| Switch | Port | Device | Type (from LLDP text) | IP | LLDP description | Identified |
|---|---|---|---|---|---|---|
| [[IND-SW-CD-Sub6A]] | `Fa1/5` | axis-b8a44f78a515 | unclassified endpoint | 192.168.162.23 | AXIS M3115-LVE Network Camera 10.11.85 | yes |
| [[IND-SW-CD-Sub6A]] | `Fa1/5` | axis-b8a44f78a507 | unclassified endpoint | 192.168.162.22 | Linux | yes |
| [[IND-SW-CD-Sub6A]] | `Fa1/6` | axis-b8a44f78a507 | unclassified endpoint | 192.168.162.22 | AXIS M3115-LVE Network Camera 10.11.85 | yes |
| [[IND-SW-CD-Sub6A]] | `Fa1/6` | axis-b8a44f66ba0b | unclassified endpoint | 192.168.162.21 | Linux | yes |
| [[IND-SW-CD-Sub6A]] | `Fa1/7` | axis-b8a44f78a515 | unclassified endpoint | 192.168.162.23 | Linux | yes |
| [[IND-SW-CD_WaterTowerMCC]] | `Fa1/8` | axis-b8a44f7cc26c | unclassified endpoint | 192.168.162.29 | Linux | yes |

## Active ports with no CDP/LLDP neighbour (device unknown)

| Switch | Ports | Port list |
|---|---|---|
| [[IND-SW-CD-BulkWaterTank]] | 4 | Fa1/1-3, Fa1/6 |
| [[IND-SW-CD-Effluent]] | 2 | Fa1/7-8 |
| [[IND-SW-CD-Effluent_6A_Control]] | 2 | Fa0/5, Fa0/7 |
| [[IND-SW-CD-Sub6A]] | 4 | Fa1/1-4 |
| [[IND-SW-CD_CoolingTower]] | 5 | Fa1/1-4, Fa1/7 |
| [[IND-SW-CD_Sub5MCC]] | 4 | Fa1/1-2, Fa1/5, Fa1/8 |
| [[IND-SW-CD_WaterTowerMCC]] | 1 | Fa1/3 |

Device types are read from the LLDP text only and are **not confirmed**. Unknown devices are kept as reported.
