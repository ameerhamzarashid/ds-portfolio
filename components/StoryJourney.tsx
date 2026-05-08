"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const storySteps = [
  {
    number: "01",
    label: "Understand",
    title: "I start with the problem, not the tool.",
    text: "Before choosing a model or dashboard, I look at the data, the user need and the decision the work is meant to support.",
    tags: ["Problem Framing", "EDA", "Research", "Data Understanding"],
  },
  {
    number: "02",
    label: "Model",
    title: "I turn raw information into structure.",
    text: "Using Python, SQL, machine learning and analytics methods, I find patterns and build outputs that explain what is happening.",
    tags: ["Python", "SQL", "Machine Learning", "Statistics"],
  },
  {
    number: "03",
    label: "Build",
    title: "I connect the work to something usable.",
    text: "A good analysis should not stay hidden in a notebook. I turn technical work into dashboards, web apps, reports and workflows.",
    tags: ["Dashboards", "Web Apps", "MLOps", "Automation"],
  },
  {
    number: "04",
    label: "Deliver",
    title: "I focus on clarity, trust and impact.",
    text: "The final result should be easy to understand, useful for decision-making and clear enough for technical and non-technical people.",
    tags: ["Communication", "Visuals", "Decision Support", "Impact"],
  },
];

export default function StoryJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const objectY = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);
  const objectScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.08, 0.96]);
  const objectRotate = useTransform(scrollYProgress, [0, 1], [-8, 10]);

  const ringOne = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const ringTwo = useTransform(scrollYProgress, [0, 1], [90, -120]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.25, 0.55, 0.28]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden px-5 py-28"
    >
      <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-[-220px] h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-7rem)]">
          <div className="flex h-full flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="section-title-panel mb-8"
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                About
              </p>

              <h2 className="text-4xl font-black leading-tight text-orange-50 md:text-6xl">
                A simple process behind the work.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
                I work across data analysis, machine learning, dashboards and AI
                systems. The process stays the same: understand the problem,
                build clearly and deliver something useful.
              </p>
            </motion.div>

            <motion.div
              style={{
                y: objectY,
                scale: objectScale,
                rotate: objectRotate,
              }}
              className="relative hidden h-[430px] items-center justify-center lg:flex"
            >
              <motion.div
                style={{ opacity: glowOpacity }}
                className="absolute h-[360px] w-[360px] rounded-full bg-orange-500 blur-3xl"
              />

              <motion.div
                style={{ rotate: ringOne }}
                className="absolute h-[330px] w-[330px] rounded-full border border-orange-300/25"
              />

              <motion.div
                style={{ rotate: ringTwo }}
                className="absolute h-[250px] w-[250px] rounded-full border border-amber-300/20"
              />

              <div className="relative h-[230px] w-[230px] rounded-[3rem] border border-orange-200/15 bg-black/55 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="absolute inset-5 rounded-[2.2rem] border border-orange-300/20" />
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-xl" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-300">
                      Data
                    </p>
                    <p className="mt-3 text-4xl font-black text-orange-50">
                      → AI
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                      Clear output
                    </p>
                  </div>
                </div>

                <div className="absolute -left-7 top-12 rounded-2xl border border-orange-300/15 bg-black/70 px-4 py-3 text-sm font-bold text-orange-100">
                  Data
                </div>

                <div className="absolute -right-8 top-24 rounded-2xl border border-orange-300/15 bg-black/70 px-4 py-3 text-sm font-bold text-orange-100">
                  Model
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-2xl border border-orange-300/15 bg-black/70 px-4 py-3 text-sm font-bold text-orange-100">
                  Product
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="space-y-8 lg:py-20">
          {storySteps.map((step, index) => (
            <motion.article
              key={step.label}
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.75,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card rounded-[2rem] p-7 md:p-9"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-orange-300/20 bg-orange-500/10 text-lg font-black text-orange-200">
                  {step.number}
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">
                    {step.label}
                  </p>

                  <h3 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-orange-50 md:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-base leading-8 text-stone-300">
                    {step.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-orange-300/15 bg-black/25 px-3 py-1 text-xs font-semibold text-stone-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}