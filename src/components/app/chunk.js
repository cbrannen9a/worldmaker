import React from "react";
import styled from "styled-components";
import TerrainTile from "./terrainTile";

const Row = styled.div`
  display: flex;
`;

const Map = styled.div` 

`;

const Chunk = ({chunk, index}) => {
  if(!chunk.value.length > 0) {
    return null;
  }
  return (
  <Map>
    {chunk.value.map((r, ri )=> {
      return (
        <Row key={ri}>
          {r.map((t, i) => {
            return <TerrainTile key={i} {...t}/>;
          })}
        </Row>
      );
    })}
  </Map>);
};

export default Chunk;