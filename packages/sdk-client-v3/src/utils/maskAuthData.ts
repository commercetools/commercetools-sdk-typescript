import { MiddlewareRequest } from '../types/types'

export default function maskAuthData(request: MiddlewareRequest) {
  const _request = JSON.parse(JSON.stringify(request))
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
