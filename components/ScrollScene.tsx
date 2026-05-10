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
    offset: variant === "hero" ? ["start start", "end start"] : ["start 92%", "end 18%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: isMobile ? 90 : 120,
    damping: isMobile ? 28 : 32,
    mass: 0.2,
  });

  const opacity = useTransform(
    smoothProgress,
    [0, 0.16, 0.82, 1],
    variant === "hero" ? [1, 1, 0.92, 0.82] : [0, 1, 1, 0.92],
  );

  const y = useTransform(
    smoothProgress,
    [0, 0.35, 1],
    isMobile ? [28, 0, -10] : [90, 0, -34],
  );

  const xLeft = useTransform(
    smoothProgress,
    [0, 0.4, 1],
    isMobile ? [-18, 0, 0] : [-85, 0, 0],
  );

  const xRight = useTransform(
    smoothProgress,
    [0, 0.4, 1],
    isMobile ? [18, 0, 0] : [85, 0, 0],
  );

  const scaleDefault = useTransform(
    smoothProgress,
    [0, 0.4, 1],
    isMobile ? [0.985, 1, 1] : [0.94, 1, 0.99],
  );

  const scaleZoom = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    isMobile ? [0.97, 1, 1.005] : [0.88, 1, 1.035],
  );

  const rotateX = useTransform(
    smoothProgress,
    [0, 0.35, 1],
    isMobile ? [0, 0, 0] : [5, 0, 0],
  );

  const blur = useTransform(
    smoothProgress,
    [0, 0.2, 1],
    isMobile ? ["blur(0px)", "blur(0px)", "blur(0px)"] : ["blur(5px)", "blur(0px)", "blur(0px)"],
  );

  const x =
    variant === "left" ? xLeft : variant === "right" ? xRight : undefined;

  const scale = variant === "zoom" || variant === "hero" ? scaleZoom : scaleDefault;

  if (reduceMotion) {
    return (
      <div className={`relative z-10 w-full max-w-full overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x,
        y,
        scale,
        rotateX,
        filter: blur,
        transformPerspective: 1400,
        willChange: "transform, opacity",
      }}
      className={`relative z-10 w-full max-w-full overflow-hidden scroll-card ${className}`}
    >
      {children}
    </motion.div>
  );
}