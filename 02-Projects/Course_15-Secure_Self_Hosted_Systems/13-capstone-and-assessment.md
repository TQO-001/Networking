# 13 — Capstone, evidence pack, and portfolio publication

## Capstone statement

Deploy Task Ledger on a dedicated [Linux](00-glossarick.md#linux) guest under [VMware](00-glossarick.md#vmware) on lab-owned or explicitly approved HPE ProLiant infrastructure. Ensure persistent storage survives application rebuilds. Enforce identity before rendering data and verify the signed assertion independently at the application layer. Keep the database private. Demonstrate a restore and document the design, limitations and operating procedures.

## Scoring rubric (100 points)

| Area | Points | Full-credit evidence |
|---|---:|---|
| Architecture and boundaries | 15 | Diagram, approved scope, flow matrix, decision records |
| VM and network setup | 10 | Inventory, assigned addresses, segmentation evidence, no accidental routes |
| Application behavior | 15 | Complete CRUD workflow, validation and accessible interaction |
| Identity and [authorization](00-glossarick.md#authorization) | 20 | Issuer/audience validation, allow-list/MFA at edge, owner-scoped [API](00-glossarick.md#api), negative tests |
| Data and recovery | 15 | [Persistent volume](00-glossarick.md#persistent-volume), independent backup, checksum and completed restore drill |
| Operations and hardening | 15 | Health checks, safe logs, patch plan, runbooks and documented limitations |
| Portfolio communication | 10 | Clear writing, sanitized screenshots, reproducible steps and cited references |

## Required evidence pack

1. `architecture.md` — component diagram, trust boundaries, allowed data flows.
2. `network-matrix.md` — source, destination, protocol, purpose, decision and owner.
3. `threat-model.md` — assets, trust assumptions, threats, mitigations, residual risk.
4. `deploy.md` — prerequisites, environment configuration, commands, [rollback](00-glossarick.md#rollback).
5. `test-results.md` — positive and negative test results with timestamps and sanitized output.
6. `restore-drill.md` — backup filename/checksum, restore target, row-count verification, elapsed time.
7. `operations.md` — patch cadence, alerting, incidents, credential rotation and service shutdown.
8. `portfolio-post.md` — problem, architecture, implementation, tradeoffs, evidence and next steps.

## Suggested portfolio article outline

- **Problem:** why a self-hosted internal service needs both a reliable runtime and controlled access.
- **Constraints:** limited resources, no direct public database access, approval-based remote ingress, privacy of lab and employer details.
- **Architecture:** sanitized diagrams and a table of allowed flows.
- **Implementation:** VM, Compose network, identity validation, [SQL](00-glossarick.md#sql) model and UI.
- **Verification:** show a valid session, denied unauthenticated call, owner-bound data access, persistent data and successful restore.
- **Tradeoffs:** one-host availability, dependence on identity gateway, backup [RPO](00-glossarick.md#rpo), operational overhead and features intentionally excluded.
- **Next iteration:** external secret manager, CI/CD, migration tooling, metrics, centralized log aggregation and a formal [identity provider](00-glossarick.md#identity-provider) integration.

## Do not publish

No live tunnel token, database URL/password, signed assertion, cookies, private key, exact production hostname/IP map, server serial number, [OT](00-glossarick.md#operational-technology-ot) device name, corporate diagram, user data, internal [DNS](00-glossarick.md#dns) suffix or [firewall](00-glossarick.md#firewall) rule screenshot unless the responsible owner has explicitly approved release.

## Final sign-off

| Gate | Pass condition | Status |
|---|---|---|
| Scope | System owner and environment ownership are clear | ☐ |
| Isolation | No unapproved route to production/OT networks | ☐ |
| Identity | Access policy and server verification both work | ☐ |
| [Authorization](00-glossarick.md#authorization) | Cross-user access tests fail safely | ☐ |
| Exposure | Only approved hostname and service are reachable | ☐ |
| Recovery | A restore from a separate backup was verified | ☐ |
| Operations | Logs, patching, incident, and [rollback](00-glossarick.md#rollback) steps exist | ☐ |
| Publication | All artifacts and screenshots are sanitized | ☐ |

A `Pass` is not a statement that the system is invulnerable; it means the defined acceptance evidence was observed and the remaining limitations are written down.
