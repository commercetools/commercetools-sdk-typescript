/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { BaseResource, CreatedBy, LastModifiedBy } from './common'

/**
 *	A geographical location representing a country and optionally a state within this country.  A location can only be assigned to one Zone.
 */
export interface Location {
  /**
   *	Country code of the geographic location.
   *
   */
  readonly country: string
  /**
   *	State within the country.
   *
   */
  readonly state?: string
}
export interface Zone extends BaseResource {
  /**
   *	Unique identifier of the Zone.
   *
   */
  readonly id: string
  /**
   *	Current version of the Zone.
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Zone was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Zone was last updated.
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
   *	User-defined unique identifier of the Zone.
   *
   *
   */
  readonly key?: string
  /**
   *	Name of the Zone.
   *
   */
  readonly name: string
  /**
   *	Description of the Zone.
   *
   */
  readonly description?: string
  /**
   *	List of locations that belong to the Zone.
   *
   */
  readonly locations: Location[]
}
export interface ZoneDraft {
  /**
   *	User-defined unique identifier for the Zone.
   *
   */
  readonly key?: string
  /**
   *	Name of the Zone.
   *
   */
  readonly name: string
  /**
   *	Description of the Zone.
   *
   */
  readonly description?: string
  /**
   *	List of locations that belong to the Zone.
   *
   */
  readonly locations?: Location[]
}
/**
 *	[PagedQueryResult](/general-concepts#pagedqueryresult) with `results` containing an array of [Zone](ctp:api:type:Zone).
 *
 */
export interface ZonePagedQueryResponse {
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
   *	[Zones](ctp:api:type:Zone) matching the query.
   *
   *
   */
  readonly results: Zone[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [Zone](ctp:api:type:Zone).
 *
 */
export interface ZoneReference {
  readonly typeId: 'zone'
  /**
   *	Unique identifier of the referenced [Zone](ctp:api:type:Zone).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded Zone. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for Zones.
   *
   *
   */
  readonly obj?: Zone
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Zone](ctp:api:type:Zone). Either `id` or `key` is required. If both are set, an [InvalidJsonInput](/../api/errors#invalidjsoninput) error is returned.
 *
 */
export interface ZoneResourceIdentifier {
  readonly typeId: 'zone'
  /**
   *	Unique identifier of the referenced [Zone](ctp:api:type:Zone). Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [Zone](ctp:api:type:Zone). Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
export interface ZoneUpdate {
  /**
   *	Expected version of the Zone on which the changes should be applied. If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error is returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Zone.
   *
   *
   */
  readonly actions: ZoneUpdateAction[]
}
export type ZoneUpdateAction =
  | ZoneAddLocationAction
  | ZoneChangeNameAction
  | ZoneRemoveLocationAction
  | ZoneSetDescriptionAction
  | ZoneSetKeyAction
export interface ZoneAddLocationAction {
  readonly action: 'addLocation'
  /**
   *	Location to be added to the Zone.
   *
   */
  readonly location: Location
}
export interface ZoneChangeNameAction {
  readonly action: 'changeName'
  /**
   *	New name of the Zone.
   *
   */
  readonly name: string
}
export interface ZoneRemoveLocationAction {
  readonly action: 'removeLocation'
  /**
   *	Location to be removed from the Zone.
   *
   */
  readonly location: Location
}
export interface ZoneSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *	Description of the Zone.
   *
   */
  readonly description?: string
}
export interface ZoneSetKeyAction {
  readonly action: 'setKey'
  /**
   *	If `key` is absent or `null`, the existing key, if any, will be removed.
   *
   */
  readonly key?: string
}
