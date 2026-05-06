"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

type FloatingItem = {
  text: string;
  x: number;
  y: number;
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
  { text: "0.98", x: 8, y: 18, freq: 261.63, driftX: 6, driftY: -12 },
  { text: "AI", x: 72, y: 12, freq: 293.66, driftX: -8, driftY: 10 },
  { text: "SQL", x: 18, y: 45, freq: 329.63, driftX: 7, driftY: -8 },
  { text: "ML", x: 82, y: 38, freq: 349.23, driftX: -8, driftY: 8 },
  { text: "RAG", x: 12, y: 72, freq: 392.0, driftX: 6, driftY: -10 },
  { text: "CNN", x: 42, y: 22, freq: 493.88, driftX: 8, driftY: -8 },
  { text: "6G", x: 28, y: 82, freq: 587.33, driftX: 8, driftY: -6 },
  { text: "MLOps", x: 56, y: 48, freq: 659.25, driftX: -6, driftY: 6 },
  { text: "BI", x: 6, y: 35, freq: 880.0, driftX: 7, driftY: -6 },
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

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.055, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.46);
  };

  const handleClick = (x: number, y: number, freq: number) => {
    playTone(freq);

    const id = Date.now();

    setBursts((prev) => [...prev, { id, x, y }]);

    window.setTimeout(() => {
      setBursts((prev) => prev.filter((burst) => burst.id !== id));
    }, 900);
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
          }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{
            opacity: 1,
            x: [0, item.driftX, 0],
            y: [0, item.driftY, 0],
          }}
          transition={{
            duration: 6 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.08,
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
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