/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  BaseResource,
  CentPrecisionMoney,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
  Money,
  QueryPrice,
  Reference,
} from './common'

export interface ProductDiscount extends BaseResource {
  /**
   *	Unique identifier of the ProductDiscount.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the ProductDiscount.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the ProductDiscount was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the ProductDiscount was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
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
   *	Name of the ProductDiscount.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	User-defined unique identifier of the ProductDiscount.
   *
   *
   */
  readonly key?: string
  /**
   *	Description of the ProductDiscount.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Type of Discount and its corresponding value.
   *
   *
   */
  readonly value: ProductDiscountValue
  /**
   *	Valid [ProductDiscount predicate](/../api/projects/predicates#productdiscount-predicates).
   *
   *
   */
  readonly predicate: string
  /**
   *	Unique decimal value between 0 and 1 (stored as String literal) defining the order of Product Discounts to apply in case more than one is applicable and active.
   *	A Product Discount with a higher value is prioritized.
   *
   *
   */
  readonly sortOrder: string
  /**
   *	If `true` the Product Discount is applied to Products matching the `predicate`.
   *
   *
   */
  readonly isActive: boolean
  /**
   *	References of all the resources that are addressed in the `predicate`.
   *
   *
   */
  readonly references: Reference[]
  /**
   *	Date and time (UTC) from which the Discount is effective.
   *	Take [Eventual Consistency](/../api/general-concepts#eventual-consistency) into account for calculated discount values.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Date and time (UTC) until which the Discount is effective.
   *	Take [Eventual Consistency](/../api/general-concepts#eventual-consistency) into account for calculated undiscounted values.
   *
   *
   */
  readonly validUntil?: string
}
export interface ProductDiscountDraft {
  /**
   *	Name of the ProductDiscount.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	User-defined unique identifier for the ProductDiscount.
   *
   *
   */
  readonly key?: string
  /**
   *	Description of the ProductDiscount.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Type of Discount and its corresponding value.
   *
   *
   */
  readonly value: ProductDiscountValueDraft
  /**
   *	Valid [ProductDiscount predicate](/../api/projects/predicates#productdiscount-predicates).
   *
   *
   */
  readonly predicate: string
  /**
   *	Decimal value between 0 and 1 (passed as String literal) that defines the order of ProductDiscounts to apply in case more than one is applicable and active. A ProductDiscount with a higher `sortOrder` is prioritized.
   *	The value must be **unique** among all ProductDiscounts in the [Project](ctp:api:type:Project).
   *
   *
   */
  readonly sortOrder: string
  /**
   *	Set to `true` to activate the ProductDiscount, set to `false` to deactivate it (even though the `predicate` matches).
   *
   *
   */
  readonly isActive: boolean
  /**
   *	Date and time (UTC) from which the Discount is effective.
   *	Take [Eventual Consistency](/../api/general-concepts#eventual-consistency) into account for calculated discount values.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Date and time (UTC) until which the Discount is effective.
   *	Take [Eventual Consistency](/../api/general-concepts#eventual-consistency) into account for calculated undiscounted values.
   *
   *
   */
  readonly validUntil?: string
}
export interface ProductDiscountMatchQuery {
  /**
   *	ID of the specified Product.
   *
   *
   */
  readonly productId: string
  /**
   *	ID of the specified Product Variant.
   *
   *
   */
  readonly variantId: number
  /**
   *	Controls which [projected representation](/../api/projects/productProjections#current--staged) is applied for the query.
   *	Set to `true` for the `staged` Product Projection of the specified Product Variant, set to `false` for the `current` one.
   *
   *
   */
  readonly staged: boolean
  /**
   *	Specified Price of the specified Product Variant.
   *
   *
   */
  readonly price: QueryPrice
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [ProductDiscount](ctp:api:type:ProductDiscount).
 *
 */
export interface ProductDiscountPagedQueryResponse {
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
   *	[ProductDiscounts](ctp:api:type:ProductDiscount) matching the query.
   *
   *
   */
  readonly results: ProductDiscount[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [ProductDiscount](ctp:api:type:ProductDiscount).
 *
 */
export interface ProductDiscountReference {
  readonly typeId: 'product-discount'
  /**
   *	Unique identifier of the referenced [ProductDiscount](ctp:api:type:ProductDiscount).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded ProductDiscount. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for ProductDiscounts.
   *
   *
   */
  readonly obj?: ProductDiscount
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [ProductDiscount](ctp:api:type:ProductDiscount). Either `id` or `key` is required. If both are set, an [InvalidJsonInput](/../api/errors#invalidjsoninput) error is returned.
 *
 */
export interface ProductDiscountResourceIdentifier {
  readonly typeId: 'product-discount'
  /**
   *	Unique identifier of the referenced [ProductDiscount](ctp:api:type:ProductDiscount). Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [ProductDiscount](ctp:api:type:ProductDiscount). Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
export interface ProductDiscountUpdate {
  /**
   *	Expected version of the ProductDiscount on which the changes should be applied. If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error is returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the ProductDiscount.
   *
   *
   */
  readonly actions: ProductDiscountUpdateAction[]
}
export type ProductDiscountUpdateAction =
  | ProductDiscountChangeIsActiveAction
  | ProductDiscountChangeNameAction
  | ProductDiscountChangePredicateAction
  | ProductDiscountChangeSortOrderAction
  | ProductDiscountChangeValueAction
  | ProductDiscountSetDescriptionAction
  | ProductDiscountSetKeyAction
  | ProductDiscountSetValidFromAction
  | ProductDiscountSetValidFromAndUntilAction
  | ProductDiscountSetValidUntilAction
export type ProductDiscountValue =
  | ProductDiscountValueAbsolute
  | ProductDiscountValueExternal
  | ProductDiscountValueRelative
/**
 *	Discounts the Product's Price by a fixed amount, defined by the `money` field.
 */
export interface ProductDiscountValueAbsolute {
  readonly type: 'absolute'
  /**
   *	Money values in different currencies. An absolute [ProductDiscount](ctp:api:type:ProductDiscount) will only match a price if this array contains a value with the same currency. For example, if it contains 10€ and 15$, the matching € price will be decreased by 10€ and the matching $ price will be decreased by 15\$.
   *
   *
   */
  readonly money: CentPrecisionMoney[]
}
export type ProductDiscountValueDraft =
  | ProductDiscountValueAbsoluteDraft
  | ProductDiscountValueExternalDraft
  | ProductDiscountValueRelativeDraft
/**
 *	Discounts the Product Price by a fixed amount, defined by the `money` field.
 *
 */
export interface ProductDiscountValueAbsoluteDraft {
  readonly type: 'absolute'
  /**
   *	Money values in different currencies.
   *	An absolute Product Discount will match a price only if the array contains a value with the same currency. For example, if it contains 10€ and 15$, the matching € price will be decreased by 10€ and the matching $ price will be decreased by 15$. If the array has multiple values of the same currency, the API returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *
   *	If the array is empty, the discount does not apply.
   *
   *
   */
  readonly money: Money[]
}
/**
 *	Discounts the Product Price by allowing the client to explicitly [set a discounted value](ctp:api:type:ProductSetDiscountedPriceAction).
 *	Used when setting discounts using an external service.
 *
 */
export interface ProductDiscountValueExternal {
  readonly type: 'external'
}
/**
 *	Discounts the Product Price by allowing the client to explicitly [set a discounted value](ctp:api:type:ProductSetDiscountedPriceAction).
 *	Use this when setting discounts using an external service.
 *
 */
export interface ProductDiscountValueExternalDraft {
  readonly type: 'external'
}
/**
 *	Discounts the product price by a percentage, defined by the `permyriad` field.
 */
export interface ProductDiscountValueRelative {
  readonly type: 'relative'
  /**
   *	Fraction (per ten thousand) the price is reduced by. For example, `1000` will result in a 10% price reduction.
   *
   *
   */
  readonly permyriad: number
}
/**
 *	Discounts the Product Price by a percentage, defined by the `permyriad` field.
 *
 */
export interface ProductDiscountValueRelativeDraft {
  readonly type: 'relative'
  /**
   *	Fraction (per ten thousand) the price is reduced by. For example, `1000` will result in a 10% price reduction.
   *
   *
   */
  readonly permyriad: number
}
export interface ProductDiscountChangeIsActiveAction {
  readonly action: 'changeIsActive'
  /**
   *	New value to set.
   *	If set to `true`, the Discount will be applied to Product Prices.
   *
   *
   */
  readonly isActive: boolean
}
export interface ProductDiscountChangeNameAction {
  readonly action: 'changeName'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly name: LocalizedString
}
export interface ProductDiscountChangePredicateAction {
  readonly action: 'changePredicate'
  /**
   *	New value to set. Must be a valid [ProductDiscount predicate](/../api/projects/predicates#productdiscount-predicates).
   *
   *
   */
  readonly predicate: string
}
export interface ProductDiscountChangeSortOrderAction {
  readonly action: 'changeSortOrder'
  /**
   *	New value to set.
   *	Must not be empty.
   *	The string value must be a number between `0` and `1`.
   *	A Discount with a higher sortOrder is prioritized.
   *
   *
   */
  readonly sortOrder: string
}
export interface ProductDiscountChangeValueAction {
  readonly action: 'changeValue'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly value: ProductDiscountValueDraft
}
export interface ProductDiscountSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly description?: LocalizedString
}
export interface ProductDiscountSetKeyAction {
  readonly action: 'setKey'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly key?: string
}
export interface ProductDiscountSetValidFromAction {
  readonly action: 'setValidFrom'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *	Take [Eventual Consistency](/../api/general-concepts#eventual-consistency) into account for calculated discount values.
   *
   *
   */
  readonly validFrom?: string
}
export interface ProductDiscountSetValidFromAndUntilAction {
  readonly action: 'setValidFromAndUntil'
  /**
   *	Value to set.
   *	Take [Eventual Consistency](/../api/general-concepts#eventual-consistency) into account for calculated undiscounted values.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Value to set.
   *	Take [Eventual Consistency](/../api/general-concepts#eventual-consistency) into account for calculated undiscounted values.
   *
   *
   */
  readonly validUntil?: string
}
export interface ProductDiscountSetValidUntilAction {
  readonly action: 'setValidUntil'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *	Take [Eventual Consistency](/../api/general-concepts#eventual-consistency) into account for calculated undiscounted values.
   *
   *
   */
  readonly validUntil?: string
}
