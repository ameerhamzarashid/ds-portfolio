"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

const commandData = [
  {
    area: "Data Analytics",
    tools: ["SQL", "Power BI", "Tableau", "Excel", "Pandas"],
    projects: ["AI Race Engineer", "F1 Telemetry Analysis Tool"],
    outcome: "Dashboards, KPI reporting, insight generation and decision support.",
  },
  {
    area: "Machine Learning",
    tools: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
    projects: ["Dengue Prediction", "Alzheimer Detection"],
    outcome: "Classification, forecasting, evaluation and predictive modelling.",
  },
  {
    area: "Computer Vision",
    tools: ["OpenCV", "YOLOv7", "CNN", "Keras"],
    projects: ["Fight Anomaly Detection", "Alzheimer Detection"],
    outcome: "Image classification, object detection and visual AI systems.",
  },
  {
    area: "MLOps & Deployment",
    tools: ["Docker", "Kubernetes", "MLflow", "GitHub Actions", "Flask"],
    projects: ["6G MEC", "Fight Detection Web App"],
    outcome: "Reproducible ML workflows, deployment and scalable experimentation.",
  },
  {
    area: "Generative AI",
    tools: ["OpenAI API", "Azure OpenAI", "LangChain", "RAG", "Embeddings"],
    projects: ["AI Portfolio Systems", "RAG Experiments"],
    outcome: "LLM workflows, retrieval systems and applied AI prototypes.",
  },
];

export default function TechCommandCentre() {
  const [selected, setSelected] = useState(commandData[0]);

  return (
    <section id="command-centre" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Command Centre"
          title="Technical capability mapped to real projects"
          description="This section connects my tools, project experience and practical outcomes instead of only listing technologies."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="glass-card rounded-3xl p-4">
            <div className="space-y-3">
              {commandData.map((item) => (
                <button
                  key={item.area}
                  onClick={() => setSelected(item)}
                  className={`w-full rounded-2xl px-5 py-4 text-left transition ${
                    selected.area === item.area
                      ? "bg-cyan-300 text-slate-950"
                      : "bg-white/5 text-slate-200 hover:bg-white/10"
                  }`}
                >
                  <span className="font-bold">{item.area}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Selected Capability
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              {selected.area}
            </h3>

            <p className="mt-4 leading-7 text-slate-300">{selected.outcome}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold text-white">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-white">
                  Related Projects
                </h4>
                <div className="space-y-2">
                  {selected.projects.map((project) => (
                    <p
                      key={project}
                      className="rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-300"
                    >
                      {project}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">Portfolio signal</p>
              <p className="mt-2 text-lg font-semibold text-white">
                This proves I can connect tools to practical outcomes, not just
                mention skills on a CV.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}