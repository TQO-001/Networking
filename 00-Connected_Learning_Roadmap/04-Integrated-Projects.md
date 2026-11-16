# 04 — Integrated Python and Networking Projects

> Part of the **Connected Learning Roadmap**  
> Working format: sequential sessions, not calendar dates.  
> Last reorganised: 16 November 2026.

## Project philosophy

These projects connect the two learning tracks. Each project should reinforce a networking concept while teaching a useful programming skill. Keep the first version small, local, and deterministic. Use fictional sample data, Packet Tracer output, or authorised lab data. Do not point practice scripts at networks or systems without explicit permission.

Complete projects when their prerequisites have been covered. You do not need to build them all immediately.

## Module 1 — Network foundations

### Integration task

- [ ] **INT-01 — Network facts notebook/script**  
  Write a small Python program that stores a few fictional network devices in a list of dictionaries and prints a readable inventory. Include input validation or a simple search function. Use sample data only.

---

## Module 2 — IPv4, subnetting, and IPv6

### Integration task

- [ ] **INT-02 — Subnet calculator**  
  Build a command-line Python program that accepts an IPv4 address with a prefix and reports the network address, broadcast address, netmask, total addresses, and usable host range where applicable. Use `ipaddress`; handle invalid input cleanly. Then manually verify several results.

---

## Module 3 — Switching and network access

### Integration task

- [ ] **INT-03 — Sample switch configuration analyser**  
  Use fictional, saved configuration text—not a production device—to identify interface names, descriptions, VLAN assignments, and trunk declarations. Start with straightforward string processing. Add tests for known sample files.

---

## Module 4 — Routing and IP connectivity

### Integration task

- [ ] **INT-04 — Network information report**  
  Take fictional host, interface, and route data from CSV or JSON files and generate a readable report. Include validation and unit tests. Keep the first version offline and deterministic.

---

## Module 5 — IP services, security, and wireless

### Integration task

- [ ] **INT-05 — Offline network diagnostics assistant**  
  Build a small command-line tool that accepts supplied test results or sample network data and produces a troubleshooting summary. It should distinguish facts from guesses and never make changes to a device.

---

## Module 6 — Automation and programmability

### Integration task

- [ ] **INT-06 — Network inventory/API report**  
  Build a Python tool that reads a device inventory file, validates entries, optionally retrieves information from a test API, and generates a report. Include timeouts, error handling, logging, and tests.

## Project ladder

Projects are deliberately small and build on one another. Do not add a web frontend, database, cloud hosting, authentication, or AI features unless a later requirement genuinely needs them.

| Project | Main skills | Completion evidence |
|---|---|---|
| 1. Network facts inventory | Python basics, lists, dictionaries, functions | A script that prints a clean report from fictional device data |
| 2. Subnet calculator | IPv4, CIDR, `ipaddress`, validation | Correct results for normal, boundary, and invalid inputs |
| 3. Switch configuration analyser | VLAN concepts, text files, parsing, tests | A report generated from supplied sample configurations |
| 4. Network information report | Routing concepts, CSV/JSON, testing | A validated report from sample host/interface/route data |
| 5. Diagnostics assistant | Network troubleshooting, CLI, logging | A tool that summarises supplied evidence without changing devices |
| 6. API inventory report | HTTP, JSON, timeouts, errors, tests | A report generated from a test API or mock data |
| 7. OT asset documentation assistant | OT segmentation concepts, data validation | A read-only report based on approved or sample asset records |

### Project completion rule

A project is complete when it meets its stated requirements, is understandable, and has been tested with both valid and invalid input. It does not need to become a polished commercial product.

---

## Project evidence checklist

For each project, keep:

- A short README explaining the purpose and how to run it.
- A small set of sample inputs.
- Expected output or screenshots from a successful run.
- Tests for valid, invalid, and boundary inputs where appropriate.
- A brief note explaining what you learned and what you would improve next.

Do not expand the scope until the stated requirements work reliably.
