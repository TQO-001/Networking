# Network_10_ENDL_SUBNMcc_Provisional

[[00-management_networks_index|All networks]] · [[01-network_overview|Network overview]] · [[03-open_questions_and_verification|Global open questions]]

> **Provisional grouping.** The name and the membership are inferred from CDP/LLDP evidence. No department has been confirmed.

| Field | Value |
|---|---|
| Provisional name | Network_10_ENDL_SUBNMcc_Provisional |
| Status | Inferred - not confirmed |
| Department / location | Unknown |
| Distribution switch | [[IND-SW-ENDL_SUBNMcc]] (192.168.160.102) |
| Switches | 2 (1 collected) |
| Upstream boundary | ind-Core1-MSR (probable identity of 192.168.160.110) |
| Confidence | Medium. Boundary is supported by the evidence below but has at least one gap (listed under Uncertainties). |
| Created from | SwitchScribe report of 2026-11-19 (see `_Source/`) |

## Why this is a separate network

- **Upstream boundary:** ind-Core1-MSR (probable identity of 192.168.160.110). The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.
- `IND-SW-ENDL_SUBNMcc` reaches the core on `Gi1/2` (core port `Twe1/0/3`), seen from both ends; source CDP.
- Removing the core layer from the link graph leaves this group of 2 switch(es) with **no link to any other network**: every other connection leaves via the core.
- Internal links: 1 between the 2 members.
- Hostnames give no location or department information that can be relied on.

## Uncertainties requiring physical verification

- member not fully collected
- not fully collected: IND-SW-EDNL_FoilAnnealingSubN
- 6 end device(s) unidentified (MAC/GUID only, or active port with no CDP/LLDP data)
- SwitchScribe model field disagrees with neighbour-advertised model on some members
- department and physical location unknown

## Contents

- [Topology and connections](01-topology_and_connections.md)
- [Switch inventory](02-switch_inventory.md)
- [Connected devices](03-connected_devices.md)
- [Open issues and questions](04-open_issues_and_questions.md)
- `Switches/` one note per switch

## Switches

- [[IND-SW-EDNL_FoilAnnealingSubN]] - access, 1 hop(s) from head, failed
- [[IND-SW-ENDL_SUBNMcc]] - distribution head, 0 hop(s) from head, success

## Progress

- [ ] CLI collected (1 of 2)
- [ ] Department confirmed
- [ ] Physical location recorded for every switch
- [ ] Photos taken
- [ ] End devices identified (0 named of 6 seen; 6 active ports have no CDP/LLDP data)
- [ ] Boundary verified physically

## Moving this folder

When the department is known, rename this folder and move it with everything inside. Links inside the folder are relative, and switch notes link by unique name, so nothing inside breaks. Only the entries for this network in [[01-network_overview]] need updating.
