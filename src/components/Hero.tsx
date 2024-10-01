import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ToiletPaperRoll: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
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
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
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