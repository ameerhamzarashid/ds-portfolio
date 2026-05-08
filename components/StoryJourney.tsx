"use client";

import ScrollReveal from "./ScrollReveal";

const storySteps = [
  {
    number: "01",
    title: "Understand the problem",
    text: "I start by understanding the data, the user need and the decision the work should support.",
  },
  {
    number: "02",
    title: "Build the model or analysis",
    text: "I use Python, SQL, machine learning and analytics tools to turn raw information into useful outputs.",
  },
  {
    number: "03",
    title: "Create a usable system",
    text: "I connect the technical work to dashboards, web apps, reports or workflows that people can actually use.",
  },
  {
    number: "04",
    title: "Communicate the result",
    text: "I focus on clear visual storytelling, measurable impact and practical recommendations.",
  },
];

export default function StoryJourney() {
  return (
    <section id="about" className="relative px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="section-title-panel mb-16 max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
              About
            </p>

            <h2 className="text-4xl font-black leading-tight text-orange-50 md:text-6xl">
              I turn technical work into clear, useful outcomes.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              My work combines data science, analytics, machine learning and
              product thinking. The goal is always simple: make complex
              information easier to understand and act on.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-4">
          {storySteps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.04}>
              <div className="glass-card h-full rounded-[2rem] p-7">
                <p className="font-display text-5xl font-black text-orange-300/35">
                  {step.number}
                </p>

                <h3 className="mt-4 text-2xl font-black text-orange-50">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-stone-300">
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