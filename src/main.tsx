import {ImageCollection} from '@data-access/infra'
import {connection} from '@websqnl/data-store'
import {Provider} from '@websqnl/di/lib'
import {set} from '@websqnl/di'
import {AppRoot} from './app'
import {db} from './config'
import './style.scss'

/**
 * Async Providers
 */
;(async () => {
  const providers: Provider<any>[] = [
    {
      ref: IDBDatabase,
      use() {
        return connection(db).open()
      },
    },
    {
      ref: ImageCollection,
      dep: [IDBDatabase],
    },
  ]

  for await (const result of set(...providers)) {
    // console.log(result)
  }

  root.append(<AppRoot />)
})()
