# Topology and connections - Network_24_CD_HFM_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-CD_HFM]] | `Gi1/1` | IND-SW-CD-CORE (192.168.160.107) | `Twe2/0/17` | seen from one end only (the other end not collected / not reporting) | CDP | — |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_107["IND-SW-CD-CORE<br/>192.168.160.107<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_CD_Sub3A["IND-SW-CD-Sub3A<br/>192.168.160.104"]:::access
    N_IND_SW_CD_HFM["IND-SW-CD_HFM<br/>192.168.160.98"]:::head
    E1(["1 active port(s)<br/>device unknown"]):::unknown
    E2(["axis-e82725132650"]):::enddev
    E3(["axis-e82725132650"]):::enddev
    E4(["C7191"]):::enddev
    E5(["2 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/17 to Gi1/1"| N_IND_SW_CD_HFM
    N_IND_SW_CD_HFM ---|"Gi1/2 to Gi1/2"| N_IND_SW_CD_Sub3A
    N_IND_SW_CD_Sub3A -.- E1
    N_IND_SW_CD_Sub3A ---|"Fa1/2"| E2
    N_IND_SW_CD_Sub3A ---|"Fa1/3"| E3
    N_IND_SW_CD_Sub3A ---|"Fa1/4"| E4
    N_IND_SW_CD_HFM -.- E5
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
| [[IND-SW-CD_HFM]] | `Gi1/2` | `Gi1/2` | [[IND-SW-CD-Sub3A]] | — | seen from both ends | — |

## 4. How the switches connect

- **IND-SW-CD_HFM** (head) connects up to IND-SW-CD-CORE on `Gi1/1`.
- `IND-SW-CD_HFM` `Gi1/2` connects to `IND-SW-CD-Sub3A` `Gi1/2`.

## 5. Observations

- No loops, parallel links or CDP/LLDP conflicts were found inside this network.
