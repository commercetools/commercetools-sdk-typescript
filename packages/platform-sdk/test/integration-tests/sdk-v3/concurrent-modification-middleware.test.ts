import {
  apiRootV3,
  authMiddlewareOptions,
  httpMiddlewareOptionsV3,
  projectKey,
} from '../test-utils'
import {
  createProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { createCategory } from '../category/category-fixture'
import { ensureTaxCategory } from '../tax-category/tax-category-fixture'
import { ClientBuilder as ClientBuilderV3 } from '@commercetools/ts-client/src'
import { createApiBuilderFromCtpClient } from '../../../src'

describe('Concurrent Modification Middleware', () => {
  let product
  let category
  let taxCategory
  let productType

  beforeAll(async () => {
    category = await createCategory()
    taxCategory = await ensureTaxCategory()
    productType = await createProductType(productTypeDraftForProduct)
  })

  beforeEach(async () => {
    //Published product
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )
    const productCreateResponse = await createProduct(productDraft)
    product = productCreateResponse.body
  })

  afterEach(async () => {
    const productGetResponse = await apiRootV3
      .products()
      .withId({ ID: product.id })
      .get()
      .execute()

    await deleteProduct(productGetResponse)
  })

  it('should retry the request with correct version when the first time the version is wrong', async () => {
    const productUpdateResponse = await apiRootV3
      .products()
      .withId({ ID: product.id })
      .post({
        body: {
          version: product.version + 1,
          actions: [
            {
              action: 'changeName',
              name: { en: 'test-name' + new Date().getTime() },
            },
          ],
        },
      })
      .execute()
    expect(productUpdateResponse.statusCode).toBe(200)
  })

  it(`should retry the request with the custom logic provided`, async () => {
    let isHandleCalled = false
    const handleConcurrentModification = async (version, request) => {
      if (request.uri.includes('/products/')) {
        isHandleCalled = true
        ;(request.body as { [key: string]: any }).version = version
        return JSON.stringify(request.body)
      } else {
        throw new Error()
      }
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withConcurrentModificationMiddleware(handleConcurrentModification)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )
    const productUpdateResponse = await apiRootV3
      .products()
      .withId({ ID: product.id })
      .post({
        body: {
          version: product.version + 1,
          actions: [
            {
              action: 'changeName',
              name: { en: 'test-name' + new Date().getTime() },
            },
          ],
        },
      })
      .execute()
    expect(productUpdateResponse.statusCode).toBe(200)
    expect(isHandleCalled).toBe(true)
  })
})
