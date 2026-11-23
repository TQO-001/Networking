# Switch inventory - Network_24_CD_HFM_Provisional

[Network index](00-index.md)

| Switch | Management IP | Role | Hardware model | Firmware | Ports total / up | Collection | Hops from head | Parent |
|---|---|---|---|---|---|---|---|---|
| [[IND-SW-CD-Sub3A]] | 192.168.160.104 | Access | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports IE-3300-8T2S: they disagree | 15.2(7)E2 | 10 / 5 | success | 1 | IND-SW-CD_HFM |
| [[IND-SW-CD_HFM]] | 192.168.160.98 | Head | IE-3300-8T2S (advertised by neighbours via CDP). SwitchScribe reports IE-3000-8TC: they disagree | 16.12.1 | 10 / 4 | success | 0 | IND-SW-CD-CORE |

Firmware is the version the switch advertised to its neighbours. Model is shown with its source; where SwitchScribe and the neighbours disagree, both are stated.
