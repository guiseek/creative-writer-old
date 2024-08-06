import {async, asyncAll} from '@base/utils/factories'
import {BaseLayer} from '../../base'
import {TextLayer} from '../text-layer'

export class GroupLayer extends BaseLayer {
  layers: BaseLayer[] = []

  addLayer(...layers: BaseLayer[]) {
    this.layers.push(...layers)
  }

  render() {
    this.clear()

    return async<GroupLayer>((resolve) => {
      asyncAll(
        this.layers
          .filter((layer) => {
            return layer instanceof TextLayer ? layer.text !== '' : true
          })
          .map(async (layer) => {
            return layer.render().then((layer) => {
              const {x, y} = layer.position
              const {x: gx, y: gy} = layer.gutter
              this.context.drawImage(layer, x + gx, y + gy)
              return layer
            })
          })
      ).then(() => resolve(this))
    })
  }
}
