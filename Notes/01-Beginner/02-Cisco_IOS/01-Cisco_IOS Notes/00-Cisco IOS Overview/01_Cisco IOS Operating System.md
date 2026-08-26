# Cisco IOS Devices Parts
## Physical Ports on Cisco IOS Networking Hardware (Routers/Switches)
Cisco uses the term **interface** to refer to physical ports on an IOS device. Interfaces can be configured with different settings, depending on the type of the interface and whether you are configuring an interface on a router or a switch.

> - **Console port** – you can connect directly to the router’s management command line interface here via your laptop and a console cable. Used to plug a management cable directly from a computer into the device to configure settings via the command line.
> - **Fast Ethernet / Gigabit Interfaces:** Used to connect the router to local network switches or computers.
> - **Auxiliary (Aux) Port:** A legacy serial port used to attach an external modem for remote, out-of-band management.
> - **USB / CompactFlash Slots:** Used for external storage or holding the core operating system image files.
> - **On/Off switch**: duh

> [!NOTE] **NOTE** - Cisco routers support several media types at the data link layer, including Ethernet, Fast Ethernet, Gigabit Ethernet, ATM, BRI, PRI, Asynchronous, Serial, and more.

![[Pasted image 20260821120152.jpg|218]]
The image above is of ports on device(probably a router idk)

![[2503-router.webp]]
the image above is of a router showing the ports it has
### **_Key difference between router and switch nomenclature_**
- The router port number starts with 0( Zero). For example, the first Fast Ethernet port on the router would be Fast Ethernet 0/0.
- The switch port number begins with 1. For example, the first Fast Ethernet port on the switch would be Fast Ethernet 0/1.
## Internal Memory and Components
Cisco routers and switches use several distinct types of hardware memory to handle system files, active tables, and diagnostic programs. Each memory component plays a specific role in how the device boots up and processes data during everyday operation.

> - **ROM (Read-Only Memory):** Holds the bootstrap code used to boot the router and basic diagnostics (POST).
> - **Flash Memory:** Stores the full Cisco IOS software image file and acts as permanent storage.
> - **NVRAM (Non-Volatile RAM):** Keeps the **startup-config** file safe even when the router loses power.
> - **RAM (Random Access Memory):** Runs the active **running-config**, routing tables, ARP cache, and packet buffers.
> - **CPU:** Process packets and runs routing protocols.

## Configuration Files
The operation of a Cisco device is dictated by two primary text-based configuration files that determine everything from security policies to network routing. Understanding how these files interact is critical to ensuring your network modifications survive a system reload.

> - **Startup-Config:** The saved configuration stored in NVRAM that loads when the device boots.
> - **Running-Config:** The active configuration currently running in volatile RAM; changes take effect immediately.

## User Interface Modes
The Cisco IOS Command Line Interface (CLI) relies on a hierarchical structure of operational modes to protect system security and prevent accidental changes. As you move deeper into the hierarchy, your level of administrative control and configuration capability increases.

> - **User EXEC Mode:** Basic monitoring mode with limited commands, indicated by the `Router>` prompt.
> - **Privileged EXEC Mode:** Advanced verification and file management mode, indicated by the `Router#` prompt.
> - **Global Configuration Mode:** Used to modify system-wide settings, indicated by the `Router(config)#` prompt.
> - **Interface Configuration Mode:** Used to configure specific network ports, indicated by the `Router(config-if)#` prompt. 

![[Pasted image 20260824091354.png]]

## Core Software Features
Cisco IOS includes an array of integrated software engines and protocols designed to manage data traffic efficiently and securely across complex network topologies. These logical features allow network administrators to control path selection and traffic behavior.

> - **Routing Tables:** Dynamically mapping paths to forward data packets across networks.
> - **Access Control Lists (ACLs):** Packet filtering rules for security and traffic control.
> - **Routing Protocols:** Software engines like OSPF, EIGRP, and BGP that learn network paths.

# AUX vs Console
A console port provides direct, physical local access to a networking device's command line using a serial or rollover cable. An auxiliary (AUX) port is a secondary serial port used primarily for out-of-band remote management by connecting an external dial-up modem

## Auxiliary Port On A Cisco Router
Most Cisco routers include an additional auxiliary (Aux) port as a backup async port. This port is commonly used as a dial-up port for remote router management. It is connected to a modem and enables an administrator to make a phone call to connect to the router’s CLI.


