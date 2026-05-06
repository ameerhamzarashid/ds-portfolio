"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

type CounterCardProps = {
  value: number;
  suffix?: string;
  label: string;
};

export default function CounterCard({
  value,
  suffix = "",
  label,
}: CounterCardProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.8,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, value]);

  return (
    <div className="glass-card royal-glow rounded-3xl p-5 text-center">
      <p className="text-3xl font-extrabold text-white">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </div>
  );
}