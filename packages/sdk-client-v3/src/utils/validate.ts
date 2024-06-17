import { METHODS } from '../../src/utils'
import {
  ClientRequest,
  HttpMiddlewareOptions,
  Middleware,
} from '../types/types'

/**
 * validate some essential http options
 * @param options
 */
export function validateHttpOptions(options: HttpMiddlewareOptions) {
  if (!options.host)
    throw new Error(
      'Request `host` or `url` is missing or invalid, please pass in a valid host e.g `host: http://a-valid-host-url`'
    )

  if (!options.httpClient && typeof options.httpClient !== 'function')
    throw new Error(
      'An `httpClient` is not available, please pass in a `fetch` or `axios` instance as an option or have them globally available.'
    )
}

/**
 *
 * @param retryCodes
 * @example
 * const retryCodes = [500, 504, "ETIMEDOUT"]
 */
export function validateRetryCodes(retryCodes: Array<string | number>) {
  if (!Array.isArray(retryCodes)) {
    throw new Error(
      '`retryCodes` option must be an array of retry status (error) codes and/or messages.'
    )
  }
}

/**
 * @param options
 */
export function validateClient(options: { middlewares: Array<Middleware> }) {
  if (!options) throw new Error('Missing required options')

  if (options.middlewares && !Array.isArray(options.middlewares))
    throw new Error('Middlewares should be an array')

  if (
    !options.middlewares ||
    !Array.isArray(options.middlewares) ||
    !options.middlewares.length
  ) {
    throw new Error('You need to provide at least one middleware')
  }
}

/**
 * @param options
 */
export function validate(
  funcName: string,
  request: ClientRequest,
  options: { allowedMethods: Array<string> } = { allowedMethods: METHODS }
): void {
  if (!request)
    throw new Error(
      `The "${funcName}" function requires a "Request" object as an argument. See https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest`
    )

  if (typeof request.uri !== 'string')
    throw new Error(
      `The "${funcName}" Request object requires a valid uri. See https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest`
    )

  if (!options.allowedMethods.includes(request.method))
    throw new Error(
      `The "${funcName}" Request object requires a valid method. See https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest`
    )
}
