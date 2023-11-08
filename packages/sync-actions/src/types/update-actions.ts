import { UpdateAction } from '@commercetools/sdk-client-v2'

export type SyncAction<T extends UpdateAction, S = {}> = {
  buildActions: (now: any, before: any, config: S) => Array<T>
}
