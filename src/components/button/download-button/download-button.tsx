import {SaveAsDialog} from '@components/dialog/save-as-dialog/save-as-dialog'
import {SaveAs} from '@components/dialog/save-as-dialog/save-as-dialog.attrs'
import type {DownloadButtonAttrs} from './download-button.attrs'
import {builtIn} from '@base/utils/decorators'
import {dialog} from '@base/utils/factories'

@builtIn('button', 'download-button')
export class DownloadButton extends HTMLButtonElement {
  constructor(public attrs: DownloadButtonAttrs) {
    super()
  }

  connectedCallback() {
    this.ariaBusy = 'false'
    this.ariaLabel = 'Download'
    this.setAttribute('type', 'button')
    this.setAttribute('canvasId', this.attrs.canvasId)

    const text = new Text('Download')
    this.appendChild(text)

    const canvasSelector = `#${this.getAttribute('canvasId')}`

    if (canvasSelector !== '#') {
      const canvas = document.querySelector<HTMLCanvasElement>(canvasSelector)
      if (!canvas) {
        throw `Canvas not found for ${canvasSelector}`
      }
      this.addEventListener('click', this.onClick(canvas))
    }
  }

  onClick = (canvas: HTMLCanvasElement) => () => {
    const onConfirm = ({name}: SaveAs) => {
      console.log(name)
      canvas.toBlob((blob) => {
        if (blob) {
          const href = URL.createObjectURL(blob)
          const download = `${name}.png`
          const link = document.createElement('a')
          link.download = download
          link.href = href

          link.onclick = () => {
            setTimeout(() => {
              URL.revokeObjectURL(href)
              this.ariaBusy = 'false'
              this.ariaLabel = 'Download'
            }, 1000)
          }

          link.click()
        }
      })
      // canvas.render().then()
    }

    dialog('save-as', <SaveAsDialog onConfirm={onConfirm} />).then(console.log)
  }
}
