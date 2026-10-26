# A17 Control Room, Cooling Towers and Crane

[[00-SL7_Index|Index]] · [[01-Topology_and_Connections|Topology & connections]] · [[09-Open_Issues_and_Questions|Open issues]]

**In plain words:** five switches are daisy-chained off the SL7 LV Room switch. Traffic for the crane has to pass through every switch in the chain.

```text
IND-SW-EDNL_SL7 (Gi1/2)
  └─ (Gi1/1) IND-SW-EDNL_A17ControlRoom (Gi1/2)
       └─ (Gi1/1) IND-SW-EDNL_EXTCOOLINGTOWER (Gi1/2)
            └─ (Gi1/2) IND-SW-EDNL_S5CoolingTowers (Gi1/1)
                 └─ (Gi1/1) IND-SW-EDNL_S4CoolingTowers (Gi1/2)
                      └─ (Gi1/1) IND-SW-EDNL-CM-Crane
```

Every link in this chain was confirmed from both ends with CDP. The diagram shows all of them as “Unknown” cable.

## IND-SW-EDNL_A17ControlRoom

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_A17ControlRoom` |
| Management IP | 192.168.160.65 (VLAN 560) |
| Model | IE-3000-8TC _(diagram says IE-3000-4TC)_ |
| IOS version | 15.2(4)EA5 |
| Other VLAN IPs | Vlan574 192.168.174.200 |
| Switch hops to core | 5 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_02-A17_and_Cooling_Towers#IND-SW-EDNL_A17ControlRoom]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | Unknown | `IND-SW-EDNL_SL7` | `Gi1/2` | Uplink (towards core) | CDP, both ends |
| `Gi1/2` | Unknown | `IND-SW-EDNL_EXTCOOLINGTOWER` | `Gi1/1` | Downlink (away from core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/1` | up | 574 (IND-AnnealingFurnace) | Unidentified (no CDP/LLDP data) |
| `Fa1/8` | up | 593 (Ignition) | Unidentified (no CDP/LLDP data) |
| `Gi1/1` | up | — | `IND-SW-EDNL_SL7` `Gi1/2` |
| `Gi1/2` | up | — | `IND-SW-EDNL_EXTCOOLINGTOWER` `Gi1/1` |

**Down ports** — VLAN 1 (default): Fa1/6; VLAN 561: Fa1/2, Fa1/4-Fa1/5, Fa1/7; VLAN 574: Fa1/3

### Notes

- Start of the five-switch chain towards the cooling towers and crane. `Gi1/1` faces SL7, `Gi1/2` faces EXTCOOLINGTOWER.
- Fa1/1 (VLAN 574, Annealing Furnace) and Fa1/8 (VLAN 593, Ignition) are up with no neighbour data.


## IND-SW-EDNL_EXTCOOLINGTOWER

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_EXTCOOLINGTOWER` |
| Management IP | 192.168.160.101 (VLAN 560) |
| Model | IE-3200-8T2S _(diagram says IE-3000-4TC)_ |
| IOS version | 16.12.3 |
| Other VLAN IPs | — |
| Switch hops to core | 6 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_02-A17_and_Cooling_Towers#IND-SW-EDNL_EXTCOOLINGTOWER]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | Unknown | `IND-SW-EDNL_A17ControlRoom` | `Gi1/2` | Uplink (towards core) | CDP, both ends |
| `Gi1/2` | Unknown | `IND-SW-EDNL_S5CoolingTowers` | `Gi1/2` | Downlink (away from core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Gi1/1` | up | — | `IND-SW-EDNL_A17ControlRoom` `Gi1/2` |
| `Gi1/2` | up | — | `IND-SW-EDNL_S5CoolingTowers` `Gi1/2` |
| `Gi1/3` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Gi1/4` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Gi1/5` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |

**Down ports** — VLAN 1 (default): Gi1/6-Gi1/10

### Notes

- LLDP was **not enabled** when first captured (`% LLDP is not enabled`). `lldp run` was typed in global configuration so LLDP data could be read.
- The capture shows no `write memory` afterwards, so LLDP is running in the running-config only — it will be lost on reload unless saved. Decide whether to keep it (save) or revert (`no lldp run`) — tracked in [[09-Open_Issues_and_Questions]].
- Gi1/3–Gi1/5 are up in VLAN 561 with nothing identified on them yet.


