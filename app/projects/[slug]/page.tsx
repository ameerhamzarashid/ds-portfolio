import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectCaseStudy,
  projectCaseStudies,
} from "@/data/projectCaseStudies";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    return {
      title: "Project Not Found | Ameer Hamza",
    };
  }

  return {
    title: `${project.title} | Ameer Hamza`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-5 pb-24 pt-32">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex rounded-full border border-orange-300/20 bg-black/40 px-5 py-3 text-sm font-black text-orange-100 transition hover:bg-orange-500"
        >
          ← Back to Projects
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="hero-panel rounded-[2.5rem] p-7 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-orange-300">
              {project.category}
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-orange-50 md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.slice(0, 6).map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-orange-300/15 bg-black/25 px-4 py-2 text-sm font-semibold text-orange-100"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-black text-white transition hover:bg-amber-500"
              >
                View GitHub
              </a>

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-orange-300/20 bg-white/10 px-6 py-3 text-sm font-black text-orange-50 transition hover:bg-orange-100 hover:text-black"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>

          <div className="deep-glass rounded-[2.5rem] p-7 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-300">
              Project Snapshot
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-bold text-stone-400">Category</p>
                <p className="mt-1 text-lg font-black text-orange-50">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-stone-400">Main Stack</p>
                <p className="mt-1 text-lg font-black text-orange-50">
                  {project.stack.slice(0, 4).join(", ")}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-stone-400">Focus</p>
                <p className="mt-1 text-lg font-black text-orange-50">
                  Practical data and AI delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-[2.5rem] p-7 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-300">
              Problem
            </p>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              {project.problem}
            </p>
          </div>

          <div className="glass-card rounded-[2.5rem] p-7 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-300">
              Solution
            </p>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              {project.solution}
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="deep-glass rounded-[2.5rem] p-7 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-300">
              Tech Stack
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-orange-300/15 bg-black/25 px-4 py-2 text-sm font-semibold text-orange-100"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[2.5rem] p-7 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-300">
              Key Features
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-orange-300/10 bg-black/20 p-4 text-sm font-semibold text-stone-300"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-[2.5rem] p-7 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-300">
              Workflow
            </p>

            <div className="mt-6 space-y-4">
              {project.workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-orange-300/10 bg-black/20 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-sm font-black text-white">
                    {index + 1}
                  </span>

                  <p className="text-sm font-semibold leading-6 text-stone-300">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[2.5rem] p-7 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-300">
              Outcomes
            </p>

            <div className="mt-6 space-y-4">
              {project.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-2xl border border-orange-300/10 bg-black/20 p-4 text-sm font-semibold leading-6 text-stone-300"
                >
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[2.5rem] border border-orange-300/15 bg-orange-500/10 p-7 md:p-10">
          <h2 className="text-3xl font-black text-orange-50 md:text-5xl">
            Want to explore the code?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
            View the repository to see the implementation, structure and
            technical direction behind this project.
          </p>

          <div className="mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-500 px-7 py-3 text-sm font-black text-white transition hover:bg-amber-500"
            >
              Open GitHub Repository
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}