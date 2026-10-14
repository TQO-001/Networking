# 01 — Course map and learning sequence

<div class="callout callout-info"><strong>Recommended method:</strong> complete one milestone at a time. Keep the app private until the access review and restore test pass. The objective is not merely a live URL; it is a system you can explain, verify, recover, and safely change.</div>

## Learning outcomes and evidence

| Module | Main question | Evidence to save |
|---|---|---|
| 02 — Architecture | What talks to what, and across which trust boundary? | Context diagram, data flows, decisions and assumptions |
| 03 — Prerequisites | Is the lab yours to administer and suitably isolated? | Inventory, permission notes, IP plan, [rollback](00-glossarick.md#rollback) point |
| 04 — [VMware](00-glossarick.md#vmware) and networking | Can the guest VM be reached only along intended paths? | VM settings, [VLAN](00-glossarick.md#vlan)/subnet diagram, [firewall](00-glossarick.md#firewall) matrix |
| 05 — [Container](00-glossarick.md#container) platform | Can the application be deployed reproducibly? | Compose file, image build output, health-check evidence |
| 06 — Secure access | What exact route permits remote access? | Ingress diagram, reviewed policy, tunnel/VPN test matrix |
| 07 — Identity and threats | What is trusted, and how is trust validated? | [Threat model](00-glossarick.md#threat-model), [authentication](00-glossarick.md#authentication) policy, deny tests |
| 08–09 — Application | Does the app behave correctly for an authenticated owner? | Working source, [API](00-glossarick.md#api) test output, screenshots |
| 10 — Data and recovery | Can data survive a host/application failure? | Backup checksum, restore log, recovery timing |
| 11 — Operations | Can a fault be detected and diagnosed? | Health checks, log excerpts, incident runbook |
| 12 — Hardening | Have boundaries and failure modes been tested? | Test report and remediation ledger |
| 13 — Capstone | Can another engineer reproduce and review it? | Architecture pack, deployment guide, portfolio case study |

## Suggested sequence

<ol class="timeline">
  <li><strong>Phase A — Design:</strong> define ownership, scope, data sensitivity, threat actors, and the access model.</li>
  <li><strong>Phase B — Lab:</strong> build the guest VM and confirm segmentation before deploying containers.</li>
  <li><strong>Phase C — Application:</strong> start locally with a development-only identity, then validate production identity enforcement.</li>
  <li><strong>Phase D — Exposure:</strong> retain private access by default. Add a remote path only when the exposure request is approved.</li>
  <li><strong>Phase E — Operate:</strong> prove backups, restore, logging, patching and [rollback](00-glossarick.md#rollback).</li>
  <li><strong>Phase F — Publish:</strong> redact secrets, document the boundary, provide screenshots and reproducible commands.</li>
</ol>

## Definition of done

The course is complete when a fresh clone can be installed from documented steps, authenticated users can create and manage only their own tasks, unauthenticated [API](00-glossarick.md#api) requests are rejected in production mode, the database is not directly published, a database restore is demonstrated, and the portfolio post contains no secrets or sensitive internal topology.

## Glossarick references

Use the canonical entries for [threat modeling](00-glossarick.md#threat-model), [least privilege](00-glossarick.md#least-privilege), [authentication](00-glossarick.md#authentication), [authorization](00-glossarick.md#authorization), and [recovery point objective](00-glossarick.md#rpo) as needed.
