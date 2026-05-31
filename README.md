<div align="center">

<img src="docs/assets/images/logo.svg" width="80" height="80" alt="Code & Core Logo"/>

# Code & Core Learning System

**A structured, project-based learning platform for Python, Robotics, PictoBlox, and AI**

[![Deploy MkDocs](https://github.com/MohanGC07/code-core-learning-system/actions/workflows/ci.yml/badge.svg)](https://github.com/MohanGC07/code-core-learning-system/actions/workflows/ci.yml)
[![MkDocs Material](https://img.shields.io/badge/Built%20with-MkDocs%20Material-5e35b1?style=flat-square)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222?style=flat-square&logo=github)](https://mohangc07.github.io/code-core-learning-system/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Lessons](https://img.shields.io/badge/Lessons-15%2B-blue?style=flat-square)](#)

<br>

**[🌐 Live Site](https://mohangc07.github.io/code-core-learning-system/) · [📘 Start Learning](https://mohangc07.github.io/code-core-learning-system/coding/python/module-01-basics/lesson-01/) · [🤖 Robotics](https://mohangc07.github.io/code-core-learning-system/robotics/) · [📚 Resources](https://mohangc07.github.io/code-core-learning-system/resources/)**

</div>

---

## 📖 About

**Code & Core Learning System** is an open-source, structured learning platform built with MkDocs Material and hosted on GitHub Pages. It is designed for students in grades 6–10 who want to learn programming, robotics, and AI from scratch — through hands-on lessons, real projects, and a consistent teaching structure.

Every lesson follows the same proven format:

```
Concept → Analogy → Code Example → Exercise → Challenge → Quiz
```

No fluff. No theory dumps. Just structured, practical learning.

---

## 🌐 Live Platform

> **[https://mohangc07.github.io/code-core-learning-system/](https://mohangc07.github.io/code-core-learning-system/)**

---

## 🗺️ Learning Tracks

### 🐍 Python Programming
> Beginner → Intermediate · 5 Modules · Project-Based

| Module | Topics | Status |
|--------|--------|--------|
| Module 01 — Basics | Variables, data types, I/O, operators | ✅ Complete |
| Module 02 — Control Flow | if/elif/else, loops, conditions | 🚧 In Progress |
| Module 03 — Functions | Defining, calling, scope, return | 📅 Planned |
| Module 04 — Data Structures | Lists, dicts, tuples, sets | 📅 Planned |
| Module 05 — OOP | Classes, objects, inheritance | 📅 Planned |

**Capstone:** Quiz Master Application

---

### 🤖 Robotics & Arduino
> Beginner · 4 Modules · Hardware Projects

| Module | Topics | Status |
|--------|--------|--------|
| Module 01 — Foundations | Robot components, IPO model, Arduino intro | ✅ Complete |
| Module 02 — Sensors | Ultrasonic, IR, temperature, light | 📅 Planned |
| Module 03 — Actuators | Motors, servos, buzzers | 📅 Planned |
| Module 04 — Real World | Automation, smart devices | 📅 Planned |

**Capstone:** Smart Distance Alert System

---

### 🎮 PictoBlox & AI
> Beginner · 4 Modules · AI-Enabled

| Module | Topics | Status |
|--------|--------|--------|
| Module 01 — Introduction | Interface, sprites, stage | 📅 Planned |
| Module 02 — Motion & Events | Movement, sound, keyboard | 📅 Planned |
| Module 03 — Sensors | Webcam, mouse, detection | 📅 Planned |
| Module 04 — AI Features | Face detection, speech, ML | 📅 Planned |

**Capstone:** Full Animated Game with Score & Levels

---

## 📁 Repository Structure

```
code-core-learning-system/
│
├── 📂 docs/                          ← All site content lives here
│   ├── index.md                      ← Homepage
│   │
│   ├── 📂 coding/
│   │   ├── 📂 python/
│   │   │   ├── 📂 module-01-basics/
│   │   │   │   ├── index.md          ← Module overview
│   │   │   │   ├── lesson-01.md      ← Welcome to Python
│   │   │   │   ├── lesson-02.md      ← Variables & Data Types
│   │   │   │   ├── lesson-03.md      ← Operators & Expressions
│   │   │   │   └── 📂 projects/
│   │   │   │       ├── index.md      ← Project hub
│   │   │   │       ├── mini-01.md    ← Personal Profile Card
│   │   │   │       ├── mini-02.md    ← Student Report Card
│   │   │   │       ├── mini-03.md    ← Restaurant Bill Calculator
│   │   │   │       └── capstone.md   ← Profile Generator App
│   │   │   └── module-02 to 05/
│   │   └── 📂 pictoblox/
│   │
│   ├── 📂 robotics/
│   │   └── 📂 module-01-foundations/
│   │       ├── lesson-01.md          ← Introduction to Robotics
│   │       └── 📂 projects/
│   │           ├── mini-01.md        ← LED Blink Circuit
│   │           └── capstone.md       ← Smart Distance Alert
│   │
│   ├── 📂 resources/
│   │   ├── 📂 cheatsheets/
│   │   └── 📂 diagrams/
│   │
│   └── 📂 assets/
│       ├── 📂 css/extra.css          ← Custom theme styles
│       ├── 📂 js/mermaid-init.js     ← Mermaid diagram init
│       └── 📂 images/logo.svg        ← Site logo
│
├── 📂 .github/workflows/
│   └── ci.yml                        ← Auto-deploy to GitHub Pages
│
└── mkdocs.yml                        ← MkDocs configuration
```

---

## 🧱 Tech Stack

| Technology | Purpose |
|---|---|
| [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) | Site framework and theme |
| [GitHub Pages](https://pages.github.com/) | Free hosting |
| [GitHub Actions](https://github.com/features/actions) | Auto-deployment on push |
| [Mermaid.js](https://mermaid.js.org/) | Diagrams inside Markdown |
| [awesome-pages plugin](https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin) | Auto sidebar navigation |
| Markdown + pymdownx | Lesson content and formatting |

---

## 🚀 Run Locally

**Prerequisites:** Python 3.8+

```bash
# 1. Clone the repository
git clone https://github.com/MohanGC07/code-core-learning-system.git
cd code-core-learning-system

# 2. Install dependencies
pip install mkdocs-material mkdocs-awesome-pages-plugin

# 3. Serve locally
mkdocs serve

# 4. Open in browser
# http://127.0.0.1:8000
```

---

## ✍️ Writing a New Lesson

1. Copy `docs/resources/LESSON_TEMPLATE.md`
2. Place it in the correct module folder
3. Update the module's `.pages` file to include it
4. Push — GitHub Actions deploys automatically

**Lesson structure:**
```
Frontmatter → Info cards → Objectives → Concept →
Core Content → Activity → Exercise → Challenge → Quiz →
Summary → Next lesson link
```

---

## 📦 Deployment

Every push to `main` automatically triggers GitHub Actions:

```yaml
Push to main
    ↓
GitHub Actions (ci.yml)
    ↓
pip install mkdocs-material + awesome-pages
    ↓
mkdocs gh-deploy --force
    ↓
Live at GitHub Pages
```

---

## 🤝 Contributing

This is an actively maintained educational project.

- 🐛 **Found an error?** Open an Issue
- 💡 **Lesson suggestion?** Start a Discussion  
- 📝 **Want to contribute content?** Fork → branch → PR

---

## 📄 License

MIT License — free to use, adapt, and share with attribution.

---

## 👤 Author

**Mohan G.C**

[![GitHub](https://img.shields.io/badge/GitHub-MohanGC07-181717?style=flat-square&logo=github)](https://github.com/MohanGC07)

---

<div align="center">

Built with ❤️ using [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)

*Start learning today — one lesson at a time.*

</div>