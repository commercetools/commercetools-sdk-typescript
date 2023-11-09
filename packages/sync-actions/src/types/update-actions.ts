import { UpdateAction } from '@commercetools/sdk-client-v2'

export type SyncAction<
  R extends object | undefined,
  S extends UpdateAction,
  T = {},
> = {
  buildActions: (
    now: DeepPartial<R>,
    before: DeepPartial<R>,
    config?: T
  ) => Array<S>
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T
