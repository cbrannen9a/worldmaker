import React from "react";
import styled from "styled-components";
import PointsRow from "./pointsRow";
import { COLOUR_MAP } from "../../constants";

const StyledTile = styled.div`
  background-color: ${props => COLOUR_MAP[props.value]};
`;

export function ThreeTile({ tile }) {
  return (
    <mesh
      position={[tile.tileX, -tile.tileY, tile.value / 2]}
      //rotation={[Math.PI / 2, 0, 0]}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial attach="material" color={COLOUR_MAP[tile.value]} />
    </mesh>
  );
}

const Tile = ({ tile }) => {
  console.log(tile);
  return (
    <ThreeTile tile={tile}>
      {/* {tile.points.map((pointsRow, index) => {
        return <PointsRow key={index} points={pointsRow} />;
      })} */}
    </ThreeTile>
  );
};

export default Tile;