## IND-SW-EDNL_S5CoolingTowers

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_S5CoolingTowers` |
| Management IP | 192.168.160.31 (VLAN 560) |
| Model | IE-3000-8TC _(diagram says IE-3000-4TC)_ |
| IOS version | 15.0(2)EY3 |
| Other VLAN IPs | — |
| Switch hops to core | 7 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_02-A17_and_Cooling_Towers#IND-SW-EDNL_S5CoolingTowers]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | Unknown | `IND-SW-EDNL_S4CoolingTowers` | `Gi1/1` | Downlink (away from core) | CDP, both ends |
| `Gi1/2` | Unknown | `IND-SW-EDNL_EXTCOOLINGTOWER` | `Gi1/2` | Uplink (towards core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/1` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Fa1/2` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/3` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Fa1/4` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Gi1/1` | up | — | `IND-SW-EDNL_S4CoolingTowers` `Gi1/1` |
| `Gi1/2` | up | — | `IND-SW-EDNL_EXTCOOLINGTOWER` `Gi1/2` |

**Down ports** — VLAN 561: Fa1/5-Fa1/8

### Notes

- Both port labels on the diagram match live data: `Gi1/2` → EXTCOOLINGTOWER, `Gi1/1` → S4CoolingTowers.


## IND-SW-EDNL_S4CoolingTowers

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_S4CoolingTowers` |
| Management IP | 192.168.160.30 (VLAN 560) |
| Model | IE-3000-8TC _(diagram says IE-3000-4TC)_ |
| IOS version | 15.0(2)EY3 |
| Other VLAN IPs | — |
| Switch hops to core | 8 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_02-A17_and_Cooling_Towers#IND-SW-EDNL_S4CoolingTowers]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | Unknown | `IND-SW-EDNL_S5CoolingTowers` | `Gi1/1` | Uplink (towards core) | CDP, both ends |
| `Gi1/2` | Unknown | `IND-SW-EDNL-CM-Crane` | `Gi1/1` | Downlink (away from core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/1` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Fa1/2` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/3` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Fa1/4` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Fa1/6` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Fa1/8` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Gi1/1` | up | — | `IND-SW-EDNL_S5CoolingTowers` `Gi1/1` |
| `Gi1/2` | up | — | `IND-SW-EDNL-CM-Crane` `Gi1/1` |

**Down ports** — VLAN 561: Fa1/5, Fa1/7

### Notes

- **Port labels on the diagram are swapped for this switch.** Live data: `Gi1/1` faces S5CoolingTowers, `Gi1/2` faces CM-Crane. The diagram shows Gi1/2 on the S5 side and Gi1/1 on the Crane side.


## IND-SW-EDNL-CM-Crane

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL-CM-Crane` |
| Management IP | 192.168.160.126 (VLAN 560) |
| Model | IE-3300-8P2S _(diagram says IE-3000-4TC)_ |
| IOS version | 17.12.4 |
| Other VLAN IPs | Vlan561 192.168.192.99 |
| Switch hops to core | 9 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_02-A17_and_Cooling_Towers#IND-SW-EDNL-CM-Crane]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | Unknown | `IND-SW-EDNL_S4CoolingTowers` | `Gi1/2` | Uplink (towards core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Gi1/1` | up | — | `IND-SW-EDNL_S4CoolingTowers` `Gi1/2` |

**Down ports** — VLAN 1 (default): Gi1/2-Gi1/5; VLAN 561: Gi1/7-Gi1/9; VLAN 592: Gi1/10; VLAN 593: Gi1/6

### Notes

- End of the chain (9 hops to core). The uplink is `Gi1/1`; the diagram labels it Gi1/2.
- Ports are configured but unused: Gi1/6 (593), Gi1/7–Gi1/9 (561) and Gi1/10 (592) are all down.
- Has a VLAN 561 interface address of 192.168.192.99 in addition to its management address.


## To do

- [ ] Decide whether to save (`write memory`) or revert (`no lldp run`) the LLDP change made on EXTCOOLINGTOWER.
- [ ] Identify the field devices on the active access ports (see each port map).
- [x] CLI captured (CDP, LLDP, VLANs, IPs) for every switch on this page
- [ ] Photos and room / location for every switch on this page
