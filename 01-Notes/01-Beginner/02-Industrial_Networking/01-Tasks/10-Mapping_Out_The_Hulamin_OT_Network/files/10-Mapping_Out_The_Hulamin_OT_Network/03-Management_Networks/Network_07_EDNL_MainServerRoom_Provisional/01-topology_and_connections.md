# Topology and connections - Network_07_EDNL_MainServerRoom_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-EDNL_MainServerRoom]] | `Gi1/0/28` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe1/0/9` | seen from both ends | CDP+CDP/LLDP | LLDP-only: Gi1/0/28 to Twe2/0/19 |
| [[IND-SW-ENDL-INDServerRoom_Bottom]] | `Gi1/0/28` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe2/0/8` | seen from both ends | CDP | — |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_EDNL_MainServerRoom["IND-SW-EDNL_MainServerRoom<br/>192.168.160.26"]:::head
    N_IND_SW_ENDL_INDServerRoom_Bottom["IND-SW-ENDL-INDServerRoom_Bottom<br/>192.168.160.53"]:::head
    E1(["10 active port(s)<br/>device unknown"]):::unknown
    E2(["axis-b8a44febd07e"]):::enddev
    E3(["axis-b8a44fe4a4f1"]):::enddev
    E4["Switch<br/>not collected"]:::unknown
    E5(["17 active port(s)<br/>device unknown"]):::unknown
    E6(["axis-b8a44febc067"]):::enddev
    E7(["axis-b8a44febcc4d"]):::enddev
    E8["70c9c6fbf694<br/>not collected"]:::unknown
    N_Unclassified_192_168_160_110 ---|"Twe1/0/9 to Gi1/0/28"| N_IND_SW_EDNL_MainServerRoom
    N_Unclassified_192_168_160_110 ---|"Twe2/0/8 to Gi1/0/28"| N_IND_SW_ENDL_INDServerRoom_Bottom
    N_IND_SW_EDNL_MainServerRoom ---|"Gi1/0/26 to Gi1/0/27"| N_IND_SW_ENDL_INDServerRoom_Bottom
    N_IND_SW_EDNL_MainServerRoom -.- E1
    N_IND_SW_EDNL_MainServerRoom ---|"Gi1/0/13"| E2
    N_IND_SW_EDNL_MainServerRoom ---|"Gi1/0/14"| E3
    N_IND_SW_EDNL_MainServerRoom ---|"Gi1/0/16 to Gi1/0/12"| E4
    N_IND_SW_ENDL_INDServerRoom_Bottom -.- E5
    N_IND_SW_ENDL_INDServerRoom_Bottom ---|"Gi1/0/13"| E6
    N_IND_SW_ENDL_INDServerRoom_Bottom ---|"Gi1/0/14"| E7
    N_IND_SW_ENDL_INDServerRoom_Bottom ---|"Gi1/0/9 to gi10"| E8
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
| [[IND-SW-EDNL_MainServerRoom]] | `Gi1/0/26` | `Gi1/0/27` | [[IND-SW-ENDL-INDServerRoom_Bottom]] | — | seen from both ends | — |

## 4. How the switches connect

- **IND-SW-EDNL_MainServerRoom** (head) connects up to ind-Core1-MSR on `Gi1/0/28`.
- **IND-SW-ENDL-INDServerRoom_Bottom** (head) connects up to ind-Core1-MSR on `Gi1/0/28`.

## 5. Observations

- 2 distribution switches (IND-SW-EDNL_MainServerRoom, IND-SW-ENDL-INDServerRoom_Bottom) each have an uplink to the core and are also linked to each other below the core. This forms a loop through the core; confirm intent and spanning-tree roots.
- 1 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
