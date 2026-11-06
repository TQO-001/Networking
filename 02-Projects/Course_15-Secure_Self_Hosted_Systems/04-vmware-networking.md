# 04 — VMware guest networking and segmentation

## Design the path before configuring the guest

A guest virtual NIC attached to a [port group](00-glossarick.md#port-group) inherits the reachability intended for that virtual network. Choose a lab [port group](00-glossarick.md#port-group) whose policies match the intended flows. Do not attach a lab VM to a management, server, or [OT](00-glossarick.md#operational-technology-ot) [port group](00-glossarick.md#port-group) merely because it provides connectivity.

```text
HPE ProLiant physical NIC(s)
          |
   VMware virtual switch
          |
   +------+------------------+
   |                         |
Management port group    Lab port group
(host administration)    (course guest only)
   |                         |
Admin workstation        Course 15 VM
```

## Network policy matrix

| Initiator | Destination | Protocol/port | Default decision |
|---|---|---|---|
| Admin workstation | [Hypervisor](00-glossarick.md#hypervisor) management | Required vendor admin protocols | Allow only from admin [subnet](00-glossarick.md#subnet) and approved identities |
| Guest VM | Approved [DNS](00-glossarick.md#dns) resolver | UDP/TCP 53 as designed | Allow to named resolver only |
| Guest VM | Approved OS/package registries | [HTTPS](00-glossarick.md#https) TCP 443 | Allow only under the site's egress policy |
| Tunnel connector (lab only) | Gateway service over approved egress | Documented connector transport | Conditional; require owner approval |
| Remote user | Guest IP | TCP 3000 | Deny; use the selected access gateway |
| Remote user | Database port 5432 | TCP 5432 | Deny |
| App [container](00-glossarick.md#container) | Database [container](00-glossarick.md#container) | TCP 5432 on private Compose network | Allow |
| App [container](00-glossarick.md#container) | Other lab/OT subnets | Any | Deny unless a reviewed requirement says otherwise |

These are design intents, not [firewall](00-glossarick.md#firewall) commands for an unknown environment. Apply them only through the approved network change process.

## Guest network checks

After guest provisioning, verify the assigned address and routes rather than assuming an address:

```bash
ip -brief address
ip route
resolvectl status 2>/dev/null || cat /etc/resolv.conf

# Show listening sockets and processes.
sudo ss -lntup
```

A route being present does not prove the path is allowed; a successful ping is not a substitute for testing the actual required service. Use approved test destinations and record expected versus observed behavior.

## DNS and naming

Use a domain you control for public lab access. For private access, use the organization's approved [DNS](00-glossarick.md#dns) plan. Avoid leaking internal hostnames in certificates, screenshots or public docs. Never create public [DNS](00-glossarick.md#dns) names that point directly at a corporate device without explicit [authorization](00-glossarick.md#authorization).

## Administration

Use the [hypervisor](00-glossarick.md#hypervisor) management plane for VM lifecycle operations, not as an application ingress route. Restrict guest [SSH](00-glossarick.md#ssh) to a dedicated management network or approved management gateway, use key-based [authentication](00-glossarick.md#authentication) where mandated, and disable unused services only after checking operational dependencies.

## Validation checklist

- [ ] Guest NIC is connected to the intended lab [port group](00-glossarick.md#port-group).
- [ ] Assigned address, routes and [DNS](00-glossarick.md#dns) servers match the approved plan.
- [ ] Management access works only from authorized sources.
- [ ] No application or database port is reachable from an untrusted network.
- [ ] Application egress is narrow and justified.
- [ ] The [rollback](00-glossarick.md#rollback) or snapshot plan has been verified.

## Glossarick references

[Virtual switch](00-glossarick.md#virtual-switch), [port group](00-glossarick.md#port-group), [VLAN](00-glossarick.md#vlan), [CIDR](00-glossarick.md#cidr), [DNS](00-glossarick.md#dns), [routing](00-glossarick.md#routing), [SSH](00-glossarick.md#ssh), and [network segmentation](00-glossarick.md#network-segmentation).
