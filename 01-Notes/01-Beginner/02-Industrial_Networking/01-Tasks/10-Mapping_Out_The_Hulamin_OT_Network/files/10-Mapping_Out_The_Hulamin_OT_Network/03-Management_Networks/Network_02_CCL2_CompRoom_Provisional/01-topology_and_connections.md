# Topology and connections - Network_02_CCL2_CompRoom_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW_CCL2_CompRoom]] | `Gi1/0/49` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe2/0/10` | seen from both ends | CDP+CDP/LLDP | LLDP-only: Gi1/0/49 to Twe1/0/30 |
| [[IND-SW_CCL2_OS1]] | `Gi1/0/25` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe2/0/12` | seen from both ends | CDP+CDP/LLDP | LLDP-only: Gi1/0/25 to Twe2/0/19 |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_CCL_CESS["IND-SW-CCL_CESS<br/>192.168.160.23"]:::access
    N_IND_SW_EDNL_CCLCNGGAS["IND-SW-EDNL_CCLCNGGAS<br/>192.168.160.48"]:::access
    N_IND_SW_EDNL_CCLServiceTunnel["IND-SW-EDNL_CCLServiceTunnel<br/>192.168.160.42"]:::access
    N_IND_SW_EDNL_WaterTowerSUB["IND-SW-EDNL_WaterTowerSUB<br/>192.168.160.49"]:::access
    N_IND_SW_CCL2Coater_Bottom["IND-SW_CCL2Coater_Bottom<br/>192.168.160.18"]:::access
    N_IND_SW_CCL2_CompRoom["IND-SW_CCL2_CompRoom<br/>192.168.160.22"]:::head
    N_IND_SW_CCL2_DC_L["IND-SW_CCL2_DC_L<br/>192.168.160.20"]:::access
    N_IND_SW_CCL2_OS1["IND-SW_CCL2_OS1<br/>192.168.160.21"]:::head
    E1(["9 active port(s)<br/>device unknown"]):::unknown
    E2(["2 active port(s)<br/>device unknown"]):::unknown
    E3(["SLCNG Edendale"]):::enddev
    E4(["SLCNG Edendale"]):::enddev
    E5(["2 active port(s)<br/>device unknown"]):::unknown
    E6(["4 active port(s)<br/>device unknown"]):::unknown
    E7(["axis-b8a44f59a3e9"]):::enddev
    E8(["axis-b8a44f59a3e9"]):::enddev
    E9(["axis-b8a44f78a4e4"]):::enddev
    E10(["+2 more named devices"]):::enddev
    E11(["5 active port(s)<br/>device unknown"]):::unknown
    E12(["17 active port(s)<br/>device unknown"]):::unknown
    E13(["2 active port(s)<br/>device unknown"]):::unknown
    E14(["9 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_110 ---|"Twe2/0/10 to Gi1/0/49"| N_IND_SW_CCL2_CompRoom
    N_Unclassified_192_168_160_110 ---|"Twe2/0/12 to Gi1/0/25"| N_IND_SW_CCL2_OS1
    N_IND_SW_CCL2_OS1 ---|"Gi1/0/26 to Gi1/1"| N_IND_SW_CCL2Coater_Bottom
    N_IND_SW_CCL2_CompRoom ---|"Gi1/0/51 to Gi1/0/27"| N_IND_SW_CCL2_OS1
    N_IND_SW_CCL2_CompRoom ---|"Gi1/0/12 to Gi1/1"| N_IND_SW_CCL2_DC_L
    N_IND_SW_CCL2_CompRoom ---|"Gi1/0/50 to Gi1/1"| N_IND_SW_CCL_CESS
    N_IND_SW_CCL_CESS ---|"Gi1/2 to Gi1/1"| N_IND_SW_EDNL_CCLServiceTunnel
    N_IND_SW_EDNL_CCLServiceTunnel ---|"Gi1/2 to Gi1/1"| N_IND_SW_EDNL_CCLCNGGAS
    N_IND_SW_EDNL_CCLCNGGAS ---|"Gi1/2 to Gi1/1"| N_IND_SW_EDNL_WaterTowerSUB
    N_IND_SW_CCL_CESS -.- E1
    N_IND_SW_EDNL_CCLCNGGAS -.- E2
    N_IND_SW_EDNL_CCLCNGGAS ---|"Fa1/8"| E3
    N_IND_SW_EDNL_CCLCNGGAS ---|"Gi1/2"| E4
    N_IND_SW_EDNL_CCLServiceTunnel -.- E5
    N_IND_SW_EDNL_WaterTowerSUB -.- E6
    N_IND_SW_EDNL_WaterTowerSUB ---|"Fa1/5"| E7
    N_IND_SW_EDNL_WaterTowerSUB ---|"Fa1/6"| E8
    N_IND_SW_EDNL_WaterTowerSUB ---|"Fa1/6"| E9
    N_IND_SW_EDNL_WaterTowerSUB --- E10
    N_IND_SW_CCL2Coater_Bottom -.- E11
    N_IND_SW_CCL2_CompRoom -.- E12
    N_IND_SW_CCL2_DC_L -.- E13
    N_IND_SW_CCL2_OS1 -.- E14
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
| [[IND-SW_CCL2_CompRoom]] | `Gi1/0/51` | `Gi1/0/27` | [[IND-SW_CCL2_OS1]] | 1000baseX(FD) | seen from both ends | — |
| [[IND-SW_CCL2_CompRoom]] | `Gi1/0/12` | `Gi1/1` | [[IND-SW_CCL2_DC_L]] | 1000baseT(FD), 100base-T | seen from both ends | — |
| [[IND-SW_CCL2_CompRoom]] | `Gi1/0/50` | `Gi1/1` | [[IND-SW-CCL_CESS]] | — | seen from both ends | — |
| [[IND-SW-CCL_CESS]] | `Gi1/2` | `Gi1/1` | [[IND-SW-EDNL_CCLServiceTunnel]] | — | seen from both ends | — |
| [[IND-SW_CCL2_OS1]] | `Gi1/0/26` | `Gi1/1` | [[IND-SW_CCL2Coater_Bottom]] | 1000baseX(FD) | seen from both ends | — |
| [[IND-SW-EDNL_CCLServiceTunnel]] | `Gi1/2` | `Gi1/1` | [[IND-SW-EDNL_CCLCNGGAS]] | — | seen from both ends | — |
| [[IND-SW-EDNL_CCLCNGGAS]] | `Gi1/2` | `Gi1/1` | [[IND-SW-EDNL_WaterTowerSUB]] | — | seen from both ends | LLDP-only Gi1/2 to Fa1/5; LLDP-only Gi1/1 to Gi1/1 |

## 4. How the switches connect

- **IND-SW_CCL2_CompRoom** (head) connects up to ind-Core1-MSR on `Gi1/0/49`.
- **IND-SW_CCL2_OS1** (head) connects up to ind-Core1-MSR on `Gi1/0/25`.
- `IND-SW-CCL_CESS` `Gi1/2` connects to `IND-SW-EDNL_CCLServiceTunnel` `Gi1/1`.
- `IND-SW-EDNL_CCLCNGGAS` `Gi1/2` connects to `IND-SW-EDNL_WaterTowerSUB` `Gi1/1`.
- `IND-SW-EDNL_CCLServiceTunnel` `Gi1/2` connects to `IND-SW-EDNL_CCLCNGGAS` `Gi1/1`.
- `IND-SW_CCL2_CompRoom` `Gi1/0/12` connects to `IND-SW_CCL2_DC_L` `Gi1/1`.
- `IND-SW_CCL2_CompRoom` `Gi1/0/50` connects to `IND-SW-CCL_CESS` `Gi1/1`.
- `IND-SW_CCL2_OS1` `Gi1/0/26` connects to `IND-SW_CCL2Coater_Bottom` `Gi1/1`.

## 5. Observations

- 2 distribution switches (IND-SW_CCL2_CompRoom, IND-SW_CCL2_OS1) each have an uplink to the core and are also linked to each other below the core. This forms a loop through the core; confirm intent and spanning-tree roots.
- 4 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
