# Switch inventory - Network_22_CD-PP_CTLSsub_Provisional

[Network index](00-index.md)

| Switch | Management IP | Role | Hardware model | Firmware | Ports total / up | Collection | Hops from head | Parent |
|---|---|---|---|---|---|---|---|---|
| [[IND-SW-CD-PP_CTLSsub]] | 192.168.160.78 | Head | IE-3000-8TC (advertised by neighbours via CDP). SwitchScribe reports C9500-48Y4C: they disagree | 15.2(4)EA5 | 10 / 6 | success | 0 | IND-SW-CD-CORE |
| [[IND-SW-CD-PP_Compressor]] | 192.168.160.80 | Access | IE-3300-8T2X (advertised by neighbours via CDP). SwitchScribe reports IE-3300-8T2S: they disagree | 17.12.4 | 10 / 7 | success | 2 | IND-SW-CD-PP_HSHTFsub |
| [[IND-SW-CD-PP_FurnaceMCC]] | 192.168.160.81 | Access | IE-3300-8T2S (advertised by neighbours via CDP). SwitchScribe reports 1783-BMS20CA: they disagree | 16.12.3 | 18 / 16 | success | 3 | IND-SW-CD-PP_Compressor |
| [[IND-SW-CD-PP_HSHTFsub]] | 192.168.160.79 | Access | IE-3000-8TC (SwitchScribe) | 15.2(4)EA5 | 10 / 10 | success | 1 | IND-SW-CD-PP_CTLSsub |

Firmware is the version the switch advertised to its neighbours. Model is shown with its source; where SwitchScribe and the neighbours disagree, both are stated.
