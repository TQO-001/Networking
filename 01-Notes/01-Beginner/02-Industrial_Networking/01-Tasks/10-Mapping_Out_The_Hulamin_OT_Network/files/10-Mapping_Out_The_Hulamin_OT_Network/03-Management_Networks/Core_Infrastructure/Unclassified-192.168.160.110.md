# Unclassified-192.168.160.110

[Core infrastructure](00-index.md) · [[01-network_overview|Network overview]]

> **Probable identity: `ind-Core1-MSR`.** SwitchScribe could not read this switch's hostname, so it is named by IP. The evidence for the identity is in [Core identity evidence](02-core_identity_evidence.md).

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `Unclassified-192.168.160.110` |
| Probable hostname | `ind-Core1-MSR` (advertised to neighbours, IP 192.168.1.1) |
| Management IP (SSH) | 192.168.160.110 |
| Hardware model | C9500-48Y4C (advertised by neighbours via CDP). SwitchScribe reports N5K-C5672UP: they disagree |
| Interface naming | `Twe1/0/x` and `Twe2/0/x` (TwentyFiveGigE) with `Hu1/0/52`, `Hu2/0/52`: two stack members. Inferred from interface names only. |
| Firmware | 17.9.4 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 1 reported, 0 up (only the management port was counted; the data-port count is not reliable) |
| Collection | success (3.92s) |
| Role (inferred) | Core / aggregation. Directly connected to 24 switches, two Nexus 5672UP switches and several servers. |
| Source note | [[Unclassified-192.168.160.110 (SwitchScribe)]] |

## 2. Connections (CDP, authoritative)

| Core port | Neighbour | Neighbour port | Network | Neighbour IP | Source |
|---|---|---|---|---|---|
| `Twe1/0/1` | [[IND-SW-EDNL_AdminMCC]] | `Gi1/1` | Network_11 | 192.168.160.77 | CDP |
| `Twe1/0/10` | [[IND-SW-EDNL_ElectrciansWorkShop]] | `Gi1/2` | Network_04 | 192.168.160.27 | CDP/LLDP |
| `Twe1/0/11` | [[Unclassified-192.168.160.127]] | `Gi1/0/25` | Network_20 | 192.168.160.127 | CDP |
| `Twe1/0/2` | [[IND-SW-EDNL_FoilColingTowers]] | `Gi1/2` | Network_06 | 192.168.160.37 | CDP |
| `Twe1/0/21` | [[IND-SW-Dept34_Distr (SwitchScribe)]] | `Te1/0/27` | Dept 34 | 192.168.160.117 | CDP |
| `Twe1/0/27` | [[Unclassified-192.168.160.121]] | `Gi1/1` | Network_18 | 192.168.160.121 | CDP |
| `Twe1/0/3` | [[IND-SW-ENDL_SUBNMcc]] | `Gi1/2` | Network_10 | 192.168.160.102 | CDP |
| `Twe1/0/4` | [[IND-SW-EDNL_SubStation1]] | `Gi1/1` | Network_08 | 192.168.160.35 | CDP |
| `Twe1/0/43` | SW-EDNL-MCompRoomN5K | `Eth1/45` | — | 10.10.1.2 | CDP |
| `Twe1/0/45` | [[Unclassified-192.168.160.107]] | `Twe2/0/45` | core pair | 192.168.160.107 | CDP |
| `Twe1/0/5` | [[IND-SW-EDNL_GeneratorSub]] | `Gi1/2` | Network_13 | 192.168.160.28 | CDP |
| `Twe1/0/6` | [[IND-SW-EDNL_EffluentPlant]] | `Gi1/1` | Network_12 | 192.168.160.91 | CDP |
| `Twe1/0/7` | [[Unclassified-192.168.160.105]] | `Gi0/11` | Network_16 | 192.168.160.105 | CDP |
| `Twe1/0/8` | [[Unclassified-192.168.160.115]] | `Gi0/2` | Network_17 | 192.168.160.115 | CDP |
| `Twe1/0/9` | [[IND-SW-EDNL_MainServerRoom]] | `Gi1/0/28` | Network_07 | 192.168.160.26 | CDP |
| `Twe2/0/1` | [[IND-SW-EDNL_SubStationA]] | `Gi1/1` | Network_09 | 192.168.160.39 | CDP |
| `Twe2/0/10` | [[IND-SW_CCL2_CompRoom]] | `Gi1/0/49` | Network_02 | 192.168.160.22 | CDP |
| `Twe2/0/12` | [[IND-SW_CCL2_OS1]] | `Gi1/0/25` | Network_02 | 192.168.160.21 | CDP |
| `Twe2/0/13` | [[Unclassified-192.168.160.122]] | `Gi1/1/1` | Network_19 | 192.168.126.12 | CDP |
| `Twe2/0/14` | [[IND-SW-CCL1DevRoom]] | `Gi1/0/27` | Network_03 | 192.168.160.12 | CDP |
| `Twe2/0/2` | [[IND-SW_FS14MCC]] | `Te1/1/1` | Network_14 | 192.168.160.9 | CDP |
| `Twe2/0/3` | [[IND-SW-EDNL_S4SMCCRoomBottom]] | `Gi1/0/25` | Network_05 | 192.168.160.29 | CDP |
| `Twe2/0/45` | [[Unclassified-192.168.160.107]] | `Twe1/0/45` | core pair | 192.168.160.107 | CDP |
| `Twe2/0/48` | SW-EDNL-ICompRoomN5K | `Eth1/7` | — | 10.10.44.3 | CDP |
| `Twe2/0/5` | [[IND-SW-EDNL_S6MCCRoom]] | `Gi1/1` | Network_01 | 192.168.160.61 | CDP |
| `Twe2/0/6` | [[IND-SW_FS15MCC]] | `Gi1/0/25` | Network_15 | 192.168.160.8 | CDP |
| `Twe2/0/8` | [[IND-SW-ENDL-INDServerRoom_Bottom]] | `Gi1/0/28` | Network_07 | 192.168.1.61 | CDP |
| `Twe2/0/9` | [[Unclassified-192.168.160.107]] | `Twe2/0/25` | core pair | 192.168.160.107 | CDP |

