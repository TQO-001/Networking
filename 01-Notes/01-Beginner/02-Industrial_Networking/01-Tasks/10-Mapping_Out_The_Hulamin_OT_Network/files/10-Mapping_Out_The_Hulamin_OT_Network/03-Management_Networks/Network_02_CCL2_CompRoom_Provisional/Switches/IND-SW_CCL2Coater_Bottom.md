# IND-SW_CCL2Coater_Bottom

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_02_CCL2_CompRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW_CCL2Coater_Bottom` |
| Management IP | 192.168.160.18 |
| Role in its network | Access |
| Switch hops from head | 1 |
| Hardware model | IE-3300-8T2S (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-24TS-L: they disagree |
| Firmware / IOS | 16.12.1 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 6 up |
| Collection | success (Netmiko SSH, 4.31s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW_CCL2Coater_Bottom (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CCL2Coater_Bottom["IND-SW_CCL2Coater_Bottom<br/>192.168.160.18"]:::access
    N_IND_SW_CCL2_OS1["IND-SW_CCL2_OS1<br/>192.168.160.21"]:::access
    N_IND_SW_CCL2Coater_Bottom_unk(["5 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CCL2_OS1 ---|"Gi1/0/26 to Gi1/1"| N_IND_SW_CCL2Coater_Bottom
    N_IND_SW_CCL2Coater_Bottom -.- N_IND_SW_CCL2Coater_Bottom_unk
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
| `Gi1/1` | [[IND-SW_CCL2_OS1]] | `Gi1/0/26` | Parent / uplink | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**5 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/4-6, Gi1/8-9.

## 5. Ports and VLANs

10 ports listed; 6 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 1 | Gi1/2 |
| 501 | VLAN0501 | 5 | Gi1/4-8 |
| 593 | ignition | 3 | Gi1/3, Gi1/9-10 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `WS-C2960X-24TS-L`, neighbours advertise `IE-3300-8T2S`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
