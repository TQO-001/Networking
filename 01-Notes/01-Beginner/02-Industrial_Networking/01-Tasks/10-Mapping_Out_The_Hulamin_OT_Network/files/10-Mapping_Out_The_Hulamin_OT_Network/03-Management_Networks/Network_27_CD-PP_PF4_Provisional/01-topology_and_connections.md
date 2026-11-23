# Topology and connections - Network_27_CD-PP_PF4_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-CD-PP_PF4]] | `Gi1/1` | IND-SW-CD-CORE (192.168.160.107) | `Twe2/0/18` | seen from one end only (the other end not collected / not reporting) | CDP | — |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_107["IND-SW-CD-CORE<br/>192.168.160.107<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_CD_PP_PF4["IND-SW-CD-PP_PF4<br/>192.168.160.99"]:::head
    E1(["7 active port(s)<br/>device unknown"]):::unknown
    E2(["pn-io"]):::enddev
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/18 to Gi1/1"| N_IND_SW_CD_PP_PF4
    N_IND_SW_CD_PP_PF4 -.- E1
    N_IND_SW_CD_PP_PF4 ---|"Fa1/4"| E2
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

- **IND-SW-CD-PP_PF4** (head) connects up to IND-SW-CD-CORE on `Gi1/1`.

## 5. Observations

- No loops, parallel links or CDP/LLDP conflicts were found inside this network.
