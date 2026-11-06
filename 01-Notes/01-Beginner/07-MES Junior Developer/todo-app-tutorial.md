# To-Do List App: Python + FastAPI + PostgreSQL + React

A step-by-step build. Every step uses the same format:

- **Goal**: what you are making
- **Do**: the exact things to type or run
- **Why**: what it means, in plain words
- **Check**: how you know it worked

Tick the boxes as you go. If a Check fails, do not move on. Go to the Troubleshooting section at the end.

---

## The Big Picture (read this once)

```
 React (browser)  --HTTP/JSON-->  FastAPI (Python)  --SQL-->  PostgreSQL
   what you see                    the "middleman"              where data lives
   localhost:5173                  localhost:8000               localhost:5432
```

- **PostgreSQL** stores the to-dos permanently.
- **FastAPI** is the backend. It exposes URLs (called endpoints) like `GET /todos`.
- **React** is the frontend. It calls those URLs and shows the results.

What the finished app does (called CRUD):

- [ ] Create a to-do
- [ ] Read (list) to-dos
- [ ] Update a to-do (tick done / edit title)
- [ ] Delete a to-do

## Final Folder Structure

```
todo-app/
├── backend/
│   ├── venv/            (created by you, not typed by hand)
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   └── main.py
└── frontend/            (created by Vite)
    └── src/
        ├── App.jsx
        ├── api.js
        └── App.css
```

## Progress Tracker

**Part A: Setup**
- [ ] Step 0: Check your tools
- [ ] Step 1: Create the PostgreSQL database

**Part B: Backend (Python / FastAPI)**
- [ ] Step 2: Project folder and virtual environment
- [ ] Step 3: Install packages
- [ ] Step 4: Database connection (`database.py`)
- [ ] Step 5: Database table definition (`models.py`)
- [ ] Step 6: Data shapes (`schemas.py`)
- [ ] Step 7: API endpoints (`main.py`)
- [ ] Step 8: Run and test the backend

**Part C: Frontend (React)**
- [ ] Step 9: Create the React project
- [ ] Step 10: API helper (`api.js`)
- [ ] Step 11: Main component (`App.jsx`)
- [ ] Step 12: Styling (`App.css`)
- [ ] Step 13: Run everything together

**Part D: Finish**
- [ ] Step 14: Test the full app
- [ ] Step 15: Understand the flow (review)

---

# PART A: SETUP

## Step 0: Check your tools

**Goal**: Make sure the required programs are installed.

**Do**: Open a terminal and run each command.

```bash
python --version      # need 3.10 or higher (on some systems use python3)
node --version        # need 18 or higher
npm --version
psql --version        # PostgreSQL client
```

**Why**: Python runs the backend, Node/npm runs the frontend, PostgreSQL is the database.

**Check**: Each command prints a version number.

If something is missing:
- Python: https://www.python.org/downloads/
- Node.js: https://nodejs.org (choose LTS)
- PostgreSQL: https://www.postgresql.org/download/

- [ ] Step 0 done

---

## Step 1: Create the PostgreSQL database

**Goal**: Make an empty database and a user that owns it.

**Do**: Open the PostgreSQL shell.

```bash
# Linux:
sudo -u postgres psql

# macOS / Windows (use the postgres password you set at install):
psql -U postgres
```

Now type these SQL lines (the semicolons matter):

```sql
CREATE USER todo_user WITH PASSWORD 'todo_pass';
CREATE DATABASE todo_db OWNER todo_user;
\q
```

**Why**: Your app should have its own user and database instead of using the admin account. `\q` quits the shell.

**Check**: Log in as the new user.

```bash
psql -U todo_user -d todo_db -h localhost
```

You see a prompt like `todo_db=>`. Type `\q` to leave.

> Note: `todo_pass` is fine for learning on your own machine. Never use a password like this on a real server.

- [ ] Step 1 done

---

# PART B: BACKEND

## Step 2: Project folder and virtual environment

**Goal**: Make the project folder and an isolated Python environment.

**Do**:

```bash
mkdir todo-app
cd todo-app
mkdir backend
cd backend
python -m venv venv
```

Activate it:

```bash
# Linux / macOS:
source venv/bin/activate

# Windows (PowerShell):
venv\Scripts\Activate.ps1

# Windows (cmd):
venv\Scripts\activate.bat
```

**Why**: A virtual environment keeps this project's packages separate from everything else on your computer.

**Check**: Your terminal prompt now starts with `(venv)`.

- [ ] Step 2 done

---

## Step 3: Install packages

**Goal**: Install the Python libraries.

**Do**:

```bash
pip install fastapi "uvicorn[standard]" sqlalchemy psycopg2-binary
```

