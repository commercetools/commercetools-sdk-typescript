# @commercetools/graphql-sdk

GraphQL support for the commercetools TypeScript SDK, with a schema derived query builder: one
package, one entry point, one client.

The generated SDKs already expose the GraphQL endpoint through `apiRoot.graphql().post(...)`, but
that call takes a `query` string and hands back `data: any`. This package adds the typing on top
while keeping the same transport: your existing client, authentication, middlewares, retries and
correlation ids.

## Installation

```bash
npm install --save @commercetools/graphql-sdk
```

`graphql` is a peer dependency (any 15.x or 16.x release).

## Usage

```ts
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import { createGraphQLClient } from '@commercetools/graphql-sdk'

const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({
  projectKey,
})
const graphQL = createGraphQLClient(apiRoot)

const data = await graphQL
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
  .executeOrThrow()

data.customers.total // number
data.customers.results[0].email // string
```

Arguments and projected fields are chained the same way; the builder tells them apart from the
schema. Autocomplete works at every step, and the result type contains exactly the fields chained.

The emitted document is parameterised: arguments become GraphQL variables, never string
interpolation:

```graphql
query ($v1: String, $v2: [String!], $v3: Int) {
  customers(where: $v1, sort: $v2, limit: $v3) {
    total
    count
    results {
      firstName
      lastName
      email
    }
  }
}
```

The result contains **only the fields you projected**, so reading a field that was never selected
is a compile error rather than a `null` at runtime.

List arguments take a list: `.sort(['lastName asc'])`.

The `where` predicate can be a string, or built through the
[predicate builder](#the-where-predicate).

### The `where` predicate

`where` takes a [Query Predicate](https://docs.commercetools.com/api/predicates/query) string, and
it always will. That is the escape hatch for anything the builder below does not express:

```ts
customers.where('firstName="Martha"')
```

It also takes a callback, which builds the same string through a checked builder:

```ts
const data = await graphQL
  .query({
    customers: (customers) =>
      customers
        .where((customer) =>
          customer.firstName
            .is('Martha')
            .and(customer.addresses((address) => address.city.is('Berlin')))
            .and(customer.customerGroup((group) => group.id.is(goldGroupId)))
        )
        .sort(['lastName asc'])
        .limit(20)
        .results((result) => result.firstName().lastName().email()),
  })
  .executeOrThrow()
```

which sends

```
(firstName = "Martha") and (addresses(city = "Berlin")) and (customerGroup(id = "..."))
```

Field names come from the resource being filtered, and the operators from what the field holds, so
the operators are the ones the API accepts for that field:

```ts
customer.firstName.isIn(['Peter', 'Barbara']) //  firstName in ("Peter", "Barbara")
customer.version.isGreaterThan(10) //             version > 10
customer.isEmailVerified.is(true) //              isEmailVerified = true
customer.shippingAddressIds.containsAny(ids) //   shippingAddressIds contains any (...)
customer.addresses.isEmpty() //                   addresses is empty
customer.key.isNotDefined() //                    key is not defined
category.name.locale('en').is('Peter') //         name(en = "Peter")
customer.custom((c) => c.field('size').is('M')) // custom(fields(size = "M"))
not(customer.isEmailVerified.is(true)) //         not (isEmailVerified = true)
```

`and` and `or` parenthesise each operand, so the grouping is in the predicate rather than left to
the reader. `not` is imported from the package.

A predicate the API would reject is a compile error, including the two that are easy to get wrong:
a Reference exposes only `id` and `typeId` inside a predicate, never the fields of the resource it
points at, and a localized field is addressed per locale.

```ts
customer.customerGroup((group) => group.name.is('wholesale')) // compile error
category.name.is('Peter') //                                     compile error
```

Two caveats. Where the GraphQL schema renames a field, the builder uses the name the predicate
needs, so `attributesRaw` is offered as `attributes`, matching
`variants(attributes(name = "color" and value = "red"))`. A handful of schema fields, though, have
no counterpart in the response representation a predicate is evaluated against, and are offered
even though the API will reject them. Query endpoints also restrict predicates to a documented
subset of fields, which is not machine readable, so the builder does not enforce it.

### Nesting

Nested projections chain to any depth:

```ts
graphQL.query({
  customers: (customers) =>
    customers.limit(5).results((result) =>
      result
        .id()
        .email()
        .addresses((address) => address.city().country())
    ),
})
```

### Every scalar field

`all()` selects every scalar field of a type:

```ts
graphQL.query({
  customers: (customers) => customers.results((result) => result.all()),
})
```

### Mutations

```ts
await graphQL
  .mutate({
    createCart: (createCart) =>
      createCart.draft({ currency: 'EUR' }).id().version(),
  })
  .executeOrThrow()
```

## Raw operations

`rawQuery()` is the escape hatch for an operation the builder does not express. It lives on the
same client, returns the same request type and goes through the same transport, for queries and
mutations both:

```ts
const { body } = await graphQL
  .rawQuery(
    'query ($limit: Int) { products(limit: $limit) { results { id } } }',
    {
      variables: { limit: 20 },
    }
  )
  .execute()
```

It also accepts any `TypedDocumentNode`, the interface produced by
[GraphQL Code Generator](https://the-guild.dev/graphql/codegen) and
[gql.tada](https://gql-tada.0no.co/), in which case the variables are checked and `data` is typed.
With a plain string, `data` falls back to `any`.

## Errors

The GraphQL endpoint answers with HTTP 200 even for failed operations, so `execute()` resolves with
the full response and never rejects for them:

```ts
const { body } = await graphQL.query({ ... }).execute()
if (body.errors) { /* body.errors[0].message, .locations, .path, .extensions */ }
```

`executeOrThrow()` resolves with `body.data` and rejects with a `GraphQLRequestError` carrying
`errors`, any partial `data`, and the full `response`.

## Nothing is sent until `execute()`

`query()`, `mutate()` and `rawQuery()` return a `GraphQLApiRequest`, mirroring the generated
`ApiRequest`. It exposes `clientRequest()` for the resolved HTTP request and `requestBody()` for the
GraphQL body, which is useful in tests and when logging.

## Where the schema comes from

`schema.graphqls` is committed in this package and is a copy of `api-specs/graphql/schema.sdl`
in [commercetools-api-reference](https://github.com/commercetools/commercetools-api-reference),
with the `implements` clause stripped from `type Query`.

Keeping it current is not a manual job. The `SDK Generator` workflow in that repository runs on
every change to `api-specs/**`, copies the schema into this package and then runs `make build`. The
refresh arrives as part of the usual `build(codegen): updating SDK` pull request.

To refresh it by hand, or after editing the schema locally:

```bash
make gen_graphql_builder
```

This runs [genql](https://genql.dev) over the schema and rewrites `src/builder/generated`. It is
also part of `make build`, so the generated client can never drift from the schema next to it. The
generated client is committed rather than produced at compile time, which is why the build chain
has to refresh it.

Scalars map as `Long` → `number`, `Country`/`Locale` → `string`, `Json` → `unknown`, and so on.
