import {GroupLayer} from '@renderers/shared/group-layer'
import {ImageLayer} from '@renderers/shared/image-layer'

export class FooterGroup extends GroupLayer {
  sponsors: ImageLayer[] = []

  devpr = new Image(this.width / 6, this.height)
  codaqui = new Image(this.width / 6, this.height)

  addSponsor(...sponsors: ImageLayer[]) {
    this.sponsors.push(...sponsors)
  }
}
