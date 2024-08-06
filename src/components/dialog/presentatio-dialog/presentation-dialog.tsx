import type {PresentationDialogAttrs} from './presentation-dialog.attrs'
import {PresentationDialogTmpl} from './presentation-dialog.tmpl'
import {Presentation} from '@renderers/presentation-group'
import {BaseDialog} from '@components/base/base-dialog'
import {builtIn} from '@base/utils/decorators'

@builtIn('dialog', 'presentation-dialog')
export class PresentationDialog extends BaseDialog {
  constructor(public attrs: PresentationDialogAttrs) {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()

    this.append(
      <PresentationDialogTmpl
        onCancel={() => {
          this.closeDialog()
        }}
        onConfirm={(data) => {
          this.attrs.onConfirm(data)
          this.closeDialog()
        }}
      />
    )
  }
}

declare global {
  interface HTMLElementEventMap {
    'create-presentation': CustomEvent<Presentation>
  }
}
