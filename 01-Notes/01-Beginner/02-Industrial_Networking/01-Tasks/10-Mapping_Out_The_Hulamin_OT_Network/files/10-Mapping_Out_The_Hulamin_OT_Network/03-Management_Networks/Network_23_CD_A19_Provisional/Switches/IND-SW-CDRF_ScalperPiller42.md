# IND-SW-CDRF_ScalperPiller42

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_23_CD_A19_Provisional (access). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CDRF_ScalperPiller42` |
| Management IP | 192.168.160.86 |
| Role in its network | Access |
| Switch hops from head | 1 |
| Hardware model | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports MikroTik: they disagree |
| Firmware / IOS | 15.0(2)EY3 (as advertised to neighbours via CDP/LLDP) |
| Ports (SwitchScribe) | 10 reported, 4 up |
| Collection | success (Netmiko SSH, 4.66s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CDRF_ScalperPiller42 (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CDRF_ScalperPiller42["IND-SW-CDRF_ScalperPiller42<br/>192.168.160.86"]:::access
    N_IND_SW_CD_A19["IND-SW-CD_A19<br/>192.168.160.82"]:::access
    N_IND_SW_CDRF_ScalperPiller42_e0(["SLCNG - Campsdrift HAP"]):::enddev
    N_IND_SW_CDRF_ScalperPiller42_unk(["2 active port(s)<br/>device unknown"]):::unknown
    N_IND_SW_CD_A19 ---|"Gi1/0/26 to Gi1/1"| N_IND_SW_CDRF_ScalperPiller42
    N_IND_SW_CDRF_ScalperPiller42 ---|"Fa1/8"| N_IND_SW_CDRF_ScalperPiller42_e0
    N_IND_SW_CDRF_ScalperPiller42 -.- N_IND_SW_CDRF_ScalperPiller42_unk
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
| `Gi1/1` | [[IND-SW-CD_A19]] | `Gi1/0/26` | Parent / uplink | seen from both ends; source CDP/LLDP | LLDP-only record Gi1/1 to Gi1/0/25 (reported by IND-SW-CD_A19) |

## 4. Connected end devices

| Port | Device | Type (from LLDP text) | Remote port | IP | LLDP description | Media |
|---|---|---|---|---|---|---|
| `Fa1/8` | SLCNG - Campsdrift HAP | unclassified endpoint | Hulamin/ether1 | 192.168.177.2 | MikroTik | MAU type - not advertised |

**2 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Fa1/1, Fa1/4.

## 5. Ports and VLANs

10 ports listed; 4 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 1 | Gi1/2 |
| 561 | VLAN0561 | 6 | Fa1/1-3, Fa1/5-7 |
| 577 | SLG_PLC | 1 | Fa1/8 |
| 590 | CDPowermeters | 1 | Fa1/4 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `MikroTik`, neighbours advertise `IE-3000-8TC`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Review 1 CDP/LLDP port conflict(s) in section 3 (LLDP-only records that name a different port).
