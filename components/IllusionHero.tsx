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

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-xl">
            A story told through data, models and motion
          </p>

          <p className="font-display text-xl uppercase tracking-[0.45em] text-white/80 md:text-2xl">
            Ameer Hamza
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
            Every signal begins as noise.
            <span className="block gradient-text">
              I turn it into systems, insight and experience.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
            My work starts where raw information feels overwhelming. I build
            dashboards that explain it, models that learn from it and interfaces
            that make it feel alive. From racing telemetry and medical imaging to
            federated 6G research, each project is a journey from complexity to
            clarity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 font-bold text-blue-950 transition hover:bg-cyan-100"
            >
              Explore the Work
            </a>

            <a
              href="#case-studies"
              className="rounded-full bg-cyan-300 px-7 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Read the Story
            </a>

            <a
              href="/Ameer-Hamza-CV.pdf"
              download
              className="rounded-full border border-cyan-300/40 px-7 py-3 font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-sm">
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
            <CounterCard value={5} suffix="+" label="AI / ML Domains" />
            <CounterCard value={20} suffix="+" label="Tools" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="glass-card rounded-2xl p-5">
              <p className="story-line pl-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Observe
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                I begin with messy signals, real datasets and unanswered
                questions.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <p className="story-line pl-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Model
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                I shape patterns into machine learning systems, analysis and
                decision logic.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <p className="story-line pl-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Experience
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                I turn technical depth into usable products, visuals and
                meaningful user experiences.
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm text-cyan-100/80">
            Tip: click the floating data nodes to trigger musical notes in the field.
          </p>
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
                Data Field
              </span>
              <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs text-cyan-100">
                Interactive 3D
              </span>
            </div>

            <NeuralOrb3D />

            <div className="grid grid-cols-3 gap-3 px-2 pb-2">
              <div className="rounded-2xl bg-white/5 p-3 text-center">
                <p className="text-lg font-bold text-white">Signals</p>
                <p className="text-xs text-slate-400">Raw Input</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-center">
                <p className="text-lg font-bold text-white">Systems</p>
                <p className="text-xs text-slate-400">Intelligence</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-center">
                <p className="text-lg font-bold text-white">Stories</p>
                <p className="text-xs text-slate-400">Impact</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}