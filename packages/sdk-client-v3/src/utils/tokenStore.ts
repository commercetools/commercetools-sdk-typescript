import { TokenCacheOptions } from '../types/types'

export default function store<T, V, S = TokenCacheOptions>(initVal: T): V {
  let value: T = initVal
  return {
    get: (TokenCacheOption?: S) => value,
    set: (val: T, TokenCacheOption?: S) => {
      value = val
    },
  } as V
}
