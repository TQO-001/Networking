# IND-SW-EDNL_SubStationB

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_09_EDNL_SubStationA_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_SubStationB` |
| Management IP | 192.168.160.40 |
| Role in its network | Access |
| Switch hops from head | 1 |
| Hardware model | IE-3000-8TC (SwitchScribe) |
| Firmware / IOS | 15.0(2)EY3 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 3 up |
| Collection | success (Netmiko SSH, 4.57s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_SubStationB (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_SubStationB["IND-SW-EDNL_SubStationB<br/>192.168.160.40"]:::access
    N_IND_SW_EDNL_SubStationA["IND-SW-EDNL_SubStationA<br/>192.168.160.39"]:::access
    N_IND_SW_EDNL_SubStationB_unk(["2 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_SubStationA ---|"Gi1/2 to Gi1/2"| N_IND_SW_EDNL_SubStationB
    N_IND_SW_EDNL_SubStationB -.- N_IND_SW_EDNL_SubStationB_unk
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
| `Gi1/2` | [[IND-SW-EDNL_SubStationA]] | `Gi1/2` | Parent / uplink | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**2 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/1-2.

## 5. Ports and VLANs

10 ports listed; 3 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 1 | Gi1/1 |
| 561 | CESMS | 7 | Fa1/1, Fa1/3-8 |
| 590 | EDPowermeters | 1 | Fa1/2 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
