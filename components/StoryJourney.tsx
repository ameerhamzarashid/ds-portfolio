"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const storySteps = [
  {
    number: "01",
    title: "Signals",
    subtitle: "Every project starts with scattered information.",
    text: "Raw data rarely arrives clean. It comes as noise, missing values, unusual patterns, logs, images, telemetry and unanswered questions.",
    tags: ["Data Cleaning", "EDA", "SQL", "Python"],
  },
  {
    number: "02",
    title: "Patterns",
    subtitle: "The next step is to find structure.",
    text: "I use statistical thinking, visual analysis and machine learning to discover relationships that are not obvious at first glance.",
    tags: ["ML", "Forecasting", "Deep Learning", "Feature Engineering"],
  },
  {
    number: "03",
    title: "Systems",
    subtitle: "Models become useful when they become systems.",
    text: "Dashboards, APIs, MLOps pipelines and interactive interfaces turn analysis into something people can actually use.",
    tags: ["MLOps", "Dashboards", "Deployment", "Automation"],
  },
  {
    number: "04",
    title: "Impact",
    subtitle: "The final output should create clarity.",
    text: "The goal is not only technical accuracy. The goal is decision support, speed, trust and a better user experience.",
    tags: ["Storytelling", "BI", "Decision Support", "Product Thinking"],
  },
];

export default function StoryJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], ["-8%", "18%"]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const lineScale = useTransform(scrollYProgress, [0.12, 0.88], [0, 1]);

  return (
    <section ref={sectionRef} id="journey" className="relative px-5 py-28">
      <motion.div
        style={{ y: orbY, rotate: orbRotate }}
        className="pointer-events-none absolute right-[-120px] top-28 hidden h-80 w-80 rounded-full border border-cyan-200/20 bg-white/5 blur-[0.2px] lg:block"
      />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-100">
              The Journey
            </p>
            <h2 className="font-display text-4xl font-black leading-tight text-white md:text-6xl">
              From noise to clarity, the portfolio unfolds like a data story.
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-50/85">
              This section is designed to show the way I think: not only as a
              coder, but as someone who turns messy information into models,
              systems and decisions.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/15 md:block" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-white via-cyan-200 to-transparent md:block"
          />

          <div className="space-y-10 md:pl-16">
            {storySteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.08}>
                <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 160, damping: 20 }}
                    className="deep-glass rounded-[2rem] p-7 md:p-9"
                  >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <p className="font-display text-5xl font-black text-white/25">
                        {step.number}
                      </p>
                      <h3 className="mt-2 text-3xl font-black text-white md:text-4xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-lg font-semibold text-cyan-100">
                        {step.subtitle}
                      </p>
                      <p className="mt-5 max-w-3xl text-base leading-8 text-blue-50/80">
                        {step.text}
                      </p>
                    </div>

                    <div className="flex max-w-sm flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}