# Issues and Discrepencies
![[Management_Switches 1.pdf]]

# Management Switches – Outstanding Items
## Overview
The purpose is to provide the OT Network Engineering team with a clear overview of outstanding naming discrepancies, management access limitations, devices requiring investigation, and devices that have not yet been classified.

**Visio mapping status:** A mapped device has already had its connectivity documented in Visio. This means its network connections and switch relationships are known and documented. A device marked as mapped but problematic should therefore be investigated using its existing topology diagram rather than unnecessarily recreated.

---

## Name mismatch
These are devices where the hostname and actual device name recorded in the register do not match.

|IP Address|Hostname|Actual Name|
|---|---|---|
|192.168.160.5|IND-SW-EDNL_CompHouse1|IND-SW-Comphouse1|
|192.168.160.18|IND-SW_CCL2Coater_Bottom|IND-SW-CCL2_entry|
|192.168.160.28|IND-SW-EDNL_GeneratorSub|IND-SW-EDNL_GenSub|
|192.168.160.40|IND-SW-EDNL_SubStationB|EDPowermeters|
|192.168.160.58|IND-SW-CD-Effluent|IND-SW-CD-EffluentPlant|
|192.168.160.76|IND-SW-CD_WaterTowerMCC|IND-SW-CD_WaterTower|
|192.168.160.78|IND-SW-CD-PP_CTLSsub|IND-SW-CD_CTLSsub|
|192.168.160.80|IND-SW-CD-PP_Compressor|IND-SW-CD-PP-Comp|
|192.168.160.81|IND-SW-CD-PP_FurnaceMCC|IND-SW-CD-PP-FurnaceMcc|
|192.168.160.82|IND-SW-CD_A19|IND-SW-CDHL_PLCRoom|
|192.168.160.94|IND-SW-CD-Effluent_6A_Control|IND-SW-CD-Sub6A_Control|
|192.168.160.101|IND-SW-EDNL_ExtcCoolingTowers|IND-SW-EDNL_EXTCOOLINGTOWER|
|192.168.160.102|IND-SW-ENDL_SUBNMcc|IND-SW-EDNL-SubNMCC|

### Required action: ✅ Done
- Verify the correct device name against the physical switch and its configuration.
- Establish which naming convention should be retained.
- Correct discrepancies in the relevant network documentation.
- Ensure the hostname and management register reflect the verified device name.

---

## Telnet only (no SSH)
These are devices identified in the register as using Telnet for management access rather than SSH.

|IP Address|Hostname / Actual Name|Details|
|---|---|---|
|192.168.160.33|IND-SW-EDNL_S4PulPit|Telnet|
|192.168.160.124|IND-SW-EDNL_PTTL_PLC2|Telnet|

### Additional device requiring verification

|IP Address|Actual Name|Details|
|---|---|---|
|192.168.160.123|IND-CD-SW-Sub7|Telnet / Unclassified|

The device at `192.168.160.123` is listed separately because it is also unclassified.

#### Required action: ℹ️ Request Permission
- Confirm the available management protocols on each device.
- Determine whether SSH is supported.
- Investigate why SSH is not available or enabled.
- Where supported and operationally approved, consider transitioning management access to SSH.
- Verify that any proposed changes are compatible with the requirements of the OT environment.

---

## Investigate
These are devices that have been identified as problematic, marked for investigation, or require additional attention.

The register's colour classification is retained here to distinguish between devices that are problematic and those that have already been mapped.

### Explicit investigation and attention flags

|IP Address|Hostname / Actual Name|Register Status|
|---|---|---|
|192.168.160.83|IND-SW-CD_A19PLC|Investigate|
|192.168.160.118|IND-SW-CCL2_Distr|Needs Attention|

Both devices should be investigated to establish the underlying issue and determine the appropriate corrective action.

#### Required action: ℹ️ Request Assistance
- Remind Lord Grace I to check these or assist in checking these

### Devices marked as not in use
The following named entries are also marked as not in use according to the register's colour legend. Their current operational status should be confirmed before they are excluded from further network documentation or investigations.

