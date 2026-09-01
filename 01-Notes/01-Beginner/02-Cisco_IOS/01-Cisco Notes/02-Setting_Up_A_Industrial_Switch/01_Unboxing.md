# 1. Unboxing
> Hi guys! Welcome to my YouTube channel; **CatsAreGods**, and today we're gonna unbox a switch! I'm kidding, lol. The following items are what we're gonna set up: a Cisco Catalyst IE-3300 Switch and a PWR-IE240W-PCAC-L Power Supply. The items come as-is, with no cables — that part matters a lot later, so keep it in mind.

---
## 1.1 Cisco Catalyst IE-3300 Rugged Switch IE-3300-8T2S-E
The [Cisco Catalyst IE-3300-8T2S-E](https://www.cisco.com/site/us/en/products/networking/industrial-switches/catalyst-ie3300-rugged-series/index.html) is a ==rugged industrial managed switch featuring 8 Gigabit Ethernet copper ports and 2 SFP fiber uplink slots==, built to operate in harsh environments.
![[Cisco-IE-3300-8P2S-E-Catalyst-IE3300-Rugged-Series-Managed-Switch.webp|402]]

> A rugged industrial switch is ==a specialized networking device built to connect computers, sensors, and machines in harsh environments where standard office switches would fail==.

### What Comes in the Box
- **Cisco Catalyst IE-3300-8T2S-E Rugged Switch:** The main modular base unit
- **DIN-Rail Mount:** Pre-installed or included bracket for industrial cabinet mounting
- **Pluggable Terminal Blocks:** For dual DC power inputs and alarm relays
- **Documentation / Safety Leaflets:** Quick start guide and regulatory compliance papers

### Key Hardware Specifications
- **Ports:** 8x 10/100/1000Base-T RJ45 copper ports and 2x 1G SFP slots
- **Operating Temperature:** Designed for extreme environments, ranging from -40°C to +75°C (-40°F to 167°F)
- **Scalability:** Supports expansion modules to add more ports on demand without replacing the base hardware
- **Management:** Runs Cisco IOS XE and supports management via Cisco Catalyst Center

---
## 1.2 PWR-IE240W-PCAC-L Power Supply

The Cisco **PWR-IE240W-PCAC-L** is a rugged 240-watt AC-to-DC DIN-rail power supply designed to deliver reliable power and PoE+ support to industrial network switches. ![[media__21173.webp|412]]

> An industrial Cisco power supply is ==a rugged electrical device built to provide reliable direct current (DC) power to [Cisco Industrial Ethernet Switches](https://www.cisco.com/c/en/us/products/switches/industrial-ethernet-switches/index.html), routers, and computing gear in harsh locations==.

### What Comes in the Box
- **Power Supply Unit (PSU):** The compact, metal-housed 240W unit with built-in DIN-rail mounting clips on the back
- **Terminal Blocks:** Integrated screw connectors for hardwiring the AC input and DC output wires safely
- **Documentation:** Safety instructions and setup guides

### Key Specifications
- **Input Voltage:** AC 100–240V (supports 90–264V AC range), 3.5A, 50–60Hz
- **Output Power:** 54V DC, 4.5A (adjustable range between 48–56V DC)
- **PoE Support:** Fully supports PoE and PoE+ (IEEE 802.3at) for powered devices like security cameras and access points
- **Mounting Type:** DIN-rail mountable for industrial enclosure
- **Compatibility:** Works with rugged models like the Cisco Catalyst IE3200 and Industrial Ethernet 4000 series

> **Note on voltage compatibility:** the IE-3300's own front-panel labeling sometimes gets quoted as "12–48V DC" input, which looks like it conflicts with this PSU's 54V DC output. The official Catalyst IE3300 datasheet clears this up — the redundant DC input on the IE-3300-8P2S-E is rated for a nominal 9.6–60V DC range, with 48V DC required for PoE and 54V DC required for PoE+. So 54V from this PSU is not just compatible, it's the recommended input if you want full PoE+ output on the switch's downstream ports.

---
## 1.3 SD-IE-16GB= Memory Card (SD) (Optional)
> The official SD card compatible with the Cisco Catalyst IE 3300 Rugged Series switch is the ==Cisco 16GB industrial SD memory card== (part number `SD-IE-16GB=`).

![[Pasted image 20260828095120.jpg|245]]

