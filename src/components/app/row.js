import React from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
`;

const Row = ({value}) => {
  return (
    <StyledRow>
        {value.map((item, index)=><div>{index}</div>)}
    </StyledRow>
  )
};

export default Row;