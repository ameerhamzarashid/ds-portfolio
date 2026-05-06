"use client";

import { motion } from "framer-motion";

export default function ThemeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 noise-layer opacity-20" />

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-120px] top-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-140px] top-10 h-96 w-96 rounded-full bg-blue-700/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -70, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-120px] left-1/3 h-96 w-96 rounded-full bg-teal-400/15 blur-3xl"
      />
    </div>
  );
}