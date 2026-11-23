# Topology and connections - Network_14_FS14MCC_Provisional

[Network index](00-index.md) · [[01-network_overview|Network overview]]

## 1. Upstream boundary

The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.

| Head switch | Head port | Upstream device | Upstream port | Evidence | Source | Conflicting observations |
|---|---|---|---|---|---|---|
| [[IND-SW_FS14MCC]] | `Te1/1/1` | ind-Core1-MSR (probable identity of 192.168.160.110) | `Twe2/0/2` | seen from both ends | CDP | LLDP-only: Gi1/0/9 to Twe2/0/2; LLDP-only: Te1/1/1 to Twe2/0/1 |

## 2. Topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary - not part of this network"]:::boundary
    N_IND_SW_FS14MCC["IND-SW_FS14MCC<br/>192.168.160.9"]:::head
    E1(["6 active port(s)<br/>device unknown"]):::unknown
    E2(["S7-1500                   6ES7 511"]):::enddev
    E3(["FS14-MAINT"]):::enddev
    E4(["pn-io"]):::enddev
    N_Unclassified_192_168_160_110 ---|"Twe2/0/2 to Te1/1/1"| N_IND_SW_FS14MCC
    N_IND_SW_FS14MCC -.- E1
    N_IND_SW_FS14MCC ---|"Gi1/0/1"| E2
    N_IND_SW_FS14MCC ---|"Gi1/0/16"| E3
    N_IND_SW_FS14MCC ---|"Te1/1/1"| E4
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

- **IND-SW_FS14MCC** (head) connects up to ind-Core1-MSR on `Te1/1/1`.

## 5. Observations

- 2 LLDP-only record(s) name different ports from CDP for the same switch pair. CDP is used above; the conflicting records are kept in the link tables. See [[02-network_boundary_method]].
