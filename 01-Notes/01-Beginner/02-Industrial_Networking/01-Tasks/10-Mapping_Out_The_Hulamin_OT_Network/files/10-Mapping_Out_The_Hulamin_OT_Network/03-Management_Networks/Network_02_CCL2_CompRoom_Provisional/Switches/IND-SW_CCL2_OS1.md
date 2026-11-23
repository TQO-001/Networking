# IND-SW_CCL2_OS1

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_02_CCL2_CompRoom_Provisional (head). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW_CCL2_OS1` |
| Management IP | 192.168.160.21 |
| Role in its network | Head |
| Switch hops from head | 0 |
| Hardware model | WS-C2960X-24TS-L (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-48TS-L: they disagree |
| Firmware / IOS | 15.0(2)EX5 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 29 reported, 12 up |
| Collection | success (Netmiko SSH, 4.36s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW_CCL2_OS1 (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CCL2_OS1["IND-SW_CCL2_OS1<br/>192.168.160.21"]:::head
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary"]:::boundary
    N_IND_SW_CCL2Coater_Bottom["IND-SW_CCL2Coater_Bottom<br/>192.168.160.18"]:::access
    N_IND_SW_CCL2_CompRoom["IND-SW_CCL2_CompRoom<br/>192.168.160.22"]:::access
    N_IND_SW_CCL2_OS1_unk(["9 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_110 ---|"Twe2/0/12 to Gi1/0/25"| N_IND_SW_CCL2_OS1
    N_IND_SW_CCL2_OS1 ---|"Gi1/0/26 to Gi1/1"| N_IND_SW_CCL2Coater_Bottom
    N_IND_SW_CCL2_OS1 ---|"Gi1/0/27 to Gi1/0/51"| N_IND_SW_CCL2_CompRoom
    N_IND_SW_CCL2_OS1 -.- N_IND_SW_CCL2_OS1_unk
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
| `Gi1/0/25` | [[Unclassified-192.168.160.110]] (ind-Core1-MSR) | `Twe2/0/12` | Upstream boundary (core) | seen from both ends; source CDP+CDP/LLDP | LLDP-only record Gi1/0/25 to Twe2/0/19 (reported by Unclassified-192.168.160.110) |
| `Gi1/0/26` | [[IND-SW_CCL2Coater_Bottom]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |
| `Gi1/0/27` | [[IND-SW_CCL2_CompRoom]] | `Gi1/0/51` | Lateral link between two heads | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**9 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/0/2, Gi1/0/4-7, Gi1/0/10-11, Gi1/0/14-15.

## 5. Ports and VLANs

29 ports listed; 12 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 1 | Gi1/0/28 |
| 501 | VLAN0501 | 18 | Gi1/0/1-7, Gi1/0/9, Gi1/0/11-14, Gi1/0/19-24 |
| 561 | IND-CESMS | 1 | Gi1/0/8 |
| 593 | Ignition | 5 | Gi1/0/10, Gi1/0/15-18 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `WS-C2960X-48TS-L`, neighbours advertise `WS-C2960X-24TS-L`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 1 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
