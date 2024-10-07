/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  Asset,
  AssetDraft,
  AssetSource,
  BaseResource,
  CreatedBy,
  Image,
  LastModifiedBy,
  LocalizedString,
} from './common'
import { ProductReference, ProductResourceIdentifier } from './product'
import { StoreKeyReference, StoreResourceIdentifier } from './store'
import { FieldContainer, TypeResourceIdentifier } from './type'
import { WarningObject } from './warning'

/**
 *	A single ProductTailoring representation contains the _current_ and the _staged_ representation of its product data tailored per Store.
 *
 */
export interface ProductTailoring extends BaseResource {
  /**
   *	Unique identifier of the ProductTailoring.
   *
   */
  readonly id: string
  /**
   *	Current version of the ProductTailoring.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the ProductTailoring was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the ProductTailoring was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	IDs and references that last modified the ProductTailoring.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	IDs and references that created the ProductTailoring.
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	User-defined unique identifier of the ProductTailoring.
   *
   *
   */
  readonly key?: string
  /**
   *	The Store to which the ProductTailoring belongs.
   *
   *
   */
  readonly store: StoreKeyReference
  /**
   *	Reference to the Product the ProductTailoring belongs to.
   *
   *
   */
  readonly product: ProductReference
  /**
   *	`true` if the ProductTailoring is published.
   *
   *
   */
  readonly published: boolean
  /**
   *	Current (published) data of the ProductTailoring.
   *
   *
   */
  readonly current: ProductTailoringData
  /**
   *	Staged (unpublished) data of the ProductTailoring.
   *
   *
   */
  readonly staged: ProductTailoringData
  /**
   *	`true` if the `staged` data is different from the `current` data.
   *
   *
   */
  readonly hasStagedChanges: boolean
  /**
   *	Warnings about processing of a request.
   *	Appears in response to requests with response status code `202 Accepted`.
   *
   *
   */
  readonly warnings?: WarningObject[]
}
/**
 *	The same rules for `name` and `value` apply as for [Attribute](ctp:api:type:Attribute) in Product Variants.
 *
 */
export interface ProductTailoringAttribute {
  /**
   *	Name of the Attribute.
   *
   *
   */
  readonly name: string
  /**
   *	The [AttributeType](ctp:api:type:AttributeType) determines the format of the Attribute `value` to be provided:
   *
   *	- For [Enum Type](ctp:api:type:AttributeEnumType) and [Localized Enum Type](ctp:api:type:AttributeLocalizedEnumType),
   *	  use the `key` of the [Plain Enum Value](ctp:api:type:AttributePlainEnumValue) or [Localized Enum Value](ctp:api:type:AttributeLocalizedEnumValue) objects,
   *	  or the complete objects as `value`.
   *	- For [Localizable Text Type](ctp:api:type:AttributeLocalizableTextType), use the [LocalizedString](ctp:api:type:LocalizedString) object as `value`.
   *	- For [Money Type](ctp:api:type:AttributeMoneyType) Attributes, use the [Money](ctp:api:type:Money) object as `value`.
   *	- For [Set Type](ctp:api:type:AttributeSetType) Attributes, use the entire `set` object  as `value`.
   *	- For [Reference Type](ctp:api:type:AttributeReferenceType) Attributes, use the [Reference](ctp:api:type:Reference) object as `value`.
   *
   *	Tailoring of [Nested Type](ctp:api:type:AttributeNestedType) Attributes is not supported.
   *
   *
   */
  readonly value: any
}
/**
 *	Contains all the tailored data of a Product.
 *
 */
export interface ProductTailoringData {
  /**
   *	Tailored name of the Product.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	Tailored description of the Product.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Tailored title of the Product used by external search engines for improved search engine performance.
   *
   *
   */
  readonly metaTitle?: LocalizedString
  /**
   *	Tailored description of the Product used by external search engines for improved search engine performance.
   *
   *
   */
  readonly metaDescription?: LocalizedString
  /**
   *	Tailored keywords related to the Product used by external search engines for improved search engine performance.
   *
   *
   */
  readonly metaKeywords?: LocalizedString
  /**
   *	User-defined identifier used in a deep-link URL for the ProductTailoring.
   *	Matches the pattern `[a-zA-Z0-9_\\-]{2,256}`.
   *
   *
   */
  readonly slug?: LocalizedString
  /**
   *	Tailored Variants of the Product.
   *
   *
   */
  readonly variants?: ProductVariantTailoring[]
}
/**
 *	Contains all the tailored data of a Product.
 *
 */
