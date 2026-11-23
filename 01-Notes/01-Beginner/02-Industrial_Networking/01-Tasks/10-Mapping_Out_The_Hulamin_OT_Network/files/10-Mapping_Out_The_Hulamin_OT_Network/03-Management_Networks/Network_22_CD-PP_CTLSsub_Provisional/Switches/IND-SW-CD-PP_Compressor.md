# IND-SW-CD-PP_Compressor

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_22_CD-PP_CTLSsub_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CD-PP_Compressor` |
| Management IP | 192.168.160.80 |
| Role in its network | Access |
| Switch hops from head | 2 |
| Hardware model | IE-3300-8T2X (advertised by neighbours via CDP). SwitchScribe reports IE-3300-8T2S: they disagree |
| Firmware / IOS | 17.12.4 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 7 up |
| Collection | success (Netmiko SSH, 4.50s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CD-PP_Compressor (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CD_PP_Compressor["IND-SW-CD-PP_Compressor<br/>192.168.160.80"]:::access
    N_IND_SW_CD_PP_HSHTFsub["IND-SW-CD-PP_HSHTFsub<br/>192.168.160.79"]:::access
    N_IND_SW_CD_PP_FurnaceMCC["IND-SW-CD-PP_FurnaceMCC<br/>192.168.160.81"]:::access
    N_IND_SW_CD_PP_Compressor_unk(["4 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CD_PP_HSHTFsub ---|"Gi1/2 to Te1/2"| N_IND_SW_CD_PP_Compressor
    N_IND_SW_CD_PP_Compressor ---|"Te1/1 to Gi1/2"| N_IND_SW_CD_PP_FurnaceMCC
    N_IND_SW_CD_PP_Compressor -.- N_IND_SW_CD_PP_Compressor_unk
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
| `Te1/1` | [[IND-SW-CD-PP_FurnaceMCC]] | `Gi1/2` | Downstream or lateral | seen from both ends; source CDP+CDP/LLDP | LLDP-only record Te1/2 to Gi1/2 (reported by IND-SW-CD-PP_Compressor); LLDP-only record Te1/1 to Gi1/10 (reported by IND-SW-CD-PP_FurnaceMCC) |
| `Te1/2` | [[IND-SW-CD-PP_HSHTFsub]] | `Gi1/2` | Parent / uplink | seen from both ends; source CDP | LLDP-only record Gi1/5 to Gi1/2 (reported by IND-SW-CD-PP_Compressor); LLDP-only record Te1/2 to Gi1/1 (reported by IND-SW-CD-PP_HSHTFsub) |

## 4. Connected end devices

No named end devices were reported by this switch.

**4 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/3-4, Gi1/6-7.

## 5. Ports and VLANs

11 ports listed; 7 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 4 | Ap1/1, Gi1/8-10 |
| 561 | cesms | 2 | Gi1/3, Gi1/7 |
| 580 | Plate-Plant-Network | 1 | Gi1/5 |
| 590 | Poweremeters | 2 | Gi1/4, Gi1/6 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `IE-3300-8T2S`, neighbours advertise `IE-3300-8T2X`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 4 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
