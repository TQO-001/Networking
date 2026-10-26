# Core, Dept34 and TLL

[[00-SL7_Index|Index]] · [[01-Topology_and_Connections|Topology & connections]] · [[09-Open_Issues_and_Questions|Open issues]]

**In plain words:** `IND-SW-Dept34_Distr` is the switch that reaches the plant core. Below it, `IND-SW-EDNL_Dept34_PTTL` (a Catalyst 2960-X) is the hub of this whole area. TLL hangs off it and carries the fibre down to SL7.

```text
ind-Core1-MSR  (Catalyst C9500-48Y4C, 192.168.1.1)  Twe1/0/21
  └─ (Te1/0/27) IND-SW-Dept34_Distr (Gi1/0/24)
       └─ (Gi1/0/28) IND-SW-EDNL_Dept34_PTTL
            ├─ Gi1/0/27 ─ IND-SW-EDNL_TLL (Gi1/1)  ── fibre ──> SL7 (see 02)
            ├─ Gi1/0/26 ─ IND-SW-EDNL_PTTL (Gi1/2)         (see 07)
            ├─ Gi1/0/25 ─ IND-SW-EDNL_CTLL5 (Gi1/1)        (see 07)
            └─ Gi1/0/2  ─ VMware host (4 VMs seen via LLDP)
```

The core switch itself was not captured, so its row below is taken from what its neighbour advertises.

| Device | IP | Model | IOS | Source |
|---|---|---|---|---|
| `ind-Core1-MSR` | 192.168.1.1 | Catalyst C9500-48Y4C | 17.9.4 | CDP/LLDP from Dept34_Distr |

## IND-SW-Dept34_Distr

