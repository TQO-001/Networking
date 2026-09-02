> [Check Out](https://www.storagereview.com/review/hp-proliant-dl360p-gen8-server-review)
# Task Breakdown
This is the big doo doo daddy of Tasks. Once you are able to do the following task, you should be ready to work in the Plant make sure you understand the fundamentals of every part of this task.

## Devices on the network
- Switch 1 : **Cisco Catalyst IE-3300 Rugged Switch IE-3300-8T2S-E**
- Switch 2: **Cisco Catalyst IE-3300-8T2S-A** feat. **Cisco PWR-IE240W-PCAC-L**
- Server 1: **HPE ProLiant DL360p Gen8 Server**
- Laptop: **My Personal Laptop**

## Sub-Tasks
1. Reload the server, download and install the OS for the server.
2. Setup the network:
	1. Connect the switches together.
	2. Connect the **Server 1** to **Switch 1**.
	3. Connect the **Laptop** to **Switch 2**.
3. Create **3 VMs** on the server and RAID 5
4. Setup a **Virtual Firewall**
5. Ping **VM3** from **Laptop**

---
# Simulation
To simulate this environment in Cisco Packet Tracer, exact physical hardware like the Cisco Catalyst IE-3300 Rugged series or a physical HPE ProLiant RAID server are replaced with Packet Tracer equivalents. The hardware devices map to the following Packet Tracer stock models:

* **Switch 1 & Switch 2 (IE-3300):** Use **Cisco 3650-24PS** or **2960-24TT** switches.
* **Server 1 (HPE ProLiant):** Use the standard **Server** device.
* **Virtual Firewall:** Use a **Cisco ASA 5505** or **ASA 5506-X** firewall device.
* **VM1, VM2, VM3:** Represented by **PC** devices (since Packet Tracer cannot run nested hypervisors/VMs on a single server, each VM is represented by a separate PC connected to an interface/switch).
* **Laptop:** Use the standard **Laptop** device.

![[Pasted image 20260902095446.png]]


> Okay so I did try to do the simulation, but I don't think I can it with a configuration which won't majorly differ from the actual network build, with packet tracer I would have to make alot concessions and "what if's" and "because's". It would be much more productive to actually just do it IRL. You can try and do it, it would be beneficial in the long run but you would have to add an additional switch and stuff, so it's up to you son, but that's a yikes from me dawg.

---
# Planning
### Sun Daddy Network Layout
![[Pasted image 20260901162245.png]]

![[Sun-daddy-network 2.png]]

To configure this network topology, the key requirement is that your Firewall (FW) must act as the default gateway performing inter-VLAN routing (a "Router-on-a-Stick" or multi-interface configuration).

Below is the structured IP assignment plan and step-by-step configuration workflow for your setup.

### Network Addressing Plan
|**Component / Subnet**|**Interface / Object**|**IP Address**|**Subnet Mask**|**Default Gateway**|
|---|---|---|---|---|
|**VLAN 10 Subnet**|`192.168.10.0/24`|—|`255.255.255.0`|—|
|**FW (VLAN 10 Interface)**|Gateway|`192.168.10.1`|`255.255.255.0`|N/A|
|**SVR1 Host (Hypervisor)**|Mgmt / PhysicalNIC|`192.168.10.2`|`255.255.255.0`|`192.168.10.1`|
|**VM 1 (on SVR1)**|Virtual NIC|`192.168.10.10`|`255.255.255.0`|`192.168.10.1`|
|**VM 2 (on SVR1)**|Virtual NIC|`192.168.10.11`|`255.255.255.0`|`192.168.10.1`|
|**SW1 Management**|SVI `interface vlan 10`|`192.168.10.254`|`255.255.255.0`|`192.168.10.1`|
|**VLAN 11 Subnet**|`192.168.11.0/24`|—|`255.255.255.0`|—|
|**FW (VLAN 11 Interface)**|Gateway|`192.168.11.1`|`255.255.255.0`|N/A|
|**VM 3 (on SVR1)**|Virtual NIC|`192.168.11.10`|`255.255.255.0`|`192.168.11.1`|
|**PC (on SW2)**|Physical NIC|`192.168.11.20`|`255.255.255.0`|`192.168.11.1`|
|**SW2 Management**|SVI `interface vlan 11`|`192.168.11.254`|`255.255.255.0`|`192.168.11.1`|
### Step-by-Step Assignment Procedure
**1. Configure Firewall Interfaces & Inter-VLAN Routing:** Establishes default gateways for both subnets.

Configure two distinct interfaces (or sub-interfaces with 802.1Q encapsulation if using a single trunk line) on your firewall:

- **VLAN 10 Interface:** Set IP to `192.168.10.1` with netmask `255.255.255.0`.
- **VLAN 11 Interface:** Set IP to `192.168.11.1` with netmask `255.255.255.0`.
- Ensure firewall rules permit traffic between `192.168.10.0/24` and `192.168.11.0/24` if you want the VMs and PC to communicate across subnets.

**2. Configure Switches (VLANs & Trunking):** Ensures multi-VLAN traffic reaches SVR1 and FW.

- **SW1:** Create VLAN 10 (`vlan 10`). Assign switchports connected to SVR1 and FW as `trunk` ports (carrying VLAN 10 and 11) or `access` ports on VLAN 10 depending on your hypervisor setup.
- **SW2:** Create VLAN 11 (`vlan 11`). Assign the PC's port to `switchport access vlan 11`.
- **Trunk Link:** Configure the trunk connection between SW1 and SW2 (or trunk links connecting both switches to the FW) to allow VLAN 10 and VLAN 11 tagged frames (`switchport trunk allowed vlan 10,11`).

**3. Configure Hypervisor (SVR1) Virtual Switches:** Map VM virtual interfaces to correct VLANs.

On SVR1 (e.g., ESXi, Hyper-V, Proxmox, or KVM):

- Create or configure virtual switches/port groups for **VLAN 10** and **VLAN 11**.
- If the physical NIC on SVR1 connects to a **trunk port** on SW1, enable 802.1Q tagging on the virtual switch port groups (Tag `10` for VLAN 10, Tag `11` for VLAN 11).
- Attach **VM 1** and **VM 2** virtual network adapters to the VLAN 10 port group.
- Attach **VM 3** virtual network adapter to the VLAN 11 port group.

**4. Assign IP Addresses on End Devices:** Static assignment or DHCP scope creation.

**Manual IP Configuration:**
- **VM 1:** IP `192.168.10.10` | Mask `255.255.255.0` | Gateway `192.168.10.1`
- **VM 2:** IP `192.168.10.11` | Mask `255.255.255.0` | Gateway `192.168.10.1`
- **VM 3:** IP `192.168.11.10` | Mask `255.255.255.0` | Gateway `192.168.11.1`
- **PC:** IP `192.168.11.20` | Mask `255.255.255.0` | Gateway `192.168.11.1`

_(Alternatively, enable DHCP services on the Firewall with Scope 1: `192.168.10.10–100` and Scope 2: `192.168.11.10–100`.)_











