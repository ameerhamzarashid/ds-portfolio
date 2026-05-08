"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    label: "Understand",
    title: "Start with the problem.",
    text: "I first look at the data, the user need and the decision the work should support.",
    visual: "DATA",
  },
  {
    number: "02",
    label: "Analyse",
    title: "Find the useful pattern.",
    text: "I use Python, SQL, statistics and machine learning to turn raw information into structure.",
    visual: "MODEL",
  },
  {
    number: "03",
    label: "Build",
    title: "Make it usable.",
    text: "The output becomes a dashboard, workflow, web app or AI tool that people can actually use.",
    visual: "SYSTEM",
  },
  {
    number: "04",
    label: "Deliver",
    title: "Make the result clear.",
    text: "The final work should be easy to understand, trustworthy and useful for decisions.",
    visual: "IMPACT",
  },
];

function StoryText({
  progress,
  index,
  number,
  label,
  title,
  text,
}: {
  progress: MotionValue<number>;
  index: number;
  number: string;
  label: string;
  title: string;
  text: string;
}) {
  const start = index / steps.length;
  const middle = (index + 0.45) / steps.length;
  const end = (index + 0.95) / steps.length;

  const opacity = useTransform(progress, [start, middle, end], [0, 1, 0]);
  const y = useTransform(progress, [start, middle, end], [60, 0, -60]);
  const scale = useTransform(progress, [start, middle, end], [0.96, 1, 0.96]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center"
    >
      <div className="max-w-xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-300">
          {number} / {label}
        </p>

        <h3 className="mt-5 text-5xl font-black leading-tight text-orange-50 md:text-7xl">
          {title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-stone-300 md:text-xl">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

function VisualWorld({ progress }: { progress: MotionValue<number> }) {
  const rotate = useTransform(progress, [0, 1], [-18, 18]);
  const scale = useTransform(progress, [0, 0.35, 0.7, 1], [0.9, 1.1, 1.04, 0.95]);
  const y = useTransform(progress, [0, 1], [30, -30]);

  const coreOpacity = useTransform(progress, [0, 0.2, 0.8, 1], [0.65, 1, 1, 0.7]);
  const ringRotateA = useTransform(progress, [0, 1], [0, 220]);
  const ringRotateB = useTransform(progress, [0, 1], [90, -180]);

  const dataOpacity = useTransform(progress, [0, 0.22, 0.36], [1, 1, 0]);
  const modelOpacity = useTransform(progress, [0.22, 0.42, 0.58], [0, 1, 0]);
  const systemOpacity = useTransform(progress, [0.48, 0.65, 0.8], [0, 1, 0]);
  const impactOpacity = useTransform(progress, [0.72, 0.9, 1], [0, 1, 1]);

  return (
    <motion.div
      style={{ rotate, scale, y }}
      className="relative h-[560px] w-full max-w-[560px]"
    >
      <motion.div
        style={{ opacity: coreOpacity }}
        className="absolute inset-0 rounded-full bg-orange-500/15 blur-3xl"
      />

      <motion.div
        style={{ rotate: ringRotateA }}
        className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/20"
      />

      <motion.div
        style={{ rotate: ringRotateB }}
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/20"
      />

      <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-orange-200/15 bg-black/60 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="absolute inset-5 rounded-[2.2rem] border border-orange-300/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <motion.p
              style={{ opacity: dataOpacity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-orange-100"
            >
              DATA
            </motion.p>

            <motion.p
              style={{ opacity: modelOpacity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-orange-100"
            >
              MODEL
            </motion.p>

            <motion.p
              style={{ opacity: systemOpacity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-orange-100"
            >
              SYSTEM
            </motion.p>

            <motion.p
              style={{ opacity: impactOpacity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-orange-100"
            >
              IMPACT
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        style={{ opacity: dataOpacity }}
        className="absolute left-6 top-20 rounded-2xl border border-orange-300/15 bg-black/70 px-4 py-3 text-sm font-bold text-orange-100"
      >
        Raw data
      </motion.div>

      <motion.div
        style={{ opacity: modelOpacity }}
        className="absolute right-4 top-28 rounded-2xl border border-orange-300/15 bg-black/70 px-4 py-3 text-sm font-bold text-orange-100"
      >
        Pattern
      </motion.div>

      <motion.div
        style={{ opacity: systemOpacity }}
        className="absolute bottom-24 right-16 rounded-2xl border border-orange-300/15 bg-black/70 px-4 py-3 text-sm font-bold text-orange-100"
      >
        Product
      </motion.div>

      <motion.div
        style={{ opacity: impactOpacity }}
        className="absolute bottom-20 left-12 rounded-2xl border border-orange-300/15 bg-black/70 px-4 py-3 text-sm font-bold text-orange-100"
      >
        Decision
      </motion.div>

      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300 shadow-[0_0_40px_rgba(249,115,22,0.9)]" />
    </motion.div>
  );
}

export default function StoryJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-[430vh] overflow-visible px-5"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-[-220px] h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative h-[520px]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute left-0 top-0"
            >
              <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-300">
                About
              </p>
            </motion.div>

            {steps.map((step, index) => (
              <StoryText
                key={step.number}
                progress={scrollYProgress}
                index={index}
                number={step.number}
                label={step.label}
                title={step.title}
                text={step.text}
              />
            ))}
          </div>

          <div className="hidden justify-center lg:flex">
            <VisualWorld progress={scrollYProgress} />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 h-1 w-[min(760px,80vw)] -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full rounded-full bg-gradient-to-r from-orange-300 via-orange-500 to-amber-400"
          />
        </div>
      </div>
    </section>
  );
}