import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState } from "react";
import { useControls, button } from "leva";
import { useMemo, memo } from "react";

const Cube = memo((props) => {
  console.log("render cube");
  const [color, setColor] = useState("white");

  const material = useMemo(
    () => <meshStandardMaterial color={color} />,
    [color]
  );

  const ref = useRef();

  useControls({
    changeColorToRed: button(() => setColor("red")),
    changeColorToBlue: button(() => setColor("blue")),
    changeColorToGreen: button(() => setColor("green")),
    rotateCuve: button(() => (ref.current.rotation.y += 0.1)),
  });

  useEffect(() => {
    const colorPosition = {
      white: [0, 0, 0],
      red: [2, 0, 0],
      blue: [-2, 0, 0],
      green: [0, 2, 0],
    };

    const position = colorPosition[color];

    ref.current.position.set(...position);

    return () => {
      console.log("cleanup");
    };
  }, [color]);

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      {material}
    </mesh>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const onCubeClick = useCallback(() => {
    console.log("clicked", count);
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <>
      <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
        <OrbitControls />
        <Cube onClick={onCubeClick} rotation-y={Math.PI / 4} />
        <ContactShadows
          position-y={-2}
          opacity={0.5}
          blur={2}
          color={"pink"}
          scale={10}
        />
        <Environment preset="city" />
      </Canvas>
    </>
  );
}

export default App;
