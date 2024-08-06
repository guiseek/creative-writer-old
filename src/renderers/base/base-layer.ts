import {Vector2} from '@base/utils/math'

export abstract class BaseLayer extends OffscreenCanvas {
  position = new Vector2()

  gutter = new Vector2()

  active = true

  order = 0

  // prettier-ignore
  constructor(width: number, height: number, x: number, y: number, gx = 0, gy = 0) {
    super(width, height);
    this.position.set(x, y);
    this.gutter.set(gx, gy);
  }

  get context() {
    const ctx = this.getContext('2d')
    if (!ctx) throw `Context layer error`
    return ctx
  }

  abstract render(): Promise<BaseLayer>

  clear() {
    this.context.clearRect(0, 0, this.width, this.height)
  }
}
