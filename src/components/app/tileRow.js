import React from "react";
import styled from "styled-components";
import Tile from "./tile";

const StyledRow = styled.div`
  display: flex;
`;

const TileRow = ({ value }) => {
  return (
    <StyledRow>
      {value.map((item, index) => (
        <Tile tile={item} />
      ))}
    </StyledRow>
  );
};

export default TileRow;
