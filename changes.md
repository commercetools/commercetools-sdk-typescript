**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `CartMergeMode`
- added type `MergeCartDraft`
- added type `RecurringOrderFailureError`
- added type `GraphQLRecurringOrderFailureError`
- added type `RecurringOrderFailedMessage`
- added type `RecurringOrderFailedMessagePayload`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().carts().customerIdWithCustomerIdValueMerge().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().customerIdWithCustomerIdValueMerge().post()`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/carts/customer-id={customerId}/merge`
- added resource `/{projectKey}/in-store/key={storeKey}/carts/customer-id={customerId}/merge`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `sku` to type `InventoryEntryQuantitySetMessage`
- added property `sku` to type `InventoryEntryQuantitySetMessagePayload`
</details>

**Checkout changes**

<details>
<summary>Added Type(s)</summary>

- added type `AllowedOrigins`
- added type `Application`
- added type `ApplicationAgreement`
- added type `ApplicationAgreementDraft`
- added type `ApplicationAgreementStatus`
- added type `ApplicationAgreementType`
- added type `ApplicationDraft`
- added type `ApplicationLogo`
- added type `ApplicationMode`
- added type `ApplicationStatus`
- added type `ApplicationUpdateAction`
- added type `ApplicationUpdateActions`
- added type `DiscountsConfiguration`
- added type `PaginatedApplication`
- added type `PaymentsConfiguration`
- added type `AddAllowedOriginUpdateAction`
- added type `AddApplicationAgreementUpdateAction`
- added type `AddCountryUpdateAction`
- added type `RemoveAllowedOriginUpdateAction`
- added type `RemoveApplicationAgreementUpdateAction`
- added type `RemoveCountryUpdateAction`
- added type `ReorderApplicationAgreementUpdateAction`
- added type `SetActivePaymentComponentTypeUpdateAction`
- added type `SetAllowAllOriginsUpdateAction`
- added type `SetAllowedOriginsUpdateAction`
- added type `SetApplicationAgreementNameUpdateAction`
- added type `SetApplicationAgreementStatusUpdateAction`
- added type `SetApplicationAgreementTextUpdateAction`
- added type `SetApplicationAgreementTypeUpdateAction`
- added type `SetApplicationAgreementsUpdateAction`
- added type `SetApplicationLogoUpdateAction`
- added type `SetApplicationNameUpdateAction`
- added type `SetApplicationStatusUpdateAction`
- added type `SetCountriesUpdateAction`
- added type `SetDescriptionUpdateAction`
- added type `SetDiscountsConfigurationUpdateAction`
- added type `SetPaymentReturnUrlUpdateAction`
- added type `SetPaymentsConfigurationUpdateAction`
- added type `CreatedBy`
- added type `LastModifiedBy`
- added type `LocalizedString`
- added type `LocalizedUrl`
- added type `ConcurrentModificationError`
- added type `DuplicateFieldWithConflictingResourceError`
- added type `ErrorResponse`
- added type `InvalidFieldError`
- added type `InvalidOperationError`
- added type `MaxResourceLimitExceededError`
- added type `MissingProjectKeyError`
- added type `ReferencedResourceNotFoundError`
- added type `ServiceUnavailableError`
- added type `SyntaxErrorError`
- added type `AutomatedReversalConfiguration`
- added type `ConnectorDeploymentReference`
- added type `DisplayInfo`
- added type `PaginatedPaymentIntegration`
- added type `PaymentComponentType`
- added type `PaymentIntegration`
- added type `PaymentIntegrationDraft`
- added type `PaymentIntegrationStatus`
- added type `PaymentIntegrationType`
- added type `SortingInfo`
- added type `PaymentIntegrationUpdateAction`
- added type `PaymentIntegrationUpdateActions`
- added type `SetAutomatedReversalConfigurationPredicateUpdateAction`
- added type `SetAutomatedReversalConfigurationStatusUpdateAction`
- added type `SetAutomatedReversalConfigurationUpdateAction`
- added type `SetConnectorDeploymentUpdateAction`
- added type `SetDisplayInfoDescriptionUpdateAction`
- added type `SetDisplayInfoLabelUpdateAction`
- added type `SetDisplayInfoLogoUrlUpdateAction`
- added type `SetDisplayInfoPayButtonTextUpdateAction`
- added type `SetDisplayInfoUpdateAction`
- added type `SetKeyUpdateAction`
- added type `SetNameUpdateAction`
- added type `SetPredicateUpdateAction`
- added type `SetSortingInfoUpdateAction`
- added type `SetStatusUpdateAction`
- added type `SetTypeUpdateAction`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `deployment` to type `ReferenceTypeId`
</details>

<details>
<summary>Required Property(s)</summary>

- changed property `detailedErrorMessage` of type `InvalidJsonInputError` to be optional
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `application` of type `Transaction` from type `ApplicationResourceIdentifier` to `ApplicationReference`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `resourceIdentifier` to type `ResourceNotFoundError`
- added property `resourceId` to type `ResourceNotFoundError`
</details>

<details>
<summary>Changed MethodResponseBody(s)</summary>

- :warning: changed response body for `400: application/json` of method `post /{projectKey}/transactions` from type `null` to `ErrorResponse`
- :warning: changed response body for `400: application/json` of method `post /{projectKey}/payment-intents/{paymentId}` from type `null` to `ErrorResponse`
- :warning: changed response body for `400: application/json` of method `get /{projectKey}/transactions/{id}` from type `null` to `ErrorResponse`
- :warning: changed response body for `400: application/json` of method `get /{projectKey}/transactions/key={key}` from type `null` to `ErrorResponse`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().paymentIntegrations().get()`
- added method `apiRoot.withProjectKey().paymentIntegrations().post()`
- added method `apiRoot.withProjectKey().applications().get()`
- added method `apiRoot.withProjectKey().applications().post()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withId().get()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withId().head()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withId().post()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withId().delete()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withKey().get()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withKey().post()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withKey().head()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withKey().delete()`
- added method `apiRoot.withProjectKey().applications().withId().get()`
- added method `apiRoot.withProjectKey().applications().withId().head()`
- added method `apiRoot.withProjectKey().applications().withId().post()`
- added method `apiRoot.withProjectKey().applications().withId().delete()`
- added method `apiRoot.withProjectKey().applications().withKey().get()`
- added method `apiRoot.withProjectKey().applications().withKey().post()`
- added method `apiRoot.withProjectKey().applications().withKey().head()`
- added method `apiRoot.withProjectKey().applications().withKey().delete()`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/payment-integrations`
- added resource `/{projectKey}/applications`
- added resource `/{projectKey}/payment-integrations/{id}`
- added resource `/{projectKey}/payment-integrations/key={key}`
- added resource `/{projectKey}/applications/{id}`
- added resource `/{projectKey}/applications/key={key}`
</details>
