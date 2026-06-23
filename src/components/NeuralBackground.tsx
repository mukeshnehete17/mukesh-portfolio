"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function generatePositions(count: number) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    pos[i3] = (Math.random() - 0.5) * 20;
    pos[i3 + 1] = (Math.random() - 0.5) * 20;
    pos[i3 + 2] = (Math.random() - 0.5) * 10;
    const intensity = 0.2 + Math.random() * 0.8;
    col[i3] = intensity;
    col[i3 + 1] = intensity * 0.15;
    col[i3 + 2] = intensity * 0.15;
  }
  return [pos, col] as const;
}

function generateConnections(count: number) {
  const pos: number[] = [];
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 16;
    const y = (Math.random() - 0.5) * 16;
    const z = (Math.random() - 0.5) * 8;
    pos.push(
      x, y, z,
      x + (Math.random() - 0.5) * 4,
      y + (Math.random() - 0.5) * 4,
      z + (Math.random() - 0.5) * 3
    );
  }
  return new Float32Array(pos);
}

function Particles() {
  const meshRef = useRef<THREE.Points>(null!);
  const { mouse } = useThree();
  const [particleData] = useState(() => generatePositions(1500));
  const [positions, colors] = particleData;

  const mouseVec = useRef(new THREE.Vector2(0, 0));
  const targetVec = useRef(new THREE.Vector2(0, 0));

  useFrame((state, delta) => {
    targetVec.current.x = mouse.x * 0.5;
    targetVec.current.y = -mouse.y * 0.5;
    mouseVec.current.lerp(targetVec.current, 2 * delta);

    if (meshRef.current) {
      meshRef.current.rotation.x +=
        (mouseVec.current.y * 0.03 - meshRef.current.rotation.x) * 0.02;
      meshRef.current.rotation.y +=
        (mouseVec.current.x * 0.03 - meshRef.current.rotation.y) * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function Connections() {
  const ref = useRef<THREE.LineSegments>(null!);
  const [positions] = useState(() => generateConnections(120));

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.06) * 0.1;
    }
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#ff2b2b" transparent opacity={0.08} />
    </lineSegments>
  );
}

function Scene() {
  return (
    <>
      <Particles />
      <Connections />
    </>
  );
}

export default function NeuralBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
