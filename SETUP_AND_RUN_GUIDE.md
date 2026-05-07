# Setup and Run Guide

This guide explains how to set up, run, build, edit, and deploy the **Ameer Hamza Interactive Data Scientist Portfolio**.

Project name:

```text
ds-portfolio
```

Local project path:

```powershell
C:\MyDrive\ds-portfolio
```

Live portfolio:

```text
https://ds-portfolio-eight.vercel.app
```

---

## 1. Requirements

Before running the project, make sure these are installed:

```text
Node.js
npm
Git
VS Code
```

Check Node.js:

```powershell
node -v
```

Recommended:

```text
Node.js 20.9 or higher
```

Check npm:

```powershell
npm -v
```

Check Git:

```powershell
git --version
```

---

## 2. Open the project folder

Open PowerShell and run:

```powershell
cd C:\MyDrive\ds-portfolio
```

Your terminal must show:

```powershell
PS C:\MyDrive\ds-portfolio>
```

Do not run project commands from:

```powershell
PS C:\MyDrive>
```

---

## 3. Open the project in VS Code

Run:

```powershell
code .
```

This opens the full portfolio project in VS Code.

---

## 4. Install project dependencies

Run this inside the project folder:

```powershell
npm install
```

This installs all required packages from `package.json`.

The main packages used are:

```text
next
react
react-dom
typescript
tailwindcss
framer-motion
react-icons
recharts
three
@react-three/fiber
@react-three/drei
clsx
```

---

## 5. Run the website locally

Run:

```powershell
npm run dev
```

Then open this in your browser:

```text
http://localhost:3000
```

This starts the local development server.

---

## 6. Stop the local server

In the terminal, press:

```text
Ctrl + C
```

If PowerShell asks for confirmation, press:

```text
Y
```

---

## 7. Build the website

Before pushing changes to GitHub or deploying, run:

```powershell
npm run build
```

This checks whether the portfolio can be built for production.

If the build succeeds, the project is ready to push.

---

## 8. Run production build locally

Only run this after a successful build:

```powershell
npm run start
```

Then open:

```text
http://localhost:3000
```

This runs the production version locally.

---

## 9. Normal development workflow

Use this workflow every time you update the portfolio:

```powershell
cd C:\MyDrive\ds-portfolio
code .
npm run dev
```

Make your changes in VS Code.

Then stop the server:

```text
Ctrl + C
```

Test production build:

```powershell
npm run build
```

Commit and push:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

---

## 10. GitHub workflow

Check changed files:

```powershell
git status
```

Add all changed files:

```powershell
git add .
```

Commit changes:

```powershell
git commit -m "Update portfolio"
```

Push to GitHub:

```powershell
git push
```

After pushing, Vercel should automatically redeploy the live website.

---

## 11. First-time GitHub setup

Only use this if the project is not already connected to GitHub.

```powershell
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/ameerhamzarashid/ds-portfolio.git
git push -u origin main
```

If Git says the remote already exists:

```powershell
git remote remove origin
git remote add origin https://github.com/ameerhamzarashid/ds-portfolio.git
git push -u origin main
```

---

## 12. Deployment with Vercel

The portfolio is deployed on Vercel.

Live link:

```text
https://ds-portfolio-eight.vercel.app
```

Normal deployment process:

```text
1. Make changes locally.
2. Run npm run build.
3. Commit changes.
4. Push to GitHub.
5. Vercel redeploys automatically.
```

Commands:

```powershell
npm run build
git add .
git commit -m "Update portfolio"
git push
```

---

## 13. Important project files

### Main page

```text
app/page.tsx
```

This controls the order of all homepage sections.

Current clean structure:

```tsx
<ThemeBackground />
<JourneyScene3D />

<Navbar />
<IllusionHero />
<TechMarquee />
<StoryJourney />
<About />
<Skills />
<TechCommandCentre />
<DataVisuals />
<Projects />
<Experience />
<Contact />
<Footer />
```

---

### Global styling

```text
app/globals.css
```

This controls:

```text
background
theme colours
glass cards
text readability
floating node styles
music note animation
scroll performance
```

---

### Website metadata

```text
app/layout.tsx
```

This controls:

```text
browser tab title
site description
Google font setup
global layout
```

---

## 14. How to update profile text

File:

```text
components/IllusionHero.tsx
```

Change this file when editing:

```text
name
headline
intro paragraph
hero buttons
GitHub link
LinkedIn link
email link
counter values
3D panel wording
```

Search for:

```text
Ameer Hamza
I transform complex data
Start Journey
Explore Projects
Download CV
```

---

## 15. How to update CV

File location:

