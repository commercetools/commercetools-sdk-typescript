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

import { Change } from './change'
import { Label } from './label'

/**
 *	A Record captures the differences in a resource between one version and the next.
 *	(Recall that the version number is not always incremented by one; see [Optimistic Concurrency Control](/general-concepts#optimistic-concurrency-control).)
 *
 */
export interface Record {
  /**
   *	Version of the resource after the change.
   *
   */
  readonly version: number
  /**
   *	Version of the resource before the change.
   *
   */
  readonly previousVersion: number
  /**
   *	Type of the change (creation, update or deletion).
   *
   */
  readonly type: string
  /**
   *	Information about the user or the API client who performed the change.
   *
   */
  readonly modifiedBy: ModifiedBy
  /**
   *	Date and time when the change was made.
   *
   */
  readonly modifiedAt: string
  /**
   *	Information that describes the resource after the change.
   *
   */
  readonly label: Label
  /**
   *	Information that describes the resource before the change.
   *
   */
  readonly previousLabel: Label
  /**
   *	Shows the differences in the resource between `previousVersion` and `version`.
   *	The value is not identical to the actual array of update actions that was sent to the platform and is not limited to update actions (see, for example, [Optimistic  Concurrency Control](/general-concepts#optimistic-concurrency-control)).
   *
   *
   */
  readonly changes: Change[]
  /**
   *	[Reference](/types#reference) to the changed resource.
   *
   *
   */
  readonly resource: Reference
  /**
   *	`true` if no change was detected.
   *	The version number of the resource can be increased even without any change in the resource.
   *
   *
   */
  readonly withoutChanges: boolean
}
/**
 *	Response to a query request for [Record](#record).
 *
 */
export interface RecordPagedQueryResponse {
  /**
   *	Maximum number of results requested in the query request.
   *
   *
   */
  readonly limit: number
  /**
   *	Actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	Total number of results matching the query.
   *	This number is an estimation and not [strongly consistent](/general-concepts#strong-consistency).
   *
   *
   */
  readonly total: number
  /**
   *	The number of elements skipped, not a page number. Supplied by the client or the server default.
   *
   *
   */
  readonly offset: number
  /**
   *
   */
  readonly results: Record[]
}
/**
 *	This data type represents the supported resource types.
 *	The value must be one of the following:
 *
 */
export type ChangeHistoryResourceType =
  | 'cart-discount'
  | 'category'
  | 'channel'
  | 'customer'
  | 'customer-group'
  | 'discount-code'
  | 'inventory-entry'
  | 'order'
  | 'payment'
  | 'product'
  | 'product-discount'
  | 'product-type'
  | 'review'
  | 'shopping-list'
  | 'state'
  | 'store'
  | 'tax-category'
  | 'type'
  | 'zone'
/**
 *	This type consists of one enum value:
 *
 */
export type DateStringFilter = 'now'
export interface ErrorObject {
  /**
   *
   */
  readonly code: string
  /**
   *
   */
  readonly message: string
}
export interface ErrorResponse {
  /**
   *
   */
  readonly statusCode: number
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly error?: string
  /**
   *
   */
  readonly error_description?: string
  /**
   *
   */
  readonly errors?: ErrorObject[]
}
/**
 *	Information about the user or the API client who performed the change. This is a variant of
 *	[LastModifiedBy](/types#lastmodifiedby).
 *
 */
