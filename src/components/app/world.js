import React from "react";
import styled from "styled-components";
import generateWorld from "../../builder";
import TerrainRow from "./terrainRow";

const StyledWorld = styled.div`
  display: flex;
  flex-direction: column;
`;

const World = ({size}) => {
  const world = generateWorld(size);
  return (<StyledWorld>
   {world.world.map((row, index) => {
      return <TerrainRow key={index} terrainRow={row}/>
  })}
  </StyledWorld>)
};

export default World;