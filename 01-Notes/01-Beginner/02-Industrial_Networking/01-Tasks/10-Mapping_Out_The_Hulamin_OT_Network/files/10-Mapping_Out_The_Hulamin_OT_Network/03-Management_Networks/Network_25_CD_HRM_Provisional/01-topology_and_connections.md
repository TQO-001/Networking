# Topology and connections - Network_25_CD_HRM_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-CD_HRM]] | `Gi1/1` | IND-SW-CD-CORE (192.168.160.107) | `Twe2/0/19` | seen from one end only (the other end not collected / not reporting) | CDP | — |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_107["IND-SW-CD-CORE<br/>192.168.160.107<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_CD_HRM["IND-SW-CD_HRM<br/>192.168.160.97"]:::head
    N_Unclassified_192_168_160_114["Unclassified-192.168.160.114<br/>192.168.160.114"]:::access
    E1(["3 active port(s)<br/>device unknown"]):::unknown
    E2(["CD-DieselPump-Camera2"]):::enddev
    E3(["CD-DieselPump-Camera1"]):::enddev
    E4(["CD-DieselPump-Camera3"]):::enddev
    E5(["+2 more named devices"]):::enddev
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/19 to Gi1/1"| N_IND_SW_CD_HRM
    N_IND_SW_CD_HRM ---|"Gi1/2 to Gi1/1"| N_Unclassified_192_168_160_114
    N_IND_SW_CD_HRM -.- E1
    N_Unclassified_192_168_160_114 ---|"Gi1/3"| E2
    N_Unclassified_192_168_160_114 ---|"Gi1/3"| E3
    N_Unclassified_192_168_160_114 ---|"Gi1/4"| E4
    N_Unclassified_192_168_160_114 --- E5
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
| [[IND-SW-CD_HRM]] | `Gi1/2` | `Gi1/1` | [[Unclassified-192.168.160.114]] | — | seen from both ends | LLDP-only Gi1/2 to Gi1/4; LLDP-only Gi1/5 to Gi1/1 |

## 4. How the switches connect

- **IND-SW-CD_HRM** (head) connects up to IND-SW-CD-CORE on `Gi1/1`.
- `IND-SW-CD_HRM` `Gi1/2` connects to `Unclassified-192.168.160.114` `Gi1/1`.

## 5. Observations

- 2 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
