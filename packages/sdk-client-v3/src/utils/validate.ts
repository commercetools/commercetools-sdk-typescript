import { HttpMiddlewareOptions, HttpUserAgentOptions } from '../types/types'

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

  if (options.timeout && !options.getAbortController)
    throw new Error(
      '`AbortController` is not available. Please pass in `getAbortController` as an option or have AbortController globally available when using timeout.'
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
