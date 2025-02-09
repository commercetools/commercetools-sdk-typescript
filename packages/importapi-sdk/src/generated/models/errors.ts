/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
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
   *	The HTTP status code of the response.
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
 *	Base representation of an error response containing common fields to all errors.
 *
 *	An error response may contain additional fields depending on the type of an error, for example, `attribute` in [DuplicateAttributeValueError](#duplicateattributevalueerror).
 *
 */
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
  | InvalidFieldsUpdateError
  | InvalidInput
  | InvalidJsonInput
  | InvalidOperation
  | InvalidScopeError
  | InvalidStateTransitionError
  | InvalidTokenError
  | NewMasterVariantAdditionNotAllowedError
  | RequiredFieldError
  | ResourceCreationError
  | ResourceDeletionError
  | ResourceNotFoundError
  | ResourceUpdateError
export interface IErrorObject {
  /**
   *	An error identifier.
   *
   */
  readonly code: string
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
/**
 *	This is the generic error code for access denied. In case of a wrong scope, an [InvalidScopeError](#invalidscopeerror) will be returned.
 */
export interface AccessDeniedError extends IErrorObject {
  readonly code: 'access_denied'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
/**
 *	The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner.
 *
 */
export interface InvalidScopeError extends IErrorObject {
  readonly code: 'invalid_scope'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
/**
 *	The resources in the request are not in the valid state for the operation.
 *	The client application should validate the constraints described in the error message before sending the request again.
 *
 */
export interface InvalidOperation extends IErrorObject {
  readonly code: 'InvalidOperation'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
/**
 *	The `Unique` [AttributeConstraintEnum](ctp:api:type:AttributeConstraintEnum) was violated.
 */
export interface DuplicateAttributeValueError extends IErrorObject {
  readonly code: 'DuplicateAttributeValue'
  /**
   *	A plain language description of the cause of an error.
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
 *	The `CombinationUnique` [AttributeConstraintEnum](ctp:api:type:AttributeConstraintEnum) was violated.
 */
export interface DuplicateAttributeValuesError extends IErrorObject {
  readonly code: 'DuplicateAttributeValues'
  /**
   *	A plain language description of the cause of an error.
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
export interface DuplicateFieldError extends IErrorObject {
  readonly code: 'DuplicateField'
  /**
   *	A plain language description of the cause of an error.
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
 *	The given combination of values of a [Product Variant](ctp:api:type:ProductVariant) conflicts with an existing one.
 *	Every [Product Variant](ctp:api:type:ProductVariant) must have a distinct combination of SKU, prices, and custom attribute values.
 *
 */
export interface DuplicateVariantValuesError extends IErrorObject {
  readonly code: 'DuplicateVariantValues'
  /**
   *	A plain language description of the cause of an error.
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
export interface InsufficientScopeError extends IErrorObject {
  readonly code: 'insufficient_scope'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
export interface InvalidCredentialsError extends IErrorObject {
  readonly code: 'InvalidCredentials'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
export interface InvalidTokenError extends IErrorObject {
  readonly code: 'invalid_token'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
/**
 *	A given field is not supported.
 *	This error occurs, for example, if the field `variants`, which is not supported by [Product Import](ctp:import:type:ProductImport), is sent to the Product Import endpoint.
 *
 */
export interface InvalidFieldError extends IErrorObject {
  readonly code: 'InvalidField'
  /**
   *	A plain language description of the cause of an error.
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
  /**
   *
   */
  readonly resourceIndex?: number
}
/**
 *	Returned when a field cannot be updated.
 *
 */
export interface InvalidFieldsUpdateError extends IErrorObject {
  readonly code: 'InvalidFieldUpdate'
  /**
   *	`"The following fields are currently not supported for changes/updates"`
   *
   *
   */
  readonly message: string
  /**
   *	Fields that cannot be updated.
   *
   */
  readonly fields: string[]
}
/**
 *	An invalid JSON input has been sent to the service.
 *	Either the JSON is syntactically incorrect or the JSON has an unexpected shape, for example, a required field is missing.
 *	The client application should validate the input according to the constraints described in the error message before sending the request again.
 *
 */
export interface InvalidJsonInput extends IErrorObject {
  readonly code: 'InvalidJsonInput'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
/**
 *	An invalid input has been sent to the service. The client application should validate the input according to the
 *	constraints described in the error message before sending the request again.
 *
 */
export interface InvalidInput extends IErrorObject {
  readonly code: 'InvalidInput'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
export interface ResourceNotFoundError extends IErrorObject {
  readonly code: 'ResourceNotFound'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
  /**
   *
   */
  readonly resource?: any
}
export interface ResourceCreationError extends IErrorObject {
  readonly code: 'ResourceCreation'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
  /**
   *
   */
  readonly resource?: any
}
export interface ResourceUpdateError extends IErrorObject {
  readonly code: 'ResourceUpdate'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
  /**
   *
   */
  readonly resource?: any
}
export interface ResourceDeletionError extends IErrorObject {
  readonly code: 'ResourceDeletion'
  /**
   *	A plain language description of the cause of an error.
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
export interface RequiredFieldError extends IErrorObject {
  readonly code: 'RequiredField'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
  /**
   *	The name of the field.
   *
   */
  readonly field: string
}
export interface InvalidStateTransitionError extends IErrorObject {
  readonly code: 'InvalidTransition'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
  /**
   *	Every [Import Operation](ctp:import:type:ImportOperation) is assigned one of the following states.
   *
   *
   */
  readonly currentState: ProcessingState
  /**
   *	Every [Import Operation](ctp:import:type:ImportOperation) is assigned one of the following states.
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
export interface ConcurrentModificationError extends IErrorObject {
  readonly code: 'ConcurrentModification'
  /**
   *	A plain language description of the cause of an error.
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
export interface ContentionError extends IErrorObject {
  readonly code: 'Contention'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
export interface GenericError extends IErrorObject {
  readonly code: 'Generic'
  /**
   *	A plain language description of the cause of an error.
   *
   */
  readonly message: string
}
/**
 *	Returned when attempting to create a ProductVariant and set it as the Master Variant in the same [ProductVariantImport](ctp:import:type:ProductVariantImport).
 *
 */
export interface NewMasterVariantAdditionNotAllowedError extends IErrorObject {
  readonly code: 'NewMasterVariantAdditionNotAllowed'
  /**
   *	`"Adding a new variant as master variant is not allowed."`
   *
   *
   */
  readonly message: string
}
