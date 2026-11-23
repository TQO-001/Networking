# IND-SW-EDNL_CompHouse2and3

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_01_EDNL_S6MCCRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_CompHouse2and3` |
| Management IP | 192.168.160.6 |
| Role in its network | Access |
| Switch hops from head | 6 |
| Hardware model | WS-C2960X-24PD-L (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree |
| Firmware / IOS | 15.2(7)E2 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 29 reported, 23 up |
| Collection | success (Netmiko SSH, 4.63s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_CompHouse2and3 (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_CompHouse2and3["IND-SW-EDNL_CompHouse2and3<br/>192.168.160.6"]:::access
    N_IND_SW_EDNL_CompHouse4["IND-SW-EDNL_CompHouse4<br/>192.168.160.7"]:::access
    N_IND_SW_EDNL_CompHouse2_3_2ndSW["IND-SW-EDNL_CompHouse2&3_2ndSW<br/>192.168.160.95"]:::access
    N_IND_SW_EDNL_SubStationE["IND-SW-EDNL_SubStationE<br/>192.168.160.60"]:::access
    N_IND_SW_EDNL_CompHouse2and3_unk(["20 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_CompHouse4 ---|"Gi1/2 to Gi1/0/26"| N_IND_SW_EDNL_CompHouse2and3
    N_IND_SW_EDNL_CompHouse2and3 ---|"Gi1/0/24 to Gi0/8"| N_IND_SW_EDNL_CompHouse2_3_2ndSW
    N_IND_SW_EDNL_CompHouse2and3 ---|"Gi1/0/25 to Gi1/1"| N_IND_SW_EDNL_SubStationE
    N_IND_SW_EDNL_CompHouse2and3 -.- N_IND_SW_EDNL_CompHouse2and3_unk
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
| `Gi1/0/24` | [[IND-SW-EDNL_CompHouse2&3_2ndSW]] | `Gi0/8` | Downstream or lateral | seen from both ends; source CDP/LLDP | LLDP-only record Gi0/8 to Gi1/0/26 (reported by IND-SW-EDNL_CompHouse2and3) |
| `Gi1/0/25` | [[IND-SW-EDNL_SubStationE]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |
| `Gi1/0/26` | [[IND-SW-EDNL_CompHouse4]] | `Gi1/2` | Parent / uplink | seen from both ends; source CDP+CDP/LLDP | LLDP-only record Gi1/0/25 to Trunk to IND-SW_Core1 (reported by IND-SW-EDNL_CompHouse2and3) |

## 4. Connected end devices

No named end devices were reported by this switch.

**20 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/0/2-3, Gi1/0/5-10, Gi1/0/12-23.

## 5. Ports and VLANs

29 ports listed; 23 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | VLAN0561 | 7 | Gi1/0/4, Gi1/0/10-12, Gi1/0/14, Gi1/0/16, Gi1/0/22 |
| 590 | EDPowerMeters | 16 | Gi1/0/1-3, Gi1/0/5-9, Gi1/0/13, Gi1/0/15, Gi1/0/17-21, Gi1/0/23 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `IE-3000-8TC`, neighbours advertise `WS-C2960X-24PD-L`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 2 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
