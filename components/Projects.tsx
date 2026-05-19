import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SkillLens AI",
    image: "/projects/skilllens-ai.png",
    description:
      "Workforce intelligence platform for job market analysis, CV matching, salary prediction and skill gap insights.",
    stack: ["Next.js", "FastAPI", "SQL", "ML"],
    github: "https://github.com/ameerhamzarashid/skilllens-ai",
    demo: "#",
  },
  {
    title: "AI Race Engineer",
    image: "/projects/ai-race-engineer.png",
    description:
      "Sim racing telemetry coach that analyses laps, detects driving mistakes and generates AI-style performance feedback.",
    stack: ["Python", "Streamlit", "Rule Logic", "Analytics"],
    github: "#",
    demo: "#",
  },
  {
    title: "Alzheimer Detection",
    image: "/projects/alzheimer.png",
    description:
      "Deep learning project for classifying Alzheimer stages using medical brain image data.",
    stack: ["Python", "CNN", "TensorFlow", "Medical AI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Fight Anomaly Detection",
    image: "/projects/fight-anomaly.png",
    description:
      "Computer vision web application for detecting anomalies and suspicious activity in video footage.",
    stack: ["Python", "Flask", "Computer Vision", "Video AI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Dengue Prediction",
    image: "/projects/dengue-prediction.png",
    description:
      "Prediction interface for dengue stage classification using symptom-based inputs and machine learning logic.",
    stack: ["Python", "Flask", "ML", "Healthcare"],
    github: "#",
    demo: "#",
  },
  {
    title: "Image Steganography Research",
    image: "/projects/plant-steganography.jpg",
    description:
      "Research-focused deep learning architecture for hiding and revealing multiple secret images.",
    stack: ["Deep Learning", "Computer Vision", "Research", "CNN"],
    github: "#",
    demo: "#",
  },
];

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
          Selected work with real interfaces and AI systems.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-2xl shadow-black/10 backdrop-blur-2xl"
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

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-black text-black">
                {project.title}
              </h3>

              <p className="mt-3 text-sm font-semibold leading-6 text-black/70">
                {project.description}
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-black text-black transition hover:border-orange-600 hover:text-orange-600"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-black text-white transition hover:bg-black"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}