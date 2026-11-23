# Topology and connections - Network_33_U160-120_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[Unclassified-192.168.160.120]] | `Gi1/0/25` | IND-SW-CD-CORE (192.168.160.107) | `Twe2/0/9` | seen from one end only (the other end not collected / not reporting) | CDP | — |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_107["IND-SW-CD-CORE<br/>192.168.160.107<br/>upstream boundary - not part of this network"]:::boundary
    N_Unclassified_192_168_160_120["Unclassified-192.168.160.120<br/>192.168.160.120"]:::head
    E1(["4 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/9 to Gi1/0/25"| N_Unclassified_192_168_160_120
    N_Unclassified_192_168_160_120 -.- E1
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

- **Unclassified-192.168.160.120** (head) connects up to IND-SW-CD-CORE on `Gi1/0/25`.

## 5. Observations

- No loops, parallel links or CDP/LLDP conflicts were found inside this network.
