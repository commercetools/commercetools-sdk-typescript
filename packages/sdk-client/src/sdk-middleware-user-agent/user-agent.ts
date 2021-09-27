import { default as createHttpUserAgent } from '../http-user-agent/create-user-agent'
import packageJson from '../../package.json'
import {
  Dispatch,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
} from '../types/sdk'

export default function createUserAgentMiddleware(): Middleware {
  const userAgent = createHttpUserAgent({
    name: `commercetools-sdk-javascript-v2/${packageJson.version}`,
  })

  return (next: Dispatch): Dispatch =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      const requestWithUserAgent = {
        ...request,
        headers: {
          ...request.headers,
          'User-Agent': userAgent,
        },
      }
      next(requestWithUserAgent, response)
    }
}
