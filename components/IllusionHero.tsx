"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CounterCard from "./CounterCard";
import FloatingNumbers from "./FloatingNumbers";

const NeuralOrb3D = dynamic(() => import("./NeuralOrb3D"), {
  ssr: false,
});

export default function IllusionHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 70, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 28 });

  const cardRotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const cardRotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const heroX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const heroY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    let frameId: number | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        mouseX.set(x);
        mouseY.set(y);

        frameId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28"
    >
      <FloatingNumbers />

      <motion.div
        style={{ x: heroX, y: heroY }}
        className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      />

      <motion.div
        style={{ x: heroX, y: heroY }}
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full orbit-ring"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-glass rounded-[2rem] p-6 md:p-8"
        >
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-xl">
            Data Science • Machine Learning • Interactive Systems
          </p>

          <p className="font-display text-lg font-black uppercase tracking-[0.42em] text-cyan-100 md:text-xl">
            Ameer Hamza
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
            I transform complex data
            <span className="block ocean-text">
              into intelligent visual systems.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-blue-50/90">
            I build machine learning models, analytics dashboards, AI workflows
            and interactive web experiences that make data easier to understand,
            trust and act on.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#journey"
              className="rounded-full bg-white px-7 py-3 font-black text-blue-950 transition hover:bg-cyan-100"
            >
              Start Journey
            </a>

            <a
              href="#projects"
              className="rounded-full bg-cyan-300 px-7 py-3 font-black text-slate-950 transition hover:bg-cyan-200"
            >
              Explore Projects
            </a>

            <a
              href="/Ameer-Hamza-CV.pdf"
              download
              className="rounded-full border border-white/35 bg-white/10 px-7 py-3 font-black text-white transition hover:bg-white hover:text-blue-950"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
            <a
              href="https://github.com/ameerhamzarashid"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-50 transition hover:text-cyan-200"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ameerhamza78644"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-50 transition hover:text-cyan-200"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="mailto:ameerhamzarashid.uk@gmail.com"
              className="flex items-center gap-2 text-blue-50 transition hover:text-cyan-200"
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

          <p className="mt-5 text-sm font-semibold text-blue-50/80">
            Move your mouse across the data core. Click the floating data nodes
            to trigger subtle sound notes.
          </p>
        </motion.div>

        <motion.div
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="deep-glass royal-glow rounded-[2rem] p-4"
        >
          <div className="rounded-[1.5rem] border border-white/15 bg-blue-950/35 p-4">
            <div className="mb-3 flex items-center justify-between px-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">
                Interactive Data Core
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                Mouse Reactive
              </span>
            </div>

            <NeuralOrb3D />

            <div className="grid grid-cols-3 gap-3 px-2 pb-2">
              <div className="rounded-2xl bg-white/10 p-3 text-center">
                <p className="text-lg font-bold text-white">Data</p>
                <p className="text-xs text-cyan-50/70">Signals</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-3 text-center">
                <p className="text-lg font-bold text-white">Models</p>
                <p className="text-xs text-cyan-50/70">Learning</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-3 text-center">
                <p className="text-lg font-bold text-white">Impact</p>
                <p className="text-xs text-cyan-50/70">Decisions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}