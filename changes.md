**Api changes**

<details>
<summary>MarkDeprecated Type(s)</summary>

- marked type `ProductVariantSelectionExclusion` as deprecated
- marked type `ProductVariantSelectionInclusion` as deprecated
</details>

<details>
<summary>Added Type(s)</summary>

- added type `GraphQLAnonymousIdAlreadyInUseError`
- added type `GraphQLAttributeDefinitionAlreadyExistsError`
- added type `GraphQLAttributeDefinitionTypeConflictError`
- added type `GraphQLAttributeNameDoesNotExistError`
- added type `GraphQLBadGatewayError`
- added type `GraphQLConcurrentModificationError`
- added type `GraphQLCountryNotConfiguredInStoreError`
- added type `GraphQLDiscountCodeNonApplicableError`
- added type `GraphQLDuplicateAttributeValueError`
- added type `GraphQLDuplicateAttributeValuesError`
- added type `GraphQLDuplicateEnumValuesError`
- added type `GraphQLDuplicateFieldError`
- added type `GraphQLDuplicateFieldWithConflictingResourceError`
- added type `GraphQLDuplicatePriceKeyError`
- added type `GraphQLDuplicatePriceScopeError`
- added type `GraphQLDuplicateStandalonePriceScopeError`
- added type `GraphQLDuplicateVariantValuesError`
- added type `GraphQLEditPreviewFailedError`
- added type `GraphQLEnumKeyAlreadyExistsError`
- added type `GraphQLEnumKeyDoesNotExistError`
- added type `GraphQLEnumValueIsUsedError`
- added type `GraphQLEnumValuesMustMatchError`
- added type `GraphQLErrorObject`
- added type `GraphQLExtensionBadResponseError`
- added type `GraphQLExtensionNoResponseError`
- added type `GraphQLExtensionPredicateEvaluationFailedError`
- added type `GraphQLExtensionUpdateActionsFailedError`
- added type `GraphQLExternalOAuthFailedError`
- added type `GraphQLFeatureRemovedError`
- added type `GraphQLGeneralError`
- added type `GraphQLInsufficientScopeError`
- added type `GraphQLInternalConstraintViolatedError`
- added type `GraphQLInvalidCredentialsError`
- added type `GraphQLInvalidCurrentPasswordError`
- added type `GraphQLInvalidFieldError`
- added type `GraphQLInvalidInputError`
- added type `GraphQLInvalidItemShippingDetailsError`
- added type `GraphQLInvalidJsonInputError`
- added type `GraphQLInvalidOperationError`
- added type `GraphQLInvalidSubjectError`
- added type `GraphQLInvalidTokenError`
- added type `GraphQLLanguageUsedInStoresError`
- added type `GraphQLMatchingPriceNotFoundError`
- added type `GraphQLMaxResourceLimitExceededError`
- added type `GraphQLMissingRoleOnChannelError`
- added type `GraphQLMissingTaxRateForCountryError`
- added type `GraphQLNoMatchingProductDiscountFoundError`
- added type `GraphQLNotEnabledError`
- added type `GraphQLObjectNotFoundError`
- added type `GraphQLOutOfStockError`
- added type `GraphQLOverCapacityError`
- added type `GraphQLOverlappingStandalonePriceValidityError`
- added type `GraphQLPendingOperationError`
- added type `GraphQLPriceChangedError`
- added type `GraphQLProductAssignmentMissingError`
- added type `GraphQLProductPresentWithDifferentVariantSelectionError`
- added type `GraphQLProjectNotConfiguredForLanguagesError`
- added type `GraphQLQueryComplexityLimitExceededError`
- added type `GraphQLQueryTimedOutError`
- added type `GraphQLReferenceExistsError`
- added type `GraphQLReferencedResourceNotFoundError`
- added type `GraphQLRequiredFieldError`
- added type `GraphQLResourceNotFoundError`
- added type `GraphQLResourceSizeLimitExceededError`
- added type `GraphQLSearchDeactivatedError`
- added type `GraphQLSearchExecutionFailureError`
- added type `GraphQLSearchFacetPathNotFoundError`
- added type `GraphQLSearchIndexingInProgressError`
- added type `GraphQLSemanticErrorError`
- added type `GraphQLShippingMethodDoesNotMatchCartError`
- added type `GraphQLSyntaxErrorError`
- added type `ProductSelectionProductExcludedMessage`
- added type `ProductSelectionVariantExclusionChangedMessage`
- added type `ProductSelectionProductExcludedMessagePayload`
- added type `ProductSelectionVariantExclusionChangedMessagePayload`
- added type `IndividualExclusionProductSelectionType`
- added type `ProductVariantExclusion`
- added type `ProductVariantSelectionIncludeAllExcept`
- added type `ProductVariantSelectionIncludeOnly`
- added type `ProductSelectionExcludeProductAction`
- added type `ProductSelectionSetVariantExclusionAction`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `individualExclusion` to type `ProductSelectionTypeEnum`
- added enum `includeOnly` to type `ProductVariantSelectionTypeEnum`
- added enum `includeAllExcept` to type `ProductVariantSelectionTypeEnum`
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `productSelection` of type `ProductSelectionCreatedMessage` from type `IndividualProductSelectionType` to `ProductSelectionType`
- :warning: changed property `productSelection` of type `ProductSelectionCreatedMessagePayload` from type `IndividualProductSelectionType` to `ProductSelectionType`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `extensions` to type `GraphQLError`
- added property `variantExclusion` to type `AssignedProductReference`
- added property `variantExclusion` to type `AssignedProductSelection`
- added property `variantExclusion` to type `ProductSelectionAssignment`
- added property `type` to type `ProductSelectionDraft`
</details>

<details>
<summary>Required Property(s)</summary>

- changed property `roles` of type `AssociateDraft` to be optional
- changed property `path` of type `GraphQLError` to be optional
</details>

**Import changes**

<details>
<summary>Added Property(s)</summary>

- added property `custom` to type `Parcel`
</details>
