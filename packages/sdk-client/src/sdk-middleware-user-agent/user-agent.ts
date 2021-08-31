import { default as createHttpUserAgent } from '../http-user-agent/create-user-agent'
import {
  Dispatch,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse
} from '../types/sdk'

const { version } = require('root-require')('package.json')
export default function createUserAgentMiddleware(): Middleware {
  const userAgent = createHttpUserAgent({
    name: `commercetools-sdk-javascript-v2/${version}`,
  })

  return (next: Dispatch): Dispatch => (
    request: MiddlewareRequest,
    response: MiddlewareResponse
  ) => {
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