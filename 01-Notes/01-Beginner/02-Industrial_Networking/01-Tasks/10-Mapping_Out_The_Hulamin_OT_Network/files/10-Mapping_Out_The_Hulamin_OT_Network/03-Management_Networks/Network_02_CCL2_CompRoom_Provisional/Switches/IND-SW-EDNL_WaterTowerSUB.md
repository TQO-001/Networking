# IND-SW-EDNL_WaterTowerSUB

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_02_CCL2_CompRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_WaterTowerSUB` |
| Management IP | 192.168.160.49 |
| Role in its network | Access |
| Switch hops from head | 4 |
| Hardware model | IE-3000-8TC (SwitchScribe) |
| Firmware / IOS | 15.2(7)E2 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 8 up |
| Collection | success (Netmiko SSH, 7.04s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_WaterTowerSUB (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_WaterTowerSUB["IND-SW-EDNL_WaterTowerSUB<br/>192.168.160.49"]:::access
    N_IND_SW_EDNL_CCLCNGGAS["IND-SW-EDNL_CCLCNGGAS<br/>192.168.160.48"]:::access
    N_IND_SW_EDNL_WaterTowerSUB_e0(["axis-b8a44f59a3e9"]):::enddev
    N_IND_SW_EDNL_WaterTowerSUB_e1(["axis-b8a44f59a3e9"]):::enddev
    N_IND_SW_EDNL_WaterTowerSUB_e2(["axis-b8a44f78a4e4"]):::enddev
    N_IND_SW_EDNL_WaterTowerSUB_e3(["axis-b8a44f78a4e4"]):::enddev
    N_IND_SW_EDNL_WaterTowerSUB_e4(["axis-b8a44f7df417"]):::enddev
    N_IND_SW_EDNL_WaterTowerSUB_unk(["4 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_CCLCNGGAS ---|"Gi1/2 to Gi1/1"| N_IND_SW_EDNL_WaterTowerSUB
    N_IND_SW_EDNL_WaterTowerSUB ---|"Fa1/5"| N_IND_SW_EDNL_WaterTowerSUB_e0
    N_IND_SW_EDNL_WaterTowerSUB ---|"Fa1/6"| N_IND_SW_EDNL_WaterTowerSUB_e1
    N_IND_SW_EDNL_WaterTowerSUB ---|"Fa1/6"| N_IND_SW_EDNL_WaterTowerSUB_e2
    N_IND_SW_EDNL_WaterTowerSUB ---|"Fa1/7"| N_IND_SW_EDNL_WaterTowerSUB_e3
    N_IND_SW_EDNL_WaterTowerSUB ---|"Fa1/7"| N_IND_SW_EDNL_WaterTowerSUB_e4
    N_IND_SW_EDNL_WaterTowerSUB -.- N_IND_SW_EDNL_WaterTowerSUB_unk
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
| `Gi1/1` | [[IND-SW-EDNL_CCLCNGGAS]] | `Gi1/2` | Parent / uplink | seen from both ends; source CDP | LLDP-only record Gi1/2 to Fa1/5 (reported by IND-SW-EDNL_WaterTowerSUB); LLDP-only record Gi1/1 to Gi1/1 (reported by IND-SW-EDNL_CCLCNGGAS) |

## 4. Connected end devices

| Port | Device | Type (from LLDP text) | Remote port | IP | LLDP description | Media |
|---|---|---|---|---|---|---|
| `Fa1/5` | axis-b8a44f59a3e9 | unclassified endpoint | eth0 | 192.168.162.25 | Linux | — |
| `Fa1/6` | axis-b8a44f59a3e9 | unclassified endpoint | eth0 | 192.168.162.25 | AXIS M2025-LE Network Camera 9.80.47 | MAU type - not advertised |
| `Fa1/6` | axis-b8a44f78a4e4 | unclassified endpoint | eth0 | 192.168.162.26 | Linux | — |
| `Fa1/7` | axis-b8a44f78a4e4 | unclassified endpoint | eth0 | 192.168.162.26 | AXIS M3115-LVE Network Camera 10.11.85 | MAU type - not advertised |
| `Fa1/7` | axis-b8a44f7df417 | unclassified endpoint | eth0 | 192.168.162.27 | Linux | MAU type - not advertised |

**4 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/1-4.

## 5. Ports and VLANs

10 ports listed; 8 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 1 | Gi1/2 |
| 561 | VLAN0561 | 4 | Fa1/1-2, Fa1/4, Fa1/8 |
| 562 | IND-CCTV | 3 | Fa1/5-7 |
| 590 | VLAN0590 | 1 | Fa1/3 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 2 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
