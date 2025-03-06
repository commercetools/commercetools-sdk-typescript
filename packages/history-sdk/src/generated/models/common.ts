/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

export interface LocalizedString {
  [key: string]: string
}
export interface Address {
  /**
   *	Unique ID of the Address.
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
   *	Two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
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
export interface Associate {
  /**
   *
   */
  readonly associateRoleAssignments: AssociateRoleAssignment[]
  /**
   *
   */
  readonly customer: Reference
}
export interface AssociateRoleAssignment {
  /**
   *
   */
  readonly associateRole: KeyReference
  /**
   *	Determines whether an [AssociateRoleAssignment](ctp:api:type:AssociateRoleAssignment) can be inherited by child Business Units.
   *
   */
  readonly inheritance: AssociateRoleInheritanceMode
}
/**
 *	Determines whether an [AssociateRoleAssignment](ctp:api:type:AssociateRoleAssignment) can be inherited by child Business Units.
 */
export enum AssociateRoleInheritanceModeValues {
  Disabled = 'Disabled',
  Enabled = 'Enabled',
}

export type AssociateRoleInheritanceMode =
  | 'Disabled'
  | 'Enabled'
  | (string & {})
export enum AttributeConstraintEnumValues {
  CombinationUnique = 'CombinationUnique',
  None = 'None',
  SameForAll = 'SameForAll',
  Unique = 'Unique',
}

export type AttributeConstraintEnum =
  | 'CombinationUnique'
  | 'None'
  | 'SameForAll'
  | 'Unique'
  | (string & {})