**Why** (one line each):
- `fastapi`: the web framework that builds the API
- `uvicorn`: the server that runs FastAPI
- `sqlalchemy`: lets you use Python classes instead of writing raw SQL
- `psycopg2-binary`: the driver that lets Python talk to PostgreSQL

**Check**:

```bash
pip list
```

You see all four names in the list.

- [ ] Step 3 done

---

## Step 4: Database connection (`database.py`)

**Goal**: Tell Python how to connect to PostgreSQL.

**Do**: Create `backend/database.py`:

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL = "postgresql://todo_user:todo_pass@localhost:5432/todo_db"

# The engine is the actual connection to the database
engine = create_engine(DATABASE_URL)

# A session is one "conversation" with the database
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)


# All table classes will inherit from this
class Base(DeclarativeBase):
    pass


# FastAPI will call this for every request to get a session,
# then close it when the request is finished.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

**Why**: This file is the only place that knows the database address. Every other file imports from here.

**Check**: No output yet. Just make sure the file is saved in `backend/`.

- [ ] Step 4 done

---

## Step 5: Database table definition (`models.py`)

**Goal**: Describe the `todos` table as a Python class.

**Do**: Create `backend/models.py`:

```python
from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from database import Base


class Todo(Base):
    __tablename__ = "todos"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String(200))
    completed: Mapped[bool] = mapped_column(Boolean, default=False)
```

**Why**: This class becomes a real table with three columns:

| Column | Type | Meaning |
|---|---|---|
| id | integer | unique number, auto-increases |
| title | text (max 200) | what you need to do |
| completed | true/false | is it done |

**Check**: Saved. The table gets created in Step 7.

- [ ] Step 5 done

---

## Step 6: Data shapes (`schemas.py`)

**Goal**: Define what data the API accepts and returns.

**Do**: Create `backend/schemas.py`:

```python
from pydantic import BaseModel, ConfigDict


# What the client sends when CREATING a to-do
class TodoCreate(BaseModel):
    title: str


# What the client sends when UPDATING a to-do
# Both fields are optional so you can change just one
class TodoUpdate(BaseModel):
    title: str | None = None
    completed: bool | None = None


# What the API sends BACK
class TodoOut(BaseModel):
    id: int
    title: str
    completed: bool

    # lets Pydantic read data straight from a database object
    model_config = ConfigDict(from_attributes=True)
```

**Why**: `models.py` describes the database. `schemas.py` describes the data going in and out over the internet. They are separate on purpose. FastAPI uses schemas to check incoming data automatically. If someone sends a number as the title, FastAPI rejects it with a clear error.

**Check**: Saved.

- [ ] Step 6 done

---

## Step 7: API endpoints (`main.py`)

**Goal**: Build the four CRUD endpoints.

**Do**: Create `backend/main.py`:

```python
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
from database import engine, get_db

# Create the "todos" table if it does not exist yet
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="To-Do API")

# Allow the React app (port 5173) to call this API (port 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------- READ (list all) ----------
@app.get("/todos", response_model=list[schemas.TodoOut])
def list_todos(db: Session = Depends(get_db)):
    return db.query(models.Todo).order_by(models.Todo.id).all()


# ---------- CREATE ----------
@app.post("/todos", response_model=schemas.TodoOut, status_code=201)
def create_todo(data: schemas.TodoCreate, db: Session = Depends(get_db)):
    todo = models.Todo(title=data.title)
    db.add(todo)
    db.commit()
    db.refresh(todo)  # reload so we get the generated id
    return todo


# ---------- UPDATE ----------
@app.patch("/todos/{todo_id}", response_model=schemas.TodoOut)
def update_todo(todo_id: int, data: schemas.TodoUpdate, db: Session = Depends(get_db)):
    todo = db.get(models.Todo, todo_id)
    if todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")

    # only change fields the client actually sent
    changes = data.model_dump(exclude_unset=True)
    for field, value in changes.items():
        setattr(todo, field, value)

    db.commit()
    db.refresh(todo)
    return todo


# ---------- DELETE ----------
@app.delete("/todos/{todo_id}", status_code=204)
def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    todo = db.get(models.Todo, todo_id)
    if todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")

    db.delete(todo)
    db.commit()
```

**Why** (the key ideas):

| Piece | Meaning |
|---|---|
| `@app.get("/todos")` | "When someone visits GET /todos, run this function" |
| `Depends(get_db)` | FastAPI gives the function a database session automatically |
| `response_model` | Output is shaped by `TodoOut` |
| `db.add` + `db.commit` | Stage the change, then save it for real |
| `HTTPException 404` | Sends a proper "not found" error |
| CORS middleware | Browsers block calls between different ports unless the backend allows it |

