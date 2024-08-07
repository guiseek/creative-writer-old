import {async, asyncAll} from '@base/utils/factories'
import {BaseLayer, BaseRenderer} from '../base'
import {builtIn} from '@base/utils/decorators'

@builtIn('canvas', 'poster-canvas')
export class PosterCanvas extends BaseRenderer {
  layers: BaseLayer[] = []

  addLayer(...layers: BaseLayer[]) {
    this.layers.push(...layers)
  }

  connectedCallback() {
    this.setAttribute('id', 'poster')
  }

  async render() {
    this.context.clearRect(0, 0, this.width, this.height)

    return async<void>(async (resolve) => {
      return asyncAll(
        this.layers
          .filter((layer) => layer.active)
          .sort((a, b) => a.order - b.order)
          .map((layer) => layer.render())
      )
        .then((layers) => {
          return layers.map((layer) => {
            const {x, y} = layer.position
            this.context.drawImage(layer, x, y)
          })
        })
        .then(() => resolve())
    })
  }
}
