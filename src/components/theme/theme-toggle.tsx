import { builtIn } from "@base/utils/decorators";
import { Theme } from "./theme-toggle.attrs";
import { useValue } from "@jsxml/parser";

@builtIn("button", "theme-toggle")
export class ThemeToggle extends HTMLButtonElement {
  current = useValue<Theme>("dark");

  icon = new Image(32, 32);

  onThemeChange = (theme: string) => {
    this.current.set(theme === "dark" ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
    this.icon.src = this.current.get() + ".svg";
  };

  connectedCallback() {
    this.onThemeChange(this.current.get());

    this.append(this.icon);

    this.classList.add("theme-toggle");

    this.addEventListener("click", () => {
      this.onThemeChange(this.current.get());
    });
  }
}
