# ⚙️ Repository Maintenance Guide

> *Your personal playbook for keeping this repo clean, growing, and portfolio-worthy.*

---

## 📅 Daily Workflow (15 minutes)

> Small consistent actions compound into an impressive repository.

```
Daily Checklist:
□ Review any student Issues/questions → respond within 24 hours
□ Fix any typos or broken code snippets found during teaching
□ Note 1 improvement idea in your personal TODO (see below)
□ Commit any changes with a clear message
```

**Commit message format (use this every time):**
```
[track/module] action: short description

Examples:
[python/m01] fix: correct output in lesson-02 exercise
[robotics/m03] add: ultrasonic sensor challenge task
[resources] update: Python cheatsheet with f-strings
[pictoblox/m02] new: lesson-04 sprite animation
```

---

## 🗓️ Weekly Workflow (1–2 hours)

Pick **one** of these each week:

| Week Type | Task |
|---|---|
| 📝 **Content Week** | Write or refine 1–2 new lessons |
| 🧪 **Project Week** | Build and document a new mini project |
| 🔧 **Polish Week** | Fix issues, improve existing lessons, add hints |
| 🎨 **Resource Week** | Create a cheatsheet, diagram, or glossary entries |

**Weekly commit goal:** Minimum 3–5 meaningful commits per week.

---

## 🏷️ Versioning Your Lessons

Use a simple version system inside each lesson file's front matter:

```markdown
> **Version:** 1.2  
> **Last Updated:** 2025-06-15  
> **Changelog:** Added f-string examples, expanded quiz
```

### Version numbering rules:
- `v1.0` — First published version
- `v1.1` — Minor fix (typo, small clarification)
- `v1.2` — Added content (new example, extra hint)
- `v2.0` — Major rewrite or restructure

### Git tag for module completion:
```bash
# When a full module is tested and taught:
git tag -a python-m01-v1.0 -m "Python Module 01 complete and classroom-tested"
git push origin --tags
```

---

## 📋 GitHub Issues — Your Teaching Notebook

Use GitHub Issues as a running task list:

**Label system to create:**

| Label | Color | Use for |
|---|---|---|
| `lesson-idea` | 🟦 Blue | Future lesson topics |
| `student-question` | 🟨 Yellow | Common confusions to address |
| `bug` | 🔴 Red | Broken code/instructions |
| `enhancement` | 🟩 Green | Improvements to existing content |
| `project-idea` | 🟣 Purple | New project concepts |

**Create a pinned Issue called "📌 Content Roadmap"** and keep your upcoming lessons listed there. Update it weekly.

---

## 🔁 Reusing Templates Efficiently

### The Template Workflow

```
1. Copy LESSON_TEMPLATE.md → new lesson file
2. Fill in [PLACEHOLDERS] top to bottom
3. Delete any sections not applicable
4. Add to module index (README in module folder)
5. Commit: "[track/module] new: lesson-XX title"
```

### Module-Level README (create one per module folder)

Each module folder should have its own `README.md`:

```markdown
# Module 01: Python Basics

## Lessons in this module
| # | Title | Topics | Status |
|---|---|---|---|
| 01 | Variables & Data Types | `int`, `str`, `float`, input/output | ✅ Ready |
| 02 | Working with Strings | String methods, f-strings | ✅ Ready |
| 03 | Numbers & Math | Operators, math module | 🚧 In Progress |
| 04 | Getting User Input | `input()`, type conversion | 📅 Planned |

## Mini Project
[📁 Module 01 Mini Project — Number Guessing Game](../projects/mini/p01-number-guesser/)
```

### Batch creation trick
When starting a new module, create all lesson files at once with placeholder content:
```bash
for i in 01 02 03 04; do
  cp resources/LESSON_TEMPLATE.md python/module-02-control-flow/lesson-$i.md
done
```

---

## 🏅 Making It Portfolio-Worthy

### For Teaching Portfolios

Add this to your personal CV/resume:

```
Open-Source Curriculum Developer | CodeCraft Learning Lab
github.com/[your-username]/codecraft-learning-lab

• Designed and maintained a structured coding curriculum for Grades 6–10
• Created 60+ lessons across Python, PictoBlox, and Arduino/Robotics tracks
• Built interactive lesson system with exercises, quizzes, and capstone projects
• [X] student repositories forked/starred
```

### For Recruiter Visibility

1. **Pin this repo** on your GitHub profile
2. Add a **descriptive About section** on the repo:
   > *"A complete, interactive coding curriculum for Grades 6–10 — Python, PictoBlox & Arduino. 60+ lessons with exercises, quizzes, and projects."*
3. Add **topics/tags** to the repo:
   `python`, `education`, `arduino`, `robotics`, `curriculum`, `stem`, `kids-coding`, `pictoblox`, `open-source`, `teaching`
4. Add a **social preview image** (repo banner) — use Canva to make a 1280×640 image
5. Keep your **commit history active** — recruiters look at contribution graphs

### README Badges to add over time

```markdown
![GitHub stars](https://img.shields.io/github/stars/USERNAME/REPO)
![GitHub forks](https://img.shields.io/github/forks/USERNAME/REPO)
![Last commit](https://img.shields.io/github/last-commit/USERNAME/REPO)
![Lessons](https://img.shields.io/badge/Lessons-60+-brightgreen)
```

---

## 🌱 Growth Milestones

Track your progress:

| Milestone | Goal | Status |
|---|---|---|
| 🌱 Seed | First 5 lessons published | [ ] |
| 🌿 Sprout | Full Module 01 (all tracks) | [ ] |
| 🌳 Tree | All 4 modules per track | [ ] |
| 🍎 Harvest | All capstone projects documented | [ ] |
| 🚀 Launch | 50+ GitHub stars / student forks | [ ] |

---

## 🔐 Branch Strategy (Simple)

```
main          ← Always stable. Only merge tested content here.
dev           ← Your working branch. Draft lessons go here.
fix/[topic]   ← Quick fixes to specific lessons
feature/[name]← New modules or major additions
```

```bash
# Daily workflow
git checkout dev
# ... make changes ...
git add .
git commit -m "[python/m01] add: lesson-03 functions"
git push origin dev

# When ready to publish
git checkout main
git merge dev
git push origin main
```

---

## 📦 Backup & Sync

- Push to GitHub **every time you finish a work session**
- Enable **GitHub Discussions** for student Q&A
- Enable **GitHub Pages** (optional) to turn your repo into a browsable website for free

---

*Maintained by [Your Name] · CodeCraft Learning Lab*