# New Server Info

|                  |                                                  |
| ---------------- | ------------------------------------------------ |
| **Chassis / PC** | HP Compaq Elite 8300 CMT                         |
| **Motherboard**  | HP Edison (656941-001 / 657096-001 / 657096-501) |
| **CPU**          | Intel Core i7-3770                               |
| **CPU Cooler**   | HP heatsink and fan assembly 625257-001          |
| **RAM**          | Micron 4GB DDR3                                  |
| **PSU**          | HP 320W (613764-001 / 611483-001 / 600457-001)   |
| **DAQ**          | NI PCI-6220/6255                                 |
| **NIC**          | HP Intel I210-T1 GbE                             |

---

## Table of Contents

- [[#1.1 HP Compaq Elite 8300 CMT (Convertible Minitower)]]
  - [[#HP Compaq Elite 8300 Desktop Motherboard Overview]]
- [[#1.2 Data Acquisition Device]]
- [[#1.3 HP Network Adapter Intel Ethernet I210-T1 GbE NIC]]
- [[#1.4 RAM]]
- [[#1.5 PSU]]
- [[#1.6 CPU]]
- [[#1.7 CPU Cooler]]
- [[#Build Summary]]

---

## 1.1 HP Compaq Elite 8300 CMT (Convertible Minitower)
![[Pasted image 20261009093015.jpg]]   ![[Pasted image 20261009093006.jpg|196]]

The **HP Compaq Elite 8300 CMT** (Convertible Minitower) is a business desktop computer released by HP in 2012, built around the Intel Ivy Bridge platform. This motherboard revision (`656941-001 / 657096-001 / 657096-501`) is common in enterprise and lab environments.

### HP Compaq Elite 8300 Desktop Motherboard Overview
> View more details [here](https://theretroweb.com/motherboards/s/hp-edison)

![[Pasted image 20261009093441.jpg]]

| | |
|---|---|
| **Form factor** | Convertible Minitower (CMT), tool-less internal access |
| **Motherboard part numbers** | 656941-001, 657096-001, 657096-501 (HP Edison platform) |
| **Chipset** | Intel Q77 Express |
| **CPU support** | 2nd and 3rd Gen Intel Core i3 / i5 / i7, LGA1155 |
| **Memory** | DDR3-1600 non-ECC, 4 DIMM slots, up to 32GB |
| **Expansion** | 3 × PCI, 1 × PCIe x1, 1 × PCIe x4, 1 × PCIe x16 |
| **Onboard LAN** | Intel 82579LM Gigabit |
| **PSU** | 320W, 90% efficient, active PFC |

> [!note] Compatibility
> The PCI slots are what allow a legacy DAQ card like the NI PCI-6255 and PCI-6254 to be used in this machine. It also a has a PCIe slot for the additional Network Adapter below

---

## 1.3 HP Network Adapter Intel Ethernet I210-T1 GbE NIC
![[Pasted image 20261013153714.png|288]]  ![[Pasted image 20261013154434.jpg|345]]

The **HP Intel Ethernet I210-T1 GbE NIC** (Part Number: `E0X95AA`) is a single-port, low-halogen PCI Express Gigabit network card. It gives the machine a second network interface alongside the onboard one, so DAQ or control traffic can be kept separate from the general network.

| | |
|---|---|
| **Controller** | Intel I210 Gigabit Ethernet |
| **Ports** | 1 × RJ45 (10/100/1000 Mbps) |
| **Bus** | PCI Express x1 |
| **HP part numbers** | 728562-001 (spare), 697356-001 (assembly), from the card label |
| **Brackets** | Full-height and low-profile |
| **Use case** | Dedicated or second NIC for segmentation, monitoring or redundancy |

---

## 1.4 RAM
### 1.4.1 Micron 4GB DDR3 Desktop RAM Module
![[Pasted image 20261014084644.jpg]]

A 4GB DDR3 desktop RAM module designed for system memory expansion in compatible DDR3 platforms.

| | |
|---|---|
| **Capacity** | 4GB |
| **Type** | DDR3 SDRAM, unbuffered desktop DIMM (240-pin) |
| **Voltage** | 1.5V (standard DDR3) |
| **Platform support** | Elite 8300 takes up to DDR3-1600, 4 DIMM slots, 32GB max |
| **Compatibility** | Not compatible with the old server (DDR2) |

---

## 1.5 PSU
### 1.5.1 HP Compaq Power Supply Unit (PSU) P/N 613764-001 / 611483-001 / 600457-001
![[Pasted image 20261014085223.jpg|456]]

Original power supply for the Elite 8300 CMT.

| | |
|---|---|
| **Part numbers** | 613764-001 (spare), 611483-001 (assembly), 600457-001 |
| **Output** | 320W |
| **Efficiency** | 90%, active PFC |
| **Connectors** | HP proprietary layout (4-pin +12V CPU, 6-pin) |
| **Form factor** | Fits the CMT/MT chassis. Not a standard ATX layout |
| **Variants** | Lite-On PS-4321-1HB and AcBel PC9057 units are listed under these part numbers |

---

## 1.6 CPU
### 1.6.1 Intel Core i7-3770
![[Pasted image 20261014085741.jpg|351]]

The **Intel Core i7-3770** is a desktop quad-core processor launched in 2012, based on the Ivy Bridge core.

| | |
|---|---|
| **Family** | Intel Core i7 (Ivy Bridge, 22nm) |
| **Clock speed** | 3.4GHz base, up to 3.9GHz turbo |
| **Cache** | 8MB L3 |
| **Cores / threads** | 4 / 8 (Hyper-Threading) |
| **Socket** | LGA1155 |
| **TDP** | 77W |
| **Memory** | DDR3-1600, dual channel |
| **Graphics** | Intel HD Graphics 4000 |

---

## 1.7 CPU Cooler
### 1.7.1 HP CPU Heatsink and Fan Assembly P/N 625257-001
![[Pasted image 20261014090150.jpg|401]]

Original cooler for the Elite 8300 CMT.

| | |
|---|---|
| **Part number** | 625257-001 |
| **Socket** | LGA1155 |
| **Fan** | 4-pin |
| **Used in** | HP Elite 8200 / 8300 CMT/MT |
| **Pairing** | Cools the i7-3770 (77W) in this build |

---

## Build Summary

| Part       | Item                       |
| ---------- | -------------------------- |
| **PC**     | HP Compaq Elite 8300 CMT   |
| **Board**  | HP Edison (Q77 Express)    |
| **CPU**    | Core i7-3770               |
| **Cooler** | HP 625257-001              |
| **RAM**    | Micron 4GB DDR3            |
| **PSU**    | HP 320W (613764-001)       |
| **DAQ**    | NI PCI-6220/6255 (PCI)     |
| **NIC**    | HP Intel I210-T1 (PCIe x1) |
