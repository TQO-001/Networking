# Topology and connections - Network_04_EDNL_ElectrciansWorkShop_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-EDNL_ElectrciansWorkShop]] | `Gi1/2` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe1/0/10` | seen from both ends | CDP/LLDP | — |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_EDNL_ElectrciansWorkShop["IND-SW-EDNL_ElectrciansWorkShop<br/>192.168.160.27"]:::head
    N_IND_SW_EDNL_SubStationD["IND-SW-EDNL_SubStationD<br/>192.168.160.43"]:::access
    N_IND_SW_EDNL_SubStationG["IND-SW-EDNL_SubStationG<br/>192.168.160.44"]:::access
    N_IND_SW_EDNL_SubStationM["IND-SW-EDNL_SubStationM<br/>192.168.160.69"]:::access
    N_IND_SW_EDNL_SubStationN["IND-SW-EDNL_SubStationN<br/>192.168.160.36"]:::access
    N_Unclassified_192_168_160_116["Unclassified-192.168.160.116<br/>192.168.160.116"]:::access
    E1(["3 active port(s)<br/>device unknown"]):::unknown
    E2["6899cdcc9b6d<br/>not collected"]:::unknown
    E3(["2 active port(s)<br/>device unknown"]):::unknown
    E4(["2 active port(s)<br/>device unknown"]):::unknown
    E5(["6 active port(s)<br/>device unknown"]):::unknown
    E6(["1 active port(s)<br/>device unknown"]):::unknown
    E7(["4 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_110 ---|"Twe1/0/10 to Gi1/2"| N_IND_SW_EDNL_ElectrciansWorkShop
    N_IND_SW_EDNL_SubStationM ---|"Gi1/1 to Gi1/2"| N_Unclassified_192_168_160_116
    N_IND_SW_EDNL_SubStationD ---|"Gi1/1 to Gi1/2"| N_IND_SW_EDNL_SubStationM
    N_IND_SW_EDNL_SubStationN ---|"Gi1/2 to Gi1/2"| N_IND_SW_EDNL_SubStationD
    N_IND_SW_EDNL_SubStationG ---|"Gi1/1 to Gi1/1"| N_IND_SW_EDNL_SubStationN
    N_IND_SW_EDNL_ElectrciansWorkShop ---|"Gi1/1 to Gi1/2"| N_IND_SW_EDNL_SubStationG
    N_IND_SW_EDNL_ElectrciansWorkShop -.- E1
    N_IND_SW_EDNL_ElectrciansWorkShop ---|"Fa1/4 to gi6"| E2
    N_IND_SW_EDNL_SubStationD -.- E3
    N_IND_SW_EDNL_SubStationG -.- E4
    N_IND_SW_EDNL_SubStationM -.- E5
    N_IND_SW_EDNL_SubStationN -.- E6
    N_Unclassified_192_168_160_116 -.- E7
    classDef boundary fill:#f3f3f3,stroke:#666,stroke-dasharray:5 5;
    classDef head fill:#d6e9ff,stroke:#1f5fa8,stroke-width:2px;
    classDef access fill:#ffffff,stroke:#555;
    classDef enddev fill:#fff7d6,stroke:#b58900;
    classDef unknown fill:#fde2e2,stroke:#b00020;
```

Diagram key: solid line = link reported from **both** ends; dotted arrow = reported from **one** end only. Dashed box = upstream boundary (not part of this network). Label = port on the upper device, then port on the lower device.

## 3. Links inside the network

| Upper switch | Port | Port | Lower switch | Media | Evidence | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-EDNL_ElectrciansWorkShop]] | `Gi1/1` | `Gi1/2` | [[IND-SW-EDNL_SubStationG]] | 1000baseX(FD) | seen from both ends | — |
| [[IND-SW-EDNL_SubStationG]] | `Gi1/1` | `Gi1/1` | [[IND-SW-EDNL_SubStationN]] | 1000baseX(FD) | seen from both ends | LLDP-only Gi1/1 to Gi1/2 |
| [[IND-SW-EDNL_SubStationD]] | `Gi1/1` | `Gi1/2` | [[IND-SW-EDNL_SubStationM]] | 1000baseX(FD) | seen from both ends | — |
| [[IND-SW-EDNL_SubStationN]] | `Gi1/2` | `Gi1/2` | [[IND-SW-EDNL_SubStationD]] | 1000baseT(FD), 100base-T | seen from both ends | — |
| [[IND-SW-EDNL_SubStationM]] | `Gi1/1` | `Gi1/2` | [[Unclassified-192.168.160.116]] | — | seen from both ends | — |

## 4. How the switches connect

- **IND-SW-EDNL_ElectrciansWorkShop** (head) connects up to ind-Core1-MSR on `Gi1/2`.
- `IND-SW-EDNL_ElectrciansWorkShop` `Gi1/1` connects to `IND-SW-EDNL_SubStationG` `Gi1/2`.
- `IND-SW-EDNL_SubStationD` `Gi1/1` connects to `IND-SW-EDNL_SubStationM` `Gi1/2`.
- `IND-SW-EDNL_SubStationG` `Gi1/1` connects to `IND-SW-EDNL_SubStationN` `Gi1/1`.
- `IND-SW-EDNL_SubStationM` `Gi1/1` connects to `Unclassified-192.168.160.116` `Gi1/2`.
- `IND-SW-EDNL_SubStationN` `Gi1/2` connects to `IND-SW-EDNL_SubStationD` `Gi1/2`.

## 5. Observations

- 1 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
