![[SL7_Network.pdf]]
# SL7 Network Documentation
![[Pasted image 20261019135734.png]]

## 1. What is in this folder

| File | Contents |
|---|---|
| [[00-SL7_Index]] | This page — inventory, VLANs and progress |
| [[01-Topology_and_Connections]] | How every device connects: diagrams, link table, walk-through |
| [[02-SL7_LV_Room]] | SL7 LV Room — IND-SW-EDNL_SL7 |
| [[03-SL7_Electric_Room]] | SL7 Electric Room — SL7MCC switch, SCADA PC, IBA PC, PLC |
| [[04-SL7_Operating_Desk]] | SL7 Operating Desk — SL7Oper switch, operator thin client |
| [[05-A17_and_Cooling_Towers]] | A17 control room, cooling towers, crane (5 switches) |
| [[06-Core_Dept34_and_TLL]] | Dept34 core, Dept34_PTTL, TLL (3 switches) |
| [[07-PTTL_and_CTLL5]] | PTTL, CTLL5, PTTL_PLC, PTTL_PLC2 (4 switches) |
| [[08-SL5_SL4_SL2]] | SL5, SL4, SL2 (3 switches) |
| [[09-Open_Issues_and_Questions]] | Mismatches, questions, to-dos |
| Raw_CLI/ (5 files) | Unedited CLI output for all 18 switches |

## 2. Network at a glance
- **18 Cisco switches** captured, all managed in VLAN 560 (192.168.160.x): IE-3000 (×12), IE-3200 (×2), IE-3300 (×2), IE-9320 (×1) and one Catalyst 2960-X.
- The network is a **tree** with a single connection to the plant core (`IND-SW-Dept34_Distr` → `ind-Core1-MSR`). That link is not on the diagram.
- Depth: 1 hop (Dept34_Distr) to **9 hops** (CM-Crane).
- Diagram checks: 6 links with wrong or swapped port labels, 14 of 18 switch models wrong, 4 things missing — see [[09-Open_Issues_and_Questions]].

## 3. Switch inventory

| # | Switch | Management IP | Model (CDP) | IOS | Hops to core | Documented in |
|---|---|---|---|---|---|---|
| 1 | `IND-SW-Dept34_Distr` | 192.168.160.117 | IE-9320-22S2C4X | 17.12.2 | 1 | [[06-Core_Dept34_and_TLL]] |
| 2 | `IND-SW-EDNL_Dept34_PTTL` | 192.168.160.84 | WS-C2960X-24TS-L | 15.2(2)E7 | 2 | [[06-Core_Dept34_and_TLL]] |
| 3 | `IND-SW-EDNL_TLL` | 192.168.160.59 | IE-3000-8TC | 15.2(4)EA5 | 3 | [[06-Core_Dept34_and_TLL]] |
| 4 | `IND-SW-EDNL_SL7` | 192.168.160.73 | IE-3000-4TC | 15.0(2)EY3 | 4 | [[02-SL7_LV_Room]] |
| 5 | `IND-SW-SL7Mcc` | 192.168.160.112 | IE-3200-8T2S | 16.12.3 | 5 | [[03-SL7_Electric_Room]] |
| 6 | `IND-SW-EDNL-SL7Oper` | 192.168.160.119 | IE-3300-8P2S | 17.12.4 | 6 | [[04-SL7_Operating_Desk]] |
| 7 | `IND-SW-EDNL_A17ControlRoom` | 192.168.160.65 | IE-3000-8TC | 15.2(4)EA5 | 5 | [[05-A17_and_Cooling_Towers]] |
| 8 | `IND-SW-EDNL_EXTCOOLINGTOWER` | 192.168.160.101 | IE-3200-8T2S | 16.12.3 | 6 | [[05-A17_and_Cooling_Towers]] |
| 9 | `IND-SW-EDNL_S5CoolingTowers` | 192.168.160.31 | IE-3000-8TC | 15.0(2)EY3 | 7 | [[05-A17_and_Cooling_Towers]] |
| 10 | `IND-SW-EDNL_S4CoolingTowers` | 192.168.160.30 | IE-3000-8TC | 15.0(2)EY3 | 8 | [[05-A17_and_Cooling_Towers]] |
| 11 | `IND-SW-EDNL-CM-Crane` | 192.168.160.126 | IE-3300-8P2S | 17.12.4 | 9 | [[05-A17_and_Cooling_Towers]] |
| 12 | `IND-SW-EDNL_PTTL` | 192.168.160.70 | IE-3000-8TC | 15.2(4)EA5 | 3 | [[07-PTTL_and_CTLL5]] |
| 13 | `IND-SW-EDNL_PTTL_PLC` | 192.168.160.90 | IE-3000-8TC | 12.2(58)SE2 | 4 | [[07-PTTL_and_CTLL5]] |
| 14 | `IND-SW-EDNL_PTTL_PLC2` | 192.168.160.124 | IE-3000-4TC | 15.0(2)EY3 | 5 | [[07-PTTL_and_CTLL5]] |
| 15 | `IND-SW-EDNL_SL5` | 192.168.160.56 | IE-3000-8TC | 15.2(4)EA5 | 4 | [[08-SL5_SL4_SL2]] |
| 16 | `IND-SW-EDNL_SL4` | 192.168.160.55 | IE-3000-8TC | 15.2(4)EA5 | 5 | [[08-SL5_SL4_SL2]] |
| 17 | `IND-SW-EDNL-SL2` | 192.168.160.54 | IE-3000-8TC | 15.2(4)EA5 | 6 | [[08-SL5_SL4_SL2]] |
| 18 | `IND-SW-EDNL_CTLL5` | 192.168.160.71 | IE-3000-8TC | 15.2(4)EA5 | 3 | [[07-PTTL_and_CTLL5]] |

