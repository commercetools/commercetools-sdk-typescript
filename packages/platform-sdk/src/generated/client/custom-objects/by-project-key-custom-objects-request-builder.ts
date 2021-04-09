/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */
import {
  CustomObject,
  CustomObjectDraft,
  CustomObjectPagedQueryResponse,
} from '../../models/custom-object'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyCustomObjectsByContainerByKeyRequestBuilder } from './by-project-key-custom-objects-by-container-by-key-request-builder'
import { ByProjectKeyCustomObjectsByContainerRequestBuilder } from './by-project-key-custom-objects-by-container-request-builder'

export class ByProjectKeyCustomObjectsRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withContainerAndKey(childPathArgs: {
    container: string
    key: string
  }): ByProjectKeyCustomObjectsByContainerByKeyRequestBuilder {
    return new ByProjectKeyCustomObjectsByContainerByKeyRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public withContainer(childPathArgs: {
    container: string
  }): ByProjectKeyCustomObjectsByContainerRequestBuilder {
    return new ByProjectKeyCustomObjectsByContainerRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  /**
   *	The query endpoint allows to retrieve custom objects in a specific container or all custom objects.
   *	For performance reasons, it is highly advisable to query only for custom objects in a container by using
   *	the container field in the where predicate.
   *
   */
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
  }): ApiRequest<CustomObjectPagedQueryResponse> {
    return new ApiRequest<CustomObjectPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/custom-objects',
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
   *	Creates a new custom object or updates an existing custom object.
   *	If an object with the given container/key exists,
   *	the object will be replaced with the new value and the version is incremented.
   *	If the request contains a version and an object with the given container/key exists then the version
   *	must match the version of the existing object. Concurrent updates for the same custom object still can result
   *	in a Conflict (409) even if the version is not provided.
   *	Fields with null values will not be saved.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: CustomObjectDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<CustomObject> {
    return new ApiRequest<CustomObject>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/custom-objects',
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
