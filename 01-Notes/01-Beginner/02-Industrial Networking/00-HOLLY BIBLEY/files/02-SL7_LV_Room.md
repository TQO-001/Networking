# SL7 LV Room

[[00-SL7_Index|Index]] · [[01-Topology_and_Connections|Topology & connections]] · [[09-Open_Issues_and_Questions|Open issues]]

![[Pasted image 20261019143336.png]]

| Item | Detail |
|---|---|
| Switch | `IND-SW-EDNL_SL7` |
| EKC boxes | 2 (A17, Dept34) |
| Role | Junction for the SL7 area — see below |

**In plain words:** this switch is the junction of the SL7 area. A fibre link goes up to TLL (towards the plant core), a copper link goes down to the SL7 MCC switch in the electrical room, and a second copper link goes across to the A17 control-room switch, which starts the chain to the cooling towers and crane.

![[49b9324d-d0da-4b51-8941-838609d39314.jpg|357]]  ![[aeb8191a-8e22-49cf-9271-24794a6b0f5c.jpg|324]]

## IND-SW-EDNL_SL7

| Field               | Value                               |
| ------------------- | ----------------------------------- |
| Hostname            | `IND-SW-EDNL_SL7`                   |
| Management IP       | 192.168.160.73 (VLAN 560)           |
| Model               | IE-3000-4TC                         |
| IOS version         | 15.0(2)EY3                          |
| Other VLAN IPs      | —                                   |
| EKC boxes           | 2 — A17, Dept34                     |
| Switch hops to core | 4                                   |
| Location            | SL7 LV Room                         |
| Raw CLI             | [[Raw_01-SL7_Site#IND-SW-EDNL_SL7]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Fa1/4` | UTP | `IND-SW-SL7Mcc` | `Gi1/3` | Downlink (away from core) | CDP, both ends |
| `Gi1/1` | Fiber (MM) | `IND-SW-EDNL_TLL` | `Gi1/2` | Uplink (towards core) | CDP, both ends |
| `Gi1/2` | Unknown | `IND-SW-EDNL_A17ControlRoom` | `Gi1/1` | Downlink (away from core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Fa1/1` | up | 590 (EDPowerMeters) | Unidentified — possibly one of the 2 EKC boxes (A17 / Dept34), to confirm |
| `Fa1/2` | up | 561 (VLAN0561) | Unidentified — possibly one of the 2 EKC boxes (A17 / Dept34), to confirm |
| `Fa1/4` | up | — | `IND-SW-SL7Mcc` `Gi1/3` |
| `Gi1/1` | up | — | `IND-SW-EDNL_TLL` `Gi1/2` |
| `Gi1/2` | up | — | `IND-SW-EDNL_A17ControlRoom` `Gi1/1` |

**Down ports** — VLAN 593: Fa1/3

### Notes

- The diagram labels the link to the SL7 MCC switch as **Fa1/1**, but live CDP shows it is **Fa1/4**. Fa1/1 is a VLAN 590 access port.
- Fa1/3 (VLAN 593, Ignition) is configured but down.

### To do

- [ ] Replace the physical label on this switch — it shows the wrong IP. It should read **192.168.160.73**.
- [ ] Identify which EKC box (A17 / Dept34) is on `Fa1/1` and which is on `Fa1/2`.
- [x] Photos taken
- [x] CLI captured (CDP, LLDP, VLANs, IPs)
