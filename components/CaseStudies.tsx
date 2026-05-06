import { caseStudies } from "@/data/caseStudies";
import SectionTitle from "./SectionTitle";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Case Studies"
          title="How I think through technical projects"
          description="These case study previews show problem framing, architecture, tools and technical decision-making."
        />

        <div className="space-y-6">
          {caseStudies.map((study) => (
            <article key={study.title} className="glass-card rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-white">{study.title}</h3>

              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Problem
                  </p>
                  <p className="leading-7 text-slate-300">{study.problem}</p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Approach
                  </p>
                  <p className="leading-7 text-slate-300">{study.approach}</p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
                  System Flow
                </p>

                <div className="grid gap-3 md:grid-cols-5">
                  {study.architecture.map((step, index) => (
                    <div
                      key={step}
                      className="rounded-2xl bg-white/5 p-4 text-center"
                    >
                      <p className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                        {index + 1}
                      </p>
                      <p className="text-sm leading-6 text-slate-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}