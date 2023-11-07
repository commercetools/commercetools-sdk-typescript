import { UpdateAction } from '@commercetools/sdk-client-v2'

export type SyncAction<T extends UpdateAction> = {
  buildActions: (now: Object, before: Object) => Array<T>
}
