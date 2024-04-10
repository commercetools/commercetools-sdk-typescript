/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  CartDiscountKeyReference,
  ImportResource,
  LocalizedString,
} from './common'
import { Custom } from './customfields'

/**
 *	The data representation for a Discount Code to be imported that is persisted as a [Discount Code](/../api/projects/discountCodes#discountcode) in the Project.
 *
 */
export interface DiscountCodeImport extends ImportResource {
  /**
   *	User-defined unique identifier. If a [Discount Code](/../api/projects/discountCodes#discountcode) with this `key` exists, it will be updated with the imported data.
   *
   *
   */
  readonly key: string
  /**
   *	Maps to `DiscountCode.name`.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	Maps to `DiscountCode.description`.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	User-defined unique identifier of the DiscountCode that is used by the customer to apply the discount.
   *
   *
   */
  readonly code: string
  /**
   *	Reference to CartDiscounts that can be applied to the Cart once the DiscountCode is applied.
   *
   *
   */
  readonly cartDiscounts: CartDiscountKeyReference[]
  /**
   *	DiscountCode can only be applied to Carts that match this predicate.
   *
   *
   */
  readonly cartPredicate?: string
  /**
   *	Indicates if the DiscountCode is active and can be applied to the Cart.
   *
   *
   */
  readonly isActive: boolean
  /**
   *	Number of times the DiscountCode can be applied. DiscountCode application is counted at the time of Order creation or update. However, Order cancellation or deletion does not decrement the count.
   *
   *
   */
  readonly maxApplications?: number
  /**
   *	Number of times the DiscountCode can be applied per Customer (anonymous Carts are not supported). DiscountCode application is counted at the time of Order creation or update. However, Order cancellation or deletion does not decrement the count.
   *
   *
   */
  readonly maxApplicationsPerCustomer?: number
  /**
   *	Groups to which the DiscountCode belongs.
   *
   *
   */
  readonly groups?: string[]
  /**
   *	Date and time (UTC) from which the DiscountCode is effective.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Date and time (UTC) until which the DiscountCode is effective.
   *
   *
   */
  readonly validUntil?: string
  /**
   *	Custom Fields of the DiscountCode.
   *
   *
   */
  readonly custom?: Custom
}