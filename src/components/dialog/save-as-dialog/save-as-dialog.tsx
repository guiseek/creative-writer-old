import type {SaveAs, SaveAsDialogAttrs} from './save-as-dialog.attrs'
import {BaseDialog} from '@components/base/base-dialog'
import {SaveAsDialogTmpl} from './save-as-dialog.tmpl'
import {builtIn} from '@base/utils/decorators'

@builtIn('dialog', 'save-as-dialog')
export class SaveAsDialog extends BaseDialog {
  constructor(public attrs: SaveAsDialogAttrs) {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()

    this.append(
      <SaveAsDialogTmpl
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
    'save-as': CustomEvent<SaveAs>
  }
}
