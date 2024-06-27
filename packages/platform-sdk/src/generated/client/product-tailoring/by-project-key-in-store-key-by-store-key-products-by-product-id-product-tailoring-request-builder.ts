/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { ProductTailoringUpdate } from '../../models/cart'
import { ProductTailoring } from '../../models/product-tailoring'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInStoreKeyByStoreKeyProductsByProductIDProductTailoringImagesRequestBuilder } from '../images/by-project-key-in-store-key-by-store-key-products-by-product-id-product-tailoring-images-request-builder'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyProductsByProductIDProductTailoringRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        storeKey: string
        productID: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public images(): ByProjectKeyInStoreKeyByStoreKeyProductsByProductIDProductTailoringImagesRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyProductsByProductIDProductTailoringImagesRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }

  /**
   *	Gets the current or staged representation of a [Product Tailoring](ctp:api:type:ProductTailoring) by its Product ID in the specified [Store](ctp:api:type:Store).
   *
   */
  public get(methodArgs?: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ProductTailoring> {
    return new ApiRequest<ProductTailoring>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
  /**
   *	Updates the current or staged representation of a [Product Tailoring](ctp:api:type:ProductTailoring) by its Product ID in the specified [Store](ctp:api:type:Store).
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: ProductTailoringUpdate
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ProductTailoring> {
    return new ApiRequest<ProductTailoring>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
  /**
   *	Generates the [ProductTailoringDeleted](ctp:api:type:ProductTailoringDeletedMessage) Message.
   *
   */
  public delete(methodArgs: {
    queryArgs: {
      version: number
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ProductTailoring> {
    return new ApiRequest<ProductTailoring>(
      {
        baseUri: this.args.baseUri,
        method: 'DELETE',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
}
