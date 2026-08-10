import { ApiRoot } from '@commercetools/platform-sdk'
import { createGraphQLClient } from '../src'

function createApiRoot(body: any = { data: {} }) {
  const executeRequest = jest.fn().mockResolvedValue({ body, statusCode: 200 })
  const apiRoot = new ApiRoot({ executeRequest }).withProjectKey({
    projectKey: 'test-project',
  })

  return { apiRoot, executeRequest }
}

describe('createGraphQLClient (builder)', () => {
  it('rejects targets that are not an api root', () => {
    expect(() => createGraphQLClient(null as any)).toThrow(TypeError)
    expect(() => createGraphQLClient('apiRoot' as any)).toThrow(TypeError)
  })

  it('rejects a root field that is not given a selection callback', () => {
    const { apiRoot } = createApiRoot()

    expect(() =>
      createGraphQLClient(apiRoot).query({ customers: true } as any)
    ).toThrow(/Expected a selection callback for `customers`/)
  })

  it('rejects a selection callback that does not return its chain', () => {
    const { apiRoot } = createApiRoot()

    expect(() =>
      createGraphQLClient(apiRoot).query({ customers: () => 42 as any })
    ).toThrow(/must return the chain it was given/)
  })
})

describe('fluent query building', () => {
  it('chains arguments and projection into one document', async () => {
    const { apiRoot, executeRequest } = createApiRoot({
      data: { customers: { total: 0, count: 0, results: [] } },
    })

    await createGraphQLClient(apiRoot)
      .query({
        customers: (customers) =>
          customers
            .where('firstName="Martha"')
            .sort(['lastName asc'])
            .limit(20)
            .total()
            .count()
            .results((result) => result.firstName().lastName().email()),
      })
      .execute()

    const request = executeRequest.mock.calls[0][0]

    expect(request.method).toBe('POST')
    expect(request.uri).toBe('/test-project/graphql')

    // Arguments become GraphQL variables, never string interpolation.
    expect(request.body.variables).toEqual({
      v1: 'firstName="Martha"',
      v2: ['lastName asc'],
      v3: 20,
    })

    const query = request.body.query.replace(/\s+/g, ' ')
    expect(query).toContain('customers(where:$v1,sort:$v2,limit:$v3)')
    expect(query).toContain('firstName')
    expect(query).toContain('lastName')
    expect(query).toContain('email')

    // Only chained fields are projected.
    expect(query).not.toContain('customerNumber')
  })

  it('supports argument order independent of projection order', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .query({
        customers: (customers) => customers.total().limit(5).count(),
      })
      .execute()

    const query = executeRequest.mock.calls[0][0].body.query.replace(
      /\s+/g,
      ' '
    )

    expect(query).toContain('customers(limit:$v1)')
    expect(query).toContain('total')
    expect(query).toContain('count')
  })

  it('omits the argument list when no arguments are chained', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .query({ customers: (customers) => customers.total() })
      .execute()

    const query = executeRequest.mock.calls[0][0].body.query.replace(
      /\s+/g,
      ' '
    )

    expect(query).toContain('customers{total}')
    expect(executeRequest.mock.calls[0][0].body.variables).toEqual({})
  })

  it('supports several root fields in one operation', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .query({
        customers: (customers) => customers.total(),
        products: (products) => products.total(),
      })
      .execute()

    const query = executeRequest.mock.calls[0][0].body.query.replace(
      /\s+/g,
      ' '
    )

    expect(query).toContain('customers{total}')
    expect(query).toContain('products{total}')
  })

  it('selects every scalar field with all()', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .query({
        customers: (customers) => customers.results((result) => result.all()),
      })
      .execute()

    const query = executeRequest.mock.calls[0][0].body.query.replace(
      /\s+/g,
      ' '
    )

    expect(query).toContain('firstName')
    expect(query).toContain('customerNumber')
  })

  it('selects a scalar field that takes arguments without passing any', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .query({
        categories: (categories) =>
          categories.results((result) => result.id().name()),
      })
      .execute()

    const request = executeRequest.mock.calls[0][0]

    expect(request.body.query.replace(/\s+/g, ' ')).toContain('{id,name}')
    expect(request.body.variables).toEqual({})
  })

  it('chains the arguments of a scalar field on the field itself', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .query({
        categories: (categories) =>
          categories.results((result) =>
            result
              .id()
              .name((name) => name.locale('en'))
              .slug((slug) => slug.locale('de'))
          ),
      })
      .execute()

    const request = executeRequest.mock.calls[0][0]

    // The locale is an argument of `name`, not of `categories`.
    expect(request.body.query.replace(/\s+/g, ' ')).toContain(
      '{id,name(locale:$v1),slug(locale:$v2)}'
    )
    expect(request.body.variables).toEqual({ v1: 'en', v2: 'de' })
  })

  it('supports nesting several levels deep', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .query({
        customers: (customers) =>
          customers.results((result) =>
            result.id().addresses((address) => address.city().country())
          ),
      })
      .execute()

    const query = executeRequest.mock.calls[0][0].body.query.replace(
      /\s+/g,
      ' '
    )

    expect(query).toContain('addresses{city,country}')
  })

  it('types the response from the chained selection', async () => {
    const { apiRoot } = createApiRoot({
      data: {
        customers: {
          total: 2,
          results: [
            { firstName: 'Martha', lastName: 'Jones', email: 'm@example.com' },
          ],
        },
      },
    })

    const data = await createGraphQLClient(apiRoot)
      .query({
        customers: (customers) =>
          customers
            .where('firstName="Martha"')
            .total()
            .results((result) => result.firstName().lastName().email()),
      })
      .executeOrThrow()

    // Compile time: read off the schema, not `any`.
    const total: number = data.customers.total
    const email: string = data.customers.results[0].email

    expect(total).toBe(2)
    expect(email).toBe('m@example.com')
  })

  it('builds mutations through the same endpoint', async () => {
    const { apiRoot, executeRequest } = createApiRoot({
      data: { createCart: { id: 'cart-id', version: 1 } },
    })

    await createGraphQLClient(apiRoot)
      .mutate({
        createCart: (createCart) =>
          createCart.draft({ currency: 'EUR' }).id().version(),
      })
      .execute()

    const request = executeRequest.mock.calls[0][0]

    expect(request.uri).toBe('/test-project/graphql')
    expect(request.body.query).toContain('mutation')
    expect(request.body.query).toContain('createCart')
    expect(request.body.variables).toEqual({ v1: { currency: 'EUR' } })
  })

  it('does not send anything before execute is called', () => {
    const { apiRoot, executeRequest } = createApiRoot()

    const request = createGraphQLClient(apiRoot).query({
      customers: (customers) => customers.total(),
    })

    expect(executeRequest).not.toHaveBeenCalled()
    expect(request.requestBody().query).toContain('customers')
  })
})
