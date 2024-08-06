
// const startPositions: WeakMap<ImageCropElement, {startX: number; startY: number}> = new WeakMap()
// const dragStartPositions: WeakMap<ImageCropElement, {dragStartX: number; dragStartY: number}> = new WeakMap()
// const constructedElements: WeakMap<ImageCropElement, {image: HTMLImageElement; box: HTMLElement}> = new WeakMap()

// export function moveCropArea(event: TouchEvent | MouseEvent | KeyboardEvent) {
//   const el = event.currentTarget
//   if (!(el instanceof ImageCropElement)) return
//   const {box, image} = constructedElements.get(el) || {}
//   if (!box || !image) return

//   let deltaX = 0
//   let deltaY = 0
//   if (event instanceof KeyboardEvent) {
//     if (event.key === 'ArrowUp') {
//       deltaY = -1
//     } else if (event.key === 'ArrowDown') {
//       deltaY = 1
//     } else if (event.key === 'ArrowLeft') {
//       deltaX = -1
//     } else if (event.key === 'ArrowRight') {
//       deltaX = 1
//     }
//   } else if (dragStartPositions.has(el) && event instanceof MouseEvent) {
//     const pos = dragStartPositions.get(el)!
//     deltaX = event.pageX - pos.dragStartX
//     deltaY = event.pageY - pos.dragStartY
//   } else if (dragStartPositions.has(el) && event instanceof TouchEvent) {
//     // Only support a single touch at a time
//     const {pageX, pageY} = event.changedTouches[0]

//     const {dragStartX, dragStartY} = dragStartPositions.get(el)!
//     deltaX = pageX - dragStartX
//     deltaY = pageY - dragStartY
//   }

//   if (deltaX !== 0 || deltaY !== 0) {
//     const x = Math.min(Math.max(0, box.offsetLeft + deltaX), image.width - box.offsetWidth)
//     const y = Math.min(Math.max(0, box.offsetTop + deltaY), image.height - box.offsetHeight)
//     box.style.left = `${x}px`
//     box.style.top = `${y}px`

//     fireChangeEvent(el, {
//       x,
//       y,
//       width: box.offsetWidth,
//       height: box.offsetHeight,
//     })
//   }

//   if (event instanceof MouseEvent) {
//     dragStartPositions.set(el, {
//       dragStartX: event.pageX,
//       dragStartY: event.pageY,
//     })
//   } else if (event instanceof TouchEvent) {
//     // Only support a single touch at a time
//     const {pageX, pageY} = event.changedTouches[0]
//     dragStartPositions.set(el, {
//       dragStartX: pageX,
//       dragStartY: pageY,
//     })
//   }
// }