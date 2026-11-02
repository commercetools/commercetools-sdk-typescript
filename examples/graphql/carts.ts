/**
 * Carts - @commercetools/graphql-sdk
 *
 * Where a query and a mutation meet: read a cart, then send update actions against the
 * version that was read. Both patterns are shown for both, as a raw GraphQL string and with
 * the builder.
 *
 * Run with:
 *   npx tsx examples/graphql/carts.ts
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
// 1. Reading carts - raw GraphQL string
// =========================================================================================

type Money = { centAmount: number; currencyCode: string }

type CartsData = {
  carts: {
    total: number
    results: Array<{
      id: string
      version: number
      cartState: string
      totalPrice: Money
      shippingAddress?: { city?: string | null; country: string } | null
      shippingInfo?: { shippingMethodName: string; price: Money } | null
      lineItems: Array<{
        id: string
        quantity: number
        name: string
        variant?: { sku?: string | null } | null
        totalPrice: Money
      }>
    }>
  }
}

type CartsVariables = { where?: string; limit?: number; locale?: string }

const CartsDocument = parse(`
  query Carts($where: String, $limit: Int, $locale: Locale!) {
    carts(where: $where, limit: $limit, sort: ["lastModifiedAt desc"]) {
      total
      results {
        id
        version
        cartState
        totalPrice {
          centAmount
          currencyCode
        }
        shippingAddress {
          city
          country
        }
        shippingInfo {
          shippingMethodName
          price {
            centAmount
            currencyCode
          }
        }
        lineItems {
          id
          quantity
          name(locale: $locale)
          variant {
            sku
          }
          totalPrice {
            centAmount
            currencyCode
          }
        }
      }
    }
  }
`) as TypedDocumentNode<CartsData, CartsVariables>

async function rawRead() {
  const data = await graphQL
    .rawQuery(CartsDocument, {
      variables: { where: 'cartState="Active"', limit: 5, locale: 'en' },
    })
    .executeOrThrow()

  console.log('\n--- raw read ---')
  console.log(`active carts: ${data.carts.total}`)

  data.carts.results.forEach((cart) => {
    console.log(
      `${cart.id}  ${cart.totalPrice.centAmount / 100} ${cart.totalPrice.currencyCode}  via ${cart.shippingInfo?.shippingMethodName ?? 'no shipping method'}`
    )
    cart.lineItems.forEach((lineItem) =>
      console.log(
        `  ${lineItem.quantity} x ${lineItem.name} (${lineItem.variant?.sku ?? '-'})`
      )
    )
  })
}

// =========================================================================================
// 2. Reading carts - schema derived builder
// =========================================================================================

async function builderRead() {
  const data = await graphQL
    .query({
      carts: (carts) =>
        carts
          .where('cartState="Active"')
          .sort(['lastModifiedAt desc'])
          .limit(5)
          .total()
          .results((cart) =>
            cart
              .id()
              .version()
              .cartState()
              .totalPrice((money) => money.centAmount().currencyCode())
              .shippingAddress((address) => address.city().country())
              .shippingInfo((shipping) =>
                shipping
                  .shippingMethodName()
                  .price((money) => money.centAmount().currencyCode())
              )
              .lineItems((lineItem) =>
                lineItem
                  .id()
                  .quantity()
                  .name((name) => name.locale('en'))
                  .variant((variant) => variant.sku())
                  .totalPrice((money) => money.centAmount().currencyCode())
              )
          ),
    })
    .executeOrThrow()

  console.log('\n--- builder read ---')
  console.log(`active carts: ${data.carts.total}`)

  data.carts.results.forEach((cart) => {
    console.log(
      `${cart.id}  ${cart.totalPrice.centAmount / 100} ${cart.totalPrice.currencyCode}  via ${cart.shippingInfo?.shippingMethodName ?? 'no shipping method'}`
    )
    cart.lineItems.forEach((lineItem) =>
      console.log(
        `  ${lineItem.quantity} x ${lineItem.name} (${lineItem.variant?.sku ?? '-'})`
      )
    )
  })
}

// =========================================================================================
// 3. Mutations - raw GraphQL string
//
// The update actions are a `[CartUpdateAction!]!` variable. Nothing checks its shape here:
// it is whatever the hand written type below says it is.
// =========================================================================================

type CreateCartData = {
  createCart: { id: string; version: number; cartState: string }
}

const CreateCartDocument = parse(`
  mutation CreateCart($draft: CartDraft!) {
    createCart(draft: $draft) {
      id
      version
      cartState
    }
  }
`) as TypedDocumentNode<CreateCartData, { draft: Record<string, unknown> }>

type UpdateCartData = {
  updateCart: {
    id: string
    version: number
    totalPrice: Money
    lineItems: Array<{ id: string; quantity: number }>
  }
}

const UpdateCartDocument = parse(`
  mutation UpdateCart($id: String!, $version: Long!, $actions: [CartUpdateAction!]!) {
    updateCart(id: $id, version: $version, actions: $actions) {
      id
      version
      totalPrice {
        centAmount
        currencyCode
      }
      lineItems {
        id
        quantity
      }
    }
  }
`) as TypedDocumentNode<
  UpdateCartData,
  { id: string; version: number; actions: Array<Record<string, unknown>> }
>

async function rawMutation(sku: string) {
  const created = await graphQL
    .rawQuery(CreateCartDocument, {
      variables: { draft: { currency: 'EUR', country: 'DE' } },
    })
    .executeOrThrow()

  console.log('\n--- raw mutation ---')
  console.log(
    'created',
    created.createCart.id,
    'version',
    created.createCart.version
  )

  const updated = await graphQL
    .rawQuery(UpdateCartDocument, {
      variables: {
        id: created.createCart.id,
        version: created.createCart.version,
        actions: [{ addLineItem: { sku, quantity: 2 } }],
      },
    })
    .executeOrThrow()

  console.log('updated to version', updated.updateCart.version)

  return { id: updated.updateCart.id, version: updated.updateCart.version }
}

// =========================================================================================
// 4. Mutations - schema derived builder
//
// The same two calls. The actions are typed by the schema, so an unknown action or a missing
// required field is a compile error rather than a 400 at runtime.
// =========================================================================================

async function builderMutation(sku: string) {
  const created = await graphQL
    .mutate({
      createCart: (createCart) =>
        createCart
          .draft({ currency: 'EUR', country: 'DE' })
          .id()
          .version()
          .cartState(),
    })
    .executeOrThrow()

  const cart = created.createCart

  console.log('\n--- builder mutation ---')

  if (!cart) {
    console.log('cart was not created')
    return null
  }

  console.log('created', cart.id, 'version', cart.version)

  const updated = await graphQL
    .mutate({
      updateCart: (updateCart) =>
        updateCart
          .id(cart.id)
          .version(cart.version)
          .actions([{ addLineItem: { sku, quantity: 2 } }])
          .id()
          .version()
          .totalPrice((money) => money.centAmount().currencyCode())
          .lineItems((lineItem) =>
            lineItem
              .id()
              .quantity()
              .name((name) => name.locale('en'))
          ),
    })
    .executeOrThrow()

  console.log('updated to version', updated.updateCart?.version)
  updated.updateCart?.lineItems.forEach((lineItem) =>
    console.log(' ', lineItem.quantity, 'x', lineItem.name)
  )

  // Compile errors, all checked against the schema:
  //   .actions([{ addLineItm: { sku } }])        -> unknown action
  //   .actions([{ addLineItem: { quantity: 2 } }]) -> fine, sku is optional
  //   .version('1')                              -> string is not assignable to number

  return updated.updateCart
    ? { id: updated.updateCart.id, version: updated.updateCart.version }
    : null
}

async function deleteCart(cart: { id: string; version: number }) {
  await graphQL
    .mutate({
      deleteCart: (deleteCart) =>
        deleteCart.id(cart.id).version(cart.version).id(),
    })
    .executeOrThrow()

  console.log('deleted', cart.id)
}

async function main() {
  await rawRead()
  await builderRead()

  const sku = process.env.CTP_SKU

  if (!sku) {
    console.log(
      '\nset CTP_SKU to run the mutation examples (they write to the project)'
    )
    return
  }

  const fromRaw = await rawMutation(sku)
  await deleteCart(fromRaw)

  const fromBuilder = await builderMutation(sku)
  if (fromBuilder) await deleteCart(fromBuilder)
}

main().catch((error) => {
  console.error(error.errors ?? error)
  process.exit(1)
})
