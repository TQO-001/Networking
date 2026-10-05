# 11 - SQL Data Transfer

**Time:** 90 minutes | **Difficulty:** Medium to Hard | **Needs:** files 04, 05; basic SQL
**Mirrors:** tab "HASS & OPCUA Data Transfer" (MQTT value → function → flow variable; Home Assistant `current state`; `MSSQL` node)

---

## PROGRESS
- [ ] Database chosen and running (SQLite, or SQL Server in Docker)
- [ ] Table created
- [ ] A value inserted from Node-RED with a parameterised query
- [ ] Data pulled from Home Assistant and from MQTT into one row
- [ ] Rows read back and shown on a chart
- [ ] Safety rules understood (no secrets in flows, no injection)
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
Moving values from devices and Home Assistant into a database is what turns live readings into history and reports. Your workplace flow does this with SQL Server. This is also a strong "backend" skill for your Python career path, because the same SQL knowledge applies everywhere.

---

## 2. CONCEPTS

| Term | Meaning |
|---|---|
| SQL node | A Node-RED node that runs a query and returns rows |
| Parameterised query | Values passed separately from the SQL text, so input can never change the query |
| SQL injection | Attack/accident where text in a value becomes part of the SQL command |
| Flow variable | `flow.set("temp", value)` stores the latest value so another node can use it later |
| Join node | Combines several messages into one (array or object) |

### What the work tab does (high level)
1. Receives a temperature from MQTT (topic `ENV_UPS.Temp1`) and saves it to `flow` context as a number.
2. Reads the current state of a Home Assistant entity with `current state`.
3. Uses an `MSSQL` node to write or read in a SQL Server database.

(I deliberately did not read the actual SQL text or connection details; treat those as confidential. Look at the real query only at work.)

---

## 3. LAPTOP (Windows) - STEP BY STEP

### Pick a database
| Option | Good for | Setup |
|---|---|---|
| **SQLite** | Quick practice, no server | Palette: `node-red-node-sqlite` (needs a native build; if it fails on Windows, use Option B) |
| **SQL Server in Docker** | Matches the work system | Docker Desktop; image `mcr.microsoft.com/mssql/server`; palette `node-red-contrib-mssql-plus` |

Option B commands (PowerShell; pick your own strong password):
```
docker run -d --name sqlpractice -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=<YourStrong#Passw0rd>" -p 1433:1433 mcr.microsoft.com/mssql/server:2022-latest
```
Then create a database `PracticeDB` with any SQL client (for example Azure Data Studio). Keep the password out of any file you share.

### Step 1: create a table
SQLite:
```sql
CREATE TABLE IF NOT EXISTS readings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL,
  source TEXT NOT NULL,
  value REAL NOT NULL
);
```
SQL Server:
```sql
CREATE TABLE readings (
  id INT IDENTITY(1,1) PRIMARY KEY,
  ts DATETIME2 NOT NULL,
  source NVARCHAR(50) NOT NULL,
  value FLOAT NOT NULL
);
```
- [ ] Table created.

### Step 2: store the latest MQTT value
- [ ] **mqtt in** (topic `lab/ups/temp1`, a value from your Python script) → function:
```javascript
const v = Number(msg.payload);
if (isNaN(v)) { node.warn("Bad temperature: " + msg.payload); return null; }
flow.set("upsTemp", v);
msg.payload = v;
return msg;
```
Same pattern as the work flow, with a safety check.

### Step 3: insert with a parameterised query
SQLite node (set the SQL to `Prepared Statement`):
```sql
INSERT INTO readings (ts, source, value) VALUES ($ts, $source, $value);
```
and a function before it:
```javascript
msg.params = {
    $ts: new Date().toISOString(),
    $source: "ups_temp1",
    $value: flow.get("upsTemp")
};
return msg;
```
For SQL Server (`mssql-plus`), use the node's parameter feature (look at its help panel) and write the query with named parameters like `@ts`, `@source`, `@value` rather than building the text with `+`.

**Never do this:**
```javascript
msg.topic = "INSERT INTO readings VALUES ('" + msg.payload + "')";   // injection risk
```

- [ ] inject every 10 s → function (sets params) → SQL node → debug. Deploy.

### Step 4: combine Home Assistant + MQTT in one row
- [ ] inject → **current state** (entity `input_number.fake_temperature`) → function (store `flow.set("haTemp", Number(msg.payload))`).
- [ ] Then a function builds two rows (or one wide row) from `flow.get("upsTemp")` and `flow.get("haTemp")`, with checks for missing values:
```javascript
const ups = flow.get("upsTemp");
const ha  = flow.get("haTemp");
if (ups === undefined || ha === undefined) { return null; }   // wait until both exist
msg.params = [
  { $ts: new Date().toISOString(), $source: "ups_temp1", $value: ups },
  { $ts: new Date().toISOString(), $source: "ha_temp",   $value: ha  }
];
return msg;
```
(Adapt to your SQL node: some nodes take one query per message, so a **split** node can send each row separately.)

### Step 5: read back and chart
- [ ] inject → SQL `SELECT ts, value FROM readings WHERE source = $source ORDER BY ts DESC LIMIT 50` → function to reshape for a **ui-chart**:
```javascript
msg.payload = msg.payload.reverse().map(r => ({ x: new Date(r.ts).getTime(), y: r.value }));
return msg;
```
- [ ] Check the chart shows the last 50 readings.

### Step 6: keep the database tidy
- [ ] Add a daily **eztimer** that deletes rows older than 30 days:
```sql
DELETE FROM readings WHERE ts < $cutoff;
```
with `$cutoff` computed in a function node.

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP (READ-ONLY)
- [ ] Open the "HASS & OPCUA Data Transfer" tab. Draw the path: input → function → HA → SQL.
- [ ] Open the MSSQL config node only to see the **server name pattern**. Do not copy passwords or connection strings anywhere.
- [ ] Open the MSSQL node and read the SQL. Rewrite it in plain English: "what table, what columns, what condition?". Check whether it uses parameters or builds text.
- [ ] Ask who owns the database and what retention policy exists.
- [ ] Do not click inject nodes on this tab: they might write to a live database.

---

## 5. CHECKPOINT
- [ ] Rows appear in your table every 10 seconds, with correct timestamps and values.
- [ ] Bad input (text instead of a number) is caught and does not crash the flow.
- [ ] A chart shows history pulled from SQL.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| `flow.get` returns `undefined` | The earlier node hasn't run yet; check before using it |
| Insert fails with a type error | Value is a string; convert with `Number(...)` |
| SQLite node fails to install | Native build tools missing on Windows; use SQL Server in Docker or Python outside Node-RED |
| Cannot connect to SQL Server | Container not running, port 1433 blocked, or wrong password |
| Time zone confusion | Store timestamps in UTC (`toISOString()`) and convert when displaying |
| Table grows forever | Add a retention job |
| Password visible in a flow export | Put secrets in the node's credentials fields, never in function code or comments |

---

## 7. STRETCH
- [ ] Write the same insert in Python (`pyodbc` or `sqlite3`) and compare it with the Node-RED version.
- [ ] Add a SQL view or query that returns hourly averages.
- [ ] Add error handling: a **catch** node that logs failed inserts to a CSV file.

---

## 8. SELF-TEST
1. What is SQL injection and how does a parameterised query prevent it?
2. Why store timestamps as UTC?
3. Why check `flow.get()` for `undefined` before using it?
4. Where should database passwords be kept in Node-RED?
5. Why is it risky to click inject nodes on the live "Data Transfer" tab?

---

## 9. DONE
- [ ] File 11 complete. Next: **12 - Refactoring and Reliable Flows**.
