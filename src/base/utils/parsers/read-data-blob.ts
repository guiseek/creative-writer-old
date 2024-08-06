import {DataFile} from '../../../interfaces'
import {async} from '../factories'

export const readBlobFile = (blob: Blob, name: string) => {
  return async<DataFile>((resolve, reject) => {
    const reader = new FileReader()

    reader.addEventListener('error', () => reject(reader.error))
    reader.addEventListener('load', () => {
      if (typeof reader.result === 'string') {
        const {type, size} = blob
        resolve({name, type, size, data: reader.result})
      }
    })

    reader.readAsDataURL(blob)
  })
}
