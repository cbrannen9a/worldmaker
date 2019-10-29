import React from "react";
import styled from "styled-components";

const StyledPoint = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid 
`;

const Point = ({point}) =>{
  return <StyledPoint/>
};

export default Point;