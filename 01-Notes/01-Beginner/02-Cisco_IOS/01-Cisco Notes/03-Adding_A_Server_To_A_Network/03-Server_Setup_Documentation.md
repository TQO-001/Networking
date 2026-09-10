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
> Honestly just follow [this tutorial](https://www.starwindsoftware.com/blog/how-to-install-vmware-esxi-and-create-your-first-vm/), it's much more concise yet still more descriptive than what I wrote below. Basically it's a more efficient tutorial. I didn't go into too much detail below because I basically followed this tutorial.

> Here's another [link](https://www.starwindsoftware.com/blog/tag/virtual-machine-setup/) worth checking out

- You've setup up the screen and depending on what you see once the boot up of the server is finished like in [[#Step 0A: Connecting to the Server (**Setup the screen**)|Step 0A]], the VMware server screen. We will setup up VMware which will be a long but short process.
- First download the **VMware ESXi 6.5**, Good luck finding it; it's discontinued teehee, nah I'm kidding (well it is discontinued though), [here's the link](https://archive.org/details/vmwareesxi6.x) you can find it from, download **VMware ESXi 6.5**. 
- Create a bootable drive with **Rufus**, plug the USB onto the server, restart the server and wait until you see HP ProLiant screen and press Boot Menu, then choose boot from USB drive, follow the steps and complete the installation
![[input_file_0.png|720]]

> [!IMPORTANT] **IMPORTANT ** - When creating the bootable drive make sure change _Partion Scheme_ to _MBR_, otherwise you'll get this beautiful warning. 
![[input_file_19 3.png]] ^bootable-drive

- Once it's installed, make sure to change you network settings to a network range of your choice, make sure that the device that you will use to manage the serve with via Web Browser is on the the same network.
![[input_file_21.png]]

> [!NOTE] **NOTE** - When you're configuring the management network you ensure that the network adapters you are connected to are selected. Also if you make a mistake in the Management network

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

