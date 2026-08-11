# GraphQL examples

Examples for [`@commercetools/graphql-sdk`](../../packages/graphql-sdk). Every file is
standalone and runs on its own — there is no shared entry point and no build step:

```bash
npx tsx examples/graphql/products.ts
```

Each file answers the same question twice, so the two patterns can be read side by side:

1. **a raw GraphQL string** — you write the document and the types that describe the response
2. **the schema derived builder** — you chain the query, and both the document and the types
   come from the schema

Both go through the same `GraphQLClient` and return the same `GraphQLApiRequest`, so the
choice is per call site, not per project.

## Setup

Copy `.env.sample` to `.env` and fill in your
[API client](https://docs.commercetools.com/api/getting-started/initial-setup#creating-an-api-client)
credentials:

```bash
cp examples/graphql/.env.sample examples/graphql/.env
```

`CTP_PROJECT_KEY`, `CTP_CLIENT_ID`, `CTP_CLIENT_SECRET`, `CTP_AUTH_URL` and `CTP_API_URL` are
required. The rest are optional — the examples that write to your project, or that need a
specific resource, print a note and skip themselves unless the matching variable is set.

## The examples

| File                                       | Resource       | Beyond the basics                                                                     |
| ------------------------------------------ | -------------- | ------------------------------------------------------------------------------------- |
| [`customers.ts`](./customers.ts)           | customers      | groups and addresses; prints the document each pattern sends                          |
| [`products.ts`](./products.ts)             | products       | the deepest nesting in the schema; localized fields three ways                        |
| [`categories.ts`](./categories.ts)         | categories     | self-referencing children and ancestors; breadcrumbs                                  |
| [`carts.ts`](./carts.ts)                   | carts          | read, then create/update/delete through update actions — mutations in both patterns   |
| [`orders.ts`](./orders.ts)                 | orders         | the widest query: states, payments, transactions, line items                          |
| [`project.ts`](./project.ts)               | project        | an interface field (inline fragment vs `on_<Type>`); several root fields in one query |
| [`product-search.ts`](./product-search.ts) | product search | deeply nested input objects, post filters, facet unions, full text search             |

`carts.ts` and `orders.ts` contain mutations that write to your project. They are skipped
unless `CTP_SKU` / `CTP_ORDER_ID` are set, and `carts.ts` deletes the carts it creates.

## How the two patterns differ

**Arguments.** Raw GraphQL declares variables at the top of the document and passes them at
the call site. The builder chains them, and turns each one into a variable for you:

```ts
// raw
graphQL.rawQuery(
  `query ($where: String, $limit: Int) {
     customers(where: $where, limit: $limit) { total }
   }`,
  { variables: { where: 'firstName is defined', limit: 20 } }
)

// builder -> query ($v1: String, $v2: Int) { customers(where: $v1, limit: $v2) { total } }
graphQL.query({
  customers: (customers) =>
    customers.where('firstName is defined').limit(20).total(),
})
```

**Localized fields.** In the schema the locale is an argument of the field, not of the query
around it, so the builder chains it on the field:

```graphql
name(locale: $locale)
```

```ts
current.name((name) => name.locale('en')) // name(locale: $v1)
current.name() // name
current.nameAllLocales((n) => n.locale().value()) // nameAllLocales { locale value }
```

**Interfaces and unions.** An inline fragment becomes an `on_<Type>` branch, and the result is
narrowed by `__typename`:

```graphql
shippingRateInputType {
  type
  __typename
  ... on CartClassificationType { values { key } }
}
```

```ts
project.shippingRateInputType((inputType) =>
  inputType
    .type()
    .typename()
    .on_CartClassificationType((c) => c.values((v) => v.key()))
)
```

**Types.** With a raw document the response type is whatever you declare, and nothing checks
that it matches the string — a renamed field keeps compiling and fails at runtime. With the
builder the result type is derived from the chain, so it contains exactly the fields that
were selected and nothing else. Reading a field you did not project is a compile error.

`rawQuery()` also accepts any `TypedDocumentNode`, so if you already generate types from your
`.graphql` files with [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) or
[gql.tada](https://gql-tada.0no.co/), the raw pattern is typed too — that is what these
examples use.

## Typechecking

```bash
yarn preconstruct build
npx tsc -p examples/graphql/tsconfig.json
```