export interface ModifiedBy {
  /**
   *	[ID](/general-concepts#identifier) of the Merchant Center user who made the change.
   *	Present only if the change was made in the Merchant Center.
   *
   *
   */
  readonly id: string
  /**
   *	Indicates whether the change was made by a user or the API client with or without an
   *	[External user ID](/client-logging#external-user-ids).
   *
   *
   */
  readonly type: string
  /**
   *	[Reference](/types#reference) to the
   *	[Customer](/projects/customers#customer) who made the change. Present only if
   *	the change was made using a token from the [Password
   *	Flow](/authorization#password-flow).
   *
   *
   */
  readonly customer?: Reference
  /**
   *	Present only if the change was made using a token from an [Anonymous
   *	Session](/authorization#tokens-for-anonymous-sessions).
   *
   *
   */
  readonly anonymousId?: string
  /**
   *	[ID](/general-concepts#identifier) of the [API
   *	Client](/projects/api-clients#apiclient) that made the change. Present only if
   *	the change was made using an API Client.
   *
   *
   */
  readonly clientId?: string
  /**
   *	`true` if the change was made via Merchant Center or [ImPex](https://impex.europe-west1.gcp.commercetools.com/).
   *
   *
   */
  readonly isPlatformClient: boolean
}
/**
 *	Values for the Source enumeration.
 */
