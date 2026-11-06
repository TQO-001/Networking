# Course 15 — Official technical references

Checked for this course on 14 October 2026. Vendor documentation and supported-version details can change; review the linked documentation when deploying.

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers)
- [Next.js Authentication Guide](https://nextjs.org/docs/app/guides/authentication)
- [Next.js Production Checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [Docker Compose in production](https://docs.docker.com/compose/how-tos/production/)
- [PostgreSQL connection and authentication settings](https://www.postgresql.org/docs/current/runtime-config-connection.html)
- [Cloudflare connectivity options](https://developers.cloudflare.com/cloudflare-one/networks/connectivity-options/)
- [Cloudflare Tunnel configuration file](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/do-more-with-tunnels/local-management/configuration-file/)
- [Cloudflare published-application protocols](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/routing-to-tunnel/protocols/)
- [Cloudflare Access MFA requirements](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/mfa-requirements/)

## Deployment-scope note

The included Cloudflare Access assertion adapter is specific to that identity gateway. If the lab instead uses an organization's [VPN](00-glossarick.md#vpn)/ZTNA, Entra ID, or another identity platform, implement and review an adapter for that approved identity mechanism; do not trust arbitrary headers from a proxy. Never add a tunnel, proxy, port-forward or alternate network path to a corporate or [OT](00-glossarick.md#operational-technology-ot) environment without explicit approval from its owner.
