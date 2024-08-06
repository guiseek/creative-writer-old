import {builtIn} from '@base/utils/decorators'
import {BaseInput} from '@components/base'
import {BaseLabel, type LabelPosition} from '@components/base/base-label'

@builtIn('label', 'label-control')
export class LabelControl extends BaseLabel {
  constructor(
    control: BaseInput,
    public label: string,
    position: LabelPosition,
  ) {
    super()
    this.setContrrol(control, label, position)
  }
}
