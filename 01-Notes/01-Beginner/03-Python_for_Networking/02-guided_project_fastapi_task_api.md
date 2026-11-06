# Guided Project — Build a Task API with FastAPI

A hands-on build. You'll go from zero to a working, documented, cross-platform-ready CRUD API.

**How to use this file:** Work top to bottom. Check off each box as you complete it — don't skip ahead even if a step looks trivial, because later steps assume the earlier ones actually ran.

---

## Part 0 — Setup

- [ ] Confirm Python is installed: run `python --version` (need 3.9+)
- [ ] Create a project folder: `mkdir task_api && cd task_api`
- [ ] Create a virtual environment: `python -m venv venv`
- [ ] Activate it:
  - Windows: `venv\Scripts\activate`
  - macOS/Linux: `source venv/bin/activate`
- [ ] Install dependencies:
  ```
  pip install fastapi uvicorn pydantic
  ```
- [ ] Create the main file: `main.py`

**Why a virtual environment?** It isolates this project's packages from every other Python project on your machine. Without it, dependency versions between projects eventually collide.

---

## Part 1 — Your First Endpoint

- [ ] Open `main.py` and write:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "API is alive"}
```

- [ ] Run the server:
  ```
  uvicorn main:app --reload
  ```
- [ ] Open a browser to `http://127.0.0.1:8000` — you should see the JSON message.
- [ ] Open `http://127.0.0.1:8000/docs` — **this is FastAPI's auto-generated interactive documentation.** Every endpoint you build from here shows up here automatically. This alone is a major reason FastAPI is used in production: your API documents itself.

**Checkpoint:** if `/docs` loads and shows your root endpoint, you're set up correctly.

---

## Part 2 — Define Your Data Shape (Pydantic Schema)

Before building CRUD, define what a "Task" *is*. This is your contract — see Notes file, Section 6.

- [ ] Add to `main.py`:

```python
from pydantic import BaseModel
from typing import Optional

class Task(BaseModel):
    id: int
    title: str
    completed: bool = False

class TaskCreate(BaseModel):
    title: str
    completed: Optional[bool] = False
```

**Why two models?** `TaskCreate` is what the *client* sends (no `id` — the server assigns that). `Task` is what the *server* returns. Separating "what comes in" from "what goes out" is a real production pattern — you'll see this constantly.

---

## Part 3 — In-Memory Storage (temporary, for learning)

- [ ] Add a fake "database" — just a Python list, for now:

```python
tasks: list[Task] = []
next_id = 1
```

