# Open Issues and Questions

[[00-SL7_Index|Index]] · [[01-Topology_and_Connections|Topology & connections]] · [[09-Open_Issues_and_Questions|Open issues]]

Everything found while building this documentation that does not line up, plus the questions that only you can answer. Tick items off as they are resolved.

## 1. Diagram vs live network

### 1.1 Wrong or swapped port labels

| Link | Diagram vs live | Correct (live) ports |
|---|---|---|
| `IND-SW-Dept34_Distr` ↔ `IND-SW-EDNL_Dept34_PTTL` | `IND-SW-Dept34_Distr`: diagram Gi1/0/28, live Gi1/0/24 | `Gi1/0/24` ↔ `Gi1/0/28` |
| `IND-SW-EDNL_SL7` ↔ `IND-SW-SL7Mcc` | `IND-SW-EDNL_SL7`: diagram Fa1/1, live Fa1/4 | `Fa1/4` ↔ `Gi1/3` |
| `IND-SW-EDNL_S5CoolingTowers` ↔ `IND-SW-EDNL_S4CoolingTowers` | `IND-SW-EDNL_S4CoolingTowers`: diagram Gi1/2, live Gi1/1 | `Gi1/1` ↔ `Gi1/1` |
| `IND-SW-EDNL_S4CoolingTowers` ↔ `IND-SW-EDNL-CM-Crane` | `IND-SW-EDNL-CM-Crane`: diagram Gi1/2, live Gi1/1; `IND-SW-EDNL_S4CoolingTowers`: diagram Gi1/1, live Gi1/2 | `Gi1/2` ↔ `Gi1/1` |
| `IND-SW-EDNL_PTTL` ↔ `IND-SW-EDNL_PTTL_PLC` | `IND-SW-EDNL_PTTL_PLC`: diagram Gi1/2, live Gi1/1 | `Fa1/8` ↔ `Gi1/1` |
| `IND-SW-EDNL_Dept34_PTTL` ↔ `IND-SW-EDNL_CTLL5` | `IND-SW-EDNL_CTLL5`: diagram Gi1/2, live Gi1/1 | `Gi1/0/25` ↔ `Gi1/1` |

- [ ] Correct these port labels on `SL7_Network.pdf`.

### 1.2 Things missing from the diagram

- [ ] `IND-SW-Dept34_Distr` `Te1/0/27` ↔ `ind-Core1-MSR` (Catalyst C9500-48Y4C, 192.168.1.1) `Twe1/0/21` — the link to the plant core.
- [ ] `IND-SW-CTLL5-panel` — a Moxa EDS-G516E (192.168.160.113) behind CTLL5 `Fa1/8`.
- [ ] The VMware host on `IND-SW-EDNL_Dept34_PTTL` `Gi1/0/2` (4 VMs seen).
- [ ] The Siemens PLC network behind `IND-SW-EDNL_SL5` `Fa1/8` (8 devices).

### 1.3 Wrong switch models on the diagram

**14 of 18** switches show a different model on the diagram than the one CDP reports. The diagram has `IE-3000-4TC` on almost every switch.

| Switch | Diagram says | CDP reports |
|---|---|---|
| `IND-SW-EDNL_TLL` | IE-3000-4TC | IE-3000-8TC |
| `IND-SW-EDNL_Dept34_PTTL` | IE-3000-4TC | WS-C2960X-24TS-L |
| `IND-SW-Dept34_Distr` | IE-3000-4TC | IE-9320-22S2C4X |
| `IND-SW-EDNL_PTTL` | IE-3000-4TC | IE-3000-8TC |
| `IND-SW-EDNL_CTLL5` | IE-3000-4TC | IE-3000-8TC |
| `IND-SW-EDNL_PTTL_PLC` | IE-3000-4TC | IE-3000-8TC |
| `IND-SW-EDNL_SL5` | IE-3000-4TC | IE-3000-8TC |
| `IND-SW-EDNL_SL4` | IE-3000-4TC | IE-3000-8TC |
| `IND-SW-EDNL-SL2` | IE-3000-4TC | IE-3000-8TC |
| `IND-SW-EDNL_A17ControlRoom` | IE-3000-4TC | IE-3000-8TC |
| `IND-SW-EDNL_EXTCOOLINGTOWER` | IE-3000-4TC | IE-3200-8T2S |
| `IND-SW-EDNL_S5CoolingTowers` | IE-3000-4TC | IE-3000-8TC |
| `IND-SW-EDNL_S4CoolingTowers` | IE-3000-4TC | IE-3000-8TC |
| `IND-SW-EDNL-CM-Crane` | IE-3000-4TC | IE-3300-8P2S |

- [ ] Update the model on each switch box in the diagram.

### 1.4 VLAN labels

- `IND-SW-EDNL_SL5`: diagram says **579 | 581**; live access ports are in **561, 590 and 591**.
- `IND-SW-Dept34_Distr`: diagram says **561 | 590**, but every access port is in VLAN 1 (VLANs are presumably on trunks).
- Every other switch’s VLAN list matches its access ports.
- [ ] Fix the SL5 VLAN list on the diagram.

### 1.5 Legend gaps

- **Green** lines (MCC to SL7_SCADA_PC and IBA_PC) are not in the cable legend.
- `IND-SW-EDNL_PTTL_PLC2` is filled **yellow**; the legend does not say what that means.
- Most links are black (“Unknown”). Only four links have a known cable type.
- [ ] Add green and yellow to the legend, and fill in cable types on the “Unknown” links.

