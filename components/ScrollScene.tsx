"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type ScrollSceneProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "left" | "right" | "zoom" | "hero";
};

export default function ScrollScene({
  children,
  className = "",
  variant = "default",
}: ScrollSceneProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 1, 1, 0.92]);

  const yDefault = useTransform(scrollYProgress, [0, 0.35, 1], [80, 0, -30]);
  const yHero = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0, -70]);
  const xLeft = useTransform(scrollYProgress, [0, 0.35, 1], [-80, 0, 0]);
  const xRight = useTransform(scrollYProgress, [0, 0.35, 1], [80, 0, 0]);
  const scaleDefault = useTransform(scrollYProgress, [0, 0.35, 1], [0.96, 1, 0.99]);
  const scaleZoom = useTransform(scrollYProgress, [0, 0.35, 1], [0.88, 1, 1.02]);

  const rotateX = useTransform(scrollYProgress, [0, 0.35, 1], [4, 0, 0]);

  const x =
    variant === "left" ? xLeft : variant === "right" ? xRight : undefined;

  const y = variant === "hero" ? yHero : yDefault;

  const scale = variant === "zoom" ? scaleZoom : scaleDefault;

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x,
        y,
        scale,
        rotateX,
        transformPerspective: 1200,
      }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
}