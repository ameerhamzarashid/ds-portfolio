"use client";

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
  return (
    <section id="journey" className="relative px-5 py-28">
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

        <div className="grid gap-6 md:grid-cols-4">
          {storySteps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.04}>
              <div className="glass-card h-full rounded-[2rem] p-7">
                <p className="font-display text-5xl font-black text-cyan-100/35">
                  {step.number}
                </p>

                <h3 className="mt-4 text-3xl font-black text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-blue-50/85">
                  {step.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}