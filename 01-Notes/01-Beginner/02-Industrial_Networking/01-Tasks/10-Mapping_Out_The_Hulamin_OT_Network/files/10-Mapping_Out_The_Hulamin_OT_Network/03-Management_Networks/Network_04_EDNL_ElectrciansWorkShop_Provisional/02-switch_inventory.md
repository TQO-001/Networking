# Switch inventory - Network_04_EDNL_ElectrciansWorkShop_Provisional

[Network index](00-index.md)

| Switch | Management IP | Role | Hardware model | Firmware | Ports total / up | Collection | Hops from head | Parent |
|---|---|---|---|---|---|---|---|---|
| [[IND-SW-EDNL_ElectrciansWorkShop]] | 192.168.160.27 | Head | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports Cisco SG200-10FP (PID:SG200-10FP)-VSD: they disagree | 12.2(58)SE2 | 10 / 6 | success | 0 | ind-Core1-MSR |
| [[IND-SW-EDNL_SubStationD]] | 192.168.160.43 | Access | IE-3000-8TC (SwitchScribe) | 12.2(58)SE2 | 10 / 4 | success | 3 | IND-SW-EDNL_SubStationN |
| [[IND-SW-EDNL_SubStationG]] | 192.168.160.44 | Access | IE-3000-8TC (SwitchScribe) | 15.0(2)EY3 | 10 / 4 | success | 1 | IND-SW-EDNL_ElectrciansWorkShop |
| [[IND-SW-EDNL_SubStationM]] | 192.168.160.69 | Access | IE-3000-8TC (SwitchScribe) | 12.2(58)SE2 | 10 / 8 | success | 4 | IND-SW-EDNL_SubStationD |
| [[IND-SW-EDNL_SubStationN]] | 192.168.160.36 | Access | IE-3200-8T2S (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree | 16.12.3 | 10 / 3 | success | 2 | IND-SW-EDNL_SubStationG |
| [[Unclassified-192.168.160.116]] | 192.168.160.116 | Access | IE-3200-8T2S (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree | 16.12.3 | 10 / 5 | success | 5 | IND-SW-EDNL_SubStationM |

Firmware is the version the switch advertised to its neighbours. Model is shown with its source; where SwitchScribe and the neighbours disagree, both are stated.
