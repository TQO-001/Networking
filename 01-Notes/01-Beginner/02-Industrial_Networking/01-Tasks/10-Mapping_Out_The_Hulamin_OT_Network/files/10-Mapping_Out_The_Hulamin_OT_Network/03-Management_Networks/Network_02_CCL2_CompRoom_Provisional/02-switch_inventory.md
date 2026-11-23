# Switch inventory - Network_02_CCL2_CompRoom_Provisional

[Network index](00-index.md)

| Switch | Management IP | Role | Hardware model | Firmware | Ports total / up | Collection | Hops from head | Parent |
|---|---|---|---|---|---|---|---|---|
| [[IND-SW-CCL_CESS]] | 192.168.160.23 | Access | IE-3300-8T2S (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-48TS-L: they disagree | 16.12.1 | 18 / 11 | success | 1 | IND-SW_CCL2_CompRoom |
| [[IND-SW-EDNL_CCLCNGGAS]] | 192.168.160.48 | Access | IE-3000-8TC (SwitchScribe) | 15.2(7)E2 | 10 / 5 | success | 3 | IND-SW-EDNL_CCLServiceTunnel |
| [[IND-SW-EDNL_CCLServiceTunnel]] | 192.168.160.42 | Access | IE-3000-8TC (SwitchScribe) | 15.2(7)E2 | 10 / 4 | success | 2 | IND-SW-CCL_CESS |
| [[IND-SW-EDNL_WaterTowerSUB]] | 192.168.160.49 | Access | IE-3000-8TC (SwitchScribe) | 15.2(7)E2 | 10 / 8 | success | 4 | IND-SW-EDNL_CCLCNGGAS |
| [[IND-SW_CCL2Coater_Bottom]] | 192.168.160.18 | Access | IE-3300-8T2S (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-24TS-L: they disagree | 16.12.1 | 10 / 6 | success | 1 | IND-SW_CCL2_OS1 |
| [[IND-SW_CCL2_CompRoom]] | 192.168.160.22 | Head | WS-C2960X-48TS-L (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-24TS-L: they disagree | 15.0(2a)EX5 | 53 / 21 | success | 0 | ind-Core1-MSR |
| [[IND-SW_CCL2_DC_L]] | 192.168.160.20 | Access | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-48TS-L: they disagree | 12.2(58)SE2 | 10 / 3 | success | 1 | IND-SW_CCL2_CompRoom |
| [[IND-SW_CCL2_OS1]] | 192.168.160.21 | Head | WS-C2960X-24TS-L (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-48TS-L: they disagree | 15.0(2)EX5 | 29 / 12 | success | 0 | ind-Core1-MSR |

Firmware is the version the switch advertised to its neighbours. Model is shown with its source; where SwitchScribe and the neighbours disagree, both are stated.
