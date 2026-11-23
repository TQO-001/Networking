# Topology and connections - Network_10_ENDL_SUBNMcc_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-ENDL_SUBNMcc]] | `Gi1/2` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe1/0/3` | seen from both ends | CDP | LLDP-only: Fa1/3 to Twe1/0/3; LLDP-only: Gi1/2 to Twe2/0/2 |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_EDNL_FoilAnnealingSubN["IND-SW-EDNL_FoilAnnealingSubN<br/>192.168.160.67"]:::access
    N_IND_SW_ENDL_SUBNMcc["IND-SW-ENDL_SUBNMcc<br/>192.168.160.102"]:::head
    E1(["6 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_110 ---|"Twe1/0/3 to Gi1/2"| N_IND_SW_ENDL_SUBNMcc
    N_IND_SW_ENDL_SUBNMcc -.->|"Fa1/8 to Fa0/14"| N_IND_SW_EDNL_FoilAnnealingSubN
    N_IND_SW_ENDL_SUBNMcc -.- E1
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
| [[IND-SW-ENDL_SUBNMcc]] | `Fa1/8` | `Fa0/14` | [[IND-SW-EDNL_FoilAnnealingSubN]] | — | seen from one end only (the other end not collected / not reporting) | — |

## 4. How the switches connect

- **IND-SW-ENDL_SUBNMcc** (head) connects up to ind-Core1-MSR on `Gi1/2`.
- `IND-SW-ENDL_SUBNMcc` `Fa1/8` connects to `IND-SW-EDNL_FoilAnnealingSubN` `Fa0/14`.

## 5. Observations

- 2 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
