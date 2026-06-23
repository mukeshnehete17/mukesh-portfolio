"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform float uPulse;
  varying float vElevation;
  varying vec3 vNormal;
  void main() {
    vec3 pos = position;
    float noise = sin(pos.x * 3.0 + uTime * 0.5) * cos(pos.y * 3.0 + uTime * 0.4) * sin(pos.z * 3.0 + uTime * 0.6);
    float pulseWave = sin(length(pos) * 8.0 - uTime * 2.0) * 0.08 * uPulse;
    float elevation = noise * 0.06 + pulseWave;
    pos += normal * elevation;
    vElevation = elevation;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform vec3 uGlowColor;
  varying float vElevation;
  varying vec3 vNormal;
  void main() {
    float intensity = 0.5 + 0.5 * vElevation * 8.0;
    vec3 coreColor = mix(uGlowColor, uColor, intensity);
    float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    rim = pow(rim, 2.0) * 0.6;
    vec3 finalColor = coreColor + vec3(1.0, 0.2, 0.2) * rim;
    float pulseGlow = 0.3 + 0.7 * (0.5 + 0.5 * sin(uTime * 0.8));
    gl_FragColor = vec4(finalColor * pulseGlow, 0.9);
  }
`;

function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();

  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    targetRot.current.x = mouse.y * 0.15;
    targetRot.current.y = mouse.x * 0.15;
    currentRot.current.x += (targetRot.current.x - currentRot.current.x) * 0.04;
    currentRot.current.y += (targetRot.current.y - currentRot.current.y) * 0.04;

    if (meshRef.current) {
      meshRef.current.rotation.x = currentRot.current.x + Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      meshRef.current.rotation.y = currentRot.current.y + state.clock.elapsedTime * 0.15;
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      const pulse = 0.5 + 0.5 * Math.sin(state.clock.elapsedTime * 0.6);
      mat.uniforms.uTime.value = state.clock.elapsedTime;
      mat.uniforms.uPulse.value = pulse;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 4]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uPulse: { value: 0 },
          uColor: { value: new THREE.Color("#ff2b2b") },
          uGlowColor: { value: new THREE.Color("#ff6b6b") },
        }}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function OrbitalRings() {
  const ref = useRef<THREE.Group>(null!);
  const { mouse } = useThree();
  const [ringData] = useState(() => [
    { radius: 1.8, tube: 0.008, rotX: 0.2 },
    { radius: 2.2, tube: 0.006, rotX: 0.8 },
    { radius: 2.6, tube: 0.005, rotX: 1.2 },
    { radius: 3.0, tube: 0.004, rotX: 0.5 },
  ]);

  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });

  useFrame(() => {
    targetRot.current.x = mouse.y * 0.08;
    targetRot.current.y = mouse.x * 0.08;
    currentRot.current.x += (targetRot.current.x - currentRot.current.x) * 0.03;
    currentRot.current.y += (targetRot.current.y - currentRot.current.y) * 0.03;
    if (ref.current) {
      ref.current.rotation.x = currentRot.current.x;
      ref.current.rotation.y = currentRot.current.y;
    }
  });

  return (
    <group ref={ref}>
      {ringData.map((ring, i) => (
        <mesh key={i} rotation={[ring.rotX, 0, 0]}>
          <torusGeometry args={[ring.radius, ring.tube, 32, 64]} />
          <meshBasicMaterial color="#ff2b2b" transparent opacity={0.12} />
        </mesh>
      ))}
    </group>
  );
}

function EnergyParticles() {
  const ref = useRef<THREE.Points>(null!);
  const { mouse } = useThree();
  const [particleData] = useState(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.2 + Math.random() * 2.8;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      siz[i] = 0.01 + Math.random() * 0.03;
    }
    return [pos, siz] as const;
  });

  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    targetRot.current.x = mouse.y * 0.12;
    targetRot.current.y = mouse.x * 0.12;
    currentRot.current.x += (targetRot.current.x - currentRot.current.x) * 0.035;
    currentRot.current.y += (targetRot.current.y - currentRot.current.y) * 0.035;
    if (ref.current) {
      ref.current.rotation.x = currentRot.current.x;
      ref.current.rotation.y = currentRot.current.y + state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particleData[0], 3]} />
        <bufferAttribute attach="attributes-size" args={[particleData[1], 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ff2b2b"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function GodRays() {
  const ref = useRef<THREE.Group>(null!);
  const [rays] = useState(() => {
    const count = 12;
    const result = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      result.push({ angle, length: 3 + Math.random() * 2 });
    }
    return result;
  });

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {rays.map((ray, i) => (
        <mesh key={i} rotation={[0, 0, ray.angle]} position={[0, 0, 0]}>
          <planeGeometry args={[0.02, ray.length]} />
          <meshBasicMaterial
            color="#ff2b2b"
            transparent
            opacity={0.04}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <CoreOrb />
      <OrbitalRings />
      <EnergyParticles />
      <GodRays />
    </>
  );
}

export default function AICoreOrb() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div className="h-[80vh] w-[80vh] max-h-[700px] max-w-[700px]">
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}