Not captured (seen only from neighbours): `ind-Core1-MSR` (Catalyst C9500-48Y4C, 192.168.1.1, IOS-XE 17.9.4) and `IND-SW-CTLL5-panel` (Moxa EDS-G516E, 192.168.160.113).

## 4. VLAN reference

| VLAN | Diagram legend name | Names seen on the switches (switch count) | IP addresses seen on the VLAN interface |
|---|---|---|---|
| 560 | Management | Management / VLAN0560 / IND-Management … | 192.168.160.x (every switch) |
| 561 | IND-CESMS | `VLAN0561` (11), `IND-CESMS` (4), `CESMS` (1), `IND-CESMSNetwork` (1) | 192.168.192.99 |
| 567 | CTTL5_Mgaurd | `CTTL5_Mgaurd` (11), `CTLL5_Mgaurd` (1), `VLAN0567` (1), `IND-CTTL5` (1) | 192.168.167.50 |
| 574 | IND-AnnealingFurnace | `IND-AnnealingFurnace` (14), `IND-Annealing_furnace` (1) | 192.168.174.200 |
| 579 | PTTL_Network | `PTTL_Network` (7), `PTTL` (4), `IND-PTTL` (1), `-PTTL` (1) | 192.168.179.100 |
| 581 | PTTL_ACDrives | `PTTL_ACDrives` (5), `ED_Extrutions` (1), `IND-PTTL_DC_Drives` (1) | 192.168.181.146, 192.168.181.147, 192.168.181.148, 192.168.181.149, 192.168.181.150 |
| 590 | EDPowerMeters | `EDPowerMeters` (12), `Power_Meters` (1), `powermeters` (1) | — |
| 591 | SL7 | `IND_SL5` (4), `SL7` (2), `VLAN0591` (2), `IND-Dept34` (1), `CTLL5_Network` (1) | 10.18.14.250, 10.18.14.251 |
| 592 | Crane | `Crane` (8), `crane` (1), `CCL_Ruler` (1) | — |
| 593 | Ignition | `Ignition` (16), `Igntion` (1), `ignition` (1) | 192.168.193.201 |

## 5. Cable legend (from the diagram)

| Colour | Meaning | Used on |
|---|---|---|
| Blue | UTP | SL7↔MCC, MCC↔SL7Oper, TLL↔Dept34_PTTL |
| Orange dashed | Fiber (MM) | SL7↔TLL |
| Black | Unknown | All other links and the operator thin client |
| Green | Not in legend | MCC to SCADA PC and IBA PC |

## 6. Progress

### Switches captured and documented (CLI, connections, port map)

