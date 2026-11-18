from fastapi import FastAPI
from fastapi import HTTPException
from pydantic import BaseModel
from typing import Optional

class Task(BaseModel):
    id: int
    title: str
    completed: bool = False
    
class TaskCreate(BaseModel):
    title: str
    completed: Optional[bool] = False

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    completed: Optional[bool] = None

tasks: list[Task] = []
next_id = 1


app = FastAPI()

@app.get("/")
def root():
    return {"message": "API is alive"}

@app.get("/tasks", response_model=list[Task])
def get_task():
    return tasks

@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    for task in tasks:
        if task.id == task_id:
            return task
    raise HTTPException(status_code=404, detail="Task not found")

@app.post("/tasks", response_model=Task, status_code=201)
def create_task(task: TaskCreate):
    global next_id
    new_task = Task(id=next_id, title=task.title, completed=task.completed)
    tasks.append(new_task)
    next_id += 1
    return new_task

@app.patch("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int,  update: TaskUpdate):
    for task in tasks:
        if task.id == task_id:
            if update.title is not None:
                task.title = update.title
            if update.completed is not None:
                task.completed = update.completed
            return task
    raise HTTPException(status_code=404, detail="Task not found")

@app.delete("/tasks/{task_id}", status_code=204)
def delete_task(task_id: int):
    for i, task in enumerate(tasks):
        if task.id == task_id:
            tasks.pop(i)
            return
    raise HTTPexception(status_code=404, detail="Task not found")