export type Source = 'ApiClient' | 'ImpEx' | 'MerchantCenter'
export type UpdateType =
  | 'addAddress'
  | 'addAsset'
  | 'addAttributeDefinition'
  | 'addBillingAddressId'
  | 'addDelivery'
  | 'addEnumValue'
  | 'addExternalImage'
  | 'addFieldDefinition'
  | 'addInterfaceInteraction'
  | 'addItemShippingAddress'
  | 'addLineItem'
  | 'addLocalizedEnumValue'
  | 'addLocation'
  | 'addParcelToDelivery'
  | 'addPayment'
  | 'addPlainEnumValue'
  | 'addPrice'
  | 'addReturnInfo'
  | 'addRoles'
  | 'addShippingAddressId'
  | 'addTaxRate'
  | 'addTextLineItem'
  | 'addToCategory'
  | 'addTransaction'
  | 'addVariant'
  | 'changeAddress'
  | 'changeAmountPlanned'
  | 'changeAssetName'
  | 'changeAssetOrder'
  | 'changeAttributeConstraint'
  | 'changeAttributeName'
  | 'changeAttributeOrderByName'
  | 'changeCartDiscounts'
  | 'changeCartPredicate'
  | 'changeDescription'
  | 'changeEmail'
  | 'changeEnumKey'
  | 'changeEnumValueLabel'
  | 'changeEnumValueOrder'
  | 'changeFieldDefinitionOrder'
  | 'changeGroups'
  | 'changeInitial'
  | 'changeInputHint'
  | 'changeIsActive'
  | 'changeIsSearchable'
  | 'changeKey'
  | 'changeLabel'
  | 'changeLineItemQuantity'
  | 'changeLineItemsOrder'
  | 'changeLocalizedEnumValueLabel'
  | 'changeLocalizedEnumValueOrder'
  | 'changeMasterVariant'
  | 'changeName'
  | 'changeOrderHint'
  | 'changeOrderState'
  | 'changeParent'
  | 'changePaymentState'
  | 'changePlainEnumValueLabel'
  | 'changePredicate'
  | 'changePrice'
  | 'changeQuantity'
  | 'changeRequiresDiscountCode'
  | 'changeReviewRatingStatistics'
  | 'changeShipmentState'
  | 'changeSlug'
  | 'changeSortOrder'
  | 'changeStackingMode'
  | 'changeTarget'
  | 'changeTextLineItemName'
  | 'changeTextLineItemQuantity'
  | 'changeTextLineItemsOrder'
  | 'changeTransactionInteractionId'
  | 'changeTransactionState'
  | 'changeTransactionTimestamp'
  | 'changeType'
  | 'changeValue'
  | 'publish'
  | 'removeAddress'
  | 'removeAsset'
  | 'removeAttributeDefinition'
  | 'removeBillingAddressId'
  | 'removeDelivery'
  | 'removeEnumValues'
  | 'removeFieldDefinition'
  | 'removeFromCategory'
  | 'removeImage'
  | 'removeItemShippingAddress'
  | 'removeLineItem'
  | 'removeLocation'
  | 'removeParcelFromDelivery'
  | 'removePayment'
  | 'removePrice'
  | 'removeRoles'
  | 'removeShippingAddressId'
  | 'removeTaxRate'
  | 'removeTextLineItem'
  | 'removeVariant'
  | 'setAddress'
  | 'setAnonymousId'
  | 'setAssetCustomField'
  | 'setAssetCustomType'
  | 'setAssetDescription'
  | 'setAssetSources'
  | 'setAssetTags'
  | 'setAsssetKey'
  | 'setAttribute'
  | 'setAuthorName'
  | 'setBillingAddress'
  | 'setCartPredicate'
  | 'setCategoryOrderHint'
  | 'setCompanyName'
  | 'setCustomField'
  | 'setCustomLineItemCustomField'
  | 'setCustomLineItemCustomType'
  | 'setCustomLineItemShippingDetails'
  | 'setCustomType'
  | 'setCustomer'
  | 'setCustomerEmail'
  | 'setCustomerGroup'
  | 'setCustomerId'
  | 'setCustomerNumber'
  | 'setDateOfBirth'
  | 'setDefaultBillingAddress'
  | 'setDefaultShippingAddress'
  | 'setDeleteDaysAfterLastModification'
  | 'setDeliveryAddress'
  | 'setDeliveryItems'
  | 'setDescription'
  | 'setDiscountedPrice'
  | 'setDistributionChannels'
  | 'setExpectedDelivery'
  | 'setExternalId'
  | 'setFirstName'
  | 'setGeoLocation'
  | 'setImageLabel'
  | 'setInputTip'
  | 'setInterfaceId'
  | 'setKey'
  | 'setLanguages'
  | 'setLastName'
  | 'setLineItemCustomField'
  | 'setLineItemCustomType'
  | 'setLineItemShippingDetails'
  | 'setLocale'
  | 'setMaxApplications'
  | 'setMaxApplicationsPerCustomer'
  | 'setMetaDescription'
  | 'setMetaKeywords'
  | 'setMetaTitle'
  | 'setMethodInfoInterface'
  | 'setMethodInfoMethod'
  | 'setMethodInfoName'
  | 'setMiddleName'
  | 'setName'
  | 'setOrderNumber'
  | 'setParcelItems'
  | 'setParcelMeasurements'
  | 'setParcelTrackingData'
  | 'setPassword'
  | 'setProductPriceCustomField'
  | 'setProductPriceCustomType'
  | 'setProductVariantKey'
  | 'setRating'
  | 'setRestockableInDays'
  | 'setReturnPaymentState'
  | 'setReturnShipmentState'
  | 'setRoles'
  | 'setSalutation'
  | 'setSearchKeywords'
  | 'setShippingAddress'
  | 'setSku'
  | 'setSlug'
  | 'setStatusInterfaceCode'
  | 'setStatusInterfaceText'
  | 'setStore'
  | 'setStores'
  | 'setSupplyChannel'
  | 'setTarget'
  | 'setTaxCategory'
  | 'setText'
  | 'setTextLineItemCustomField'
  | 'setTextLineItemCustomType'
  | 'setTextLineItemDescription'
  | 'setTitle'
  | 'setTransitions'
  | 'setValidFrom'
  | 'setValidFromAndUntil'
  | 'setValidUntil'
  | 'setVariantAvailability'
  | 'setVatId'
  | 'transitionCustomLineItemState'
  | 'transitionLineItemState'
  | 'transitionState'
  | 'unpublish'
  | 'updateItemShippingAddress'
  | 'updateSyncInfo'
  | 'verifyEmail'
