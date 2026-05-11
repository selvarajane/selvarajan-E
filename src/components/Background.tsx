import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, ScrollControls, useScroll, Float, MeshDistortMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function SlidingPanels() {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const offset = scroll.offset;
    if (groupRef.current) {
      // Panels slide horizontally based on scroll
      groupRef.current.position.x = -offset * 10 + 5;
      groupRef.current.rotation.y = offset * Math.PI * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[i * 4 - 8, 0, -5]} rotation={[0, 0.5, 0]}>
          <planeGeometry args={[3, 10]} />
          <meshStandardMaterial
            color="#3b82f6"
            transparent
            opacity={0.05}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingLiquid() {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<any>(null!);

  useFrame((state, delta) => {
    const offset = scroll.offset;
    
    // Smooth organic rotation
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
    
    // React to scroll
    meshRef.current.position.y = Math.sin(offset * Math.PI) * 2;
    meshRef.current.position.x = Math.cos(offset * Math.PI) * 3;
    meshRef.current.scale.setScalar(1 + Math.sin(offset * Math.PI) * 0.5);

    // Liquid distortion
    materialRef.current.distort = 0.4 + offset * 0.6;
    materialRef.current.speed = 2 + offset * 3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 20]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#3b82f6"
          emissive="#1d4ed8"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={1}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const scroll = useScroll();
  const pointsRef = useRef<any>();
  
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 2.5 }) as Float32Array, []);

  useFrame((state) => {
    const offset = scroll.offset;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = offset * Math.PI;
      pointsRef.current.rotation.x = Math.sin(offset * Math.PI * 0.5) * 0.2;
    }
    
    // Parallax camera movement
    state.camera.position.x = Math.sin(offset * Math.PI) * 3;
    state.camera.position.y = Math.cos(offset * Math.PI) * 2;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <SlidingPanels />
      <FloatingLiquid />
      <group>
        <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#3b82f6"
            size={0.005}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.3}
          />
        </Points>
      </group>

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[-5, -5, -5]} color="#3b82f6" intensity={2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
    </>
  );
}

const Background = () => {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ScrollControls pages={7} damping={0.1}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Background;
