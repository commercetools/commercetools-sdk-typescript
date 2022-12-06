---
"@commercetools/history-sdk": minor
"@commercetools/platform-sdk": minor
---

Update generated SDKs

#### Summary
- The get method of `ByProjectKeyInStoreKeyByStoreKeyProductProjectionsByIDRequestBuilder` class now supports an optional `stage` property
  - [Diff link](packages/platform-sdk/src/generated/client/product-projections/by-project-key-in-store-key-by-store-key-product-projections-by-id-request-builder.ts)
  
- The get method of `ByProjectKeyInStoreKeyByStoreKeyProductProjectionsKeyByKeyRequestBuilder` class now supports an optional `stage` property
  - [Diff link](packages/platform-sdk/src/generated/client/product-projections/by-project-key-in-store-key-by-store-key-product-projections-key-by-key-request-builder.ts)
  

#### Snippet
```diff
...
  queryArgs?: {
+   staged?: boolean
    priceCurrency?: string
    priceCountry?: string
    priceCustomerGroup?: string,
    ...
  }
  ...
}) {}
```


- The `get`, `post` and `delete` method query args. of `ByProjectKeyProductsByIDRequestBuilder` class now supports optional `localeProjection` property
  - [Diff link](packages/platform-sdk/src/generated/client/products/by-project-key-products-by-id-request-builder.ts)
  
- The `get` and `post` method query args. of the `ByProjectKeyProductsRequestBuilder` class now supports an optional `localeProjection` property.
  - [Diff link](packages/platform-sdk/src/generated/client/products/by-project-key-products-request-builder.ts)


```diff
...
  queryArgs?: {
    where?: string | string[]
    priceCurrency?: string
    priceCountry?: string
    priceCustomerGroup?: string
    priceChannel?: string
+   localeProjection?: string | string[]
    expand?: string | string[]
    sort?: string | string[]
    limit?: number
    offset?: number
    withTotal?: boolean
    [key: string]: QueryParam
  }
...
```

The complete changes can be found [here](changes.md)
