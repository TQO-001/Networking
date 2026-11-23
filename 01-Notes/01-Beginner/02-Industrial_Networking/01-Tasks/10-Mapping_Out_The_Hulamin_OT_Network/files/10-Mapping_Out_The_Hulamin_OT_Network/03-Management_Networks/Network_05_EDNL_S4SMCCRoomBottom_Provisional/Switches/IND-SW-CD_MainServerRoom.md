# IND-SW-CD_MainServerRoom

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_05_EDNL_S4SMCCRoomBottom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CD_MainServerRoom` |
| Management IP | 192.168.160.74 |
| Role in its network | Access |
| Switch hops from head | 1 |
| Hardware model | IE-5000-16S12P (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-24TS-L: they disagree |
| Firmware / IOS | 15.2(6)E1 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 28 reported, 1 up |
| Collection | success (Netmiko SSH, 4.27s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CD_MainServerRoom (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CD_MainServerRoom["IND-SW-CD_MainServerRoom<br/>192.168.160.74"]:::access
    N_IND_SW_EDNL_S4SMCCRoomBottom["IND-SW-EDNL_S4SMCCRoomBottom<br/>192.168.160.29"]:::access
    N_IND_SW_EDNL_S4SMCCRoomBottom ---|"Gi1/0/3 to Gi1/1"| N_IND_SW_CD_MainServerRoom
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
| `Gi1/1` | [[IND-SW-EDNL_S4SMCCRoomBottom]] | `Gi1/0/3` | Parent / uplink | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

## 5. Ports and VLANs

30 ports listed; 1 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 15 | Gi1/13-26, Gi1/28 |
| 561 | CESMS | 11 | Gi1/2-12 |
| 564 | CDHotMill_L1 | 1 | Gi1/27 |
| 578 | A19 | 1 | active |
| 580 | Plate | 1 | Network              active |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `WS-C2960X-24TS-L`, neighbours advertise `IE-5000-16S12P`. The advertised value matches the interface names where checked.
