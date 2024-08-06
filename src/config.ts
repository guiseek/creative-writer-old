import {index, schema} from '@websqnl/data-store'

export const config = {
  width: 1080,
  height: 1080,
  rows: 6,
  cols: 6,
  get row() {
    return this.height / this.rows
  },
  get col() {
    return this.width / this.cols
  },
}

const schemas = [
  schema('images', [index('image', true), index('name')], {keyPath: 'id'}),
  schema('sponsors', [index('name', true), index('logo')], {keyPath: 'id'}),
  schema('groups', [index('name', true), index('logo'), index('link')], {
    keyPath: 'id',
  }),
  schema(
    'presentations',
    [index('title', true), index('name'), index('role'), index('photo')],
    {keyPath: 'id'}
  ),
]

export const db = {name: 'creative-writer', version: 1, schemas}
