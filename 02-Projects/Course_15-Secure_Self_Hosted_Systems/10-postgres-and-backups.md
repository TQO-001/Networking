# 10 — PostgreSQL, persistence, backup, and restore

## Database boundary

[PostgreSQL](00-glossarick.md#postgresql) listens on port 5432 inside the Compose database network. The service has no `ports:` mapping, so Compose does not publish it on the host. The web app reaches it through the internal service name `db`; remote users never connect to the database directly.

The included [SQL](00-glossarick.md#sql) initialization script creates one table and its owner/time index. Initialization scripts run automatically only when the database data directory is initially empty. Changing `db/init.sql` after the volume has been initialized does not automatically migrate an existing database. For later schema changes, create numbered migration files and apply them through a controlled migration process.

## Verify schema and rows

```bash
docker compose exec db psql -U taskapp -d taskapp -c '\dt'
docker compose exec db psql -U taskapp -d taskapp -c 'SELECT count(*) FROM tasks;'
```

Avoid displaying real user task content in public screenshots.

## Create a compressed logical backup

Run from `task-manager/`, with Docker running. The resulting backup includes application table data and schema. Treat it as sensitive and copy it to a separate approved backup location immediately.

```bash
mkdir -p backups
umask 077
backup_file="backups/taskapp-$(date -u +%Y%m%dT%H%M%SZ).dump"
docker compose exec -T db pg_dump -U taskapp -d taskapp -Fc > "$backup_file"
test -s "$backup_file"
sha256sum "$backup_file" > "$backup_file.sha256"
ls -lh "$backup_file" "$backup_file.sha256"
```

The `backups/` directory should be excluded from source control. A backup on the same host or same storage failure domain as the database is not an independent recovery copy.

## Restore drill to a fresh database

A restore must not overwrite the only copy of a working production database. Use a disposable test database or a separately created restore environment. Example on an isolated lab database:

```bash
# Create a disposable target database (the role must have CREATEDB privileges).
docker compose exec db createdb -U taskapp taskapp_restore_test

# Restore the custom-format dump into the disposable target.
docker compose exec -T db pg_restore -U taskapp -d taskapp_restore_test \
  --no-owner --no-privileges < backups/REPLACE_WITH_TESTED_BACKUP.dump

# Verify the restored schema and row count.
docker compose exec db psql -U taskapp -d taskapp_restore_test \
  -c 'SELECT count(*) FROM tasks;'

# Remove only the disposable database after recording the result.
docker compose exec db dropdb -U taskapp taskapp_restore_test
```

Replace the filename with an existing dump file created by the backup procedure. If the backup lacks required ownership/roles or extensions, document and resolve that before declaring recovery successful.

## Recovery targets

Agree on the acceptable data-loss window and restore-time objective before calling the service production-ready. A daily dump implies a potential loss of changes since the previous successful dump; the actual recovery point depends on schedule, retention, transfer and verification. Track backup job success and perform periodic restore drills.

## Retention and security

- Encrypt backups at [rest](00-glossarick.md#rest) and in transit using the approved destination's controls.
- Restrict read access to named operators or a backup service identity.
- Store checksums separately from the only copy when feasible.
- Define retention, deletion and legal hold requirements before automating cleanup.
- Never commit a database dump to the portfolio repository.
- Test that restore works after an OS rebuild, not merely after a web [container](00-glossarick.md#container) restart.

## Official reference

[PostgreSQL connection and authentication settings](https://www.postgresql.org/docs/current/runtime-config-connection.html).

## Glossarick references

[Persistent volume](00-glossarick.md#persistent-volume), [logical backup](00-glossarick.md#logical-backup), [restore drill](00-glossarick.md#restore-drill), [RPO](00-glossarick.md#rpo), [RTO](00-glossarick.md#rto), and [data retention](00-glossarick.md#data-retention).
