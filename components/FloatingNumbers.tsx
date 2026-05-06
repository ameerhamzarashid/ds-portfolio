"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

type FloatingItem = {
  text: string;
  x: number;
  y: number;
  depth: number;
  freq: number;
  driftX: number;
  driftY: number;
};

type Burst = {
  id: number;
  x: number;
  y: number;
};

const floatingItems: FloatingItem[] = [
  { text: "0.98", x: 8, y: 18, depth: 90, freq: 261.63, driftX: 8, driftY: -18 },
  { text: "AI", x: 72, y: 12, depth: 130, freq: 293.66, driftX: -10, driftY: 14 },
  { text: "SQL", x: 18, y: 45, depth: 80, freq: 329.63, driftX: 9, driftY: -10 },
  { text: "ML", x: 82, y: 38, depth: 160, freq: 349.23, driftX: -12, driftY: 10 },
  { text: "RAG", x: 12, y: 72, depth: 110, freq: 392.0, driftX: 8, driftY: -14 },
  { text: "0.87", x: 66, y: 68, depth: 150, freq: 440.0, driftX: -8, driftY: 12 },
  { text: "CNN", x: 42, y: 22, depth: 70, freq: 493.88, driftX: 10, driftY: -12 },
  { text: "DQN", x: 88, y: 78, depth: 180, freq: 523.25, driftX: -10, driftY: -10 },
  { text: "6G", x: 28, y: 82, depth: 120, freq: 587.33, driftX: 12, driftY: -8 },
  { text: "MLOps", x: 56, y: 48, depth: 140, freq: 659.25, driftX: -8, driftY: 8 },
  { text: "101", x: 76, y: 58, depth: 100, freq: 698.46, driftX: 6, driftY: -10 },
  { text: "Tensor", x: 34, y: 62, depth: 170, freq: 783.99, driftX: -6, driftY: 10 },
  { text: "BI", x: 6, y: 35, depth: 95, freq: 880.0, driftX: 9, driftY: -8 },
  { text: "0.92", x: 92, y: 24, depth: 125, freq: 987.77, driftX: -7, driftY: 8 },
];

export default function FloatingNumbers() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = () => {
    if (typeof window === "undefined") return null;

    const AudioContextClass =
      window.AudioContext ||
      (
        window as typeof window & {
          webkitAudioContext?: typeof AudioContext;
        }
      ).webkitAudioContext;

    if (!AudioContextClass) return null;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextClass();
    }

    if (audioContextRef.current.state === "suspended") {
      void audioContextRef.current.resume();
    }

    return audioContextRef.current;
  };

  const playTone = (frequency: number) => {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, now);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.15, now + 0.18);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.72);
  };

  const handleClick = (x: number, y: number, freq: number) => {
    playTone(freq);

    const id = Date.now() + Math.random();

    setBursts((prev) => [...prev, { id, x, y }]);

    window.setTimeout(() => {
      setBursts((prev) => prev.filter((burst) => burst.id !== id));
    }, 1200);
  };

  return (
    <div className="floating-stage">
      {floatingItems.map((item, index) => (
        <motion.button
          key={`${item.text}-${index}`}
          type="button"
          onClick={() => handleClick(item.x, item.y, item.freq)}
          className="number-node"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translate3d(0, 0, ${item.depth}px)`,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            x: [0, item.driftX, 0],
            y: [0, item.driftY, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 5 + index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.08,
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.text}
        </motion.button>
      ))}

      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="note-burst"
          style={{
            left: `${burst.x}%`,
            top: `${burst.y}%`,
          }}
        >
          <span className="note-char one">♪</span>
          <span className="note-char two">♫</span>
          <span className="note-char three">♬</span>
        </div>
      ))}
    </div>
  );
}