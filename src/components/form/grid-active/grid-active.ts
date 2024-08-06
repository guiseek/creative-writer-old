import {builtIn} from '@base/utils/decorators'
import {BaseInput} from '../../base'

@builtIn('input', 'grid-active')
export class GridActive extends BaseInput {
  constructor(public checked = true) {
    super('checkbox', 'gridActive', 'true', 'gridActive')
  }
}
