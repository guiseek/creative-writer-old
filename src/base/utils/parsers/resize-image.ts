import {async} from '../factories'

export const resizeImage = (file: File, size: number) => {
  return async<Blob>((resolve, reject) => {
    const image = new Image(size, size)
    const reader = new FileReader()

    reader.addEventListener('load', () => {
      if (typeof reader.result !== 'string') {
        return reject(new Error(`Fail when reader image file`))
      }

      image.src = reader.result

      const offscreenCanvas = new OffscreenCanvas(size, size)
      const context = offscreenCanvas.getContext('2d')

      if (!context) {
        return reject(new Error(`2D context not available`))
      }

      const aspect = Math.min(image.width, image.height)

      const left = (image.width - aspect) / 2
      const top = (image.height - aspect) / 2

      context.drawImage(image, left, top, aspect, aspect, 0, 0, size, size)

      offscreenCanvas.convertToBlob(file).then(resolve).catch(reject)
    })

    reader.readAsDataURL(file)
  })
}
