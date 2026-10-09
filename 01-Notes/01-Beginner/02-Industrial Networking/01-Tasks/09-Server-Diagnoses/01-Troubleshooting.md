# 1.1 Initial Triage & Investigation
> **Status:** Critical Hardware Failure (No Post / No Power LED)
> **Symptom:** Unit receives AC mains supply (Ethernet PHY LED indicators illuminate on live connection), but front-panel power state remains dead. Zero fan spin, no POST codes, no main bus activity.

---

### Step-by-Step Diagnostic Routine
1. **Isolation & De-cabling**
   * Completely isolated the host platform by removing all external physical interconnects (Power, Ethernet, Peripheral I/O).

2. **Chassis Access & Visual Inspection**
   * Unlocked top cover locking fasteners to expose internal mainboard topology, power routing, and expansion cards.
   * Disconnected SATA storage drive array from PSU cable harness and mainboard SATA controller to isolate potential power-rail ground faults or short circuits.

3. **Front Panel Header Fault Identification**
   * Traced front-panel control wiring harness from the chassis power button assembly back to the mainboard front-panel header array (`JFP1`/`FRONT_PANEL`).
   * **Root Cause Found:** Front panel control pins (Power SW, Reset SW, Power LED) were completely unseated from the mainboard pin array.

4. **Front Panel Pinout Realignment**
   * Reseated front-panel harness jumpers back into the motherboard header according to standard chassis pin layout specification:

![[pinout-1.png]]

5. **Power-On Validation**
   * Reconnected AC power source and engaged front panel power switch. System successfully initiated POST, fan spin confirmed on CPU/PSU heatsinks, and core power rails stabilized. Connected test peripherals (USB KB/Mouse, VGA/DVI Display) to confirm display output and BIOS access.

---

# 1.2 Anomaly Log & Secondary Fault Isolation
### Fault Observed: Acoustic EMI Interference / Coil Whine
* **Behavior:** Roughly ~5 minutes into sustained operation, system hardware produced high-frequency static/buzzing output (PWM inductor noise / power rail EMI).
* **Remediation Procedure:**
	1. Ignore it (I don't want to but that seems to be plan)

### Fault Observed: VGA
* **Behavior:** For some reason, most likely a fault within the motherboard, the server doesn't boot up unless the VGA port is fiddled with and held at a specific angle.
* **Remediation Procedure:**
	1. Replace the motherboard

### Fault Observed: Storage Corruption & Boot Loop
* **Behavior:** Legacy OS installation stuck in non-terminating boot loop during initial initialization phase.
* **Remediation Procedure:**
	1. Intercepted boot sequence and booted into PE environment using **DLC Boot** rescue media.
	2. Executed filesystem integrity check and verified sector health.
	3. Performed full OS re-deployment of **Windows XP Professional** via optical CD-ROM drive to restore clean system binaries.

> **CRITICAL DATA PRESERVATION NOTICE:**
> For legacy industrial systems, boot loops frequently signal impending magnetic media degradation. Before executing OS repair installs or write operations, perform an offline block-level disk clone (e.g., via `dd` or Clonezilla) to a target replacement SSD/HDD to ensure original sector state is preserved.

---

# 1.3 Resolution & Legacy Hardware Migration Strategy
To eliminate ongoing hardware instability, acoustic degradation, and legacy component fatigue, the primary machine was retired and replaced with an equivalent legacy architecture chassis capable of hosting the legacy interface hardware.

### Hardware Replacement Criteria
* **Expansion Slot Requirements:** Minimum 3x Legacy PCI expansion slots (required for hosting proprietary multi-channel DAQ/Control interface cards, e.g., National Instruments PCI modules).
* **Storage Migration:** Sector-by-sector disk clone deployed onto a replacement drive for stable OS runtime.