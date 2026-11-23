# Connected devices - Network_07_EDNL_MainServerRoom_Provisional

[Network index](00-index.md)

4 end-device record(s) came from CDP/LLDP (4 advertise a name). A further 27 active port(s) report no neighbour at all.

| Switch | Port | Device | Type (from LLDP text) | IP | LLDP description | Identified |
|---|---|---|---|---|---|---|
| [[IND-SW-EDNL_MainServerRoom]] | `Gi1/0/13` | axis-b8a44febd07e | unclassified endpoint | 192.168.162.41 | Linux | yes |
| [[IND-SW-EDNL_MainServerRoom]] | `Gi1/0/14` | axis-b8a44fe4a4f1 | unclassified endpoint | 192.168.162.40 | Linux | yes |
| [[IND-SW-ENDL-INDServerRoom_Bottom]] | `Gi1/0/13` | axis-b8a44febc067 | unclassified endpoint | 192.168.162.39 | Linux | yes |
| [[IND-SW-ENDL-INDServerRoom_Bottom]] | `Gi1/0/14` | axis-b8a44febcc4d | unclassified endpoint | 192.168.162.38 | Linux | yes |

## Neighbour switches not in the collected inventory

| Switch | Port | Neighbour | Remote port | IP | Description |
|---|---|---|---|---|---|
| [[IND-SW-EDNL_MainServerRoom]] | `Gi1/0/16` | Switch | Gi1/0/12 | 192.168.1.1 | cisco C9200CX-12P-2X2G |
| [[IND-SW-ENDL-INDServerRoom_Bottom]] | `Gi1/0/9` | 70c9c6fbf694 | gi10 | — | Cisco SG350-10SFP (PID:SG350-10SFP-K9)- |

## Active ports with no CDP/LLDP neighbour (device unknown)

| Switch | Ports | Port list |
|---|---|---|
| [[IND-SW-EDNL_MainServerRoom]] | 10 | Gi1/0/2, Gi1/0/4-11, Gi1/0/21 |
| [[IND-SW-ENDL-INDServerRoom_Bottom]] | 17 | Gi1/0/1-7, Gi1/0/11-12, Gi1/0/15, Gi1/0/17-20, Gi1/0/22-24 |

Device types are read from the LLDP text only and are **not confirmed**. Unknown devices are kept as reported.
