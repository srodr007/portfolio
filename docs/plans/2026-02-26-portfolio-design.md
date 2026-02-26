# Portfolio Design — Sergio Rodriguez Valbuena
**Date:** 2026-02-26
**Status:** Approved

---

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"`, no config file)
- Framer Motion 12
- Geist Sans font (next/font/google, already configured)
- Deployed on Vercel

---

## Architecture

### Routing
Single-page application with anchor-based navigation. All content lives at `/`.

```
/ (single route)
├── #hero
├── #projects
├── #experience
├── #education
└── #contact
```

### File structure
```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

---

## Design Tokens

Defined via CSS custom properties in `globals.css` (Tailwind v4 `@theme` block):

| Token | Value |
|---|---|
| Background | `#0A0A0A` |
| Accent (violet) | `#8B5CF6` |
| Text primary | `#EDEDED` |
| Text muted | `#6B7280` |
| Card bg | `rgba(255,255,255,0.03)` |
| Card border | `rgba(255,255,255,0.08)` |

**Grain texture:** Fixed SVG noise overlay, `opacity-[0.03]`, `pointer-events-none`, `z-0`.

---

## Language
**English.** Global audience, international recruiters.

---

## Components

### Navbar
- `position: fixed`, full width, `top: 0`, `z-50`
- Background: `bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5`
- Left: `S·R` monogram in violet (`text-violet-400`)
- Right: anchor links — `Projects`, `Experience`, `Contact`
- Behavior: hides on scroll down, reappears on scroll up (`useScrollDirection` hook)
- Smooth scroll to anchor on click

### Hero
- `min-h-screen`, content vertically centered
- Layout (centered):
  - `h1`: "Sergio Rodriguez Valbuena" — `text-5xl md:text-6xl font-bold`
  - `p.role`: "AI Engineer" — `text-xl text-violet-400`
  - `p.tagline`: "Building intelligent systems that turn complex data into decisions." — `text-muted`
  - CTA button: "View Projects ↓" — solid violet, hover glow, scroll to `#projects`
- Background: static radial gradient (violet/indigo), `opacity-20`, behind text
- Framer Motion: `fadeUp` on name + role + tagline + CTA (staggered)

### Projects
- Section heading: "Projects"
- Grid: `grid-cols-1 md:grid-cols-2`, gap-6
- Each card:
  - Background: `bg-white/[0.03] border border-white/[0.08] rounded-xl p-6`
  - Hover: `border-violet-500/40 shadow-[0_0_24px_rgba(139,92,246,0.15)] -translate-y-1`
  - Transition: `transition-all duration-300`
  - Content: title + arrow icon, problem/decision/result (1 line each), tech badges
  - Tech badges: `bg-white/5 border border-white/10 text-xs px-2 py-1 rounded-full`
- Framer Motion: `fadeUp` per card with stagger on parent

**Projects data:**
1. AI System for Automated Project Development (TFG 9.2/10 — Missio IA)
   - Problem: Manual SaaS development phases are slow and error-prone
   - Decision: Multi-agent architecture with specialized AI agents per phase
   - Result: Fully automated planning, coding, testing, and docs generation
   - Stack: OpenAI, Anthropic, GCP, MCP, Reasoning models

2. Samplex – AI-Powered Exam Preparation App
   - Problem: Students waste time creating study materials from lecture PDFs
   - Decision: Upload-to-plan pipeline with LLM-generated quizzes and summaries
   - Result: Android app reducing exam prep time significantly
   - Stack: OpenAI, Firebase Cloud Functions, Android

3. Mobility Analysis for Mental Health Assessment (eB2)
   - Problem: Clinical profiling is manual, slow, and lacks behavioral data
   - Decision: DBSCAN clustering on geolocation traces to extract mobility patterns
   - Result: ML model predicting clinical profiles from mobility data
   - Stack: Python, DBSCAN, Streamlit, ML

4. Deep Learning Model for Recycling (UC)
   - Problem: Incorrect waste sorting remains widespread
   - Decision: Fine-tuned EfficientNetB0 on custom waste dataset
   - Result: 90.3% accuracy waste classifier
   - Stack: Python, TensorFlow, EfficientNetB0, Computer Vision

### Experience (vertical timeline)
- Left: vertical line `border-l border-violet-500/30`
- Each entry: dot (violet circle) + role (bold) + company + date + type
- Entries:
  1. AI Engineer — Plexus Tech · Sept 2025 – present · Remote
  2. AI Software Engineer — Missio IA · Oct 2024 – Jun 2025 · Part-time
  3. Data Analyst I — PRGX Global Inc. · Sept 2024 – Mar 2025 · Internship
- Framer Motion: `fadeUp` per entry, staggered

### Education
- Two simple cards (no timeline), same card style as Projects
- Entries:
  1. BSc Data Science & Engineering — UC3M (2021–2025) · GPA 8/10 · TFG 9.2/10
  2. BSc Computer Science (exchange) — University of California (2023–2024) · GPA 3.5
- Framer Motion: `fadeUp` on each card

### Contact
- Centered layout, minimal
- Text: "Get in touch"
- Three icon links (SVG icons):
  - Email: `sergiorodriguezvalbuena@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/sergio-rodriguez-valbuena/`
  - GitHub: TBD (placeholder `#`)
- Hover: icon turns violet
- Awards mentioned below as subtle text:
  - Excellence Scholarship of the Community of Madrid 2025
  - C1 Advanced Cambridge Certificate

---

## Animations (Framer Motion)

Single reusable variant used throughout:

```ts
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}
```

Applied with `whileInView`, `viewport={{ once: true }}` on every section and card. Stagger via `staggerChildren: 0.1` on container variants.

---

## Responsive
- Mobile-first
- Navbar: links hidden on mobile, hamburger optional (or just keep links, small screens handled with smaller text)
- Projects: 1 col mobile → 2 col desktop
- Hero: `text-4xl` mobile → `text-6xl` desktop
