import {BackgroundImage} from '@renderers/background-image'
import {DataCollection} from '@websqnl/data-store'

export class ImageCollection extends DataCollection<BackgroundImage> {
  constructor(db: IDBDatabase) {
    super(db, 'images')
  }
}