export interface LocalizedString {
  [key: string]: string
}
export interface Address {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly title: string
  /**
   *
   */
  readonly salutation: string
  /**
   *
   */
  readonly firstName: string
  /**
   *
   */
  readonly lastName: string
  /**
   *
   */
  readonly streetName: string
  /**
   *
   */
  readonly streetNumber: string
  /**
   *
   */
  readonly additionalStreetInfo: string
  /**
   *
   */
  readonly postalCode: string
  /**
   *
   */
  readonly city: string
  /**
   *
   */
  readonly region: string
  /**
   *
   */
  readonly state: string
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   */
  readonly country: string
  /**
   *
   */
  readonly company: string
  /**
   *
   */
  readonly department: string
  /**
   *
   */
  readonly building: string
  /**
   *
   */
  readonly apartment: string
  /**
   *
   */
  readonly pOBox: string
  /**
   *
   */
  readonly phone: string
  /**
   *
   */
  readonly mobile: string
  /**
   *
   */
  readonly email: string
  /**
   *
   */
  readonly fax: string
  /**
   *
   */
  readonly additionalAddressInfo: string
  /**
   *
   */
  readonly externalId: string
}
export interface Asset {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *
   */
  readonly description: LocalizedString
  /**
   *
   */
  readonly custom: CustomFields
  /**
   *
   */
  readonly key: string
}
export interface AssetDimensions {
  /**
   *
   */
  readonly w: number
  /**
   *
   */
  readonly h: number
}
export interface AssetSource {
  /**
   *
   */
  readonly uri: string
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly dimensions: AssetDimensions
  /**
   *
   */
  readonly contentType: string
}
export type AttributeConstraintEnum =
  | 'CombinationUnique'
  | 'None'
  | 'SameForAll'
  | 'Unique'
export interface AttributeDefinition {
  /**
   *
   */
  readonly type: any
  /**
   *	The unique name of the attribute used in the API. The name must be between two and 256 characters long and can contain the ASCII letters A to Z in lowercase or uppercase, digits, underscores (`_`) and the hyphen-minus (`-`). When using the same `name` for an attribute in two or more product types all fields of the AttributeDefinition of this attribute need to be the same across the product types, otherwise an AttributeDefinitionAlreadyExists error code will be returned. An exception to this are the values of an `enum` or `lenum` type and sets thereof.
   *
   */
  readonly name: string
  /**
   *
   */
  readonly label: LocalizedString
  /**
   *	Whether the attribute is required to have a value.
   *
   */
  readonly isRequired: boolean
  /**
   *
   */
  readonly attributeConstraint: AttributeConstraintEnum
  /**
   *
   */
  readonly inputTip: LocalizedString
  /**
   *
   */
  readonly inputHint: TextInputHint
  /**
   *	Whether the attribute's values should generally be enabled in product search. This determines whether the value is stored in products for matching terms in the context of full-text search queries  and can be used in facets & filters as part of product search queries. The exact features that are enabled/disabled with this flag depend on the concrete attribute type and are described there. The max size of a searchable field is **restricted to 10922 characters**. This constraint is enforced at both product creation and product update. If the length of the input exceeds the maximum size an InvalidField error is returned.
   *
   */
  readonly isSearchable: boolean
}
export interface CategoryOrderHints {
  [key: string]: string
}
export type ChannelRole =
  | 'InventorySupply'
  | 'OrderExport'
  | 'OrderImport'
  | 'Primary'
  | 'ProductDistribution'
