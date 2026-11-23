# Switch inventory - Network_03_CCL1DevRoom_Provisional

[Network index](00-index.md)

| Switch | Management IP | Role | Hardware model | Firmware | Ports total / up | Collection | Hops from head | Parent |
|---|---|---|---|---|---|---|---|---|
| [[IND-SW-CCL1DevRoom]] | 192.168.160.12 | Head | WS-C2960X-24TS-L (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree | 15.2(2)E3 | 29 / 9 | success | 0 | ind-Core1-MSR |
| [[IND-SW-CCL1PLCC]] | 192.168.160.11 | Access | IE-3000-8TC (SwitchScribe) | 15.0(2)EY3 | 18 / 9 | success | 1 | IND-SW-CCL1DevRoom |
| [[IND-SW-CCL1_PLC_B]] | 192.168.160.10 | Access | IE-3000-8TC (SwitchScribe) | 15.0(2)EY3 | 18 / 9 | success | 1 | IND-SW-CCL1DevRoom |
| [[IND-SW_CCL1OS4]] | 192.168.160.13 | Access | IE-3000-4TC (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree | 15.0(2)EY3 | 6 / 3 | success | 2 | IND-SW-CCL1_PLC_B |
| [[IND-SW_CCL1OS5]] | 192.168.160.14 | Access | IE-3000-4TC (SwitchScribe) | 15.0(2)EY3 | 6 / 3 | success | 3 | IND-SW_CCL1OS9 |
| [[IND-SW_CCL1OS6]] | 192.168.160.15 | Access | IE-3300-8P2S (SwitchScribe) | Unknown | 10 / 4 | success | 3 | IND-SW_CCL1OS4 |
| [[IND-SW_CCL1OS9]] | 192.168.160.16 | Access | IE-3000-4TC (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree | 15.0(2)EY3 | 6 / 5 | success | 2 | IND-SW-CCL1PLCC |

Firmware is the version the switch advertised to its neighbours. Model is shown with its source; where SwitchScribe and the neighbours disagree, both are stated.
