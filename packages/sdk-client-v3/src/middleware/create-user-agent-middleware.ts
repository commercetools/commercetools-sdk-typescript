import {
  Next,
  HttpUserAgentOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
} from '../types/types'
import packageJson from '../../package.json'
import { default as createUserAgent } from '../utils/userAgent'

export default function createUserAgentMiddleware(
  options?: HttpUserAgentOptions
): Middleware {
  return (next: Next): Next =>
    async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      const userAgent = createUserAgent({
        ...options,
        name: `commercetools-sdk-javascript-v2/${packageJson.version}`,
      })

      const requestWithUserAgent = {
        ...request,
        headers: {
          ...request.headers,
          'User-Agent': userAgent,
        },
      }

      return next(requestWithUserAgent)
    }
}
