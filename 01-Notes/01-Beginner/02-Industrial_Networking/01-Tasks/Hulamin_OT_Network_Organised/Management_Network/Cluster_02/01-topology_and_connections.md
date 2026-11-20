# Topology and Connections — Cluster_02

> Scope: Cluster_02 only. This is a provisional LLDP/CDP discovery group, not a confirmed department or physical area.
> Source: the SwitchScribe records stored alongside this document.
> Links below are included only when a discovered neighbour could be matched to another switch record in this same cluster.

## 1. Switch inventory

| Switch | Management IP | Reported model | Source record |
|---|---|---|---|
| CAMPS DRIFT REMELT BAILER (Ref Henri) | 192.168.160.50 | Not reported | [CAMPS_DRIFT_REMELT_BAILER_Ref_Henri.md](CAMPS_DRIFT_REMELT_BAILER_Ref_Henri.md) |

## 2. Discovered switch topology

No inter-switch link could be resolved between records inside this cluster from the collected neighbour tables. This may reflect incomplete discovery, one-sided neighbour visibility, or a group that contains independent switches.

## 3. Switch-to-switch link table

No confirmed in-cluster switch-to-switch links were resolved.

## 4. Neighbours outside this cluster and end devices

These are named neighbours that did not match a switch record in this cluster. They may be endpoints, switches documented elsewhere, or devices whose identity differs between records.

| Local switch | Local port | Neighbour | IP | Remote port | Platform | VLAN | Seen by |
|---|---|---|---|---|---|---|---|
| CAMPS DRIFT REMELT BAILER (Ref Henri) | — | No port or neighbour data was returned. | — | — | — | — | — |

## 5. Unresolved active ports

No unresolved active/VLAN port rows were identified.

## 6. Interpretation and verification

- LLDP/CDP observations are snapshots from the collection time; they do not independently prove cable routing, physical location, or business ownership.
- A neighbour that did not match a switch record in this cluster is deliberately left as an external neighbour; it has not been forced into this cluster.
- Do not interpret the cluster number as a department number. Confirm physical relationships with site walkdowns, switch configuration, and both ends of each uplink.
- Unknown active ports require MAC-table correlation or physical tracing before assigning an endpoint.

## 7. Source records

- [CAMPS_DRIFT_REMELT_BAILER_Ref_Henri.md](CAMPS_DRIFT_REMELT_BAILER_Ref_Henri.md)
