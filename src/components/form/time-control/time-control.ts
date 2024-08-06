import {builtIn} from '@base/utils/decorators'
import {BaseInput} from '@components/base'

@builtIn('input', 'time-control')
export class TimeControl extends BaseInput {
  constructor() {
    const date = new Date()

    super('time', 'time', TimeControl.formatTime(date), 'time')
  }

  static formatTime(value: Date) {
    const hours = value.getHours().toString().padStart(2, '0')
    const minutes = value.getMinutes().toString().padStart(2, '0')
    return `${hours}-${minutes}`
  }
}
