/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { BaseResource, CreatedBy, LastModifiedBy, Reference } from './common'

export interface Extension extends BaseResource {
  /**
   *	Unique identifier of the Extension.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Extension.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Extension was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Extension was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	IDs and references that last modified the Extension.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	IDs and references that created the Extension.
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	User-defined unique identifier of the Extension.
   *
   *
   */
  readonly key?: string
  /**
   *	The configuration for the Extension, including its type, location and authentication details.
   *
   *
   */
  readonly destination: ExtensionDestination
  /**
   *	Describes what triggers the Extension.
   *
   *
   */
  readonly triggers: ExtensionTrigger[]
  /**
   *	Maximum time (in milliseconds) that the Extension can respond within.
   *	If no timeout is provided, the default value is used for all types of Extensions.
   *	The maximum value is 10000 ms (10 seconds) for `payment` Extensions and 2000 ms (2 seconds) for all other Extensions.
   *
   *
   */
  readonly timeoutInMs?: number
}
/**
 *	An Extension gets called during any of the following requests of an API call, but before the result is persisted.
 *
 */
export type ExtensionAction = 'Create' | 'Update' | string
/**
 *	Generic type for destinations.
 */
export type ExtensionDestination =
  | AWSLambdaDestination
  | GoogleCloudFunctionDestination
  | HttpDestination
/**
 *	We recommend creating an Identify and Access Management (IAM) user with an `accessKey` and `accessSecret` pair, specifically for each Extension that only has the `lambda:InvokeFunction` permission on this function.
 *
 */
