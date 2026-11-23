# IND-SW-EDNL_CCLServiceTunnel

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_02_CCL2_CompRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_CCLServiceTunnel` |
| Management IP | 192.168.160.42 |
| Role in its network | Access |
| Switch hops from head | 2 |
| Hardware model | IE-3000-8TC (SwitchScribe) |
| Firmware / IOS | 15.2(7)E2 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 4 up |
| Collection | success (Netmiko SSH, 6.16s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_CCLServiceTunnel (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_CCLServiceTunnel["IND-SW-EDNL_CCLServiceTunnel<br/>192.168.160.42"]:::access
    N_IND_SW_CCL_CESS["IND-SW-CCL_CESS<br/>192.168.160.23"]:::access
    N_IND_SW_EDNL_CCLCNGGAS["IND-SW-EDNL_CCLCNGGAS<br/>192.168.160.48"]:::access
    N_IND_SW_EDNL_CCLServiceTunnel_unk(["2 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CCL_CESS ---|"Gi1/2 to Gi1/1"| N_IND_SW_EDNL_CCLServiceTunnel
    N_IND_SW_EDNL_CCLServiceTunnel ---|"Gi1/2 to Gi1/1"| N_IND_SW_EDNL_CCLCNGGAS
    N_IND_SW_EDNL_CCLServiceTunnel -.- N_IND_SW_EDNL_CCLServiceTunnel_unk
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
| `Gi1/1` | [[IND-SW-CCL_CESS]] | `Gi1/2` | Parent / uplink | seen from both ends; source CDP | — |
| `Gi1/2` | [[IND-SW-EDNL_CCLCNGGAS]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**2 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/1, Fa1/3.

## 5. Ports and VLANs

10 ports listed; 4 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | CESMS | 8 | Fa1/1-8 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
