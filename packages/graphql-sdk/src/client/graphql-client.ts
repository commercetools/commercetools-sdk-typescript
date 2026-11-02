import type {
  Chain,
  ChainMarker,
  ResultFieldOf,
  SelectionOf,
} from '../builder/chain'
import { createChain, resolveChain } from '../builder/chain'
import {
  generateMutationOp,
  generateQueryOp,
  type FieldsSelection,
  type Mutation,
  type MutationGenqlSelection,
  type Query,
  type QueryGenqlSelection,
} from '../builder/generated'
import type {
  GraphQLCapableApiRoot,
  GraphQLDocument,
  GraphQLRequestOptions,
  GraphqlRequestBuilderLike,
} from '../types/types'
import { toGraphQLRequestBody } from '../utils/print-document'
import { GraphQLApiRequest } from './graphql-api-request'

/**
 * One entry per root field: a callback receiving the chain for that field.
 *
 * ```ts
 * { customers: customers => customers.where('firstName="Martha"').total() }
 * ```
 *
 * `TRootResult` is the response type of the root, `Query` or `Mutation`, which is field for
 * field parallel to its selection type. Pairing the two is what lets `where` offer a predicate
 * builder for the resource being filtered.
 */
type RootSelectors<TRootSelection, TRootResult> = {
  [TField in keyof TRootSelection]?: (
    chain: Chain<
      NonNullable<TRootSelection[TField]>,
      {},
      {},
      ResultFieldOf<TRootResult, TField>
    >
  ) => ChainMarker<any, any>
}

type RootResult<TSelectors> = {
  [TField in keyof TSelectors]: TSelectors[TField] extends (
    ...args: any
  ) => infer TChain
    ? SelectionOf<TChain>
    : never
}

function toSelection(
  selectors: Record<string, unknown>
): Record<string, unknown> {
  const selection: Record<string, unknown> = {}

  for (const [field, selector] of Object.entries(selectors)) {
    if (typeof selector !== 'function') {
      throw new TypeError(
        `Expected a selection callback for \`${field}\`, for example \`${field}: ${field} => ${field}.id()\`.`
      )
    }

    selection[field] = resolveChain(
      (selector as (chain: unknown) => unknown)(createChain())
    )
  }

  return selection
}

function isApiRoot(
  target: GraphQLCapableApiRoot | GraphqlRequestBuilderLike
): target is GraphQLCapableApiRoot {
  return typeof (target as GraphQLCapableApiRoot).graphql === 'function'
}

/**
 * The typed GraphQL client for the commercetools APIs.
 *
 * Field names, arguments and the shape of the result all come from the commercetools GraphQL
 * schema, so no GraphQL string is written by hand and a typo is a compile error.
 *
 * The client does not open its own HTTP connection: every request is handed to the generated
 * request builder, so authentication, middlewares, retries and correlation ids of the api root
 * it was created from keep applying.
 */
export class GraphQLClient {
  constructor(
    private readonly target: GraphQLCapableApiRoot | GraphqlRequestBuilderLike
  ) {}

  /**
   * Builds and prepares a query.
   *
   * ```ts
   * const data = await graphQL
   *   .query({
   *     customers: customers =>
   *       customers
   *         .where('firstName="Martha"')
   *         .sort(['lastName asc'])
   *         .limit(20)
   *         .total()
   *         .results(result => result.firstName().lastName().email()),
   *   })
   *   .executeOrThrow()
   * ```
   *
   * `where` also takes a callback, which builds the same predicate through a checked builder:
   *
   * ```ts
   * customers.where(customer => customer.firstName.is('Martha'))
   * ```
   */
  public query<TSelectors extends RootSelectors<QueryGenqlSelection, Query>>(
    selectors: TSelectors
  ): GraphQLApiRequest<FieldsSelection<Query, RootResult<TSelectors>>> {
    const operation = generateQueryOp(toSelection(selectors) as any)

    return this.send(operation.query, { variables: operation.variables })
  }

  /**
   * Builds and prepares a mutation. Same chaining syntax as {@link query}.
   *
   * ```ts
   * const data = await graphQL
   *   .mutate({
   *     createCart: createCart => createCart.draft({ currency: 'EUR' }).id().version(),
   *   })
   *   .executeOrThrow()
   * ```
   */
  public mutate<
    TSelectors extends RootSelectors<MutationGenqlSelection, Mutation>,
  >(
    selectors: TSelectors
  ): GraphQLApiRequest<FieldsSelection<Mutation, RootResult<TSelectors>>> {
    const operation = generateMutationOp(toSelection(selectors) as any)

    return this.send(operation.query, { variables: operation.variables })
  }

  /**
   * Escape hatch for an operation that is not expressed through the builder. Queries and
   * mutations both go through it, and the returned request is the same one {@link query} and
   * {@link mutate} return.
   *
   * A `TypedDocumentNode`, the interface produced by GraphQL Code Generator and gql.tada, keeps
   * the variables checked and the response data typed; a plain string resolves to `any`.
   *
   * ```ts
   * const { body } = await graphQL
   *   .rawQuery('query($limit: Int) { products(limit: $limit) { results { id } } }', {
   *     variables: { limit: 20 },
   *   })
   *   .execute()
   * ```
   */
  public rawQuery<TData = any, TVariables = Record<string, any>>(
    document: GraphQLDocument<TData, TVariables>,
    options?: GraphQLRequestOptions<TVariables>
  ): GraphQLApiRequest<TData> {
    return this.send(document, options)
  }

  private send<TData, TVariables>(
    document: GraphQLDocument<TData, TVariables>,
    options?: GraphQLRequestOptions<TVariables>
  ): GraphQLApiRequest<TData> {
    const body = toGraphQLRequestBody(document, options)

    const request = this.builder().post({
      body,
      ...(options?.headers ? { headers: options.headers } : {}),
    })

    return new GraphQLApiRequest<TData>(request, body)
  }

  private builder(): GraphqlRequestBuilderLike {
    return isApiRoot(this.target) ? this.target.graphql() : this.target
  }
}

/**
 * Creates a {@link GraphQLClient} on top of an existing api root.
 *
 * ```ts
 * const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({ projectKey })
 * const graphQL = createGraphQLClient(apiRoot)
 * ```
 *
 * A `ByProjectKeyGraphqlRequestBuilder` (`apiRoot.graphql()`) is accepted as well.
 */
export function createGraphQLClient(
  target: GraphQLCapableApiRoot | GraphqlRequestBuilderLike
): GraphQLClient {
  if (target === null || typeof target !== 'object') {
    throw new TypeError(
      'createGraphQLClient expects an api root exposing `graphql()`, or a graphql request builder.'
    )
  }

  if (!isApiRoot(target) && typeof target.post !== 'function') {
    throw new TypeError(
      'createGraphQLClient expects an api root exposing `graphql()`, or a graphql request builder exposing `post()`.'
    )
  }

  return new GraphQLClient(target)
}
