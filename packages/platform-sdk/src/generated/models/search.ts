/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

/**
 *	Possible values for the `fieldType` property on [simple expressions](/../api/search-query-language#simple-expressions) indicating the data type of the `field`.
 */
export enum SearchFieldTypeValues {
  Boolean = 'boolean',
  Date = 'date',
  Datetime = 'datetime',
  Enum = 'enum',
  Lenum = 'lenum',
  Ltext = 'ltext',
  Money = 'money',
  Number = 'number',
  Reference = 'reference',
  SetBoolean = 'set_boolean',
  SetDate = 'set_date',
  SetDatetime = 'set_datetime',
  SetEnum = 'set_enum',
  SetLenum = 'set_lenum',
  SetLtext = 'set_ltext',
  SetMoney = 'set_money',
  SetNumber = 'set_number',
  SetReference = 'set_reference',
  SetText = 'set_text',
  SetTime = 'set_time',
  Text = 'text',
  Time = 'time',
}

export type SearchFieldType =
  | 'boolean'
  | 'date'
  | 'datetime'
  | 'enum'
  | 'lenum'
  | 'ltext'
  | 'money'
  | 'number'
  | 'reference'
  | 'set_boolean'
  | 'set_date'
  | 'set_datetime'
  | 'set_enum'
  | 'set_lenum'
  | 'set_ltext'
  | 'set_money'
  | 'set_number'
  | 'set_reference'
  | 'set_text'
  | 'set_time'
  | 'text'
  | 'time'
  | (string & {})
export enum SearchMatchTypeValues {
  All = 'all',
  Any = 'any',
}

export type SearchMatchType = 'all' | 'any' | (string & {})
export interface SearchMatchingVariant {
  /**
   *	Unique identifier of the variant.
   *
   */
  readonly id: number
  /**
   *	SKU of the matching variant.
   *
   */
  readonly sku?: string
}
export interface SearchQuery {}
export type _SearchQuery =
  | SearchQuery
  | _SearchCompoundExpression
  | _SearchQueryExpression
export interface SearchCompoundExpression extends SearchQuery {}
export type _SearchCompoundExpression =
  | SearchCompoundExpression
  | SearchAndExpression
  | SearchFilterExpression
  | SearchNotExpression
  | SearchOrExpression
export interface SearchAndExpression extends SearchCompoundExpression {
  /**
   *
   */
  readonly and: SearchQuery[]
}
export interface SearchFilterExpression extends SearchCompoundExpression {
  /**
   *
   */
  readonly filter: SearchQueryExpression[]
}
export interface SearchNotExpression extends SearchCompoundExpression {
  /**
   *
   */
  readonly not: SearchQuery[]
}
export interface SearchOrExpression extends SearchCompoundExpression {
  /**
   *
   */
  readonly or: SearchQuery[]
}
export interface SearchQueryExpression extends SearchQuery {}
export type _SearchQueryExpression =
  | SearchQueryExpression
  | SearchDateRangeExpression
  | SearchDateTimeRangeExpression
  | SearchExactExpression
  | SearchExistsExpression
  | SearchFullTextExpression
  | SearchFullTextPrefixExpression
  | SearchLongRangeExpression
  | SearchNumberRangeExpression
  | SearchPrefixExpression
  | SearchTimeRangeExpression
  | SearchWildCardExpression
export interface SearchDateRangeExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly range: SearchDateRangeValue
}
export interface SearchDateTimeRangeExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly range: SearchDateTimeRangeValue
}
export interface SearchExactExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly exact: SearchExactValue
}
export interface SearchExistsExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly exists: SearchExistsValue
}
export interface SearchFullTextExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly fullText: SearchFullTextValue
}
export interface SearchFullTextPrefixExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly fullTextPrefix: SearchFullTextPrefixValue
}
export interface SearchLongRangeExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly range: SearchLongRangeValue
}
export interface SearchNumberRangeExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly range: SearchNumberRangeValue
}
export interface SearchPrefixExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly prefix: SearchAnyValue
}
export interface SearchQueryExpressionValue {
  /**
   *
   */
  readonly field: string
  /**
   *
   */
  readonly boost?: number
  /**
   *	Possible values for the `fieldType` property on [simple expressions](/../api/search-query-language#simple-expressions) indicating the data type of the `field`.
   *
   */
  readonly fieldType?: SearchFieldType
}
export type _SearchQueryExpressionValue =
  | SearchQueryExpressionValue
  | SearchAnyValue
  | SearchDateRangeValue
  | SearchDateTimeRangeValue
  | SearchExactValue
  | SearchExistsValue
  | SearchFullTextPrefixValue
  | SearchFullTextValue
  | SearchLongRangeValue
  | SearchNumberRangeValue
  | SearchTimeRangeValue
