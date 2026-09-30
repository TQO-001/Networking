Learn at least a general amount of how everything you're working with works

> [!info] Info
> ==You do not need to be an electrical engineer to use a Raspberry Pi==, but you do need to understand what powers it, what you can safely plug into it, how it stores its operating system, and how it talks on a network. 

# 2. Theory
---
## 2.1 What a Raspberry Pi actually is
![[Pasted image 20260929143829.jpg|405]]

A Raspberry Pi is a **complete computer on one board**. As an IT technician you already know the parts of a PC. Here is the same thing mapped onto the Pi:

| **PC part** | **On the Pi 4 Model B** |
| --- | --- |
| CPU + GPU | One chip: Broadcom BCM2711 (a **System on a Chip, SoC**), quad-core ARM |
| RAM | 4GB LPDDR4 soldered on the board (you cannot upgrade it) |
| Hard drive / SSD | **None built in.** You supply a microSD card (or a USB SSD) |
| BIOS/UEFI | A small **bootloader stored in an EEPROM chip** on the board |
| Network card | Gigabit Ethernet port + Wi-Fi + Bluetooth, all onboard |
| Power supply | External 5V USB-C supply (see 2.3) |
| Motherboard headers | The 40-pin **GPIO header** (see 2.4) |
### What can you do with a Raspberry Pi?

Although this amount of RAM may seem too little at a time when computers come with multiple of gigabytes, for an embedded computer it is more than enough. People run multiplayer game servers like Minecraft on it, and small production web servers and database server. Others have even used the RPi as a node for small supercomputers. With a bit of planning, the Raspberry Pi can do amazing things.

### ARM vs x86 (why it matters)
Your desktop or laptop is almost certainly **x86-64** (Intel/AMD). The Pi is **ARM (64-bit, "aarch64")**. Software compiled for x86 will not run on it directly. In practice this only bites you when downloading programs or Docker images: always pick the **arm64** version.

### The boot chain in plain words
1. Power is applied.
2. The SoC reads the bootloader from its onboard EEPROM.
3. The bootloader looks for an operating system on a boot device (SD card, USB drive or network) in a set order.
4. It loads the Linux kernel, and Linux takes over.

No SD card, no OS, nothing to boot. This is the single biggest difference from a PC where the OS lives on a drive you never think about.

> A **System on a Chip (SoC)** is a single microchip that combines all the core components of a computer—including the CPU, GPU, and memory controllers—onto one small piece of silicon to maximize speed, save space, and lower power consumption. The Raspberry Pi relies on an SoC for its processing power but lacks built-in storage because leaving out flash memory significantly **reduces manufacturing costs**, keeping the board highly affordable for hobbyists. This intentional design choice also offers maximum **flexibility**, allowing users to easily swap, upgrade, or replace their operating systems simply by changing an external microSD card or plugging in a USB drive.

---
## 2.2 Electricity Essentials (only what you need)
I already have Ohm's Law, the water-pipe analogy and AC vs DC from my [earlier notes](obsidian://open?vault=Networking&file=01-Notes%2F01-Beginner%2F02-Industrial%20Networking%2F01-Tasks%2F02-Setting_Up_A_Industrial_Switch%2F02-Essential_Theory), so I'm not gonna repeat them. The Pi uses exactly the same ideas, just at tiny scale.

| **Quantity**   | **Unit**                   | **Water analogy**      |
| -------------- | -------------------------- | ---------------------- |
| Voltage (V)    | Volts                      | Pressure               |
| Current (I)    | Amps (A) or milliamps (mA) | Flow rate              |
| Resistance (R) | Ohms (Ω)                   | Narrowness of the pipe |
| Power (P)      | Watts (W)                  | Work done              |

```
V = I × R      (Ohm's Law)
P = V × I      (Power)
1 A = 1000 mA
```

### The one important idea: a device only takes what it needs
A power supply is *rated* for a maximum current. The device **pulls** only what it needs. So a 3A supply connected to something needing 1A is perfectly fine, it simply supplies 1A. What causes trouble is the opposite: a supply that cannot deliver enough current.

### Voltage is different: it must match
Current is *pulled* by the device, but voltage is *pushed* by the supply, so it must be right. Too high a voltage destroys chips instantly. Three voltages matter on a Pi:

