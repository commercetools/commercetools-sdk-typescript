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

import { KeyReference, ProcessingState } from './common'
import { ErrorObject } from './errors'

/**
 *	Shows the import status of a specific resource.
 *
 */
export interface ImportOperation {
  /**
   *	The version of the ImportOperation.
   *
   */
  readonly version: number
  /**
   *	The key of the [ImportSink](/import-sink#importsink).
   *
   */
  readonly importSinkKey: string
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
   *	The import status of the resource. Set to `Rejected` or `ValidationFailed` if the import of the resource was not successful.
   *
   *
   */
  readonly state: ProcessingState
  /**
   *	The version of the impmorted resource when the import was successful.
   *
   */
  readonly resourceVersion?: number
  /**
   *	Contains an error if the import of the resource was not successful. See [Errors](/error).
   *
   *
   */
  readonly errors?: ErrorObject[]
  /**
   *	In case of unresolved status this array will show the unresolved references
   *
   *
   */
  readonly unresolvedReferences?: KeyReference[]
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
 *	Used as a response to a query request for Import Operations.
 *
 */
export interface ImportOperationPagedResponse {
  /**
   *	The number of results requested in the query request.
   *
   */
  readonly limit: number
  /**
   *	The number of elements skipped, not a page number.
   *	Supplied by the client or the server default.
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
export type ImportOperationState = 'Unresolved' | 'ValidationFailed'
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
   *	See [Errors](/error).
   *
   *
   */
  readonly errors?: ErrorObject[]
}
