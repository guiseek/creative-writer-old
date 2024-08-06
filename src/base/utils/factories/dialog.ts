import {async} from './async'

export const dialog = <K extends keyof HTMLElementEventMap>(
  event = 'close' as K,
  dialog: JSX.Element<any>
) => {
  return async((resolve) => {
    document.body.appendChild(dialog)
    dialog.addEventListener(event, resolve)
    dialog.addEventListener('close', () => {
      document.body.removeChild(dialog)
    })
  })
}
