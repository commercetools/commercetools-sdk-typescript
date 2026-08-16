import { ApiRoot } from '@commercetools/platform-sdk'
import { createGraphQLClient, not } from '../src'
import type { Predicate, ResourcePredicate } from '../src'
import type {
  Cart,
  Category,
  Customer,
  Product,
} from '../src/builder/generated'
import { createPredicateRoot, resolveWhere } from '../src/builder/where'

function createApiRoot(body: any = { data: {} }) {
  const executeRequest = jest.fn().mockResolvedValue({ body, statusCode: 200 })
  const apiRoot = new ApiRoot({ executeRequest }).withProjectKey({
    projectKey: 'test-project',
  })

  return { apiRoot, executeRequest }
}

/**
 * Builds a predicate for one resource without going through the client. Typed exactly as the
 * `where` callback is, so every case below is checked at compile time as well as at run time.
 */
function build<TResource>(
  select: (resource: ResourcePredicate<TResource>) => Predicate
): string {
  return resolveWhere(select as (resource: any) => Predicate)
}

describe('the predicate builder', () => {
  it('compares a field against a value', () => {
    expect(build<Customer>((c) => c.firstName.is('Martha'))).toBe(
      'firstName = "Martha"'
    )
    expect(build<Customer>((c) => c.firstName.isNot('Martha'))).toBe(
      'firstName != "Martha"'
    )
  })

  it('compares ranges', () => {
    expect(build<Customer>((c) => c.version.isLessThan(10))).toBe(
      'version < 10'
    )
    expect(build<Customer>((c) => c.version.isLessThanOrEqual(10))).toBe(
      'version <= 10'
    )
    expect(build<Customer>((c) => c.version.isGreaterThan(10))).toBe(
      'version > 10'
    )
    expect(build<Customer>((c) => c.version.isGreaterThanOrEqual(10))).toBe(
      'version >= 10'
    )
  })

  it('compares dates, which the schema types as strings', () => {
    expect(
      build<Customer>((c) => c.dateOfBirth.isGreaterThan('2018-10-12'))
    ).toBe('dateOfBirth > "2018-10-12"')
  })

  it('builds set membership', () => {
    expect(build<Customer>((c) => c.firstName.isIn(['Peter', 'Barbara']))).toBe(
      'firstName in ("Peter", "Barbara")'
    )
    expect(build<Customer>((c) => c.firstName.isNotIn(['Peter']))).toBe(
      'firstName not in ("Peter")'
    )
  })

  it('builds collection membership', () => {
    expect(
      build<Customer>((c) => c.shippingAddressIds.containsAll(['a', 'b']))
    ).toBe('shippingAddressIds contains all ("a", "b")')
    expect(
      build<Customer>((c) => c.shippingAddressIds.containsAny(['a', 'b']))
    ).toBe('shippingAddressIds contains any ("a", "b")')
  })

  it('builds emptiness and definedness', () => {
    expect(build<Customer>((c) => c.addresses.isEmpty())).toBe(
      'addresses is empty'
    )
    expect(build<Customer>((c) => c.addresses.isNotEmpty())).toBe(
      'addresses is not empty'
    )
    expect(build<Customer>((c) => c.key.isDefined())).toBe('key is defined')
    expect(build<Customer>((c) => c.customerGroup.isNotDefined())).toBe(
      'customerGroup is not defined'
    )
  })

  it('renders booleans and numbers unquoted', () => {
    expect(build<Customer>((c) => c.isEmailVerified.is(true))).toBe(
      'isEmailVerified = true'
    )
    expect(
      build<Cart>((cart) => cart.totalPrice((p) => p.centAmount.is(1000)))
    ).toBe('totalPrice(centAmount = 1000)')
  })

  it('escapes quotes and backslashes in string values', () => {
    expect(build<Customer>((c) => c.lastName.is('O"Brien'))).toBe(
      'lastName = "O\\"Brien"'
    )
    expect(build<Customer>((c) => c.lastName.is('a\\b'))).toBe(
      'lastName = "a\\\\b"'
    )
  })

  it('combines with and, or and not', () => {
    expect(
      build<Customer>((c) => c.firstName.is('Martha').and(c.lastName.is('Doe')))
    ).toBe('(firstName = "Martha") and (lastName = "Doe")')
    expect(
      build<Customer>((c) => c.firstName.is('Martha').or(c.lastName.is('Doe')))
    ).toBe('(firstName = "Martha") or (lastName = "Doe")')
    expect(build<Customer>((c) => not(c.isEmailVerified.is(true)))).toBe(
      'not (isEmailVerified = true)'
    )
  })

  it('parenthesises each operand so the grouping is never left to precedence', () => {
    const predicate = build<Customer>((c) =>
      c.firstName
        .is('Martha')
        .and(c.lastName.is('Doe').or(c.lastName.is('Jones')))
    )

    expect(predicate).toBe(
      '(firstName = "Martha") and ((lastName = "Doe") or (lastName = "Jones"))'
    )
  })

  it('accepts several operands in one and', () => {
    expect(
      build<Customer>((c) =>
        c.firstName.is('a').and(c.lastName.is('b'), c.key.is('c'))
      )
    ).toBe('(firstName = "a") and (lastName = "b") and (key = "c")')
  })

  it('reads the predicate string back off a built predicate', () => {
    const resource = createPredicateRoot() as ResourcePredicate<Customer>
    const predicate = resource.firstName
      .is('Martha')
      .and(resource.lastName.is('Doe'))

    expect(String(predicate)).toBe(
      '(firstName = "Martha") and (lastName = "Doe")'
    )
    expect(`${resource.version.isGreaterThan(10)}`).toBe('version > 10')
  })

  it('descends into an array of objects', () => {
    expect(
      build<Customer>((c) => c.addresses((a) => a.city.is('Berlin')))
    ).toBe('addresses(city = "Berlin")')
  })

  it('descends into a nested object', () => {
    expect(
      build<Cart>((cart) =>
        cart.totalPrice((p) => p.centAmount.isGreaterThan(1000))
      )
    ).toBe('totalPrice(centAmount > 1000)')
  })

  it('nests to any depth', () => {
    expect(
      build<Product>((p) =>
        p.masterData((d) =>
          d.current((current) => current.slug.locale('en').is('super-product'))
        )
      )
    ).toBe('masterData(current(slug(en = "super-product")))')
  })

  it('addresses a locale of a localized field', () => {
    expect(build<Category>((c) => c.name.locale('en').is('Peter'))).toBe(
      'name(en = "Peter")'
    )
    expect(build<Category>((c) => c.name.locale('en-GB').isNot('Peter'))).toBe(
      'name(en-GB != "Peter")'
    )
  })

  it('exposes a reference by id', () => {
    expect(
      build<Customer>((c) => c.customerGroup((g) => g.id.is('group-id')))
    ).toBe('customerGroup(id = "group-id")')
  })

  it('exposes a key reference by key', () => {
    expect(build<Customer>((c) => c.stores((s) => s.key.is('berlin')))).toBe(
      'stores(key = "berlin")'
    )
  })

  it('addresses a custom field by name', () => {
    expect(
      build<Customer>((c) => c.custom((x) => x.field('size').is('M')))
    ).toBe('custom(fields(size = "M"))')
    expect(
      build<Customer>((c) =>
        c.custom((x) => x.field('rating').isGreaterThan(3))
      )
    ).toBe('custom(fields(rating > 3))')
  })

  it('addresses the type of a custom field container', () => {
    expect(
      build<Customer>((c) => c.custom((x) => x.type((t) => t.id.is('type-id'))))
    ).toBe('custom(type(id = "type-id"))')
  })

  it('uses the predicate name where the schema renames a field', () => {
    // `attributesRaw` in the schema is `attributes` in a predicate.
    expect(
      build<Product>((p) =>
        p.masterData((d) =>
          d.current((current) =>
            current.variants((v) =>
              v.attributes((a) => a.name.is('color').and(a.value.is('red')))
            )
          )
        )
      )
    ).toBe(
      'masterData(current(variants(attributes((name = "color") and (value = "red")))))'
    )
  })

  it('addresses a locale of an attribute value', () => {
    expect(
      build<Product>((p) =>
        p.masterData((d) =>
          d.current((current) =>
            current.variants((v) =>
              v.attributes((a) =>
                a.name.is('color').and(a.value.locale('en-US').is('red'))
              )
            )
          )
        )
      )
    ).toBe(
      'masterData(current(variants(attributes((name = "color") and (value(en-US = "red"))))))'
    )
  })

  it('rejects a callback that does not return a predicate', () => {
    expect(() => build<Customer>(() => undefined as any)).toThrow(
      /must return a predicate/
    )
    expect(() => build<Customer>((c) => c.firstName as any)).toThrow(
      /must return a predicate/
    )
  })

  it('rejects a nested callback that does not return a predicate', () => {
    expect(() =>
      build<Customer>((c) => c.addresses(() => 'nope' as any))
    ).toThrow(/must return a predicate/)
  })

  it('does not expose symbol properties as predicate members', () => {
    const resource = createPredicateRoot()

    expect(resource[Symbol.toPrimitive]).toBeUndefined()
    expect(resource[Symbol.iterator]).toBeUndefined()
  })
})

