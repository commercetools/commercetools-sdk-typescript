export type UpdateAction = {
  action: string
  [key: string]: any
  actionKey?: string
}

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
export type SyncActionConfig = {
  shouldOmitEmptyString: boolean
}

export type ActionGroup = {
  type: string
  group: 'ignore' | 'allow'
}
