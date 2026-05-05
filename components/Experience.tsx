import { experiences } from "@/data/experience";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Experience"
          title="Professional background"
          description="Experience across data analytics, machine learning research, dashboards and business insight."
        />

        <div className="space-y-6">
          {experiences.map((item) => (
            <div
              key={`${item.role}-${item.company}`}
              className="glass-card rounded-3xl p-6"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="text-cyan-300">{item.company}</p>
                </div>
                <p className="text-sm text-slate-400">{item.period}</p>
              </div>

              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="leading-7 text-slate-300">
                    <span className="mr-2 text-cyan-300">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}