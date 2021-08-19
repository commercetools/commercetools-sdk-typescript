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
export type ErrorObject =
  | AccessDeniedError
  | ConcurrentModificationError
  | ContentionError
  | DuplicateAttributeValueError
  | DuplicateAttributeValuesError
  | DuplicateFieldError
  | DuplicateVariantValuesError
  | GenericError
  | InsufficientScopeError
  | InvalidCredentialsError
  | InvalidFieldError
  | InvalidInput
  | InvalidJsonInput
  | InvalidOperation
  | InvalidScopeError
  | InvalidStateTransitionError
  | InvalidTokenError
  | RequiredFieldError
  | ResourceCreationError
  | ResourceDeletionError
  | ResourceNotFoundError
  | ResourceUpdateError
/**
 *	This is the generic error code for access denied. In case of a wrong scope, an [InvalidScopeError](#invalidscopeerror) will be returned.
 */
export interface AccessDeniedError {
  readonly code: 'access_denied'
  /**
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
   *
   */
  readonly message: string
}
/**
 *	The resources in the request are not in the valid state for the operation.
 *	The client application should validate the constraints described in the error message before sending the request again.
 *
 */
export interface InvalidOperation {
  readonly code: 'InvalidOperation'
  /**
   *
   */
  readonly message: string
}
/**
 *	The `Unique` [Attribute Constraint](/../api/projects/productTypes#attributeconstraint-enum) was violated.
 */
export interface DuplicateAttributeValueError {
  readonly code: 'DuplicateAttributeValue'
  /**
   *
   */
  readonly message: string
  /**
   *	The attribute in conflict.
   *
   */
  readonly attribute: Attribute
}
/**
 *	The `CombinationUnique` [Attribute Constraint](/../api/projects/productTypes#attributeconstraint-enum) was violated.
 */
export interface DuplicateAttributeValuesError {
  readonly code: 'DuplicateAttributeValues'
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly attributes: Attribute[]
}
/**
 *	The given value already exists for a field that is checked for unique values.
 */
export interface DuplicateFieldError {
  readonly code: 'DuplicateField'
  /**
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
 *	The given combination of values of a [Product Variant](/../api/projects/products#productvariant) conflicts with an existing one.
 *	Every [Product Variant](/../api/projects/products#productvariant) must have a distinct combination of SKU, prices, and custom attribute values.
 *
 */
export interface DuplicateVariantValuesError {
  readonly code: 'DuplicateVariantValues'
  /**
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
   *
   */
  readonly message: string
}
export interface InvalidCredentialsError {
  readonly code: 'InvalidCredentials'
  /**
   *
   */
  readonly message: string
}
export interface InvalidTokenError {
  readonly code: 'invalid_token'
  /**
   *
   */
  readonly message: string
}
/**
 *	A given field is not supported.
 *	This error occurs, for example, if the field `variants`, which is not supported by [Product Import](/product#productimport), is sent to the Product Import endpoint.
 *
 */
export interface InvalidFieldError {
  readonly code: 'InvalidField'
  /**
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
   *	The set of allowed values for the field, if any.
   *
   */
  readonly allowedValues?: any[]
}
/**
 *	An invalid JSON input has been sent to the service.
 *	Either the JSON is syntactically incorrect or the JSON has an unexpected shape, for example, a required field is missing.
 *	The client application should validate the input according to the constraints described in the error message before sending the request again.
 *
 */
export interface InvalidJsonInput {
  readonly code: 'InvalidJsonInput'
  /**
   *
   */
  readonly message: string
}
/**
 *	An invalid input has been sent to the service. The client application should validate the input according to the
 *	constraints described in the error message before sending the request again.
 *
 */
export interface InvalidInput {
  readonly code: 'InvalidInput'
  /**
   *
   */
  readonly message: string
}
export interface ResourceNotFoundError {
  readonly code: 'ResourceNotFound'
  /**
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
   *
   */
  readonly message: string
  /**
   *	Represents the status of a resource under an import process. Every resource has the initial state `Unresolved`.
   *
   *
   */
  readonly currentState: ProcessingState
  /**
   *	Represents the status of a resource under an import process. Every resource has the initial state `Unresolved`.
   *
   *
   */
  readonly newState: ProcessingState
}
/**
 *	The request conflicts with the current state of the involved resources.
 *	This error typically occurs when the request attempts to modify a resource that is out of date, that is, it has been modified by another client since the last time it was retrieved by the system attempting to update it.
 *	The client application should resolve the conflict (with or without involving the end-user) before retrying the request.
 *
 */
export interface ConcurrentModificationError {
  readonly code: 'ConcurrentModification'
  /**
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
   *	The resource in conflict.
   *
   */
  readonly conflictedResource?: any
}
export interface ContentionError {
  readonly code: 'Contention'
  /**
   *
   */
  readonly message: string
}
export interface GenericError {
  readonly code: 'Generic'
  /**
   *
   */
  readonly message: string
}
