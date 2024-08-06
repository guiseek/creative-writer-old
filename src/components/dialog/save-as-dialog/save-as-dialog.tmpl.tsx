import {SaveAsDialogProps} from './save-as-dialog.attrs'
import {formValue} from '@base/utils/parsers'

export const SaveAsDialogTmpl = (attrs: SaveAsDialogProps) => {
  const onCancel = () => {
    attrs.onCancel()
  }

  function onSubmit(this: HTMLFormElement, event: SubmitEvent) {
    event.stopImmediatePropagation()
    event.preventDefault()

    if (!this.checkValidity()) {
      this.reportValidity()
    } else {
      attrs.onConfirm(formValue(this))
    }
  }

  return (
    <form noValidate id="saveAsDialog" onSubmit={onSubmit}>
      <article>
        <h2>Save as</h2>

        <p>Only name, without extension.</p>

        <fieldset>
          <label>
            File name
            <input name="name" id="name" required />
          </label>
        </fieldset>
        <footer>
          <button className="secondary" type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Confirm</button>
        </footer>
      </article>
    </form>
  )
}
