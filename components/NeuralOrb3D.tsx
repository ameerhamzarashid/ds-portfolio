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
        Math.cos(theta) * radius * 2.35,
        y * 2.35,
        Math.sin(theta) * radius * 2.35,
      ),
    );
  }

  return points;
}

function DataOrb({
  active,
  expanded,
}: {
  active: boolean;
  expanded: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  const points = useMemo(() => createOrbPoints(62), []);

  const lineGeometries = useMemo(() => {
    return points.slice(0, 28).map((point, index) => {
      const nextPoint = points[(index * 3 + 11) % points.length];
      const curve = new THREE.CatmullRomCurve3([point, nextPoint]);

      return new THREE.TubeGeometry(curve, 6, 0.005, 6, false);
    });
  }, [points]);

  useFrame((state) => {
    if (!active || !groupRef.current) return;

    const elapsed = state.clock.elapsedTime;
    const targetScale = expanded ? 1.12 : 1;

    groupRef.current.scale.x = THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      targetScale,
      0.08,
    );
    groupRef.current.scale.y = THREE.MathUtils.lerp(
      groupRef.current.scale.y,
      targetScale,
      0.08,
    );
    groupRef.current.scale.z = THREE.MathUtils.lerp(
      groupRef.current.scale.z,
      targetScale,
      0.08,
    );

    groupRef.current.rotation.y =
      elapsed * (expanded ? 0.11 : 0.07) + pointer.x * 0.28;

    groupRef.current.rotation.x =
      Math.sin(elapsed * 0.18) * 0.08 - pointer.y * 0.18;

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      pointer.x * (expanded ? 0.24 : 0.14),
      0.04,
    );

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      pointer.y * (expanded ? 0.18 : 0.1),
      0.04,
    );

    if (innerRef.current) {
      innerRef.current.scale.setScalar(
        1 + Math.sin(elapsed * 1.2) * (expanded ? 0.028 : 0.014),
      );
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.45, 54, 54]} />
        <meshBasicMaterial
          color="#f97316"
          wireframe
          transparent
          opacity={expanded ? 0.78 : 0.66}
        />
      </mesh>

      <mesh ref={innerRef}>
        <sphereGeometry args={[0.88, 44, 44]} />
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={expanded ? 0.26 : 0.18}
        />
      </mesh>

      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[index % 7 === 0 ? 0.05 : 0.03, 10, 10]} />
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
            opacity={expanded ? 0.45 : 0.32}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig({
  active,
  expanded,
}: {
  active: boolean;
  expanded: boolean;
}) {
  const { camera, pointer } = useThree();

  useFrame(() => {
    if (!active) return;

    const targetZ = expanded ? 7.2 : 7.8;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * (expanded ? 0.22 : 0.14),
      0.025,
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * (expanded ? 0.16 : 0.1),
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
      onPointerEnter={() => setExpanded(true)}
      onPointerLeave={() => setExpanded(false)}
      onPointerDown={() => setExpanded(true)}
      onPointerUp={() => setExpanded(false)}
      className="h-[680px] w-full cursor-pointer overflow-visible"
    >
      <Canvas
        frameloop={isVisible ? "always" : "demand"}
        camera={{ position: [0, 0, 7.8], fov: 42 }}
        dpr={[1, 1]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
        }}
        style={{
          background: "transparent",
          overflow: "visible",
        }}
      >
        <ambientLight intensity={1} />

        <Float speed={1.1} rotationIntensity={0.22} floatIntensity={0.55}>
          <DataOrb active={isVisible} expanded={expanded} />
        </Float>

        <CameraRig active={isVisible} expanded={expanded} />

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