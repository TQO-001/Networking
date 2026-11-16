---
tags: [jobbing, guide, hardware]
---
# Cisco IE-3300 industrial switch: mount, wire and power up

↩ Back to the index: [[00-index|Jobbing index]]

> **Goal:** Mount a Cisco IE-3300 and its PWR-IE240W-PCAC-L power supply on a DIN rail, wire it safely and get to the console.

## Before you start
- [ ] Switch + PSU, TS35 DIN rail, SFPs for the uplinks
- [ ] AC power cord (3-wire, copper), DC output wire, chassis grounding wire with ring terminals
- [ ] Wire strippers, flat and Phillips screwdrivers, a torque screwdriver
- [ ] Console cable (RJ45-to-DB9 or USB-to-RJ45)
- [ ] **Safety first:** de-energized and locked out before touching a terminal. Ground first, verify, then power.

## Order of work
- [ ] 1. **Mount** the PSU and switch side by side on the rail. Leave the recommended gap (both are fanless, crowding traps heat). Click each onto the rail until it seats, then tug-test.
- [ ] 2. **Ground the chassis** to the panel earth busbar *before any power wire*. Ground the PSU chassis/rail too.
- [ ] 3. **Wire AC into the PSU**: [[01-wire_ac_power_to_the_psu|Wire AC power to the PSU]]
- [ ] 4. **Wire DC from the PSU to the switch**: PSU **+54 V DC** (brown) to switch **DC-A V+**, PSU **DC return** (blue) to switch **DC-A V−**. Optional second feed to **DC-B** from an independent source. Optional alarm relay contacts to a lamp or PLC.
- [ ] 5. Check every screw is torqued, close the AC terminal cover, apply power.
- [ ] 6. **Power LED** lit? Then connect the console and configure: [[02-connect_with_a_console_cable|Connect with a console cable]]

## Network connections
- RJ45 ports for devices; **SFP** ports need a transceiver matching the fibre/media. Port LEDs: solid green = link, blinking = traffic.

## Troubleshooting (from the install guide)
- No power: check DC-A and DC-B wiring and the source voltage.
- No link: check cable, the other device's power, SFP seating and media type.
- Overheating: keep airflow clear, do not crowd the units.

## Sub-topics (how-to guides)
| Need to… | Open |
|---|---|
| Strip and terminate the AC cord on the PSU | [[01-wire_ac_power_to_the_psu|Wire AC power to the PSU]] |
| Open a console session to the switch | [[02-connect_with_a_console_cable|Connect with a console cable]] |
| Configure the switch once it is powered | [[01-cisco_switch_basic_setup|Cisco switch: basic setup]] |

## Final checklist
- [ ] Rail secure, units locked on
- [ ] Switch chassis and PSU grounded to the PE busbar
- [ ] AC L/N/PE wired, terminal cover closed
- [ ] +54 V to DC-A V+, return to DC-A V−
- [ ] Optional DC-B and alarm relay done
- [ ] Screws torqued, power applied, power LED lit
- [ ] Console connected at 9600/8/N/1
- [ ] Hostname and enable secret set, management IP set, config saved
- [ ] `show version` and `show inventory` checked

## Source notes
- [[03-hardware_installation_guide|Cisco Catalyst IE3x00 hardware installation guide]]
