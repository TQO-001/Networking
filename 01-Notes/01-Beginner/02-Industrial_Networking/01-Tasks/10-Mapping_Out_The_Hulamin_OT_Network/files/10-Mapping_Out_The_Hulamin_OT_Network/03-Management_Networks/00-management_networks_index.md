# Management networks

[[01-network_overview|Network overview]] · [[02-network_boundary_method|Method]] · [[03-open_questions_and_verification|Open questions]]

Documentation of the management network, split into provisional networks. Source data: the SwitchScribe report of 2026-11-19 (116 switches: 102 collected, 1 partial, 13 failed).

## Where things are

| Folder / note | Contents |
|---|---|
| [[01-network_overview]] | Cores, the boundary table, how the networks attach |
| [[02-network_boundary_method]] | How the boundaries were decided and the evidence |
| [[03-open_questions_and_verification]] | All unresolved questions and verification tasks |
| `Core_Infrastructure/` | The two core devices, identity evidence, core topology |
| `Network_01` to `Network_34` | One folder per provisional network (index, topology, inventory, devices, issues, `Switches/`) |
| `Unplaced_Switches/` | 11 switches with no neighbour data |
| `_Source/` | The SwitchScribe report split into overview, summary, links, groups and per-switch source notes (unchanged evidence) |
| [[00-sl7_index]] | Department 34 (already documented, in `02-Dept_34/`) |

## Networks

