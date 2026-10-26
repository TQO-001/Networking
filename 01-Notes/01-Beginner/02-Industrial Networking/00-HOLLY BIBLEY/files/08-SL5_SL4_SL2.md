# SL5, SL4 and SL2

[[00-SL7_Index|Index]] · [[01-Topology_and_Connections|Topology & connections]] · [[09-Open_Issues_and_Questions|Open issues]]

**In plain words:** a three-switch daisy chain that hangs off PTTL. Everything for SL4 and SL2 passes through SL5.

```text
IND-SW-EDNL_PTTL (Gi1/1)
  └─ (Gi1/2) IND-SW-EDNL_SL5 (Gi1/1)
       └─ (Gi1/2) IND-SW-EDNL_SL4 (Gi1/1)
            └─ (Gi1/1) IND-SW-EDNL-SL2
```

All three links were confirmed from both ends with CDP.

## IND-SW-EDNL_SL5

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_SL5` |
| Management IP | 192.168.160.56 (VLAN 560) |
| Model | IE-3000-8TC _(diagram says IE-3000-4TC)_ |
| IOS version | 15.2(4)EA5 |
| Other VLAN IPs | — |
| Switch hops to core | 4 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_05-SL5_SL4_SL2#IND-SW-EDNL_SL5]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | Unknown | `IND-SW-EDNL_SL4` | `Gi1/2` | Downlink (away from core) | CDP, both ends |
| `Gi1/2` | Unknown | `IND-SW-EDNL_PTTL` | `Gi1/1` | Uplink (towards core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/2` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/3` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/5` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Fa1/8` | up | 591 (IND_SL5) | Downstream PLC network — 8 devices seen via LLDP (table below) |
| `Gi1/1` | up | — | `IND-SW-EDNL_SL4` `Gi1/2` |
| `Gi1/2` | up | — | `IND-SW-EDNL_PTTL` `Gi1/1` |

**Down ports** — VLAN 561: Fa1/1, Fa1/4, Fa1/6-Fa1/7

### Devices seen behind `Fa1/8` (LLDP)

| Name | IP | What it is |
|---|---|---|
| emg | 10.0.0.27 | — |
| cpu1214 | 10.0.0.20 | Siemens S7-1200 CPU (6ES7 214-1AG40-0XB0), FW V4.1.3 |
| cp-343-1-lean | 192.168.0.1 | Siemens CP 343-1 Lean (6GK7 343-1CX10-0XE0) |
| pn-io | 10.0.0.50 | Siemens CP 343-1 (6GK7 343-1EX30-0XE0) |
| plcxb1d0ed | 192.168.2.30 | Siemens S7-1200 CPU (6ES7 214-1AG40-0XB0), FW V4.1.3 |
| 3c52.826a.985e | — | — |
| 3c52.8265.f065 | — | — |
| e073.e716.47af | — | — |

### Notes

- The diagram shows VLANs 579 | 581 for this switch, but the live access ports are in VLANs 561, 590 and 591 (see [[09-Open_Issues_and_Questions]]).
- Fa1/8 (VLAN 591) sits in front of a Siemens PLC network: LLDP shows eight devices on that one port, so there is another switch (or daisy-chained devices) behind it. They use several different subnets (10.0.0.x, 192.168.0.x, 192.168.2.x).


## IND-SW-EDNL_SL4

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_SL4` |
| Management IP | 192.168.160.55 (VLAN 560) |
| Model | IE-3000-8TC _(diagram says IE-3000-4TC)_ |
| IOS version | 15.2(4)EA5 |
| Other VLAN IPs | — |
| Switch hops to core | 5 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_05-SL5_SL4_SL2#IND-SW-EDNL_SL4]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | Unknown | `IND-SW-EDNL-SL2` | `Gi1/1` | Downlink (away from core) | CDP, both ends |
| `Gi1/2` | Unknown | `IND-SW-EDNL_SL5` | `Gi1/1` | Uplink (towards core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/2` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/8` | up | 591 (VLAN0591) | MAC f8ed.fc52.42b1 (no name advertised) |
| `Gi1/1` | up | — | `IND-SW-EDNL-SL2` `Gi1/1` |
| `Gi1/2` | up | — | `IND-SW-EDNL_SL5` `Gi1/1` |

**Down ports** — VLAN 561: Fa1/1, Fa1/3-Fa1/5; VLAN 591: Fa1/6-Fa1/7

### Notes

- Fa1/8 (VLAN 591) has one device that only advertises its MAC address (f8ed.fc52.42b1) — to identify.
- Fa1/6, Fa1/7 and Fa1/8 are in VLAN 591; only Fa1/8 is up.


## IND-SW-EDNL-SL2

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL-SL2` |
| Management IP | 192.168.160.54 (VLAN 560) |
| Model | IE-3000-8TC _(diagram says IE-3000-4TC)_ |
| IOS version | 15.2(4)EA5 |
| Other VLAN IPs | — |
| Switch hops to core | 6 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_05-SL5_SL4_SL2#IND-SW-EDNL-SL2]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | Unknown | `IND-SW-EDNL_SL4` | `Gi1/1` | Uplink (towards core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Gi1/1` | up | — | `IND-SW-EDNL_SL4` `Gi1/1` |

**Down ports** — VLAN 1 (default): Gi1/2; VLAN 561: Fa1/1-Fa1/8

### Notes

- End of the SL5 → SL4 → SL2 chain (6 hops to core). Only the uplink (Gi1/1) is up — all eight Fa ports are down.


## To do

- [ ] Identify the devices behind SL5 `Fa1/8` (8 devices seen) and the unnamed MAC on SL4 `Fa1/8`.
- [x] CLI captured (CDP, LLDP, VLANs, IPs) for every switch on this page
- [ ] Photos and room / location for every switch on this page
