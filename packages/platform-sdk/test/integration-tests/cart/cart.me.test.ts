import {
  Cart,
  ClientResponse,
  createApiBuilderFromCtpClient,
  LineItemDraft,
  StoreDraft,
} from '../../../src'
import { requireEnvVar } from '../../helpers/test-utils'
import { ClientBuilder } from '@commercetools/sdk-client-v2'
import { ByProjectKeyRequestBuilder } from '../../../src/generated/client/by-project-key-request-builder'
import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { createCategory } from '../category/category-fixture'
import { ensureTaxCategory } from '../tax-category/tax-category-fixture'
import {
  ensureProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import { createProduct, createProductDraft } from '../product/product-fixture'

const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const apiUrl = requireEnvVar('CTP_API_URL')

describe('testing me endpoint cart', () => {
  let anonymousApiRoot: ByProjectKeyRequestBuilder

  beforeAll(async () => {
    const ctpClient = new ClientBuilder()
      .withAnonymousSessionFlow({
        host: authURL,
        projectKey,
        credentials: {
          clientId: clientId,
          clientSecret: clientSecret,
        },
        scopes: [`manage_project:${projectKey}`],
        fetch,
      })
      .withHttpMiddleware({ host: apiUrl, fetch })
      .build()

    anonymousApiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
      projectKey,
    })

    const responseCarts = await anonymousApiRoot.carts().get().execute()
    for (const cart of responseCarts.body.results) {
      await anonymousApiRoot
        .carts()
        .withId({ ID: cart.id })
        .delete({ queryArgs: { version: cart.version } })
        .execute()
    }
  })

  it('should create cart using me endpoint and anonymous session', async () => {
    const responseCartCreate: ClientResponse<Cart> = await anonymousApiRoot
      .me()
      .carts()
      .post({
        body: {
          currency: 'EUR',
          country: 'DE',
        },
      })
      .execute()

    expect(responseCartCreate.statusCode).toBe(201)
    expect(responseCartCreate.body).not.toBeNull()
  })

  // https://github.com/commercetools/commercetools-sdk-typescript/issues/446
  it('should expand active cart using me endpoint in a store', async () => {
    const category = await createCategory()
    const productType = await ensureProductType(productTypeDraftForProduct)
    const taxCategory = await ensureTaxCategory()

    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )

    const product = await createProduct(productDraft)

    const lineItemDraft: LineItemDraft[] = [
      {
        sku: product.body.masterData.current.masterVariant.sku,
      },
    ]

    const storeDraft: StoreDraft = {
      key: randomUUID(),
    }

    await apiRoot.stores().post({ body: storeDraft }).execute()

    await anonymousApiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey: storeDraft.key })
      .me()
      .carts()
      .post({
        body: {
          currency: 'EUR',
          country: 'DE',
          lineItems: lineItemDraft,
        },
      })
      .execute()

    const responseActiveCarts: ClientResponse<Cart> = await anonymousApiRoot
      .inStoreKeyWithStoreKeyValue({ storeKey: storeDraft.key })
      .me()
      .activeCart()
      .get({ queryArgs: { expand: 'lineItems[*].productType' } })
      .execute()

    expect(responseActiveCarts.statusCode).toBe(200)
    expect(responseActiveCarts.body.lineItems[0].productType.obj.name).toEqual(
      productType.body.name
    )
  })
})
