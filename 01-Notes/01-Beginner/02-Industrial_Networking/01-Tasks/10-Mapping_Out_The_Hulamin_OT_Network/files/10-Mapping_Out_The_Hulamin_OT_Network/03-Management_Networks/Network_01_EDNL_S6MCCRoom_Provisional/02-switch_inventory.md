# Switch inventory - Network_01_EDNL_S6MCCRoom_Provisional

[Network index](00-index.md)

| Switch | Management IP | Role | Hardware model | Firmware | Ports total / up | Collection | Hops from head | Parent |
|---|---|---|---|---|---|---|---|---|
| [[IND-SW-EDNL_AnnealingFurnace]] | 192.168.160.45 | Access | WS-C2960X-24TS-L (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree | 15.2(2)E3 | 29 / 15 | success | 4 | IND-SW-EDNL_SubStationH |
| [[IND-SW-EDNL_CompHouse2&3_2ndSW]] | 192.168.160.95 | Access | WS-C2960G-8TC-L (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-24PD-L: they disagree | 12.2(55)SE12 | 8 / 7 | success | 7 | IND-SW-EDNL_CompHouse2and3 |
| [[IND-SW-EDNL_CompHouse2and3]] | 192.168.160.6 | Access | WS-C2960X-24PD-L (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree | 15.2(7)E2 | 29 / 23 | success | 6 | IND-SW-EDNL_CompHouse4 |
| [[IND-SW-EDNL_CompHouse4]] | 192.168.160.7 | Access | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-24TS-L: they disagree | 15.2(7)E2 | 10 / 9 | success | 5 | IND-SW-EDNL_AnnealingFurnace |
| [[IND-SW-EDNL_S6MCCRoom]] | 192.168.160.61 | Head | IE-3000-8TC (SwitchScribe) | 15.2(4)EA5 | 10 / 2 | success | 0 | ind-Core1-MSR |
| [[IND-SW-EDNL_SL6MCCRoom]] | 192.168.160.64 | Access | IE-3000-8TC (SwitchScribe) | 15.2(4)EA5 | 10 / 6 | success | 2 | IND-SW-EDNL_SubStationK |
| [[IND-SW-EDNL_SubStationE]] | 192.168.160.60 | Access | IE-3000-8TC (SwitchScribe) | 15.2(4)EA5 | 10 / 3 | success | 7 | IND-SW-EDNL_CompHouse2and3 |
| [[IND-SW-EDNL_SubStationH]] | 192.168.160.63 | Access | IE-3000-8TC (SwitchScribe) | 15.2(4)EA5 | 10 / 4 | success | 3 | IND-SW-EDNL_SL6MCCRoom |
| [[IND-SW-EDNL_SubStationK]] | 192.168.160.62 | Access | IE-3000-8TC (SwitchScribe) | 15.2(4)EA5 | 10 / 4 | success | 1 | IND-SW-EDNL_S6MCCRoom |
| [[Unclassified-192.168.160.4]] | 192.168.160.4 | Access | IE-3000-8TC (SwitchScribe) | 12.2(58)SE2 | 10 / 3 | success | 8 | IND-SW-EDNL_SubStationE |

Firmware is the version the switch advertised to its neighbours. Model is shown with its source; where SwitchScribe and the neighbours disagree, both are stated.
