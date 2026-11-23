# Topology and connections - Network_09_EDNL_SubStationA_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-EDNL_SubStationA]] | `Gi1/1` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe2/0/1` | seen from both ends | CDP+CDP/LLDP | LLDP-only: Gi1/1 to Twe2/0/20 |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_EDNL_SubStationA["IND-SW-EDNL_SubStationA<br/>192.168.160.39"]:::head
    N_IND_SW_EDNL_SubStationB["IND-SW-EDNL_SubStationB<br/>192.168.160.40"]:::access
    E1(["6 active port(s)<br/>device unknown"]):::unknown
    E2(["2 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_110 ---|"Twe2/0/1 to Gi1/1"| N_IND_SW_EDNL_SubStationA
    N_IND_SW_EDNL_SubStationA ---|"Gi1/2 to Gi1/2"| N_IND_SW_EDNL_SubStationB
    N_IND_SW_EDNL_SubStationA -.- E1
    N_IND_SW_EDNL_SubStationB -.- E2
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
| [[IND-SW-EDNL_SubStationA]] | `Gi1/2` | `Gi1/2` | [[IND-SW-EDNL_SubStationB]] | 1000baseX(FD) | seen from both ends | — |

## 4. How the switches connect

- **IND-SW-EDNL_SubStationA** (head) connects up to ind-Core1-MSR on `Gi1/1`.
- `IND-SW-EDNL_SubStationA` `Gi1/2` connects to `IND-SW-EDNL_SubStationB` `Gi1/2`.

## 5. Observations

- 1 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
