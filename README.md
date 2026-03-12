# IDR Website — Institute of Digital Risk

> **Industry-Led · Academic-Informed · Risk-Ready**
> A responsive single-page homepage for the Institute of Digital Risk (IDR), built with vanilla HTML, CSS, and JavaScript.

---

## 📋 Project Brief

Design and build a brand homepage for the **Institute of Digital Risk (IDR)** — an industry-led training and deployment institute focused on digital, cyber, and AI risk.

### Deliverables
- ✅ 1 Logo for IDR (icon-only + icon + text variants)
- ✅ 1 Responsive homepage (desktop + mobile)

---

## 🎨 Logo Design

The IDR logo uses a **geometric hexagon/cube-inspired icon** to convey structure, risk resilience, and technological precision.

**Design decisions:**
- **Shape:** A faceted 3D hexagon (polygon) composed of three visible planes — suggesting depth, structure and the multi-dimensional nature of digital risk.
- **Colour:** Orange (#FF6B00) on black — energetic, high-contrast, and instantly recognisable at small sizes (favicon, mobile header).
- **Typography:** The wordmark "IDR" uses `Inter`, a clean, modern sans-serif — professional and highly legible.
- **Variants:** Icon-only (SVG polygon) and icon + text ("IDR" wordmark), both implemented inline in HTML as SVG.

---

## 🏗️ Site Structure

The website is a single-page application with smooth anchor-scroll navigation across 6 sections:

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Hero** | Mission statement, headline, CTA buttons, key stats, interactive 3D cube |
| 2 | **About IDR** | Institute story, academic partnership, deployment-ready graduates |
| 3 | **Services** | Three core service pillars — Academy, Innovation & Incubation, Advisory |
| 4 | **Pipeline** | Visual "Train → Hire → Innovate → Deploy" 4-step process |
| 5 | **Community** | Who IDR serves — students, professionals, enterprises, partners |
| 6 | **Contact** | Register-interest form with validation |

---

## 🛠️ Tech Stack

| Category | Choice | Reason |
|---|---|---|
| **Markup** | Semantic HTML5 | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` |
| **Styling** | Vanilla CSS (no frameworks) | As per brief — no Bootstrap, no Tailwind |
| **Layout** | CSS Flexbox + Grid | Responsive layout system |
| **Scripting** | Vanilla JavaScript (ES6+) | No libraries or frameworks |
| **Fonts** | Google Fonts — Inter | Clean, modern, highly legible at all weights |
| **Icons** | Inline SVG | No icon library dependency |

---

## ✨ Key Features

### Design System
- CSS custom properties (variables) for colours, spacing, and transitions
- Dark theme with orange brand accent (`#FF6B00`)
- Glassmorphism sticky nav with `backdrop-filter: blur`
- Consistent card components with hover lift + glow effects

### Hero Section
- **Interactive 3D CSS cube** — rotates continuously; tilts towards the mouse cursor on hover using JS parallax
- Glowing background grid with orange radial light sources
- Animated hero badge with pulsing dot
- Gradient text accent on the headline

### Responsiveness
- Fully responsive at **1024px**, **768px**, **480px**, and **360px** breakpoints
- Mobile nav: slide-out drawer with animated hamburger → ✕ transition and dark backdrop overlay
- Mobile drawer lives as a direct `<body>` child (not inside `<header>`) for correct z-index stacking context
- Pipeline steps reflow to a vertical list on mobile
- Hero stats stay in one horizontal row on all screen sizes

### Interactivity (JavaScript)
- Sticky header with glassmorphism on scroll
- Smooth scroll with header-offset anchoring to all sections
- Active nav link highlighting via `IntersectionObserver`
- Scroll-reveal animations with staggered siblings
- Contact form with inline validation and simulated submission
- Mobile nav: open/close, backdrop click to dismiss, link click to close, animated hamburger

---

## 📁 File Structure

```
idr-website/
├── index.html          # Single-page HTML — all sections
├── css/
│   └── style.css       # All styles — design system, sections, responsive
├── js/
│   └── script.js       # All interactivity — nav, scroll, cube, form
└── README.md           # This file
```

---

## 🎯 Technical Requirements Checklist

| Requirement | Status |
|---|---|
| Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) | ✅ |
| Responsive layout — CSS Flexbox + Grid, works on mobile and desktop | ✅ |
| Sticky navigation bar with smooth scroll to sections | ✅ |
| Clear, accessible colour contrast | ✅ |
| Google Fonts (Inter) | ✅ |
| Hover states for buttons and nav links | ✅ |
| No CSS frameworks (no Bootstrap, no Tailwind) | ✅ |
| Vanilla HTML/CSS/JS only | ✅ |

---

## 🖥️ Sections — Detailed Breakdown

### 1. Hero
- Headline: *"Advancing the Future of Digital Risk"*
- Subheading explaining IDR's mission to train and deploy digital risk practitioners
- CTAs: **Explore Programs** (primary) + **Hire Talent** (secondary)
- Stats: 3+ Service Pillars · UK University Partner · 100% Industry-Led
- Interactive 3D CSS cube with mouse-parallax tilt effect

### 2. About IDR
- Explains IDR as an industry-led institute bridging the gap between theory and operational readiness
- UK university partnership highlighted
- 4 feature cards: Industry Expertise · University Partnership · Deployment-Ready Talent · Real-World Projects

### 3. Service Pillars
- **Academy** — Bootcamps, upskilling pathways, certifications, university-validated programmes
- **Innovation & Incubation** — AI governance model development, RegTech innovation, IP incubation
- **Advisory Services** — NIST, ISO 27001, NIS2 compliance frameworks for organisations

### 4. Pipeline
- 4-step process: **Train → Hire → Innovate → Deploy**
- Visual step cards with icons, numbers, and descriptions
- Connector arrows between steps (hidden on mobile, steps stack vertically)

### 5. Community / Who We Serve
- Students entering digital risk careers
- Early-career and experienced professionals seeking upskilling
- Employers in financial services and critical infrastructure
- University and research partners

### 6. Contact
- Register-interest form: Name, Email, Organisation, Interest (dropdown), Message
- Client-side validation on required fields
- Simulated submission with success message

---

## 🎨 Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#FF6B00` | Brand orange — buttons, accents, icons |
| `--primary-hover` | `#FF8833` | Hover state for primary elements |
| `--bg-dark` | `#0A0A0A` | Main page background |
| `--bg-card` | `#141414` | Card / surface background |
| `--text-white` | `#FFFFFF` | Headings |
| `--text-main` | `#E8E8E8` | Body text |
| `--text-muted` | `#9A9A9A` | Subtext, labels |
| `--border-light` | `rgba(255,255,255,0.08)` | Card borders, dividers |

---

*Built for the Institute of Digital Risk — advancing the next generation of digital and cyber risk professionals.*
