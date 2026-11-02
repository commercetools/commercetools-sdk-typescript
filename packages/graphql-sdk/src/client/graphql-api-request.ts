import { GraphQLRequestError } from '../errors/graphql-request-error'
import type {
  ApiRequestLike,
  ClientResponse,
  GraphQLRequestBody,
  GraphQLResponseBody,
} from '../types/types'

/**
 * A prepared GraphQL request.
 *
 * Mirrors the generated `ApiRequest` so that it composes with the rest of the SDK: nothing
 * is sent until {@link execute} (or {@link executeOrThrow}) is called, and the call travels
 * through the client middleware stack the api root was built with.
 */
export class GraphQLApiRequest<TData = any> {
  constructor(
    private readonly request: ApiRequestLike,
    private readonly body: GraphQLRequestBody
  ) {}

  /**
   * The underlying HTTP request, including the resolved uri and headers.
   */
  public clientRequest(): unknown {
    return this.request.clientRequest?.()
  }

  /**
   * The GraphQL request body that will be sent.
   */
  public requestBody(): GraphQLRequestBody {
    return this.body
  }

  /**
   * Executes the request and resolves with the full client response.
   *
   * GraphQL errors are reported in `response.body.errors` and do not reject the promise,
   * because the endpoint answers with HTTP 200 for them.
   */
  public execute(): Promise<ClientResponse<GraphQLResponseBody<TData>>> {
    return this.request.execute()
  }

  /**
   * Executes the request and resolves with the response data.
   *
   * Rejects with a {@link GraphQLRequestError} when the response carries GraphQL errors.
   */
  public async executeOrThrow(): Promise<TData> {
    const response = await this.execute()
    const errors = response?.body?.errors

    if (errors && errors.length > 0) {
      throw new GraphQLRequestError<TData>(errors, response)
    }

    return response?.body?.data as TData
  }
}
