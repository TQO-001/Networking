# 09 — Build and run Task Ledger

## 1. Requirements

Use a supported Node.js LTS release, npm, Docker Engine/Compose, and a [PostgreSQL](00-glossarick.md#postgresql) instance started from `compose.yaml`. Start in the `task-manager/` directory. The app uses JavaScript to keep the sample approachable while leaving the architecture ready for gradual typing later.

## 2. Local development

1. Copy `.env.example` to `.env` for Compose variables.
2. Set a local-only `POSTGRES_PASSWORD` value; generate one with `openssl rand -hex 24` or a password manager. Do not reuse a corporate credential.
3. Start only the database: `docker compose up -d db`.
4. Create `.env.local` from `.env.local.example` and use the same local password in its `DATABASE_URL`.
5. Install dependencies and start Next.js.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Local identity is synthetic and enabled only when `ALLOW_DEV_AUTH=true` outside production. It is for local development, never for a shared or internet-reachable service.

## 3. Production deployment

Production starts through Compose and requires valid `ACCESS_ISSUER` and `ACCESS_AUD` values plus a configured identity gateway. The tunnel service is optional and does not start unless its `edge` profile is requested. Consult [06 — Secure access](06-secure-access-and-tunneling.md) before enabling any route.

```bash
# Inspect the expanded config before launching.
docker compose config --quiet

# Build and launch the private application and DB.
docker compose up -d --build

docker compose ps
docker compose logs --tail=100 web db
```

Before enabling the connector, verify the gateway policy and origin mapping with the approved owner. Then use `docker compose --profile edge up -d cloudflared` only if authorized.

## 4. Smoke tests

Run these against the local development server. In PowerShell, `curl.exe` avoids the historical `curl` alias ambiguity.

```bash
# List tasks
curl -i http://localhost:3000/api/tasks

# Create one
curl -i -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' \
  -d '{"title":"Document lab network boundary"}'

# Retrieve IDs from the response, then replace TASK_ID with the UUID.
curl -i -X PATCH http://localhost:3000/api/tasks/TASK_ID \
  -H 'Content-Type: application/json' \
  -d '{"completed":true}'

curl -i -X DELETE http://localhost:3000/api/tasks/TASK_ID
```

`TASK_ID` above is a test substitution, not a deploy-time configuration placeholder. Use the [UUID](00-glossarick.md#uuid) returned by the POST response. In production, the gateway sends an identity assertion; direct `curl` requests without the assertion should be rejected by the app.

## 5. Project structure

```text
task-manager/
├── app/
│   ├── api/tasks/route.js
│   ├── api/tasks/[id]/route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── cloudflared/config.yml.example
├── db/init.sql
├── lib/auth.js
├── lib/db.js
├── Dockerfile
├── compose.yaml
├── compose.dev.yaml
├── next.config.mjs
├── package.json
├── .dockerignore
├── .env.example
└── .env.local.example
```

## 6. Important implementation notes

- `lib/auth.js` provides the single identity-verification boundary. All [API](00-glossarick.md#api) routes call it.
- `lib/db.js` owns a reusable [PostgreSQL](00-glossarick.md#postgresql) [connection pool](00-glossarick.md#connection-pool).
- Route handlers pass user input as [SQL](00-glossarick.md#sql) parameters; do not concatenate input into [SQL](00-glossarick.md#sql).
- Every data query uses the verified owner email as a constraint.
- The UI never decides identity. A modified request from the browser is still checked by the server.
- The `.env.local.example` file is for laptop-only development. The Compose `.env` and host `.env.local` have different purposes.

## Official reference

- [Next.js route handlers](https://nextjs.org/docs/app/getting-started/route-handlers)
- [Next.js authentication guidance](https://nextjs.org/docs/app/guides/authentication)
- [Next.js production checklist](https://nextjs.org/docs/app/guides/production-checklist)

## Glossarick references

[Server-side rendering](00-glossarick.md#server-side-rendering), [environment variable](00-glossarick.md#environment-variable), [connection pool](00-glossarick.md#connection-pool), [parameterized query](00-glossarick.md#parameterized-query), and [HTTP 401](00-glossarick.md#http-status-code).
