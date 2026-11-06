# 02 — Reference architecture and trust boundaries

## Architecture decision

Use a dedicated application VM inside a lab or explicitly approved server environment. The host [hypervisor](00-glossarick.md#hypervisor) runs the guest; the guest runs [Docker Compose](00-glossarick.md#docker-compose). Keep management interfaces on a management path separate from user traffic. The database is on a private [container](00-glossarick.md#container) network and has no published host port. Compose network isolation does not, by itself, enforce destination-specific egress rules for the web [container](00-glossarick.md#container); use approved guest/host and upstream controls where those restrictions are required.

<div class="callout callout-warning"><strong>Corporate environment:</strong> do not attach a portfolio tunnel to a corporate VM or route it to corporate subnets unless the network/security owner has approved the specific design. A low-risk lab architecture is not automatically an approved corporate architecture.</div>

## Logical topology

```text
                 REMOTE USER
                      |
               HTTPS + identity
                      |
          +---------------------------+
          | Approved access gateway  |
          | VPN/ZTNA or lab Access    |
          +---------------------------+
                      |
          outbound-only connector (optional,
          lab-only unless explicitly approved)
                      |
================ TRUST BOUNDARY =================
                      |
          +---------------------------+
          | VMware guest: Linux VM    |
          |                           |
          |  +---------------------+  |
          |  | Next.js web + API   |  |
          |  | listens on 3000     |  |
          |  +----------+----------+  |
          |             | private     |
          |  +----------v----------+  |
          |  | PostgreSQL          |  |
          |  | no published port   |  |
          |  +---------------------+  |
          +---------------------------+
                      |
          +---------------------------+
          | Persistent data volume   |
          +---------------------------+
                      |
                 Encrypted backups
                 stored separately
```

## Data-flow table

| Flow | Source → destination | Allowed? | Control |
|---|---|---:|---|
| Browser → gateway | User device → identity gateway | Yes | [HTTPS](00-glossarick.md#https), identity policy, [MFA](00-glossarick.md#multi-factor-authentication), short sessions where supported |
| Connector → origin | Authorized connector → web service | Conditional | Outbound egress explicitly allowed; only the intended hostname/service route |
| Web → database | App [container](00-glossarick.md#container) → DB [container](00-glossarick.md#container) | Yes | Private network, database credentials, parameterized [SQL](00-glossarick.md#sql) |
| Internet → database | Internet → [PostgreSQL](00-glossarick.md#postgresql) | **No** | No published port; external [firewall](00-glossarick.md#firewall) policy should also deny it |
| User → [hypervisor](00-glossarick.md#hypervisor) admin UI | User device → management interface | **No by default** | Management-only network and administrator allow-list |
| Web app → arbitrary LAN [subnet](00-glossarick.md#subnet) | App [container](00-glossarick.md#container) → broader LAN | **No by default** | Narrow egress policy; do not route app traffic to unrelated subnets |

## Decision record

| Decision | Choice | Rationale | Revisit when |
|---|---|---|---|
| Deployable unit | One [Linux](00-glossarick.md#linux) guest VM | Clear operating-system boundary and snapshot/rebuild path | Resource limits or availability requirements change |
| App hosting | Compose on one host | Small system; transparent, repeatable deployment | Multi-host scheduling or high availability is required |
| Database | [PostgreSQL](00-glossarick.md#postgresql) in a separate [container](00-glossarick.md#container) | Durable relational storage; no direct public route | Managed database governance or resilience requirements change |
| [Authentication](00-glossarick.md#authentication) | Access gateway plus [JWT](00-glossarick.md#jwt) verification in app | Independent protection on page/API requests | Employer mandates a different identity control |
| Remote exposure | Private by default; optional approved tunnel | No inbound router/firewall change needed for tunnel, but egress/policy still matter | Security review authorizes an alternative |

## Failure boundaries

- **Host failure:** both web and database may be unavailable; restore on a rebuilt guest is required.
- **Database volume loss:** restore from a tested backup; [container image](00-glossarick.md#container-image) alone does not recover user data.
- **Gateway or identity failure:** access should [fail closed](00-glossarick.md#fail-closed) rather than bypass [authentication](00-glossarick.md#authentication).
- **Connector failure:** remote access is unavailable; local service remains private and should not be exposed through a fallback port.
- **Credential leak:** rotate affected credentials and assess access logs; do not merely recreate the [container](00-glossarick.md#container).

## Glossarick references

[Virtualization](00-glossarick.md#virtualization), [hypervisor](00-glossarick.md#hypervisor), [subnet](00-glossarick.md#subnet), [firewall](00-glossarick.md#firewall), [reverse proxy](00-glossarick.md#reverse-proxy), [network segmentation](00-glossarick.md#network-segmentation), [egress filtering](00-glossarick.md#egress-filtering), and [defense in depth](00-glossarick.md#defense-in-depth).
