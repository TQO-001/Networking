# IND-SW-EDNL_CompHouse4

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_01_EDNL_S6MCCRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_CompHouse4` |
| Management IP | 192.168.160.7 |
| Role in its network | Access |
| Switch hops from head | 5 |
| Hardware model | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-24TS-L: they disagree |
| Firmware / IOS | 15.2(7)E2 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 9 up |
| Collection | success (Netmiko SSH, 6.10s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_CompHouse4 (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_CompHouse4["IND-SW-EDNL_CompHouse4<br/>192.168.160.7"]:::access
    N_IND_SW_EDNL_CompHouse2and3["IND-SW-EDNL_CompHouse2and3<br/>192.168.160.6"]:::access
    N_IND_SW_EDNL_AnnealingFurnace["IND-SW-EDNL_AnnealingFurnace<br/>192.168.160.45"]:::access
    N_IND_SW_EDNL_CompHouse4_unk(["7 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_CompHouse4 ---|"Gi1/2 to Gi1/0/26"| N_IND_SW_EDNL_CompHouse2and3
    N_IND_SW_EDNL_AnnealingFurnace ---|"Gi1/0/25 to Gi1/1"| N_IND_SW_EDNL_CompHouse4
    N_IND_SW_EDNL_CompHouse4 -.- N_IND_SW_EDNL_CompHouse4_unk
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
| `Gi1/1` | [[IND-SW-EDNL_AnnealingFurnace]] | `Gi1/0/25` | Parent / uplink | seen from both ends; source CDP/LLDP | LLDP-only record Trunk to IND-SW-EDNL_Subk to Gi1/2 (reported by IND-SW-EDNL_CompHouse4) |
| `Gi1/2` | [[IND-SW-EDNL_CompHouse2and3]] | `Gi1/0/26` | Downstream or lateral | seen from both ends; source CDP+CDP/LLDP | LLDP-only record Gi1/0/25 to Trunk to IND-SW_Core1 (reported by IND-SW-EDNL_CompHouse2and3) |

## 4. Connected end devices

No named end devices were reported by this switch.

**7 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/1-7.

## 5. Ports and VLANs

10 ports listed; 9 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | VLAN0561 | 5 | Fa1/3-4, Fa1/6-8 |
| 590 | EDPowerMeterMngt | 3 | Fa1/1-2, Fa1/5 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `WS-C2960X-24TS-L`, neighbours advertise `IE-3000-8TC`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 2 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
