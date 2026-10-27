# PTTL, CTLL5 and PLC Switches

[[00-SL7_Index|Index]] · [[01-Topology_and_Connections|Topology & connections]] · [[09-Open_Issues_and_Questions|Open issues]]

**In plain words:** both branches hang off `IND-SW-EDNL_Dept34_PTTL`. PTTL feeds two more areas — the PLC switches (PTTL_PLC → PTTL_PLC2) and the SL5 / SL4 / SL2 chain (see [[08-SL5_SL4_SL2]]). CTLL5 is a separate branch with a Moxa switch behind it.

```text
IND-SW-EDNL_Dept34_PTTL
  ├─ Gi1/0/26 ─ (Gi1/2) IND-SW-EDNL_PTTL
  │                 ├─ (Fa1/8) ─ (Gi1/1) IND-SW-EDNL_PTTL_PLC (Gi1/2) ─ (Gi1/1) IND-SW-EDNL_PTTL_PLC2
  │                 └─ (Gi1/1) ─ (Gi1/2) IND-SW-EDNL_SL5  ... (see 08)
  └─ Gi1/0/25 ─ (Gi1/1) IND-SW-EDNL_CTLL5
                      └─ (Fa1/8) ─ port 6 of IND-SW-CTLL5-panel (Moxa EDS-G516E)
```

