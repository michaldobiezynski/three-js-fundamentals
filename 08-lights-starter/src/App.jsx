import { OrbitControls, useHelper, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

const Lights = () => {
  const ref = useRef();

  // const helper = useHelper(ref, THREE.PointLightHelper, 0.5, "red");
  // const { color, intensity, distance, decay } = useControls({
  //   color: "#ff0000",
  //   intensity: 0.5,
  //   distance: 3,
  //   decay: 2,
  // });
  const helper = useHelper(ref, THREE.SpotLightHelper, 0.5, "red");
  const { color, intensity, distance, attenuation, anglePower, angle } =
    useControls({
      color: "#ff0000",
      intensity: 0.5,
      distance: 6,
      attenuation: 2.2,
      angle: 1,
      anglePower: 1,
    });

  return (
    // <pointLight
    //   ref={ref}
    //   position={[1, 1, 1]}
    //   intensity={intensity}
    //   color={color}
    //   distance={distance}
    //   decay={decay}
    // />

    // <hemisphereLight color={"deepskyblue"} groundColor={"sandybrown"} />

    <SpotLight
      ref={ref}
      position={[0, 3, 3]}
      angle={angle}
      anglePower={anglePower}
      color={color}
      distance={distance}
      attenuation={attenuation}
    />
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 3] }}>
        <OrbitControls />

        {/* <ambientLight intensity={0.2} />

        <directionalLight position={[3, 3, 3]} intensity={0.5} color="red" />
        <directionalLight position={[0, 3, -3]} intensity={0.5} color="green" />
        <directionalLight position={[-3, 3, 3]} intensity={0.5} color="blue" /> */}

        <Lights />

        <mesh rotation-y={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
