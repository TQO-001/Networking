# IND-SW-CD-PP_HSHTFsub

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_22_CD-PP_CTLSsub_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CD-PP_HSHTFsub` |
| Management IP | 192.168.160.79 |
| Role in its network | Access |
| Switch hops from head | 1 |
| Hardware model | IE-3000-8TC (SwitchScribe) |
| Firmware / IOS | 15.2(4)EA5 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 10 up |
| Collection | success (Netmiko SSH, 5.63s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CD-PP_HSHTFsub (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CD_PP_HSHTFsub["IND-SW-CD-PP_HSHTFsub<br/>192.168.160.79"]:::access
    N_IND_SW_CD_PP_Compressor["IND-SW-CD-PP_Compressor<br/>192.168.160.80"]:::access
    N_IND_SW_CD_PP_CTLSsub["IND-SW-CD-PP_CTLSsub<br/>192.168.160.78"]:::access
    N_IND_SW_CD_PP_HSHTFsub_unk(["8 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CD_PP_HSHTFsub ---|"Gi1/2 to Te1/2"| N_IND_SW_CD_PP_Compressor
    N_IND_SW_CD_PP_CTLSsub ---|"Gi1/2 to Gi1/1"| N_IND_SW_CD_PP_HSHTFsub
    N_IND_SW_CD_PP_HSHTFsub -.- N_IND_SW_CD_PP_HSHTFsub_unk
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
| `Gi1/1` | [[IND-SW-CD-PP_CTLSsub]] | `Gi1/2` | Parent / uplink | seen from both ends; source CDP+CDP/LLDP | LLDP-only record Fa1/8 to Gi1/1 (reported by IND-SW-CD-PP_CTLSsub) |
| `Gi1/2` | [[IND-SW-CD-PP_Compressor]] | `Te1/2` | Downstream or lateral | seen from both ends; source CDP | LLDP-only record Gi1/5 to Gi1/2 (reported by IND-SW-CD-PP_Compressor); LLDP-only record Te1/2 to Gi1/1 (reported by IND-SW-CD-PP_HSHTFsub) |

## 4. Connected end devices

No named end devices were reported by this switch.

**8 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/1-8.

## 5. Ports and VLANs

12 ports listed; 10 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | VLAN0561 | 2 | Fa1/2-3 |
| 578 | A19 | 2 | Fa1/7, active    Fa1/4 |
| 580 | Plate | 1 | Network              active    Fa1/8 |
| 590 | CDPowermeters | 3 | Fa1/1, Fa1/5-6 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 3 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
