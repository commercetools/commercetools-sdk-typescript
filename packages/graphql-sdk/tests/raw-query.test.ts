import { parse } from 'graphql'
import { createGraphQLClient, GraphQLRequestError } from '../src'
import type { TypedDocumentNode } from '../src'

const source = `query ProductIds($limit: Int) {
  products(limit: $limit) {
    results {
      id
    }
  }
}`

type ProductIdsData = { products: { results: Array<{ id: string }> } }
type ProductIdsVariables = { limit?: number }

const document = parse(source) as TypedDocumentNode<
  ProductIdsData,
  ProductIdsVariables
>

function createApiRoot(response: any = { body: { data: null } }) {
  const execute = jest.fn().mockResolvedValue(response)
  const clientRequest = jest.fn().mockReturnValue({ uri: '/test/graphql' })
  const post = jest.fn().mockReturnValue({ execute, clientRequest })
  const graphql = jest.fn().mockReturnValue({ post })

  return { apiRoot: { graphql }, graphql, post, execute, clientRequest }
}

describe('createGraphQLClient (raw documents)', () => {
  it('rejects targets that are not an api root or a graphql request builder', () => {
    expect(() => createGraphQLClient(null as any)).toThrow(TypeError)
    expect(() => createGraphQLClient('apiRoot' as any)).toThrow(TypeError)
    expect(() => createGraphQLClient({} as any)).toThrow(
      /graphql request builder exposing `post\(\)`/
    )
  })

  it('accepts a graphql request builder directly', async () => {
    const { apiRoot, post, execute } = createApiRoot({
      body: { data: { products: { results: [] } } },
    })

    const client = createGraphQLClient(apiRoot.graphql())
    await client.rawQuery(document).execute()

    expect(post).toHaveBeenCalledTimes(1)
    expect(execute).toHaveBeenCalledTimes(1)
  })
})

describe('GraphQLClient', () => {
  it('posts the printed document to the graphql endpoint', async () => {
    const { apiRoot, graphql, post } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .rawQuery(document, { variables: { limit: 20 } })
      .execute()

    expect(graphql).toHaveBeenCalledTimes(1)
    expect(post).toHaveBeenCalledWith({
      body: {
        query: source,
        variables: { limit: 20 },
      },
    })
  })

  it('forwards the operation name and custom headers', async () => {
    const { apiRoot, post } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .rawQuery(document, {
        operationName: 'ProductIds',
        headers: { 'X-Correlation-ID': 'abc-123' },
      })
      .execute()

    expect(post).toHaveBeenCalledWith({
      body: { query: source, operationName: 'ProductIds' },
      headers: { 'X-Correlation-ID': 'abc-123' },
    })
  })

  it('does not send a headers key when none are given', async () => {
    const { apiRoot, post } = createApiRoot()

    await createGraphQLClient(apiRoot).rawQuery(document).execute()

    expect(Object.keys(post.mock.calls[0][0])).toEqual(['body'])
  })

  it('accepts a plain query string', async () => {
    const { apiRoot, post } = createApiRoot()

    await createGraphQLClient(apiRoot).rawQuery(source).execute()

    expect(post).toHaveBeenCalledWith({ body: { query: source } })
  })

  it('does not send anything before execute is called', () => {
    const { apiRoot, post, execute } = createApiRoot()

    const request = createGraphQLClient(apiRoot).rawQuery(document)

    expect(post).toHaveBeenCalledTimes(1)
    expect(execute).not.toHaveBeenCalled()
    expect(request.requestBody()).toEqual({ query: source })
  })

  it('exposes the underlying client request', () => {
    const { apiRoot, clientRequest } = createApiRoot()

    const request = createGraphQLClient(apiRoot).rawQuery(document)

    expect(request.clientRequest()).toEqual({ uri: '/test/graphql' })
    expect(clientRequest).toHaveBeenCalledTimes(1)
  })

  it('sends raw mutations through the same endpoint', async () => {
    const { apiRoot, post } = createApiRoot()
    const mutation =
      'mutation { createCart(draft: { currency: "EUR" }) { id } }'

    await createGraphQLClient(apiRoot).rawQuery(mutation).execute()

    expect(post).toHaveBeenCalledWith({ body: { query: mutation } })
  })

  it('creates a fresh request builder for every request', async () => {
    const { apiRoot, graphql } = createApiRoot()
    const client = createGraphQLClient(apiRoot)

    await client.rawQuery(document).execute()
    await client.rawQuery(document).execute()

    expect(graphql).toHaveBeenCalledTimes(2)
  })
})

