/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  BaseResource,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
  Money,
  QueryPrice,
  Reference,
  TypedMoney,
} from './common'

export interface ProductDiscount extends BaseResource {
  /**
   *	Platform-generated unique identifier of the ProductDiscount
   *
   */
  readonly id: string
  /**
   *	The current version of the product discount.
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
   *
   */
  readonly name: LocalizedString
  /**
   *	User-defined unique identifier of the ProductDiscount.
   *
   */
  readonly key?: string
  /**
   *
   */
  readonly description?: LocalizedString
  /**
   *
   */
  readonly value: ProductDiscountValue
  /**
   *	A valid ProductDiscount Predicate.
   *
   */
  readonly predicate: string
  /**
   *	The string contains a number between 0 and 1.
   *	A discount with greater sortOrder is prioritized higher than a discount with lower sortOrder.
   *	A sortOrder must be unambiguous.
   *
   */
  readonly sortOrder: string
  /**
   *	Only active discount will be applied to product prices.
   *
   */
  readonly isActive: boolean
  /**
   *	The platform will generate this array from the predicate.
   *	It contains the references of all the resources that are addressed in the predicate.
   *
   */
  readonly references: Reference[]
  /**
   *	The time from which the discount should be effective.
   *	Please take Eventual Consistency into account for calculated product discount values.
   *
   */
  readonly validFrom?: string
  /**
   *	The time from which the discount should be ineffective.
   *	Please take Eventual Consistency into account for calculated undiscounted values.
   *
   */
  readonly validUntil?: string
}
export interface ProductDiscountDraft {
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *	User-defined unique identifier for the ProductDiscount.
   *
   */
  readonly key?: string
  /**
   *
   */
  readonly description?: LocalizedString
  /**
   *
   */
  readonly value: ProductDiscountValueDraft
  /**
   *	A valid ProductDiscount Predicate.
   *
   */
  readonly predicate: string
  /**
   *	The string must contain a decimal number between 0 and 1.
   *	A discount with greater sortOrder is prioritized higher than a discount with lower sortOrder.
   *
   */
  readonly sortOrder: string
  /**
   *	If set to `true` the discount will be applied to product prices.
   *
   */
  readonly isActive: boolean
  /**
   *	The time from which the discount should be effective.
   *	Please take Eventual Consistency into account for calculated product discount values.
   *
   */
  readonly validFrom?: string
  /**
   *	The time from which the discount should be effective.
   *	Please take Eventual Consistency into account for calculated undiscounted values.
   *
   */
  readonly validUntil?: string
}
export interface ProductDiscountMatchQuery {
  /**
   *
   */
  readonly productId: string
  /**
   *
   */
  readonly variantId: number
  /**
   *
   */
  readonly staged: boolean
  /**
   *
   */
  readonly price: QueryPrice
}
export interface ProductDiscountPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *
   */
  readonly count: number
  /**
   *
   */
  readonly total?: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
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
   *	Platform-generated unique identifier of the referenced [ProductDiscount](ctp:api:type:ProductDiscount).
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
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [ProductDiscount](ctp:api:type:ProductDiscount).
 *
 */
export interface ProductDiscountResourceIdentifier {
  readonly typeId: 'product-discount'
  /**
   *	Platform-generated unique identifier of the referenced [ProductDiscount](ctp:api:type:ProductDiscount). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [ProductDiscount](ctp:api:type:ProductDiscount). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface ProductDiscountUpdate {
  /**
   *
   */
  readonly version: number
  /**
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
export interface ProductDiscountValueAbsolute {
  readonly type: 'absolute'
  /**
   *
   */
  readonly money: TypedMoney[]
}
export type ProductDiscountValueDraft =
  | ProductDiscountValueAbsoluteDraft
  | ProductDiscountValueExternalDraft
  | ProductDiscountValueRelativeDraft
export interface ProductDiscountValueAbsoluteDraft {
  readonly type: 'absolute'
  /**
   *
   */
  readonly money: Money[]
}
export interface ProductDiscountValueExternal {
  readonly type: 'external'
}
export interface ProductDiscountValueExternalDraft {
  readonly type: 'external'
}
export interface ProductDiscountValueRelative {
  readonly type: 'relative'
  /**
   *
   */
  readonly permyriad: number
}
export interface ProductDiscountValueRelativeDraft {
  readonly type: 'relative'
  /**
   *
   */
  readonly permyriad: number
}
export interface ProductDiscountChangeIsActiveAction {
  readonly action: 'changeIsActive'
  /**
   *
   */
  readonly isActive: boolean
}
export interface ProductDiscountChangeNameAction {
  readonly action: 'changeName'
  /**
   *
   */
  readonly name: LocalizedString
}
export interface ProductDiscountChangePredicateAction {
  readonly action: 'changePredicate'
  /**
   *	A valid ProductDiscount Predicate.
   *
   */
  readonly predicate: string
}
export interface ProductDiscountChangeSortOrderAction {
  readonly action: 'changeSortOrder'
  /**
   *	The string must contain a number between 0 and 1.
   *	A discount with greater sortOrder is prioritized higher than a discount with lower sortOrder.
   *
   */
  readonly sortOrder: string
}
export interface ProductDiscountChangeValueAction {
  readonly action: 'changeValue'
  /**
   *
   */
  readonly value: ProductDiscountValueDraft
}
export interface ProductDiscountSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *
   */
  readonly description?: LocalizedString
}
export interface ProductDiscountSetKeyAction {
  readonly action: 'setKey'
  /**
   *	The key to set.
   *	If you provide a `null` value or do not set this field at all, the existing `key` field is removed.
   *
   */
  readonly key?: string
}
export interface ProductDiscountSetValidFromAction {
  readonly action: 'setValidFrom'
  /**
   *	The time from which the discount should be effective.
   *	Please take Eventual Consistency into account for calculated product discount values.
   *
   */
  readonly validFrom?: string
}
export interface ProductDiscountSetValidFromAndUntilAction {
  readonly action: 'setValidFromAndUntil'
  /**
   *
   */
  readonly validFrom?: string
  /**
   *	The timeframe for which the discount should be effective.
   *	Please take Eventual Consistency into account for calculated undiscounted values.
   *
   */
  readonly validUntil?: string
}
export interface ProductDiscountSetValidUntilAction {
  readonly action: 'setValidUntil'
  /**
   *	The time from which the discount should be ineffective.
   *	Please take Eventual Consistency into account for calculated undiscounted values.
   *
   */
  readonly validUntil?: string
}
