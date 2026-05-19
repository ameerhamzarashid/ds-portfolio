import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import { caseStudies } from "@/data/caseStudies";

function hasRealLink(url: string) {
  return Boolean(url && url.trim() !== "" && url !== "#");
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-7xl px-5 py-24"
    >
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">
          Projects
        </p>

        <h2 className="mt-4 text-4xl font-black text-black md:text-6xl">
          Selected work with case studies.
        </h2>

        <p className="mt-5 text-base font-semibold leading-7 text-black/65 md:text-lg">
          Each project includes a short case study covering the problem,
          solution, tools and outcome.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((project) => (
          <article
            key={project.slug}
            className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-2xl shadow-black/10 backdrop-blur-2xl"
          >
            <Link
              href={`/case-studies/${project.slug}`}
              className="block"
              aria-label={`Open ${project.title} case study`}
            >
              <div className="relative h-64 w-full overflow-hidden bg-orange-50 sm:h-80">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Link>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-black text-black">
                {project.title}
              </h3>

              <p className="mt-3 text-sm font-semibold leading-6 text-black/70">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-black text-orange-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-black text-white transition hover:bg-black"
                >
                  <FaBookOpen /> Case Study
                </Link>

                {hasRealLink(project.github) ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-black text-black transition hover:border-orange-600 hover:text-orange-600"
                  >
                    <FaGithub /> Code
                  </a>
                ) : null}

                {hasRealLink(project.demo) ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-orange-600/20 bg-orange-50 px-4 py-2 text-sm font-black text-orange-700 transition hover:bg-orange-600 hover:text-white"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}