import Tile from "./tile";
import createCornerValues from "./createCornerValues";
import generateChunkValues from "./generateChunkValues";

class Terrain {
  constructor(props){
    this.position = {y: props.y, x: props.x};
    this.y = props.y;
    this.x = props.x;
    this.size = props.size;
    this.tiles = [];
    this.value = props.value;
  }

  build() {
    for( let y= 0; y< this.size; y++){
      let subarr = [];
      for(let x= 0; x< this.size; x++){
        let t = new Tile({y:y, x:x, size: this.size});
        subarr.push(t);
      }
      this.tiles.push(subarr);
    }
  }

  generate(north, west) {
    this.build();
    createCornerValues(this, north, west);
    generateChunkValues(this);
  }

  getCorners() {
    return [this.tiles[0][0], this.tiles[0][this.size-1], this.tiles[this.size-1][this.size-1], this.tiles[this.size-1][0]]
  }

  getNwCorner() {
    return this.tiles[0][0].value;
  }

  getNeCorner(){
    return this.tiles[0][this.size-1].value;
  }

  getSeCorner(){
    return this.tiles[this.size-1][this.size-1].value;
  }

  getSwCorner(){
    return this.tiles[this.size-1][0].value;
  }

}

export default Terrain;
