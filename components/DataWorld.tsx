"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import { dataWorldNodes, type DataWorldNode } from "@/data/dataWorldNodes";

export default function DataWorld() {
  const [selectedNode, setSelectedNode] = useState<DataWorldNode>(
    dataWorldNodes[0],
  );

  const orbitNodes = useMemo(() => dataWorldNodes, []);

  return (
    <section id="data-world" className="relative overflow-hidden px-5 py-28">
      <div className="absolute left-[-220px] top-20 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-[-240px] bottom-20 h-[560px] w-[560px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Data World"
            title="Explore my technical map"
            description="A simple interactive view of the skills, workflows and projects that shape my portfolio."
          />
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal>
            <div className="glass-card relative min-h-[620px] overflow-hidden rounded-[2.5rem] p-6 md:p-8">
              <div className="absolute inset-0 soft-grid opacity-40" />

              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/10" />
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/10" />
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-100/5" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 42,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-orange-300/12"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 55,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-amber-300/10"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="absolute left-1/2 top-1/2 z-10 flex h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[3rem] border border-orange-200/15 bg-black/70 shadow-2xl shadow-black/50 backdrop-blur-xl"
              >
                <div className="absolute inset-5 rounded-[2.2rem] border border-orange-300/20" />
                <div className="absolute h-28 w-28 rounded-full bg-orange-500/20 blur-2xl" />

                <div className="relative text-center">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-300">
                    Data World
                  </p>
                  <h3 className="mt-3 text-4xl font-black text-orange-50">
                    AI
                  </h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                    Skills • Projects • Systems
                  </p>
                </div>
              </motion.div>

              {orbitNodes.map((node, index) => {
                const isSelected = selectedNode.id === node.id;

                return (
                  <motion.button
                    key={node.id}
                    type="button"
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setSelectedNode(node)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className={`absolute z-20 rounded-2xl border px-4 py-3 text-left backdrop-blur-xl transition ${
                      isSelected
                        ? "border-amber-300/60 bg-orange-500/25 shadow-2xl shadow-orange-950/30"
                        : "border-orange-200/15 bg-black/55 hover:border-orange-300/35 hover:bg-orange-500/15"
                    }`}
                    style={{
                      left: node.x,
                      top: node.y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-orange-300">
                      {node.type}
                    </p>
                    <p className="mt-1 text-sm font-black text-orange-50">
                      {node.label}
                    </p>
                  </motion.button>
                );
              })}

              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-3xl border border-orange-200/10 bg-black/40 p-4 backdrop-blur-xl">
                <p className="text-sm font-semibold leading-6 text-stone-300">
                  Hover or click a node to explore how each skill or project
                  connects to the rest of the portfolio.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="deep-glass sticky top-28 rounded-[2.5rem] p-7 md:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-300">
                    Selected Node
                  </p>
                  <h3 className="mt-3 text-4xl font-black text-orange-50">
                    {selectedNode.label}
                  </h3>
                </div>

                <span className="rounded-full border border-orange-300/20 bg-orange-500/10 px-4 py-2 text-xs font-bold text-orange-200">
                  {selectedNode.type}
                </span>
              </div>

              <p className="text-lg font-semibold leading-8 text-stone-300">
                {selectedNode.short}
              </p>

              <p className="mt-5 text-base leading-8 text-stone-400">
                {selectedNode.description}
              </p>

              <div className="mt-8">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-300">
                  Tools
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedNode.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-orange-300/15 bg-black/30 px-3 py-2 text-sm font-semibold text-orange-100"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-300">
                  Connected Work
                </p>

                <div className="mt-4 space-y-3">
                  {selectedNode.projects.map((project) => (
                    <div
                      key={project}
                      className="rounded-2xl border border-orange-300/10 bg-black/25 px-4 py-3 text-sm font-semibold text-stone-300"
                    >
                      {project}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#projects"
                className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-black text-white transition hover:bg-amber-500"
              >
                View related projects
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}