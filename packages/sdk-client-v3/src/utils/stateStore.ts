import { RequestState } from '../types/types'

export default function stateStore(state: RequestState) {
  let value: RequestState = state
  return {
    get: (): RequestState => value,
    set: (newState: RequestState) => {
      value = newState
    },
  }
}
