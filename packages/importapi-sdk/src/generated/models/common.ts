/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { CategoryImport } from './categories'
import { CustomerImport } from './customers'
import { Custom } from './customfields'
import { DiscountCodeImport } from './discount-codes'
import { InventoryImport } from './inventories'
import { PriceImport } from './prices'
import { ProductDraftImport } from './productdrafts'
import { ProductImport } from './products'
import { ProductTypeImport } from './producttypes'
import { ProductVariantImport } from './productvariants'
import { StandalonePriceImport } from './standalone-prices'
import { TypeImport } from './types'

export interface Asset {
  /**
   *	User-defined identifier for the asset.
   *	Asset keys are unique inside their container (a product variant or a category).
   *
   *
   */
  readonly key: string
  /**
   *
   */
  readonly sources: AssetSource[]
  /**
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *
   */
  readonly tags?: string[]
  /**
   *	The representation to be sent to the server when creating a resource with custom fields.
   *
   */
  readonly custom?: Custom
}
/**
 *	The width and height of the Asset Source.
 */
export interface AssetDimensions {
  /**
   *	The width of the asset source.
   *
   */
  readonly w: number
  /**
   *	The height of the asset source.
   *
   */
  readonly h: number
}
/**
 *	An AssetSource is a representation of an Asset in a specific format, for example, a video in a certain encoding or an image in a certain resolution.
 */
export interface AssetSource {
  /**
   *
   */
  readonly uri: string
  /**
   *
   */
  readonly key?: string
  /**
   *	The width and height of the Asset Source.
   *
   */
  readonly dimensions?: AssetDimensions
  /**
   *
   */
  readonly contentType?: string
}
/**
 *	An Image uploaded to commercetools Composable Commerce is stored in a Content Delivery Network and it's available in several pre-defined sizes. If you already have an image stored on an external service, you can save the URL when creating a new product or adding a variant, or you can add it later.
 */
