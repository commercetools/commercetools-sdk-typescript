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
 *	Import representation for a product.
 *
 *	The import representation for a product is the most minimal representation required
 *	for creating a product in commercetools.
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
   *	The product's product type. Maps to `Product.productType`.
   *
   *	The product type referenced
   *	must already exist in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   *
   */
  readonly productType: ProductTypeKeyReference
  /**
   *	Human-readable identifiers usually used as deep-link URL to the related product. Each slug must be unique across a project,
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
   *	An array of references to a categories by their keys. Maps to `Product.categories`.
   *
   *	The categories referenced
   *	must already exist in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
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
   *	References a tax category by its key.
   *
   *	The tax category referenced must already exist
   *	in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
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
   *	References a state by its key.
   *
   *	The tax category referenced must already exist
   *	in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
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
