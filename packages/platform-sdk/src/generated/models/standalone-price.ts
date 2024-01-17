/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ChannelReference, ChannelResourceIdentifier } from './channel'
import {
  BaseResource,
  CreatedBy,
  DiscountedPrice,
  DiscountedPriceDraft,
  LastModifiedBy,
  PriceTier,
  PriceTierDraft,
  TypedMoney,
  TypedMoneyDraft,
  _Money,
} from './common'
import {
  CustomerGroupReference,
  CustomerGroupResourceIdentifier,
} from './customer-group'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface StagedPriceDraft {
  /**
   *	Money value for the StagedPriceDraft.
   *
   *
   */
  readonly value: TypedMoneyDraft
}
/**
 *	Staged changes on a Standalone Price.
 *	To update the `value` property of a Staged Standalone Price, use the [Change Value](ctp:api:type:StandalonePriceChangeValueAction) update action.
 *	To apply all staged changes to the Standalone Price, use the [Apply Staged Changes](ctp:api:type:StandalonePriceApplyStagedChangesAction) update action.
 *
 */
export interface StagedStandalonePrice {
  /**
   *	Money value of the StagedStandalonePrice.
   *
   *
   */
  readonly value: TypedMoney
  /**
   *	Discounted price for the StagedStandalonePrice.
   *
   *
   */
  readonly discounted?: DiscountedPrice
}
export interface StandalonePrice extends BaseResource {
  /**
   *	Unique identifier of the StandalonePrice.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the StandalonePrice.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the StandalonePrice was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the StandalonePrice was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/general-concepts#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/general-concepts#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	User-defined unique identifier of the StandalonePrice.
   *
   */
  readonly key?: string
  /**
   *	SKU of the [ProductVariant](ctp:api:type:ProductVariant) to which this Price is associated.
   *
   *
   */
  readonly sku: string
  /**
   *	Money value of this Price.
   *
   *
   */
  readonly value: TypedMoney
  /**
   *	Country for which this Price is valid.
   *
   *
   */
  readonly country?: string
  /**
   *	[CustomerGroup](ctp:api:type:CustomerGroup) for which this Price is valid.
   *
   *
   */
  readonly customerGroup?: CustomerGroupReference
  /**
   *	Product distribution [Channel](ctp:api:type:Channel) for which this Price is valid.
   *
   *
   */
  readonly channel?: ChannelReference
  /**
   *	Date from which the Price is valid.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Date until the Price is valid. Standalone Prices that are no longer valid are not automatically deleted, but they can be [deleted](/../api/projects/standalone-prices#delete-standaloneprice) if necessary.
   *
   *
   */
  readonly validUntil?: string
  /**
   *	Price tiers if any are defined.
   *
   *
   */
  readonly tiers?: PriceTier[]
  /**
   *	Set if a matching [ProductDiscount](ctp:api:type:ProductDiscount) exists. If set, the API uses the `discounted` value for the [LineItem Price selection](ctp:api:type:LineItemPriceSelection).
   *	When a [relative discount](/../api/projects/productDiscounts#productdiscountvaluerelative) is applied and the fraction part of the `discounted` price is 0.5, the discounted price is rounded in favor of the customer with the [half down rounding](https://en.wikipedia.org/wiki/Rounding#Round_half_down).
   *
   *
   */
  readonly discounted?: DiscountedPrice
  /**
   *	Custom Fields for the StandalonePrice.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	Staged changes of the StandalonePrice. Only present if the StandalonePrice has some changes staged.
   *
   *
   */
  readonly staged?: StagedStandalonePrice
  /**
   *	If set to `true`, the StandalonePrice is considered during [price selection](ctp:api:type:ProductPriceSelection).
   *	If set to `false`, the StandalonePrice is not considered during [price selection](ctp:api:type:ProductPriceSelection).
   *
   *
   */
  readonly active: boolean
}
/**
 *	Standalone Prices are defined with a scope consisting of `currency` and optionally `country`, `customerGroup`, and `channel` and/or a validity period (`validFrom` and/or `validTo`). For more information see [price selection](/../api/projects/products#price-selection).
 *
 *	Creating a Standalone Price for an SKU which has a Standalone Price with exactly the same price scope, or with overlapping validity periods within the same price scope returns the [DuplicateStandalonePriceScope](ctp:api:type:DuplicateStandalonePriceScopeError) and [OverlappingStandalonePriceValidity](ctp:api:type:OverlappingStandalonePriceValidityError) errors, respectively. A Price without validity period does not conflict with a Price defined for a time period.
 */
