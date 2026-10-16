# Old Server Info

|                 |                              |
| --------------- | ---------------------------- |
| **Chassis**     | ICOM409 4U rackmount         |
| **Motherboard** | Supermicro X7SBA             |
| **CPU**         | Intel Core 2 Quad Q9550      |
| **CPU Cooler**  | Arctic Cooling Freezer 7 Pro |
| **RAM**         | 2 × 2GB DDR2-800 (4GB)       |
| **PSU**         | Seasonic M12II-500W          |
| **DAQ**         | NI PCI-6220/6255             |
| **OS**          | Windows XP Professional SP3  |

---

## Table of Contents

- [[#1.0 Operating System & Hardware Information]]
- [[#1.1 ICOM409 4U Heavy-Duty Rackmount Computer]]
  - [[#Supermicro X7SBA Board Overview]]
- [[#1.2 Data Acquisition Device]]
- [[#1.3 RAM]]
- [[#1.4 PSU]]
- [[#1.5 CPU]]
- [[#1.6 CPU Cooler]]
- [[#Build Summary]]

---

## 1.0 Operating System & Hardware Information
- **OS Version:** Microsoft Windows XP Professional (Version 2002, Service Pack 3)
- **Registered To:** admin / ACIDA GmbH
- **Product Key / PID:** 76487-018-8849857-22795
- **Processor (CPU):** Intel(R) Core(TM) 2 Quad CPU Q9550 @ 2.83GHz
- **Usable RAM:** 3.39 GB of RAM (Physical Address Extension enabled)

> **Technical Note on RAM & OS:** Because a 32-bit (x86) build of Windows XP Professional is installed, system memory is capped at ~3.4 GB usable due to the 32-bit 4GB physical address space limitation, despite higher physical RAM installed on the board. Physical Address Extension (PAE) is active.
---

## 1.1 ICOM409 4U Heavy-Duty Rackmount Computer
![[Pasted image 20261008105517.jpg|454]]

The ICOM409 4U Heavy-Duty Rackmount Computer is a 19-inch shallow-depth industrial rackmount system engineered by Kontron UK (ICL Industrial Computers) for continuous 24/7 operation.

| | |
|---|---|
| **Chassis** | ICOM409 4U Industrial Rackmount Enclosure |
| **Motherboard** | Supermicro X7SBA |
| **Expansion** | Full-height expansion bay supporting legacy PCI and PCIe add-in cards |

### Supermicro X7SBA Board Overview
> View more details [here](https://theretroweb.com/motherboards/s/supermicro-x7sba)

![[Pasted image 20261008105733.jpg|720]]

![[Pasted image 20261008105809.png|720]]

The X7SBA is a workstation/server motherboard built for long-running industrial deployments.

| | |
|---|---|
| **Socket** | LGA775 (Core 2 Duo / Quad, Xeon 3000 series) |
| **Chipset** | Intel 3210 MCH + ICH9R |
| **Memory** | Unbuffered ECC / non-ECC DDR2 SDRAM, 4 DIMM slots (DIMM1A, 1B, 2A, 2B) |
| **PCI slots** | Slots 1 to 4: PCI 33MHz (32-bit) |
| **PCI-X slots** | Slots 5 and 6: PCI-X 100/133MHz |
| **PCIe slot** | Slot 7: PCIe x8 in an x16 slot |
| **LAN** | 2 × Intel LAN controllers |
| **Storage** | 6 × SATA (I-SATA0 to I-SATA5), floppy header |
| **Other** | VGA, COM, printer header, SIMSO (IPMI 2.0) slot |

> [!note] Compatibility
> The native 32-bit PCI slots are the reason this board is used for older industrial control and interface cards. Modern consumer boards no longer route a PCI bus.

---

## 1.2 Data Acquisition Device
### 1.2.1 National Instruments PCI-6220 16-Bit Multifunction DAQ Module
![[Pasted image 20261014102852.jpg]]

The National Instruments PCI-6220 is a high-speed, 16-bit multifunction data acquisition (DAQ) module from the NI M Series.

| | |
|---|---|
| **Bus** | Standard 32-bit legacy PCI |
| **Analog inputs** | 32 channels, 16-bit, up to 1.25 MS/s single-channel or 1.00 MS/s multichannel |
| **Analog outputs** | 4 channels, 16-bit, 2.8 MS/s |
| **Digital I/O** | 48 lines, used for triggering, control loops and sensor monitoring |
| **Use case** | Signal processing, automated testing, high-speed sampling in industrial rigs |

### 1.2.2 National Instruments PCI-6255 16-Bit Multifunction DAQ Module
![[Pasted image 20261009094555.jpg]]

The National Instruments PCI-6255 (Manufacturer Part Number: `779546-01`) is a 16-bit multifunction data acquisition (DAQ) module from the NI M Series. 

| | |
|---|---|
| **Bus** | Standard 32-bit legacy PCI |
| **Analog inputs** | 80 single-ended (40 differential), 16-bit, up to 1.25 MS/s single-channel or 750 kS/s multichannel (aggregate) |
| **Analog outputs** | 2 channels, 16-bit, 2.86 MS/s |
| **Digital I/O** | 24 lines |
| **Counters / timers** | 2 × 32-bit |
| **Triggering** | Analog and digital |
| **Connectors** | VHDCI |
| **Driver** | NI-DAQmx |
| **Use case** | Lab automation, research, design verification and manufacturing test |

> [!note] Compatibility
> Needs a standard 32-bit PCI slot, which the Elite 8300 CMT has.

---

## 1.3 RAM
### 1.3.1 Kingston 2GB 800MHz DDR2 DIMM
![[Pasted image 20261013154239.jpg]]
> Ignore the brand in the picture, I couldn't find a **good** one from Kingston

2 matching 2GB DDR2 sticks, 4GB total. The X7SBA only supports DDR2.

| | |
|---|---|
| **Capacity** | 2GB per module, 2 modules = 4GB |
| **Type** | DDR2 SDRAM, unbuffered desktop DIMM (240-pin) |
| **Speed** | 800MHz, PC2-6400U |
| **Latency** | CL6 |
| **Voltage** | 1.8V |
| **Organisation** | 2Rx8 (dual rank, x8 chips) |
| **Compatibility** | X7SBA DIMM slots. Not compatible with the HP Elite 8300 (DDR3) |

---

## 1.4 PSU
### 1.4.1 Seasonic M12II-500W (SS-500GM Active PFC F3)
![[Pasted image 20261013154848.jpg|385]] ![[Pasted image 20261013155850.jpg|328]]

Power supply for the rackmount build. The label reads SS-500GM Active PFC F3, with a ball bearing fan and sleeved cables.

| | |
|---|---|
| **Model (label)** | SS-500GM Active PFC F3 |
| **Total output** | 500W |
| **Input** | 100-240V AC, 9A, 50/60Hz |
| **PFC** | Active |
| **Cooling** | Ball bearing fan |
| **Connectors used** | ATX 24-pin and 8-pin CPU power for the X7SBA |

#### DC Output Ratings (from the label)

| Rail | Max Current |
|------|-------------|
| +3.3V | 24A |
| +5V | 24A |
| +12V1 | 17A |
| +12V2 | 18A |
| -12V | 0.8A |
| +5Vsb | 2.5A |

Combined limits: +3.3V and +5V together 130W max, +12V rails together 420W max, 500W total.

---

## 1.5 CPU
### 1.5.1 Intel Core 2 Quad Q9550
![[Pasted image 20261013160357.jpg|315]]  ![[Pasted image 20261013160435.jpg|339]]

The **Intel Core 2 Quad Q9550** is a desktop quad-core processor launched in early 2008, based on the Yorkfield core.

| | |
|---|---|
| **Family** | Intel Core 2 Quad (Yorkfield, 45nm) |
| **Clock speed** | 2.83GHz |
| **Cache** | 12MB L2 |
| **FSB** | 1333MHz |
| **Cores / threads** | 4 / 4 (no Hyper-Threading) |
| **Socket** | LGA775 |
| **TDP** | 95W |
| **Label markings** | SLB8V, 2.83GHZ/12M/1333/05A, made in Malaysia |

> [!note] Compatibility
> The Q9550 fits the LGA775 socket on the X7SBA and matches the 1333MHz FSB. The board BIOS needs to support the Q9550. It does not fit the HP Elite 8300, which uses LGA1155.

---

## 1.6 CPU Cooler
### 1.6.1 Arctic Cooling Freezer 7 Pro
![[Pasted image 20261014081148.jpg]]

The **Arctic Cooling Freezer 7 Pro** is a tower-style CPU cooler with copper heat pipes and an aluminium fin stack, made for LGA775 processors.

|            |                                                                        |
| ---------- | ---------------------------------------------------------------------- |
| **Design** | Tower heatsink, heat pipes in direct contact with the CPU lid          |
| **Fan**    | Integrated PWM fan with vibration-absorbing fan holder                 |
| **Socket** | LGA775                                                                 |
| **Use**    | Cooling the 95W Q9550 on the X7SBA, better than the stock Intel cooler |

---

## Build Summary

| Part        | Item                           |
| ----------- | ------------------------------ |
| **Chassis** | ICOM409 4U                     |
| **Board**   | Supermicro X7SBA               |
| **CPU**     | Core 2 Quad Q9550              |
| **Cooler**  | Arctic Cooling Freezer 7 Pro   |
| **RAM**     | 2 × 2GB DDR2-800               |
| **PSU**     | Seasonic M12II-500W (SS-500GM) |
| **DAQ**     | NI PCI-6220/6255 (PCI)         |
| **OS**      | Windows XP Professional SP3    |

---
