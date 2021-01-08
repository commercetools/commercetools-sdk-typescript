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

import {
  ChannelReference,
  ChannelResourceIdentifier,
  ChannelRoleEnum,
} from './channel'
import {
  LocalizedString,
  Price,
  PriceDraft,
  Reference,
  ReferenceTypeId,
} from './common'
import { CustomerGroupReference } from './customer-group'
import { OrderEditPreviewFailure } from './order-edit'
import { Attribute } from './product'

export interface ErrorByExtension {
  readonly id: string
  readonly key?: string
}
export type ErrorObject =
  | ExtensionBadResponseError
  | ExtensionNoResponseError
  | ExtensionUpdateActionsFailedError
  | ExternalOAuthFailedError
  | FeatureRemovedError
  | GeneralError
  | InsufficientScopeError
  | InternalConstraintViolatedError
  | InvalidCredentialsError
  | InvalidCurrentPasswordError
  | InvalidFieldError
  | InvalidInputError
  | InvalidItemShippingDetailsError
  | InvalidJsonInputError
  | InvalidOperationError
  | InvalidSubjectError
  | InvalidTokenError
  | LanguageUsedInStoresError
  | MatchingPriceNotFoundError
  | MaxResourceLimitExceededError
  | MissingRoleOnChannelError
  | MissingTaxRateForCountryError
  | NoMatchingProductDiscountFoundError
  | NotEnabledError
  | ObjectNotFoundError
  | OutOfStockError
  | OverCapacityError
  | PendingOperationError
  | PriceChangedError
  | ProjectNotConfiguredForLanguagesError
  | QueryComplexityLimitExceededError
  | QueryTimedOutError
  | ReferenceExistsError
  | ReferencedResourceNotFoundError
  | RequiredFieldError
  | ResourceNotFoundError
  | ResourceSizeLimitExceededError
  | SearchExecutionFailureError
  | SearchFacetPathNotFoundError
  | SemanticErrorError
  | ShippingMethodDoesNotMatchCartError
  | SyntaxErrorError
  | WeakPasswordError
  | DuplicateVariantValuesError
  | DiscountCodeNonApplicableError
  | DuplicatePriceScopeError
  | AttributeDefinitionTypeConflictError
  | ConcurrentModificationError
  | DuplicateEnumValuesError
  | DuplicateFieldError
  | DuplicateAttributeValuesError
  | AccessDeniedError
  | DuplicateFieldWithConflictingResourceError
  | EnumKeyAlreadyExistsError
  | DuplicateAttributeValueError
  | EnumValuesMustMatchError
  | EditPreviewFailedError
  | EnumValueIsUsedError
  | AttributeDefinitionAlreadyExistsError
  | AnonymousIdAlreadyInUseError
  | EnumKeyDoesNotExistError
  | AttributeNameDoesNotExistError
