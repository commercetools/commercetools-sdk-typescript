import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

/**
 * The variables that a GraphQL query uses.
 */
export type GraphQLVariablesMap = {
  [key: string]: any
}

/**
 * A document whose source text is carried by the object itself, as produced by
 * the `@graphql-codegen/client-preset` `documentMode: 'string'` output.
 */
export interface TypedDocumentString<
  TData = any,
  TVariables = GraphQLVariablesMap,
> {
  __apiType?: (variables: TVariables) => TData
  toString(): string
}

/**
 * Anything this SDK knows how to turn into the `query` of a GraphQL request.
 *
 * `TypedDocumentNode` is the interface emitted by `@graphql-codegen/typed-document-node`,
 * `@graphql-codegen/client-preset` and `gql.tada`. Passing one of those documents is what
 * makes both the variables and the response data type-safe; plain strings and untyped
 * `DocumentNode`s are still accepted, but resolve to `any`.
 */
export type GraphQLDocument<TData = any, TVariables = GraphQLVariablesMap> =
  | TypedDocumentNode<TData, TVariables>
  | TypedDocumentString<TData, TVariables>
  | string

/**
 * The body that is sent to the GraphQL endpoint.
 */
export interface GraphQLRequestBody<TVariables = GraphQLVariablesMap> {
  query: string
  operationName?: string
  variables?: TVariables
}

/**
 * Represents the location within a query where an error occurred.
 */
export interface GraphQLErrorLocation {
  readonly line: number
  readonly column: number
}

/**
 * An error entry as returned in the `errors` array of a GraphQL response.
 */
export interface GraphQLResponseError {
  readonly message: string
  readonly locations?: ReadonlyArray<GraphQLErrorLocation>
  readonly path?: ReadonlyArray<string | number>
  readonly extensions?: any
}

/**
 * The body returned by the GraphQL endpoint, with `data` typed by the executed document.
 */
export interface GraphQLResponseBody<TData = any> {
  data?: TData
  errors?: ReadonlyArray<GraphQLResponseError>
}

/**
 * Structural subset of the SDK's `ClientResponse`. Kept deliberately loose so that
 * responses coming from any of the generated SDKs are assignable to it.
 */
export interface ClientResponse<TBody = any> {
  body: TBody
  statusCode?: number
  headers?: Record<string, any>
  error?: any
  originalRequest?: any
  [key: string]: any
}

/**
 * Structural subset of the generated `ApiRequest`.
 */
export interface ApiRequestLike {
  clientRequest?(): unknown
  execute(): Promise<ClientResponse<any>>
}

/**
 * Structural subset of the generated `ByProjectKeyGraphqlRequestBuilder`.
 */
export interface GraphqlRequestBuilderLike {
  post(methodArgs: {
    body: GraphQLRequestBody
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequestLike
}

/**
 * Any request builder exposing a `graphql()` endpoint, such as the `ByProjectKeyRequestBuilder`
 * of `@commercetools/platform-sdk` or `@commercetools/history-sdk`.
 */
export interface GraphQLCapableApiRoot {
  graphql(): GraphqlRequestBuilderLike
}

/**
 * Per-request options.
 */
export interface GraphQLRequestOptions<TVariables = GraphQLVariablesMap> {
  /**
   * Variables for the executed operation.
   */
  variables?: TVariables
  /**
   * Name of the operation to execute, required when the document defines several operations.
   */
  operationName?: string
  /**
   * Additional headers merged into the underlying HTTP request.
   */
  headers?: {
    [key: string]: string | string[]
  }
}
