/**
 * Customers - @commercetools/graphql-sdk
 *
 * The same query written twice: once as a raw GraphQL string, once with the schema derived
 * builder. Both go through the same client and return the same `GraphQLApiRequest`.
 *
 * Run with:
 *   npx tsx examples/graphql/customers.ts
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
//
// The document is written by hand, and so are the types describing what comes back. Nothing
// checks that the two agree - rename a field in the string and the types keep compiling.
// =========================================================================================

type CustomersData = {
  customers: {
    total: number
    count: number
    results: Array<{
      id: string
      email: string
      firstName?: string | null
      lastName?: string | null
      customerGroup?: { id: string; name: string } | null
      addresses: Array<{ city?: string | null; country: string }>
    }>
  }
}

type CustomersVariables = {
  where?: string
  sort?: string[]
  limit?: number
}

const CustomersDocument = parse(`
  query Customers($where: String, $sort: [String!], $limit: Int) {
    customers(where: $where, sort: $sort, limit: $limit) {
      total
      count
      results {
        id
        email
        firstName
        lastName
        customerGroup {
          id
          name
        }
        addresses {
          city
          country
        }
      }
    }
  }
`) as TypedDocumentNode<CustomersData, CustomersVariables>

async function raw() {
  const data = await graphQL
    .rawQuery(CustomersDocument, {
      variables: {
        where: 'firstName is defined',
        sort: ['lastName asc'],
        limit: 20,
      },
    })
    .executeOrThrow()

  console.log(`\n--- raw ---`)
  console.log(`total ${data.customers.total}, returned ${data.customers.count}`)

  data.customers.results.forEach((customer) => {
    const address = customer.addresses[0]

    console.log(
      [
        customer.email,
        `${customer.firstName ?? ''} ${customer.lastName ?? ''}`.trim() || '-',
        customer.customerGroup?.name ?? 'no group',
        address ? `${address.city ?? '?'}, ${address.country}` : 'no address',
      ].join('\t')
    )
  })
}

// =========================================================================================
// 2. Schema derived builder
//
// No GraphQL string and no hand written types. Field names, arguments and the result type
// all come from the schema, so `.firstNme()` or `.limit('20')` is a compile error, and the
// result contains exactly the fields that were chained.
// =========================================================================================

async function builder() {
  const data = await graphQL
    .query({
      customers: (customers) =>
        customers
          // arguments of the `customers` field
          .where('firstName is defined')
          .sort(['lastName asc'])
          .limit(20)
          // projection
          .total()
          .count()
          .results((customer) =>
            customer
              .id()
              .email()
              .firstName()
              .lastName()
              .customerGroup((group) => group.id().name())
              .addresses((address) => address.city().country())
          ),
    })
    .executeOrThrow()

  console.log(`\n--- builder ---`)
  console.log(`total ${data.customers.total}, returned ${data.customers.count}`)

  data.customers.results.forEach((customer) => {
    const address = customer.addresses[0]

    console.log(
      [
        customer.email,
        `${customer.firstName ?? ''} ${customer.lastName ?? ''}`.trim() || '-',
        customer.customerGroup?.name ?? 'no group',
        address ? `${address.city ?? '?'}, ${address.country}` : 'no address',
      ].join('\t')
    )
  })

  // Reading a field that was not projected is a compile error, not `undefined` at runtime:
  //   data.customers.results[0].customerNumber
}

// =========================================================================================
// 3. What each one sends
//
// Nothing leaves the process until execute(), so both documents can be printed first. The
// builder parameterises every argument; the raw document is whatever was typed.
// =========================================================================================

function documents() {
  const rawBody = graphQL
    .rawQuery(CustomersDocument, { variables: { limit: 20 } })
    .requestBody()

  const builderBody = graphQL
    .query({
      customers: (customers) =>
        customers
          .limit(20)
          .total()
          .results((customer) => customer.id().email()),
    })
    .requestBody()

  console.log('\n--- documents ---')
  console.log('raw:         ', rawBody.query.replace(/\s+/g, ' ').trim())
  console.log('raw vars:    ', JSON.stringify(rawBody.variables))
  console.log('builder:     ', builderBody.query)
  console.log('builder vars:', JSON.stringify(builderBody.variables))
}

async function main() {
  documents()
  await raw()
  await builder()
}

main().catch((error) => {
  console.error(error.errors ?? error)
  process.exit(1)
})
