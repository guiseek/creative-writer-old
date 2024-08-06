import {builtIn} from '@base/utils/decorators'
import {BaseInput} from '@components/base'

@builtIn('input', 'location-control')
export class LocationControl extends BaseInput {
  constructor() {
    super('text', 'location', '', 'location')
    this.placeholder = 'Location'
  }
}
