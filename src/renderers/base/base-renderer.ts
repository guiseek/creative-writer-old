export abstract class BaseRenderer extends HTMLCanvasElement {
  get context() {
    const ctx = this.getContext('2d')
    if (!ctx) throw `Context renderer error`
    return ctx
  }

  abstract render(): Promise<void>
}
