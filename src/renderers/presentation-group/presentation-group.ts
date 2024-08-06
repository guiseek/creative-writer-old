import {GroupLayer} from '@renderers/shared/group-layer'
import {TextLayer} from '@renderers/shared/text-layer'
import {Speaker, SpeakerGroup} from './speaker-group'

export interface Presentation extends Speaker {
  title: string
}

export class PresentationGroup extends GroupLayer {
  constructor(width: number, height: number, x: number, y: number) {
    super(width, height, x, y, 20, 20)
  }

  setPresentation(title: string, speaker: Speaker) {
    const w = this.width - this.gutter.x

    const titleLayer = new TextLayer(w, 460, 110, 30)
    titleLayer.color = '#62F772'
    titleLayer.size = '36px'
    titleLayer.text = title

    const speakerLayer = new SpeakerGroup(this.width, this.height, 0, 0)
    speakerLayer.setSpeaker(speaker)

    this.addLayer(titleLayer, speakerLayer)
  }
}
