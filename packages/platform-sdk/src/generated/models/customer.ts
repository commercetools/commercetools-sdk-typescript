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
  _BaseAddress,
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
  | string
export type AuthenticationMode = 'ExternalAuth' | 'Password' | string
/**
 *	If `stores` is not empty, the Customer is specific to those Stores.
 *
 */
export interface Customer extends BaseResource {
  /**
   *	Unique identifier of the Customer.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Customer.
   *
   *
   */
  readonly version: number
  /**
   *	User-defined unique identifier of the Customer.
   *
   *
   */
  readonly key?: string
  /**
   *	User-defined unique identifier of the Customer.
   *
   *	Can be used to refer to a Customer in a human-readable way (in emails, invoices, and other correspondence).
   *
   *
   */
  readonly customerNumber?: string
  /**
   *	Optional identifier for use in external systems like Customer Relationship Management (CRM) or Enterprise Resource Planning (ERP).
   *
   *
   */
  readonly externalId?: string
  /**
   *	Date and time (UTC) the Customer was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Customer was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/general-concepts#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/general-concepts#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	Email address of the Customer that is [unique](/../api/customers-overview#customer-uniqueness) for an entire Project or to a Store the Customer is assigned to.
   *	It is the mandatory unique identifier of a Customer.
   *
   *
   */
  readonly email: string
  /**
   *	Present only when `authenticationMode` is set to `Password`.
   *
   *
   */
  readonly password?: string
  /**
   *	Given name (first name) of the Customer.
   *
   *
   */
  readonly firstName?: string
  /**
   *	Family name (last name) of the Customer.
   *
   *
   */
  readonly lastName?: string
  /**
   *	Middle name of the Customer.
   *
   *
   */
  readonly middleName?: string
  /**
   *	Title of the Customer, for example, 'Dr.'.
   *
   *
   */
  readonly title?: string
  /**
   *	Date of birth of the Customer.
   *
   *
   */
  readonly dateOfBirth?: string
  /**
   *	Company name of the Customer.
   *
   *
   */
  readonly companyName?: string
  /**
   *	Individual VAT ID of the Customer.
   *
   *
   */
  readonly vatId?: string
  /**
   *	Addresses used by the Customer.
   *
   *
   */
  readonly addresses: Address[]
  /**
   *	ID of the address in `addresses` used as the default shipping address.
   *
   *
   */
  readonly defaultShippingAddressId?: string
  /**
   *	IDs of addresses in `addresses` used as shipping addresses.
   *
   *
   */
  readonly shippingAddressIds?: string[]
  /**
   *	ID of the address in `addresses` used as the default billing address.
   *
   *
   */
  readonly defaultBillingAddressId?: string
  /**
   *	IDs of addresses in `addresses` used as billing addresses.
   *
   *
   */
  readonly billingAddressIds?: string[]
  /**
   *	Indicates whether the email address of the Customer is [verified](#email-verification-of-customer).
   *
   *
   */
  readonly isEmailVerified: boolean
  /**
   *	[CustomerGroup](ctp:api:type:CustomerGroup) to which the Customer belongs.
   *
   *
   */
  readonly customerGroup?: CustomerGroupReference
  /**
   *	Custom Fields for the Customer.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	Preferred language of the Customer.
   *
   *
   */
  readonly locale?: string
  /**
   *	Salutation of the Customer, for example, 'Mr.' or 'Mrs.'.
   *
   *
   */
  readonly salutation?: string
  /**
   *	[Stores](ctp:api:type:Store) to which the Customer is assigned to.
   *
   *	- If no Stores are specified, the Customer is a global customer, and can log in using the [Password Flow for global Customers](/../api/authorization#password-flow-for-global-customers).
   *	- If any Stores are specified, the Customer can only log in using the [Password Flow for Customers in a Store](/../api/authorization#password-flow-for-customers-in-a-store) for those specific Stores.
   *
   *
   */
  readonly stores?: StoreKeyReference[]
  /**
   *	Indicates whether the `password` is required for the Customer.
   *
   *
   */
  readonly authenticationMode: AuthenticationMode
}
export interface CustomerChangePassword {
  /**
   *	Unique identifier of the Customer.
   *
   *
   */
  readonly id: string
  /**
   *	Expected version of the Customer on which the changes should be applied.
   *
   *
   */
  readonly version: number
  /**
   *	Current password of the Customer.
   *
   *	If the current password does not match, an [InvalidCurrentPassword](ctp:api:type:InvalidCurrentPasswordError) error is returned.
   *
   *
   */
  readonly currentPassword: string
  /**
   *	New password to be set.
   *
   *
   */
  readonly newPassword: string
}
export interface CustomerCreateEmailToken {
  /**
   *	Unique identifier of the Customer.
   *
   */
  readonly id: string
  /**
   *	Expected version of the Customer.
   *
   */
  readonly version?: number
  /**
   *	Validity period of the generated token in minutes.
   *
   */
  readonly ttlMinutes: number
}
export interface CustomerCreatePasswordResetToken {
  /**
   *	Email address of the Customer treated as [case-insensitive](/../api/customers-overview#email-case-insensitivity).
   *
   *
   */
  readonly email: string
  /**
   *	Validity period of the generated token in minutes.
   *
   *
   */
  readonly ttlMinutes?: number
}
export interface CustomerDraft {
  /**
   *	User-defined unique identifier for the Customer.
   *	The `key` field is preferred over `customerNumber` as it is mutable and provides more flexibility.
   *
   *
   */
  readonly key?: string
  /**
   *	User-defined unique identifier for a Customer.
   *	Once set, it cannot be changed.
   *
   *	Can be used to refer to a Customer in a human-readable way (in emails, invoices, and other correspondence).
   *
   *
   */
  readonly customerNumber?: string
  /**
   *	Optional identifier for use in external systems like Customer Relationship Management (CRM) or Enterprise Resource Planning (ERP).
   *
   *
   */
  readonly externalId?: string
  /**
   *	Email address of the Customer that must be [unique](/../api/customers-overview#customer-uniqueness) for an entire Project or to a Store the Customer is assigned to.
   *	It is the mandatory unique identifier of a Customer.
   *
   *
   */
  readonly email: string
  /**
   *	Required when `authenticationMode` is set to `Password`.
   *	Provide the Customer's password in plain text. The API stores passwords in an encrypted format.
   *
   *
   */
  readonly password?: string
  /**
   *	Given name (first name) of the Customer.
   *
   *
   */
  readonly firstName?: string
  /**
   *	Family name (last name) of the Customer.
   *
   *
   */
  readonly lastName?: string
  /**
   *	Middle name of the Customer.
   *
   *
   */
  readonly middleName?: string
  /**
   *	Title of the Customer, for example, 'Dr.'.
   *
   *
   */
  readonly title?: string
  /**
   *	Deprecated since an anonymous [Cart](ctp:api:type:Cart) can be identified by its `id` or external `key`.
   *
   *	@deprecated
   */
  readonly anonymousCartId?: string
  /**
   *	Identifies a [Cart](ctp:api:type:Cart) that will be assigned to the new Customer.
   *
   *
   */
  readonly anonymousCart?: CartResourceIdentifier
  /**
   *	Identifies Carts and Orders belonging to an anonymous session that will be assigned to the new Customer.
   *
   *
   */
  readonly anonymousId?: string
  /**
   *	Date of birth of the Customer.
   *
   *
   */
  readonly dateOfBirth?: string
  /**
   *	Company name of the Customer. When representing a company as a Customer, [Business Units](ctp:api:type:BusinessUnit) provide extended funtionality.
   *
   *
   */
  readonly companyName?: string
  /**
   *	Individual VAT ID of the Customer.
   *
   *
   */
  readonly vatId?: string
  /**
   *	Addresses of the Customer.
   *
   *
   */
  readonly addresses?: BaseAddress[]
  /**
   *	Index of the address in the `addresses` array to use as the default shipping address.
   *	The `defaultShippingAddressId` of the Customer will be set to the `id` of that address.
   *
   *
   */
  readonly defaultShippingAddress?: number
  /**
   *	Indices of the shipping addresses in the `addresses` array.
   *	The `shippingAddressIds` of the Customer will be set to the IDs of these addresses.
   *
   *
   */
  readonly shippingAddresses?: number[]
  /**
   *	Index of the address in the `addresses` array to use as the default billing address.
   *	The `defaultBillingAddressId` of the Customer will be set to the `id` of that address.
   *
   *
   */
  readonly defaultBillingAddress?: number
  /**
   *	Indices of the billing addresses in the `addresses` array.
   *	The `billingAddressIds` of the Customer will be set to the IDs of these addresses.
   *
   *
   */
  readonly billingAddresses?: number[]
  /**
   *	Set to `true` if the email address of the Customer has been verified already.
   *	The intended use is to leave this field unset upon sign-up of the Customer and initiate the [email verification](#email-verification-of-customer) afterwards.
   *
   *
   */
  readonly isEmailVerified?: boolean
  /**
   *	Sets the [CustomerGroup](ctp:api:type:CustomerGroup) for the Customer.
   *
   *
   */
  readonly customerGroup?: CustomerGroupResourceIdentifier
  /**
   *	Custom Fields for the Customer.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	Preferred language of the Customer.
   *	Must be one of the languages supported by the [Project](ctp:api:type:Project).
   *
   *
   */
  readonly locale?: string
  /**
   *	Salutation of the Customer, for example, 'Mr.' or 'Mrs.'.
   *
   *
   */
  readonly salutation?: string
  /**
   *	Sets the [Stores](ctp:api:type:Store) for the Customer.
   *
   *	- If no Stores are specified, the Customer is a global customer, and can log in using the [Password Flow for global Customers](/../api/authorization#password-flow-for-global-customers).
   *	- If any Stores are specified, the Customer can only log in using the [Password Flow for Customers in a Store](/../api/authorization#password-flow-for-customers-in-a-store) for those specific Stores.
   *
   *
   */
  readonly stores?: StoreResourceIdentifier[]
  /**
   *	- Set to `Password` to make the `password` field required for the Customer.
   *	- Set to `ExternalAuth` when the password is not required for the Customer.
   *
   *
   */
  readonly authenticationMode?: AuthenticationMode
}
/**
 *	[Reference](ctp:api:type:Reference) to a [CustomerToken](ctp:api:type:CustomerToken) for email verification.
 *
 */
