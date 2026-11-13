# HP Elite t655 Thin Client
The [HP Elite t655 Thin Client](https://www.hp.com/za-en/products/thin-clients/product-details/2101492876) is a secure, commercial-grade desktop device built for efficient cloud or on-premise virtualization tasks
![[thin_client_setup-01-hp_elite_t655_thin.jpg|232]]

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

---

> [!Note] ### Autism For Evil
> #### HP ThinPro image file is corrupted
> During the installation of the first Thin Client, I had this one particular issue. The thin client is booting into the **BusyBox `(initramfs)` emergency shell** because the **HP ThinPro image file (`T9X90015.dd.gz`) on your USB drive is corrupted**, causing the installation to abort early.
> 
>
>![[image.jpg]]
>
![[image (1).jpg]]
>

## Deployment Steps
Setting up an HP Elite t655 Thin Client (commonly referred to as the HP Elite t655) running HP ThinPro involves initial hardware connections, running the first-time setup wizard, switching to administrator mode, and configuring network or VDI (Virtual Desktop Infrastructure) remote connections like RDP or Citrix.

---
### Step 1: Hardware Connections
- **Power & Display:** Connect the power adapter and plug in your monitor using DisplayPort cables to one of the available DisplayPort outputs on the back of the unit.
- **Peripherals:** Connect your USB keyboard and mouse, and plug in an Ethernet cable for a wired network connection (or prepare for Wi-Fi setup if equipped).
- **Power On:** Press the power button on the front of the thin client.

---
### Step 2: Initial Setup Wizard
- When the device boots for the first time, the **HP ThinPro** operating system (a Linux-based environment) will launch.
- Follow the on-screen wizard prompts to configure basic preferences:
    - Select your **Language** and **Region**.
    - Set the **Date and Time**.
    - Choose your **Keyboard layout**. ]

---
### Step 3: Switch to Administrator Mode
To change system settings, add connections, or modify configurations, you must unlock admin rights:
- Click the **wrench icon** or access the control bar/menu on the desktop.
- Select **Administrator User Mode Switch**.
- Enter the default administrator password (refer to your organization's documentation or HP default credentials, typically `admin`).
- Look for the **red ring** indicator around the interface, which confirms you are in Administrator Mode.

---
### Step 4: Configure Network and Remote Connections (RDP/VDI)
- **Wi-Fi (if applicable):** Go to network settings, select your wireless network, open the **Security** tab, choose the authentication type, and enter your pre-shared key. 
- **Remote Connections:**
    - Open the connection manager or ThinPro Control Center.
    - Create a new remote connection (such as **RDP**, **VMware View**, or **Citrix**).
    - Enter the target **IP address or hostname** of your host server or VDI environment.
    - Adjust advanced preferences (such as enabling auto-reconnect, hiding local user fields for security, or setting display depth to 32 bpp).

---