```text
public/Ameer-Hamza-CV.pdf
```

Steps:

```text
1. Export your latest CV as PDF.
2. Rename it exactly to Ameer-Hamza-CV.pdf.
3. Replace the old file inside the public folder.
4. Run npm run dev.
5. Click Download CV and test it.
```

Correct file name:

```text
Ameer-Hamza-CV.pdf
```

Wrong examples:

```text
Ameer Hamza CV.pdf
CV.pdf
ameer-hamza-cv.pdf
```

---

## 16. How to update projects

File:

```text
data/projects.ts
```

Project format:

```tsx
{
  title: "AI Race Engineer",
  category: "Data Analytics",
  description:
    "Formula 1 telemetry and race analytics dashboard designed to analyse lap data, driver performance and racing insights.",
  tags: ["Python", "Telemetry", "Data Analytics", "Dashboard"],
  github: "https://github.com/ameerhamzarashid/ai-race-engineer",
  demo: "",
  impact:
    "Shows data engineering, analytics storytelling and telemetry analysis.",
}
```

To add a project, copy one full project block and update:

```text
title
category
description
tags
github
demo
impact
```

Allowed categories:

```text
Machine Learning
Data Analytics
Computer Vision
Generative AI
MLOps
Research
```

If you add a new category, also update the category list in the same file.

---

## 17. How to update skills

File:

```text
data/skills.ts
```

Skill group example:

```tsx
{
  title: "Languages & Databases",
  skills: ["Python", "SQL", "R", "MySQL", "PostgreSQL"]
}
```

To add a skill, add it inside the correct `skills` array.

Example:

```tsx
skills: ["Python", "SQL", "R", "MySQL", "PostgreSQL", "Snowflake"]
```

To add a new skill group:

```tsx
{
  title: "Data Engineering",
  skills: ["Airflow", "dbt", "Spark", "Databricks", "ETL"]
}
```

---

## 18. How to update experience

File:

```text
data/experience.ts
```

Experience format:

```tsx
{
  role: "Quality Control Specialist",
  company: "Fenwick",
  period: "Nov 2024 - Dec 2025",
  points: [
    "Developed predictive models to identify defects and supplier quality issues.",
    "Built automated data workflows for quality checkpoints.",
  ],
}
```

To add a role, add a new object inside the `experiences` array.

---

## 19. How to update charts

File:

```text
data/visualData.ts
```

This controls the charts in:

```text
components/DataVisuals.tsx
```

Skill radar example:

```tsx
export const skillRadarData = [
  { skill: "Python", value: 95 },
  { skill: "SQL", value: 90 },
  { skill: "ML", value: 88 },
];
```

Project chart example:

```tsx
export const projectTypeData = [
  { name: "Machine Learning", projects: 3 },
  { name: "Data Analytics", projects: 2 },
];
```

Tool usage example:

```tsx
export const toolUsageData = [
  { name: "Python", value: 35 },
  { name: "SQL/BI", value: 20 },
];
```

---

## 20. How to update the Tech Command Centre

File:

```text
components/TechCommandCentre.tsx
```

This section maps:

```text
technical area
tools
related projects
outcome
```

Example:

```tsx
{
  area: "Data Analytics",
  tools: ["SQL", "Power BI", "Tableau", "Excel", "Pandas"],
  projects: ["AI Race Engineer", "F1 Telemetry Analysis Tool"],
  outcome: "Dashboards, KPI reporting, insight generation and decision support.",
}
```

---

## 21. How to update floating data nodes

File:

```text
components/FloatingNumbers.tsx
```

Floating node example:

```tsx
{ text: "AI", x: 72, y: 12, freq: 293.66, driftX: -22, driftY: 18, duration: 9 }
```

Meaning:

```text
text = label shown on the page
x = horizontal position percentage
y = vertical position percentage
freq = musical note frequency when clicked
driftX = horizontal floating movement
driftY = vertical floating movement
duration = speed of floating animation
```

Recommended maximum:

```text
8 to 12 nodes
```

Too many nodes can make the page slower.

---

## 22. How to update the 3D orb

File:

```text
components/NeuralOrb3D.tsx
```

This controls the mouse-reactive orb in the hero section.

Safe things to change:

```text
colours
opacity
height
small labels
```

Be careful changing:

```text
number of points
geometry segments
tube geometry count
lights
particle count
```

These can create lag.

---

## 23. How to update or disable the train background

File:

```text
components/JourneyScene3D.tsx
```

This controls:

```text
background train
track
data mist
scroll-linked train movement
camera movement
```

To disable the train background, open:

```text
app/page.tsx
```

Comment out:

```tsx
{/* <JourneyScene3D /> */}
```