export interface AccessDeniedError {
  readonly code: 'access_denied'
  readonly message: string
}
export interface AnonymousIdAlreadyInUseError {
  readonly code: 'AnonymousIdAlreadyInUse'
  readonly message: string
}
export interface AttributeDefinitionAlreadyExistsError {
  readonly code: 'AttributeDefinitionAlreadyExists'
  readonly message: string
  readonly conflictingProductTypeId: string
  readonly conflictingProductTypeName: string
  readonly conflictingAttributeName: string
}
export interface AttributeDefinitionTypeConflictError {
  readonly code: 'AttributeDefinitionTypeConflict'
  readonly message: string
  readonly conflictingProductTypeId: string
  readonly conflictingProductTypeName: string
  readonly conflictingAttributeName: string
}
export interface AttributeNameDoesNotExistError {
  readonly code: 'AttributeNameDoesNotExist'
  readonly message: string
  readonly invalidAttributeName: string
}
export interface ConcurrentModificationError {
  readonly code: 'ConcurrentModification'
  readonly message: string
  readonly currentVersion?: number
}
export interface DiscountCodeNonApplicableError {
  readonly code: 'DiscountCodeNonApplicable'
  readonly message: string
  readonly discountCode?: string
  readonly reason?: string
  readonly dicountCodeId?: string
  readonly validFrom?: string
  readonly validUntil?: string
  readonly validityCheckTime?: string
}
export interface DuplicateAttributeValueError {
  readonly code: 'DuplicateAttributeValue'
  readonly message: string
  readonly attribute: Attribute
}
export interface DuplicateAttributeValuesError {
  readonly code: 'DuplicateAttributeValues'
  readonly message: string
  readonly attributes: Attribute[]
}
export interface DuplicateEnumValuesError {
  readonly code: 'DuplicateEnumValues'
  readonly message: string
  readonly duplicates: string[]
}
export interface DuplicateFieldError {
  readonly code: 'DuplicateField'
  readonly message: string
  readonly field?: string
  readonly duplicateValue?: any
  readonly conflictingResource?: Reference
}
export interface DuplicateFieldWithConflictingResourceError {
  readonly code: 'DuplicateFieldWithConflictingResource'
  readonly message: string
  readonly field: string
  readonly duplicateValue: any
  readonly conflictingResource: Reference
}
export interface DuplicatePriceScopeError {
  readonly code: 'DuplicatePriceScope'
  readonly message: string
  readonly conflictingPrices: Price[]
}
export interface DuplicateVariantValuesError {
  readonly code: 'DuplicateVariantValues'
  readonly message: string
  readonly variantValues: VariantValues
}
export interface EditPreviewFailedError {
  readonly code: 'EditPreviewFailed'
  readonly message: string
  readonly result: OrderEditPreviewFailure
}
export interface EnumKeyAlreadyExistsError {
  readonly code: 'EnumKeyAlreadyExists'
  readonly message: string
  readonly conflictingEnumKey: string
  readonly conflictingAttributeName: string
}
export interface EnumKeyDoesNotExistError {
  readonly code: 'EnumKeyDoesNotExist'
  readonly message: string
  readonly conflictingEnumKey: string
  readonly conflictingAttributeName: string
}
export interface EnumValueIsUsedError {
  readonly code: 'EnumValueIsUsed'
  readonly message: string
}
export interface EnumValuesMustMatchError {
  readonly code: 'EnumValuesMustMatch'
  readonly message: string
}
export interface ErrorResponse {
  readonly statusCode: number
  readonly message: string
  readonly error?: string
  readonly error_description?: string
  readonly errors?: ErrorObject[]
}
export interface ExtensionBadResponseError {
  readonly code: 'ExtensionBadResponse'
  readonly message: string
  readonly localizedMessage?: LocalizedString
  readonly extensionExtraInfo?: any
  readonly errorByExtension: ErrorByExtension
}
export interface ExtensionNoResponseError {
  readonly code: 'ExtensionNoResponse'
  readonly message: string
  readonly extensionId: string
  readonly extensionKey?: string
}
export interface ExtensionUpdateActionsFailedError {
  readonly code: 'ExtensionUpdateActionsFailed'
  readonly message: string
  readonly localizedMessage?: LocalizedString
  readonly extensionExtraInfo?: any
  readonly errorByExtension: ErrorByExtension
}
export interface ExternalOAuthFailedError {
  readonly code: 'ExternalOAuthFailed'
  readonly message: string
}
export interface FeatureRemovedError {
  readonly code: 'FeatureRemoved'
  readonly message: string
}
export interface GeneralError {
  readonly code: 'General'
  readonly message: string
}
export interface InsufficientScopeError {
  readonly code: 'insufficient_scope'
  readonly message: string
}
export interface InternalConstraintViolatedError {
  readonly code: 'InternalConstraintViolated'
  readonly message: string
}
export interface InvalidCredentialsError {
  readonly code: 'InvalidCredentials'
  readonly message: string
}
export interface InvalidCurrentPasswordError {
  readonly code: 'InvalidCurrentPassword'
  readonly message: string
}
export interface InvalidFieldError {
  readonly code: 'InvalidField'
  readonly message: string
  readonly field: string
  readonly invalidValue: any
  readonly allowedValues?: any[]
}
export interface InvalidInputError {
  readonly code: 'InvalidInput'
  readonly message: string
}
export interface InvalidItemShippingDetailsError {
  readonly code: 'InvalidItemShippingDetails'
  readonly message: string
  readonly subject: string
  readonly itemId: string
}
export interface InvalidJsonInputError {
  readonly code: 'InvalidJsonInput'
  readonly message: string
}
export interface InvalidOperationError {
  readonly code: 'InvalidOperation'
  readonly message: string
}
export interface InvalidSubjectError {
  readonly code: 'InvalidSubject'
  readonly message: string
}
export interface InvalidTokenError {
  readonly code: 'invalid_token'
  readonly message: string
}
export interface LanguageUsedInStoresError {
  readonly code: 'LanguageUsedInStores'
  readonly message: string
}
export interface MatchingPriceNotFoundError {
  readonly code: 'MatchingPriceNotFound'
  readonly message: string
  readonly productId: string
  readonly variantId: number
  readonly currency?: string
  readonly country?: string
  readonly customerGroup?: CustomerGroupReference
  readonly channel?: ChannelReference
}
export interface MaxResourceLimitExceededError {
  readonly code: 'MaxResourceLimitExceeded'
  readonly message: string
  readonly exceededResource: ReferenceTypeId
}
export interface MissingRoleOnChannelError {
  readonly code: 'MissingRoleOnChannel'
  readonly message: string
  readonly channel?: ChannelResourceIdentifier
  readonly missingRole: ChannelRoleEnum
}
export interface MissingTaxRateForCountryError {
  readonly code: 'MissingTaxRateForCountry'
  readonly message: string
  readonly taxCategoryId: string
  readonly country?: string
  readonly state?: string
}
export interface NoMatchingProductDiscountFoundError {
  readonly code: 'NoMatchingProductDiscountFound'
  readonly message: string
}
export interface NotEnabledError {
  readonly code: 'NotEnabled'
  readonly message: string
}
export interface ObjectNotFoundError {
  readonly code: 'ObjectNotFound'
  readonly message: string
}
export interface OutOfStockError {
  readonly code: 'OutOfStock'
  readonly message: string
  readonly lineItems: string[]
  readonly skus: string[]
}
export interface OverCapacityError {
  readonly code: 'OverCapacity'
  readonly message: string
}
export interface PendingOperationError {
  readonly code: 'PendingOperation'
  readonly message: string
}
export interface PriceChangedError {
  readonly code: 'PriceChanged'
  readonly message: string
  readonly lineItems: string[]
  readonly shipping: boolean
}
export interface ProjectNotConfiguredForLanguagesError {
  readonly code: 'ProjectNotConfiguredForLanguages'
  readonly message: string
  readonly languages?: string[]
}
export interface QueryComplexityLimitExceededError {
  readonly code: 'QueryComplexityLimitExceeded'
  readonly message: string
}
export interface QueryTimedOutError {
  readonly code: 'QueryTimedOut'
  readonly message: string
}
export interface ReferenceExistsError {
  readonly code: 'ReferenceExists'
  readonly message: string
  readonly referencedBy?: ReferenceTypeId
}
export interface ReferencedResourceNotFoundError {
  readonly code: 'ReferencedResourceNotFound'
  readonly message: string
  readonly typeId: ReferenceTypeId
  readonly id?: string
  readonly key?: string
}
export interface RequiredFieldError {
  readonly code: 'RequiredField'
  readonly message: string
  readonly field: string
}
export interface ResourceNotFoundError {
  readonly code: 'ResourceNotFound'
  readonly message: string
}
export interface ResourceSizeLimitExceededError {
  readonly code: 'ResourceSizeLimitExceeded'
  readonly message: string
}
export interface SearchExecutionFailureError {
  readonly code: 'SearchExecutionFailure'
  readonly message: string
}
export interface SearchFacetPathNotFoundError {
  readonly code: 'SearchFacetPathNotFound'
  readonly message: string
}
export interface SemanticErrorError {
  readonly code: 'SemanticError'
  readonly message: string
}
export interface ShippingMethodDoesNotMatchCartError {
  readonly code: 'ShippingMethodDoesNotMatchCart'
  readonly message: string
}
export interface SyntaxErrorError {
  readonly code: 'SyntaxError'
  readonly message: string
}
export interface VariantValues {
  readonly sku?: string
  readonly prices: PriceDraft[]
  readonly attributes: Attribute[]
}
export interface WeakPasswordError {
  readonly code: 'WeakPassword'
  readonly message: string
}
