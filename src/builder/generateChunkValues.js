
import generateSlope from "./generateSlope";

const generateChunkValues = chunk => {
  //generate left and right then fill down with slope values
  generateSlope(chunk.tiles.map(layer => layer[0]));
  generateSlope(chunk.tiles.map(layer=>layer[chunk.size-1]));
  chunk.tiles.forEach(layer => generateSlope(layer));
};

export default generateChunkValues;