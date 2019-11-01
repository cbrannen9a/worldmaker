import React from "react";
import styled from "styled-components";
import Point from "./point";

const StyledRow = styled.div`
  display: flex;
`;

const PointsRow = ({ points }) => {
  return (
    <StyledRow>
      {points.map((point, index) => (
        <Point key={index} point={point} />
      ))}
    </StyledRow>
  );
};

export default PointsRow;
