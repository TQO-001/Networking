# Topology and connections - Network_22_CD-PP_CTLSsub_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW-CD-PP_CTLSsub]] | `Gi1/1` | IND-SW-CD-CORE (192.168.160.107) | `Twe2/0/20` | seen from one end only (the other end not collected / not reporting) | CDP | — |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_107["IND-SW-CD-CORE<br/>192.168.160.107<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_CD_PP_CTLSsub["IND-SW-CD-PP_CTLSsub<br/>192.168.160.78"]:::head
    N_IND_SW_CD_PP_Compressor["IND-SW-CD-PP_Compressor<br/>192.168.160.80"]:::access
    N_IND_SW_CD_PP_FurnaceMCC["IND-SW-CD-PP_FurnaceMCC<br/>192.168.160.81"]:::access
    N_IND_SW_CD_PP_HSHTFsub["IND-SW-CD-PP_HSHTFsub<br/>192.168.160.79"]:::access
    E1(["3 active port(s)<br/>device unknown"]):::unknown
    E2(["4 active port(s)<br/>device unknown"]):::unknown
    E3(["13 active port(s)<br/>device unknown"]):::unknown
    E4(["C6696"]):::enddev
    E5["Switch<br/>not collected"]:::unknown
    E6(["8 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/20 to Gi1/1"| N_IND_SW_CD_PP_CTLSsub
    N_IND_SW_CD_PP_HSHTFsub ---|"Gi1/2 to Te1/2"| N_IND_SW_CD_PP_Compressor
    N_IND_SW_CD_PP_Compressor ---|"Te1/1 to Gi1/2"| N_IND_SW_CD_PP_FurnaceMCC
    N_IND_SW_CD_PP_CTLSsub ---|"Gi1/2 to Gi1/1"| N_IND_SW_CD_PP_HSHTFsub
    N_IND_SW_CD_PP_CTLSsub -.- E1
    N_IND_SW_CD_PP_Compressor -.- E2
    N_IND_SW_CD_PP_FurnaceMCC -.- E3
    N_IND_SW_CD_PP_FurnaceMCC ---|"Gi1/2"| E4
    N_IND_SW_CD_PP_FurnaceMCC ---|"Gi2/8 to Fa1/20"| E5
    N_IND_SW_CD_PP_HSHTFsub -.- E6
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
| [[IND-SW-CD-PP_CTLSsub]] | `Gi1/2` | `Gi1/1` | [[IND-SW-CD-PP_HSHTFsub]] | 1000baseX(FD) | seen from both ends | LLDP-only Fa1/8 to Gi1/1 |
| [[IND-SW-CD-PP_HSHTFsub]] | `Gi1/2` | `Te1/2` | [[IND-SW-CD-PP_Compressor]] | — | seen from both ends | LLDP-only Gi1/5 to Gi1/2; LLDP-only Te1/2 to Gi1/1 |
| [[IND-SW-CD-PP_Compressor]] | `Te1/1` | `Gi1/2` | [[IND-SW-CD-PP_FurnaceMCC]] | — | seen from both ends | LLDP-only Te1/2 to Gi1/2; LLDP-only Te1/1 to Gi1/10 |

## 4. How the switches connect

- **IND-SW-CD-PP_CTLSsub** (head) connects up to IND-SW-CD-CORE on `Gi1/1`.
- `IND-SW-CD-PP_CTLSsub` `Gi1/2` connects to `IND-SW-CD-PP_HSHTFsub` `Gi1/1`.
- `IND-SW-CD-PP_Compressor` `Te1/1` connects to `IND-SW-CD-PP_FurnaceMCC` `Gi1/2`.
- `IND-SW-CD-PP_HSHTFsub` `Gi1/2` connects to `IND-SW-CD-PP_Compressor` `Te1/2`.

## 5. Observations

- 5 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
