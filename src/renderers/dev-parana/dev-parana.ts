import {ImageLayer} from '@renderers/shared/image-layer'

export class DevParanaLayer extends ImageLayer {
  order = 10

  constructor(width: number, height: number) {
    super(180, 180, 0, 0, 30, 30)
    this.position.set(width - 180, height - 180)
    this.image.src = 'logos/dev-parana.svg'
  }
}
