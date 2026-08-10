/**
 * Orders - @commercetools/graphql-sdk
 *
 * The widest query in the schema: the customer, the workflow state, the payments and their
 * transactions, and the line items all in one round trip. Written twice, as a raw GraphQL
 * string and with the builder.
 *
 * Run with:
 *   npx tsx examples/graphql/orders.ts
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

type OrdersData = {
  orders: {
    total: number
    results: Array<{
      id: string
      orderNumber?: string | null
      orderState: string
      paymentState?: string | null
      createdAt: string
      totalPrice: Money
      customer?: { id: string; email: string } | null
      state?: { key: string; name?: string | null } | null
      lineItems: Array<{
        id: string
        quantity: number
        name: string
        variant?: { sku?: string | null } | null
      }>
      paymentInfo?: {
        payments: Array<{
          id: string
          transactions: Array<{
            id: string
            type: string
            state: string
            amount: Money
          }>
        }>
      } | null
    }>
  }
}

type OrdersVariables = { where?: string; limit?: number; locale?: string }

const OrdersDocument = parse(`
  query Orders($where: String, $limit: Int, $locale: Locale!) {
    orders(where: $where, limit: $limit, sort: ["createdAt desc"]) {
      total
      results {
        id
        orderNumber
        orderState
        paymentState
        createdAt
        totalPrice {
          centAmount
          currencyCode
        }
        customer {
          id
          email
        }
        state {
          key
          name(locale: $locale)
        }
        lineItems {
          id
          quantity
          name(locale: $locale)
          variant {
            sku
          }
        }
        paymentInfo {
          payments {
            id
            transactions {
              id
              type
              state
              amount {
                centAmount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`) as TypedDocumentNode<OrdersData, OrdersVariables>

async function raw() {
  const data = await graphQL
    .rawQuery(OrdersDocument, {
      variables: { where: 'orderState="Open"', limit: 10, locale: 'en' },
    })
    .executeOrThrow()

  console.log('\n--- raw ---')
  console.log(`open orders: ${data.orders.total}`)

  data.orders.results.forEach((order) => {
    console.log(
      `\n${order.orderNumber ?? order.id}  ${order.totalPrice.centAmount / 100} ${order.totalPrice.currencyCode}`
    )
    console.log(`  customer: ${order.customer?.email ?? 'anonymous'}`)
    console.log(`  state:    ${order.state?.name ?? order.orderState}`)

    order.lineItems.forEach((lineItem) =>
      console.log(
        `    ${lineItem.quantity} x ${lineItem.name} (${lineItem.variant?.sku ?? '-'})`
      )
    )

    order.paymentInfo?.payments.forEach((payment) =>
      payment.transactions.forEach((transaction) =>
        console.log(
          `    payment ${payment.id}: ${transaction.type} ${transaction.state} ${transaction.amount.centAmount / 100}`
        )
      )
    )
  })
}

// =========================================================================================
// 2. Schema derived builder
// =========================================================================================

async function builder() {
  const data = await graphQL
    .query({
      orders: (orders) =>
        orders
          .where('orderState="Open"')
          .sort(['createdAt desc'])
          .limit(10)
          .total()
          .results((order) =>
            order
              .id()
              .orderNumber()
              .orderState()
              .paymentState()
              .createdAt()
              .totalPrice((money) => money.centAmount().currencyCode())
              .customer((customer) => customer.id().email())
              .state((state) => state.key().name((name) => name.locale('en')))
              .lineItems((lineItem) =>
                lineItem
                  .id()
                  .quantity()
                  .name((name) => name.locale('en'))
                  .variant((variant) => variant.sku())
              )
              .paymentInfo((paymentInfo) =>
                paymentInfo.payments((payment) =>
                  payment.id().transactions((transaction) =>
                    transaction
                      .id()
                      .type()
                      .state()
                      .amount((money) => money.centAmount().currencyCode())
                  )
                )
              )
          ),
    })
    .executeOrThrow()

  console.log('\n--- builder ---')
  console.log(`open orders: ${data.orders.total}`)

  data.orders.results.forEach((order) => {
    console.log(
      `\n${order.orderNumber ?? order.id}  ${order.totalPrice.centAmount / 100} ${order.totalPrice.currencyCode}`
    )
    console.log(`  customer: ${order.customer?.email ?? 'anonymous'}`)
    console.log(`  state:    ${order.state?.name ?? order.orderState}`)

    order.lineItems.forEach((lineItem) =>
      console.log(
        `    ${lineItem.quantity} x ${lineItem.name} (${lineItem.variant?.sku ?? '-'})`
      )
    )

    order.paymentInfo?.payments.forEach((payment) =>
      payment.transactions.forEach((transaction) =>
        console.log(
          `    payment ${payment.id}: ${transaction.type} ${transaction.state} ${transaction.amount.centAmount / 100}`
        )
      )
    )
  })
}

// =========================================================================================
// 3. Moving an order through its workflow
// =========================================================================================

async function transition(id: string, version: number) {
  const data = await graphQL
    .mutate({
      updateOrder: (updateOrder) =>
        updateOrder
          .id(id)
          .version(version)
          .actions([
            { changeOrderState: { orderState: 'Confirmed' } },
            { changePaymentState: { paymentState: 'Paid' } },
          ])
          .id()
          .version()
          .orderState()
          .paymentState(),
    })
    .executeOrThrow()

  console.log('\n--- transition ---')
  console.log(
    'order is now',
    data.updateOrder?.orderState,
    data.updateOrder?.paymentState
  )
}

// =========================================================================================
// 4. What each one sends
// =========================================================================================

function documents() {
  const rawBody = graphQL
    .rawQuery(OrdersDocument, { variables: { limit: 10, locale: 'en' } })
    .requestBody()

  const builderBody = graphQL
    .query({
      orders: (orders) =>
        orders
          .limit(10)
          .results((order) =>
            order.id().state((state) => state.name((name) => name.locale('en')))
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

  const id = process.env.CTP_ORDER_ID
  const version = process.env.CTP_ORDER_VERSION

  if (id && version) {
    await transition(id, Number(version))
  } else {
    console.log(
      '\nset CTP_ORDER_ID and CTP_ORDER_VERSION to run the transition example (it writes)'
    )
  }
}

main().catch((error) => {
  console.error(error.errors ?? error)
  process.exit(1)
})
