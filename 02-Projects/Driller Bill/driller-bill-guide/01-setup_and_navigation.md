# 01 — Setup and Navigation

## 1. What you need

| Requirement | Detail |
|---|---|
| Browser | Any current Chrome, Edge, Firefox or Safari |
| Node.js | Version 20.19 or newer (only if you run it yourself) |
| Internet | Not needed after the first load; the app works offline once installed as a PWA |
| Account | None. Cloud sync is optional (see file 05) |

Your data lives in the browser's local storage. That means it is tied to **one browser on one device**. Use backups (file 05) if you switch devices.

## 2. Running Driller Bill

### Option A — Use a hosted copy
If someone gave you a URL, open it. Skip to section 3.

### Option B — Run it on your own machine
- [ ] Unzip the project and open a terminal in the `driller-merged` folder
- [ ] Run `npm install`
- [ ] (Optional) Run `npm run doctor` to confirm Node and dependencies are fine
- [ ] Run `npm run dev` and open the address it prints (Vite usually shows `http://localhost:5173`)

To produce a production build, run `npm run build`; the output is in `dist/`. Preview it with `npm run preview`.

### Option C — Self-hosted with cloud sync
Only needed if you want accounts and sync. Uses Docker, Nginx, a FastAPI service and PostgreSQL:
- [ ] Set `PF_DB_PASSWORD`, `PF_JWT_SECRET` and `PF_ALLOWED_ORIGINS`
- [ ] Run `docker compose -f docker-compose.cloud.yml up -d --build`

## 3. Install it like an app (optional)

Driller Bill is a PWA, so you can install it and use it offline.
- **Chrome / Edge (desktop):** click the install icon in the address bar.
- **Android:** browser menu → *Install app* or *Add to Home screen*.
- **iPhone / iPad:** Share → *Add to Home Screen*.

Offline support only applies to the production build, not `npm run dev`. The first load must be online.

## 4. The screen layout

```
┌───────────┬──────────────────────────────────────────┐
│ SIDEBAR   │  Main content for the selected section   │
│           │                                          │
│ Console   │                                          │
│ Learn…    │                                          │
│ Practice… │                                          │
│ Lab…      │                                          │
│ System…   │                                          │
│ Quick     │                                          │
│ start     │                                          │
└───────────┴──────────────────────────────────────────┘
```

### The sidebar
- Sections: **START**, **LEARN**, **PRACTICE**, **NETWORK LAB**, **SYSTEM**, then **QUICK START**.
- Two badges show live counts: the **Review queue** shows cards due, the **Mistake bank** shows missed questions.
- The **‹ / ›** button at the top collapses the sidebar to icons. Hover an icon for its name. Your choice is remembered.
- While an assessment is running, Quick start is replaced by **Assessment in progress**.
- Clicking the logo returns to the Console.

### On a phone or narrow window
- The sidebar becomes a drawer. Tap the **☰** button to open it.
- Tap outside the drawer, pick an item, or press `Esc` to close it.
- The page behind the drawer will not scroll while it is open.

### Skip link
Keyboard and screen-reader users can press `Tab` once on page load to reveal **Skip to main content**.

## 5. Direct links and the Back button

Each section has its own address, so you can bookmark it or press Back to return.

| Address ending | Opens |
|---|---|
| `#/dashboard` | Console |
| `#/drills` | Guided drills |
| `#/studio` | Question studio |
| `#/mistakes` | Mistake bank |
| `#/review` | Review queue |
| `#/analytics` | Progress & analytics |
| `#/lab` | CLI Lab |
| `#/topology` | Topology workbench |
| `#/protocol` | Protocol Lab |
| `#/flow` | Flow Lab |
| `#/packet` | Packet Lab |
| `#/packet-workshop` | Packet Workshop |
| `#/advanced` | Advanced PBQs |
| `#/data-safety` | Data & recovery |
| `#/cloud` | Cloud sync |

The browser tab title changes to match the section, which helps if you keep several tabs open.

Inside a section, sub-views (for example Notes inside Guided drills) do not have their own address. Back takes you to the previous section, not the previous sub-view.

## 6. Leaving things safely

| You do this | What happens |
|---|---|
| Click any sidebar item during an exam | You are asked to confirm. Your saved form stays available to resume |
| Click **Exit** inside an exam | You are asked; confirming **discards** the saved form |
| Click **Exit drill** after typing commands | You are asked; confirming discards that drill session |
| Close the tab mid-exam | The form is saved automatically; resume from the Console |

If two of these seem to disagree, remember: *navigating away* keeps the saved form, *Exit* throws it away.

## Troubleshooting

| Problem | Fix |
|---|---|
| Blank page after `npm run dev` | Check the terminal for errors, run `npm install` again, confirm Node ≥ 20.19 with `node -v` |
| Old version still showing after an update | The offline cache is holding the old files. Hard refresh (Ctrl+Shift+R), or in browser dev tools → Application → Service Workers → *Unregister* |
| Progress "disappeared" | You are probably in a different browser, profile or private window. Data does not follow you between them. Restore from a backup (file 05) |
| Sidebar hidden on a small screen | Tap **☰** in the corner |
| Install button not offered | Install needs the production build served over HTTPS (or localhost) |
| Storage blocked (private mode, strict settings) | The app falls back to in-memory storage: it works, but everything is lost when you close the tab |

## Tips

- Collapse the sidebar in labs to give the terminal more width.
- Bookmark `#/review` and open it first thing each day.
- Avoid running the app in two tabs at once. Both write to the same local storage, and the last tab to save wins.
