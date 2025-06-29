/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  AssociateRoleKeyReference,
  AssociateRoleResourceIdentifier,
} from './associate-role'
import { RoundingMode } from './cart'
import { LastModifiedBy } from './common'
import { MessagesConfiguration, MessagesConfigurationDraft } from './message'
import { ShippingRateTierType } from './shipping-method'
import { CustomFieldLocalizedEnumValue } from './type'

/**
 *	The current indexing status of Business Unit Search.
 *
 */
export enum BusinessUnitIndexingStatusValues {
  Failed = 'Failed',
  Indexing = 'Indexing',
  Ready = 'Ready',
  Scheduled = 'Scheduled',
}

export type BusinessUnitIndexingStatus =
  | 'Failed'
  | 'Indexing'
  | 'Ready'
  | 'Scheduled'
  | (string & {})
/**
 *	The current indexing status of Customer Search.
 *
 */
export enum CustomerIndexingStatusValues {
  Failed = 'Failed',
  Indexing = 'Indexing',
  Ready = 'Ready',
  Scheduled = 'Scheduled',
}

export type CustomerIndexingStatus =
  | 'Failed'
  | 'Indexing'
  | 'Ready'
  | 'Scheduled'
  | (string & {})
export interface BusinessUnitConfiguration {
  /**
   *	Status of Business Units created using the [My Business Unit endpoint](ctp:api:endpoint:/{projectKey}/me/business-units:POST).
   *
   */
  readonly myBusinessUnitStatusOnCreation: BusinessUnitConfigurationStatus
  /**
   *	Default [Associate Role](ctp:api:type:AssociateRole) assigned to the Associate creating a Business Unit using the [My Business Unit endpoint](ctp:api:endpoint:/{projectKey}/me/business-units:POST).
   *
   *
   */
  readonly myBusinessUnitAssociateRoleOnCreation?: AssociateRoleKeyReference
}
/**
 *	Default value for [Business Unit Status](ctp:api:type:BusinessUnitStatus) configured though [Project settings](/../api/projects/project#change-my-business-unit-status-on-creation).
 */
