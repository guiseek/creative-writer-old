import {builtIn} from '@base/utils/decorators'
import {BaseInput} from '@components/base'

@builtIn('input', 'date-control')
export class DateControl extends BaseInput {
  constructor() {
    super('date', 'date', '', 'date')
  }

  static formatDate(value: Date) {
    const month = value.getMonth().toString().padStart(2, '0')
    const date = value.getDate().toString().padStart(2, '0')
    return `${value.getFullYear()}-${month}-${date}`
  }
}
