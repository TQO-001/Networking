# 11 — Observability, maintenance, and incident response

## Minimum operational signals

| Signal | Collection method | Alert / response intent |
|---|---|---|
| [Container](00-glossarick.md#container) health | `docker compose ps` and health checks | Restart investigation if unhealthy or repeatedly restarting |
| Web request failures | Gateway logs and application logs | Investigate elevated 5xx responses or unexpected 401/403 increases |
| Database availability | [PostgreSQL](00-glossarick.md#postgresql) [health check](00-glossarick.md#health-check) and app connection failures | Restore service without exposing the database publicly |
| Disk capacity | `df -h`, monitoring agent where approved | Warn before logs, images or database storage fill the filesystem |
| Backup completion | Backup command exit status, file size/checksum, remote copy status | Alert if backup is absent, unexpectedly small or unverifiable |
| Identity policy changes | Provider audit logs | Review changes to allow-lists, [MFA](00-glossarick.md#multi-factor-authentication) and application audience |
| OS/container updates | Patch records and image scan reports | Schedule and verify controlled rebuilds |

## Useful checks

```bash
# Container state and health
docker compose ps

# Recent service logs; do not publish raw logs before redaction.
docker compose logs --since=30m web db

# Disk, memory and open listening sockets
df -h
free -h
sudo ss -lntup

# Failed guest services
systemctl --failed
```

## Log rules

Log operationally useful events: request timestamp, route, result code, a non-sensitive correlation identifier, and failure category. Do not log [authorization](00-glossarick.md#authorization) headers, JWTs, session cookies, database URLs, passwords, private keys, or full request bodies by default. Apply access controls and retention limits to logs themselves.

## Incident runbook: unexpected exposure

1. Stop the optional connector if the origin is exposed beyond the approved scope.
2. Disable or revoke the corresponding provider application/policy/token as appropriate.
3. Preserve relevant gateway, host and application logs in an approved location.
4. Identify the exact hostname, origins, identity policy and time window that were affected.
5. Rotate any credentials that may have been exposed; assess database access independently.
6. Verify that no host or database ports are reachable from untrusted networks.
7. Record cause, impact, actions and prevention work without disclosing sensitive details in public documentation.

## Incident runbook: database not available

1. Check `docker compose ps` and database logs.
2. Check guest disk capacity and volume attachment; do not delete the volume.
3. Confirm app-to-database [DNS](00-glossarick.md#dns)/service name and credentials are consistent.
4. Restore only after assessing the current data state and selecting a tested backup.
5. Verify row counts and basic application operations.
6. Document downtime, recovery point, recovery duration and follow-up tasks.

## Patch and change management

Record each change with owner, purpose, affected services, expected impact, test plan, [rollback](00-glossarick.md#rollback) method and completion evidence. Rebuild images on approved dependency/security updates; do not run unreviewed major upgrades during an incident. Before a release, run the application acceptance suite and confirm backups are current.

## Glossarick references

[Observability](00-glossarick.md#observability), [health check](00-glossarick.md#health-check), [structured logging](00-glossarick.md#structured-logging), [incident response](00-glossarick.md#incident-response), and [change management](00-glossarick.md#change-management).
