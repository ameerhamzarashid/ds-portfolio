"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type ProgressRef = {
  current: number;
};

function Track() {
  const railOne = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-7, -1.2, 2),
      new THREE.Vector3(-4, -1.15, -1),
      new THREE.Vector3(-1, -1.15, -4),
      new THREE.Vector3(2, -1.15, -7),
      new THREE.Vector3(5, -1.2, -10),
    ]);

    return new THREE.TubeGeometry(curve, 36, 0.016, 5, false);
  }, []);

  const railTwo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-6.6, -1.2, 2),
      new THREE.Vector3(-3.6, -1.15, -1),
      new THREE.Vector3(-0.6, -1.15, -4),
      new THREE.Vector3(2.4, -1.15, -7),
      new THREE.Vector3(5.4, -1.2, -10),
    ]);

    return new THREE.TubeGeometry(curve, 36, 0.016, 5, false);
  }, []);

  return (
    <group>
      <mesh geometry={railOne}>
        <meshBasicMaterial color="#dffdf7" transparent opacity={0.45} />
      </mesh>

      <mesh geometry={railTwo}>
        <meshBasicMaterial color="#dffdf7" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

function Train({ progressRef }: { progressRef: ProgressRef }) {
  const trainRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!trainRef.current) return;

    const progress = THREE.MathUtils.clamp(progressRef.current, 0, 1);

    const x = THREE.MathUtils.lerp(-5.8, 4.1, progress);
    const z = THREE.MathUtils.lerp(1.2, -8.7, progress);
    const y = -0.72 + Math.sin(state.clock.elapsedTime * 1.1) * 0.006;

    trainRef.current.position.set(x, y, z);
    trainRef.current.rotation.y = -0.72;
  });

  return (
    <group ref={trainRef}>
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.9, 0.4, 1.35]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0, 0.5, -0.24]}>
        <boxGeometry args={[0.65, 0.28, 0.55]} />
        <meshBasicMaterial color="#123cdb" />
      </mesh>

      <mesh position={[0, 0.34, 0.58]}>
        <boxGeometry args={[0.52, 0.18, 0.07]} />
        <meshBasicMaterial color="#2dd4bf" />
      </mesh>
    </group>
  );
}

function DataMist() {
  const points = useMemo(() => {
    return [
      [-5.5, 0.4, -1.2],
      [-3.8, 1.1, -3.1],
      [-2.2, 0.8, -5.0],
      [0.5, 1.5, -6.2],
      [2.8, 0.6, -8.3],
      [4.4, 1.2, -9.8],
      [-6.2, 1.7, 0.3],
      [1.4, 2.1, -4.7],
      [3.5, 1.8, -6.8],
      [-1.5, 1.9, -2.6],
    ] as [number, number, number][];
  }, []);

  return (
    <group>
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.025, 6, 6]} />
          <meshBasicMaterial color="#99f6e4" transparent opacity={0.45} />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig({ progressRef }: { progressRef: ProgressRef }) {
  const { camera, pointer } = useThree();

  useFrame(() => {
    const progress = THREE.MathUtils.clamp(progressRef.current, 0, 1);

    const targetX =
      THREE.MathUtils.lerp(-2.8, 2.2, progress) + pointer.x * 0.08;
    const targetY =
      THREE.MathUtils.lerp(2.2, 1.6, progress) + pointer.y * 0.05;
    const targetZ = THREE.MathUtils.lerp(5.6, -1.4, progress);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.018);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.018);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.018);

    camera.lookAt(
      THREE.MathUtils.lerp(-1.8, 2.1, progress),
      -0.75,
      THREE.MathUtils.lerp(0.2, -7.2, progress),
    );
  });

  return null;
}

function SceneContent({ progressRef }: { progressRef: ProgressRef }) {
  return (
    <>
      <Track />
      <Train progressRef={progressRef} />
      <DataMist />
      <CameraRig progressRef={progressRef} />
    </>
  );
}

export default function JourneyScene3D() {
  const progressRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        progressRef.current = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

        ticking = false;
      });
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 opacity-25">
      <Canvas
        camera={{ position: [-2.8, 2.2, 5.6], fov: 45 }}
        dpr={[1, 1]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <SceneContent progressRef={progressRef} />
      </Canvas>
    </div>
  );
}