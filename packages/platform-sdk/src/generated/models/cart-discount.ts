/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ChannelReference, ChannelResourceIdentifier } from './channel'
import {
  BaseResource,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
  Money,
  Reference,
  TypedMoney,
} from './common'
import { ProductReference, ProductResourceIdentifier } from './product'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface CartDiscount extends BaseResource {
  /**
   *	Platform-generated unique identifier of the CartDiscount.
   *
   */
  readonly id: string
  /**
   *	The current version of the cart discount.
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
   *	Present on resources updated after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
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
   *	User-defined unique identifier of the CartDiscount.
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
  readonly value: CartDiscountValue
  /**
   *	A valid Cart predicate.
   *
   */
  readonly cartPredicate: string
  /**
   *	Empty when the `value` has type `giftLineItem`, otherwise a CartDiscountTarget is set.
   *
   */
  readonly target?: CartDiscountTarget
  /**
   *	The string must contain a number between 0 and 1.
   *	All matching cart discounts are applied to a cart in the order defined by this field.
   *	A discount with greater sort order is prioritized higher than a discount with lower sort order.
   *	The sort order is unambiguous among all cart discounts.
   *
   */
  readonly sortOrder: string
  /**
   *	Only active discount can be applied to the cart.
   *
   */
  readonly isActive: boolean
  /**
   *
   */
  readonly validFrom?: string
  /**
   *
   */
  readonly validUntil?: string
  /**
   *	States whether the discount can only be used in a connection with a DiscountCode.
   *
   */
  readonly requiresDiscountCode: boolean
  /**
   *	The platform will generate this array from the predicate.
   *	It contains the references of all the resources that are addressed in the predicate.
   *
   */
  readonly references: Reference[]
  /**
   *	Specifies whether the application of this discount causes the following discounts to be ignored.
   *	Defaults to Stacking.
   *
   */
  readonly stackingMode: StackingMode
  /**
   *
   */
  readonly custom?: CustomFields
}
export interface CartDiscountDraft {
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *	User-defined unique identifier for the CartDiscount.
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
  readonly value: CartDiscountValueDraft
  /**
   *	A valid Cart predicate.
   *
   */
  readonly cartPredicate: string
  /**
   *	Must not be set when the `value` has type `giftLineItem`, otherwise a CartDiscountTarget must be set.
   *
   */
  readonly target?: CartDiscountTarget
  /**
   *	The string must contain a number between 0 and 1.
   *	A discount with greater sort order is prioritized higher than a discount with lower sort order.
   *	The sort order must be unambiguous among all cart discounts.
   *
   */
  readonly sortOrder: string
  /**
   *	Only active discount can be applied to the cart.
   *	Defaults to `true`.
   *
   */
  readonly isActive?: boolean
  /**
   *
   */
  readonly validFrom?: string
  /**
   *
   */
  readonly validUntil?: string
  /**
   *	States whether the discount can only be used in a connection with a DiscountCode.
   *	Defaults to `false`.
   *
   */
  readonly requiresDiscountCode?: boolean
  /**
   *	Specifies whether the application of this discount causes the following discounts to be ignored.
   *	Defaults to Stacking.
   *
   */
  readonly stackingMode?: StackingMode
  /**
   *
   */
  readonly custom?: CustomFieldsDraft
}
export interface CartDiscountPagedQueryResponse {
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
  readonly results: CartDiscount[]
}
/**
 *	[Reference](/../api/types#reference) to a [CartDiscount](ctp:api:type:CartDiscount).
 *
 */
export interface CartDiscountReference {
  readonly typeId: 'cart-discount'
  /**
   *	Platform-generated unique identifier of the referenced [CartDiscount](ctp:api:type:CartDiscount).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded CartDiscount. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for CartDiscounts.
   *
   *
   */
  readonly obj?: CartDiscount
}
/**
 *	[ResourceIdentifier](/../api/types#resourceidentifier) to a [CartDiscount](ctp:api:type:CartDiscount).
 *
 */
