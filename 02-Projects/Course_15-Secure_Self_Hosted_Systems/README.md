# Course 15 — Secure Self-Hosted Systems Engineering

<div class="course-hero">
  <p class="eyebrow">ADVANCED SYSTEMS ENGINEERING · PORTFOLIO COURSE</p>
  <h1>Deploy locally. Authenticate strictly. Operate responsibly.</h1>
  <p>Build, isolate, deploy, protect, monitor, and document a full-stack service running on virtualized infrastructure.</p>
</div>

<div class="grid grid-3">
  <div class="card"><h3>Infrastructure</h3><p>[VMware](00-glossarick.md#vmware), segmented networks, [Linux](00-glossarick.md#linux), containers, persistent data, backups.</p></div>
  <div class="card"><h3>Identity & access</h3><p>Explicit trust boundaries, allow-listing, [MFA](00-glossarick.md#multi-factor-authentication), signed identity assertions, denial by default.</p></div>
  <div class="card"><h3>Application engineering</h3><p>Next.js, React, a parameterized [API](00-glossarick.md#api), [PostgreSQL](00-glossarick.md#postgresql), validation, tests, operations.</p></div>
</div>

<div class="callout callout-warning"><strong>Scope and [authorization](00-glossarick.md#authorization).</strong> This course does not authorize access to corporate infrastructure or changes to corporate [firewall](00-glossarick.md#firewall) rules. Use a lab you control. Before connecting a tunnel, relay, [reverse proxy](00-glossarick.md#reverse-proxy), or remote-access service to an employer's network, obtain written approval from the network/security owner and use the organization's approved design. Never use the lab as a covert route around an access policy.</div>

## Start here

1. Read [01 — Course map](01-course-map.md) and [02 — Reference architecture](02-reference-architecture.md).
2. Check your hardware, [hypervisor](00-glossarick.md#hypervisor) and network boundary in [03 — Lab prerequisites](03-lab-prerequisites.md).
3. Build in order through the infrastructure documents, then implement the sample app in [09 — Task manager build](09-task-manager-build.md).
4. Keep foundational definitions in the [Glossarick](00-glossarick.md). Course documents link to Glossarick entries instead of repeating their definitions.
5. Complete the evidence-based exit criteria in [13 — Capstone and assessment](13-capstone-and-assessment.md).

## Repository layout

```text
course-15-secure-self-hosted-systems/
├── README.md
├── 00-glossarick.md
├── 01-course-map.md
├── 02-reference-architecture.md
├── 03-lab-prerequisites.md
├── 04-vmware-networking.md
├── 05-container-platform.md
├── 06-secure-access-and-tunneling.md
├── 07-identity-and-threat-model.md
├── 08-task-manager-spec.md
├── 09-task-manager-build.md
├── 10-postgres-and-backups.md
├── 11-observability-and-operations.md
├── 12-testing-and-hardening.md
├── 13-capstone-and-assessment.md
├── REFERENCES.md
├── task-manager/            # Starter project
└── theme/course.css         # Optional blog stylesheet
```

## Course objectives

By the end, you will be able to:

- Draw and defend a deployment topology with explicit trust boundaries.
- Create a [Linux](00-glossarick.md#linux) application VM and limit the paths into and out of it.
- Build and deploy a persistent full-stack service without publishing the database port.
- Require authenticated identities at the edge and verify signed access assertions in the application.
- Run repeatable database backups and perform a restore drill.
- Produce test results, threat assumptions, diagrams, runbooks and a professional portfolio write-up.

## Stack choices

| Layer | Course implementation | Reason |
|---|---|---|
| Frontend and [API](00-glossarick.md#api) | Next.js App Router + React, JavaScript | One deployable service with UI and [API](00-glossarick.md#api) routes |
| Persistence | [PostgreSQL](00-glossarick.md#postgresql) + `pg` driver | [SQL](00-glossarick.md#sql) is explicit; no ORM abstraction hides queries |
| Runtime | [Docker Compose](00-glossarick.md#docker-compose) on a [Linux](00-glossarick.md#linux) VM | Reproducible, single-host deployment |
| Remote access | Organization-approved [VPN](00-glossarick.md#vpn)/ZTNA; optional Cloudflare Tunnel in an isolated lab | Keep public ingress closed unless a reviewed design explicitly requires otherwise |
| App-level identity | Verified access [JWT](00-glossarick.md#jwt) assertion in production | [API](00-glossarick.md#api) endpoints perform their own identity check |
| Operations | [Container](00-glossarick.md#container) health checks, structured logs, backup/restore runbook | Make failure observable and recovery testable |

Version note: run `npm install` once, test the lockfile, and commit it. Use supported stable releases and review release notes before upgrading. Links to official references are in the relevant chapters.

## Glossarick link convention

Terms such as [TCP/IP](00-glossarick.md#tcp-ip), [DNS](00-glossarick.md#dns), [reverse proxy](00-glossarick.md#reverse-proxy), [virtualization](00-glossarick.md#virtualization), [TLS](00-glossarick.md#tls), and [CIDR](00-glossarick.md#cidr) link to canonical definitions in the Glossarick. The Glossarick is the terminology source of truth for this course.

## Official references

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js production checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [Docker Compose in production](https://docs.docker.com/compose/how-tos/production/)
- [PostgreSQL connection and authentication settings](https://www.postgresql.org/docs/current/runtime-config-connection.html)
- [Cloudflare connectivity options](https://developers.cloudflare.com/cloudflare-one/networks/connectivity-options/)
- [Cloudflare Tunnel configuration](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/do-more-with-tunnels/local-management/configuration-file/)
- [Cloudflare Access MFA](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/mfa-requirements/)
