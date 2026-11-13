# API Fundamentals — Notes

A reference doc. Read top to bottom once, then use it as a lookup as you build.

---

## 1. What an API Actually Is

**API = Application Programming Interface.**

Strip away the jargon: an API is a **contract**. It says "if you send me a request shaped like *this*, I will send you back a response shaped like *that*."

- You don't need to know how the other side works internally.
- You just need to know the shape of the request and the shape of the response.

**Analogy:** A restaurant menu. You don't go into the kitchen and cook — you order off the menu (the API), and the kitchen (the server) hands back a plate (the response). The menu is the *contract*.

A **web API** specifically means this contract is exposed over the internet using HTTP (the same protocol your browser uses to load websites).

---

## 2. The Client-Server Model

```
CLIENT                          SERVER
(browser, mobile app,   ---->   (your API code,
 another server, etc.)  <----    running somewhere)
        REQUEST                    RESPONSE
```

- **Client** = whoever is *asking* for something (a phone app, a website, another backend service, Postman, curl).
- **Server** = whoever is *answering* (your API).
- This is why APIs are naturally **cross-platform**: the client can be written in Swift, Kotlin, JavaScript, or anything else — it doesn't matter, because it's just sending HTTP requests. Your API doesn't care what the client is built in.

---

## 3. HTTP — The Language APIs Speak

HTTP (HyperText Transfer Protocol) is the transport. Every API request has:

| Part | What it is | Example |
|---|---|---|
| **Method** | The action you want to perform | `GET`, `POST`, `PUT`, `PATCH`, `DELETE` |
| **URL/Endpoint** | The "address" of the resource | `/tasks/42` |
| **Headers** | Metadata about the request | `Content-Type: application/json`, `Authorization: Bearer <token>` |
| **Body** | The actual data (not always present) | `{"title": "Buy milk"}` |

### 3.1 HTTP Methods (verbs) — map these to real actions

| Method | Meaning | Real-world equivalent |
|---|---|---|
| `GET` | Read/fetch data | "Show me the task list" |
| `POST` | Create something new | "Add a new task" |
| `PUT` | Replace a resource entirely | "Overwrite task #42 with this new version" |
| `PATCH` | Partially update a resource | "Just mark task #42 as done" |
| `DELETE` | Remove a resource | "Delete task #42" |

### 3.2 Status Codes — how the server tells you what happened

You do NOT need to memorize all of these. Know the categories:

| Range | Meaning | Common ones |
|---|---|---|
| `2xx` | Success | `200 OK`, `201 Created`, `204 No Content` |
| `3xx` | Redirect | `301 Moved Permanently` |
| `4xx` | **Client** made a mistake | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found` |
| `5xx` | **Server** made a mistake | `500 Internal Server Error` |

**Rule of thumb:** 4xx = fix your request. 5xx = the API itself is broken, not your fault.

---

## 4. JSON — The Data Format

Almost all modern APIs send data as **JSON** (JavaScript Object Notation). It looks like this:

```json
{
  "id": 1,
  "title": "Buy milk",
  "completed": false,
  "tags": ["errands", "urgent"]
}
```

- Keys are always strings in double quotes.
- Values can be strings, numbers, booleans, arrays, objects, or `null`.
- It's language-agnostic — Python, JavaScript, C#, anything can read/write JSON. This is another reason APIs are cross-platform: JSON is the universal shipping container for data.

---

## 5. REST — A Set of Design Rules (not a technology)

**REST (REpresentational State Transfer)** is just a *convention* for organizing your API sensibly. A "RESTful API" follows these ideas:

1. **Resources are nouns, not verbs.** URLs represent *things*, not actions.
   - Good: `GET /tasks/42`
   - Bad: `GET /getTask?id=42`
2. **Use HTTP methods to express the action**, not the URL.
   - `DELETE /tasks/42` (not `GET /deleteTask/42`)
3. **Statelessness.** Every request must contain everything the server needs to understand it. The server doesn't "remember" you between requests — that's what tokens/auth headers are for.
4. **Predictable, nested structure:**
   ```
   GET    /tasks         → list all tasks
   POST   /tasks         → create a task
   GET    /tasks/42      → get one task
   PATCH  /tasks/42      → update one task
   DELETE /tasks/42      → delete one task
   ```

This predictability is *why* REST won — any developer who understands the convention can guess how your API works without reading docs.

---

## 6. Endpoints, Routes, and Parameters

- **Endpoint** = a specific URL your API responds to, e.g. `/tasks/42`.
- **Path parameter** = a variable embedded in the URL: `/tasks/{task_id}` → `42` is the path parameter.
- **Query parameter** = extra filters after a `?`: `/tasks?completed=true&limit=10`.
- **Request body** = the JSON payload sent with `POST`/`PUT`/`PATCH` — not used with `GET`.

---

## 7. Authentication & Authorization (concepts for now)

- **Authentication** = "Who are you?" (proving identity — e.g. logging in)
- **Authorization** = "What are you allowed to do?" (permissions)

Common patterns:
- **API Keys** — a static secret string sent in a header. Simple, common for server-to-server APIs.
- **Bearer Tokens / JWT** — a signed token proving you logged in, sent as `Authorization: Bearer <token>`. Common for user-facing apps.
- **OAuth2** — a full delegation protocol ("Log in with Google") — bigger topic, you'll meet it later.

We'll implement basic token auth *conceptually* in the guided project — full depth comes later in your curriculum.

---

## 8. Why "Cross-Platform" Just Falls Out of This

Because APIs communicate over HTTP using plain text (JSON), **any** client that can make an HTTP request can talk to your API:

- A React Native mobile app (iOS + Android)
- A web frontend (React, Vue, plain JS)
- A desktop app (C#, Python, Electron)
- Another backend service (microservices talking to each other)
- A CLI tool using `curl`

Your API doesn't need to know or care what's on the other end. **This is the entire point of building an API instead of hard-coding logic into one app** — one backend, many frontends.

---

## 9. Production Concepts (overview — depth comes in the guided project)

| Concept | What it means |
|---|---|
| **Environment variables** | Secrets (DB passwords, API keys) never hard-coded — injected at runtime |
| **CORS** | A browser security rule controlling which websites are allowed to call your API |
| **Rate limiting** | Preventing one client from hammering your API with requests |
| **Logging & monitoring** | Knowing what your API is doing and when it breaks |
| **Deployment** | Getting your API running on a real server (not just your laptop) |
| **Versioning** | `/v1/tasks` vs `/v2/tasks` — changing your API without breaking existing clients |
| **Documentation** | Auto-generated docs (FastAPI gives you this for free — more in the guided file) |

---

## 10. Quick-Reference Glossary

| Term | One-line meaning |
|---|---|
| Endpoint | A specific URL your API responds to |
| Payload | The data sent in a request/response body |
| Idempotent | Calling it multiple times has the same effect as once (GET, PUT, DELETE are idempotent; POST is not) |
| Middleware | Code that runs *before/after* every request (e.g. logging, auth checks) |
| Serialization | Converting a Python object → JSON |
| Deserialization | Converting JSON → a Python object |
| Schema | The defined shape/structure of expected data |

---

**Next:** open `02_Guided_Project_FastAPI_Task_API.md` — you'll build a real, working CRUD API using everything above.
