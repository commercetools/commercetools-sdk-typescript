/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  BusinessUnitKeyReference,
  BusinessUnitResourceIdentifier,
} from './business-unit'
import {
  BaseResource,
  CreatedBy,
  IReference,
  LastModifiedBy,
  LocalizedString,
} from './common'
import { CustomerReference, CustomerResourceIdentifier } from './customer'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface PaymentMethod extends BaseResource {
  /**
   *	Unique identifier of the PaymentMethod.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the PaymentMethod.
   *
   *
   */
  readonly version: number
  /**
   *	User-defined unique identifier of the PaymentMethod.
   *
   *
   */
  readonly key?: string
  /**
   *	Name of the PaymentMethod.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	Reference to a Customer associated with the PaymentMethod.
   *
   *	If `businessUnit` is set, the Customer is an [Associate](ctp:api:type:Associate) of the Business Unit.
   *
   *
   */
  readonly customer?: CustomerReference
  /**
   *	Reference to a BusinessUnit associated with the PaymentMethod.
   *
   *	Only available for [B2B](/../offering/composable-commerce#composable-commerce-for-b2b)-enabled Projects.
   *
   *
   */
  readonly businessUnit?: BusinessUnitKeyReference
  /**
   *	Payment Method used for the Payment—for example, a credit card or direct debit.
   *
   *
   */
  readonly method?: string
  /**
   *	Payment service that processes the Payment—for example, a PSP.
   *
   *
   */
  readonly paymentInterface?: string
  /**
   *	Account or instance of the payment interface when multiple accounts are used (per interface).
   *
   *
   */
  readonly interfaceAccount?: string
  /**
   *	Tokenized representation of the PaymentMethod used by the payment interface.
   *
   *
   */
  readonly token?: PaymentMethodToken
  /**
   *	Status of the PaymentMethod.
   *
   *
   */
  readonly paymentMethodStatus: PaymentMethodStatus
  /**
   *	Indicates if the PaymentMethod is the default.
   *
   *	The default applies per Customer, Business Unit, or the combination of both (Associate).
   *
   *
   */
  readonly default: boolean
  /**
   *	Custom Fields of the PaymentMethod.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	Date and time (UTC) the PaymentMethod was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the PaymentMethod was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	IDs and references that last modified the PaymentMethod.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	IDs and references that created the PaymentMethod.
   *
   *
   */
  readonly createdBy?: CreatedBy
}
export interface PaymentMethodDraft {
  /**
   *	User-defined unique identifier for the PaymentMethod.
   *
   *
   */
  readonly key?: string
  /**
   *	Name of the PaymentMethod.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	Reference to a Customer the PaymentMethod should belong to.
   *
   *	If `businessUnit` is set, the Customer must be an [Associate](ctp:api:type:Associate) of the Business Unit.
   *
   *
   */
  readonly customer?: CustomerResourceIdentifier
  /**
   *	Reference to a BusinessUnit the PaymentMethod should belong to.
   *
   *	Only available for [B2B](/../offering/composable-commerce#composable-commerce-for-b2b)-enabled Projects.
   *
   *
   */
  readonly businessUnit?: BusinessUnitResourceIdentifier
  /**
   *	Payment method to use for the Payment—for example, a credit card or direct debit.
   *
   *
   */
  readonly method?: string
  /**
   *	Payment service that processes the Payment—for example, a PSP.
   *
   *
   */
  readonly paymentInterface?: string
  /**
   *	Account or instance of the payment interface when multiple accounts are used (per interface).
   *
   *
   */
  readonly interfaceAccount?: string
  /**
   *	Tokenized representation of the PaymentMethod used by the payment interface.
   *
   *
   */
  readonly token?: PaymentMethodToken
  /**
   *	Status of the PaymentMethod.
   *
   *
   */
  readonly paymentMethodStatus?: PaymentMethodStatus
  /**
   *	Set to `true` if the PaymentMethod should be the default.
   *
   *	The default applies per Customer, Business Unit, or the combination of both (Associate).
   *
   *
   */
  readonly default?: boolean
  /**
   *	Custom Fields for the PaymentMethod.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with `results` containing an array of [PaymentMethod](ctp:api:type:PaymentMethod).
 *
 */
export interface PaymentMethodPagedQueryResponse {
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
   *	[PaymentMethods](ctp:api:type:PaymentMethod) matching the query.
   *
   *
   */
  readonly results: PaymentMethod[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [PaymentMethod](ctp:api:type:PaymentMethod).
 *
 */
export interface PaymentMethodReference extends IReference {
  readonly typeId: 'payment-method'
  /**
   *	Unique identifier of the referenced [PaymentMethod](ctp:api:type:PaymentMethod).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded PaymentMethod. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for PaymentMethods.
   *
   *
   */
  readonly obj?: PaymentMethod
}
export enum PaymentMethodStatusValues {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type PaymentMethodStatus = 'Active' | 'Inactive' | (string & {})
export interface PaymentMethodToken {
  /**
   *	Tokenized representation of the Payment Method.
   *
   *	It is _displayed_ in the following instances:
   *
   *	- in the payload of an API Extension for Payments and PaymentMethods
   *	- when querying Payments and PaymentMethods
   *
   *	It is _masked_ in the following instances:
   *
   *	- in the payload of Payment and PaymentMethod messages
   *	- when querying MyPayments
   *	- in referenced Payments and PaymentMethods embedded through [Reference Expansion](/general-concepts#reference-expansion)
   *
   */
  readonly value: string
}
export interface PaymentMethodUpdate {
  /**
   *	Expected version of the PaymentMethod on which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the PaymentMethod.
   *
   *
   */
  readonly actions: PaymentMethodUpdateAction[]
}
export type PaymentMethodUpdateAction =
  | PaymentMethodSetCustomFieldAction
  | PaymentMethodSetCustomTypeAction
  | PaymentMethodSetDefaultAction
  | PaymentMethodSetInterfaceAccountAction
  | PaymentMethodSetKeyAction
  | PaymentMethodSetMethodAction
  | PaymentMethodSetNameAction
  | PaymentMethodSetPaymentInterfaceAction
  | PaymentMethodSetPaymentMethodStatusAction
export interface IPaymentMethodUpdateAction {
  /**
   *
   */
  readonly action: string
}
/**
 *	Adding a Custom Field to a PaymentMethod generates the [PaymentMethodCustomFieldAdded](ctp:api:type:PaymentMethodCustomFieldAddedMessage) Message, removing one generates the [PaymentMethodCustomFieldRemoved](ctp:api:type:PaymentMethodCustomFieldRemovedMessage) Message, and updating an existing one generates the [PaymentMethodCustomFieldChanged](ctp:api:type:PaymentMethodCustomFieldChangedMessage) Message.
 *
 */
export interface PaymentMethodSetCustomFieldAction
  extends IPaymentMethodUpdateAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields) to add, update, or remove.
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
/**
 *	Adding or updating a Custom Type on a PaymentMethod generates the [PaymentMethodCustomTypeSet](ctp:api:type:PaymentMethodCustomTypeSetMessage) Message, removing one generates the [PaymentMethodCustomTypeRemoved](ctp:api:type:PaymentMethodCustomTypeRemovedMessage) Message.
 *
 */
export interface PaymentMethodSetCustomTypeAction
  extends IPaymentMethodUpdateAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the PaymentMethod with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the PaymentMethod.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the PaymentMethod.
   *
   *
   */
  readonly fields?: FieldContainer
}
/**
 *	This action generates the [PaymentMethodDefaultSet](ctp:api:type:PaymentMethodDefaultSetMessage) Message.
 *
 *	An inactive Payment Method cannot be set as the default, and the action will return an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
 *
 */
export interface PaymentMethodSetDefaultAction
  extends IPaymentMethodUpdateAction {
  readonly action: 'setDefault'
  /**
   *	Value to set.
   *
   *
   */
  readonly default: boolean
}
/**
 *	This action generates the [PaymentMethodInterfaceAccountSet](ctp:api:type:PaymentMethodInterfaceAccountSetMessage) Message.
 *
 */
export interface PaymentMethodSetInterfaceAccountAction
  extends IPaymentMethodUpdateAction {
  readonly action: 'setInterfaceAccount'
  /**
   *	New account or instance of the payment interface.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly interfaceAccount?: string
}
/**
 *	This action generates the [PaymentMethodKeySet](ctp:api:type:PaymentMethodKeySetMessage) Message.
 *
 */
export interface PaymentMethodSetKeyAction extends IPaymentMethodUpdateAction {
  readonly action: 'setKey'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly key?: string
}
/**
 *	This action generates the [PaymentMethodMethodSet](ctp:api:type:PaymentMethodMethodSetMessage) Message.
 *
 */
export interface PaymentMethodSetMethodAction
  extends IPaymentMethodUpdateAction {
  readonly action: 'setMethod'
  /**
   *	New payment method—for example, a credit card or direct debit.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly method?: string
}
/**
 *	This update action generates the [PaymentMethodNameSet](ctp:api:type:PaymentMethodNameSetMessage) Message.
 *
 */
export interface PaymentMethodSetNameAction extends IPaymentMethodUpdateAction {
  readonly action: 'setName'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly name?: LocalizedString
}
/**
 *	This action generates the [PaymentMethodPaymentInterfaceSet](ctp:api:type:PaymentMethodPaymentInterfaceSetMessage) Message.
 *
 */
export interface PaymentMethodSetPaymentInterfaceAction
  extends IPaymentMethodUpdateAction {
  readonly action: 'setPaymentInterface'
  /**
   *	New payment service that processes the Payment—for example, a PSP.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly paymentInterface?: string
}
/**
 *	This action generates the [PaymentMethodPaymentMethodStatusSet](ctp:api:type:PaymentMethodPaymentMethodStatusSetMessage) Message.
 *
 *	A default Payment Method cannot be set as inactive, and the action will return an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
 *
 */
export interface PaymentMethodSetPaymentMethodStatusAction
  extends IPaymentMethodUpdateAction {
  readonly action: 'setPaymentMethodStatus'
  /**
   *	Value to set.
   *
   *
   */
  readonly paymentMethodStatus: PaymentMethodStatus
}