|IP Address|Hostname / Actual Name|Additional Details|
|---|---|---|
|192.168.160.2|IND-SW-EDNL_FM8&9|Register contains `192.168.8.x/24`|
|192.168.160.3|IND-SW-EDNL_ExtrusionsAirComp|Switch|
|192.168.160.17|Not recorded|Switch; hostname unavailable|
|192.168.160.34|IND-SW-EDNL_S4MCCRoomTop|Switch|
|192.168.160.46|IND-SW-CD_PlatePlantStrecher|Switch|
|192.168.160.50|CAMPS DRIFT REMELT BAILER|Reference: Henri|
|192.168.160.66|IND-SW-EDNL_FoilSepratorsSubN|Switch|
|192.168.160.67|IND-SW-EDNL_FoilAnnealingSubN|Switch|
|192.168.160.68|Not recorded|Switch; hostname unavailable|
|192.168.160.72|Dept34|Device description not recorded|
|192.168.160.83|IND-SW-CD_A19PLC|Also explicitly flagged for investigation|
|192.168.160.85|IND-SW-CD_CNGGas|Switch|
|192.168.160.88|IND-SW-EDIIT_Foiloffice|Switch|
|192.168.160.200|IND-TFTP_Server|Windows 10 VM|
|192.168.160.251–252|IND-SW-Core_MainServerRooom|Industrial server room switches|
|192.168.160.253–254|IND-SW_Core1 (Industrial Server Room)|Industrial server room switches|

#### Required action: ✅ Done
- For the ones that have previous records, mark them as decommissioned and for IP addresses without records, mark as blank and usable (remove all data)
---

## Unclassified
These are devices that have been identified in the management register but have not yet been fully classified.

Some of these devices have already been mapped in Visio. These should not automatically be considered unmapped simply because their classification is outstanding.

|IP Address|Device Name|Device Type|Current Status|
|---|---|---|---|
|192.168.160.105|IND-SW-EDNL-FM_CMPM|Switch|Unclassified|
|192.168.160.106|CDR_Water_Recovery-SW|Switch|Unclassified|
|192.168.160.107|IND-SW-CD-CORE|Switch|Unclassified|
|192.168.160.110|ind-Core1-MSR|Switch|Unclassified|
|192.168.160.112|IND-SW-SL7Mcc|Not specified|Mapped but Unclassified|
|192.168.160.114|IND_SW_CD_DieselDispenser|Switch|Unclassified|
|192.168.160.115|IND-SW-Creche|Switch|Unclassified|
|192.168.160.116|IND-SW-EDNL_CompH6|Switch|Unclassified|
|192.168.160.117|IND-SW-Dept34_Distr|Switch|Mapped but Unclassified|
|192.168.160.120|IND-SW-CDR-SVRM2|Switch|Unclassified|
|192.168.160.121|IND-SW-EDNL-Lab|Switch|Unclassified|
|192.168.160.122|IND-SW-S6|Switch|Unclassified|
|192.168.160.123|IND-CD-SW-Sub7|Switch|Telnet / Unclassified|
|192.168.160.125|IND-SWD01.plant.hulamin.co.za|VM|Unclassified|
|192.168.160.126|IND-SW-EDNL-CM-Crane|Switch|Mapped but Unclassified|
|192.168.160.127|IND-SW-EDNL-Lab1|Switch|Unclassified|
|192.168.160.128|IND-SW-CDHL-HRM-MARAS|Switch|Unclassified|
|192.168.160.250|ind-fweng1|VM|Unclassified|

### Required action : ✅ Done
- Update the management register and relevant network documentation.

---

## Documentation Notes
### Understanding mapping status
For this documentation, the following distinctions apply:

|Status|Meaning|
|---|---|
|Mapped|The device's network connectivity has been documented in Visio.|
|Unmapped|No completed Visio topology has been identified in the register.|
|Mapped but Unclassified|Its connectivity is documented, but its operational classification is outstanding.|
|Problematic and Mapped|Its connectivity is documented, but an issue still needs investigation.|

> [!tip] #### Autism For Evil
> Don't forget to add finished mappings of the switches here

### Important considerations
- The IP addresses and hostnames have been retained as recorded in the source register.
- Devices appearing under multiple headings have multiple outstanding concerns. This is intentional.
- Entries marked as not in use should have their operational status confirmed.
- Blank IP register entries without an identifiable device have not been included in the device tables.
- No device names or network relationships should be considered verified solely on the basis of this register.

The objective is to progressively resolve outstanding issues, establish the role of unidentified devices, and maintain accurate and up-to-date OT network documentation.