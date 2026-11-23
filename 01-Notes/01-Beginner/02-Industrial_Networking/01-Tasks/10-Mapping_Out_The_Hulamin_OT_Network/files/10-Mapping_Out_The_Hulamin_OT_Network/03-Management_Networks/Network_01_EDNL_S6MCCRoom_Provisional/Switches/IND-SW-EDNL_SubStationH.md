# IND-SW-EDNL_SubStationH

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_01_EDNL_S6MCCRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_SubStationH` |
| Management IP | 192.168.160.63 |
| Role in its network | Access |
| Switch hops from head | 3 |
| Hardware model | IE-3000-8TC (SwitchScribe) |
| Firmware / IOS | 15.2(4)EA5 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 4 up |
| Collection | success (Netmiko SSH, 4.94s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_SubStationH (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_SubStationH["IND-SW-EDNL_SubStationH<br/>192.168.160.63"]:::access
    N_IND_SW_EDNL_SL6MCCRoom["IND-SW-EDNL_SL6MCCRoom<br/>192.168.160.64"]:::access
    N_IND_SW_EDNL_AnnealingFurnace["IND-SW-EDNL_AnnealingFurnace<br/>192.168.160.45"]:::access
    N_IND_SW_EDNL_SubStationH_unk(["2 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_SL6MCCRoom ---|"Gi1/2 to Gi1/2"| N_IND_SW_EDNL_SubStationH
    N_IND_SW_EDNL_SubStationH ---|"Gi1/1 to Gi1/0/26"| N_IND_SW_EDNL_AnnealingFurnace
    N_IND_SW_EDNL_SubStationH -.- N_IND_SW_EDNL_SubStationH_unk
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
| `Gi1/1` | [[IND-SW-EDNL_AnnealingFurnace]] | `Gi1/0/26` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |
| `Gi1/2` | [[IND-SW-EDNL_SL6MCCRoom]] | `Gi1/2` | Parent / uplink | seen from both ends; source CDP | LLDP-only record Gi1/2 to Gi1/1 (reported by IND-SW-EDNL_SubStationH); LLDP-only record Fa1/4 to Gi1/2 (reported by IND-SW-EDNL_SL6MCCRoom) |

## 4. Connected end devices

No named end devices were reported by this switch.

**2 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/3-4.

## 5. Ports and VLANs

10 ports listed; 4 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | CESMS | 7 | Fa1/1-3, Fa1/5-8 |
| 590 | Power_Meters | 1 | Fa1/4 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 2 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
