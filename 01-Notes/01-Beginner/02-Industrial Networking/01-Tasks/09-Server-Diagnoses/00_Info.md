## 1.1 ICOM409 4U Heavy-Duty Rackmount Computer
![[Pasted image 20261008105517.jpg|454]]
This beast is built like an absolute tank. Standard 4U chassis depth, industrial-grade steel framing, and designed to sit inside a 19-inch server cabinet where ordinary desktop PCs wouldn't last a week.

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

Next up on the workbench, we have the trusty **HP Compaq Elite 8300 CMT**. While it looks like a standard office tower on the surface, this specific motherboard revision (`656941-001 / 657096-001 / 657096-501`) is a workhorse in enterprise and lab environments.

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
Tucked neatly into one of the PCI slots is the crown jewel of this teardown: the **NI PCI-6254 Data Acquisition (DAQ) Card**.

### Module Highlights & Functionality
* **Bus Type:** Standard 32-bit Legacy PCI Interface
* **Analog Inputs:** 32 Analog Inputs at 16-Bit resolution (up to 1.25 MS/s single-channel or 1.00 MS/s multichannel)
* **Analog Outputs:** 4 Analog Outputs (16-Bit, 2.8 MS/s)
* **Digital I/O:** 48 Digital I/O lines for triggering, industrial control loops, and sensor monitoring
* **Use Case:** Advanced signal processing, automated testing, and high-speed data sampling in industrial rigs

> **Note on Compatibility:** High-performance DAQ modules like the NI PCI-6254 require standard 5V/3.3V legacy PCI slots. That's exactly why legacy industrial motherboards like the Supermicro X7SBA and HP Edison platform are so critical — modern consumer boards no longer feature native PCI bus routing!



