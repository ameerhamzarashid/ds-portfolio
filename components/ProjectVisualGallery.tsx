"use client";

import { motion } from "framer-motion";

export type ProjectVisual = {
  title: string;
  subtitle: string;
  type: "dashboard" | "architecture" | "model" | "workflow";
  metrics?: string[];
  flow?: string[];
};

type ProjectVisualGalleryProps = {
  visuals: ProjectVisual[];
};

function DashboardVisual({ visual }: { visual: ProjectVisual }) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-orange-300/15 bg-black/45 p-5">
      <div className="absolute right-[-80px] top-[-80px] h-52 w-52 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-300">
              Dashboard View
            </p>
            <h3 className="mt-2 text-2xl font-black text-orange-50">
              {visual.title}
            </h3>
          </div>

          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-orange-500" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-orange-200" />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {(visual.metrics ?? ["Accuracy", "Coverage", "Readiness"]).map(
            (metric, index) => (
              <div
                key={metric}
                className="rounded-2xl border border-orange-300/10 bg-black/40 p-4"
              >
                <p className="text-xs font-bold text-stone-400">{metric}</p>
                <p className="mt-2 text-3xl font-black text-orange-100">
                  {index === 0 ? "92%" : index === 1 ? "84%" : "High"}
                </p>
              </div>
            ),
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-orange-300/10 bg-black/35 p-4">
          <div className="mb-4 flex items-end gap-2">
            {[42, 70, 54, 88, 76, 96, 68, 82].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-xl bg-gradient-to-t from-orange-700 to-amber-300"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>

          <p className="text-sm leading-6 text-stone-300">{visual.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function ArchitectureVisual({ visual }: { visual: ProjectVisual }) {
  const flow = visual.flow ?? ["Input", "Processing", "Model", "Output"];

  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-orange-300/15 bg-black/45 p-5">
      <div className="absolute left-[-70px] bottom-[-80px] h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="relative z-10">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-300">
          System Architecture
        </p>

        <h3 className="mt-2 text-2xl font-black text-orange-50">
          {visual.title}
        </h3>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {flow.map((item, index) => (
            <div key={item} className="relative">
              <div className="rounded-2xl border border-orange-300/15 bg-black/45 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-sm font-black text-white">
                  {index + 1}
                </div>

                <p className="mt-4 text-sm font-black text-orange-50">
                  {item}
                </p>
              </div>

              {index !== flow.length - 1 ? (
                <div className="absolute right-[-18px] top-1/2 hidden h-px w-9 bg-orange-300/30 md:block" />
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-7 rounded-2xl border border-orange-300/10 bg-black/30 p-4 text-sm leading-6 text-stone-300">
          {visual.subtitle}
        </p>
      </div>
    </div>
  );
}

function ModelVisual({ visual }: { visual: ProjectVisual }) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-orange-300/15 bg-black/45 p-5">
      <div className="absolute right-[-60px] bottom-[-80px] h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-300">
          Model Output
        </p>

        <h3 className="mt-2 text-2xl font-black text-orange-50">
          {visual.title}
        </h3>

        <div className="mt-7 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-orange-300/10 bg-black/35 p-5">
            <p className="text-sm font-bold text-stone-400">Model Status</p>

            <div className="mt-5 space-y-4">
              {["Training", "Validation", "Inference"].map((item, index) => (
                <div key={item}>
                  <div className="mb-2 flex justify-between text-xs font-bold text-stone-400">
                    <span>{item}</span>
                    <span>{index === 0 ? "Complete" : index === 1 ? "Stable" : "Ready"}</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-300"
                      style={{ width: `${index === 0 ? 96 : index === 1 ? 82 : 88}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange-300/10 bg-black/35 p-5">
            <div className="grid grid-cols-2 gap-3">
              {["TP", "FP", "FN", "TN"].map((cell, index) => (
                <div
                  key={cell}
                  className={`rounded-2xl p-5 text-center ${
                    index === 0 || index === 3
                      ? "bg-orange-500/25"
                      : "bg-amber-500/10"
                  }`}
                >
                  <p className="text-xs font-bold text-stone-400">{cell}</p>
                  <p className="mt-2 text-3xl font-black text-orange-50">
                    {index === 0 ? "84" : index === 1 ? "11" : index === 2 ? "9" : "79"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-stone-300">{visual.subtitle}</p>
      </div>
    </div>
  );
}

function WorkflowVisual({ visual }: { visual: ProjectVisual }) {
  const flow = visual.flow ?? ["Collect", "Clean", "Analyse", "Deploy"];

  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-orange-300/15 bg-black/45 p-5">
      <div className="absolute left-1/2 top-[-120px] h-60 w-60 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-300">
          Workflow
        </p>

        <h3 className="mt-2 text-2xl font-black text-orange-50">
          {visual.title}
        </h3>

        <div className="mt-8 space-y-4">
          {flow.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-orange-300/10 bg-black/35 p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-sm font-black text-white">
                {index + 1}
              </span>

              <div>
                <p className="text-sm font-black text-orange-50">{item}</p>
                <p className="mt-1 text-xs text-stone-400">
                  Step {index + 1} in the project delivery path
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-6 text-stone-300">{visual.subtitle}</p>
      </div>
    </div>
  );
}

export default function ProjectVisualGallery({
  visuals,
}: ProjectVisualGalleryProps) {
  if (!visuals || visuals.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-300">
          Project Visuals
        </p>

        <h2 className="mt-3 text-3xl font-black text-orange-50 md:text-5xl">
          Visual proof of the system
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-7 text-stone-300">
          These visuals are custom-built portfolio previews showing the project
          architecture, workflow, dashboard logic and model output style.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visuals.map((visual, index) => (
          <motion.div
            key={`${visual.title}-${index}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
          >
            {visual.type === "dashboard" ? (
              <DashboardVisual visual={visual} />
            ) : null}

            {visual.type === "architecture" ? (
              <ArchitectureVisual visual={visual} />
            ) : null}

            {visual.type === "model" ? <ModelVisual visual={visual} /> : null}

            {visual.type === "workflow" ? (
              <WorkflowVisual visual={visual} />
            ) : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}