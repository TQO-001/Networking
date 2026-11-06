# 06 — Secure access, VPN/ZTNA, and tunnels

## Select an access pattern, not just a product

<div class="grid grid-2">
  <div class="card"><h3>Internal company service</h3><p>Use the organization-approved [VPN](00-glossarick.md#vpn)/ZTNA or application gateway. Engage the network/security owner; document identity, client posture, target service, logging, and revocation. Do not create an alternate route around existing rules.</p></div>
  <div class="card"><h3>Isolated portfolio lab</h3><p>An outbound connector may publish a chosen web hostname without a router port-forward, if the lab owner and relevant policy permit it. Protect the hostname with an allow-list and [MFA](00-glossarick.md#multi-factor-authentication) and validate identity again in the app.</p></div>
</div>

## What an outbound tunnel does—and does not do

A managed tunnel connector initiates outbound connections to a provider edge and routes allowed incoming requests to the configured origin service. This can avoid accepting unsolicited inbound connections at the origin, but it does not remove the need for [authorization](00-glossarick.md#authorization), egress review, data classification or an application security review. It also creates an externally mediated path to the origin. Cloudflare documents its connector transport and published-application model in its [connectivity options](https://developers.cloudflare.com/cloudflare-one/networks/connectivity-options/) and [published application protocol guide](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/routing-to-tunnel/protocols/).

<div class="callout callout-danger"><strong>Never treat an outbound tunnel as a [firewall](00-glossarick.md#firewall) bypass.</strong> Do not attach it to corporate, production, or [OT](00-glossarick.md#operational-technology-ot) systems unless the infrastructure/security owner explicitly authorizes that exact usage. If outbound connector traffic is prohibited, stop and request an approved path; do not hide or disguise it.</div>

## Lab deployment options

### Option A — Private-only (recommended first)

Run the app with no `cloudflared` service enabled. Access it from the guest or an approved lab management path. This is the baseline that all functionality and tests must pass before any remote exposure.

### Option B — Approved lab tunnel

1. Confirm that the system, data, domain and outbound connector are approved for external access.
2. Create a provider-side application policy allowing only named identities or a managed identity group. Require [MFA](00-glossarick.md#multi-factor-authentication) and short, appropriate session lifetime.
3. Configure one specific hostname to route to `http://web:3000` on the app Compose network. Do not publish the entire private network.
4. Keep host port `3000` and database port `5432` unpublished.
5. Add the access assertion's expected issuer and audience to the protected application environment.
6. Test unauthenticated, disallowed-user, expired-session and valid-user cases.
7. Confirm logs record useful security events without recording cookies, bearer tokens, passwords or full sensitive payloads.
8. Write a revocation and incident-response procedure before sharing the URL.

The Compose file includes an optional `edge` profile. Start it only after populating a valid tunnel token and configuring the provider-side hostname/policy:

```bash
docker compose --profile edge up -d cloudflared
```

Stop the connector immediately if exposure differs from the approved scope:

```bash
docker compose stop cloudflared
```

Revoking a provider token/policy may also be necessary. [Container](00-glossarick.md#container) stop is not a substitute for revoking compromised credentials.

## Local-managed connector configuration reference

The starter includes `cloudflared/config.yml.example` for reference only. It uses a credential file path and a named tunnel ID that you must supply through the provider's approved provisioning process. Do not commit credentials [JSON](00-glossarick.md#json), tunnel tokens, private keys or live origin details.

## Access tests

| Test | Expected outcome |
|---|---|
| No identity session | Gateway denies or redirects to [authentication](00-glossarick.md#authentication) |
| Authenticated identity not on allow-list | Denied |
| Allowed identity with valid session | App page loads |
| App [API](00-glossarick.md#api) request without a valid signed assertion | [HTTP](00-glossarick.md#http) 401 in production |
| Request uses another user's task ID | [HTTP](00-glossarick.md#http) 404; no cross-user data leakage |
| Direct `guest-ip:3000` from untrusted network | Unreachable |
| Direct `guest-ip:5432` from any untrusted network | Unreachable |
| Connector loses provider connection | Remote service unavailable; no alternate public port opens |

## Glossarick references

[VPN](00-glossarick.md#vpn), [zero trust](00-glossarick.md#zero-trust), [reverse proxy](00-glossarick.md#reverse-proxy), [identity provider](00-glossarick.md#identity-provider), [MFA](00-glossarick.md#multi-factor-authentication), [egress filtering](00-glossarick.md#egress-filtering), and [fail closed](00-glossarick.md#fail-closed).
