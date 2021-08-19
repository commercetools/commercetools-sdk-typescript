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

import { BaseResource, CreatedBy, LastModifiedBy } from './common'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface CustomerGroup extends BaseResource {
  /**
   *	The unique ID of the customer group.
   *
   */
  readonly id: string
  /**
   *	The current version of the customer group.
   *
   */
  readonly version: number
  /**
   *
   */
  readonly createdAt: string
  /**
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources updated after 2019-02-01 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 2019-02-01 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	User-defined unique identifier for the customer group.
   *
   *
   */
  readonly key?: string
  /**
   *	Unique within the project.
   *
   *
   */
  readonly name: string
  /**
   *
   */
  readonly custom?: CustomFields
}
export interface CustomerGroupDraft {
  /**
   *	User-defined unique identifier for the customer group.
   *
   */
  readonly key?: string
  /**
   *	Unique value which must be different from any value used for `name` in [CustomerGroup](ctp:api:type:CustomerGroup) in the project.
   *	If not, a `DuplicateField` [error](/../api/errors#400-bad-request-1) is thrown.
   *
   *
   */
  readonly groupName: string
  /**
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
   *	The offset supplied by the client or the server default.
   *	It is the number of elements skipped, not a page number.
   *
   *
   */
  readonly offset: number
  /**
   *	The number of results requested in the query request.
   *
   *
   */
  readonly limit: number
  /**
   *	The actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	The total number of results matching the query.
   *	This number is an estimation that is not [strongly consistent](/general-concepts#strong-consistency).
   *	This field is returned by default.
   *	For improved performance, calculating this field can be deactivated by using the query parameter `withTotal=false`.
   *	When the results are filtered with a [Query Predicate](/predicates/query), `total` is subject to a [limit](/contract#queries).
   *
   *
   */
  readonly total?: number
  /**
   *	The array of [CustomerGroups](ctp:api:type:CustomerGroup) matching the query.
   *
   *
   */
  readonly results: CustomerGroup[]
}
export interface CustomerGroupReference {
  readonly typeId: 'customer-group'
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly obj?: CustomerGroup
}
export interface CustomerGroupResourceIdentifier {
  readonly typeId: 'customer-group'
  /**
   *
   */
  readonly id?: string
  /**
   *
   */
  readonly key?: string
}
export interface CustomerGroupUpdate {
  /**
   *	The expected version of the customer group on which the changes should be applied.
   *	If the expected version does not match the actual version, a 409 Conflict
   *	will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	The list of update actions to be performed on the customer group.
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
   *	User-defined unique name for the customer group.
   *
   *
   */
  readonly name: string
}
export interface CustomerGroupSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *
   */
  readonly name: string
  /**
   *	Value must be of type [Value](/../api/projects/custom-fields#value).
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#400-bad-request-1) error.
   *	If `value` is provided, set the `value` of the field defined by the `name`.
   *
   *
   */
  readonly value?: any
}
/**
 *	This action sets or removes the custom type for an existing customer group.
 *	If present, this action overwrites any existing [custom](/../api/projects/custom-fields#custom) type and fields.
 *
 */
export interface CustomerGroupSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	If absent, the [custom](/../api/projects/custom-fields#custom) type and any existing [CustomFields](/../api/projects/custom-fields) are removed.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	A valid JSON object, based on the [FieldDefinitions](/../api/projects/types#fielddefinition) of the [Type](/../api/projects/types#type).
   *	Sets the [custom](/../api/projects/custom-fields#custom) fields to this value.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface CustomerGroupSetKeyAction {
  readonly action: 'setKey'
  /**
   *	User-defined unique identifier for the customer group.
   *
   *
   */
  readonly key?: string
}
