# 02 — Exams and Assessment

This file covers the theory side of Driller Bill: the Console, the six exam modes, taking an exam, reading results, the Mistake bank, Progress & analytics, and the Review queue.

**Key idea:** every question you answer feeds the system. Misses become targeted practice, and everything you have seen is scheduled for spaced review.

## 1. The Console (home screen)

Open it from the sidebar (**Console**) or by clicking the logo.

| Area | What it does |
|---|---|
| **Form generator** ("Build your paper") | Choose mode, domain, difficulty and options, then click **Generate form** |
| **Next signal** | Shows your lowest tracked objective and a link to Analytics |
| **Exam blueprint** | Six domain cards with weights. Click a card to start a 20-question Domain Drill for it |
| **Adaptive engine / Study mode / Mistake loop** | Shortcuts: *Open exhibit study* and *Open mistake bank* |
| **Spaced repetition** | Shows how many cards are due and links to the Review queue |
| **Attempt log** | Your latest forms (the last 50 are kept) |
| **Resume saved form** | Appears when an unfinished exam exists |
| **Reset data** (footer) | Wipes local history, mistakes, mastery and saved forms after a confirmation |

### The six CCNA domains

| # | Domain | Weight |
|---|---|---|
| 01 | Network Fundamentals | 20% |
| 02 | Network Access | 20% |
| 03 | IP Connectivity | 25% |
| 04 | IP Services | 10% |
| 05 | Security Fundamentals | 15% |
| 06 | Automation & Programmability | 10% |

## 2. Exam modes

| Mode | Questions | Time | Best for |
|---|---|---|---|
| **Full Blueprint** | 100 | 120 min | Final readiness check; balanced across all domains |
| **Domain Drill** | 20 | 30 min | Deep practice in one domain (pick it in the DOMAIN box) |
| **CCNA Sprint** | 20 | 24 min | Quick mixed session, baseline test |
| **Remediation** | 24 | 36 min | Built from your weakest objectives |
| **Exhibit Lab** | 20 | 30 min | Reading topologies, CLI output, routing tables, configs |
| **Scenario Form** | 30 | 45 min | Case-style questions with several steps built around evidence |

The question bank has 1,935 authored questions in 387 "families" (each family has several variants) covering all 53 CCNA objectives.

### Form options

| Option | Effect |
|---|---|
| **Difficulty** | *Mixed*, *Foundation*, *Application*, *Analysis*, or *Exam* |
| **Adaptive form** | On: questions you missed and weak objectives are favoured. Off: no bias from your history |
| **Cold start** | On: treats every variant as unseen. Use this after a long break or to re-test old material |

By default the generator prefers variants you have **not seen**, so repeats do not become memorised answers.

## 3. Walkthrough: take your first exam

- [ ] Open **Console**
- [ ] Set **Mode** to *CCNA Sprint*, leave difficulty on *Mixed* and Adaptive on
- [ ] Click **Generate form**
- [ ] Read each question. Use **Mark for review** (flag) for any you are unsure about
- [ ] Use the **Question map** on the right to jump to any question. Colours show current, answered and marked
- [ ] On the last question click **Submit assessment**. If any are blank you are asked to confirm
- [ ] Read the results (section 5)

### The exam screen

- **Top bar:** the timer (turns red in the last 5 minutes) and an **Exit** button.
- **Question card:** may include a scenario banner (step X of Y), context text, and an **exhibit** (see below).
- **Multiple response:** a "SELECT ALL THAT APPLY" note appears. Click each correct option.
- **Right panel:** question map, live counts (answered, blank, marked, time) and the exam rules.
- **No feedback during the exam.** Correctness is shown only after submission.
- When time reaches zero the exam is **auto-submitted**, and the result is labelled as such.

### Exhibits

Some questions include an evidence panel. Types include CLI output, route tables, address tables, STP tables, MAC tables, WLAN tables, packet sequences, topologies and JSON. Multi-tab exhibits are called **workbenches**: click the tabs (Evidence views) to switch between, say, a topology and a `show` output. Use **Copy** on code tabs to copy the text.

### Leaving mid-exam