| **Voltage** | **Where** | **Notes** |
| --- | --- | --- |
| **5V** | USB-C input, 5V pins on the header | Powers the board and USB devices |
| **3.3V** | 3.3V pins on the header | Powers small sensors and is the Pi's "logic level" |
| **0V (GND)** | Ground pins | The return path for everything, the reference point |

> [!info] ### Why "logic level" matters
> The Pi's GPIO pins work at **3.3V**. A pin reads 3.3V as "1" (HIGH) and 0V as "0" (LOW). **Feeding 5V into a GPIO pin can permanently damage the Pi.** This is the most common way beginners kill a board. Many Arduino sensors are 5V devices, so always check the datasheet.

### Resistors, and why LEDs need one
An LED does not limit its own current. Connect one straight across a supply and it draws far too much and burns out (and can damage the pin driving it). A **resistor in series** limits the current. Use Ohm's Law to pick one:

```
Example: Pi GPIO pin (3.3V) driving a red LED
LED forward voltage  ≈ 2.0V   (from LED datasheet)
Target current       ≈ 10 mA  (0.010 A)

Voltage the resistor must "absorb" = 3.3 - 2.0 = 1.3V
R = V / I = 1.3 / 0.010 = 130 Ω

Use the next standard value up: 220 Ω or 330 Ω (safe and still bright)
```

Rule of thumb: **220Ω to 330Ω for a standard LED on a 3.3V pin.** Higher resistance means dimmer but safer.

### Pin current limits (keep it small)
- Each GPIO pin is happy at a few mA, and should never exceed about **16 mA**.
- All GPIO pins together should stay under roughly **50 mA**.
- GPIO pins can **signal**, not **power**. Motors, relays, strips of LEDs and speakers need a driver board or transistor, powered separately. Never power them straight from a GPIO pin.

### A short circuit in one sentence
If 5V touches GND with nothing in between, resistance is nearly zero, so by `I = V / R` the current becomes huge. That is why loose jumper wires touching bare pins on a powered Pi is a real risk.

---
## 2.3 Powering the Pi
### What the Pi needs
The Pi 4 Model B needs **5V DC at a minimum of 3A (15W)** through the **USB-C port**. The official Raspberry Pi 15W supply in Section 1.2 is rated 5.1V / 3.0A. The slightly higher 5.1V is deliberate: it compensates for voltage lost in the cable.
![[Pasted image 20260929145554.png|456]]

### Why a cheap charger causes strange problems
A weak supply or thin cable causes **voltage drop** (the same idea as your wire-gauge notes: resistance in the cable "eats" voltage before it reaches the Pi). If the voltage falls too low the Pi can:
- show a **lightning bolt icon** on screen (under-voltage warning)
- randomly reboot or freeze
- corrupt the SD card during writes
- disconnect USB devices

So the rule is: **use the official supply or a quality 5V/3A one with a short, thick cable.** A phone charger that says "5V 3A" but only does it via fast-charge negotiation may not work reliably.

### The USB power budget
The Pi 4 shares power between the board and everything you plug into it. Power-hungry USB devices (external hard drives, SSDs) can exceed what the ports provide and cause under-voltage. If a drive misbehaves, try a **powered USB hub**.

### Power over Ethernet (PoE) link to your earlier notes
You already learned PoE in the last file. The Pi 4 has a small **4-pin PoE header** next to the GPIO pins. Add an official **PoE HAT (802.3af)** or **PoE+ HAT (802.3at)** and the Pi can take its power from the same network cable, from a PoE switch, with no separate power adapter. This is exactly how IP cameras and access points are powered.

### There is no power button
The Pi turns on as soon as power is applied and has no built-in off switch. **Always shut down properly before pulling the plug**, otherwise you risk corrupting the SD card:

```bash
sudo shutdown -h now
```

Wait until the green activity LED stops flashing, then remove power.

---
## 2.4 The GPIO Header and Connecting Wires
On the Raspberry Pi, you can connect external devices, like buttons and LEDs, to the various pins that are exposed through a 40-pin header. Each of the pins perform specific functions.

> Most of the pins can perform multiple functions.

