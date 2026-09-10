## 4. Creating a virtual FireWall
> Honestly just follow [this tutorial](https://glmdev.medium.com/how-to-set-up-virtualized-pfsense-on-vmware-esxi-6-x-2c2861b25931), it's much more concise yet still more descriptive than what I wrote below. Basically it's a more efficient tutorial. But you're gonna have to change how you do it to suit our current network.

We will now create a **vFW (virtual Firewall)**, to add to our network. For the Sun Daddy network we'll create a vFW which will ***(Insert Reason here)***. 

### Installing pfSense
We will use **pfSense**  this can really be done with any firewall/router software you want to use (IPFire/OPNsense/routerOS/etc), I just chose pfSense (cause that's what I was told to do lol)

Create a new virtual machine, and, for pfSense, select OS family: Other and set the OS to “FreeBSD (64-bit).”

Tab through the wizard until you land on the VM’s configuration page. Here we need to modify a few things.
![[b5d09939-3c49-4d9d-909a-726210947610.png|476]]

Then, in the CD/DVD drive, select the pfSense installer ISO from the datastore. Now you can click create and start the VM. You'll have to upload it the same way as we did with the VM iso file for Windows 10 iso.

#### WE HAVE TO CELEBRATE OUR DIFFERENCES
To make every device in your topology communicate properly, you must configure **ESXi Virtual Networking (vSwitch & Port Groups)**, **pfSense (Virtual Firewall)**, **Physical Switches (SW1 & SW2)**, and your **Endpoints**.

Here is the exact step-by-step configuration required for your topology:
### Step 1: Configure ESXi Virtual Networking (vSwitch & Port Groups)
Because your pfSense vFW, VM1, VM2, and VM3 all reside on the physical server, ESXi needs to bridge them using **VLAN tagging (802.1Q)** over a trunk line to **SW1**.
1. Log into your ESXi Web Console.
2. Go to **Networking** → **Virtual switches** → Select **vSwitch0**.
    - Edit **vSwitch0** settings and ensure **Promiscuous Mode**, **MAC Address Changes**, and **Forgged Transmits** are set to **Accept** (Required for pfSense interface handling).   
3. Go to **Port groups** and create **three distinct Port Groups** on `vSwitch0`:
    - **PG_VLAN10**: Set **VLAN ID** to `10`.   
    - **PG_VLAN11**: Set **VLAN ID** to `11`.   
    - **PG_TRUNK / All (4095)**: Set **VLAN ID** to `4095` (This puts ESXi in Virtual Guest Tagging / Trunk mode).   

### Step 2: Assign VM Network Adapters
1. **Virtual Firewall (pfSense):**
    - Edit pfSense VM settings.   
    - Add **two** Network Adapters:   
    - **Network Adapter 1 (LAN/VLAN10 Interface):** Attach to `PG_VLAN10`.
    - **Network Adapter 2 (OPT1/VLAN11 Interface):** Attach to `PG_VLAN11`.
2. **VM1 & VM2:**
    - Attach Network Adapter to `PG_VLAN10`.   
3. **VM3:**
    - Attach Network Adapter to `PG_VLAN11`.   

### Step 3: Configure the Virtual Firewall (pfSense)
1. Open the pfSense VM Console in ESXi.
2. Assign the interfaces:
    - **Interface 1 (em0):** Assign as LAN → IP: `192.168.10.1 /24`.   
    - **Interface 2 (em1):** Assign as OPT1 → IP: `192.168.11.1 /24`.   
3. Log in to the pfSense Web GUI (`[https://192.168.10.1](https://192.168.10.1)`):
    - Go to **Firewall** → **Rules**.   
    - Under **LAN** tab: Add a rule permitting **All Traffic** (Pass | IPv4* | Source: LAN net | Destination: Any).   
    - Under **OPT1** tab: Enable the interface and add a rule permitting **All Traffic** (Pass | IPv4* | Source: OPT1 net | Destination: Any).   

### Step 4: Configure Physical Switch Port to Server (SW1)
Your physical server's NIC connects to **SW1 Port `Gi1/4`**. Since ESXi carries both VLAN 10 and VLAN 11 traffic, `Gi1/4` **must be configured as a 802.1Q Trunk Port** instead of an access port.
Run the following commands on **SW1**:
Cisco CLI

```
SW1# configure terminal
SW1(config)# interface GigabitEthernet 1/4
SW1(config-if)# description Trunk_to_ESXi_Server
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk allowed vlan 10,11
SW1(config-if)# no shutdown
SW1(config-if)# exit

! Add missing VLAN 11 to SW1 database
SW1(config)# vlan 11
SW1(config-vlan)# name VLAN_11
SW1(config-vlan)# exit
SW1# copy running-config startup-config
```

### Step 5: Fix Physical Switch SW2 Configuration
Currently, **SW2** is missing `VLAN 10` in its database, and the Laptop port is on VLAN 11 while trying to use a VLAN 10 IP address (`192.168.10.50`).
Run the following on **SW2**:
Cisco CLI

```
SW2# configure terminal
! 1. Add missing VLAN 10 to SW2 database
SW2(config)# vlan 10
SW2(config-vlan)# name VLAN_10
SW2(config-vlan)# exit

! 2. Re-assign Laptop Port (Fa1/1) to VLAN 10 so 192.168.10.50 works natively
SW2(config)# interface FastEthernet 1/1
SW2(config-if)# switchport mode access
SW2(config-if)# switchport access vlan 10
SW2(config-if)# no shutdown
SW2(config-if)# exit
SW2# copy running-config startup-config
```

### Step 6: Endpoint Gateway Configuration
Ensure each end device is configured with its respective static IP and pfSense gateway:
- **VM1 (`192.168.10.10`):** Subnet Mask: `255.255.255.0` | Default Gateway: `192.168.10.1`
- **VM2 (`192.168.10.11`):** Subnet Mask: `255.255.255.0` | Default Gateway: `192.168.10.1`
- **VM3 (`192.168.11.10`):** Subnet Mask: `255.255.255.0` | Default Gateway: `192.168.11.1`
- **Laptop (`192.168.10.50`):** Subnet Mask: `255.255.255.0` | Default Gateway: `192.168.10.1`

### Verification Checklist
To verify successful communication:
1. Ping `192.168.10.1` from **VM1** or **VM2** (Tests intra-VLAN 10 path to pfSense firewall).
2. Ping `192.168.10.1` from **Laptop** across physical switches **SW2 → SW1 → Server**.
3. Ping `192.168.11.10` (VM3) from **VM1** (`192.168.10.10`) to verify inter-VLAN routing through pfSense.



