import React from "react";
import styled from "styled-components";

const StyledPoint = styled.div`
  width: 25px;
  height: 25px;
`;

const Point = ({point}) =>{
  return <StyledPoint/>
};

export default Point;