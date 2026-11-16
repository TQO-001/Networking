# 07 — Tools and Resources

> Part of the **Connected Learning Roadmap**  
> Working format: sequential sessions, not calendar dates.  
> Last reorganised: 16 November 2026.

## Keep the toolkit small

Use tools to support learning, not become a separate project. Start with what is already installed and working.

## Tools and learning resources

Use a small, stable toolkit. The objective is to learn networking and programming, not to keep changing tools.

### Core tools

- **Python:** use the Python version already installed and supported by your environment. Python 3.14 documentation is available below.
- **Editor:** VS Code.
- **Version control:** Git and GitHub.
- **Network labs:** Cisco Packet Tracer and approved lab environments.
- **Python testing:** pytest, introduced once you are comfortable writing functions.
- **Python quality:** Ruff, introduced after you have working scripts to improve.
- **Python packages:** learn standard-library solutions first; understand `venv` and `pip`, then use `uv` if it helps manage projects.

### Reference links

- [Cisco CCNA exam topics](https://learningnetwork.cisco.com/s/ccna-exam-topics)
- [Cisco CCNA certification and exam information](https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccna.html)
- [Python 3.14 documentation](https://docs.python.org/3.14/)
- [Python tutorial](https://docs.python.org/3.14/tutorial/)
- [pytest documentation](https://docs.pytest.org/)
- [Ruff documentation](https://docs.astral.sh/ruff/)

### CCNA exam-version note — important

Cisco's published transition dates are:

- **Last date to test the 200-301 CCNA v1.1 exam:** 2 February 2027.
- **First date to test the 200-301 CCNA v2.0 exam:** 3 February 2027.

If your exam is on or before 2 February 2027, use the official v1.1 exam topics. If your exam is on or after 3 February 2027, use the official v2.0 exam topics. Do not assume that an older course, video series, or checklist fully covers the new blueprint.

Before starting final exam revision:

1. Confirm the date you intend to sit the exam.
2. Download the matching official Cisco exam topics PDF.
3. Map each objective to a lesson, lab, or revision item in this learning set.
4. Add any missing version-specific topics to your own checklist.
5. Use Cisco's official blueprint as the final authority for exam coverage.

The learning roadmap builds core networking knowledge; it is not a substitute for the official exam blueprint.

**Official links:**
- [Cisco CCNA certification and exam information](https://www.cisco.com/web/go/ccna/)
- [Cisco 200-301 CCNA v1.1 exam topics](https://learningnetwork.cisco.com/s/ccna-exam-topics)
- [Cisco 200-301 CCNA v2.0 exam topics PDF](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf)


## Suggested folder structure

Keep this lightweight. Use your existing networking repository if it already serves this purpose; do not create a separate repository just to follow this document.

```text
learning-workspace/
├── README.md
├── roadmap/
│   ├── README.md
│   ├── 01-How-the-Learning-System-Works.md
│   ├── 02-Networking-and-CCNA-Roadmap.md
│   ├── 03-Python-Roadmap.md
│   ├── 04-Integrated-Projects.md
│   ├── 05-OT-Networking-Extension.md
│   ├── 06-Revision-and-Learning-Journal.md
│   └── 07-Tools-and-Resources.md
├── networking/
│   ├── notes/
│   ├── packet-tracer/
│   ├── diagrams/
│   └── troubleshooting/
├── python/
│   ├── fundamentals/
│   ├── exercises/
│   └── tests/
└── integrated-projects/
    ├── subnet-calculator/
    ├── config-analyser/
    ├── network-report/
    └── ot-inventory/
```

A simple project layout is enough. Add folders only when you have work that needs them.

---

## Folder-structure guidance

This is a suggestion, not a requirement. Use your existing networking repository if it already serves the purpose. Add folders when you have files that need them; do not restructure everything before the first study session.
