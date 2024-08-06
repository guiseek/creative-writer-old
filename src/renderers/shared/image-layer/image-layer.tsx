import {async} from '@base/utils/factories'
import {BaseLayer} from '../../base'

export class ImageLayer extends BaseLayer {
  image = new Image(this.width, this.height)

  order = 3

  render() {
    return async<ImageLayer>((resolve) => {
      this.context.clearRect(0, 0, this.width, this.height)

      this.image.onload = () => {
        const dx = this.width - this.gutter.x * 2
        const dy = this.width - this.gutter.y * 2

        /**
         * this.context.drawImage(image,
         * dx: eixo x para o canto superior esquerdo
         * dy: eixo y para o canto superior esquerdo
         * dw: dimensionamento da imagem na largura
         * dh: dimensionamento da imagem na altura
         */

        this.context.drawImage(this.image, this.gutter.x, this.gutter.y, dx, dy)

        resolve(this)
      }

      this.image.src = this.image.src
    })
  }
}
