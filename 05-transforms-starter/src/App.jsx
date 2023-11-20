import { Canvas } from "@react-three/fiber";

import * as THREE from "three";

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 8] }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 3, 5]} intensity={0.5} />

      {/* Objects */}
      <mesh
        position-x={-3}
        scale={[1, 0.5, 0.5]}
        rotation={[0, THREE.MathUtils.degToRad(30), 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh rotation-y={Math.PI / 4}>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh
        position-x={3}
        scale={2}
        rotation-y={Math.PI / 4}
        rotation-z={Math.PI / 4}>
        <boxGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  );
}

export default App;
