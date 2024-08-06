import {LabelPosition} from '@components/base/base-label'
import {builtIn} from '@base/utils/decorators'
import {BaseInput} from '@components/base'
import {LabelControl} from '../label-control'

@builtIn('form', 'poster-form')
export class PosterForm extends HTMLFormElement {
  add(control: BaseInput, label: string, position: LabelPosition) {
    this.append(new LabelControl(control, label, position))
  }
}
