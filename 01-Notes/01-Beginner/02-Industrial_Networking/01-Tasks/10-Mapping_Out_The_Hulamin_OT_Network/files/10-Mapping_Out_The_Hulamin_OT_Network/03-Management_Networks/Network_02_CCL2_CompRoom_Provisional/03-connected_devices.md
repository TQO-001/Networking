# Connected devices - Network_02_CCL2_CompRoom_Provisional

[Network index](00-index.md)

7 end-device record(s) came from CDP/LLDP (7 advertise a name). A further 50 active port(s) report no neighbour at all.

| Switch | Port | Device | Type (from LLDP text) | IP | LLDP description | Identified |
|---|---|---|---|---|---|---|
| [[IND-SW-EDNL_CCLCNGGAS]] | `Fa1/8` | SLCNG Edendale | unclassified endpoint | 192.168.173.2 | MikroTik | yes |
| [[IND-SW-EDNL_CCLCNGGAS]] | `Gi1/2` | SLCNG Edendale | unclassified endpoint | 192.168.173.2 | MikroTik RouterOS 7.17.1 (stable) 2025-01-30 10:29:49 L41G-2axD& | yes |
| [[IND-SW-EDNL_WaterTowerSUB]] | `Fa1/5` | axis-b8a44f59a3e9 | unclassified endpoint | 192.168.162.25 | Linux | yes |
| [[IND-SW-EDNL_WaterTowerSUB]] | `Fa1/6` | axis-b8a44f59a3e9 | unclassified endpoint | 192.168.162.25 | AXIS M2025-LE Network Camera 9.80.47 | yes |
| [[IND-SW-EDNL_WaterTowerSUB]] | `Fa1/6` | axis-b8a44f78a4e4 | unclassified endpoint | 192.168.162.26 | Linux | yes |
| [[IND-SW-EDNL_WaterTowerSUB]] | `Fa1/7` | axis-b8a44f78a4e4 | unclassified endpoint | 192.168.162.26 | AXIS M3115-LVE Network Camera 10.11.85 | yes |
| [[IND-SW-EDNL_WaterTowerSUB]] | `Fa1/7` | axis-b8a44f7df417 | unclassified endpoint | 192.168.162.27 | Linux | yes |

## Active ports with no CDP/LLDP neighbour (device unknown)

| Switch | Ports | Port list |
|---|---|---|
| [[IND-SW-CCL_CESS]] | 9 | Gi1/5, Gi1/7-10, Gi2/1, Gi2/4-6 |
| [[IND-SW-EDNL_CCLCNGGAS]] | 2 | Fa1/1, Fa1/3 |
| [[IND-SW-EDNL_CCLServiceTunnel]] | 2 | Fa1/1, Fa1/3 |
| [[IND-SW-EDNL_WaterTowerSUB]] | 4 | Fa1/1-4 |
| [[IND-SW_CCL2Coater_Bottom]] | 5 | Gi1/4-6, Gi1/8-9 |
| [[IND-SW_CCL2_CompRoom]] | 17 | Gi1/0/2-3, Gi1/0/5, Gi1/0/8, Gi1/0/11, Gi1/0/13-18, Gi1/0/24, Gi1/0/26, Gi1/0/28-29, Gi1/0/35, Gi1/0/43 |
| [[IND-SW_CCL2_DC_L]] | 2 | Fa1/3-4 |
| [[IND-SW_CCL2_OS1]] | 9 | Gi1/0/2, Gi1/0/4-7, Gi1/0/10-11, Gi1/0/14-15 |

Device types are read from the LLDP text only and are **not confirmed**. Unknown devices are kept as reported.
