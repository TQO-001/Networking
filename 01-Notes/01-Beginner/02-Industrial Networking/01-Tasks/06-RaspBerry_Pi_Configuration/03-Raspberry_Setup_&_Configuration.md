# 3. Raspberry Pi Setup Guide
> You could follow this tutorial as it goes into more depth https://www.raspberrypi.com/documentation/computers/getting-started.html#setup

This setup guide outlines how to prepare, assemble, and configure a Raspberry Pi for both **desktop** and **headless** (remote access) configurations.

---

## 3.1 Hardware Prerequisites & Requirements
### Required Hardware
* **Raspberry Pi Board:** Single-board computer (SBC), Pi Zero, Keyboard computer (e.g., Pi 400/500), or Compute Module.
* **Boot Media:** 
  * MicroSD card (most common).
  * *Alternative options on newer models:* USB Mass Storage, NVMe SSD (via PCIe HAT), or Network Boot (PXE).
* **Power Supply:** Official USB-C or Micro-USB power adapter capable of supplying adequate voltage/current for your model.
* **Setup-Specific Equipment:**
  * **Desktop Setup:** Monitor (HDMI / Micro-HDMI cable), USB Keyboard, and USB Mouse.
  * **Headless Setup:** A secondary computer (laptop/desktop) on the same network.

### Optional Add-ons
* **Case:** Protects board components and prevents electrical short circuits.
* **Networking:** Ethernet cable (RJ45) for wired connections (Wi-Fi can be configured directly via software).
* **Cooling:** Active cooler or heatsinks (especially recommended for heavy workloads on Pi 4 and Pi 5).

---

## 3.2 Physical Assembly & Connection
Assemble components in the following sequence:

1. **Insert Storage:** Insert the flashed microSD card into the Pi’s slot.
2. **Connect Peripherals (Desktop Mode):**
   * Connect monitor(s) using the HDMI / Micro-HDMI port(s).
   * Connect keyboard and mouse to the USB ports.
   * (Optional) Plug in an Ethernet cable.
1. **Connect Power (Last Step):** Plug the official power adapter into the power input port. The Pi will automatically switch on and begin the first-time boot process.

![[Pasted image 20260930094228.png|427]]

---

## 3.3 Installing an OS onto Boot Media
### 3.3.1 Raspberry Pi Imager
**Raspberry Pi Imager** is the recommended utility to write an OS image to your microSD card or storage media from Windows, macOS, or Linux.

