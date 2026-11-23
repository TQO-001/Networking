# IND-SW-EDNL_ElectrciansWorkShop

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_04_EDNL_ElectrciansWorkShop_Provisional (head). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_ElectrciansWorkShop` |
| Management IP | 192.168.160.27 |
| Role in its network | Head |
| Switch hops from head | 0 |
| Hardware model | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports Cisco SG200-10FP (PID:SG200-10FP)-VSD: they disagree |
| Firmware / IOS | 12.2(58)SE2 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 6 up |
| Collection | success (Netmiko SSH, 4.65s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_ElectrciansWorkShop (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_ElectrciansWorkShop["IND-SW-EDNL_ElectrciansWorkShop<br/>192.168.160.27"]:::head
    N_IND_SW_EDNL_SubStationG["IND-SW-EDNL_SubStationG<br/>192.168.160.44"]:::access
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary"]:::boundary
    N_IND_SW_EDNL_ElectrciansWorkShop_s0["6899cdcc9b6d<br/>not collected"]:::unknown
    N_IND_SW_EDNL_ElectrciansWorkShop_unk(["3 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_ElectrciansWorkShop ---|"Gi1/1 to Gi1/2"| N_IND_SW_EDNL_SubStationG
    N_Unclassified_192_168_160_110 ---|"Twe1/0/10 to Gi1/2"| N_IND_SW_EDNL_ElectrciansWorkShop
    N_IND_SW_EDNL_ElectrciansWorkShop ---|"Fa1/4 to gi6"| N_IND_SW_EDNL_ElectrciansWorkShop_s0
    N_IND_SW_EDNL_ElectrciansWorkShop -.- N_IND_SW_EDNL_ElectrciansWorkShop_unk
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
| `Gi1/1` | [[IND-SW-EDNL_SubStationG]] | `Gi1/2` | Downstream or lateral | seen from both ends; source CDP/LLDP | — |
| `Gi1/2` | [[Unclassified-192.168.160.110]] (ind-Core1-MSR) | `Twe1/0/10` | Upstream boundary (core) | seen from both ends; source CDP/LLDP | — |

Neighbour switches that are **not in the collected inventory**:

| Local port | Neighbour | Remote port | IP | Description |
|---|---|---|---|---|
| `Fa1/4` | 6899cdcc9b6d | gi6 | 192.168.1.254 | Cisco SG200-10FP (PID:SG200-10FP)-VSD |

## 4. Connected end devices

No named end devices were reported by this switch.

**3 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/2-3, Fa1/6.

## 5. Ports and VLANs

10 ports listed; 6 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | VLAN0561 | 5 | Fa1/1-3, Fa1/6-7 |
| 562 | IND-CCTV | 2 | Fa1/4, Fa1/8 |
| 593 | Ignition | 1 | Fa1/5 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `Cisco SG200-10FP (PID:SG200-10FP)-VSD`, neighbours advertise `IE-3000-8TC`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Collect the neighbour switch(es) listed in section 3 that are not in the inventory.
