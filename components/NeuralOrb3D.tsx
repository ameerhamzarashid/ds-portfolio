"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function createOrbPoints(total: number) {
  const points: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < total; i += 1) {
    const y = 1 - (i / (total - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;

    points.push(new THREE.Vector3(x * 2.25, y * 2.25, z * 2.25));
  }

  return points;
}

function DataOrb() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  const points = useMemo(() => createOrbPoints(56), []);

  const lineGeometries = useMemo(() => {
    return points.slice(0, 24).map((point, index) => {
      const nextPoint = points[(index * 3 + 11) % points.length];
      const curve = new THREE.CatmullRomCurve3([point, nextPoint]);

      return new THREE.TubeGeometry(curve, 6, 0.005, 6, false);
    });
  }, [points]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const elapsed = state.clock.elapsedTime;

    groupRef.current.rotation.y = elapsed * 0.08 + pointer.x * 0.25;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.18) * 0.08 - pointer.y * 0.18;

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      pointer.x * 0.18,
      0.035,
    );

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      pointer.y * 0.14,
      0.035,
    );

    if (innerRef.current) {
      innerRef.current.scale.setScalar(1 + Math.sin(elapsed * 1.1) * 0.025);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.35, 48, 48]} />
        <meshStandardMaterial
          color="#2563eb"
          emissive="#2dd4bf"
          emissiveIntensity={0.28}
          wireframe
          transparent
          opacity={0.58}
        />
      </mesh>

      <mesh ref={innerRef}>
        <sphereGeometry args={[0.82, 40, 40]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#2dd4bf"
          emissiveIntensity={0.45}
          transparent
          opacity={0.16}
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>

      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[index % 7 === 0 ? 0.045 : 0.028, 12, 12]} />
          <meshStandardMaterial
            color={index % 3 === 0 ? "#ffffff" : "#2dd4bf"}
            emissive={index % 3 === 0 ? "#ffffff" : "#2dd4bf"}
            emissiveIntensity={0.55}
          />
        </mesh>
      ))}

      {lineGeometries.map((geometry, index) => (
        <mesh key={`line-${index}`} geometry={geometry}>
          <meshStandardMaterial
            color={index % 2 === 0 ? "#99f6e4" : "#ffffff"}
            emissive="#2dd4bf"
            emissiveIntensity={0.2}
            transparent
            opacity={0.28}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.22, 0.025);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.16, 0.025);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function NeuralOrb3D() {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-3xl">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 44 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[4, 4, 4]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-4, -2, 3]} intensity={1.2} color="#2dd4bf" />

        <Stars radius={70} depth={30} count={450} factor={2.2} fade speed={0.35} />

        <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.7}>
          <DataOrb />
        </Float>

        <CameraRig />

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