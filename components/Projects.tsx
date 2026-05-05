import { projects } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Featured work"
          description="Selected projects across machine learning, deep learning, computer vision, analytics and applied AI."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan-300/50"
            >
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>

              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>

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