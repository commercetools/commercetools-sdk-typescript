import { MiddlewareRequest } from '../types/types'

export default function mergeAuthHeader(
  token: string,
  req: MiddlewareRequest
): MiddlewareRequest {
  return {
    ...req,
    headers: {
      ...req.headers,
      Authorization: `Bearer ${token}`,
    },
  }
}