/**
 * Predicates the API would reject, which the builder refuses to compile instead. Every
 * `@ts-expect-error` below *is* the assertion: `yarn typecheck` fails with an unused directive
 * if the line it annotates turns out to be valid. Nothing in here is meant to run.
 */
function predicatesThatMustNotCompile() {
  // @ts-expect-error `firstNam` is a typo.
  build<Customer>((c) => c.firstNam.is('Martha'))

  // @ts-expect-error `firstName` holds a string, not a number.
  build<Customer>((c) => c.firstName.is(42))

  // A Reference exposes only `id` and `typeId` inside a predicate, never the fields of the
  // resource it points at.
  // @ts-expect-error `name` is a field of the CustomerGroup, not of the reference.
  build<Customer>((c) => c.customerGroup((g) => g.name.is('wholesale')))

  // @ts-expect-error a boolean is compared for equality only.
  build<Customer>((c) => c.isEmailVerified.isGreaterThan(true))

  // @ts-expect-error `firstName` holds one value, not a collection.
  build<Customer>((c) => c.firstName.containsAny(['a']))

  // @ts-expect-error `nameAllLocales` is a projection helper, not a predicate field.
  build<Category>((c) => c.nameAllLocales.is('Peter'))

  // @ts-expect-error the predicate addresses `customerGroup`, not `customerGroupRef`.
  build<Customer>((c) => c.customerGroupRef((g) => g.id.is('group-id')))

  build<Product>((p) =>
    p.masterData((d) =>
      d.current((current) =>
        // @ts-expect-error the predicate name is `attributes`, not `attributesRaw`.
        current.variants((v) => v.attributesRaw((a) => a.name.is('color')))
      )
    )
  )
}

