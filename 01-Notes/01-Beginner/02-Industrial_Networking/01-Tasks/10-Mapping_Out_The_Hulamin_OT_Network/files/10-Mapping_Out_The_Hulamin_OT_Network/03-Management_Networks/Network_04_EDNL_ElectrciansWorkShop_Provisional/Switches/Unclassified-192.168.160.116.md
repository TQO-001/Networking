# Unclassified-192.168.160.116

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_04_EDNL_ElectrciansWorkShop_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `Unclassified-192.168.160.116` |
| Management IP | 192.168.160.116 |
| Role in its network | Access |
| Switch hops from head | 5 |
| Hardware model | IE-3200-8T2S (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree |
| Firmware / IOS | 16.12.3 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 5 up |
| Collection | success (Netmiko SSH, 4.34s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[Unclassified-192.168.160.116 (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_116["Unclassified-192.168.160.116<br/>192.168.160.116"]:::access
    N_IND_SW_EDNL_SubStationM["IND-SW-EDNL_SubStationM<br/>192.168.160.69"]:::access
    N_Unclassified_192_168_160_116_unk(["4 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_SubStationM ---|"Gi1/1 to Gi1/2"| N_Unclassified_192_168_160_116
    N_Unclassified_192_168_160_116 -.- N_Unclassified_192_168_160_116_unk
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
| `Gi1/2` | [[IND-SW-EDNL_SubStationM]] | `Gi1/1` | Parent / uplink | seen from both ends; source CDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**4 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/4, Gi1/7-9.

## 5. Ports and VLANs

10 ports listed; 5 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 1 | Gi1/1 |
| 561 | cesms | 4 | Gi1/7-10 |
| 590 | EDPowermeters | 4 | Gi1/3-6 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `IE-3000-8TC`, neighbours advertise `IE-3200-8T2S`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
