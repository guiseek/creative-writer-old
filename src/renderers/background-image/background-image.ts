import {ImageLayer} from '@renderers/shared/image-layer'

export interface BackgroundImage {
  id: string
  image: string
  name: string
}

export class BackgroundImageLayer extends ImageLayer {
  order = 0
}
