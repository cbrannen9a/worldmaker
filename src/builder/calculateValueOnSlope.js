import { TERRAIN_VALUES } from "../constants";

const calcualteValueOnSlope = (m, x, b) => {
  const val = Math.round(Math.abs(m * x + b));
  if (val > TERRAIN_VALUES) {
    return TERRAIN_VALUES;
  } else if (val < 0) {
    return 0;
  }
  return val;
};

export default calcualteValueOnSlope;
