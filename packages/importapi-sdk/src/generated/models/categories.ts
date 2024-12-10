/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  Asset,
  CategoryKeyReference,
  ImportResource,
  LocalizedString,
} from './common'
import { Custom } from './customfields'

/**
 *	The data representation for a Category to be imported that is persisted as a [Category](ctp:api:type:Category) in the Project.
 *
 */
export interface CategoryImport extends ImportResource {
  /**
   *	User-defined unique identifier. If a [Category](ctp:api:type:Category) with this `key` exists, it will be updated with the imported data.
   *
   */
  readonly key: string
  /**
   *	Maps to `Category.name`.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	Maps to `Category.slug`.
   *	Must match the pattern `[-a-zA-Z0-9_]{2,256}`.
   *
   *
   */
  readonly slug: LocalizedString
  /**
   *	Maps to `Category.description`.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Maps to `Category.parent`.
   *	The Reference to the parent [Category](ctp:api:type:Category) with which the Category is associated.
   *	If referenced Category does not exist, the `state` of the [ImportOperation](ctp:import:type:ImportOperation) will be set to `unresolved` until the necessary Category is created.
   *
   *
   */
  readonly parent?: CategoryKeyReference
  /**
   *	Maps to `Category.orderHint`.
   *
   *
   */
  readonly orderHint?: string
  /**
   *	Maps to `Category.externalId`.
   *
   *
   */
  readonly externalId?: string
  /**
   *	Maps to `Category.metaTitle`.
   *
   *
   */
  readonly metaTitle?: LocalizedString
  /**
   *	Maps to `Category.metaDescription`.
   *
   *
   */
  readonly metaDescription?: LocalizedString
  /**
   *	Maps to `Category.metaKeywords`.
   *
   *
   */
  readonly metaKeywords?: LocalizedString
  /**
   *	Maps to `Category.assets`.
   *
   *
   */
  readonly assets?: Asset[]
  /**
   *	The custom fields for this Category.
   *
   */
  readonly custom?: Custom
}
