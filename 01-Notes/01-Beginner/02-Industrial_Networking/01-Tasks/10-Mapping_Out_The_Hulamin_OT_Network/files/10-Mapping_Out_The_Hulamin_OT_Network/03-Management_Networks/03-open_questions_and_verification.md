# Open questions and verification tasks

[[00-management_networks_index|Index]] · [[01-network_overview|Network overview]]

Everything unresolved across the management network. Per-network lists are in each network folder.

## 1. Core layer

- [ ] Confirm on the device that 192.168.160.110 is `ind-Core1-MSR` (`show running-config | include hostname`).
- [ ] Collect `IND-SW-CD-CORE` (192.168.160.107): enable-mode failure.
- [ ] `show etherchannel summary` on both cores: are the three 110-107 links one EtherChannel?
- [ ] Collect the two Nexus 5672UP switches (`SW-EDNL-MCompRoomN5K`, `SW-EDNL-ICompRoomN5K`).
- [ ] Explain why 110's LLDP local ports differ from its CDP ports (19 neighbours).

## 2. Network boundaries needing verification

- [ ] [[Network_02_CCL2_CompRoom_Provisional/00-index|Network_02]]: heads CCL2_CompRoom, CCL2_OS1 are linked to each other below the core. One network with two uplinks, or two networks?
- [ ] [[Network_07_EDNL_MainServerRoom_Provisional/00-index|Network_07]]: heads EDNL_MainServerRoom, ENDL-INDServerRoom_Bottom are linked to each other below the core. One network with two uplinks, or two networks?
- [ ] [[Network_21_CD-Effluent_6A_Provisional/00-index|Network_21]]: heads CD-Effluent_6A, CD_CoolingTower are linked to each other below the core. One network with two uplinks, or two networks?
- [ ] [[Network_23_CD_A19_Provisional/00-index|Network_23]]: heads CD_A19, CD_SubStation4 are linked to each other below the core. One network with two uplinks, or two networks?
- [ ] [[Network_03_CCL1DevRoom_Provisional/00-index|Network_03]]: the internal links form a ring. Confirm the ring protocol / spanning-tree configuration.
- [ ] `EDNL-Dept34SubStation` sits under `EDNL_SubStation1` (Network_08), not under Department 34, despite its name. Confirm physically.
- [ ] Every network: confirm the department and physical location.

## 3. Collection failures

Failed or partial switches are listed rather than excluded. Placed ones are inside their network; the rest are in [[Unplaced_Switches/00-index|Unplaced switches]].

- [ ] [[CAMPS DRIFT REMELT BAILER (Ref Henri)]] (192.168.160.50): failed, unplaced
- [ ] [[Dept34]] (192.168.160.72): failed, unplaced
- [ ] [[IND-SW-CD_A19PLC]] (192.168.160.83): failed, unplaced
- [ ] [[IND-SW-CD_CNGGas]] (192.168.160.85): failed, unplaced
- [ ] [[IND-SW-CD_PlatePlantStrecher]] (192.168.160.46): failed, unplaced
- [ ] [[IND-SW-EDIIT_Foiloffice]] (192.168.160.88): failed, unplaced
- [ ] [[IND-SW-EDNL_CompHouse1]] (192.168.160.5): failed, unplaced
- [ ] [[IND-SW-EDNL_FoilAnnealingSubN]] (192.168.160.67): failed, in Network_10
- [ ] [[IND-SW-EDNL_FoilSepratorsSubN]] (192.168.160.66): failed, unplaced
- [ ] [[IND-SW-EDNL_S4MCCRoomTop]] (192.168.160.34): failed, unplaced
- [ ] [[IND-SW-EDNL_S4PulPit]] (192.168.160.33): partial, in Network_05
- [ ] [[Unclassified-192.168.160.107]] (192.168.160.107): failed, core
- [ ] [[Unnamed Switch 192.168.160.17]] (192.168.160.17): failed, unplaced
- [ ] [[Unnamed Switch 192.168.160.68]] (192.168.160.68): failed, unplaced

## 4. Data quality

- [ ] 44 switches have a SwitchScribe model that disagrees with what neighbours advertise (16 show the core's `C9500-48Y4C`). Check the SwitchScribe model detection.
- [ ] 69 LLDP-only port records conflict with CDP; see [[02-network_boundary_method]].
- [ ] 408 active ports report no CDP/LLDP neighbour across the collected switches: devices unknown.

## 5. Carried over from Department 34

Full tables are in the Dept 34 notes (`09-open_issues_and_questions`, section added 2026-11). Both observations are kept; neither was chosen.

- [ ] **T0247** (operator thin client): 192.168.191.146 on `IND-SW-EDNL-SL7Oper` (room notes) versus 192.168.193.111 on `IND-SW-SL7Mcc` (Holly Bibley export).
- [ ] **VMware host vs IBA PC:** the physical ESXi host, the VMs and the IBA PC client are three different things in the evidence. See the Dept 34 note.
- [ ] Other Dept 34 items: conflicting interface numbers, unknown devices, unverified cable types and unconfirmed assignments are listed in `02-Dept_34/09-open_issues_and_questions`.
