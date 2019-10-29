import Chunk  from "./chunk";
import World from "./world";

const generateWorld = size => {
  let worldItem =  new World({size});
  worldItem.generate();

  return worldItem;
};

export default generateWorld;