const experiences = [
  {
    role: "Quality Control Specialist",
    company: "Fenwick",
    period: "2025 – Present",
    points: [
      "Supported operational quality checks, reporting accuracy and process consistency.",
      "Applied analytical thinking to identify issues, improve workflows and maintain reliable records.",
    ],
  },
  {
    role: "System Analyst",
    company: "Drevoix",
    period: "2025 – May 2026",
    points: [
      "Worked on system analysis, technical documentation and data-driven process improvement.",
      "Supported requirements analysis and translation of business needs into technical tasks.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Northumbria University",
    period: "2024 – 2025",
    points: [
      "Worked on machine learning research involving data preparation, modelling and evaluation.",
      "Contributed to applied AI experimentation, model comparison and research documentation.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-7xl px-5 py-24"
    >
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">
          Experience
        </p>
        <h2 className="mt-4 text-4xl font-black text-black md:text-6xl">
          Experience across analytics, research and systems.
        </h2>
      </div>

      <div className="grid gap-5">
        {experiences.map((item) => (
          <div
            key={`${item.role}-${item.company}`}
            className="rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-xl shadow-black/10 backdrop-blur-2xl md:p-8"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-black text-black">{item.role}</h3>
                <p className="mt-1 text-lg font-bold text-orange-600">
                  {item.company}
                </p>
              </div>

              <span className="w-fit rounded-full bg-orange-50 px-4 py-2 text-sm font-black text-orange-700">
                {item.period}
              </span>
            </div>

            <ul className="mt-5 grid gap-3">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl bg-black/[0.03] px-4 py-3 text-sm font-semibold leading-6 text-black/70"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}