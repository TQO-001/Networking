# Network_31_CD_UBC_Provisional

[[00-management_networks_index|All networks]] · [[01-network_overview|Network overview]] · [[03-open_questions_and_verification|Global open questions]]

> **Provisional grouping.** The name and the membership are inferred from CDP/LLDP evidence. No department has been confirmed.

| Field | Value |
|---|---|
| Provisional name | Network_31_CD_UBC_Provisional |
| Status | Inferred - not confirmed |
| Department / location | Unknown |
| Distribution switch | [[IND-SW-CD_UBC]] (192.168.160.89) |
| Switches | 1 (1 collected) |
| Upstream boundary | IND-SW-CD-CORE (192.168.160.107) |
| Confidence | Medium. Boundary is supported by the evidence below but has at least one gap (listed under Uncertainties). |
| Created from | SwitchScribe report of 2026-11-19 (see `_Source/`) |

## Why this is a separate network

- **Upstream boundary:** IND-SW-CD-CORE (192.168.160.107). The core layer is the network boundary. The connection to it is recorded as an upstream link; the core and everything beyond it are not part of this network.
- `IND-SW-CD_UBC` reaches the core on `Gi1/1` (core port `Twe2/0/41`), seen from one end only (the other end not collected / not reporting); source CDP.
- Removing the core layer from the link graph leaves this group of 1 switch(es) with **no link to any other network**: every other connection leaves via the core.
- Hostname pattern shared by the members: `CD, UBC` (**inferred only**, not a confirmed department or location).

## Uncertainties requiring physical verification

- IND-SW-CD_UBC uplink seen from one side only
- 5 end device(s) unidentified (MAC/GUID only, or active port with no CDP/LLDP data)
- department and physical location unknown

## Contents

- [Topology and connections](01-topology_and_connections.md)
- [Switch inventory](02-switch_inventory.md)
- [Connected devices](03-connected_devices.md)
- [Open issues and questions](04-open_issues_and_questions.md)
- `Switches/` one note per switch

## Switches

- [[IND-SW-CD_UBC]] - distribution head, 0 hop(s) from head, success

## Progress

- [x] CLI collected (1 of 1)
- [ ] Department confirmed
- [ ] Physical location recorded for every switch
- [ ] Photos taken
- [ ] End devices identified (0 named of 5 seen; 5 active ports have no CDP/LLDP data)
- [ ] Boundary verified physically

## Moving this folder

When the department is known, rename this folder and move it with everything inside. Links inside the folder are relative, and switch notes link by unique name, so nothing inside breaks. Only the entries for this network in [[01-network_overview]] need updating.
