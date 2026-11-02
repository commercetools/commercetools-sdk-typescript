/**
 * Project - @commercetools/graphql-sdk
 *
 * The project settings, plus the two things they show off best:
 *
 *   - an interface field, where a concrete implementation is selected with an inline
 *     fragment in GraphQL and with an `on_<Type>` branch in the builder
 *   - several root fields in one operation, which is one round trip either way
 *
 * Run with:
 *   npx tsx examples/graphql/project.ts
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

type ProjectData = {
  project: {
    key: string
    name: string
    version: number
    languages: string[]
    currencies: string[]
    countries: string[]
    carts: {
      deleteDaysAfterLastModification?: number | null
      countryTaxRateFallbackEnabled: boolean
    }
    messages: { enabled: boolean; deleteDaysAfterCreation?: number | null }
  }
}

const ProjectDocument = parse(`
  query Project {
    project {
      key
      name
      version
      languages
      currencies
      countries
      carts {
        deleteDaysAfterLastModification
        countryTaxRateFallbackEnabled
      }
      messages {
        enabled
        deleteDaysAfterCreation
      }
    }
  }
`) as TypedDocumentNode<ProjectData, Record<string, never>>

async function raw() {
  const data = await graphQL.rawQuery(ProjectDocument).executeOrThrow()
  const { project } = data

  console.log('\n--- raw ---')
  console.log(`project:    ${project.name} (${project.key})`)
  console.log(`version:    ${project.version}`)
  console.log(`languages:  ${project.languages.join(', ')}`)
  console.log(`currencies: ${project.currencies.join(', ')}`)
  console.log(`countries:  ${project.countries.join(', ')}`)
  console.log(
    `messages:   ${project.messages.enabled ? 'enabled' : 'disabled'}`
  )
}

// =========================================================================================
// 2. Schema derived builder
// =========================================================================================

async function builder() {
  const data = await graphQL
    .query({
      project: (project) =>
        project
          .key()
          .name()
          .version()
          .languages()
          .currencies()
          .countries()
          .carts((carts) =>
            carts
              .deleteDaysAfterLastModification()
              .countryTaxRateFallbackEnabled()
          )
          .messages((messages) => messages.enabled().deleteDaysAfterCreation()),
    })
    .executeOrThrow()

  const { project } = data

  console.log('\n--- builder ---')
  console.log(`project:    ${project.name} (${project.key})`)
  console.log(`version:    ${project.version}`)
  console.log(`languages:  ${project.languages.join(', ')}`)
  console.log(`currencies: ${project.currencies.join(', ')}`)
  console.log(`countries:  ${project.countries.join(', ')}`)
  console.log(
    `messages:   ${project.messages.enabled ? 'enabled' : 'disabled'}`
  )
}

// =========================================================================================
// 3. An interface field
//
// Raw GraphQL uses an inline fragment:
//
//   shippingRateInputType {
//     type
//     __typename
//     ... on CartClassificationType { values { key label(locale: $locale) } }
//   }
//
// The builder writes the same thing as an `on_<Type>` branch, and the result is a union
// discriminated by `__typename`.
// =========================================================================================

type ShippingRateInputTypeData = {
  project: {
    key: string
    shippingRateInputType?: {
      type: string
      __typename: string
      values?: Array<{ key: string; label: string }>
    } | null
  }
}

const ShippingRateInputTypeDocument = parse(`
  query ShippingRateInputType($locale: Locale!) {
    project {
      key
      shippingRateInputType {
        type
        __typename
        ... on CartClassificationType {
          values {
            key
            label(locale: $locale)
          }
        }
      }
    }
  }
`) as TypedDocumentNode<ShippingRateInputTypeData, { locale: string }>

async function rawInterface() {
  const data = await graphQL
    .rawQuery(ShippingRateInputTypeDocument, { variables: { locale: 'en' } })
    .executeOrThrow()

  const inputType = data.project.shippingRateInputType

  console.log('\n--- raw interface ---')

  if (!inputType) {
    console.log('no shipping rate input type configured')
    return
  }

  console.log('type:', inputType.type, `(${inputType.__typename})`)
  inputType.values?.forEach((value) => console.log(' ', value.key, value.label))
}

async function builderInterface() {
  const data = await graphQL
    .query({
      project: (project) =>
        project.key().shippingRateInputType((inputType) =>
          inputType
            .type()
            .typename()
            .on_CartClassificationType((classification) =>
              classification.values((value) =>
                value.key().label((label) => label.locale('en'))
              )
            )
        ),
    })
    .executeOrThrow()

  const inputType = data.project.shippingRateInputType

  console.log('\n--- builder interface ---')

  if (!inputType) {
    console.log('no shipping rate input type configured')
    return
  }

  console.log('type:', inputType.type, `(${inputType.__typename})`)

  // `values` only exists on the CartClassificationType branch, so the narrowing is required.
  if (inputType.__typename === 'CartClassificationType') {
    inputType.values.forEach((value) =>
      console.log(' ', value.key, value.label)
    )
  }
}

// =========================================================================================
// 4. Several root fields, one round trip
// =========================================================================================

async function dashboard() {
  const data = await graphQL
    .query({
      project: (project) => project.key().languages(),
      products: (products) => products.limit(1).total(),
      categories: (categories) => categories.limit(1).total(),
      customers: (customers) => customers.limit(1).total(),
      orders: (orders) => orders.limit(1).total(),
    })
    .executeOrThrow()

  console.log('\n--- dashboard ---')
  console.log(`project:    ${data.project.key}`)
  console.log(`products:   ${data.products.total}`)
  console.log(`categories: ${data.categories.total}`)
  console.log(`customers:  ${data.customers.total}`)
  console.log(`orders:     ${data.orders.total}`)
}

async function main() {
  await raw()
  await builder()
  await rawInterface()
  await builderInterface()
  await dashboard()
}

main().catch((error) => {
  console.error(error.errors ?? error)
  process.exit(1)
})
