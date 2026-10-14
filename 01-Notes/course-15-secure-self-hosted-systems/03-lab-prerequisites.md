# 03 — Lab prerequisites, ownership, and inventory

## Preconditions

Do not begin by exposing a port. First confirm who owns every layer and whether you have permission to administer it.

- You have administrator permission for the HPE ProLiant host, [VMware](00-glossarick.md#vmware) platform, guest OS and lab network.
- The lab has no route to production [OT](00-glossarick.md#operational-technology-ot) or business systems unless that connectivity is deliberately approved and required.
- You have a recovery point or documented rebuild procedure before changes.
- You know the assigned [subnet](00-glossarick.md#subnet), gateway, [DNS](00-glossarick.md#dns) resolver, permitted egress destinations and relevant [firewall](00-glossarick.md#firewall) owner.
- You can store backups somewhere other than the database's own [persistent volume](00-glossarick.md#persistent-volume).

<div class="callout callout-danger"><strong>Do not use production [OT](00-glossarick.md#operational-technology-ot) devices as practice targets.</strong> Build and test with synthetic data in an isolated lab. Changes to industrial networks can create availability and safety consequences.</div>

## Example guest sizing

These are starting values for a small portfolio demo, not a vendor sizing guarantee.

| Resource | Lab baseline | Notes |
|---|---:|---|
| vCPU | 2 | Increase only after measuring CPU pressure |
| Memory | 4 GB | 2 GB may run a very small build but leaves little headroom |
| OS disk | 30–40 GB | Separate data/backups when requirements justify it |
| Guest OS | Supported Ubuntu Server LTS or equivalent | Apply security updates and track release support |
| NICs | 1 lab-facing [vNIC](00-glossarick.md#vnic) to start | Add a second only for a documented network design |
| App port | TCP 3000 inside the app network | Do not publish it to a public interface |
| [PostgreSQL](00-glossarick.md#postgresql) port | TCP 5432 inside the DB network | Never publish it to the public host interface |

## Inventory worksheet

| Item | Value to record |
|---|---|
| Physical server / asset identifier | Lab-owned identifier; redact from public posts if required |
| [Hypervisor](00-glossarick.md#hypervisor) version | Exact build and patch state |
| Guest name | Example: `vm-course15-app01` |
| Guest OS release | Exact release and kernel |
| VM NIC / [port group](00-glossarick.md#port-group) | Approved lab [port group](00-glossarick.md#port-group) |
| Guest IP and [subnet](00-glossarick.md#subnet) | Use assigned values, not guessed addresses |
| [DNS](00-glossarick.md#dns) name | A lab-controlled name or local-only hostname |
| Ingress method | Private [VPN](00-glossarick.md#vpn)/ZTNA or reviewed lab-only connector |
| [Identity provider](00-glossarick.md#identity-provider) / policy owner | Team or service, not a password/token |
| Backup target | Separate system or storage account |
| Recovery test date | Last verified restore |

## Preflight checks on Linux

```bash
# Record system identity and OS release.
hostnamectl
cat /etc/os-release
uname -r

# Check interfaces and assigned addresses.
ip -brief address
ip route

# Check storage and memory.
lsblk -f
df -h
free -h

# Review failed services before layering the app on top.
systemctl --failed
```

Do not paste unredacted outputs into a public portfolio: hostnames, internal IP ranges, usernames, serials and [DNS](00-glossarick.md#dns) suffixes may be sensitive.

## Acceptance gate

Proceed only when ownership, permissions, network boundaries, update path, backup destination and [rollback](00-glossarick.md#rollback) procedure are known. If any are unknown, resolve them with the system owner before making changes.

## Glossarick references

[VMware](00-glossarick.md#vmware), [virtual machine](00-glossarick.md#virtual-machine), [vNIC](00-glossarick.md#vnic), [CIDR](00-glossarick.md#cidr), [default gateway](00-glossarick.md#default-gateway), [DNS](00-glossarick.md#dns), [OT](00-glossarick.md#operational-technology-ot), and [rollback](00-glossarick.md#rollback).
