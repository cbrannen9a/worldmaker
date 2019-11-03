import React, { useRef, useState } from "react";
import World from "./world";

import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useRender
} from "react-three-fiber";
import * as THREE from "three";
import { ThreeTile } from "./tile";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Tile from "../../builder/tile";
import generateWorld from "../../builder";

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useRender(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      minDistance={0}
      maxDistance={500}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

const App = () => {
  const world = generateWorld(10);
  console.log(world);
  console.log(world.flattened());
  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <ambientLight />
      <Controls />
      {world.flattened().map(v => (
        <ThreeTile tile={v} />
      ))}
      {/* <World size={4} /> */}
    </Canvas>
  );
};

export default App;
