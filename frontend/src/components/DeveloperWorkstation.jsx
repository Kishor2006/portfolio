import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, RoundedBox, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Laptop with Code Screen
function Laptop() {
  const laptopRef = useRef();
  
  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={laptopRef} position={[0, -0.5, 0]}>
      {/* Laptop Base */}
      <RoundedBox args={[3, 0.1, 2.2]} radius={0.05} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.8}
          roughness={0.2}
          emissive="#0a0a1e"
          emissiveIntensity={0.3}
        />
      </RoundedBox>

      {/* Laptop Screen */}
      <RoundedBox args={[2.8, 1.8, 0.08]} radius={0.05} position={[0, 1.2, -0.9]} rotation={[-0.2, 0, 0]}>
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
        />
      </RoundedBox>

      {/* Screen Display - Code Editor */}
      <mesh position={[0, 1.2, -0.85]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[2.6, 1.6]} />
        <meshStandardMaterial
          color="#1e1e1e"
          emissive="#0d1117"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Code Lines Effect */}
      <CodeLines position={[0, 1.2, -0.84]} rotation={[-0.2, 0, 0]} />

      {/* Screen Glow */}
      <mesh position={[0, 1.2, -0.85]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[2.8, 1.8]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Keyboard */}
      <RoundedBox args={[2.4, 0.05, 1.6]} radius={0.02} position={[0, 0.08, 0.2]}>
        <meshStandardMaterial
          color="#2a2a3e"
          metalness={0.7}
          roughness={0.3}
        />
      </RoundedBox>
    </group>
  );
}

// Code Lines Component
function CodeLines({ position, rotation }) {
  const linesRef = useRef();
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, i) => {
        line.material.opacity = 0.3 + Math.sin(state.clock.getElapsedTime() * 0.5 + i * 0.3) * 0.1;
      });
    }
  });

  return (
    <group ref={linesRef} position={position} rotation={rotation}>
      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[-1, 0.6 - i * 0.12, 0.01]}>
          <planeGeometry args={[2, 0.08]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#569cd6" : i % 3 === 1 ? "#00d4ff" : "#b030ff"}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating Tech Card
function TechCard({ position, text, icon, color, delay = 0 }) {
  const cardRef = useRef();
  
  useFrame((state) => {
    if (cardRef.current) {
      const time = state.clock.getElapsedTime() + delay;
      cardRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1;
      cardRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
    }
  });

  return (
    <group ref={cardRef} position={position}>
      {/* Card Background */}
      <RoundedBox args={[0.8, 0.8, 0.1]} radius={0.1}>
        <meshStandardMaterial
          color="#0a0a1e"
          transparent
          opacity={0.6}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </RoundedBox>

      {/* Card Border Glow */}
      <RoundedBox args={[0.85, 0.85, 0.08]} radius={0.1}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </RoundedBox>

      {/* Icon/Text using Text component */}
      <Text
        position={[0, 0.1, 0.06]}
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
        maxWidth={0.7}
      >
        {icon}
      </Text>

      {/* Label */}
      <Text
        position={[0, -0.2, 0.06]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={0.7}
      >
        {text}
      </Text>
    </group>
  );
}

// Circular Platform
function Platform() {
  const platformRef = useRef();
  
  useFrame((state) => {
    if (platformRef.current) {
      platformRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={platformRef} position={[0, -1.2, 0]}>
      {/* Main Platform */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.15, 64]} />
        <meshStandardMaterial
          color="#0a0a1e"
          metalness={0.9}
          roughness={0.1}
          emissive="#00d4ff"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Platform Rings */}
      {[2.6, 2.8, 3.0].map((radius, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
          <ringGeometry args={[radius, radius + 0.02, 64]} />
          <meshBasicMaterial
            color="#00d4ff"
            transparent
            opacity={0.4 - i * 0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Glow Effect */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <circleGeometry args={[3, 64]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// Connecting Lines
function ConnectingLines() {
  const linesRef = useRef();
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, i) => {
        line.material.opacity = 0.3 + Math.sin(state.clock.getElapsedTime() * 0.5 + i) * 0.2;
      });
    }
  });

  const lines = [
    { start: [-1.5, 1.5, 0], end: [-2, 2.5, 0.5] },
    { start: [1.5, 1.5, 0], end: [2, 2.5, 0.5] },
    { start: [0, 2, 0], end: [0, 3, 0] },
    { start: [-1, 0.5, 0], end: [-2.5, 0, -0.5] },
    { start: [1, 0.5, 0], end: [2.5, 0, -0.5] },
  ];

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => {
        const start = new THREE.Vector3(...line.start);
        const end = new THREE.Vector3(...line.end);
        const distance = start.distanceTo(end);
        const direction = end.clone().sub(start).normalize();
        const midpoint = start.clone().add(end).multiplyScalar(0.5);

        return (
          <mesh key={i} position={midpoint}>
            <cylinderGeometry args={[0.01, 0.01, distance, 8]} />
            <meshBasicMaterial
              color="#00d4ff"
              transparent
              opacity={0.4}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Particles
function Particles() {
  const particlesRef = useRef();
  
  const particleCount = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 4 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00d4ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Database Icon
function DatabaseIcon({ position }) {
  const dbRef = useRef();
  
  useFrame((state) => {
    if (dbRef.current) {
      dbRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5 + 2) * 0.1;
    }
  });

  return (
    <group ref={dbRef} position={position}>
      {[0, 0.2, 0.4].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
          <meshStandardMaterial
            color="#336791"
            emissive="#336791"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main Scene
function WorkstationScene() {
  return (
    <group>
      {/* Platform */}
      <Platform />

      {/* Laptop */}
      <Laptop />

      {/* Tech Cards */}
      <TechCard position={[-2, 2.5, 0.5]} text="React" icon="⚛" color="#00d4ff" delay={0} />
      <TechCard position={[2, 2.5, 0.5]} text="Node.js" icon="◐" color="#68a063" delay={0.5} />
      <TechCard position={[0, 3, 0]} text="API" icon="{ }" color="#b030ff" delay={1} />
      <TechCard position={[-2.5, 0, -0.5]} text="</>" icon="</>" color="#00f0ff" delay={1.5} />
      <TechCard position={[2.5, 0, -0.5]} text="Code" icon="⌘" color="#ff00ff" delay={2} />

      {/* Database */}
      <DatabaseIcon position={[0, -0.3, 1.5]} />

      {/* Connecting Lines */}
      <ConnectingLines />

      {/* Particles */}
      <Particles />

      {/* Lighting */}
      <pointLight position={[0, 3, 2]} intensity={2} color="#00d4ff" distance={8} />
      <pointLight position={[-3, 1, 1]} intensity={1.5} color="#b030ff" distance={6} />
      <pointLight position={[3, 1, 1]} intensity={1.5} color="#00f0ff" distance={6} />
      <pointLight position={[0, -1, 2]} intensity={2} color="#00d4ff" distance={5} />
      <spotLight
        position={[0, 5, 0]}
        angle={0.6}
        penumbra={1}
        intensity={1}
        color="#00ccff"
      />
      <ambientLight intensity={0.2} />
    </group>
  );
}

export default function DeveloperWorkstation() {
  return (
    <div className="w-full h-full relative">
      {/* Dark backdrop for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-800/70 to-transparent rounded-3xl" />
      
      <Canvas
        camera={{ position: [0, 1, 6], fov: 50 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <WorkstationScene />
      </Canvas>
      
      {/* Additional foreground glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl" />
      </div>
    </div>
  );
}