describe('what the predicate builder refuses to compile', () => {
  it('rejects predicates the API would reject', () => {
    // The assertions are the `@ts-expect-error` directives above, checked by `yarn typecheck`.
    // This keeps the function referenced so it is not reported as dead code.
    expect(typeof predicatesThatMustNotCompile).toBe('function')
  })
})

describe('where on the chain', () => {
  it('sends a built predicate as a variable, the same as a string', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .query({
        customers: (customers) =>
          customers
            .where((customer) =>
              customer.firstName
                .is('Martha')
                .and(customer.addresses((address) => address.city.is('Berlin')))
            )
            .limit(20)
            .total(),
      })
      .execute()

    const request = executeRequest.mock.calls[0][0]

    expect(request.body.variables).toEqual({
      v1: '(firstName = "Martha") and (addresses(city = "Berlin"))',
      v2: 20,
    })
    expect(request.body.query.replace(/\s+/g, ' ')).toContain(
      'customers(where:$v1,limit:$v2)'
    )
  })

  it('keeps taking a predicate string', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .query({
        customers: (customers) => customers.where('firstName="Martha"').total(),
      })
      .execute()

    expect(executeRequest.mock.calls[0][0].body.variables).toEqual({
      v1: 'firstName="Martha"',
    })
  })

  it('builds the predicate of a nested query field', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    await createGraphQLClient(apiRoot)
      .query({
        inStore: (inStore) =>
          inStore
            .key('berlin')
            .customers((customers) =>
              customers
                .where((customer) => customer.email.is('m@example.com'))
                .total()
            ),
      })
      .execute()

    expect(executeRequest.mock.calls[0][0].body.variables).toEqual({
      v1: 'berlin',
      v2: 'email = "m@example.com"',
    })
  })

  it('leaves a selection callback on an object field alone', async () => {
    const { apiRoot, executeRequest } = createApiRoot()

    // `results` takes a projection callback, `where` a predicate callback. Both are functions,
    // so this is the case that tells them apart.
    await createGraphQLClient(apiRoot)
      .query({
        customers: (customers) =>
          customers
            .where((customer) => customer.firstName.is('Martha'))
            .results((result) => result.firstName()),
      })
      .execute()

    const query = executeRequest.mock.calls[0][0].body.query.replace(
      /\s+/g,
      ' '
    )

    expect(query).toContain('customers(where:$v1)')
    expect(query).toContain('results{firstName}')
    expect(executeRequest.mock.calls[0][0].body.variables).toEqual({
      v1: 'firstName = "Martha"',
    })
  })

  it('types the response the same way as a string predicate', async () => {
    const { apiRoot } = createApiRoot({
      data: { customers: { total: 1, results: [{ email: 'm@example.com' }] } },
    })

    const data = await createGraphQLClient(apiRoot)
      .query({
        customers: (customers) =>
          customers
            .where((customer) => customer.firstName.is('Martha'))
            .total()
            .results((result) => result.email()),
      })
      .executeOrThrow()

    const total: number = data.customers.total
    const email: string = data.customers.results[0].email

    expect(total).toBe(1)
    expect(email).toBe('m@example.com')
  })

  it('checks the resource a nested where filters over', async () => {
    const { apiRoot } = createApiRoot()

    createGraphQLClient(apiRoot).query({
      customers: (customers) =>
        customers
          // @ts-expect-error `orderState` belongs to an Order, not to a Customer.
          .where((customer) => customer.orderState.is('Confirmed'))
          .total(),
    })
  })
})
