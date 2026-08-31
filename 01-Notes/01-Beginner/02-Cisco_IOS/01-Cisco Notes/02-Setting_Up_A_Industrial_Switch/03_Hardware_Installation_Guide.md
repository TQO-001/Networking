# 3. Cisco Catalyst IE3x00 Rugged Series Switches — Hardware Installation Guide
> Try not to die lol, you cutie patootie you!

---
## 3.1 Switch Installation & Setup
This chapter describes how to install your switch, verify the boot-up sequence, and connect the switch to other devices. It also includes information specifically for installations in hazardous environments.

### Product Overview
The Cisco Catalyst IE-3300-8T2S-A is a robust Industrial Ethernet Switch designed for demanding industrial environments. It features multiple Ethernet ports and SFP slots for flexible network connectivity.

### Front Panel Components
![[Pasted image 20260828112328.jpg|443]]

- **RJ45 Ethernet Ports:** Eight (8) 10/100/1000BASE-T ports for standard Ethernet connections
- **SFP 1G Ports:** Two (2) Small Form-Factor Pluggable (SFP) slots for fiber optic or copper SFP transceivers, supporting 1 Gigabit Ethernet
- **DC Power Inputs (DC-A, DC-B):** Redundant power input terminals. Nominal input is a wide 9.6–60V DC range, but 48V DC is needed to enable standard PoE and 54V DC is needed for PoE+ — see the voltage note in Section 1.2
- **Console Port:** For local management and configuration
- **LED Indicators:** Various LEDs to indicate power status, port link/activity, and system status

---
## 3.2 Preparing for Installation
### Safety Information
- **Electrical Safety:** Ensure power connections are made by qualified personnel. Disconnect power before servicing
- **Environmental Conditions:** Operate the switch within specified temperature and humidity ranges. Avoid exposure to moisture or extreme temperatures
- **Mounting:** Securely mount the device to prevent accidental falls
- **Heat Dissipation:** Do not obstruct ventilation openings — the device can generate heat during operation
- **Hot-Surface Hazards:** The switch and PSU use passive aluminum heatsink fins. Under heavy PoE loads, the metal enclosure can reach high surface temperatures — treat it as hot to the touch during and shortly after operation
- **Terminal Block Safety Cover:** Confirm the plastic protective guard over the high-voltage AC input terminals on the PSU is closed before applying power, to prevent accidental contact
- **Wire Gauge & Torque Specs:** Under-tightened DC terminal screws are a real arc-flash and voltage-drop risk. Always strip wires to the length specified by the terminal block silkscreen, and torque screws to spec (in-lb or N·m) rather than "snug"
- **SD Card Handling:** Never insert or remove the `SD-IE-16GB=` card while the switch is actively writing configuration or mid-boot cycle — treat it like ejecting a USB drive, not like pulling out a battery

---
## 3.3 Required Cabling & Tools
The switch and PSU ship as bare units with **no interconnecting cables**. Before starting the physical build, gather:

- **AC Input Power Cord:** A standard 3-wire AC power cable (Line, Neutral, Ground) — typically copper stranded wire, 14–18 AWG — to connect your main AC supply (100–240V AC) to the terminal block of the PWR-IE240W-PCAC-L.
![[Pasted image 20260828123923.jpg]]

- **DC Output Wiring:** Heavy-gauge copper wire (12–16 AWG recommended) to bridge the 54V DC output terminals on the PSU to the DC-A (and optionally DC-B) pluggable terminal block on the IE-3300.
![[Pasted image 20260828124819.jpg]]

- **Chassis Grounding Wire:** A dedicated green/yellow copper grounding wire (6–10 AWG) with ring terminals, to ground both the switch chassis and the PSU chassis to a protective earth (PE) busbar.
![[Pasted image 20260828124913.jpg|265]]
- **Console Cable:** A Cisco RJ45-to-DB9 or USB-to-RJ45 (or Mini-USB/USB-C, depending on the exact console port on your unit) cable to connect the console interface to your PC/laptop
![[Cable-RJ45-RS485-USB-FTDI_rectangle.png.webp|328]]
- **Optics & Transceivers:** SFP transceivers (e.g. GLC-SX-MMD or GLC-TE) matching your uplink media — multimode/singlemode fiber with LC connectors, or RJ45 copper jumpers.
![[Pasted image 20260828125237.png|349]]
- **Tools:** Wire strippers, a small flathead terminal screwdriver (terminal block tensioning), a Phillips screwdriver (chassis ground lug), and a torque screwdriver.

