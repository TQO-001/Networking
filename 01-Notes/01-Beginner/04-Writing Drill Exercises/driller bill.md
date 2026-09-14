### Default Gateway
A default gateway is the IP address of a router interface that a device sends traffic to whenever the destination address is outside the device's own subnet. It only gets used when the destination is off-subnet — same-subnet traffic never touches it.

### Switch (Layer 2)
A switch is a network device that operates at Layer 2 and forwards traffic in the form of frames, using MAC addresses. It builds a MAC address table by observing which MAC addresses are reachable on which physical ports, and uses that table to forward frames only out the correct port instead of flooding every port.

### Router (Layer 3)
A router is a network device that operates at Layer 3 and forwards traffic in the form of packets, using IP addresses. It connects separate networks/subnets together and uses a routing table to decide where to send a packet based on its destination IP address.

### `ip default-gateway` on a Switch
On a switch itself, the `ip default-gateway` command sets the address the switch uses to send its own management traffic (e.g. remote SSH, SNMP) to a subnet outside its own — it only matters when the switch is being managed from off-subnet, through a router. It has no effect on local, same-subnet management access.

### VLAN (Virtual LAN)
A VLAN is a logical grouping of devices on a switch (or across switches) that behaves as its own separate broadcast domain, regardless of physical location or cabling. Devices in different VLANs cannot communicate without a router or Layer 3 device, even if plugged into the same physical switch.

### Access Port
An access port is a switch port assigned to exactly one VLAN, used to connect end devices (PCs, printers) that don't need to know VLANs exist — the switch handles tagging/untagging transparently.

### Trunk Port
A trunk port carries traffic for multiple VLANs over a single physical link, typically used between switches or between a switch and a router. It uses tagging so each frame can be identified as belonging to a specific VLAN.

### Inter-VLAN Routing
Inter-VLAN routing is the process that allows devices in different VLANs to communicate, since switches alone cannot route between them. It requires a Layer 3 device — either a router with a sub-interface per VLAN ("router-on-a-stick") or a Layer 3 switch with routing enabled.

### EtherChannel
EtherChannel is a technology that bundles multiple physical switch links into a single logical link, increasing available bandwidth and providing redundancy — if one physical link in the bundle fails, traffic continues over the rest without a spanning tree recalculation.

### Firewall
A firewall is a device or software that controls traffic flow between networks (or between a network and the internet) based on a defined rule set, blocking traffic that doesn't match permitted criteria. It functions as a security boundary/checkpoint.

### SVIs (Switch Virtual Interfaces)
A SVI is a logical Layer 3 interface on a multilayer or Layer 3 switch that connects a Virtual Local Area Network (VLAN) to the switch's internal routing engine.

```cisco
interface FastEthernet1/1
 description Connection_to_Laptop_VLAN11
 switchport access vlan 11
 switchport mode access
!
interface FastEthernet1/2
 description Connection_to_Laptop_VLAN10
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet1/3
!
interface FastEthernet1/4
!
interface GigabitEthernet1/1
 description Trunk_to_SW1
 switchport trunk allowed vlan 10-12
 switchport mode trunk
!
interface GigabitEthernet1/2
!
interface Vlan1
 no ip address
!
interface Vlan10
 ip address 192.168.11.201 255.255.255.0
!
interface Vlan11
 no ip address
 shutdown
!
ip default-gateway 192.168.10.1
ip http server
ip http secure-server
!
!
!
line con 0
line vty 5 15
!
!

```