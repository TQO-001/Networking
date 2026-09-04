# HPE ProLiant DL360p Gen8 Server Configuration Sub-Task
You've learnt how to configure a Cisco switch, as you get more exposed to the networking world you'll come to understand how to configure different devices, and you'll be introduced to various CLI's and brand and ways of doing things, it really helps to have a solid foundation on you fundamentals and having a clear understanding of how things work on a basic level. 

For this task you will configure a server; more specifically a **HPE ProLiant DL360p Gen8 Server**. The more you practice setting up server hardware, provisioning remote management, and configuring storage arrays, the easier it becomes to deploy bare-metal infrastructure. Some configurations—like using legacy boot or disabling hardware monitoring alerts—are things you might only do in a home lab or specific legacy environments, but understanding _why_ you configure them is key to mastering enterprise systems.
![[4496312008789_2.resize-low_800x.webp|380]] ![[StorageReview-HP-ProLiant-DL360p-Gen8-Server-Open.webp|325]]

> **HPE ProLiant DL360p Gen8 Server**

---
## Concepts Explored
- **Remote Management (iLO 4) Configuration:**
    - Setting a static IP for out-of-band management
    - Creating administrative users and assigning privileges
    - Enabling secure remote access protocols (HTTPS/SSH)
- **Storage Array Provisioning (Smart Array P420i):**
    - Initializing physical hard drives/SSDs
    - Creating a hardware RAID array
    - Setting up a boot volume
- **BIOS / UEFI-Alternative Configuration (RBSU):**
    - Changing boot order sequence
    - Configuring power management profiles
- **HPE ProLiant Lifecycle Commands & Keys:**
    - `F8` – Accessing iLO 4 ROM-Based Setup Utility (during POST)
    - `F5` – Accessing HPE Smart Storage Administrator (SSA)
    - `F9` – Accessing ROM-Based Setup Utility (RBSU / BIOS)
    - `F11` – Accessing the One-Time Boot Menu

---
## What you will need
- **HPE ProLiant DL360p Gen8 Server**
- **2 Ethernet Cables** (1 for the dedicated iLO management port, 1 for a production network port)
- **1 Client PC/Laptop** (to access the web browser management interface)
- **A network switch or router** (to bridge your laptop and the server)
- **An Operating System ISO** on a USB drive or ready to mount virtually (e.g., Proxmox VE, TrueNAS Core, or Windows Server)

---
## Complete the following:
1. Configure the Remote Management Interface (iLO 4)

- Boot the server, press **F8** during the POST screen to enter the iLO 4 configuration utility.
- Change the network settings from DHCP to a **Static IP address**: `192.168.10.50` with a subnet mask of `/24` (`255.255.255.0`).
- Create a new local user account named `admin_tech` and assign a secure, custom password. Ensure this user has full administrator privileges (Remote Console, Config iLO, Virtual Media).

2. Provision the Storage Array

- Reboot the server and press **F5** to enter the HPE Smart Storage Administrator (SSA).
- Identify your physical drives. Create a **RAID 1** array using two identical disk drives to serve as your fault-tolerant OS boot volume.
- Name the logical drive `OS_BOOT` and format it with maximum available space.
- _(Optional)_ If you have remaining drives, configure them into a **RAID 5** or **RAID 10** array named `DATA_STORE`.

3. Adjust System BIOS (RBSU) Settings

- Reboot the server and press **F9** to enter the ROM-Based Setup Utility.
- Change the **Power Management Controller Profile** to _Balanced Power and Performance_ (optimized for home labs to reduce fan noise and power draw).
- Navigate to the boot order menu. Set your logical drive `OS_BOOT` as the primary boot controller, followed by your internal/external USB ports.

4. Deploy and Verify

- Plug your laptop into the same network switch as the server.
- Open a web browser on your laptop and navigate to `https://192.168.10.50`. Log in using your newly created `admin_tech` credentials.
- Open the **HTML5 Remote Console** through the iLO dashboard to verify you have full remote video access.
- Mount your Operating System ISO via the **Virtual Media** menu to prepare the server for software installation.