| Field | Value |
|---|---|
| Hostname | `IND-SW-Dept34_Distr` |
| Management IP | 192.168.160.117 (VLAN 560) |
| Model | IE-9320-22S2C4X _(diagram says IE-3000-4TC)_ |
| IOS version | 17.12.2 |
| Other VLAN IPs | — |
| Switch hops to core | 1 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_03-Core_Dept34_and_TLL#IND-SW-Dept34_Distr]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/0/24` | Unknown | `IND-SW-EDNL_Dept34_PTTL` | `Gi1/0/28` | Downlink (away from core) | CDP, both ends |
| `Te1/0/27` | Not on diagram | `ind-Core1-MSR` | `Twe1/0/21` | Uplink (towards core) | One end only (seen from `IND-SW-Dept34_Distr`) |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Gi1/0/24` | up | — | `IND-SW-EDNL_Dept34_PTTL` `Gi1/0/28` |
| `Te1/0/27` | up | — | `ind-Core1-MSR` `Twe1/0/21` |

**Down ports** — VLAN 1 (default): Gi1/0/1-Gi1/0/23, Te1/0/25-Te1/0/26, Te1/0/28

### Notes

- This is an **IE-9320-22S2C4X** (IOS-XE 17.12.2), not an IE-3000-4TC as drawn on the diagram.
- It is the only captured switch that connects to the plant core: `Te1/0/27` ↔ `ind-Core1-MSR` (Catalyst C9500-48Y4C, 192.168.1.1) port `Twe1/0/21` (10G on this side, 25G port on the core). **This link is missing from the diagram.**
- Gi1/0/1–Gi1/0/23 are all down and in VLAN 1, so the diagram’s “561 | 590” cannot be seen from access ports here — the VLANs are presumably carried on trunks.


## IND-SW-EDNL_Dept34_PTTL

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_Dept34_PTTL` |
| Management IP | 192.168.160.84 (VLAN 560) |
| Model | WS-C2960X-24TS-L _(diagram says IE-3000-4TC)_ |
| IOS version | 15.2(2)E7 |
| Other VLAN IPs | Vlan581 192.168.181.146; Vlan582 192.168.182.146; Vlan591 10.18.14.250 |
| Switch hops to core | 2 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_03-Core_Dept34_and_TLL#IND-SW-EDNL_Dept34_PTTL]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/0/25` | Unknown | `IND-SW-EDNL_CTLL5` | `Gi1/1` | Downlink (away from core) | CDP, both ends |
| `Gi1/0/26` | Unknown | `IND-SW-EDNL_PTTL` | `Gi1/2` | Downlink (away from core) | CDP, both ends |
| `Gi1/0/27` | UTP | `IND-SW-EDNL_TLL` | `Gi1/1` | Downlink (away from core) | CDP, both ends |
| `Gi1/0/28` | Unknown | `IND-SW-Dept34_Distr` | `Gi1/0/24` | Uplink (towards core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Gi1/0/2` | up | — | VMware host — 4 VMs seen via LLDP (table below) |
| `Gi1/0/3` | up | — | Unidentified (no CDP/LLDP data) |
| `Gi1/0/4` | up | — | Unidentified (no CDP/LLDP data) |
| `Gi1/0/7` | up | — | Unidentified (no CDP/LLDP data) |
| `Gi1/0/9` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Gi1/0/25` | up | — | `IND-SW-EDNL_CTLL5` `Gi1/1` |
| `Gi1/0/26` | up | — | `IND-SW-EDNL_PTTL` `Gi1/2` |
| `Gi1/0/27` | up | — | `IND-SW-EDNL_TLL` `Gi1/1` |
| `Gi1/0/28` | up | — | `IND-SW-Dept34_Distr` `Gi1/0/24` |

**Down ports** — No access VLAN listed: Gi1/0/24; VLAN 1 (default): Gi1/0/1, Gi1/0/5-Gi1/0/6, Gi1/0/8, Gi1/0/16; VLAN 561: Gi1/0/14-Gi1/0/15, Gi1/0/17-Gi1/0/23; VLAN 581: Gi1/0/10-Gi1/0/13

**Admin down:** FastEthernet0 (out-of-band management port)

### Devices seen behind `Gi1/0/2` (LLDP)

| Name | IP | What it is |
|---|---|---|
| IND-SL7-ENG-DRI | 192.168.191.51 | VMware virtual machine |
| IND-SL7-ENG-PLC | 192.168.1.50 | VMware virtual machine |
| IND-PTTLACDRV | 192.168.182.13 | VMware virtual machine |
| IND-CTLL5-ENG | 10.18.14.210 | VMware virtual machine |

### Notes

- This is **not** an IE-3000-4TC as drawn on the diagram: CDP reports a Catalyst **WS-C2960X-24TS-L** (24 × GigE + 4 SFP), IOS 15.2(2)E7.
- It is the hub of the area: one uplink (Gi1/0/28 to Dept34_Distr) and four downlinks/branches (TLL, PTTL, CTLL5, VMware host).
- `Port-channel1` is up but no EtherChannel output was captured — which ports belong to it is still unknown.
- Gi1/0/3, Gi1/0/4, Gi1/0/7 and Gi1/0/24 are up with no access VLAN and no CDP/LLDP neighbour (likely trunks or routed ports) — still to identify.


## IND-SW-EDNL_TLL

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL_TLL` |
| Management IP | 192.168.160.59 (VLAN 560) |
| Model | IE-3000-8TC _(diagram says IE-3000-4TC)_ |
| IOS version | 15.2(4)EA5 |
| Other VLAN IPs | Vlan581 192.168.181.147; Vlan582 192.168.182.147 |
| Switch hops to core | 3 |
| Location | _Not recorded yet_ |
| Raw CLI | [[Raw_03-Core_Dept34_and_TLL#IND-SW-EDNL_TLL]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/1` | UTP | `IND-SW-EDNL_Dept34_PTTL` | `Gi1/0/27` | Uplink (towards core) | CDP, both ends |
| `Gi1/2` | Fiber (MM) | `IND-SW-EDNL_SL7` | `Gi1/1` | Downlink (away from core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/1` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/2` | up | 590 (EDPowerMeters) | Unidentified (no CDP/LLDP data) |
| `Fa1/7` | up | 561 (VLAN0561) | Unidentified (no CDP/LLDP data) |
| `Gi1/1` | up | — | `IND-SW-EDNL_Dept34_PTTL` `Gi1/0/27` |
| `Gi1/2` | up | — | `IND-SW-EDNL_SL7` `Gi1/1` |

**Down ports** — VLAN 1 (default): Fa1/8; VLAN 561: Fa1/3-Fa1/6

### Notes

- Per the diagram: Gi1/2 is the multimode fibre link down to SL7, and Gi1/1 is the UTP link up to Dept34_PTTL.


## To do

- [ ] Add the Distr → core link and the VMware host to the network diagram.
- [ ] Capture `show etherchannel summary` on Dept34_PTTL to see what is in `Port-channel1`.
- [ ] Capture the core switch (or its port `Twe1/0/21`) if you have access.
- [x] CLI captured (CDP, LLDP, VLANs, IPs) for every switch on this page
- [ ] Photos and room / location for every switch on this page