## 3. LLDP records that name a different core port (19)

For these neighbours the core's own LLDP table gives a different local port from its CDP table. The neighbour-side records match the CDP ports (see the evidence note), so the CDP ports are used throughout; the LLDP values are preserved here.

| Neighbour | Core port per CDP | Core port per LLDP |
|---|---|---|
| [[IND-SW-EDNL_S6MCCRoom]] | `Twe2/0/5` | `Twe1/0/1` |
| [[IND-SW-CCL1DevRoom]] | `Twe2/0/14` | `Twe1/0/11` |
| [[IND-SW-EDNL_S4SMCCRoomBottom]] | `Twe2/0/3` | `Twe1/0/20` |
| [[IND-SW-EDNL_SubStation1]] | `Twe1/0/4` | `Twe1/0/27` |
| [[Unclassified-192.168.160.127]] | `Twe1/0/11` | `Twe1/0/3` |
| [[IND-SW_CCL2_CompRoom]] | `Twe2/0/10` | `Twe1/0/30` |
| [[IND-SW-EDNL_AdminMCC]] | `Twe1/0/1` | `Twe1/0/43` |
| [[IND-SW-Dept34_Distr (SwitchScribe)]] | `Twe1/0/21` | `Twe1/0/5` |
| [[IND-SW-EDNL_EffluentPlant]] | `Twe1/0/6` | `Twe1/0/7` |
| [[IND-SW_FS14MCC]] | `Twe2/0/2` | `Twe2/0/1` |
| [[IND-SW_FS15MCC]] | `Twe2/0/6` | `Twe2/0/10` |
| [[IND-SW-EDNL_MainServerRoom]] | `Twe1/0/9` | `Twe2/0/19` |
| [[IND-SW_CCL2_OS1]] | `Twe2/0/12` | `Twe2/0/19` |
| [[IND-SW-ENDL_SUBNMcc]] | `Twe1/0/3` | `Twe2/0/2` |
| [[IND-SW-EDNL_FoilColingTowers]] | `Twe1/0/2` | `Twe2/0/20` |
| [[IND-SW-EDNL_SubStationA]] | `Twe2/0/1` | `Twe2/0/20` |
| [[IND-SW-EDNL_GeneratorSub]] | `Twe1/0/5` | `Twe2/0/32` |
| [[Unclassified-192.168.160.105]] | `Twe1/0/7` | `Twe2/0/48` |
| [[Unclassified-192.168.160.121]] | `Twe1/0/27` | `Twe2/0/5` |

## 4. LLDP-only neighbours (servers, VMs, Nexus)

| Core port (LLDP) | Neighbour | Neighbour port | IP | Description |
|---|---|---|---|---|
| `Twe1/0/10` | IND-A10A11-ENG | `port-001` | 192.168.169.45 | VMware, Inc. VMware Virtual Platform,None,VMware-4 |
| `Twe1/0/19` | 38443851-4131-5A43-3232-353230304730 | `5ced.8c1c.f1ac` | — | — |
| `Twe1/0/2` | 38443851-4131-5A43-3232-35323030465A | `b47a.f1bd.02ec` | — | — |
| `Twe1/0/21` | IND-SENG1 | `port-001` | 192.168.161.46 | SIEMENS AG SIMATIC PC |
| `Twe1/0/31` | 38443851-4131-5A43-3232-353230304732 | `Embedded ALOM, Port 1` | 192.168.250.221 | ProLiant DL380 Gen10 |
| `Twe1/0/33` | SW-EDNL-ICompRoomN5K | `Eth1/7` | — | Cisco Nexus Operating System (NX-OS) Software 7.0( |
| `Twe1/0/4` | 38443851-4131-5A43-3232-35323030465A | `PCI-E Slot 4, Port 2` | 192.168.250.222 | ProLiant DL380 Gen10 |
| `Twe1/0/6` | SW-EDNL-MCompRoomN5K | `Eth1/45` | — | Cisco Nexus Operating System (NX-OS) Software 7.0( |
| `Twe2/0/12` | 38443851-4131-5A43-3232-353230304732 | `Embedded ALOM, Port 2` | 192.168.250.221 | ProLiant DL380 Gen10 |
| `Twe2/0/14` | 38443851-4131-5A43-3232-353230304730 | `b47a.f1bd.1204` | — | — |
| `Twe2/0/19` | 38443851-4131-5A43-3232-353230304732 | `5ced.8c1c.656c` | — | — |
| `Twe2/0/3` | IND-CCL1RTO | `port-001` | 192.168.1.196 | VMware, Inc. None,VMware-42 34 3a 25 36 6e ac 1f-6 |
| `Twe2/0/31` | 38443851-4131-5A43-3232-353230304731 | `5ced.8c1c.752c` | — | — |
| `Twe2/0/33` | 38443851-4131-5A43-3232-353230304731 | `b47a.f1bd.b1a4` | — | — |
| `Twe2/0/6` | 38443851-4131-5A43-3232-353230304730 | `b47a.f1bd.1200` | — | — |

The ProLiant DL380 Gen10 records sit in VLAN 251 `Simplivity_Data`; their core ports per LLDP carry the same unreliable numbering described above.
