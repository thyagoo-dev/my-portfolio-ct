import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<any>();
  
  // Generate particles
  const [positions] = useMemo(() => {
    const points = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
        const radius = 8;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        
        points[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        points[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [points];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
        ref.current.rotation.x = time * 0.02;
        ref.current.rotation.y = time * 0.01;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f59e0b"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function OrganicSphere() {
    return (
        <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1, 100, 100]} />
            <MeshDistortMaterial
                color="#f59e0b"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0}
                metalness={1}
            />
        </mesh>
    );
}

function FloatingShapes() {
    return (
        <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
            <OrganicSphere />
            
            <mesh position={[4, 2, -2]}>
                <octahedronGeometry args={[0.4]} />
                <meshStandardMaterial color="#f59e0b" wireframe />
            </mesh>
            <mesh position={[-4, -2, -3]}>
                <torusGeometry args={[0.3, 0.05, 16, 100]} />
                <meshStandardMaterial color="#ffffff" wireframe />
            </mesh>
        </Float>
    );
}

export const Hero3D: React.FC = () => {
  return (
    <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};
