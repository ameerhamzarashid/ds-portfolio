"use client";

import { motion } from "framer-motion";

const techStack = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "TensorFlow",
  "PyTorch",
  "scikit-learn",
  "Docker",
  "Kubernetes",
  "Azure",
  "AWS",
  "LangChain",
  "RAG",
  "OpenAI",
  "Next.js",
  "TypeScript",
  "Three.js",
  "MLOps",
];

export default function TechMarquee() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-4 backdrop-blur-xl">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="rounded-full border border-cyan-300/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}