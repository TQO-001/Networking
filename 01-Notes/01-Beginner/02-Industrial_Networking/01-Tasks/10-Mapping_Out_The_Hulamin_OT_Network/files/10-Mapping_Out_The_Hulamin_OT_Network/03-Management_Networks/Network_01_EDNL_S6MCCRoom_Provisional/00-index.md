# Network_01_EDNL_S6MCCRoom_Provisional

[[00-management_networks_index|All networks]] · [[01-network_overview|Network overview]] · [[03-open_questions_and_verification|Global open questions]]

> **Provisional grouping.** The name and the membership are inferred from CDP/LLDP evidence. No department has been confirmed.

| Field | Value |
|---|---|
| Provisional name | Network_01_EDNL_S6MCCRoom_Provisional |
| Status | Inferred - not confirmed |
| Department / location | Unknown |
| Distribution switch | [[IND-SW-EDNL_S6MCCRoom]] (192.168.160.61) |
| Switches | 10 (10 collected) |
| Upstream boundary | ind-Core1-MSR (probable identity of 192.168.160.110) |
| Confidence | High. Boundary and member links are confirmed from both ends and every member was collected. |
| Created from | SwitchScribe report of 2026-11-19 (see `_Source/`) |

## Why this is a separate network

- **Upstream boundary:** ind-Core1-MSR (probable identity of 192.168.160.110). The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.
- `IND-SW-EDNL_S6MCCRoom` reaches the core on `Gi1/1` (core port `Twe2/0/5`), seen from both ends; source CDP.
- Removing the core layer from the link graph leaves this group of 10 switch(es) with **no link to any other network**: every other connection leaves via the core.
- Internal links: 9 between the 10 members.
- Hostnames give no location or department information that can be relied on.

## Uncertainties requiring physical verification

- 56 end device(s) unidentified (MAC/GUID only, or active port with no CDP/LLDP data)
- SwitchScribe model field disagrees with neighbour-advertised model on some members
- department and physical location unknown

## Contents

- [Topology and connections](01-topology_and_connections.md)
- [Switch inventory](02-switch_inventory.md)
- [Connected devices](03-connected_devices.md)
- [Open issues and questions](04-open_issues_and_questions.md)
- `Switches/` one note per switch

## Switches

- [[IND-SW-EDNL_AnnealingFurnace]] - access, 4 hop(s) from head, success
- [[IND-SW-EDNL_CompHouse2&3_2ndSW]] - access, 7 hop(s) from head, success
- [[IND-SW-EDNL_CompHouse2and3]] - access, 6 hop(s) from head, success
- [[IND-SW-EDNL_CompHouse4]] - access, 5 hop(s) from head, success
- [[IND-SW-EDNL_S6MCCRoom]] - distribution head, 0 hop(s) from head, success
- [[IND-SW-EDNL_SL6MCCRoom]] - access, 2 hop(s) from head, success
- [[IND-SW-EDNL_SubStationE]] - access, 7 hop(s) from head, success
- [[IND-SW-EDNL_SubStationH]] - access, 3 hop(s) from head, success
- [[IND-SW-EDNL_SubStationK]] - access, 1 hop(s) from head, success
- [[Unclassified-192.168.160.4]] - access, 8 hop(s) from head, success

## Progress

- [x] CLI collected (10 of 10)
- [ ] Department confirmed
- [ ] Physical location recorded for every switch
- [ ] Photos taken
- [ ] End devices identified (0 named of 56 seen; 55 active ports have no CDP/LLDP data)
- [ ] Boundary verified physically

## Moving this folder

When the department is known, rename this folder and move it with everything inside. Links inside the folder are relative, and switch notes link by unique name, so nothing inside breaks. Only the entries for this network in [[01-network_overview]] need updating.
