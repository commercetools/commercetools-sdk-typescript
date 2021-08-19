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

import {
  CategoryKeyReference,
  ImportResource,
  LocalizedString,
  ProductTypeKeyReference,
  StateKeyReference,
  TaxCategoryKeyReference,
} from './common'

/**
 *	Search keywords are primarily used by the suggester but are also considered for the full-text search. SearchKeywords is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag). The value to a language tag key is an array of SearchKeyword for the specific language.
 *	```json
 *	{
 *	  "en": [
 *	    { "text": "Multi tool" },
 *	    { "text": "Swiss Army Knife", "suggestTokenizer": { "type": "whitespace" } }
 *	  ],
 *	  "de": [
 *	    {
 *	      "text": "Schweizer Messer",
 *	      "suggestTokenizer": {
 *	        "type": "custom",
 *	        "inputs": ["schweizer messer", "offiziersmesser", "sackmesser"]
 *	      }
 *	    }
 *	  ]
 *	}
 *	```
 *
 */
export interface SearchKeywords {
  [key: string]: SearchKeyword[]
}
export interface SearchKeyword {
  /**
   *
   */
  readonly text: string
  /**
   *	The tokenizer defines the tokens that are used to match against the [Suggest Query](/../products-suggestions#suggest-query) input.
   *
   */
  readonly suggestTokenizer?: SuggestTokenizer
}
/**
 *	The tokenizer defines the tokens that are used to match against the [Suggest Query](/../products-suggestions#suggest-query) input.
 *
 */
export type SuggestTokenizer = CustomTokenizer | WhitespaceTokenizer
export interface CustomTokenizer {
  readonly type: 'custom'
  /**
   *
   */
  readonly inputs: string[]
}
export interface WhitespaceTokenizer {
  readonly type: 'whitespace'
}
/**
 *	The data representation for a Product to be imported that is persisted as a [Product](/../api/projects/products#product) in the Project.
 *
 *	This is the minimal representation required for creating a [Product](/../api/projects/products#product) in commercetools.
 *
 */
export interface ProductImport extends ImportResource {
  /**
   *	Maps to `Product.name`.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	The `productType` of a [Product](/../api/projects/products#product).
   *	Maps to `Product.productType`.
   *	The Reference to the [ProductType](/../api/projects/productTypes#producttype) with which the Product is associated.
   *	If referenced ProductType does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary ProductType is created.
   *
   *
   */
  readonly productType: ProductTypeKeyReference
  /**
   *	Human-readable identifiers usually used as deep-link URL to the related product. Each slug must be unique across a Project,
   *	but a product can have the same slug for different languages. Allowed are alphabetic, numeric, underscore (_) and hyphen (-) characters.
   *
   *
   */
  readonly slug: LocalizedString
  /**
   *	Maps to `Product.description`.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Maps to `Product.categories`.
   *	The References to the [Categories](/../api/projects/categories#category) with which the Product is associated.
   *	If referenced Categories do not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary Categories are created.
   *
   *
   */
  readonly categories?: CategoryKeyReference[]
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
  readonly metaTitle?: LocalizedString
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
  readonly metaDescription?: LocalizedString
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
  readonly metaKeywords?: LocalizedString
  /**
   *	The Reference to the [TaxCategory](/../api/projects/taxCategories#taxcategory) with which the Product is associated.
   *	If referenced TaxCategory does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary TaxCategory is created.
   *
   *
   */
  readonly taxCategory?: TaxCategoryKeyReference
  /**
   *	Search keywords are primarily used by the suggester but are also considered for the full-text search. SearchKeywords is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag). The value to a language tag key is an array of SearchKeyword for the specific language.
   *	```json
   *	{
   *	  "en": [
   *	    { "text": "Multi tool" },
   *	    { "text": "Swiss Army Knife", "suggestTokenizer": { "type": "whitespace" } }
   *	  ],
   *	  "de": [
   *	    {
   *	      "text": "Schweizer Messer",
   *	      "suggestTokenizer": {
   *	        "type": "custom",
   *	        "inputs": ["schweizer messer", "offiziersmesser", "sackmesser"]
   *	      }
   *	    }
   *	  ]
   *	}
   *	```
   *
   *
   */
  readonly searchKeywords?: SearchKeywords
  /**
   *	The Reference to the [State](/../api/projects/states#state) with which the Product is associated.
   *	If referenced State does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary State is created.
   *
   *
   */
  readonly state?: StateKeyReference
  /**
   *	If there were updates, only the updates will be published to `staged` and `current` projection.
   *
   *
   */
  readonly publish?: boolean
}
