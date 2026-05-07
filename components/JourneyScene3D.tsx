"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Track() {
  const railOne = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-7, -1.2, 2),
      new THREE.Vector3(-4, -1.15, -1),
      new THREE.Vector3(-1, -1.15, -4),
      new THREE.Vector3(2, -1.15, -7),
      new THREE.Vector3(5, -1.2, -10),
    ]);

    return new THREE.TubeGeometry(curve, 56, 0.018, 6, false);
  }, []);

  const railTwo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-6.6, -1.2, 2),
      new THREE.Vector3(-3.6, -1.15, -1),
      new THREE.Vector3(-0.6, -1.15, -4),
      new THREE.Vector3(2.4, -1.15, -7),
      new THREE.Vector3(5.4, -1.2, -10),
    ]);

    return new THREE.TubeGeometry(curve, 56, 0.018, 6, false);
  }, []);

  return (
    <group>
      <mesh geometry={railOne}>
        <meshStandardMaterial
          color="#e0fffb"
          emissive="#2dd4bf"
          emissiveIntensity={0.16}
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh geometry={railTwo}>
        <meshStandardMaterial
          color="#e0fffb"
          emissive="#2dd4bf"
          emissiveIntensity={0.16}
          transparent
          opacity={0.65}
        />
      </mesh>
    </group>
  );
}

function Train({ scrollProgress }: { scrollProgress: number }) {
  const trainRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!trainRef.current) return;

    const progress = THREE.MathUtils.clamp(scrollProgress, 0, 1);

    const x = THREE.MathUtils.lerp(-5.8, 4.1, progress);
    const z = THREE.MathUtils.lerp(1.2, -8.7, progress);
    const y = -0.72 + Math.sin(state.clock.elapsedTime * 1.3) * 0.008;

    trainRef.current.position.set(x, y, z);
    trainRef.current.rotation.y = -0.72;
  });

  return (
    <group ref={trainRef}>
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.95, 0.42, 1.45]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#e0fffb"
          emissiveIntensity={0.04}
          roughness={0.35}
        />
      </mesh>

      <mesh position={[0, 0.52, -0.25]}>
        <boxGeometry args={[0.7, 0.32, 0.62]} />
        <meshStandardMaterial
          color="#123cdb"
          emissive="#123cdb"
          emissiveIntensity={0.06}
          roughness={0.4}
        />
      </mesh>

      <mesh position={[0, 0.36, 0.63]}>
        <boxGeometry args={[0.58, 0.2, 0.08]} />
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#2dd4bf"
          emissiveIntensity={0.35}
        />
      </mesh>
    </group>
  );
}

function DataMist() {
  const points = useMemo(() => {
    return Array.from({ length: 28 }, (_, index) => ({
      id: index,
      x: -7 + Math.random() * 14,
      y: -0.1 + Math.random() * 3.2,
      z: -10 + Math.random() * 12,
      speed: 0.12 + Math.random() * 0.18,
    }));
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.children.forEach((child, index) => {
      child.position.y +=
        Math.sin(state.clock.elapsedTime * points[index].speed + index) *
        0.00035;
    });
  });

  return (
    <group ref={groupRef}>
      {points.map((point) => (
        <mesh key={point.id} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.02, 6, 6]} />
          <meshStandardMaterial
            color="#99f6e4"
            emissive="#2dd4bf"
            emissiveIntensity={0.24}
            transparent
            opacity={0.45}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig({ scrollProgress }: { scrollProgress: number }) {
  const { camera, pointer } = useThree();

  useFrame(() => {
    const progress = THREE.MathUtils.clamp(scrollProgress, 0, 1);

    const targetX =
      THREE.MathUtils.lerp(-2.8, 2.2, progress) + pointer.x * 0.12;
    const targetY =
      THREE.MathUtils.lerp(2.2, 1.6, progress) + pointer.y * 0.08;
    const targetZ = THREE.MathUtils.lerp(5.6, -1.4, progress);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.022);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.022);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.022);

    camera.lookAt(
      THREE.MathUtils.lerp(-1.8, 2.1, progress),
      -0.75,
      THREE.MathUtils.lerp(0.2, -7.2, progress),
    );
  });

  return null;
}

function SceneContent({ scrollProgress }: { scrollProgress: number }) {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[3, 6, 4]} intensity={1.05} color="#ffffff" />
      <pointLight position={[-4, 2, 2]} intensity={0.55} color="#2dd4bf" />

      <Stars radius={65} depth={24} count={150} factor={1.8} fade speed={0.12} />

      <Track />
      <Train scrollProgress={scrollProgress} />
      <DataMist />
      <CameraRig scrollProgress={scrollProgress} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.35, -4]}>
        <planeGeometry args={[32, 24]} />
        <meshStandardMaterial color="#061a5f" transparent opacity={0.08} />
      </mesh>
    </>
  );
}

export default function JourneyScene3D() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frameId: number | null = null;

    const updateScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

        setScrollProgress(progress);
        frameId = null;
      });
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 opacity-35">
      <Canvas
        camera={{ position: [-2.8, 2.2, 5.6], fov: 45 }}
        dpr={[1, 1.1]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <SceneContent scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}