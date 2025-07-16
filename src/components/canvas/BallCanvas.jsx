/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

const LogoCard = ({ icon }) => {
  const [texture] = useTexture([icon]);

  return (
    <Float speed={1.2} rotationIntensity={1} floatIntensity={1.3}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 0, 2]} intensity={1.2} />
      <mesh scale={[2,3, 0.2]}>
        <planeGeometry args={[3.5, 2]} />
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={1}
          metalness={0.1}
          roughness={0.15}
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
};

const LogoCanvas = ({ icon }) => {
  const canvasRef = useRef();

  return (
    <Canvas
      ref={canvasRef}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        backgroundColor: "#0000",
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} enableRotate={false} />
        <LogoCard icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default LogoCanvas;
