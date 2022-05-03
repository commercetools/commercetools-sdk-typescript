/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { BaseResource, CreatedBy, LastModifiedBy } from './common'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface CustomerGroup extends BaseResource {
  /**
   *	Platform-generated unique identifier of the Customer Group.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Customer Group.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Customer Group was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Customer Group was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources updated after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	User-defined unique identifier of the Customer Group.
   *
   *
   */
  readonly key?: string
  /**
   *	Unique name of the Customer Group.
   *
   *
   */
  readonly name: string
  /**
   *	Custom Fields for the Customer Group.
   *
   *
   */
  readonly custom?: CustomFields
}
export interface CustomerGroupDraft {
  /**
   *	User-defined unique identifier for the Customer Group.
   *
   *
   */
  readonly key?: string
  /**
   *	Unique value which must be different from any value used for `name` in [CustomerGroup](ctp:api:type:CustomerGroup) in the Project.
   *	If not, a `DuplicateField` [error](/../api/errors#400-bad-request-1) is thrown.
   *
   *
   */
  readonly groupName: string
  /**
   *	Custom Fields for the Customer Group.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
/**
 *	[PagedQueryResult](/general-concepts#pagedqueryresult) with `results` containing an array of [CustomerGroup](ctp:api:type:CustomerGroup).
 *
 */
export interface CustomerGroupPagedQueryResponse {
  /**
   *	Number of results requested in the query request.
   *
   *
   */
  readonly limit: number
  /**
   *	Offset supplied by the client or server default.
   *	It is the number of elements skipped, not a page number.
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
   *	[CustomerGroups](ctp:api:type:CustomerGroup) matching the query.
   *
   *
   */
  readonly results: CustomerGroup[]
}
/**
 *	[Reference](/../api/types#reference) to a [CustomerGroup](ctp:api:type:CustomerGroup).
 *
 */
export interface CustomerGroupReference {
  readonly typeId: 'customer-group'
  /**
   *	Platform-generated unique identifier of the referenced [CustomerGroup](ctp:api:type:CustomerGroup).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded Customer Group. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for Customer Groups.
   *
   *
   */
  readonly obj?: CustomerGroup
}
/**
 *	[ResourceIdentifier](/../api/types#resourceidentifier) to a [CustomerGroup](ctp:api:type:CustomerGroup).
 *
 */
export interface CustomerGroupResourceIdentifier {
  readonly typeId: 'customer-group'
  /**
   *	Platform-generated unique identifier of the referenced [CustomerGroup](ctp:api:type:CustomerGroup). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [CustomerGroup](ctp:api:type:CustomerGroup). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface CustomerGroupUpdate {
  /**
   *	Expected version of the Customer Group on which the changes should be applied.
   *	If the expected version does not match the actual version, a [409 Conflict](/../api/errors#409-conflict) will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Customer Group.
   *
   *
   */
  readonly actions: CustomerGroupUpdateAction[]
}
export type CustomerGroupUpdateAction =
  | CustomerGroupChangeNameAction
  | CustomerGroupSetCustomFieldAction
  | CustomerGroupSetCustomTypeAction
  | CustomerGroupSetKeyAction
export interface CustomerGroupChangeNameAction {
  readonly action: 'changeName'
  /**
   *	New name of the Customer Group.
   *
   *
   */
  readonly name: string
}
export interface CustomerGroupSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
/**
 *	This action sets or removes the custom type for an existing Customer Group.
 *	If present, this action overwrites any existing [custom](/../api/projects/custom-fields) type and fields.
 *
 */
export interface CustomerGroupSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the CustomerGroup with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the CustomerGroup.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the CustomerGroup.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface CustomerGroupSetKeyAction {
  readonly action: 'setKey'
  /**
   *	If `key` is absent or `null`, the existing key, if any, will be removed.
   *
   *
   */
  readonly key?: string
}