export interface CustomerEmailTokenReference {
  readonly typeId: 'customer-email-token'
  /**
   *	Unique identifier of the referenced [CustomerToken](ctp:api:type:CustomerToken).
   *
   *
   */
  readonly id: string
}
export interface CustomerEmailVerify {
  /**
   *	Expected version of the Customer.
   *
   *
   */
  readonly version?: number
  /**
   *	Value of the token to verify Customer email.
   *
   *
   */
  readonly tokenValue: string
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [Customer](ctp:api:type:Customer).
 *
 */
export interface CustomerPagedQueryResponse {
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
   *	[Customers](ctp:api:type:Customer) matching the query.
   *
   *
   */
  readonly results: Customer[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [CustomerToken](ctp:api:type:CustomerToken) for password reset.
 *
 */
export interface CustomerPasswordTokenReference {
  readonly typeId: 'customer-password-token'
  /**
   *	Unique identifier of the referenced [CustomerToken](ctp:api:type:CustomerToken).
   *
   *
   */
  readonly id: string
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
   *	Contains the representation of the expanded Customer. Only present in responses to requests with [Reference Expansion](ctp:api:type:Expansion) for Customers.
   *
   *
   */
  readonly obj?: Customer
}
export interface CustomerResetPassword {
  /**
   *	Value of the token to reset the Customer password.
   *
   *
   */
  readonly tokenValue: string
  /**
   *	New password to be set.
   *
   *
   */
  readonly newPassword: string
  /**
   *	Expected version of the Customer.
   *
   *
   */
  readonly version?: number
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Customer](ctp:api:type:Customer). Either `id` or `key` is required. If both are set, an [InvalidJsonInput](/../api/errors#invalidjsoninput) error is returned.
 *
 */
export interface CustomerResourceIdentifier {
  readonly typeId: 'customer'
  /**
   *	Unique identifier of the referenced [Customer](ctp:api:type:Customer). Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [Customer](ctp:api:type:Customer). Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
export interface CustomerSignInResult {
  /**
   *	Customer [signed up](ctp:api:endpoint:/{projectKey}/customers:POST) or [signed in](ctp:api:endpoint:/{projectKey}/login:POST) after authentication.
   *
   *
   */
  readonly customer: Customer
  /**
   *	Cart associated with the Customer.
   *	If empty, the Customer does not have a Cart assigned.
   *
   *
   */
  readonly cart?: Cart
}
export interface CustomerSignin {
  /**
   *	Email address of the Customer treated as [case-insensitive](/../api/customers-overview#email-case-insensitivity).
   *
   *
   */
  readonly email: string
  /**
   *	Password of the Customer.
   *
   *
   */
  readonly password: string
  /**
   *	Deprecated since it is now possible to identify an anonymous cart by using its `id` or external `key`.
   *
   *	@deprecated
   */
  readonly anonymousCartId?: string
  /**
   *	Identifies a [Cart](ctp:api:type:Cart) that will be assigned to the Customer.
   *
   *
   */
  readonly anonymousCart?: CartResourceIdentifier
  /**
   *	- Set to `MergeWithExistingCustomerCart` if [LineItems](ctp:api:type:LineItem) of the anonymous Cart should be merged with the active Customer Cart that has been modified most recently.
   *	- Set to `UseAsNewActiveCustomerCart` if the anonymous Cart should be used as the new active Customer Cart and no [LineItems](ctp:api:type:LineItem) are to be merged.
   *
   *
   */
  readonly anonymousCartSignInMode?: AnonymousCartSignInMode
  /**
   *	If both `anonymousCart` and `anonymousId` are provided, the `anonymousId` on the CustomerSignin must match that of the anonymous [Cart](ctp:api:type:Cart).
   *	Otherwise a [400 Bad Request](ctp:api:type:InvalidOperationError) `Invalid Operation` error is returned with the message:
   *	"Cart with the ID cart-id does not have the expected anonymousId.".
   *
   *
   */
  readonly anonymousId?: string
  /**
   *	- If `true`, the [LineItem](ctp:api:type:LineItem) Product data (`name`, `variant`, and `productType`) of the returned Cart will be updated.
   *	- If `false`, only the prices, discounts, and tax rates will be updated.
   *
   *
   */
  readonly updateProductData?: boolean
}
export interface CustomerToken {
  /**
   *	Unique identifier of the token.
   *
   *
   */
  readonly id: string
  /**
   *	The `id` of the Customer.
   *
   *
   */
  readonly customerId: string
  /**
   *	Value of the token.
   *
   *
   */
  readonly value: string
  /**
   *	Date and time (UTC) the token expires.
   *
   *
   */
  readonly expiresAt: string
  /**
   *	Date and time (UTC) the token was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	When the token is created, `lastModifiedAt` is set to `createdAt`.
   *
   *
   */
  readonly lastModifiedAt?: string
}
export interface CustomerUpdate {
  /**
   *	Expected version of the Customer on which the changes should be applied. If the expected version does not match the actual version, a [409 Conflict](/../api/errors#409-conflict) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Customer.
   *
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
   *	Expected version of the Customer on which the changes should be applied.
   *
   *
   */
  readonly version: number
  /**
   *	Current password of the Customer.
   *
   *	If the current password does not match, an [InvalidCurrentPassword](ctp:api:type:InvalidCurrentPasswordError) error is returned.
   *
   *
   */
  readonly currentPassword: string
  /**
   *	New password to be set.
   *
   *
   */
  readonly newPassword: string
}
export interface MyCustomerEmailVerify {
  /**
   *	Value of the token to verify Customer email.
   *
   *
   */
  readonly tokenValue: string
}
export interface MyCustomerResetPassword {
  /**
   *	Value of the token to reset the Customer password.
   *
   *
   */
  readonly tokenValue: string
  /**
   *	New password to be set.
   *
   *
   */
  readonly newPassword: string
}
export interface MyCustomerSignin {
  /**
   *	Email address of the Customer treated as [case-insensitive](/../api/customers-overview#email-case-insensitivity).
   *
   *
   */
  readonly email: string
  /**
   *	Password of the Customer.
   *
   *
   */
  readonly password: string
  /**
   *	- If `MergeWithExistingCustomerCart`, [LineItems](ctp:api:type:LineItem) of the anonymous Cart are merged with the recently modified active Customer Cart.
   *	- If `UseAsNewActiveCustomerCart`, the anonymous Cart is used as the new active Customer Cart, and no [LineItems](ctp:api:type:LineItem) are merged.
   *
   *
   */
  readonly activeCartSignInMode?: AnonymousCartSignInMode
  /**
   *	- If `true`, the [LineItem](ctp:api:type:LineItem) Product data (`name`, `variant`, and `productType`) of the returned Cart is updated.
   *	- If `false`, only the prices, discounts, and tax rates are updated.
   *
   *
   */
  readonly updateProductData?: boolean
}
/**
 *	Adding an address to the Customer produces the [CustomerAddressAdded](ctp:api:type:CustomerAddressAddedMessage) Message.
 *
 */
export interface CustomerAddAddressAction {
  readonly action: 'addAddress'
  /**
   *	Value to append to the `addresses` array.
   *
   *
   */
  readonly address: _BaseAddress
}
/**
 *	Adds an Address from the `addresses` array to `billingAddressIds`. Either `addressId` or `addressKey` is required.
 *
 */
export interface CustomerAddBillingAddressIdAction {
  readonly action: 'addBillingAddressId'
  /**
   *	`id` of the [Address](ctp:api:type:Address) to become a billing address.
   *
   *
   */
  readonly addressId?: string
  /**
   *	`key` of the [Address](ctp:api:type:Address) to become a billing address.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Adds an Address from the `addresses` array to `shippingAddressIds`. Either `addressId` or `addressKey` is required.
 *
 */
export interface CustomerAddShippingAddressIdAction {
  readonly action: 'addShippingAddressId'
  /**
   *	`id` of the [Address](ctp:api:type:Address) to become a shipping address.
   *
   *
   */
  readonly addressId?: string
  /**
   *	`key` of the [Address](ctp:api:type:Address) to become a shipping address.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Associates the Customer with a Store.
 *
 */
export interface CustomerAddStoreAction {
  readonly action: 'addStore'
  /**
   *	ResourceIdentifier of the Store to add.
   *
   *
   */
  readonly store: StoreResourceIdentifier
}
/**
 *	Changing an address of the Customer produces the [CustomerAddressChanged](ctp:api:type:CustomerAddressChangedMessage) Message.
 *
 *	Either `addressId` or `addressKey` is required.
 *
 */
export interface CustomerChangeAddressAction {
  readonly action: 'changeAddress'
  /**
   *	`id` of the [Address](ctp:api:type:Address) to change.
   *
   *
   */
  readonly addressId?: string
  /**
   *	`key` of the [Address](ctp:api:type:Address) to change.
   *
   *
   */
  readonly addressKey?: string
  /**
   *	Value to set.
   *
   *
   */
  readonly address: _BaseAddress
}
/**
 *	Changes the `email` of the Customer and sets the `isEmailVerified` property to `false`. This update action generates a [CustomerEmailChanged](ctp:api:type:CustomerEmailChangedMessage) Message.
 *
 */
export interface CustomerChangeEmailAction {
  readonly action: 'changeEmail'
  /**
   *	Value to set.
   *
   *
   */
  readonly email: string
}
/**
 *	Removing an address from the Customer produces the [CustomerAddressRemoved](ctp:api:type:CustomerAddressRemovedMessage) Message.
 *
 *	Either `addressId` or `addressKey` is required.
 *
 */
export interface CustomerRemoveAddressAction {
  readonly action: 'removeAddress'
  /**
   *	`id` of the [Address](ctp:api:type:Address) to remove.
   *
   *
   */
  readonly addressId?: string
  /**
   *	`key` of the [Address](ctp:api:type:Address) to remove.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Removes a billing address from `billingAddressesIds`.
 *	If the billing address is the default billing address, the `defaultBillingAddressId` is unset. Either `addressId` or `addressKey` is required.
 *
 */
export interface CustomerRemoveBillingAddressIdAction {
  readonly action: 'removeBillingAddressId'
  /**
   *	`id` of the [Address](ctp:api:type:Address) to remove from `billingAddressesIds`.
   *
   *
   */
  readonly addressId?: string
  /**
   *	`key` of the [Address](ctp:api:type:Address) to remove from `billingAddressesIds`.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Removes a shipping address from `shippingAddressesIds`.
 *	If the shipping address is the default shipping address, the `defaultShippingAddressId` is unset. Either `addressId` or `addressKey` is required.
 *
 */
export interface CustomerRemoveShippingAddressIdAction {
  readonly action: 'removeShippingAddressId'
  /**
   *	`id` of the [Address](ctp:api:type:Address) to remove from `shippingAddressesIds`.
   *
   *
   */
  readonly addressId?: string
  /**
   *	`key` of the [Address](ctp:api:type:Address) to remove from `shippingAddressesIds`.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Removes the association to a Store from the Customer.
 *	If no more Stores are assigned, the Customer becomes a [global Customer](/../api/customers-overview#global-versus-store-specific-customers).
 *
 */
export interface CustomerRemoveStoreAction {
  readonly action: 'removeStore'
  /**
   *	ResourceIdentifier of the Store to remove.
   *
   *
   */
  readonly store: StoreResourceIdentifier
}
/**
 *	Adding a Custom Field to an Address of a Customer generates the [CustomerAddressCustomFieldAdded](ctp:api:type:CustomerAddressCustomFieldAddedMessage) Message, removing one generates the [CustomerAddressCustomFieldRemoved](ctp:api:type:CustomerAddressCustomFieldRemovedMessage) Message, and updating an existing one generates the [CustomerAddressCustomFieldChanged](ctp:api:type:CustomerAddressCustomFieldChangedMessage) Message.
 *
 */
export interface CustomerSetAddressCustomFieldAction {
  readonly action: 'setAddressCustomField'
  /**
   *	User-defined unique identifier of the [Address](ctp:api:type:Address) to be updated.
   *
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
   *	If `value` is provided, it is set for the field defined by `name`.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *
   *
   */
  readonly value?: any
}
/**
 *	Adding or updating a Custom Type on an Address of a Customer generates the [CustomerAddressCustomTypeSet](ctp:api:type:CustomerAddressCustomTypeSetMessage) Message, and removing one generates the [CustomerAddressCustomTypeRemoved](ctp:api:type:CustomerAddressCustomTypeRemovedMessage) Message.
 *
 */
export interface CustomerSetAddressCustomTypeAction {
  readonly action: 'setAddressCustomType'
  /**
   *	User-defined unique identifier of the [Address](ctp:api:type:Address) to be updated.
   *
   *
   */
  readonly addressId: string
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
}
export interface CustomerSetAuthenticationModeAction {
  readonly action: 'setAuthenticationMode'
  /**
   *	Value to set.
   *	Changing a Customer's `authMode` from `Password` to `ExternalAuth` deletes the Customer's password.
   *
   *
   */
  readonly authMode: AuthenticationMode
  /**
   *	Required when `authMode` is `Password`.
   *
   *
   */
  readonly password?: string
}
/**
 *	Setting a company name produces the [CustomerCompanyNameSet](ctp:api:type:CustomerCompanyNameSetMessage) Message.
 *
 */
export interface CustomerSetCompanyNameAction {
  readonly action: 'setCompanyName'
  /**
   *	Value to set.
   *	If empty, any existing value is removed.
   *
   *
   */
  readonly companyName?: string
}
/**
 *	Adding a Custom Field to a Customer generates the [CustomerCustomFieldAdded](ctp:api:type:CustomerCustomFieldAddedMessage) Message, removing one generates the [CustomerCustomFieldRemoved](ctp:api:type:CustomerCustomFieldRemovedMessage) Message, and updating an existing one generates the [CustomerCustomFieldChanged](ctp:api:type:CustomerCustomFieldChangedMessage) Message.
 *
 */
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
   *	If `value` is provided, it is set for the field defined by `name`.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *
   *
   */
  readonly value?: any
}
/**
 *	Adding or updating a Custom Type on a Customer generates the [CustomerCustomTypeSet](ctp:api:type:CustomerCustomTypeSetMessage) Message, removing one generates the [CustomerCustomTypeRemoved](ctp:api:type:CustomerCustomTypeRemovedMessage) Message.
 *
 */
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
/**
 *	Setting the Customer Group of the Customer produces the [CustomerGroupSet](ctp:api:type:CustomerGroupSetMessage) Message.
 *
 */
export interface CustomerSetCustomerGroupAction {
  readonly action: 'setCustomerGroup'
  /**
   *	Value to set.
   *	If empty, any existing value is removed.
   *
   *
   */
  readonly customerGroup?: CustomerGroupResourceIdentifier
}
/**
 *	Sets a new ID that can be used to refer to a Customer in a human-reabable way (for use in emails, invoices, etc).
 *
 */
export interface CustomerSetCustomerNumberAction {
  readonly action: 'setCustomerNumber'
  /**
   *	Value to set.
   *	Once set, it cannot be changed.
   *
   *
   */
  readonly customerNumber?: string
}
/**
 *	Setting the date of birth of the Customer produces the [CustomerDateOfBirthSet](ctp:api:type:CustomerDateOfBirthSetMessage) Message.
 *
 */
export interface CustomerSetDateOfBirthAction {
  readonly action: 'setDateOfBirth'
  /**
   *	Value to set.
   *	If empty, any existing value is removed.
   *
   *
   */
  readonly dateOfBirth?: string
}
/**
 *	Sets the default billing address from `addresses`.
 *	The action adds the `id` of the specified Address to the `billingAddressIds` if not contained already. Either `addressId` or `addressKey` is required.
 *
 */
export interface CustomerSetDefaultBillingAddressAction {
  readonly action: 'setDefaultBillingAddress'
  /**
   *	`id` of the [Address](ctp:api:type:Address) to become the default billing address.
   *
   *
   */
  readonly addressId?: string
  /**
   *	`key` of the [Address](ctp:api:type:Address) to become the default billing address.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Sets the default shipping address from `addresses`.
 *	The action adds the `id` of the specified address to the `shippingAddressIds` if not contained already. Either `addressId` or `addressKey` is required.
 *
 *	If the Tax Category of the Cart [ShippingInfo](ctp:api:type:ShippingInfo) is missing the TaxRate matching country and state given in the `shippingAddress` of that Cart, a [MissingTaxRateForCountry](ctp:api:type:MissingTaxRateForCountryError) error is returned.
 *
 */
export interface CustomerSetDefaultShippingAddressAction {
  readonly action: 'setDefaultShippingAddress'
  /**
   *	`id` of the [Address](ctp:api:type:Address) to become the default shipping address.
   *
   *
   */
  readonly addressId?: string
  /**
   *	`key` of the [Address](ctp:api:type:Address) to become the default shipping address.
   *
   *
   */
  readonly addressKey?: string
}
export interface CustomerSetExternalIdAction {
  readonly action: 'setExternalId'
  /**
   *	Value to set.
   *	If empty, any existing value is removed.
   *
   *
   */
  readonly externalId?: string
}
export interface CustomerSetFirstNameAction {
  readonly action: 'setFirstName'
  /**
   *	Value to set. If empty, any existing value is removed.
   *
   *
   */
  readonly firstName?: string
}
export interface CustomerSetKeyAction {
  readonly action: 'setKey'
  /**
   *	If `key` is absent or `null`, the existing key, if any, will be removed.
   *
   *
   */
  readonly key?: string
}
/**
 *	Setting the last name of the Customer produces the [CustomerLastNameSetMessage](ctp:api:type:CustomerLastNameSetMessage).
 *
 */
export interface CustomerSetLastNameAction {
  readonly action: 'setLastName'
  /**
   *	Value to set. If empty, any existing value is removed.
   *
   *
   */
  readonly lastName?: string
}
export interface CustomerSetLocaleAction {
  readonly action: 'setLocale'
  /**
   *	Value to set.
   *	Must be one of the languages supported by the [Project](ctp:api:type:Project).
   *
   *
   */
  readonly locale?: string
}
export interface CustomerSetMiddleNameAction {
  readonly action: 'setMiddleName'
  /**
   *	Value to set. If empty, any existing value is removed.
   *
   *
   */
  readonly middleName?: string
}
export interface CustomerSetSalutationAction {
  readonly action: 'setSalutation'
  /**
   *	Value to set. If empty, any existing value is removed.
   *
   *
   */
  readonly salutation?: string
}
/**
 *	Sets the Stores the Customer account is associated with.
 *	If no Stores are specified, the Customer becomes a [global Customer](/../api/customers-overview#global-versus-store-specific-customers).
 *
 */
export interface CustomerSetStoresAction {
  readonly action: 'setStores'
  /**
   *	ResourceIdentifier of the Stores to set.
   *
   *
   */
  readonly stores?: StoreResourceIdentifier[]
}
/**
 *	Setting the title of the Customer produces the [CustomerTitleSetMessage](ctp:api:type:CustomerTitleSetMessage).
 *
 */
export interface CustomerSetTitleAction {
  readonly action: 'setTitle'
  /**
   *	Value to set. If empty, any existing value is removed.
   *
   *
   */
  readonly title?: string
}
export interface CustomerSetVatIdAction {
  readonly action: 'setVatId'
  /**
   *	Value to set.
   *	If empty, any existing value is removed.
   *
   *
   */
  readonly vatId?: string
}
