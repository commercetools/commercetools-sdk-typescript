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

import { ImportResourceType } from './common'

/**
 *	An import sink is the entry point for import resources from other systems.
 *
 *	It has an unique key and is specific to an import resource type.
 *
 */
export interface ImportSink {
  /**
   *	The unique key of the import sink.
   */
  readonly key: string
  /**
   *	The type of import resource sent to this import sink.
   *	You can only send one resource type per import sink.
   *
   */
  readonly resourceType: ImportResourceType
  /**
   *	The version of this resource.
   */
  readonly version: number
  /**
   *	When the import sink was created.
   */
  readonly createdAt: string
  /**
   *	When the import sink was modified.
   */
  readonly lastModifiedAt: string
}
/**
 *	The representation sent to the server when creating or updating an import sink.
 *
 */
export interface ImportSinkDraft {
  /**
   *	The version of this resource.
   */
  readonly version?: number
  /**
   *	The unique key of the import sink.
   */
  readonly key: string
  /**
   *	The type of import resource sent to this import sink.
   */
  readonly resourceType: ImportResourceType
}
/**
 *	This type represents a paged importsink result.
 */
export interface ImportSinkPagedResponse {
  /**
   *	The maximum number of import operations returned for a page.
   */
  readonly limit: number
  /**
   *	The offset supplied by the client or the server default. It is the number of elements skipped.
   */
  readonly offset: number
  /**
   *	The actual number of results returned by this response.
   */
  readonly count: number
  /**
   *	The results for this paged response.
   */
  readonly results: ImportSink[]
}
