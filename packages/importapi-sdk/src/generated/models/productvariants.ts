/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.vrap.io/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */

import {
  Asset,
  Image,
  ImportResource,
  KeyReference,
  LocalizedString,
  ProductKeyReference,
  ProductVariantKeyReference,
  TypedMoney,
} from './common'

/**
 *	This type represents the value of an attribute of a product variant.
 *	The name and type property must match the name and type property of an attribute definition of the product type.
 *
 */
export type Attribute =
  | BooleanAttribute
  | BooleanSetAttribute
  | DateAttribute
  | DateSetAttribute
  | DateTimeAttribute
  | DateTimeSetAttribute
  | EnumAttribute
  | EnumSetAttribute
  | LocalizableEnumAttribute
  | LocalizableEnumSetAttribute
  | LocalizableTextAttribute
  | LocalizableTextSetAttribute
  | MoneyAttribute
  | MoneySetAttribute
  | NumberAttribute
  | NumberSetAttribute
  | ReferenceAttribute
  | ReferenceSetAttribute
  | TextAttribute
  | TextSetAttribute
  | TimeAttribute
  | TimeSetAttribute
/**
 *	This type represents an attribute which value is either "true" or "false".
 *
 */
export interface BooleanAttribute {
  readonly type: 'boolean'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: boolean
}
/**
 *	This type represents an attribute which value is set of boolean values.
 *
 */
export interface BooleanSetAttribute {
  readonly type: 'boolean-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: boolean[]
}
/**
 *	This type represents an attribute which value is a date.
 *
 */
export interface DateAttribute {
  readonly type: 'date'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute which value is a set of dates.
 *
 */
export interface DateSetAttribute {
  readonly type: 'date-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	This type represents an attribute which value is a date with time.
 *
 */
export interface DateTimeAttribute {
  readonly type: 'datetime'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute which value is a set of dates with time.
 *
 */
export interface DateTimeSetAttribute {
  readonly type: 'datetime-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	This type represents an attribute which value is an enum.
 *	The attribute value refers to the key of the enum value.
 *
 */
export interface EnumAttribute {
  readonly type: 'enum'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute which value is an enum.
 *	The attribute value refers to the key of the enum value.
 *
 */
export interface EnumSetAttribute {
  readonly type: 'enum-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	This type represents an attribute which value is a localized enum.
 *	The attribute value refers to the key of the enum value.
 *
 */
export interface LocalizableEnumAttribute {
  readonly type: 'lenum'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute which value is a localized enum.
 *	The attribute value refers to the key of the enum value.
 *
 */
export interface LocalizableEnumSetAttribute {
  readonly type: 'lenum-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	This type represents an attribute which value is a localized text.
 *
 */
export interface LocalizableTextAttribute {
  readonly type: 'ltext'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: LocalizedString
}
/**
 *	This type represents an attribute which value is a localized text.
 *
 */
export interface LocalizableTextSetAttribute {
  readonly type: 'ltext-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: LocalizedString[]
}
/**
 *	This type represents an attribute which value is a money object.
 *
 */
export interface MoneyAttribute {
  readonly type: 'money'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: TypedMoney
}
/**
 *	This type represents an attribute which value is a set of money objects.
 *
 */
export interface MoneySetAttribute {
  readonly type: 'money-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: TypedMoney[]
}
/**
 *	This type represents an attribute which value is a number.
 *
 */
export interface NumberAttribute {
  readonly type: 'number'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: number
}
/**
 *	This type represents an attribute which value is a set of numbers.
 *
 */
export interface NumberSetAttribute {
  readonly type: 'number-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: number[]
}
/**
 *	This type represents an attribute which value is a key reference.
 *
 */
export interface ReferenceAttribute {
  readonly type: 'reference'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *	References a resource by its key.
   *
   */
  readonly value: KeyReference
}
/**
 *	This type represents an attribute which value is a set of references.
 *
 */
export interface ReferenceSetAttribute {
  readonly type: 'reference-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: KeyReference[]
}
/**
 *	This type represents an attribute which value is a string.
 *
 */
export interface TextAttribute {
  readonly type: 'text'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute which value is a set of strings.
 *
 */
export interface TextSetAttribute {
  readonly type: 'text-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	This type represents an attribute which value is a time.
 *
 */
export interface TimeAttribute {
  readonly type: 'time'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute which value is a set of times.
 *
 */
export interface TimeSetAttribute {
  readonly type: 'time-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	Import representation for a product variant. Use this type for importing new product variants
 *	into a commercetools project.
 *
 */
export interface ProductVariantImport extends ImportResource {
  /**
   *	Maps to `ProductVariant.sku`.
   *
   *
   */
  readonly sku?: string
  /**
   *	Maps to `ProductVariant.isMasterVariant`.
   *
   *
   */
  readonly isMasterVariant: boolean
  /**
   *	Maps to `ProductVariant.attributes`.
   *
   *	Each attribute referenced must be defined
   *	in an already existing product type in the commercetools project, or the import
   *	operation state is set to `Unresolved`.
   *
   *
   */
  readonly attributes?: Attribute[]
  /**
   *	Maps to `ProductVariant.images`.
   *
   *
   */
  readonly images?: Image[]
  /**
   *	Maps to `ProductVariant.assets`.
   *
   *
   */
  readonly assets?: Asset[]
  /**
   *	If there were updates, only the updates will be published to `staged` and `current` projection.
   *
   *
   */
  readonly publish?: boolean
  /**
   *	The product in which this product variant is contained. Maps to `ProductVariant.product`.
   *
   *	The product referenced
   *	must already exist in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   *
   */
  readonly product: ProductKeyReference
}
/**
 *	Import representation for an update to a product variant. Use this type for importing updates to existing
 *	product variants into a commercetools project.
 *
 */
export interface ProductVariantPatch {
  /**
   *	The product variant to which this patch is applied.
   *
   *	The product variant referenced
   *	must already exist in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   *
   */
  readonly productVariant: ProductVariantKeyReference
  /**
   *	Maps to `ProductVariant.attributes`.
   *
   *	Each attribute referenced must be defined
   *	in an already existing product type in the commercetools project, or the import
   *	operation state is set to `ValidationFailed`.
   *
   *
   */
  readonly attributes?: Attributes
}
export interface Attributes {
  [key: string]: Attribute | null
}
