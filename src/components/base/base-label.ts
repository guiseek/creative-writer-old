import {BaseInput} from './base-input'

export type LabelPosition = 'before' | 'after'

export class BaseLabel extends HTMLLabelElement {
  setContrrol(
    control: BaseInput,
    label: string,
    position: LabelPosition = 'before',
  ) {
    if (position === 'after') {
      this.append(control, label)
    } else {
      this.append(label, control)
    }
  }
}