> [!NOTE] **NOTE **- Console is for initial or on-site configuration and troubleshooting; AUX is for remote dial-in access when the main network fails. Put more simply ==You must sit next to the device for a console connection; the AUX port lets you connect from afar over a phone line.==

## Cisco Console Rollover Cable
> [!NOTE] NOTE - This was already discussed in 
[[00_Cisco IOS Overview]]

A **rollover cable** is usually shipped with each Cisco device. This cable connects a serial port on your computer to the console port of the device and it is used for the device’s initial configuration. It is called rollover because the wires on one end are rolled at the other end – the wire at pin 1 connects to the pin 8 on the other side, the wire at pin 2 to the pin 7, etc.

The cable is of light blue color with a DB-9 connector at one end and a RJ-45 connector at the other:
![[rollover_cable-768x576.webp|220]]

You connect the rollover cable to the serial port on your computer. On the Cisco device, there is a blue console port (usually marked in blue) to which you connect the other end of the cable. After the cable is connected, you can access the device using the terminal emulation software (e.g. Putty or HyperTerminal). You need to configure the PC’s serial port to match the console port settings. Here are the defaults:

- 9600 baud
- no hardware flow control
- 8 data bits
- no parity bits
- 1 stop bit

> [!NOTE] **NOTE** - Newer Cisco devices usually include a USB console port, since serial ports are rare on modern PCs.

# Special Commands and Tricks
## Run privileged commands within global config mode ( `do [privileged command]` )
Beginning with the IOS 12.3, the privileged-exec mode commands (such as _show running-configuration_, _show interface status_, etc.) can be executed within the global configuration mode and its submodes. This allows you to execute privileged-exec mode commands without needing to exit the current configuration mode. Here is an example that explains the usefulness of this feature:
![[Pasted image 20260821151857.png]]

In the example above you can see that we’re currently in the interface submode. We want to get more information about the interface with the _show ip interface brief_ command, but we got an error because the command is not available in this mode. However, if we use the _do_ keyword in front of the command, the command will succeed:
![[Pasted image 20260821152014.png]]

The command was now executed because of the _do_ keyword. Notice that we’re still in the interface submode and we can continue with the interface configuration.

## Pipe character in IOS
IOS supports the use of the **pipe character** (represented with the **|** character) to filter the output of the _show_ and _more_ commands. The pipe function takes the output of the command and sends it to another function, such as _begin_ or _include_. This way, you can filter the output to find the section of the output that interests you.

> Put more simply `|`) filters let you ==sort, trim, and search command output directly in the CLI==. They help you find specific settings fast without reading through endless lines of text.

Here are a few examples:
![[Pasted image 20260821152337.png]]

In the picture above you can see that we’ve entered the _show running-config | begin interface_ command (we could have abbreviated it to _show run | b int_). This command starts the output from the first occurence of the word _interface_.

> [!NOTE] **NOTE** - Cisco Packet Tracer doesn’t support the **pipe** function. Instead try and use GNS3

### Core Filtering Commands
- **`include`**: Show only lines that match your exact word.
> _Example:_ `show ip interface brief | include up` 

- **`exclude`**: Hide lines that match your word.
>_Example:_ `show ip interface brief | exclude unassigned`

- **`begin`**: Start the text display at the first line matching your word.
>_Example:_ `show running-config | begin interface GigabitEthernet0/1`

- **`section`**: Show a whole block of config grouped under a matching header.
>_Example:_ `show running-config | section router ospf` 

- **`count`**: Count how many lines match your search term.
>_Example:_ `show access-lists | count Permit`

## Running and Startup Configuration
our switch actually has two “config” types and locations. A switch’s _running config_ is stored in RAM. Its _startup config_ is stored in nonvolatile memory. These are called:
- startup configuration
- running configuration

Immediately after you type a command in the global configuration mode, it will be stored in the running configuration. A running configuration resides in a device’s RAM, so if a device loses power, all configured commands will be lost.

To avoid this scenario, you need to copy your current configuration into the startup configuration. A startup configuration is stored in the nonvolatile memory of a device, which means that all configuration changes are saved even if the device loses power.

To copy your running configuration into the startup configuration you need to type the command _copy running-configuration startup-configuration_.
![[Pasted image 20260821154348.png]]

