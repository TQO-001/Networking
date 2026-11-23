# IND-SW-EDNL_CCLCNGGAS

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_02_CCL2_CompRoom_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-EDNL_CCLCNGGAS` |
| Management IP | 192.168.160.48 |
| Role in its network | Access |
| Switch hops from head | 3 |
| Hardware model | IE-3000-8TC (SwitchScribe) |
| Firmware / IOS | 15.2(7)E2 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 5 up |
| Collection | success (Netmiko SSH, 6.20s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-EDNL_CCLCNGGAS (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_EDNL_CCLCNGGAS["IND-SW-EDNL_CCLCNGGAS<br/>192.168.160.48"]:::access
    N_IND_SW_EDNL_CCLServiceTunnel["IND-SW-EDNL_CCLServiceTunnel<br/>192.168.160.42"]:::access
    N_IND_SW_EDNL_WaterTowerSUB["IND-SW-EDNL_WaterTowerSUB<br/>192.168.160.49"]:::access
    N_IND_SW_EDNL_CCLCNGGAS_e0(["SLCNG Edendale"]):::enddev
    N_IND_SW_EDNL_CCLCNGGAS_e1(["SLCNG Edendale"]):::enddev
    N_IND_SW_EDNL_CCLCNGGAS_unk(["2 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_EDNL_CCLServiceTunnel ---|"Gi1/2 to Gi1/1"| N_IND_SW_EDNL_CCLCNGGAS
    N_IND_SW_EDNL_CCLCNGGAS ---|"Gi1/2 to Gi1/1"| N_IND_SW_EDNL_WaterTowerSUB
    N_IND_SW_EDNL_CCLCNGGAS ---|"Fa1/8"| N_IND_SW_EDNL_CCLCNGGAS_e0
    N_IND_SW_EDNL_CCLCNGGAS ---|"Gi1/2"| N_IND_SW_EDNL_CCLCNGGAS_e1
    N_IND_SW_EDNL_CCLCNGGAS -.- N_IND_SW_EDNL_CCLCNGGAS_unk
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
| `Gi1/1` | [[IND-SW-EDNL_CCLServiceTunnel]] | `Gi1/2` | Parent / uplink | seen from both ends; source CDP/LLDP | — |
| `Gi1/2` | [[IND-SW-EDNL_WaterTowerSUB]] | `Gi1/1` | Downstream or lateral | seen from both ends; source CDP | LLDP-only record Gi1/2 to Fa1/5 (reported by IND-SW-EDNL_WaterTowerSUB); LLDP-only record Gi1/1 to Gi1/1 (reported by IND-SW-EDNL_CCLCNGGAS) |

## 4. Connected end devices

| Port | Device | Type (from LLDP text) | Remote port | IP | LLDP description | Media |
|---|---|---|---|---|---|---|
| `Fa1/8` | SLCNG Edendale | unclassified endpoint | Hulamin/ether6 | 192.168.173.2 | MikroTik | — |
| `Gi1/2` | SLCNG Edendale | unclassified endpoint | Hulamin/ether6 | 192.168.173.2 | MikroTik RouterOS 7.17.1 (stable) 2025-01-30 10:29:49 L41G-2 | MAU type - not advertised |

**2 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/1, Fa1/3.

## 5. Ports and VLANs

10 ports listed; 5 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 561 | VLAN0561 | 4 | Fa1/1, Fa1/4-6 |
| 573 | VLAN0573 | 2 | Fa1/7-8 |
| 590 | EDPowerMeterMngt | 2 | Fa1/2-3 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 2 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
