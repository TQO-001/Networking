# Unclassified-192.168.160.122

[Network index](../00-index.md) · [Topology](../01-topology_and_connections.md) · [Inventory](../02-switch_inventory.md) · [Connected devices](../03-connected_devices.md)

> **Placement:** Network_19_U160-122_Provisional (head). Department and physical location are **unknown**.

## 1. Identification

| Field | Value |
|---|---|
| Hostname (as collected) | `Unclassified-192.168.160.122` |
| Management IP | 192.168.160.122 |
| Role in its network | Head |
| Switch hops from head | 0 |
| Hardware model | C9200L-24P-4G (advertised by neighbours via CDP). SwitchScribe reports C9500-48Y4C: they disagree |
| Firmware / IOS | Unknown (not in the collected data) |
| Ports (SwitchScribe) | 29 reported, 2 up |
| Collection | success (Netmiko SSH, 4.54s) |
| Physical location | Not documented |
| Source note (Device Info and Raw CLI) | [[Unclassified-192.168.160.122 (SwitchScribe)]] |

## 2. Individual topology

```mermaid
flowchart TD
    N_Unclassified_192_168_160_122["Unclassified-192.168.160.122<br/>192.168.160.122"]:::head
    N_Unclassified_192_168_160_110["ind-Core1-MSR<br/>192.168.160.110<br/>upstream boundary"]:::boundary
    N_Unclassified_192_168_160_122_unk(["1 active port(s)<br/>device unknown"]):::unknown
    N_Unclassified_192_168_160_110 ---|"Twe2/0/13 to Gi1/1/1"| N_Unclassified_192_168_160_122
    N_Unclassified_192_168_160_122 -.- N_Unclassified_192_168_160_122_unk
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
| `Gi1/1/1` | [[Unclassified-192.168.160.110]] (ind-Core1-MSR) | `Twe2/0/13` | Upstream boundary (core) | seen from both ends; source CDP | — |

## 4. Connected end devices

No named end devices were reported by this switch.

**1 active port(s) report no CDP/LLDP neighbour**, so the device on them is unknown: Gi1/0/3.

## 5. Ports and VLANs

29 ports listed; 2 up.

| VLAN | Name | Ports | Port list |
|---|---|---|---|
| 1 | default | 3 | Gi1/1/2-4 |
| 526 | IND-S6 | 24 | Gi1/0/1-24 |

## 6. Outstanding questions

- [ ] Confirm the department and physical location of this switch.
- [ ] Photograph the switch and record its rack / panel label.
- [ ] Resolve the model: SwitchScribe says `C9500-48Y4C`, neighbours advertise `C9200L-24P-4G`. The advertised value matches the interface names where checked.
- [ ] Identify the unidentified end devices (MAC/GUID-only neighbours and active ports with no CDP/LLDP data).
