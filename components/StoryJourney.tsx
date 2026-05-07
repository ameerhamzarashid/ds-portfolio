"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const storySteps = [
  {
    number: "01",
    title: "Signal",
    text: "Every project begins with raw data, uncertainty and questions that need structure.",
  },
  {
    number: "02",
    title: "Pattern",
    text: "I use analysis, visualisation and machine learning to uncover relationships hidden inside data.",
  },
  {
    number: "03",
    title: "System",
    text: "Models become useful when they are turned into dashboards, workflows, interfaces and decisions.",
  },
  {
    number: "04",
    title: "Impact",
    text: "The final goal is clarity: helping people understand, trust and act on data.",
  },
];

export default function StoryJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  return (
    <section ref={sectionRef} id="journey" className="relative px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="section-title-panel mb-16 max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
              Data Journey
            </p>

            <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
              From scattered information to intelligent systems.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/85">
              This portfolio follows the same path I use in my work: understand
              the signal, find the pattern, build the system and create impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative grid gap-8 md:grid-cols-[220px_1fr]">
          <div className="relative hidden md:block">
            <div className="absolute left-8 top-0 h-full w-px bg-white/15" />
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: "top" }}
              className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-white via-cyan-200 to-transparent"
            />
          </div>

          <div className="space-y-6">
            {storySteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.05}>
                <div className="glass-card rounded-[2rem] p-7">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <p className="font-display text-5xl font-black text-cyan-100/35">
                      {step.number}
                    </p>

                    <div>
                      <h3 className="text-3xl font-black text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-3xl text-base leading-8 text-blue-50/85">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}