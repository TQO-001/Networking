# 12 - Refactoring and Reliable Flows

**Time:** 90 to 120 minutes | **Difficulty:** Medium to Hard | **Needs:** files 02 to 11 (at least 07 and 09)
**Mirrors:** repeated nodes across "Office Power Meter", "Aircons", "Rec Fan", "Lights"; the existing subflow for the PM5110

---

## PROGRESS
- [ ] Repeated patterns identified in the workplace flows (on paper)
- [ ] A table-driven schedule built (one flow, many devices)
- [ ] A subflow with an environment variable built
- [ ] Error handling added (catch, status, complete)
- [ ] Context storage made persistent
- [ ] Flows exported to Git with a README
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
The difference between a beginner and someone you trust with the live system is not clever nodes. It is **tidiness and reliability**: flows that are easy to read, easy to change, and that fail loudly instead of silently. Your workplace flows have many copy-paste blocks, which is normal when a system grows, and a great place to practise improving things safely.

---

## 2. CONCEPTS

### Repeated patterns in the workplace flows (from the export)
| Pattern | Where | Cost of repeating it |
|---|---|---|
| Same Modbus request function with a hard-coded IP and unit id | "Office Power Meter" (about 7 copies) | Changing the meter means editing every node |
| `eztimer` + `call service` pairs | "Rec Fan", "Aircons", "Lights" | Adding an office means copying 4 nodes |
| `events: state` → trigger → lights, one per passage | "Lights" | Same logic, slightly different names |
| Many debug nodes / naming gaps | Several tabs | Hard to tell what is what |

### Reliability toolbox
| Tool | What it does |
|---|---|
| **catch** node | Receives errors thrown by other nodes on the tab |
| **status** node | Receives status changes (for example Modbus disconnected) |
| **complete** node | Fires when a node finishes handling a message |
| **link in / out** | Connect flows without long wires |
| **Subflow** | A reusable mini-flow with inputs, outputs and settings |
| **Environment variables** | Per-node or per-flow settings such as `${METER_HOST}` |
| **Persistent context** | Keep `flow`/`global` values across restarts (set in `settings.js`) |
| **Git** | Version history for `flows.json` |

---

## 3. LAPTOP (Windows) - STEP BY STEP

### Part A: Table-driven schedule (replaces many timer pairs)
Goal: one flow that switches many devices on a schedule from a simple table.

- [ ] Create a function node `Device table`:
```javascript
// Edit this table, not the flow
const devices = [
  { name: "Fake Light",   entity: "input_boolean.fake_light",   on: "07:00", off: "17:00" },
  { name: "Fake Aircon",  entity: "input_boolean.fake_aircon",  on: "07:30", off: "16:30" },
];
flow.set("devices", devices);
return null;
```
- [ ] inject (every minute) → function `Scheduler`:
```javascript
const devices = flow.get("devices") || [];
const now = new Date();
const hhmm = now.toTimeString().slice(0, 5);          // "HH:MM"
const dow = now.getDay();                              // 0 = Sunday
const weekday = dow >= 1 && dow <= 5;
const out = [];
for (const d of devices) {
    if (!weekday) continue;
    if (hhmm === d.on)  out.push({ payload: { action: "turn_on",  entity_id: d.entity }, topic: d.name });
    if (hhmm === d.off) out.push({ payload: { action: "turn_off", entity_id: d.entity }, topic: d.name });
}
return [out];                                          // array of messages, one output
```
- [ ] → **call service** node: leave domain/service empty (or set to `homeassistant`) and let `msg.payload` supply `action` and `entity_id`. (Check the node help panel for the exact field names your version expects.)
- [ ] Test by setting an `on` time one minute ahead.

Note: this runs the scheduling logic by minute-matching and is good for learning. In production `eztimer` is more robust (sunrise/sunset, restart handling), so you would keep it and build the table around it. Discuss trade-offs.

### Part B: Reuse with a subflow
- [ ] Select the motion-light nodes from file 08 (events: state → trigger → call service). Menu → Subflows → **Selection to Subflow**.
- [ ] Edit the subflow properties to add environment variables: `MOTION_ENTITY`, `LIGHT_ENTITY`, `MINUTES`.
- [ ] Inside, set the state node's entity to `${MOTION_ENTITY}` (the help text next to each field shows where environment variables are allowed).
- [ ] Drop two instances on a tab and give each different values.