export interface CartDiscountResourceIdentifier {
  readonly typeId: 'cart-discount'
  /**
   *	Platform-generated unique identifier of the referenced [CartDiscount](ctp:api:type:CartDiscount). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [CartDiscount](ctp:api:type:CartDiscount). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export type CartDiscountTarget =
  | CartDiscountCustomLineItemsTarget
  | CartDiscountLineItemsTarget
  | CartDiscountShippingCostTarget
  | MultiBuyCustomLineItemsTarget
  | MultiBuyLineItemsTarget
export interface CartDiscountCustomLineItemsTarget {
  readonly type: 'customLineItems'
  /**
   *
   */
  readonly predicate: string
}
export interface CartDiscountLineItemsTarget {
  readonly type: 'lineItems'
  /**
   *
   */
  readonly predicate: string
}
export interface CartDiscountShippingCostTarget {
  readonly type: 'shipping'
}
export interface CartDiscountUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: CartDiscountUpdateAction[]
}
export type CartDiscountUpdateAction =
  | CartDiscountChangeCartPredicateAction
  | CartDiscountChangeIsActiveAction
  | CartDiscountChangeNameAction
  | CartDiscountChangeRequiresDiscountCodeAction
  | CartDiscountChangeSortOrderAction
  | CartDiscountChangeStackingModeAction
  | CartDiscountChangeTargetAction
  | CartDiscountChangeValueAction
  | CartDiscountSetCustomFieldAction
  | CartDiscountSetCustomTypeAction
  | CartDiscountSetDescriptionAction
  | CartDiscountSetKeyAction
  | CartDiscountSetValidFromAction
  | CartDiscountSetValidFromAndUntilAction
  | CartDiscountSetValidUntilAction
export type CartDiscountValue =
  | CartDiscountValueAbsolute
  | CartDiscountValueFixed
  | CartDiscountValueGiftLineItem
  | CartDiscountValueRelative
export interface CartDiscountValueAbsolute {
  readonly type: 'absolute'
  /**
   *
   */
  readonly money: TypedMoney[]
}
export type CartDiscountValueDraft =
  | CartDiscountValueAbsoluteDraft
  | CartDiscountValueFixedDraft
  | CartDiscountValueGiftLineItemDraft
  | CartDiscountValueRelativeDraft
