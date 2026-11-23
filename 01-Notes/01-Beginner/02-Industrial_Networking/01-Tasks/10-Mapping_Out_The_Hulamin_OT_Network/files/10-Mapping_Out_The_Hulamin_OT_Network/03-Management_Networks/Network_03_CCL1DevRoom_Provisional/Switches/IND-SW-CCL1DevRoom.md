# IND-SW-CCL1DevRoom

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_03_CCL1DevRoom_Provisional (head). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CCL1DevRoom` |
| Management IP | 192.168.160.12 |
| Role in its network | Head |
| Switch hops from head | 0 |
| Hardware model | WS-C2960X-24TS-L (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree |
| Firmware / IOS | 15.2(2)E3 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 29 reported, 9 up |
| Collection | success (Netmiko SSH, 4.16s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CCL1DevRoom (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CCL1DevRoom["IND-SW-CCL1DevRoom<br/>192.168.160.12"]:::head
    N_IND_SW_CCL1PLCC["IND-SW-CCL1PLCC<br/>192.168.160.11"]:::access
    N_IND_SW_CCL1_PLC_B["IND-SW-CCL1_PLC_B<br/>192.168.160.10"]:::access
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary"]:::boundary
    N_IND_SW_CCL1DevRoom_unk(["6 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CCL1DevRoom ---|"Gi1/0/28 to Gi1/1"| N_IND_SW_CCL1PLCC
    N_IND_SW_CCL1DevRoom ---|"Gi1/0/26 to Gi1/2"| N_IND_SW_CCL1_PLC_B
    N_Unclassified_192_168_160_110 ---|"Twe2/0/14 to Gi1/0/27"| N_IND_SW_CCL1DevRoom
    N_IND_SW_CCL1DevRoom -.- N_IND_SW_CCL1DevRoom_unk
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
| `Gi1/0/26` | [[IND-SW-CCL1_PLC_B]] | `Gi1/2` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |
| `Gi1/0/27` | [[Unclassified-192.168.160.110]] (ind-Core1-MSR) | `Twe2/0/14` | Upstream boundary (core) | seen from both ends; source CDP+CDP/LLDP | LLDP-only record Gi1/0/27 to Twe1/0/11 (reported by Unclassified-192.168.160.110) |
| `Gi1/0/28` | [[IND-SW-CCL1PLCC]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**6 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/0/3, Gi1/0/9, Gi1/0/11, Gi1/0/13, Gi1/0/17-18.

## 5. Ports and VLANs

29 ports listed; 9 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 1 | Gi1/0/25 |
| 501 | VLAN0501 | 24 | Gi1/0/1-24 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `IE-3000-8TC`, neighbours advertise `WS-C2960X-24TS-L`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 1 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