export interface ProductTailoringDraft {
  /**
   *	User-defined unique identifier of the ProductTailoring.
   *
   *
   */
  readonly key?: string
  /**
   *	The Store to which the ProductTailoring belongs.
   *
   *
   */
  readonly store: StoreResourceIdentifier
  /**
   *	ResourceIdentifier of the Product the ProductTailoring belongs to.
   *
   *
   */
  readonly product: ProductResourceIdentifier
  /**
   *	Tailored name of the Product.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	Tailored description of the Product.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Tailored title of the Product used by external search engines for improved search engine performance.
   *
   *
   */
  readonly metaTitle?: LocalizedString
  /**
   *	Tailored description of the Product used by external search engines for improved search engine performance.
   *
   *
   */
  readonly metaDescription?: LocalizedString
  /**
   *	Tailored keywords related to the Product used by external search engines for improved search engine performance.
   *
   *
   */
  readonly metaKeywords?: LocalizedString
  /**
   *	User-defined identifier used in a deep-link URL for the ProductTailoring.
   *	Matches the pattern `[a-zA-Z0-9_\\-]{2,256}`.
   *
   *
   */
  readonly slug?: LocalizedString
  /**
   *	If `true`, the ProductTailoring is published immediately.
   *
   *
   */
  readonly publish?: boolean
  /**
   *	Tailored Variants of the Product.
   *
   *
   */
  readonly variants?: ProductVariantTailoringDraft[]
}
/**
 *	Contains all the tailored data of a Product for a specific Store.
 *
 */
