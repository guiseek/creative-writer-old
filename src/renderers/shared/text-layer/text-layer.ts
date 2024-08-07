import { async } from "@base/utils/factories";
import { BaseLayer } from "../../base";

export class TextLayer extends BaseLayer {
  order = 4;

  text = "";

  color = "#ffffff";

  weight = "";
  size = "96px";
  family = "Mukta";

  render() {
    this.context.clearRect(0, 0, this.width, this.height);

    return async<TextLayer>((resolve) => {

      this.context.fillStyle = this.color;
      this.context.font = [this.weight, this.size, this.family].join(" ");

      const x = this.position.x + this.gutter.x 
      const y = this.position.y + this.gutter.y

      this.context.fillText(this.text, x, y);

      resolve(this);
    });
  }
}
