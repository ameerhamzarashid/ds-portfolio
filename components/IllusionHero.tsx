"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const floatingTerms = [
  "AI",
  "ML",
  "RAG",
  "SQL",
  "NLP",
  "MLOps",
  "Vision",
  "Analytics",
];

export default function IllusionHero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.2,
  });

  const orbY = useTransform(smoothScroll, [0, 0.25], [0, -70]);
  const orbScale = useTransform(smoothScroll, [0, 0.25], [1, 0.94]);
  const orbRotate = useTransform(smoothScroll, [0, 0.25], [0, -8]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28"
    >
      <div className="absolute left-[-12%] top-[-20%] h-[520px] w-[520px] rounded-full bg-orange-300/35 blur-3xl" />
      <div className="absolute bottom-[-22%] right-[-18%] h-[620px] w-[620px] rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative rounded-[2.2rem] border border-white/80 bg-white/72 p-6 shadow-2xl shadow-black/10 backdrop-blur-2xl md:p-10"
        >
          <div className="mb-6 flex w-fit items-center gap-3 rounded-full border border-orange-600/15 bg-orange-50 px-4 py-2 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-600" />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-orange-700">
              Data Scientist • AI Engineer
            </span>
          </div>

          <h1 className="max-w-4xl text-[3.2rem] font-black leading-[0.98] tracking-[-0.05em] text-black sm:text-6xl md:text-7xl">
            I build AI systems that turn data into{" "}
            <span className="text-orange-600">decisions.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-black/65 md:text-lg">
            Data science portfolio focused on machine learning, analytics,
            dashboards, MLOps and practical AI products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-orange-600 px-7 py-3 text-sm font-black text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-black"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 hover:border-orange-600 hover:text-orange-600"
            >
              Contact Me
            </a>

            <a
              href="/Ameer-Hamza-CV.pdf"
              download
              className="rounded-full border border-orange-600/20 bg-orange-50 px-7 py-3 text-sm font-black text-orange-700 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:text-white"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-bold">
            <a
              href="https://github.com/ameerhamzarashid"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-black/60 transition hover:text-orange-600"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ameerhamza78644"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-black/60 transition hover:text-orange-600"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="mailto:ameerhamzarashid.uk@gmail.com"
              className="flex items-center gap-2 text-black/60 transition hover:text-orange-600"
            >
              <MdEmail /> Email
            </a>
          </div>
        </motion.div>

        <motion.div
          style={
            reduceMotion
              ? undefined
              : {
                  y: orbY,
                  scale: orbScale,
                  rotate: orbRotate,
                }
          }
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-[560px]"
        >
          <div className="absolute inset-0 rounded-[3rem] border border-white/80 bg-white/55 shadow-2xl shadow-black/10 backdrop-blur-2xl" />
          <div className="absolute inset-[9%] rounded-full border border-orange-600/20" />
          <div className="absolute inset-[20%] rounded-full border border-black/10" />
          <div className="absolute inset-[31%] rounded-full border border-orange-600/20" />

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: 360,
                  }
            }
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[14%] rounded-full border border-dashed border-orange-600/25"
          />

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: -360,
                  }
            }
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[25%] rounded-full border border-dashed border-black/15"
          />

          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600 shadow-[0_0_90px_rgba(234,88,12,0.45)]" />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />

          {floatingTerms.map((term, index) => {
            const angle = (index / floatingTerms.length) * Math.PI * 2;
            const radius = 38;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;

            return (
              <motion.span
                key={term}
                className="absolute rounded-full border border-orange-600/15 bg-white/85 px-4 py-2 text-xs font-black text-black shadow-xl backdrop-blur-xl"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -10, 0],
                        opacity: [0.72, 1, 0.72],
                        scale: [0.96, 1.04, 0.96],
                      }
                }
                transition={{
                  duration: 3.2 + index * 0.2,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut",
                }}
              >
                {term}
              </motion.span>
            );
          })}

          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/80 bg-white/90 p-2 pr-5 shadow-xl backdrop-blur-2xl">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-orange-50">
              <Image
                src="/avatar/ameer-bitmoji.png"
                alt="Ameer Hamza avatar"
                fill
                className="object-cover object-top"
                sizes="48px"
              />
            </div>

            <div>
              <p className="text-sm font-black text-black">Ameer Hamza</p>
              <p className="text-xs font-bold text-orange-600">
                Data Scientist
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}