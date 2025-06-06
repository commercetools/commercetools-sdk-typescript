/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ProcessingState, UnresolvedReferences } from './common'
import { ErrorObject } from './errors'

/**
 *	Import Operation describes the import status of a specific resource.
 *
 */
export interface ImportOperation {
  /**
   *	The version of the ImportOperation.
   *
   */
  readonly version: number
  /**
   *	The key of the [ImportContainer](ctp:import:type:ImportContainer).
   *
   */
  readonly importContainerKey: string
  /**
   *	The key of the resource.
   *
   */
  readonly resourceKey: string
  /**
   *	The ID of the ImportOperation.
   *
   */
  readonly id: string
  /**
   *	The import status of the resource. Set to `rejected` or `validationFailed` if the import of the resource was not successful.
   *
   *
   */
  readonly state: ProcessingState
  /**
   *	The version of the imported resource when the import was successful.
   *
   */
  readonly resourceVersion?: number
  /**
   *	Contains an error if the import of the resource was not successful. See [Errors](/import-export/error).
   *
   *
   */
  readonly errors?: ErrorObject[]
  /**
   *	In case of unresolved status this array will show the unresolved references
   *
   *
   */
  readonly unresolvedReferences?: UnresolvedReferences[]
  /**
   *	The time when the ImportOperation was created.
   *
   */
  readonly createdAt: string
  /**
   *	The last time When the ImportOperation was modified.
   *
   */
  readonly lastModifiedAt: string
  /**
   *	The expiration time of the ImportOperation.
   *
   */
  readonly expiresAt: string
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) for Import Operations.
 *
 */
export interface ImportOperationPagedResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
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
   *	The actual number of results returned.
   *
   */
  readonly count: number
  /**
   *	The total number of import operations matching the query.
   *
   */
  readonly total: number
  /**
   *	The array of Import Operations matching the query.
   *
   */
  readonly results: ImportOperation[]
}
/**
 *	Describes the validation state of a newly created [ImportOperation](#importoperation).
 *
 */
export enum ImportOperationStateValues {
  Processing = 'processing',
  ValidationFailed = 'validationFailed',
}

export type ImportOperationState =
  | 'processing'
  | 'validationFailed'
  | (string & {})
/**
 *	The ID and validation status of a new [ImportOperation](#importoperation).
 */
export interface ImportOperationStatus {
  /**
   *	The ID of the [ImportOperation](#importoperation).
   *
   */
  readonly operationId?: string
  /**
   *	The validation state of the [ImportOperation](#importoperation).
   *
   */
  readonly state: ImportOperationState
  /**
   *	The validation errors for the [ImportOperation](#importoperation).
   *	See [Errors](/import-export/error).
   *
   *
   */
  readonly errors?: ErrorObject[]
}
