# IND-SW-CD-PP_CTLSsub

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_22_CD-PP_CTLSsub_Provisional (head). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CD-PP_CTLSsub` |
| Management IP | 192.168.160.78 |
| Role in its network | Head |
| Switch hops from head | 0 |
| Hardware model | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports C9500-48Y4C: they disagree |
| Firmware / IOS | 15.2(4)EA5 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 6 up |
| Collection | success (Netmiko SSH, 5.54s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CD-PP_CTLSsub (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CD_PP_CTLSsub["IND-SW-CD-PP_CTLSsub<br/>192.168.160.78"]:::head
    N_IND_SW_CD_PP_HSHTFsub["IND-SW-CD-PP_HSHTFsub<br/>192.168.160.79"]:::access
    N_Unclassified_192_168_160_107["IND-SW-CD-CORE<br/>192.168.160.107<br/>upstream boundary"]:::boundary
    N_IND_SW_CD_PP_CTLSsub_unk(["3 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CD_PP_CTLSsub ---|"Gi1/2 to Gi1/1"| N_IND_SW_CD_PP_HSHTFsub
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/20 to Gi1/1"| N_IND_SW_CD_PP_CTLSsub
    N_IND_SW_CD_PP_CTLSsub -.- N_IND_SW_CD_PP_CTLSsub_unk
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
| `Gi1/1` | [[Unclassified-192.168.160.107]] (IND-SW-CD-CORE) | `Twe2/0/20` | Upstream boundary (core) | seen from one end only (the other end not collected / not reporting); source CDP | — |
| `Gi1/2` | [[IND-SW-CD-PP_HSHTFsub]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP+CDP/LLDP | LLDP-only record Fa1/8 to Gi1/1 (reported by IND-SW-CD-PP_CTLSsub) |

## 4. Connected end devices

No named end devices were reported by this switch.

**3 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/2-4.

## 5. Ports and VLANs

12 ports listed; 6 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | VLAN0561 | 3 | Fa1/5-7 |
| 578 | A19 | 2 | Fa1/2, active    Fa1/1 |
| 580 | Plate | 2 | Fa1/8, Network              active    Fa1/3 |
| 590 | CDPowermeters | 1 | Fa1/4 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `C9500-48Y4C`, neighbours advertise `IE-3000-8TC`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Verify the links seen from one end only (section 3) on the other switch.
- [ ] Review 1 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