| Action | HTTP method | URL |
|---|---|---|
| Create | POST | /todos |
| Read all | GET | /todos |
| Update | PATCH | /todos/{id} |
| Delete | DELETE | /todos/{id} |

**Check**: Saved. Your `backend/` folder now has `database.py`, `models.py`, `schemas.py`, `main.py` (plus `venv/`).

- [ ] Step 7 done

---

## Step 8: Run and test the backend

**Goal**: Start the server and try every endpoint.

**Do**: In `backend/` with `(venv)` active:

```bash
uvicorn main:app --reload
```

**Why**: `main:app` means "file `main.py`, object `app`". `--reload` restarts the server whenever you save a file.

**Check**:
1. The terminal says `Uvicorn running on http://127.0.0.1:8000`
2. Open http://localhost:8000/docs in your browser. FastAPI generates an interactive test page for you.
3. Click **POST /todos**, then **Try it out**, enter `{"title": "Learn FastAPI"}`, click **Execute**. You get a `201` response with an `id`.
4. Click **GET /todos**, then **Try it out**, then **Execute**. You see your to-do in the list.
5. Try **PATCH** with id `1` and body `{"completed": true}`.
6. Try **DELETE** with id `1`. Then run GET again. The list is empty.

Optional: confirm it is really in PostgreSQL.

```bash
psql -U todo_user -d todo_db -h localhost -c "SELECT * FROM todos;"
```

Leave this terminal running. Open a **new terminal** for Part C.

- [ ] Step 8 done (all four endpoints worked in /docs)

---

# PART C: FRONTEND

## Step 9: Create the React project

**Goal**: Generate a React app with Vite.

**Do**: In the **new terminal**, go to the `todo-app` folder (not `backend`):

```bash
cd todo-app
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

If it asks questions, pick **React** and **JavaScript**.

**Why**: Vite is a fast tool that sets up React and runs a development server.

**Check**: You have a `frontend/` folder next to `backend/`.

- [ ] Step 9 done

---

## Step 10: API helper (`api.js`)

**Goal**: Put all backend calls in one file.

**Do**: Create `frontend/src/api.js`:

```javascript
const API_URL = "http://localhost:8000";

export async function getTodos() {
  const res = await fetch(`${API_URL}/todos`);
  if (!res.ok) throw new Error("Failed to load todos");
  return res.json();
}

export async function createTodo(title) {
  const res = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error("Failed to create todo");
  return res.json();
}

export async function updateTodo(id, changes) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changes),
  });
  if (!res.ok) throw new Error("Failed to update todo");
  return res.json();
}

