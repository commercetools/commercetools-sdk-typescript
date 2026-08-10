# @commercetools/graphql-sdk

GraphQL support for the commercetools TypeScript SDK, with a schema derived query builder.

This is the counterpart of the Java SDK's `commercetools-graphql-api` module and the .NET SDK's
`commercetools.Sdk.GraphQL.Api` project: one package, one entry point, one client.

The generated SDKs already expose the GraphQL endpoint through `apiRoot.graphql().post(...)`, but
that call takes a `query` string and hands back `data: any`. This package keeps the same transport -
your existing client, authentication, middlewares, retries and correlation ids - and adds the typing
on top.

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

The emitted document is parameterised - arguments become GraphQL variables, never string
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

### Compared with the other SDKs

```java
// Java
GraphQL.customers(query -> query.sort(singletonList("id asc")).where("firstName=\"Martha\""))
       .projection(root -> root.results().firstName().lastName().email())
```

```csharp
// .NET
var sort = new[] { "id asc" };
client.Query(o => o.Customers(where: "firstName=\"Martha\"", sort: sort,
    selector: c => new { Results = c.Results(r => new { r.FirstName, r.LastName, r.Email }) }))
```

```ts
// TypeScript
graphQL.query({
  customers: (customers) =>
    customers
      .where('firstName="Martha"')
      .sort(['id asc'])
      .results((result) => result.firstName().lastName().email()),
})
```

One deliberate difference from Java: the result contains **only the fields you projected**. In Java
the projection roots hand back the full `Customer`, so `getCustomerNumber()` compiles even when it
was never projected and quietly returns `null`. Here that is a compile error.

List arguments take a list, as they do in Java (`singletonList("id asc")`) and .NET
(`new[] { "id asc" }`): `.sort(['lastName asc'])`.

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

`all()` selects every scalar field of a type, the closest equivalent of Java's unprojected response
models:

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

`rawQuery()` is the escape hatch for an operation the builder does not express, the counterpart of
the Java SDK's `GraphQL.query(String)`. It lives on the same client, returns the same request type
and goes through the same transport - queries and mutations both:

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

## Regenerating after a schema change

`schema.graphqls` is committed in this package. After updating it:

```bash
make gen_graphql_builder
```

This runs [genql](https://genql.dev) over the schema and rewrites `src/builder/generated`, the same
way the Java SDK runs DGS codegen and the .NET SDK runs the ZeroQL source generator. The scalar
mapping matches those two SDKs (`Long` → `number`, `Country`/`Locale` → `string`, `Json` →
`unknown`, and so on).
