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
      className="soft-grid relative flex min-h-screen w-full items-center overflow-hidden px-4 pt-28 sm:px-5"
    >
      <FloatingNumbers />

      <div className="pointer-events-none absolute right-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl lg:h-[620px] lg:w-[620px]" />
      <div className="pointer-events-none absolute bottom-[-160px] left-[-180px] h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl lg:h-[600px] lg:w-[600px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 overflow-hidden lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-panel relative z-10 w-full max-w-full overflow-hidden rounded-[1.5rem] p-5 sm:p-6 md:rounded-[2rem] md:p-9"
        >
          <p className="mb-5 inline-flex max-w-full rounded-full border border-orange-300/20 bg-orange-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-orange-200 sm:px-5 sm:text-sm sm:tracking-[0.18em]">
            Data Science • ML • AI Products
          </p>

          <p className="font-display text-sm font-black uppercase tracking-[0.28em] text-orange-200 sm:text-lg sm:tracking-[0.38em] md:text-xl">
            Ameer Hamza
          </p>

          <h1 className="mt-4 max-w-full text-[2.65rem] font-black leading-[1.04] text-orange-50 sm:text-5xl md:text-7xl">
            Building intelligent systems
            <span className="block gradient-text">
              from data, models and real-world problems.
            </span>
          </h1>

          <p className="mt-6 max-w-full text-base font-medium leading-7 text-stone-300 sm:text-lg sm:leading-8">
            I create machine learning models, analytics dashboards and AI-driven
            products that turn complex information into clear, useful outcomes.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <a
              href="#projects"
              className="rounded-full bg-orange-500 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-amber-500 sm:px-7 sm:text-base"
            >
              View Projects
            </a>

            <a
              href="#skills"
              className="rounded-full bg-orange-100 px-6 py-3 text-center text-sm font-black text-black transition hover:bg-amber-200 sm:px-7 sm:text-base"
            >
              Explore Skills
            </a>

            <a
              href="/Ameer-Hamza-CV.pdf"
              download
              className="rounded-full border border-orange-300/20 bg-white/10 px-6 py-3 text-center text-sm font-black text-orange-50 transition hover:bg-orange-100 hover:text-black sm:px-7 sm:text-base"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold sm:gap-5">
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

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:grid-cols-4">
            <CounterCard value={10} suffix="+" label="Projects" />
            <CounterCard value={3} suffix="+" label="Years Experience" />
            <CounterCard value={5} suffix="+" label="AI / ML Areas" />
            <CounterCard value={20} suffix="+" label="Tools" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="pointer-events-none relative z-0 flex min-h-[280px] items-center justify-center overflow-hidden lg:pointer-events-auto lg:min-h-[680px] lg:-mr-8 lg:translate-y-8"
        >
          <div className="absolute h-[300px] w-[300px] rounded-full bg-orange-500/12 blur-3xl lg:h-[700px] lg:w-[700px]" />
          <div className="absolute h-[240px] w-[240px] rounded-full border border-orange-300/15 lg:h-[560px] lg:w-[560px]" />
          <div className="absolute h-[330px] w-[330px] rounded-full border border-amber-200/10 lg:h-[760px] lg:w-[760px]" />

          <div className="relative h-[300px] w-full max-w-[360px] overflow-visible lg:h-[680px] lg:max-w-[740px]">
            <NeuralOrb3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}