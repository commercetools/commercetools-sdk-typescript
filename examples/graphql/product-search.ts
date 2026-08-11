/**
 * Product search - @commercetools/graphql-sdk
 *
 * The most argument-heavy part of the schema: the query, the post filter, the facets and the
 * sorting are all nested input objects. Written twice, as a raw GraphQL string and with the
 * builder.
 *
 * This is where the two patterns diverge most. With a raw document the input objects are
 * `Record<string, unknown>` unless you hand write their types; with the builder they are
 * checked against `SearchQueryInput` and friends.
 *
 * Run with:
 *   npx tsx examples/graphql/product-search.ts
 */
import 'dotenv/config'
import { parse } from 'graphql'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import { ClientBuilder } from '@commercetools/ts-client'
import { createGraphQLClient } from '@commercetools/graphql-sdk'
import type { TypedDocumentNode } from '@commercetools/graphql-sdk'

const projectKey = process.env.CTP_PROJECT_KEY!

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow({
    host: process.env.CTP_AUTH_URL!,
    projectKey,
    credentials: {
      clientId: process.env.CTP_CLIENT_ID!,
      clientSecret: process.env.CTP_CLIENT_SECRET!,
    },
  })
  .withHttpMiddleware({ host: process.env.CTP_API_URL! })
  .build()

const graphQL = createGraphQLClient(
  createApiBuilderFromCtpClient(client).withProjectKey({ projectKey })
)

// =========================================================================================
// 1. Raw GraphQL string
// =========================================================================================

type ProductsSearchData = {
  productsSearch: {
    total: number
    results: Array<{
      id: string
      product?: {
        key?: string | null
        masterData: {
          current: {
            name: string
            masterVariant: { sku?: string | null }
          }
        }
      } | null
    }>
  }
}

type ProductsSearchVariables = {
  query: Record<string, unknown>
  sort?: Array<Record<string, unknown>>
  limit?: number
  locale: string
}

const ProductsSearchDocument = parse(`
  query ProductsSearch(
    $query: SearchQueryInput
    $sort: [SearchSortingInput!]
    $limit: Int
    $locale: Locale!
  ) {
    productsSearch(query: $query, sort: $sort, limit: $limit) {
      total
      results {
        id
        product {
          key
          masterData {
            current {
              name(locale: $locale)
              masterVariant {
                sku
              }
            }
          }
        }
      }
    }
  }
`) as TypedDocumentNode<ProductsSearchData, ProductsSearchVariables>

async function raw() {
  const data = await graphQL
    .rawQuery(ProductsSearchDocument, {
      variables: {
        // Nothing checks this object. A misspelled `fieldTyp` or a `gte` on a field that has
        // no range support surfaces as a 400 at runtime.
        query: {
          range: {
            float: {
              field: 'variants.attributes.weight',
              fieldType: 'number',
              gte: 1.2,
              lte: 3,
            },
          },
        },
        sort: [{ field: 'variants.prices.centAmount', order: 'asc' }],
        limit: 10,
        locale: 'en',
      },
    })
    .executeOrThrow()

  console.log('\n--- raw ---')
  console.log(`matches: ${data.productsSearch.total}`)

  data.productsSearch.results.forEach((result) =>
    console.log(
      result.id,
      result.product?.masterData.current.name,
      result.product?.masterData.current.masterVariant.sku
    )
  )
}

// =========================================================================================
// 2. Schema derived builder
//
// The same search. `query` takes a `SearchQueryInput`, so the shape of the range expression
// is checked at compile time.
// =========================================================================================

async function builder() {
  const data = await graphQL
    .query({
      productsSearch: (search) =>
        search
          .query({
            range: {
              float: {
                field: 'variants.attributes.weight',
                fieldType: 'number',
                gte: 1.2,
                lte: 3,
              },
            },
          })
          .sort([{ field: 'variants.prices.centAmount', order: 'asc' }])
          .limit(10)
          .total()
          .results((result) =>
            result
              .id()
              .product((product) =>
                product
                  .key()
                  .masterData((masterData) =>
                    masterData.current((current) =>
                      current
                        .name((name) => name.locale('en'))
                        .masterVariant((variant) => variant.sku())
                    )
                  )
              )
          ),
    })
    .executeOrThrow()

  console.log('\n--- builder ---')
  console.log(`matches: ${data.productsSearch?.total}`)

  data.productsSearch?.results.forEach((result) =>
    console.log(
      result.id,
      result.product?.masterData.current?.name,
      result.product?.masterData.current?.masterVariant.sku
    )
  )

  // Compile errors, all checked against the schema:
  //   .query({ rnge: { ... } })                  -> unknown key
  //   .query({ range: { float: { gte: '1.2' } } }) -> string is not assignable to number
  //   .query({ range: { float: { lte: 3 } } })     -> `field` is required
}

