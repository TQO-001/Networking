# Network boundary method

[[00-management_networks_index|Index]] · [[01-network_overview|Network overview]]

## 1. Rule

1. Reconcile every CDP and LLDP record into physical links (both ends of the same cable become one link).
2. Identify the core / aggregation devices from the evidence (below).
3. Treat every link to a core as an **upstream boundary**: record it, do not include the core or anything beyond it.
4. A network is a distribution head plus everything reachable from it without crossing a core.
5. Keep uncertainty: a gap in the evidence lowers the confidence; it never changes the grouping silently.

## 2. Evidence that the two Unclassified switches are the core layer

| Evidence | 192.168.160.110 | 192.168.160.107 |
|---|---|---|
| Hardware | Twe1/0/x and Twe2/0/x (TwentyFiveGigE) plus Hu1/0/52 and Hu2/0/52: two C9500-class stack members | C9500-48Y4C advertised by neighbours |
| Switches that list it | 29 switches report `ind-Core1-MSR` | 17 report `IND-SW-CD-CORE` (including 110) |
| Connected to | Dept 34, 20 other switch groups, two Nexus 5672UP, ProLiant servers | 12 switches with CD-prefixed names and 4 unclassified switches |
| Any switch on both cores | No | No |
| Link between them | 3 links (110 to 107), cross-connected between stack members | same |

Roles are inferred from this evidence, not from IP addresses or neighbour counts alone. Both are therefore described as core / aggregation devices, not as departmental distribution switches. A departmental distribution switch has one department's switches below it; these devices have 35 separate groups below them (Dept 34 and 34 provisional networks).

## 3. Validation: Department 34

Applying the rule to the full link graph gives a Dept 34 group of 18 switches headed by `IND-SW-Dept34_Distr`, identical to the hand-documented Dept 34 (two switches carry different hostnames in the SwitchScribe report: `IND-SW-EDNL_ExtcCoolingTowers` and `IND-SW_EDNL_SL2`). The Dept 34 boundary was not changed.

## 4. Confidence

| Level | Meaning |
|---|---|
| High | Head uplink seen from both ends; every member collected; no loop or multiple heads |
| Medium | Boundary supported, with a gap: head uplink seen from one end only (core side not collected), a member not collected, multiple heads, or a loop |
| Low | Several of those gaps together |

Most CD-CORE networks are Medium because the core was not collected, so the core-side port number comes only from the neighbour.

## 5. CDP and LLDP disagreements

69 LLDP-only records name a different port from CDP for the same switch pair (largest source: the 110 core, 19). On the neighbour side the CDP port agrees with the core's CDP table, so CDP is treated as authoritative and the LLDP-only records are kept in each link table. Cause not confirmed: the LLDP "local interface" values do not appear to match the ports the same neighbours report (see [[02-core_identity_evidence]]).

## 6. Aliases

`IND-SW-S6` (192.168.126.12, as advertised in the core's CDP table) is matched to `Unclassified-192.168.160.122` because both use the same port pair (core `Twe2/0/13` to `Gi1/1/1`). The IP differs, so this is an inference by port pair.

## 7. What was not assumed

- No department, location, cable type or device role was invented.
- Hostname patterns are shown as hints only.
- A switch with a failed collection is described only from its neighbours' reports.
- Parallel links are reported as parallel links. They are not assumed to be an EtherChannel.
