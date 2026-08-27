# What is Network Configuration?
**Network configuration** is the process of defining and managing the operational settings that control how devices communicate within a network. It determines how routers, switches, servers, and firewalls interact with each other and the wider internet.

## Tools for Network Configuration
Managing modern networks without tools is impossible. They fall into three main categories:

- **CLI tools** (e.g., ping, traceroute) for quick diagnostics.
- **Configuration managers** for multi-device and multi-vendor environments.
- **Automation platforms** (like Ansible or Puppet) for large-scale deployments.

# IP Routing
<div style="display: flex" width="100vw">
	<img src="ip-settings-blank.png" width="50%" alt="IP-Settings-Blank">
	<img src="ip-settings.png" width="50%" alt="IP-Settings">
</div>
## IP Address
**IP Addressing:** An IP address uniquely identifies a device on a network and is divided into logical parts to support routing and communication. An IPv4 address is a 32-bit value written as four octets separated by dots (for example, 192.168.1.1).

- **Network portion:** Identifies the network to which the device belongs
- **Host portion:** Identifies the specific device within that network

In classful IPv4 addressing, IP addresses are divided into classes based on how many bits are used for the network ID and host ID.

- **Class A:** 8-bit network ID, 24-bit host ID
- **Class B:** 16-bit network ID, 16-bit host ID
- **Class C:** 24-bit network ID, 8-bit host ID

![[network_id_and_host_id.webp|483]]

### Subnet Mask
A **subnet mask** is a 32-bit number used in IP addressing to separate the network portion of an IP address from the host portion.

- It helps computers and devices determine which part of an IP address refers to the network they are present,
- And which part refers to their specific location or address within that network.

**CIDR Notation: A Simplified Approach to Subnetting**

Instead of using a long subnet mask (e.g., 255.255.255.0), CIDR uses a simple format like /24. The number after the slash (/n) represents the number of bits used for the network portion of the IP address.
## Subnetting
Subnetting is the process of ==dividing a large IP network into smaller logical networks called subnets==. This helps save IP addresses, makes the network faster, and keeps data safer.

- Each department is assigned a separate subnet
- Devices within a department communicate using their own subnet
- Inter-department traffic is routed through a router
- Broadcast traffic is limited to each subnet
- Network performance, security, and management are improved

### Need for Subnetting
Subnetting enables a single IP network to be divided into smaller, logical networks, allowing for efficient IP address usage, improved performance, and enhanced security control. Let's consider a company that follows classful addressing. It has a Class C network (192.168.1.0/24) with 256 IP addresses. It has three departments:
![[192_168_1_0_24.webp|404]]

### By subnetting, we:
- Use IP addresses efficiently, allocating only what each department requires
- Improve network performance by containing traffic within each subnet
- Enhance security by isolating departments from one another

## Default Gateway in Networking
Simply, ==the default gateway is the "door" to other networks (like the internet)==, doesn't that sound familiar? The **router** used to connect your network to the outside world is called the **Default Gateway**. It acts as the **main door** to the outside network. This router also has its IP address. and all communication happens using this address. This **router** or **IP** is called the **Default Gateway**.
![[Default-Gateway-In-Networking.jpg|307]]

Routing is the most important process in networking. The process of routing includes various networking devices for packet forwarding one of which is the default gateway. The default gateway forwards the packets from the client to other network.

### Default Gateway:
> Basically, the **default gateway** is the router which **forwards** the data traffic from the local network to the **other networks**. By the way do not confuse default gateway with **Default Route**. **Default gateway** is the IP address of the router that a host uses to reach networks outside its local subnet. **Default route** is a routing table entry on a router that defines where to send traffic when there is no specific route to that destination.

- The default gateway is the node that forwards the packet from the source to other networks when there is no routing information about the destination i.e. host (or router) does not know where the destination is present.
- A default gateway is a route to which information is passed when the device does not know where the destination is present.
- It is used when there is no routing information available about the destination.
- It is a node that allows the communication of computers on different networks.
- 'Default' here means the default route which is to be taken when the host does not know where the destination is.
- It is most commonly used for webpage access.
- This is an important part of networking for routing the data and finding the corresponding destination which is in another network.


![[Default-Gateway-Diagram.jpg]]

### How to Find Your Default Gateway:
1. In Windows, we can get our default gateway with Command Prompt. 
2. To access the command prompt click on start and search for "**CMD**" and open.
3. In the command prompt window type "**ipconfig**" command and press enter and you can see the Default Gateway in the information generated by the command with the machine's IP address listed.
