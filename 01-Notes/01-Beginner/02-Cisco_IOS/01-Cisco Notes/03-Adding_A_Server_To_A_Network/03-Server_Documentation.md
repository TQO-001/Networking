# Documentation
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
> [!NOTE] **NOTE:  The server fans will immediately spin loudly for a few seconds and then go quiet. This is normal; the management chip (iLO) is booting up, but the main server is still off.

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
- Depending on why you're resetting you might wanna change you RAID configuration, reset to default settings and such, in order not to have any problems, one such reason you might wanna do this is to install a new/different OS on the server, we will discuss that next.

#### OPTIONAL 
##### Provision the Storage Array
- Reboot the server and press **F5** to enter the HPE Smart Storage Administrator (SSA).
- Identify your physical drives. Create a **RAID 1** array using two identical disk drives to serve as your fault-tolerant OS boot volume.
- Name the logical drive `OS_BOOT` and format it with maximum available space.
- _(Optional)_ If you have remaining drives, configure them into a **RAID 5** or **RAID 10** array named `DATA_STORE`.
##### Adjust System BIOS (RBSU) Settings
- Reboot the server and press **F9** to enter the ROM-Based Setup Utility.
- Change the **Power Management Controller Profile** to _Balanced Power and Performance_ (optimized for home labs to reduce fan noise and power draw).
- Navigate to the boot order menu. Set your logical drive `OS_BOOT` as the primary boot controller, followed by your internal/external USB ports.

### Step 0C: Connecting to the Server(**Install the New Operating System: VMware ESXi**)
> Honestly just follow [this tutorial](https://www.starwindsoftware.com/blog/how-to-install-vmware-esxi-and-create-your-first-vm/), it's much more concise yet still more descriptive than what I wrote below. Basically it's a more efficient tutorial. 

> Here's another [link](https://www.starwindsoftware.com/blog/tag/virtual-machine-setup/) worth checking out

- You've setup up the screen and depending on what you see once the boot up of the server is finished like in [[#Step 0A: Connecting to the Server (**Setup the screen**)|Step 0A]], the VMware server screen. We will setup up VMware which will be a long but short process.
- First download the **VMware ESXi 6.5**, Good luck finding it; it's discontinued teehee, nah I'm kidding (well it is discontinued though), [here's the link](https://archive.org/details/vmwareesxi6.x) you can find it from, download **VMware ESXi 6.5**. 
- Create a bootable drive with **Rufus**, plug the USB onto the server, restart the server and wait until you see HP ProLiant screen and press Boot Menu, then choose boot from USB drive, follow the steps and complete the installation
![[input_file_0.png|720]]

> [!IMPORTANT] **IMPORTANT ** - When creating the bootable drive make sure change _Partion Scheme_ to _MBR_, otherwise you'll get this beautiful warning. 
![[input_file_19 3.png]] ^bootable-drive

- Once it's installed, make sure to change you network settings to a network range of your choice, make sure that the device that you will use to manage the serve with via Web Browser is on the the same network.
![[input_file_21.png]]

- Now a very important step before adding this device to a permanent network is to ping it from the PC to the server and from the server to the PC to ensure they are actually communicating.
![[1000376266.jpg]]

- Magical, now let's access the management interface

### Step 0D: Connecting to the Server (**Access the VMware ESXi management interface**)
- After resetting the server, you should have a keyboard connected on to the server for communication. 
- To access that IP address, your computer needs to be on the same IP subnet. Because your existing basic network likely uses a different range (such as `192.168.1.x`), your router won't automatically bridge the connection. So change that.
![[Pasted image 20260903133949 1.png]]

- Once your PC and the Server are on the same network, open your web browser and navigate to the IP on the server screen like the above image `[https://x.x.x.x]`, you should see the following:
![[Pasted image 20260903135239.png|439]]

- Since you reset you server and installed a new OS you had to a have created a user during the install, the common user is **root** and whatever password you chose. In order to sign in to the management interface enter your details and you should see the following interface:
![[d105f195-3dae-4725-8c19-806820c8e2e0.png]]


---
## 3. Creating VMs
We're gonna create 3 VMs on the server to add to our network
![[3f1557c4-fd9d-483e-a9ce-cdd6a1c8b5f3.png]]

### Create Your First Virtual Machine (Example: Windows)
1. Navigate to **Virtual Machines** and then go to the **Create / Register VM**.
2. Choose **Create a new virtual machine**.
3. Enter a name (e.g., VM0).
4. Guest OS: **Windows → Microsoft Windows 10 (64-bit)**.
5. Select your datastore.
6. Assign resources: 2 vCPU, 8 GB RAM, 100 GB disk.
7. Attach your VM to the VM-Network port group or create one beforehand.
8. Mount the Windows ISO from the datastore by uploading it from your PC to your server via the established network, just drag and drop into the datastore.
9. Finish and power on the VM.
10. Install Windows following the prompts.

Make sure you should check the post-installation checklist:
- Set **NTP** for accurate time.
- Backup host configuration.
- Apply the latest ESXi patches.
- Monitor hardware health status in **Monitor → Hardware**.

---
- After you've done this process 3 times to create our VMs for the Sun Daddy network, you should have 3 working VMs.
![[a991301a-6a59-4ac7-9bae-c1d5fea46e9e 2.png]]

- Now let's ensure **VM1** and **VM2** are on **VLAN 10** and **VM3** is on **VLAN 11**, ensure you have created these port groups and have assigned them to the same **vSwitch (Virtual Switch)**.![[e93b0a4a-b37b-4dcb-ba75-41a84f3d4648.png]]

- The vSwitch should look like this
![[87248ec0-581a-4792-98e5-afc423380634.png|433]]

- What you need to do next is ensure the VMs have an IP address within the same network(s) we created in the Sun Daddy network layout.
![[108418e5-dfab-4641-bfdb-e0dc9a267e36.png|607]]
> VM1

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



