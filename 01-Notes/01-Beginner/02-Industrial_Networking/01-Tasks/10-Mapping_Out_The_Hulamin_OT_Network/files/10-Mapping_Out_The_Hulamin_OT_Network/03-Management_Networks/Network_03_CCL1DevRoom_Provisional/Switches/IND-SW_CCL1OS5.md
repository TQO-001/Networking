# IND-SW_CCL1OS5

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_03_CCL1DevRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW_CCL1OS5` |
| Management IP | 192.168.160.14 |
| Role in its network | Access |
| Switch hops from head | 3 |
| Hardware model | IE-3000-4TC (SwitchScribe) |
| Firmware / IOS | 15.0(2)EY3 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 6 reported, 3 up |
| Collection | success (Netmiko SSH, 4.59s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW_CCL1OS5 (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CCL1OS5["IND-SW_CCL1OS5<br/>192.168.160.14"]:::access
    N_IND_SW_CCL1OS9["IND-SW_CCL1OS9<br/>192.168.160.16"]:::access
    N_IND_SW_CCL1OS5_unk(["2 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CCL1OS9 ---|"Gi1/2 to Gi1/1"| N_IND_SW_CCL1OS5
    N_IND_SW_CCL1OS5 -.- N_IND_SW_CCL1OS5_unk
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
| `Gi1/1` | [[IND-SW_CCL1OS9]] | `Gi1/2` | Parent / uplink | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**2 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/2, Fa1/4.

## 5. Ports and VLANs

6 ports listed; 3 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 1 | Gi1/2 |
| 501 | VLAN0501 | 4 | Fa1/1-4 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
