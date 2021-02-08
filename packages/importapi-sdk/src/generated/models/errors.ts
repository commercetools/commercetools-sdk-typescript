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
import { PriceImport } from './prices'
import { Attribute } from './productvariants'

/**
 *	The response in case of an error.
 *
 */
export interface ErrorResponse {
  /**
   *	The http status code of the response.
   *
   */
  readonly statusCode: number
  /**
   *	Describes the error.
   *
   */
  readonly message: string
  /**
   *	This property is only used for OAuth2 errors.
   *	Contains the error code.
   *
   *
   */
  readonly error?: string
  /**
   *	This property is only used for OAuth2 errors.
   *	Additional information to assist the client developer in
   *	understanding the error.
   *
   *
   */
  readonly error_description?: string
  /**
   *	The errors that caused this error response.
   *
   *
   */
  readonly errors?: ErrorObject[]
}
/**
 *	An error.
 *
 */
export type ErrorObject =
  | AccessDeniedError
  | InvalidScopeError
  | InvalidOperation
  | DuplicateAttributeValueError
  | DuplicateAttributeValuesError
  | DuplicateFieldError
  | DuplicateVariantValuesError
  | InsufficientScopeError
  | InvalidCredentialsError
  | InvalidTokenError
  | InvalidFieldError
  | InvalidJsonInput
  | InvalidInput
  | ResourceNotFoundError
  | ResourceCreationError
  | ResourceUpdateError
  | ResourceDeletionError
  | RequiredFieldError
  | InvalidStateTransitionError
  | ConcurrentModificationError
  | ContentionError
  | GenericError
export interface AccessDeniedError {
  readonly code: 'access_denied'
  /**
   *	The error's description.
   *
   */
  readonly message: string
}
/**
 *	The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner.
 *
 */
export interface InvalidScopeError {
  readonly code: 'invalid_scope'
  /**
   *	The error's description.
   *
   */
  readonly message: string
}
/**
 *	The resources involved in the request are not in a valid state for the operation.
 *	The client application should validate the constraints described in the error message before sending the request.
 *
 */
export interface InvalidOperation {
  readonly code: 'InvalidOperation'
  /**
   *	The error's description.
   *
   */
  readonly message: string
}
/**
 *	The Unique AttributeConstraint was violated.
 */
export interface DuplicateAttributeValueError {
  readonly code: 'DuplicateAttributeValue'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *	The conflicting attribute.
   *
   */
  readonly attribute: Attribute
}
/**
 *	The CombinationUnique AttributeConstraint was violated.
 */
export interface DuplicateAttributeValuesError {
  readonly code: 'DuplicateAttributeValues'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *
   */
  readonly attributes: Attribute[]
}
/**
 *	A value for a field conflicts with an existing duplicate value.
 */
export interface DuplicateFieldError {
  readonly code: 'DuplicateField'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *	The name of the field.
   *
   */
  readonly field?: string
  /**
   *	The offending duplicate value.
   *
   */
  readonly duplicateValue?: any
}
/**
 *	A given combination of variant values conflicts with an existing one.
 *	Every product variant must have a distinct combination of SKU, prices, and custom attribute values.
 *
 */
export interface DuplicateVariantValuesError {
  readonly code: 'DuplicateVariantValues'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *	The offending variant values.
   *
   */
  readonly variantValues: VariantValues
}
export interface VariantValues {
  /**
   *
   */
  readonly sku?: string
  /**
   *
   */
  readonly prices: PriceImport[]
  /**
   *
   */
  readonly attributes: Attribute[]
}
export interface InsufficientScopeError {
  readonly code: 'insufficient_scope'
  /**
   *	The error's description.
   *
   */
  readonly message: string
}
export interface InvalidCredentialsError {
  readonly code: 'InvalidCredentials'
  /**
   *	The error's description.
   *
   */
  readonly message: string
}
export interface InvalidTokenError {
  readonly code: 'invalid_token'
  /**
   *	The error's description.
   *
   */
  readonly message: string
}
/**
 *	A field has an invalid value.
 */
export interface InvalidFieldError {
  readonly code: 'InvalidField'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *	The name of the field.
   *
   */
  readonly field: string
  /**
   *	The invalid value.
   *
   */
  readonly invalidValue: any
  /**
   *	A fixed set of allowed values for the field, if any.
   *
   */
  readonly allowedValues?: any[]
}
/**
 *	Invalid JSON input has been sent to the service. Either the JSON is syntactically not correct, or the JSON does not
 *	conform to the expected shape (e.g. is missing a required field). The client application should validate the input
 *	according to the constraints described in the error message before sending the request.
 *
 */
export interface InvalidJsonInput {
  readonly code: 'InvalidJsonInput'
  /**
   *	The error's description.
   *
   */
  readonly message: string
}
/**
 *	Invalid input has been sent to the service. The client application should validate the input according to the
 *	constraints described in the error message before sending the request.
 *
 */
export interface InvalidInput {
  readonly code: 'InvalidInput'
  /**
   *	The error's description.
   *
   */
  readonly message: string
}
export interface ResourceNotFoundError {
  readonly code: 'ResourceNotFound'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *
   */
  readonly resource?: any
}
export interface ResourceCreationError {
  readonly code: 'ResourceCreation'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *
   */
  readonly resource?: any
}
export interface ResourceUpdateError {
  readonly code: 'ResourceUpdate'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *
   */
  readonly resource?: any
}
export interface ResourceDeletionError {
  readonly code: 'ResourceDeletion'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *
   */
  readonly resource?: any
}
/**
 *	A required field is missing a value.
 */
export interface RequiredFieldError {
  readonly code: 'RequiredField'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *	The name of the field.
   *
   */
  readonly field: string
}
export interface InvalidStateTransitionError {
  readonly code: 'InvalidTransition'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *	This enumeration describes the processing state of an import operation.
   *
   *
   */
  readonly currentState: ProcessingState
  /**
   *	This enumeration describes the processing state of an import operation.
   *
   *
   */
  readonly newState: ProcessingState
}
/**
 *	The request conflicts with the current state of the involved resource(s). Typically, the request attempts to modify a resource
 *	that is out of date, i.e. that has been modified by another client since the last time it was retrieved.
 *	The client application should resolve the conflict (with or without involving the end-user) before retrying the request
 *
 */
export interface ConcurrentModificationError {
  readonly code: 'ConcurrentModification'
  /**
   *	The error's description.
   *
   */
  readonly message: string
  /**
   *	The version specified in the failed request.
   *
   */
  readonly specifiedVersion?: number
  /**
   *	The current version of the resource.
   *
   */
  readonly currentVersion: number
  /**
   *	The conflicted resource.
   *
   */
  readonly conflictedResource?: any
}
export interface ContentionError {
  readonly code: 'Contention'
  /**
   *	The error's description.
   *
   */
  readonly message: string
}
export interface GenericError {
  readonly code: 'Generic'
  /**
   *	The error's description.
   *
   */
  readonly message: string
}
