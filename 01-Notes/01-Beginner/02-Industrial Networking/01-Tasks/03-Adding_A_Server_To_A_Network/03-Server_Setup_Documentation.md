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
> [!NOTE] **NOTE**: The server fans will immediately spin loudly for a few seconds and then go quiet. This is normal but hella annoying; the management chip (iLO) is booting up, but the main server is still off.

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

- When the screen changes press **F8** again, then select Set To defaults on the blue screen, it will reset the server and wait for it to boot up and you should be done.
- Depending on why you're resetting you might wanna change your RAID configuration, reset to default settings and such, in order not to have any problems, one such reason you might wanna do this is to install a new/different OS on the server, we will discuss that next.

#### OPTIONAL — do this one, I skipped it the first time and paid for it later
RAID 5 was already setup on the server but part of the task is to (know how to) do this so, it's a fairly short process so there's that.
##### Provision the Storage Array
- Reboot the server and press **F5** to enter the HPE Smart Storage Administrator (SSA).
- Identify your physical drives. Create a **RAID 1** array using two identical disk drives to serve as your fault-tolerant OS boot volume.
- Name the logical drive `OS_BOOT` and format it with maximum available space.
- Task step 3 asks for RAID 5 on top of this, so configure your remaining drives into a **RAID 5** array named `DATA_STORE` — don't skip this part like I did, go back and actually do it now if you haven't.
##### Adjust System BIOS (RBSU) Settings
- Reboot the server and press **F9** to enter the ROM-Based Setup Utility.
- Change the **Power Management Controller Profile** to _Balanced Power and Performance_ (optimized for home labs to reduce fan noise and power draw).
- Navigate to the boot order menu. Set your logical drive `OS_BOOT` as the primary boot controller, followed by your internal/external USB ports.

### Step 0C: Connecting to the Server(**Install the New Operating System: VMware ESXi**)
> Honestly just follow [this tutorial](https://www.starwindsoftware.com/blog/how-to-install-vmware-esxi-and-create-your-first-vm/), it's much more concise yet still more descriptive than what I wrote below. Basically it's a more efficient tutorial. I didn't go into too much detail below because I basically followed this tutorial.

> Here's another [link](https://www.starwindsoftware.com/blog/tag/virtual-machine-setup/) worth checking out

- You've set up the screen and depending on what you see once the boot up of the server is finished like in [[#Step 0A: Connecting to the Server (**Setup the screen**)|Step 0A]], the VMware server screen. We will set up VMware which will be a long but short process.
- First download **VMware ESXi 6.5**. Good luck finding it; it's discontinued teehee, nah I'm kidding (well it is discontinued though), [here's the link](https://archive.org/details/vmwareesxi6.x) you can find it from, download **VMware ESXi 6.5**.
- Create a bootable drive with **Rufus**, plug the USB onto the server, restart the server and wait until you see HP ProLiant screen and press Boot Menu, then choose boot from USB drive, follow the steps and complete the installation
![[input_file_0.png|720]]

> [!IMPORTANT] **IMPORTANT** - When creating the bootable drive make sure change _Partition Scheme_ to _MBR_, otherwise you'll get this beautiful warning.
![[input_file_19 3.png]] ^bootable-drive

- Once it's installed, make sure to change your network settings to a network range of your choice, make sure that the device that you will use to manage the server with via Web Browser is on the same network.
![[input_file_21.png]]

> [!NOTE] **NOTE** - When you're configuring the management network you ensure that the network adapters you are connected to are selected. Also if you make a mistake in the Management Interface and for some reason remove, `vmnic0` or any other basic network configuration of the server, this will be your go to lifeline, well not lifeline more like your only option really.

- Now a very important step before adding this device to a permanent network is to ping it from the PC to the server and from the server to the PC to ensure they are actually communicating.
![[1000376266.jpg]]

- Magical, now let's access the management interface

### Step 0D: Connecting to the Server (**Access the VMware ESXi management interface**)
- After resetting the server, you should have a keyboard connected to the server for communication.
- To access that IP address, your computer needs to be on the same IP subnet. Because your existing basic network likely uses a different range (such as `192.168.1.x`), your router won't automatically bridge the connection. So change that.
![[Pasted image 20260903133949 1.png]]

- Once your PC and the Server are on the same network, open your web browser and navigate to the IP on the server screen like the above image `[https://x.x.x.x]`, you should see the following:
![[Pasted image 20260903135239.png|439]]

- Since you reset your server and installed a new OS you had to have created a user during the install, the common user is **root** and whatever password you chose. In order to sign in to the management interface enter your details and you should see the following interface:
![[d105f195-3dae-4725-8c19-806820c8e2e0.png]]

---

### Step 0E: Configure ESXi Virtual Networking (this is the part that kept costing me access, I almost crashed out)
The server has two NICs I actually care about for this task: `vmnic0`, which I run a direct cable from straight into my laptop for host management, and `vmnic1`, which goes to Switch 1's `Gi1/4` port. My first attempt dumped both of them onto the same virtual switch (`vSwitch0`), and every time `vmnic1` came up, my laptop's direct connection through `vmnic0` dropped. Turns out (according to google) that's because ESXi was trying to bridge/load-balance across both physical links at once, with no VLAN separation, which caused a loop. Do I understand what that means? No, but the fix is to give each NIC its own vSwitch and never let them touch.

**vSwitch0 — management only, never touches VLANs**
- Only uplink: `vmnic0`.
- Port group: **Management Network**, VLAN ID `0` (none — it's a private point-to-point cable, tags don't matter here).
- `vmk0` static IP: `192.168.10.2 /24`, no gateway.
- Steps: **Networking → Virtual switches → vSwitch0 → Edit settings** → under Uplinks, make sure only `vmnic0` is listed (remove `vmnic1` if it's there).

**vSwitch1 — the actual production trunk**
- Only uplink: `vmnic1`.
- Steps: **Networking → Virtual switches → Add standard virtual switch** → name it `vSwitch1`, uplink `vmnic1`.
- Edit settings on `vSwitch1` → **Security** → set **Promiscuous Mode**, **MAC Address Changes**, and **Forged Transmits** to **Accept**. pfSense needs this to actually route between VLANs, otherwise ESXi silently drops the traffic pretending to be from another MAC.
- Port groups (**Networking → Port groups → Add port group**), both attached to `vSwitch1`:
  - `PG_VLAN10`, VLAN ID `10`
  - `PG_VLAN11`, VLAN ID `11`

Once this split is done, `vmnic1` being up permanently (it's connected to the switch all the time) no longer affects my direct laptop link on `vmnic0` at all — they're on completely separate vSwitches now.

**Note for anyone with a laptop that has more than one Ethernet port:** if you can, keep a permanent cable on `vmnic0` to your laptop and never unplug it. I can't do that (single Ethernet port on my laptop because I'm **POOR**), so I unplug/replug and reconfigure my laptop's IP depending on which link I need — that whole process works and leaves me genuinely on the verge of a major crashout. But it works...
