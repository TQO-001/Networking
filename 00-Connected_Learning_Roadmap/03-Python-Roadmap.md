# 03 — Python Roadmap

> Part of the **Connected Learning Roadmap**  
> Working format: sequential sessions, not calendar dates.  
> Last reorganised: 16 November 2026.

## How Python fits into the plan

Python is both a supporting skill and a tool for applying networking knowledge. It is not necessary to force a script into every networking lesson. Some sessions focus only on programming fundamentals because reliable automation depends on sound programming habits.

Learn the standard library and core language features first. Add third-party packages only when a project genuinely needs them.

**Status:** `[ ]` queued · `[x]` completed to a usable standard · `[~]` parked · `[!]` needs revision.

## Module 1 — Network foundations

**Outcome:** Understand what networks are, how devices communicate, and how to inspect basic connectivity.

### Python foundation

- [ ] **PY-01 — Python workflow, variables, and types**  
  Run scripts; use strings, integers, floats, and booleans; accept input; display useful output; and understand basic type conversion.

- [ ] **PY-02 — Decisions, loops, and conditions**  
  Use `if`, `elif`, `else`, `for`, and `while`. Practise validating user input and handling a sequence of values.

- [ ] **PY-03 — Functions and reusable logic**  
  Define functions, pass arguments, return values, use sensible names, and split a problem into smaller steps.

- [ ] **PY-04 — Core collections**  
  Use lists, tuples, dictionaries, and sets. Practise storing device names, IP addresses, interface names, and status information.

- [ ] **PY-05 — Exceptions and defensive input handling**  
  Understand common exceptions, use `try`/`except` appropriately, and display useful error messages without hiding programming mistakes.

---

## Module 2 — IPv4, subnetting, and IPv6

**Outcome:** Understand addressing and calculate network boundaries confidently. This is a major foundation for the rest of the CCNA.

### Python foundation

- [ ] **PY-06 — String processing and validation**  
  Practise splitting, trimming, formatting, and validating text input. Understand why validation should be explicit.

- [ ] **PY-07 — Python's `ipaddress` module**  
  Learn to create and inspect IPv4/IPv6 address and network objects using the Python standard library. Understand the difference between an address and a network.

---

## Module 3 — Switching and network access

**Outcome:** Understand how switches forward traffic and how VLANs divide a Layer 2 network.

### Python foundation

- [ ] **PY-08 — Files and paths**  
  Read and write text files safely. Use `pathlib` to work with paths without hard-coding machine-specific locations.

- [ ] **PY-09 — CSV and JSON**  
  Read structured inventory data, validate required fields, and write a clean report. Understand why JSON is common in APIs and automation.

---

## Module 4 — Routing and IP connectivity

**Outcome:** Understand how routers select paths and how to troubleshoot traffic moving between networks.

### Python foundation

- [ ] **PY-10 — Modules, imports, and project structure**  
  Split code into modules, import reusable functions, and organise a small project. Learn the purpose of virtual environments; understand `venv`/`pip` before adopting a tool such as `uv`.

- [ ] **PY-11 — Testing with pytest**  
  Write tests for functions such as address validation, subnet calculations, and configuration parsing. Learn to test normal cases, boundary cases, and invalid input.

---

## Module 5 — IP services, security, and wireless

**Outcome:** Understand the services networks depend on and the controls used to protect and manage them.

### Python foundation

- [ ] **PY-12 — Command-line tools with `argparse`**  
  Turn a script into a usable command-line tool with named options, help text, and clear exit behaviour.

- [ ] **PY-13 — Logging and configuration**  
  Use Python's `logging` module, keep settings separate from code, and avoid hard-coded secrets. Learn how to report errors clearly.

---

## Module 6 — Automation and programmability

**Outcome:** Understand how modern networks expose information and how Python can help with repeatable administrative tasks.

### Python foundation

- [ ] **PY-14 — HTTP requests and API clients**  
  Learn how to send an HTTP request, handle status codes, parse JSON, and manage timeouts. Start with a public test API or a local mock response. Never put credentials in source code.

- [ ] **PY-15 — Code quality with Ruff and type hints**  
  Practise readable naming, small functions, docstrings, type hints, formatting, linting, and simple static checks. Use Ruff to catch common issues.

- [ ] **PY-16 — Object-oriented programming when useful**  
  Understand classes, instances, attributes, and methods. Use a small device or interface model as an example. Do not force classes into scripts that are simpler with functions and dictionaries.

## Python completion standard

For each session, write and run a small program, explain the code in your own words, test at least one normal case and one invalid or boundary case, and make one improvement after reviewing the result. Do not add a database, web interface, deployment pipeline, or framework unless a later requirement calls for it.
