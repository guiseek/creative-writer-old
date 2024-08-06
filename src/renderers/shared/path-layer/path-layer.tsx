import { async } from "@base/utils/factories";
import { BaseLayer } from "../../base";

export class PathLayer extends BaseLayer {
  path = new Path2D();

  color = "#62F772";

  render() {
    return async<PathLayer>((resolve) => {
      this.context.clearRect(0, 0, this.width, this.height);

      this.context.strokeStyle = this.color;

      this.path.rect(0, 0, this.width, this.height);

      this.context.stroke(this.path);

      resolve(this);
    });
  }
}
