import {PresentationDialogProps} from './presentation-dialog.attrs'
import {formValue, readDataFile} from '@base/utils/parsers'
import {Callback, DataFile} from '../../../interfaces'

interface PresentationPhotoFile {
  title: string
  name: string
  photo: File
  role: string
}

export const PresentationDialogTmpl = (attrs: PresentationDialogProps) => {
  const image = new Image(128, 128)
  const caption = new Text()

  const onCancel = () => {
    attrs.onCancel()
  }

  function onSubmit(this: HTMLFormElement, event: SubmitEvent) {
    event.stopImmediatePropagation()
    event.preventDefault()

    if (!this.checkValidity()) {
      this.reportValidity()
    } else {
      const value = formValue<PresentationPhotoFile>(this)
      readDataFile(value.photo).then((photo) => {
        const presentation = {...value, photo}
        attrs.onConfirm(presentation)
      })
    }
  }

  const updateState = ({data, type}: DataFile) => {
    caption.textContent = type
    image.src = data
  }

  function onPhotoChange(callback: Callback<DataFile>) {
    return function (this: HTMLInputElement) {
      const [file] = Array.from(this.files ?? [])

      readDataFile(file).then(callback)
    }
  }

  return (
    <form noValidate id="createPresentation" onSubmit={onSubmit}>
      <article>
        <h2>Presentation</h2>

        <p>Select the file for the speaker, the format must be JPG or PNG</p>

        <fieldset>
          <label>
            Presentation title
            <input name="title" id="title" required />
          </label>

          <label>
            Speaker name
            <input name="name" id="name" required />
          </label>

          <section>
            <label>
              Photo
              <input
                type="file"
                name="photo"
                id="photo"
                required
                accept="image/jpg,image/jpeg,image/png"
                onChange={onPhotoChange(updateState)}
              />
            </label>

            <figure>
              {image}
              <figcaption>{caption}</figcaption>
            </figure>
          </section>
          <label>
            Role
            <input name="role" id="role" placeholder="e.g.: Web Architect" />
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