![[（1.Preparation-of-tools-for-installing-terminal-blocks-and-wiring-boards.webp|488]]

---
## 3.4 Mounting the Switch (DIN-Rail InstallationBest Practices)

1. Mount the PWR-IE240W-PCAC-L and the IE-3300 side-by-side on a TS35 DIN rail
2. Leave the manufacturer-recommended spacing between units for natural convection airflow — both units are fanless and rely on passive cooling, so crowding them traps heat
3. Orient units so terminal blocks and ports remain accessible after mounting; you don't want to unclip the whole assembly just to re-terminate a wire
4. Confirm the rail itself is securely fastened to the panel or enclosure backplate before loading it with hardware — the rail carries no current, but it does carry the full mechanical weight of the switch, PSU, and every cable pulling on them
5. Snap each unit onto the rail using its rear DIN-clip until it seats with an audible click, then give it a firm tug to confirm it's locked

---
## 3.5.1 Stripping the AC input cable
The PWR-IE240W-PCAC-L uses an industrial terminal block rather than a standard appliance plug. You must strip the wires of an AC power cord and secure them into the screw terminals.

### ⚠️ Critical Safety Rules

- Disconnect Power: Never wire the cord while it is plugged into a wall outlet.
- Verify Voltage: Ensure your source matches the input label (100–240V AC).
- Wire Gauge: Use 18 AWG to 12 AWG copper wire rated for at least 75°C (167°F).

### Step-by-Step Wiring Guide
1. **Strip the Wires**
    - Cut off the female end of the AC power cord.
    - Strip the outer jacket back about 2 inches (50 mm).
    - Strip the insulation off the individual Ground, Neutral, and Line wires by 0.28 inches (7 mm).
2. **Identify Your Cord Colors**
	- _South Africa:_ Brown is Line (L), Blue is Neutral (N), Green/Yellow is Ground (G/⏚).
	- _North America (typical):_ Black is Line (L), White is Neutral (N), Green/Yellow is Ground (G/⏚).
	- _Europe/International:_ Brown is Line (L), Blue is Neutral (N), Green/Yellow is Ground (G/⏚).
![[Pasted image 20260831091935.jpg]]
3. **Connect to the Terminal Block**
    - Locate the AC input terminals on the power supply.
    - Insert the Ground wire into the terminal marked with the ground symbol ($\triangleq$ or `G`) and tighten the screw. Always connect ground first.
    - Insert the Neutral wire into the terminal marked `N` and tighten.
    - Insert the Line/Hot wire into the terminal marked `L` and tighten.
4. **Inspect and Power On**
    - Tug gently on each wire to ensure it is locked tight.
    - Ensure no bare wire strands are fraying out or touching adjacent terminals.
    - Plug the AC cord into the wall outlet.

## 3.5.2 Physical Wiring & Power Connection
Order matters here — grounding always comes first, then AC in, then DC out.

1. **Chassis Protective Grounding (mandatory first step):** Connect the earth ground lug on the IE-3300 chassis to the panel ground busbar _before_ connecting any power wires. Ground the PSU chassis/rail the same way.
2. **AC Wiring (power supply input):** Strip and hardwire the AC source into the PWR-IE240W-PCAC-L input terminal block:
    - **L** (Line / Live)
    - **N** (Neutral)
    - **PE** (Protective Earth Ground)
3. **DC Wiring (power supply → switch):**
    - Wire the **+54V DC output** (**Brown wire**)of the PSU to the **V+** terminal on the switch's DC-A terminal block
    - Wire the **54V DC Return (DC−)** (**Blue wire**) of the PSU to the **V−** terminal on the switch's DC-A terminal block
    - _(Optional)_ Run a second feed to **DC-B** for dual power-input redundancy, ideally from an independent source rather than the same PSU
4. **Alarm Contact Wiring (optional):** Wire the built-in alarm relay contacts on the IE-3300 terminal block to external indicator lamps or a PLC for power-fail/link-fail monitoring
5. Double-check every terminal screw is torqued to spec, close the AC terminal safety cover, then apply power

