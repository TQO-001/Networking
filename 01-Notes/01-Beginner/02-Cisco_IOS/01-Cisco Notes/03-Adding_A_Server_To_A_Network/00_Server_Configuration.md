# HPE ProLiant DL360p Gen8 Server Configuration Sub-Task
You've learnt how to configure a Cisco switch, as you get more exposed to the networking world you'll come to understand how to configure different devices, and you'll be introduced to various CLI's and brand and ways of doing things, it really helps to have a solid foundation on you fundamentals and having a clear understanding of how things work on a basic level. 

For this task you will configure a server; more specifically a **HPE ProLiant DL360p Gen8 Server**. The more you practice setting up server hardware, provisioning remote management, and configuring storage arrays, the easier it becomes to deploy bare-metal infrastructure. Some configurations—like using legacy boot or disabling hardware monitoring alerts—are things you might only do in a home lab or specific legacy environments, but understanding _why_ you configure them is key to mastering enterprise systems.
![[4496312008789_2.resize-low_800x.webp|380]] ![[StorageReview-HP-ProLiant-DL360p-Gen8-Server-Open.webp|325]]

> **HPE ProLiant DL360p Gen8 Server**

---
## Concepts Explored
- **Remote Management (iLO 4) Configuration: 
    - Setting a static IP for out-of-band management
    - Creating administrative users and assigning privileges
    - Enabling secure remote access protocols (HTTPS/SSH)
- **Storage Array Provisioning (Smart Array P420i): 
    - Initializing physical hard drives/SSDs
    - Creating a hardware RAID array
    - Setting up a boot volume
- **BIOS / UEFI-Alternative Configuration (RBSU): 
    - Changing boot order sequence
    - Configuring power management profiles
- **HPE ProLiant Lifecycle Commands & Keys: 
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