export interface AWSLambdaDestination {
  readonly type: 'AWSLambda'
  /**
   *	Amazon Resource Name (ARN) of the Lambda function in the format `arn:aws:lambda:<region>:<accountid>:function:<functionName>`. Use the format `arn:aws:lambda:<region>:<accountid>:function:<functionName>:<functionAlias/version>` to point to a specific version of the function.
   *
   *
   */
  readonly arn: string
  /**
   *	Partially hidden on retrieval for security reasons.
   *
   *
   */
  readonly accessKey: string
  /**
   *	Partially hidden on retrieval for security reasons.
   *
   *
   */
  readonly accessSecret: string
}
export interface ExtensionDraft {
  /**
   *	User-defined unique identifier for the Extension.
   *
   *
   */
  readonly key?: string
  /**
   *	Defines where the Extension can be reached.
   *
   *
   */
  readonly destination: ExtensionDestination
  /**
   *	Describes what triggers the Extension.
   *
   *
   */
  readonly triggers: ExtensionTrigger[]
  /**
   *	Maximum time (in milliseconds) the Extension can respond within.
   *	If no timeout is provided, the default value is used for all types of Extensions.
   *	The maximum value is 10000 ms (10 seconds) for `payment` Extensions and 2000 ms (2 seconds) for all other Extensions.
   *
   *	This limit can be increased per Project after we review the performance impact.
   *	Please contact the [Composable Commerce support team](https://support.commercetools.com) and provide the Region, Project key, and use case.
   *
   *
   */
  readonly timeoutInMs?: number
}
export interface ExtensionInput {
  /**
   *	`Create` or `Update` request.
   *
   *
   */
  readonly action: ExtensionAction
  /**
   *	Expanded reference to the resource that triggered the Extension.
   *
   *
   */
  readonly resource: Reference
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with `results` containing an array of [Extension](ctp:api:type:Extension).
 *
 */
export interface ExtensionPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *	Actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	Total number of results matching the query.
   *	This number is an estimation that is not [strongly consistent](/../api/general-concepts#strong-consistency).
   *	This field is returned by default.
   *	For improved performance, calculating this field can be deactivated by using the query parameter `withTotal=false`.
   *	When the results are filtered with a [Query Predicate](/../api/predicates/query), `total` is subject to a [limit](/../api/limits#queries).
   *
   *
   */
  readonly total?: number
  /**
   *	Extensions matching the query.
   *
   *
   */
  readonly results: Extension[]
}
/**
 *	Extensions are available for:
 *
 */
export type ExtensionResourceTypeId =
  | 'business-unit'
  | 'cart'
  | 'customer'
  | 'order'
  | 'payment'
  | 'quote'
  | 'quote-request'
  | 'shopping-list'
  | 'staged-quote'
  | string
export interface ExtensionTrigger {
  /**
   *	`cart`, `order`, `payment`, `customer`, `quote-request`, `staged-quote`, `quote`, `business-unit`, and `shopping-list` are supported.
   *
   *
   */
  readonly resourceTypeId: ExtensionResourceTypeId
  /**
   *	`Create` and `Update` requests are supported.
   *
   *
   */
  readonly actions: ExtensionAction[]
  /**
   *	Valid [predicate](/../api/predicates/query) that controls the conditions under which the API Extension is called. The Extension is not triggered when the specified condition is not fulfilled.
   *
   *
   */
  readonly condition?: string
}
export interface ExtensionUpdate {
  /**
   *	Expected version of the Extension on which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Extension.
   *
   *
   */
  readonly actions: ExtensionUpdateAction[]
}
export type ExtensionUpdateAction =
  | ExtensionChangeDestinationAction
  | ExtensionChangeTriggersAction
  | ExtensionSetKeyAction
  | ExtensionSetTimeoutInMsAction
/**
 *	For GoogleCloudFunction destinations, you need to grant permissions to the `extensions@commercetools-platform.iam.gserviceaccount.com` service account to invoke your function. If your function's version is 1st gen, grant the service account the IAM role `Cloud Functions Invoker`. For version 2nd gen, assign the IAM role `Cloud Run Invoker` using the Cloud Run console.
 *
 */
export interface GoogleCloudFunctionDestination {
  readonly type: 'GoogleCloudFunction'
  /**
   *	URL to the target function.
   *
   *
   */
  readonly url: string
}
/**
 *	We recommend an encrypted `HTTPS` connection for production setups. However, we also accept unencrypted `HTTP` connections for development purposes. HTTP redirects will not be followed and cache headers will be ignored.
 *
 */
export interface HttpDestination {
  readonly type: 'HTTP'
  /**
   *	URL to the target destination. If the Project is hosted in the China (AWS, Ningxia) Region, verify that the URL is not blocked due to firewall restrictions.
   *
   *
   */
  readonly url: string
  /**
   *	Authentication methods (such as `Basic` or `Bearer`).
   *
   *
   */
  readonly authentication?: HttpDestinationAuthentication
}
export type HttpDestinationAuthentication =
  | AuthorizationHeaderAuthentication
  | AzureFunctionsAuthentication
/**
 *	The `Authorization` header will be set to the content of `headerValue`. The authentication scheme (such as `Basic` or `Bearer`) should be included in the `headerValue`.
 *
 *	For example, the `headerValue` for [Basic Authentication](https://datatracker.ietf.org/doc/html/rfc7617) should be set to `Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`.
 *
 */
export interface AuthorizationHeaderAuthentication {
  readonly type: 'AuthorizationHeader'
  /**
   *	Partially hidden on retrieval for security reasons.
   *
   *
   */
  readonly headerValue: string
}
/**
 *	To protect your Azure Function, set its `authLevel` to `function` and provide the function's key to be used inside the `x-functions-key` header. For more information, see the [Azure Functions documentation](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook#keys).
 *
 *	To protect the secret key from being exposed, remove the code parameter and secret key from the URL. For example, use `https://foo.azurewebsites.net/api/bar` instead of
 *	`https://foo.azurewebsites.net/api/bar?code=secret`.
 *
 */
export interface AzureFunctionsAuthentication {
  readonly type: 'AzureFunctions'
  /**
   *	Partially hidden on retrieval for security reasons.
   *
   *
   */
  readonly key: string
}
export interface ExtensionChangeDestinationAction {
  readonly action: 'changeDestination'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly destination: ExtensionDestination
}
export interface ExtensionChangeTriggersAction {
  readonly action: 'changeTriggers'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly triggers: ExtensionTrigger[]
}
export interface ExtensionSetKeyAction {
  readonly action: 'setKey'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly key?: string
}
export interface ExtensionSetTimeoutInMsAction {
  readonly action: 'setTimeoutInMs'
  /**
   *	Value to set. If not defined, the maximum value is used.
   *	If no timeout is provided, the default value is used for all types of Extensions.
   *	The maximum value is 10000 ms (10 seconds) for `payment` Extensions and 2000 ms (2 seconds) for all other Extensions.
   *
   *	This limit can be increased per Project after we review the performance impact.
   *	Please contact the [Composable Commerce support team](https://support.commercetools.com/) and provide the Region, Project key, and use case.
   *
   *
   */
  readonly timeoutInMs?: number
}
