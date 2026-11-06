# 05 — System, Data and Cloud

This file covers the tools that look after your work: the Question studio, Data & recovery (backups), resetting, optional Cloud sync, plus a **consolidated troubleshooting section and FAQ** for the whole app.

## 1. Where your data lives

Everything is stored in your browser's local storage on this device, under this browser profile. There is no account and nothing is uploaded unless you use Cloud sync.

| Data | Included in a backup? |
|---|---|
| Exam history (last 50), seen-question record, saved unfinished exam, settings | Yes |
| Spaced-repetition (Review queue) data | Yes |
| Authored questions (Question studio) | Yes |
| Live lab network state and topology | Yes |
| **Guided-drill progress and XP** | **No** |
| **Last Twin session** | **No** |
| **CLI Lab per-device terminal history, completed cases and selected case** | **No** |

> The last three rows matter. A backup restore, or cloud sync, will **not** bring back your drill XP or your CLI Lab completions. If you clear the browser data you lose them. Download any Twin ZIPs you want to keep.

## 2. Data & recovery (backups)

Sidebar → **SYSTEM → Data & recovery**.

### Create a backup
- [ ] Open Data & recovery
- [ ] Click **Download backup** (saves a JSON file), or **Generate backup JSON** to view it on screen, then **Download directly**
- [ ] Store the file somewhere safe (cloud drive, email to yourself)

### Restore a backup
- [ ] Click **Import backup** and choose the file. A message confirms it is a valid backup and shows its size
- [ ] Click **Restore current backup**
- [ ] Click **Reload workspace** so every screen picks up the restored data

Invalid or damaged files are rejected with an error message and nothing is changed.

### The connection indicator
The page also shows whether the browser is online or offline. Backups work either way.

### Backup routine
- [ ] Back up before every browser or OS update
- [ ] Back up before clicking **Reset data**
- [ ] Back up weekly, and after every full exam
- [ ] Keep at least the last two backups

### Moving to a new device
- [ ] Old device: download a backup
- [ ] New device: open Driller Bill, Data & recovery → Import → Restore → Reload
- [ ] Note that drill XP and CLI Lab completions do not move (see section 1)

## 3. Resetting

| Action | Where | What it removes |
|---|---|---|
| **Reset data** | Console footer | Exam history, mistakes, mastery, saved forms, seen record (confirmation required) |
| **Reset lab** | CLI Lab | Returns the live network to healthy and clears every case completion and terminal history (confirmation required) |
| **Reset live network** | Packet Workshop | Restores the healthy network |
| **Reset** | Topology workbench | Restores the demo topology |
| **Reset family draft** | Question studio | Reverts the edits to one question family |

Always back up first. Reset actions cannot be undone.

## 4. Question studio

Sidebar → **LEARN → Question studio**. Write your own CCNA questions; published ones join the exam generator.

### Vocabulary
- A **family** is one concept with **exactly five variants** (different wordings, numbers or options).
- A family is **published** only when it passes the **content gate**.

### Walkthrough: write a family
- [ ] Click **+ New family** (or **Create first family** the first time)
- [ ] Fill in **name**, **domain** (01–06), **objective** (format like `2.3`) and **concept**
- [ ] Edit **variants V1 to V5**: prompt, options, correct answer(s), rationale
- [ ] Open **Candidate view** to preview how a learner will see it
- [ ] Check **Content gate**; fix every listed error (for example "Exactly five variants are required")
- [ ] Click **Validate & publish**. The family is marked **LIVE**
- [ ] Take a matching Domain Drill to confirm it appears

### Other controls
- **Duplicate** and **Delete** a family
- **Unpublish** takes it out of exams without deleting it
- **Search** by name, objective or concept; **Published only** filters the list
- **Import JSON / Export bank** move families between devices or share them
- Status badges: **READY** (valid) or **n ERRORS**; **x/5 variants** shows how complete it is

Authored questions are included in backups.

## 5. Cloud sync (optional)

