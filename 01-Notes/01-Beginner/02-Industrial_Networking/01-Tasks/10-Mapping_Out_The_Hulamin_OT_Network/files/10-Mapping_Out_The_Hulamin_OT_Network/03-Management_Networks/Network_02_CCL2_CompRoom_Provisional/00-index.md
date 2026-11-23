# Network_02_CCL2_CompRoom_Provisional

[[00-management_networks_index|All networks]] · [[01-network_overview|Network overview]] · [[03-open_questions_and_verification|Global open questions]]

> **Provisional grouping.** The name and the membership are inferred from CDP/LLDP evidence. No department has been confirmed.

| Field | Value |
|---|---|
| Provisional name | Network_02_CCL2_CompRoom_Provisional |
| Status | Inferred - not confirmed |
| Department / location | Unknown |
| Distribution switches | [[IND-SW_CCL2_CompRoom]] (192.168.160.22), [[IND-SW_CCL2_OS1]] (192.168.160.21) |
| Switches | 8 (8 collected) |
| Upstream boundary | ind-Core1-MSR (probable identity of 192.168.160.110) |
| Confidence | Medium. Boundary is supported by the evidence below but has at least one gap (listed under Uncertainties). |
| Created from | SwitchScribe report of 2026-11-19 (see `_Source/`) |

## Why this is a separate network

- **Upstream boundary:** ind-Core1-MSR (probable identity of 192.168.160.110). The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.
- `IND-SW_CCL2_CompRoom` reaches the core on `Gi1/0/49` (core port `Twe2/0/10`), seen from both ends; source CDP+CDP/LLDP.
- `IND-SW_CCL2_OS1` reaches the core on `Gi1/0/25` (core port `Twe2/0/12`), seen from both ends; source CDP+CDP/LLDP.
- Removing the core layer from the link graph leaves this group of 8 switch(es) with **no link to any other network**: every other connection leaves via the core.
- Internal links: 7 between the 8 members.
- Hostnames give no location or department information that can be relied on.

## Uncertainties requiring physical verification

- multiple heads (lateral link below the core)
- 50 end device(s) unidentified (MAC/GUID only, or active port with no CDP/LLDP data)
- SwitchScribe model field disagrees with neighbour-advertised model on some members
- department and physical location unknown

## Contents

- [Topology and connections](01-topology_and_connections.md)
- [Switch inventory](02-switch_inventory.md)
- [Connected devices](03-connected_devices.md)
- [Open issues and questions](04-open_issues_and_questions.md)
- `Switches/` one note per switch

## Switches

- [[IND-SW-CCL_CESS]] - access, 1 hop(s) from head, success
- [[IND-SW-EDNL_CCLCNGGAS]] - access, 3 hop(s) from head, success
- [[IND-SW-EDNL_CCLServiceTunnel]] - access, 2 hop(s) from head, success
- [[IND-SW-EDNL_WaterTowerSUB]] - access, 4 hop(s) from head, success
- [[IND-SW_CCL2Coater_Bottom]] - access, 1 hop(s) from head, success
- [[IND-SW_CCL2_CompRoom]] - distribution head, 0 hop(s) from head, success
- [[IND-SW_CCL2_DC_L]] - access, 1 hop(s) from head, success
- [[IND-SW_CCL2_OS1]] - distribution head, 0 hop(s) from head, success

## Progress

- [x] CLI collected (8 of 8)
- [ ] Department confirmed
- [ ] Physical location recorded for every switch
- [ ] Photos taken
- [ ] End devices identified (7 named of 57 seen; 50 active ports have no CDP/LLDP data)
- [ ] Boundary verified physically

## Moving this folder

When the department is known, rename this folder and move it with everything inside. Links inside the folder are relative, and switch notes link by unique name, so nothing inside breaks. Only the entries for this network in [[01-network_overview]] need updating.
