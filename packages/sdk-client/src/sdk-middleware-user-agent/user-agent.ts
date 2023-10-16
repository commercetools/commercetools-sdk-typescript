import packageJson from '../../package.json'
import { default as createHttpUserAgent } from '../http-user-agent/create-user-agent'
import {
  Dispatch,
  HttpUserAgentOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
} from '../types/sdk'

export default function createUserAgentMiddleware(
  options?: HttpUserAgentOptions
): Middleware {
  const userAgent = createHttpUserAgent({
    ...options,
    name: `commercetools-sdk-javascript-v2/${packageJson.version}`,
  })

  return (next: Dispatch): Dispatch =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      const requestWithUserAgent = {
        ...request,
        headers: {
          ...request.headers,
          'User-Agent': `${userAgent} ${request.headers['User-Agent'] || ''}`,
        },
      }
      next(requestWithUserAgent, response)
    }
}
