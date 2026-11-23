# IND-SW-EDNL_SubStationM

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_04_EDNL_ElectrciansWorkShop_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_SubStationM` |
| Management IP | 192.168.160.69 |
| Role in its network | Access |
| Switch hops from head | 4 |
| Hardware model | IE-3000-8TC (SwitchScribe) |
| Firmware / IOS | 12.2(58)SE2 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 8 up |
| Collection | success (Netmiko SSH, 4.66s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_SubStationM (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_SubStationM["IND-SW-EDNL_SubStationM<br/>192.168.160.69"]:::access
    N_Unclassified_192_168_160_116["Unclassified-192.168.160.116<br/>192.168.160.116"]:::access
    N_IND_SW_EDNL_SubStationD["IND-SW-EDNL_SubStationD<br/>192.168.160.43"]:::access
    N_IND_SW_EDNL_SubStationM_unk(["6 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_SubStationM ---|"Gi1/1 to Gi1/2"| N_Unclassified_192_168_160_116
    N_IND_SW_EDNL_SubStationD ---|"Gi1/1 to Gi1/2"| N_IND_SW_EDNL_SubStationM
    N_IND_SW_EDNL_SubStationM -.- N_IND_SW_EDNL_SubStationM_unk
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
| `Gi1/1` | [[Unclassified-192.168.160.116]] | `Gi1/2` | Downstream or lateral | seen from both ends; source CDP | — |
| `Gi1/2` | [[IND-SW-EDNL_SubStationD]] | `Gi1/1` | Parent / uplink | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**6 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/2-7.

## 5. Ports and VLANs

10 ports listed; 8 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 541 | IND-Extrusions | 2 | Fa1/7-8 |
| 561 | VLAN0561 | 5 | Fa1/1-3, Fa1/5-6 |
| 590 | EDPowermeters | 1 | Fa1/4 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
