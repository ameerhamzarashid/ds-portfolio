"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
    offset: ["start 85%", "end 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.18, 1], [0, 1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 0.35, 1], [70, 0, -20]);
  const xLeft = useTransform(scrollYProgress, [0, 0.35, 1], [-70, 0, 0]);
  const xRight = useTransform(scrollYProgress, [0, 0.35, 1], [70, 0, 0]);
  const scaleDefault = useTransform(scrollYProgress, [0, 0.35, 1], [0.96, 1, 0.99]);
  const scaleZoom = useTransform(scrollYProgress, [0, 0.35, 1], [0.9, 1, 1.01]);
  const rotateX = useTransform(scrollYProgress, [0, 0.35, 1], [4, 0, 0]);

  if (isMobile) {
    return (
      <div className={`relative z-10 w-full max-w-full overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }

  const x =
    variant === "left" ? xLeft : variant === "right" ? xRight : undefined;

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
      className={`relative z-10 w-full max-w-full overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}