"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const nodes = [
  { x: "8%", y: "18%", s: 70 },
  { x: "28%", y: "12%", s: 42 },
  { x: "72%", y: "15%", s: 64 },
  { x: "90%", y: "34%", s: 48 },
  { x: "12%", y: "64%", s: 58 },
  { x: "38%", y: "76%", s: 44 },
  { x: "78%", y: "78%", s: 76 },
];

export default function NeuralOrbField() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    mass: 0.2,
  });

  const opacity = useTransform(progress, [0, 0.15, 1], [0.45, 0.62, 0.25]);
  const y = useTransform(progress, [0, 1], [0, -120]);
  const scale = useTransform(progress, [0, 1], [1, 1.08]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity, y, scale }}
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      suppressHydrationWarning
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 80 130 C 280 40, 430 250, 650 120 S 940 280, 760 520 S 380 710, 130 540"
          fill="none"
          stroke="rgba(234,88,12,0.13)"
          strokeWidth="1.2"
          strokeDasharray="10 16"
          animate={{ strokeDashoffset: [0, -180] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M 140 690 C 300 460, 520 580, 690 360 S 870 140, 950 260"
          fill="none"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1"
          strokeDasharray="8 14"
          animate={{ strokeDashoffset: [0, -140] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={`${node.x}-${node.y}`}
          className="absolute rounded-full border border-orange-600/12 bg-white/40 backdrop-blur-xl"
          style={{
            left: node.x,
            top: node.y,
            width: `${node.s}px`,
            height: `${node.s}px`,
          }}
          animate={{
            opacity: [0.18, 0.42, 0.2],
            scale: [0.92, 1.08, 0.96],
            y: [0, index % 2 === 0 ? -18 : 18, 0],
          }}
          transition={{
            duration: 6 + index * 0.4,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        >
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/50" />
        </motion.div>
      ))}
    </motion.div>
  );
}