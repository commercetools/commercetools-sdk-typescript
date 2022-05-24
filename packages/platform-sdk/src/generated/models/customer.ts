/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { Cart, CartResourceIdentifier } from './cart'
import {
  Address,
  BaseAddress,
  BaseResource,
  CreatedBy,
  LastModifiedBy,
} from './common'
import {
  CustomerGroupReference,
  CustomerGroupResourceIdentifier,
} from './customer-group'
import { StoreKeyReference, StoreResourceIdentifier } from './store'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export type AnonymousCartSignInMode =
  | 'MergeWithExistingCustomerCart'
  | 'UseAsNewActiveCustomerCart'
export type AuthenticationMode = 'ExternalAuth' | 'Password'
export interface Customer extends BaseResource {
  /**
   *	Unique identifier of the Customer.
   *
   */
  readonly id: string
  /**
   *	The current version of the customer.
   *
   */
  readonly version: number
  /**
   *
   */
  readonly createdAt: string
  /**
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	The customer number can be used to create a more human-readable (in contrast to ID) identifier for the customer.
   *	It should be unique across a project.
   *	Once the field was set it cannot be changed anymore.
   *
   */
  readonly customerNumber?: string
  /**
   *	The customer's email address and the main identifier of uniqueness for a customer account.
   *	Email addresses are either unique to the store they're specified for, _or_ for the entire project.
   *	For more information, see Email uniquenes.
   *
   */
  readonly email: string
  /**
   *	Only present with the default `authenticationMode`, `Password`.
   *
   */
  readonly password?: string
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
  readonly middleName?: string
  /**
   *
   */
  readonly title?: string
  /**
   *
   */
  readonly dateOfBirth?: string
  /**
   *
   */
  readonly companyName?: string
  /**
   *
   */
  readonly vatId?: string
  /**
   *	The addresses have unique IDs in the addresses list
   *
   */
  readonly addresses: Address[]
  /**
   *	The address ID in the addresses list
   *
   */
  readonly defaultShippingAddressId?: string
  /**
   *	The IDs from the addresses list which are used as shipping addresses
   *
   */
  readonly shippingAddressIds?: string[]
  /**
   *	The address ID in the addresses list
   *
   */
  readonly defaultBillingAddressId?: string
  /**
   *	The IDs from the addresses list which are used as billing addresses
   *
   */
  readonly billingAddressIds?: string[]
  /**
   *
   */
  readonly isEmailVerified: boolean
  /**
   *
   */
  readonly externalId?: string
  /**
   *
   */
  readonly customerGroup?: CustomerGroupReference
  /**
   *
   */
  readonly custom?: CustomFields
  /**
   *
   */
  readonly locale?: string
  /**
   *
   */
  readonly salutation?: string
  /**
   *	User-defined unique identifier of the Customer.
   *
   */
  readonly key?: string
  /**
   *	References to the stores the customer account is associated with.
   *	If no stores are specified, the customer is a global customer, and can log in using the Password Flow for global Customers.
   *	If one or more stores are specified, the customer can only log in using the Password Flow for Customers in a Store for those specific stores.
   *
   */
  readonly stores?: StoreKeyReference[]
  /**
   *	Defines whether a Customer has a password.
   *
   */
  readonly authenticationMode?: AuthenticationMode
}
export interface CustomerChangePassword {
  /**
   *	Unique identifier of the Customer.
   *
   */
  readonly id: string
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly currentPassword: string
  /**
   *
   */
  readonly newPassword: string
}
export interface CustomerCreateEmailToken {
  /**
   *	Unique identifier of the email token.
   *
   */
  readonly id: string
  /**
   *
   */
  readonly version?: number
  /**
   *
   */
  readonly ttlMinutes: number
}
export interface CustomerCreatePasswordResetToken {
  /**
   *
   */
  readonly email: string
  /**
   *
   */
  readonly ttlMinutes?: number
}
export interface CustomerDraft {
  /**
   *	String that uniquely identifies a customer.
   *	It can be used to create more human-readable (in contrast to ID) identifier for the customer.
   *	It should be **unique** across a project.
   *	Once it's set it cannot be changed.
   *
   */
  readonly customerNumber?: string
  /**
   *	The customer's email address and the main identifier of uniqueness for a customer account.
   *	Email addresses are either unique to the store they're specified for, _or_ for the entire project, and are case insensitive.
   *	For more information, see Email uniquenes.
   *
   */
  readonly email: string
  /**
   *	Only optional with `authenticationMode` set to `ExternalAuth`.
   *
   */
  readonly password?: string
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
  readonly middleName?: string
  /**
   *
   */
  readonly title?: string
  /**
   *	Identifies a single cart that will be assigned to the new customer account.
   *	@deprecated
   */
  readonly anonymousCartId?: string
  /**
   *	Identifies a single cart that will be assigned to the new customer account.
   *
   */
  readonly anonymousCart?: CartResourceIdentifier
  /**
   *	Identifies carts and orders belonging to an anonymous session that will be assigned to the new customer account.
   *
   */
  readonly anonymousId?: string
  /**
   *
   */
  readonly dateOfBirth?: string
  /**
   *
   */
  readonly companyName?: string
  /**
   *
   */
  readonly vatId?: string
  /**
   *	Sets the ID of each address to be unique in the addresses list.
   *
   */
  readonly addresses?: BaseAddress[]
  /**
   *	The index of the address in the addresses array.
   *	The `defaultShippingAddressId` of the customer will be set to the ID of that address.
   *
   */
  readonly defaultShippingAddress?: number
  /**
   *	The indices of the shipping addresses in the addresses array.
   *	The `shippingAddressIds` of the Customer will be set to the IDs of that addresses.
   *
   */
  readonly shippingAddresses?: number[]
  /**
   *	The index of the address in the addresses array.
   *	The `defaultBillingAddressId` of the customer will be set to the ID of that address.
   *
   */
  readonly defaultBillingAddress?: number
  /**
   *	The indices of the billing addresses in the addresses array.
   *	The `billingAddressIds` of the customer will be set to the IDs of that addresses.
   *
   */
  readonly billingAddresses?: number[]
  /**
   *
   */
  readonly isEmailVerified?: boolean
  /**
   *
   */
  readonly externalId?: string
  /**
   *
   */
  readonly customerGroup?: CustomerGroupResourceIdentifier
  /**
   *	The custom fields.
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	Must be one of the languages supported for this project
   *
   */
  readonly locale?: string
  /**
   *
   */
  readonly salutation?: string
  /**
   *	User-defined unique identifier for the Customer.
   *
   */
  readonly key?: string
  /**
   *	References to the stores the customer account is associated with.
   *	If no stores are specified, the customer is a global customer, and can log in using the Password Flow for global Customers.
   *	If one or more stores are specified, the customer can only log in using the Password Flow for Customers in a Store for those specific stores.
   *
   */
  readonly stores?: StoreResourceIdentifier[]
  /**
   *	Defines whether a password field is a required field for the Customer.
   *
   */
  readonly authenticationMode?: AuthenticationMode
}
export interface CustomerEmailVerify {
  /**
   *
   */
  readonly version?: number
  /**
   *
   */
  readonly tokenValue: string
}
export interface CustomerPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *
   */
  readonly count: number
  /**
   *
   */
  readonly total?: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *
   */
  readonly results: Customer[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [Customer](ctp:api:type:Customer).
 *
 */
export interface CustomerReference {
  readonly typeId: 'customer'
  /**
   *	Unique identifier of the referenced [Customer](ctp:api:type:Customer).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded Customer. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for Customers.
   *
   *
   */
  readonly obj?: Customer
}
export interface CustomerResetPassword {
  /**
   *
   */
  readonly tokenValue: string
  /**
   *
   */
  readonly newPassword: string
  /**
   *
   */
  readonly version?: number
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Customer](ctp:api:type:Customer).
 *
 */
export interface CustomerResourceIdentifier {
  readonly typeId: 'customer'
  /**
   *	Unique identifier of the referenced [Customer](ctp:api:type:Customer). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [Customer](ctp:api:type:Customer). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface CustomerSignInResult {
  /**
   *
   */
  readonly customer: Customer
  /**
   *	A cart that is associated to the customer.
   *	Empty if the customer does not have a cart yet.
   *
   */
  readonly cart?: Cart
}
export interface CustomerSignin {
  /**
   *
   */
  readonly email: string
  /**
   *
   */
  readonly password: string
  /**
   *	@deprecated
   */
  readonly anonymousCartId?: string
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Cart](ctp:api:type:Cart).
   *
   *
   */
  readonly anonymousCart?: CartResourceIdentifier
  /**
   *
   */
  readonly anonymousCartSignInMode?: AnonymousCartSignInMode
  /**
   *
   */
  readonly anonymousId?: string
  /**
   *
   */
  readonly updateProductData?: boolean
}
export interface CustomerToken {
  /**
   *	Unique identifier of the CustomerToken.
   *
   */
  readonly id: string
  /**
   *
   */
  readonly createdAt: string
  /**
   *
   */
  readonly lastModifiedAt?: string
  /**
   *
   */
  readonly customerId: string
  /**
   *
   */
  readonly expiresAt: string
  /**
   *
   */
  readonly value: string
}
export interface CustomerUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: CustomerUpdateAction[]
}
export type CustomerUpdateAction =
  | CustomerAddAddressAction
  | CustomerAddBillingAddressIdAction
  | CustomerAddShippingAddressIdAction
  | CustomerAddStoreAction
  | CustomerChangeAddressAction
  | CustomerChangeEmailAction
  | CustomerRemoveAddressAction
  | CustomerRemoveBillingAddressIdAction
  | CustomerRemoveShippingAddressIdAction
  | CustomerRemoveStoreAction
  | CustomerSetAddressCustomFieldAction
  | CustomerSetAddressCustomTypeAction
  | CustomerSetAuthenticationModeAction
  | CustomerSetCompanyNameAction
  | CustomerSetCustomFieldAction
  | CustomerSetCustomTypeAction
  | CustomerSetCustomerGroupAction
  | CustomerSetCustomerNumberAction
  | CustomerSetDateOfBirthAction
  | CustomerSetDefaultBillingAddressAction
  | CustomerSetDefaultShippingAddressAction
  | CustomerSetExternalIdAction
  | CustomerSetFirstNameAction
  | CustomerSetKeyAction
  | CustomerSetLastNameAction
  | CustomerSetLocaleAction
  | CustomerSetMiddleNameAction
  | CustomerSetSalutationAction
  | CustomerSetStoresAction
  | CustomerSetTitleAction
  | CustomerSetVatIdAction
