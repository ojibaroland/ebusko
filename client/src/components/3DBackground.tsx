import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, PresentationControls } from '@react-three/drei';

function Model() {
  // A simple cube mesh for the background
  const meshRef = useRef<any>();
  
  // Animate the cube rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.5} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#2B9BFF" 
          wireframe={true}
          emissive="#2B9BFF"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function BackgroundScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.25 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <PresentationControls
        global
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 300 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Model />
      </PresentationControls>
    </Canvas>
  );
}