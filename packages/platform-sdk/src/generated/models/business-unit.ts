/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  AssociateRoleKeyReference,
  AssociateRoleResourceIdentifier,
} from './associate-role'
import {
  Address,
  BaseAddress,
  CreatedBy,
  LastModifiedBy,
  _BaseAddress,
} from './common'
import { CustomerReference, CustomerResourceIdentifier } from './customer'
import { StoreKeyReference, StoreResourceIdentifier } from './store'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface Associate {
  /**
   *	Roles assigned to the Associate within a Business Unit.
   *
   *
   */
  readonly associateRoleAssignments: AssociateRoleAssignment[]
  /**
   *	The [Customer](ctp:api:type:Customer) that acts as an Associate in the Business Unit.
   *
   *
   */
  readonly customer: CustomerReference
}
export interface AssociateDraft {
  /**
   *	Roles assigned to the Associate within a Business Unit.
   *
   *
   */
  readonly associateRoleAssignments: AssociateRoleAssignmentDraft[]
  /**
   *	The [Customer](ctp:api:type:Customer) to be part of the Business Unit.
   *
   *
   */
  readonly customer: CustomerResourceIdentifier
}
export interface AssociateRoleAssignment {
  /**
   *	Role the Associate holds within a Business Unit.
   *
   *
   */
  readonly associateRole: AssociateRoleKeyReference
  /**
   *	Determines whether the AssociateRoleAssignment can be inherited by child Business Units.
   *
   *
   */
  readonly inheritance: AssociateRoleInheritanceMode
}
export interface AssociateRoleAssignmentDraft {
  /**
   *	Role the Associate holds within a Business Unit.
   *
   *
   */
  readonly associateRole: AssociateRoleResourceIdentifier
  /**
   *	Determines whether the AssociateRoleAssignment can be inherited by child Business Units.
   *
   *
   */
  readonly inheritance?: AssociateRoleInheritanceMode
}
/**
 *	Determines whether an [AssociateRoleAssignment](ctp:api:type:AssociateRoleAssignment) can be inherited by child Business Units.
 *
 */
export type AssociateRoleInheritanceMode = 'Disabled' | 'Enabled' | string
/**
 *	Generic type to model the fields that all types of Business Units have in common.
 *
 */
export type BusinessUnit = Company | Division
/**
 *	Determines whether a Business Unit can inherit Associates from a parent.
 *
 */
export type BusinessUnitAssociateMode =
  | 'Explicit'
  | 'ExplicitAndFromParent'
  | string
/**
 *	Generic draft type to model those fields all Business Units have in common. The additional fields required for creating a [Company](ctp:api:type:Company) or [Division](ctp:api:type:Division) are represented on [CompanyDraft](ctp:api:type:CompanyDraft) and [DivisionDraft](ctp:api:type:DivisionDraft).
 *
 */
export type BusinessUnitDraft = CompanyDraft | DivisionDraft
/**
 *	[Reference](/../api/types#reference) to a [BusinessUnit](ctp:api:type:BusinessUnit) by its key.
 *
 */
