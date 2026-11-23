# IND-SW-CD-Sub6A

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_21_CD-Effluent_6A_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CD-Sub6A` |
| Management IP | 192.168.160.92 |
| Role in its network | Access |
| Switch hops from head | 1 |
| Hardware model | IE-3000-8TC (advertised by neighbours via CDP) |
| Firmware / IOS | 15.2(7)E3 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 9 up |
| Collection | success (Netmiko SSH, 6.30s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CD-Sub6A (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CD_Sub6A["IND-SW-CD-Sub6A<br/>192.168.160.92"]:::access
    N_IND_SW_CD_Effluent_6A["IND-SW-CD-Effluent_6A<br/>192.168.160.93"]:::access
    N_IND_SW_CD_Sub5MCC["IND-SW-CD_Sub5MCC<br/>192.168.160.96"]:::access
    N_IND_SW_CD_Sub6A_e0(["axis-b8a44f78a515"]):::enddev
    N_IND_SW_CD_Sub6A_e1(["axis-b8a44f78a507"]):::enddev
    N_IND_SW_CD_Sub6A_e2(["axis-b8a44f78a507"]):::enddev
    N_IND_SW_CD_Sub6A_e3(["axis-b8a44f66ba0b"]):::enddev
    N_IND_SW_CD_Sub6A_e4(["axis-b8a44f78a515"]):::enddev
    N_IND_SW_CD_Sub6A_unk(["4 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CD_Effluent_6A ---|"Gi1/1 to Gi1/1"| N_IND_SW_CD_Sub6A
    N_IND_SW_CD_Sub6A ---|"Gi1/2 to Gi1/1"| N_IND_SW_CD_Sub5MCC
    N_IND_SW_CD_Sub6A ---|"Fa1/5"| N_IND_SW_CD_Sub6A_e0
    N_IND_SW_CD_Sub6A ---|"Fa1/5"| N_IND_SW_CD_Sub6A_e1
    N_IND_SW_CD_Sub6A ---|"Fa1/6"| N_IND_SW_CD_Sub6A_e2
    N_IND_SW_CD_Sub6A ---|"Fa1/6"| N_IND_SW_CD_Sub6A_e3
    N_IND_SW_CD_Sub6A ---|"Fa1/7"| N_IND_SW_CD_Sub6A_e4
    N_IND_SW_CD_Sub6A -.- N_IND_SW_CD_Sub6A_unk
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
| `Gi1/1` | [[IND-SW-CD-Effluent_6A]] | `Gi1/1` | Parent / uplink | seen from both ends; source CDP/LLDP | LLDP-only record Gi1/1 to Gi1/2 (reported by IND-SW-CD-Sub6A) |
| `Gi1/2` | [[IND-SW-CD_Sub5MCC]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP/LLDP | LLDP-only record Fa1/7 to Gi1/1 (reported by IND-SW-CD-Sub6A) |

## 4. Connected end devices

| Port | Device | Type (from LLDP text) | Remote port | IP | LLDP description | Media |
|---|---|---|---|---|---|---|
| `Fa1/5` | axis-b8a44f78a515 | unclassified endpoint | eth0 | 192.168.162.23 | AXIS M3115-LVE Network Camera 10.11.85 | 100base-TX(FD), 100base-TX(HD) |
| `Fa1/5` | axis-b8a44f78a507 | unclassified endpoint | eth0 | 192.168.162.22 | Linux | — |
| `Fa1/6` | axis-b8a44f78a507 | unclassified endpoint | eth0 | 192.168.162.22 | AXIS M3115-LVE Network Camera 10.11.85 | 100base-TX(FD), 100base-TX(HD) |
| `Fa1/6` | axis-b8a44f66ba0b | unclassified endpoint | eth0 | 192.168.162.21 | Linux | 100base-TX(FD), 100base-TX(HD) |
| `Fa1/7` | axis-b8a44f78a515 | unclassified endpoint | eth0 | 192.168.162.23 | Linux | — |

**4 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/1-4.

## 5. Ports and VLANs

10 ports listed; 9 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | IND-CESMS | 5 | Fa1/1-4, Fa1/8 |
| 562 | IND-CCTV | 3 | Fa1/5-7 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 2 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
