# IND-SW-EDNL_SubStationE

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_01_EDNL_S6MCCRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_SubStationE` |
| Management IP | 192.168.160.60 |
| Role in its network | Access |
| Switch hops from head | 7 |
| Hardware model | IE-3000-8TC (SwitchScribe) |
| Firmware / IOS | 15.2(4)EA5 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 3 up |
| Collection | success (Netmiko SSH, 4.94s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_SubStationE (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_SubStationE["IND-SW-EDNL_SubStationE<br/>192.168.160.60"]:::access
    N_IND_SW_EDNL_CompHouse2and3["IND-SW-EDNL_CompHouse2and3<br/>192.168.160.6"]:::access
    N_Unclassified_192_168_160_4["Unclassified-192.168.160.4<br/>192.168.160.4"]:::access
    N_IND_SW_EDNL_SubStationE_unk(["1 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_CompHouse2and3 ---|"Gi1/0/25 to Gi1/1"| N_IND_SW_EDNL_SubStationE
    N_IND_SW_EDNL_SubStationE ---|"Gi1/2 to Gi1/1"| N_Unclassified_192_168_160_4
    N_IND_SW_EDNL_SubStationE -.- N_IND_SW_EDNL_SubStationE_unk
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
| `Gi1/1` | [[IND-SW-EDNL_CompHouse2and3]] | `Gi1/0/25` | Parent / uplink | seen from both ends; source CDP/LLDP | — |
| `Gi1/2` | [[Unclassified-192.168.160.4]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | LLDP-only record Gi1/1 to Gi1/1 (reported by IND-SW-EDNL_SubStationE) |

## 4. Connected end devices

No named end devices were reported by this switch.

**1 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/1.

## 5. Ports and VLANs

10 ports listed; 3 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | IND-CESMSNetwork | 8 | Fa1/1-8 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 1 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
