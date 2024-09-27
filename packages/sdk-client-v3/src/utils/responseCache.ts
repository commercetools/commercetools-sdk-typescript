import { ClientResult } from '..'

type U<T> = {
  get(): T
  set(value: T): void
}

export default function responseCache<T = ClientResult>(): U<T> {
  let value: T
  return {
    set(response: T) {
      value = response
    },
    get() {
      return value
    },
  }
}
