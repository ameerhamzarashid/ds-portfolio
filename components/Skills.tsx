import {
  SiPython,
  SiR,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiKubernetes,
  SiGithub,
} from "react-icons/si";

import {
  FaDatabase,
  FaChartLine,
  FaBrain,
  FaCloud,
  FaCode,
  FaRobot,
  FaEye,
  FaLanguage,
  FaChartBar,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Programming & Data",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "R", icon: SiR },
      { name: "SQL", icon: FaDatabase },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", icon: FaBrain },
      { name: "Deep Learning", icon: FaRobot },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "NLP", icon: FaLanguage },
      { name: "Computer Vision", icon: FaEye },
    ],
  },
  {
    title: "Apps, BI & Dashboards",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "FastAPI", icon: FaServer },
      { name: "Streamlit", icon: FaLaptopCode },
      { name: "Power BI", icon: FaChartBar },
      { name: "Tableau", icon: FaChartLine },
      { name: "Analytics", icon: FaChartLine },
    ],
  },
  {
    title: "MLOps, Cloud & Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "GitHub", icon: SiGithub },
      { name: "AWS", icon: FaCloud },
      { name: "Azure", icon: FaCloud },
      { name: "MLOps", icon: FaCode },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-7xl px-5 py-24"
    >
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-black text-black md:text-6xl">
          Technical stack with clear delivery focus.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-xl shadow-black/10 backdrop-blur-2xl"
          >
            <h3 className="text-2xl font-black text-black">{group.title}</h3>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-2xl border border-black/5 bg-orange-50 px-4 py-3"
                  >
                    <Icon className="shrink-0 text-xl text-orange-600" />

                    <span className="text-sm font-black text-black">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}