- [x] [[06-Core_Dept34_and_TLL#IND-SW-Dept34_Distr|IND-SW-Dept34_Distr]]
- [x] [[06-Core_Dept34_and_TLL#IND-SW-EDNL_Dept34_PTTL|IND-SW-EDNL_Dept34_PTTL]]
- [x] [[06-Core_Dept34_and_TLL#IND-SW-EDNL_TLL|IND-SW-EDNL_TLL]]
- [x] [[02-SL7_LV_Room#IND-SW-EDNL_SL7|IND-SW-EDNL_SL7]]
- [x] [[03-SL7_Electric_Room#IND-SW-SL7Mcc|IND-SW-SL7Mcc]]
- [x] [[04-SL7_Operating_Desk#IND-SW-EDNL-SL7Oper|IND-SW-EDNL-SL7Oper]]
- [x] [[05-A17_and_Cooling_Towers#IND-SW-EDNL_A17ControlRoom|IND-SW-EDNL_A17ControlRoom]]
- [x] [[05-A17_and_Cooling_Towers#IND-SW-EDNL_EXTCOOLINGTOWER|IND-SW-EDNL_EXTCOOLINGTOWER]]
- [x] [[05-A17_and_Cooling_Towers#IND-SW-EDNL_S5CoolingTowers|IND-SW-EDNL_S5CoolingTowers]]
- [x] [[05-A17_and_Cooling_Towers#IND-SW-EDNL_S4CoolingTowers|IND-SW-EDNL_S4CoolingTowers]]
- [x] [[05-A17_and_Cooling_Towers#IND-SW-EDNL-CM-Crane|IND-SW-EDNL-CM-Crane]]
- [x] [[07-PTTL_and_CTLL5#IND-SW-EDNL_PTTL|IND-SW-EDNL_PTTL]]
- [x] [[07-PTTL_and_CTLL5#IND-SW-EDNL_PTTL_PLC|IND-SW-EDNL_PTTL_PLC]]
- [x] [[07-PTTL_and_CTLL5#IND-SW-EDNL_PTTL_PLC2|IND-SW-EDNL_PTTL_PLC2]]
- [x] [[08-SL5_SL4_SL2#IND-SW-EDNL_SL5|IND-SW-EDNL_SL5]]
- [x] [[08-SL5_SL4_SL2#IND-SW-EDNL_SL4|IND-SW-EDNL_SL4]]
- [x] [[08-SL5_SL4_SL2#IND-SW-EDNL-SL2|IND-SW-EDNL-SL2]]
- [x] [[07-PTTL_and_CTLL5#IND-SW-EDNL_CTLL5|IND-SW-EDNL_CTLL5]]

### Photos and room / location recorded

- [x] [[02-SL7_LV_Room#IND-SW-EDNL_SL7|IND-SW-EDNL_SL7]]
- [x] [[03-SL7_Electric_Room#IND-SW-SL7Mcc|IND-SW-SL7Mcc]]
- [x] [[04-SL7_Operating_Desk#IND-SW-EDNL-SL7Oper|IND-SW-EDNL-SL7Oper]]
- [ ] [[06-Core_Dept34_and_TLL#IND-SW-Dept34_Distr|IND-SW-Dept34_Distr]]
- [ ] [[06-Core_Dept34_and_TLL#IND-SW-EDNL_Dept34_PTTL|IND-SW-EDNL_Dept34_PTTL]]
- [ ] [[06-Core_Dept34_and_TLL#IND-SW-EDNL_TLL|IND-SW-EDNL_TLL]]
- [ ] [[05-A17_and_Cooling_Towers#IND-SW-EDNL_A17ControlRoom|IND-SW-EDNL_A17ControlRoom]]
- [ ] [[05-A17_and_Cooling_Towers#IND-SW-EDNL_EXTCOOLINGTOWER|IND-SW-EDNL_EXTCOOLINGTOWER]]
- [ ] [[05-A17_and_Cooling_Towers#IND-SW-EDNL_S5CoolingTowers|IND-SW-EDNL_S5CoolingTowers]]
- [ ] [[05-A17_and_Cooling_Towers#IND-SW-EDNL_S4CoolingTowers|IND-SW-EDNL_S4CoolingTowers]]
- [ ] [[05-A17_and_Cooling_Towers#IND-SW-EDNL-CM-Crane|IND-SW-EDNL-CM-Crane]]
- [ ] [[07-PTTL_and_CTLL5#IND-SW-EDNL_PTTL|IND-SW-EDNL_PTTL]]
- [ ] [[07-PTTL_and_CTLL5#IND-SW-EDNL_PTTL_PLC|IND-SW-EDNL_PTTL_PLC]]
- [ ] [[07-PTTL_and_CTLL5#IND-SW-EDNL_PTTL_PLC2|IND-SW-EDNL_PTTL_PLC2]]
- [ ] [[08-SL5_SL4_SL2#IND-SW-EDNL_SL5|IND-SW-EDNL_SL5]]
- [ ] [[08-SL5_SL4_SL2#IND-SW-EDNL_SL4|IND-SW-EDNL_SL4]]
- [ ] [[08-SL5_SL4_SL2#IND-SW-EDNL-SL2|IND-SW-EDNL-SL2]]
- [ ] [[07-PTTL_and_CTLL5#IND-SW-EDNL_CTLL5|IND-SW-EDNL_CTLL5]]

### End devices

- [x] SL7_SCADA_PC (T0246) documented — [ ] port confirmed
- [x] IBA_PC (C7401-SL7-IBA) documented and port confirmed
- [x] VMs IND-SL7-ENG_PLC / IND-SL7-ENG_Drives documented — [ ] host confirmed
- [x] SL7 Siemens PLC found — documented
- [x] Operator thin client (T0247) documented — [ ] port confirmed
- [ ] EKC boxes (A17, Dept34) mapped to switch ports

### Diagram and clean-up

- [ ] Diagram port labels corrected (6 links)
- [ ] Core link, Moxa panel, VMware host and SL5 PLC network added to the diagram
- [ ] Switch models corrected on the diagram
- [ ] LLDP change on EXTCOOLINGTOWER saved or reverted
- [ ] SL7 switch label replaced (192.168.160.73)
