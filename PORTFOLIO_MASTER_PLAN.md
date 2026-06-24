# Muhammad Nurifai Portfolio Website

## Vision

This portfolio is not a traditional developer portfolio.

Most portfolios present a single profession:

* Frontend Developer
* UI/UX Designer
* Graphic Designer

This portfolio presents all three disciplines while maintaining a clear separation between them.

The goal is to communicate:

> I build products through code, design, and visual storytelling.

---

# Core Concept

The portfolio is organized around three professional identities.

Visitors can choose which side of my work they want to explore.

```text
Frontend Development
UI/UX Design
Graphic Design
```

Each path has its own dedicated experience, visual style, and content structure.

---

# Site Structure

```text
/
├── Home
├── Frontend
│   ├── Project List
│   └── Case Study
├── UIUX
│   ├── Case Study List
│   └── Case Study Detail
├── Graphic
│   ├── Gallery
│   └── Project Detail
├── Experience
├── Awards
└── Contact
```

---

# Homepage

## Hero

```text
Muhammad Nurifai

Frontend Developer
UI/UX Designer
Graphic Designer

Building products through code and design.
```

CTA:

```text
Explore My Work
```

---

## Choose Your Path

Three large cards.

### Frontend Development

Description:

```text
Building scalable web applications and digital products.
```

Link:

```text
/frontend
```

---

### UI/UX Design

Description:

```text
Designing intuitive and meaningful user experiences.
```

Link:

```text
/uiux
```

---

### Graphic Design

Description:

```text
Creating visual identities and communication materials.
```

Link:

```text
/graphic
```

---

## Selected Work

Featured projects from all disciplines.

Examples:

* Hospital Information System
* Rwikistat
* E-Rekomtek
* PT Kensen Logo
* ICMSA Website

---

## Experience Preview

Timeline preview.

```text
2025
System & Data Administrator

2024–2025
Frontend Developer

2022
Intern Student
```

---

# Frontend Section

## Purpose

Show engineering skills.

Target audience:

* Recruiters
* Engineering Managers
* Technical Leads

---

## Layout

```text
Hero
Projects Grid
Case Studies
```

---

## Project Card

Contains:

* Thumbnail
* Project Name
* Role
* Stack
* Year

Example:

```text
Hospital Information System

Frontend Developer

Next.js
React
Tailwind
REST API
```

---

## Case Study Structure

### Hero

Large screenshot.

### Overview

Project summary.

### Problem

What problem was being solved.

### My Role

Responsibilities.

### Tech Stack

Frameworks and tools.

### Challenges

Technical and business challenges.

### Solutions

How challenges were solved.

### Architecture

System overview.

### Screenshots

Application images.

### Lessons Learned

Project reflections.

---

# UI/UX Section

## Purpose

Show design thinking.

Target audience:

* Product Teams
* Designers
* Startup Founders

---

## Layout

```text
Case Study Grid
```

---

## Case Study Structure

### Overview

Project introduction.

### Problem Statement

User or business problem.

### Research

Research findings.

### User Flow

User journey.

### Wireframes

Low fidelity designs.

### Design System

Components and styles.

### High Fidelity

Final designs.

### Prototype

Interactive demonstration.

### Outcome

Results and impact.

---

# Graphic Design Section

## Purpose

Show visual design capabilities.

Target audience:

* Clients
* Marketing Teams
* Agencies

---

## Layout

Pinterest / Behance inspired.

Masonry grid.

---

## Categories

```text
All
Logo
Poster
Branding
Social Media
Flyer
Banner
```

---

## Example Works

### Logo Design

* PT Kensen Grik Teknokons
* BEM FMIPA
* eReses

### Event Design

* IMTA 2022

### Social Media

* BEM FMIPA Content

---

# Experience Page

Timeline based.

---

## Timeline Structure

### 2025

System & Data Administrator

Universitas Syiah Kuala

Responsibilities:

* Survey data management
* Kobotoolbox setup
* Data analysis

---

### 2024–2025

Frontend Developer

Rumah Sakit Ibnu Sina

Responsibilities:

* Hospital Information System
* BPJS Integration
* Satu Sehat Integration
* Next.js Development

---

### 2022

Intern Student

Dinas Pengairan Aceh

Responsibilities:

* E-Rekomtek Development
* UI/UX Design

---

# Awards Page

Display achievements.

Examples:

* Djarum Beasiswa Plus Awardee
* PIPM Awardee
* 2nd Winner KSM
* 1st Winner Short Video Competition
* 3rd Winner Poster Design
* Astronomy Olympiad Winner

---

# Contact Page

Minimal.

```text
Email
LinkedIn
Github
Instagram
```

CTA:

```text
Let's Build Something Together
```

---

# Design Direction

## Theme

Modern and minimal.

Inspired by:

* Vercel
* Linear
* Raycast

Avoid:

* Overly colorful layouts
* Dribbble-style portfolios
* Heavy animations

---

## Color Palette

```css
Background: #0A0A0A
Surface: #111111
Border: #1F1F1F

Text: #FAFAFA
Muted: #A1A1AA

Accent: #7C3AED
```

---

# Tech Stack

## Framework

```text
Next.js
TypeScript
```

## Styling

```text
Tailwind CSS v4
shadcn/ui
```

## Animation

```text
Motion
Lenis
```

## Deployment

```text
Vercel
```

---

# Data Structure

Store content separately from components.

```text
data/
├── frontend-projects.ts
├── uiux-projects.ts
├── graphic-projects.ts
├── experiences.ts
└── awards.ts
```

Components should render from data objects.

Avoid hardcoded content.

---

# Personal Brand Statement

Muhammad Nurifai is a multidisciplinary creator who combines software engineering, user experience design, and visual communication to build impactful digital products.

The portfolio should feel like a product experience rather than a resume.
