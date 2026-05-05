"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid-bg relative flex min-h-screen items-center overflow-hidden px-5 pt-28"
    >
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Data Scientist Portfolio
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Hi, I&apos;m <span className="gradient-text">Ameer Hamza</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-200 md:text-3xl">
            I build intelligent systems from data.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I design machine learning models, analytics dashboards and applied
            AI systems that turn complex data into clear decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              View Projects
            </a>

            <a
              href="https://github.com/ameerhamzarashid"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ameerhamza78644"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-6"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-cyan-300">
                LIVE DATA PROFILE
              </p>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-300">
                Available
              </span>
            </div>

            <div className="space-y-4">
              {[
                ["Python", "95%"],
                ["SQL", "90%"],
                ["Machine Learning", "88%"],
                ["Power BI", "85%"],
                ["Generative AI", "82%"],
              ].map(([skill, value]) => (
                <div key={skill}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-300">{skill}</span>
                    <span className="text-cyan-300">{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-purple-400"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs text-slate-400">Projects</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-xs text-slate-400">Years Exp.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">MSc</p>
                <p className="text-xs text-slate-400">Data Science</p>
              </div>
            </div>

            <a
              href="mailto:ameerhamzarashid.uk@gmail.com"
              className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-white/5 p-4 text-sm text-slate-200 transition hover:bg-white/10"
            >
              <MdEmail className="text-cyan-300" />
              ameerhamzarashid.uk@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}