# Topology and connections - Network_26_U160-123_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[Unclassified-192.168.160.123]] | `Te1/1` | IND-SW-CD-CORE (192.168.160.107) | `Twe2/0/7` | seen from one end only (the other end not collected / not reporting) | CDP | — |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_107["IND-SW-CD-CORE<br/>192.168.160.107<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_CD_TRCMCC["IND-SW-CD_TRCMCC<br/>192.168.160.103"]:::access
    N_Unclassified_192_168_160_123["Unclassified-192.168.160.123<br/>192.168.160.123"]:::head
    E1(["2 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/7 to Te1/1"| N_Unclassified_192_168_160_123
    N_Unclassified_192_168_160_123 ---|"Te1/2 to Gi1/2"| N_IND_SW_CD_TRCMCC
    N_Unclassified_192_168_160_123 -.- E1
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
| [[Unclassified-192.168.160.123]] | `Te1/2` | `Gi1/2` | [[IND-SW-CD_TRCMCC]] | 1000baseX(FD) | seen from both ends | — |

## 4. How the switches connect

- **Unclassified-192.168.160.123** (head) connects up to IND-SW-CD-CORE on `Te1/1`.
- `Unclassified-192.168.160.123` `Te1/2` connects to `IND-SW-CD_TRCMCC` `Gi1/2`.

## 5. Observations

- No loops, parallel links or CDP/LLDP conflicts were found inside this network.
