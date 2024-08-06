import {autonomous, CustomElement} from '@base/utils/decorators'
// import { BackgroundImageControlTmpl } from "./community-group-control.tmpl";
import {BackgroundImage} from '@renderers/background-image'
import {uuid} from '@base/utils/factories'
import {BackgroundImageControlTmpl} from './background-image-control.tmpl'

@autonomous('background-image-control')
export class BackgroundImageControl extends CustomElement {
  images: BackgroundImage[] = [
    {
      id: uuid(),
      image: `images/bermuda-circle-shadow.svg`,
      name: 'Bermuda Circle',
    },
    {
      id: uuid(),
      image: `images/github-timeline-shadow.svg`,
      name: 'Github Timeline',
    },
  ]

  #selected: BackgroundImage | null = null

  get selected() {
    return this.#selected
  }

  set selected(value) {
    this.#selected = value
  }

  onChange = (group: BackgroundImage) => {
    this.#selected = group
  }

  connectedCallback(): void {
    this.append(
      <BackgroundImageControlTmpl
        onChange={this.onChange}
        images={this.images}
      />
    )
  }
}
