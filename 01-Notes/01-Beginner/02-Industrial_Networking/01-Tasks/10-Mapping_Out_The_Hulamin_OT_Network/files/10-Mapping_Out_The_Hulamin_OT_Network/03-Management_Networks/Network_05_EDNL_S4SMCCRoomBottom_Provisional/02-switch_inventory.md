# Switch inventory - Network_05_EDNL_S4SMCCRoomBottom_Provisional

[Network index](00-index.md)

| Switch | Management IP | Role | Hardware model | Firmware | Ports total / up | Collection | Hops from head | Parent |
|---|---|---|---|---|---|---|---|---|
| [[IND-SW-CD_MainServerRoom]] | 192.168.160.74 | Access | IE-5000-16S12P (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-24TS-L: they disagree | 15.2(6)E1 | 28 / 1 | success | 1 | IND-SW-EDNL_S4SMCCRoomBottom |
| [[IND-SW-EDNL_S4GaugeCab]] | 192.168.160.32 | Access | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-24TS-L: they disagree | 15.2(4)EA9 | 10 / 2 | success | 1 | IND-SW-EDNL_S4SMCCRoomBottom |
| [[IND-SW-EDNL_S4PulPit]] | 192.168.160.33 | Access | WS-C2960-8TC-L (advertised by neighbours via CDP). SwitchScribe reports WS-C2960X-24TS-L: they disagree | 12.2(35)SE5 | 9 / 4 | partial | 1 | IND-SW-EDNL_S4SMCCRoomBottom |
| [[IND-SW-EDNL_S4SMCCRoomBottom]] | 192.168.160.29 | Head | WS-C2960X-24TS-L (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree | 15.2(2)E3 | 29 / 12 | success | 0 | ind-Core1-MSR |

Firmware is the version the switch advertised to its neighbours. Model is shown with its source; where SwitchScribe and the neighbours disagree, both are stated.