*(In a real production app this would be a proper database like PostgreSQL — that's a later stage in your curriculum. For learning the API layer itself, an in-memory list keeps the focus on HTTP mechanics, not database mechanics.)*

---

## Part 4 — Build Full CRUD

Go one endpoint at a time. Test each one in `/docs` before moving to the next.

### Create (`POST`)
- [ ] Add:
```python
@app.post("/tasks", response_model=Task, status_code=201)
def create_task(task: TaskCreate):
    global next_id
    new_task = Task(id=next_id, title=task.title, completed=task.completed)
    tasks.append(new_task)
    next_id += 1
    return new_task
```
- [ ] Test it in `/docs`: use `POST /tasks`, try it with `{"title": "Buy milk"}`

### Read all (`GET`)
- [ ] Add:
```python
@app.get("/tasks", response_model=list[Task])
def get_tasks():
    return tasks
```
- [ ] Test it — you should see the task you just created.

### Read one (`GET` with path parameter)
- [ ] Add:
```python
from fastapi import HTTPException

@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    for task in tasks:
        if task.id == task_id:
            return task
    raise HTTPException(status_code=404, detail="Task not found")
```
- [ ] Test with a valid ID, then an invalid one — confirm you get a `404`.

### Update (`PATCH`)
- [ ] Add:
```python
class TaskUpdate(BaseModel):
    title: Optional[str] = None
    completed: Optional[bool] = None

@app.patch("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, update: TaskUpdate):
    for task in tasks:
        if task.id == task_id:
            if update.title is not None:
                task.title = update.title
            if update.completed is not None:
                task.completed = update.completed
            return task
    raise HTTPException(status_code=404, detail="Task not found")
```
- [ ] Test marking a task as `completed: true`

### Delete (`DELETE`)
- [ ] Add:
```python
@app.delete("/tasks/{task_id}", status_code=204)
def delete_task(task_id: int):
    for i, task in enumerate(tasks):
        if task.id == task_id:
            tasks.pop(i)
            return
    raise HTTPException(status_code=404, detail="Task not found")
```
- [ ] Test deleting a task, then confirm `GET /tasks/{id}` now returns `404`

**Checkpoint:** You now have full CRUD — all five REST operations from the Notes file, Section 5.

---

## Part 5 — Making It Cross-Platform Ready

Right now, your API only fully works when accessed from tools like `/docs` or `curl`. A **browser-based frontend** (React, Vue, a mobile web view) will be blocked by default. This is deliberate browser security — but you control it.

- [ ] Install CORS middleware support (already included in FastAPI, just import it):
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # in production: specific domains only, never "*"
    allow_methods=["*"],
    allow_headers=["*"],
)
```
- [ ] Restart the server and confirm it still runs.

**What just happened:** CORS (Cross-Origin Resource Sharing) is the browser's gatekeeper. Without this, a website running on `mywebsite.com` cannot call an API running on `localhost:8000` — the browser blocks it by default. This middleware tells the browser "these origins are allowed to talk to me."

- [ ] Test cross-platform reach conceptually: this same API, unmodified, could now be called by:
  - A web app (fetch/axios)
  - A mobile app (Swift/Kotlin/React Native HTTP client)
  - Another backend service
  - Postman or curl

  You don't need to build all of these — just understand that **nothing about your API code changes** to support any of them. That's the cross-platform payoff.

---

## Part 6 — Production Concepts (conceptual, not deployed)

These are the ideas you need to *understand* before you ship an API for real. You won't deploy this one — this section is deliberately concept-only, per what you asked for.

- [ ] **Read and understand: Environment Variables**
  Secrets (database passwords, API keys) are never hard-coded into your source file. They're injected via environment variables (e.g. a `.env` file, read with a library like `python-dotenv`) so the same code can run in dev, staging, and production with different secrets.

- [ ] **Read and understand: Authentication in production**
  Right now your API has zero auth — anyone can hit any endpoint. In production you'd add:
  - An `Authorization: Bearer <token>` header check on protected routes
  - FastAPI has built-in `Depends()` injection for this — a function that runs before your endpoint and rejects the request if the token is missing/invalid

- [ ] **Read and understand: Deployment**
  Your API currently only runs on your machine (`127.0.0.1` = "this computer only"). Production deployment means running it on a server that's reachable from the internet — common paths:
  - A cloud VM (AWS EC2, DigitalOcean droplet)
  - A containerized deployment (Docker + a host like Railway, Render, Fly.io)
  - A serverless platform (AWS Lambda via Mangum)

- [ ] **Read and understand: Monitoring & Logging**
  In production, you don't watch your terminal — you need:
  - **Logging**: structured records of what happened (which endpoint, what status code, how long it took)
  - **Monitoring/alerting**: something (e.g. a tool like Sentry, Datadog) that tells you *automatically* when error rates spike, rather than you finding out from an angry user

- [ ] **Read and understand: Rate Limiting**
  Prevents one client from overwhelming your API (accidentally, via a bug, or maliciously). Typically implemented as middleware that tracks requests-per-client-per-time-window.

- [ ] **Read and understand: Versioning**
  Once real clients depend on your API, you can't just change its behavior — you'd break them. Common pattern: prefix routes with a version, e.g. `/v1/tasks`, and introduce `/v2/tasks` alongside it when you need breaking changes, giving clients time to migrate.

---

## Part 7 — Wrap-Up Checklist

- [ ] I can explain, in my own words, the difference between `PUT` and `PATCH`
- [ ] I can explain why REST URLs use nouns, not verbs
- [ ] I understand why CORS exists and what it protects against
- [ ] I understand the difference between authentication and authorization
- [ ] I can name at least 3 things that change between "runs on my laptop" and "running in production"
- [ ] My CRUD API runs locally and all 5 endpoints work when tested in `/docs`

---

## Where This Goes Next (not part of this file — just context)

When you're ready to go further, the natural next steps are: swapping the in-memory list for a real PostgreSQL database, adding real JWT-based auth, and containerizing with Docker for actual deployment. Say the word when you want that as its own guided file.
