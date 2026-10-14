'use client';

import { useCallback, useEffect, useState } from 'react';

async function readJson(response) {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || `Request failed (${response.status}).`);
  return payload;
}

export default function TaskApp({ identity }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const loadTasks = useCallback(async () => {
    setError('');
    try {
      const response = await fetch('/api/tasks', { cache: 'no-store' });
      const payload = await readJson(response);
      setTasks(payload.tasks);
    } catch (loadError) {
      setError(loadError.message || 'Unable to load tasks.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadTasks(); }, [loadTasks]);

  async function createTask(event) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setError('Enter a task title first.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: cleanTitle }),
      });
      const payload = await readJson(response);
      setTasks((current) => [payload.task, ...current]);
      setTitle('');
    } catch (saveError) {
      setError(saveError.message || 'Unable to create task.');
    } finally {
      setSaving(false);
    }
  }

  async function toggleTask(task) {
    setError('');
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !task.completed }),
      });
      const payload = await readJson(response);
      setTasks((current) => current.map((item) => item.id === task.id ? payload.task : item));
    } catch (updateError) {
      setError(updateError.message || 'Unable to update task.');
    }
  }

  async function deleteTask(task) {
    setError('');
    try {
      const response = await fetch(`/api/tasks/${task.id}`, { method: 'DELETE' });
      await readJson(response);
      setTasks((current) => current.filter((item) => item.id !== task.id));
    } catch (deleteError) {
      setError(deleteError.message || 'Unable to delete task.');
    }
  }

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Task Ledger home"><span className="brand-mark">TL</span><span>Task Ledger</span></a>
        <span className="identity-chip" title="Verified application identity">{identity}</span>
      </header>

      <section className="intro">
        <p className="eyebrow">COURSE 15 · PRIVATE WORKSPACE</p>
        <h1>Make progress <span>visible.</span></h1>
        <p className="intro-copy">A simple list, stored persistently and scoped to your verified identity.</p>
      </section>

      <section className="workspace" aria-labelledby="tasks-heading">
        <div className="workspace-head">
          <div>
            <p className="eyebrow">YOUR WORKSPACE</p>
            <h2 id="tasks-heading">Tasks</h2>
          </div>
          <div className="task-count" aria-live="polite"><strong>{completedCount}</strong><span> of {tasks.length} done</span></div>
        </div>

        <form className="create-form" onSubmit={createTask}>
          <label className="visually-hidden" htmlFor="task-title">New task title</label>
          <input
            id="task-title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={160}
            placeholder="Add something worth doing…"
            autoComplete="off"
          />
          <button type="submit" disabled={saving}>{saving ? 'Adding…' : 'Add task'}</button>
        </form>

        {error && <p className="error-banner" role="alert">{error}</p>}

        {loading ? (
          <p className="empty-state" role="status">Loading your tasks…</p>
        ) : tasks.length === 0 ? (
          <div className="empty-state"><span className="empty-icon" aria-hidden="true">＋</span><h3>A clean slate.</h3><p>Add your first task to get started.</p></div>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li className={`task-row${task.completed ? ' is-complete' : ''}`} key={task.id}>
                <label className="task-check">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task)} />
                  <span className="custom-check" aria-hidden="true" />
                  <span className="task-title">{task.title}</span>
                </label>
                <button className="delete-button" type="button" onClick={() => deleteTask(task)} aria-label={`Delete ${task.title}`}>Delete</button>
              </li>
            ))}
          </ul>
        )}
        <footer className="workspace-foot"><span>Stored in PostgreSQL</span><span>Identity-scoped access</span></footer>
      </section>

      <p className="footnote">Course 15 reference app · No public sign-up · Access governed by the configured identity gateway.</p>
    </main>
  );
}