### Part C: Error handling
- [ ] Add a **catch** node (all nodes on the tab) → function:
```javascript
const err = msg.error || {};
msg.payload = {
  ts: new Date().toISOString(),
  node: err.source ? err.source.name || err.source.type : "unknown",
  message: err.message
};
return msg;
```
→ **file** node (append, `C:\node-red-lab\errors.log`) and a debug node.
- [ ] Break something on purpose (`JSON.parse("oops")` in a function) and confirm it lands in the log.
- [ ] Add a **status** node (all nodes) → debug, then stop your Python Modbus simulator. See "disconnected" messages.
- [ ] Add a "watchdog": a **trigger** node (re-triggerable, 60 s) that fires an alert if no Modbus reading arrives for a minute.

### Part D: Persistent context
- [ ] Stop Node-RED. Open `C:\Users\<you>\.node-red\settings.js`.
- [ ] Find `contextStorage` and set:
```javascript
contextStorage: {
    default: { module: "localfilesystem" }
},
```
(Remove the comment markers if it is commented out.) Restart and test that `flow.set` values survive a restart.

### Part E: Naming and documentation
- [ ] Give every node a clear name; name tabs by area (for example `Lights - Passages`).
- [ ] Add a **comment** node at the top of each tab: purpose, owner, entities used, last changed.
- [ ] Color-group related nodes using **Groups** (select nodes → Ctrl+G).

### Part F: Version control
- [ ] In `C:\Users\<you>\.node-red`: `git init`, add a `.gitignore` with `*_cred.json`, `node_modules/`, `.config*`.
- [ ] `git add flows.json settings.js package.json` and commit with a message such as `Add scheduler and subflow`.
- [ ] Make one change, commit again, and run `git diff HEAD~1` to see what changed. Tip: enable pretty-printed JSON (`flowFile` pretty option / the Projects feature) to get readable diffs.

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP (READ-ONLY, PROPOSE ONLY)
- [ ] Choose ONE repeated pattern from the table in section 2 and write a one-page proposal: current state, risk, improvement, effort, rollback plan.
- [ ] Take a **backup export** of the live flows with a date in the file name.
- [ ] If your manager agrees, build the improvement on a **copy of the tab** with **all call-service nodes disabled** (or pointing at test entities), compare behaviour with debug nodes, and only then plan a change window.
- [ ] Check whether Node-RED at work has **Projects** (Git) enabled; if not, ask whether backups are scheduled.
- [ ] Check `node-red-log` on the Pi for errors you have never noticed.

---

## 5. CHECKPOINT
- [ ] One table-driven flow replaces several copied nodes.
- [ ] An error is logged to a file with the node name and time.
- [ ] A restart keeps your context values.
- [ ] Your flows are in Git with sensible commits.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| Two schedulers fighting | Old timers still enabled; disable or delete them |
| Catch node shows nothing | It only sees errors from its own tab (or selected nodes); set scope |
| Environment variable is blank | Subflow property not filled, or typed without `${...}` |
| Persistent context file not created | `settings.js` change not saved or Node-RED not restarted |
| Git diff is unreadable | `flows.json` is one long line; enable pretty-printing |
| Secrets in Git | Never commit `*_cred.json` or tokens; rotate if it happens |
| "Improvements" break production | Never edit live; test on a copy with the outputs disabled |

---

## 7. STRETCH
- [ ] Write a small Python script that reads `flows.json` and prints every entity id used (a simple documentation generator).
- [ ] Turn the Modbus register table from file 09 into a subflow with `HOST`, `PORT`, `UNIT` as environment variables.
- [ ] Add a global error counter shown on a dashboard.

---

## 8. SELF-TEST
1. Name two risks of copy-pasting the same function ten times.
2. What does a subflow environment variable do?
3. Why use a catch node instead of relying on the debug sidebar?
4. Why should you never edit a live tab directly?
5. Which files should never go into Git?

---

## 9. DONE
- [ ] File 12 complete. Next: **13 - Raspberry Pi Deployment**.
