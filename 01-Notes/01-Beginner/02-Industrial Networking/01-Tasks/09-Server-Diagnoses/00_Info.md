## 1.1 ICOM409 4U Heavy-Duty Rackmount Computer
![[Pasted image 20261008105517.jpg|454]]

The ICOM409 4U Heavy-Duty Rackmount Computer is a 19-inch shallow-depth industrial rackmount system engineered by Kontron UK (ICL Industrial Computers) for continuous 24/7 operation.

### What’s Inside the Chassis
* **Chassis:** ICOM409 4U Industrial Rackmount Enclosure
* **Motherboard:** Supermicro X7SBA
* **Expansion Capabilities:** Full-height expansion bay supporting legacy PCI and PCIe Add-in Cards

### Supermicro X7SBA Board Overview
> View more details [here](https://theretroweb.com/motherboards/s/supermicro-x7sba)

![[Pasted image 20261008105733.jpg|720]]

![[Pasted image 20261008105809.png|720]]

The heart of this rackmount unit is the **Supermicro X7SBA** workstation/server motherboard. Built for legacy continuous industrial deployments, this board provides extensive expansion headroom:

* **Socket & Chipset:** LGA775 supporting Intel Core 2 Duo / Quad / Xeon 3000 series processors
* **Memory Support:** Unbuffered ECC / Non-ECC DDR2 SDRAM
* **Legacy Expansion:** Features native legacy 32-bit PCI slots alongside PCI Express, making it essential for hosting older industrial control and interface modules

---

## 1.2 HP Compaq Elite 8300 CMT (Convertible Minitower)
![[Pasted image 20261009093015.jpg]]   ![[Pasted image 20261009093006.jpg|196]]

The **HP Compaq Elite 8300 CMT** (Convertible Minitower) is a business desktop computer released by HP in 2012, built around the Intel Ivy Bridge platform. While it looks like a standard office tower on the surface, this specific motherboard revision (`656941-001 / 657096-001 / 657096-501`) is a workhorse in enterprise and lab environments.

### HP Compaq Elite 8300 Desktop Motherboard 656941-001 657096-001 657096-501 Board Overview
> View more details [here](https://theretroweb.com/motherboards/s/hp-edison)

![[Pasted image 20261009093441.jpg]]


### What’s Included / Key Features
* **Form Factor:** Convertible Minitower (CMT) for easy tool-less internal access
* **Motherboard Part Numbers:** 656941-001, 657096-001, 657096-501 (HP Edison platform)
* **Chipset:** Intel Q75 Express supporting 3rd Gen Intel Core i5/i7 processors
* **PCI Expansion Header:** Native PCI 2.3 slot availability alongside PCIe x16 slots, which is crucial for legacy DAQ card compatibility

---

## 1.3 National Instruments PCI-6254 16-Bit Multifunction DAQ Module
![[Pasted image 20261009094555.jpg]]

The National Instruments PCI-6254 (Manufacturer Part Number: `779071-01`) is a high-speed, 16-bit multifunction data acquisition (DAQ) module from the NI M Series.

### Module Highlights & Functionality
* **Bus Type:** Standard 32-bit Legacy PCI Interface
* **Analog Inputs:** 32 Analog Inputs at 16-Bit resolution (up to 1.25 MS/s single-channel or 1.00 MS/s multichannel)
* **Analog Outputs:** 4 Analog Outputs (16-Bit, 2.8 MS/s)
* **Digital I/O:** 48 Digital I/O lines for triggering, industrial control loops, and sensor monitoring
* **Use Case:** Advanced signal processing, automated testing, and high-speed data sampling in industrial rigs

> **Note on Compatibility:** High-performance DAQ modules like the NI PCI-6254 require standard 5V/3.3V legacy PCI slots. That's exactly why legacy industrial motherboards like the Supermicro X7SBA and HP Edison platform are so critical — modern consumer boards no longer feature native PCI bus routing!

## 1.4 HP Network Adapter Intel Ethernet I210-T1 GbE NIC
![[Pasted image 20261013153714.png|288]]  ![[Pasted image 20261013154434.jpg|345]]

A compact single-port Gigabit Ethernet card, the **HP Intel Ethernet I210-T1 GbE NIC** (Part Number: `E0X95AA`) is a single-port, low-halogen PCI Express (PCIe) Gigabit Network Interface Card. It adds a dedicated, reliable network interface to the build, which is handy for isolating DAQ or control traffic from the general network.

### Module Highlights & Functionality
* **Controller:** Intel I210 Gigabit Ethernet controller
* **Ports:** 1 × RJ45 (10/100/1000 Mbps)
* **Bus Type:** PCI Express x1
* **HP Part Numbers:** 728562-001 (spare), 697356-001 (assembly), as printed on the card label
* **Bracket:** Ships with both full-height and low-profile brackets (both shown above)
* **Use Case:** Adding a second or dedicated NIC for network segmentation, monitoring, or redundancy

> **Note on Compatibility:** This is a PCIe card, not PCI. It will fit the PCIe slots on both the HP Elite 8300 and the Supermicro X7SBA, so it does not compete with the legacy PCI slots needed for the NI PCI-6254.

---

## 1.5 Kingston 2GB 800MHz DDR2 DIMM
![[Pasted image 20261013154239.jpg]]

2 matching 2GB DDR2 sticks, giving 4GB total. This is the memory the Supermicro X7SBA uses, since the board only supports DDR2.

> **Note:** The heading says Kingston, but the stock photo shows Royemai-branded modules. Confirm the brand on the physical sticks.

### Module Highlights & Functionality
* **Capacity:** 2GB per module (4 modules = 8GB)
* **Type:** DDR2 SDRAM, unbuffered desktop DIMM (240-pin)
* **Speed:** 800MHz, PC2-6400U
* **Latency:** CL6 (as printed on the label)
* **Voltage:** 1.8V
* **Organisation:** 2Rx8 (dual rank, x8 chips)
* **Compatibility:** Fits the four DIMM slots on the Supermicro X7SBA (DIMM1A, 1B, 2A, 2B); not compatible with the HP Elite 8300, which uses DDR3

---

## 1.6 Seasonic SS-500GB - 500w active pfc F3 M12II-500W
![[Pasted image 20261013154848.jpg|385]] ![[Pasted image 20261013155850.jpg|328]]

The power supply for the rackmount build. Seasonic is known for reliable units, and this one is a modular design with a large fan and sleeved cables.

> **Note:** The heading says SS-500GB, but the label in the photo reads **SS-500GM Active PFC F3** (ball bearing fan). Use the label value as the correct model number.

### Module Highlights & Functionality
* **Model (per label):** SS-500GM Active PFC F3
* **Total Output:** 500W
* **Input:** 100-240V AC, 9A, 50/60Hz (universal input)
* **Efficiency Feature:** Active PFC (power factor correction)
* **Cooling:** Large ball bearing fan
* **Cabling:** Sleeved cables, with 8-pin/6-pin style connectors visible on the unit

### DC Output Ratings (from the label)

| Rail | Max Current |
|------|-------------|
| +3.3V | 24A |
| +5V | 24A |
| +12V1 | 17A |
| +12V2 | 18A |
| -12V | 0.8A |
| +5Vsb | 2.5A |

* **Combined limits:** +3.3V and +5V together max 130W; +12V rails together max 420W; total 500W
* **Compatibility:** Provides the ATX 24-pin and 8-pin CPU power connectors the Supermicro X7SBA needs

---

## 1.7 Intel Core 2 Quad Q9550 microprocessor
![[Pasted image 20261013160357.jpg|315]]  ![[Pasted image 20261013160435.jpg|339]]

The CPU for the X7SBA build. **Intel Core 2 Quad Q9550** is a desktop quad-core processor launched in early 2008 based on the Yorkfield architecture.

### Module Highlights & Functionality
* **Family:** Intel Core 2 Quad (Yorkfield, 45nm)
* **Clock Speed:** 2.83GHz
* **Cache:** 12MB L2
* **Front Side Bus:** 1333MHz
* **Cores / Threads:** 4 cores, 4 threads (no Hyper-Threading)
* **Socket:** LGA775
* **TDP:** 95W
* **Label Markings:** SLB8V, "2.83GHZ/12M/1333/05A", made in Malaysia
* **Use Case:** A powerful processor for this legacy rack build, handling multi-tasking and DAQ data processing

> **Note on Compatibility:** The Q9550 fits the LGA775 socket on the Supermicro X7SBA and matches the board's 1333MHz FSB. Check that the board BIOS version supports the Q9550 before first boot.
> The HP Elite 8300 uses LGA1155 and 3rd Gen Core CPUs, so this chip will not fit it.

---

## Build Summary

| Build | Board | CPU | RAM | Expansion Cards |
|-------|-------|-----|-----|-----------------|
| Rackmount (1.1) | Supermicro X7SBA | Core 2 Quad Q9550 | 4 × 2GB DDR2 | NI PCI-6254 (PCI), I210-T1 (PCIe x1) |
| Tower (1.2) | HP Elite 8300 (Edison) | 3rd Gen Core i5/i7 | DDR3 (not in this doc) | NI PCI-6254 (PCI), I210-T1 (PCIe x1) |

* **Power:** Seasonic SS-500GM (500W)
