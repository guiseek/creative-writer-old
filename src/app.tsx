import { autonomous, CustomElement } from "@base/utils/decorators";
import { AppRootTmpl } from "./app.tmpl";
import { fonts } from "@base/utils/factories";

@autonomous("app-root")
export class AppRoot extends CustomElement {
  connectedCallback(): void {
    const htmlTag = document.documentElement;

    fonts().then(() => {
      htmlTag.classList.add("fonts-loaded");
      this.append(<AppRootTmpl />);
    });
  }
}
