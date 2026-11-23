# IND-SW-CD_CompHouse5

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_29_CD_CompHouse5_Provisional (head). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `IND-SW-CD_CompHouse5` |
| Management IP | 192.168.160.47 |
| Role in its network | Head |
| Switch hops from head | 0 |
| Hardware model | C9500-48Y4C (SwitchScribe) |
| Firmware / IOS | Unknown (not in the collected data) |
| Ports (SwitchScribe) | 29 reported, 20 up |
| Collection | success (Netmiko SSH, 4.26s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[IND-SW-CD_CompHouse5 (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_IND_SW_CD_CompHouse5["IND-SW-CD_CompHouse5<br/>192.168.160.47"]:::head
    N_Unclassified_192_168_160_107["IND-SW-CD-CORE<br/>192.168.160.107<br/>upstream boundary"]:::boundary
    N_IND_SW_CD_CompHouse5_unk(["19 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_107 -.->|"Twe2/0/29 to Gi1/0/25"| N_IND_SW_CD_CompHouse5
    N_IND_SW_CD_CompHouse5 -.- N_IND_SW_CD_CompHouse5_unk
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
| `Gi1/0/25` | [[Unclassified-192.168.160.107]] (IND-SW-CD-CORE) | `Twe2/0/29` | Upstream boundary (core) | seen from one end only (the other end not collected / not reporting); source CDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**19 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/0/1-2, Gi1/0/4-11, Gi1/0/13-14, Gi1/0/16, Gi1/0/19-24.

## 5. Ports and VLANs

29 ports listed; 20 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 3 | Gi1/0/26-28 |
| 561 | IND_CESMS | 8 | Gi1/0/7, Gi1/0/9, Gi1/0/12-13, Gi1/0/15-18 |
| 590 | CDPowermeters | 16 | Gi1/0/1-6, Gi1/0/8, Gi1/0/10-11, Gi1/0/14, Gi1/0/19-24 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
- [ ] Verify the links seen from one end only (section 3) on the other switch.
