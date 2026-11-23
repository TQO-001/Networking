# Switch-to-Switch Links

[[00-Management_Switches_Overview|Overview]] · [[01-Switch_Summary|Switch summary]] · [[02-Switch_Links|Switch links]] · [[03-Neighbour_Groups|Neighbour groups]]

| Link | End A | End B | Media | Seen By |
|---|---|---|---|---|
| L01 | [[IND-SW-CCL1PLCC]] `GigabitEthernet1/1` | [[IND-SW-CCL1DevRoom]] `GigabitEthernet1/0/28` | 1000baseX(FD) | CDP/LLDP |
| L02 | [[IND-SW-CCL1_PLC_B]] `GigabitEthernet1/2` | [[IND-SW-CCL1DevRoom]] `GigabitEthernet1/0/26` | 1000baseX(FD) | CDP/LLDP |
| L03 | [[IND-SW-CCL1_PLC_B]] `GigabitEthernet1/1` | [[IND-SW-CCL1PLCC]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L04 | [[IND-SW-CCL1_PLC_B]] `FastEthernet2/1` | [[IND-SW_CCL1OS4]] `GigabitEthernet1/1` | MAU type 21 | CDP/LLDP |
| L05 | [[IND-SW-CCL_CESS]] `GigabitEthernet1/2` | [[IND-SW-EDNL_CCLServiceTunnel]] `GigabitEthernet1/1` | Not reported | CDP |
| L06 | [[IND-SW-CD-BulkWaterTank]] `GigabitEthernet1/1` | [[IND-SW-CD-Effluent]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L07 | [[IND-SW-CD-Effluent]] `FastEthernet1/1` | [[IND-SW-CD-Effluent_6A]] `FastEthernet1/1` | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L08 | [[IND-SW-CD-Effluent]] `GigabitEthernet1/2` | [[IND-SW-CD_WaterTowerMCC]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L09 | [[IND-SW-CD-Effluent]] `GigabitEthernet1/2` | [[IND-SW-CD_WaterTowerMCC]] `Gi1/2` | 1000baseX(FD) | LLDP |
| L10 | [[IND-SW-CD-Effluent_6A_Control]] `GigabitEthernet0/2` | [[IND-SW-CD_Sub5MCC]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L11 | [[IND-SW-CD-PP_CTLSsub]] `Fa1/8` | [[IND-SW-CD-PP_HSHTFsub]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L12 | [[IND-SW-CD-PP_CTLSsub]] `GigabitEthernet1/2` | [[IND-SW-CD-PP_HSHTFsub]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/CDP/LLDP |
| L13 | [[IND-SW-CD-PP_Compressor]] `Te1/2` | [[IND-SW-CD-PP_FurnaceMCC]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L14 | [[IND-SW-CD-PP_Compressor]] `TenGigabitEthernet1/1` | [[IND-SW-CD-PP_FurnaceMCC]] `GigabitEthernet1/2` | Not reported | CDP/CDP/LLDP |
| L15 | [[IND-SW-CD-PP_Compressor]] `TenGigabitEthernet1/1` | [[IND-SW-CD-PP_FurnaceMCC]] `Gi1/10` | 1000baseX(FD) | LLDP |
| L16 | [[IND-SW-CD-PP_HSHTFsub]] `Gi1/1` | [[IND-SW-CD-PP_Compressor]] `TenGigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L17 | [[IND-SW-CD-PP_HSHTFsub]] `GigabitEthernet1/2` | [[IND-SW-CD-PP_Compressor]] `TenGigabitEthernet1/2` | Not reported | CDP |
| L18 | [[IND-SW-CD-PP_HSHTFsub]] `GigabitEthernet1/2` | [[IND-SW-CD-PP_Compressor]] `Gi1/5` | 1000baseX(FD) | LLDP |
| L19 | [[IND-SW-CD-Sub6A]] `Gi1/2` | [[IND-SW-CD-Effluent_6A]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L20 | [[IND-SW-CD-Sub6A]] `GigabitEthernet1/1` | [[IND-SW-CD-Effluent_6A]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L21 | [[IND-SW-CD-Sub6A]] `Fa1/7` | [[IND-SW-CD_Sub5MCC]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L22 | [[IND-SW-CD-Sub6A]] `GigabitEthernet1/2` | [[IND-SW-CD_Sub5MCC]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L23 | [[IND-SW-CD_A19]] `Gi1/0/25` | [[IND-SW-CDRF_ScalperPiller42]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L24 | [[IND-SW-CD_A19]] `GigabitEthernet1/0/26` | [[IND-SW-CDRF_ScalperPiller42]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L25 | [[IND-SW-CD_CoolingTower]] `GigabitEthernet1/1` | [[IND-SW-CD_WaterTowerMCC]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/CDP/LLDP |
| L26 | [[IND-SW-CD_CoolingTower]] `GigabitEthernet1/1` | [[IND-SW-CD_WaterTowerMCC]] `Fa1/8` | 1000baseX(FD) | LLDP |
| L27 | [[IND-SW-CD_HFM]] `GigabitEthernet1/2` | [[IND-SW-CD-Sub3A]] `GigabitEthernet1/2` | Not reported | CDP |
| L28 | [[IND-SW-CD_SubStation1]] `Gi1/1` | [[IND-SW-CD_A19]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L29 | [[IND-SW-CD_SubStation1]] `GigabitEthernet1/2` | [[IND-SW-CD_A19]] `GigabitEthernet1/0/25` | Not reported | CDP/CDP/LLDP |
| L30 | [[IND-SW-CD_SubStation1]] `GigabitEthernet1/2` | [[IND-SW-CD_A19]] `Gi1/0/4` | 1000baseX(FD) | LLDP |
| L31 | [[IND-SW-CD_SubStation1]] `Fa1/6` | [[IND-SW-CD_SubStation4]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L32 | [[IND-SW-CD_SubStation1]] `GigabitEthernet1/1` | [[IND-SW-CD_SubStation4]] `GigabitEthernet1/2` | Not reported | CDP |
| L33 | [[IND-SW-CD_SubStation1]] `GigabitEthernet1/1` | [[IND-SW-CD_SubStation4]] `Fa1/4` | 1000baseX(FD) | LLDP |
| L34 | [[IND-SW-Dept34_Distr (SwitchScribe)]] `GigabitEthernet1/0/24` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `GigabitEthernet1/0/28` | Not reported | CDP/CDP/LLDP |
| L35 | [[IND-SW-Dept34_Distr (SwitchScribe)]] `GigabitEthernet1/0/24` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `Gi1/0/25` | 1000baseT(FD) | LLDP |
| L36 | [[IND-SW-Dept34_Distr (SwitchScribe)]] `Te1/0/27` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `GigabitEthernet1/0/28` | 1000baseX(FD) | LLDP |
| L37 | [[IND-SW-EDNL-CM-Crane (SwitchScribe)]] `GigabitEthernet1/1` | [[IND-SW-EDNL_S4CoolingTowers (SwitchScribe)]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L38 | [[IND-SW-EDNL-SL7Oper (SwitchScribe)]] `GigabitEthernet1/3` | [[IND-SW-SL7Mcc (SwitchScribe)]] `GigabitEthernet1/8` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/CDP/LLDP |
| L39 | [[IND-SW-EDNL-SL7Oper (SwitchScribe)]] `GigabitEthernet1/3` | [[IND-SW-SL7Mcc (SwitchScribe)]] `Gi1/4` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| L40 | [[IND-SW-EDNL_A17ControlRoom (SwitchScribe)]] `Gi1/1` | [[IND-SW-EDNL_ExtcCoolingTowers (SwitchScribe)]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L41 | [[IND-SW-EDNL_A17ControlRoom (SwitchScribe)]] `GigabitEthernet1/2` | [[IND-SW-EDNL_ExtcCoolingTowers (SwitchScribe)]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L42 | [[IND-SW-EDNL_A17ControlRoom (SwitchScribe)]] `GigabitEthernet1/1` | [[IND-SW-EDNL_SL7 (SwitchScribe)]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L43 | [[IND-SW-EDNL_AnnealingFurnace]] `GigabitEthernet1/0/26` | [[IND-SW-EDNL_SubStationH]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L44 | [[IND-SW-EDNL_CCLCNGGAS]] `Gi1/1` | [[IND-SW-EDNL_WaterTowerSUB]] `GigabitEthernet1/1` | MAU type - not advertised | LLDP |
| L45 | [[IND-SW-EDNL_CCLCNGGAS]] `GigabitEthernet1/2` | [[IND-SW-EDNL_WaterTowerSUB]] `GigabitEthernet1/1` | Not reported | CDP |
| L46 | [[IND-SW-EDNL_CCLCNGGAS]] `GigabitEthernet1/2` | [[IND-SW-EDNL_WaterTowerSUB]] `Fa1/5` | MAU type - not advertised | LLDP |
| L47 | [[IND-SW-EDNL_CCLServiceTunnel]] `GigabitEthernet1/2` | [[IND-SW-EDNL_CCLCNGGAS]] `GigabitEthernet1/1` | MAU type - not advertised | CDP/LLDP |
| L48 | [[IND-SW-EDNL_CTLL5 (SwitchScribe)]] `Fa1/8` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L49 | [[IND-SW-EDNL_CTLL5 (SwitchScribe)]] `GigabitEthernet1/1` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `GigabitEthernet1/0/25` | Not reported | CDP/CDP/LLDP |
| L50 | [[IND-SW-EDNL_CTLL5 (SwitchScribe)]] `GigabitEthernet1/1` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `Gi1/0/2` | 1000baseX(FD) | LLDP |
| L51 | [[IND-SW-EDNL_CompHouse1]] `SFP-1GSXLC-T` | [[IND-SW-EDNL_AnnealingFurnace]] `?` | MAU type - not advertised | LLDP |
| L52 | [[IND-SW-EDNL_CompHouse2and3]] `Gi1/0/26` | [[IND-SW-EDNL_CompHouse2&3_2ndSW]] `GigabitEthernet0/8` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| L53 | [[IND-SW-EDNL_CompHouse2and3]] `GigabitEthernet1/0/24` | [[IND-SW-EDNL_CompHouse2&3_2ndSW]] `GigabitEthernet0/8` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L54 | [[IND-SW-EDNL_CompHouse2and3]] `Gi1/0/25` | [[IND-SW-EDNL_CompHouse4]] `Trunk to IND-SW_Core1` | 1000baseX(FD) | LLDP |
| L55 | [[IND-SW-EDNL_CompHouse2and3]] `GigabitEthernet1/0/26` | [[IND-SW-EDNL_CompHouse4]] `GigabitEthernet1/2` | MAU type - not advertised | CDP/CDP/LLDP |
| L56 | [[IND-SW-EDNL_CompHouse2and3]] `GigabitEthernet1/0/25` | [[IND-SW-EDNL_SubStationE]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L57 | [[IND-SW-EDNL_CompHouse4]] `Gi1/2` | [[IND-SW-EDNL_AnnealingFurnace]] `Trunk to IND-SW-EDNL_Subk` | MAU type - not advertised | LLDP |
| L58 | [[IND-SW-EDNL_CompHouse4]] `GigabitEthernet1/1` | [[IND-SW-EDNL_AnnealingFurnace]] `GigabitEthernet1/0/25` | 1000baseX(FD) | CDP/LLDP |
| L59 | [[IND-SW-EDNL_ElectrciansWorkShop]] `GigabitEthernet1/1` | [[IND-SW-EDNL_SubStationG]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L60 | [[IND-SW-EDNL_FoilAnnealingSubN]] `FastEthernet0/14` | [[IND-SW-ENDL_SUBNMcc]] `FastEthernet1/8` | Not reported | CDP |
| L61 | [[IND-SW-EDNL_FoilColingTowers]] `GigabitEthernet1/1` | [[IND-SW-EDNL_SubStationJ]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L62 | [[IND-SW-EDNL_MainServerRoom]] `GigabitEthernet1/0/26` | [[IND-SW-ENDL-INDServerRoom_Bottom]] `GigabitEthernet1/0/27` | Not reported | CDP |
| L63 | [[IND-SW-EDNL_PTTL (SwitchScribe)]] `Gi1/1` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `GigabitEthernet1/0/26` | 1000baseX(FD) | LLDP |
| L64 | [[IND-SW-EDNL_PTTL (SwitchScribe)]] `GigabitEthernet1/2` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `GigabitEthernet1/0/26` | 1000baseX(FD) | CDP/LLDP |
| L65 | [[IND-SW-EDNL_PTTL (SwitchScribe)]] `FastEthernet1/8` | [[IND-SW-EDNL_PTTL_PLC (SwitchScribe)]] `GigabitEthernet1/1` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L66 | [[IND-SW-EDNL_PTTL_PLC2 (SwitchScribe)]] `GigabitEthernet1/1` | [[IND-SW-EDNL_PTTL_PLC (SwitchScribe)]] `GigabitEthernet1/2` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L67 | [[IND-SW-EDNL_S4CoolingTowers (SwitchScribe)]] `GigabitEthernet1/1` | [[IND-SW-EDNL_S5CoolingTowers (SwitchScribe)]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L68 | [[IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/3` | [[IND-SW-CD_MainServerRoom]] `GigabitEthernet1/1` | MAU type - not advertised | CDP/LLDP |
| L69 | [[IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/1` | [[IND-SW-EDNL_S4GaugeCab]] `GigabitEthernet1/1` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L70 | [[IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/1` | [[IND-SW-EDNL_S4GaugeCab]] `Fa1/1` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| L71 | [[IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/27` | [[IND-SW-EDNL_S4PulPit]] `GigabitEthernet0/1` | Not reported | CDP |
| L72 | [[IND-SW-EDNL_S5CoolingTowers (SwitchScribe)]] `GigabitEthernet1/2` | [[IND-SW-EDNL_ExtcCoolingTowers (SwitchScribe)]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L73 | [[IND-SW-EDNL_S5CoolingTowers (SwitchScribe)]] `GigabitEthernet1/2` | [[IND-SW-EDNL_ExtcCoolingTowers (SwitchScribe)]] `Gi1/1` | 1000baseX(FD) | LLDP |
| L74 | [[IND-SW-EDNL_S6MCCRoom]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SubStationK]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L75 | [[IND-SW-EDNL_SL2 (SwitchScribe)]] `GigabitEthernet1/1` | [[IND-SW-EDNL_SL4 (SwitchScribe)]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/CDP/LLDP |
| L76 | [[IND-SW-EDNL_SL2 (SwitchScribe)]] `GigabitEthernet1/1` | [[IND-SW-EDNL_SL4 (SwitchScribe)]] `Fa1/8` | 1000baseX(FD) | LLDP |
| L77 | [[IND-SW-EDNL_SL4 (SwitchScribe)]] `Gi1/1` | [[IND-SW-EDNL_SL5 (SwitchScribe)]] `IND-SW-EDNL_SL4` | 1000baseX(FD) | LLDP |
| L78 | [[IND-SW-EDNL_SL4 (SwitchScribe)]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SL5 (SwitchScribe)]] `GigabitEthernet1/1` | Not reported | CDP |
| L79 | [[IND-SW-EDNL_SL4 (SwitchScribe)]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SL5 (SwitchScribe)]] `Fa1/8` | 1000baseX(FD) | LLDP |
| L80 | [[IND-SW-EDNL_SL5 (SwitchScribe)]] `Fa1/8` | [[IND-SW-EDNL_PTTL (SwitchScribe)]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L81 | [[IND-SW-EDNL_SL5 (SwitchScribe)]] `GigabitEthernet1/2` | [[IND-SW-EDNL_PTTL (SwitchScribe)]] `GigabitEthernet1/1` | Not reported | CDP |
| L82 | [[IND-SW-EDNL_SL5 (SwitchScribe)]] `IND-SW-EDNL_PTTL` | [[IND-SW-EDNL_PTTL (SwitchScribe)]] `Fa1/8` | 1000baseX(FD) | LLDP |
| L83 | [[IND-SW-EDNL_SL7 (SwitchScribe)]] `FastEthernet1/4` | [[IND-SW-SL7Mcc (SwitchScribe)]] `GigabitEthernet1/3` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L84 | [[IND-SW-EDNL_SL7 (SwitchScribe)]] `FastEthernet1/4` | [[IND-SW-SL7Mcc (SwitchScribe)]] `Gi1/7` | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| L85 | [[IND-SW-EDNL_SubStation1]] `GigabitEthernet1/2` | [[IND-SW-EDNL-Dept34SubStation]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L86 | [[IND-SW-EDNL_SubStationA]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SubStationB]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L87 | [[IND-SW-EDNL_SubStationD]] `GigabitEthernet1/1` | [[IND-SW-EDNL_SubStationM]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L88 | [[IND-SW-EDNL_SubStationH]] `Gi1/1` | [[IND-SW-EDNL_SL6MCCRoom]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L89 | [[IND-SW-EDNL_SubStationH]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SL6MCCRoom]] `GigabitEthernet1/2` | Not reported | CDP |
| L90 | [[IND-SW-EDNL_SubStationH]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SL6MCCRoom]] `Fa1/4` | 1000baseX(FD) | LLDP |
| L91 | [[IND-SW-EDNL_SubStationK]] `Gi1/1` | [[IND-SW-EDNL_SL6MCCRoom]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L92 | [[IND-SW-EDNL_SubStationK]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SL6MCCRoom]] `GigabitEthernet1/1` | Not reported | CDP |
| L93 | [[IND-SW-EDNL_SubStationK]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SL6MCCRoom]] `Gi1/2` | 1000baseX(FD) | LLDP |
| L94 | [[IND-SW-EDNL_SubStationN]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SubStationD]] `GigabitEthernet1/2` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L95 | [[IND-SW-EDNL_SubStationN]] `Gi1/2` | [[IND-SW-EDNL_SubStationG]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L96 | [[IND-SW-EDNL_SubStationN]] `GigabitEthernet1/1` | [[IND-SW-EDNL_SubStationG]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L97 | [[IND-SW-EDNL_TLL (SwitchScribe)]] `Gi1/2` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `GigabitEthernet1/0/27` | 1000baseX(FD) | LLDP |
| L98 | [[IND-SW-EDNL_TLL (SwitchScribe)]] `GigabitEthernet1/1` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `GigabitEthernet1/0/27` | Not reported | CDP/CDP/LLDP |
| L99 | [[IND-SW-EDNL_TLL (SwitchScribe)]] `GigabitEthernet1/1` | [[IND-SW-EDNL_Dept34_PTTL (SwitchScribe)]] `Gi1/0/2` | 1000baseX(FD) | LLDP |
| L100 | [[IND-SW-EDNL_TLL (SwitchScribe)]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SL7 (SwitchScribe)]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L101 | [[IND-SW_CCL1OS5]] `GigabitEthernet1/1` | [[IND-SW_CCL1OS9]] `GigabitEthernet1/2` | MAU type 21 | CDP/LLDP |
| L102 | [[IND-SW_CCL1OS6]] `Gi1/1` | [[IND-SW_CCL1OS4]] `Gi1/2` | 1000baseX(FD) | LLDP |
| L103 | [[IND-SW_CCL1OS6]] `GigabitEthernet1/1` | [[IND-SW_CCL1OS4]] `?` | 1000baseX(FD) | LLDP |
| L104 | [[IND-SW_CCL1OS9]] `GigabitEthernet1/1` | [[IND-SW-CCL1PLCC]] `FastEthernet2/1` | MAU type 21 | CDP/LLDP |
| L105 | [[IND-SW_CCL2Coater_Bottom]] `GigabitEthernet1/1` | [[IND-SW_CCL2_OS1]] `GigabitEthernet1/0/26` | 1000baseX(FD) | CDP/LLDP |
| L106 | [[IND-SW_CCL2_CompRoom]] `GigabitEthernet1/0/50` | [[IND-SW-CCL_CESS]] `GigabitEthernet1/1` | Not reported | CDP |
| L107 | [[IND-SW_CCL2_DC_L]] `GigabitEthernet1/1` | [[IND-SW_CCL2_CompRoom]] `GigabitEthernet1/0/12` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L108 | [[IND-SW_CCL2_OS1]] `GigabitEthernet1/0/27` | [[IND-SW_CCL2_CompRoom]] `GigabitEthernet1/0/51` | 1000baseX(FD) | CDP/LLDP |
| L109 | [[Unclassified-192.168.160.105]] `GigabitEthernet0/11` | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/7` | Not reported | CDP |
| L110 | [[Unclassified-192.168.160.105]] `GigabitEthernet0/11` | [[Unclassified-192.168.160.110]] `Twe2/0/48` | 1000baseX(FD) | LLDP |
| L111 | [[Unclassified-192.168.160.106]] `GigabitEthernet1/1` | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/13` | Not reported | CDP |
| L112 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/21` | [[IND-SW-CD-Effluent_6A]] `GigabitEthernet1/2` | Not reported | CDP |
| L113 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/20` | [[IND-SW-CD-PP_CTLSsub]] `GigabitEthernet1/1` | Not reported | CDP |
| L114 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/18` | [[IND-SW-CD-PP_PF4]] `GigabitEthernet1/1` | Not reported | CDP |
| L115 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/35` | [[IND-SW-CDHL_CoolingTowers]] `GigabitEthernet1/1` | Not reported | CDP |
| L116 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/14` | [[IND-SW-CD_A19]] `GigabitEthernet1/0/27` | Not reported | CDP |
| L117 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/29` | [[IND-SW-CD_CompHouse5]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L118 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/37` | [[IND-SW-CD_CoolingTower]] `GigabitEthernet1/2` | Not reported | CDP |
| L119 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/17` | [[IND-SW-CD_HFM]] `GigabitEthernet1/1` | Not reported | CDP |
| L120 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/19` | [[IND-SW-CD_HRM]] `GigabitEthernet1/1` | Not reported | CDP |
| L121 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/15` | [[IND-SW-CD_SubStation2]] `GigabitEthernet1/1` | Not reported | CDP |
| L122 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/31` | [[IND-SW-CD_SubStation4]] `GigabitEthernet1/1` | Not reported | CDP |
| L123 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/41` | [[IND-SW-CD_UBC]] `GigabitEthernet1/1` | Not reported | CDP |
| L124 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE1/0/45` | [[Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/45` | Not reported | CDP |
| L125 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/25` | [[Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/9` | Not reported | CDP |
| L126 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/45` | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/45` | Not reported | CDP |
| L127 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/9` | [[Unclassified-192.168.160.120]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L128 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/7` | [[Unclassified-192.168.160.123]] `TenGigabitEthernet1/1` | Not reported | CDP |
| L129 | [[Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/27` | [[Unclassified-192.168.160.128]] `GigabitEthernet1/1` | Not reported | CDP |
| L130 | [[Unclassified-192.168.160.110]] `Twe1/0/11` | [[IND-SW-CCL1DevRoom]] `GigabitEthernet1/0/27` | 1000baseX(FD) | LLDP |
| L131 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/14` | [[IND-SW-CCL1DevRoom]] `GigabitEthernet1/0/27` | Not reported | CDP |
| L132 | [[Unclassified-192.168.160.110]] `Twe1/0/5` | [[IND-SW-Dept34_Distr (SwitchScribe)]] `TenGigabitEthernet1/0/27` | 1000baseT(FD) | LLDP |
| L133 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/21` | [[IND-SW-Dept34_Distr (SwitchScribe)]] `TenGigabitEthernet1/0/27` | Not reported | CDP |
| L134 | [[Unclassified-192.168.160.110]] `Twe1/0/43` | [[IND-SW-EDNL_AdminMCC]] `Trunk to IND-SW-Core_MainServerRoom` | 1000baseX(FD) | LLDP |
| L135 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/1` | [[IND-SW-EDNL_AdminMCC]] `GigabitEthernet1/1` | Not reported | CDP |
| L136 | [[Unclassified-192.168.160.110]] `Twe1/0/7` | [[IND-SW-EDNL_EffluentPlant]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L137 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/6` | [[IND-SW-EDNL_EffluentPlant]] `GigabitEthernet1/1` | Not reported | CDP |
| L138 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/10` | [[IND-SW-EDNL_ElectrciansWorkShop]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L139 | [[Unclassified-192.168.160.110]] `Twe2/0/20` | [[IND-SW-EDNL_FoilColingTowers]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L140 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/2` | [[IND-SW-EDNL_FoilColingTowers]] `GigabitEthernet1/2` | Not reported | CDP |
| L141 | [[Unclassified-192.168.160.110]] `Twe2/0/32` | [[IND-SW-EDNL_GeneratorSub]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L142 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/5` | [[IND-SW-EDNL_GeneratorSub]] `GigabitEthernet1/2` | Not reported | CDP |
| L143 | [[Unclassified-192.168.160.110]] `Twe2/0/19` | [[IND-SW-EDNL_MainServerRoom]] `GigabitEthernet1/0/28` | 1000baseX(FD) | LLDP |
| L144 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/9` | [[IND-SW-EDNL_MainServerRoom]] `GigabitEthernet1/0/28` | Not reported | CDP |
| L145 | [[Unclassified-192.168.160.110]] `Twe1/0/20` | [[IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L146 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/3` | [[IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L147 | [[Unclassified-192.168.160.110]] `Twe1/0/1` | [[IND-SW-EDNL_S6MCCRoom]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L148 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/5` | [[IND-SW-EDNL_S6MCCRoom]] `GigabitEthernet1/1` | Not reported | CDP |
| L149 | [[Unclassified-192.168.160.110]] `Twe1/0/27` | [[IND-SW-EDNL_SubStation1]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L150 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/4` | [[IND-SW-EDNL_SubStation1]] `GigabitEthernet1/1` | Not reported | CDP |
| L151 | [[Unclassified-192.168.160.110]] `Twe2/0/20` | [[IND-SW-EDNL_SubStationA]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L152 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/1` | [[IND-SW-EDNL_SubStationA]] `GigabitEthernet1/1` | Not reported | CDP |
| L153 | [[Unclassified-192.168.160.110]] `Twe2/0/2` | [[IND-SW-ENDL_SUBNMcc]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L154 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/3` | [[IND-SW-ENDL_SUBNMcc]] `GigabitEthernet1/2` | Not reported | CDP |
| L155 | [[Unclassified-192.168.160.110]] `Twe1/0/30` | [[IND-SW_CCL2_CompRoom]] `GigabitEthernet1/0/49` | 1000baseX(FD) | LLDP |
| L156 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/10` | [[IND-SW_CCL2_CompRoom]] `GigabitEthernet1/0/49` | Not reported | CDP |
| L157 | [[Unclassified-192.168.160.110]] `Twe2/0/19` | [[IND-SW_CCL2_OS1]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L158 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/12` | [[IND-SW_CCL2_OS1]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L159 | [[Unclassified-192.168.160.110]] `Twe2/0/1` | [[IND-SW_FS14MCC]] `TenGigabitEthernet1/1/1` | 1000baseT(FD) | LLDP |
| L160 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/2` | [[IND-SW_FS14MCC]] `TenGigabitEthernet1/1/1` | Not reported | CDP |
| L161 | [[Unclassified-192.168.160.110]] `Twe2/0/10` | [[IND-SW_FS15MCC]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L162 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/6` | [[IND-SW_FS15MCC]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L163 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/8` | [[Unclassified-192.168.160.115]] `GigabitEthernet0/2` | Not reported | CDP |
| L164 | [[Unclassified-192.168.160.110]] `Twe2/0/5` | [[Unclassified-192.168.160.121]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L165 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/27` | [[Unclassified-192.168.160.121]] `GigabitEthernet1/1` | Not reported | CDP |
| L166 | [[Unclassified-192.168.160.110]] `Twe1/0/3` | [[Unclassified-192.168.160.127]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L167 | [[Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/11` | [[Unclassified-192.168.160.127]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L168 | [[Unclassified-192.168.160.114]] `Gi1/4` | [[IND-SW-CD_HRM]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L169 | [[Unclassified-192.168.160.114]] `GigabitEthernet1/1` | [[IND-SW-CD_HRM]] `GigabitEthernet1/2` | Not reported | CDP/CDP/LLDP |
| L170 | [[Unclassified-192.168.160.114]] `GigabitEthernet1/1` | [[IND-SW-CD_HRM]] `Gi1/5` | 1000baseT(FD) | LLDP |
| L171 | [[Unclassified-192.168.160.116]] `GigabitEthernet1/2` | [[IND-SW-EDNL_SubStationM]] `GigabitEthernet1/1` | Not reported | CDP |
| L172 | [[Unclassified-192.168.160.123]] `TenGigabitEthernet1/2` | [[IND-SW-CD_TRCMCC]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L173 | [[Unclassified-192.168.160.4]] `GigabitEthernet1/1` | [[IND-SW-EDNL_SubStationE]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L174 | [[Unclassified-192.168.160.4]] `GigabitEthernet1/1` | [[IND-SW-EDNL_SubStationE]] `Gi1/1` | 1000baseX(FD) | LLDP |
