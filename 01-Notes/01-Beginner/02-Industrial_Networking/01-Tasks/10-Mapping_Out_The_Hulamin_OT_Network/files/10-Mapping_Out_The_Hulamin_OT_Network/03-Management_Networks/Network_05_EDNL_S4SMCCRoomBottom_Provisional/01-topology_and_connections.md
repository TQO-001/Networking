# Topology and connections - Network_05_EDNL_S4SMCCRoomBottom_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-EDNL_S4SMCCRoomBottom]] | `Gi1/0/25` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe2/0/3` | seen from both ends | CDP+CDP/LLDP | LLDP-only: Gi1/0/25 to Twe1/0/20 |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_CD_MainServerRoom["IND-SW-CD_MainServerRoom<br/>192.168.160.74"]:::access
    N_IND_SW_EDNL_S4GaugeCab["IND-SW-EDNL_S4GaugeCab<br/>192.168.160.32"]:::access
    N_IND_SW_EDNL_S4PulPit["IND-SW-EDNL_S4PulPit<br/>192.168.160.33"]:::access
    N_IND_SW_EDNL_S4SMCCRoomBottom["IND-SW-EDNL_S4SMCCRoomBottom<br/>192.168.160.29"]:::head
    E1(["3 active port(s)<br/>device unknown"]):::unknown
    E2(["8 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_110 ---|"Twe2/0/3 to Gi1/0/25"| N_IND_SW_EDNL_S4SMCCRoomBottom
    N_IND_SW_EDNL_S4SMCCRoomBottom ---|"Gi1/0/1 to Gi1/1"| N_IND_SW_EDNL_S4GaugeCab
    N_IND_SW_EDNL_S4SMCCRoomBottom ---|"Gi1/0/27 to Gi0/1"| N_IND_SW_EDNL_S4PulPit
    N_IND_SW_EDNL_S4SMCCRoomBottom ---|"Gi1/0/3 to Gi1/1"| N_IND_SW_CD_MainServerRoom
    N_IND_SW_EDNL_S4PulPit -.- E1
    N_IND_SW_EDNL_S4SMCCRoomBottom -.- E2
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
| [[IND-SW-EDNL_S4SMCCRoomBottom]] | `Gi1/0/3` | `Gi1/1` | [[IND-SW-CD_MainServerRoom]] | 1000baseT(FD), 100base-T | seen from both ends | — |
| [[IND-SW-EDNL_S4SMCCRoomBottom]] | `Gi1/0/1` | `Gi1/1` | [[IND-SW-EDNL_S4GaugeCab]] | 1000baseT(FD), 100base-T | seen from both ends | LLDP-only Fa1/1 to Gi1/0/1 |
| [[IND-SW-EDNL_S4SMCCRoomBottom]] | `Gi1/0/27` | `Gi0/1` | [[IND-SW-EDNL_S4PulPit]] | — | seen from both ends | — |

## 4. How the switches connect

- **IND-SW-EDNL_S4SMCCRoomBottom** (head) connects up to ind-Core1-MSR on `Gi1/0/25`.
- `IND-SW-EDNL_S4SMCCRoomBottom` `Gi1/0/1` connects to `IND-SW-EDNL_S4GaugeCab` `Gi1/1`.
- `IND-SW-EDNL_S4SMCCRoomBottom` `Gi1/0/27` connects to `IND-SW-EDNL_S4PulPit` `Gi0/1`.
- `IND-SW-EDNL_S4SMCCRoomBottom` `Gi1/0/3` connects to `IND-SW-CD_MainServerRoom` `Gi1/1`.

## 5. Observations

- 2 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
