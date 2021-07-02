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
  Asset,
  CategoryKeyReference,
  ImportResource,
  LocalizedString,
} from './common'
import { Custom } from './customfields'

/**
 *	The data representation for a Category to be imported that is persisted as a [Category](/../api/projects/categories#category) in the Project.
 *
 */
export interface CategoryImport extends ImportResource {
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
   *	The Reference to the parent [Category](/../api/projects/categories#category) with which the Category is associated.
   *	If referenced Category does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary Category is created.
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
   *
   */
  readonly assets?: Asset[]
  /**
   *	The custom fields for this Category.
   *
   */
  readonly custom?: Custom
}
