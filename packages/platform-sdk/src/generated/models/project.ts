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

import { LastModifiedBy } from './common'
import { MessageConfiguration, MessageConfigurationDraft } from './message'
import { CustomFieldLocalizedEnumValue } from './type'

export interface CartsConfiguration {
  /**
   *	if country - no state tax rate fallback should be used when a shipping address state is not explicitly covered in the rates lists of all tax categories of a cart line items. Default value 'false'
   *
   */
  readonly countryTaxRateFallbackEnabled?: boolean
  /**
   *	The default value for the deleteDaysAfterLastModification parameter of the CartDraft. Initially set to 90 for projects created after December 2019.
   *
   */
  readonly deleteDaysAfterLastModification?: number
}
export interface ExternalOAuth {
  /**
   *
   */
  readonly url: string
  /**
   *
   */
  readonly authorizationHeader: string
}
export interface Project {
  /**
   *	The current version of the project.
   *
   */
  readonly version: number
  /**
   *	The unique key of the project.
   *
   */
  readonly key: string
  /**
   *	The name of the project.
   *
   */
  readonly name: string
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   */
  readonly countries: string[]
  /**
   *	A three-digit currency code as per [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   *
   */
  readonly currencies: string[]
  /**
   *
   */
  readonly languages: string[]
  /**
   *
   */
  readonly createdAt: string
  /**
   *	The time is in the format Year-Month `YYYY-MM`.
   *
   */
  readonly trialUntil?: string
  /**
   *
   */
  readonly messages: MessageConfiguration
  /**
   *
   */
  readonly shippingRateInputType?: ShippingRateInputType
  /**
   *
   */
  readonly externalOAuth?: ExternalOAuth
  /**
   *
   */
  readonly carts: CartsConfiguration
  /**
   *
   */
  readonly searchIndexing?: SearchIndexingConfiguration
  /**
   *
   */
  readonly shoppingLists?: ShoppingListsConfiguration
}
export interface ProjectUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: ProjectUpdateAction[]
}
export type ProjectUpdateAction =
  | ProjectChangeCartsConfiguration
  | ProjectChangeCountriesAction
  | ProjectChangeCountryTaxRateFallbackEnabledAction
  | ProjectChangeCurrenciesAction
  | ProjectChangeLanguagesAction
  | ProjectChangeMessagesConfigurationAction
  | ProjectChangeMessagesEnabledAction
  | ProjectChangeNameAction
  | ProjectChangeProductSearchIndexingEnabledAction
  | ProjectChangeShoppingListsConfiguration
  | ProjectSetExternalOAuthAction
  | ProjectSetShippingRateInputTypeAction
export interface SearchIndexingConfiguration {
  /**
   *
   */
  readonly products?: SearchIndexingConfigurationValues
}
/**
 *	Can be one of the following or absent. "Activated" or absent means that the search and suggest endpoints for the specified resource type are active. "Deactivated" means that the search and suggest endpoints for the specified resource type cannot be used. "Indexing" indicates that the search and suggest endpoints can _temporally_ not be used because the search index is being re-built.
 */
export type SearchIndexingConfigurationStatus =
  | 'Activated'
  | 'Deactivated'
  | 'Indexing'
export interface SearchIndexingConfigurationValues {
  /**
   *	Can be one of the following or absent. "Activated" or absent means that the search and suggest endpoints for the specified resource type are active. "Deactivated" means that the search and suggest endpoints for the specified resource type cannot be used. "Indexing" indicates that the search and suggest endpoints can _temporally_ not be used because the search index is being re-built.
   *
   */
  readonly status?: SearchIndexingConfigurationStatus
  /**
   *
   */
  readonly lastModifiedAt?: string
  /**
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
}
export type ShippingRateInputType =
  | CartClassificationType
  | CartScoreType
  | CartValueType
export interface CartClassificationType {
  readonly type: 'CartClassification'
  /**
   *
   */
  readonly values: CustomFieldLocalizedEnumValue[]
}
export interface CartScoreType {
  readonly type: 'CartScore'
}
export interface CartValueType {
  readonly type: 'CartValue'
}
export interface ShoppingListsConfiguration {
  /**
   *	The default value for the deleteDaysAfterLastModification parameter of the ShoppingListDraft. Initially set to 360 for projects created after December 2019.
   *
   */
  readonly deleteDaysAfterLastModification?: number
}
export interface ProjectChangeCartsConfiguration {
  readonly action: 'changeCartsConfiguration'
  /**
   *
   */
  readonly cartsConfiguration?: CartsConfiguration
}
export interface ProjectChangeCountriesAction {
  readonly action: 'changeCountries'
  /**
   *	A two-digit country code as per country code.
   *
   */
  readonly countries: string[]
}
export interface ProjectChangeCountryTaxRateFallbackEnabledAction {
  readonly action: 'changeCountryTaxRateFallbackEnabled'
  /**
   *	default value is `false`
   *
   */
  readonly countryTaxRateFallbackEnabled: boolean
}
export interface ProjectChangeCurrenciesAction {
  readonly action: 'changeCurrencies'
  /**
   *	A three-digit currency code as per currency code.
   *
   */
  readonly currencies: string[]
}
export interface ProjectChangeLanguagesAction {
  readonly action: 'changeLanguages'
  /**
   *	 .
   *
   */
  readonly languages: string[]
}
export interface ProjectChangeMessagesConfigurationAction {
  readonly action: 'changeMessagesConfiguration'
  /**
   *
   */
  readonly messagesConfiguration: MessageConfigurationDraft
}
export interface ProjectChangeMessagesEnabledAction {
  readonly action: 'changeMessagesEnabled'
  /**
   *
   */
  readonly messagesEnabled: boolean
}
export interface ProjectChangeNameAction {
  readonly action: 'changeName'
  /**
   *
   */
  readonly name: string
}
export interface ProjectChangeProductSearchIndexingEnabledAction {
  readonly action: 'changeProductSearchIndexingEnabled'
  /**
   *
   */
  readonly enabled: boolean
}
export interface ProjectChangeShoppingListsConfiguration {
  readonly action: 'changeShoppingListsConfiguration'
  /**
   *
   */
  readonly shoppingListsConfiguration?: ShoppingListsConfiguration
}
export interface ProjectSetExternalOAuthAction {
  readonly action: 'setExternalOAuth'
  /**
   *	If you do not provide the `externalOAuth` field or provide a value
   *	of `null`, the update action unsets the External OAuth provider.
   *
   *
   */
  readonly externalOAuth?: ExternalOAuth
}
export interface ProjectSetShippingRateInputTypeAction {
  readonly action: 'setShippingRateInputType'
  /**
   *	If not set, removes existing shippingRateInputType.
   *
   */
  readonly shippingRateInputType?: ShippingRateInputType
}
