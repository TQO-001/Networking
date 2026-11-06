# 15 - CV and Portfolio

**Time:** 60 to 90 minutes | **Difficulty:** Easy | **Needs:** at least files 09, 10 and 14 done
**Mirrors:** nothing at work; this turns your learning into proof for employers

---

## PROGRESS
- [ ] Confidentiality check done
- [ ] Skills list written
- [ ] CV bullets written (true ones only)
- [ ] GitHub repository polished
- [ ] Interview stories prepared
- [ ] Self-test answered

---

## 1. WHY THIS MATTERS
Your goal is to be good enough at Node-RED to put it on your CV. This file shows how to claim it honestly, prove it, and talk about it in an interview, without exposing your employer's systems.

---

## 2. CONCEPTS

### The confidentiality line
| OK to share | Not OK to share |
|---|---|
| Your own capstone project (fake devices) | Your workplace `flows.json` or screenshots of it |
| General skills: "Node-RED, Home Assistant, Modbus, MQTT" | Internal IP addresses, hostnames, device lists, staff names |
| High-level description: "managed lighting and HVAC automations for an office site" | Database names, queries, credentials, network layouts |
| What you learned and improved | Details that would help someone attack or copy the system |

If you are unsure, ask your manager before including any workplace detail on a CV or online.

### The honesty rule
Only claim what you have done. Use this scale:

| Level | Meaning | How to phrase |
|---|---|---|
| Worked with | Used it on the job or in a project | "Built...", "Configured...", "Maintained..." |
| Familiar with | Followed tutorials / small labs | "Familiar with..." |
| Don't list | Only read about it | leave it off |

---

## 3. LAPTOP (Windows) - STEP BY STEP

### Step 1: write your skills line
Pick only the ones you actually practised:
```
Node-RED, Home Assistant, MQTT (Mosquitto), Modbus TCP, Zigbee/Tasmota devices (Sonoff),
REST APIs, SQL (SQL Server / SQLite), Python, Linux (Raspberry Pi), Git, dashboards
```
- [ ] Remove anything you can't talk about for two minutes.

### Step 2: write CV bullets
Start each with a verb, include what and how, and a result if you have one. Edit to match what you did.

**For work (generic, no sensitive detail):**
- Maintain and extend Node-RED automations integrated with Home Assistant for office lighting, cooling and ventilation, using Sonoff Zigbee sensors and Tasmota switches.
- Monitor an electrical power meter over Modbus TCP and publish readings through MQTT into Home Assistant sensors and dashboards.
- Support a Raspberry Pi 4 based automation host, including backups, logs and health checks.

**For your capstone:**
- Built an end-to-end smart office monitor with Node-RED, Home Assistant, MQTT and a simulated Modbus power meter, with a live dashboard, alarms and SQL logging.
- Designed reliable automations: hysteresis and minimum run times for HVAC, motion-based lighting with timeouts, and a table-driven scheduler replacing duplicated flows.
- Wrote Python simulators and an automated test harness against the Home Assistant API; deployed on a Raspberry Pi with autostart, backups and monitoring.

- [ ] Replace each bullet with your own numbers, such as "7 sensors", "3 tabs", "24 hours uptime".

### Step 3: polish the GitHub repository
- [ ] Repository name: `smart-office-monitor` (or similar), with a clear one-line description.
- [ ] README sections: Overview, Architecture picture, Features, Quick start (numbered steps), Screenshots, Testing, Lessons learned, Limitations.
- [ ] Folders: `flows/`, `simulators/`, `tests/`, `docs/`.
- [ ] No tokens, passwords, `*_cred.json`, or workplace data. Search the repo for IPs and secrets before pushing.
- [ ] A short demo: a screen recording or GIF of the dashboard reacting to a simulated event.
- [ ] Add a LICENSE (for example MIT).

### Step 4: update LinkedIn and other profiles
- [ ] Add the skills and a "Projects" entry linking to the repo.
- [ ] Write a short post (5 to 8 sentences) explaining what you built and what you learned. No workplace specifics.

### Step 5: prepare interview stories
Use the STAR shape (Situation, Task, Action, Result). Prepare one story for each:
- [ ] A time you debugged something that wasn't working (for example a Modbus value that looked wrong because of word order or address offset).
- [ ] A time you improved a design (replacing six copied functions with one table-driven function).
- [ ] A time you made something safer (hysteresis, `unavailable` handling, backups, read-only investigation first).
- [ ] A time you learned something new quickly (this whole Node-RED path).

### Step 6: practise common questions
- [ ] "Explain MQTT to a non-technical person."
- [ ] "What happens if a sensor battery dies?"
- [ ] "How would you make this system more reliable?"
- [ ] "How do you test an automation without touching real devices?"
- [ ] "Why Node-RED instead of Home Assistant automations or Python?"

---

## 4. WORK PI / HOME ASSISTANT - STEP BY STEP
- [ ] Ask your manager: "Is it OK if I describe my work on the automation system at a high level on my CV?"
- [ ] Ask for a short reference/sign-off sentence you can use for the generic bullets.
- [ ] Keep a private log of improvements you actually delivered at work (date, what, impact). It becomes real, specific CV material over time.
- [ ] Check if there is a documentation gap you could fill (a system diagram, a device list). Writing it is useful work and a safe way to show initiative.

---

## 5. CHECKPOINT
- [ ] Every CV bullet is true and you can explain it in an interview.
- [ ] The repository passes a "stranger test": someone could clone it and run it from the README.
- [ ] You can describe your Node-RED experience in 60 seconds without notes.

---

## 6. COMMON MISTAKES

| Problem | Fix |
|---|---|
| Claiming skills you haven't used | Remove them; interviews expose this quickly |
| Posting workplace screenshots | Use your own project only |
| README with no run steps | Add numbered steps and test them on a clean folder |
| Tokens left in code | Rotate them and remove from history |
| Vague bullets ("worked on automation") | Add what, how, scale and outcome |
| Everything listed as "expert" | Use honest levels |

---

## 7. STRETCH
- [ ] Write a blog-style article: "Reading a Modbus power meter with Node-RED" (using your simulator).
- [ ] Record a 5-minute walkthrough video of the capstone.
- [ ] Convert the capstone's SQL logger or REST API into a small FastAPI service to connect it to your Python backend goals.

---

## 8. SELF-TEST
1. What can and can't you share from your workplace flows?
2. What are the three levels of skill honesty used in this file?
3. What should every README contain?
4. Give one STAR story you can tell about this project.
5. Why use a simulator in a portfolio project?

---

## 9. DONE
- [ ] File 15 complete. All 16 files done. Keep your tracker in file 00 up to date.