| Network | Distribution switch | Switches | Confidence |
|---|---|---|---|
| [Network_01_EDNL_S6MCCRoom_Provisional](Network_01_EDNL_S6MCCRoom_Provisional/00-index.md) | EDNL_S6MCCRoom | 10 | High |
| [Network_02_CCL2_CompRoom_Provisional](Network_02_CCL2_CompRoom_Provisional/00-index.md) | CCL2_CompRoom, CCL2_OS1 | 8 | Medium |
| [Network_03_CCL1DevRoom_Provisional](Network_03_CCL1DevRoom_Provisional/00-index.md) | CCL1DevRoom | 7 | Medium |
| [Network_04_EDNL_ElectrciansWorkShop_Provisional](Network_04_EDNL_ElectrciansWorkShop_Provisional/00-index.md) | EDNL_ElectrciansWorkShop | 6 | High |
| [Network_05_EDNL_S4SMCCRoomBottom_Provisional](Network_05_EDNL_S4SMCCRoomBottom_Provisional/00-index.md) | EDNL_S4SMCCRoomBottom | 4 | Medium |
| [Network_06_EDNL_FoilColingTowers_Provisional](Network_06_EDNL_FoilColingTowers_Provisional/00-index.md) | EDNL_FoilColingTowers | 2 | High |
| [Network_07_EDNL_MainServerRoom_Provisional](Network_07_EDNL_MainServerRoom_Provisional/00-index.md) | EDNL_MainServerRoom, ENDL-INDServerRoom_Bottom | 2 | Medium |
| [Network_08_EDNL_SubStation1_Provisional](Network_08_EDNL_SubStation1_Provisional/00-index.md) | EDNL_SubStation1 | 2 | High |
| [Network_09_EDNL_SubStationA_Provisional](Network_09_EDNL_SubStationA_Provisional/00-index.md) | EDNL_SubStationA | 2 | High |
| [Network_10_ENDL_SUBNMcc_Provisional](Network_10_ENDL_SUBNMcc_Provisional/00-index.md) | ENDL_SUBNMcc | 2 | Medium |
| [Network_11_EDNL_AdminMCC_Provisional](Network_11_EDNL_AdminMCC_Provisional/00-index.md) | EDNL_AdminMCC | 1 | High |
| [Network_12_EDNL_EffluentPlant_Provisional](Network_12_EDNL_EffluentPlant_Provisional/00-index.md) | EDNL_EffluentPlant | 1 | High |
| [Network_13_EDNL_GeneratorSub_Provisional](Network_13_EDNL_GeneratorSub_Provisional/00-index.md) | EDNL_GeneratorSub | 1 | High |
| [Network_14_FS14MCC_Provisional](Network_14_FS14MCC_Provisional/00-index.md) | FS14MCC | 1 | High |
| [Network_15_FS15MCC_Provisional](Network_15_FS15MCC_Provisional/00-index.md) | FS15MCC | 1 | High |
| [Network_16_U160-105_Provisional](Network_16_U160-105_Provisional/00-index.md) | Unclassified-192.168.160.105 | 1 | High |
| [Network_17_U160-115_Provisional](Network_17_U160-115_Provisional/00-index.md) | Unclassified-192.168.160.115 | 1 | High |
| [Network_18_U160-121_Provisional](Network_18_U160-121_Provisional/00-index.md) | Unclassified-192.168.160.121 | 1 | High |
| [Network_19_U160-122_Provisional](Network_19_U160-122_Provisional/00-index.md) | Unclassified-192.168.160.122 | 1 | High |
| [Network_20_U160-127_Provisional](Network_20_U160-127_Provisional/00-index.md) | Unclassified-192.168.160.127 | 1 | High |
| [Network_21_CD-Effluent_6A_Provisional](Network_21_CD-Effluent_6A_Provisional/00-index.md) | CD-Effluent_6A, CD_CoolingTower | 8 | Low |
| [Network_22_CD-PP_CTLSsub_Provisional](Network_22_CD-PP_CTLSsub_Provisional/00-index.md) | CD-PP_CTLSsub | 4 | Medium |
| [Network_23_CD_A19_Provisional](Network_23_CD_A19_Provisional/00-index.md) | CD_A19, CD_SubStation4 | 4 | Low |
| [Network_24_CD_HFM_Provisional](Network_24_CD_HFM_Provisional/00-index.md) | CD_HFM | 2 | Medium |
| [Network_25_CD_HRM_Provisional](Network_25_CD_HRM_Provisional/00-index.md) | CD_HRM | 2 | Medium |
| [Network_26_U160-123_Provisional](Network_26_U160-123_Provisional/00-index.md) | Unclassified-192.168.160.123 | 2 | Medium |
| [Network_27_CD-PP_PF4_Provisional](Network_27_CD-PP_PF4_Provisional/00-index.md) | CD-PP_PF4 | 1 | Medium |
| [Network_28_CDHL_CoolingTowers_Provisional](Network_28_CDHL_CoolingTowers_Provisional/00-index.md) | CDHL_CoolingTowers | 1 | Medium |
| [Network_29_CD_CompHouse5_Provisional](Network_29_CD_CompHouse5_Provisional/00-index.md) | CD_CompHouse5 | 1 | Medium |
| [Network_30_CD_SubStation2_Provisional](Network_30_CD_SubStation2_Provisional/00-index.md) | CD_SubStation2 | 1 | Medium |
| [Network_31_CD_UBC_Provisional](Network_31_CD_UBC_Provisional/00-index.md) | CD_UBC | 1 | Medium |
| [Network_32_U160-106_Provisional](Network_32_U160-106_Provisional/00-index.md) | Unclassified-192.168.160.106 | 1 | Medium |
| [Network_33_U160-120_Provisional](Network_33_U160-120_Provisional/00-index.md) | Unclassified-192.168.160.120 | 1 | Medium |
| [Network_34_U160-128_Provisional](Network_34_U160-128_Provisional/00-index.md) | Unclassified-192.168.160.128 | 1 | Medium |

## Progress

- [x] SwitchScribe run: 102 of 116 collected
- [x] Core layer identified (2 devices) and boundaries drawn
- [x] 34 provisional networks created with index, topology, inventory, devices and issues
- [x] Department 34 kept intact
- [ ] Departments confirmed (0 of 34)
- [ ] 14 switches captured by hand (see [[03-open_questions_and_verification]])
- [ ] 11 unplaced switches placed in a network
- [ ] Folders renamed and moved to departments as they are confirmed
