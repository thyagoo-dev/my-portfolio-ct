import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  #define PI 3.14159265359

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    float aspect = uResolution.x / uResolution.y;
    
    // Floating Lines Logic
    float lines = 0.0;
    vec2 pos = st * vec2(aspect, 1.0);
    
    // Dynamic line count and scale based on screen width
    float isMobile = step(uResolution.x, 768.0);
    float maxLines = mix(10.0, 6.0, isMobile);
    float verticalScale = mix(0.12, 0.18, isMobile);

    for(float i = 1.0; i < 11.0; i++) {
        if (i > maxLines) break;
        
        float t = uTime * 0.15 + i * 1.5;
        
        // Base sine wave with multiple frequencies
        float y = 0.5 + sin(pos.x * (0.4 + i * 0.05) + t) * 0.2;
        y += sin(pos.x * 2.0 - t * 0.5) * 0.08;
        
        // Vertical offset for each line
        float offset = (i - (maxLines * 0.5)) * verticalScale;
        
        // Mouse/Touch influence
        float dMouse = distance(st, uMouse);
        float mouseEffect = smoothstep(0.5, 0.0, dMouse);
        float bend = sin(st.x * 2.0 + uTime) * mouseEffect * 0.15;
        
        float dist = abs(st.y - (y + offset + bend));
        
        // Dynamic Thickness and Glow
        float thickness = mix(0.0012, 0.0008, isMobile);
        float l = smoothstep(thickness, 0.0, dist);
        float glow = exp(-dist * mix(35.0, 25.0, isMobile)) * 0.5;
        
        lines += (l + glow) * (1.2 / i);
    }

    vec3 lineColor = vec3(1.0, 0.48, 0.0); // Brand Orange
    float alpha = clamp(lines * 0.4, 0.0, 1.0);
    
    gl_FragColor = vec4(lineColor, alpha);
  }
`;

function FloatingLinesMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  const mouseRef = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(size.width, size.height) }
  }), [size]);

  useFrame((state) => {
    if (meshRef.current) {
        const material = meshRef.current.material as THREE.ShaderMaterial;
        material.uniforms.uTime.value = state.clock.getElapsedTime();
        
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
        transparent
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
      <Canvas dpr={[1, 2]}>
        <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={1} />
        <FloatingLinesMesh />
      </Canvas>
    </div>
  );
};
