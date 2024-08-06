export type BaseInputType =
  | 'text'
  | 'date'
  | 'time'
  | 'number'
  | 'checkbox'
  | 'radio'

export class BaseInput extends HTMLInputElement {
  constructor(
    public type: BaseInputType = 'text',
    public name = '',
    public value = '',
    public id = '',
  ) {
    super()
  }
}
