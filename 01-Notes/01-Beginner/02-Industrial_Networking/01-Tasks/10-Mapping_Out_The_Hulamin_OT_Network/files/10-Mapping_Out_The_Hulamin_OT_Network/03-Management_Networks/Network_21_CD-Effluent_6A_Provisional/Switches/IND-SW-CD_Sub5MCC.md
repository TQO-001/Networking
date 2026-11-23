# IND-SW-CD_Sub5MCC

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_21_CD-Effluent_6A_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CD_Sub5MCC` |
| Management IP | 192.168.160.96 |
| Role in its network | Access |
| Switch hops from head | 2 |
| Hardware model | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports WS-C2960C-12PC-L: they disagree |
| Firmware / IOS | 15.2(7)E3 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 6 up |
| Collection | success (Netmiko SSH, 7.66s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CD_Sub5MCC (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CD_Sub5MCC["IND-SW-CD_Sub5MCC<br/>192.168.160.96"]:::access
    N_IND_SW_CD_Effluent_6A_Control["IND-SW-CD-Effluent_6A_Control<br/>192.168.160.94"]:::access
    N_IND_SW_CD_Sub6A["IND-SW-CD-Sub6A<br/>192.168.160.92"]:::access
    N_IND_SW_CD_Sub5MCC_unk(["4 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CD_Sub5MCC ---|"Gi1/2 to Gi0/2"| N_IND_SW_CD_Effluent_6A_Control
    N_IND_SW_CD_Sub6A ---|"Gi1/2 to Gi1/1"| N_IND_SW_CD_Sub5MCC
    N_IND_SW_CD_Sub5MCC -.- N_IND_SW_CD_Sub5MCC_unk
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
| `Gi1/1` | [[IND-SW-CD-Sub6A]] | `Gi1/2` | Parent / uplink | seen from both ends; source CDP/LLDP | LLDP-only record Fa1/7 to Gi1/1 (reported by IND-SW-CD-Sub6A) |
| `Gi1/2` | [[IND-SW-CD-Effluent_6A_Control]] | `Gi0/2` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**4 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/1-2, Fa1/5, Fa1/8.

## 5. Ports and VLANs

10 ports listed; 6 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | VLAN0561 | 6 | Fa1/1-3, Fa1/5-7 |
| 590 | Powermeters | 2 | Fa1/4, Fa1/8 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `WS-C2960C-12PC-L`, neighbours advertise `IE-3000-8TC`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 1 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
