import Point from "./point";

class Tile {
  constructor(props) {
    this.position = { y: props.y, x: props.x };
    this.y = props.y;
    this.x = props.x;
    this.size = props.size;
    this.points = [];
    this.value = props.value;
  }

  generate() {
    for (let y = 0; y < this.size; y++) {
      let subarr = [];
      for (let x = 0; x < this.size; x++) {
        let p = new Point({ y: y, x: x, value: 0 });
        subarr.push(p);
      }
      this.points.push(subarr);
    }
  }

  getCorners() {
    return [
      this.points[0][0],
      this.points[0][this.size - 1],
      this.points[this.size - 1][this.size - 1],
      this.points[this.size - 1][0]
    ];
  }

  getNwCorner() {
    return this.points[0][0].value;
  }

  getNeCorner() {
    return this.points[0][this.size - 1].value;
  }

  getSeCorner() {
    return this.points[this.size][this.size - 1].value;
  }

  getSwCorner() {
    return this.points[this.size - 1][0].value;
  }
}

export default Tile;
