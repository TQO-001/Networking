# Topology and connections - Network_23_CD_A19_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-CD_A19]] | `Gi1/0/27` | IND-SW-CD-CORE (192.168.160.107) | `Twe2/0/14` | seen from one end only (the other end not collected / not reporting) | CDP | — |
| [[IND-SW-CD_SubStation4]] | `Gi1/1` | IND-SW-CD-CORE (192.168.160.107) | `Twe2/0/31` | seen from one end only (the other end not collected / not reporting) | CDP | — |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_107["IND-SW-CD-CORE<br/>192.168.160.107<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_CDRF_ScalperPiller42["IND-SW-CDRF_ScalperPiller42<br/>192.168.160.86"]:::access
    N_IND_SW_CD_A19["IND-SW-CD_A19<br/>192.168.160.82"]:::head
    N_IND_SW_CD_SubStation1["IND-SW-CD_SubStation1<br/>192.168.160.51"]:::access
    N_IND_SW_CD_SubStation4["IND-SW-CD_SubStation4<br/>192.168.160.52"]:::head
    E1(["2 active port(s)<br/>device unknown"]):::unknown
    E2(["SLCNG - Campsdrift HAP"]):::enddev
    E3(["6 active port(s)<br/>device unknown"]):::unknown
    E4(["6 active port(s)<br/>device unknown"]):::unknown
    E5(["Managed Redundant Switch 03182"]):::enddev
    E6(["axis-b8a44f78a516"]):::enddev
    E7(["axis-e82725158d17"]):::enddev
    E8(["+2 more named devices"]):::enddev
    E9["Diesel_CP01<br/>not collected"]:::unknown
    E10(["1 active port(s)<br/>device unknown"]):::unknown
    E11(["axis-e827251582e1"]):::enddev
    E12(["axis-e82725159e0c"]):::enddev
    E13(["axis-e827251582e1"]):::enddev
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/14 to Gi1/0/27"| N_IND_SW_CD_A19
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/31 to Gi1/1"| N_IND_SW_CD_SubStation4
    N_IND_SW_CD_SubStation4 ---|"Gi1/2 to Gi1/1"| N_IND_SW_CD_SubStation1
    N_IND_SW_CD_A19 ---|"Gi1/0/25 to Gi1/2"| N_IND_SW_CD_SubStation1
    N_IND_SW_CD_A19 ---|"Gi1/0/26 to Gi1/1"| N_IND_SW_CDRF_ScalperPiller42
    N_IND_SW_CDRF_ScalperPiller42 -.- E1
    N_IND_SW_CDRF_ScalperPiller42 ---|"Fa1/8"| E2
    N_IND_SW_CD_A19 -.- E3
    N_IND_SW_CD_SubStation1 -.- E4
    N_IND_SW_CD_SubStation1 ---|"Fa1/3"| E5
    N_IND_SW_CD_SubStation1 ---|"Fa1/6"| E6
    N_IND_SW_CD_SubStation1 ---|"Fa1/6"| E7
    N_IND_SW_CD_SubStation1 --- E8
    N_IND_SW_CD_SubStation1 ---|"Fa1/3 to Fa1/7"| E9
    N_IND_SW_CD_SubStation4 -.- E10
    N_IND_SW_CD_SubStation4 ---|"Fa1/3"| E11
    N_IND_SW_CD_SubStation4 ---|"Fa1/3"| E12
    N_IND_SW_CD_SubStation4 ---|"Fa1/4"| E13
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
| [[IND-SW-CD_A19]] | `Gi1/0/25` | `Gi1/2` | [[IND-SW-CD_SubStation1]] | — | seen from both ends | LLDP-only Gi1/0/25 to Gi1/1; LLDP-only Gi1/0/4 to Gi1/2 |
| [[IND-SW-CD_A19]] | `Gi1/0/26` | `Gi1/1` | [[IND-SW-CDRF_ScalperPiller42]] | 1000baseX(FD) | seen from both ends | LLDP-only Gi1/1 to Gi1/0/25 |
| [[IND-SW-CD_SubStation4]] | `Gi1/2` | `Gi1/1` | [[IND-SW-CD_SubStation1]] | — | seen from both ends | LLDP-only Fa1/6 to Gi1/2; LLDP-only Gi1/1 to Fa1/4 |

## 4. How the switches connect

- **IND-SW-CD_A19** (head) connects up to IND-SW-CD-CORE on `Gi1/0/27`.
- **IND-SW-CD_SubStation4** (head) connects up to IND-SW-CD-CORE on `Gi1/1`.
- `IND-SW-CD_A19` `Gi1/0/25` connects to `IND-SW-CD_SubStation1` `Gi1/2`.
- `IND-SW-CD_A19` `Gi1/0/26` connects to `IND-SW-CDRF_ScalperPiller42` `Gi1/1`.
- `IND-SW-CD_SubStation4` `Gi1/2` connects to `IND-SW-CD_SubStation1` `Gi1/1`.

## 5. Observations

- 2 distribution switches (IND-SW-CD_A19, IND-SW-CD_SubStation4) each have an uplink to the core and are also linked to each other below the core. This forms a loop through the core; confirm intent and spanning-tree roots.
- 5 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
