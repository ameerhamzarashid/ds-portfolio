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
      className="soft-grid relative flex min-h-screen items-center overflow-hidden px-5 pt-28"
    >
      <FloatingNumbers />

      <div className="absolute right-[-180px] top-10 h-[620px] w-[620px] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-[-160px] left-[-180px] h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-panel relative z-10 rounded-[2rem] p-6 md:p-9"
        >
          <p className="mb-5 inline-flex rounded-full border border-orange-300/20 bg-orange-500/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-200">
            Data Science • Machine Learning • AI Products
          </p>

          <p className="font-display text-lg font-black uppercase tracking-[0.38em] text-orange-200 md:text-xl">
            Ameer Hamza
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-orange-50 md:text-7xl">
            Building intelligent systems
            <span className="block gradient-text">
              from data, models and real-world problems.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-stone-300">
            I create machine learning models, analytics dashboards and AI-driven
            products that turn complex information into clear, useful outcomes.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-orange-500 px-7 py-3 font-black text-white transition hover:bg-amber-500"
            >
              View Projects
            </a>

            <a
              href="#skills"
              className="rounded-full bg-orange-100 px-7 py-3 font-black text-black transition hover:bg-amber-200"
            >
              Explore Skills
            </a>

            <a
              href="/Ameer-Hamza-CV.pdf"
              download
              className="rounded-full border border-orange-300/20 bg-white/10 px-7 py-3 font-black text-orange-50 transition hover:bg-orange-100 hover:text-black"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
            <a
              href="https://github.com/ameerhamzarashid"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-stone-300 transition hover:text-orange-300"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ameerhamza78644"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-stone-300 transition hover:text-orange-300"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="mailto:ameerhamzarashid.uk@gmail.com"
              className="flex items-center gap-2 text-stone-300 transition hover:text-orange-300"
            >
              <MdEmail /> Email
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <CounterCard value={10} suffix="+" label="Projects" />
            <CounterCard value={3} suffix="+" label="Years Experience" />
            <CounterCard value={5} suffix="+" label="AI / ML Areas" />
            <CounterCard value={20} suffix="+" label="Tools" />
          </div>

          <p className="mt-5 text-sm font-semibold text-stone-400">
            Click the floating data nodes for subtle sound interactions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-0 flex min-h-[680px] items-center justify-center lg:-mr-8 lg:translate-y-8"
        >
          <div className="absolute h-[700px] w-[700px] rounded-full bg-orange-500/12 blur-3xl" />
          <div className="absolute h-[560px] w-[560px] rounded-full border border-orange-300/15" />
          <div className="absolute h-[760px] w-[760px] rounded-full border border-amber-200/10" />

          <div className="relative h-[680px] w-full max-w-[740px] cursor-pointer overflow-visible">
            <NeuralOrb3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}