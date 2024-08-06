import { async } from "@base/utils/factories";
import { BaseLayer } from "@renderers/base";

export class GridLayer extends BaseLayer {
  rows = 6;
  cols = 6;

  lineColor = "#4be26020";
  lineWidth = 3;

  order = 1;

  render() {
    this.context.clearRect(0, 0, this.width, this.height);

    return async<GridLayer>((resolve) => {
      const col = this.width / this.cols;
      const height = this.height / this.rows;

      for (let x = 0; x < this.cols; x++) {
        for (let y = 0; y < this.rows; y++) {
          const path = new Path2D();

          this.context.lineWidth = this.lineWidth;
          this.context.strokeStyle = this.lineColor;

          path.rect(x * col, y * height, col, height);
          this.context.stroke(path);
        }
      }
      resolve(this);
    });
  }
}
