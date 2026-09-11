**IOS (Internetwork Operating System)** is a multitasking operating system used on most Cisco Systems routers and switches. IOS has a command-line interface with a predetermined number of multiple-word commands. The IOS operating system is used to configure routing, switching, internetworking and other features supported by Cisco IOS devices.

> [!NOTE] **NOTE** - Previous versions of Cisco switches ran **CatOS**, a legacy version of a CLI-based operating system.

![[Cisco-Switch-CLI-PuTTY-Console.png]]
> The above image is of the CLI of a cisco switch using a **Serial** connection (**Console Access**) on **PuTTY**

## Accessing the Cisco IOS
1. **Console Access** – this type of access is usually used to configure newly acquired devices. These devices usually don’t have an IP address configured, and therefore can not be accessed through the network. Most of the Cisco devices have a physical console port. This port can be connected to a computer using a rollover cable, a special type of cable with pins on one end and reversed on the other end of the cable. The rollover cable is a serial cable, which means that you can’t just plug it into an Ethernet port on your computer. You will need an adapter that converts an interface on your computer (usually a 9-pin serial interface) into RJ-45.

> **Console port** – you can connect directly to the router’s management command line interface here via your laptop and a console cable.

![[Cisco-IOS-Access-Methods.jpg|334]]
**Female Serial DB9 to RJ45 cable**

- **The RJ45-to-DB9 Cable**: This is traditionally called a **Rollover Cable** (or Yost cable). It maps the pins from the Cisco RJ45 console port to a standard serial interface. 

![[USB_2.0_to_Serial_Converter.webp|332]]
**Male Serial RS232 (DB9 Male) to USB 2.0**]

**The DB9-to-USB Adapter**: This is a **USB-to-Serial Converter**. It contains a small electronic chip (usually made by FTDI or Prolific) that translates serial data into a USB format your computer can understand.

> [!NOTE] **NOTE** - Newer Cisco devices usually include a USB console port, since serial ports are rare on modern PCs. However in the case that the console port is a **8P (RJ45)** connector the above images show setup, **Female to Male Serial DB9** connect to each and **USB 2.0** connects to the PC/Laptop, and the **RJ45** connects to the console port.

2. **SSH Access** – This access type enables you to configure devices remotely, but it adds an extra layer of security by encrypting all communications using public-key cryptography. SSH uses the well-known TCP port 22.
3. **Telnet Access** - Not used anymore, so keep it pushing lil' bro

### IOS Modes

IOS has many different modes. There are three main modes and many sub-modes. We will describe the three main modes and one sub-mode.

- **User EXEC Mode** – the default mode for the IOS CLI. This is the mode that a user is placed in after accessing the IOS. Only basic commands (like ping or telnet) are available in this mode.
- **Privileged EXEC Mode** – is accessed by typing the _enable_ command from the user EXEC mode. This mode can be password protected. In this mode, a user can view and change a device’s configuration.
- **Global Configuration Mode** – this mode can be accessed by typing the _configure terminal_ command from the privileged EXEC mode. It is used to change the device’s configuration.

A global configuration mode can have many sub-modes. For example, when a user wants to configure an interface, he will have to enter the interface sub-mode by entering the **_interface INTERFACE_TYPE INTERFACE_NUMBER_** command (e.g. _interface FastEthernet 0/1_ ) from the global configuration mode. This sub-mode can have many commands that are specific to the interface.

![[popular_modes.jpg|482]]