export enum BusinessUnitConfigurationStatusValues {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type BusinessUnitConfigurationStatus =
  | 'Active'
  | 'Inactive'
  | (string & {})
/**
 *	Specifies the status of the [Business Unit Search](/../api/projects/business-unit-search) index.
 *	You can change the status using the [Change Business Unit Search Status](ctp:api:type:ProjectChangeBusinessUnitSearchStatusAction) update action.
 *
 */
export enum BusinessUnitSearchStatusValues {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type BusinessUnitSearchStatus =
  | 'Activated'
  | 'Deactivated'
  | (string & {})
export interface CartsConfiguration {
  /**
   *	Default value for the `deleteDaysAfterLastModification` parameter of the [CartDraft](ctp:api:type:CartDraft) and [MyCartDraft](ctp:api:type:MyCartDraft).
   *	If a [ChangeSubscription](ctp:api:type:ChangeSubscription) for Carts exists, a [ResourceDeletedDeliveryPayload](ctp:api:type:ResourceDeletedDeliveryPayload) is sent upon deletion of a Cart.
   *
   *	This field may not be present on Projects created before January 2020.
   *
   *
   */
  readonly deleteDaysAfterLastModification?: number
  /**
   *	Indicates if country _- no state_ Tax Rate fallback should be used when a shipping address state is not explicitly covered in the rates lists of all Tax Categories of a Cart Line Items. This field may not be present on Projects created before June 2020.
   *
   *
   */
  readonly countryTaxRateFallbackEnabled?: boolean
  /**
   *	Default value for the `priceRoundingMode` parameter of the [CartDraft](ctp:api:type:CartDraft).
   *	Indicates how the total prices on [LineItems](ctp:api:type:LineItem) and [CustomLineItems](ctp:api:type:CustomLineItem) are rounded when calculated.
   *
   *
   */
  readonly priceRoundingMode?: RoundingMode
  /**
   *	Default value for the `taxRoundingMode` parameter of the [CartDraft](ctp:api:type:CartDraft).
   *	Indicates how monetary values are rounded when calculating taxes for `taxedPrice`.
   *
   *
   */
  readonly taxRoundingMode?: RoundingMode
}
/**
 *	Specifies the status of the [Customer Search](/../api/projects/customer-search) index.
 *	You can change the status using the [Change Customer Search Status](ctp:api:type:ProjectChangeCustomerSearchStatusAction) update action.
 *
 */
export enum CustomerSearchStatusValues {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type CustomerSearchStatus = 'Activated' | 'Deactivated' | (string & {})
/**
 *	Represents a RFC 7662 compliant [OAuth 2.0 Token Introspection](https://datatracker.ietf.org/doc/html/rfc7662) endpoint. For more information, see [Requesting an access token using an external OAuth 2.0 server](/../api/authorization#request-an-access-token-using-an-external-oauth-server).
 *
 *	You can only configure **one** external OAuth 2.0 endpoint per Project. To authenticate using multiple external services (such as social network logins), use a middle layer authentication service.
 *
 */
export interface ExternalOAuth {
  /**
   *	URL with authorization header.
   *
   *
   */
  readonly url: string
  /**
   *	Must not contain any leading or trailing whitespaces. Partially hidden on retrieval.
   *
   */
  readonly authorizationHeader: string
}
/**
 *	Specifies the status of the [Order Search](/../api/projects/order-search) index.
 */
export enum OrderSearchStatusValues {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type OrderSearchStatus = 'Activated' | 'Deactivated' | (string & {})
export enum ProductSearchIndexingModeValues {
  ProductProjectionsSearch = 'ProductProjectionsSearch',
  ProductsSearch = 'ProductsSearch',
}

export type ProductSearchIndexingMode =
  | 'ProductProjectionsSearch'
  | 'ProductsSearch'
  | (string & {})
export interface Project {
  /**
   *	Current version of the Project.
   *
   *
   */
  readonly version: number
  /**
   *	User-defined unique identifier of the Project.
   *
   *
   */
  readonly key: string
  /**
   *	Name of the Project.
   *
   *
   */
  readonly name: string
  /**
   *	Country code of the geographic location.
   *
   *
   */
  readonly countries: string[]
  /**
   *	Currency code of the country. A Project must have at least one currency.
   *
   *
   */
  readonly currencies: string[]
  /**
   *	Language of the country. A Project must have at least one language.
   *
   *
   */
  readonly languages: string[]
  /**
   *	Date and time (UTC) the Project was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date in YYYY-MM format specifying when the trial period for the Project ends. Only present on Projects in trial period.
   *
   *
   */
  readonly trialUntil?: string
  /**
   *	Holds the configuration for the [Messages Query](/../api/projects/messages) feature.
   *
   *
   */
  readonly messages: MessagesConfiguration
  /**
   *	Holds the configuration for the [Carts](/../api/projects/carts) feature.
   *
   *
   */
  readonly carts: CartsConfiguration
  /**
   *	Holds the configuration for the [Shopping Lists](/../api/projects/shoppingLists) feature. This field may not be present on Projects created before January 2020.
   *
   *
   */
  readonly shoppingLists?: ShoppingListsConfiguration
  /**
   *	Holds the configuration for the [tiered shipping rates](ctp:api:type:ShippingRatePriceTier) feature.
   *
   *
   */
  readonly shippingRateInputType?: ShippingRateInputType
  /**
   *	Represents a RFC 7662 compliant [OAuth 2.0 Token Introspection](https://datatracker.ietf.org/doc/html/rfc7662) endpoint.
   *
   *
   */
  readonly externalOAuth?: ExternalOAuth
  /**
   *	Controls indexing of resources to be provided on high performance read-only search endpoints.
   *
   *
   */
  readonly searchIndexing?: SearchIndexingConfiguration
  /**
   *	Holds configuration specific to [Business Units](ctp:api:type:BusinessUnit).
   *
   *
   */
  readonly businessUnits?: BusinessUnitConfiguration
}
export interface ProjectUpdate {
  /**
   *	Expected version of the Project on which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Project.
   *
   *
   */
  readonly actions: ProjectUpdateAction[]
}
export type ProjectUpdateAction =
  | ProjectChangeBusinessUnitSearchStatusAction
  | ProjectChangeBusinessUnitStatusOnCreationAction
  | ProjectChangeCartsConfigurationAction
  | ProjectChangeCountriesAction
  | ProjectChangeCountryTaxRateFallbackEnabledAction
  | ProjectChangeCurrenciesAction
  | ProjectChangeCustomerSearchStatusAction
  | ProjectChangeLanguagesAction
  | ProjectChangeMessagesConfigurationAction
  | ProjectChangeNameAction
  | ProjectChangeOrderSearchStatusAction
  | ProjectChangePriceRoundingModeAction
  | ProjectChangeProductSearchIndexingEnabledAction
  | ProjectChangeShoppingListsConfigurationAction
  | ProjectChangeTaxRoundingModeAction
  | ProjectSetBusinessUnitAssociateRoleOnCreationAction
  | ProjectSetExternalOAuthAction
  | ProjectSetShippingRateInputTypeAction
export interface IProjectUpdateAction {
  /**
   *
   */
  readonly action: string
}
/**
 *	Controls indexing of resources to be provided on high performance read-only search endpoints.
 *
 */
export interface SearchIndexingConfiguration {
  /**
   *	Configuration for the [Product Projection Search](/../api/projects/product-projection-search) and [Search Term Suggestions](/../api/projects/search-term-suggestions) APIs.
   *
   */
  readonly products?: SearchIndexingConfigurationValues
  /**
   *	Configuration for the [Product Search](/../api/projects/product-search) feature.
   *
   */
  readonly productsSearch?: SearchIndexingConfigurationValues
  /**
   *	Configuration for the [Order Search](/../api/projects/order-search) feature.
   *
   */
  readonly orders?: SearchIndexingConfigurationValues
  /**
   *	Configuration for the [Customer Search](/../api/projects/customer-search) feature.
   *
   */
  readonly customers?: SearchIndexingConfigurationValues
  /**
   *	Configuration for the [Business Unit Search](/../api/projects/business-unit-search) feature.
   *
   */
  readonly businessUnits?: SearchIndexingConfigurationValues
}
/**
 *	Status of resource indexing.
 */
export enum SearchIndexingConfigurationStatusValues {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
  Indexing = 'Indexing',
}

export type SearchIndexingConfigurationStatus =
  | 'Activated'
  | 'Deactivated'
  | 'Indexing'
  | (string & {})
export interface SearchIndexingConfigurationValues {
  /**
   *	Current status of resource indexing. Present on Projects from 1 February 2019.
   *
   */
  readonly status?: SearchIndexingConfigurationStatus
  /**
   *	Date and time (UTC) the Project was last updated. Only present on Projects last modified after 1 February 2019.
   *
   *
   */
  readonly lastModifiedAt?: string
  /**
   *	IDs and references that last modified the SearchIndexingConfigurationValues.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
}
export type ShippingRateInputType =
  | CartClassificationType
  | CartScoreType
  | CartValueType
export interface IShippingRateInputType {
  /**
   *
   */
  readonly type: ShippingRateTierType
}
/**
 *	The [ShippingRate](ctp:api:type:ShippingRate) maps to an abstract Cart categorization expressed by strings (for example, `Light`, `Medium`, or `Heavy`).
 *	Only keys defined in the `values` array can be used to create a tier or to set a value of the `shippingRateInput` on the [Cart](ctp:api:type:Cart).
 *	Keys must be unique.
 *
 */
export interface CartClassificationType extends IShippingRateInputType {
  readonly type: 'CartClassification'
  /**
   *	The classification items that can be used for specifying any [ShippingRatePriceTier](ctp:api:type:ShippingRatePriceTier).
   *
   */
  readonly values: CustomFieldLocalizedEnumValue[]
}
/**
 *	The [ShippingRate](ctp:api:type:ShippingRate) maps to an abstract [Cart](ctp:api:type:Cart) categorization expressed by integers (such as shipping scores or weight ranges).
 *
 */
export interface CartScoreType extends IShippingRateInputType {
  readonly type: 'CartScore'
}
/**
 *	The [ShippingRate](ctp:api:type:ShippingRate) maps to the value of the Cart and is used to select a tier.
 *	The value of the [Cart](ctp:api:type:Cart) is the sum of all Line Item totals and Custom Line Item totals (via the `totalPrice` field) after any Product Discounts and Cart Discounts have been applied.
 *	If chosen, it is not possible to set a value for the `shippingRateInput` on the [Cart](ctp:api:type:Cart).
 *
 */
export interface CartValueType extends IShippingRateInputType {
  readonly type: 'CartValue'
}
export interface ShoppingListsConfiguration {
  /**
   *	Default value for the `deleteDaysAfterLastModification` parameter of the [ShoppingListDraft](ctp:api:type:ShoppingListDraft).
   *	This field may not be present on Projects created before January 2020.
   *
   *
   */
  readonly deleteDaysAfterLastModification?: number
}
export interface ProjectChangeBusinessUnitSearchStatusAction
  extends IProjectUpdateAction {
  readonly action: 'changeBusinessUnitSearchStatus'
  /**
   *	Activates or deactivates the [Search Business Units](ctp:api:endpoint:/{projectKey}/business-units/search:POST) feature. Activation will trigger building a search index for the Business Units in the Project.
   *
   */
  readonly status: BusinessUnitSearchStatus
}
export interface ProjectChangeBusinessUnitStatusOnCreationAction
  extends IProjectUpdateAction {
  readonly action: 'changeMyBusinessUnitStatusOnCreation'
  /**
   *	Status for Business Units created using the [My Business Unit endpoint](ctp:api:endpoint:/{projectKey}/me/business-units:POST).
   *
   *
   */
  readonly status: BusinessUnitConfigurationStatus
}
export interface ProjectChangeCartsConfigurationAction
  extends IProjectUpdateAction {
  readonly action: 'changeCartsConfiguration'
  /**
   *	Configuration for the [Carts](/../api/projects/carts) feature.
   *
   *
   */
  readonly cartsConfiguration: CartsConfiguration
}
export interface ProjectChangeCountriesAction extends IProjectUpdateAction {
  readonly action: 'changeCountries'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly countries: string[]
}
export interface ProjectChangeCountryTaxRateFallbackEnabledAction
  extends IProjectUpdateAction {
  readonly action: 'changeCountryTaxRateFallbackEnabled'
  /**
   *	When `true`, country _- no state_ Tax Rate is used as fallback. See [CartsConfiguration](ctp:api:type:CartsConfiguration).
   *
   */
  readonly countryTaxRateFallbackEnabled: boolean
}
export interface ProjectChangeCurrenciesAction extends IProjectUpdateAction {
  readonly action: 'changeCurrencies'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly currencies: string[]
}
export interface ProjectChangeCustomerSearchStatusAction
  extends IProjectUpdateAction {
  readonly action: 'changeCustomerSearchStatus'
  /**
   *	Activates or deactivates the [Customer Search](/../api/projects/customer-search) feature. Activation will trigger building a search index for the Customers in the Project.
   *
   */
  readonly status: CustomerSearchStatus
}
/**
 *	Removing a language used by a [Store](ctp:api:type:Store) returns a [LanguageUsedInStores](ctp:api:type:LanguageUsedInStoresError) error.
 *
 */
export interface ProjectChangeLanguagesAction extends IProjectUpdateAction {
  readonly action: 'changeLanguages'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly languages: string[]
}
export interface ProjectChangeMessagesConfigurationAction
  extends IProjectUpdateAction {
  readonly action: 'changeMessagesConfiguration'
  /**
   *	Configuration for the [Messages Query](/../api/projects/messages) feature.
   *
   */
  readonly messagesConfiguration: MessagesConfigurationDraft
}
export interface ProjectChangeNameAction extends IProjectUpdateAction {
  readonly action: 'changeName'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly name: string
}
export interface ProjectChangeOrderSearchStatusAction
  extends IProjectUpdateAction {
  readonly action: 'changeOrderSearchStatus'
  /**
   *	Activates or deactivates the [Order Search](/../api/projects/order-search) feature. Activation will trigger building a search index for the Orders in the Project.
   *
   */
  readonly status: OrderSearchStatus
}
export interface ProjectChangePriceRoundingModeAction
  extends IProjectUpdateAction {
  readonly action: 'changePriceRoundingMode'
  /**
   *	Project-level default rounding mode for calculating the total prices on [LineItems](ctp:api:type:LineItem) and [CustomLineItems](ctp:api:type:CustomLineItem). See [CartsConfiguration](ctp:api:type:CartsConfiguration).
   *
   */
  readonly priceRoundingMode: RoundingMode
}
export interface ProjectChangeProductSearchIndexingEnabledAction
  extends IProjectUpdateAction {
  readonly action: 'changeProductSearchIndexingEnabled'
  /**
   *	- If `false`, the indexing of [Product](ctp:api:type:Product) information will stop and the [Product Projection Search](/../api/projects/product-projection-search) as well as the [Search Term Suggestions](/../api/projects/search-term-suggestions) API will no longer be available for this Project. The Project's [SearchIndexingConfiguration](ctp:api:type:SearchIndexingConfiguration) `status` for `products` will be changed to `"Deactivated"`.
   *	- If `true`, the indexing of [Product](ctp:api:type:Product) information will start and the [Product Projection Search](/../api/projects/product-projection-search) as well as the [Search Term Suggestions](/../api/projects/search-term-suggestions) API will become available soon after for this Project. Proportional to the amount of information being indexed, the Project's [SearchIndexingConfiguration](ctp:api:type:SearchIndexingConfiguration) `status` for `products` will be shown as `"Indexing"` during this time. As soon as the indexing has finished, the configuration status will be changed to `"Activated"` making the aforementioned APIs fully available for this Project.
   *
   *
   */
  readonly enabled: boolean
  /**
   *	Controls whether the action should apply to [Product Projection Search](/../api/projects/product-projection-search) or to [Product Search](/../api/projects/product-search).
   *
   *
   */
  readonly mode?: ProductSearchIndexingMode
}
export interface ProjectChangeShoppingListsConfigurationAction
  extends IProjectUpdateAction {
  readonly action: 'changeShoppingListsConfiguration'
  /**
   *	Configuration for the [Shopping Lists](/../api/projects/shoppingLists) feature.
   *
   *
   */
  readonly shoppingListsConfiguration: ShoppingListsConfiguration
}
export interface ProjectChangeTaxRoundingModeAction
  extends IProjectUpdateAction {
  readonly action: 'changeTaxRoundingMode'
  /**
   *	Project-level default rounding mode for tax calculation. See [CartsConfiguration](ctp:api:type:CartsConfiguration).
   *
   */
  readonly taxRoundingMode: RoundingMode
}
export interface ProjectSetBusinessUnitAssociateRoleOnCreationAction
  extends IProjectUpdateAction {
  readonly action: 'setMyBusinessUnitAssociateRoleOnCreation'
  /**
   *	Default [Associate Role](ctp:api:type:AssociateRole) assigned to the Associate creating a Business Unit using the [My Business Unit endpoint](ctp:api:endpoint:/{projectKey}/me/business-units:POST).
   *
   *
   */
  readonly associateRole: AssociateRoleResourceIdentifier
}
export interface ProjectSetExternalOAuthAction extends IProjectUpdateAction {
  readonly action: 'setExternalOAuth'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly externalOAuth?: ExternalOAuth
}
export interface ProjectSetShippingRateInputTypeAction
  extends IProjectUpdateAction {
  readonly action: 'setShippingRateInputType'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly shippingRateInputType?: ShippingRateInputType
}