describe('GraphQLApiRequest', () => {
  it('resolves with the full client response', async () => {
    const response = {
      body: { data: { products: { results: [{ id: 'product-id' }] } } },
      statusCode: 200,
    }
    const { apiRoot } = createApiRoot(response)

    const result = await createGraphQLClient(apiRoot)
      .rawQuery(document)
      .execute()

    expect(result).toBe(response)
    expect(result.body.data.products.results[0].id).toBe('product-id')
  })

  it('does not reject when the response carries graphql errors', async () => {
    const { apiRoot } = createApiRoot({
      body: { data: null, errors: [{ message: 'Cannot query field "nope".' }] },
      statusCode: 200,
    })

    const result = await createGraphQLClient(apiRoot)
      .rawQuery(document)
      .execute()

    expect(result.body.errors).toHaveLength(1)
  })

  it('unwraps the data with executeOrThrow', async () => {
    const { apiRoot } = createApiRoot({
      body: { data: { products: { results: [{ id: 'product-id' }] } } },
    })

    const data = await createGraphQLClient(apiRoot)
      .rawQuery(document)
      .executeOrThrow()

    expect(data).toEqual({ products: { results: [{ id: 'product-id' }] } })
  })

  it('throws a GraphQLRequestError from executeOrThrow when errors are returned', async () => {
    const errors = [
      { message: 'Cannot query field "nope".' },
      { message: 'Variable "$limit" is never used.' },
    ]
    const response = {
      body: { data: { partial: true }, errors },
      statusCode: 200,
    }
    const { apiRoot } = createApiRoot(response)

    const promise = createGraphQLClient(apiRoot)
      .rawQuery(document)
      .executeOrThrow()

    await expect(promise).rejects.toThrow(GraphQLRequestError)
    await expect(promise).rejects.toThrow(
      'GraphQL request failed: Cannot query field "nope".; Variable "$limit" is never used.'
    )

    const error: GraphQLRequestError = await promise.catch((e) => e)
    expect(error.name).toBe('GraphQLRequestError')
    expect(error.errors).toEqual(errors)
    expect(error.data).toEqual({ partial: true })
    expect(error.response).toBe(response)
  })

  it('does not throw for an empty errors array', async () => {
    const { apiRoot } = createApiRoot({
      body: { data: { ok: true }, errors: [] },
    })

    await expect(
      createGraphQLClient(apiRoot).rawQuery(document).executeOrThrow()
    ).resolves.toEqual({ ok: true })
  })

  it('falls back to a generic message when errors carry none', async () => {
    const { apiRoot } = createApiRoot({ body: { errors: [{} as any] } })

    await expect(
      createGraphQLClient(apiRoot).rawQuery(document).executeOrThrow()
    ).rejects.toThrow('GraphQL request failed.')
  })
})

describe('defensive paths', () => {
  it('returns undefined when the request builder exposes no clientRequest', () => {
    const post = jest.fn().mockReturnValue({ execute: jest.fn() })

    const request = createGraphQLClient({ post }).rawQuery(document)

    expect(request.clientRequest()).toBeUndefined()
  })

  it('resolves with undefined when executeOrThrow gets no response at all', async () => {
    const { apiRoot } = createApiRoot(null)

    await expect(
      createGraphQLClient(apiRoot).rawQuery(document).executeOrThrow()
    ).resolves.toBeUndefined()
  })

  it('resolves with undefined when the body carries neither data nor errors', async () => {
    const { apiRoot } = createApiRoot({ statusCode: 200, body: {} })

    await expect(
      createGraphQLClient(apiRoot).rawQuery(document).executeOrThrow()
    ).resolves.toBeUndefined()
  })
})

describe('GraphQLRequestError', () => {
  it('keeps `data` undefined when the response carries no body', () => {
    const error = new GraphQLRequestError(
      [{ message: 'boom' }],
      undefined as any
    )

    expect(error.data).toBeUndefined()
    expect(error.message).toBe('GraphQL request failed: boom')
  })

  it('skips error entries that are empty or missing a message', () => {
    const error = new GraphQLRequestError(
      [{ message: '' } as any, undefined as any, { message: 'the real one' }],
      { body: {} }
    )

    expect(error.message).toBe('GraphQL request failed: the real one')
  })

  it('falls back to a generic message when the errors array is missing', () => {
    const error = new GraphQLRequestError(undefined as any, { body: {} })

    expect(error.message).toBe('GraphQL request failed.')
    expect(error).toBeInstanceOf(GraphQLRequestError)
    expect(error).toBeInstanceOf(Error)
  })
})
