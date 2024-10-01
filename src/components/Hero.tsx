import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, SpotLight } from '@react-three/drei';
import * as THREE from 'three';

const ToiletPaperRoll: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02; // Increased rotation speed
    }
  });

  // Create a procedural texture for the toilet paper
  const paperTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    if (context) {
      context.fillStyle = '#F0F0F0';
      context.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 1000; i++) {
        context.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.03})`;
        context.beginPath();
        context.arc(Math.random() * 256, Math.random() * 256, Math.random() * 2, 0, Math.PI * 2);
        context.fill();
      }
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <group ref={groupRef} rotation={[Math.PI / 4, 0, 0]}>
      {/* Cardboard tube */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1.1, 32]} />
        <meshStandardMaterial 
          color="#8B4513"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Toilet paper roll */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial 
          color="#F0F0F0"
          roughness={0.5}
          metalness={0.1}
          map={paperTexture}
        />
      </mesh>

      {/* Paper texture */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.501, 0.501, 1.01, 32, 1, true]} />
        <meshStandardMaterial 
          color="#FFFFFF"
          side={THREE.DoubleSide}
          wireframe
          transparent
          opacity={0.3}
          roughness={0.7}
        />
      </mesh>
    </group>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="bg-black py-16 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Experience Ultimate Comfort</h1>
          <p className="text-xl mb-6">
            Discover our premium toilet paper, designed for softness and durability.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-64 md:h-96">
            <Canvas camera={{ position: [0, 2, 4], fov: 50 }}>
              <ambientLight intensity={0.3} />
              <pointLight position={[5, 5, 5]} intensity={0.8} />
              <pointLight position={[-5, -5, -5]} intensity={0.5} />
              <SpotLight
                position={[0, 5, 0]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={[2048, 2048]}
              />
              <ToiletPaperRoll />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;