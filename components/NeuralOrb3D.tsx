"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
        Math.cos(theta) * radius * 2.25,
        y * 2.25,
        Math.sin(theta) * radius * 2.25,
      ),
    );
  }

  return points;
}

function DataOrb({
  active,
  expanded,
  isMobile,
}: {
  active: boolean;
  expanded: boolean;
  isMobile: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  const points = useMemo(() => createOrbPoints(isMobile ? 34 : 46), [isMobile]);

  const lineGeometries = useMemo(() => {
    return points.slice(0, isMobile ? 10 : 18).map((point, index) => {
      const nextPoint = points[(index * 3 + 9) % points.length];
      const curve = new THREE.CatmullRomCurve3([point, nextPoint]);

      return new THREE.TubeGeometry(curve, 5, isMobile ? 0.004 : 0.005, 6, false);
    });
  }, [points, isMobile]);

  useFrame((state) => {
    if (!active || !groupRef.current) return;

    const elapsed = state.clock.elapsedTime;
    const targetScale = expanded ? 1.08 : 1;

    groupRef.current.scale.x = THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      targetScale,
      0.07,
    );

    groupRef.current.scale.y = THREE.MathUtils.lerp(
      groupRef.current.scale.y,
      targetScale,
      0.07,
    );

    groupRef.current.scale.z = THREE.MathUtils.lerp(
      groupRef.current.scale.z,
      targetScale,
      0.07,
    );

    const pointerPower = isMobile ? 0.04 : 0.18;

    groupRef.current.rotation.y =
      elapsed * (expanded ? 0.12 : 0.075) + pointer.x * pointerPower;

    groupRef.current.rotation.x =
      Math.sin(elapsed * 0.18) * 0.055 - pointer.y * (isMobile ? 0.03 : 0.1);

    if (innerRef.current) {
      innerRef.current.scale.setScalar(
        1 + Math.sin(elapsed * 1.1) * (expanded ? 0.018 : 0.011),
      );
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.42, isMobile ? 32 : 42, isMobile ? 32 : 42]} />
        <meshBasicMaterial
          color="#f97316"
          wireframe
          transparent
          opacity={expanded ? 0.78 : 0.66}
        />
      </mesh>

      <mesh ref={innerRef}>
        <sphereGeometry args={[0.86, isMobile ? 24 : 32, isMobile ? 24 : 32]} />
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={expanded ? 0.26 : 0.18}
        />
      </mesh>

      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[index % 7 === 0 ? 0.046 : 0.027, 8, 8]} />
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
            opacity={expanded ? 0.42 : 0.28}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig({
  active,
  expanded,
  isMobile,
}: {
  active: boolean;
  expanded: boolean;
  isMobile: boolean;
}) {
  const { camera, pointer } = useThree();

  useFrame(() => {
    if (!active) return;

    const targetZ = expanded ? 7.25 : isMobile ? 8.7 : 7.9;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * (isMobile ? 0.04 : 0.12),
      0.025,
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * (isMobile ? 0.035 : 0.08),
      0.025,
    );

    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.035);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function NeuralOrb3D() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
      { threshold: 0.08 },
    );

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  const shouldAnimate = isVisible && !reducedMotion;

  const canvasDpr: [number, number] = isMobile ? [1, 1.35] : [1, 2];

  return (
    <div
      ref={wrapperRef}
      onPointerEnter={() => setExpanded(true)}
      onPointerLeave={() => setExpanded(false)}
      onPointerDown={() => setExpanded(true)}
      onPointerUp={() => setExpanded(false)}
      className="relative aspect-square w-full overflow-hidden rounded-full bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-[8%] rounded-full border border-orange-200/10" />

      <Canvas
        frameloop={shouldAnimate ? "always" : "demand"}
        camera={{
          position: [0, 0, isMobile ? 8.8 : 7.9],
          fov: isMobile ? 50 : 42,
        }}
        dpr={canvasDpr}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
          pointerEvents: "auto",
          touchAction: "pan-y",
        }}
      >
        <ambientLight intensity={1} />

        <Float
          speed={isMobile ? 0.45 : 1.1}
          rotationIntensity={isMobile ? 0.08 : 0.22}
          floatIntensity={isMobile ? 0.16 : 0.55}
        >
          <DataOrb
            active={shouldAnimate}
            expanded={expanded}
            isMobile={isMobile}
          />
        </Float>

        <CameraRig
          active={shouldAnimate}
          expanded={expanded}
          isMobile={isMobile}
        />
      </Canvas>
    </div>
  );
}