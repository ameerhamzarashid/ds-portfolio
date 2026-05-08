"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const journeySteps = [
  {
    id: "about",
    eyebrow: "About",
    title: "I build useful systems from complex data.",
    text: "My work sits across data analysis, machine learning, dashboards and AI products. I focus on turning messy information into something clear, usable and valuable.",
    visual: "ABOUT",
    sideLabelA: "Data",
    sideLabelB: "Problem",
    sideLabelC: "Outcome",
  },
  {
    id: "skills",
    eyebrow: "Skills",
    title: "A practical stack for data, AI and product work.",
    text: "I use Python, SQL, machine learning, BI tools, MLOps and modern web technologies to move from analysis to working systems.",
    visual: "SKILLS",
    sideLabelA: "Python",
    sideLabelB: "SQL",
    sideLabelC: "AI",
  },
  {
    id: "data-visuals",
    eyebrow: "Visuals",
    title: "I make technical work easier to read.",
    text: "Charts, dashboards and visual summaries help explain what the data says, where the patterns are and what decision should come next.",
    visual: "VISUALS",
    sideLabelA: "Charts",
    sideLabelB: "Dashboards",
    sideLabelC: "Insights",
  },
  {
    id: "projects",
    eyebrow: "Projects",
    title: "Projects show how the skills come together.",
    text: "My project work covers machine learning, analytics, computer vision, AI systems and research-focused development.",
    visual: "PROJECTS",
    sideLabelA: "Models",
    sideLabelB: "Apps",
    sideLabelC: "Research",
  },
  {
    id: "experience",
    eyebrow: "Experience",
    title: "I connect technical work with real environments.",
    text: "My experience includes research, analytics, dashboards, modelling and practical problem-solving across academic and professional settings.",
    visual: "WORK",
    sideLabelA: "Research",
    sideLabelB: "Delivery",
    sideLabelC: "Impact",
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "The next step is simple.",
    text: "Explore my projects, view my CV or connect with me to discuss data science, analytics, AI and machine learning opportunities.",
    visual: "CONNECT",
    sideLabelA: "GitHub",
    sideLabelB: "LinkedIn",
    sideLabelC: "Email",
  },
];

function JourneyText({
  progress,
  index,
  eyebrow,
  title,
  text,
}: {
  progress: MotionValue<number>;
  index: number;
  eyebrow: string;
  title: string;
  text: string;
}) {
  const total = journeySteps.length;
  const start = index / total;
  const middle = (index + 0.5) / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [start, middle, end], [0, 1, 0]);
  const y = useTransform(progress, [start, middle, end], [70, 0, -70]);
  const scale = useTransform(progress, [start, middle, end], [0.96, 1, 0.96]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-300">
          {eyebrow}
        </p>

        <h2 className="mt-5 text-5xl font-black leading-tight text-orange-50 md:text-7xl">
          {title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-stone-300 md:text-xl">
          {text}
        </p>

        <a
          href={`#${journeySteps[index].id}`}
          className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-black text-white transition hover:bg-amber-500"
        >
          Go to {eyebrow}
        </a>
      </div>
    </motion.div>
  );
}

function VisualWord({
  progress,
  index,
  word,
}: {
  progress: MotionValue<number>;
  index: number;
  word: string;
}) {
  const total = journeySteps.length;
  const start = index / total;
  const middle = (index + 0.5) / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [start, middle, end], [0, 1, 0]);
  const scale = useTransform(progress, [start, middle, end], [0.88, 1, 0.88]);
  const y = useTransform(progress, [start, middle, end], [25, 0, -25]);

  return (
    <motion.p
      style={{ opacity, scale, y }}
      className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-black text-orange-100 md:text-5xl"
    >
      {word}
    </motion.p>
  );
}

function FloatingLabel({
  progress,
  index,
  children,
  className,
}: {
  progress: MotionValue<number>;
  index: number;
  children: string;
  className: string;
}) {
  const total = journeySteps.length;
  const start = index / total;
  const middle = (index + 0.5) / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [start, middle, end], [0, 1, 0]);
  const y = useTransform(progress, [start, middle, end], [20, 0, -20]);

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute rounded-2xl border border-orange-300/15 bg-black/70 px-4 py-3 text-sm font-bold text-orange-100 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function AppleVisualObject({ progress }: { progress: MotionValue<number> }) {
  const rotate = useTransform(progress, [0, 1], [-20, 24]);
  const scale = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.9, 1.08, 1, 1.1, 0.95],
  );
  const y = useTransform(progress, [0, 1], [35, -35]);

  const ringA = useTransform(progress, [0, 1], [0, 260]);
  const ringB = useTransform(progress, [0, 1], [120, -220]);
  const glow = useTransform(progress, [0, 0.5, 1], [0.3, 0.62, 0.35]);

  return (
    <motion.div
      style={{ rotate, scale, y }}
      className="relative h-[620px] w-full max-w-[620px]"
    >
      <motion.div
        style={{ opacity: glow }}
        className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl"
      />

      <motion.div
        style={{ rotate: ringA }}
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/20"
      />

      <motion.div
        style={{ rotate: ringB }}
        className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/20"
      />

      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[3.5rem] border border-orange-200/15 bg-black/65 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="absolute inset-5 rounded-[2.6rem] border border-orange-300/20" />
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/25 blur-2xl" />

        {journeySteps.map((step, index) => (
          <VisualWord
            key={step.visual}
            progress={progress}
            index={index}
            word={step.visual}
          />
        ))}
      </div>

      {journeySteps.map((step, index) => (
        <div key={step.id}>
          <FloatingLabel
            progress={progress}
            index={index}
            className="left-4 top-24"
          >
            {step.sideLabelA}
          </FloatingLabel>

          <FloatingLabel
            progress={progress}
            index={index}
            className="right-4 top-36"
          >
            {step.sideLabelB}
          </FloatingLabel>

          <FloatingLabel
            progress={progress}
            index={index}
            className="bottom-24 left-1/2 -translate-x-1/2"
          >
            {step.sideLabelC}
          </FloatingLabel>
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300 shadow-[0_0_40px_rgba(249,115,22,0.9)]" />
    </motion.div>
  );
}

export default function ApplePortfolioJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[680vh] overflow-visible px-5"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute left-[-220px] top-24 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-[-260px] h-[580px] w-[580px] rounded-full bg-amber-500/10 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative h-[600px]">
            {journeySteps.map((step, index) => (
              <JourneyText
                key={step.id}
                progress={scrollYProgress}
                index={index}
                eyebrow={step.eyebrow}
                title={step.title}
                text={step.text}
              />
            ))}
          </div>

          <div className="hidden justify-center lg:flex">
            <AppleVisualObject progress={scrollYProgress} />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 h-1 w-[min(820px,82vw)] -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full rounded-full bg-gradient-to-r from-orange-300 via-orange-500 to-amber-400"
          />
        </div>
      </div>
    </section>
  );
}