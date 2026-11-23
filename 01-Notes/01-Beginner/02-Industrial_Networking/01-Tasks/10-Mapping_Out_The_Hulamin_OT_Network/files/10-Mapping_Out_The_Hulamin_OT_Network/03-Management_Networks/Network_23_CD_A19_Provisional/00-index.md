# Network_23_CD_A19_Provisional

[[00-management_networks_index|All networks]] · [[01-network_overview|Network overview]] · [[03-open_questions_and_verification|Global open questions]]

> **Provisional grouping.** The name and the membership are inferred from CDP/LLDP evidence. No department has been confirmed.

| Field | Value |
|---|---|
| Provisional name | Network_23_CD_A19_Provisional |
| Status | Inferred - not confirmed |
| Department / location | Unknown |
| Distribution switches | [[IND-SW-CD_A19]] (192.168.160.82), [[IND-SW-CD_SubStation4]] (192.168.160.52) |
| Switches | 4 (4 collected) |
| Upstream boundary | IND-SW-CD-CORE (192.168.160.107) |
| Confidence | Low. Several gaps in the evidence; treat the grouping as a working assumption until physically verified. |
| Created from | SwitchScribe report of 2026-11-19 (see `_Source/`) |

## Why this is a separate network

- **Upstream boundary:** IND-SW-CD-CORE (192.168.160.107). The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.
- `IND-SW-CD_A19` reaches the core on `Gi1/0/27` (core port `Twe2/0/14`), seen from one end only (the other end not collected / not reporting); source CDP.
- `IND-SW-CD_SubStation4` reaches the core on `Gi1/1` (core port `Twe2/0/31`), seen from one end only (the other end not collected / not reporting); source CDP.
- Removing the core layer from the link graph leaves this group of 4 switch(es) with **no link to any other network**: every other connection leaves via the core.
- Internal links: 3 between the 4 members.
- Hostnames give no location or department information that can be relied on.

## Uncertainties requiring physical verification

- IND-SW-CD_A19 uplink seen from one side only
- IND-SW-CD_SubStation4 uplink seen from one side only
- multiple heads (lateral link below the core)
- 15 end device(s) unidentified (MAC/GUID only, or active port with no CDP/LLDP data)
- SwitchScribe model field disagrees with neighbour-advertised model on some members
- department and physical location unknown

## Contents

- [Topology and connections](01-topology_and_connections.md)
- [Switch inventory](02-switch_inventory.md)
- [Connected devices](03-connected_devices.md)
- [Open issues and questions](04-open_issues_and_questions.md)
- `Switches/` one note per switch

## Switches

- [[IND-SW-CDRF_ScalperPiller42]] - access, 1 hop(s) from head, success
- [[IND-SW-CD_A19]] - distribution head, 0 hop(s) from head, success
- [[IND-SW-CD_SubStation1]] - access, 1 hop(s) from head, success
- [[IND-SW-CD_SubStation4]] - distribution head, 0 hop(s) from head, success

## Progress

- [x] CLI collected (4 of 4)
- [ ] Department confirmed
- [ ] Physical location recorded for every switch
- [ ] Photos taken
- [ ] End devices identified (9 named of 24 seen; 15 active ports have no CDP/LLDP data)
- [ ] Boundary verified physically

## Moving this folder

When the department is known, rename this folder and move it with everything inside. Links inside the folder are relative, and switch notes link by unique name, so nothing inside breaks. Only the entries for this network in [[01-network_overview]] need updating.
