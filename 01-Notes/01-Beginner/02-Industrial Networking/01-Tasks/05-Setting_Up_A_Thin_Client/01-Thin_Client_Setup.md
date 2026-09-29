# HP Elite t655 Thin Client
The [HP Elite t655 Thin Client](https://www.hp.com/za-en/products/thin-clients/product-details/2101492876) is a secure, commercial-grade desktop device built for efficient cloud or on-premise virtualization tasks
![[Pasted image 20260903114456.jpg|232]]

## Why HP Thin Clients?
HP is making work from anywhere easier for cloud computing, with secure solutions and real-time device management optimized for desktop virtualization and remote collaboration.

# HP Elite t655 Thin Client Deployment Guide
The HP Elite t655 Thin Client is a commercial-grade desktop device built for efficient cloud or on-premise virtualization tasks.

---

## Technical Specifications

| Feature                   | Details                               |
| :------------------------ | :------------------------------------ |
| **Operating System**      | **HP ThinPro OS** (Linux-based)       |
| **Target Network**        | `192.168.193.0/24` OT Network Segment |
| **Default Gateway**       | `192.168.193.1`                       |
| **Ignition SCADA Server** | `192.168.193.2:8088`                  |
| **Remote Management**     | RealVNC / HP Device Manager (HPDm)    |

---

## Task Breakdown
* Decide on its name and label it with the name and IP address.
* Once booted up, switch to Administrator mode.
* Give them static IP addresses on the `192.168.193.0` network.
* Give them names following the naming convention.
* Setup VNC.
* Ping the Gateway `192.168.193.1`.
* Go to the Ignition server `192.168.193.2:8088`.
* Go to **Perspective** -> **Launch** -> then on **CCL2 SCADA Project** (the first one), launch it.
* Once it's loaded, you'll see the **Process** section on the right side; choose the corresponding process to the device name you are configuring.
* Once you enter that process, copy the link and set the browser to do the following:
  * When the user clicks on the browser, it should lead to the copied link from the process.
  * Rename the browser to `CCL2-[Process Name]`.
  * Enable Kiosk, and disable all the sub-options.
  * Remove Features: Tabbing, Home Button, Back/Forward Button.
  * Set the browser to auto-connect so it starts up immediately when it's closed, or when the PC boots up.

---
## Deployment Steps
### Step 1: Unboxing & Physical Inspection
* Unpack the HP Thin Client units, external power adapters, VESA mounting brackets, and accessories from their packaging.
![[1000377760.jpg|335]] ![[1000377761.jpg|340]]

* *Verification:* Ensure all mini PC units, power bricks, and mounting brackets are free of physical damage before proceeding.

### Step 2: OS Installation & Deployment
* Deploy the operating system image (**HP ThinPro 8.0** or **Windows 10 IoT Enterprise LTSC**):
  * Insert the HP ThinUpdate bootable USB drive into a front-panel USB port.
  * Power on the unit and tap `F9` repeatedly to enter the Boot Menu.
  * Select the USB drive and restore the standardized factory OS image.
  * Allow the imaging process to complete, then remove the USB drive upon reboot.
  * Ensure you enable the hard drive and ensure it is at the top of the boot order.
![[1000377763.jpg|459]]

* *Verification:* The device successfully boots into the default Thin OS desktop interface.

### Step 3: Labeling & Asset Mapping
* Apply physical labels to each chassis documenting the assigned **Hostname** and **Static IP Address**.
![[1000377765.jpg]]

*Static IP Allocations:*
* **IND-ING-CCL2-COATER1** — `192.168.193.129`
* **IND-ING-CCL2-COATER2** — `192.168.193.128`
* **IND-ING-CCL2-LEVELLER** — `192.168.193.127`
* **IND-ING-CCL2-EXIT** — `192.168.193.126`

*Verification:* Verify physical labels align with your network address register.

### Step 4: Administrator Rights & IP Configuration
* Switch from User mode to **Administrator Mode**.
![[1000377842.jpg]]
* Open **Network Settings** and configure the static IP parameters:
  * **IP Address:** `192.168.193.xxx` (per label assignment)
  * **Subnet Mask:** `255.255.255.0`
  * **Default Gateway:** `192.168.193.1`
* Update the system hostname to follow the site naming convention.
* *Verification:* Run `ping 192.168.193.1` in command line to confirm gateway communication.
![[1000377845.jpg]]

### Step 5: Remote Management Setup (VNC)
* Open system settings and navigate to **Remote Management** / **VNC**.
* Enable the VNC server daemon and set an administrative access password.
* Configure VNC to start automatically on system boot.
* *Verification:* Connect to the thin client's IP via a VNC viewer from a workstation.

### Step 6: Ignition SCADA Perspective Session Setup
* Open the browser and navigate to `http://192.168.193.2:8088`.
* Click **Perspective** -> **Launch** -> **CCL2 SCADA Project** (the first project listed).
* Open the **Process** section on the right side and select the matching process for the device.
* Copy the full destination URL from the address bar once the process interface loads.
* *Verification:* Verify the screen loads data for the corresponding production line section.
![[1000377847.jpg|322]]![[1000377849.jpg|343]]

### Step 7: Kiosk Lockdown & Auto-Start Configuration
* Open the browser application profile manager.
* Set the target launch URL to the process link copied in Step 6.
* Rename the browser connection profile to `CCL2-[Process Name]`.
* Enable **Kiosk Mode** and disable all sub-options.
* Strip browser UI controls: disable Tabbing, Home Button, and Back/Forward Navigation.
* Enable auto-connect/auto-start so the browser immediately launches on boot or application restart.
* *Verification:* Reboot the thin client. The device should open straight into full-screen SCADA Perspective without displaying desktop or browser controls.
![[1000377843.jpg]]
![[1000377844.jpg]]