export interface SearchAnyValue extends SearchQueryExpressionValue {
  /**
   *
   */
  readonly value: any
  /**
   *	String value specifying linguistic and regional preferences using the [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag), as described in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). The format combines language, script, and region using hyphen-separated subtags. For example: `en`, `en-US`, `zh-Hans-SG`.
   *
   *
   */
  readonly language?: string
  /**
   *
   */
  readonly caseInsensitive?: boolean
}
export interface SearchDateRangeValue extends SearchQueryExpressionValue {
  /**
   *
   */
  readonly gte?: string
  /**
   *
   */
  readonly gt?: string
  /**
   *
   */
  readonly lte?: string
  /**
   *
   */
  readonly lt?: string
}
export interface SearchDateTimeRangeValue extends SearchQueryExpressionValue {
  /**
   *
   */
  readonly gte?: string
  /**
   *
   */
  readonly gt?: string
  /**
   *
   */
  readonly lte?: string
  /**
   *
   */
  readonly lt?: string
}
export interface SearchExactValue extends SearchQueryExpressionValue {
  /**
   *
   */
  readonly value?: any
  /**
   *
   */
  readonly values?: any[]
  /**
   *	String value specifying linguistic and regional preferences using the [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag), as described in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). The format combines language, script, and region using hyphen-separated subtags. For example: `en`, `en-US`, `zh-Hans-SG`.
   *
   *
   */
  readonly language?: string
  /**
   *
   */
  readonly caseInsensitive?: boolean
}
export interface SearchExistsValue extends SearchQueryExpressionValue {
  /**
   *	String value specifying linguistic and regional preferences using the [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag), as described in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). The format combines language, script, and region using hyphen-separated subtags. For example: `en`, `en-US`, `zh-Hans-SG`.
   *
   *
   */
  readonly language?: string
}
export interface SearchFullTextPrefixValue extends SearchQueryExpressionValue {
  /**
   *
   */
  readonly value: any
  /**
   *	String value specifying linguistic and regional preferences using the [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag), as described in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). The format combines language, script, and region using hyphen-separated subtags. For example: `en`, `en-US`, `zh-Hans-SG`.
   *
   *
   */
  readonly language?: string
  /**
   *
   */
  readonly mustMatch?: SearchMatchType
}
export interface SearchFullTextValue extends SearchQueryExpressionValue {
  /**
   *
   */
  readonly value: any
  /**
   *	String value specifying linguistic and regional preferences using the [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag), as described in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). The format combines language, script, and region using hyphen-separated subtags. For example: `en`, `en-US`, `zh-Hans-SG`.
   *
   *
   */
  readonly language?: string
  /**
   *
   */
  readonly mustMatch?: SearchMatchType
}
export interface SearchLongRangeValue extends SearchQueryExpressionValue {
  /**
   *
   */
  readonly gte?: number
  /**
   *
   */
  readonly gt?: number
  /**
   *
   */
  readonly lte?: number
  /**
   *
   */
  readonly lt?: number
}
export interface SearchNumberRangeValue extends SearchQueryExpressionValue {
  /**
   *
   */
  readonly gte?: number
  /**
   *
   */
  readonly gt?: number
  /**
   *
   */
  readonly lte?: number
  /**
   *
   */
  readonly lt?: number
}
/**
 *	For set-type fields, only a single value of the set is taken into account for sorting.
 *	The sort mode determines whether the minimum or maximum value, or a calculated statistical value should be used as sorting value.
 *
 */
export enum SearchSortModeValues {
  Avg = 'avg',
  Max = 'max',
  Min = 'min',
  Sum = 'sum',
}

export type SearchSortMode = 'avg' | 'max' | 'min' | 'sum' | (string & {})
export enum SearchSortOrderValues {
  Asc = 'asc',
  Desc = 'desc',
}

export type SearchSortOrder = 'asc' | 'desc' | (string & {})
/**
 *	Sorting parameters provided with a Search request.
 *
 */
export interface SearchSorting {
  /**
   *	Use any searchable field of the resource as sort criterion, or `"score"` to sort by relevance score calculated by the API.
   *
   *
   */
  readonly field: string
  /**
   *	String value specifying linguistic and regional preferences using the [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag), as described in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). The format combines language, script, and region using hyphen-separated subtags. For example: `en`, `en-US`, `zh-Hans-SG`.
   *
   *
   */
  readonly language?: string
  /**
   *	Specify the order in which the search results should be sorted.
   *	Can be `asc` for ascending, or `desc` for descending order.
   *
   *
   */
  readonly order: SearchSortOrder
  /**
   *	Specify the sort mode to be applied for a set-type `field`.
   *
   *
   */
  readonly mode?: SearchSortMode
  /**
   *	Provide the data type of the given `field`.
   *
   *
   */
  readonly fieldType?: SearchFieldType
  /**
   *	Allows you to apply a [sort filter](/../api/search-query-language#sort-filter).
   *
   *
   */
  readonly filter?: _SearchQueryExpression
}
export interface SearchTimeRangeExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly range: SearchTimeRangeValue
}
export interface SearchTimeRangeValue extends SearchQueryExpressionValue {
  /**
   *
   */
  readonly gte?: string
  /**
   *
   */
  readonly gt?: string
  /**
   *
   */
  readonly lte?: string
  /**
   *
   */
  readonly lt?: string
}
export interface SearchWildCardExpression extends SearchQueryExpression {
  /**
   *
   */
  readonly wildcard: SearchAnyValue
}
