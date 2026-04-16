import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;

    // Background Gradient
    vec3 color1 = vec3(0.05, 0.05, 0.05); // Dark Gray
    vec3 color2 = vec3(0.02, 0.02, 0.02); // Near Black
    vec3 backColor = mix(color1, color2, st.y + sin(uTime * 0.2) * 0.1);

    // Floating Lines Logic
    float lines = 0.0;
    for(float i = 1.0; i < 15.0; i++) {
        float speed = i * 0.1;
        float y = st.y + sin(st.x * (2.0 + i * 0.5) + uTime * speed + uMouse.x * 2.0) * (0.05 + 0.02 * i);
        float line = smoothstep(0.002, 0.0, abs(y - (i * 0.07)));
        lines += line * (1.5 / i);
    }

    // Interactive Displacement (Mouse Bending)
    float dist = distance(st, uMouse * vec2(uResolution.x/uResolution.y, 1.0));
    float strength = smoothstep(0.5, 0.0, dist);
    lines *= (1.0 + strength * 2.0);

    vec3 lineColor = vec3(1.0, 0.48, 0.0); // Orange lines for brand match
    if (dist < 0.2) {
        lineColor = mix(lineColor, vec3(1.0, 0.8, 0.5), strength);
    }

    vec3 finalColor = mix(backColor, lineColor * 0.6, lines * 0.3);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function FloatingLinesMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  const mouseRef = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(size.width, size.height) }
  }), [size]);

  useFrame((state) => {
    if (meshRef.current) {
        const material = meshRef.current.material as THREE.ShaderMaterial;
        material.uniforms.uTime.value = state.clock.getElapsedTime();
        
        // Smooth mouse transition
        const targetX = (state.mouse.x + 1) / 2;
        const targetY = (state.mouse.y + 1) / 2;
        mouseRef.current.x = THREE.MathUtils.lerp(mouseRef.current.x, targetX, 0.05);
        mouseRef.current.y = THREE.MathUtils.lerp(mouseRef.current.y, targetY, 0.05);
        
        material.uniforms.uMouse.value.copy(mouseRef.current);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export const FloatingLines: React.FC = () => {
  return (
    <div className="floating-lines-container" style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <FloatingLinesMesh />
      </Canvas>
    </div>
  );
};
