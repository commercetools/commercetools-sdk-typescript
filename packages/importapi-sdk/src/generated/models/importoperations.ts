/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.vrap.io/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */

import { ProcessingState } from './common'
import { ErrorObject } from './errors'

/**
 *	Tracks the status of a single import resource as it is imported into the commercetools project.
 *
 */
export interface ImportOperation {
  /**
   *	The import operation version.
   *
   */
  readonly version: number
  /**
   *	The key of the import sink.
   *
   */
  readonly importSinkKey: string
  /**
   *	The key of the import resource.
   *
   */
  readonly resourceKey: string
  /**
   *	The identifier of the operaton that is to be commited
   *
   */
  readonly id: string
  /**
   *	The status of the import resource.
   *
   *
   */
  readonly state: ProcessingState
  /**
   *	When the resource is successfully imported, this represents the imported resource version
   *
   */
  readonly resourceVersion?: number
  /**
   *	The number of request retries for processing the import resource.
   *
   *
   */
  readonly retryCount: number
  /**
   *	If an import resource does not import correctly, the state is set to `Rejected` or `ValidationFailed`
   *	and this property contains the errors.
   *
   *
   */
  readonly errors?: ErrorObject[]
  /**
   *	When the import operation was created.
   *
   */
  readonly createdAt: string
  /**
   *	When the import operation was modified.
   *
   */
  readonly lastModifiedAt: string
  /**
   *	When the import operation expires.
   *
   */
  readonly expiresAt: string
}
/**
 *	This type represents a paged import operation result.
 */
export interface ImportOperationPagedResponse {
  /**
   *	The maximum number of import operations returned for a page.
   *
   */
  readonly limit: number
  /**
   *	The offset supplied by the client or the server default. It is the number of elements skipped.
   *
   */
  readonly offset: number
  /**
   *	The actual number of results returned by this response.
   *
   */
  readonly count: number
  /**
   *	The results for this paged response.
   *
   */
  readonly results: ImportOperation[]
}
/**
 *	This enumeration describes the operation state of a newly created import operation.
 *
 */
export type ImportOperationState = 'Delete' | 'Unresolved' | 'ValidationFailed'
/**
 *	The validation status of a created operation.
 *
 */
export interface ImportOperationStatus {
  /**
   *	Id of the import operation.
   *
   */
  readonly operationId?: string
  /**
   *	Validation state of the import operation.
   *
   */
  readonly state: ImportOperationState
  /**
   *	Validation errors for the import operation.
   *
   */
  readonly errors?: ErrorObject[]
}
