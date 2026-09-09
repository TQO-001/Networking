# Firewall
A Firewall is a network security system, available as hardware or software, that monitors and controls incoming and outgoing traffic based on predefined rules. It acts like a security guard, filtering data packets to either:

- **Accept:** Allow the traffic.
- **Reject:** Block with an error response.
- **Drop:** Block silently without response.

![[firewal.webp]]

## Working of Firewall
A firewall inspects all incoming and outgoing traffic and decide whether to allow or block it.

1. All data packets entering or leaving the network must first pass through the firewall.
2. The firewall examines each packet against predefined security rules set by the organization.
3. If the packet matches safe rules, it is allowed; if it is suspicious, blacklisted, or contains malicious content, it is blocked.
4. Blocked or unusual traffic is recorded in logs, and real-time alerts may be generated for serious threats.
5. Since it is not possible to define every rule, the firewall applies a default policy (accept, reject, or drop). Setting the default policy to drop or reject is considered best practice to prevent unauthorized access.

> ****Default Policy:**** A firewall needs a default action (accept, reject, or drop) for traffic not covered by rules. For example, if no rule exists for SSH, the default applies. To prevent unauthorized access, it is best set to drop or reject.

## Firewall Routing
Firewall routing is the process where a firewall uses its routing table to direct network traffic from a source interface to the correct destination interface or next-hop gateway.

### Core Routing Methods on Firewalls
Firewalls support two primary methods to build and maintain their routing tables: 
- **Static Routing**: Manually configured paths assigned by a network administrator. They are simple, highly predictable, and ideal for basic edge setups or default internet gateways. However, they do not automatically adapt to network failures.
- **Dynamic Routing**: Automatic route learning using protocols like OSPF, BGP, or RIP. The firewall communicates directly with adjacent routers to update paths dynamically when the network topology changes. 

# pfSense
pfSense is ==a free, open-source firewall and router software platform based on FreeBSD==. 

> Here's  a useful tutorial: [Configuration the WAN and LAN interfaces in pfSense](https://medium.com/@cybwriter/configuration-the-wan-and-lan-interfaces-in-pfsense-83d440cc3d27)

## Key Features
- **Firewall:** Stateful packet inspection and granular traffic filtering rules.
- **Routing:** Supports static routing, multi-WAN load balancing, and VLAN management.
- **VPN Capabilities:** Built-in support for IPsec, OpenVPN, and WireGuard connections.
- **Web-Based Management:** Complete setup and package management through an intuitive browser interface. 

## Why pfSense?
Enterprises use firewalls to separate internal departments, protect sensitive data, and control how devices communicate. In a cyber range, replicating that environment teaches **network defense, segmentation, and access control,** all key parts of blue team operations

## LAN vs WAN interface
In pfSense software, the **WAN** interface connects your firewall to an external upstream network like the internet, while the **LAN** interface connects to your trusted internal local network

### WAN Interface
- **Definition**: The Wide Area Network port.
- **Function**: Faces outside toward your internet service provider (ISP) or modem.
- **Behavior**: Treats traffic as untrusted. It typically uses DHCP, a static IP, or PPPoE, and applies Network Address Translation (NAT) to hide your private internal IPs. 

### LAN Interface
- **Definition**: The Local Area Network port.
- **Function**: Faces inside toward your computers, switches, and wireless access points.
- **Behavior**: Treats traffic as trusted and secure. It usually runs a DHCP server to hand out local IP addresses (such as `192.168.1.1/24`) to your devices. 

### Key Differences in pfSense
- **Firewall Rules**: pfSense blocks all incoming traffic on the WAN by default, but allows all outgoing traffic from the LAN by default.
- **NAT Processing**: NAT rules automatically translate private LAN addresses to your public WAN address for internet access.

## pfSense Firewall Routing
Configuring routing on pfSense involves ==managing gateways, static routes, and policy-based rules to control how packets move across networks==. You can learn more about core concepts in the official pfSense Routing Documentation.

### Core Routing Methods
- **Standard Static Routing**: Used when internal subnets or external networks sit behind another internal router; managed under `System > Routing` on the Routes tab. Refer to the pfSense Static Routes Guide for detailed parameters.
- **Policy-Based Routing (PBR)**: Bypasses standard destination-based routing by forcing specific traffic through designated gateways (like a VPN or secondary WAN) based on source IPs, ports, or protocols. Configured via advanced settings on individual firewall rules. 
- **Dynamic Routing**: Utilizes the FRR package to run enterprise protocols like BGP, OSPF, or OSPF6 for automated route propagation. 

### Basic Configuration Steps
- **Define Gateways**: Go to `System > Routing > Gateways` to add or verify your ISP or VPN gateways.
- **Add Static Routes**: Navigate to `System > Routing > Routes`, click **Add**, and specify the destination network and the correct gateway.
- **Configure PBR Rules**: Go to `Firewall > Rules`, edit the target interface (e.g., LAN), open **Advanced** settings on the rule, and select your custom gateway. 

## DHCP & Routing
pfSense serves as the **DHCP server** for internal networks, automatically assigning IP addresses to clients in each VLAN range.

Each VLAN has its own subnet (using private addressing like `10.x.x.x/24`) with its own dedicated DHCP scope.

This makes device provisioning seamless — every time a new virtual machine or container is spun up in the Proxmox cluster, it receives the correct IP and gateway settings automatically.

pfSense also performs **inter-VLAN routing**, meaning it decides which networks can communicate and under what conditions. This is done through **firewall rules** that define what traffic can pass between VLANs.

## Firewall Rules & Segmentation
By default, **pfSense blocks traffic between VLANs** — enforcing a _zero-trust_ posture.

From there, I built selective allow rules based on functional needs:

By default, pfSense blocks traffic between VLANs — enforcing a zero-trust posture.  
From there, I built selective allow rules based on functional needs:

- **Clients VLAN → Servers VLAN:** Allow AD authentication & DNS queries
- **IoT VLAN → Any:** Block and isolate untrusted devices
- **Servers VLAN → Elastic Stack:** Allow for log forwarding & other servers
- **Guests VLAN → Internet only:** Allow restricted outbound access
- **Management VLAN → All:** Allow admin access only

Each rule was tested using virtual endpoints on different VLANs to confirm isolation and routing logic.

## Logging & Visibility
pfSense generates extensive logs and that’s gold for cybersecurity learning.

I configured pfSense to forward its logs to my **Elastic Stack (SIEM)** via **syslog and Filebeat**, creating full visibility into network events:

- Allowed/blocked connections
- DHCP lease assignments
- Interface status changes
- Firewall rule hits

These logs feed into **Kibana dashboards**, where I can visualize traffic flows, detect anomalies, and simulate incident response scenarios.

This integration bridges the gap between **network operations and security analytics**, letting me practice how SOC analysts monitor and respond to network threats in real time.

## Key Takeaways:

1. **Segmentation Strengthens Security**  
    Dividing the network into VLANs isolates traffic and prevents lateral movement.
2. **Routing Brings Control**  
    pfSense centralizes routing and lets me precisely define which systems communicate.
3. **Logging Enables Visibility**  
    Exporting logs to a SIEM creates the foundation for detection and analysis.
4. **Automation Simplifies Operations**  
    Built-in DHCP keeps the lab dynamic and easy to expand.
5. **Virtual Firewalls Are Enterprise-Capable**  
    Even as a virtual machine, pfSense delivers the same functionality as a physical appliance — ideal for testing and learning.
