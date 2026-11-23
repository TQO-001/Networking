# Topology and connections - Network_18_U160-121_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[Unclassified-192.168.160.121]] | `Gi1/1` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe1/0/27` | seen from both ends | CDP | LLDP-only: Twe1/0/27 to Gi1/6; LLDP-only: Twe2/0/5 to Gi1/1 |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary - not part of this network"]:::boundary
    N_Unclassified_192_168_160_121["Unclassified-192.168.160.121<br/>192.168.160.121"]:::head
    E1(["1 active port(s)<br/>device unknown"]):::unknown
    E2(["IND-INS-5982"]):::enddev
    N_Unclassified_192_168_160_110 ---|"Twe1/0/27 to Gi1/1"| N_Unclassified_192_168_160_121
    N_Unclassified_192_168_160_121 -.- E1
    N_Unclassified_192_168_160_121 ---|"Gi1/1"| E2
    classDef boundary fill:#f3f3f3,stroke:#666,stroke-dasharray:5 5;
    classDef head fill:#d6e9ff,stroke:#1f5fa8,stroke-width:2px;
    classDef access fill:#ffffff,stroke:#555;
    classDef enddev fill:#fff7d6,stroke:#b58900;
    classDef unknown fill:#fde2e2,stroke:#b00020;
```

Diagram key: solid line = link reported from **both** ends; dotted arrow = reported from **one** end only. Dashed box = upstream boundary (not part of this network). Label = port on the upper device, then port on the lower device.

## 3. Links inside the network

None: this network contains a single switch.

## 4. How the switches connect

- **Unclassified-192.168.160.121** (head) connects up to ind-Core1-MSR on `Gi1/1`.

## 5. Observations

- 2 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
