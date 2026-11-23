# IND-SW-CCL1PLCC

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_03_CCL1DevRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CCL1PLCC` |
| Management IP | 192.168.160.11 |
| Role in its network | Access |
| Switch hops from head | 1 |
| Hardware model | IE-3000-8TC (SwitchScribe) |
| Firmware / IOS | 15.0(2)EY3 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 18 reported, 9 up |
| Collection | success (Netmiko SSH, 4.77s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CCL1PLCC (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CCL1PLCC["IND-SW-CCL1PLCC<br/>192.168.160.11"]:::access
    N_IND_SW_CCL1OS9["IND-SW_CCL1OS9<br/>192.168.160.16"]:::access
    N_IND_SW_CCL1DevRoom["IND-SW-CCL1DevRoom<br/>192.168.160.12"]:::access
    N_IND_SW_CCL1_PLC_B["IND-SW-CCL1_PLC_B<br/>192.168.160.10"]:::access
    N_IND_SW_CCL1PLCC_unk(["6 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CCL1PLCC ---|"Fa2/1 to Gi1/1"| N_IND_SW_CCL1OS9
    N_IND_SW_CCL1DevRoom ---|"Gi1/0/28 to Gi1/1"| N_IND_SW_CCL1PLCC
    N_IND_SW_CCL1PLCC ---|"Gi1/2 to Gi1/1"| N_IND_SW_CCL1_PLC_B
    N_IND_SW_CCL1PLCC -.- N_IND_SW_CCL1PLCC_unk
    classDef boundary fill:#f3f3f3,stroke:#666,stroke-dasharray:5 5;
    classDef head fill:#d6e9ff,stroke:#1f5fa8,stroke-width:2px;
    classDef access fill:#ffffff,stroke:#555;
    classDef enddev fill:#fff7d6,stroke:#b58900;
    classDef unknown fill:#fde2e2,stroke:#b00020;
```

Diagram key: solid line = link reported from **both** ends; dotted arrow = reported from **one** end only. Dashed box = upstream boundary (not part of this network). Label = port on the upper device, then port on the lower device.

## 3. Switch-to-switch connections

| Local port | Remote switch | Remote port | Relationship | Evidence | Conflicting observations |
|---|---|---|---|---|---|
| `Fa2/1` | [[IND-SW_CCL1OS9]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |
| `Gi1/1` | [[IND-SW-CCL1DevRoom]] | `Gi1/0/28` | Parent / uplink | seen from both ends; source CDP/LLDP | — |
| `Gi1/2` | [[IND-SW-CCL1_PLC_B]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**6 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/2-4, Fa1/6-8.

## 5. Ports and VLANs

18 ports listed; 9 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 7 | Fa2/2-8 |
| 501 | VLAN0501 | 7 | Fa1/1-4, Fa1/6-8 |
| 561 | VLAN0561 | 1 | Fa1/5 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
