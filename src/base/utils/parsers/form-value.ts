import {PropValue, value} from './value'
import {entries} from '../iterators'

export type FormValue = Record<string, PropValue>

export const formData = <T>(form: HTMLFormElement) => {
  return Object.fromEntries(new FormData(form).entries()) as T
}

export const formValue = <T extends object>(form: T | object): T => {
  const data = form instanceof HTMLFormElement ? formData<T>(form) : form
  return entries(data as FormValue).reduce((prev, [key, val]) => {
    return {...prev, [key]: value(val as PropValue)}
  }, data) as T
}
