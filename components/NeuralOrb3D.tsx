"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
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
        Math.cos(theta) * radius * 2.15,
        y * 2.15,
        Math.sin(theta) * radius * 2.15,
      ),
    );
  }

  return points;
}

function DataOrb({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  const points = useMemo(() => createOrbPoints(42), []);

  const lineGeometries = useMemo(() => {
    return points.slice(0, 18).map((point, index) => {
      const nextPoint = points[(index * 3 + 9) % points.length];
      const curve = new THREE.CatmullRomCurve3([point, nextPoint]);

      return new THREE.TubeGeometry(curve, 5, 0.0045, 5, false);
    });
  }, [points]);

  useFrame((state) => {
    if (!active || !groupRef.current) return;

    const elapsed = state.clock.elapsedTime;

    groupRef.current.rotation.y = elapsed * 0.06 + pointer.x * 0.18;
    groupRef.current.rotation.x =
      Math.sin(elapsed * 0.14) * 0.06 - pointer.y * 0.12;

    if (innerRef.current) {
      innerRef.current.scale.setScalar(1 + Math.sin(elapsed * 0.8) * 0.015);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.3, 36, 36]} />
        <meshBasicMaterial
          color="#2563eb"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      <mesh ref={innerRef}>
        <sphereGeometry args={[0.78, 32, 32]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.16} />
      </mesh>

      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[index % 7 === 0 ? 0.04 : 0.025, 8, 8]} />
          <meshBasicMaterial
            color={index % 3 === 0 ? "#ffffff" : "#2dd4bf"}
          />
        </mesh>
      ))}

      {lineGeometries.map((geometry, index) => (
        <mesh key={`line-${index}`} geometry={geometry}>
          <meshBasicMaterial
            color={index % 2 === 0 ? "#99f6e4" : "#ffffff"}
            transparent
            opacity={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig({ active }: { active: boolean }) {
  const { camera, pointer } = useThree();

  useFrame(() => {
    if (!active) return;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * 0.14,
      0.018,
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.1,
      0.018,
    );

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function NeuralOrb3D() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="h-[380px] w-full overflow-hidden rounded-3xl"
    >
      <Canvas
        frameloop={isVisible ? "always" : "demand"}
        camera={{ position: [0, 0, 6], fov: 44 }}
        dpr={[1, 1]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <ambientLight intensity={0.8} />

        <Float speed={1} rotationIntensity={0.18} floatIntensity={0.45}>
          <DataOrb active={isVisible} />
        </Float>

        <CameraRig active={isVisible} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}