# Topology and Connections — Cluster_10

> Scope: Cluster_10 only. This is a provisional LLDP/CDP discovery group, not a confirmed department or physical area.
> Source: the SwitchScribe records stored alongside this document.
> Links below are included only when a discovered neighbour could be matched to another switch record in this same cluster.

## 1. Switch inventory

| Switch | Management IP | Reported model | Source record |
|---|---|---|---|
| Unclassified-192.168.160.122 | 192.168.160.122 | cisco C9500-48Y4C | [Unclassified-192.168.160.122.md](Unclassified-192.168.160.122.md) |

## 2. Discovered switch topology

No inter-switch link could be resolved between records inside this cluster from the collected neighbour tables. This may reflect incomplete discovery, one-sided neighbour visibility, or a group that contains independent switches.

## 3. Switch-to-switch link table

No confirmed in-cluster switch-to-switch links were resolved.

## 4. Neighbours outside this cluster and end devices

These are named neighbours that did not match a switch record in this cluster. They may be endpoints, switches documented elsewhere, or devices whose identity differs between records.

| Local switch | Local port | Neighbour | IP | Remote port | Platform | VLAN | Seen by |
|---|---|---|---|---|---|---|---|
| Unclassified-192.168.160.122 | **GigabitEthernet1/0/3** | Unknown (not seen by CDP/LLDP) | — | — | — | — | — |
| Unclassified-192.168.160.122 | **GigabitEthernet1/1/1** | ind-Core1-MSR.plant.hulamin.co.za | 192.168.1.1 | TwentyFiveGigE2/0/13 | cisco C9500-48Y4C | — | CDP |

## 5. Unresolved active ports

These ports had state or VLAN information but no advertised neighbour identity.

| Switch | Local port | State | VLAN |
|---|---|---|---|
| Unclassified-192.168.160.122 | **Gi1/0/1** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/10** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/11** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/12** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/13** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/14** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/15** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/16** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/17** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/18** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/19** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/2** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/20** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/21** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/22** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/23** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/24** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/3** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/4** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/5** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/6** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/7** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/8** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/0/9** | Not reported | 526 IND-S6 |
| Unclassified-192.168.160.122 | **Gi1/1/2** | Not reported | 1 default |
| Unclassified-192.168.160.122 | **Gi1/1/3** | Not reported | 1 default |
| Unclassified-192.168.160.122 | **Gi1/1/4** | Not reported | 1 default |

## 6. Interpretation and verification

- LLDP/CDP observations are snapshots from the collection time; they do not independently prove cable routing, physical location, or business ownership.
- A neighbour that did not match a switch record in this cluster is deliberately left as an external neighbour; it has not been forced into this cluster.
- Do not interpret the cluster number as a department number. Confirm physical relationships with site walkdowns, switch configuration, and both ends of each uplink.
- Unknown active ports require MAC-table correlation or physical tracing before assigning an endpoint.

## 7. Source records

- [Unclassified-192.168.160.122.md](Unclassified-192.168.160.122.md)