export interface ProductTailoringInStoreDraft {
  /**
   *	User-defined unique identifier of the ProductTailoring.
   *
   *
   */
  readonly key?: string
  /**
   *	ResourceIdentifier of the Product the ProductTailoring belongs to.
   *
   *
   */
  readonly product: ProductResourceIdentifier
  /**
   *	Tailored name of the Product.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	Tailored description of the Product.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Tailored title of the Product used by external search engines for improved search engine performance.
   *
   *
   */
  readonly metaTitle?: LocalizedString
  /**
   *	Tailored description of the Product used by external search engines for improved search engine performance.
   *
   *
   */
  readonly metaDescription?: LocalizedString
  /**
   *	Tailored keywords related to the Product used by external search engines for improved search engine performance.
   *
   *
   */
  readonly metaKeywords?: LocalizedString
  /**
   *	User-defined identifier used in a deep-link URL for the ProductTailoring.
   *	Matches the pattern `[a-zA-Z0-9_\\-]{2,256}`.
   *
   *
   */
  readonly slug?: LocalizedString
  /**
   *	If `true`, the ProductTailoring is published immediately.
   *
   *
   */
  readonly publish?: boolean
  /**
   *	Tailored Variants of the Product.
   *
   *
   */
  readonly variants?: ProductVariantTailoringDraft[]
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [ProductTailoring](ctp:api:type:ProductTailoring).
 *
 */
export interface ProductTailoringPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *	Actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	Total number of results matching the query.
   *	This number is an estimation that is not [strongly consistent](/../api/general-concepts#strong-consistency).
   *	This field is returned by default.
   *	For improved performance, calculating this field can be deactivated by using the query parameter `withTotal=false`.
   *	When the results are filtered with a [Query Predicate](/../api/predicates/query), `total` is subject to a [limit](/../api/limits#queries).
   *
   *
   */
  readonly total?: number
  /**
   *	[ProductTailoring](ctp:api:type:ProductTailoring) list matching the query.
   *
   *
   */
  readonly results: ProductTailoring[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [ProductTailoring](ctp:api:type:ProductTailoring).
 *
 */
export interface ProductTailoringReference {
  readonly typeId: 'product-tailoring'
  /**
   *	Unique identifier of the referenced [ProductTailoring](ctp:api:type:ProductTailoring).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded ProductTailoring. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for ProductTailoring.
   *
   *
   */
  readonly obj?: ProductTailoring
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [ProductTailoring](ctp:api:type:ProductTailoring).
 *
 */
export interface ProductTailoringResourceIdentifier {
  readonly typeId: 'product-tailoring'
  /**
   *	Unique identifier of the referenced [ProductTailoring](ctp:api:type:ProductTailoring). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [ProductTailoring](ctp:api:type:ProductTailoring). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export type ProductTailoringUpdateAction =
  | ProductTailoringAddAssetAction
  | ProductTailoringAddExternalImageAction
  | ProductTailoringAddVariantAction
  | ProductTailoringChangeAssetNameAction
  | ProductTailoringChangeAssetOrderAction
  | ProductTailoringMoveImageToPositionAction
  | ProductTailoringPublishAction
  | ProductTailoringRemoveAssetAction
  | ProductTailoringRemoveImageAction
  | ProductTailoringRemoveVariantAction
  | ProductTailoringSetAssetCustomFieldAction
  | ProductTailoringSetAssetCustomTypeAction
  | ProductTailoringSetAssetDescriptionAction
  | ProductTailoringSetAssetKeyAction
  | ProductTailoringSetAssetSourcesAction
  | ProductTailoringSetAssetTagsAction
  | ProductTailoringSetAttributeAction
  | ProductTailoringSetAttributeInAllVariantsAction
  | ProductTailoringSetDescriptionAction
  | ProductTailoringSetExternalImagesAction
  | ProductTailoringSetImageLabelAction
  | ProductTailoringSetMetaAttributesAction
  | ProductTailoringSetMetaDescriptionAction
  | ProductTailoringSetMetaKeywordsAction
  | ProductTailoringSetMetaTitleAction
  | ProductTailoringSetNameAction
  | ProductTailoringSetSlugAction
  | ProductTailoringUnpublishAction
/**
 *	The tailoring of a [ProductVariant](ctp:api:type:ProductVariant).
 *
 */
export interface ProductVariantTailoring {
  /**
   *	The `id` of the tailored [ProductVariant](ctp:api:type:ProductVariant).
   *
   *
   */
  readonly id: number
  /**
   *	Images of the tailored Product Variant.
   *	If present, these images will override the images of the corresponding [ProductVariant](ctp:api:type:ProductVariant) in total.
   *
   *
   */
  readonly images?: Image[]
  /**
   *	Media assets of the tailored Product Variant.
   *	If present, these assets will override the assets of the corresponding [ProductVariant](ctp:api:type:ProductVariant) in total.
   *
   *
   */
  readonly assets?: Asset[]
  /**
   *	Attributes of the tailored Product Variant.
   *	If present, these Attributes are selectively merged into the `attributes` of the corresponding [ProductVariant](ctp:api:type:ProductVariant):
   *
   *	- If the ProductVariant contains an Attribute with the same `name`, its `value` is overwritten,
   *	- otherwise the Attribute and its value are added to the ProductVariant.
   *
   *
   */
  readonly attributes?: ProductTailoringAttribute[]
}
/**
 *	Either `id` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *
 */
export interface ProductVariantTailoringDraft {
  /**
   *	The `id` of the [ProductVariant](ctp:api:type:ProductVariant) to be tailored.
   *
   *
   */
  readonly id?: number
  /**
   *	The `sku` of the [ProductVariant](ctp:api:type:ProductVariant) to be tailored.
   *
   *
   */
  readonly sku?: string
  /**
   *	Images of the tailored Product Variant.
   *
   *
   */
  readonly images?: Image[]
  /**
   *	Media assets of the tailored Product Variant.
   *
   *
   */
  readonly assets?: Asset[]
  /**
   *	Attributes of the tailored Product Variant according to the respective [AttributeDefinition](ctp:api:type:AttributeDefinition).
   *	If provided, these Attributes are selectively merged into the `attributes` of the corresponding [ProductVariant](ctp:api:type:ProductVariant):
   *
   *	- If the ProductVariant contains an Attribute with the same `name`, its `value` is overwritten,
   *	- otherwise the Attribute and its value are added to the ProductVariant.
   *
   *
   */
  readonly attributes?: ProductTailoringAttribute[]
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *
 */
export interface ProductTailoringAddAssetAction {
  readonly action: 'addAsset'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged `assets` are updated. If `false`, both the current and staged `assets` are updated.
   *
   *
   */
  readonly staged?: boolean
  /**
   *	Value to append.
   *
   *
   */
  readonly asset: AssetDraft
  /**
   *	Position in `assets` where the Asset should be put. When specified, the value must be between `0` and the total number of Assets minus `1`.
   *
   *
   */
  readonly position?: number
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists. Produces the [ProductTailoringImageAdded](/projects/messages/product-catalog-messages#product-tailoring-image-added) Message.
 *
 */
export interface ProductTailoringAddExternalImageAction {
  readonly action: 'addExternalImage'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	Value to add to `images`.
   *
   *
   */
  readonly image: Image
  /**
   *	If `true`, only the staged `images` is updated. If `false`, both the current and staged `images` is updated.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Either `id` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *	Produces the [ProductVariantTailoringAdded](ctp:api:type:ProductVariantTailoringAddedMessage) Message.
 *
 */
export interface ProductTailoringAddVariantAction {
  readonly action: 'addVariant'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly id?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	Images for the Product Variant Tailoring.
   *
   *
   */
  readonly images?: Image[]
  /**
   *	Media assets for the Product Variant Tailoring.
   *
   *
   */
  readonly assets?: AssetDraft[]
  /**
   *	Attributes for the Product Variant Tailoring.
   *
   *
   */
  readonly attributes?: ProductTailoringAttribute[]
  /**
   *	If `true` the new Product Variant Tailoring is only staged. If `false` the new Product Variant Tailoring is both current and staged.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *	The Asset to update must be specified using either `assetId` or `assetKey`.
 *
 */
export interface ProductTailoringChangeAssetNameAction {
  readonly action: 'changeAssetName'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged Asset is updated. If `false`, both the current and staged Asset is updated.
   *
   *
   */
  readonly staged?: boolean
  /**
   *	The `id` of the Asset to update.
   *
   *
   */
  readonly assetId?: string
  /**
   *	The `key` of the Asset to update.
   *
   *
   */
  readonly assetKey?: string
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly name: LocalizedString
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *
 */
export interface ProductTailoringChangeAssetOrderAction {
  readonly action: 'changeAssetOrder'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged `assets` is updated. If `false`, both the current and staged `assets` are updated.
   *
   *
   */
  readonly staged?: boolean
  /**
   *	All existing Asset `id`s of the ProductVariantTailoring in the desired new order.
   *
   *
   */
  readonly assetOrder: string[]
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *
 */
export interface ProductTailoringMoveImageToPositionAction {
  readonly action: 'moveImageToPosition'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	The URL of the image to update.
   *
   *
   */
  readonly imageUrl: string
  /**
   *	Position in `images` where the image should be moved. Must be between `0` and the total number of images minus `1`.
   *
   *
   */
  readonly position: number
  /**
   *	If `true`, only the staged `images` is updated. If `false`, both the current and staged `images` is updated.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Publishes the `staged` data of the ProductTailoring to `current`. Sets `hasStagedChanges` to `false`.
 *	Generates the [ProductTailoringPublished](ctp:api:type:ProductTailoringPublishedMessage) Message.
 *
 */
export interface ProductTailoringPublishAction {
  readonly action: 'publish'
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *	The Asset to remove must be specified using either `assetId` or `assetKey`.
 *
 */
export interface ProductTailoringRemoveAssetAction {
  readonly action: 'removeAsset'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged Asset is removed. If `false`, both the current and staged Asset is removed.
   *
   *
   */
  readonly staged?: boolean
  /**
   *	The `id` of the Asset to remove.
   *
   *
   */
  readonly assetId?: string
  /**
   *	The `key` of the Asset to remove.
   *
   *
   */
  readonly assetKey?: string
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *
 */
export interface ProductTailoringRemoveImageAction {
  readonly action: 'removeImage'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	The URL of the image to remove.
   *
   *
   */
  readonly imageUrl: string
  /**
   *	If `true`, only the staged image is removed. If `false`, both the current and staged image is removed.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Either `id` or `sku` is required.
 *	Produces the [ProductVariantTailoringDeleted](ctp:api:type:ProductVariantTailoringRemovedMessage) Message.
 *
 */
export interface ProductTailoringRemoveVariantAction {
  readonly action: 'removeVariant'
  /**
   *	The `id` of the ProductVariant to remove from the Tailoring.
   *
   *
   */
  readonly id?: number
  /**
   *	The `sku` of the ProductVariant to remove from the Tailoring.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged Product Variant Tailoring is removed. If `false`, both the current and staged Product Variant Tailoring is removed.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *	The [Asset](ctp:api:type:Asset) to update must be specified using either `assetId` or `assetKey`.
 *
 */
export interface ProductTailoringSetAssetCustomFieldAction {
  readonly action: 'setAssetCustomField'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged Asset is updated. If `false`, both the current and staged Asset is updated.
   *
   *
   */
  readonly staged?: boolean
  /**
   *	The `id` of the Asset to update.
   *
   *
   */
  readonly assetId?: string
  /**
   *	The `key` of the Asset to update.
   *
   *
   */
  readonly assetKey?: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Removing a field that does not exist returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *	The [Asset](ctp:api:type:Asset) to update must be specified using either `assetId` or `assetKey`.
 *
 */
export interface ProductTailoringSetAssetCustomTypeAction {
  readonly action: 'setAssetCustomType'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged Asset is updated. If `false`, both the current and staged Asset is updated.
   *
   *
   */
  readonly staged?: boolean
  /**
   *	The `id` of the Asset to update.
   *
   *
   */
  readonly assetId?: string
  /**
   *	The `key` of the Asset to update.
   *
   *
   */
  readonly assetKey?: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Asset with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Asset.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Asset.
   *
   *
   */
  readonly fields?: FieldContainer
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *	The [Asset](ctp:api:type:Asset) to update must be specified using either `assetId` or `assetKey`.
 *
 */
export interface ProductTailoringSetAssetDescriptionAction {
  readonly action: 'setAssetDescription'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged Asset is updated. If `false`, both the current and staged Asset is updated.
   *
   *
   */
  readonly staged?: boolean
  /**
   *	The `id` of the Asset to update.
   *
   *
   */
  readonly assetId?: string
  /**
   *	The `key` of the Asset to update.
   *
   *
   */
  readonly assetKey?: string
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly description?: LocalizedString
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *
 */
export interface ProductTailoringSetAssetKeyAction {
  readonly action: 'setAssetKey'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged Asset is updated. If `false`, both the current and staged Asset is updated.
   *
   *
   */
  readonly staged?: boolean
  /**
   *	The `id` of the Asset to update.
   *
   *
   */
  readonly assetId: string
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly assetKey?: string
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *	The [Asset](ctp:api:type:Asset) to update must be specified using either `assetId` or `assetKey`.
 *
 */
export interface ProductTailoringSetAssetSourcesAction {
  readonly action: 'setAssetSources'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged Asset is updated. If `false` both the current and staged Asset is updated.
   *
   *
   */
  readonly staged?: boolean
  /**
   *	The `id` of the Asset to update.
   *
   *
   */
  readonly assetId?: string
  /**
   *	The `key` of the Asset to update.
   *
   *
   */
  readonly assetKey?: string
  /**
   *	Value to set.
   *
   *
   */
  readonly sources: AssetSource[]
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *	The Asset to update must be specified using either `assetId` or `assetKey`.
 *
 */
export interface ProductTailoringSetAssetTagsAction {
  readonly action: 'setAssetTags'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	If `true`, only the staged Asset is updated. If `false`, both the current and staged Asset is updated.
   *
   *
   */
  readonly staged?: boolean
  /**
   *	The `id` of the Asset to update.
   *
   *
   */
  readonly assetId?: string
  /**
   *	The `key` of the Asset to update.
   *
   *
   */
  readonly assetKey?: string
  /**
   *	Keywords for categorizing and organizing Assets.
   *
   *
   */
  readonly tags?: string[]
}
/**
 *	Either `variantId` or `sku` is required.
 *
 */
export interface ProductTailoringSetAttributeAction {
  readonly action: 'setAttribute'
  /**
   *	The `id` of the ProductVariant to update.
   *	Required if `sku` is absent.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the ProductVariant to update.
   *	Required if `variantId` is absent.
   *
   *
   */
  readonly sku?: string
  /**
   *	The name of the Attribute to set.
   *
   *
   */
  readonly name: string
  /**
   *	Value to set for the Attribute. If empty, any existing value will be removed.
   *
   *	The [AttributeType](ctp:api:type:AttributeType) determines the format of the Attribute `value` to be provided:
   *
   *	- For [Enum Type](ctp:api:type:AttributeEnumType) and [Localized Enum Type](ctp:api:type:AttributeLocalizedEnumType),
   *	  use the `key` of the [Plain Enum Value](ctp:api:type:AttributePlainEnumValue) or [Localized Enum Value](ctp:api:type:AttributeLocalizedEnumValue) objects,
   *	  or the complete objects as `value`.
   *	- For [Localizable Text Type](ctp:api:type:AttributeLocalizableTextType), use the [LocalizedString](ctp:api:type:LocalizedString) object as `value`.
   *	- For [Money Type](ctp:api:type:AttributeMoneyType) Attributes, use the [Money](ctp:api:type:Money) object as `value`.
   *	- For [Set Type](ctp:api:type:AttributeSetType) Attributes, use the entire `set` object  as `value`.
   *	- For [Reference Type](ctp:api:type:AttributeReferenceType) Attributes, use the [Reference](ctp:api:type:Reference) object as `value`.
   *
   *	Tailoring of [Nested Type](ctp:api:type:AttributeNestedType) Attributes is **not supported**.
   *
   *
   */
  readonly value?: any
  /**
   *	If `true`, only the staged Attribute is set. If `false`, both current and staged Attribute is set.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Adds, removes, or changes a tailored Attribute in all Product Variants of a Product at the same time.
 *	This action is useful for setting tailored values for Attributes with the [Constraint](ctp:api:type:AttributeConstraintEnum) `SameForAll`.
 */
export interface ProductTailoringSetAttributeInAllVariantsAction {
  readonly action: 'setAttributeInAllVariants'
  /**
   *	The name of the Attribute to set.
   *
   *
   */
  readonly name: string
  /**
   *	Value to set for the Attributes. If empty, any existing value will be removed.
   *
   *	The [AttributeType](ctp:api:type:AttributeType) determines the format of the Attribute `value` to be provided:
   *
   *	- For [Enum Type](ctp:api:type:AttributeEnumType) and [Localized Enum Type](ctp:api:type:AttributeLocalizedEnumType),
   *	  use the `key` of the [Plain Enum Value](ctp:api:type:AttributePlainEnumValue) or [Localized Enum Value](ctp:api:type:AttributeLocalizedEnumValue) objects,
   *	  or the complete objects as `value`.
   *	- For [Localizable Text Type](ctp:api:type:AttributeLocalizableTextType), use the [LocalizedString](ctp:api:type:LocalizedString) object as `value`.
   *	- For [Money Type](ctp:api:type:AttributeMoneyType) Attributes, use the [Money](ctp:api:type:Money) object as `value`.
   *	- For [Set Type](ctp:api:type:AttributeSetType) Attributes, use the entire `set` object  as `value`.
   *	- For [Reference Type](ctp:api:type:AttributeReferenceType) Attributes, use the [Reference](ctp:api:type:Reference) object as `value`.
   *
   *	Tailoring of [Nested Type](ctp:api:type:AttributeNestedType) Attributes is **not supported**.
   *
   *
   */
  readonly value?: any
  /**
   *	If `true`, only the staged Attributes are set. If `false`, both the current and staged Attributes are set.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Generates the [ProductTailoringDescriptionSet](ctp:api:type:ProductTailoringDescriptionSetMessage) Message.
 *
 */
export interface ProductTailoringSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	If `true`, only the staged `description` is updated. If `false`, both the current and staged `description` are updated.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists. Produces the [ProductTailoringImagesSet](/projects/messages/product-catalog-messages#product-tailoring-images-set) Message.
 *
 */
export interface ProductTailoringSetExternalImagesAction {
  readonly action: 'setImages'
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	Value to set to `images`.
   *
   *
   */
  readonly images: Image[]
  /**
   *	If `true`, only the staged `images` is updated. If `false`, both the current and staged `images` is updated.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Either `variantId` or `sku` is required to reference a [ProductVariant](ctp:api:type:ProductVariant) that exists.
 *
 */
export interface ProductTailoringSetImageLabelAction {
  readonly action: 'setImageLabel'
  /**
   *	The `sku` of the tailored ProductVariant to update.
   *
   *
   */
  readonly sku?: string
  /**
   *	The `id` of the tailored ProductVariant to update.
   *
   *
   */
  readonly variantId?: number
  /**
   *	The URL of the image to set the label.
   *
   *
   */
  readonly imageUrl: string
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly label?: string
  /**
   *	If `true`, only the staged image is updated. If `false`, both the current and staged image is updated.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Updates all meta attributes at the same time.
 */
export interface ProductTailoringSetMetaAttributesAction {
  readonly action: 'setMetaAttributes'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly metaTitle?: LocalizedString
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly metaDescription?: LocalizedString
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly metaKeywords?: LocalizedString
  /**
   *	If `true`, only the staged attributes are updated. If `false`, both the current and staged attributes are updated.
   *
   *
   */
  readonly staged?: boolean
}
export interface ProductTailoringSetMetaDescriptionAction {
  readonly action: 'setMetaDescription'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly metaDescription?: LocalizedString
  /**
   *	If `true`, only the staged `metaDescription` is updated. If `false`, both the current and staged `metaDescription` are updated.
   *
   *
   */
  readonly staged?: boolean
}
export interface ProductTailoringSetMetaKeywordsAction {
  readonly action: 'setMetaKeywords'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly metaKeywords?: LocalizedString
  /**
   *	If `true`, only the staged `metaKeywords` is updated. If `false`, both the current and staged `metaKeywords` are updated.
   *
   *
   */
  readonly staged?: boolean
}
export interface ProductTailoringSetMetaTitleAction {
  readonly action: 'setMetaTitle'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly metaTitle?: LocalizedString
  /**
   *	If `true`, only the staged `metaTitle` is updated. If `false`, both the current and staged `metaTitle` are updated.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Generates the [ProductTailoringNameSet](ctp:api:type:ProductTailoringNameSetMessage) Message.
 *
 */
export interface ProductTailoringSetNameAction {
  readonly action: 'setName'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	If `true`, only the staged `name` is updated. If `false`, both the current and staged `name` are updated.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Generates the [ProductTailoringSlugSet](ctp:api:type:ProductTailoringSlugSetMessage) Message.
 *
 */
export interface ProductTailoringSetSlugAction {
  readonly action: 'setSlug'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly slug?: LocalizedString
  /**
   *	If `true`, only the staged `slug` is updated. If `false`, both the current and staged `slug` are updated.
   *
   *
   */
  readonly staged?: boolean
}
/**
 *	Unpublishes the `current` data of the ProductTailoring. Sets the `published` field to `false`.
 *	Generates the [ProductTailoringUnpublished](ctp:api:type:ProductTailoringUnpublishedMessage) Message.
 *
 */
export interface ProductTailoringUnpublishAction {
  readonly action: 'unpublish'
}
