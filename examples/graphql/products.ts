/**
 * Products - @commercetools/graphql-sdk
 *
 * The deepest nesting in the schema: product -> masterData -> current -> master variant ->
 * prices -> discounted price. Written twice, as a raw GraphQL string and with the builder.
 *
 * This is also where localized fields show up. In GraphQL they take an argument:
 * `name(locale: $locale)`. In the builder that argument is chained on the field itself.
 *
 * Run with:
 *   npx tsx examples/graphql/products.ts
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

type Money = { centAmount: number; currencyCode: string }

type ProductsData = {
  products: {
    total: number
    results: Array<{
      id: string
      key?: string | null
      productType: { key?: string | null; name: string }
      masterData: {
        published: boolean
        current: {
          name: string
          slug: string
          categories: Array<{ id: string; name: string }>
          masterVariant: {
            sku?: string | null
            images: Array<{ url: string; label?: string | null }>
            prices?: Array<{
              value: Money
              discounted?: { value: Money } | null
            }> | null
          }
        }
      }
    }>
  }
}

type ProductsVariables = { where?: string; limit?: number; locale?: string }

const ProductsDocument = parse(`
  query Products($where: String, $limit: Int, $locale: Locale!) {
    products(where: $where, limit: $limit) {
      total
      results {
        id
        key
        productType {
          key
          name
        }
        masterData {
          published
          current {
            name(locale: $locale)
            slug(locale: $locale)
            categories {
              id
              name(locale: $locale)
            }
            masterVariant {
              sku
              images {
                url
                label
              }
              prices {
                value {
                  centAmount
                  currencyCode
                }
                discounted {
                  value {
                    centAmount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`) as TypedDocumentNode<ProductsData, ProductsVariables>

async function raw() {
  const data = await graphQL
    .rawQuery(ProductsDocument, {
      variables: {
        where: 'masterData(published=true)',
        limit: 5,
        locale: 'en',
      },
    })
    .executeOrThrow()

  console.log('\n--- raw ---')
  console.log(`total ${data.products.total}`)

  data.products.results.forEach((product) => {
    const current = product.masterData.current
    const price = current.masterVariant.prices?.[0]
    const amount = price?.discounted?.value ?? price?.value

    console.log(
      [
        product.key ?? product.id,
        current.name,
        current.masterVariant.sku ?? '-',
        amount
          ? `${amount.centAmount / 100} ${amount.currencyCode}`
          : 'no price',
        `${current.categories.length} categories`,
      ].join('\t')
    )
  })
}

// =========================================================================================
// 2. Schema derived builder
//
// The locale is chained on `name` itself, because in the schema the argument belongs to the
// field and not to the query around it. Compare with `name(locale: $locale)` above.
// =========================================================================================

async function builder() {
  const data = await graphQL
    .query({
      products: (products) =>
        products
          .where('masterData(published=true)')
          .limit(5)
          .total()
          .results((product) =>
            product
              .id()
              .key()
              .productType((productType) => productType.key().name())
              .masterData((masterData) =>
                masterData.published().current((current) =>
                  current
                    .name((name) => name.locale('en'))
                    .slug((slug) => slug.locale('en'))
                    .categories((category) =>
                      category.id().name((name) => name.locale('en'))
                    )
                    .masterVariant((variant) =>
                      variant
                        .sku()
                        .images((image) => image.url().label())
                        .prices((price) =>
                          price
                            .value((money) => money.centAmount().currencyCode())
                            .discounted((discounted) =>
                              discounted.value((money) =>
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

  console.log('\n--- builder ---')
  console.log(`total ${data.products.total}`)

  data.products.results.forEach((product) => {
    const current = product.masterData.current
    const price = current?.masterVariant.prices?.[0]
    const amount = price?.discounted?.value ?? price?.value

    console.log(
      [
        product.key ?? product.id,
        current?.name ?? '-',
        current?.masterVariant.sku ?? '-',
        amount
          ? `${amount.centAmount / 100} ${amount.currencyCode}`
          : 'no price',
        `${current?.categories.length ?? 0} categories`,
      ].join('\t')
    )
  })
}

// =========================================================================================
// 3. Localized fields, three ways
// =========================================================================================

async function localizedFields() {
  const data = await graphQL
    .query({
      products: (products) =>
        products.limit(1).results((product) =>
          product.masterData((masterData) =>
            masterData.current((current) =>
              current
                // one locale, chosen here
                .name((name) => name.locale('en'))
                // the project's default projection - no argument at all
                .metaTitle()
                // every locale, as a list
                .slugAllLocales((slug) => slug.locale().value())
            )
          )
        ),
    })
    .executeOrThrow()

  const current = data.products.results[0]?.masterData.current

  console.log('\n--- localized fields ---')
  console.log('name (en):', current?.name)
  console.log('metaTitle:', current?.metaTitle)
  current?.slugAllLocales.forEach((slug) =>
    console.log(`slug ${slug.locale}: ${slug.value}`)
  )
}

// =========================================================================================
// 4. What each one sends
// =========================================================================================

function documents() {
  const rawBody = graphQL
    .rawQuery(ProductsDocument, { variables: { limit: 5, locale: 'en' } })
    .requestBody()

  const builderBody = graphQL
    .query({
      products: (products) =>
        products
          .limit(5)
          .results((product) =>
            product.masterData((masterData) =>
              masterData.current((current) =>
                current.name((name) => name.locale('en'))
              )
            )
          ),
    })
    .requestBody()

  console.log('\n--- documents ---')
  console.log('raw vars:    ', JSON.stringify(rawBody.variables))
  console.log('builder:     ', builderBody.query)
  console.log('builder vars:', JSON.stringify(builderBody.variables))
}

async function main() {
  documents()
  await raw()
  await builder()
  await localizedFields()
}

main().catch((error) => {
  console.error(error.errors ?? error)
  process.exit(1)
})
