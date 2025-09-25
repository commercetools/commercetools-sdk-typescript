import { ApiRequest } from '../src/generated/shared/utils/requests-utils'

export interface RequestWithMethod {
  method: string
  uri: string
  request: ApiRequest<unknown>
}
