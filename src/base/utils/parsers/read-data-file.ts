import {DataFile} from '../../../interfaces'
import {async} from '../factories'

export const readDataFile = (file: File) => {
  return async<DataFile>((resolve, reject) => {
    const reader = new FileReader()

    reader.addEventListener('error', () => reject(reader.error))
    reader.addEventListener('load', () => {
      if (typeof reader.result === 'string') {
        resolve({
          name: file.name,
          type: file.type,
          size: file.size,
          data: reader.result,
        })
      }
    })

    reader.readAsDataURL(file)
  })
}