**There are two attributes that are most important when it comes to the Raspberry Pi pins:**
- The pin number, which allows you to refer to a pin inside your Python scripts
- The pin capabilities, so that you know what it is that you can do with a pin.  

**Let’s have a look at some examples:**
- Pins 1 and 17 provide 3.3V power.  
- Pins 2 and 4 provide 5V power
- Pins 6, 9, 14, 25, 30, 34 and 39 are GND.
- Pin 22 is a general-purpose input/output (GPIO) pin. You can use it to drive an LED or sense the state of a button.
- Pin 14 is a GPIO, but also the transmit pin of the UART (serial interface).
- Pin 32 is a GPIO, but also a PWM pin.  

In the diagram below you can see a full map of the Raspberry Pi 40-pin header. The map shows the primary and secondary function of each pin.

![[Pasted image 20260929145748.jpg|479]]

![[Pasted image 20260929150700.png]]
### General-Purpose Input/Output (GPIO) Pins
GPIO pins can be configured as input or output, enabling interaction with various components such as LEDs, buttons, and sensors.

| Pin Number | GPIO Number | Function                       |
| ---------- | ----------- | ------------------------------ |
| 3          | GPIO 2      | I2C SDA (Data Line)            |
| 5          | GPIO 3      | I2C SCL (Clock Line)           |
| 7          | GPIO 4      | General-purpose / PWM output   |
| 8          | GPIO 14     | UART TX (Transmit)             |
| 10         | GPIO 15     | UART RX (Receive)              |
| 11         | GPIO 17     | General-purpose input/output   |
| 12         | GPIO 18     | PWM (Pulse Width Modulation)   |
| 13         | GPIO 27     | General-purpose input/output   |
| 15         | GPIO 22     | General-purpose input/output   |
| 16         | GPIO 23     | General-purpose input/output   |
| 18         | GPIO 24     | General-purpose input/output   |
| 19         | GPIO 10     | SPI MOSI (Master Out Slave In) |
| 21         | GPIO 9      | SPI MISO (Master In Slave Out) |
| 22         | GPIO 25     | General-purpose input/output   |
| 23         | GPIO 11     | SPI SCLK (Clock)               |
| 24         | GPIO 8      | SPI CE0 (Chip Enable 0)        |
| 26         | GPIO 7      | SPI CE1 (Chip Enable 1)        |
| 27         | GPIO 0      | Reserved for ID EEPROM         |
| 28         | GPIO 1      | Reserved for ID EEPROM         |
| 29         | GPIO 5      | General-purpose input/output   |
| 31         | GPIO 6      | General-purpose input/output   |
| 32         | GPIO 12     | PWM output                     |
| 33         | GPIO 13     | PWM output                     |
| 35         | GPIO 19     | SPI or PWM output              |
| 36         | GPIO 16     | General-purpose input/output   |
| 37         | GPIO 26     | General-purpose input/output   |
| 38         | GPIO 20     | SPI output                     |
| 40         | GPIO 21     | SPI output                     |

### What GPIO is
**GPIO (General Purpose Input/Output)** is the 40-pin header along the edge of the board. Each signal pin can be programmed as an **input** (read a button or sensor) or an **output** (switch an LED or relay driver). This is how the Pi talks to the physical world, the same idea as the PLC and sensor connections in the industrial notes but at low voltage and low power.

### The pins, by type
Of the 40 pins:

| **Type** | **Count / Pins** | **Purpose** |
| --- | --- | --- |
| 5V power | Pins 2, 4 | Straight from the USB-C supply |
| 3.3V power | Pins 1, 17 | Low-current power for small sensors |
| Ground (GND) | Pins 6, 9, 14, 20, 25, 30, 34, 39 | Return path, any will do |
| GPIO signal | Everything else | Programmable inputs/outputs (3.3V) |

Pin 1 is the corner pin nearest the SD card slot end, and the numbering runs in **rows of two**, odd numbers on one side and even on the other:

```
        (SD card end of board)
   Pin 1  [3.3V] [5V]   Pin 2
   Pin 3  [GPIO2][5V]   Pin 4
   Pin 5  [GPIO3][GND]  Pin 6
     ...       ...
   Pin 39 [GND] [GPIO21] Pin 40
```