export interface StandalonePriceDraft {
  /**
   *	User-defined unique identifier for the StandalonePrice.
   *
   */
  readonly key?: string
  /**
   *	Specifies to which [ProductVariant](ctp:api:type:ProductVariant) the API associates this Price.
   *	It is not validated to exist in product variants.
   *
   */
  readonly sku: string
  /**
   *	Sets the money value of this Price.
   *
   *
   */
  readonly value: _Money
  /**
   *	Sets the country for which this Price is valid.
   *
   *
   */
  readonly country?: string
  /**
   *	Sets the [CustomerGroup](ctp:api:type:CustomerGroup) for which this Price is valid.
   *
   *
   */
  readonly customerGroup?: CustomerGroupResourceIdentifier
  /**
   *	Sets the product distribution [Channel](ctp:api:type:Channel) for which this Price is valid.
   *
   *
   */
  readonly channel?: ChannelResourceIdentifier
  /**
   *	Sets the date from which the Price is valid. Must be at least 1 ms earlier than `validUntil`.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Sets the date until the Price is valid. Must be at least 1 ms later than `validFrom`. Standalone Prices that are no longer valid are not automatically deleted, but they can be [deleted](/../api/projects/standalone-prices#delete-standaloneprice) if necessary.
   *
   *
   */
  readonly validUntil?: string
  /**
   *	Sets price tiers.
   *
   *
   */
  readonly tiers?: PriceTierDraft[]
  /**
   *	Sets a discounted price for this Price that is different from the base price with `value`.
   *
   *
   */
  readonly discounted?: DiscountedPriceDraft
  /**
   *	Custom Fields for the StandalonePrice.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	Staged changes for the StandalonePrice.
   *
   *
   */
  readonly staged?: StagedPriceDraft
  /**
   *	Set to `false`, if the StandalonePrice should not be considered during [price selection](ctp:api:type:ProductPriceSelection).
   *
   *
   */
  readonly active?: boolean
}
export interface StandalonePricePagedQueryResponse {
  /**
   *	Number of requested results.
   *
   *
   */
  readonly limit: number
  /**
   *	Offset supplied by the client or server default. It is the number of elements skipped, not a page number.
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
   *	[StandalonePrices](ctp:api:type:StandalonePrice) matching the query.
   *
   *
   */
  readonly results: StandalonePrice[]
}
/**
 *	[Reference](/../api/types#reference) to a [StandalonePrice](ctp:api:type:StandalonePrice).
 *
 */
export interface StandalonePriceReference {
  readonly typeId: 'standalone-price'
  /**
   *	Unique ID of the referenced resource.
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded StandalonePrice. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for StandalonePrice.
   *
   *
   */
  readonly obj?: StandalonePrice
}
/**
 *	[ResourceIdentifier](/../api/types#resourceidentifier) to a [StandalonePrice](ctp:api:type:StandalonePrice).
 *
 */
