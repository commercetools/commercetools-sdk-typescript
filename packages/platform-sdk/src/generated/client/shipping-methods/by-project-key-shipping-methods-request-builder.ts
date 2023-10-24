/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  ShippingMethod,
  ShippingMethodDraft,
  ShippingMethodPagedQueryResponse,
} from '../../models/shipping-method'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyShippingMethodsMatchingCartLocationRequestBuilder } from '../matching-cart-location/by-project-key-shipping-methods-matching-cart-location-request-builder'
import { ByProjectKeyShippingMethodsMatchingCartRequestBuilder } from '../matching-cart/by-project-key-shipping-methods-matching-cart-request-builder'
import { ByProjectKeyShippingMethodsMatchingLocationRequestBuilder } from '../matching-location/by-project-key-shipping-methods-matching-location-request-builder'
import { ByProjectKeyShippingMethodsMatchingOrdereditRequestBuilder } from '../matching-orderedit/by-project-key-shipping-methods-matching-orderedit-request-builder'
import { ByProjectKeyShippingMethodsByIDRequestBuilder } from './by-project-key-shipping-methods-by-id-request-builder'
import { ByProjectKeyShippingMethodsKeyByKeyRequestBuilder } from './by-project-key-shipping-methods-key-by-key-request-builder'
/**
 **/
export class ByProjectKeyShippingMethodsRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withKey(childPathArgs: {
    key: string
  }): ByProjectKeyShippingMethodsKeyByKeyRequestBuilder {
    return new ByProjectKeyShippingMethodsKeyByKeyRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	Get ShippingMethods for a cart
   */
  public matchingCart(): ByProjectKeyShippingMethodsMatchingCartRequestBuilder {
    return new ByProjectKeyShippingMethodsMatchingCartRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	Get ShippingMethods for a cart and location
   */
  public matchingCartLocation(): ByProjectKeyShippingMethodsMatchingCartLocationRequestBuilder {
    return new ByProjectKeyShippingMethodsMatchingCartLocationRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	Get ShippingMethods for an order edit
   */
  public matchingOrderedit(): ByProjectKeyShippingMethodsMatchingOrdereditRequestBuilder {
    return new ByProjectKeyShippingMethodsMatchingOrdereditRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	Get ShippingMethods for a location
   */
  public matchingLocation(): ByProjectKeyShippingMethodsMatchingLocationRequestBuilder {
    return new ByProjectKeyShippingMethodsMatchingLocationRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public withId(childPathArgs: {
    ID: string
  }): ByProjectKeyShippingMethodsByIDRequestBuilder {
    return new ByProjectKeyShippingMethodsByIDRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  public get(methodArgs?: {
    queryArgs?: {
      expand?: string | string[]
      sort?: string | string[]
      limit?: number
      offset?: number
      withTotal?: boolean
      where?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ShippingMethodPagedQueryResponse> {
    return new ApiRequest<ShippingMethodPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/shipping-methods',
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
   *	Checks if a ShippingMethod exists for a given Query Predicate. Returns a `200 OK` status if any ShippingMethods match the Query Predicate or a `404 Not Found` otherwise.
   */
  public head(methodArgs?: {
    queryArgs?: {
      where?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<void> {
    return new ApiRequest<void>(
      {
        baseUri: this.args.baseUri,
        method: 'HEAD',
        uriTemplate: '/{projectKey}/shipping-methods',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: ShippingMethodDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ShippingMethod> {
    return new ApiRequest<ShippingMethod>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/shipping-methods',
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
}
