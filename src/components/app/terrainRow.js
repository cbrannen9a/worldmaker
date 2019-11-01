import React from "react";
import styled from "styled-components";
import TerrainTile from "./terrainTile";

const StyledRow = styled.div`
  display: flex;
`;

const TerrainRow = ({ terrainRow }) => {
  return (
    <StyledRow>
      {terrainRow.map((terrain, index) => (
        <TerrainTile terrain={terrain} />
      ))}
    </StyledRow>
  );
};

export default TerrainRow;