Sidebar → **SYSTEM → Cloud sync**. Lets you keep a copy of your study snapshot on a server so it can follow you between devices. It needs the server side (FastAPI + PostgreSQL) to be running and reachable; without it the page will show connection errors and the rest of the app is unaffected.

### The rules
- Local first: nothing is sent until you press a button.
- Signing in or creating an account does **not** upload anything by itself.
- The snapshot is the same data as a backup (see the table in section 1).

### Walkthrough
- [ ] Open Cloud sync
- [ ] **Create your account** (email, password) or **Sign in**
- [ ] Click **Push local → cloud** to save your current data to the server
- [ ] On another device: sign in, then click **Pull cloud → local**
- [ ] **Refresh status** shows the server revision and last update time
- [ ] **Sign out** when using a shared computer

### Conflicts
If the server copy changed after your last sync (for example you studied on two devices), the push is refused and you see a conflict. Before showing the options, Driller Bill **stores a local backup of your current snapshot**. You then choose:

| Option | Result |
|---|---|
| **Use server copy** | Replaces local data with the server version |
| **Explicit overwrite** | Replaces the server copy with your local version |

Take a manual backup first if you are unsure which side is newer.

## 6. Consolidated troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Everything is empty | Different browser/profile, or private window | Open the original browser, or restore a backup |
| History stops at 50 attempts | Storage limit by design | Export backups regularly |
| Page blank or odd after an update | Cached old version | Hard refresh (Ctrl+Shift+R); unregister the service worker in dev tools if needed |
| "Storage blocked" or nothing saves | Private mode or strict privacy settings | Use a normal window and allow site storage; otherwise data lives in memory only |
| Restore says "not a valid backup" | Wrong or edited file | Use a file created by **Download backup**; don't hand-edit it |
| Restored data not visible | Screen not refreshed | Click **Reload workspace** |
| Cloud pages show errors | Server not running or unreachable | Check the deployment; the app works without it |
| Cloud conflict | Two devices changed data | See section 5; a local safety copy is made automatically |
| Exam shortcuts ignored | Focus is in a field, or Ctrl/Cmd/Alt held | Click the page background |
| App crashed to an error screen | Unexpected error | Reload; if it repeats, restore from a backup and report it |
| Lab shows a fault I didn't create | Shared live network | **Reset live network** (Packet Workshop) |

## 7. FAQ

**Is this the real CCNA exam?**
No. It is a study tool. Scores are training diagnostics and do not predict your Cisco result. Labs are simulations of a subset of IOS.

**Does it work offline?**
Yes, after the first online load of the production build (installed as a PWA or cached by the browser).

**Is my data private?**
It stays in your browser unless you use Cloud sync or share a backup or Twin ZIP. Twin redacts obvious secrets, but review exports before sharing.

**Why do I keep seeing new questions?**
The generator favours variants you haven't seen. Use **Cold start** to reset that preference for a form.

**How many questions are there?**
1,935 authored questions in 387 families, covering all 53 objectives, plus any you publish yourself.

**Can I use it on a phone?**
Yes. The sidebar becomes a menu (☰). Terminals work best with an external keyboard.

**Do exams count negative marks?**
No. Each question is right or wrong; multiple-response questions need the correct set.

**What happens if the timer ends?**
The exam is submitted automatically and marked as auto-submitted.

**Can two people share one browser?**
Only by sharing the data. Use separate browser profiles instead.

**Why isn't my drill XP in my backup?**
Guided-drill progress uses its own storage that the backup does not currently include (section 1).

**How do I contribute a drill or question?**
Questions: Question studio → Export bank. Drills: Create drill → Export Drill JSON, then follow `src/driller-bill/content/drills/README.md`.

## Tips

- Set a weekly reminder to download a backup.
- Name backup files with the date, for example `driller-bill-2026-10-05.json`.
- Keep Twin ZIPs from your best and worst drills; the difference is a useful study record.
- Before pressing **Reset data**, ask yourself if you have a backup from today.
