# Hulamin OT Network Documentation

## Start here
1. Open `Management_Network/README.md` for the 98-switch working index and LLDP/CDP discovery clusters.
2. Open `Management_Network/00-Network_Overview.md` for the original collection summary and switch-to-switch link inventory. Note that this source overview covers all 116 collected targets, including Department 34.
3. Open each `Management_Network/Cluster_NN/README.md` for the switches in that discovery group.
4. Use `Department_34.md` and `Department_34/` as the established example for department-level documentation.
5. Use `01-Documentation_Guide.md` when collecting additional approved switch information.

## Folder naming
`Cluster_01` through `Cluster_12` are neutral working names. They preserve the discovery tool's grouping without guessing department names. Rename or move a cluster only after its physical area and department are verified.

## Important verification items from the supplied conversation screenshot

- **T0247 address conflict:** the screenshot says the Holly Bibley export lists thin client T0247 as `192.168.193.111` on the MCC switch, while the Department 34 notes list `192.168.191.146` on the operating-desk switch. Both source references are retained as conflicting claims; neither is selected as correct.
- **JBA_PC / ESXi relationship:** the screenshot notes that JBA_PC reaches VMs by RDP to an ESXi host named `IND-SL7-ENG_Server`, suggesting JBA_PC may be a client rather than the VM host. Treat this as an observation requiring confirmation, not a settled topology fact.

## Source preservation
The original SwitchScribe export is retained unchanged in `_Source_Archive/`. The original conversation screenshot is also retained there.

## Data-quality caution
This is a documentation reorganisation, not a live validation of the OT network. Treat reported IPs, ports, neighbour relationships, device names and collection statuses as source data requiring operational verification before being used for changes or troubleshooting.
