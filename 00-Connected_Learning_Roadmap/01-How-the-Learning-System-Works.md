# 01 — How the Learning System Works

> Part of the **Connected Learning Roadmap**  
> Working format: sequential sessions, not calendar dates.  
> Last reorganised: 16 November 2026.

## Purpose

This document explains how to use the roadmap, how to structure a study session, and how to return after a break without feeling behind.

## How this system works

This is a **sequence of learning sessions**, not a timetable. Each session has a number and a purpose, but no assigned weekday or date.

- Work through the sessions in order unless a diagnostic shows that you already understand a topic.
- A missed day does not create overdue work. When you return, continue with the next unfinished session.
- You can take a break, revise an earlier topic, or work on a project without losing your place.
- A session is complete when you can explain the main idea and do its practical task—not when you have copied a page of notes.
- If a topic is already familiar, test yourself. If you can explain it and complete the practical task, mark it complete and move on.

### Status key

- `[ ]` Not started / queued
- `[x]` Completed to a usable standard
- `[~]` Parked for now; return to it later
- `[!]` Needs another revision session

**There is deliberately no “missed day” status.** The system tracks learning, not attendance.

### The learning priority: one deep, others functional

1. **Main focus — Networking and CCNA:** learn the concepts properly and practise them in labs.
2. **Supporting focus — Python:** build programming fluency in small, deliberate steps.
3. **Integration — practical tools:** use Python to solve problems related to the networking topics being studied.
4. **Later specialisation — OT networking:** apply the foundations to industrial environments once the core concepts are secure.

Python should be connected to networking wherever that connection is useful. It should not be forced into every topic. Some Python sessions will focus on programming fundamentals without networking, because those fundamentals are what make useful automation possible.

---

## A flexible study rhythm

A reasonable starting rhythm is **four sessions in a learning cycle**:

| Session type | Purpose |
|---|---|
| Network concept | Learn one networking concept deeply. |
| Network practice | Configure, diagram, calculate, or troubleshoot that concept. |
| Python foundation | Practise one programming skill that supports future projects. |
| Integration / review | Connect the topics, build something small, or retrieve earlier knowledge. |

This is a suggestion, not a weekly quota. A cycle might take four days or two weeks. Your work and energy can determine the pace.

### Typical session structure

Aim for roughly 40–60 minutes when practical. Shorter sessions count.

1. **Recall — 5 minutes:** Without notes, write or say what you remember from the previous session.
2. **Learn — 15–20 minutes:** Study one concept. Use one main resource rather than opening five courses.
3. **Practise — 15–25 minutes:** Configure, calculate, code, draw, or troubleshoot.
4. **Test — 5 minutes:** Answer a few questions without looking at the explanation.
5. **Record — 2 minutes:** Note what you understood, what confused you, and the next step.

### Low-energy version

When a full session feels too difficult, do one small action:

- Answer three recall questions.
- Explain one concept aloud.
- Complete one subnetting problem.
- Fix one small Python bug.
- Review one previous lab.

Stop after that if necessary. Do not turn a short session into a reason to feel behind.

### When to call a session complete

You do not need perfect recall. Aim to do these three things:

- Explain the central idea in your own words without reading a definition.
- Complete the session's practical task, with notes if needed.
- Answer at least one variation or explain how you would troubleshoot a failure.

If you can recognise the answer but cannot explain or apply it, mark the topic `[!]` and schedule a short revision—not a complete restart.

---

## Baseline and setup

These are placement sessions, not exams. Their purpose is to establish what you already know so that you do not waste time repeating material unnecessarily.

### [ ] START-01 — Current knowledge check

Without looking anything up, try to explain each item in a few sentences:

- What is an IP address?
- What is a subnet mask or prefix length?
- What is a default gateway?
- What is the difference between a switch and a router?
- What is the purpose of DNS and DHCP?
- What is the difference between TCP and UDP?
- What does a VLAN do?
- What happens when a computer sends traffic to a device on another network?
- What is a Python function, and when would you use one?
- What is the difference between a list and a dictionary in Python?

Do not worry about your score. Keep the answers. They will help us identify the best starting point.

### [ ] START-02 — Check your working environment

Confirm that you can:

- Run Python from a terminal.
- Open and run a Python file in VS Code.
- Use Git to check the status of a project and save a commit.
- Open Cisco Packet Tracer, or whichever authorised lab environment you already use.
- Find your existing networking notes and labs.

Do not spend a whole session customising your editor. A simple working setup is enough.

### [ ] START-03 — Create a simple learning record

Use this document as the master checklist. Keep code and lab files in your existing study repository or a clearly named folder. Do not create a new application or elaborate knowledge-management system for this purpose.

For each practical task, save the evidence that matters: a Python file, a Packet Tracer file, a topology diagram, a short troubleshooting report, or a concise explanation.

---

## Rules that protect the learning process



1. **Do not restart the entire roadmap after a break.** Continue from the next unfinished session.
2. **Do not collect courses endlessly.** Pick one main explanation source and use it consistently.
3. **Do not turn every exercise into a product.** Finish the small requirement before considering extra features.
4. **Do not copy notes as a substitute for recall.** Explain, test, configure, calculate, or code.
5. **Do not add dependencies too early.** Learn the standard library and the underlying concept first.
6. **Do not skip fundamentals because a topic looks familiar.** Test your understanding before moving on.
7. **Do not use a script on a network you do not own or have explicit permission to administer.** Practise with Packet Tracer, local mock data, or an approved lab. In OT environments, follow site procedures and change-control requirements; prefer approved read-only data for learning projects.
8. **Do not measure success by consecutive days.** Measure it by concepts you can explain and tasks you can perform.

---

## Your next action

Complete `START-01 — Current knowledge check`. Then use your answers to choose your starting point in the Networking and Python roadmaps. Do not spend time making the system prettier before beginning.