### 1.6 Name differences (cosmetic)

| Diagram | CLI hostname |
|---|---|
| IND-SW-EDNL_CM-Crane | `IND-SW-EDNL-CM-Crane` |
| IND-SW-EDNL_SL2 | `IND-SW-EDNL-SL2` |
| IND-SW-SL7MCC | `IND-SW-SL7Mcc` |

## 2. Inconsistencies inside the network

### 2.1 VLAN names differ from switch to switch

There is no VTP in use (the VTP domain is empty on the neighbours that advertised one), so each switch holds its own VLAN names. The same VLAN ID has several names:

| VLAN | Diagram legend | Names seen on the 18 switches (switch count) |
|---|---|---|
| 560 | Management | `VLAN0560` (12), `IND-Management` (2), `management` (1), `IND-Manangement` (1), `Switch_Management` (1), `Management` (1) |
| 561 | IND-CESMS | `VLAN0561` (11), `IND-CESMS` (4), `CESMS` (1), `IND-CESMSNetwork` (1) |
| 567 | CTTL5_Mgaurd | `CTTL5_Mgaurd` (11), `CTLL5_Mgaurd` (1), `VLAN0567` (1), `IND-CTTL5` (1) |
| 574 | IND-AnnealingFurnace | `IND-AnnealingFurnace` (14), `IND-Annealing_furnace` (1) |
| 579 | PTTL_Network | `PTTL_Network` (7), `PTTL` (4), `IND-PTTL` (1), `-PTTL` (1) |
| 581 | PTTL_ACDrives | `PTTL_ACDrives` (5), `ED_Extrutions` (1), `IND-PTTL_DC_Drives` (1) |
| 582 | — | `IND-SL6` (13), `VLAN0582` (1), `IND-PTTL_AC_Drives` (1) |
| 590 | EDPowerMeters | `EDPowerMeters` (12), `Power_Meters` (1), `powermeters` (1) |
| 591 | SL7 | `IND_SL5` (4), `SL7` (2), `VLAN0591` (2), `IND-Dept34` (1), `CTLL5_Network` (1) |
| 592 | Crane | `Crane` (8), `crane` (1), `CCL_Ruler` (1) |
| 593 | Ignition | `Ignition` (16), `Igntion` (1), `ignition` (1) |

VLAN **591** is the clearest case: `SL7`, `IND_SL5`, `CTLL5_Network`, `IND-Dept34` and `VLAN0591` — and it also carries 10.18.14.x addresses on Dept34_PTTL and CTLL5.

- [ ] Decide whether 591 is one network or several, and standardise the names.

### 2.2 Addresses that do not agree

- SL7 switch: the earlier MCC capture lists it at **192.168.1.52**; the later captures show **192.168.160.73**. Its label is also wrong.
- `IND-SL7-ENG-PLC` VM: notes say 192.168.191.50, LLDP advertises **192.168.1.50** (probably a second network card on the PLC subnet — the CPU is 192.168.1.5).
- Thin client T0247: recorded as 192.168.191.146, but its probable port `Gi1/7` on SL7Oper is in VLAN 593 (193.x).

### 2.3 Firmware

- `IND-SW-EDNL_PTTL_PLC` runs IOS 12.2(58)SE2 (built July 2011), the oldest of the set. Eight different IOS versions are in use overall.

## 3. Change made during capture

- On `IND-SW-EDNL_EXTCOOLINGTOWER`, `lldp run` was entered in global configuration to read LLDP neighbours. No `write memory` appears in the capture, so it exists only in the running-config.
- [ ] Save it (`write memory`) or revert it (`no lldp run`) so the running and startup configs agree.

## 4. Questions

1. **Where do the VMs run?** The diagram puts the ESXi box next to IBA_PC, but LLDP sees `IND-SL7-ENG-PLC` and `IND-SL7-ENG-DRI` (plus `IND-PTTLACDRV`, `IND-CTLL5-ENG`) on `IND-SW-EDNL_Dept34_PTTL` `Gi1/0/2`. Is IBA_PC just a client to those VMs?
2. **Was the SL7 switch re-addressed** from 192.168.1.52 to 192.168.160.73 between captures, or does CDP advertise a different address from the one the switch uses?
3. **Which IP is right for thin client T0247** — 192.168.191.146 (notes) or a 193.x address (its probable port is in VLAN 593)?
4. **What do the green lines and the yellow PTTL_PLC2 box mean** on the diagram?
5. **Keep or revert LLDP on EXTCOOLINGTOWER?**

## 5. Identification to-do

- [ ] SL7 `Fa1/1` / `Fa1/2`: which is the A17 EKC box and which is the Dept34 EKC box.
- [ ] MCC `Gi1/4` = SL7_SCADA_PC? (MAC d0ad.08da.afc1)
- [ ] SL7Oper `Gi1/7` = Thin Client HMI?
- [ ] PTTL_PLC2 `Fa1/1` unnamed MAC 503e.aa16.6734.
- [ ] SL4 `Fa1/8` unnamed MAC f8ed.fc52.42b1.
- [ ] Dept34_PTTL ports `Gi1/0/3`, `Gi1/0/4`, `Gi1/0/7`, `Gi1/0/24` and `Port-channel1` members.
- [ ] Field devices on the active access ports of TLL, PTTL, CTLL5, A17, EXTCOOLINGTOWER, S5, S4 and SL5 (each port map lists them as “Unidentified”).