To make it more visible, find this in `JourneyScene3D.tsx`:

```tsx
opacity-25
```

Change to:

```tsx
opacity-35
```

To make it more subtle, change to:

```tsx
opacity-15
```

---

## 24. How to update colours

File:

```text
app/globals.css
```

Main theme variables:

```css
:root {
  --royal-blue: #123cdb;
  --deep-ocean: #061a5f;
  --sea-green: #2dd4bf;
  --soft-sea: #99f6e4;
}
```

Main style classes:

```text
.glass-card
.deep-glass
.hero-glass
.section-title-panel
.gradient-text
.ocean-text
```

---

## 25. How to update navbar links

File:

```text
components/Navbar.tsx
```

Navigation array:

```tsx
const navItems = [
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Visuals", href: "#data-visuals" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
```

The `href` must match the section ID.

Example section:

```tsx
<section id="projects">
```

Navbar link:

```tsx
{ label: "Projects", href: "#projects" }
```

---

## 26. Add a new section

Create a new component:

```text
components/BlogPreview.tsx
```

Example:

```tsx
export default function BlogPreview() {
  return (
    <section id="blog" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-black text-white">Blog</h2>
      </div>
    </section>
  );
}
```

Import it in:

```text
app/page.tsx
```

```tsx
import BlogPreview from "@/components/BlogPreview";
```

Add it to the page:

```tsx
<BlogPreview />
```

Add navbar item if needed:

```tsx
{ label: "Blog", href: "#blog" }
```

---

## 27. Remove unused experimental files

If gamification files are no longer used, they can be deleted.

Possible unused files:

```text
components/JourneyOverlay.tsx
components/JourneyGamification.tsx
components/FloatingDataTickets.tsx
components/InventoryDrawer.tsx
components/RouteMiniMap.tsx
components/ProjectStationDoors.tsx
components/JourneyStation.tsx
data/journeyAchievements.ts
data/collectibles.ts
```

Before deleting, search the file name in VS Code:

```text
Ctrl + Shift + F
```

If it is not imported anywhere, it is safe to delete.

---

## 28. Common errors and fixes

### Error: Missing script dev

You are probably in the wrong folder.

Fix:

```powershell
cd C:\MyDrive\ds-portfolio
npm run dev
```

---

### Error: Can't resolve tailwindcss in C:\MyDrive

This happens if wrong Node files exist in `C:\MyDrive`.

Fix:

```powershell
cd C:\MyDrive
Remove-Item -Force .\package-lock.json
if (Test-Path .\package.json) { Remove-Item -Force .\package.json }
if (Test-Path .\node_modules) { Remove-Item -Recurse -Force .\node_modules }

cd C:\MyDrive\ds-portfolio
npm install
npm run dev
```

---

### Error: CV download does not work

Check this file exists:

```text
public/Ameer-Hamza-CV.pdf
```

---

### Site feels slow

Try:

```text
1. Disable JourneyScene3D in app/page.tsx.
2. Reduce floating nodes in FloatingNumbers.tsx.
3. Reduce 3D objects in NeuralOrb3D.tsx.
4. Avoid increasing blur in globals.css.
5. Avoid adding many fixed overlays.
```

---

## 29. Final deployment checklist

Before final push:

```powershell
npm run build
```

If successful:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

Then check:

```text
https://ds-portfolio-eight.vercel.app
```

---

## 30. Quick edit map

| What you want to change | File |
|---|---|
| Homepage order | `app/page.tsx` |
| Main intro text | `components/IllusionHero.tsx` |
| CV file | `public/Ameer-Hamza-CV.pdf` |
| Navbar links | `components/Navbar.tsx` |
| About text | `components/About.tsx` |
| Skills | `data/skills.ts` |
| Projects | `data/projects.ts` |
| Experience | `data/experience.ts` |
| Charts data | `data/visualData.ts` |
| Command centre | `components/TechCommandCentre.tsx` |
| Floating nodes | `components/FloatingNumbers.tsx` |
| 3D orb | `components/NeuralOrb3D.tsx` |
| Train background | `components/JourneyScene3D.tsx` |
| Colours | `app/globals.css` |
| Metadata | `app/layout.tsx` |
| Contact details | `components/Contact.tsx` |
| Footer | `components/Footer.tsx` |

---

## 31. Best practice

Keep the portfolio:

```text
fast
readable
minimal
professional
visually memorable
```

Best rule:

```text
Add proof before adding animation.
```

Recommended future improvements:

```text
1. Add project screenshots.
2. Add project case study pages.
3. Add project portfolio PDF.
4. Add recruiter mode.
5. Add blog/articles.
```
