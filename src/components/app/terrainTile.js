import React from "react";
import styled from "styled-components";
import TileRow from "./tileRow";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const TerrainTile = ({ terrain }) => (
  <StyledRow>
    {terrain.tiles.map((tileRow, index) => {
      return <TileRow key={index} value={tileRow} />;
    })}
  </StyledRow>
);

export default TerrainTile;
