import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useFrame } from "@react-three/fiber";


const Earth = () => {
  const loader = new GLTFLoader();
  const [model, setModel] = React.useState(null);
  
  React.useEffect(() => {
    loader.load("/google/scene.gltf", (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  return model ? (
    <primitive object={model} scale={[-.13, .13, -0.13]} 
    position-y={-.35} 
    position-x={0}
    rotation-y={0}/>
  ) : null;
  
};

const GoogleCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 1,
        far: 100,
        position: [-5, 3, 6]
        
      
      }}
      
    >
      <hemisphereLight intensity={2.19} groundColor="black" />
      <spotLight
        position={[900, 900, 200]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default GoogleCanvas;