## IND-SW-EDNL_PTTL

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_PTTL` |
| Management IP | 192.168.160.70 (VLAN 560) |
| Model | IE-3000-8TC _(diagram says IE-3000-4TC)_ |
| IOS version | 15.2(4)EA5 |
| Other VLAN IPs | Vlan581 192.168.181.149; Vlan582 192.168.182.149 |
| Switch hops to core | 3 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_04-PTTL_and_CTLL5#IND-SW-EDNL_PTTL]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Fa1/8` | Unknown | `IND-SW-EDNL_PTTL_PLC` | `Gi1/1` | Downlink (away from core) | CDP, both ends |
| `Gi1/1` | Unknown | `IND-SW-EDNL_SL5` | `Gi1/2` | Downlink (away from core) | CDP, both ends |
| `Gi1/2` | Unknown | `IND-SW-EDNL_Dept34_PTTL` | `Gi1/0/26` | Uplink (towards core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/1` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/2` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/3` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/4` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/5` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Fa1/6` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Fa1/7` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/8` | up | — | `IND-SW-EDNL_PTTL_PLC` `Gi1/1` |
| `Gi1/1` | up | — | `IND-SW-EDNL_SL5` `Gi1/2` |
| `Gi1/2` | up | — | `IND-SW-EDNL_Dept34_PTTL` `Gi1/0/26` |

### Notes

- The link down to PTTL_PLC uses **Fa1/8**, so it runs at 100 Mb/s at most (the other end, PTTL_PLC Gi1/1, is a gigabit port).
- Fa1/1–Fa1/4 and Fa1/7 (VLAN 590) and Fa1/5–Fa1/6 (VLAN 561) are all up with no neighbour data — field devices still to identify.


## IND-SW-EDNL_PTTL_PLC

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_PTTL_PLC` |
| Management IP | 192.168.160.90 (VLAN 560) |
| Model | IE-3000-8TC _(diagram says IE-3000-4TC)_ |
| IOS version | 12.2(58)SE2 |
| Other VLAN IPs | Vlan579 192.168.179.100; Vlan581 192.168.181.150; Vlan582 192.168.182.150 |
| Switch hops to core | 4 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_04-PTTL_and_CTLL5#IND-SW-EDNL_PTTL_PLC]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | Unknown | `IND-SW-EDNL_PTTL` | `Fa1/8` | Uplink (towards core) | CDP, both ends |
| `Gi1/2` | Unknown | `IND-SW-EDNL_PTTL_PLC2` | `Gi1/1` | Downlink (away from core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/1` | up | 579 (PTTL) | Unidentified (no CDP/LLDP data) |
| `Fa1/2` | up | 579 (PTTL) | Unidentified (no CDP/LLDP data) |
| `Fa1/4` | up | 579 (PTTL) | Unidentified (no CDP/LLDP data) |
| `Fa1/5` | up | 579 (PTTL) | Unidentified (no CDP/LLDP data) |
| `Fa1/6` | up | 579 (PTTL) | Unidentified (no CDP/LLDP data) |
| `Fa1/7` | up | 579 (PTTL) | Unidentified (no CDP/LLDP data) |
| `Fa1/8` | up | 581 (PTTL_ACDrives) | Unidentified (no CDP/LLDP data) |
| `Gi1/1` | up | — | `IND-SW-EDNL_PTTL` `Fa1/8` |
| `Gi1/2` | up | — | `IND-SW-EDNL_PTTL_PLC2` `Gi1/1` |

**Down ports** — VLAN 579: Fa1/3

### Notes

- Runs IOS **12.2(58)SE2** (built July 2011) — the oldest software of the 18 captured switches.
- Its downstream neighbour, PTTL_PLC2, is highlighted yellow on the diagram (the legend does not say why).


## IND-SW-EDNL_PTTL_PLC2

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_PTTL_PLC2` |
| Management IP | 192.168.160.124 (VLAN 560) |
| Model | IE-3000-4TC |
| IOS version | 15.0(2)EY3 |
| Other VLAN IPs | — |
| Switch hops to core | 5 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_04-PTTL_and_CTLL5#IND-SW-EDNL_PTTL_PLC2]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | Unknown | `IND-SW-EDNL_PTTL_PLC` | `Gi1/2` | Uplink (towards core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/1` | up | 579 (-PTTL) | MAC 503e.aa16.6734 (no name advertised) |
| `Gi1/1` | up | — | `IND-SW-EDNL_PTTL_PLC` `Gi1/2` |

**Down ports** — VLAN 1 (default): Gi1/2; VLAN 579: Fa1/2-Fa1/4

### Notes

- Highlighted **yellow** on the diagram; the legend does not say why.
- Fa1/1 (VLAN 579) has a device that only advertises its MAC address (503e.aa16.6734) — to identify.


## IND-SW-EDNL_CTLL5

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_CTLL5` |
| Management IP | 192.168.160.71 (VLAN 560) |
| Model | IE-3000-8TC _(diagram says IE-3000-4TC)_ |
| IOS version | 15.2(4)EA5 |
| Other VLAN IPs | Vlan567 192.168.167.50; Vlan581 192.168.181.148; Vlan582 192.168.182.148; Vlan591 10.18.14.251 |
| Switch hops to core | 3 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_04-PTTL_and_CTLL5#IND-SW-EDNL_CTLL5]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Fa1/8` | Not on diagram | `IND-SW-CTLL5-panel` | `Port 6` | Downlink (away from core) | One end only (seen from `IND-SW-EDNL_CTLL5`) |
| `Gi1/1` | Unknown | `IND-SW-EDNL_Dept34_PTTL` | `Gi1/0/25` | Uplink (towards core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/3` | up | 567 (CTTL5_Mgaurd) | Unidentified (no CDP/LLDP data) |
| `Fa1/8` | up | 591 (CTLL5_Network) | `IND-SW-CTLL5-panel` (Moxa EDS-G516E, 192.168.160.113), its port 6 |
| `Gi1/1` | up | — | `IND-SW-EDNL_Dept34_PTTL` `Gi1/0/25` |

**Down ports** — VLAN 1 (default): Gi1/2; VLAN 561: Fa1/1-Fa1/2, Fa1/6; VLAN 567: Fa1/4; VLAN 590: Fa1/5; VLAN 591: Fa1/7

### Notes

- Fa1/8 feeds a **Moxa EDS-G516E** switch named `IND-SW-CTLL5-panel` (192.168.160.113). It is not on the diagram. The link is 100 Mb/s at most because Fa1/8 is FastEthernet.
- The uplink is **Gi1/1** (up). The diagram labels it Gi1/2, which is down.


## To do

- [ ] Capture `IND-SW-CTLL5-panel` (Moxa EDS-G516E, 192.168.160.113) — it is not in the diagram yet.
- [ ] Identify the devices on the active access ports (see each port map).
- [x] CLI captured (CDP, LLDP, VLANs, IPs) for every switch on this page
- [ ] Photos and room / location for every switch on this page
