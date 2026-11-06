# SL7 Operating Desk

[[00-sl7_index|Index]] · [[01-topology_and_connections|Topology & connections]] · [[09-open_issues_and_questions|Open issues]]

| Item | Detail |
|---|---|
| Switch | `IND-SW-EDNL-SL7Oper` |
| End devices | SL7 SCADA thin client (operator) — shown as “Thin Client HMI” on the diagram |

**In plain words:** a single gigabit copper link (`Gi1/3`) runs back to the MCC switch (`Gi1/8`) in the electrical room. The operator thin client plugs into this switch.

## SL7_SCADA_THINCLIENT - OPERATOR

| Field | Value |
|---|---|
| Plant description | SL7 SCADA Thinclient - operator |
| IP address | 192.168.191.146 |
| Name | T0247 |
| Device type | Thin Client |
| Connects to | `IND-SW-EDNL-SL7Oper` `Gi1/7` — **probable** (the only active access port; VLAN 593 Ignition) |

![[sl7_operating_desk-01-sl7_scada_thinclient_operator.jpg]]

> **Check:** the thin client is recorded as 192.168.191.146, but `Gi1/7` is in VLAN 593 (Ignition), where SL7_SCADA_PC (T0246) has a 192.168.193.x address. Confirm which is correct.

![[sl7_operating_desk-02-sl7_scada_thinclient_operator.jpg]]

## IND-SW-EDNL-SL7Oper

| Field | Value |
|---|---|
| Hostname | `IND-SW-EDNL-SL7Oper` |
| Management IP | 192.168.160.119 (VLAN 560) |
| Model | IE-3300-8P2S |
| IOS version | 17.12.4 |
| Other VLAN IPs | — |
| Switch hops to core | 6 |
| Location | SL7 Operating Desk |
| Raw CLI | [[Raw_01-SL7_Site#IND-SW-EDNL-SL7Oper]] |

### Connects to

| Local port | Cable | Remote device | Remote port | Direction | Verified by |
|---|---|---|---|---|---|
| `Gi1/3` | UTP | `IND-SW-SL7Mcc` | `Gi1/8` | Uplink (towards core) | CDP, both ends |

### Port map

| Port | Status | Access VLAN | Connected to |
|---|---|---|---|
| `Gi1/3` | up | — | `IND-SW-SL7Mcc` `Gi1/8` |
| `Gi1/7` | up | 593 (Ignition) | Probable: Thin Client HMI (T0247) — the only active access port |

**Down ports** — VLAN 1 (default): Gi1/1-Gi1/2, Gi1/6, Gi1/8-Gi1/10; VLAN 561: Gi1/5; VLAN 591: Gi1/4

### Notes

- IE-3300 with an internal application port (`Ap1/1`, up) — not a front-panel connection.
- VLAN 591 is named `IND-Dept34` on this switch (the diagram legend calls 591 “SL7”).

### To do

- [ ] Confirm the thin client is on `Gi1/7` and check its IP against the VLAN.
- [x] Photos taken
- [x] CLI captured (CDP, LLDP, VLANs, IPs)
