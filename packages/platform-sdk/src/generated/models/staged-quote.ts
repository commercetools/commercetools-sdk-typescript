/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { BusinessUnitKeyReference } from './business-unit'
import { CartReference } from './cart'
import {
  BaseResource,
  CreatedBy,
  IReference,
  IResourceIdentifier,
  LastModifiedBy,
} from './common'
import { CustomerReference } from './customer'
import {
  QuoteRequestReference,
  QuoteRequestResourceIdentifier,
} from './quote-request'
import { StateReference, StateResourceIdentifier } from './state'
import { StoreKeyReference } from './store'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface StagedQuote extends BaseResource {
  /**
   *	The unique ID of the StagedQuote.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the StagedQuote.
   *
   *
   */
  readonly version: number
  /**
   *	User-specific unique identifier of the staged quote.
   *
   */
  readonly key?: string
  /**
   *	Date and time (UTC) the StagedQuote was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the StagedQuote was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	IDs and references that last modified the StagedQuote.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	IDs and references that created the StagedQuote.
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	Predefined states tracking the status of the Staged Quote.
   *
   *
   */
  readonly stagedQuoteState: StagedQuoteState
  /**
   *	The [Buyer](/../api/quotes-overview#buyer) who requested the Quote.
   *
   *
   */
  readonly customer?: CustomerReference
  /**
   *	Quote Request related to the Staged Quote.
   *
   *
   */
  readonly quoteRequest: QuoteRequestReference
  /**
   *	[Cart](ctp:api:type:Cart) containing the offered items. May contain either [DirectDiscounts](ctp:api:type:DirectDiscount) or [CartDiscounts](ctp:api:type:CartDiscount).
   *
   *
   */
  readonly quotationCart: CartReference
  /**
   *	Expiration date for the Quote. Once a Quote expires, it cannot be ordered.
   *
   *
   */
  readonly validTo?: string
  /**
   *	Message from the [Seller](/../api/quotes-overview#seller) included in the offer.
   *
   *
   */
  readonly sellerComment?: string
  /**
   *	Custom Fields of the Staged Quote.
   *
   */
  readonly custom?: CustomFields
  /**
   *	[State](ctp:api:type:State) of the Staged Quote.
   *	This reference can point to a State in a custom workflow.
   *
   *
   */
  readonly state?: StateReference
  /**
   *	The Purchase Order Number is typically set by the [Buyer](/quotes-overview#buyer) on a [QuoteRequest](ctp:api:type:QuoteRequest) to
   *	track the purchase order during the [quote and order flow](/../api/quotes-overview#intended-workflow).
   *
   *
   */
  readonly purchaseOrderNumber?: string
  /**
   *	The [BusinessUnit](ctp:api:type:BusinessUnit) for the Staged Quote. Only available for [B2B](/../offering/composable-commerce#composable-commerce-for-b2b)-enabled Projects.
   *
   *
   */
  readonly businessUnit?: BusinessUnitKeyReference
  /**
   *	The Store to which the [Buyer](/../api/quotes-overview#buyer) belongs.
   *
   *
   */
  readonly store?: StoreKeyReference
}
export interface StagedQuoteDraft {
  /**
   *	QuoteRequest from which the StagedQuote is created.
   *
   *
   */
  readonly quoteRequest: QuoteRequestResourceIdentifier
  /**
   *	Current version of the QuoteRequest.
   *
   *
   */
  readonly quoteRequestVersion: number
  /**
   *	If `true`, the `quoteRequestState` of the referenced [QuoteRequest](ctp:api:type:QuoteRequest) will be set to `Accepted`.
   *
   *
   */
  readonly quoteRequestStateToAccepted?: boolean
  /**
   *	User-defined unique identifier for the StagedQuote.
   *
   *
   */
  readonly key?: string
  /**
   *	[Custom Fields](/../api/projects/custom-fields) to be added to the StagedQuote.
   *
   *	- If specified, the Custom Fields are merged with the Custom Fields on the referenced [QuoteRequest](ctp:api:type:QuoteRequest) and added to the StagedQuote.
   *	- If empty, the Custom Fields on the referenced [QuoteRequest](ctp:api:type:QuoteRequest) are added to the StagedQuote automatically.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	[State](ctp:api:type:State) of the Staged Quote.
   *	This reference can point to a State in a custom workflow.
   *
   *
   */
  readonly state?: StateReference
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [StagedQuote](ctp:api:type:StagedQuote).
 *
 */
export interface StagedQuotePagedQueryResponse {
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
   *	Staged Quotes matching the query.
   *
   *
   */
  readonly results: StagedQuote[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [StagedQuote](ctp:api:type:StagedQuote).
 *
 */
export interface StagedQuoteReference extends IReference {
  readonly typeId: 'staged-quote'
  /**
   *	Unique ID of the referenced resource.
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded StagedQuote.
   *	Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for StagedQuote.
   *
   *
   */
  readonly obj?: StagedQuote
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [StagedQuote](ctp:api:type:StagedQuote).
 *
 */
export interface StagedQuoteResourceIdentifier extends IResourceIdentifier {
  readonly typeId: 'staged-quote'
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
 *	Predefined states tracking the status of the Staged Quote.
 *
 */
export enum StagedQuoteStateValues {
  Closed = 'Closed',
  InProgress = 'InProgress',
  Sent = 'Sent',
}

export type StagedQuoteState = 'Closed' | 'InProgress' | 'Sent' | (string & {})
export interface StagedQuoteUpdate {
  /**
   *	Expected version of the [StagedQuote](ctp:api:type:StagedQuote) to which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the [StagedQuote](ctp:api:type:StagedQuote).
   *
   *
   */
  readonly actions: StagedQuoteUpdateAction[]
}
export type StagedQuoteUpdateAction =
  | StagedQuoteChangeStagedQuoteStateAction
  | StagedQuoteSetCustomFieldAction
  | StagedQuoteSetCustomTypeAction
  | StagedQuoteSetSellerCommentAction
  | StagedQuoteSetValidToAction
  | StagedQuoteTransitionStateAction
export interface IStagedQuoteUpdateAction {
  /**
   *
   */
  readonly action: string
}
export interface StagedQuoteChangeStagedQuoteStateAction
  extends IStagedQuoteUpdateAction {
  readonly action: 'changeStagedQuoteState'
  /**
   *	New state to be set for the Staged Quote.
   *
   */
  readonly stagedQuoteState: StagedQuoteState
}
export interface StagedQuoteSetCustomFieldAction
  extends IStagedQuoteUpdateAction {
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
export interface StagedQuoteSetCustomTypeAction
  extends IStagedQuoteUpdateAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the StagedQuote with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the StagedQuote.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the StagedQuote.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StagedQuoteSetSellerCommentAction
  extends IStagedQuoteUpdateAction {
  readonly action: 'setSellerComment'
  /**
   *	If `sellerComment` is absent or `null`, this field will be removed if it exists.
   *
   *
   */
  readonly sellerComment?: string
}
export interface StagedQuoteSetValidToAction extends IStagedQuoteUpdateAction {
  readonly action: 'setValidTo'
  /**
   *	If `validTo` is absent or `null`, this field will be removed if it exists.
   *
   *
   */
  readonly validTo?: string
}
/**
 *	If the existing [State](ctp:api:type:State) has set `transitions`, there must be a direct transition to the new State. If `transitions` is not set, no validation is performed. This update action produces the [Staged Quote State Transition](ctp:api:type:StagedQuoteStateTransitionMessage) Message.
 *
 */
export interface StagedQuoteTransitionStateAction
  extends IStagedQuoteUpdateAction {
  readonly action: 'transitionState'
  /**
   *	Value to set.
   *	If there is no State yet, the new State must be an initial State.
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
