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
      duration: 1.4,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, value]);

  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-center shadow-lg shadow-blue-950/10 backdrop-blur-md">
      <p className="text-3xl font-extrabold text-white">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>

      <p className="mt-2 text-sm font-semibold text-blue-50/80">{label}</p>
    </div>
  );
}