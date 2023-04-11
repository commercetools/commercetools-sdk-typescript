import { MiddlewareRequest } from '../types/types'

export default function maskAuthData(request: MiddlewareRequest) {
  const _request = Object.assign({}, request)
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
