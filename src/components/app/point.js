import React from "react";
import styled from "styled-components";

const StyledPoint = styled.div`
  width: 3px;
  height: 3px;
`;

const Point = ({ point }) => {
  return <StyledPoint />;
};

export default Point;
