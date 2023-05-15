import packageJson from '../../package.json'
import {
  HttpUserAgentOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/types'
import { default as createUserAgent } from '../utils/userAgent'

export default function createUserAgentMiddleware(
  options?: HttpUserAgentOptions
): Middleware {
  return (next: Next): Next =>
    async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      const userAgent = createUserAgent({
        ...options,
        name: `commercetools-sdk-javascript-v3/${packageJson.version}`,
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