export interface CustomFields {
  /**
   *
   */
  readonly type: Reference
  /**
   *	A valid JSON object, based on FieldDefinition.
   *
   */
  readonly fields: any
}
export interface CustomLineItem {
  /**
   *	The unique ID of this CustomLineItem.
   *
   */
  readonly id: string
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *
   */
  readonly money: Money
  /**
   *
   */
  readonly taxedPrice: TaxedItemPrice
  /**
   *
   */
  readonly totalPrice: Money
  /**
   *	A unique String in the cart to identify this CustomLineItem.
   *
   */
  readonly slug: string
  /**
   *	The amount of a CustomLineItem in the cart. Must be a positive integer.
   *
   */
  readonly quantity: number
}
export interface Delivery {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly createdAt: string
  /**
   *
   */
  readonly items: DeliveryItem[]
  /**
   *
   */
  readonly parcels: Parcel[]
  /**
   *
   */
  readonly address: Address
}
export interface DeliveryItem {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly quantity: number
}
export interface DiscountedLineItemPortion {
  /**
   *
   */
  readonly discount: Reference
  /**
   *
   */
  readonly discountedAmount: Money
}
export interface DiscountedLineItemPrice {
  /**
   *
   */
  readonly value: Money
  /**
   *
   */
  readonly includedDiscounts: DiscountedLineItemPortion[]
}
export interface DiscountedLineItemPriceForQuantity {
  /**
   *
   */
  readonly quantity: number
  /**
   *
   */
  readonly discountedPrice: DiscountedLineItemPrice
}
export interface FieldDefinition {
  /**
   *	Describes the type of the field.
   *
   */
  readonly type: any
  /**
   *	The name of the field. The name must be between two and 36 characters long and can contain the ASCII letters A to Z in lowercase or uppercase, digits, underscores (`_`) and the hyphen-minus (`-`). The name must be unique for a given resource type ID. In case there is a field with the same name in another type it has to have the same FieldType also.
   *
   */
  readonly name: string
  /**
   *
   */
  readonly label: LocalizedString
  /**
   *
   */
  readonly inputHint: TextInputHint
}
export interface GeoLocation {
  /**
   *
   */
  readonly type: string
  /**
   *
   */
  readonly coordinates: number[]
}
export interface Image {
  /**
   *
   */
  readonly url: string
  /**
   *
   */
  readonly dimensions: ImageDimensions
  /**
   *
   */
  readonly label: string
}
export interface ImageDimensions {
  /**
   *
   */
  readonly w: number
  /**
   *
   */
  readonly h: number
}
export interface ItemShippingDetails {
  /**
   *
   */
  readonly targets: ItemShippingTarget[]
  /**
   *	true if the quantity of the (custom) line item is equal to the sum of the sub-quantities in `targets`, `false` otherwise. A cart cannot be ordered when the value is `false`. The error InvalidItemShippingDetails will be triggered.
   *
   */
  readonly valid: boolean
}
export interface ItemShippingTarget {
  /**
   *	The key of the address in the cart's `itemShippingAddresses`
   *
   */
  readonly addressKey: string
  /**
   *	The quantity of items that should go to the address with the specified `addressKey`. Only positive values are allowed. Using `0` as quantity is also possible in a draft object, but the element will not be present in the resulting ItemShippingDetails.
   *
   */
  readonly quantity: number
}
export interface ItemState {
  /**
   *
   */
  readonly quantity: number
  /**
   *
   */
  readonly state: Reference
}
export interface LineItem {
  /**
   *
   */
  readonly addedAt: string
  /**
   *
   */
  readonly custom: CustomFields
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *
   */
  readonly productId: string
  /**
   *
   */
  readonly productSlug: LocalizedString
  /**
   *
   */
  readonly productType: Reference
  /**
   *
   */
  readonly quantity: number
  /**
   *
   */
  readonly variant: Variant
  /**
   *
   */
  readonly variantId: number
}
/**
 *	Shape of the value for `addLocation` and `removeLocation` actions
 */
