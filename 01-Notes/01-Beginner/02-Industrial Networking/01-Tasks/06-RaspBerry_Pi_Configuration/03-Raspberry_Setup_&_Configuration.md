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

## 3.4 Setting up the Sensor: Grove - Temperature&Humidity Sensor Pro(DHT22)
> [!note] If this is the first time you work with Arduino, I recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start. Follow [this tutorial](https://wiki.seeedstudio.com/Grove-Temperature_and_Humidity_Sensor_Pro/#software) as a more descriptive guide

Connect the Grove - Temperature&Humidity Sensor Pro (DHT22) to a PWM or digital port on a Grove Base Hat for your Raspberry Pi using a 4-pin Grove cable

- **Step 1.** Download the [Seeed DHT library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) from Github.
- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Restart the Arduino IDE. Open “ DHTtester” example via the path: **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. Through this demo, we can read the temperature and relative humidity information of the environment.


