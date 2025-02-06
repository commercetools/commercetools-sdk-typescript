/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  CustomerGroupKeyReference,
  ImportResource,
  StoreKeyReference,
} from './common'
import { Custom } from './customfields'

export enum AuthenticationModeValues {
  ExternalAuth = 'ExternalAuth',
  Password = 'Password',
}

export type AuthenticationMode = 'ExternalAuth' | 'Password' | string
/**
 *	Different from [Address](/types#address) in that `key` is required and `id` is not supported.
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
   *	Name of the country.
   *
   *
   */
  readonly country: string
  /**
   *	Title of the contact, for example 'Dr.'
   *
   *
   */
  readonly title?: string
  /**
   *	Salutation of the contact, for example 'Mr.' or 'Ms.'
   *
   *
   */
  readonly salutation?: string
  /**
   *	Given name (first name) of the contact.
   *
   *
   */
  readonly firstName?: string
  /**
   *	Family name (last name) of the contact.
   *
   *
   */
  readonly lastName?: string
  /**
   *	Name of the street.
   *
   *
   */
  readonly streetName?: string
  /**
   *	Street number.
   *
   *
   */
  readonly streetNumber?: string
  /**
   *	Further information on the street address.
   *
   *
   */
  readonly additionalStreetInfo?: string
  /**
   *	Postal code.
   *
   *
   */
  readonly postalCode?: string
  /**
   *	Name of the city.
   *
   *
   */
  readonly city?: string
  /**
   *	Name of the region.
   *
   *
   */
  readonly region?: string
  /**
   *	Name of the state, for example, Colorado.
   *
   *
   */
  readonly state?: string
  /**
   *	Name of the company.
   *
   *
   */
  readonly company?: string
  /**
   *	Name of the department.
   *
   *
   */
  readonly department?: string
  /**
   *	Number or name of the building.
   *
   *
   */
  readonly building?: string
  /**
   *	Number or name of the apartment.
   *
   *
   */
  readonly apartment?: string
  /**
   *	Post office box number.
   *
   *
   */
  readonly pOBox?: string
  /**
   *	Phone number of the contact.
   *
   *
   */
  readonly phone?: string
  /**
   *	Mobile phone number of the contact.
   *
   *
   */
  readonly mobile?: string
  /**
   *	Email address of the contact.
   *
   *
   */
  readonly email?: string
  /**
   *	Fax number of the contact.
   *
   *
   */
  readonly fax?: string
  /**
   *	Further information on the Address.
   *
   *
   */
  readonly additionalAddressInfo?: string
  /**
   *	ID for the contact used in an external system.
   *
   *
   */
  readonly externalId?: string
  /**
   *	Custom Fields for the address.
   *
   */
  readonly custom?: Custom
}
/**
 *	The data representation for a Customer to be imported that is persisted as a [Customer](ctp:api:type:Customer) in the Project.
 *
 */
export interface CustomerImport extends ImportResource {
  /**
   *	User-defined unique identifier. If a [Customer](ctp:api:type:Customer) with this `key` exists, it will be updated with the imported data.
   *
   */
  readonly key: string
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
   *	Required when `authenticationMode` is set to `Password`. Maps to `Customer.password`.
   *
   *
   */
  readonly password?: string
  /**
   *	The References to the Stores with which the Customer is associated. If referenced Stores do not exist, the `state` of the [ImportOperation](ctp:import:type:ImportOperation) will be set to `unresolved` until the necessary Stores are created.
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
   *	The Reference to the [CustomerGroup](ctp:api:type:CustomerGroup) with which the Customer is associated.
   *	If referenced CustomerGroup does not exist, the `state` of the [ImportOperation](ctp:import:type:ImportOperation) will be set to `unresolved` until the necessary CustomerGroup is created.
   *
   *
   */
  readonly customerGroup?: CustomerGroupKeyReference
  /**
   *	Maps to `Customer.addresses`.
   *
   *
   */
  readonly addresses?: CustomerAddress[]
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
   *	The Custom Fields for this Customer.
   *
   *
   */
  readonly custom?: Custom
  /**
   *	- Set to `Password` to make the `password` field required for the Customer.
   *	- Set to `ExternalAuth` when the password is not required for the Customer.
   *
   *
   */
  readonly authenticationMode?: AuthenticationMode
}
