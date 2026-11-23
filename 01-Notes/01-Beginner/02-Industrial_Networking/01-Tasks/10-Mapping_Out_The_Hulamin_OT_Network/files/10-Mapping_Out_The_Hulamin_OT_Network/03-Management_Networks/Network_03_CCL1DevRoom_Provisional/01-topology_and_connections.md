# Topology and connections - Network_03_CCL1DevRoom_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-CCL1DevRoom]] | `Gi1/0/27` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe2/0/14` | seen from both ends | CDP+CDP/LLDP | LLDP-only: Gi1/0/27 to Twe1/0/11 |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_CCL1DevRoom["IND-SW-CCL1DevRoom<br/>192.168.160.12"]:::head
    N_IND_SW_CCL1PLCC["IND-SW-CCL1PLCC<br/>192.168.160.11"]:::access
    N_IND_SW_CCL1_PLC_B["IND-SW-CCL1_PLC_B<br/>192.168.160.10"]:::access
    N_IND_SW_CCL1OS4["IND-SW_CCL1OS4<br/>192.168.160.13"]:::access
    N_IND_SW_CCL1OS5["IND-SW_CCL1OS5<br/>192.168.160.14"]:::access
    N_IND_SW_CCL1OS6["IND-SW_CCL1OS6<br/>192.168.160.15"]:::access
    N_IND_SW_CCL1OS9["IND-SW_CCL1OS9<br/>192.168.160.16"]:::access
    E1(["6 active port(s)<br/>device unknown"]):::unknown
    E2(["6 active port(s)<br/>device unknown"]):::unknown
    E3(["6 active port(s)<br/>device unknown"]):::unknown
    E4(["2 active port(s)<br/>device unknown"]):::unknown
    E5(["2 active port(s)<br/>device unknown"]):::unknown
    E6(["3 active port(s)<br/>device unknown"]):::unknown
    E7(["3 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_110 ---|"Twe2/0/14 to Gi1/0/27"| N_IND_SW_CCL1DevRoom
    N_IND_SW_CCL1PLCC ---|"Fa2/1 to Gi1/1"| N_IND_SW_CCL1OS9
    N_IND_SW_CCL1DevRoom ---|"Gi1/0/28 to Gi1/1"| N_IND_SW_CCL1PLCC
    N_IND_SW_CCL1PLCC ---|"Gi1/2 to Gi1/1"| N_IND_SW_CCL1_PLC_B
    N_IND_SW_CCL1DevRoom ---|"Gi1/0/26 to Gi1/2"| N_IND_SW_CCL1_PLC_B
    N_IND_SW_CCL1_PLC_B ---|"Fa2/1 to Gi1/1"| N_IND_SW_CCL1OS4
    N_IND_SW_CCL1OS9 ---|"Gi1/2 to Gi1/1"| N_IND_SW_CCL1OS5
    N_IND_SW_CCL1OS4 -.->|"Gi1/2 to Gi1/1"| N_IND_SW_CCL1OS6
    N_IND_SW_CCL1DevRoom -.- E1
    N_IND_SW_CCL1PLCC -.- E2
    N_IND_SW_CCL1_PLC_B -.- E3
    N_IND_SW_CCL1OS4 -.- E4
    N_IND_SW_CCL1OS5 -.- E5
    N_IND_SW_CCL1OS6 -.- E6
    N_IND_SW_CCL1OS9 -.- E7
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
| [[IND-SW-CCL1DevRoom]] | `Gi1/0/28` | `Gi1/1` | [[IND-SW-CCL1PLCC]] | 1000baseX(FD) | seen from both ends | — |
| [[IND-SW-CCL1DevRoom]] | `Gi1/0/26` | `Gi1/2` | [[IND-SW-CCL1_PLC_B]] | 1000baseX(FD) | seen from both ends | — |
| [[IND-SW-CCL1PLCC]] | `Fa2/1` | `Gi1/1` | [[IND-SW_CCL1OS9]] | MAU type 21 | seen from both ends | — |
| [[IND-SW-CCL1PLCC]] | `Gi1/2` | `Gi1/1` | [[IND-SW-CCL1_PLC_B]] | 1000baseX(FD) | seen from both ends | — |
| [[IND-SW-CCL1_PLC_B]] | `Fa2/1` | `Gi1/1` | [[IND-SW_CCL1OS4]] | MAU type 21 | seen from both ends | — |
| [[IND-SW_CCL1OS4]] | `Gi1/2` | `Gi1/1` | [[IND-SW_CCL1OS6]] | 1000baseX(FD) | seen from one end only (the other end not collected / not reporting) | — |
| [[IND-SW_CCL1OS9]] | `Gi1/2` | `Gi1/1` | [[IND-SW_CCL1OS5]] | MAU type 21 | seen from both ends | — |

## 4. How the switches connect

- **IND-SW-CCL1DevRoom** (head) connects up to ind-Core1-MSR on `Gi1/0/27`.
- `IND-SW-CCL1DevRoom` `Gi1/0/28` connects to `IND-SW-CCL1PLCC` `Gi1/1`.
- `IND-SW-CCL1DevRoom` `Gi1/0/26` connects to `IND-SW-CCL1_PLC_B` `Gi1/2`.
- `IND-SW-CCL1PLCC` `Fa2/1` connects to `IND-SW_CCL1OS9` `Gi1/1`.
- `IND-SW-CCL1_PLC_B` `Fa2/1` connects to `IND-SW_CCL1OS4` `Gi1/1`.
- `IND-SW_CCL1OS4` `Gi1/2` connects to `IND-SW_CCL1OS6` `Gi1/1`.
- `IND-SW_CCL1OS9` `Gi1/2` connects to `IND-SW_CCL1OS5` `Gi1/1`.

## 5. Observations

- The internal link count (7) exceeds a tree (6): there is a loop or a redundant path (possibly an intentional ring). Confirm the ring or spanning-tree configuration on these switches.
- 1 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
