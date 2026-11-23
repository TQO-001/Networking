# Connected devices - Network_22_CD-PP_CTLSsub_Provisional

[Network index](00-index.md)

1 end-device record(s) came from CDP/LLDP (1 advertise a name). A further 28 active port(s) report no neighbour at all.

| Switch | Port | Device | Type (from LLDP text) | IP | LLDP description | Identified |
|---|---|---|---|---|---|---|
| [[IND-SW-CD-PP_FurnaceMCC]] | `Gi1/2` | C6696 | unclassified endpoint | 140.80.0.100 | HP HP EliteDesk 800 G6 Tower PC,SBKPF,CZC117CBXQ + engineering | yes |

## Neighbour switches not in the collected inventory

| Switch | Port | Neighbour | Remote port | IP | Description |
|---|---|---|---|---|---|
| [[IND-SW-CD-PP_FurnaceMCC]] | `Gi2/8` | Switch | Fa1/20 | — | cisco 1783-BMS20CA |

## Active ports with no CDP/LLDP neighbour (device unknown)

| Switch | Ports | Port list |
|---|---|---|
| [[IND-SW-CD-PP_CTLSsub]] | 3 | Fa1/2-4 |
| [[IND-SW-CD-PP_Compressor]] | 4 | Gi1/3-4, Gi1/6-7 |
| [[IND-SW-CD-PP_FurnaceMCC]] | 13 | Gi1/1, Gi1/3-9, Gi2/1-5 |
| [[IND-SW-CD-PP_HSHTFsub]] | 8 | Fa1/1-8 |

Device types are read from the LLDP text only and are **not confirmed**. Unknown devices are kept as reported.
