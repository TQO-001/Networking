# Topology and connections - Network_17_U160-115_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[Unclassified-192.168.160.115]] | `Gi0/2` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe1/0/8` | seen from both ends | CDP | — |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary - not part of this network"]:::boundary
    N_Unclassified_192_168_160_115["Unclassified-192.168.160.115<br/>192.168.160.115"]:::head
    N_Unclassified_192_168_160_110 ---|"Twe1/0/8 to Gi0/2"| N_Unclassified_192_168_160_115
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

- **Unclassified-192.168.160.115** (head) connects up to ind-Core1-MSR on `Gi0/2`.

## 5. Observations

- No loops, parallel links or CDP/LLDP conflicts were found inside this network.
