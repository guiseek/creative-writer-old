import { autonomous, CustomElement } from "@base/utils/decorators";
import { CommunityGroupControlTmpl } from "./community-group-control.tmpl";
import { Group } from "@renderers/community-group";
import { uuid } from "@base/utils/factories";

@autonomous("community-group-control")
export class CommunityGroupControl extends CustomElement {
  groups: Group[] = [
    { id: uuid(), logo: `logos/admin.svg`, name: "Organização" },
    { id: uuid(), logo: `logos/agile.svg`, name: "Agile" },
    { id: uuid(), logo: `logos/curitiba.svg`, name: "Curitiba" },
    { id: uuid(), logo: `logos/delphi.svg`, name: "Delphi" },
    { id: uuid(), logo: `logos/geral.svg`, name: "Geral" },
    { id: uuid(), logo: `logos/nodejs.svg`, name: "NodeJS" },
    { id: uuid(), logo: `logos/php.svg`, name: "PHP" },
    { id: uuid(), logo: `logos/rust.svg`, name: "Rust" },
    { id: uuid(), logo: `logos/ts.svg`, name: "TypeScript" },
    { id: uuid(), logo: `logos/vagas.svg`, name: "Vagas" },
  ];

  #selected: Group | null = null;

  get selected() {
    return this.#selected;
  }

  set selected(value) {
    this.#selected = value;
  }

  onChange = (group: Group) => {
    this.#selected = group;
  };

  connectedCallback(): void {
    this.append(
      <CommunityGroupControlTmpl
        onChange={this.onChange}
        groups={this.groups}
      />
    );
  }
}
