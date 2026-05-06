"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DataOrb() {
  const groupRef = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const temp = [];

    for (let i = 0; i < 80; i += 1) {
      const radius = 2.2 + Math.random() * 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      temp.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi),
        ),
      );
    }

    return temp;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.35, 64, 64]} />
        <meshStandardMaterial
          color="#123cdb"
          emissive="#0f766e"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.62}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.85, 64, 64]} />
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#2dd4bf"
          emissiveIntensity={0.8}
          transparent
          opacity={0.18}
        />
      </mesh>

      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#ffffff" : "#2dd4bf"}
            emissive={index % 2 === 0 ? "#ffffff" : "#2dd4bf"}
            emissiveIntensity={0.7}
          />
        </mesh>
      ))}

      {points.slice(0, 38).map((point, index) => {
        const nextPoint = points[(index * 2 + 11) % points.length];
        const curve = new THREE.CatmullRomCurve3([point, nextPoint]);
        const tubeGeometry = new THREE.TubeGeometry(curve, 8, 0.006, 8, false);

        return (
          <mesh key={`line-${index}`} geometry={tubeGeometry}>
            <meshStandardMaterial
              color="#2dd4bf"
              emissive="#2dd4bf"
              emissiveIntensity={0.35}
              transparent
              opacity={0.35}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function NeuralOrb3D() {
  return (
    <div className="h-[420px] w-full overflow-hidden rounded-3xl">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[4, 4, 4]} intensity={2.4} color="#ffffff" />
        <pointLight position={[-4, -2, 3]} intensity={1.6} color="#2dd4bf" />
        <Stars radius={80} depth={40} count={1400} factor={3} fade speed={0.8} />

        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
          <DataOrb />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}