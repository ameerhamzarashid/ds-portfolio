"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function createOrbPoints(total: number) {
  const points: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < total; i += 1) {
    const y = 1 - (i / (total - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    points.push(
      new THREE.Vector3(
        Math.cos(theta) * radius * 2.2,
        y * 2.2,
        Math.sin(theta) * radius * 2.2,
      ),
    );
  }

  return points;
}

function DataOrb({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  const points = useMemo(() => createOrbPoints(42), []);

  const lineGeometries = useMemo(() => {
    return points.slice(0, 15).map((point, index) => {
      const nextPoint = points[(index * 3 + 9) % points.length];
      const curve = new THREE.CatmullRomCurve3([point, nextPoint]);

      return new THREE.TubeGeometry(curve, 5, 0.005, 6, false);
    });
  }, [points]);

  useFrame((state) => {
    if (!active || !groupRef.current) return;

    const elapsed = state.clock.elapsedTime;

    groupRef.current.rotation.y = elapsed * 0.075;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.18) * 0.055;

    if (innerRef.current) {
      innerRef.current.scale.setScalar(1 + Math.sin(elapsed * 1.1) * 0.012);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.42, 40, 40]} />
        <meshBasicMaterial
          color="#f97316"
          wireframe
          transparent
          opacity={0.64}
        />
      </mesh>

      <mesh ref={innerRef}>
        <sphereGeometry args={[0.86, 30, 30]} />
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={0.18}
        />
      </mesh>

      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[index % 7 === 0 ? 0.045 : 0.026, 8, 8]} />
          <meshBasicMaterial
            color={index % 3 === 0 ? "#fff7ed" : "#f59e0b"}
          />
        </mesh>
      ))}

      {lineGeometries.map((geometry, index) => (
        <mesh key={`line-${index}`} geometry={geometry}>
          <meshBasicMaterial
            color={index % 2 === 0 ? "#fbbf24" : "#fff7ed"}
            transparent
            opacity={0.28}
          />
        </mesh>
      ))}
    </group>
  );
}

function MobileCssOrb() {
  return (
    <div className="mobile-orb-shell">
      <div className="mobile-orb-glow" />
      <div className="mobile-orb-ring ring-one" />
      <div className="mobile-orb-ring ring-two" />
      <div className="mobile-orb-ring ring-three" />

      <div className="mobile-orb-core">
        <span className="node node-one" />
        <span className="node node-two" />
        <span className="node node-three" />
        <span className="node node-four" />
        <span className="node node-five" />
        <span className="node node-six" />
      </div>
    </div>
  );
}

export default function NeuralOrb3D() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const checkMotion = () => {
      setReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      );
    };

    checkScreen();
    checkMotion();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

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

  if (isMobile === null || isMobile || reducedMotion) {
    return (
      <div ref={wrapperRef} className="orb-clean-shell relative aspect-square w-full">
        <MobileCssOrb />
      </div>
    );
  }

  const shouldAnimate = isVisible && !reducedMotion;

  return (
    <div ref={wrapperRef} className="orb-clean-shell relative aspect-square w-full">
      <Canvas
        frameloop={shouldAnimate ? "always" : "demand"}
        camera={{
          position: [0, 0, 7.9],
          fov: 42,
        }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          premultipliedAlpha: false,
          powerPreference: "high-performance",
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
          pointerEvents: "none",
          touchAction: "pan-y",
        }}
      >
        <ambientLight intensity={1} />

        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <DataOrb active={shouldAnimate} />
        </Float>
      </Canvas>
    </div>
  );
}