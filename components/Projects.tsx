"use client";

import { useState } from "react";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Featured work with dynamic filtering"
          description="Explore projects by category across machine learning, analytics, computer vision, research and deployment."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-cyan-300 text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300 hover:text-cyan-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="glass-card group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan-300/50"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {project.category}
                </span>
                <span className="text-xs text-slate-500">
                  {project.tags.length} tools
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">{project.title}</h3>

              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-cyan-300">
                  Portfolio impact
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {project.impact}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  <FaGithub /> GitHub
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}