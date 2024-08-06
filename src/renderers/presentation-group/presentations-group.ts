import {GroupLayer} from '@renderers/shared/group-layer'
import {PresentationGroup} from './presentation-group'
import {Speaker} from './speaker-group'

export class PresentationsGroup extends GroupLayer {
  constructor(width: number, height: number, x: number, y: number) {
    super(width, height, x, y, 10, 10)
  }

  addPresentation(title: string, speaker: Speaker) {
    const factor = this.layers.length + 1

    const w = this.width - this.gutter.x
    const h = this.height / 2
    const x = this.gutter.x
    const y = (h / 1.6) * factor

    const presentation = new PresentationGroup(w, h, x, y)

    presentation.setPresentation(title, speaker)

    this.addLayer(presentation)
  }
}
