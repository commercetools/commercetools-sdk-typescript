import type {
  ClientResponse,
  GraphQLResponseBody,
  GraphQLResponseError,
} from '../types/types'

/**
 * Thrown by {@link GraphQLApiRequest.executeOrThrow} when the GraphQL endpoint answered
 * with an `errors` array.
 *
 * The GraphQL endpoint replies with HTTP 200 even for failed operations, so this error is
 * never raised by the underlying HTTP middleware - only by explicitly unwrapping the data.
 */
export class GraphQLRequestError<TData = any> extends Error {
  /**
   * The errors reported by the GraphQL endpoint.
   */
  public readonly errors: ReadonlyArray<GraphQLResponseError>

  /**
   * Partial data, if the endpoint returned any alongside the errors.
   */
  public readonly data?: TData

  /**
   * The full client response, for access to status code, headers and correlation id.
   */
  public readonly response: ClientResponse<GraphQLResponseBody<TData>>

  constructor(
    errors: ReadonlyArray<GraphQLResponseError>,
    response: ClientResponse<GraphQLResponseBody<TData>>
  ) {
    super(formatMessage(errors))

    this.name = 'GraphQLRequestError'
    this.errors = errors
    this.data = response?.body?.data
    this.response = response

    // Restores the prototype chain when the package is consumed as transpiled ES5.
    Object.setPrototypeOf(this, GraphQLRequestError.prototype)
  }
}

function formatMessage(errors: ReadonlyArray<GraphQLResponseError>): string {
  const messages = (errors || []).map((error) => error?.message).filter(Boolean)

  if (messages.length === 0) {
    return 'GraphQL request failed.'
  }

  return `GraphQL request failed: ${messages.join('; ')}`
}
