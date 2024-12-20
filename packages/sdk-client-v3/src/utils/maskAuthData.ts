import { MiddlewareRequest } from '../types/types'
import cloneDeep from 'lodash.clonedeep'

export default function maskAuthData(request: MiddlewareRequest) {
  const _request = cloneDeep(request)
  if (_request?.headers) {
    if (_request.headers.Authorization) {
      _request.headers['Authorization'] = 'Bearer ********'
    }

    if (_request.headers.authorization) {
      _request.headers['authorization'] = 'Bearer ********'
    }
  }

  return _request
}