export interface StandalonePriceResourceIdentifier {
  readonly typeId: 'standalone-price'
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
export interface StandalonePriceUpdate {
  /**
   *	Expected version of the StandalonePrice on which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the StandalonePrice.
   *
   *
   */
  readonly actions: StandalonePriceUpdateAction[]
}
export type StandalonePriceUpdateAction =
  | StandalonePriceAddPriceTierAction
  | StandalonePriceApplyStagedChangesAction
  | StandalonePriceChangeActiveAction
  | StandalonePriceChangeValueAction
  | StandalonePriceRemovePriceTierAction
  | StandalonePriceRemoveStagedChangesAction
  | StandalonePriceSetCustomFieldAction
  | StandalonePriceSetCustomTypeAction
  | StandalonePriceSetDiscountedPriceAction
  | StandalonePriceSetKeyAction
  | StandalonePriceSetPriceTiersAction
  | StandalonePriceSetValidFromAction
  | StandalonePriceSetValidFromAndUntilAction
  | StandalonePriceSetValidUntilAction
/**
 *	Adding a [PriceTier](ctp:api:type:PriceTier) to a [StandalonePrice](ctp:api:type:StandalonePrice) produces the [Standalone Price Tier Added](ctp:api:type:StandalonePriceTierAddedMessage) Message.
 *
 */
export interface StandalonePriceAddPriceTierAction {
  readonly action: 'addPriceTier'
  /**
   *	The [PriceTier](ctp:api:type:PriceTier) to be added to the `tiers` field of the [StandalonePrice](ctp:api:type:StandalonePrice).
   *	The action returns an [InvalidField](ctp:api:type:InvalidFieldError) error in the following cases:
   *
   *	* Trying to add a PriceTier with `minimumQuantity` < `2`.
   *	* Trying to add a PriceTier with `minimumQuantity` that already exists for the StandalonePrice.
   *
   *
   */
  readonly tier: PriceTierDraft
}
/**
 *	Applies all staged changes to the StandalonePrice by overwriting all current values with the values in the [StagedStandalonePrice](ctp:api:type:StagedStandalonePrice). After successfully applied, the [StagedStandalonePrice](ctp:api:type:StagedStandalonePrice) will be removed from the StandalonePrice. An `applyStagedChanges` update action on a StandalonePrice that does not contain any staged changes will return a `400 Bad Request` error. Applying staged changes successfully will produce the [StandalonePriceStagedChangesApplied](ctp:api:type:StandalonePriceStagedChangesAppliedMessage) Message.
 *
 */
export interface StandalonePriceApplyStagedChangesAction {
  readonly action: 'applyStagedChanges'
}
/**
 *	Updating the value of a [StandalonePrice](ctp:api:type:StandalonePrice) produces the [StandalonePriceActiveChanged](ctp:api:type:StandalonePriceActiveChangedMessage) Message.
 *
 */
export interface StandalonePriceChangeActiveAction {
  readonly action: 'changeActive'
  /**
   *	New value to set for the `active` field of the [StandalonePrice](ctp:api:type:StandalonePrice).
   *
   *
   */
  readonly active: boolean
}
/**
 *	Updating the value of a [StandalonePrice](ctp:api:type:StandalonePrice) produces the [StandalonePriceValueChangedMessage](ctp:api:type:StandalonePriceValueChangedMessage).
 *
 */
export interface StandalonePriceChangeValueAction {
  readonly action: 'changeValue'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly value: _Money
  /**
   *	If set to `true` the update action applies to the [StagedStandalonePrice](ctp:api:type:StagedStandalonePrice). If set to `false`, the update action applies to the current [StandalonePrice](ctp:api:type:StandalonePrice).
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Removing a [PriceTier](ctp:api:type:PriceTier) from a [StandalonePrice](ctp:api:type:StandalonePrice) produces the [Standalone Price Tier Removed](ctp:api:type:StandalonePriceTierRemovedMessage) Message.
 *
 */
export interface StandalonePriceRemovePriceTierAction {
  readonly action: 'removePriceTier'
  /**
   *	The `minimumQuantity` of the [PriceTier](ctp:api:type:PriceTier) to be removed from the `tiers` field of the [StandalonePrice](ctp:api:type:StandalonePrice).
   *
   *
   */
  readonly tierMinimumQuantity: number
}
/**
 *	Removes all staged changes from the StandalonePrice.
 *	Removing staged changes successfully produces the [StandalonePriceStagedChangesRemoved](ctp:api:type:StandalonePriceStagedChangesRemovedMessage) Message.
 *
 */
export interface StandalonePriceRemoveStagedChangesAction {
  readonly action: 'removeStagedChanges'
}
export interface StandalonePriceSetCustomFieldAction {
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
export interface StandalonePriceSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the StandalonePrice with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the StandalonePrice.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the StandalonePrice.
   *
   *
   */
  readonly fields?: FieldContainer
}
/**
 *	Discounts a Standalone Price. The referenced [ProductDiscount](ctp:api:type:ProductDiscount) in the discounted field must be of type external, active, and its predicate must match the referenced Price. Produces the [StandalonePriceExternalDiscountSet](ctp:api:type:StandalonePriceExternalDiscountSetMessage) Message.
 *
 */
export interface StandalonePriceSetDiscountedPriceAction {
  readonly action: 'setDiscountedPrice'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly discounted?: DiscountedPriceDraft
}
/**
 *	Sets the key on a Standalone Price. Produces the [StandalonePriceKeySet](ctp:api:type:StandalonePriceKeySetMessage) Message.
 *
 */
export interface StandalonePriceSetKeyAction {
  readonly action: 'setKey'
  /**
   *	Value to set. Must be unique. If empty, any existing value will be removed.
   *
   *
   */
  readonly key?: string
}
/**
 *	Sets all [PriceTiers](ctp:api:type:PriceTier) for a [StandalonePrice](ctp:api:type:StandalonePrice) in one action, produces the [Standalone Price Tiers Set](ctp:api:type:StandalonePriceTiersSetMessage) Message.
 *
 */
export interface StandalonePriceSetPriceTiersAction {
  readonly action: 'setPriceTiers'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *	The `minimumQuantity` of the PriceTiers must be unique and greater than `1`, otherwise an [InvalidField](ctp:api:type:InvalidFieldError) error is returned.
   *
   *
   */
  readonly tiers: PriceTierDraft[]
}
/**
 *	Updating the `validFrom` value generates the [StandalonePriceValidFromSet](ctp:api:type:StandalonePriceValidFromSetMessage) Message.
 *
 *	As the validity dates are part of the price scope and are not allowed to overlap, this update might return the [DuplicateStandalonePriceScope](ctp:api:type:DuplicateStandalonePriceScopeError) and [OverlappingStandalonePriceValidity](ctp:api:type:OverlappingStandalonePriceValidityError) errors, respectively. A Price without validity period does not conflict with a Price defined for a time period.
 *
 */
export interface StandalonePriceSetValidFromAction {
  readonly action: 'setValidFrom'
  /**
   *	Value to set.
   *	If empty, any existing value is removed.
   *
   *
   */
  readonly validFrom?: string
}
/**
 *	Updating the `validFrom` and `validUntil` values generates the [StandalonePriceValidFromAndUntilSet](ctp:api:type:StandalonePriceValidFromAndUntilSetMessage) Message.
 *
 *	As the validity dates are part of the price scope and are not allowed to overlap, this update might return the [DuplicateStandalonePriceScope](ctp:api:type:DuplicateStandalonePriceScopeError) and [OverlappingStandalonePriceValidity](ctp:api:type:OverlappingStandalonePriceValidityError) errors, respectively. A Price without validity period does not conflict with a Price defined for a time period.
 *
 */
export interface StandalonePriceSetValidFromAndUntilAction {
  readonly action: 'setValidFromAndUntil'
  /**
   *	Value to set.
   *	If empty, any existing value is removed.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Value to set.
   *	If empty, any existing value is removed.
   *
   *
   */
  readonly validUntil?: string
}
/**
 *	Updating the `validUntil` value generates the [StandalonePriceValidUntilSet](ctp:api:type:StandalonePriceValidUntilSetMessage) Message.
 *
 *	As the validity dates are part of the price scope and are not allowed to overlap, this update might return the [DuplicateStandalonePriceScope](ctp:api:type:DuplicateStandalonePriceScopeError) and [OverlappingStandalonePriceValidity](ctp:api:type:OverlappingStandalonePriceValidityError) errors, respectively. A Price without validity period does not conflict with a Price defined for a time period.
 *
 */
export interface StandalonePriceSetValidUntilAction {
  readonly action: 'setValidUntil'
  /**
   *	Value to set.
   *	If empty, any existing value is removed.
   *
   *
   */
  readonly validUntil?: string
}