---
# Documentation
## 1. Configuration of the Switches
### Switch 1: **Cisco Catalyst IE-3300-8T2S-A** feat. **Cisco PWR-IE240W-PCAC-L**
```cisco
Switch>enable
Password:
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#hostname SW1
SW1(config)#vlan 10
SW1(config-vlan)#name VLAN_10
SW1(config-vlan)#exit
SW1(config)#interface range GigabitEthernet 1/3-4
SW1(config-if-range)#switchport mode access
SW1(config-if-range)#switchport access vlan 10
SW1(config-if-range)#exit
SW1(config)#do show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Te1/1, Te1/2, Gi1/5, Gi1/6
                                                Gi1/7, Gi1/8, Gi1/9, Gi1/10
                                                Ap1/1
10   VLAN_10                          active    Gi1/3, Gi1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
SW1(config)#interface vlan 10
*Apr 24 04:22:41.961: %LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan10, changed state
SW1(config-if)#
SW1(config-if)#ip address 192.168.10.254 255.255.255.0
SW1(config-if)#no shutdown
SW1(config-if)#exit
SW1(config)#ip default-gateway 192.168.10.1
SW1(config)#do show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  192.168.1.1     YES TFTP   up                    up
Vlan10                 192.168.10.254  YES manual down                  down
TenGigabitEthernet1/1  unassigned      YES unset  down                  down
TenGigabitEthernet1/2  unassigned      YES unset  down                  down
GigabitEthernet1/3     unassigned      YES unset  down                  down
GigabitEthernet1/4     unassigned      YES unset  down                  down
GigabitEthernet1/5     unassigned      YES unset  down                  down
GigabitEthernet1/6     unassigned      YES unset  down                  down
GigabitEthernet1/7     unassigned      YES unset  down                  down
GigabitEthernet1/8     unassigned      YES unset  down                  down
GigabitEthernet1/9     unassigned      YES unset  down                  down
GigabitEthernet1/10    unassigned      YES unset  down                  down
AppGigabitEthernet1/1  unassigned      YES unset  up                    up
SW1(config)#
SW1(config)#interface GigabitEthernet 1/10
SW1(config-if)#description Trunk_to_SW2
SW1(config-if)#switchport mode trunk
SW1(config-if)#switchport trunk allowed vlan 10,11
SW1(config-if)#exit
SW1(config)#exit
SW1#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
SW1#
```

### Switch 2 : **Cisco Catalyst IE-3000 Rugged Switch IE-3300-8T2S-E**

```cisco
Switch>
Switch>enable
Switch#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch(config)#hostname SW2
SW2(config)#vlan 11
SW2(config-vlan)#name VLAN_11
SW2(config-vlan)#exit
SW2(config)#interface range FastEthernet 1/1-4
SW2(config-if-range)#switchport mode access
SW2(config-if-range)#switchport access vlan 11
SW2(config-if-range)#exit
SW2(config)#do show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/1, Gi1/2
11   VLAN_11                          active    Fa1/1, Fa1/2, Fa1/3, Fa1/4
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
SW2(config)#
SW2(config)#interface vlan 11
SW2(config-if)#ip address 192.168.11.254 255.255.255.0
SW2(config-if)#no shutdown
SW2(config-if)#exit
SW2(config)#ip default-gateway 192.168.11.1
SW2(config)#
SW2(config)#do show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
Vlan1                  unassigned      YES unset  up                    down
Vlan11                 192.168.11.254  YES manual up                    down
FastEthernet1/1        unassigned      YES unset  down                  down
FastEthernet1/2        unassigned      YES unset  down                  down
FastEthernet1/3        unassigned      YES unset  down                  down
FastEthernet1/4        unassigned      YES unset  down                  down
GigabitEthernet1/1     unassigned      YES unset  down                  down
GigabitEthernet1/2     unassigned      YES unset  down                  down
SW2(config)#
SW2(config)#interface GigabitEthernet 1/1
SW2(config-if)#description Trunk_to_SW1
SW2(config-if)#switchport mode trunk
SW2(config-if)#switchport trunk allowed vlan 10,11
SW2(config-if)#exit
SW2(config)#exit
SW2#copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
[OK]
SW2#

```

## 2.Getting Started: Steps to configure iLO 5 in **HPE ProLiant DL360p Gen8 Server**
Connecting to an enterprise server for the first time can feel daunting because it lacks a standard desktop power button experience.


### Step 0A: Connecting to the Server (**Setup the screen**)
Before flipping any power switches, you must decide how you want to see the server's screen output. Choose either Method A (Local Physical Access) or Method B (Remote Network Access). You should see the following on your server screen after setting it up and after the boot process is finished:
![[Pasted image 20260903133949.png]]
---
#### Method A: Local Physical Access (KVM)
> Use this if you are sitting directly in front of the server rack with a spare monitor and keyboard.

```text
  [Monitor]         [Keyboard/Mouse]
      |                    |
  (VGA Port)          (USB Ports)
      \       _______      /
       \____/|       |\___/
             |  Gen8 |
             |_______|
```

##### 1. Connect Video and Peripherals
- Locate the VGA (blue) port on either the front or the back of the server. Plug in your external monitor.
- Locate any available USB ports (two on the front, four on the back). Plug in your keyboard and mouse.

##### 2. Connect Power Cables
- Ensure the server has at least one Power Supply Unit (PSU) firmly seated in the back.
- Plug the power cable into the PSU.
> [!NOTE] **NOTE:** The server fans will immediately spin loudly for a few seconds and then go quiet. This is normal; the management chip (iLO) is booting up, but the main server is still off.

