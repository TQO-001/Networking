# 12 — Verification, hardening, and negative testing

## Test categories

| Category | Examples | Required result |
|---|---|---|
| Functional | Create, list, complete, delete task | Correct persistence and UI status |
| Input validation | Empty, whitespace-only, 161-character title, wrong [JSON](00-glossarick.md#json) type | [HTTP](00-glossarick.md#http) 400; no unhandled exception |
| Identity | Missing token, malformed token, wrong issuer/audience, expired token | [HTTP](00-glossarick.md#http) 401 in production |
| [Authorization](00-glossarick.md#authorization) | User A attempts to modify User B's [UUID](00-glossarick.md#uuid) | 404 with no data disclosure |
| Network | Check externally reachable ports | App and DB ports are not directly published |
| Persistence | Recreate web [container](00-glossarick.md#container) and reload tasks | Rows remain |
| Recovery | Restore dump into disposable target | Schema and row counts verified |
| Resilience | Temporarily stop DB in a lab | Error is controlled; no secrets are shown |
| Accessibility | Keyboard-only flow, labels, visible focus and errors | Primary task flow usable without a mouse |

## Identity-negative tests

Do identity tests against a controlled production-like deployment, not by weakening verification to make a test pass. Confirm these scenarios with the gateway and application logs:

- Anonymous request to protected hostname.
- Signed-in identity outside the allow-list.
- Token signed by an unexpected issuer.
- Token with a mismatched audience.
- Expired/revoked identity session.
- [API](00-glossarick.md#api) call made directly to the origin without the gateway assertion.

## Network exposure test

Run approved reachability tests only from systems you own or are authorized to assess. Check the host [firewall](00-glossarick.md#firewall) and upstream network policy, not only browser behavior. The desired state is that the application is accessible only through the named approved access path, while TCP 5432 is never externally reachable. Do not scan unrelated networks or corporate ranges for this exercise.

## Configuration review checklist

- [ ] `.env`, token files, credentials [JSON](00-glossarick.md#json), private keys and database dumps are ignored by version control.
- [ ] Production `ALLOW_DEV_AUTH` is not set to `true`.
- [ ] Production requires identity issuer/audience and verifies signatures.
- [ ] Every database query is owner-scoped and parameterized.
- [ ] App/DB containers run with reduced privilege where supported.
- [ ] [PostgreSQL](00-glossarick.md#postgresql) has no public `ports:` mapping.
- [ ] Tunnel service is disabled until approved and policy-protected.
- [ ] OS, runtime and dependencies are on supported versions.
- [ ] Logs do not contain tokens, credentials or personal data beyond the approved scope.
- [ ] Backups are encrypted, separated and restore-tested.
- [ ] The public portfolio version contains only sanitized screenshots and diagrams.

## Limitations to state honestly

The starter is a portfolio reference, not a universal production certification. Before a real business deployment, review rate limiting, [CSRF](00-glossarick.md#csrf) exposure appropriate to the chosen auth/browser design, security headers, dependency/image scanning, database migration automation, centralized [secrets management](00-glossarick.md#secrets-management), retention, monitoring, audit requirements, disaster recovery and service-level objectives. Add controls in response to a documented risk model rather than making unsupported security claims.

## Glossarick references

[Negative test](00-glossarick.md#negative-test), [attack surface](00-glossarick.md#attack-surface), [security header](00-glossarick.md#security-header), [CSRF](00-glossarick.md#csrf), and [secrets management](00-glossarick.md#secrets-management).