export interface MyCustomerChangePassword {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly currentPassword: string
  /**
   *
   */
  readonly newPassword: string
}
export interface MyCustomerResetPassword {
  /**
   *
   */
  readonly tokenValue: string
  /**
   *
   */
  readonly newPassword: string
}
export interface MyCustomerSignin {
  /**
   *
   */
  readonly email: string
  /**
   *
   */
  readonly password: string
  /**
   *
   */
  readonly activeCartSignInMode?: AnonymousCartSignInMode
  /**
   *
   */
  readonly updateProductData?: boolean
}
export interface CustomerAddAddressAction {
  readonly action: 'addAddress'
  /**
   *
   */
  readonly address: BaseAddress
}
export interface CustomerAddBillingAddressIdAction {
  readonly action: 'addBillingAddressId'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface CustomerAddShippingAddressIdAction {
  readonly action: 'addShippingAddressId'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface CustomerAddStoreAction {
  readonly action: 'addStore'
  /**
   *
   */
  readonly store: StoreResourceIdentifier
}
export interface CustomerChangeAddressAction {
  readonly action: 'changeAddress'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
  /**
   *
   */
  readonly address: BaseAddress
}
export interface CustomerChangeEmailAction {
  readonly action: 'changeEmail'
  /**
   *
   */
  readonly email: string
}
export interface CustomerRemoveAddressAction {
  readonly action: 'removeAddress'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface CustomerRemoveBillingAddressIdAction {
  readonly action: 'removeBillingAddressId'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface CustomerRemoveShippingAddressIdAction {
  readonly action: 'removeShippingAddressId'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface CustomerRemoveStoreAction {
  readonly action: 'removeStore'
  /**
   *
   */
  readonly store: StoreResourceIdentifier
}
export interface CustomerSetAddressCustomFieldAction {
  readonly action: 'setAddressCustomField'
  /**
   *
   */
  readonly addressId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface CustomerSetAddressCustomTypeAction {
  readonly action: 'setAddressCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the `address` with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the `address`.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the `address`.
   *
   *
   */
  readonly fields?: FieldContainer
  /**
   *
   */
  readonly addressId: string
}
export interface CustomerSetAuthenticationModeAction {
  readonly action: 'setAuthenticationMode'
  /**
   *
   */
  readonly authMode: AuthenticationMode
  /**
   *	Required when `authMode` is `Password`
   *
   */
  readonly password?: string
}
export interface CustomerSetCompanyNameAction {
  readonly action: 'setCompanyName'
  /**
   *	If not defined, the company name is unset.
   *
   */
  readonly companyName?: string
}
export interface CustomerSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface CustomerSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Customer with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Customer.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Customer.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface CustomerSetCustomerGroupAction {
  readonly action: 'setCustomerGroup'
  /**
   *	If not defined, the customer group is unset.
   *
   */
  readonly customerGroup?: CustomerGroupResourceIdentifier
}
export interface CustomerSetCustomerNumberAction {
  readonly action: 'setCustomerNumber'
  /**
   *	It should be **unique** across a project.
   *	Once it's set, it cannot be changed.
   *
   */
  readonly customerNumber?: string
}
export interface CustomerSetDateOfBirthAction {
  readonly action: 'setDateOfBirth'
  /**
   *	If not defined, the date of birth is unset.
   *
   */
  readonly dateOfBirth?: string
}
export interface CustomerSetDefaultBillingAddressAction {
  readonly action: 'setDefaultBillingAddress'
  /**
   *	If not defined, the customer's `defaultBillingAddress` is unset.
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface CustomerSetDefaultShippingAddressAction {
  readonly action: 'setDefaultShippingAddress'
  /**
   *	If not defined, the customer's `defaultShippingAddress` is unset.
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface CustomerSetExternalIdAction {
  readonly action: 'setExternalId'
  /**
   *	If not defined, the external ID is unset.
   *
   */
  readonly externalId?: string
}
export interface CustomerSetFirstNameAction {
  readonly action: 'setFirstName'
  /**
   *
   */
  readonly firstName?: string
}
export interface CustomerSetKeyAction {
  readonly action: 'setKey'
  /**
   *	If `key` is absent or `null`, this field will be removed if it exists.
   *
   */
  readonly key?: string
}
export interface CustomerSetLastNameAction {
  readonly action: 'setLastName'
  /**
   *
   */
  readonly lastName?: string
}
export interface CustomerSetLocaleAction {
  readonly action: 'setLocale'
  /**
   *
   */
  readonly locale?: string
}
export interface CustomerSetMiddleNameAction {
  readonly action: 'setMiddleName'
  /**
   *
   */
  readonly middleName?: string
}
export interface CustomerSetSalutationAction {
  readonly action: 'setSalutation'
  /**
   *
   */
  readonly salutation?: string
}
export interface CustomerSetStoresAction {
  readonly action: 'setStores'
  /**
   *
   */
  readonly stores?: StoreResourceIdentifier[]
}
export interface CustomerSetTitleAction {
  readonly action: 'setTitle'
  /**
   *
   */
  readonly title?: string
}
export interface CustomerSetVatIdAction {
  readonly action: 'setVatId'
  /**
   *	If not defined, the vat Id is unset.
   *
   */
  readonly vatId?: string
}
