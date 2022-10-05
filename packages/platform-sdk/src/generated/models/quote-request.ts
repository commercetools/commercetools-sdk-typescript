/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  CartResourceIdentifier,
  CustomLineItem,
  DirectDiscount,
  InventoryMode,
  LineItem,
  RoundingMode,
  ShippingInfo,
  ShippingRateInput,
  TaxCalculationMode,
  TaxedPrice,
  TaxMode,
} from './cart'
import {
  Address,
  BaseResource,
  CreatedBy,
  LastModifiedBy,
  TypedMoney,
} from './common'
import { CustomerReference } from './customer'
import { CustomerGroupReference } from './customer-group'
import { PaymentInfo } from './order'
import { StateReference, StateResourceIdentifier } from './state'
import { StoreKeyReference } from './store'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface QuoteRequest extends BaseResource {
  /**
   *	Unique identifier of the QuoteRequest.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the QuoteRequest.
   *
   *
   */
  readonly version: number
  /**
   *	User-defined unique identifier of the QuoteRequest.
   *
   *
   */
  readonly key?: string
  /**
   *	Date and time (UTC) the QuoteRequest was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the QuoteRequest was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	Indicates the current state of the Quote Request in the negotiation process.
   *
   *
   */
  readonly quoteRequestState: QuoteRequestState
  /**
   *	Message from the Buyer included in the Quote Request.
   *
   *
   */
  readonly comment?: string
  /**
   *	The [Buyer](/../api/quotes-overview#buyer) who raised the request.
   *
   *
   */
  readonly customer: CustomerReference
  /**
   *	Set automatically when `customer` is set and the Customer is a member of a Customer Group.
   *	Used for Product Variant price selection.
   *
   */
  readonly customerGroup?: CustomerGroupReference
  /**
   *	The Store to which the [Buyer](/../api/quotes-overview#buyer) belongs.
   *
   *
   */
  readonly store?: StoreKeyReference
  /**
   *	The Line Items for which a Quote is requested.
   *
   *
   */
  readonly lineItems: LineItem[]
  /**
   *	The Custom Line Items for which a Quote is requested.
   *
   *
   */
  readonly customLineItems: CustomLineItem[]
  /**
   *	Sum of all `totalPrice` fields of the `lineItems` and `customLineItems`, as well as the `price` field of `shippingInfo` (if it exists).
   *	`totalPrice` may or may not include the taxes: it depends on the taxRate.includedInPrice property of each price.
   *
   *
   */
  readonly totalPrice: TypedMoney
  /**
   *	Not set until the shipping address is set.
   *	Will be set automatically in the `Platform` TaxMode.
   *	For the `External` tax mode it will be set  as soon as the external tax rates for all line items, custom line items, and shipping in the cart are set.
   *
   *
   */
  readonly taxedPrice?: TaxedPrice
  /**
   *	Used to determine the eligible [ShippingMethods](ctp:api:type:ShippingMethod)
   *	and rates as well as the tax rate of the Line Items.
   *
   *
   */
  readonly shippingAddress?: Address
  /**
   *	Address used for invoicing.
   *
   *
   */
  readonly billingAddress?: Address
  /**
   *	Inventory mode of the Cart referenced in the [QuoteRequestDraft](ctp:api:type:QuoteRequestDraft).
   *
   *
   */
  readonly inventoryMode?: InventoryMode
  /**
   *	Tax mode of the Cart referenced in the [QuoteRequestDraft](ctp:api:type:QuoteRequestDraft).
   *
   *
   */
  readonly taxMode: TaxMode
  /**
   *	When calculating taxes for `taxedPrice`, the selected mode is used for rounding.
   *
   *
   */
  readonly taxRoundingMode: RoundingMode
  /**
   *	When calculating taxes for `taxedPrice`, the selected mode is used for calculating the price with `LineItemLevel` (horizontally) or `UnitPriceLevel` (vertically) calculation mode.
   *
   */
  readonly taxCalculationMode: TaxCalculationMode
  /**
   *	Used for Product Variant price selection.
   *
   *
   */
  readonly country?: string
  /**
   *	Set automatically once the [ShippingMethod](ctp:api:type:ShippingMethod) is set.
   *
   *
   */
  readonly shippingInfo?: ShippingInfo
  /**
   *	Log of payment transactions related to the Quote.
   *
   *
   */
  readonly paymentInfo?: PaymentInfo
  /**
   *	Used to select a [ShippingRatePriceTier](ctp:api:type:ShippingRatePriceTier).
   *
   *
   */
  readonly shippingRateInput?: ShippingRateInput
  /**
   *	Contains addresses for carts with multiple shipping addresses.
   *	Line items reference these addresses under their `shippingDetails`.
   *	The addresses captured here are not used to determine eligible shipping methods or the applicable tax rate.
   *	Only the cart's `shippingAddress` is used for this.
   *
   *
   */
  readonly itemShippingAddresses?: Address[]
  /**
   *	Discounts that are only valid for the Quote and cannot be associated to any other Cart or Order.
   *
   *
   */
  readonly directDiscounts?: DirectDiscount[]
  /**
   *	Custom Fields of the Quote Request.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	[State](ctp:api:type:State) of the Quote Request.
   *	This reference can point to a State in a custom workflow.
   *
   *
   */
  readonly state?: StateReference
}
export interface QuoteRequestDraft {
  /**
   *	Cart for which a Quote is requested.
   *	Anonymous Carts, Carts with [Discount Codes](ctp:api:type:DiscountCode), or Carts with a `Multiple` [ShippingMode](ctp:api:type:ShippingMode) are not supported.
   *
   *
   */
  readonly cart: CartResourceIdentifier
  /**
   *	Current version of the referenced Cart.
   *
   *
   */
  readonly cartVersion: number
  /**
   *	User-defined unique identifier for the QuoteRequest.
   *
   *
   */
  readonly key?: string
  /**
   *	Message from the Buyer included in the Quote Request.
   *
   *
   */
  readonly comment: string
  /**
   *	Custom Fields to be added to the Quote Request.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	[State](ctp:api:type:State) of this Quote Request.
   *	This reference can point to a State in a custom workflow.
   *
   *
   */
  readonly state?: StateReference
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [QuoteRequest](ctp:api:type:QuoteRequest).
 *
 */
export interface QuoteRequestPagedQueryResponse {
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
   *	Quote Requests matching the query.
   *
   *
   */
  readonly results: QuoteRequest[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [QuoteRequest](ctp:api:type:QuoteRequest).
 *
 */
export interface QuoteRequestReference {
  readonly typeId: 'quote-request'
  /**
   *	Unique ID of the referenced resource.
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded QuoteRequest.
   *	Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for QuoteRequest.
   *
   *
   */
  readonly obj?: QuoteRequest
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [QuoteRequest](ctp:api:type:QuoteRequest).
 *
 */
export interface QuoteRequestResourceIdentifier {
  readonly typeId: 'quote-request'
  /**
   *	Unique identifier of the referenced resource. Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced resource. Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
/**
 *	Predefined states tracking the status of the Quote Request in the negotiation process.
 *
 */
export type QuoteRequestState =
  | 'Accepted'
  | 'Cancelled'
  | 'Closed'
  | 'Rejected'
  | 'Submitted'
  | string
export interface QuoteRequestUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: QuoteRequestUpdateAction[]
}
export type QuoteRequestUpdateAction =
  | QuoteRequestChangeQuoteRequestStateAction
  | QuoteRequestSetCustomFieldAction
  | QuoteRequestSetCustomTypeAction
  | QuoteRequestTransitionStateAction
/**
 *	Transitions the Quote Request to a different state.
 *	A Buyer is only allowed to cancel a Quote Request when it is in `Submitted` state.
 *
 */
export interface QuoteRequestChangeQuoteRequestStateAction {
  readonly action: 'changeQuoteRequestState'
  /**
   *	New state to be set for the Quote Request.
   *
   */
  readonly quoteRequestState: QuoteRequestState
}
export interface QuoteRequestSetCustomFieldAction {
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
export interface QuoteRequestSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the QuoteRequest with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the QuoteRequest.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the QuoteRequest.
   *
   *
   */
  readonly fields?: FieldContainer
}
/**
 *	If the existing [State](ctp:api:type:State) has set `transitions`, there must be a direct transition to the new State. If `transitions` is not set, no validation is performed. This update action produces the [Quote Request State Transition](ctp:api:type:QuoteRequestStateTransitionMessage) Message.
 *
 */
export interface QuoteRequestTransitionStateAction {
  readonly action: 'transitionState'
  /**
   *	Value to set.
   *	If there is no State yet, this must be an initial State.
   *
   *
   */
  readonly state: StateResourceIdentifier
  /**
   *	Switch validations on or off.
   *
   *
   */
  readonly force?: boolean
}
