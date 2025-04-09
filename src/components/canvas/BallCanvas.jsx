/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

const Ball = ({ icon }) => {
  const [decal] = useTexture([icon]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={2.35} />
      <directionalLight />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial color="#ffff" metalness={0.5}            // Higher metalness for a metallic look
          roughness={0.2}            // Rough surface
          emissive="#f0f0e9"         // Slight emissive color for a subtle glow
          envMapIntensity={0.1}       />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) {
      console.error("Canvas failed to mount.");
    }
  }, [canvasRef]);

  return (
    <Canvas
      ref={canvasRef}
      frameloop="demand"
      dpr={[2, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense >
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
