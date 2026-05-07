"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Track() {
  const railGeometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-8, -1.3, 3),
      new THREE.Vector3(-5, -1.2, 0),
      new THREE.Vector3(-2, -1.1, -3),
      new THREE.Vector3(1, -1.15, -6),
      new THREE.Vector3(4, -1.1, -9),
      new THREE.Vector3(7, -1.2, -12),
    ]);

    return new THREE.TubeGeometry(curve, 60, 0.022, 6, false);
  }, []);

  const secondRailGeometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-7.6, -1.3, 3),
      new THREE.Vector3(-4.6, -1.2, 0),
      new THREE.Vector3(-1.6, -1.1, -3),
      new THREE.Vector3(1.4, -1.15, -6),
      new THREE.Vector3(4.4, -1.1, -9),
      new THREE.Vector3(7.4, -1.2, -12),
    ]);

    return new THREE.TubeGeometry(curve, 60, 0.022, 6, false);
  }, []);

  const sleepers = useMemo(() => {
    return Array.from({ length: 16 }, (_, index) => {
      const t = index / 15;
      const x = THREE.MathUtils.lerp(-7.8, 7.2, t);
      const z = THREE.MathUtils.lerp(2.6, -11.8, t);
      const y = -1.34 + Math.sin(t * Math.PI * 2) * 0.035;

      return { x, y, z, rotation: -0.72 };
    });
  }, []);

  return (
    <group>
      <mesh geometry={railGeometry}>
        <meshStandardMaterial
          color="#dffdf7"
          emissive="#2dd4bf"
          emissiveIntensity={0.18}
          roughness={0.45}
        />
      </mesh>

      <mesh geometry={secondRailGeometry}>
        <meshStandardMaterial
          color="#dffdf7"
          emissive="#2dd4bf"
          emissiveIntensity={0.18}
          roughness={0.45}
        />
      </mesh>

      {sleepers.map((sleeper, index) => (
        <mesh
          key={index}
          position={[sleeper.x, sleeper.y, sleeper.z]}
          rotation={[0, sleeper.rotation, 0]}
        >
          <boxGeometry args={[1.05, 0.055, 0.14]} />
          <meshStandardMaterial color="#0f3a6d" roughness={0.75} />
        </mesh>
      ))}
    </group>
  );
}

function Train({ scrollProgress }: { scrollProgress: number }) {
  const trainRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!trainRef.current) return;

    const progress = THREE.MathUtils.clamp(scrollProgress, 0, 1);

    const x = THREE.MathUtils.lerp(-6.8, 4.7, progress);
    const z = THREE.MathUtils.lerp(2.1, -8.7, progress);
    const y = -0.78 + Math.sin(state.clock.elapsedTime * 1.6) * 0.01;

    trainRef.current.position.set(x, y, z);
    trainRef.current.rotation.y = -0.72 + progress * 0.1;
  });

  return (
    <group ref={trainRef}>
      <mesh position={[0, 0.22, 0]}>
        <boxGeometry args={[1.1, 0.55, 1.8]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#dffdf7"
          emissiveIntensity={0.05}
          roughness={0.32}
          metalness={0.1}
        />
      </mesh>

      <mesh position={[0, 0.62, -0.32]}>
        <boxGeometry args={[0.82, 0.42, 0.8]} />
        <meshStandardMaterial
          color="#123cdb"
          emissive="#123cdb"
          emissiveIntensity={0.08}
          roughness={0.36}
        />
      </mesh>

      <mesh position={[0, 0.45, 0.72]}>
        <boxGeometry args={[0.72, 0.28, 0.12]} />
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#2dd4bf"
          emissiveIntensity={0.42}
        />
      </mesh>

      {[-0.42, 0.42].map((x) =>
        [-0.55, 0.55].map((z) => (
          <mesh
            key={`${x}-${z}`}
            position={[x, -0.1, z]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.14, 0.14, 0.07, 12]} />
            <meshStandardMaterial color="#061a5f" roughness={0.55} />
          </mesh>
        )),
      )}

      <pointLight
        position={[0, 0.45, 1.15]}
        color="#2dd4bf"
        intensity={0.75}
        distance={3.2}
      />
    </group>
  );
}

function StationMarkers() {
  const markers = useMemo(() => {
    return [
      { x: -6.8, z: 2.1, label: "01" },
      { x: -4.8, z: 0.2, label: "02" },
      { x: -2.6, z: -2.0, label: "03" },
      { x: -0.5, z: -4.2, label: "04" },
      { x: 1.8, z: -6.2, label: "05" },
      { x: 3.5, z: -7.9, label: "06" },
      { x: 4.9, z: -9.2, label: "07" },
    ];
  }, []);

  return (
    <group>
      {markers.map((marker) => (
        <group key={marker.label} position={[marker.x, -0.55, marker.z]}>
          <mesh>
            <cylinderGeometry args={[0.06, 0.06, 1.0, 12]} />
            <meshStandardMaterial
              color="#2dd4bf"
              emissive="#2dd4bf"
              emissiveIntensity={0.25}
            />
          </mesh>

          <mesh position={[0, 0.65, 0]}>
            <sphereGeometry args={[0.16, 14, 14]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#2dd4bf"
              emissiveIntensity={0.42}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function DataParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, index) => ({
      id: index,
      x: -8 + Math.random() * 16,
      y: -0.2 + Math.random() * 4,
      z: -12 + Math.random() * 16,
      speed: 0.15 + Math.random() * 0.25,
    }));
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.children.forEach((child, index) => {
      child.position.y +=
        Math.sin(state.clock.elapsedTime * particles[index].speed + index) *
        0.0005;
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle) => (
        <mesh key={particle.id} position={[particle.x, particle.y, particle.z]}>
          <sphereGeometry args={[0.022, 6, 6]} />
          <meshStandardMaterial
            color="#99f6e4"
            emissive="#2dd4bf"
            emissiveIntensity={0.35}
            transparent
            opacity={0.62}
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
      THREE.MathUtils.lerp(-3.2, 2.4, progress) + pointer.x * 0.22;
    const targetY =
      THREE.MathUtils.lerp(2.5, 1.6, progress) + pointer.y * 0.12;
    const targetZ = THREE.MathUtils.lerp(6.2, -2.2, progress);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.025);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.025);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.025);

    camera.lookAt(
      THREE.MathUtils.lerp(-2.2, 2.4, progress),
      -0.8,
      THREE.MathUtils.lerp(0.5, -8, progress),
    );
  });

  return null;
}

function SceneContent({ scrollProgress }: { scrollProgress: number }) {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[3, 6, 4]} intensity={1.25} color="#ffffff" />
      <pointLight position={[-4, 2, 2]} intensity={0.8} color="#2dd4bf" />

      <Stars radius={70} depth={26} count={200} factor={2} fade speed={0.18} />

      <Track />
      <Train scrollProgress={scrollProgress} />
      <StationMarkers />
      <DataParticles />
      <CameraRig scrollProgress={scrollProgress} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, -5]}>
        <planeGeometry args={[36, 28]} />
        <meshStandardMaterial color="#061a5f" transparent opacity={0.12} />
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
    <div className="pointer-events-none fixed inset-0 -z-20 opacity-55">
      <Canvas
        camera={{ position: [-3.2, 2.5, 6.2], fov: 45 }}
        dpr={[1, 1.15]}
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