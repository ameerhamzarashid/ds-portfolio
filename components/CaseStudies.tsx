import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative mx-auto w-full max-w-7xl px-5 py-24"
    >
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">
          Case Studies
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-black md:text-6xl">
          Project thinking, not just screenshots.
        </h2>

        <p className="mt-5 text-base font-semibold leading-7 text-black/65 md:text-lg">
          A short breakdown of the problem, solution, stack and outcome behind
          selected AI, analytics and machine learning projects.
        </p>
      </div>

      <div className="grid gap-6">
        {caseStudies.map((study) => (
          <article
            key={study.slug}
            className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-2xl shadow-black/10 backdrop-blur-2xl"
          >
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[260px] bg-orange-50 lg:min-h-full">
                <Image
                  src={study.image}
                  alt={`${study.title} case study screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-black text-orange-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="mt-6 text-3xl font-black tracking-[-0.03em] text-black md:text-4xl">
                  {study.title}
                </h3>

                <p className="mt-4 text-sm font-semibold leading-7 text-black/65 md:text-base">
                  {study.summary}
                </p>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  <div className="rounded-3xl bg-orange-50 p-5">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                      Problem
                    </p>
                    <p className="text-sm font-semibold leading-6 text-black/70">
                      {study.problem}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-orange-50 p-5">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                      Solution
                    </p>
                    <p className="text-sm font-semibold leading-6 text-black/70">
                      {study.solution}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-orange-50 p-5">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                      Outcome
                    </p>
                    <p className="text-sm font-semibold leading-6 text-black/70">
                      {study.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-black text-white transition hover:bg-black"
                  >
                    Read Full Case Study <FaArrowRight />
                  </Link>

                  {study.demo !== "#" ? (
                    <a
                      href={study.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-orange-600/20 bg-orange-50 px-5 py-3 text-sm font-black text-orange-700 transition hover:bg-orange-600 hover:text-white"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}