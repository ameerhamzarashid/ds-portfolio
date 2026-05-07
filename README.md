# Ameer Hamza | Interactive Data Scientist Portfolio

A modern, immersive, and interactive portfolio website for **Ameer Hamza**, designed to present data science, machine learning, analytics, MLOps, generative AI, and frontend development skills through a visual storytelling experience.

This portfolio is built as a minimal 3D journey, using a soft blue, white, and sea green design language. It includes a mouse-reactive 3D data orb, floating interactive data nodes, scroll-based storytelling sections, data visualisations, project filtering, and a lightweight train journey background.

## Live Portfolio

Portfolio: https://ds-portfolio-eight.vercel.app

## GitHub Profile

GitHub: https://github.com/ameerhamzarashid

## LinkedIn

LinkedIn: https://www.linkedin.com/in/ameerhamza78644

---

## Project Purpose

This portfolio is not just a static personal website. It is designed to show practical technical ability through the website itself.

The portfolio demonstrates:

- Data science and machine learning experience
- Interactive frontend development using Next.js and React
- TypeScript-based project structure
- 3D visualisation with React Three Fiber and Three.js
- Scroll-based storytelling using Framer Motion
- Data visualisation using Recharts
- Responsive design with Tailwind CSS
- Deployment workflow using GitHub and Vercel

The goal is to give recruiters, hiring managers, and collaborators a clear view of my technical skillset, project experience, and ability to build polished digital products.

---

## Main Features

### 1. Interactive Hero Section

The hero section introduces the portfolio with:

- Ameer Hamza branding
- Strong professional headline
- Download CV button
- GitHub, LinkedIn, and email links
- Animated counters
- Mouse-reactive 3D orb
- Floating clickable data nodes
- Musical note effects when nodes are clicked

### 2. Mouse-Reactive 3D Data Orb

The portfolio includes a lightweight 3D orb built with:

- Three.js
- React Three Fiber
- Drei
- Low-poly geometry
- Mouse-reactive camera motion
- Optimised rendering for smoother scrolling

### 3. Floating Data Nodes

Floating nodes such as `AI`, `SQL`, `ML`, `RAG`, `CNN`, `6G`, and `MLOps` appear in the hero area.

Clicking a node:

- Plays a short musical tone
- Shows floating music note effects
- Creates a more interactive and memorable experience

### 4. Train Journey Background

A lightweight 3D train journey scene runs in the background.

It includes:

- Minimal 3D train
- Curved track
- Subtle data mist
- Scroll-based train movement
- Low-cost rendering for performance

The purpose is to make the portfolio feel like a visual journey rather than a normal webpage.

### 5. Data Journey Section

The storytelling section explains the thinking process behind the portfolio:

1. Signal
2. Pattern
3. System
4. Impact

This shows the way raw information is turned into insight, models, systems, and decisions.

### 6. Technical Command Centre

This section maps skills to actual outcomes.

It shows how tools such as Python, SQL, Power BI, machine learning, MLOps, and generative AI connect to real projects.

### 7. Data Visualisations

The portfolio includes charts using Recharts, such as:

- Skill radar chart
- Project coverage chart
- Tool usage chart
- ML delivery workflow

This makes the website feel more relevant to data science instead of being only a design portfolio.

### 8. Dynamic Project Filtering

Projects can be filtered by category:

- All
- Machine Learning
- Data Analytics
- Computer Vision
- Generative AI
- MLOps
- Research

### 9. Responsive Design

The portfolio is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Some heavier visual effects are intentionally reduced or hidden on smaller screens for better usability.

---

## Technologies Used

### Frontend Framework

- Next.js
- React
- TypeScript

### Styling

- Tailwind CSS
- Custom CSS
- Glassmorphism design
- Responsive layouts

### Animation

- Framer Motion

### 3D Visualisation

- Three.js
- React Three Fiber
- Drei

### Charts and Data Visuals

- Recharts

### Icons

- React Icons

### Deployment

- GitHub
- Vercel

---

## Folder Structure

```text
ds-portfolio/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── About.tsx
│   ├── CaseStudies.tsx
│   ├── Contact.tsx
│   ├── CounterCard.tsx
│   ├── DataVisuals.tsx
│   ├── Experience.tsx
│   ├── FloatingNumbers.tsx
│   ├── Footer.tsx
│   ├── IllusionHero.tsx
│   ├── JourneyScene3D.tsx
│   ├── Navbar.tsx
│   ├── NeuralOrb3D.tsx
│   ├── Projects.tsx
│   ├── ScrollReveal.tsx
│   ├── SectionTitle.tsx
│   ├── Skills.tsx
│   ├── StoryJourney.tsx
│   ├── TechCommandCentre.tsx
│   ├── TechMarquee.tsx
│   └── ThemeBackground.tsx
│
├── data/
│   ├── caseStudies.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── visualData.ts
│
├── public/
│   └── Ameer-Hamza-CV.pdf
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md