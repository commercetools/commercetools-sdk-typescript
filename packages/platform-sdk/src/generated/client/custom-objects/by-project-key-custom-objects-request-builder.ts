/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
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
   *	For performance reasons, it is highly advisable to query for Custom Objects in a container by using the `container` field in the `where` predicate.
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
   *	If an object with the given container/key exists, the object will be replaced with the new value and the version is incremented.
   *	If the request contains a version and an object with the given container/key, then the version must match the version of the existing object. Concurrent updates for the same Custom Object can result in a [409 Conflict](/../api/errors#409-conflict) even if the version is not provided.
   *
   *	Fields with `null` values will **not be saved**.
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
