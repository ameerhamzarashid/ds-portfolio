"use client";

import { motion } from "framer-motion";

export default function ThemeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute inset-0 noise-layer opacity-10" />

      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 24, 0], y: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-140px] top-[-80px] h-[480px] w-[480px] rounded-full bg-white/18 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, -28, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-160px] top-20 h-[500px] w-[500px] rounded-full bg-cyan-300/16 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.07, 1], x: [0, 22, 0], y: [0, -24, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-180px] left-1/3 h-[540px] w-[540px] rounded-full bg-blue-700/18 blur-3xl"
      />

      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white/24 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-blue-950/50 to-transparent" />
    </div>
  );
}