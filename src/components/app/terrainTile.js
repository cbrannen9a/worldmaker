import React from "react";
import styled from "styled-components";
import {COLOUR_MAP} from "../../constants";
import TileRow from "./tileRow";

const StyledTile = styled.div`
  width: 25px;
  height: 25px;
 
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTerrainTile = styled.div`
   background-color: ${props => COLOUR_MAP[props.value]}
`;


const TerrainTile = ({terrain}) => (
  <StyledRow>
    {terrain.tiles.map((tileRow, index)=>{return <TileRow value={tileRow}/>})}
  </StyledRow>
)


 

  // <StyledTerrainTile value={value}>

  // <div>
  //   {tile.map((r, ri )=> {

  //     return (
        
  //       <Row key={ri}>
  //         {r.map((t, i) => {
  //           return <StyledTile key={i}></StyledTile>
  //         })}
  //       </Row>
  //     )
  //   })}
  // </div>
  
  // </StyledTerrainTile>
//);
  

export default TerrainTile;