export interface Image {
  /**
   *	URL of the image in its original size. The URL must be unique within a single variant. It can be used to obtain the image in different sizes.
   *
   */
  readonly url: string
  /**
   *	Dimensions of the original image. This can be used by your application, for example, to determine whether the image is large enough to display a zoom view.
   *
   */
  readonly dimensions: AssetDimensions
  /**
   *	Custom label that can be used, for example, as an image description.
   *
   */
  readonly label?: string
}
export interface EnumValue {
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly label: string
}
export interface LocalizedEnumValue {
  /**
   *
   */
  readonly key: string
  /**
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly label: LocalizedString
}
/**
 *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
 *	```json
 *	{
 *	  "de": "Hundefutter",
 *	  "en": "dog food"
 *	}
 *	```
 *
 */
export interface LocalizedString {
  [key: string]: string
}
/**
 *	A representation of the resource to import.
 *	Import resources are similar to draft types, but they only support key references.
 *	In general, import resources are more granular then regular resources.
 *	They are optimized for incremental updates and therefore have a slightly different structure.
 *
 */
export interface ImportResource {
  /**
   *	User-defined unique identifier.
   *
   *
   */
  readonly key: string
}
export type _ImportResource =
  | ImportResource
  | CategoryImport
  | CustomerImport
  | DiscountCodeImport
  | InventoryImport
  | PriceImport
  | ProductDraftImport
  | ProductImport
  | ProductTypeImport
  | ProductVariantImport
  | StandalonePriceImport
  | TypeImport
/**
 *	References a resource by key.
 */
export type KeyReference =
  | CartDiscountKeyReference
  | CartKeyReference
  | CategoryKeyReference
  | ChannelKeyReference
  | CustomObjectKeyReference
  | CustomerGroupKeyReference
  | CustomerKeyReference
  | DiscountCodeKeyReference
  | OrderKeyReference
  | PaymentKeyReference
  | PriceKeyReference
  | ProductDiscountKeyReference
  | ProductKeyReference
  | ProductTypeKeyReference
  | ProductVariantKeyReference
  | ShippingMethodKeyReference
  | StateKeyReference
  | StoreKeyReference
  | TaxCategoryKeyReference
  | TypeKeyReference
export interface IKeyReference {
  /**
   *
   */
  readonly key: string
  /**
   *	The type of the referenced resource.
   *
   *
   */
  readonly typeId: ReferenceType
}
/**
 *	References a cart by key.
 */
export interface CartKeyReference extends IKeyReference {
  readonly typeId: 'cart'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a cart discount by key.
 */
export interface CartDiscountKeyReference extends IKeyReference {
  readonly typeId: 'cart-discount'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a category by key.
 */
export interface CategoryKeyReference extends IKeyReference {
  readonly typeId: 'category'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a channel by key.
 */
export interface ChannelKeyReference extends IKeyReference {
  readonly typeId: 'channel'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a customer by key.
 */
export interface CustomerKeyReference extends IKeyReference {
  readonly typeId: 'customer'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a customer group by key.
 */
export interface CustomerGroupKeyReference extends IKeyReference {
  readonly typeId: 'customer-group'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a discount code by key.
 */
export interface DiscountCodeKeyReference extends IKeyReference {
  readonly typeId: 'discount-code'
  /**
   *
   */
  readonly key: string
}
/**
 *	References an order by key.
 */
export interface OrderKeyReference extends IKeyReference {
  readonly typeId: 'order'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a payment by key.
 */
export interface PaymentKeyReference extends IKeyReference {
  readonly typeId: 'payment'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a price by key.
 */
export interface PriceKeyReference extends IKeyReference {
  readonly typeId: 'price'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a product by key.
 */
export interface ProductKeyReference extends IKeyReference {
  readonly typeId: 'product'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a product discount by key.
 */
export interface ProductDiscountKeyReference extends IKeyReference {
  readonly typeId: 'product-discount'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a product type by key.
 */
export interface ProductTypeKeyReference extends IKeyReference {
  readonly typeId: 'product-type'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a product variant by key.
 */
export interface ProductVariantKeyReference extends IKeyReference {
  readonly typeId: 'product-variant'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a shipping method by key.
 */
export interface ShippingMethodKeyReference extends IKeyReference {
  readonly typeId: 'shipping-method'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a state by key.
 */
export interface StateKeyReference extends IKeyReference {
  readonly typeId: 'state'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a store by key.
 */
export interface StoreKeyReference extends IKeyReference {
  readonly typeId: 'store'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a tax category by key.
 */
export interface TaxCategoryKeyReference extends IKeyReference {
  readonly typeId: 'tax-category'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a type by key.
 */
export interface TypeKeyReference extends IKeyReference {
  readonly typeId: 'type'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a key value document by key.
 */
export interface CustomObjectKeyReference extends IKeyReference {
  readonly typeId: 'key-value-document'
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly container: string
}
/**
 *	References a resource which could not be resolved.
 */
export interface UnresolvedReferences {
  /**
   *	The `key` of the resource.
   *
   */
  readonly key: string
  /**
   *	The type of resource.
   *
   */
  readonly typeId: ReferenceType
}
export enum MoneyTypeValues {
  CentPrecision = 'centPrecision',
  HighPrecision = 'highPrecision',
}

export type MoneyType = 'centPrecision' | 'highPrecision' | (string & {})
export type TypedMoney = HighPrecisionMoney | Money
export interface ITypedMoney {
  /**
   *
   */
  readonly type: MoneyType
  /**
   *
   */
  readonly fractionDigits?: number
  /**
   *
   */
  readonly centAmount: number
  /**
   *	The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   *
   *
   */
  readonly currencyCode: string
}
export interface HighPrecisionMoney extends ITypedMoney {
  readonly type: 'highPrecision'
  /**
   *
   */
  readonly fractionDigits?: number
  /**
   *
   */
  readonly centAmount: number
  /**
   *	The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   *
   *
   */
  readonly currencyCode: string
  /**
   *
   */
  readonly preciseAmount: number
}
export interface Money extends ITypedMoney {
  readonly type: 'centPrecision'
  /**
   *
   */
  readonly fractionDigits?: number
  /**
   *
   */
  readonly centAmount: number
  /**
   *	The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   *
   *
   */
  readonly currencyCode: string
}
export interface DiscountedPrice {
  /**
   *	Money value of the discounted price.
   *
   */
  readonly value: TypedMoney
  /**
   *	Reference to a ProductDiscount.
   *
   */
  readonly discount: ProductDiscountKeyReference
}
/**
 *	A price tier is selected instead of the default price when a certain quantity of the ProductVariant is added to a cart and ordered.
 *
 */
export interface PriceTier {
  /**
   *	The minimum quantity this price tier is valid for.
   *
   *
   */
  readonly minimumQuantity: number
  /**
   *	The currency of a price tier is always the same as the currency of the base Price.
   *
   */
  readonly value: TypedMoney
}
/**
 *	The resource types that can be imported.
 *
 */
export enum ImportResourceTypeValues {
  Category = 'category',
  Customer = 'customer',
  DiscountCode = 'discount-code',
  Inventory = 'inventory',
  Order = 'order',
  OrderPatch = 'order-patch',
  Price = 'price',
  Product = 'product',
  ProductDraft = 'product-draft',
  ProductType = 'product-type',
  ProductVariant = 'product-variant',
  ProductVariantPatch = 'product-variant-patch',
  StandalonePrice = 'standalone-price',
  Type = 'type',
}

export type ImportResourceType =
  | 'category'
  | 'customer'
  | 'discount-code'
  | 'inventory'
  | 'order'
  | 'order-patch'
  | 'price'
  | 'product'
  | 'product-draft'
  | 'product-type'
  | 'product-variant'
  | 'product-variant-patch'
  | 'standalone-price'
  | 'type'
  | (string & {})
/**
 *	The type of the referenced resource.
 *
 */
export enum ReferenceTypeValues {
  Cart = 'cart',
  CartDiscount = 'cart-discount',
  Category = 'category',
  Channel = 'channel',
  Customer = 'customer',
  CustomerGroup = 'customer-group',
  DiscountCode = 'discount-code',
  KeyValueDocument = 'key-value-document',
  Order = 'order',
  Payment = 'payment',
  Price = 'price',
  Product = 'product',
  ProductDiscount = 'product-discount',
  ProductType = 'product-type',
  ProductVariant = 'product-variant',
  ShippingMethod = 'shipping-method',
  State = 'state',
  Store = 'store',
  TaxCategory = 'tax-category',
  Type = 'type',
}

export type ReferenceType =
  | 'cart'
  | 'cart-discount'
  | 'category'
  | 'channel'
  | 'customer'
  | 'customer-group'
  | 'discount-code'
  | 'key-value-document'
  | 'order'
  | 'payment'
  | 'price'
  | 'product'
  | 'product-discount'
  | 'product-type'
  | 'product-variant'
  | 'shipping-method'
  | 'state'
  | 'store'
  | 'tax-category'
  | 'type'
  | (string & {})
/**
 *	Every [Import Operation](ctp:import:type:ImportOperation) is assigned one of the following states.
 *
 */
export enum ProcessingStateValues {
  Canceled = 'canceled',
  Imported = 'imported',
  Processing = 'processing',
  Rejected = 'rejected',
  Unresolved = 'unresolved',
  ValidationFailed = 'validationFailed',
  WaitForMasterVariant = 'waitForMasterVariant',
}

export type ProcessingState =
  | 'canceled'
  | 'imported'
  | 'processing'
  | 'rejected'
  | 'unresolved'
  | 'validationFailed'
  | 'waitForMasterVariant'
  | (string & {})
export interface Address {
  /**
   *
   */
  readonly id?: string
  /**
   *
   */
  readonly key?: string
  /**
   *
   */
  readonly title?: string
  /**
   *
   */
  readonly salutation?: string
  /**
   *
   */
  readonly firstName?: string
  /**
   *
   */
  readonly lastName?: string
  /**
   *
   */
  readonly streetName?: string
  /**
   *
   */
  readonly streetNumber?: string
  /**
   *
   */
  readonly additionalStreetInfo?: string
  /**
   *
   */
  readonly postalCode?: string
  /**
   *
   */
  readonly city?: string
  /**
   *
   */
  readonly region?: string
  /**
   *
   */
  readonly state?: string
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   *
   */
  readonly country: string
  /**
   *
   */
  readonly company?: string
  /**
   *
   */
  readonly department?: string
  /**
   *
   */
  readonly building?: string
  /**
   *
   */
  readonly apartment?: string
  /**
   *
   */
  readonly pOBox?: string
  /**
   *
   */
  readonly phone?: string
  /**
   *
   */
  readonly mobile?: string
  /**
   *
   */
  readonly email?: string
  /**
   *
   */
  readonly fax?: string
  /**
   *
   */
  readonly additionalAddressInfo?: string
  /**
   *
   */
  readonly externalId?: string
  /**
   *	Custom Fields defined for the Address. Custom Fields can only be applied to `shippingAddress`.
   *
   */
  readonly custom?: Custom
}
export enum ProductPriceModeEnumValues {
  Embedded = 'Embedded',
  Standalone = 'Standalone',
}

export type ProductPriceModeEnum = 'Embedded' | 'Standalone' | (string & {})
