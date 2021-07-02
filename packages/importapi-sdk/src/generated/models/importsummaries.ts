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

/**
 *	Describes the status of an [ImportSink](/import-sink#importsink) by the number of resources in each [Processing State](/processing-state#the-list-of-processing-states).
 *	Can be used to monitor the import progress per [Import Sink](/import-sink).
 *
 */
export interface ImportSummary {
  /**
   *	The import status of an [ImportSink](/import-sink#importsink) given by the number of resources in each [Processing State](/processing-state#the-list-of-processing-states).
   *
   *
   */
  readonly states: OperationStates
  /**
   *	The total number of [ImportOperations](/import-operation#importoperation) received for this Import Summary.
   *
   */
  readonly total: number
}
export interface OperationStates {
  /**
   *	The number of resources in the `ValidationFailed` state.
   *
   */
  readonly ValidationFailed: number
  /**
   *	The number of resources in the `Unresolved` state.
   *
   */
  readonly Unresolved: number
  /**
   *	The number of resources in the `WaitForMasterVariant` state.
   *
   */
  readonly WaitForMasterVariant: number
  /**
   *	The number of resources in the `Imported` state.
   *
   */
  readonly Imported: number
  /**
   *	The number of resources in the `Rejected` state.
   *
   */
  readonly Rejected: number
}
