import { HttpMiddlewareOptions, HttpUserAgentOptions } from '../types/types'

export function validateHttpOptions(options: HttpMiddlewareOptions) {
  if (!options.httpClient && typeof options.httpClient !== 'function')
    throw new Error(
      'an `httpClient` is not available, please pass in a `fetch` or `axios` instance as an option or have them globally available.'
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
 *
 * @param options
 */
export function validateUserAgentOptions(options: HttpUserAgentOptions) {
  if (
    !options ||
    Object.keys(options).length === 0 ||
    !{}.hasOwnProperty.call(options, 'name')
  ) {
    throw new Error('Missing required option `name`')
  }
}