// =========================================================================================
// 3. A boolean query with a post filter
// =========================================================================================

async function booleanSearch() {
  const data = await graphQL
    .query({
      productsSearch: (search) =>
        search
          .query({
            and: [
              { exists: { field: 'variants.prices' } },
              {
                range: {
                  float: {
                    field: 'variants.prices.centAmount',
                    fieldType: 'number',
                    gte: 1000,
                  },
                },
              },
            ],
          })
          .postFilter({ exists: { field: 'variants.images' } })
          .sort([{ field: 'variants.prices.centAmount', order: 'desc' }])
          .limit(10)
          .total()
          .results((result) =>
            result
              .id()
              .product((product) =>
                product.masterData((masterData) =>
                  masterData.current((current) =>
                    current
                      .name((name) => name.locale('en'))
                      .masterVariant((variant) =>
                        variant
                          .sku()
                          .prices((price) =>
                            price.value((money) =>
                              money.centAmount().currencyCode()
                            )
                          )
                      )
                  )
                )
              )
          ),
    })
    .executeOrThrow()

  console.log('\n--- boolean search ---')
  console.log(`matches: ${data.productsSearch?.total}`)

  data.productsSearch?.results.forEach((result) => {
    const current = result.product?.masterData.current
    const price = current?.masterVariant.prices?.[0]?.value

    console.log(
      current?.name,
      current?.masterVariant.sku,
      price ? `${price.centAmount / 100} ${price.currencyCode}` : 'no price'
    )
  })
}

// =========================================================================================
// 4. Facets, which come back as a union
// =========================================================================================

async function facets() {
  const data = await graphQL
    .query({
      productsSearch: (search) =>
        search
          .query({ exists: { field: 'variants.prices' } })
          .facets([
            {
              distinct: {
                name: 'countries',
                field: 'variants.prices.country',
                fieldType: 'text',
              },
            },
          ])
          .limit(5)
          .total()
          .results((result) => result.id())
          .facets((facet) =>
            facet
              .name()
              .typename()
              .on_ProductSearchFacetResultBucket((bucketed) =>
                bucketed.buckets((bucket) => bucket.key().count())
              )
          ),
    })
    .executeOrThrow()

  console.log('\n--- facets ---')
  console.log(`matches: ${data.productsSearch?.total}`)

  data.productsSearch?.facets.forEach((facet) => {
    console.log(`facet ${facet.name}`)

    if (facet.__typename === 'ProductSearchFacetResultBucket') {
      facet.buckets.forEach((bucket) =>
        console.log(`  ${bucket.key}: ${bucket.count}`)
      )
    }
  })
}

// =========================================================================================
// 5. Full text search through productProjectionSearch
// =========================================================================================

async function fullText(text: string) {
  const data = await graphQL
    .query({
      productProjectionSearch: (search) =>
        search
          .locale('en')
          .text(text)
          .fuzzy(true)
          .limit(10)
          .total()
          .results((product) =>
            product
              .id()
              .name((name) => name.locale('en'))
              .masterVariant((variant) => variant.sku())
          ),
    })
    .executeOrThrow()

  console.log('\n--- full text ---')
  console.log(`"${text}": ${data.productProjectionSearch.total} matches`)

  data.productProjectionSearch.results.forEach((product) =>
    console.log(' ', product.name, product.masterVariant.sku)
  )
}

async function main() {
  await raw()
  await builder()
  await booleanSearch()
  await facets()
  await fullText(process.env.CTP_SEARCH_TEXT ?? 'shirt')
}

main().catch((error) => {
  console.error(error.errors ?? error)
  process.exit(1)
})
