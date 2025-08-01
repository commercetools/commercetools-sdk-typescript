/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { BusinessUnitKeyReference } from './business-unit'
import { CartReference, CartResourceIdentifier } from './cart'
import {
  BaseResource,
  CreatedBy,
  IReference,
  IResourceIdentifier,
  LastModifiedBy,
} from './common'
import { CustomerReference } from './customer'
import { OrderReference } from './order'
import {
  RecurrencePolicyReference,
  RecurrencePolicyResourceIdentifier,
  RecurrencePolicySchedule,
} from './recurrence-policy'
import { StateReference, StateResourceIdentifier } from './state'
import { StoreKeyReference } from './store'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

/**
 *	Information about recurring orders and frequencies.
 *
 */
export interface CustomLineItemRecurrenceInfo {
  /**
   *	[Reference](ctp:api:type:Reference) to a RecurrencePolicy.
   *
   *
   */
  readonly recurrencePolicy: RecurrencePolicyReference
}
/**
 *	Information about recurring orders and frequencies.
 *
 */
export interface CustomLineItemRecurrenceInfoDraft {
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a RecurrencePolicy.
   *
   *
   */
  readonly recurrencePolicy: RecurrencePolicyResourceIdentifier
}
/**
 *	Information about recurring orders and frequencies.
 *
 */
export interface LineItemRecurrenceInfo {
  /**
   *	[Reference](ctp:api:type:Reference) to a RecurrencePolicy.
   *
   *
   */
  readonly recurrencePolicy: RecurrencePolicyReference
  /**
   *	Indicates how the price of a line item will be selected during order creation.
   *
   *
   */
  readonly priceSelectionMode: PriceSelectionMode
}
/**
 *	Information about recurring orders and frequencies.
 *
 */
export interface LineItemRecurrenceInfoDraft {
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a RecurrencePolicy.
   *
   *
   */
  readonly recurrencePolicy: RecurrencePolicyResourceIdentifier
  /**
   *	Determines how the price of a line item will be selected during order creation.
   *
   *
   */
  readonly priceSelectionMode: PriceSelectionMode
}
/**
 *	Indicates how the price of a [Line Item](ctp:api:type:LineItem) or [Custom Line Item](ctp:api:type:CustomLineItem) is selected during Order creation.
 *
 */
export enum PriceSelectionModeValues {
  Dynamic = 'Dynamic',
  Fixed = 'Fixed',
}

export type PriceSelectionMode = 'Dynamic' | 'Fixed' | (string & {})
export interface RecurringOrder extends BaseResource {
  /**
   *	Unique identifier of the RecurringOrder.
   *
   *
   */
  readonly id: string
  /**
   *	User-defined unique identifier of the RecurringOrder.
   *
   *
   */
  readonly key?: string
  /**
   *	Current version of the RecurringOrder.
   *
   *
   */
  readonly version: number
  /**
   *	[Reference](ctp:api:type:Reference) to the Cart for a RecurringOrder.
   *	The referenced Cart will have the `RecurringOrder` [CartOrigin](ctp:api:type:CartOrigin).
   *
   *
   */
  readonly cart: CartReference
  /**
   *	[Reference](ctp:api:type:Reference) to the original [Order](ctp:api:type:Order) that generated this RecurringOrder.
   *
   *
   */
  readonly originOrder: OrderReference
  /**
   *	Date and time (UTC) when the RecurringOrder starts creating new Orders.
   *
   *
   */
  readonly startsAt: string
  /**
   *	Date and time (UTC) when the RecurringOrder resumes creating Orders after being unpaused.
   *
   *
   */
  readonly resumesAt?: string
  /**
   *	Date and time (UTC) when the RecurringOrder expires.
   *
   *
   */
  readonly expiresAt?: string
  /**
   *	Date and time (UTC) when the last Order was created from this RecurringOrder.
   *
   *
   */
  readonly lastOrderAt?: string
  /**
   *	Date and time (UTC) when the next Order will be created from this RecurringOrder.
   *
   *
   */
  readonly nextOrderAt?: string
  /**
   *	Information about current and future skips for this RecurringOrder.
   *
   *
   */
  readonly skipConfiguration?: SkipConfiguration
  /**
   *	[Reference](ctp:api:type:Reference) to a Store.
   *
   *
   */
  readonly store?: StoreKeyReference
  /**
   *	[Reference](ctp:api:type:Reference) to the Business Unit that the RecurringOrder belongs to.
   *
   *
   */
  readonly businessUnit?: BusinessUnitKeyReference
  /**
   *	[State](ctp:api:type:State) of the RecurringOrder in a custom workflow.
   *
   *
   */
  readonly state?: StateReference
  /**
   *	Current state of the RecurringOrder.
   *
   *
   */
  readonly recurringOrderState: RecurringOrderState
  /**
   *	Schedule of the RecurringOrder.
   *
   *
   */
  readonly schedule: RecurrencePolicySchedule
  /**
   *	The [Customer](ctp:api:type:Customer) that the RecurringOrder belongs to.
   *
   *
   */
  readonly customer?: CustomerReference
  /**
   *	Email address of the Customer that the RecurringOrder belongs to.
   *
   *
   */
  readonly customerEmail?: string
  /**
   *	Custom Fields of the RecurringOrder.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	Date and time (UTC) when the RecurringOrder was created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) when the RecurringOrder was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	IDs and references that last modified the RecurringOrder.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	IDs and references that created the RecurringOrder.
   *
   *
   */
  readonly createdBy?: CreatedBy
}
/**
 *	Recurring Orders are automatically assigned the Store and/or Business Unit from the associated Cart.
 *
 */
