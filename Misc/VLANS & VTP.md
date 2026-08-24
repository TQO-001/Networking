![[Notes/Images/network_without_vlans.webp]]# What is a VLAN?
**VLANs (Virtual LANs)** are logical grouping of devices in the same [broadcast domain](https://study-ccna.com/collision-broadcast-domain/). VLANs are usually configured on switches by placing some interfaces into one broadcast domain and some interfaces into another. Each VLAN acts as a subgroup of the switch ports in an Ethernet LAN.

> Put more simply ==a VLAN (Virtual Local Area Network) is a tool that splits one physical network into many logical networks==. Devices on different VLANs cannot talk to each other without a router, even if they plug into the same switch. This setup stops extra broadcast traffic and keeps data safe. 

VLANs can spread across multiple switches, with each VLAN being treated as its own subnet or broadcast domain. This means that frames broadcasted onto the network will be switched only between the ports within the same VLAN.

A VLAN acts like a physical LAN, but it allows hosts to be grouped together in the same broadcast domain even if they are not connected to the same switch. Here are the main reasons why VLANs are used:

- VLANs increase the number of broadcast domains while decreasing their size.
- VLANs reduce security risks by reducing the number of hosts that receive copies of frames that the switches flood.
- you can keep hosts that hold sensitive data on a separate VLAN to improve security.
- you can create more flexible network designs that group users by department instead of by physical location.
- network changes are achieved with ease by just configuring a port into the appropriate VLAN.

The following topology shows a network with all hosts inside the same VLAN:

![[Notes/Images/network_without_vlans.webp]]

Without VLANs, a broadcast sent from host A would reach all devices on the network. Each device will receive and process broadcast frames, increasing the CPU overhead on each device and reducing the overall security of the network.

By placing interfaces on both switches into a separate VLAN, a broadcast from host A would reach only devices inside the same VLAN, since each VLAN is a separate broadcast domain. Hosts in other VLANs will not even be aware that the communication took place. This is shown in the picture below:

![[Notes/Images/network_with_vlans.webp]]

> [!NOTE] **NOTE** - To reach hosts in a different VLAN, a router is needed.

# What is VTP (VLAN Trunking Protocol)?
> [!NOTE] **NOTE** - This topic is not included in the latest version of the CCNA exam (200-301). However, knowing the basic concepts is still strongly recommended because it affects switch behavior in hands-on labs and troubleshooting.

**VTP (VLAN Trunking Protocol)** is a Cisco proprietary protocol used by Cisco switches to exchange VLAN information. With VTP, you can synchronize VLAN information (such as VLAN ID or VLAN name) with switches inside the same VTP domain. A VTP domain is a set of trunked switches with the matching VTP settings (the domain name, password and VTP version). All switches inside the same VTP domain share their VLAN information with each other.

> Put more simply VTP shares VLAN settings across multiple connected network switches automatically. VTP is a layer 2 messaging protocol created by Cisco to manage and synchronize VLAN configurations across multiple interconnected switches in a network domain. Instead of manually adding or deleting VLANs on every single switch, administrators make changes on a central switch, and VTP propagates those changes automatically.

To better understand the true value of VTP, consider an example network with 100 switches. Without VTP, if you want to create a VLAN on each switch, you would have to manually enter VLAN configuration commands on every switch! VTP enables you to create the VLAN only on a single switch. That switch can then propagate information about the VLAN to every other switch on the network and cause other switches to create it. Likewise, if you want to delete a VLAN, you only need to delete it on one switch, and the change is automatically propagated to every other switch inside the same VTP domain.

The following network topology explains the concept more thoroughly:

[![vtp topology](https://study-ccna.com/wp-content/images/vtp_topology.jpg "vtp topology")](https://study-ccna.com/wp-content/images/vtp_topology.jpg)

On SW1, we have created a new VLAN. SW1 sends a VTP update about the new VLAN to SW2, which in turn sends its VTP update to SW3. These updates will cause SW2 and SW3 to create the same VLAN. You can see how this simplifies network administration – the engineer only had to log in and create the VLAN on the first switch. Other switches have created the same VLAN automatically.

**NOTE**  
VTP does not advertise information about which switch ports are assigned to which VLAN.

Three VTP versions are available – V1, V2, and V3. The first two versions are similar except that V2 adds support for token ring VLANs. V3 adds the following features:

- enhanced authentication
- support for extended VLANs (1006 to 4094). VTP versions 1 and 2 can propagate only VLANs 1 to 1005.
- support for private VLAN
- VTP primary server and VTP secondary servers
- VTP mode off that disables VTP
- backward compatibility with VTP V1 and V2
- the ability to be configured on a per-port basis