export interface Location {
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   */
  readonly country: string
  /**
   *
   */
  readonly state: string
}
export interface Money {
  /**
   *	The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   *
   *
   */
  readonly currencyCode: string
  /**
   *
   */
  readonly centAmount: number
  /**
   *
   */
  readonly fractionDigits: number
  /**
   *
   */
  readonly type: MoneyType
}
export type MoneyType = 'centPrecision' | 'highPrecision'
export type OrderState = 'Cancelled' | 'Complete' | 'Confirmed' | 'Open'
export interface Parcel {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly createdAt: string
  /**
   *
   */
  readonly measurements: ParcelMeasurements
  /**
   *
   */
  readonly trackingData: TrackingData
  /**
   *
   */
  readonly items: DeliveryItem[]
}
export interface ParcelMeasurements {
  /**
   *
   */
  readonly heightInMillimeter: number
  /**
   *
   */
  readonly lengthInMillimeter: number
  /**
   *
   */
  readonly widthInMillimeter: number
  /**
   *
   */
  readonly weightInGram: number
}
export interface PaymentInfo {
  /**
   *
   */
  readonly payments: Reference[]
}
export type PaymentState =
  | 'BalanceDue'
  | 'CreditOwed'
  | 'Failed'
  | 'Paid'
  | 'Pending'
export interface Price {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly value: Money
}
export interface ProductVariantAvailability {
  /**
   *
   */
  readonly isOnStock: boolean
  /**
   *
   */
  readonly restockableInDays: number
  /**
   *
   */
  readonly availableQuantity: number
  /**
   *
   */
  readonly channels: ProductVariantChannelAvailabilityMap
}
export interface ProductVariantChannelAvailability {
  /**
   *
   */
  readonly isOnStock: boolean
  /**
   *
   */
  readonly restockableInDays: number
  /**
   *
   */
  readonly availableQuantity: number
}
export interface ProductVariantChannelAvailabilityMap {
  [key: string]: ProductVariantChannelAvailability
}
export interface Reference {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly typeId: ReferenceTypeId
}
export type ReferenceTypeId =
  | 'cart'
  | 'cart-discount'
  | 'category'
  | 'channel'
  | 'customer'
  | 'customer-email-token'
  | 'customer-group'
  | 'customer-password-token'
  | 'discount-code'
  | 'extension'
  | 'inventory-entry'
  | 'key-value-document'
  | 'order'
  | 'order-edit'
  | 'payment'
  | 'product'
  | 'product-discount'
  | 'product-type'
  | 'review'
  | 'shipping-method'
  | 'shopping-list'
  | 'state'
  | 'store'
  | 'subscription'
  | 'tax-category'
  | 'type'
  | 'zone'
export interface Reservation {
  /**
   *
   */
  readonly quantity: number
  /**
   *
   */
  readonly owner: Reference
  /**
   *
   */
  readonly createdAt: string
  /**
   *
   */
  readonly checkoutStartedAt: string
}
export interface ReturnInfo {
  /**
   *
   */
  readonly items: ReturnItem[]
  /**
   *	Identifies, which return tracking ID is connected to this particular return.
   *
   */
  readonly returnTrackingId: string
  /**
   *
   */
  readonly returnDate: string
}
export interface ReturnItem {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly quantity: number
  /**
   *
   */
  readonly type: string
  /**
   *
   */
  readonly comment: string
  /**
   *
   */
  readonly shipmentState: ReturnShipmentState
  /**
   *
   */
  readonly paymentState: ReturnPaymentState
  /**
   *
   */
  readonly lastModifiedAt: string
  /**
   *
   */
  readonly createdAt: string
}
export type ReturnPaymentState =
  | 'Initial'
  | 'NonRefundable'
  | 'NotRefunded'
  | 'Refunded'
export type ReturnShipmentState =
  | 'Advised'
  | 'BackInStock'
  | 'Returned'
  | 'Unusable'
