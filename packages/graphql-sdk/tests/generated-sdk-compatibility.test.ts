import { ApiRoot as HistoryApiRoot } from '@commercetools/history-sdk'
import { ApiRoot } from '@commercetools/platform-sdk'
import { parse } from 'graphql'
import { createGraphQLClient } from '../src'
import type { GraphQLCapableApiRoot, TypedDocumentNode } from '../src'

/**
 * The bridge types the generated request builders structurally, so that a single client
 * works with every SDK exposing `graphql()`. These tests pin that structural contract
 * against the real generated code instead of a hand written mock.
 */

const source = `query ProductIds {
  products {
    results {
      id
    }
  }
}`

type ProductIdsData = { products: { results: Array<{ id: string }> } }

const document = parse(source) as TypedDocumentNode<ProductIdsData, {}>

describe('compatibility with the generated SDKs', () => {
  it('accepts the platform-sdk project request builder', async () => {
    const executeRequest = jest.fn().mockResolvedValue({
      body: { data: { products: { results: [{ id: 'product-id' }] } } },
      statusCode: 200,
    })

    const apiRoot = new ApiRoot({ executeRequest }).withProjectKey({
      projectKey: 'test-project',
    })

    // Compile time check: the generated builder satisfies the structural contract.
    const typedRoot: GraphQLCapableApiRoot = apiRoot

    const data = await createGraphQLClient(typedRoot)
      .rawQuery(document)
      .executeOrThrow()

    expect(data.products.results[0].id).toBe('product-id')

    const request = executeRequest.mock.calls[0][0]
    expect(request.method).toBe('POST')
    expect(request.uri).toBe('/test-project/graphql')
    expect(request.body).toEqual({ query: source })
    expect(request.headers['Content-Type']).toBe('application/json')
  })

  it('accepts the platform-sdk graphql request builder', () => {
    const apiRoot = new ApiRoot({ executeRequest: jest.fn() })
      .withProjectKey({ projectKey: 'test-project' })
      .graphql()

    const request = createGraphQLClient(apiRoot).rawQuery(document)

    expect((request.clientRequest() as any).uri).toBe('/test-project/graphql')
  })

  it('keeps the base uri configured on the api root', async () => {
    const executeRequest = jest
      .fn()
      .mockResolvedValue({ body: { data: {} }, statusCode: 200 })

    const apiRoot = new ApiRoot({
      executeRequest,
      baseUri: 'https://api.custom.example.com',
    }).withProjectKey({ projectKey: 'test-project' })

    await createGraphQLClient(apiRoot).rawQuery(document).execute()

    expect(executeRequest.mock.calls[0][0].baseUri).toBe(
      'https://api.custom.example.com'
    )
  })

  it('accepts the history-sdk project request builder', async () => {
    const executeRequest = jest
      .fn()
      .mockResolvedValue({ body: { data: {} }, statusCode: 200 })

    const apiRoot = new HistoryApiRoot({ executeRequest }).withProjectKeyValue({
      projectKey: 'test-project',
    })

    await createGraphQLClient(apiRoot).rawQuery(source).execute()

    expect(executeRequest.mock.calls[0][0].uri).toBe('/test-project/graphql')
  })

  it('merges custom headers with the generated content type header', async () => {
    const executeRequest = jest
      .fn()
      .mockResolvedValue({ body: { data: {} }, statusCode: 200 })

    const apiRoot = new ApiRoot({ executeRequest }).withProjectKey({
      projectKey: 'test-project',
    })

    await createGraphQLClient(apiRoot)
      .rawQuery(document, { headers: { 'X-Correlation-ID': 'abc-123' } })
      .execute()

    expect(executeRequest.mock.calls[0][0].headers).toEqual({
      'Content-Type': 'application/json',
      'X-Correlation-ID': 'abc-123',
    })
  })
})
