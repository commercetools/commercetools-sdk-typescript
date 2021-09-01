import { Product, ProductDraft } from '@commercetools/platform-sdk'
import { v4 as uuidv4 } from 'uuid'
import { ctpApiBuilder } from '../helpers/ctp-api-helper'
import { withProductType } from './product_type_fixtures'

async function createProduct(product: ProductDraft): Promise<Product> {
  const resp = await ctpApiBuilder
    .products()
    .post({
      body: product,
    })
    .execute()
  expect(resp.statusCode).toEqual(201)
  return resp.body
}

async function deleteProduct(product: Product): Promise<Product> {
  const resp = await ctpApiBuilder
    .products()
    .withId({
      ID: product.id,
    })
    .delete({
      queryArgs: {
        version: product.version,
      },
    })
    .execute()
  expect(resp.statusCode).toEqual(200)
  return resp.body
}

export async function withProduct(
  productConsumer: (prd: Product) => Promise<any>
) {
  await withProductType(async (productType) => {
    const product = await createProduct({
      name: { en: `random name ${uuidv4()}` },
      productType: {
        typeId: 'product-type',
        id: productType.id,
      },
      slug: {
        en: `random_product_slug_${uuidv4()}`,
      },
    })
    try {
      await productConsumer(product)
    } catch (error) {
      console.error(error)
    }
    await deleteProduct(product)
  })
}