---
## 3.6 Network Connections
### RJ45 Ports
Connect standard Ethernet cables from your network devices (computers, printers, other switches) to the RJ45 ports.

### SFP Ports & SFP Module Compatibility
Insert compatible SFP transceivers into the SFP 1G slots, then connect the appropriate fiber or copper cable.

- **Match the media, not just the slot:** the SFP slot itself doesn't care what you plug in, but the far end of the link does — multimode fiber needs a multimode-rated SFP (e.g. GLC-SX-MMD), singlemode fiber needs a singlemode-rated SFP (e.g. GLC-LX-SM-D), and copper runs use an RJ45 copper SFP (e.g. GLC-TE)
- **Use Cisco-coded or Cisco-compatible optics:** genuine or properly coded third-party SFPs will show correct inventory info in `show inventory`; uncoded/incompatible modules can be flagged or refused by IOS XE depending on the platform's optics-authentication settings
- **Distance and wavelength matter:** a short-range SX module won't reliably drive a long singlemode run, and mismatched wavelengths between two ends of a link (e.g. one LX, one SX) simply won't link up
- **Hot-swappable:** SFPs can be inserted/removed with the switch powered on, but always handle them by the housing, not the fiber ferrule, and keep dust caps on unused ports

---
## 3.7 Operating the Switch
### Power On
Once power is connected, the switch will automatically power on. Observe the power LED indicators to confirm the device is receiving power.

### LED Indicators
- **Power LED:** Indicates the power status of the device
- **System LED:** Indicates the overall operational status of the switch
- **Port LEDs:** Typically solid green for an active link, blinking for data transmission, per Ethernet/SFP port — refer to product documentation for exact per-model behavior

---
## 3.8 Initial CLI Configuration Steps
> Refer to this [document](01_Switch_Configuration), or follow the steps below
1. **Connect the console cable** from your PC/laptop to the switch's console port
2. **Open a terminal emulator** (PuTTY, Tera Term, or similar) and set the serial connection to **9600 baud, 8 data bits, no parity, 1 stop bit, no flow control**
3. **Power on the switch** and watch the boot sequence scroll in the terminal — this is also where you'd catch a failed SD card read or corrupted boot image
4. **Enter Express Setup / initial setup dialog** if prompted, or drop straight to the CLI and enter privileged EXEC mode (`enable`)
```cisco
Switch> enable
Switch# configure terminal
```

1. **Set the hostname and enable secret**, so the box isn't sitting on default credentials the moment it's on the network:
```cisco
Switch(Config)# hostname IE3300-SW1 enable secret <your-secret>
```

6. **Assign a management IP** (either on a VLAN 1 SVI or a dedicated management interface, depending on your design) so you can drop to SSH and stop tying up the console port
7. **Save the configuration** with `write memory` (or `copy running-config startup-config`) before you disconnect — an unsaved config is gone on the next power cycle
8. **Verify with `show version` and `show inventory`** to confirm IOS XE version, license level, and that the installed SFPs/expansion modules are recognized correctly

---
## 3.9 Maintenance
### Cleaning
Periodically clean the exterior of the switch with a soft, dry cloth. Do not use liquid or aerosol cleaners. Ensure ventilation openings are free from dust and debris to maintain proper airflow.

### Firmware Updates
Regularly check the Cisco support website for available firmware updates. Keeping firmware current ensures optimal performance, security, and access to new features. Follow the instructions provided with the firmware update package carefully.

---
## 3.10 Troubleshooting
- **No Power:** Verify power cable connections to both DC-A and DC-B. Check the power source and confirm it's within the supported input range (see the voltage note in Section 1.2)
- **No Link on Port:** Check the Ethernet or fiber cable connection. Ensure the connected device is powered on and functioning. Verify the SFP transceiver is properly seated and media-compatible
- **System LED Error:** Consult Cisco documentation for specific system LED error codes or patterns
- **Network Connectivity Issues:** Check IP configuration, VLAN settings, and other network parameters. Use the console port to access the CLI for diagnostics
- **Overheating:** Ensure the switch is in an environment with adequate airflow and that ventilation fins are not blocked

For persistent issues, refer to the comprehensive troubleshooting guides on the Cisco support website or contact Cisco technical support.

---
## 3.11 Further Reading / Manual Resources
To go deeper on any of the sections above, these are the official documents to pull up:

