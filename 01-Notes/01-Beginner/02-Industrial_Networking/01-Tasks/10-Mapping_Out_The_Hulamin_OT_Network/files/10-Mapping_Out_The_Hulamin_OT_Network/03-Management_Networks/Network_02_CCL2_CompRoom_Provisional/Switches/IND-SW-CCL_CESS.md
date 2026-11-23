# IND-SW-CCL_CESS

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_02_CCL2_CompRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CCL_CESS` |
| Management IP | 192.168.160.23 |
| Role in its network | Access |
| Switch hops from head | 1 |
| Hardware model | IE-3300-8T2S (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-48TS-L: they disagree |
| Firmware / IOS | 16.12.1 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 18 reported, 11 up |
| Collection | success (Netmiko SSH, 4.35s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CCL_CESS (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CCL_CESS["IND-SW-CCL_CESS<br/>192.168.160.23"]:::access
    N_IND_SW_CCL2_CompRoom["IND-SW_CCL2_CompRoom<br/>192.168.160.22"]:::access
    N_IND_SW_EDNL_CCLServiceTunnel["IND-SW-EDNL_CCLServiceTunnel<br/>192.168.160.42"]:::access
    N_IND_SW_CCL_CESS_unk(["9 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CCL2_CompRoom ---|"Gi1/0/50 to Gi1/1"| N_IND_SW_CCL_CESS
    N_IND_SW_CCL_CESS ---|"Gi1/2 to Gi1/1"| N_IND_SW_EDNL_CCLServiceTunnel
    N_IND_SW_CCL_CESS -.- N_IND_SW_CCL_CESS_unk
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
| `Gi1/1` | [[IND-SW_CCL2_CompRoom]] | `Gi1/0/50` | Parent / uplink | seen from both ends; source CDP | — |
| `Gi1/2` | [[IND-SW-EDNL_CCLServiceTunnel]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**9 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/5, Gi1/7-10, Gi2/1, Gi2/4-6.

## 5. Ports and VLANs

18 ports listed; 11 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 501 | IND-CCL2Network | 1 | Gi1/10 |
| 563 | CCL-CES | 14 | Gi1/3-9, Gi2/2-8 |
| 590 | EDPowermeters | 1 | Gi2/1 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `WS-C2960X-48TS-L`, neighbours advertise `IE-3300-8T2S`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
