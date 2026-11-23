# IND-SW-EDNL_S4SMCCRoomBottom

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_05_EDNL_S4SMCCRoomBottom_Provisional (head). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_S4SMCCRoomBottom` |
| Management IP | 192.168.160.29 |
| Role in its network | Head |
| Switch hops from head | 0 |
| Hardware model | WS-C2960X-24TS-L (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree |
| Firmware / IOS | 15.2(2)E3 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 29 reported, 12 up |
| Collection | success (Netmiko SSH, 4.18s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_S4SMCCRoomBottom (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_S4SMCCRoomBottom["IND-SW-EDNL_S4SMCCRoomBottom<br/>192.168.160.29"]:::head
    N_IND_SW_EDNL_S4GaugeCab["IND-SW-EDNL_S4GaugeCab<br/>192.168.160.32"]:::access
    N_IND_SW_EDNL_S4PulPit["IND-SW-EDNL_S4PulPit<br/>192.168.160.33"]:::access
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary"]:::boundary
    N_IND_SW_CD_MainServerRoom["IND-SW-CD_MainServerRoom<br/>192.168.160.74"]:::access
    N_IND_SW_EDNL_S4SMCCRoomBottom_unk(["8 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_S4SMCCRoomBottom ---|"Gi1/0/1 to Gi1/1"| N_IND_SW_EDNL_S4GaugeCab
    N_IND_SW_EDNL_S4SMCCRoomBottom ---|"Gi1/0/27 to Gi0/1"| N_IND_SW_EDNL_S4PulPit
    N_Unclassified_192_168_160_110 ---|"Twe2/0/3 to Gi1/0/25"| N_IND_SW_EDNL_S4SMCCRoomBottom
    N_IND_SW_EDNL_S4SMCCRoomBottom ---|"Gi1/0/3 to Gi1/1"| N_IND_SW_CD_MainServerRoom
    N_IND_SW_EDNL_S4SMCCRoomBottom -.- N_IND_SW_EDNL_S4SMCCRoomBottom_unk
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
| `Gi1/0/1` | [[IND-SW-EDNL_S4GaugeCab]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | LLDP-only record Fa1/1 to Gi1/0/1 (reported by IND-SW-EDNL_S4GaugeCab) |
| `Gi1/0/25` | [[Unclassified-192.168.160.110]] (ind-Core1-MSR) | `Twe2/0/3` | Upstream boundary (core) | seen from both ends; source CDP+CDP/LLDP | LLDP-only record Gi1/0/25 to Twe1/0/20 (reported by Unclassified-192.168.160.110) |
| `Gi1/0/27` | [[IND-SW-EDNL_S4PulPit]] | `Gi0/1` | Downstream or lateral | seen from both ends; source CDP | — |
| `Gi1/0/3` | [[IND-SW-CD_MainServerRoom]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**8 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/0/5, Gi1/0/11-12, Gi1/0/14, Gi1/0/16-17, Gi1/0/19-20.

## 5. Ports and VLANs

29 ports listed; 12 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 9 | Gi1/0/2, Gi1/0/4, Gi1/0/6, Gi1/0/8, Gi1/0/21-23, Gi1/0/26, Gi1/0/28 |
| 514 | s4network | 10 | Gi1/0/5, Gi1/0/7, Gi1/0/9-12, Gi1/0/17-20 |
| 561 | IND-CESMS | 1 | Gi1/0/16 |
| 588 | RG9 | 2 | Gi1/0/13, Gi1/0/15 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `IE-3000-8TC`, neighbours advertise `WS-C2960X-24TS-L`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 2 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
