# IND-SW_CCL1OS4

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_03_CCL1DevRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW_CCL1OS4` |
| Management IP | 192.168.160.13 |
| Role in its network | Access |
| Switch hops from head | 2 |
| Hardware model | IE-3000-4TC (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree |
| Firmware / IOS | 15.0(2)EY3 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 6 reported, 3 up |
| Collection | success (Netmiko SSH, 4.59s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW_CCL1OS4 (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CCL1OS4["IND-SW_CCL1OS4<br/>192.168.160.13"]:::access
    N_IND_SW_CCL1_PLC_B["IND-SW-CCL1_PLC_B<br/>192.168.160.10"]:::access
    N_IND_SW_CCL1OS6["IND-SW_CCL1OS6<br/>192.168.160.15"]:::access
    N_IND_SW_CCL1OS4_unk(["2 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CCL1_PLC_B ---|"Fa2/1 to Gi1/1"| N_IND_SW_CCL1OS4
    N_IND_SW_CCL1OS4 -.->|"Gi1/2 to Gi1/1"| N_IND_SW_CCL1OS6
    N_IND_SW_CCL1OS4 -.- N_IND_SW_CCL1OS4_unk
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
| `Gi1/1` | [[IND-SW-CCL1_PLC_B]] | `Fa2/1` | Parent / uplink | seen from both ends; source CDP/LLDP | — |
| `Gi1/2` | [[IND-SW_CCL1OS6]] | `Gi1/1` | Downstream or lateral | seen from one end only (the other end not collected / not reporting); source LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**2 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/4, Gi1/2.

## 5. Ports and VLANs

6 ports listed; 3 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 501 | VLAN0501 | 4 | Fa1/1-4 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `IE-3000-8TC`, neighbours advertise `IE-3000-4TC`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Verify the links seen from one end only (section 3) on the other switch.
