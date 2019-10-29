import React from "react";
import styled from "styled-components"
import PointsRow from "./pointsRow";
import {COLOUR_MAP} from "../../constants";

const StyledTile = styled.div`
   background-color: ${props => COLOUR_MAP[props.value]}
`;

const Tile = ({tile}) => {
  return (
    <StyledTile value={tile.value}>
        {tile.points.map((pointsRow, index)=>{return <PointsRow points={pointsRow}/>})}
    </StyledTile>
  )
};

export default Tile;
