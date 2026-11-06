# 05 — Linux and container deployment model

## Host preparation

Keep the guest OS minimal and patched. Use a non-root administrative account with `sudo`, time synchronization, a documented update window, and a backup destination. Install Docker Engine and the Compose plugin using the operating-system/vendor instructions appropriate to the chosen distribution; do not blindly pipe remote install scripts into a privileged shell.

Useful baseline commands:

```bash
sudo apt-get update
sudo apt-get upgrade
sudo systemctl status docker --no-pager
sudo docker version
sudo docker compose version
```

Package names and update commands vary by distribution. Follow the current supported OS and Docker installation docs.

## Compose network model

The supplied `task-manager/compose.yaml` has three services:

- `web`: Next.js, attached to the app network and the private database network.
- `db`: [PostgreSQL](00-glossarick.md#postgresql), attached only to the internal database network; no host port is published.
- `cloudflared`: optional, under a Compose profile, attached only to the app network so it can reach `web` while maintaining its outbound connection. Enable it only after the exposure model is approved.

```text
                         outbound to access edge
                                    ^
                                    |
                             cloudflared (optional)
                                    |
app network ------------------------+--- web:3000
                                         |
private internal network ----------------+
                                         |
                                       db:5432
```

## Build and start

From `task-manager/`, create a `.env` file using `.env.example`. Generate a random database password using a safe password manager or a command such as `openssl rand -hex 24`, then record it in the protected environment file. Never commit `.env`.

```bash
cp .env.example .env
# Edit .env, set POSTGRES_PASSWORD and the approved Access values.
docker compose config --quiet
docker compose up -d --build
docker compose ps
docker compose logs --tail=100 web db
```

The production Compose file intentionally does not bind the application to the host's public interface. The optional edge connector needs a valid token and an already configured, approved hostname/policy at the provider. A running [container](00-glossarick.md#container) alone does not prove the app is correctly protected.

## Operations commands

```bash
# Status and recent logs
docker compose ps
docker compose logs --since=15m web db

# Rebuild only the application after a reviewed code change
docker compose build web
docker compose up -d --no-deps web

# Stop services while retaining the named database volume
docker compose down
```

Do not run `docker compose down -v` as a casual cleanup command; `-v` removes named volumes and can destroy persistent data.

## Image and supply-chain hygiene

Build from a reviewed source tree and a committed lockfile. This starter can bootstrap an initial lock during its first install; before calling a release reproducible, run `npm install`, review and commit `package-lock.json`, then confirm the [container](00-glossarick.md#container) build uses `npm ci`. Review dependency changes, scan images in your normal toolchain, pin or constrain production tags according to your organization's policy, and rebuild on security updates. Avoid mounting writable source-code directories into the production [container](00-glossarick.md#container).

## Official reference

[Docker Compose in production](https://docs.docker.com/compose/how-tos/production/).

## Glossarick references

[Container](00-glossarick.md#container), [container image](00-glossarick.md#container-image), [Compose](00-glossarick.md#docker-compose), [volume](00-glossarick.md#persistent-volume), [health check](00-glossarick.md#health-check), and [least privilege](00-glossarick.md#least-privilege).
