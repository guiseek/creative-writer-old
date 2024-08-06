import {GroupLayer} from '@renderers/shared/group-layer'
import {ImageLayer} from '@renderers/shared/image-layer'
import {TextLayer} from '@renderers/shared/text-layer'
import {DataFile} from '../../interfaces'

export interface Speaker {
  name: string
  role: string
  photo: DataFile
}

export class SpeakerGroup extends GroupLayer {
  constructor(width: number, height: number, x: number, y: number) {
    super(width, height, x, y, 0, 0)
  }

  setSpeaker(speaker: Speaker) {
    const photo = new ImageLayer(180, this.height / 2, 0, 0)
    const name = new TextLayer(this.width, 100, 110, 60)

    name.text = `${speaker.name}   /   ${speaker.role}`
    name.size = '32px'

    photo.image.src = speaker.photo.data

    this.addLayer(name, photo)
  }
}
