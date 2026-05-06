"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CounterCard from "./CounterCard";
import FloatingNumbers from "./FloatingNumbers";

const NeuralOrb3D = dynamic(() => import("./NeuralOrb3D"), {
  ssr: false,
});

export default function IllusionHero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28"
    >
      <FloatingNumbers />

      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
      <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full orbit-ring" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200 backdrop-blur-xl">
            Data Scientist • AI Systems • Analytics
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
            Ameer Hamza
            <span className="block gradient-text">
              builds intelligent data experiences.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
            I create machine learning systems, analytics dashboards, 3D web
            experiences, MLOps workflows and applied AI products that turn data
            into decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 font-bold text-blue-950 transition hover:bg-cyan-100"
            >
              View Projects
            </a>

            <a
              href="#data-visuals"
              className="rounded-full bg-cyan-300 px-7 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              View Data Visuals
            </a>

            <a
              href="/Ameer-Hamza-CV.pdf"
              download
              className="rounded-full border border-cyan-300/40 px-7 py-3 font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              href="https://github.com/ameerhamzarashid"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-200 transition hover:text-cyan-300"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ameerhamza78644"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-200 transition hover:text-cyan-300"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="mailto:ameerhamzarashid.uk@gmail.com"
              className="flex items-center gap-2 text-slate-200 transition hover:text-cyan-300"
            >
              <MdEmail /> Email
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <CounterCard value={10} suffix="+" label="Projects" />
            <CounterCard value={3} suffix="+" label="Years Experience" />
            <CounterCard value={5} suffix="+" label="AI/ML Domains" />
            <CounterCard value={20} suffix="+" label="Tools" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="glass-card royal-glow rounded-[2rem] p-4"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
            <div className="mb-3 flex items-center justify-between px-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                3D Data Core
              </span>
              <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs text-cyan-100">
                Interactive
              </span>
            </div>

            <NeuralOrb3D />

            <div className="grid grid-cols-3 gap-3 px-2 pb-2">
              <div className="rounded-2xl bg-white/5 p-3 text-center">
                <p className="text-lg font-bold text-white">ML</p>
                <p className="text-xs text-slate-400">Models</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-center">
                <p className="text-lg font-bold text-white">BI</p>
                <p className="text-xs text-slate-400">Insights</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-center">
                <p className="text-lg font-bold text-white">AI</p>
                <p className="text-xs text-slate-400">Systems</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}