export interface RecurringOrderDraft {
  /**
   *	User-defined unique identifier of the [RecurringOrder](ctp:api:type:RecurringOrder).
   *
   *
   */
  readonly key?: string
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to the Cart from which the RecurringOrder is created.
   *
   *
   */
  readonly cart: CartResourceIdentifier
  /**
   *	Current version of the referenced [Cart](ctp:api:type:Cart).
   *
   *
   */
  readonly cartVersion: number
  /**
   *	Date and time (UTC) when the RecurringOrder will start.
   *
   *
   */
  readonly startsAt: string
  /**
   *	Date and time (UTC) when the RecurringOrder will expire.
   *
   *
   */
  readonly expiresAt?: string
  /**
   *	State for the RecurringOrder in a custom workflow.
   *
   *
   */
  readonly state?: StateResourceIdentifier
  /**
   *	Custom Fields for the RecurringOrder.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with `results` containing an array of [RecurringOrder](ctp:api:type:RecurringOrder).
 *
 */
export interface RecurringOrderPagedQueryResponse {
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
   *	[RecurringOrders](ctp:api:type:RecurringOrder) matching the query.
   *
   *
   */
  readonly results: RecurringOrder[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [RecurringOrder](ctp:api:type:RecurringOrder).
 *
 */
export interface RecurringOrderReference extends IReference {
  readonly typeId: 'recurring-order'
  /**
   *	Unique identifier of the referenced [RecurringOrder](ctp:api:type:RecurringOrder).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded RecurringOrder.
   *	Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for RecurringOrders.
   *
   *
   */
  readonly obj?: RecurringOrder
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [RecurringOrder](ctp:api:type:RecurringOrder). Either `id` or `key` is required. If both are set, an [InvalidJsonInput](/../api/errors#invalidjsoninput) error is returned.
 *
 */
export interface RecurringOrderResourceIdentifier extends IResourceIdentifier {
  readonly typeId: 'recurring-order'
  /**
   *	Unique identifier of the referenced [RecurringOrder](ctp:api:type:RecurringOrder). Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [RecurringOrder](ctp:api:type:RecurringOrder). Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
/**
 *	Indicates the state of the [RecurringOrder](ctp:api:type:RecurringOrder).
 *
 */
export enum RecurringOrderStateValues {
  Active = 'Active',
  Canceled = 'Canceled',
  Expired = 'Expired',
  Failed = 'Failed',
  Paused = 'Paused',
}

export type RecurringOrderState =
  | 'Active'
  | 'Canceled'
  | 'Expired'
  | 'Failed'
  | 'Paused'
  | (string & {})
/**
 *	Defines the new state for the Recurring Order—for possible values, see [RecurringOrderActive](ctp:api:type:RecurringOrderActive), [RecurringOrderPaused](ctp:api:type:RecurringOrderPaused), [RecurringOrderExpired](ctp:api:type:RecurringOrderExpired), and [RecurringOrderCanceled](ctp:api:type:RecurringOrderCanceled).
 *
 */
export type RecurringOrderStateDraft =
  | RecurringOrderActive
  | RecurringOrderCanceled
  | RecurringOrderExpired
  | RecurringOrderPaused
export interface IRecurringOrderStateDraft {
  /**
   *
   */
  readonly type: string
}
/**
 *	Changes the Recurring Order state to active.
 *
 */
export interface RecurringOrderActive extends IRecurringOrderStateDraft {
  readonly type: 'active'
  /**
   *	If set, the Recurring Order will automatically resume at the date and time (UTC) specified.
   *
   *
   */
  readonly resumesAt?: string
}
/**
 *	Changes the Recurring Order state to canceled.
 *
 */
export interface RecurringOrderCanceled extends IRecurringOrderStateDraft {
  readonly type: 'canceled'
  /**
   *	The reason for the cancelation.
   *
   *
   */
  readonly reason?: string
}
/**
 *	Changes the Recurring Order state to expired.
 *
 */
export interface RecurringOrderExpired extends IRecurringOrderStateDraft {
  readonly type: 'expired'
}
/**
 *	Changes the Recurring Order state to paused.
 *
 */
export interface RecurringOrderPaused extends IRecurringOrderStateDraft {
  readonly type: 'paused'
}
export interface RecurringOrderUpdate {
  /**
   *	Expected version of the RecurringOrder on which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the RecurringOrder.
   *
   *
   */
  readonly actions: RecurringOrderUpdateAction[]
}
export type RecurringOrderUpdateAction =
  | RecurringOrderSetCustomFieldAction
  | RecurringOrderSetCustomTypeAction
  | RecurringOrderSetExpiresAtAction
  | RecurringOrderSetKeyAction
  | RecurringOrderSetOrderSkipConfigurationAction
  | RecurringOrderSetScheduleAction
  | RecurringOrderSetStartsAtAction
  | RecurringOrderSetStateAction
  | RecurringOrderTransitionStateAction
export interface IRecurringOrderUpdateAction {
  /**
   *
   */
  readonly action: string
}
/**
 *	Defines how the next orders are going to be skipped.
 *
 */
export type SkipConfiguration = Counter
export interface ISkipConfiguration {
  /**
   *
   */
  readonly type: string
}
/**
 *	Configuration to track skips for a [RecurringOrder](ctp:api:type:RecurringOrder).
 *
 */
export interface Counter extends ISkipConfiguration {
  readonly type: 'counter'
  /**
   *	Number of Orders that will be skipped.
   *
   *
   */
  readonly totalToSkip: number
  /**
   *	Number of Orders that were already skipped.
   *
   *
   */
  readonly skipped: number
  /**
   *	Date and time (UTC) when the last Order creation was skipped.
   *
   *
   */
  readonly lastSkippedAt?: string
}
/**
 *	Defines how the next orders are going to be skipped.
 *
 */
export type SkipConfigurationDraft = CounterDraft
export interface ISkipConfigurationDraft {
  /**
   *
   */
  readonly type: string
}
/**
 *	Configuration that uses a counter to track the number of Orders that will be skipped.
 *
 */
export interface CounterDraft extends ISkipConfigurationDraft {
  readonly type: 'counter'
  /**
   *	Number of Orders that will be skipped.
   *
   *
   */
  readonly totalToSkip: number
}
/**
 *	Adding a Custom Field to a Recurring Order generates the [RecurringOrderCustomFieldAdded](ctp:api:type:RecurringOrderCustomFieldAddedMessage) Message, removing one generates the [RecurringOrderCustomFieldRemoved](ctp:api:type:RecurringOrderCustomFieldRemovedMessage) Message, and updating an existing one generates the [RecurringOrderCustomFieldChanged](ctp:api:type:RecurringOrderCustomFieldChangedMessage) Message.
 *
 */
export interface RecurringOrderSetCustomFieldAction
  extends IRecurringOrderUpdateAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Removing a field that does not exist returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
/**
 *	Adding or updating a Custom Type on a Recurring Order generates the [RecurringOrderCustomTypeSet](ctp:api:type:RecurringOrderCustomTypeSetMessage) Message, removing one generates the [RecurringOrderCustomTypeRemoved](ctp:api:type:RecurringOrderCustomTypeRemovedMessage) Message.
 *
 */
export interface RecurringOrderSetCustomTypeAction
  extends IRecurringOrderUpdateAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the RecurringOrder with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the RecurringOrder.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the RecurringOrder.
   *
   *
   */
  readonly fields?: FieldContainer
}
/**
 *	Setting the expiration date and time generates the [RecurringOrderExpiresAtSet](ctp:api:type:RecurringOrderExpiresAtSetMessage) Message.
 *
 */
export interface RecurringOrderSetExpiresAtAction
  extends IRecurringOrderUpdateAction {
  readonly action: 'setExpiresAt'
  /**
   *	Date and time (UTC) the Recurring Order should expire. If empty, any existing value will be removed.
   *
   *	If the date or time is extended or removed when the [RecurringOrderState](ctp:api:type:RecurringOrderState) is `Expired`, the state will be updated to `Active`.
   *
   *
   */
  readonly expiresAt?: string
}
/**
 *	This update action generates the [RecurringOrderKeySet](ctp:api:type:RecurringOrderKeySetMessage) Message.
 *
 */
export interface RecurringOrderSetKeyAction
  extends IRecurringOrderUpdateAction {
  readonly action: 'setKey'
  /**
   *	Value to set.
   *	If empty, any existing key will be removed.
   *
   *
   */
  readonly key?: string
}
export interface RecurringOrderSetOrderSkipConfigurationAction
  extends IRecurringOrderUpdateAction {
  readonly action: 'setOrderSkipConfiguration'
  /**
   *	Configuration for skipping the next orders of the [Recurring Order](ctp:api:type:RecurringOrder).
   *
   *
   */
  readonly skipConfiguration?: SkipConfigurationDraft
  /**
   *	Date and time (UTC) the Recurring Order will expire and stop generating new orders.
   *
   *
   */
  readonly updatedExpiresAt?: string
}
/**
 *	To set the [schedule](ctp:api:type:RecurrencePolicySchedule), the [Recurring Order](ctp:api:type:RecurringOrder) must be active, with no active [Skip Configuration](ctp:api:type:SkipConfiguration) and with available prices for all Cart items for the new schedule.
 *	Setting the schedule generates the [RecurringOrderScheduleSet](ctp:api:type:RecurringOrderScheduleSetMessage) Message.
 *
 */
export interface RecurringOrderSetScheduleAction
  extends IRecurringOrderUpdateAction {
  readonly action: 'setSchedule'
  /**
   *	Value to set.
   *
   */
  readonly recurrencePolicy: RecurrencePolicyResourceIdentifier
}
/**
 *	To set the start date and time, the [Recurring Order](ctp:api:type:RecurringOrder) must not have been started yet.
 *	Setting the start date and time generates the [RecurringOrderStartsAtSet](ctp:api:type:RecurringOrderStartsAtSetMessage) Message.
 *
 */
export interface RecurringOrderSetStartsAtAction
  extends IRecurringOrderUpdateAction {
  readonly action: 'setStartsAt'
  /**
   *	Date and time (UTC) the [Recurring Order](ctp:api:type:RecurringOrder) should be started. The date and time must be in the future.
   *
   */
  readonly startsAt: string
}
/**
 *	Setting the [RecurringOrderState](ctp:api:type:RecurringOrderState) generates the [RecurringOrderStateChanged](ctp:api:type:RecurringOrderStateChangedMessage) Message.
 *
 */
export interface RecurringOrderSetStateAction
  extends IRecurringOrderUpdateAction {
  readonly action: 'setRecurringOrderState'
  /**
   *	New state of the RecurringOrder.
   *
   *
   */
  readonly recurringOrderState: RecurringOrderStateDraft
}
/**
 *	If the existing [State](ctp:api:type:State) has set `transitions`, there must be a direct transition to the new State.
 *	If `transitions` is not set, no validation is performed.
 *
 *	This update action produces the [Recurring Order State Transition](ctp:api:type:RecurringOrderStateTransitionMessage) Message.
 *
 */
export interface RecurringOrderTransitionStateAction
  extends IRecurringOrderUpdateAction {
  readonly action: 'transitionState'
  /**
   *	Value to set.
   *	If there is no State yet, the new State must be an initial State.
   *
   *
   */
  readonly state: StateResourceIdentifier
  /**
   *	Set to `true` to turn off validation.
   *
   *
   */
  readonly force?: boolean
}
