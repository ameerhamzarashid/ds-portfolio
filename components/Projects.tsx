"use client";

import { useState } from "react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import { projects, projectCategories } from "@/data/projects";

type ProjectItem = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  impact?: string;
};

const caseStudySlugMap: Record<string, string> = {
  "SkillLens AI": "skilllens-ai",
  "AI Race Engineer": "ai-race-engineer",
  "Communication-Efficient Federated Learning for 6G MEC":
    "6g-federated-learning",
  "Alzheimer Detection Using Deep Learning": "alzheimer-detection",
  "Fight Anomaly Detection Web App": "fight-anomaly-detection",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const typedProjects = projects as ProjectItem[];
  const typedCategories = projectCategories as string[];

  const filteredProjects =
    activeCategory === "All"
      ? typedProjects
      : typedProjects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Projects"
            title="Selected work across data, AI and analytics"
            description="A collection of projects showing practical work across machine learning, analytics, computer vision, AI systems, research and deployment-focused development."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mb-10 flex gap-3 overflow-x-auto pb-3 md:flex-wrap md:overflow-visible md:pb-0">
            {typedCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-2 text-sm font-bold transition ${
                  activeCategory === category
                    ? "border-orange-400 bg-orange-500 text-white"
                    : "border-orange-300/15 bg-black/25 text-stone-300 hover:bg-orange-500/15 hover:text-orange-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {filteredProjects.map((project, index) => {
            const slug = caseStudySlugMap[project.title];

            return (
              <ScrollReveal key={project.title} delay={index * 0.04}>
                <article className="glass-card group flex h-full flex-col rounded-[2rem] p-5 transition hover:-translate-y-1 md:p-7">
                  <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-300 md:tracking-[0.28em]">
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-2xl font-black leading-tight text-orange-50 md:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <span className="w-fit rounded-full border border-orange-300/15 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-200">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-stone-300 md:text-base md:leading-8">
                    {project.description}
                  </p>

                  {project.impact ? (
                    <p className="mt-4 rounded-2xl border border-orange-300/10 bg-black/20 p-4 text-sm font-semibold leading-6 text-stone-300">
                      {project.impact}
                    </p>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-orange-300/15 bg-black/25 px-3 py-1 text-xs font-semibold text-orange-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid gap-3 pt-7 sm:flex sm:flex-wrap">
                    {slug ? (
                      <Link
                        href={`/projects/${slug}`}
                        className="rounded-full bg-orange-500 px-5 py-3 text-center text-sm font-black text-white transition hover:bg-amber-500"
                      >
                        View Case Study
                      </Link>
                    ) : null}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-orange-300/20 bg-white/10 px-5 py-3 text-center text-sm font-black text-orange-50 transition hover:bg-orange-100 hover:text-black"
                    >
                      GitHub
                    </a>

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-orange-300/20 bg-black/25 px-5 py-3 text-center text-sm font-black text-orange-100 transition hover:bg-orange-500 hover:text-white"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}