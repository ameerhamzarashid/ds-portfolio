"use client";

import { projectDoors } from "@/data/collectibles";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function ProjectStationDoors() {
  return (
    <section id="station-doors" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Station Doors"
            title="Choose a route through the project yard"
            description="Each door represents a different technical route through my portfolio: research, analytics, deep learning and computer vision."
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projectDoors.map((door, index) => (
            <ScrollReveal key={door.id} delay={index * 0.06}>
              <motion.a
                href={door.href}
                whileHover={{ y: -8, rotateY: 4 }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
                className="deep-glass train-depth-card group block min-h-[360px] rounded-[2rem] p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-200 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-blue-950">
                    {door.category}
                  </span>

                  <span className="text-3xl font-black text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mb-7 h-32 overflow-hidden rounded-3xl border border-white/10 bg-white/10">
                  <div className="absolute inset-x-6 bottom-0 h-24 rounded-t-full border-x border-t border-cyan-200/30 bg-blue-950/40 transition group-hover:bg-cyan-300/20" />
                  <div className="absolute left-1/2 top-8 h-10 w-10 -translate-x-1/2 rounded-full bg-cyan-200 shadow-lg shadow-cyan-300/30 transition group-hover:scale-110" />
                  <div className="absolute bottom-0 left-1/2 h-20 w-px -translate-x-1/2 bg-white/20" />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-100">
                  {door.station}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {door.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-blue-50/75">
                  {door.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {door.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-cyan-200/20 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-sm font-black text-cyan-100">
                  Enter station →
                </p>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}