> [!warning] Two numbering systems
> "Pin 11" (the physical position) is **not** the same as "GPIO17" (the chip's own name for it). Software libraries usually use the **GPIO number**. Always check which one a guide means. Use the `pinout` command on the Pi (or the pinout.xyz site) to see the layout.

### Special-purpose pins (names you'll meet)
Some pins double as communication buses. They are the same protocols listed in Section 1.1:
- **I2C** (2 wires, many sensors on one bus)
- **SPI** (4+ wires, faster, for displays and ADC chips)
- **UART** (serial TX/RX, for talking to other devices or a console)
- **PWM** (pulses that simulate varying power, for dimming LEDs or servo control)

You don't need to master these now. Just know they exist and that the pins are fixed, not freely assignable.

### Tools and parts for connecting wires
| **Part** | **What it is** |
| --- | --- |
| **Breadboard** | Plastic board with connected holes for building circuits without soldering |
| **Jumper wires** | Pre-made wires with connectors: male-male, male-female, female-female |
| **Resistors** | Limit current (see 2.2) |
| **LEDs / buttons** | Simple test components |
| **GPIO breakout / T-cobbler** | Board that brings the 40 pins to a breadboard neatly |

Breadboard tip: holes in a vertical column of five are connected; the long side rails run the full length and are used for power and ground.

### A safe first circuit (LED blink)
```
GPIO17 (pin 11) ── 330Ω resistor ── LED long leg (+) 
LED short leg (-) ── GND (pin 9)
```
The **long leg** of an LED is positive. Wrong way round, it simply won't light (no damage at 3.3V).

### Ethernet cable wiring (the one you'll actually use)
Straight-through Ethernet cables use the **T568B** colour order at both ends:

| **Pin** | **Colour** |
| --- | --- |
| 1 | White/Orange |
| 2 | Orange |
| 3 | White/Green |
| 4 | Blue |
| 5 | White/Blue |
| 6 | Green |
| 7 | White/Brown |
| 8 | Brown |

As a technician you **SHOULD** know this already, but it matters here: the Pi's port is **Gigabit**, which uses **all four pairs**, so a damaged or badly terminated cable can silently drop the link to 100 Mbps.

### Wiring habits that keep the board alive
1. **Shut down and unplug** before changing wires.
2. Double-check the pin number before powering on.
3. Never let a bare wire wave around near the header.
4. Keep 5V wires and 3.3V/GPIO wires clearly separate (use red for 5V, orange/yellow for 3.3V, black for GND).
5. Use a resistor with every LED.
6. **Do not connect anything to mains (wall) voltage.** Switching a mains appliance needs a proper rated relay module and, in South Africa, a qualified electrician.

---
## 2.5 Storage and Boot (SD, USB SSD, PXE)

### The microSD card
The card is the Pi's "hard drive." The Section 1.3 card is a 32GB Class 10 SanDisk with a full-size adapter. Points worth knowing:
- Cards wear out from many writes. Cheap or old cards fail earlier.
- **Corruption happens when power is cut mid-write.** This is why proper shutdown matters.
- "A1"/"A2" application-class cards are faster at the small random reads an OS makes.
- The Pi 4 supports the fast **SDR104** mode, but the card must support it to benefit.

### NOOBS vs Raspberry Pi Imager
Your card comes preloaded with **NOOBS** (New Out Of Box Software), an older installer. Today the recommended method is **Raspberry Pi Imager**, a free app for Windows, Mac and Linux that writes the OS straight to the card and lets you pre-configure settings. Reflashing the card with Imager is usually better than using NOOBS.

### Flashing with Raspberry Pi Imager (the workflow)
1. Install **Raspberry Pi Imager** on your PC.
2. Choose the device (Pi 4), the OS (usually **Raspberry Pi OS 64-bit**), and the storage (your SD card).
3. Open the customisation settings and set: **hostname, username and password, Wi-Fi, locale/time zone, and enable SSH**.
4. Write. Wait until it finishes and verifies.

> [!warning] Flashing erases the card
> Everything on the target drive is wiped. Double-check you picked the SD card and not one of your other drives.

Setting the username and password in advance matters because current Pi OS no longer ships with a default `pi` user and password.

### Boot options on the Pi 4
The bootloader can start the OS from more than one place:

| **Boot method** | **What it is** | **Good for** |
| --- | --- | --- |
| **microSD** | Default. OS on the card | Getting started |
| **USB SSD / drive** | OS on a drive on a USB 3.0 port | Speed and reliability (SSDs outlast SD cards) |
| **Network / PXE** | The Pi loads its OS over the network from a server | Many identical Pis, no local storage |

The boot order is stored in the EEPROM and can be changed with `sudo raspi-config` (Advanced Options, then Boot Order) or via Imager. USB boot is the sensible upgrade path: a small SSD in a USB 3.0 port is much faster and far more durable.

### PXE in your IT terms
PXE (Preboot Execution Environment) is the same idea you may have seen with PCs: the machine has no OS, asks the network for one using **DHCP** and **TFTP**, then boots from that image. It's an advanced setup, so for now just know what it is and that the Pi 4 supports it.

### Basic backup habit
Because the whole OS is one card, you can **image the card** to a file on your PC and restore it later. Do this once your Pi is set up the way you like. It takes minutes and saves hours.

---
## 2.6 Raspberry Pi OS and Linux Basics

### What the OS is
**Raspberry Pi OS** is a version of **Debian Linux** tuned for the Pi. Because it's Debian-based, everything you learn transfers to Ubuntu, Debian servers and most cloud machines. Options:
- **With desktop** (full graphical interface) for a monitor and keyboard.
- **Lite** (no desktop, command line only) for headless servers. It is lighter and what most projects use.

**Headless** means running without a monitor, keyboard or mouse, and controlling the Pi over the network via SSH (see 2.7).

### The Linux filesystem (not drive letters)
Linux has one tree starting at `/` (root), not C:, D:, etc.

| **Path** | **Contents** |
| --- | --- |
| `/` | Root of everything |
| `/home/<user>` | Your files (like C:\Users\you) |
| `/etc` | System configuration files |
| `/var/log` | Logs |
| `/boot/firmware` | Boot files and `config.txt` |
| `/dev` | Devices appear as files here |
| `/mnt`, `/media` | Where extra drives get mounted |

### Essential commands
| **Command** | **What it does** |
| --- | --- |
| `pwd` | Print current folder |
| `ls -la` | List files, including hidden, with details |
| `cd <folder>` | Change folder (`cd ..` goes up) |
| `cat <file>` | Show a file's contents |
| `nano <file>` | Edit a file in a simple editor |
| `cp`, `mv`, `rm` | Copy, move/rename, delete |
| `mkdir` | Make a folder |
| `sudo <command>` | Run as administrator ("root") |
| `man <command>` | Read the manual |
| `history` | Show past commands |

> [!warning] Linux has no recycle bin
> `rm` deletes permanently. `sudo rm -rf /` style commands can destroy the system. Read what you paste from the internet.

### Permissions in one minute
Every file has an **owner**, a **group** and permissions for owner / group / others: **r** (read), **w** (write), **x** (execute).
```
-rwxr-xr--   1 pi pi   script.sh
 │└┬┘└┬┘└┬┘
 │ │  │  └─ others: read only
 │ │  └──── group: read + execute
 │ └─────── owner: read + write + execute
 └───────── file type (- = file, d = folder)
```
`chmod +x script.sh` makes a script executable. `sudo` is how you temporarily get administrator rights instead of logging in as root.

### Updating and installing software
Debian uses **apt**, its package manager (like an app store for the command line):

```bash
sudo apt update              # refresh the list of available packages
sudo apt full-upgrade -y     # install all available updates
sudo apt install <package>   # install something
sudo apt remove <package>    # remove it
```
Do `update` and `full-upgrade` on any fresh install before anything else.

### Services and logs
Linux runs background programs as **services** managed by **systemd**:

```bash
systemctl status ssh          # is the SSH service running?
sudo systemctl enable ssh     # start automatically at boot
sudo systemctl restart <svc>  # restart a service
journalctl -xe                # read recent system logs
```

### The configuration tool
`sudo raspi-config` is a menu-driven tool for common Pi settings: enabling SSH, I2C, SPI, changing the hostname, boot order, locale, and expanding the filesystem. If you don't know where a setting lives, look here first.

### Python is already there
Python 3 comes preinstalled, which suits your development path. For GPIO, current Pi OS includes libraries such as **gpiozero** (the easy one for beginners). Use virtual environments (`python3 -m venv`) for your projects so you don't disturb the system's own Python packages.

---
## 2.7 Networking on the Pi (SSH, static IP, VLANs)

This is the section where your IT and networking knowledge already gives you a head start.

### Connecting the Pi to a network
| **Option** | **Notes** |
| --- | --- |
| **Ethernet** (`eth0`) | Preferred for servers: stable, faster, the Pi 4 has true Gigabit |
| **Wi-Fi** (`wlan0`) | Dual-band 2.4/5GHz 802.11ac. Fine for testing, less reliable for services |

By default the Pi asks for an address from your router using **DHCP**, the same as any client device.

### Finding the Pi on your network
- By name: `ping raspberrypi.local` (or whatever hostname you set), which works through **mDNS**.
- By IP: check your router's DHCP client list, or from the Pi itself run `hostname -I` and `ip a`.

### SSH: controlling the Pi remotely
**SSH (Secure Shell)** gives you an encrypted command line on the Pi over the network (TCP port 22). Enable it in Imager, or with `sudo raspi-config`.

```bash
ssh <username>@<hostname-or-ip>
ssh thulani@raspberrypi.local         # example
```

**Key-based login** is safer than passwords:
```bash
ssh-keygen -t ed25519                  # run on your PC, creates a key pair
ssh-copy-id <username>@<pi-address>    # copies the public key to the Pi
```
Once keys work, you can disable password login in `/etc/ssh/sshd_config` (`PasswordAuthentication no`) and restart the service. Never expose SSH directly to the internet with a weak password.

### Why give the Pi a static IP
If a server's address changes, everything pointing at it breaks. There are two clean approaches:
1. **DHCP reservation** on the router (bind the Pi's MAC address to a fixed IP). This is usually the cleanest.
2. **Static configuration on the Pi itself.**

Current Pi OS uses **NetworkManager**, controlled with `nmcli`:

```bash
nmcli con show                                      # list connections
sudo nmcli con mod "Wired connection 1" \
  ipv4.method manual \
  ipv4.addresses 192.168.1.50/24 \
  ipv4.gateway 192.168.1.1 \
  ipv4.dns "192.168.1.1 8.8.8.8"
sudo nmcli con up "Wired connection 1"
```
Pick an address **outside your router's DHCP pool** so nothing else gets it. Connection names vary, so check with `nmcli con show`. Older Pi OS versions used `dhcpcd` and `/etc/dhcpcd.conf` instead, so if a guide mentions that file, it may be out of date for your version.

> [!warning] Changing the IP over SSH
> If you apply a wrong static IP while connected over SSH, you'll lose the connection. Make changes carefully, or keep a monitor and keyboard nearby for recovery.

### VLANs on the Pi
You already know VLANs from switching. A **VLAN** splits one physical network into separate logical networks. For a Pi to sit in a VLAN, two setups are possible:

**Option A: Access port (simplest).** The switch port is configured as an access port in one VLAN. The Pi sees a normal network and needs **no VLAN configuration at all**. Just plug in.

**Option B: Trunk port (Pi tags traffic itself).** The switch port is a **trunk** carrying several tagged VLANs. The Pi creates a virtual interface for each VLAN (802.1Q tagging):

```bash
sudo nmcli con add type vlan con-name vlan10 ifname eth0.10 dev eth0 id 10 \
  ipv4.method manual ipv4.addresses 192.168.10.50/24
sudo nmcli con up vlan10
```
The Pi then has a separate interface (`eth0.10`) for VLAN 10. This is how you'd make a Pi into a test or monitoring node that can reach multiple VLANs over one cable.

Matching Cisco side (for your notes):
```
interface GigabitEthernet1/1
 switchport mode access
 switchport access vlan 10        ! Option A

interface GigabitEthernet1/2
 switchport mode trunk
 switchport trunk allowed vlan 10,20   ! Option B
```
This ties directly to the industrial switching and segmentation material in your earlier notes: the Pi is just another endpoint that follows the same rules.

### Useful network commands on the Pi
| **Command** | **What it does** |
| --- | --- |
| `ip a` | Show interfaces and addresses |
| `ip route` | Show routing table and default gateway |
| `ping <host>` | Test reachability |
| `traceroute <host>` | Show the path packets take |
| `ss -tulpn` | Show listening ports and the programs using them |
| `nmcli device status` | Status of network devices |
| `sudo tcpdump -i eth0` | Capture packets (your Wireshark-in-terminal) |

---
## 2.8 Heat, Throttling and Health Checks

### Why the Pi gets warm
The SoC converts electrical power into heat (`P = V × I`, all of it ends up as heat). A Pi 4 runs noticeably hotter than earlier models. If it gets too hot, it protects itself by **throttling**: it lowers CPU speed. It doesn't damage itself, but performance drops.

Reference points:
- Idle: roughly 45 to 60 °C in open air
- Throttling starts around **80 °C**
- Cases, heatsinks and small fans lower these temperatures. A closed plastic case with no airflow makes it worse.

### Health-check commands
```bash
vcgencmd measure_temp          # CPU temperature
vcgencmd get_throttled         # 0x0 means no problems
df -h                          # disk space
free -h                        # memory use
uptime                         # load and how long it's been running
htop                           # live process view (install with apt if needed)
```

### Reading `get_throttled`
If the result is not `0x0`, something has happened since boot. The most common causes are **under-voltage** (bad power supply or cable, see 2.3) and **overheating** (see above). Fix the power first, it is by far the most frequent culprit.

---
## 2.9 Safety Rules (know these by heart)

> [!danger] The short list
> 1. **Never put more than 3.3V on a GPIO pin.**
> 2. **Never connect the Pi or GPIO to mains (wall) voltage.**
> 3. **Power off and unplug before changing wiring.**
> 4. **Always use a resistor with an LED.**
> 5. **Use a proper 5V / 3A supply and shut down with a command, not by pulling the plug.**
> 6. **Never short pins or leave loose bare wires near the header.**
> 7. **Check pinouts against a diagram, not memory.** Physical pin number is not the GPIO number.
> 8. **Reflashing wipes the card.** Confirm the drive before writing.
> 9. **Handle boards by the edges.** Static electricity can damage electronics, so touch a grounded metal object first.
> 10. **Follow the sequence: verify, then power.** It is the same idea as "ground first, verify, then power" from the electrical wiring notes.


---
## Quick Reference Card

| **Item** | **Value** |
| --- | --- |
| Pi supply | 5V DC, min 3A, USB-C |
| GPIO logic level | 3.3V (not 5V tolerant) |
| Safe current per GPIO pin | Keep under ~16 mA |
| LED resistor (3.3V pin) | 220 to 330 Ω |
| 5V pins | 2 and 4 |
| 3.3V pins | 1 and 17 |
| Ground pins | 6, 9, 14, 20, 25, 30, 34, 39 |
| Ethernet | Gigabit, uses all 4 pairs |
| Throttling temperature | ~80 °C |
| SSH port | TCP 22 |
| Safe shutdown | `sudo shutdown -h now` |
| Update system | `sudo apt update && sudo apt full-upgrade -y` |
| Config tool | `sudo raspi-config` |
| Show pinout | `pinout` |

---
## Terms to Know
| **Term** | **Meaning** |
| --- | --- |
| SoC | System on a Chip: CPU, GPU and more in one chip |
| ARM | The processor architecture the Pi uses (not x86) |
| GPIO | General Purpose Input/Output pins |
| EEPROM | Small memory chip holding the bootloader |
| PXE | Network boot |
| Headless | Running with no monitor or keyboard |
| SSH | Encrypted remote command line |
| DHCP | Automatic IP address assignment |
| mDNS | Local name discovery (`.local` names) |
| VLAN | Logical network segment |
| 802.1Q | VLAN tagging standard |
| PoE HAT | Add-on board that powers the Pi over Ethernet |
| Throttling | CPU slows down to protect itself from heat or low power |
| Under-voltage | Supply voltage too low, causes instability |
| apt | Debian package manager |
| systemd | Linux service manager |
