# Network Switch
## What is a Switch
A network switch is a vital component of a computer network that connects multiple devices, like computers, printers, and servers, within a local area network (LAN). It operates at the data link layer of the OSI model and ensures seamless communication between devices by forwarding data packets based on their destination MAC addresses. The primary function of a network switch is to enhance network performance by optimizing the flow of data traffic. Unlike a hub, a network switch smartly directs data packets only to the devices that need them, reducing network congestion and improving overall efficiency.

![[Pasted image 20260826112825.jpg|389]]

#### Types of network switches
- **Unmanaged switches**: Simple plug-and-play devices with no setup needed. Best for home or small office use. 
- **Managed switches**: Advanced devices that let you monitor traffic, add security, and set up virtual networks (VLANs). Best for big companies.
- **Smart (web-managed) switches**: A middle choice. They offer basic web controls for VLANs and priority settings at a lower cost than fully managed options

When you work with switches, you must remember that there’s a big difference between physical and logical topology. Physical is just the way our cables are connected, while logical is how we have set up things ‘virtually’. 
# VLANs (Virtual LANs)
A VLAN (Virtual Local Area Network) is ==a logical method used to divide a single physical network into multiple separate virtual networks==. A VLAN is a Virtual LAN, so it’s like having a “switch inside a switch”.
- It reduces unnecessary broadcast traffic, enhances security, and improves network performance, flexibility, and manageability.
- Traditionally, broadcast domains were separated using Layer 3 devices (routers).
- **Same VLAN:** Devices communicate directly within the same broadcast domain.
- **Different VLANs:** Communication requires Inter-VLAN Routing via a router or a Layer 3 switch (SVI).

> [!NOTE] **NOTE** - To reach hosts in a different VLAN, a router is needed as stated above.

### VLAN ID Ranges (Cisco Standard)

- **VLAN 0 and VLAN 4095:** Reserved VLAN IDs are defined by IEEE 802.1Q and used internally for protocol operations and cannot be configured or assigned to ports.
- **VLAN 1 (Default VLAN):** The default VLAN on Cisco switches and all switch ports are assigned to VLAN 1 by default. It cannot be deleted and is commonly used for control and management protocols such as STP, CDP, and VTP.
- **VLAN 2 to VLAN 1001 (Normal VLAN Range):** This range is used for regular VLAN configuration. VLANs in this range are fully configurable, editable, and delectable, and are stored in the switch’s VLAN database.
- **VLAN 1002 to VLAN 1005:** Reserved VLANs for legacy network technologies such as FDDI and Token Ring. These VLANs are predefined and cannot be removed, even if the technologies are no longer in use.
- **VLAN 1006 to VLAN 4094 (Extended VLAN Range):** Designed for large-scale networks requiring a high number of VLANs. VLANs in this range are stored in the **running configuration** and typically require the switch to operate in VTP transparent mode.
![[router.webp|411]]

#### VLAN 1
VLAN 1 isn’t just a starter setting; on most enterprise hardware, it is the default VLAN used for the switch’s internal logic.

Even if you aren’t sending your printer or laptop traffic through it, the switch itself uses VLAN 1 to “talk” to its neighbors. Many control plane protocols default to VLAN 1. For example, Cisco switches use it for CDP (Cisco Discovery Protocol), VTP, and PAgP, while the standard Spanning Tree Protocol (STP) also typically operates on VLAN 1 across vendors by default.

While you can and should move user data and management traffic to other VLANs for security purposes, attempting to delete VLAN 1 typically fails or causes operational issues. The best practice is to leave VLAN 1 in place but unused. Change the native VLAN on trunk ports to an unused VLAN ID and don’t assign any access ports to VLAN 1.

Note that some non-Cisco vendors, such as Juniper or certain Linux-based switches, handle the “default” VLAN differently or allow you to rename it.

### Types of VLAN Links
- **Access Link:** Connects a VLAN-unaware end device (such as a PC) to a VLAN-aware switch. Frames transmitted over an access link are untagged and belong to a single VLAN.
- **Trunk Link:** Connects VLAN-aware devices such as switch-to-switch or switch-to-router links. It carries traffic from multiple VLANs using IEEE 802.1Q tagging.
- **Hybrid Link:** Supports both tagged and untagged frames on the same link. It is typically vendor-specific and not part of the IEEE 802.1Q standard.

### Features
- **VLAN Tagging (IEEE 802.1Q):** Inserts a 4-byte VLAN tag into Ethernet frames to identify the VLAN to which the frame belongs.
- **VLAN Membership:** Devices can be assigned to VLANs based on switch port, MAC address, or protocol type.
- **VLAN Trunking:** Allows multiple VLANs to share a single physical link between VLAN-aware devices.
- **Dynamic VLANs:** VLAN membership is automatically assigned to devices based on predefined policies or authentication mechanisms.

## Cisco VLAN Configuration
To **Configure Cisco VLAN**, firstly create the **[VLAN](https://ipcisco.com/lesson/vlans-virtual-local-area-networks/)** with the **VLAN ID** and then give it a name;  
>**REMEMBER** The standard VLAN number range is 1 to 1005. 1002 to 1005 is reserved for Token Ring and FDDI. And lastly 1006 to 4094 range is used by VTP transparent mode)

### 1. Open the switch SW1 console line and create domain and user name.
```cisco
SW1>enable
SW1>configure terminal
SW1(config)#ip domain-name laughtale.co.za
SW1(config)#username cisco Password cisco
SW1(config)#
```

### 2. Create VLAN and assign a name to the VLAN for description.
```cisco
SW1(config)#vlan 2
SW1(config-vlan)#name USERS
```

### 3. VLAN port assignment and configure the port mode.
```cisco
SW1(config)#interface fa1/1
SW1(config-if)#switchport mode access
SW1(config-if)#switchport access vlan 2
```