##### 3. Power On
- Press the physical Power Button on the front right-hand side of the server panel.
- Wait 1–2 minutes for the initial hardware checks to pass before the HPE splash screen appears on your monitor.

---

#### Method B: Remote Network Access (iLO 4 Pre-Configuration)
> Use this if the server is in another room, and you want to manage it entirely from your laptop over a network.

```text
                  +-------------------+
                  |   Your Laptop     |
                  +---------+---------+
                            | (Ethernet)
                            v
                  +---------+---------+
                  |  Network Switch   |
                  +---------+---------+
                            |
                            | (Ethernet)
                            v
+---------------------------+---------------------------+
| [iLO Port]    [NIC 1]    [NIC 2]    [NIC 3]    [NIC 4]|
|                                                       |
|              HPE DL360p Gen8 Rear Panel               |
+-------------------------------------------------------+
```

##### 1. Identify the Dedicated iLO Port
- Look at the back of the server. Locate the single, isolated Ethernet port marked with an iLO logo (often has a small shape resembling a square with a circle next to it, distinct from the block of 4 network ports).

##### 2. Connect to the Network
- Plug an Ethernet cable from the dedicated iLO port into your network switch or router.
- Connect your personal laptop/PC to that same network switch or router.

##### 3. Power On and Find the Factory Credentials
- Connect the power cables to the server and press the power button.
- Pull out the plastic luggage tag / pull tab located on the front-right of the server panel.
- Write down the factory-default iLO HTTPS URL, Default Username (usually `Administrator`), and the unique 8-character Password printed on that tag.

##### 4. Open the Web Interface
- Open a web browser on your laptop.
- Type the default HTTPS URL or IP address found on the tag (or look at your router's DHCP client list for a device named `ILO<serial-number>`).
- Bypass any SSL certificate warnings and log in using the credentials from the pull tab. You can now see the server screen virtually.

---
### Step 0B: Connecting to the Server (**Resetting the Server**)
- Once you turn on your Server and you can see it's working, restart it and during the boot up process, press **F8** once you get to this screen:
![[Pasted image 20260903142152.png|467]]
- When the screen changes press **F8** again, the select Set To defaults on the blue screen, it will reset the server and wait for it to boot up and you should be done.
### Step 0C: Connecting to the Server (**Access the VMware ESXi management interface**)
- After resetting the server, you should have a keyboard connected on to the server for communication. 
- To access that IP address, your computer needs to be on the same IP subnet. Because your existing basic network likely uses a different range (such as `192.168.1.x`), your router won't automatically bridge the connection. So change that.
![[Pasted image 20260903133949 1.png]]
- Once your PC and the Server are on the same network, open your web browser and navigate to the IP on the server screen like the above image `[https://x.x.x.x]`, you should see the following:
![[Pasted image 20260903135239.png|439]]
- Since you reset you server you have put back on default settings and in order to sign in to the management interface, you must look for a card on your server:
![[97ce5e8d-9861-4c8d-8873-bfc321f6c69b.jpg|433]]


### Step 1: Configure the Remote Management Interface (iLO 4)
- Boot the server, press **F8** during the POST screen to enter the iLO 4 configuration utility.
- Change the network settings from DHCP to a **Static IP address**: `192.168.10.50` with a subnet mask of `/24` (`255.255.255.0`).
- Create a new local user account named `admin_tech` and assign a secure, custom password. Ensure this user has full administrator privileges (Remote Console, Config iLO, Virtual Media).

### Step 2: Provision the Storage Array
- Reboot the server and press **F5** to enter the HPE Smart Storage Administrator (SSA).
- Identify your physical drives. Create a **RAID 1** array using two identical disk drives to serve as your fault-tolerant OS boot volume.
- Name the logical drive `OS_BOOT` and format it with maximum available space.
- _(Optional)_ If you have remaining drives, configure them into a **RAID 5** or **RAID 10** array named `DATA_STORE`.

### Step 3: Adjust System BIOS (RBSU) Settings
- Reboot the server and press **F9** to enter the ROM-Based Setup Utility.
- Change the **Power Management Controller Profile** to _Balanced Power and Performance_ (optimized for home labs to reduce fan noise and power draw).
- Navigate to the boot order menu. Set your logical drive `OS_BOOT` as the primary boot controller, followed by your internal/external USB ports.

### Step 4: Deploy and Verify
- Plug your laptop into the same network switch as the server.
- Open a web browser on your laptop and navigate to `https://192.168.10.50`. Log in using your newly created `admin_tech` credentials.
- Open the **HTML5 Remote Console** through the iLO dashboard to verify you have full remote video access.
- Mount your Operating System ISO via the **Virtual Media** menu to prepare the server for software installation.

---


