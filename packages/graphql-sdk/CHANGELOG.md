# @commercetools/graphql-sdk

## 0.1.1

### Patch Changes

- [#1452](https://github.com/commercetools/commercetools-sdk-typescript/pull/1452) [`d75faf7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d75faf7d6b70cf910f716f8e7750662a4209f31a) Thanks [@ajimae](https://github.com/ajimae)! - Add an optional fluent builder for the `where` query predicate.

  `where` keeps taking a predicate string exactly as before, and now also takes a callback that
  builds one through a checked builder derived from the resource being filtered:

  ```ts
  customers.where((customer) =>
    customer.firstName
      .is('Martha')
      .and(customer.addresses((address) => address.city.is('Berlin')))
  )
  ```

  Field names come from the resource, operators from what the field holds, so a predicate the API
  would reject is a compile error. Attribute and Custom Field values are descended into for the
  types the schema cannot express (`value(centAmount = 999 and currencyCode = "EUR")`), and a
  GeoJSON field is matched with `withinCircle(longitude, latitude, radiusInMeters)`.

## 0.1.0

### Minor Changes

- [#1444](https://github.com/commercetools/commercetools-sdk-typescript/pull/1444) [`21bc3ce`](https://github.com/commercetools/commercetools-sdk-typescript/commit/21bc3cef274c20c4502ac9c9ab9c1112da5f911f) Thanks [@ajimae](https://github.com/ajimae)! - Add `@commercetools/graphql-sdk`, GraphQL support for the commercetools TypeScript SDK.

  A single package with a single entry point and a single client, mirroring the Java SDK's
  `commercetools-graphql-api` module and the .NET SDK's `commercetools.Sdk.GraphQL.Api` project.
  `createGraphQLClient(apiRoot)` is the counterpart of .NET's `apiRoot.GraphQLClient()` extension, and
  the schema derived builder is the counterpart of Java's `GraphQL.customers(...).projection(...)`:

  ```ts
  const graphQL = createGraphQLClient(apiRoot)

  const data = await graphQL
    .query({
      customers: (customers) =>
        customers
          .where('firstName="Martha"')
          .sort(['lastName asc'])
          .limit(20)
          .total()
          .results((result) => result.firstName().lastName().email()),
    })
    .executeOrThrow()
  ```

  `mutate()` builds mutations with the same chaining syntax. `rawQuery()` is the escape hatch for an
  operation the builder does not express - the counterpart of Java's `GraphQL.query(String)` - and
  accepts a query string or any `TypedDocumentNode`, returning the same request type.

  Requests are sent through the api root the client was created from, so authentication, middlewares,
  retries and correlation ids keep applying.