- **Cisco Catalyst IE3300 Rugged Series Switch Hardware Installation Guide** — sections on _Connecting the Switch to Ground_, _Wiring the DC Power Source_, and _Alarm Relay Wiring_
- **Cisco Power Supply Modules Hardware Installation Guide (PWR-IE240W-PCAC-L)** — AC input wire-sizing tables, breaker recommendations (10A/16A branch circuit protection), and DC output terminal specifications
- **Cisco Catalyst IE3300 Rugged Series Data Sheet** — official input voltage tables (this is the source for the 9.6–60V DC figure used in Section 1.2)
- **Cisco Industrial Ethernet Switch CLI Configuration Guides** — Express Setup and serial terminal settings for out-of-box setup

---

## Setup Checklist
Quick-reference version of Sections 3.3–3.8, in build order.

**Before you start**

- [ ] AC power cord (3-wire, 14–18 AWG) on hand
- [ ] DC output wire (12–16 AWG) on hand
- [ ] Chassis grounding wire (6–10 AWG, ring terminals) on hand
- [ ] Console cable (RJ45-to-DB9 or USB-to-RJ45) on hand
- [ ] SFP transceivers matching your uplink media
- [ ] Wire strippers, flathead + Phillips screwdrivers, torque screwdriver

**Mounting**

- [ ] DIN rail securely fastened to panel/enclosure
- [ ] PSU and switch snapped onto rail with correct spacing
- [ ] Both units confirmed locked (tug test)

**Wiring**

- [ ] Switch chassis grounded to PE busbar
- [ ] PSU chassis/rail grounded to PE busbar
- [ ] AC L/N/PE wired into PSU input terminal block
- [ ] AC terminal safety cover closed
- [ ] PSU +54V DC → switch DC-A V+
- [ ] PSU DC Return → switch DC-A V−
- [ ] (Optional) DC-B wired to a second source for redundancy
- [ ] (Optional) Alarm relay contacts wired
- [ ] All terminal screws torqued to spec

**Power-up & config**

- [ ] Power applied, power LED confirmed lit
- [ ] Console cable connected, terminal set to 9600/8/N/1
- [ ] Hostname and enable secret set
- [ ] Management IP assigned
- [ ] Config saved (`write memory`)
- [ ] `show version` / `show inventory` checked

---

## Sources
Theory content in Section 2 and the voltage correction in Section 1.2 were checked against:

- Cisco Catalyst IE3300 Rugged Series Data Sheet — official input voltage/current tables (switchcisco.vn)
- SparkFun Learn — "Voltage, Current, Resistance, and Ohm's Law": https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law/all
- All About Circuits — "Ohm's Law: How Voltage, Current, and Resistance Relate": https://www.allaboutcircuits.com/textbook/direct-current/chpt-2/voltage-current-resistance-relate/
- Engineering ToolBox — "Wire Gauges" (AWG ampacity reference): https://www.engineeringtoolbox.com/wire-gauges-d_419.html
- UTI — "Wire Gauge Chart: AWG, Ampacity and Other Basics": https://www.uti.edu/blog/electrical/wire-gauge-chart-awg-ampacity
- UTI — "Grounding vs. Bonding: Key Differences": https://www.uti.edu/blog/electrical/grounding-vs-bonding
- RS DesignSpark — "Safety Extra-Low Voltage (SELV): What does it mean?": https://www.rs-online.com/designspark/safety-extra-low-voltage-selv-what-does-it-mean
- EDN — "SELV In Power Supplies: Definition & Applications": https://www.edn.com/what-does-selv-mean-for-power-supplies/
- FS Community — "Power over Ethernet (PoE) Explained: PoE Standards and Wattage": https://community.fs.com/article/understanding-poe-standards-and-poe-wattage.html
- Phihong — "802.3af, at and bt: Exploring Active Power Over Ethernet IEEE Standards": https://www.phihong.com/802-3af-at-and-bt-exploring-active-power-over-ethernet-ieee-standards/
- Cisco Catalyst IE3300 Rugged Series Switch Hardware Installation Guide (Cisco.com)
- Cisco Power Supply Modules Hardware Installation Guide for PWR-IE240W-PCAC-L (Cisco.com)
- Cisco Industrial Ethernet Switch CLI Configuration Guides (Cisco.com)