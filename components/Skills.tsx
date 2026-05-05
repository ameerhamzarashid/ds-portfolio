import { skillGroups } from "@/data/skills";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technical stack"
          description="A practical mix of analytics, machine learning, cloud, MLOps and generative AI tools."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-card rounded-3xl p-6">
              <h3 className="mb-5 text-xl font-bold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}