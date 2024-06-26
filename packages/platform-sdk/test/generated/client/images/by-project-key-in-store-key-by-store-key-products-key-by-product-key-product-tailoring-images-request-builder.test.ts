/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { RequestWithMethod } from '../../../request-with-method'
import { ApiRoot } from '../../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'post',
      uri: '/test_projectKey/in-store/key=test_storeKey/products/key=test_productKey/product-tailoring/images?filename=filename',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .products()
        .withProductKey({ productKey: 'test_productKey' })
        .productTailoring()
        .images()
        .post({
          body: null,
          headers: null,
          queryArgs: { filename: 'filename' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/in-store/key=test_storeKey/products/key=test_productKey/product-tailoring/images?variant=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .products()
        .withProductKey({ productKey: 'test_productKey' })
        .productTailoring()
        .images()
        .post({ body: null, headers: null, queryArgs: { variant: 7 } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/in-store/key=test_storeKey/products/key=test_productKey/product-tailoring/images?sku=sku',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .products()
        .withProductKey({ productKey: 'test_productKey' })
        .productTailoring()
        .images()
        .post({ body: null, headers: null, queryArgs: { sku: 'sku' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/in-store/key=test_storeKey/products/key=test_productKey/product-tailoring/images?staged=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .products()
        .withProductKey({ productKey: 'test_productKey' })
        .productTailoring()
        .images()
        .post({ body: null, headers: null, queryArgs: { staged: true } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/in-store/key=test_storeKey/products/key=test_productKey/product-tailoring/images',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .products()
        .withProductKey({ productKey: 'test_productKey' })
        .productTailoring()
        .images()
        .post({ body: null, headers: null }),
    },
  ]
}

describe('Testing ByProjectKeyInStoreKeyByStoreKeyProductsKeyByProductKeyProductTailoringImagesRequestBuilder Requests', () => {
  const requestsToTest = getRequestsWithMethodParameters()
  requestsToTest.forEach((rm) => {
    test(`Testing => request method: ${rm.method} and url: ${rm.uri}`, async () => {
      expect(rm.method.toLowerCase()).toBe(
        rm.request.clientRequest().method.toLowerCase()
      )
      expect(rm.uri.toLowerCase()).toBe(
        rm.request.clientRequest().uri.toLowerCase()
      )
    })
  })
})
