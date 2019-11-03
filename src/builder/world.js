import Terrain from "./terrain";

class World {
  constructor(props) {
    this.size = props.size;
    this.world = [];
  }

  generate() {
    for (let y = 0; y < this.size; y++) {
      let row = [];
      for (let x = 0; x < this.size; x++) {
        let terrain = new Terrain({ size: this.size, y: y, x: x });
        row.push(terrain);
        //check for n and w tiles
        let north, west;
        if (y > 0) {
          north = this.world[y - 1][x];
        }

        if (x > 0) {
          west = row[x - 1];
        }
        terrain.generate(north, west);
      }
      this.world.push(row);
    }
  }

  flattened() {
    return this.world
      .map(worldRow => {
        return worldRow.map(terrain => {
          return terrain.tiles.map(tileRow => {
            return tileRow.map(tile => {
              return tile;
              // .points.map(pointsRow => {
              //   return pointsRow.map(point => point);
              // });
            });
          });
        });
      })
      .flat(Infinity);
  }
}

export default World;
