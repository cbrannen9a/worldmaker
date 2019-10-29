import { TERRAIN_VALUES, SEED } from "../constants";
import getCorners from "./getCorners";
import seedRandom from "seedrandom";

const myrng = seedRandom(SEED);

const createCornerValues = (chunk, north = null, west = null) => {
  chunk.getCorners().forEach(
    corner =>
      (corner.value = Math.round(myrng() * TERRAIN_VALUES))
  );

  let northCorners, westCorners;
  if(north) {
    northCorners = getNeighbourCornerValues(north, directions.north);
  }
  if(west) {
    westCorners = getNeighbourCornerValues(west, directions.west);
  }

  setCornersFromNeighbours(chunk, northCorners, westCorners);
 
  return chunk;
};

const setCornersFromNeighbours = (chunk, north, west) => {
  if(north) {
    chunk.tiles[0][chunk.size-1].value = generateCloseValue(north[0]);
    chunk.tiles[0][0].value = generateCloseValue(north[1]);
  }

  if(west) {
    chunk.tiles[0][0].value = generateCloseValue(west[0])
    chunk.tiles[chunk.size-1][0].value = generateCloseValue(west[1])
  }

}

const generateCloseValue = (value)=> {
  return value + Math.round(myrng() * 3) - 2;
}


const directions = {
  north: 'north',
  south: 'south',
  east: 'east',
  west: 'west'
}

const getNeighbourCornerValues = (neighbor, direction)=> {
  if(neighbor){
    switch(direction){
      case directions.north:
        return [neighbor.getSeCorner(), neighbor.getSwCorner()];

      case directions.south:
        return [neighbor.getNwCorner(), neighbor.getNeCorner()];

      case directions.east:
        return [neighbor.getNwCorner(), neighbor.getSwCorner()];

      case directions.west:
        return  [neighbor.getNeCorner(), neighbor.getSeCorner()];
      

      default:
        return;
    }
  }
}

export default createCornerValues;