> You could just follow [this tutorial](https://www.raspberrypi.com/documentation/computers/getting-started.html#install), I pretty much stole the pictures from there.

> I don't quite know what [this tutorial](https://wiki.seeedstudio.com/Raspberry_Pi_3_Model_B/) is but you could check it out too.
#### Prerequisites
To install an OS on a storage device, you need:
- A blank storage device to be your boot media, typically a microSD card.
- A computer you can use to write the OS image onto your storage device so that your Raspberry Pi can boot from it.
- A way to plug your storage device into that computer.

#### Download & Install Raspberry Pi Imager
   Download the installer for your host operating system (Windows, macOS, or Ubuntu/Linux) from the official website and install it.
![[windows.webp|389]]


#### Method 1: Custom Flash
You can flash a custom `.img` file to an SD card or USB drive using the official Raspberry Pi Imager. 

##### How to Flash a Custom `.img` File
- Open the **Raspberry Pi Imager**.
- Select your **Raspberry Pi Device** model if prompted.
- Click on **Choose OS**.
- Scroll all the way to the bottom of the list and select **Use custom**.
- Browse your computer, select your `.img` file (it also accepts compressed formats like `.zip`, `.gz`, or `.xz`), and click open.
- Click **Choose Storage** and select your target SD card or USB drive.
- Click **Write** to flash the image.

#### Method 2: Downloading from Raspberry Pi Imager
1. **Select Your Device & Operating System**  
   Open Raspberry Pi Imager and select your Raspberry Pi model. Then choose an Operating System (e.g., *Raspberry Pi OS (64-bit)* for general desktop use).

![[Pasted image 20260930145007.png|421]]

2. **Choose Storage & OS Customisation**  
   Insert your microSD card or USB drive into your computer and select it under **Storage**. Use the OS customisation menu to pre-configure options like hostname, username/password, Wi-Fi details, and SSH access.

![[Pasted image 20260930145032.png|423]]

3. **Write to Media**  
   Click **WRITE**. 

> [!note] **Note:** This process will erase all existing data on the chosen drive before flashing the OS.

---
### 3.3.2 Setup and Installation
Once you're done with the installation you should see the following, click next:
![[Screenshot (57).png|368]]

![[Screenshot (58).png|369]]

![[Screenshot (59).png|371]]

![[Screenshot (60).png|369]]

![[Screenshot (61).png|370]]

![[Screenshot (62).png|371]]

I'm sure you noticed I didn't put any steps above, I feel some things don't require explanation, the only reason I'm mentioning it now is because it is the first of many more times to come, where I just put screenshots and expect you to be able to figure out how to carry out these steps.

> [!info] ✨✨***The Magical Power Of Common Sense***!✨✨

---
## 3.4.1 Raspberry Pi Remote Access Guide (MobaXterm Edition)
This guide covers setting up remote access to control a Raspberry Pi over a local network using **MobaXterm** for both SSH terminal control and VNC desktop screen sharing.

### 1. Prerequisites & Finding the Pi's IP Address
Ensure your Raspberry Pi and your Windows host computer running MobaXterm are connected to the same local network.

#### Find the IP Address:
- **Terminal Command:** Run `hostname -I` on the Pi to display its local IP address (e.g., `192.168.1.50`). 
or
- **Desktop Interface:** Hover over the network icon in the top system tray. 

### 2. Enabling Remote Access on the Raspberry Pi
Before connecting via MobaXterm, enable **VNC** interfaces on the Pi.

#### Step 1: Via Raspberry Pi Configuration (GUI)
1. Navigate to **Menu** > **Preferences** > **Raspberry Pi Configuration**. 
2. Go to the **Interfaces** tab. 
3. Toggle both **VNC** to **Enabled**. 
4. Click **OK**. 
![[Pasted image 20261001131828.png]]
#### Step 2: Via Command Line (`raspi-config`)
1. Open terminal and run: `sudo raspi-config`
2. Navigate to **Interface Options**. 
![[Pasted image 20261001133057.png|341]]![[Pasted image 20261001133146.png|342]]
3. Select **VNC** > Select **Yes**. 
![[Pasted image 20261001133225.png|335]]
4. Exit and reboot if prompted (`sudo reboot`). 

### 3. Connecting via MobaXterm: Built-in VNC Graphical Session
MobaXterm has a built-in VNC viewer, allowing you to view and control the full graphical desktop without installing additional server software on the Pi.

1. Open **MobaXterm**. 
2. Click **Session** (top-left) > Select **VNC**. 
3. **Remote host:** Enter your Pi's IP address (e.g., `10.10.22.63`). 
4. **Port:** Leave as default `5900` (standard native VNC display port). 
5. Click **OK**. 
6. When prompted, enter your Raspberry Pi user password (or the VNC password set in `raspi-config` / Raspberry Pi OS settings). 

After that you're done! **NOT!!!** Now comes the fun part, apparently the Standard used by Gijima is TightVNC so here's a special for you.


## 3.4.2 Raspberry Pi OS (Bookworm) WayVNC Configuration for TightVNC Viewer
> [!note] It was a major headache figuring this one out only to find out that the issue was the firewall was blocking me from downloading the TightVNC server software. This guide documents the diagnosis and resolution to configure `wayvnc` so that TightVNC Viewer can successfully connect without installing additional software on the Raspberry Pi. 

> I'm sure if works but if you aren't restricted by firewall rules, you can follow [this tutorial](https://raspi.tv/2012/install-and-use-tightvnc-remote-desktop-on-raspberry-pi-through-windows-android-or-ios) my guy

### Overview
Raspberry Pi OS (Bookworm and later) uses **WayVNC** as its default VNC server under the Wayland desktop environment. By default, `wayvnc` mandates modern TLS authentication, which causes legacy clients like **TightVNC Viewer** to fail with the following error:

![[Pasted image 20261001161400.png]]

---

### 1. System Identification & Verification
First, verify the active VNC process and installed packages to confirm `wayvnc` is running under Wayland.

#### Check Running VNC Processes
```bash
ps aux | grep -iE 'vnc|vncserver' | grep -v grep
````

**Expected Output:**
```bash
vnc        937  0.0  0.0   2416  1552 ?        Ss   02:38   0:00 /bin/sh /usr/sbin/wayvnc-run.sh
vnc        964  0.0  1.6 747492 130484 ?        Sl   02:38   0:05 wayvnc --detached --gpu --config /etc/wayvnc/config --socket /tmp/wayvnc/wayvncctl.sock
root      1111  0.0  0.2  33040 20280 ?        Ss   02:38   0:00 python /usr/sbin/wayvnc-control.py
```

#### Check Installed VNC Packages
```Bash
dpkg -l | grep -i vnc
```

Put it into Gemini or some other AI if you can't read it.

### 2. Solution: Configure WayVNC for Legacy Client Compatibility
To allow TightVNC Viewer to connect without encryption negotiation errors, disable the mandatory TLS authentication requirement in `wayvnc`.

#### Step 1: Open the WayVNC Configuration File
```Bash
sudo nano /etc/wayvnc/config
```

#### Step 2: Update Configuration
Replace or edit the file content to match the following configuration:
```bash
address=0.0.0.0
enable_auth=false
```

- **`address=0.0.0.0`**: Listens on all IPv4 network interfaces.
- **`enable_auth=false`**: Bypasses the strict TLS security requirements, allowing TightVNC Viewer to complete the RFB protocol handshake.

Save the file (**Ctrl + O**, **Enter**) and exit nano (**Ctrl + X**).

#### Step 3: Restart the WayVNC Service
Apply the new configuration by restarting `wayvnc`:
```Bash
sudo systemctl restart wayvnc
```

### 3. Connecting via TightVNC Viewer

1. Launch **TightVNC Viewer** on your client machine.
2. In the **VNC Server** field, enter the IP address of your Raspberry Pi (e.g., `10.10.22.63`).
3. Click **Connect**.
4. Leave the password field blank if prompted, as authentication is handled by network binding.

![[Pasted image 20261001162115.jpg]]

![[Pasted image 20261002075526.png|442]]

---

## 3.5 Safe Remote Shutdown

Always shut down or reboot gracefully through your terminal before disconnecting power to avoid micro-SD card corruption:
```bash
# Soft Reboot
sudo reboot

# Power Off
sudo shutdown -h now
```

