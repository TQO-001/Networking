# 07 — Identity verification, authorization, and threat model

## Identity is checked twice

The gateway should authenticate the person before forwarding a protected web request. The application then verifies the signed assertion included by that gateway for every server-rendered page and [API](00-glossarick.md#api) operation. The app does **not** trust a client-supplied email header or a browser-visible identity value.

The sample uses `CF-Access-Jwt-Assertion` as the gateway assertion header. Production verification is performed with `jose` against the provider's published signing keys and validates issuer and audience. For a different provider, replace this adapter with the provider's supported [OIDC](00-glossarick.md#oidc)/JWT validation process; do not simply rename the header or trust arbitrary proxy headers.

## Environment variables

| Variable | Purpose | Secret? |
|---|---|---:|
| `ACCESS_ISSUER` | Exact expected [JWT](00-glossarick.md#jwt) issuer | No, but integrity-sensitive |
| `ACCESS_AUD` | Expected audience/application identifier | No, but integrity-sensitive |
| `DATABASE_URL` | [PostgreSQL](00-glossarick.md#postgresql) connection URL | **Yes** (contains a password) |
| `POSTGRES_PASSWORD` | Database role password | **Yes** |
| `CLOUDFLARE_TUNNEL_TOKEN` | Connector credential, when using token mode | **Yes** |
| `ALLOW_DEV_AUTH` | Enables fixed local identity only outside production | Configuration; production must not enable it |
| `DEV_USER_EMAIL` | Synthetic local identity | Use a test address only |

The production code has a fail-closed rule: if assertion verification fails or required identity configuration is absent, the request is rejected. The development shortcut is guarded by `NODE_ENV !== 'production'`; nevertheless, do not ship with `ALLOW_DEV_AUTH=true` and do not use it to protect shared data.

## Threat model

| Threat | Risk | Primary mitigation | Residual concern |
|---|---|---|---|
| Internet scans | Discover exposed ports | No published DB/app ports; gateway-controlled hostname | Provider and [DNS](00-glossarick.md#dns) config can be changed incorrectly |
| Unauthenticated [API](00-glossarick.md#api) calls | Unauthorized task access | Verify signed assertion on every [API](00-glossarick.md#api) route | Gateway misconfiguration or issuer/audience mismatch |
| User changes another task ID | Horizontal privilege escalation | Owner predicate included in every SELECT/UPDATE/DELETE | Future routes must preserve owner-scoping |
| [SQL injection](00-glossarick.md#sql-injection) | Query alteration | Parameterized [SQL](00-glossarick.md#sql); no string concatenation of user input | Unsafe query additions could reintroduce risk |
| Stolen gateway token | Impersonation while valid | [TLS](00-glossarick.md#tls), short sessions, revocation, browser/device hygiene | Token leakage through logs or browser compromise |
| Database volume corruption | Loss of task data | Separate backups and tested restore | Backup can be stale or inaccessible |
| Compromised [container](00-glossarick.md#container) | Lateral movement | Separate networks, non-root app, dropped [Linux](00-glossarick.md#linux) capabilities | Guest kernel/daemon remain shared trust boundaries |
| Corporate policy violation | Unauthorized path into internal services | Approval gate and separate lab boundary | Human/process failure |

## Authorization model

This app uses the normalized verified identity email as the task owner key. Every database query receives the identity obtained from [JWT](00-glossarick.md#jwt) verification. The `email` field provided by the frontend is never used to decide ownership. In a larger system, use an immutable identity subject/issuer pair rather than email as the permanent principal identifier, because emails can change or be reassigned.

## Security requirements

- Enforce an exact issuer and audience. Do not disable signature or audience checks to make deployment work.
- Use an [MFA](00-glossarick.md#multi-factor-authentication)-backed allow-list or approved managed identity group at the gateway.
- Keep access tokens, tunnel tokens, database passwords and cookies out of logs and source control.
- Use [HTTPS](00-glossarick.md#https) from user to edge. Review encryption on each other hop against the policy and risk model.
- Require [authorization](00-glossarick.md#authorization) checks in the data path, not just hidden UI controls.
- Deny by default and document every intentional exception.
- For regulated or high-sensitivity systems, obtain a formal security review; this starter is not a certification or substitute for organization-specific controls.

## Official references

- [Next.js authentication guidance](https://nextjs.org/docs/app/guides/authentication)
- [Cloudflare Access MFA requirements](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/mfa-requirements/)

## Glossarick references

[Authentication](00-glossarick.md#authentication), [authorization](00-glossarick.md#authorization), [JWT](00-glossarick.md#jwt), [issuer](00-glossarick.md#issuer), [audience](00-glossarick.md#audience), [OIDC](00-glossarick.md#oidc), [principal](00-glossarick.md#principal), and [horizontal privilege escalation](00-glossarick.md#horizontal-privilege-escalation).
