import calculateSlope from "./calculateSlope";
import calculateValueOnSlope from "./calculateValueOnSlope";

export const generateSlope = layer => {
  // get start and end of array
  // calculate calculateSlope
  // fill values on slope with calculateValueOnSlope
  const x1 = 0;
  const y1 = layer[0].value;
  const x2 = layer.length - 1;
  const y2 = layer[x2].value;

  const slope = calculateSlope(x1, y1, x2, y2);
  for (let i = 0; i < layer.length; i++) {
    layer[i].value = calculateValueOnSlope(slope, i, y1);
  }

  return layer;
};

export default generateSlope;
