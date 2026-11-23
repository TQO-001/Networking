# Unclassified-192.168.160.107

[Core infrastructure](00-index.md) · [[01-network_overview|Network overview]]

> **Identity: `IND-SW-CD-CORE`.** Every neighbour that lists this device reports the hostname `IND-SW-CD-CORE.hulamin.co.za` and IP 192.168.160.107. **Collection failed** (enable mode), so everything below comes from neighbours' reports.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `Unclassified-192.168.160.107` |
| Hostname advertised to neighbours | `IND-SW-CD-CORE` |
| Management IP | 192.168.160.107 |
| Hardware model | C9500-48Y4C (SwitchScribe) |
| Firmware | 17.9.4 (as advertised to neighbours via CDP/LLDP) |
| Collection | failed: ValueError: Failed to enter enable mode. Please ensure you pass the 'secret' argument to ConnectHandler. |
| Role (inferred) | Core / aggregation. Reported by 14 networks' head switches and by `Unclassified-192.168.160.110`. |
| Source note | [[Unclassified-192.168.160.107 (SwitchScribe)]] |

## 2. Connections reported by neighbours

| Core port (per neighbour) | Neighbour | Neighbour port | Network |
|---|---|---|---|
| `Twe2/0/21` | [[IND-SW-CD-Effluent_6A]] | `Gi1/2` | Network_21 |
| `Twe2/0/37` | [[IND-SW-CD_CoolingTower]] | `Gi1/2` | Network_21 |
| `Twe2/0/20` | [[IND-SW-CD-PP_CTLSsub]] | `Gi1/1` | Network_22 |
| `Twe2/0/14` | [[IND-SW-CD_A19]] | `Gi1/0/27` | Network_23 |
| `Twe2/0/31` | [[IND-SW-CD_SubStation4]] | `Gi1/1` | Network_23 |
| `Twe2/0/17` | [[IND-SW-CD_HFM]] | `Gi1/1` | Network_24 |
| `Twe2/0/19` | [[IND-SW-CD_HRM]] | `Gi1/1` | Network_25 |
| `Twe2/0/7` | [[Unclassified-192.168.160.123]] | `Te1/1` | Network_26 |
| `Twe2/0/18` | [[IND-SW-CD-PP_PF4]] | `Gi1/1` | Network_27 |
| `Twe2/0/35` | [[IND-SW-CDHL_CoolingTowers]] | `Gi1/1` | Network_28 |
| `Twe2/0/29` | [[IND-SW-CD_CompHouse5]] | `Gi1/0/25` | Network_29 |
| `Twe2/0/15` | [[IND-SW-CD_SubStation2]] | `Gi1/1` | Network_30 |
| `Twe2/0/41` | [[IND-SW-CD_UBC]] | `Gi1/1` | Network_31 |
| `Twe2/0/13` | [[Unclassified-192.168.160.106]] | `Gi1/1` | Network_32 |
| `Twe2/0/9` | [[Unclassified-192.168.160.120]] | `Gi1/0/25` | Network_33 |
| `Twe2/0/27` | [[Unclassified-192.168.160.128]] | `Gi1/1` | Network_34 |

## 3. Links to `Unclassified-192.168.160.110`

| Port on 192.168.160.110 | Port on 192.168.160.107 | Source |
|---|---|---|
| `Twe1/0/45` | `Twe2/0/45` | CDP |
| `Twe2/0/45` | `Twe1/0/45` | CDP |
| `Twe2/0/9` | `Twe2/0/25` | CDP |

Three separate links join the two cores. They are cross-connected between stack members (`Twe1/0/45` to `Twe2/0/45`, `Twe2/0/45` to `Twe1/0/45`, `Twe2/0/9` to `Twe2/0/25`). Whether they form an EtherChannel cannot be told from the collected data; `show etherchannel summary` on either core would show it.
