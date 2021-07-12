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

import { ImportResourceType } from './common'

/**
 *	Serves as the entry point of resources.
 *
 */
export interface ImportSink {
  /**
   *	User-defined unique identifier for the ImportSink.
   *	Keys can only contain alphanumeric characters (a-Z, 0-9), underscores and hyphens (_, -).
   *
   *
   */
  readonly key: string
  /**
   *	The [resource type](#importresourcetype) the ImportSink is able to handle.
   *	If not present, the ImportSink is able to import all of the supported [ImportResourceTypes](#importresourcetype).
   *
   *
   */
  readonly resourceType?: ImportResourceType
  /**
   *	The version of the ImportSink.
   *
   */
  readonly version: number
  /**
   *	The time when the ImportSink was created.
   *
   */
  readonly createdAt: string
  /**
   *	The last time when the ImportSink was modified.
   *
   */
  readonly lastModifiedAt: string
}
/**
 *	The representation sent to the server when creating or updating an [ImportSink](#importsink).
 *
 */
export interface ImportSinkDraft {
  /**
   *	The version of the ImportSinkDraft.
   *
   */
  readonly version?: number
  /**
   *	User-defined unique identifier of the ImportSink.
   *	Keys can only contain alphanumeric characters (a-Z, 0-9), underscores and hyphens (_, -).
   *
   *
   */
  readonly key: string
  /**
   *	The [resource type](#importresourcetype) to be imported.
   *	If not given, the ImportSink is able to import all of the supported [ImportResourceTypes](#importresourcetype).
   *
   *
   */
  readonly resourceType?: ImportResourceType
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) for [ImportSinks](#importsink).
 *	Used as a response to a query request for [ImportSinks](#importsink).
 *
 */
export interface ImportSinkPagedResponse {
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
   *	The total number of results matching the query.
   *
   */
  readonly total: number
  /**
   *	The array of Import Sinks matching the query.
   *
   */
  readonly results: ImportSink[]
}
