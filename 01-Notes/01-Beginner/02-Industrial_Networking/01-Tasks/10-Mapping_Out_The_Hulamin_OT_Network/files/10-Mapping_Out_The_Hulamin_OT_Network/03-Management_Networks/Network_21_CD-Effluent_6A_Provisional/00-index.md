# Network_21_CD-Effluent_6A_Provisional

[[00-management_networks_index|All networks]] · [[01-network_overview|Network overview]] · [[03-open_questions_and_verification|Global open questions]]

> **Provisional grouping.** The name and the membership are inferred from CDP/LLDP evidence. No department has been confirmed.

| Field | Value |
|---|---|
| Provisional name | Network_21_CD-Effluent_6A_Provisional |
| Status | Inferred - not confirmed |
| Department / location | Unknown |
| Distribution switches | [[IND-SW-CD-Effluent_6A]] (192.168.160.93), [[IND-SW-CD_CoolingTower]] (192.168.160.75) |
| Switches | 8 (8 collected) |
| Upstream boundary | IND-SW-CD-CORE (192.168.160.107) |
| Confidence | Low. Several gaps in the evidence; treat the grouping as a working assumption until physically verified. |
| Created from | SwitchScribe report of 2026-11-19 (see `_Source/`) |

## Why this is a separate network

- **Upstream boundary:** IND-SW-CD-CORE (192.168.160.107). The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.
- `IND-SW-CD-Effluent_6A` reaches the core on `Gi1/2` (core port `Twe2/0/21`), seen from one end only (the other end not collected / not reporting); source CDP.
- `IND-SW-CD_CoolingTower` reaches the core on `Gi1/2` (core port `Twe2/0/37`), seen from one end only (the other end not collected / not reporting); source CDP.
- Removing the core layer from the link graph leaves this group of 8 switch(es) with **no link to any other network**: every other connection leaves via the core.
- Internal links: 7 between the 8 members.
- Hostname pattern shared by the members: `CD` (**inferred only**, not a confirmed department or location).

## Uncertainties requiring physical verification

- IND-SW-CD-Effluent_6A uplink seen from one side only
- IND-SW-CD_CoolingTower uplink seen from one side only
- multiple heads (lateral link below the core)
- 22 end device(s) unidentified (MAC/GUID only, or active port with no CDP/LLDP data)
- SwitchScribe model field disagrees with neighbour-advertised model on some members
- department and physical location unknown

## Contents

- [Topology and connections](01-topology_and_connections.md)
- [Switch inventory](02-switch_inventory.md)
- [Connected devices](03-connected_devices.md)
- [Open issues and questions](04-open_issues_and_questions.md)
- `Switches/` one note per switch

## Switches

- [[IND-SW-CD-BulkWaterTank]] - access, 2 hop(s) from head, success
- [[IND-SW-CD-Effluent]] - access, 1 hop(s) from head, success
- [[IND-SW-CD-Effluent_6A]] - distribution head, 0 hop(s) from head, success
- [[IND-SW-CD-Effluent_6A_Control]] - access, 3 hop(s) from head, success
- [[IND-SW-CD-Sub6A]] - access, 1 hop(s) from head, success
- [[IND-SW-CD_CoolingTower]] - distribution head, 0 hop(s) from head, success
- [[IND-SW-CD_Sub5MCC]] - access, 2 hop(s) from head, success
- [[IND-SW-CD_WaterTowerMCC]] - access, 1 hop(s) from head, success

## Progress

- [x] CLI collected (8 of 8)
- [ ] Department confirmed
- [ ] Physical location recorded for every switch
- [ ] Photos taken
- [ ] End devices identified (6 named of 28 seen; 22 active ports have no CDP/LLDP data)
- [ ] Boundary verified physically

## Moving this folder

When the department is known, rename this folder and move it with everything inside. Links inside the folder are relative, and switch notes link by unique name, so nothing inside breaks. Only the entries for this network in [[01-network_overview]] need updating.
