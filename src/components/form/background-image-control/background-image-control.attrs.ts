import {BackgroundImage} from '@renderers/background-image'

export interface BackgroundImageAttrs {
  images: BackgroundImage[]
  onChange(image: BackgroundImage): void
}
