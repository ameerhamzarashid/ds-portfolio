"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type FloatingItem = {
  text: string;
  x: number;
  y: number;
  freq: number;
  driftX: number;
  driftY: number;
  duration: number;
};

type Burst = {
  id: number;
  x: number;
  y: number;
};

const floatingItems: FloatingItem[] = [
  { text: "0.98", x: 8, y: 18, freq: 261.63, driftX: 18, driftY: -20, duration: 8 },
  { text: "AI", x: 72, y: 12, freq: 293.66, driftX: -22, driftY: 18, duration: 9 },
  { text: "SQL", x: 18, y: 45, freq: 329.63, driftX: 20, driftY: -14, duration: 10 },
  { text: "ML", x: 82, y: 38, freq: 349.23, driftX: -18, driftY: 16, duration: 8.5 },
  { text: "RAG", x: 12, y: 72, freq: 392.0, driftX: 22, driftY: -18, duration: 11 },
  { text: "CNN", x: 42, y: 22, freq: 493.88, driftX: 16, driftY: -20, duration: 9.5 },
  { text: "6G", x: 28, y: 82, freq: 587.33, driftX: 24, driftY: -14, duration: 10.5 },
  { text: "MLOps", x: 56, y: 48, freq: 659.25, driftX: -18, driftY: 18, duration: 12 },
  { text: "BI", x: 6, y: 35, freq: 880.0, driftX: 20, driftY: -12, duration: 9 },
  { text: "DQN", x: 88, y: 70, freq: 523.25, driftX: -24, driftY: -18, duration: 11.5 },
];

export default function FloatingNumbers() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

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
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.12, now + 0.16);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.05, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.48);
  };

  const handleClick = (x: number, y: number, freq: number) => {
    playTone(freq);

    const id = Date.now();

    setBursts((previous) => [...previous, { id, x, y }]);

    window.setTimeout(() => {
      setBursts((previous) => previous.filter((burst) => burst.id !== id));
    }, 900);
  };

  return (
    <div ref={wrapperRef} className="floating-stage">
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
          initial={{ opacity: 0, scale: 0.92 }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  scale: 1,
                  x: [0, item.driftX, item.driftX * 0.45, 0],
                  y: [0, item.driftY, item.driftY * -0.25, 0],
                  rotate: [0, 2, -2, 0],
                }
              : {
                  opacity: 0.25,
                  scale: 0.95,
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
          }
          transition={{
            opacity: { duration: 0.35 },
            scale: { duration: 0.35 },
            x: {
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.12,
            },
            y: {
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.12,
            },
            rotate: {
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.12,
            },
          }}
          whileHover={{ scale: 1.1 }}
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