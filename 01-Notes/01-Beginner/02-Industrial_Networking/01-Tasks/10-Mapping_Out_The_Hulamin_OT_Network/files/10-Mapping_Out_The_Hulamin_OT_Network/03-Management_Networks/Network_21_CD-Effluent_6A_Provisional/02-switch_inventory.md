# Switch inventory - Network_21_CD-Effluent_6A_Provisional

[Network index](00-index.md)

| Switch | Management IP | Role | Hardware model | Firmware | Ports total / up | Collection | Hops from head | Parent |
|---|---|---|---|---|---|---|---|---|
| [[IND-SW-CD-BulkWaterTank]] | 192.168.160.57 | Access | IE-3000-8TC (SwitchScribe) | 15.0(2)EY3 | 10 / 5 | success | 2 | IND-SW-CD-Effluent |
| [[IND-SW-CD-Effluent]] | 192.168.160.58 | Access | IE-3000-8TC (SwitchScribe) | 12.2(58)SE2 | 10 / 5 | success | 1 | IND-SW-CD-Effluent_6A |
| [[IND-SW-CD-Effluent_6A]] | 192.168.160.93 | Head | IE-3000-8TC (SwitchScribe) | 12.2(58)SE2 | 10 / 3 | success | 0 | IND-SW-CD-CORE |
| [[IND-SW-CD-Effluent_6A_Control]] | 192.168.160.94 | Access | WS-C2960C-12PC-L (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree | 15.2(7)E2 | 14 / 3 | success | 3 | IND-SW-CD_Sub5MCC |
| [[IND-SW-CD-Sub6A]] | 192.168.160.92 | Access | IE-3000-8TC (advertised by neighbours via CDP) | 15.2(7)E3 | 10 / 9 | success | 1 | IND-SW-CD-Effluent_6A |
| [[IND-SW-CD_CoolingTower]] | 192.168.160.75 | Head | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports C9500-48Y4C: they disagree | 15.2(4)EA5 | 10 / 7 | success | 0 | IND-SW-CD-CORE |
| [[IND-SW-CD_Sub5MCC]] | 192.168.160.96 | Access | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports WS-C2960C-12PC-L: they disagree | 15.2(7)E3 | 10 / 6 | success | 2 | IND-SW-CD-Sub6A |
| [[IND-SW-CD_WaterTowerMCC]] | 192.168.160.76 | Access | IE-3000-8TC (advertised by neighbours via CDP) | 15.2(4)EA5 | 10 / 4 | success | 1 | IND-SW-CD_CoolingTower |

Firmware is the version the switch advertised to its neighbours. Model is shown with its source; where SwitchScribe and the neighbours disagree, both are stated.
