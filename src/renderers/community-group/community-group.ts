import {GroupLayer} from '@renderers/shared/group-layer'
import {ImageLayer} from '@renderers/shared/image-layer'
import {TextLayer} from '@renderers/shared/text-layer'

export interface Group {
  id: string
  name: string
  logo: string
  link?: string
}

export class CommunityGroup extends GroupLayer {
  order = 2

  w = 180 + 40
  h = this.height + 20

  logo = new ImageLayer(this.w, this.h, 20, 0, 10, 20)

  name = new TextLayer(this.width - this.w, this.h, 100, 55, 40, 30)

  addCommunity(community: Group) {
    this.clear()

    this.name.text = `${community.name}`
    this.name.weight = 'bold'
    this.name.size = '128px'

    this.logo.image.src = community.logo

    this.addLayer(this.name, this.logo)
  }
}
