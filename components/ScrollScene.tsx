"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

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
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:
      variant === "hero"
        ? ["start start", "end start"]
        : ["start 92%", "end 18%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.18,
  });

  const opacity = useTransform(
    smoothProgress,
    [0, 0.16, 0.88, 1],
    variant === "hero" ? [1, 1, 0.96, 0.9] : [0.72, 1, 1, 0.96],
  );

  const y = useTransform(
    smoothProgress,
    [0, 0.4, 1],
    variant === "hero" ? [0, 0, -42] : [72, 0, -18],
  );

  const xLeft = useTransform(smoothProgress, [0, 0.42, 1], [-72, 0, 0]);
  const xRight = useTransform(smoothProgress, [0, 0.42, 1], [72, 0, 0]);

  const scaleDefault = useTransform(
    smoothProgress,
    [0, 0.42, 1],
    [0.96, 1, 0.995],
  );

  const scaleZoom = useTransform(
    smoothProgress,
    [0, 0.42, 1],
    [0.9, 1, 1.025],
  );

  const rotateX = useTransform(
    smoothProgress,
    [0, 0.42, 1],
    [3.5, 0, 0],
  );

  if (reduceMotion) {
    return (
      <div className={`relative z-10 w-full max-w-full overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`relative z-10 w-full max-w-full overflow-hidden ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  const x =
    variant === "left" ? xLeft : variant === "right" ? xRight : undefined;

  const scale =
    variant === "zoom" || variant === "hero" ? scaleZoom : scaleDefault;

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x,
        y,
        scale,
        rotateX,
        transformPerspective: 1400,
        willChange: "transform, opacity",
      }}
      className={`relative z-10 w-full max-w-full overflow-hidden scroll-card ${className}`}
    >
      {children}
    </motion.div>
  );
}