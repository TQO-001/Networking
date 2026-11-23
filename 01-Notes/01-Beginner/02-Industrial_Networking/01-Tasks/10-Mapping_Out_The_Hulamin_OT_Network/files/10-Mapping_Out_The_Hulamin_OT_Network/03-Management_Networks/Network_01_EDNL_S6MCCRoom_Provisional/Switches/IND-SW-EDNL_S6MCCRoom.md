# IND-SW-EDNL_S6MCCRoom

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_01_EDNL_S6MCCRoom_Provisional (head). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_S6MCCRoom` |
| Management IP | 192.168.160.61 |
| Role in its network | Head |
| Switch hops from head | 0 |
| Hardware model | IE-3000-8TC (SwitchScribe) |
| Firmware / IOS | 15.2(4)EA5 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 2 up |
| Collection | success (Netmiko SSH, 5.01s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_S6MCCRoom (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_S6MCCRoom["IND-SW-EDNL_S6MCCRoom<br/>192.168.160.61"]:::head
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary"]:::boundary
    N_IND_SW_EDNL_SubStationK["IND-SW-EDNL_SubStationK<br/>192.168.160.62"]:::access
    N_Unclassified_192_168_160_110 ---|"Twe2/0/5 to Gi1/1"| N_IND_SW_EDNL_S6MCCRoom
    N_IND_SW_EDNL_S6MCCRoom ---|"Gi1/2 to Gi1/1"| N_IND_SW_EDNL_SubStationK
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
| `Gi1/1` | [[Unclassified-192.168.160.110]] (ind-Core1-MSR) | `Twe2/0/5` | Upstream boundary (core) | seen from both ends; source CDP | LLDP-only record Gi1/2 to Twe2/0/5 (reported by IND-SW-EDNL_S6MCCRoom); LLDP-only record Gi1/1 to Twe1/0/1 (reported by Unclassified-192.168.160.110) |
| `Gi1/2` | [[IND-SW-EDNL_SubStationK]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

## 5. Ports and VLANs

10 ports listed; 2 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | CESMS | 8 | Fa1/1-8 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Review 2 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
