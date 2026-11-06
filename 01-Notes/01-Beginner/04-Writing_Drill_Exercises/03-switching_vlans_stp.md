# Definitions Drill Sheet — Batch 04: Switching, VLANs & STP

---

### 1. VLAN (Virtual LAN)
A VLAN is a logical grouping of devices on a switch (or across switches) that behaves as its own separate broadcast domain, regardless of physical location or cabling. Devices in different VLANs cannot communicate without a router or Layer 3 device, even if plugged into the same physical switch.

---

### 2. Access Port
An access port is a switch port assigned to exactly one VLAN, used to connect end devices (PCs, printers) that don't need to know VLANs exist — the switch handles tagging/untagging transparently.

---

### 3. Trunk Port
A trunk port carries traffic for multiple VLANs over a single physical link, typically used between switches or between a switch and a router. It uses tagging so each frame can be identified as belonging to a specific VLAN.

---

### 4. 802.1Q Tagging
802.1Q is the standard for VLAN tagging — it inserts a small tag into an Ethernet frame identifying which VLAN the frame belongs to, allowing a trunk link to carry multiple VLANs' worth of traffic while keeping them logically separated.

---

### 5. Native VLAN
The native VLAN is the one VLAN on a trunk port whose traffic is sent untagged. Both ends of a trunk link must agree on which VLAN is native, or traffic can be misdirected or dropped.

---

### 6. Inter-VLAN Routing
Inter-VLAN routing is the process that allows devices in different VLANs to communicate, since switches alone cannot route between them. It requires a Layer 3 device — either a router with a sub-interface per VLAN ("router-on-a-stick") or a Layer 3 switch with routing enabled.

---

### 7. Broadcast Domain vs Collision Domain
A broadcast domain is the set of devices that receive each other's broadcast traffic — VLANs and router interfaces each define separate broadcast domains. A collision domain is the set of devices that could collide if they transmitted at the same time — on modern switched (full-duplex) networks, every switch port is its own collision domain.

---

### 8. MAC Address Table (CAM Table)
The MAC address table (or CAM table) is the table a switch builds by observing the source MAC address of incoming frames on each port, learning which devices are reachable through which port. It uses this table to forward frames only out the correct port instead of flooding every port, and entries age out after a period of inactivity.

---

### 9. STP (Spanning Tree Protocol)
STP is a protocol that prevents Layer 2 loops in a switched network with redundant links by logically blocking certain ports to create a loop-free path, while keeping the physical redundancy available if the active path fails. Without STP, redundant switch links would cause broadcast storms.

---

### 10. Root Bridge
The root bridge is the single switch elected as the reference point for the entire spanning tree, determined by the lowest bridge ID. Every other switch calculates its best (shortest) path to the root bridge to decide which of its ports should forward and which should block.

---

### 11. BPDU (Bridge Protocol Data Unit)
A BPDU is a frame switches exchange to share spanning tree information with each other — bridge ID, root bridge info, path cost — which is how switches collectively elect a root bridge and calculate which ports to block.

---

### 12. EtherChannel
EtherChannel is a technology that bundles multiple physical switch links into a single logical link, increasing available bandwidth and providing redundancy — if one physical link in the bundle fails, traffic continues over the rest without a spanning tree recalculation.

