# Switch inventory - Network_23_CD_A19_Provisional

[Network index](00-index.md)

| Switch | Management IP | Role | Hardware model | Firmware | Ports total / up | Collection | Hops from head | Parent |
|---|---|---|---|---|---|---|---|---|
| [[IND-SW-CDRF_ScalperPiller42]] | 192.168.160.86 | Access | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports MikroTik: they disagree | 15.0(2)EY3 | 10 / 4 | success | 1 | IND-SW-CD_A19 |
| [[IND-SW-CD_A19]] | 192.168.160.82 | Head | WS-C2960X-24TS-L (advertised by neighbours via CDP). SwitchScribe reports C9500-48Y4C: they disagree | 15.2(2)E7 | 29 / 9 | success | 0 | IND-SW-CD-CORE |
| [[IND-SW-CD_SubStation1]] | 192.168.160.51 | Access | IE-3000-8TC (advertised by neighbours via CDP) | 15.2(4)EA5 | 10 / 10 | success | 1 | IND-SW-CD_A19 |
| [[IND-SW-CD_SubStation4]] | 192.168.160.52 | Head | IE-3000-8TC (advertised by neighbours via CDP) | 15.2(4)EA5 | 10 / 5 | success | 0 | IND-SW-CD-CORE |

Firmware is the version the switch advertised to its neighbours. Model is shown with its source; where SwitchScribe and the neighbours disagree, both are stated.
