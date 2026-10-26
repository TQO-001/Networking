# SL7 Electric Room

[[00-SL7_Index|Index]] · [[01-Topology_and_Connections|Topology & connections]] · [[09-Open_Issues_and_Questions|Open issues]]

![[Pasted image 20261019151917.png]]

| Item | Detail |
|---|---|
| Switch | `IND-SW-SL7Mcc` (the diagram calls it IND-SW-SL7MCC) |
| End devices | SL7_SCADA_PC (thin client), IBA_PC (PC with VMs), Siemens S7-1500 PLC with CM 1542-1 |

**In plain words:** the MCC switch is the access switch for this room. One copper link goes up to the SL7 LV Room switch (`Gi1/3`), one goes on to the operating-desk switch (`Gi1/8`), and the room’s PCs and the Siemens PLC plug straight into it.

![[bc556298-6e8d-49a8-b27b-ee3e0a4e51bb.jpg|210]]

## IND-SW-SL7Mcc

| Field | Value |
|---|---|
| Hostname | `IND-SW-SL7Mcc` |
| Management IP | 192.168.160.112 (VLAN 560) |
| Model | IE-3200-8T2S |
| IOS version | 16.12.3 |
| Other VLAN IPs | Vlan593 192.168.193.201 |
| Switch hops to core | 5 |
| Location | SL7 Electric Room |
| Raw CLI | [[Raw_01-SL7_Site#IND-SW-SL7Mcc]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/3` | UTP | `IND-SW-EDNL_SL7` | `Fa1/4` | Uplink (towards core) | CDP, both ends |
| `Gi1/8` | UTP | `IND-SW-EDNL-SL7Oper` | `Gi1/3` | Downlink (away from core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Gi1/3` | up | — | `IND-SW-EDNL_SL7` `Fa1/4` |
| `Gi1/4` | up | 593 (Ignition) | Probable: `SL7_SCADA_PC` (Thin Client T0246) — unnamed MAC d0ad.08da.afc1 |
| `Gi1/6` | up | 591 (SL7) | `IBA_PC` (C7401-SL7-IBA), NIC 1 — MAC 40a6.b7ce.4a92 |
| `Gi1/7` | up | 591 (SL7) | Siemens S7-1500 CPU 1516-3 PN/DP (192.168.1.5), port X2 P1 |
| `Gi1/8` | up | — | `IND-SW-EDNL-SL7Oper` `Gi1/3` |
| `Gi1/9` | up | 591 (SL7) | Siemens CM 1542-1 (192.168.210.100), port X1 P2R |
| `Gi1/10` | up | 561 (IND-CESMS) | `IBA_PC` (C7401-SL7-IBA), NIC 2 — MAC 28c5.c87e.0816 |

**Down ports** — VLAN 1 (default): Gi1/1-Gi1/2; VLAN 591: Gi1/5

### Notes
- Gi1/1 and Gi1/2 (the SFP ports) are down and still in VLAN 1.
- Has a VLAN 593 interface address of 192.168.193.201 in addition to its management address.

## SL7_SCADA_PC

| Field | Value |
|---|---|
| Plant description | SL7 SCADA Thinclient - ENG |
| IP address | 192.168.193.112 |
| Name | T0246 |
| Device type | Thin Client |
| Connects to | `IND-SW-SL7Mcc` `Gi1/4` — **probable** (VLAN 593 Ignition matches its 192.168.193.x address; the port’s MAC is d0ad.08da.afc1) |

![[5de39a01-75f9-406c-9378-3f542bea932e.jpg]]

## IBA_PC

| Field | Value |
|---|---|
| Plant description | SL7 IBA |
| IP address | 192.168.191.42 |
| Name | C7401-SL7-IBA |
| Device type | PC |
| Connects to | `IND-SW-SL7Mcc` `Gi1/6` (VLAN 591, MAC 40a6.b7ce.4a92) **and** `Gi1/10` (VLAN 561, MAC 28c5.c87e.0816) — two network cards; both advertise the name C7401-SL7-IBA via LLDP |

### VMs

| Name | Plant description | IP address | Device type |
|---|---|---|---|
| IND-SL7-ENG_PLC | IND-SL7-ENG_PLC | 192.168.191.50 | VM |
| IND-SL7-ENG_Drives | IND-SL7-ENG_Drives | 192.168.191.51 | VM |

> **Check:** LLDP on `IND-SW-EDNL_Dept34_PTTL` `Gi1/0/2` sees VMware VMs named `IND-SL7-ENG-PLC` (advertising 192.168.1.50) and `IND-SL7-ENG-DRI` (192.168.191.51). That suggests the VMs run on a VMware host wired at Dept34, not on IBA_PC. See [[09-Open_Issues_and_Questions]].

![[c18f6e7a-8b00-44e4-9634-d33c361475dd 1.jpg]]

## SL7 PLC (Siemens S7-1500)

_New — found through LLDP on the MCC switch, not in the original notes._

| Device | Details | IP address | Connects to |
|---|---|---|---|
| CPU 1516-3 PN/DP | 6ES7 516-3AP03-0AB0, FW V3.0.3, PROFINET name `sl7xaplc`, port X2 P1 | 192.168.1.5 | `IND-SW-SL7Mcc` `Gi1/7` (VLAN 591) |
| CM 1542-1 | 6GK7 542-1AX10-0XE0, port X1 P2R | 192.168.210.100 | `IND-SW-SL7Mcc` `Gi1/9` (VLAN 591) |

### To do

- [ ] Confirm `Gi1/4` is SL7_SCADA_PC (compare the thin client’s MAC with d0ad.08da.afc1).
- [ ] Confirm where the VMs physically run (IBA_PC or the VMware host at Dept34).
- [ ] Confirm the PLC addressing: 192.168.1.5 and 192.168.210.100 are on VLAN 591 ports but outside the 192.168.191.x range used by IBA_PC and the VMs.
- [x] Photos taken
- [x] CLI captured (CDP, LLDP, VLANs, IPs)
