import { createRequestBuilder } from '@commercetools/api-request-builder'
import { client, ctpApi } from './client'
import {
  Product,
  ProductDraft,
  ProductUpdateAction,
} from '@commercetools/platform-sdk'


/**
 * Creates a new product for the given project.
 *
 * @param projectKey
 * @param product
 * @return {*}
 */
export function createProduct(
    projectKey: string,
    product: ProductDraft
  ): Promise<Product> {
  
    return ctpApi(projectKey)
      .products()
      .post({
        body: product,
      })
      .execute()
      .then((res) => res.body)
  }