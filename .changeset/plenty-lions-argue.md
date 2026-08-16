---
'@commercetools/graphql-sdk': patch
---

Add an optional fluent builder for the `where` query predicate.

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
would reject is a compile error.
