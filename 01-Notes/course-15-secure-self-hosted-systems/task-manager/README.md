# Task Ledger — Course 15 starter

This is the runnable starter for the course, not a universal production certification. For repeatable release builds, run `npm install` in a connected development environment, review and commit `package-lock.json`, then validate that the Docker build uses `npm ci`. Production mode requires a valid access gateway assertion and verified issuer/audience. Never set the local development identity shortcut in production.

## Local development

1. Copy `.env.example` to `.env` and set `POSTGRES_PASSWORD` to a random hex string.
2. Copy `.env.local.example` to `.env.local` and use the exact same password in `DATABASE_URL`.
3. Start local [PostgreSQL](00-glossarick.md#postgresql): `docker compose -f compose.yaml -f compose.dev.yaml up -d db`.
4. Install and run: `npm install && npm run dev`.
5. Visit `http://localhost:3000`.

The local shortcut is allowed only when `NODE_ENV` is not production and `ALLOW_DEV_AUTH=true`. It grants one fixed synthetic identity for local testing. Do not expose the development server or use it for real user data.

## Production Compose

Production Compose has no `ports` mappings for the web or database. The database is on an internal network and the application is attached to both the app and data networks. Configure `ACCESS_ISSUER` and `ACCESS_AUD` for your approved identity gateway. `CLOUDFLARE_TUNNEL_TOKEN` is required only for the optional `edge` profile.

```bash
cp .env.example .env
# Edit .env with unique secrets and approved identity values.
docker compose config --quiet
docker compose up -d --build
docker compose ps
```

Only after explicit approval and gateway allow-list/MFA setup:

```bash
docker compose --profile edge up -d cloudflared
```

Stop the connector with `docker compose stop cloudflared`; revoke the upstream tunnel/access credentials if compromised or no longer approved.

## Database note

The [SQL](00-glossarick.md#sql) initialization script is applied only to a fresh database directory. For later schema changes use versioned migrations and a tested backup/restore procedure. Never delete the `pgdata` volume to troubleshoot a normal deployment.

## Known extension points before a business production use

Add the controls required by the real risk and operational requirements: dependency/image scanning, committed package lockfile, automated database migrations, an approved secrets manager, rate limiting, appropriate [CSRF](00-glossarick.md#csrf)/security-header controls, centralized logs/metrics, backup off-host replication, alerting, audit retention, restore drills and a documented release/rollback process.