export interface ReviewRatingStatistics {
  /**
   *	Average rating of one target This number is rounded with 5 decimals.
   *
   */
  readonly averageRating: number
  /**
   *	Highest rating of one target
   *
   */
  readonly highestRating: number
  /**
   *	Lowest rating of one target
   *
   */
  readonly lowestRating: number
  /**
   *	Number of ratings taken into account
   *
   */
  readonly count: number
  /**
   *	The full distribution of the ratings. The keys are the different ratings and the values are the count of reviews having this rating. Only the used ratings appear in this object.
   *
   */
  readonly ratingsDistribution: any
}
export interface SearchKeyword {
  /**
   *
   */
  readonly text: string
  /**
   *
   */
  readonly suggestTokenizer: SuggestTokenizer
}
export interface SearchKeywords {
  [key: string]: SearchKeyword[]
}
export type SelectionMode = 'Cheapest' | 'MostExpensive'
export type ShipmentState =
  | 'Backorder'
  | 'Delayed'
  | 'Partial'
  | 'Pending'
  | 'Ready'
  | 'Shipped'
export type StackingMode = 'Stacking' | 'StopAfterThisDiscount'
export type StateRole = 'Return' | 'ReviewIncludedInStatistics'
export type StateType =
  | 'LineItemState'
  | 'OrderState'
  | 'PaymentState'
  | 'ProductState'
  | 'ReviewState'
export interface SubRate {
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly amount: number
}
export interface SuggestTokenizer {
  /**
   *
   */
  readonly type: string
}
export interface SyncInfo {
  /**
   *
   */
  readonly channel: Reference
  /**
   *	Can be used to reference an external order instance, file etc.
   *
   */
  readonly externalId: string
  /**
   *
   */
  readonly syncedAt: string
}
/**
 *	Shape of the value for `addTaxRate` and `removeTaxRate` actions
 */
export interface TaxRate {
  /**
   *	The ID is always set if the tax rate is part of a TaxCategory. The external tax rates in a Cart do not contain an `id`.
   *
   */
  readonly id: string
  /**
   *
   */
  readonly name: string
  /**
   *	Percentage in the range of [0..1]. The sum of the amounts of all `subRates`, if there are any.
   *
   */
  readonly amount: number
  /**
   *
   */
  readonly includedInPrice: boolean
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   */
  readonly country: string
  /**
   *	The state in the country
   *
   */
  readonly state: string
  /**
   *
   */
  readonly subRates: SubRate
}
export interface TaxedItemPrice {
  /**
   *
   */
  readonly totalNet: Money
  /**
   *
   */
  readonly totalGross: Money
}
export type TextInputHint = 'MultiLine' | 'SingleLine'
export interface TextLineItem {
  /**
   *
   */
  readonly addedAt: string
  /**
   *
   */
  readonly custom: CustomFields
  /**
   *
   */
  readonly description: LocalizedString
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *
   */
  readonly quantity: number
}
export interface TrackingData {
  /**
   *	The ID to track one parcel.
   *
   */
  readonly trackingId: string
  /**
   *	The carrier that delivers the parcel.
   *
   */
  readonly carrier: string
  /**
   *
   */
  readonly provider: string
  /**
   *
   */
  readonly providerTransaction: string
  /**
   *	Flag to distinguish if the parcel is on the way to the customer (false) or on the way back (true).
   *
   */
  readonly isReturn: boolean
}
export interface Transaction {
  /**
   *	The unique ID of this object.
   *
   */
  readonly id: string
  /**
   *	The time at which the transaction took place.
   *
   */
  readonly timestamp: string
  /**
   *
   */
  readonly type: TransactionType
  /**
   *
   */
  readonly amount: Money
  /**
   *	The identifier that is used by the interface that managed the transaction (usually the PSP). If a matching interaction was logged in the `interfaceInteractions` array, the corresponding interaction should be findable with this ID.
   *
   */
  readonly interactionId: string
  /**
   *
   */
  readonly state: TransactionState
}
export type TransactionState = 'Failure' | 'Initial' | 'Pending' | 'Success'
export type TransactionType =
  | 'Authorization'
  | 'CancelAuthorization'
  | 'Charge'
  | 'Chargeback'
  | 'Refund'
export interface Variant {
  /**
   *
   */
  readonly id: number
  /**
   *
   */
  readonly sku: string
  /**
   *
   */
  readonly key: string
}