export interface CartDiscountValueAbsoluteDraft {
  readonly type: 'absolute'
  /**
   *
   */
  readonly money: Money[]
}
export interface CartDiscountValueFixed {
  readonly type: 'fixed'
  /**
   *
   */
  readonly money: TypedMoney[]
}
export interface CartDiscountValueFixedDraft {
  readonly type: 'fixed'
  /**
   *
   */
  readonly money: Money[]
}
export interface CartDiscountValueGiftLineItem {
  readonly type: 'giftLineItem'
  /**
   *	[Reference](/../api/types#reference) to a [Product](ctp:api:type:Product).
   *
   *
   */
  readonly product: ProductReference
  /**
   *
   */
  readonly variantId: number
  /**
   *	The channel must have the role `InventorySupply`
   *
   */
  readonly supplyChannel?: ChannelReference
  /**
   *	The channel must have the role `ProductDistribution`
   *
   */
  readonly distributionChannel?: ChannelReference
}
export interface CartDiscountValueGiftLineItemDraft {
  readonly type: 'giftLineItem'
  /**
   *	[ResourceIdentifier](/../api/types#resourceidentifier) to a [Product](ctp:api:type:Product).
   *
   *
   */
  readonly product: ProductResourceIdentifier
  /**
   *
   */
  readonly variantId: number
  /**
   *	The channel must have the role `InventorySupply`
   *
   */
  readonly supplyChannel?: ChannelResourceIdentifier
  /**
   *	The channel must have the role `ProductDistribution`
   *
   */
  readonly distributionChannel?: ChannelResourceIdentifier
}
export interface CartDiscountValueRelative {
  readonly type: 'relative'
  /**
   *
   */
  readonly permyriad: number
}
export interface CartDiscountValueRelativeDraft {
  readonly type: 'relative'
  /**
   *
   */
  readonly permyriad: number
}
export interface MultiBuyCustomLineItemsTarget {
  readonly type: 'multiBuyCustomLineItems'
  /**
   *	A valid custom line item target predicate. The discount will be applied to custom line items that are
   *	matched by the predicate.
   *
   *
   */
  readonly predicate: string
  /**
   *	Quantity of line items that need to be present in order to trigger an application of this discount.
   *
   */
  readonly triggerQuantity: number
  /**
   *	Quantity of line items that are discounted per application of this discount.
   *
   */
  readonly discountedQuantity: number
  /**
   *	Maximum number of applications of this discount.
   *
   */
  readonly maxOccurrence?: number
  /**
   *
   */
  readonly selectionMode: SelectionMode
}
export interface MultiBuyLineItemsTarget {
  readonly type: 'multiBuyLineItems'
  /**
   *	A valid line item target predicate. The discount will be applied to line items that are matched by the predicate.
   *
   *
   */
  readonly predicate: string
  /**
   *	Quantity of line items that need to be present in order to trigger an application of this discount.
   *
   */
  readonly triggerQuantity: number
  /**
   *	Quantity of line items that are discounted per application of this discount.
   *
   */
  readonly discountedQuantity: number
  /**
   *	Maximum number of applications of this discount.
   *
   */
  readonly maxOccurrence?: number
  /**
   *
   */
  readonly selectionMode: SelectionMode
}
export type SelectionMode = 'Cheapest' | 'MostExpensive'
export type StackingMode = 'Stacking' | 'StopAfterThisDiscount'
export interface CartDiscountChangeCartPredicateAction {
  readonly action: 'changeCartPredicate'
  /**
   *	A valid Cart predicate.
   *
   */
  readonly cartPredicate: string
}
export interface CartDiscountChangeIsActiveAction {
  readonly action: 'changeIsActive'
  /**
   *
   */
  readonly isActive: boolean
}
export interface CartDiscountChangeNameAction {
  readonly action: 'changeName'
  /**
   *
   */
  readonly name: LocalizedString
}
export interface CartDiscountChangeRequiresDiscountCodeAction {
  readonly action: 'changeRequiresDiscountCode'
  /**
   *
   */
  readonly requiresDiscountCode: boolean
}
export interface CartDiscountChangeSortOrderAction {
  readonly action: 'changeSortOrder'
  /**
   *	The string must contain a number between 0 and 1.
   *	A discount with greater sortOrder is prioritized higher than a discount with lower sortOrder.
   *
   */
  readonly sortOrder: string
}
export interface CartDiscountChangeStackingModeAction {
  readonly action: 'changeStackingMode'
  /**
   *
   */
  readonly stackingMode: StackingMode
}
export interface CartDiscountChangeTargetAction {
  readonly action: 'changeTarget'
  /**
   *
   */
  readonly target: CartDiscountTarget
}
export interface CartDiscountChangeValueAction {
  readonly action: 'changeValue'
  /**
   *
   */
  readonly value: CartDiscountValueDraft
}
export interface CartDiscountSetCustomFieldAction {
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
export interface CartDiscountSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the CartDiscount with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the CartDiscount.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the CartDiscount.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface CartDiscountSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *	If the `description` parameter is not included, the field will be emptied.
   *
   */
  readonly description?: LocalizedString
}
export interface CartDiscountSetKeyAction {
  readonly action: 'setKey'
  /**
   *	If `key` is absent or `null`, this field will be removed if it exists.
   *
   */
  readonly key?: string
}
export interface CartDiscountSetValidFromAction {
  readonly action: 'setValidFrom'
  /**
   *	If absent, the field with the value is removed in case a value was set before.
   *
   */
  readonly validFrom?: string
}
export interface CartDiscountSetValidFromAndUntilAction {
  readonly action: 'setValidFromAndUntil'
  /**
   *	If absent, the field with the value is removed in case a value was set before.
   *
   */
  readonly validFrom?: string
  /**
   *	If absent, the field with the value is removed in case a value was set before.
   *
   */
  readonly validUntil?: string
}
export interface CartDiscountSetValidUntilAction {
  readonly action: 'setValidUntil'
  /**
   *	If absent, the field with the value is removed in case a value was set before.
   *
   */
  readonly validUntil?: string
}
