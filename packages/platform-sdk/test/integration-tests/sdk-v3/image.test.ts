import { randomUUID } from 'crypto'
import {
  _Money,
  Product,
  ProductDraft,
  ProductTypeResourceIdentifier,
  ClientResponse,
  ProductType,
} from '../../../src'
import {
  deleteProductType,
  ensureProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import { apiRoot } from '../test-utils'
import { deleteProduct } from '../product/product-fixture'

describe('Image Upload Tests', () => {
  const getImage = async (url: string) => {
    const response = await fetch(url)
    return Buffer.from(await response.arrayBuffer())
  }

  let product: ClientResponse<Product>, productType: ClientResponse<ProductType>
  test('create a product', async () => {
    productType = await ensureProductType(productTypeDraftForProduct)

    const productTypeResourceIdentifier: ProductTypeResourceIdentifier = {
      typeId: 'product-type',
      id: productType.body.id,
    }

    const productDraft: ProductDraft = {
      key: 'radom-product-key',
      name: { en: 'test-product-name' + randomUUID() },
      productType: productTypeResourceIdentifier,
      slug: { en: 'test-product-slug' + randomUUID() },
    }

    product = await apiRoot.products().post({ body: productDraft }).execute()

    expect(product.body).toBeDefined()
    expect(product.statusCode).toEqual(201)
  })

  test('upload a product image', async () => {
    const ID = product.body.id
    const uploadResponse = await apiRoot
      .products()
      .withId({ ID })
      .images()
      .post({
        headers: {
          'Content-Type': 'image/jpeg',
        },
        body: await getImage(
          'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/085498_1_medium.jpg'
        ),
        queryArgs: {
          filename: 'DKNY.jpeg',
        },
      })
      .execute()

    expect(uploadResponse.body.id).toEqual(ID)
    expect(uploadResponse.statusCode).toEqual(200)
  })

  afterAll(async () => {
    await deleteProduct(product)
    await deleteProductType(productType)
  })
})
