import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function Voxel({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 * speed) * 0.2;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} position={position} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const points = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
          count={200}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#a855f7" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

const VoxelScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffa040" />
      <pointLight position={[-3, 2, 0]} intensity={0.6} color="#a855f7" />

      {/* Grass blocks */}
      <Voxel position={[-3, 1, -2]} color="#4ade80" speed={0.7} />
      <Voxel position={[3.5, -1, -1]} color="#22c55e" speed={0.9} />

      {/* Stone */}
      <Voxel position={[-1.5, -2, 0]} color="#6b7280" speed={0.5} />
      <Voxel position={[2, 2.5, -3]} color="#9ca3af" speed={0.6} />

      {/* Diamond */}
      <Voxel position={[0, 3, -2]} color="#38bdf8" speed={1.2} />

      {/* Portal block */}
      <Voxel position={[-4, -0.5, -1]} color="#a855f7" speed={0.8} />

      {/* Lava */}
      <Voxel position={[4, 0.5, -2]} color="#f97316" speed={1} />

      <Particles />
    </Canvas>
  );
};

export default VoxelScene;
