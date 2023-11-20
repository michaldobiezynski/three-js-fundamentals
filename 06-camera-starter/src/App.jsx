import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { City } from "./components/City";

function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      {/* IGNORE FOR NOW */}
      <City />
      <Environment preset="city" />
    </Canvas>
  );
}

export default App;