export interface AttributeDefinition {
  /**
   *
   */
  readonly type: AttributeType
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
/**
 *	A localized enum value must be unique within the enum, else a [DuplicateEnumValues](ctp:api:type:DuplicateEnumValuesError) error is returned.
 *
 */
export interface AttributeLocalizedEnumValue {
  /**
   *	Key of the value used as a programmatic identifier, for example in facets & filters.
   *
   *
   */
  readonly key: string
  /**
   *	Descriptive, localized label of the value.
   *
   *
   */
  readonly label: LocalizedString
}
/**
 *	A plain enum value must be unique within the enum, else a [DuplicateEnumValues](ctp:api:type:DuplicateEnumValuesError) error is returned.
 *
 */
export interface AttributePlainEnumValue {
  /**
   *	Key of the value used as a programmatic identifier, for example in facets & filters.
   *
   *
   */
  readonly key: string
  /**
   *	Descriptive label of the value.
   *
   *
   */
  readonly label: string
}
export interface AttributeType {
  /**
   *
   */
  readonly name: string
}
export enum AuthenticationModeValues {
  ExternalAuth = 'ExternalAuth',
  Password = 'Password',
}

export type AuthenticationMode = 'ExternalAuth' | 'Password' | (string & {})
/**
 *	Determines whether a Business Unit can inherit Associates from a parent.
 */
export enum BusinessUnitAssociateModeValues {
  Explicit = 'Explicit',
  ExplicitAndFromParent = 'ExplicitAndFromParent',
}

export type BusinessUnitAssociateMode =
  | 'Explicit'
  | 'ExplicitAndFromParent'
  | (string & {})
/**
 *	Indicates whether the Business Unit can be edited and used in [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quote Requests](ctp:api:type:QuoteRequest), or [Quotes](ctp:api:type:Quote).
 */
export enum BusinessUnitStatusValues {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type BusinessUnitStatus = 'Active' | 'Inactive' | (string & {})
/**
 *	Defines whether the Stores of the Business Unit are set directly on the Business Unit or are inherited from its parent unit.
 */
export enum BusinessUnitStoreModeValues {
  Explicit = 'Explicit',
  FromParent = 'FromParent',
}

export type BusinessUnitStoreMode = 'Explicit' | 'FromParent' | (string & {})
export interface CategoryOrderHints {
  [key: string]: string
}
/**
 *	Describes the purpose and type of the Channel. A Channel can have one or more roles.
 *
 */
export enum ChannelRoleEnumValues {
  InventorySupply = 'InventorySupply',
  OrderExport = 'OrderExport',
  OrderImport = 'OrderImport',
  Primary = 'Primary',
  ProductDistribution = 'ProductDistribution',
}

export type ChannelRoleEnum =
  | 'InventorySupply'
  | 'OrderExport'
  | 'OrderImport'
  | 'Primary'
  | 'ProductDistribution'
  | (string & {})
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
  readonly address?: Address
  /**
   *	Custom Fields for the Transaction.
   *
   */
  readonly custom?: CustomFields
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
export interface DiscountCodeInfo {
  /**
   *
   */
  readonly discountCode: Reference
  /**
   *
   */
  readonly state: DiscountCodeState
}
export enum DiscountCodeStateValues {
  ApplicationStoppedByPreviousDiscount = 'ApplicationStoppedByPreviousDiscount',
  DoesNotMatchCart = 'DoesNotMatchCart',
  MatchesCart = 'MatchesCart',
  MaxApplicationReached = 'MaxApplicationReached',
  NotActive = 'NotActive',
  NotValid = 'NotValid',
}

export type DiscountCodeState =
  | 'ApplicationStoppedByPreviousDiscount'
  | 'DoesNotMatchCart'
  | 'MatchesCart'
  | 'MaxApplicationReached'
  | 'NotActive'
  | 'NotValid'
  | (string & {})
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
   *
   */
  readonly type: FieldType
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
export interface FieldType {
  /**
   *
   */
  readonly name: string
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
export interface InheritedAssociate {
  /**
   *
   */
  readonly associateRoleAssignments: InheritedAssociateRoleAssignment[]
  /**
   *
   */
  readonly customer: Reference
}
export interface InheritedAssociateRoleAssignment {
  /**
   *
   */
  readonly associateRole: KeyReference
  /**
   *
   */
  readonly source: KeyReference
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
export interface KeyReference {
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly typeId: ReferenceTypeId
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
   *	Two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
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
   *	Currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
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
export enum MoneyTypeValues {
  CentPrecision = 'centPrecision',
  HighPrecision = 'highPrecision',
}

export type MoneyType = 'centPrecision' | 'highPrecision' | (string & {})
export enum OrderStateValues {
  Cancelled = 'Cancelled',
  Complete = 'Complete',
  Confirmed = 'Confirmed',
  Open = 'Open',
}

export type OrderState =
  | 'Cancelled'
  | 'Complete'
  | 'Confirmed'
  | 'Open'
  | (string & {})
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
export enum PaymentStateValues {
  BalanceDue = 'BalanceDue',
  CreditOwed = 'CreditOwed',
  Failed = 'Failed',
  Paid = 'Paid',
  Pending = 'Pending',
}

export type PaymentState =
  | 'BalanceDue'
  | 'CreditOwed'
  | 'Failed'
  | 'Paid'
  | 'Pending'
  | (string & {})
/**
 *	Permissions grant granular access to [Business Units](ctp:api:type:BusinessUnit), [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quotes](ctp:api:type:Quote), and [Quote Requests](ctp:api:type:QuoteRequest).
 */
export enum PermissionValues {
  AcceptMyQuotes = 'AcceptMyQuotes',
  AcceptOthersQuotes = 'AcceptOthersQuotes',
  AddChildUnits = 'AddChildUnits',
  CreateMyCarts = 'CreateMyCarts',
  CreateMyOrdersFromMyCarts = 'CreateMyOrdersFromMyCarts',
  CreateMyOrdersFromMyQuotes = 'CreateMyOrdersFromMyQuotes',
  CreateMyQuoteRequestsFromMyCarts = 'CreateMyQuoteRequestsFromMyCarts',
  CreateOrdersFromOthersCarts = 'CreateOrdersFromOthersCarts',
  CreateOrdersFromOthersQuotes = 'CreateOrdersFromOthersQuotes',
  CreateOthersCarts = 'CreateOthersCarts',
  CreateQuoteRequestsFromOthersCarts = 'CreateQuoteRequestsFromOthersCarts',
  DeclineMyQuotes = 'DeclineMyQuotes',
  DeclineOthersQuotes = 'DeclineOthersQuotes',
  DeleteMyCarts = 'DeleteMyCarts',
  DeleteOthersCarts = 'DeleteOthersCarts',
  ReassignMyQuotes = 'ReassignMyQuotes',
  ReassignOthersQuotes = 'ReassignOthersQuotes',
  RenegotiateMyQuotes = 'RenegotiateMyQuotes',
  RenegotiateOthersQuotes = 'RenegotiateOthersQuotes',
  UpdateAssociates = 'UpdateAssociates',
  UpdateBusinessUnitDetails = 'UpdateBusinessUnitDetails',
  UpdateMyCarts = 'UpdateMyCarts',
  UpdateMyOrders = 'UpdateMyOrders',
  UpdateMyQuoteRequests = 'UpdateMyQuoteRequests',
  UpdateOthersCarts = 'UpdateOthersCarts',
  UpdateOthersOrders = 'UpdateOthersOrders',
  UpdateOthersQuoteRequests = 'UpdateOthersQuoteRequests',
  UpdateParentUnit = 'UpdateParentUnit',
  ViewMyCarts = 'ViewMyCarts',
  ViewMyOrders = 'ViewMyOrders',
  ViewMyQuoteRequests = 'ViewMyQuoteRequests',
  ViewMyQuotes = 'ViewMyQuotes',
  ViewOthersCarts = 'ViewOthersCarts',
  ViewOthersOrders = 'ViewOthersOrders',
  ViewOthersQuoteRequests = 'ViewOthersQuoteRequests',
  ViewOthersQuotes = 'ViewOthersQuotes',
}

export type Permission =
  | 'AcceptMyQuotes'
  | 'AcceptOthersQuotes'
  | 'AddChildUnits'
  | 'CreateMyCarts'
  | 'CreateMyOrdersFromMyCarts'
  | 'CreateMyOrdersFromMyQuotes'
  | 'CreateMyQuoteRequestsFromMyCarts'
  | 'CreateOrdersFromOthersCarts'
  | 'CreateOrdersFromOthersQuotes'
  | 'CreateOthersCarts'
  | 'CreateQuoteRequestsFromOthersCarts'
  | 'DeclineMyQuotes'
  | 'DeclineOthersQuotes'
  | 'DeleteMyCarts'
  | 'DeleteOthersCarts'
  | 'ReassignMyQuotes'
  | 'ReassignOthersQuotes'
  | 'RenegotiateMyQuotes'
  | 'RenegotiateOthersQuotes'
  | 'UpdateAssociates'
  | 'UpdateBusinessUnitDetails'
  | 'UpdateMyCarts'
  | 'UpdateMyOrders'
  | 'UpdateMyQuoteRequests'
  | 'UpdateOthersCarts'
  | 'UpdateOthersOrders'
  | 'UpdateOthersQuoteRequests'
  | 'UpdateParentUnit'
  | 'ViewMyCarts'
  | 'ViewMyOrders'
  | 'ViewMyQuoteRequests'
  | 'ViewMyQuotes'
  | 'ViewOthersCarts'
  | 'ViewOthersOrders'
  | 'ViewOthersQuoteRequests'
  | 'ViewOthersQuotes'
  | (string & {})
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
export interface ProductSelectionSetting {
  /**
   *
   */
  readonly productSelection: Reference
  /**
   *
   */
  readonly active: boolean
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
export interface ProductVariantSelection {
  /**
   *
   */
  readonly type: ProductVariantSelectionTypeEnum
  /**
   *
   */
  readonly skus: string[]
}
export enum ProductVariantSelectionTypeEnumValues {
  Exclusion = 'exclusion',
  Inclusion = 'inclusion',
}

export type ProductVariantSelectionTypeEnum =
  | 'exclusion'
  | 'inclusion'
  | (string & {})
export enum QuoteRequestStateValues {
  Accepted = 'Accepted',
  Cancelled = 'Cancelled',
  Closed = 'Closed',
  Rejected = 'Rejected',
  Submitted = 'Submitted',
}

export type QuoteRequestState =
  | 'Accepted'
  | 'Cancelled'
  | 'Closed'
  | 'Rejected'
  | 'Submitted'
  | (string & {})
export enum QuoteStateValues {
  Accepted = 'Accepted',
  Declined = 'Declined',
  DeclinedForRenegotiation = 'DeclinedForRenegotiation',
  Failed = 'Failed',
  Pending = 'Pending',
  Withdrawn = 'Withdrawn',
}

export type QuoteState =
  | 'Accepted'
  | 'Declined'
  | 'DeclinedForRenegotiation'
  | 'Failed'
  | 'Pending'
  | 'Withdrawn'
  | (string & {})
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
export enum ReferenceTypeIdValues {
  AssociateRole = 'associate-role',
  BusinessUnit = 'business-unit',
  Cart = 'cart',
  CartDiscount = 'cart-discount',
  Category = 'category',
  Channel = 'channel',
  Customer = 'customer',
  CustomerEmailToken = 'customer-email-token',
  CustomerGroup = 'customer-group',
  CustomerPasswordToken = 'customer-password-token',
  DiscountCode = 'discount-code',
  Extension = 'extension',
  InventoryEntry = 'inventory-entry',
  KeyValueDocument = 'key-value-document',
  Order = 'order',
  OrderEdit = 'order-edit',
  Payment = 'payment',
  Product = 'product',
  ProductDiscount = 'product-discount',
  ProductSelection = 'product-selection',
  ProductType = 'product-type',
  Quote = 'quote',
  QuoteRequest = 'quote-request',
  Review = 'review',
  ShippingMethod = 'shipping-method',
  ShoppingList = 'shopping-list',
  StagedQuote = 'staged-quote',
  State = 'state',
  Store = 'store',
  Subscription = 'subscription',
  TaxCategory = 'tax-category',
  Type = 'type',
  Zone = 'zone',
}

export type ReferenceTypeId =
  | 'associate-role'
  | 'business-unit'
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
  | 'product-selection'
  | 'product-type'
  | 'quote'
  | 'quote-request'
  | 'review'
  | 'shipping-method'
  | 'shopping-list'
  | 'staged-quote'
  | 'state'
  | 'store'
  | 'subscription'
  | 'tax-category'
  | 'type'
  | 'zone'
  | (string & {})
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
export interface ResourceIdentifier {
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
  readonly typeId: ReferenceTypeId
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
export enum ReturnPaymentStateValues {
  Initial = 'Initial',
  NonRefundable = 'NonRefundable',
  NotRefunded = 'NotRefunded',
  Refunded = 'Refunded',
}

export type ReturnPaymentState =
  | 'Initial'
  | 'NonRefundable'
  | 'NotRefunded'
  | 'Refunded'
  | (string & {})
export enum ReturnShipmentStateValues {
  Advised = 'Advised',
  BackInStock = 'BackInStock',
  Returned = 'Returned',
  Unusable = 'Unusable',
}

export type ReturnShipmentState =
  | 'Advised'
  | 'BackInStock'
  | 'Returned'
  | 'Unusable'
  | (string & {})
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
export enum RoundingModeValues {
  HalfDown = 'HalfDown',
  HalfEven = 'HalfEven',
  HalfUp = 'HalfUp',
}

export type RoundingMode = 'HalfDown' | 'HalfEven' | 'HalfUp' | (string & {})
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
export enum SelectionModeValues {
  Cheapest = 'Cheapest',
  MostExpensive = 'MostExpensive',
}

export type SelectionMode = 'Cheapest' | 'MostExpensive' | (string & {})
export enum ShipmentStateValues {
  Backorder = 'Backorder',
  Delayed = 'Delayed',
  Partial = 'Partial',
  Pending = 'Pending',
  Ready = 'Ready',
  Shipped = 'Shipped',
}

export type ShipmentState =
  | 'Backorder'
  | 'Delayed'
  | 'Partial'
  | 'Pending'
  | 'Ready'
  | 'Shipped'
  | (string & {})
export interface ShippingRate {
  /**
   *
   */
  readonly price: Money
  /**
   *
   */
  readonly freeAbove: Money
  /**
   *	Only appears in response to requests for ShippingMethods by Cart or location to mark this shipping rate as one that matches the Cart or location.
   *
   */
  readonly isMatching: boolean
  /**
   *
   */
  readonly tiers: ShippingRatePriceTier[]
}
export interface ShippingRatePriceTier {
  /**
   *
   */
  readonly type: ShippingRateTierType
}
export enum ShippingRateTierTypeValues {
  CartClassification = 'CartClassification',
  CartScore = 'CartScore',
  CartValue = 'CartValue',
}

export type ShippingRateTierType =
  | 'CartClassification'
  | 'CartScore'
  | 'CartValue'
  | (string & {})
export enum StackingModeValues {
  Stacking = 'Stacking',
  StopAfterThisDiscount = 'StopAfterThisDiscount',
}

export type StackingMode = 'Stacking' | 'StopAfterThisDiscount' | (string & {})
export enum StagedQuoteStateValues {
  Closed = 'Closed',
  InProgress = 'InProgress',
  Sent = 'Sent',
}

export type StagedQuoteState = 'Closed' | 'InProgress' | 'Sent' | (string & {})
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
  | 'ReviewState'
  | 'StagedQuoteState'
  | (string & {})
export interface StoreCountry {
  /**
   *	Two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   *
   */
  readonly code: string
}
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
export enum TaxCalculationModeValues {
  LineItemLevel = 'LineItemLevel',
  UnitPriceLevel = 'UnitPriceLevel',
}

export type TaxCalculationMode =
  | 'LineItemLevel'
  | 'UnitPriceLevel'
  | (string & {})
export enum TaxModeValues {
  Disabled = 'Disabled',
  External = 'External',
  ExternalAmount = 'ExternalAmount',
  Platform = 'Platform',
}

export type TaxMode =
  | 'Disabled'
  | 'External'
  | 'ExternalAmount'
  | 'Platform'
  | (string & {})
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
   *	Two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
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
  readonly subRates: SubRate[]
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
export interface TaxedPrice {
  /**
   *	Total net price of the Order.
   *
   */
  readonly totalNet: Money
  /**
   *	Total gross price of the Order.
   *
   */
  readonly totalGross: Money
}
export enum TextInputHintValues {
  MultiLine = 'MultiLine',
  SingleLine = 'SingleLine',
}

export type TextInputHint = 'MultiLine' | 'SingleLine' | (string & {})
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
   *	Unique identifier of the Transaction.
   *
   */
  readonly id: string
  /**
   *	Time at which the transaction took place.
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
   *	Identifier used by the interface that manages the transaction (usually the PSP). If a matching interaction was logged in the `interfaceInteractions` array, the corresponding interaction should be findable with this ID.
   *
   */
  readonly interactionId: string
  /**
   *
   */
  readonly state: TransactionState
}
export enum TransactionStateValues {
  Failure = 'Failure',
  Initial = 'Initial',
  Pending = 'Pending',
  Success = 'Success',
}

export type TransactionState =
  | 'Failure'
  | 'Initial'
  | 'Pending'
  | 'Success'
  | (string & {})
export enum TransactionTypeValues {
  Authorization = 'Authorization',
  CancelAuthorization = 'CancelAuthorization',
  Charge = 'Charge',
  Chargeback = 'Chargeback',
  Refund = 'Refund',
}

export type TransactionType =
  | 'Authorization'
  | 'CancelAuthorization'
  | 'Charge'
  | 'Chargeback'
  | 'Refund'
  | (string & {})
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
