import {builtIn} from '@base/utils/decorators'

@builtIn('fieldset', 'fieldset-group')
export class FieldSetGroup extends HTMLFieldSetElement {
  constructor(legend: string, ...children: (string | Node)[]) {
    super()
    this.append(this.createLegend(legend), ...children)
    this.setAttribute('role', 'group')
  }

  createLegend(text: string) {
    const legend = document.createElement('legend')
    legend.textContent = text
    return legend
  }
}
