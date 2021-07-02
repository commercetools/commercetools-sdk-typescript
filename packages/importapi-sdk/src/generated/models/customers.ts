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
  CustomerGroupKeyReference,
  ImportResource,
  StoreKeyReference,
} from './common'
import { Custom } from './customfields'

/**
 *	Different from Address in that `key` is required and `id` is not supported.
 *
 */
export interface CustomerAddress {
  /**
   *	User-defined identifier for the address.
   *	Must follow the pattern `[a-zA-Z0-9_\-]{2,256}` and must be unique per customer.
   *
   *
   */
  readonly key: string
  /**
   *
   */
  readonly title?: string
  /**
   *
   */
  readonly salutation?: string
  /**
   *
   */
  readonly firstName?: string
  /**
   *
   */
  readonly lastName?: string
  /**
   *
   */
  readonly streetName?: string
  /**
   *
   */
  readonly streetNumber?: string
  /**
   *
   */
  readonly additionalStreetInfo?: string
  /**
   *
   */
  readonly postalCode?: string
  /**
   *
   */
  readonly city?: string
  /**
   *
   */
  readonly region?: string
  /**
   *
   */
  readonly state?: string
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   *
   */
  readonly country: string
  /**
   *
   */
  readonly company?: string
  /**
   *
   */
  readonly department?: string
  /**
   *
   */
  readonly building?: string
  /**
   *
   */
  readonly apartment?: string
  /**
   *
   */
  readonly pOBox?: string
  /**
   *
   */
  readonly phone?: string
  /**
   *
   */
  readonly mobile?: string
  /**
   *
   */
  readonly email?: string
  /**
   *
   */
  readonly fax?: string
  /**
   *
   */
  readonly additionalAddressInfo?: string
  /**
   *
   */
  readonly externalId?: string
}
/**
 *	The data representation for a Customer to be imported that is persisted as a [Customer](/../api/projects/customers#top) in the Project.
 *
 */
export interface CustomerImport extends ImportResource {
  /**
   *	Maps to `Customer.customerNumber`.
   *
   *
   */
  readonly customerNumber?: string
  /**
   *	Maps to `Customer.email`.
   *
   *
   */
  readonly email: string
  /**
   *	Maps to `Customer.password`.
   *
   *
   */
  readonly password: string
  /**
   *	The References to the Stores with which the Customer is associated. If referenced Stores do not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary Stores are created.
   *
   *
   */
  readonly stores?: StoreKeyReference[]
  /**
   *	Maps to `Customer.firstName`.
   *
   *
   */
  readonly firstName?: string
  /**
   *	Maps to `Customer.lastName`.
   *
   *
   */
  readonly lastName?: string
  /**
   *	Maps to `Customer.middleName`.
   *
   *
   */
  readonly middleName?: string
  /**
   *	Maps to `Customer.title`.
   *
   *
   */
  readonly title?: string
  /**
   *	Maps to `Customer.salutation`.
   *
   *
   */
  readonly salutation?: string
  /**
   *	Maps to `Customer.externalId`.
   *
   *
   */
  readonly externalId?: string
  /**
   *	Maps to `Customer.dateOfBirth`.
   *
   *
   */
  readonly dateOfBirth?: string
  /**
   *	Maps to `Customer.companyName`.
   *
   *
   */
  readonly companyName?: string
  /**
   *	Maps to `Customer.vatId`.
   *
   *
   */
  readonly vatId?: string
  /**
   *	Maps to `Customer.isEmailVerified`.
   *
   *
   */
  readonly isEmailVerified?: boolean
  /**
   *	The Reference to the [CustomerGroup](/../api/projects/customerGroups#customergroup) with which the Customer is associated.
   *	If referenced CustomerGroup does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `Unresolved` until the necessary CustomerGroup is created.
   *
   *
   */
  readonly customerGroup?: CustomerGroupKeyReference
  /**
   *	Maps to `Customer.addresses`.
   *
   *
   */
  readonly addresses: CustomerAddress[]
  /**
   *	The index of the address in the addresses array. The `defaultBillingAddressId` of the customer will be set to the ID of that address.
   *
   *
   */
  readonly defaultBillingAddress?: number
  /**
   *	The indices of the billing addresses in the addresses array. The `billingAddressIds` of the customer will be set to the IDs of that addresses.
   *
   *
   */
  readonly billingAddresses?: number[]
  /**
   *	The index of the address in the addresses array. The `defaultShippingAddressId` of the customer will be set to the ID of that address.
   *
   *
   */
  readonly defaultShippingAddress?: number
  /**
   *	The indices of the shipping addresses in the addresses array. The `shippingAddressIds` of the customer will be set to the IDs of that addresses.
   *
   *
   */
  readonly shippingAddresses?: number[]
  /**
   *	Maps to `Customer.locale`.
   *
   *
   */
  readonly locale?: string
  /**
   *	The custom fields for this Customer.
   *
   */
  readonly custom?: Custom
}
