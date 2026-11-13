# 02 - Node-RED Basics

**Time:** 60 to 90 minutes | **Difficulty:** Easy | **Needs:** Node-RED on your laptop (file 00)
**Mirrors:** the building blocks used in every workplace tab (inject, function, change, switch, debug)

---

## PROGRESS
- [ ] Node-RED running on the laptop
- [ ] Exercise A: Hello Flow
- [ ] Exercise B: Change node
- [ ] Exercise C: Function node
- [ ] Exercise D: Switch node (decisions)
- [ ] Exercise E: Context (memory)
- [ ] Exercise F: Export / import
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
Every flow at work is made of the same 6 or 7 node types. If you understand `msg`, wires, and Deploy, you can read any flow.

---

## 2. CONCEPTS

| Term | Meaning |
|---|---|
| Node | A block that does one job |
| Wire | A line along which messages travel |
| Flow | A connected chain of nodes (and also a tab) |
| `msg` | The message object. Main data is `msg.payload`; label is `msg.topic` |
| Deploy | Applies your changes. Nothing runs until you press it |
| Context | Memory: `context` (one node), `flow` (one tab), `global` (everything) |

### The 7 nodes you will use constantly
| Node | Job | Seen at work in |
|---|---|---|
| inject | Starts a flow (button or timer) | "Pulse Source" |
| debug | Prints a message in the sidebar | many tabs |
| function | Run JavaScript on the message | Modbus conversion |
| change | Set/move/delete message properties without code | subflow (sets unitid) |
| switch | Route a message down different outputs | thresholds |
| delay / trigger | Control timing | motion lights |
| join | Combine several messages | power meter subflow |

---

## 3. LAPTOP (Windows) - STEP BY STEP

### Exercise A: Hello Flow
- [ ] Start Node-RED: `node-red`, open `http://localhost:1880`.
- [ ] Drag an **inject** node onto the canvas. Double-click it, set payload type **string** = `hello`. Done.
- [ ] Drag a **debug** node. Wire inject → debug (drag from the little square on the right of inject to the left of debug).
- [ ] Click **Deploy**.
- [ ] Open the **debug sidebar** (bug icon, right panel).
- [ ] Click the button on the left side of the inject node. `hello` appears.

### Exercise B: Change node
- [ ] Add a **change** node between inject and debug.
- [ ] Rule: **Set** `msg.payload` to **string** `HELLO from Node-RED`.
- [ ] Deploy, click inject, compare the output.
- [ ] Add a second rule: **Set** `msg.topic` to `greeting`. Look at the full message in the debug sidebar (click the message to expand).

### Exercise C: Function node
- [ ] Replace the change node with a **function** node:
```javascript
msg.payload = msg.payload.toUpperCase();
msg.topic = "shout";
return msg;
```
- [ ] Deploy and test. What happens if the payload is a number instead of a string? Try it by changing the inject payload type to **number**. You should see an error in the debug sidebar. This is normal and teaches you to read errors.
- [ ] Fix it:
```javascript
msg.payload = String(msg.payload).toUpperCase();
return msg;
```

### Exercise D: Switch node (decisions)
- [ ] inject (number payload, repeat every 2 seconds) → function:
```javascript
msg.payload = Math.round(Math.random() * 40);   // fake temperature 0 to 40
return msg;
```
- [ ] → **switch** node. Rule 1: `msg.payload >= 22`. Rule 2: `otherwise`. (This gives two outputs.)
- [ ] Output 1 → debug named `HOT`. Output 2 → debug named `OK`.
- [ ] Deploy and watch the two debug names. This is the same idea as the aircon logic at work.

### Exercise E: Context (memory)
Count how many hot readings you have had:
- [ ] On the HOT path add a function node:
```javascript
let count = flow.get("hotCount") || 0;
count++;
flow.set("hotCount", count);
msg.payload = "Hot readings so far: " + count;
return msg;
```
- [ ] → debug. Deploy; the count goes up. Redeploy only the flow ("Modified flows" deploy mode) vs full deploy and note what happens to the count.
- [ ] Open the **Context Data** sidebar (database icon) and see the stored value.

### Exercise F: Export / import
- [ ] Select all (`Ctrl+A`) → Menu → **Export** → clipboard → paste into a file `basics.json` in `C:\node-red-lab`.
- [ ] Delete everything on the tab, then Menu → **Import** the file. Everything returns.

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP
Nothing to build today. At work:
- [ ] Open Node-RED and locate: an inject node, a function node, a switch node, a trigger node.
- [ ] For each, double-click and read its settings, then press **Cancel** (not Done) so nothing changes.
- [ ] Find a **comment** node and read what it says. Comments explain intent.

---

## 5. CHECKPOINT
- [ ] You can explain: what a node is, what `msg.payload` is, why Deploy matters.
- [ ] You wrote a function that returns a changed message.
- [ ] You built a switch that routes a value two ways.
- [ ] You exported and re-imported a flow.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| Nothing happens | You forgot Deploy |
| Function node shows an error triangle | Click it; read the error. Usually a missing `return msg;` or a typo |
| Switch never fires | Check the property (`msg.payload` vs `msg.topic`) and the type (number vs string) |
| Debug shows nothing | The debug node is disabled (grey) or its output is set to a different property |
| Wire won't connect | You dragged from the wrong end; start at the right side of the source node |
| Values reset to 0 after restart | Context is memory-only by default |

---

## 7. STRETCH
- [ ] Use a **delay** node set to "rate limit: 1 msg per 5 seconds" on the HOT path.
- [ ] Add a **comment** node above each section describing its purpose.
- [ ] Replace the switch with a function node using 2 outputs: `return [msg, null];` and `return [null, msg];`.

---

## 8. SELF-TEST
1. What is the difference between `flow.get` and `context.get`?
2. What does `return [msg, null];` do in a function with 2 outputs?
3. Why does a `change` node sometimes beat a `function` node?
4. What happens to a message if a function does not `return` anything?
5. Which sidebar shows stored context values?

---

## 9. DONE
- [ ] File 02 complete. Next: **03 - Fake Sensor, Alerts and Dashboard**.
