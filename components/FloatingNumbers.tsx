"use client";

import { motion } from "framer-motion";

const floatingItems = [
  { text: "0.98", x: 8, y: 18 },
  { text: "AI", x: 72, y: 12 },
  { text: "SQL", x: 18, y: 45 },
  { text: "ML", x: 82, y: 38 },
  { text: "RAG", x: 12, y: 72 },
  { text: "0.87", x: 66, y: 68 },
  { text: "CNN", x: 42, y: 22 },
  { text: "DQN", x: 88, y: 78 },
  { text: "6G", x: 28, y: 82 },
  { text: "MLOps", x: 56, y: 48 },
  { text: "101", x: 76, y: 58 },
  { text: "Tensor", x: 34, y: 62 },
  { text: "BI", x: 6, y: 35 },
  { text: "0.92", x: 92, y: 24 },
];

export default function FloatingNumbers() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingItems.map((item, index) => (
        <motion.span
          key={`${item.text}-${index}`}
          initial={{
            opacity: 0,
            x: `${item.x}vw`,
            y: `${item.y}vh`,
          }}
          animate={{
            opacity: [0, 0.75, 0],
            y: [`${item.y}vh`, `${item.y - 14}vh`, `${item.y}vh`],
            x: [`${item.x}vw`, `${item.x + 4}vw`, `${item.x}vw`],
          }}
          transition={{
            duration: 8 + index * 0.4,
            repeat: Infinity,
            delay: index * 0.35,
            ease: "easeInOut",
          }}
          className="absolute rounded-full border border-cyan-300/20 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur-md"
        >
          {item.text}
        </motion.span>
      ))}
    </div>
  );
}