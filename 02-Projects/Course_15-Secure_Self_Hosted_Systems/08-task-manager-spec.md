# 08 — Web application project specification

## Project: Task Ledger

Task Ledger is a compact, single-page task manager that demonstrates the complete delivery path from browser UI to an authenticated [API](00-glossarick.md#api) to durable [SQL](00-glossarick.md#sql) storage. It is intentionally small enough to inspect end-to-end.

<div class="grid grid-2">
  <div class="card"><h3>Functional requirements</h3><ul><li>Create a task with a validated title.</li><li>List only the signed-in user's tasks.</li><li>Mark a task complete or incomplete.</li><li>Delete a task.</li><li>Show pending, loading and error states accessibly.</li></ul></div>
  <div class="card"><h3>Non-functional requirements</h3><ul><li>Server-side input validation.</li><li>Parameterized [SQL](00-glossarick.md#sql) only.</li><li>Identity checked by every [API](00-glossarick.md#api) handler.</li><li>Database port stays private.</li><li>Logs and errors do not expose secrets.</li></ul></div>
</div>

## Out of scope for this course starter

This initial version is not a multi-tenant enterprise work-management product. It does not include teams, file uploads, email notifications, billing, public registration, password storage, audit retention, or a complete admin console. Add those only with specific requirements and a security review. Gateway identity protection and verified application identity are provided; a public signup flow is deliberately absent.

## User stories and acceptance criteria

| ID | User story | Acceptance criteria |
|---|---|---|
| APP-01 | As an allowed user, I can create a task. | Trimmed title length is 1–160 characters; invalid input returns 400. |
| APP-02 | I can list my tasks. | [API](00-glossarick.md#api) filters by verified owner; newest tasks appear first. |
| APP-03 | I can toggle completion. | PATCH accepts only a boolean `completed`; unknown task is returned as 404. |
| APP-04 | I can delete a task. | DELETE is owner-scoped and returns 404 for another user's task. |
| SEC-01 | A request without identity cannot access data. | Production [API](00-glossarick.md#api) returns 401 when the access assertion is missing/invalid. |
| SEC-02 | Users cannot read or alter other users' tasks. | All data mutation/read queries constrain `owner_email`. |
| OPS-01 | Tasks persist across app restarts. | Recreating the web [container](00-glossarick.md#container) does not remove database rows. |
| OPS-02 | Database is not public. | Compose does not publish port 5432; external test fails. |

## API contract

Base path: `/api/tasks`

| Method | Path | Request body | Success response |
|---|---|---|---|
| GET | `/api/tasks` | None | `{ "tasks": [...] }` |
| POST | `/api/tasks` | `{ "title": "Review VLAN plan" }` | `201 { "task": {...} }` |
| PATCH | `/api/tasks/:id` | `{ "completed": true }` | `200 { "task": {...} }` |
| DELETE | `/api/tasks/:id` | None | `200 { "deleted": true }` |

Error format: `{ "error": "Human-readable message" }`. The [API](00-glossarick.md#api) avoids exposing [SQL](00-glossarick.md#sql) errors or [authentication](00-glossarick.md#authentication) failure details to the requester.

## Data model

`tasks(id, owner_email, title, completed, created_at, updated_at)` uses a [UUID](00-glossarick.md#uuid) primary key. The owner is taken exclusively from the verified access identity. The index on `(owner_email, created_at DESC)` supports the app's primary list operation.

## Quality attributes

- **Security:** no anonymous production data route; strict owner scoping.
- **Maintainability:** UI, [API](00-glossarick.md#api) and DB helper files have separate responsibilities.
- **Recoverability:** database data lives in a named volume and has a tested backup procedure.
- **Portability:** Compose defines runtime dependencies and networks.
- **Accessibility:** labeled form controls, buttons with names, visible errors and keyboard operation.

## Glossarick references

[REST](00-glossarick.md#rest), [API](00-glossarick.md#api), [UUID](00-glossarick.md#uuid), [SQL injection](00-glossarick.md#sql-injection), [data validation](00-glossarick.md#data-validation), and [HTTP status code](00-glossarick.md#http-status-code).
