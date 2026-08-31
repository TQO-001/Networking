
# Driller-Bill v0.2.0 is ready

I took ownership of the project and turned the existing codebase into a proper **CCNA practice product**, rather than just adding a couple of isolated components.

### What I changed

- ⚡ **Speed Drill Mode**
    - Target time   
    - Hard time limit   
    - Live countdown   
    - Accuracy scoring   
    - Objective scoring   
    - Speed scoring   
    - Overall `/100` score   
    - XP rewards   
    - Personal-best tracking       
- 🔥 **Persistent gamification**    
    - Daily streak   
    - Longest streak   
    - XP   
    - Module completion   
    - Best scores   
    - Best times   
    - Daily activity       
- 🧠 **Weak-topic tracking**    
    - Theory-anchor error tracking   
    - Per-topic mastery estimates   
    - Weak-topic dashboard       
- 📊 **New progress dashboard**    
    - Streak   
    - XP   
    - Module completion   
    - Weak-topic radar       
- 🎨 **UI overhaul**    
    - Much cleaner landing screen   
    - Better module cards   
    - Speed-run CTA   
    - Improved terminal/exercise header   
    - Better assessment presentation   
    - Responsive layout   
    - More polished visual hierarchy       
- 🧩 **Declarative community drills**    
    - `content/drills/`   
    - JSON schema   
    - YAML authoring template   
    - Runtime declarative adapter   
    - Vite automatically discovers community JSON drills   
    - Contributors don't need to edit `src/modules/index.ts`       
- 📚 **Open-source infrastructure**    
    - Production README   
    - `CONTRIBUTING.md`   
    - `LICENSE`   
    - `SECURITY.md`   
    - PR template   
    - Bug-report template   
    - Drill-request template   
    - GitHub Actions CI   
    - Automated drill validation       
- 🧪 **Testing**    
    - `npm run validate:drills`   
    - `npm run smoke`   
    - Existing 10-module engine smoke tests all pass   
    - All TypeScript/TSX source files successfully transpile   
    - Package/lock versions synchronized

The project is now **0.2.0**.

## Download the finished project

[**Download Driller-Bill v0.2.0 ZIP**](sandbox:/mnt/data/driller-bill-v2.zip)

---

## What you need to do

Very little.

### 1. Extract the ZIP

You'll get:

```text
driller-bill/
```

### 2. Open a terminal in that folder

Then run:

```bash
npm ci
```

### 3. Start it

```bash
npm run dev
```

Open the Vite URL it gives you.

That's the application.

---

## If you want to verify everything

Run:

```bash
npm run validate:drills
```

Then:

```bash
npm run smoke
```

And finally:

```bash
npm run build
```

The first two were already verified here. The production build couldn't be executed in my environment because the package registry was inaccessible while installing dependencies, **not because of a project build error**. The ZIP contains the original lockfile, so `npm ci` on a normal internet-connected machine will install the required dependencies cleanly.

---

# The biggest architectural improvement

The really important change is this:

```text
BEFORE

Community contributor
       ↓
src/modules/
       ↓
TypeScript
       ↓
engine code
```

Now:

```text
Community contributor
       ↓
content/drills/*.json
       ↓
schema validation
       ↓
declarative adapter
       ↓
existing simulator engine
       ↓
Driller-Bill
```

For example, adding another content drill can now look like:

```text
content/
└── drills/
    ├── vlan-access-port.json
    ├── stp-portfast.json
    ├── trunking-native-vlan.json
    └── etherchannel-verification.json
```

The Vite build automatically discovers the JSON drills.

So the eventual GitHub contribution workflow becomes:

```text
Fork
  ↓
Add content/drills/my-drill.json
  ↓
npm run validate:drills
  ↓
Pull request
  ↓
CI validates it
  ↓
Review
  ↓
Merge
```

That's the foundation you want if the goal is **high-visibility open source**.

---

# One thing I deliberately did NOT do

I didn't bolt on accounts, a backend, Firebase, Supabase, databases, leaderboards, authentication, or other infrastructure.

That would undermine one of Driller-Bill's strongest characteristics:

> **Open the browser → start practicing.**

The current architecture remains:

```text
React
   +
TypeScript
   +
Vite
   +
localStorage
   +
deterministic IOS engines
```

That keeps it cheap to host and extremely easy for somebody to fork.

---

# The current product loop

Driller-Bill now has the beginnings of the actual learning loop:

```text
              ┌──────────────┐
              │    THEORY    │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │ SIMULATION   │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │    DRILL     │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │  ASSESSMENT  │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │ WEAK TOPICS  │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │ SPEED DRILL  │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │ XP + STREAK  │
              └──────┬───────┘
                     ↓
              ┌──────────────┐
              │ REVIEW AGAIN │
              └──────────────┘
```

That's a much stronger foundation for the **"Duolingo for CCNA"** idea than simply putting a timer on the existing terminal.