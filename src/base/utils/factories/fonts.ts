import {async, asyncAll} from './async'

export const fonts = () => {
  return async<FontFace[][]>((resolve, reject) => {
    if ('fonts' in document) {
      return asyncAll<FontFace[]>([
        document.fonts.load('200 48px Mukta'),
        document.fonts.load('300 48px Mukta'),
        document.fonts.load('400 48px Mukta'),
        document.fonts.load('500 48px Mukta'),
        document.fonts.load('600 48px Mukta'),
        document.fonts.load('700 48px Mukta'),
        document.fonts.load('800 48px Mukta'),
      ]).then(resolve)
    } else {
      const api = `CSS Font Loading API`
      const err = `is not available on this browser`
      reject(new DOMException(`${api} ${err}`))
    }
  })
}
