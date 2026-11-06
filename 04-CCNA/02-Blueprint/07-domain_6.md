### EXAM DOMAIN
#### Domain 6.0 – Automation And Programmability (10%)
Zero configure verbs. Every objective is explain, compare, describe, or recognize. This is pure reading and flashcards — and it is the highest points-per-hour domain on the entire exam, because 10% of the grade requires no lab time at all. Do not skip it, and do not over-engineer it.

#### 6.1 Explain how automation impacts network management
* Traditional per-device CLI management: slow, inconsistent, error-prone, doesn't scale, configuration drift.
* What automation buys: consistency, speed, scale, version control, repeatability, fewer human errors.
* What it costs: upfront skill investment, tooling complexity, and the fact that a mistake now propagates to every device instantly.

> **STOP · DEPTH LIMIT**
> No actual scripting. No Python required for CCNA.

---

#### 6.2 Compare traditional networks with controller-based networking
* Traditional: every device runs its own control plane and data plane; configuration is per-box.
* Controller-based: the control plane is centralised in a controller which has a full network view and programs the devices; the devices keep their data planes.
* Intent-based networking: you declare the outcome, the controller works out the device configuration and continuously verifies it.

> **STOP · DEPTH LIMIT**
> No Catalyst Center / DNA Center hands-on, no SD-Access fabric roles in depth.

---

#### 6.3 Describe controller-based, software defined architecture (overlay, underlay, fabric)
* Underlay = the physical network and the routing that makes it reachable. Overlay = the virtual/tunnelled network built on top (VXLAN, GRE). Fabric = underlay + overlay together as one managed system.
* Control plane vs data plane separation: control plane decides where traffic goes (routing protocols, STP, ARP), data plane actually moves the frames. SDN lifts the control plane out to the controller. Also know the management plane (SSH, SNMP, syslog).
* Northbound API: controller → applications/operators, typically REST/JSON, human-and-app friendly. Southbound API: controller → network devices, typically NETCONF/RESTCONF/OpenFlow. Which direction is which is a guaranteed question — northbound points up toward the user.

> **STOP · DEPTH LIMIT**
> No VXLAN header structure, no OpenFlow table pipeline, no LISP.

---

#### 6.4 Explain AI (generative and predictive) and machine learning in network operations
* Predictive AI forecasts from patterns in existing data (capacity planning, anomaly detection, predicting a failing link). Generative AI produces new content (config drafts, summaries, natural-language queries against network data).
* Supervised (labelled data) vs unsupervised (finds structure itself, good for anomaly detection) vs reinforcement learning.
* AIOps in practice: baselining normal behaviour, flagging deviation, correlating events into a single root cause, recommending remediation.
* Limitations and risks: training data quality, hallucination in generative output, and why a human stays in the loop for network changes.

> **STOP · DEPTH LIMIT**
> New v1.1 objective, low depth expected. No model architectures, no training methodology, no vendor product feature lists.

---

#### 6.5 Describe characteristics of REST-based APIs
* CRUD ↔ HTTP verb mapping: Create = POST, Read = GET, Update = PUT/PATCH, Delete = DELETE. Know PUT (replace whole resource) vs PATCH (partial update).
* REST constraints: client-server, stateless (each request carries everything it needs — this is the most-tested property), cacheable, uniform interface, layered.
* HTTP status code families: 2xx success (200 OK, 201 Created), 3xx redirect, 4xx client error (400 bad request, 401 unauthorised, 403 forbidden, 404 not found), 5xx server error.
* Authentication types: Basic (base64 user:pass — not encryption), Bearer token, API key, OAuth 2.0.
* Data encoding: JSON (most common), XML, YAML. Request/response headers and body.
* URI anatomy and what a resource path represents.

> **STOP · DEPTH LIMIT**
> No writing API client code, no NETCONF YANG model structure, no gRPC.

---

#### 6.6 Recognize the capabilities of configuration management mechanisms such as Ansible and Terraform
* Ansible: agentless, push model, uses SSH, written in YAML (playbooks, inventory, modules), procedural/imperative-leaning, focused on configuration management of existing infrastructure.
* Terraform: agentless, uses provider APIs, written in HCL, declarative, maintains state, focused on provisioning infrastructure.
* The comparison axes the exam cares about: agent vs agentless, push vs pull, provisioning vs configuration management, declarative vs procedural, mutable vs immutable infrastructure, and the language/file format each uses.
* Puppet and Chef for contrast: agent-based, pull model, Ruby-based DSL.

> **STOP · DEPTH LIMIT**
> Recognize verb — the lowest bar in the blueprint. No playbook authoring, no HCL syntax, no module reference.

---

#### 6.7 Recognize components of JSON-encoded data
* The six data types: string, number, boolean, null, object `{}`, array `[]`.
* Syntax rules: keys are always double-quoted strings, key-value pairs separated by colons, elements by commas, no trailing comma, no comments.
* The exam skill: given a block of JSON, answer "what is the value of key X" or "how many elements are in array Y" or "which of these is syntactically valid JSON." Practise reading nested structures — an array of objects inside an object is the standard shape.
* Recognise XML and YAML on sight and be able to tell them apart from JSON.

> **STOP · DEPTH LIMIT**
> Recognize verb. No parsing code, no JSON Schema, no YAML anchors/aliases.

---
