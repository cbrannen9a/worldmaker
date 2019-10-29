const getCorners = chunk => {
  if(!chunk) {
    return [];
  }
  const size = chunk.length - 1;
  // nw, ne, se, sw 
  return [[0, 0], [0, size], [size, size], [size, 0]];
};

export default getCorners;