export async function deleteTodo(id) {
  const res = await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete todo");
}
```

**Why**: Components stay clean because they call `getTodos()` instead of repeating `fetch` details. If the backend address changes, you edit one line.

**Check**: Saved.

- [ ] Step 10 done

---

## Step 11: Main component (`App.jsx`)

**Goal**: Build the screen.

**Do**: Replace everything in `frontend/src/App.jsx` with:

```jsx
import { useState, useEffect } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);      // the list
  const [newTitle, setNewTitle] = useState(""); // text in the input box
  const [error, setError] = useState("");

  // Runs once when the page first loads
  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    try {
      const data = await getTodos();
      setTodos(data);
      setError("");
    } catch (err) {
      setError("Could not reach the server. Is the backend running?");
    }
  }

  async function handleAdd(e) {
    e.preventDefault();                 // stop the page from reloading
    const title = newTitle.trim();
    if (!title) return;
    try {
      const created = await createTodo(title);
      setTodos([...todos, created]);    // add to the end of the list
      setNewTitle("");
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleToggle(todo) {
    try {
      const updated = await updateTodo(todo.id, { completed: !todo.completed });
      setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="app">
      <h1>My To-Do List</h1>

      <form onSubmit={handleAdd} className="add-form">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {error && <p className="error">{error}</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "done" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo)}
            />
            <span>{todo.title}</span>
            <button className="delete" onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p className="count">
        {remaining} {remaining === 1 ? "task" : "tasks"} left
      </p>
    </div>
  );
}

export default App;
```

**Why** (the React ideas used):

| Idea | Meaning |
|---|---|
| `useState` | Memory for the component. When it changes, the screen updates. |
| `useEffect(..., [])` | "Run this once when the page loads." We use it to fetch the list. |
| `.map()` | Turn each to-do in the list into one `<li>` on screen. |
| `key={todo.id}` | Helps React track which item is which. |
| `[...todos, created]` | Make a new list with the new item added. React needs a new list, not a changed one. |

**Check**: Saved.

- [ ] Step 11 done

---

## Step 12: Styling (`App.css`)

**Goal**: Make it readable.

**Do**: Replace everything in `frontend/src/App.css` with:

```css
body {
  font-family: system-ui, sans-serif;
  background: #f4f5f7;
  margin: 0;
}

.app {
  max-width: 480px;
  margin: 40px auto;
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-top: 0;
  text-align: center;
}

.add-form {
  display: flex;
  gap: 8px;
}

.add-form input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.todo-list li span {
  flex: 1;
}

.todo-list li.done span {
  text-decoration: line-through;
  color: #888;
}

button.delete {
  background: #dc2626;
  padding: 6px 10px;
  font-size: 14px;
}

button.delete:hover {
  background: #b91c1c;
}

.error {
  color: #dc2626;
  background: #fee2e2;
  padding: 8px;
  border-radius: 4px;
}

.count {
  color: #555;
  text-align: center;
}
```

Also open `frontend/src/index.css` and delete everything in it (the default Vite styles can fight with ours). You can leave the file empty.

**Check**: Saved.

- [ ] Step 12 done

---

## Step 13: Run everything together

**Goal**: Both servers running at once.

**Do**: You need **two terminals open**.

Terminal 1 (backend), if it is not still running:

```bash
cd todo-app/backend
source venv/bin/activate        # Windows: see Step 2
uvicorn main:app --reload
```

Terminal 2 (frontend):

```bash
cd todo-app/frontend
npm run dev
```

**Check**: Terminal 2 prints `Local: http://localhost:5173/`. Open that address in your browser.

- [ ] Step 13 done

---

# PART D: FINISH

## Step 14: Test the full app

Work through this list in the browser:

- [ ] The page loads with the title "My To-Do List"
- [ ] Type a task, click **Add**. It appears in the list.
- [ ] Add two more tasks.
- [ ] Click a checkbox. The task gets a line through it and the counter drops.
- [ ] Click the checkbox again. It goes back to normal.
- [ ] Click **Delete** on one task. It disappears.
- [ ] **Refresh the page.** Your tasks are still there (proof PostgreSQL is saving them).
- [ ] Stop the backend (Ctrl+C in Terminal 1) and refresh. You see the red error message.
- [ ] Restart the backend. Refresh. It works again.

- [ ] Step 14 done

---

## Step 15: Understand the flow (review)

Follow one action all the way through. You click **Add** with the text "Buy milk":

1. React's `handleAdd` runs and calls `createTodo("Buy milk")` from `api.js`.
2. `fetch` sends `POST http://localhost:8000/todos` with `{"title": "Buy milk"}`.
3. FastAPI receives it. `TodoCreate` checks the data is valid.
4. `create_todo` makes a `models.Todo`, adds it, and commits to PostgreSQL.
5. PostgreSQL stores a new row and generates `id`.
6. FastAPI returns the new to-do as JSON, shaped by `TodoOut`.
7. React gets that JSON, calls `setTodos`, and the list on screen updates.

If you can explain those seven steps in your own words, you understand the whole stack.

- [ ] Step 15 done

---

# Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| `password authentication failed` | Wrong user/password in `database.py` | Match them to Step 1 exactly |
| `connection refused` on port 5432 | PostgreSQL is not running | Start the PostgreSQL service |
| `database "todo_db" does not exist` | Step 1 not completed | Redo Step 1 |
| `ModuleNotFoundError` | Virtual environment not active, or package not installed | Activate `venv`, rerun the Step 3 `pip install` |
| `uvicorn: command not found` | Same as above | Activate `venv` |
| Browser console shows a CORS error | Origin mismatch | Check the React address is exactly `http://localhost:5173` in `allow_origins` |
| Page shows "Could not reach the server" | Backend not running | Start uvicorn in Terminal 1 |
| `Failed to fetch` | Wrong `API_URL` or backend down | Check `api.js` and that http://localhost:8000/docs opens |
| Table missing columns after you edit `models.py` | `create_all` does not change existing tables | Learning shortcut: in psql run `DROP TABLE todos;` and restart the backend |

---

# What to Learn Next (after this works)

Pick one at a time:

- [ ] Add a `created_at` timestamp column
- [ ] Add an "edit title" feature (use the PATCH endpoint with `title`)
- [ ] Add filters: All / Active / Completed
- [ ] Move the database URL into a `.env` file (never commit passwords)
- [ ] Add user accounts and login (JWT)
- [ ] Learn Alembic for proper database migrations
- [ ] Write tests with `pytest` and FastAPI's `TestClient`
- [ ] Deploy it (backend + managed PostgreSQL + static frontend)