- The exam **saves itself** as you go. Close the tab and use **Resume saved form** later.
- Clicking any sidebar item asks first. Your form remains saved.
- **Exit** (top right) asks, and if you confirm it **discards** the saved form.

## 4. Study mode (learn with feedback)

From the Console click **Open exhibit study** in the Study mode card. You get 12 exhibit questions, one at a time, with **immediate feedback** (CORRECT or REVIEW THIS) and a rationale. Use it for learning; use the timed modes for testing. Click **End study** to finish.

## 5. Reading your results

After submitting you see:

- **Score %**, questions, time used, date.
- **Domain performance:** correct/total and percent for each domain.
- **Study targets:** your three weakest domains in this attempt.
- **Generate remediation:** starts a Remediation form from your weak areas.
- **Question review:** every question with your answer, the right answer and the explanation. **Print** creates a paper copy (menus and buttons are hidden when printing).

Scores are training diagnostics. Driller Bill states plainly that it does not predict your real Cisco score.

## 6. Mistake bank

Sidebar → **Mistake bank** (the badge shows how many families).

- Lists every question family you have got wrong, sorted with the weakest objective first.
- Each row shows the objective, its current percentage, the concept and the prompt.
- Click **Drill** on a row to start a domain drill focused only on that objective.
- Click **Generate remediation** at the top for a mixed form across all weak objectives.

Suggested routine: after every exam, spend 10 minutes on 3 to 5 **Drill** buttons from the Mistake bank.

## 7. Progress & analytics

Sidebar → **Progress & analytics**.

- **Overall average** across your attempt history.
- **Domain performance** vs blueprint weight.
- **Weakest tracked signals:** your ten lowest objectives, with a **Remediate** button.
- **Trend:** your most recent scores.

Analytics only fills in after you finish at least one exam.

## 8. Review queue (spaced repetition)

Sidebar → **Review queue** (badge = cards due).

Every question you answer becomes a flashcard scheduled to return just before you would forget it.

### How a review session works
- [ ] Open the Review queue
- [ ] Read the card (concept, topic, difficulty, due time) and any options. **Try to recall the answer first**
- [ ] Click **Reveal rationale**
- [ ] Rate yourself honestly

### The four ratings

| Rating | Meaning | Effect |
|---|---|---|
| **Again** | I got it wrong or blanked | Card returns in about 10 minutes; streak resets; ease drops |
| **Hard** | Correct but painful | Comes back sooner than usual |
| **Good** | Correct with normal effort | Normal growing interval |
| **Easy** | Instant | Longest jump |

Correctly answered exam questions start as *Good*; questions you marked for review start as *Hard*; misses start as *Again*. A card counts as **mastered** once you have a streak of 4 or more and an interval of at least 14 days.

When nothing is due the screen says so. Come back tomorrow.

## Troubleshooting

| Problem | Fix |
|---|---|
| Analytics, Mistake bank or Review queue are empty | Complete at least one exam first; they are built from your history |
| "An assessment is already active" message | You have an unfinished form. Resume it from the Console, or confirm to replace it |
| Exam keys do nothing | Click on the page background first. Keys are ignored while a text field or dropdown is focused, and when Ctrl, Cmd or Alt is held |
| Timer seems wrong after reopening | The deadline is fixed when you start; time keeps running while the tab is closed |
| Same topics keep appearing | Turn **Adaptive form** off, or use a Domain Drill for another domain |
| Study mode shows the answer after the first click on a multiple-response question | Known quirk: feedback appears after the first selection. Treat multi-response questions in Study mode as review, and use a timed mode to practise picking every answer |
| Score history stops at 50 | Only the latest 50 attempts are stored. Back up (file 05) if you want a longer record |

## Tips and shortcuts

- `1`–`4` select, `N` next, `P` previous, `M` mark. The hint is shown under each question.
- Answer everything. There is a warning for blanks, but no negative marking in this app.
- Do a **Cold start** Full Blueprint once, near the end of your plan, to measure real retention.
- Use Sprint as a 25-minute daily warm-up, then clear the Review queue.
- After each exam, read the explanations for the questions you **got right by guessing**, not just the wrong ones.
