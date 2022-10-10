import { MiddlewareRequest } from '../types/types'

export default function maskAuthData(request: MiddlewareRequest) {
  if (request?.headers) {
    if (request.headers.Authorization) {
      request.headers['Authorization'] = 'Bearer ********'
    }

    if (request.headers.authorization) {
      request.headers['authorization'] = 'Bearer ********'
    }
  }
}
