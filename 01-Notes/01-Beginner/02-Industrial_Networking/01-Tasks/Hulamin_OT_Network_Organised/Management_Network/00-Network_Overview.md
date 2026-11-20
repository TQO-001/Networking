# Management Switch Network Overview

## Network Overview

### Switch Summary

|   # | Switch                                     | Model                                 | IP Address        | Ports |  Up | UTP in use | Fiber in use | Status      | LLDP/CDP Neighbors | Location           |
| --: | ------------------------------------------ | ------------------------------------- | ----------------- | ----: | --: | ---------: | -----------: | ----------- | -----------------: | ------------------ |
|   1 | [[#CAMPS-DRIFT-REMELT-BAILER-(Ref-Henri)]] | Not reported                          | `192.168.160.50`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
|   2 | [[#Dept34]]                                | Not reported                          | `192.168.160.72`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
|   3 | [[#IND-SW-CCL1_PLC_B]]                     | cisco IE-3000-8TC                     | `192.168.160.10`  |    18 |   9 |          — |            2 | **SUCCESS** |                  7 | —                  |
|   4 | [[#IND-SW-CCL1DevRoom]]                    | cisco IE-3000-8TC                     | `192.168.160.12`  |    29 |   9 |          — |            3 | **SUCCESS** |                  7 | —                  |
|   5 | [[#IND-SW-CCL1PLCC]]                       | cisco IE-3000-8TC                     | `192.168.160.11`  |    18 |   9 |          — |            2 | **SUCCESS** |                  5 | —                  |
|   6 | [[#IND-SW-CCL_CESS]]                       | cisco WS-C2960X-48TS-L                | `192.168.160.23`  |    18 |  11 |          — |            — | **SUCCESS** |                  2 | —                  |
|   7 | [[#IND-SW-CD-BulkWaterTank]]               | cisco IE-3000-8TC                     | `192.168.160.57`  |    10 |   5 |          — |            1 | **SUCCESS** |                  1 | —                  |
|   8 | [[#IND-SW-CD-Effluent]]                    | cisco IE-3000-8TC                     | `192.168.160.58`  |    10 |   5 |          — |            2 | **SUCCESS** |                  4 | —                  |
|   9 | [[#IND-SW-CD-Effluent_6A]]                 | cisco IE-3000-8TC                     | `192.168.160.93`  |    10 |   3 |          — |            1 | **SUCCESS** |                  3 | —                  |
|  10 | [[#IND-SW-CD-Effluent_6A_Control]]         | cisco IE-3000-8TC                     | `192.168.160.94`  |    14 |   3 |          — |            1 | **SUCCESS** |                  1 | —                  |
|  11 | [[#IND-SW-CD-PP_Compressor]]               | cisco IE-3300-8T2S                    | `192.168.160.80`  |    10 |   7 |          — |            2 | **SUCCESS** |                  5 | —                  |
|  12 | [[#IND-SW-CD-PP_CTLSsub]]                  | cisco C9500-48Y4C                     | `192.168.160.78`  |    10 |   6 |          — |            1 | **SUCCESS** |                  4 | —                  |
|  13 | [[#IND-SW-CD-PP_FurnaceMCC]]               | cisco 1783-BMS20CA                    | `192.168.160.81`  |    18 |  16 |          1 |            1 | **SUCCESS** |                  5 | —                  |
|  14 | [[#IND-SW-CD-PP_HSHTFsub]]                 | cisco IE-3000-8TC                     | `192.168.160.79`  |    10 |  10 |          — |            2 | **SUCCESS** |                  4 | —                  |
|  15 | [[#IND-SW-CD-PP_PF4]]                      | cisco C9500-48Y4C                     | `192.168.160.99`  |    10 |   9 |          — |            — | **SUCCESS** |                  2 | —                  |
|  16 | [[#IND-SW-CD-Sub3A]]                       | cisco IE-3300-8T2S                    | `192.168.160.104` |    10 |   5 |          2 |            — | **SUCCESS** |                  6 | —                  |
|  17 | [[#IND-SW-CD-Sub6A]]                       | Linux                                 | `192.168.160.92`  |    10 |   9 |          — |            2 | **SUCCESS** |                  9 | —                  |
|  18 | [[#IND-SW-CD_A19]]                         | cisco C9500-48Y4C                     | `192.168.160.82`  |    29 |   9 |          — |            2 | **SUCCESS** |                  6 | —                  |
|  19 | [[#IND-SW-CD_A19PLC]]                      | Not reported                          | `192.168.160.83`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
|  20 | [[#IND-SW-CD_CNGGas]]                      | Not reported                          | `192.168.160.85`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
|  21 | [[#IND-SW-CD_CompHouse5]]                  | cisco C9500-48Y4C                     | `192.168.160.47`  |    29 |  20 |          — |            — | **SUCCESS** |                  1 | —                  |
|  22 | [[#IND-SW-CD_CoolingTower]]                | cisco C9500-48Y4C                     | `192.168.160.75`  |    10 |   7 |          — |            1 | **SUCCESS** |                  2 | —                  |
|  23 | [[#IND-SW-CD_HFM]]                         | cisco IE-3000-8TC                     | `192.168.160.98`  |    10 |   4 |          — |            — | **SUCCESS** |                  2 | —                  |
|  24 | [[#IND-SW-CD_HRM]]                         | cisco C9500-48Y4C                     | `192.168.160.97`  |    10 |   6 |          1 |            — | **SUCCESS** |                  4 | —                  |
|  25 | [[#IND-SW-CD_MainServerRoom]]              | cisco WS-C2960X-24TS-L                | `192.168.160.74`  |    28 |   1 |          — |            — | **SUCCESS** |                  1 | —                  |
|  26 | [[#IND-SW-CD_PlatePlantStrecher]]          | Not reported                          | `192.168.160.46`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
|  27 | [[#IND-SW-CD_Sub5MCC]]                     | cisco WS-C2960C-12PC-L                | `192.168.160.96`  |    10 |   6 |          — |            2 | **SUCCESS** |                  2 | —                  |
|  28 | [[#IND-SW-CD_SubStation1]]                 | Linux                                 | `192.168.160.51`  |    10 |  10 |          — |            2 | **SUCCESS** |                 10 | —                  |
|  29 | [[#IND-SW-CD_SubStation2]]                 | Linux                                 | `192.168.160.100` |    10 |   3 |          — |            — | **SUCCESS** |                  2 | —                  |
|  30 | [[#IND-SW-CD_SubStation4]]                 | Linux                                 | `192.168.160.52`  |    10 |   5 |          — |            1 | **SUCCESS** |                  6 | —                  |
|  31 | [[#IND-SW-CD_TRCMCC]]                      | cisco IE-3300-8T2X                    | `192.168.160.103` |    10 |   1 |          — |            1 | **SUCCESS** |                  1 | —                  |
|  32 | [[#IND-SW-CD_UBC]]                         | cisco C9500-48Y4C                     | `192.168.160.89`  |    10 |   6 |          — |            — | **SUCCESS** |                  1 | —                  |
|  33 | [[#IND-SW-CD_WaterTowerMCC]]               | Linux                                 | `192.168.160.76`  |    10 |   4 |          1 |            2 | **SUCCESS** |                  5 | —                  |
|  34 | [[#IND-SW-CDHL_CoolingTowers]]             | cisco C9500-48Y4C                     | `192.168.160.87`  |    10 |   4 |          — |            — | **SUCCESS** |                  1 | —                  |
|  35 | [[#IND-SW-CDRF_ScalperPiller42]]           | MikroTik                              | `192.168.160.86`  |    10 |   4 |          — |            1 | **SUCCESS** |                  2 | —                  |
|  36 | [[#IND-SW-Dept34_Distr]]                   | IE-9320-22S2C4X                       | `192.168.160.117` |    28 |   2 |          — |            2 | **SUCCESS** |                  3 | —                  |
|  37 | [[#IND-SW-EDIIT_Foiloffice]]               | Not reported                          | `192.168.160.88`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
|  38 | [[#IND-SW-EDNL-CM-Crane]]                  | IE-3300-8P2S                          | `192.168.160.126` |    10 |   1 |          — |            1 | **SUCCESS** |                  1 | —                  |
|  39 | [[#IND-SW-EDNL-Dept34SubStation]]          | cisco IE-3000-8TC                     | `192.168.160.41`  |    10 |   3 |          — |            1 | **SUCCESS** |                  1 | —                  |
|  40 | [[#IND-SW-EDNL-SL7Oper]]                   | IE-3300-8P2S                          | `192.168.160.119` |    10 |   2 |          1 |            — | **SUCCESS** |                  1 | SL7 Operating Desk |
|  41 | [[#IND-SW-EDNL_A17ControlRoom]]            | IE-3000-8TC                           | `192.168.160.65`  |    10 |   4 |          — |            2 | **SUCCESS** |                  3 | —                  |
|  42 | [[#IND-SW-EDNL_AdminMCC]]                  | cisco C9500-48Y4C                     | `192.168.160.77`  |     6 |   4 |          — |            — | **SUCCESS** |                  1 | —                  |
|  43 | [[#IND-SW-EDNL_AnnealingFurnace]]          | cisco IE-3000-8TC                     | `192.168.160.45`  |    29 |  15 |          — |            2 | **SUCCESS** |                  4 | —                  |
|  44 | [[#IND-SW-EDNL_CCLCNGGAS]]                 | cisco IE-3000-8TC                     | `192.168.160.48`  |    10 |   5 |          — |            — | **SUCCESS** |                  5 | —                  |
|  45 | [[#IND-SW-EDNL_CCLServiceTunnel]]          | cisco IE-3000-8TC                     | `192.168.160.42`  |    10 |   4 |          — |            — | **SUCCESS** |                  2 | —                  |
|  46 | [[#IND-SW-EDNL_CompHouse1]]                | Not reported                          | `192.168.160.5`   |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
|  47 | [[#IND-SW-EDNL_CompHouse2&3_2ndSW]]        | cisco WS-C2960X-24PD-L                | `192.168.160.95`  |     8 |   7 |          1 |            — | **SUCCESS** |                  1 | —                  |
|  48 | [[#IND-SW-EDNL_CompHouse2and3]]            | cisco IE-3000-8TC                     | `192.168.160.6`   |    29 |  23 |          1 |            2 | **SUCCESS** |                  5 | —                  |
|  49 | [[#IND-SW-EDNL_CompHouse4]]                | cisco WS-C2960X-24TS-L                | `192.168.160.7`   |    10 |   9 |          — |            — | **SUCCESS** |                  3 | —                  |
|  50 | [[#IND-SW-EDNL_CTLL5]]                     | IE-3000-8TC                           | `192.168.160.71`  |    10 |   3 |          — |            1 | **SUCCESS** |                  3 | —                  |
|  51 | [[#IND-SW-EDNL_Dept34_PTTL]]               | WS-C2960X-24TS-L                      | `192.168.160.84`  |    29 |   9 |          4 |            2 | **SUCCESS** |                 11 | —                  |
|  52 | [[#IND-SW-EDNL_EffluentPlant]]             | cisco C9500-48Y4C                     | `192.168.160.91`  |    10 |   3 |          — |            — | **SUCCESS** |                  4 | —                  |
|  53 | [[#IND-SW-EDNL_ElectrciansWorkShop]]       | Cisco SG200-10FP (PID:SG200-10FP)-VSD | `192.168.160.27`  |    10 |   6 |          1 |            1 | **SUCCESS** |                  4 | —                  |
|  54 | [[#IND-SW-EDNL_ExtcCoolingTowers]]         | IE-3200-8T2S                          | `192.168.160.101` |    10 |   5 |          — |            2 | **SUCCESS** |                  3 | —                  |
|  55 | [[#IND-SW-EDNL_FoilAnnealingSubN]]         | cisco WS-C2950SX-24                   | `192.168.160.67`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
|  56 | [[#IND-SW-EDNL_FoilColingTowers]]          | cisco IE-3000-8TC                     | `192.168.160.37`  |    10 |   9 |          1 |            1 | **SUCCESS** |                  2 | —                  |
|  57 | [[#IND-SW-EDNL_FoilSepratorsSubN]]         | Not reported                          | `192.168.160.66`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
|  58 | [[#IND-SW-EDNL_GeneratorSub]]              | cisco C9500-48Y4C                     | `192.168.160.28`  |    10 |   7 |          1 |            — | **SUCCESS** |                  1 | —                  |
|  59 | [[#IND-SW-EDNL_MainServerRoom]]            | Linux                                 | `192.168.160.26`  |    29 |  14 |          1 |            — | **SUCCESS** |                  6 | —                  |
|  60 | [[#IND-SW-EDNL_PTTL]]                      | IE-3000-8TC                           | `192.168.160.70`  |    10 |  10 |          1 |            2 | **SUCCESS** |                  5 | —                  |
|  61 | [[#IND-SW-EDNL_PTTL_PLC]]                  | IE-3000-8TC                           | `192.168.160.90`  |    10 |   8 |          1 |            — | **SUCCESS** |                  2 | —                  |
|  62 | [[#IND-SW-EDNL_PTTL_PLC2]]                 | IE-3000-4TC                           | `192.168.160.124` |     6 |   2 |          1 |            — | **SUCCESS** |                  2 | —                  |
|  63 | [[#IND-SW-EDNL_S4CoolingTowers]]           | IE-3000-8TC                           | `192.168.160.30`  |    10 |   8 |          — |            2 | **SUCCESS** |                  2 | —                  |
|  64 | [[#IND-SW-EDNL_S4GaugeCab]]                | cisco WS-C2960X-24TS-L                | `192.168.160.32`  |    10 |   2 |          1 |            — | **SUCCESS** |                  3 | —                  |
|  65 | [[#IND-SW-EDNL_S4MCCRoomTop]]              | Not reported                          | `192.168.160.34`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
|  66 | [[#IND-SW-EDNL_S4PulPit]]                  | cisco WS-C2960X-24TS-L                | `192.168.160.33`  |     9 |   4 |          — |            — | **PARTIAL** |                  1 | —                  |
|  67 | [[#IND-SW-EDNL_S4SMCCRoomBottom]]          | cisco IE-3000-8TC                     | `192.168.160.29`  |    29 |  12 |          2 |            1 | **SUCCESS** |                  5 | —                  |
|  68 | [[#IND-SW-EDNL_S5CoolingTowers]]           | IE-3000-8TC                           | `192.168.160.31`  |    10 |   6 |          — |            2 | **SUCCESS** |                  2 | —                  |
|  69 | [[#IND-SW-EDNL_S6MCCRoom]]                 | cisco IE-3000-8TC                     | `192.168.160.61`  |    10 |   2 |          — |            2 | **SUCCESS** |                  3 | —                  |
|  70 | [[#IND-SW-EDNL_SL2]]                       | IE-3000-8TC                           | `192.168.160.54`  |    10 |   1 |          — |            1 | **SUCCESS** |                  1 | —                  |
|  71 | [[#IND-SW-EDNL_SL4]]                       | IE-3000-8TC                           | `192.168.160.55`  |    10 |   4 |          — |            2 | **SUCCESS** |                  5 | —                  |
|  72 | [[#IND-SW-EDNL_SL5]]                       | IE-3000-8TC                           | `192.168.160.56`  |    10 |   6 |          1 |            1 | **SUCCESS** |                 11 | —                  |
|  73 | [[#IND-SW-EDNL_SL6MCCRoom]]                | cisco IE-3000-8TC                     | `192.168.160.64`  |    10 |   6 |          1 |            2 | **SUCCESS** |                  6 | —                  |
|  74 | [[#IND-SW-EDNL_SL7]]                       | IE-3000-4TC                           | `192.168.160.73`  |     6 |   5 |          1 |            2 | **SUCCESS** |                  3 | SL7 LV Room        |
|  75 | [[#IND-SW-EDNL_SubStation1]]               | cisco IE-3000-8TC                     | `192.168.160.35`  |    10 |   7 |          1 |            1 | **SUCCESS** |                  3 | —                  |
|  76 | [[#IND-SW-EDNL_SubStationA]]               | cisco IE-3000-8TC                     | `192.168.160.39`  |    10 |   8 |          — |            2 | **SUCCESS** |                  3 | —                  |
|  77 | [[#IND-SW-EDNL_SubStationB]]               | cisco IE-3000-8TC                     | `192.168.160.40`  |    10 |   3 |          — |            1 | **SUCCESS** |                  1 | —                  |
|  78 | [[#IND-SW-EDNL_SubStationD]]               | cisco IE-3000-8TC                     | `192.168.160.43`  |    10 |   4 |          1 |            1 | **SUCCESS** |                  2 | —                  |
|  79 | [[#IND-SW-EDNL_SubStationE]]               | cisco IE-3000-8TC                     | `192.168.160.60`  |    10 |   3 |          — |            2 | **SUCCESS** |                  3 | —                  |
|  80 | [[#IND-SW-EDNL_SubStationG]]               | cisco IE-3000-8TC                     | `192.168.160.44`  |    10 |   4 |          — |            2 | **SUCCESS** |                  2 | —                  |
|  81 | [[#IND-SW-EDNL_SubStationH]]               | cisco IE-3000-8TC                     | `192.168.160.63`  |    10 |   4 |          — |            2 | **SUCCESS** |                  3 | —                  |
|  82 | [[#IND-SW-EDNL_SubStationJ]]               | cisco IE-3000-8TC                     | `192.168.160.38`  |    10 |   3 |          — |            1 | **SUCCESS** |                  1 | —                  |
|  83 | [[#IND-SW-EDNL_SubStationK]]               | cisco IE-3000-8TC                     | `192.168.160.62`  |    10 |   4 |          — |            2 | **SUCCESS** |                  3 | —                  |
|  84 | [[#IND-SW-EDNL_SubStationM]]               | cisco IE-3000-8TC                     | `192.168.160.69`  |    10 |   8 |          — |            1 | **SUCCESS** |                  5 | —                  |
|  85 | [[#IND-SW-EDNL_SubStationN]]               | cisco IE-3000-8TC                     | `192.168.160.36`  |    10 |   3 |          — |            2 | **SUCCESS** |                  3 | —                  |
|  86 | [[#IND-SW-EDNL_TLL]]                       | IE-3000-8TC                           | `192.168.160.59`  |    10 |   5 |          — |            2 | **SUCCESS** |                  3 | —                  |
|  87 | [[#IND-SW-EDNL_WaterTowerSUB]]             | cisco IE-3000-8TC                     | `192.168.160.49`  |    10 |   8 |          — |            — | **SUCCESS** |                  7 | —                  |
|  88 | [[#IND-SW-ENDL-INDServerRoom_Bottom]]      | Linux                                 | `192.168.160.53`  |    29 |  19 |          — |            — | **SUCCESS** |                  5 | —                  |
|  89 | [[#IND-SW-ENDL_SUBNMcc]]                   | cisco C9500-48Y4C                     | `192.168.160.102` |    10 |   9 |          1 |            — | **SUCCESS** |                  4 | —                  |
|  90 | [[#IND-SW-SL7Mcc]]                         | IE-3200-8T2S                          | `192.168.160.112` |    10 |   7 |          3 |            — | **SUCCESS** |                  9 | SL7 Electric Room  |
|  91 | [[#IND-SW_CCL1OS4]]                        | cisco IE-3000-8TC                     | `192.168.160.13`  |     6 |   3 |          — |            — | **SUCCESS** |                  2 | —                  |
|  92 | [[#IND-SW_CCL1OS5]]                        | cisco IE-3000-4TC                     | `192.168.160.14`  |     6 |   3 |          — |            — | **SUCCESS** |                  1 | —                  |
|  93 | [[#IND-SW_CCL1OS6]]                        | IE-3300-8P2S                          | `192.168.160.15`  |    10 |   4 |          — |            1 | **SUCCESS** |                  1 | —                  |
|  94 | [[#IND-SW_CCL1OS9]]                        | cisco IE-3000-8TC                     | `192.168.160.16`  |     6 |   5 |          — |            — | **SUCCESS** |                  2 | —                  |
|  95 | [[#IND-SW_CCL2_CompRoom]]                  | cisco WS-C2960X-24TS-L                | `192.168.160.22`  |    53 |  21 |          1 |            2 | **SUCCESS** |                  7 | —                  |
|  96 | [[#IND-SW_CCL2_DC_L]]                      | cisco WS-C2960X-48TS-L                | `192.168.160.20`  |    10 |   3 |          1 |            — | **SUCCESS** |                  1 | —                  |
|  97 | [[#IND-SW_CCL2_OS1]]                       | cisco WS-C2960X-48TS-L                | `192.168.160.21`  |    29 |  12 |          — |            3 | **SUCCESS** |                  4 | —                  |
|  98 | [[#IND-SW_CCL2Coater_Bottom]]              | cisco WS-C2960X-24TS-L                | `192.168.160.18`  |    10 |   6 |          — |            1 | **SUCCESS** |                  1 | —                  |
|  99 | [[#IND-SW_FS14MCC]]                        | cisco C9500-48Y4C                     | `192.168.160.9`   |    29 |  10 |          1 |            1 | **SUCCESS** |                  6 | —                  |
| 100 | [[#IND-SW_FS15MCC]]                        | cisco C9500-48Y4C                     | `192.168.160.8`   |    29 |  16 |          2 |            1 | **SUCCESS** |                  7 | —                  |
| 101 | [[#Unclassified-192.168.160.105]]          | cisco C9500-48Y4C                     | `192.168.160.105` |    12 |   2 |          1 |            — | **SUCCESS** |                  1 | —                  |
| 102 | [[#Unclassified-192.168.160.106]]          | cisco C9500-48Y4C                     | `192.168.160.106` |    10 |   4 |          — |            — | **SUCCESS** |                  1 | —                  |
| 103 | [[#Unclassified-192.168.160.107]]          | cisco C9500-48Y4C                     | `192.168.160.107` |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
| 104 | [[#Unclassified-192.168.160.110]]          | N5K-C5672UP                           | `192.168.160.110` |     1 |   0 |          5 |           16 | **SUCCESS** |                 62 | —                  |
| 105 | [[#Unclassified-192.168.160.114]]          | Linux                                 | `192.168.160.114` |    10 |   4 |          — |            1 | **SUCCESS** |                  7 | —                  |
| 106 | [[#Unclassified-192.168.160.115]]          | cisco C9500-48Y4C                     | `192.168.160.115` |    10 |   1 |          — |            — | **SUCCESS** |                  1 | —                  |
| 107 | [[#Unclassified-192.168.160.116]]          | cisco IE-3000-8TC                     | `192.168.160.116` |    10 |   5 |          — |            — | **SUCCESS** |                  1 | —                  |
| 108 | [[#Unclassified-192.168.160.120]]          | cisco C9500-48Y4C                     | `192.168.160.120` |    29 |   5 |          — |            — | **SUCCESS** |                  1 | —                  |
| 109 | [[#Unclassified-192.168.160.121]]          | cisco C9500-48Y4C                     | `192.168.160.121` |    10 |   5 |          3 |            1 | **SUCCESS** |                  6 | —                  |
| 110 | [[#Unclassified-192.168.160.122]]          | cisco C9500-48Y4C                     | `192.168.160.122` |    29 |   2 |          — |            — | **SUCCESS** |                  1 | —                  |
| 111 | [[#Unclassified-192.168.160.123]]          | cisco C9500-48Y4C                     | `192.168.160.123` |    10 |   4 |          — |            1 | **SUCCESS** |                  2 | —                  |
| 112 | [[#Unclassified-192.168.160.127]]          | cisco C9500-48Y4C                     | `192.168.160.127` |    29 |   1 |          — |            1 | **SUCCESS** |                  1 | —                  |
| 113 | [[#Unclassified-192.168.160.128]]          | cisco WS-C2950SX-24                   | `192.168.160.128` |    10 |   2 |          — |            — | **SUCCESS** |                  2 | —                  |
| 114 | [[#Unclassified-192.168.160.4]]            | cisco IE-3000-8TC                     | `192.168.160.4`   |    10 |   3 |          — |            1 | **SUCCESS** |                  4 | —                  |
| 115 | [[#Unnamed-Switch-192.168.160.17]]         | Not reported                          | `192.168.160.17`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |
| 116 | [[#Unnamed-Switch-192.168.160.68]]         | Not reported                          | `192.168.160.68`  |     — |   — |          — |            — | **FAILED**  |                  0 | —                  |

### Switch-to-Switch Links

| Link | End A | End B | Media | Seen By |
|---|---|---|---|---|
| L01 | [[#IND-SW-CCL1PLCC]] `GigabitEthernet1/1` | [[#IND-SW-CCL1DevRoom]] `GigabitEthernet1/0/28` | 1000baseX(FD) | CDP/LLDP |
| L02 | [[#IND-SW-CCL1_PLC_B]] `GigabitEthernet1/2` | [[#IND-SW-CCL1DevRoom]] `GigabitEthernet1/0/26` | 1000baseX(FD) | CDP/LLDP |
| L03 | [[#IND-SW-CCL1_PLC_B]] `GigabitEthernet1/1` | [[#IND-SW-CCL1PLCC]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L04 | [[#IND-SW-CCL1_PLC_B]] `FastEthernet2/1` | [[#IND-SW_CCL1OS4]] `GigabitEthernet1/1` | MAU type 21 | CDP/LLDP |
| L05 | [[#IND-SW-CCL_CESS]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_CCLServiceTunnel]] `GigabitEthernet1/1` | Not reported | CDP |
| L06 | [[#IND-SW-CD-BulkWaterTank]] `GigabitEthernet1/1` | [[#IND-SW-CD-Effluent]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L07 | [[#IND-SW-CD-Effluent]] `FastEthernet1/1` | [[#IND-SW-CD-Effluent_6A]] `FastEthernet1/1` | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L08 | [[#IND-SW-CD-Effluent]] `GigabitEthernet1/2` | [[#IND-SW-CD_WaterTowerMCC]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L09 | [[#IND-SW-CD-Effluent]] `GigabitEthernet1/2` | [[#IND-SW-CD_WaterTowerMCC]] `Gi1/2` | 1000baseX(FD) | LLDP |
| L10 | [[#IND-SW-CD-Effluent_6A_Control]] `GigabitEthernet0/2` | [[#IND-SW-CD_Sub5MCC]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L11 | [[#IND-SW-CD-PP_CTLSsub]] `Fa1/8` | [[#IND-SW-CD-PP_HSHTFsub]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L12 | [[#IND-SW-CD-PP_CTLSsub]] `GigabitEthernet1/2` | [[#IND-SW-CD-PP_HSHTFsub]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/CDP/LLDP |
| L13 | [[#IND-SW-CD-PP_Compressor]] `Te1/2` | [[#IND-SW-CD-PP_FurnaceMCC]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L14 | [[#IND-SW-CD-PP_Compressor]] `TenGigabitEthernet1/1` | [[#IND-SW-CD-PP_FurnaceMCC]] `GigabitEthernet1/2` | Not reported | CDP/CDP/LLDP |
| L15 | [[#IND-SW-CD-PP_Compressor]] `TenGigabitEthernet1/1` | [[#IND-SW-CD-PP_FurnaceMCC]] `Gi1/10` | 1000baseX(FD) | LLDP |
| L16 | [[#IND-SW-CD-PP_HSHTFsub]] `Gi1/1` | [[#IND-SW-CD-PP_Compressor]] `TenGigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L17 | [[#IND-SW-CD-PP_HSHTFsub]] `GigabitEthernet1/2` | [[#IND-SW-CD-PP_Compressor]] `TenGigabitEthernet1/2` | Not reported | CDP |
| L18 | [[#IND-SW-CD-PP_HSHTFsub]] `GigabitEthernet1/2` | [[#IND-SW-CD-PP_Compressor]] `Gi1/5` | 1000baseX(FD) | LLDP |
| L19 | [[#IND-SW-CD-Sub6A]] `Gi1/2` | [[#IND-SW-CD-Effluent_6A]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L20 | [[#IND-SW-CD-Sub6A]] `GigabitEthernet1/1` | [[#IND-SW-CD-Effluent_6A]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L21 | [[#IND-SW-CD-Sub6A]] `Fa1/7` | [[#IND-SW-CD_Sub5MCC]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L22 | [[#IND-SW-CD-Sub6A]] `GigabitEthernet1/2` | [[#IND-SW-CD_Sub5MCC]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L23 | [[#IND-SW-CD_A19]] `Gi1/0/25` | [[#IND-SW-CDRF_ScalperPiller42]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L24 | [[#IND-SW-CD_A19]] `GigabitEthernet1/0/26` | [[#IND-SW-CDRF_ScalperPiller42]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L25 | [[#IND-SW-CD_CoolingTower]] `GigabitEthernet1/1` | [[#IND-SW-CD_WaterTowerMCC]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/CDP/LLDP |
| L26 | [[#IND-SW-CD_CoolingTower]] `GigabitEthernet1/1` | [[#IND-SW-CD_WaterTowerMCC]] `Fa1/8` | 1000baseX(FD) | LLDP |
| L27 | [[#IND-SW-CD_HFM]] `GigabitEthernet1/2` | [[#IND-SW-CD-Sub3A]] `GigabitEthernet1/2` | Not reported | CDP |
| L28 | [[#IND-SW-CD_SubStation1]] `Gi1/1` | [[#IND-SW-CD_A19]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L29 | [[#IND-SW-CD_SubStation1]] `GigabitEthernet1/2` | [[#IND-SW-CD_A19]] `GigabitEthernet1/0/25` | Not reported | CDP/CDP/LLDP |
| L30 | [[#IND-SW-CD_SubStation1]] `GigabitEthernet1/2` | [[#IND-SW-CD_A19]] `Gi1/0/4` | 1000baseX(FD) | LLDP |
| L31 | [[#IND-SW-CD_SubStation1]] `Fa1/6` | [[#IND-SW-CD_SubStation4]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L32 | [[#IND-SW-CD_SubStation1]] `GigabitEthernet1/1` | [[#IND-SW-CD_SubStation4]] `GigabitEthernet1/2` | Not reported | CDP |
| L33 | [[#IND-SW-CD_SubStation1]] `GigabitEthernet1/1` | [[#IND-SW-CD_SubStation4]] `Fa1/4` | 1000baseX(FD) | LLDP |
| L34 | [[#IND-SW-Dept34_Distr]] `GigabitEthernet1/0/24` | [[#IND-SW-EDNL_Dept34_PTTL]] `GigabitEthernet1/0/28` | Not reported | CDP/CDP/LLDP |
| L35 | [[#IND-SW-Dept34_Distr]] `GigabitEthernet1/0/24` | [[#IND-SW-EDNL_Dept34_PTTL]] `Gi1/0/25` | 1000baseT(FD) | LLDP |
| L36 | [[#IND-SW-Dept34_Distr]] `Te1/0/27` | [[#IND-SW-EDNL_Dept34_PTTL]] `GigabitEthernet1/0/28` | 1000baseX(FD) | LLDP |
| L37 | [[#IND-SW-EDNL-CM-Crane]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_S4CoolingTowers]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L38 | [[#IND-SW-EDNL-SL7Oper]] `GigabitEthernet1/3` | [[#IND-SW-SL7Mcc]] `GigabitEthernet1/8` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/CDP/LLDP |
| L39 | [[#IND-SW-EDNL-SL7Oper]] `GigabitEthernet1/3` | [[#IND-SW-SL7Mcc]] `Gi1/4` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| L40 | [[#IND-SW-EDNL_A17ControlRoom]] `Gi1/1` | [[#IND-SW-EDNL_ExtcCoolingTowers]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L41 | [[#IND-SW-EDNL_A17ControlRoom]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_ExtcCoolingTowers]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L42 | [[#IND-SW-EDNL_A17ControlRoom]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_SL7]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L43 | [[#IND-SW-EDNL_AnnealingFurnace]] `GigabitEthernet1/0/26` | [[#IND-SW-EDNL_SubStationH]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L44 | [[#IND-SW-EDNL_CCLCNGGAS]] `Gi1/1` | [[#IND-SW-EDNL_WaterTowerSUB]] `GigabitEthernet1/1` | MAU type - not advertised | LLDP |
| L45 | [[#IND-SW-EDNL_CCLCNGGAS]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_WaterTowerSUB]] `GigabitEthernet1/1` | Not reported | CDP |
| L46 | [[#IND-SW-EDNL_CCLCNGGAS]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_WaterTowerSUB]] `Fa1/5` | MAU type - not advertised | LLDP |
| L47 | [[#IND-SW-EDNL_CCLServiceTunnel]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_CCLCNGGAS]] `GigabitEthernet1/1` | MAU type - not advertised | CDP/LLDP |
| L48 | [[#IND-SW-EDNL_CTLL5]] `Fa1/8` | [[#IND-SW-EDNL_Dept34_PTTL]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L49 | [[#IND-SW-EDNL_CTLL5]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_Dept34_PTTL]] `GigabitEthernet1/0/25` | Not reported | CDP/CDP/LLDP |
| L50 | [[#IND-SW-EDNL_CTLL5]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_Dept34_PTTL]] `Gi1/0/2` | 1000baseX(FD) | LLDP |
| L51 | [[#IND-SW-EDNL_CompHouse1]] `SFP-1GSXLC-T` | [[#IND-SW-EDNL_AnnealingFurnace]] `?` | MAU type - not advertised | LLDP |
| L52 | [[#IND-SW-EDNL_CompHouse2and3]] `Gi1/0/26` | [[#IND-SW-EDNL_CompHouse2&3_2ndSW]] `GigabitEthernet0/8` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| L53 | [[#IND-SW-EDNL_CompHouse2and3]] `GigabitEthernet1/0/24` | [[#IND-SW-EDNL_CompHouse2&3_2ndSW]] `GigabitEthernet0/8` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L54 | [[#IND-SW-EDNL_CompHouse2and3]] `Gi1/0/25` | [[#IND-SW-EDNL_CompHouse4]] `Trunk to IND-SW_Core1` | 1000baseX(FD) | LLDP |
| L55 | [[#IND-SW-EDNL_CompHouse2and3]] `GigabitEthernet1/0/26` | [[#IND-SW-EDNL_CompHouse4]] `GigabitEthernet1/2` | MAU type - not advertised | CDP/CDP/LLDP |
| L56 | [[#IND-SW-EDNL_CompHouse2and3]] `GigabitEthernet1/0/25` | [[#IND-SW-EDNL_SubStationE]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L57 | [[#IND-SW-EDNL_CompHouse4]] `Gi1/2` | [[#IND-SW-EDNL_AnnealingFurnace]] `Trunk to IND-SW-EDNL_Subk` | MAU type - not advertised | LLDP |
| L58 | [[#IND-SW-EDNL_CompHouse4]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_AnnealingFurnace]] `GigabitEthernet1/0/25` | 1000baseX(FD) | CDP/LLDP |
| L59 | [[#IND-SW-EDNL_ElectrciansWorkShop]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_SubStationG]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L60 | [[#IND-SW-EDNL_FoilAnnealingSubN]] `FastEthernet0/14` | [[#IND-SW-ENDL_SUBNMcc]] `FastEthernet1/8` | Not reported | CDP |
| L61 | [[#IND-SW-EDNL_FoilColingTowers]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_SubStationJ]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L62 | [[#IND-SW-EDNL_MainServerRoom]] `GigabitEthernet1/0/26` | [[#IND-SW-ENDL-INDServerRoom_Bottom]] `GigabitEthernet1/0/27` | Not reported | CDP |
| L63 | [[#IND-SW-EDNL_PTTL]] `Gi1/1` | [[#IND-SW-EDNL_Dept34_PTTL]] `GigabitEthernet1/0/26` | 1000baseX(FD) | LLDP |
| L64 | [[#IND-SW-EDNL_PTTL]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_Dept34_PTTL]] `GigabitEthernet1/0/26` | 1000baseX(FD) | CDP/LLDP |
| L65 | [[#IND-SW-EDNL_PTTL]] `FastEthernet1/8` | [[#IND-SW-EDNL_PTTL_PLC]] `GigabitEthernet1/1` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L66 | [[#IND-SW-EDNL_PTTL_PLC2]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_PTTL_PLC]] `GigabitEthernet1/2` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L67 | [[#IND-SW-EDNL_S4CoolingTowers]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_S5CoolingTowers]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L68 | [[#IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/3` | [[#IND-SW-CD_MainServerRoom]] `GigabitEthernet1/1` | MAU type - not advertised | CDP/LLDP |
| L69 | [[#IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/1` | [[#IND-SW-EDNL_S4GaugeCab]] `GigabitEthernet1/1` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L70 | [[#IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/1` | [[#IND-SW-EDNL_S4GaugeCab]] `Fa1/1` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| L71 | [[#IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/27` | [[#IND-SW-EDNL_S4PulPit]] `GigabitEthernet0/1` | Not reported | CDP |
| L72 | [[#IND-SW-EDNL_S5CoolingTowers]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_ExtcCoolingTowers]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L73 | [[#IND-SW-EDNL_S5CoolingTowers]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_ExtcCoolingTowers]] `Gi1/1` | 1000baseX(FD) | LLDP |
| L74 | [[#IND-SW-EDNL_S6MCCRoom]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SubStationK]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L75 | [[#IND-SW-EDNL_SL2]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_SL4]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/CDP/LLDP |
| L76 | [[#IND-SW-EDNL_SL2]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_SL4]] `Fa1/8` | 1000baseX(FD) | LLDP |
| L77 | [[#IND-SW-EDNL_SL4]] `Gi1/1` | [[#IND-SW-EDNL_SL5]] `IND-SW-EDNL_SL4` | 1000baseX(FD) | LLDP |
| L78 | [[#IND-SW-EDNL_SL4]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SL5]] `GigabitEthernet1/1` | Not reported | CDP |
| L79 | [[#IND-SW-EDNL_SL4]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SL5]] `Fa1/8` | 1000baseX(FD) | LLDP |
| L80 | [[#IND-SW-EDNL_SL5]] `Fa1/8` | [[#IND-SW-EDNL_PTTL]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L81 | [[#IND-SW-EDNL_SL5]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_PTTL]] `GigabitEthernet1/1` | Not reported | CDP |
| L82 | [[#IND-SW-EDNL_SL5]] `IND-SW-EDNL_PTTL` | [[#IND-SW-EDNL_PTTL]] `Fa1/8` | 1000baseX(FD) | LLDP |
| L83 | [[#IND-SW-EDNL_SL7]] `FastEthernet1/4` | [[#IND-SW-SL7Mcc]] `GigabitEthernet1/3` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L84 | [[#IND-SW-EDNL_SL7]] `FastEthernet1/4` | [[#IND-SW-SL7Mcc]] `Gi1/7` | 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | LLDP |
| L85 | [[#IND-SW-EDNL_SubStation1]] `GigabitEthernet1/2` | [[#IND-SW-EDNL-Dept34SubStation]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L86 | [[#IND-SW-EDNL_SubStationA]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SubStationB]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L87 | [[#IND-SW-EDNL_SubStationD]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_SubStationM]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L88 | [[#IND-SW-EDNL_SubStationH]] `Gi1/1` | [[#IND-SW-EDNL_SL6MCCRoom]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L89 | [[#IND-SW-EDNL_SubStationH]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SL6MCCRoom]] `GigabitEthernet1/2` | Not reported | CDP |
| L90 | [[#IND-SW-EDNL_SubStationH]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SL6MCCRoom]] `Fa1/4` | 1000baseX(FD) | LLDP |
| L91 | [[#IND-SW-EDNL_SubStationK]] `Gi1/1` | [[#IND-SW-EDNL_SL6MCCRoom]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L92 | [[#IND-SW-EDNL_SubStationK]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SL6MCCRoom]] `GigabitEthernet1/1` | Not reported | CDP |
| L93 | [[#IND-SW-EDNL_SubStationK]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SL6MCCRoom]] `Gi1/2` | 1000baseX(FD) | LLDP |
| L94 | [[#IND-SW-EDNL_SubStationN]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SubStationD]] `GigabitEthernet1/2` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L95 | [[#IND-SW-EDNL_SubStationN]] `Gi1/2` | [[#IND-SW-EDNL_SubStationG]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L96 | [[#IND-SW-EDNL_SubStationN]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_SubStationG]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L97 | [[#IND-SW-EDNL_TLL]] `Gi1/2` | [[#IND-SW-EDNL_Dept34_PTTL]] `GigabitEthernet1/0/27` | 1000baseX(FD) | LLDP |
| L98 | [[#IND-SW-EDNL_TLL]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_Dept34_PTTL]] `GigabitEthernet1/0/27` | Not reported | CDP/CDP/LLDP |
| L99 | [[#IND-SW-EDNL_TLL]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_Dept34_PTTL]] `Gi1/0/2` | 1000baseX(FD) | LLDP |
| L100 | [[#IND-SW-EDNL_TLL]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SL7]] `GigabitEthernet1/1` | 1000baseX(FD) | CDP/LLDP |
| L101 | [[#IND-SW_CCL1OS5]] `GigabitEthernet1/1` | [[#IND-SW_CCL1OS9]] `GigabitEthernet1/2` | MAU type 21 | CDP/LLDP |
| L102 | [[#IND-SW_CCL1OS6]] `Gi1/1` | [[#IND-SW_CCL1OS4]] `Gi1/2` | 1000baseX(FD) | LLDP |
| L103 | [[#IND-SW_CCL1OS6]] `GigabitEthernet1/1` | [[#IND-SW_CCL1OS4]] `?` | 1000baseX(FD) | LLDP |
| L104 | [[#IND-SW_CCL1OS9]] `GigabitEthernet1/1` | [[#IND-SW-CCL1PLCC]] `FastEthernet2/1` | MAU type 21 | CDP/LLDP |
| L105 | [[#IND-SW_CCL2Coater_Bottom]] `GigabitEthernet1/1` | [[#IND-SW_CCL2_OS1]] `GigabitEthernet1/0/26` | 1000baseX(FD) | CDP/LLDP |
| L106 | [[#IND-SW_CCL2_CompRoom]] `GigabitEthernet1/0/50` | [[#IND-SW-CCL_CESS]] `GigabitEthernet1/1` | Not reported | CDP |
| L107 | [[#IND-SW_CCL2_DC_L]] `GigabitEthernet1/1` | [[#IND-SW_CCL2_CompRoom]] `GigabitEthernet1/0/12` | 1000baseT(FD), 100base-TX(FD), 100base-TX(HD), 10base-T(FD), 10base-T(HD) | CDP/LLDP |
| L108 | [[#IND-SW_CCL2_OS1]] `GigabitEthernet1/0/27` | [[#IND-SW_CCL2_CompRoom]] `GigabitEthernet1/0/51` | 1000baseX(FD) | CDP/LLDP |
| L109 | [[#Unclassified-192.168.160.105]] `GigabitEthernet0/11` | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/7` | Not reported | CDP |
| L110 | [[#Unclassified-192.168.160.105]] `GigabitEthernet0/11` | [[#Unclassified-192.168.160.110]] `Twe2/0/48` | 1000baseX(FD) | LLDP |
| L111 | [[#Unclassified-192.168.160.106]] `GigabitEthernet1/1` | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/13` | Not reported | CDP |
| L112 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/21` | [[#IND-SW-CD-Effluent_6A]] `GigabitEthernet1/2` | Not reported | CDP |
| L113 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/20` | [[#IND-SW-CD-PP_CTLSsub]] `GigabitEthernet1/1` | Not reported | CDP |
| L114 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/18` | [[#IND-SW-CD-PP_PF4]] `GigabitEthernet1/1` | Not reported | CDP |
| L115 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/35` | [[#IND-SW-CDHL_CoolingTowers]] `GigabitEthernet1/1` | Not reported | CDP |
| L116 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/14` | [[#IND-SW-CD_A19]] `GigabitEthernet1/0/27` | Not reported | CDP |
| L117 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/29` | [[#IND-SW-CD_CompHouse5]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L118 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/37` | [[#IND-SW-CD_CoolingTower]] `GigabitEthernet1/2` | Not reported | CDP |
| L119 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/17` | [[#IND-SW-CD_HFM]] `GigabitEthernet1/1` | Not reported | CDP |
| L120 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/19` | [[#IND-SW-CD_HRM]] `GigabitEthernet1/1` | Not reported | CDP |
| L121 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/15` | [[#IND-SW-CD_SubStation2]] `GigabitEthernet1/1` | Not reported | CDP |
| L122 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/31` | [[#IND-SW-CD_SubStation4]] `GigabitEthernet1/1` | Not reported | CDP |
| L123 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/41` | [[#IND-SW-CD_UBC]] `GigabitEthernet1/1` | Not reported | CDP |
| L124 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE1/0/45` | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/45` | Not reported | CDP |
| L125 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/25` | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/9` | Not reported | CDP |
| L126 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/45` | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/45` | Not reported | CDP |
| L127 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/9` | [[#Unclassified-192.168.160.120]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L128 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/7` | [[#Unclassified-192.168.160.123]] `TenGigabitEthernet1/1` | Not reported | CDP |
| L129 | [[#Unclassified-192.168.160.107]] `TwentyFiveGigE2/0/27` | [[#Unclassified-192.168.160.128]] `GigabitEthernet1/1` | Not reported | CDP |
| L130 | [[#Unclassified-192.168.160.110]] `Twe1/0/11` | [[#IND-SW-CCL1DevRoom]] `GigabitEthernet1/0/27` | 1000baseX(FD) | LLDP |
| L131 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/14` | [[#IND-SW-CCL1DevRoom]] `GigabitEthernet1/0/27` | Not reported | CDP |
| L132 | [[#Unclassified-192.168.160.110]] `Twe1/0/5` | [[#IND-SW-Dept34_Distr]] `TenGigabitEthernet1/0/27` | 1000baseT(FD) | LLDP |
| L133 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/21` | [[#IND-SW-Dept34_Distr]] `TenGigabitEthernet1/0/27` | Not reported | CDP |
| L134 | [[#Unclassified-192.168.160.110]] `Twe1/0/43` | [[#IND-SW-EDNL_AdminMCC]] `Trunk to IND-SW-Core_MainServerRoom` | 1000baseX(FD) | LLDP |
| L135 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/1` | [[#IND-SW-EDNL_AdminMCC]] `GigabitEthernet1/1` | Not reported | CDP |
| L136 | [[#Unclassified-192.168.160.110]] `Twe1/0/7` | [[#IND-SW-EDNL_EffluentPlant]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L137 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/6` | [[#IND-SW-EDNL_EffluentPlant]] `GigabitEthernet1/1` | Not reported | CDP |
| L138 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/10` | [[#IND-SW-EDNL_ElectrciansWorkShop]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L139 | [[#Unclassified-192.168.160.110]] `Twe2/0/20` | [[#IND-SW-EDNL_FoilColingTowers]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L140 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/2` | [[#IND-SW-EDNL_FoilColingTowers]] `GigabitEthernet1/2` | Not reported | CDP |
| L141 | [[#Unclassified-192.168.160.110]] `Twe2/0/32` | [[#IND-SW-EDNL_GeneratorSub]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L142 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/5` | [[#IND-SW-EDNL_GeneratorSub]] `GigabitEthernet1/2` | Not reported | CDP |
| L143 | [[#Unclassified-192.168.160.110]] `Twe2/0/19` | [[#IND-SW-EDNL_MainServerRoom]] `GigabitEthernet1/0/28` | 1000baseX(FD) | LLDP |
| L144 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/9` | [[#IND-SW-EDNL_MainServerRoom]] `GigabitEthernet1/0/28` | Not reported | CDP |
| L145 | [[#Unclassified-192.168.160.110]] `Twe1/0/20` | [[#IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L146 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/3` | [[#IND-SW-EDNL_S4SMCCRoomBottom]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L147 | [[#Unclassified-192.168.160.110]] `Twe1/0/1` | [[#IND-SW-EDNL_S6MCCRoom]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L148 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/5` | [[#IND-SW-EDNL_S6MCCRoom]] `GigabitEthernet1/1` | Not reported | CDP |
| L149 | [[#Unclassified-192.168.160.110]] `Twe1/0/27` | [[#IND-SW-EDNL_SubStation1]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L150 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/4` | [[#IND-SW-EDNL_SubStation1]] `GigabitEthernet1/1` | Not reported | CDP |
| L151 | [[#Unclassified-192.168.160.110]] `Twe2/0/20` | [[#IND-SW-EDNL_SubStationA]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L152 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/1` | [[#IND-SW-EDNL_SubStationA]] `GigabitEthernet1/1` | Not reported | CDP |
| L153 | [[#Unclassified-192.168.160.110]] `Twe2/0/2` | [[#IND-SW-ENDL_SUBNMcc]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L154 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/3` | [[#IND-SW-ENDL_SUBNMcc]] `GigabitEthernet1/2` | Not reported | CDP |
| L155 | [[#Unclassified-192.168.160.110]] `Twe1/0/30` | [[#IND-SW_CCL2_CompRoom]] `GigabitEthernet1/0/49` | 1000baseX(FD) | LLDP |
| L156 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/10` | [[#IND-SW_CCL2_CompRoom]] `GigabitEthernet1/0/49` | Not reported | CDP |
| L157 | [[#Unclassified-192.168.160.110]] `Twe2/0/19` | [[#IND-SW_CCL2_OS1]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L158 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/12` | [[#IND-SW_CCL2_OS1]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L159 | [[#Unclassified-192.168.160.110]] `Twe2/0/1` | [[#IND-SW_FS14MCC]] `TenGigabitEthernet1/1/1` | 1000baseT(FD) | LLDP |
| L160 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/2` | [[#IND-SW_FS14MCC]] `TenGigabitEthernet1/1/1` | Not reported | CDP |
| L161 | [[#Unclassified-192.168.160.110]] `Twe2/0/10` | [[#IND-SW_FS15MCC]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L162 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE2/0/6` | [[#IND-SW_FS15MCC]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L163 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/8` | [[#Unclassified-192.168.160.115]] `GigabitEthernet0/2` | Not reported | CDP |
| L164 | [[#Unclassified-192.168.160.110]] `Twe2/0/5` | [[#Unclassified-192.168.160.121]] `GigabitEthernet1/1` | 1000baseX(FD) | LLDP |
| L165 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/27` | [[#Unclassified-192.168.160.121]] `GigabitEthernet1/1` | Not reported | CDP |
| L166 | [[#Unclassified-192.168.160.110]] `Twe1/0/3` | [[#Unclassified-192.168.160.127]] `GigabitEthernet1/0/25` | 1000baseX(FD) | LLDP |
| L167 | [[#Unclassified-192.168.160.110]] `TwentyFiveGigE1/0/11` | [[#Unclassified-192.168.160.127]] `GigabitEthernet1/0/25` | Not reported | CDP |
| L168 | [[#Unclassified-192.168.160.114]] `Gi1/4` | [[#IND-SW-CD_HRM]] `GigabitEthernet1/2` | 1000baseX(FD) | LLDP |
| L169 | [[#Unclassified-192.168.160.114]] `GigabitEthernet1/1` | [[#IND-SW-CD_HRM]] `GigabitEthernet1/2` | Not reported | CDP/CDP/LLDP |
| L170 | [[#Unclassified-192.168.160.114]] `GigabitEthernet1/1` | [[#IND-SW-CD_HRM]] `Gi1/5` | 1000baseT(FD) | LLDP |
| L171 | [[#Unclassified-192.168.160.116]] `GigabitEthernet1/2` | [[#IND-SW-EDNL_SubStationM]] `GigabitEthernet1/1` | Not reported | CDP |
| L172 | [[#Unclassified-192.168.160.123]] `TenGigabitEthernet1/2` | [[#IND-SW-CD_TRCMCC]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L173 | [[#Unclassified-192.168.160.4]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_SubStationE]] `GigabitEthernet1/2` | 1000baseX(FD) | CDP/LLDP |
| L174 | [[#Unclassified-192.168.160.4]] `GigabitEthernet1/1` | [[#IND-SW-EDNL_SubStationE]] `Gi1/1` | 1000baseX(FD) | LLDP |

### Collection Summary

- Command groups selected: neighbors, vlans, interfaces, system
- Custom read-only commands: None
- Switches collected: 103 / 116
- Switches unreachable/failed: 13
- Switches skipped (no matching selected commands): 0

---


## Per-switch topology documents

Each of the 98 switch records has a companion `01-topology_and_connections.md` in the same cluster folder. These are switch-local views; consult the cluster overview for relationships across multiple switches. The documents preserve discovery evidence and explicitly distinguish unidentified active ports from confirmed neighbours.
