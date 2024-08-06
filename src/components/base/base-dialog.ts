import {animate} from '@base/utils/factories'

export abstract class BaseDialog extends HTMLDialogElement {
  onRemoveOpenClass = () => {
    document.documentElement.classList.remove('modal-is-open')
  }

  onFinishAnimation = () => super.close()

  animation = animate(this, 'slideInBlurredBottom')

  connectedCallback() {
    document.documentElement.classList.add('modal-is-open')

    this.addEventListener('close', this.onRemoveOpenClass)

    this.open = true
  }

  override close() {}

  closeDialog() {
    this.animation.addEventListener('finish', this.onFinishAnimation)

    this.animation.reverse()
    this.animation.play()
  }

  disconnectedCallback() {
    this.animation.removeEventListener('finish', this.onFinishAnimation)
    this.removeEventListener('close', this.onRemoveOpenClass)
  }
}
