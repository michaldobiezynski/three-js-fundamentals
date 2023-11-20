import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 3] }}>
      <mesh>
        {/* <boxGeometry args={[1, 1, 1]} /> */}
        <sphereGeometry args={[1, 32, 32]} />
        {/* <meshBasicMaterial color={0x00ff00} /> */}
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default App;
