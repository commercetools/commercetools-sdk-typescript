/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  BaseResource,
  CreatedBy,
  IReference,
  IResourceIdentifier,
  LastModifiedBy,
  LocalizedString,
} from './common'

export interface State extends BaseResource {
  /**
   *	Unique identifier of the State.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the State.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the State was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the State was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	IDs and references that last modified the State.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	IDs and references that created the State.
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	User-defined unique identifier of the State.
   *
   *
   */
  readonly key: string
  /**
   *	Indicates to which resource or object types the State is assigned to.
   *
   *
   */
  readonly type: StateTypeEnum
  /**
   *	Name of the State.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	Description of the State.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	`true` for an initial State, the first State in a workflow.
   *
   *
   */
  readonly initial: boolean
  /**
   *	`true` for States that are an integral part of the [Project](ctp:api:type:Project). Those States cannot be deleted and their `key` cannot be changed.
   *
   *
   */
  readonly builtIn: boolean
  /**
   *	Roles the State can fulfill for [Reviews](ctp:api:type:Review) and [Line Items](ctp:api:type:LineItem).
   *
   *
   */
  readonly roles?: StateRoleEnum[]
  /**
   *	- list of States of the same `type` that the current State can be transitioned to. For example, when the current State is the _Initial_ State of [StateType](ctp:api:type:StateTypeEnum) `OrderState` and this list contains the reference to the _Shipped_ `OrderState`, the transition _Initial_ -> _Shipped_ is allowed.
   *	- if empty, no transitions are allowed from the current State, defining the current State as final for this workflow.
   *	- if not set, the validation is turned off and the current State can be transitioned to any other State of the same `type` as the current State.
   *
   *
   */
  readonly transitions?: StateReference[]
}
export interface StateDraft {
  /**
   *	User-defined unique identifier for the State.
   *
   *
   */
  readonly key: string
  /**
   *	Specify to which resource or object type the State is assigned to.
   *
   *
   */
  readonly type: StateTypeEnum
  /**
   *	Name of the State.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	Description of the State.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Set to `false` if the State is not the first step in a workflow.
   *
   *
   */
  readonly initial?: boolean
  /**
   *	If suitable, assign predefined roles the State can fulfill in case the State's `type` is `LineItemState` or `ReviewState`.
   *
   *
   */
  readonly roles?: StateRoleEnum[]
  /**
   *	Define the list of States of the same `type` to which the current State can be transitioned to.
   *
   *	- If, for example, the current State is the _Initial_ State of [StateType](ctp:api:type:StateTypeEnum) `OrderState` and you want to allow the transition _Initial_ -> _Shipped_, then add the [StateResourceIdentifier](ctp:api:type:StateResourceIdentifier) to the _Shipped_ `OrderState` to this list.
   *	- Set to empty list for not allowing any transition from the current State and defining it as final State for a workflow.
   *	- Do not set this field at all to turn off validation and allowing transitions to any other State of the same `type` as the current State.
   *
   *
   */
  readonly transitions?: StateResourceIdentifier[]
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with `results` containing an array of [State](ctp:api:type:State).
 *
 */
export interface StatePagedQueryResponse {
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
   *	[States](ctp:api:type:State) matching the query.
   *
   *
   */
  readonly results: State[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [State](ctp:api:type:State).
 *
 */
export interface StateReference extends IReference {
  readonly typeId: 'state'
  /**
   *	Unique identifier of the referenced [State](ctp:api:type:State).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded State. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for States.
   *
   *
   */
  readonly obj?: State
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [State](ctp:api:type:State). Either `id` or `key` is required. If both are set, an [InvalidJsonInput](/../api/errors#invalidjsoninput) error is returned.
 *
 */
export interface StateResourceIdentifier extends IResourceIdentifier {
  readonly typeId: 'state'
  /**
   *	Unique identifier of the referenced [State](ctp:api:type:State). Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [State](ctp:api:type:State). Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
/**
 *	For some resource types, a State can fulfill the following predefined roles:
 *
 */
export enum StateRoleEnumValues {
  Return = 'Return',
  ReviewIncludedInStatistics = 'ReviewIncludedInStatistics',
}

export type StateRoleEnum =
  | 'Return'
  | 'ReviewIncludedInStatistics'
  | (string & {})
/**
 *	Resource or object type the State can be assigned to.
 *
 */
export enum StateTypeEnumValues {
  LineItemState = 'LineItemState',
  OrderState = 'OrderState',
  PaymentState = 'PaymentState',
  ProductState = 'ProductState',
  QuoteRequestState = 'QuoteRequestState',
  QuoteState = 'QuoteState',
  RecurringOrderState = 'RecurringOrderState',
  ReviewState = 'ReviewState',
  StagedQuoteState = 'StagedQuoteState',
}

export type StateTypeEnum =
  | 'LineItemState'
  | 'OrderState'
  | 'PaymentState'
  | 'ProductState'
  | 'QuoteRequestState'
  | 'QuoteState'
  | 'RecurringOrderState'
  | 'ReviewState'
  | 'StagedQuoteState'
  | (string & {})
export interface StateUpdate {
  /**
   *	Expected version of the State on which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the State.
   *
   *
   */
  readonly actions: StateUpdateAction[]
}
export type StateUpdateAction =
  | StateAddRolesAction
  | StateChangeInitialAction
  | StateChangeKeyAction
  | StateChangeTypeAction
  | StateRemoveRolesAction
  | StateSetDescriptionAction
  | StateSetNameAction
  | StateSetRolesAction
  | StateSetTransitionsAction
export interface IStateUpdateAction {
  /**
   *
   */
  readonly action: string
}
export interface StateAddRolesAction extends IStateUpdateAction {
  readonly action: 'addRoles'
  /**
   *	Value to append to the array.
   *
   *
   */
  readonly roles: StateRoleEnum[]
}
export interface StateChangeInitialAction extends IStateUpdateAction {
  readonly action: 'changeInitial'
  /**
   *	Set to `true` for defining the State as initial State in a state machine and making it the first step in a workflow.
   *
   *
   */
  readonly initial: boolean
}
export interface StateChangeKeyAction extends IStateUpdateAction {
  readonly action: 'changeKey'
  /**
   *	New value to set.
   *	Must not be empty.
   *
   *
   */
  readonly key: string
}
export interface StateChangeTypeAction extends IStateUpdateAction {
  readonly action: 'changeType'
  /**
   *	Resource or object types the State shall be assigned to.
   *	Must not be empty.
   *
   *
   */
  readonly type: StateTypeEnum
}
export interface StateRemoveRolesAction extends IStateUpdateAction {
  readonly action: 'removeRoles'
  /**
   *	Roles to remove from the State.
   *
   *
   */
  readonly roles: StateRoleEnum[]
}
export interface StateSetDescriptionAction extends IStateUpdateAction {
  readonly action: 'setDescription'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly description: LocalizedString
}
export interface StateSetNameAction extends IStateUpdateAction {
  readonly action: 'setName'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly name: LocalizedString
}
export interface StateSetRolesAction extends IStateUpdateAction {
  readonly action: 'setRoles'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly roles: StateRoleEnum[]
}
export interface StateSetTransitionsAction extends IStateUpdateAction {
  readonly action: 'setTransitions'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *	Possible transformations of the current State to other States of the same `type` (for example, _Initial_ -> _Shipped_).
   *	When performing a `transitionState` update action and `transitions` is set, the currently referenced State must have a transition to the new State.
   *
   *	If `transitions` is an empty list, it means the current State is a final State and no further transitions are allowed.
   *	If `transitions` is not set, the validation is turned off.
   *
   *	When performing a `transitionState` update action, any other State of the same `type` can be transitioned to.
   *
   *
   */
  readonly transitions?: StateResourceIdentifier[]
}