export interface BusinessUnitKeyReference {
  readonly typeId: 'business-unit'
  /**
   *	Unique and immutable key of the referenced [BusinessUnit](ctp:api:type:BusinessUnit).
   *
   *
   */
  readonly key: string
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [BusinessUnit](ctp:api:type:BusinessUnit).
 *
 */
export interface BusinessUnitPagedQueryResponse {
  /**
   *	Number of requested [results](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *	Number of elements [skipped](/../api/general-concepts#offset).
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
   *	[BusinessUnits](ctp:api:type:BusinessUnit) matching the query.
   *
   *
   */
  readonly results: BusinessUnit[]
}
/**
 *	[Reference](/../api/types#reference) to a [BusinessUnit](ctp:api:type:BusinessUnit).
 *
 */
export interface BusinessUnitReference {
  readonly typeId: 'business-unit'
  /**
   *	Unique identifier of the referenced [BusinessUnit](ctp:api:type:BusinessUnit).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded BusinessUnit. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for BusinessUnit.
   *
   *
   */
  readonly obj?: BusinessUnit
}
/**
 *	[ResourceIdentifier](/../api/types#resourceidentifier) to a [BusinessUnit](ctp:api:type:BusinessUnit). Either `id` or `key` is required. If both are set, an [InvalidJsonInput](/../api/errors#invalidjsoninput) error is returned.
 *
 */
export interface BusinessUnitResourceIdentifier {
  readonly typeId: 'business-unit'
  /**
   *	Unique identifier of the referenced [BusinessUnit](ctp:api:type:BusinessUnit). Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	Unique key of the referenced [BusinessUnit](ctp:api:type:BusinessUnit). Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
/**
 *	Indicates whether the Business Unit can be edited and used in [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quote Requests](ctp:api:type:QuoteRequest), or [Quotes](ctp:api:type:Quote).
 *
 */
export type BusinessUnitStatus = 'Active' | 'Inactive' | string
/**
 *	Defines whether the Stores of the Business Unit are set directly on the Business Unit or are inherited from its parent unit.
 *
 */
export type BusinessUnitStoreMode = 'Explicit' | 'FromParent' | string
/**
 *	The type of the Business Unit indicating its position in a hierarchy.
 *
 */
export type BusinessUnitType = 'Company' | 'Division' | string
export interface BusinessUnitUpdate {
  /**
   *	Expected version of the BusinessUnit on which the changes should be applied.
   *	If the expected version does not match the actual version, a [409 Conflict](/../api/errors#409-conflict) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the BusinessUnit.
   *
   *
   */
  readonly actions: BusinessUnitUpdateAction[]
}
export type BusinessUnitUpdateAction =
  | BusinessUnitAddAddressAction
  | BusinessUnitAddAssociateAction
  | BusinessUnitAddBillingAddressIdAction
  | BusinessUnitAddShippingAddressIdAction
  | BusinessUnitAddStoreAction
  | BusinessUnitChangeAddressAction
  | BusinessUnitChangeAssociateAction
  | BusinessUnitChangeAssociateModeAction
  | BusinessUnitChangeNameAction
  | BusinessUnitChangeParentUnitAction
  | BusinessUnitChangeStatusAction
  | BusinessUnitRemoveAddressAction
  | BusinessUnitRemoveAssociateAction
  | BusinessUnitRemoveBillingAddressIdAction
  | BusinessUnitRemoveShippingAddressIdAction
  | BusinessUnitRemoveStoreAction
  | BusinessUnitSetAddressCustomFieldAction
  | BusinessUnitSetAddressCustomTypeAction
  | BusinessUnitSetAssociatesAction
  | BusinessUnitSetContactEmailAction
  | BusinessUnitSetCustomFieldAction
  | BusinessUnitSetCustomTypeAction
  | BusinessUnitSetDefaultBillingAddressAction
  | BusinessUnitSetDefaultShippingAddressAction
  | BusinessUnitSetStoreModeAction
  | BusinessUnitSetStoresAction
/**
 *	Business Unit type to represent the top level of a business.
 *	Contains specific fields and values that differentiate a Company from the generic [BusinessUnit](ctp:api:type:BusinessUnit).
 *
 */
export interface Company {
  readonly unitType: 'Company'
  /**
   *	Unique identifier of the Business Unit.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Business Unit.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Business Unit was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Business Unit was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources updated after 1 February 2019 except for [events not tracked](/../api/general-concepts#events-tracked).
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
   *	User-defined unique identifier of the Business Unit.
   *
   *
   */
  readonly key: string
  /**
   *	Indicates whether the Business Unit can be edited and used in [Orders](/../api/projects/orders).
   *
   *
   */
  readonly status: BusinessUnitStatus
  /**
   *	References to [Stores](ctp:api:type:Store) the Business Unit is associated with. Only present when `storeMode` is `Explicit`.
   *
   *	If the Business Unit has Stores defined, then all of its [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quotes](ctp:api:type:Quote), or [Quote Requests](ctp:api:type:QuoteRequest) must belong to one of the Business Unit's Stores.
   *
   *	If the Business Unit has no Stores, then all of its [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quotes](ctp:api:type:Quote), or [Quote Requests](ctp:api:type:QuoteRequest) must not belong to any Store.
   *
   *
   */
  readonly stores?: StoreKeyReference[]
  /**
   *	Is always `Explicit` since a Company cannot have a parent Business Unit that Stores can be inherited from.
   *
   *
   */
  readonly storeMode: BusinessUnitStoreMode
  /**
   *	Name of the Business Unit.
   *
   *
   */
  readonly name: string
  /**
   *	Email address of the Business Unit.
   *
   *
   */
  readonly contactEmail?: string
  /**
   *	Custom Fields for the Business Unit.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	Addresses used by the Business Unit.
   *
   *
   */
  readonly addresses: Address[]
  /**
   *	Unique identifiers of addresses used as shipping addresses.
   *
   *
   */
  readonly shippingAddressIds?: string[]
  /**
   *	Unique identifier of the address used as the default shipping address.
   *
   *
   */
  readonly defaultShippingAddressId?: string
  /**
   *	Unique identifiers of addresses used as billing addresses.
   *
   *
   */
  readonly billingAddressIds?: string[]
  /**
   *	Unique identifier of the address used as the default billing address.
   *
   *
   */
  readonly defaultBillingAddressId?: string
  /**
   *	Is always `Explicit` since a Company cannot have a parent Business Unit that Associates can be inherited from.
   *
   *
   */
  readonly associateMode: BusinessUnitAssociateMode
  /**
   *	Associates that are part of the Business Unit in specific [roles](ctp:api:type:AssociateRole).
   *
   *
   */
  readonly associates: Associate[]
  /**
   *	Associates that are inherited from a parent Business Unit. This value of this field is [eventually consistent](/../api/general-concepts#eventual-consistency) and is only present when the `associateMode` is set to `ExplicitAndFromParent`.
   *
   *
   */
  readonly inheritedAssociates?: InheritedAssociate[]
  /**
   *	Parent unit of the Business Unit. Only present when the `unitType` is `Division`.
   *
   *
   */
  readonly parentUnit?: BusinessUnitKeyReference
  /**
   *	Top-level unit of the Business Unit. The top-level unit is of `unitType` `Company`.
   *
   *
   */
  readonly topLevelUnit: BusinessUnitKeyReference
}
/**
 *	Draft type to represent the top level of a business. Contains the fields and values of the generic [BusinessUnitDraft](ctp:api:type:BusinessUnitDraft) that are used specifically for creating a [Company](ctp:api:type:Company).
 *
 */
export interface CompanyDraft {
  readonly unitType: 'Company'
  /**
   *	User-defined unique identifier for the Business Unit.
   *
   *
   */
  readonly key: string
  /**
   *	Indicates whether the Business Unit can be edited and used in [Orders](/../api/projects/orders).
   *
   *
   */
  readonly status?: BusinessUnitStatus
  /**
   *	Sets the [Stores](ctp:api:type:Store) the Business Unit is associated with. Can only be set when `storeMode` is `Explicit`.
   *	Defaults to empty for [Companies](ctp:api:type:BusinessUnitType) and not set for [Divisions](ctp:api:type:BusinessUnitType).
   *
   *	If the Business Unit has Stores defined, then all of its [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quotes](ctp:api:type:Quote), or [Quote Requests](ctp:api:type:QuoteRequest) must belong to one of the Business Unit's Stores.
   *
   *	If the Business Unit has no Stores, then all of its [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quotes](ctp:api:type:Quote), or [Quote Requests](ctp:api:type:QuoteRequest) must not belong to any Store.
   *
   *
   */
  readonly stores?: StoreResourceIdentifier[]
  /**
   *	Defines whether the Stores of the Business Unit are set directly on the Business Unit or are inherited from a parent.
   *	`storeMode` is always `Explicit` for [Companies](ctp:api:type:BusinessUnitType) and defaults to `FromParent` for [Divisions](ctp:api:type:BusinessUnitType).
   *
   *
   */
  readonly storeMode?: BusinessUnitStoreMode
  /**
   *	Name of the Business Unit.
   *
   *
   */
  readonly name: string
  /**
   *	Email address of the Business Unit.
   *
   *
   */
  readonly contactEmail?: string
  /**
   *	Determines whether the Business Unit can inherit Associates from a parent.
   *	Always `Explicit` for [Companies](ctp:api:type:BusinessUnitType) and defaults to `ExplicitAndFromParent` for [Divisions](ctp:api:type:BusinessUnitType).
   *
   *
   */
  readonly associateMode?: BusinessUnitAssociateMode
  /**
   *	List of members that are part of the Business Unit in specific [roles](ctp:api:type:AssociateRole).
   *
   *
   */
  readonly associates?: AssociateDraft[]
  /**
   *	Addresses used by the Business Unit.
   *
   *
   */
  readonly addresses?: BaseAddress[]
  /**
   *	Indexes of entries in `addresses` to set as shipping addresses.
   *	The `shippingAddressIds` of the [Customer](ctp:api:type:Customer) will be replaced by these addresses.
   *
   *
   */
  readonly shippingAddresses?: number[]
  /**
   *	Index of the entry in `addresses` to set as the default shipping address.
   *
   *
   */
  readonly defaultShippingAddress?: number
  /**
   *	Indexes of entries in `addresses` to set as billing addresses.
   *	The `billingAddressIds` of the [Customer](ctp:api:type:Customer) will be replaced by these addresses.
   *
   *
   */
  readonly billingAddresses?: number[]
  /**
   *	Index of the entry in `addresses` to set as the default billing address.
   *
   *
   */
  readonly defaultBillingAddress?: number
  /**
   *	Custom Fields for the Business Unit.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
/**
 *	Business Unit type to model divisions that are part of the [Company](ctp:api:type:Company) or a higher-order Division.
 *	Contains specific fields and values that differentiate a Division from the generic [BusinessUnit](ctp:api:type:BusinessUnit).
 *
 */
export interface Division {
  readonly unitType: 'Division'
  /**
   *	Unique identifier of the Business Unit.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Business Unit.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Business Unit was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Business Unit was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources updated after 1 February 2019 except for [events not tracked](/../api/general-concepts#events-tracked).
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
   *	User-defined unique identifier of the Business Unit.
   *
   *
   */
  readonly key: string
  /**
   *	Indicates whether the Business Unit can be edited and used in [Orders](/../api/projects/orders).
   *
   *
   */
  readonly status: BusinessUnitStatus
  /**
   *	References to [Stores](ctp:api:type:Store) the Business Unit is associated with. Only present when `storeMode` is `Explicit`.
   *
   *	If the Business Unit has Stores defined, then all of its [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quotes](ctp:api:type:Quote), or [Quote Requests](ctp:api:type:QuoteRequest) must belong to one of the Business Unit's Stores.
   *
   *	If the Business Unit has no Stores, then all of its [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quotes](ctp:api:type:Quote), or [Quote Requests](ctp:api:type:QuoteRequest) must not belong to any Store.
   *
   *
   */
  readonly stores?: StoreKeyReference[]
  /**
   *	Defines whether the Stores of the Division are set explicitly or inherited from a parent Business Unit.
   *
   *
   */
  readonly storeMode: BusinessUnitStoreMode
  /**
   *	Name of the Business Unit.
   *
   *
   */
  readonly name: string
  /**
   *	Email address of the Business Unit.
   *
   *
   */
  readonly contactEmail?: string
  /**
   *	Custom Fields for the Business Unit.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	Addresses used by the Business Unit.
   *
   *
   */
  readonly addresses: Address[]
  /**
   *	Unique identifiers of addresses used as shipping addresses.
   *
   *
   */
  readonly shippingAddressIds?: string[]
  /**
   *	Unique identifier of the address used as the default shipping address.
   *
   *
   */
  readonly defaultShippingAddressId?: string
  /**
   *	Unique identifiers of addresses used as billing addresses.
   *
   *
   */
  readonly billingAddressIds?: string[]
  /**
   *	Unique identifier of the address used as the default billing address.
   *
   *
   */
  readonly defaultBillingAddressId?: string
  /**
   *	Determines whether the Division can inherit Associates from a parent.
   *
   *
   */
  readonly associateMode: BusinessUnitAssociateMode
  /**
   *	Associates that are part of the Business Unit in specific [roles](ctp:api:type:AssociateRole).
   *
   *
   */
  readonly associates: Associate[]
  /**
   *	Associates that are inherited from a parent Business Unit. This value of this field is [eventually consistent](/../api/general-concepts#eventual-consistency) and is only present when the `associateMode` is set to `ExplicitAndFromParent`.
   *
   *
   */
  readonly inheritedAssociates?: InheritedAssociate[]
  /**
   *	Parent unit of the Division.
   *
   *
   */
  readonly parentUnit: BusinessUnitKeyReference
  /**
   *	Top-level unit of the Business Unit. The top-level unit is of `unitType` `Company`.
   *
   *
   */
  readonly topLevelUnit: BusinessUnitKeyReference
}
/**
 *	Draft type to model divisions that are part of a [Company](ctp:api:type:Company) or a higher-order [Division](ctp:api:type:Division).
 *	Contains the fields and values of the generic [BusinessUnitDraft](ctp:api:type:BusinessUnitDraft) that are used specifically for creating a Division.
 *
 */
export interface DivisionDraft {
  readonly unitType: 'Division'
  /**
   *	User-defined unique identifier for the Business Unit.
   *
   *
   */
  readonly key: string
  /**
   *	Indicates whether the Business Unit can be edited and used in [Orders](/../api/projects/orders).
   *
   *
   */
  readonly status?: BusinessUnitStatus
  /**
   *	Sets the [Stores](ctp:api:type:Store) the Business Unit is associated with. Can only be set when `storeMode` is `Explicit`.
   *	Defaults to empty for [Companies](ctp:api:type:BusinessUnitType) and not set for [Divisions](ctp:api:type:BusinessUnitType).
   *
   *	If the Business Unit has Stores defined, then all of its [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quotes](ctp:api:type:Quote), or [Quote Requests](ctp:api:type:QuoteRequest) must belong to one of the Business Unit's Stores.
   *
   *	If the Business Unit has no Stores, then all of its [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [Quotes](ctp:api:type:Quote), or [Quote Requests](ctp:api:type:QuoteRequest) must not belong to any Store.
   *
   *
   */
  readonly stores?: StoreResourceIdentifier[]
  /**
   *	If not set, the Division inherits the [Stores](ctp:api:type:Store) from a parent unit.
   *	Set this to `Explicit` if you want to set the Stores explicitly in the `stores` field instead.
   *
   *
   */
  readonly storeMode?: BusinessUnitStoreMode
  /**
   *	Name of the Business Unit.
   *
   *
   */
  readonly name: string
  /**
   *	Email address of the Business Unit.
   *
   *
   */
  readonly contactEmail?: string
  /**
   *	Determines whether the Division can inherit Associates from a parent.
   *
   *
   */
  readonly associateMode?: BusinessUnitAssociateMode
  /**
   *	List of members that are part of the Business Unit in specific [roles](ctp:api:type:AssociateRole).
   *
   *
   */
  readonly associates?: AssociateDraft[]
  /**
   *	Addresses used by the Business Unit.
   *
   *
   */
  readonly addresses?: BaseAddress[]
  /**
   *	Indexes of entries in `addresses` to set as shipping addresses.
   *	The `shippingAddressIds` of the [Customer](ctp:api:type:Customer) will be replaced by these addresses.
   *
   *
   */
  readonly shippingAddresses?: number[]
  /**
   *	Index of the entry in `addresses` to set as the default shipping address.
   *
   *
   */
  readonly defaultShippingAddress?: number
  /**
   *	Indexes of entries in `addresses` to set as billing addresses.
   *	The `billingAddressIds` of the [Customer](ctp:api:type:Customer) will be replaced by these addresses.
   *
   *
   */
  readonly billingAddresses?: number[]
  /**
   *	Index of the entry in `addresses` to set as the default billing address.
   *
   *
   */
  readonly defaultBillingAddress?: number
  /**
   *	Custom Fields for the Business Unit.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	The parent unit of this Division. Can be a Company or a Division.
   *
   *
   */
  readonly parentUnit: BusinessUnitResourceIdentifier
}
export interface InheritedAssociate {
  /**
   *	Inherited roles of the Associate within a Business Unit.
   *
   *
   */
  readonly associateRoleAssignments: InheritedAssociateRoleAssignment[]
  /**
   *	The [Customer](ctp:api:type:Customer) that acts as an Associate in the Business Unit.
   *
   *
   */
  readonly customer: CustomerReference
}
export interface InheritedAssociateRoleAssignment {
  /**
   *	Inherited role the Associate holds within a Business Unit.
   *
   *
   */
  readonly associateRole: AssociateRoleKeyReference
  /**
   *	Reference to the parent Business Unit where the assignment is defined explicitly.
   *
   *
   */
  readonly source: BusinessUnitKeyReference
}
/**
 *	Adding an address to a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitAddressAdded](ctp:api:type:BusinessUnitAddressAddedMessage) Message.
 *
 */
export interface BusinessUnitAddAddressAction {
  readonly action: 'addAddress'
  /**
   *	Address to add to the addresses of the [Business Unit](ctp:api:type:BusinessUnit).
   *
   *
   */
  readonly address: _BaseAddress
}
/**
 *	Adding an Associate to a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitAssociateAdded](ctp:api:type:BusinessUnitAssociateAddedMessage) Message.
 *
 */
export interface BusinessUnitAddAssociateAction {
  readonly action: 'addAssociate'
  /**
   *	The Associate to add.
   *
   *
   */
  readonly associate: AssociateDraft
}
/**
 *	Adding a billing address to a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitBillingAddressAdded](ctp:api:type:BusinessUnitBillingAddressAddedMessage) Message.
 *
 */
export interface BusinessUnitAddBillingAddressIdAction {
  readonly action: 'addBillingAddressId'
  /**
   *	ID of the address to add as a billing address. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressId?: string
  /**
   *	Key of the address to add as a billing address. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Adding a shipping address to a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitShippingAddressAdded](ctp:api:type:BusinessUnitShippingAddressAddedMessage) Message.
 *
 */
export interface BusinessUnitAddShippingAddressIdAction {
  readonly action: 'addShippingAddressId'
  /**
   *	ID of the address to add as a shipping address. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressId?: string
  /**
   *	Key of the address to add as a shipping address. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Adding a [Store](ctp:api:type:Store) to a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitStoreAdded](ctp:api:type:BusinessUnitStoreAddedMessage) Message.
 *	Only applicable when `storeMode` is `Explicit`.
 *
 */
export interface BusinessUnitAddStoreAction {
  readonly action: 'addStore'
  /**
   *	[Store](ctp:api:type:Store) to add.
   *
   *
   */
  readonly store: StoreResourceIdentifier
}
/**
 *	Changing the address on a Business Unit generates the [BusinessUnitAddressChanged](ctp:api:type:BusinessUnitAddressChangedMessage) Message.
 *
 */
export interface BusinessUnitChangeAddressAction {
  readonly action: 'changeAddress'
  /**
   *	ID of the address to change. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressId?: string
  /**
   *	Key of the address to change. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressKey?: string
  /**
   *	New address to set.
   *
   *
   */
  readonly address: _BaseAddress
}
/**
 *	Updating the [Associate](ctp:api:type:Associate) on a [Business Unit](ctp:api:type:BusinessUnit) generates the [BusinessUnitAssociateChanged](ctp:api:type:BusinessUnitAssociateChangedMessage) Message.
 *
 */
export interface BusinessUnitChangeAssociateAction {
  readonly action: 'changeAssociate'
  /**
   *	New version of an existing Associate.
   *
   *
   */
  readonly associate: AssociateDraft
}
/**
 *	Only Business Units of type `Division` can be changed to `ExplicitAndFromParent`.
 *	This update action generates a [BusinessUnitAssociateModeChanged](ctp:api:type:BusinessUnitAssociateModeChangedMessage) Message.
 *
 */
export interface BusinessUnitChangeAssociateModeAction {
  readonly action: 'changeAssociateMode'
  /**
   *	The new value for `associateMode`.
   *
   *
   */
  readonly associateMode: BusinessUnitAssociateMode
}
/**
 *	Updating the name on a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitNameChanged](ctp:api:type:BusinessUnitNameChangedMessage) Message.
 *
 */
export interface BusinessUnitChangeNameAction {
  readonly action: 'changeName'
  /**
   *	New name to set.
   *
   *
   */
  readonly name: string
}
/**
 *	Changing the parent of a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitParentChanged](ctp:api:type:BusinessUnitParentChangedMessage) Message.
 *
 */
export interface BusinessUnitChangeParentUnitAction {
  readonly action: 'changeParentUnit'
  /**
   *	New parent unit of the [Business Unit](ctp:api:type:BusinessUnit). The new parent unit must have the same top-level unit as the old parent unit.
   *
   *
   */
  readonly parentUnit: BusinessUnitResourceIdentifier
}
/**
 *	Changing the status of a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitStatusChanged](ctp:api:type:BusinessUnitStatusChangedMessage) Message.
 *
 */
export interface BusinessUnitChangeStatusAction {
  readonly action: 'changeStatus'
  /**
   *	New status to set.
   *
   *
   */
  readonly status: string
}
/**
 *	Removing the address from a [Business Unit](ctp:api:type:BusinessUnit) generates the [BusinessUnitAddressRemoved](ctp:api:type:BusinessUnitAddressRemovedMessage) Message.
 *
 */
export interface BusinessUnitRemoveAddressAction {
  readonly action: 'removeAddress'
  /**
   *	ID of the address to be removed. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressId?: string
  /**
   *	Key of the address to be removed. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Removing an [Associate](ctp:api:type:Associate) from a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitAssociateRemoved](ctp:api:type:BusinessUnitAssociateRemovedMessage) Message.
 *
 */
export interface BusinessUnitRemoveAssociateAction {
  readonly action: 'removeAssociate'
  /**
   *	[Associate](ctp:api:type:Associate) to remove.
   *
   *
   */
  readonly customer: CustomerResourceIdentifier
}
/**
 *	Removing a billing address from a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitBillingAddressRemoved](ctp:api:type:BusinessUnitBillingAddressRemovedMessage) Message.
 *
 */
export interface BusinessUnitRemoveBillingAddressIdAction {
  readonly action: 'removeBillingAddressId'
  /**
   *	ID of the address to be removed from `billingAddressIds`. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressId?: string
  /**
   *	Key of the address to be removed from `billingAddressIds`. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Removing a shipping address from a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitShippingAddressRemoved](ctp:api:type:BusinessUnitShippingAddressRemovedMessage) Message.
 *
 */
export interface BusinessUnitRemoveShippingAddressIdAction {
  readonly action: 'removeShippingAddressId'
  /**
   *	ID of the address to be removed from `shippingAddressIds`. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressId?: string
  /**
   *	Key of the address to be removed from `shippingAddressIds`. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Removes a Store from the Business Unit.
 *	Newly created [Carts](ctp:api:type:Cart) and [Orders](ctp:api:type:Order) can no longer reference the removed Store for the Business Unit.
 *	We recommend cleaning up unordered Carts that still have the Store assigned after calling this update action since those cannot be converted to Orders.
 *	Orders created before the Store was removed remain unchanged.
 *	Generates a [BusinessUnitStoreRemoved](ctp:api:type:BusinessUnitStoreRemovedMessage) Message.
 *	Only applicable when `storeMode` is `Explicit`.
 *
 */
export interface BusinessUnitRemoveStoreAction {
  readonly action: 'removeStore'
  /**
   *	[Store](ctp:api:type:Store) to remove.
   *
   *
   */
  readonly store: StoreResourceIdentifier
}
/**
 *	Adding a Custom Field to an Address of a Business Unit generates the [BusinessUnitAddressCustomFieldAdded](ctp:api:type:BusinessUnitAddressCustomFieldAddedMessage) Message, removing one generates the [BusinessUnitAddressCustomFieldRemoved](ctp:api:type:BusinessUnitAddressCustomFieldRemovedMessage) Message, and updating an existing one generates the [BusinessUnitAddressCustomFieldChanged](ctp:api:type:BusinessUnitAddressCustomFieldChangedMessage) Message.
 *
 */
export interface BusinessUnitSetAddressCustomFieldAction {
  readonly action: 'setAddressCustomField'
  /**
   *	ID of the address to be extended.
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
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
/**
 *	Adding or updating a Custom Type on an Address of a Business Unit generates the [BusinessUnitAddressCustomTypeSet](ctp:api:type:BusinessUnitAddressCustomTypeSetMessage) Message, and removing one generates the [BusinessUnitAddressCustomTypeRemoved](ctp:api:type:BusinessUnitAddressCustomTypeRemovedMessage) Message.
 *
 */
export interface BusinessUnitSetAddressCustomTypeAction {
  readonly action: 'setAddressCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the `address` with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the `address`.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) for the `address`.
   *
   *
   */
  readonly fields?: FieldContainer
  /**
   *	ID of the address to be extended.
   *
   *
   */
  readonly addressId: string
}
/**
 *	Changes the Associates of a [Business Unit](ctp:api:type:BusinessUnit), generates a [BusinessUnitAssociatesSet](ctp:api:type:BusinessUnitAssociatesSetMessage) Message.
 *
 */
export interface BusinessUnitSetAssociatesAction {
  readonly action: 'setAssociates'
  /**
   *	The new list of Associates. If not provided, any existing list is removed.
   *
   *
   */
  readonly associates: AssociateDraft[]
}
/**
 *	Setting the contact email on a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitContactEmailSet](ctp:api:type:BusinessUnitContactEmailSetMessage) Message.
 *
 */
export interface BusinessUnitSetContactEmailAction {
  readonly action: 'setContactEmail'
  /**
   *	Email to set.
   *	If `contactEmail` is absent or `null`, the existing contact email, if any, will be removed.
   *
   *
   */
  readonly contactEmail?: string
}
/**
 *	Adding a Custom Field to a Business Unit generates the [BusinessUnitCustomFieldAdded](ctp:api:type:BusinessUnitCustomFieldAddedMessage) Message, removing one generates the [BusinessUnitCustomFieldRemoved](ctp:api:type:BusinessUnitCustomFieldRemovedMessage) Message, and updating an existing one generates the [BusinessUnitCustomFieldChanged](ctp:api:type:BusinessUnitCustomFieldChangedMessage) Message.
 *
 */
export interface BusinessUnitSetCustomFieldAction {
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
 *	Adding or updating a Custom Type on a Business Unit generates the [BusinessUnitCustomTypeSet](ctp:api:type:BusinessUnitCustomTypeSetMessage) Message, removing one generates the [BusinessUnitCustomTypeRemoved](ctp:api:type:BusinessUnitCustomTypeRemovedMessage) Message.
 *
 */
export interface BusinessUnitSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the BusinessUnit with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the BusinessUnit.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) for the BusinessUnit.
   *
   *
   */
  readonly fields?: FieldContainer
}
/**
 *	Setting the default billing address on a [Business Unit](ctp:api:type:BusinessUnit) generates the [BusinessUnitDefaultBillingAddressSet](ctp:api:type:BusinessUnitDefaultBillingAddressSetMessage) Message.
 *
 */
export interface BusinessUnitSetDefaultBillingAddressAction {
  readonly action: 'setDefaultBillingAddress'
  /**
   *	ID of the address to add as a billing address. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressId?: string
  /**
   *	Key of the address to add as a billing address. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Setting the default shipping address on a [Business Unit](ctp:api:type:BusinessUnit) generates a [BusinessUnitDefaultShippingAddressSet](ctp:api:type:BusinessUnitDefaultShippingAddressSetMessage) Message.
 *
 */
export interface BusinessUnitSetDefaultShippingAddressAction {
  readonly action: 'setDefaultShippingAddress'
  /**
   *	ID of the address to add as a shipping address. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressId?: string
  /**
   *	Key of the address to add as a shipping address. Either `addressId` or `addressKey` is required.
   *
   *
   */
  readonly addressKey?: string
}
/**
 *	Only Business Units of type `Division` can be have a store mode of `FromParent`. Changing the `storeMode` to `FromParent` empties the `stores` array on the BusinessUnit.
 *	This update action generates a [BusinessUnitStoreModeChanged](ctp:api:type:BusinessUnitStoreModeChangedMessage) Message.
 *
 */
export interface BusinessUnitSetStoreModeAction {
  readonly action: 'setStoreMode'
  /**
   *	Set to `Explicit` to specify Stores for the Business Unit. Set to `FromParent` to inherit Stores from a parent.
   *
   *
   */
  readonly storeMode: BusinessUnitStoreMode
  /**
   *	Set the [Stores](ctp:api:type:Store) the Business Unit is associated with. Can only be set if `storeMode` is `Explicit`.
   *
   *
   */
  readonly stores?: StoreResourceIdentifier[]
}
/**
 *	Sets the Stores of the Business Unit. Can only be set if the Business Unit `storeMode` is `Explicit`.
 *	[Carts](ctp:api:type:Cart) and [Orders](ctp:api:type:Order) created after the Set Stores update must use the new Stores of
 *	the Business Unit and, if set, their [Product Selections](ctp:api:type:ProductSelection), and [Channels](ctp:api:type:Channel).
 *	Orders created before the Set Stores update action remain unchanged.
 *	Setting the Stores on a Business Unit generates a [BusinessUnitStoresSet](ctp:api:type:BusinessUnitStoresSetMessage) Message.
 *
 */
export interface BusinessUnitSetStoresAction {
  readonly action: 'setStores'
  /**
   *	[Stores](ctp:api:type:Store) to set. Overrides the current list of Stores.
   *
   *
   */
  readonly stores?: StoreResourceIdentifier[]
}
