# IND-SW-CD_SubStation2

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_30_CD_SubStation2_Provisional (head). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CD_SubStation2` |
| Management IP | 192.168.160.100 |
| Role in its network | Head |
| Switch hops from head | 0 |
| Hardware model | Unknown |
| Firmware / IOS | Unknown (not in the collected data) |
| Ports (SwitchScribe) | 10 reported, 3 up |
| Collection | success (Netmiko SSH, 4.28s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CD_SubStation2 (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CD_SubStation2["IND-SW-CD_SubStation2<br/>192.168.160.100"]:::head
    N_Unclassified_192_168_160_107["IND-SW-CD-CORE<br/>192.168.160.107<br/>upstream boundary"]:::boundary
    N_IND_SW_CD_SubStation2_e0(["axis-e827251571c5"]):::enddev
    N_IND_SW_CD_SubStation2_unk(["1 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/15 to Gi1/1"| N_IND_SW_CD_SubStation2
    N_IND_SW_CD_SubStation2 ---|"Gi1/5"| N_IND_SW_CD_SubStation2_e0
    N_IND_SW_CD_SubStation2 -.- N_IND_SW_CD_SubStation2_unk
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
| `Gi1/1` | [[Unclassified-192.168.160.107]] (IND-SW-CD-CORE) | `Twe2/0/15` | Upstream boundary (core) | seen from one end only (the other end not collected / not reporting); source CDP | — |

## 4. Connected end devices

| Port | Device | Type (from LLDP text) | Remote port | IP | LLDP description | Media |
|---|---|---|---|---|---|---|
| `Gi1/5` | axis-e827251571c5 | unclassified endpoint | eth0 | 192.168.162.50 | Linux | 100base-TX(FD), 100base-TX(HD) |

**1 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/3.

## 5. Ports and VLANs

10 ports listed; 3 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 1 | Gi1/2 |
| 561 | VLAN0561 | 4 | Gi1/7-10 |
| 562 | IND-CESMS_CCTV | 1 | Gi1/5 |
| 590 | CDPowermeters | 3 | Gi1/3-4, Gi1/6 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Verify the links seen from one end only (section 3) on the other switch.
