/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  ChannelKeyReference,
  CustomerGroupKeyReference,
  DiscountedPrice,
  ImportResource,
  PriceTier,
  TypedMoney,
} from './common'
import { Custom } from './customfields'

/**
 *	The data representation for a Standalone Price to be imported that is persisted as a [Standalone Price](ctp:api:type:StandalonePrice)) in the Project.
 *
 */
export interface StandalonePriceImport extends ImportResource {
  /**
   *	User-defined unique identifier for the Standalone Price. If a [StandalonePrice](ctp:api:type:StandalonePrice)) with this `key` exists, it will be updated with the imported data.
   *
   *
   */
  readonly key: string
  /**
   *	Identifies the ProductVariant to which this Standalone Price is associated. This value is not validated to exist in Product Variants.
   *
   *
   */
  readonly sku: string
  /**
   *	Sets the money value of this Price.
   *
   *
   */
  readonly value: TypedMoney
  /**
   *	Sets the country for this Price, if the Price does not yet have a country.
   *
   *	The country cannot be updated. Attempting to update the an existing country will result in an [InvalidFieldsUpdate](/import-export/error#invalidfieldsupdateerror) error.
   *
   *
   */
  readonly country?: string
  /**
   *	Sets the CustomerGroup for this Price, if the Price does not yet have a CustomerGroup.
   *
   *	The CustomerGroup cannot be updated. Attempting to update an existing CustomerGroup will result in an [InvalidFieldsUpdate](/import-export/error#invalidfieldsupdateerror) error.
   *
   *
   */
  readonly customerGroup?: CustomerGroupKeyReference
  /**
   *	Sets the product distribution Channel for this Price, if the Price does not yet have a Channel.
   *
   *	The Channel cannot be updated. Attempting to update an existing Channel will result in an [InvalidFieldsUpdate](/import-export/error#invalidfieldsupdateerror) error.
   *
   *
   */
  readonly channel?: ChannelKeyReference
  /**
   *	Sets the date from which the Price is valid.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Sets the date until the Price is valid.
   *
   *
   */
  readonly validUntil?: string
  /**
   *	Sets price tiers.
   *
   */
  readonly tiers?: PriceTier[]
  /**
   *	Sets a discounted price for this Price that is different from the base price with value.
   *
   */
  readonly discounted?: DiscountedPrice
  /**
   *	Custom Fields for the StandalonePrice.
   *
   */
  readonly custom?: Custom
}
