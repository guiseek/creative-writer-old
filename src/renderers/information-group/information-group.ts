import {GroupLayer} from '@renderers/shared/group-layer'
import {ImageLayer} from '@renderers/shared/image-layer'
import {TextLayer} from '@renderers/shared/text-layer'

export interface Information {
  date: string
  time: string
  location: string
}

export class InformationGroup extends GroupLayer {
  order = 2

  calendar = new ImageLayer(48, 48, 40, 20, 0, 0)
  date = new TextLayer(this.width / 4, this.height, 50, 28, 0, 0)

  clock = new ImageLayer(48, 48, 316, 24, 0, 0)
  time = new TextLayer(this.width / 3, this.height, 190, 28, 0, 0)

  pin = new ImageLayer(48, 48, 498, 24, 0, 0)
  location = new TextLayer(this.width, this.height, 280, 28, 0, 0)

  setInformation(date: string, time: string, location: string) {
    if (date === '__ __ ____') {
      this.date.color = '#ffffff40'
    } else {
      this.date.color = '#ffffff'
    }
    this.date.text = date

    if (time === '__ __') {
      this.time.color = '#ffffff40'
    } else {
      this.date.color = '#ffffff'
    }
    this.time.text = time

    if (location === '_________________________________') {
      this.location.color = '#ffffff40'
    } else {
      this.date.color = '#ffffff'
    }
    this.location.text = location
  }

  addInformation(date: string, time: string, location: string) {
    this.calendar.image.src = 'icons/calendar.svg'
    this.clock.image.src = 'icons/clock.svg'
    this.pin.image.src = 'icons/pin.svg'

    this.date.size = '36px'

    this.time.size = '36px'

    this.location.size = '36px'

    this.setInformation(date, time, location)

    this.addLayer(this.calendar, this.clock, this.pin)
    this.addLayer(this.date, this.time, this.location)
  }
}
