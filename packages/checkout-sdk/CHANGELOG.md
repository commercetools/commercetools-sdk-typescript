# @commercetools/checkout-sdk

## 1.5.0

### Minor Changes

- [#1173](https://github.com/commercetools/commercetools-sdk-typescript/pull/1173) [`5373452`](https://github.com/commercetools/commercetools-sdk-typescript/commit/537345234ffd3fa9a3cb9c6f5b152ccc675230e7) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Checkout changes**

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

- [#1209](https://github.com/commercetools/commercetools-sdk-typescript/pull/1209) [`77c6132`](https://github.com/commercetools/commercetools-sdk-typescript/commit/77c61328d222dbbbde3e79c63c2bb76df3f012a6) Thanks [@ajimae](https://github.com/ajimae)! - release all packages

### Patch Changes

- Updated dependencies [[`77c6132`](https://github.com/commercetools/commercetools-sdk-typescript/commit/77c61328d222dbbbde3e79c63c2bb76df3f012a6)]:
  - @commercetools/ts-client@4.8.0

## 1.4.0

### Minor Changes

- [#1205](https://github.com/commercetools/commercetools-sdk-typescript/pull/1205) [`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04) Thanks [@ajimae](https://github.com/ajimae)! - release packages

### Patch Changes

- [#1205](https://github.com/commercetools/commercetools-sdk-typescript/pull/1205) [`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04) Thanks [@ajimae](https://github.com/ajimae)! - release packages

- [#1205](https://github.com/commercetools/commercetools-sdk-typescript/pull/1205) [`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04) Thanks [@ajimae](https://github.com/ajimae)! - release changeset

- Updated dependencies [[`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04), [`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04), [`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04)]:
  - @commercetools/ts-client@4.7.0

## 1.3.0

### Minor Changes

- [#1203](https://github.com/commercetools/commercetools-sdk-typescript/pull/1203) [`e0b0fcc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e0b0fccaed4812c0ac47b0c8c4724e81174b0255) Thanks [@ajimae](https://github.com/ajimae)! - release packages

### Patch Changes

- [#1203](https://github.com/commercetools/commercetools-sdk-typescript/pull/1203) [`e0b0fcc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e0b0fccaed4812c0ac47b0c8c4724e81174b0255) Thanks [@ajimae](https://github.com/ajimae)! - release changeset

- Updated dependencies [[`e0b0fcc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e0b0fccaed4812c0ac47b0c8c4724e81174b0255), [`e0b0fcc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e0b0fccaed4812c0ac47b0c8c4724e81174b0255)]:
  - @commercetools/ts-client@4.6.0

## 1.2.0

### Minor Changes

- [#1201](https://github.com/commercetools/commercetools-sdk-typescript/pull/1201) [`f7c3101`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f7c31015ae0e18111c31fcdb3baee8e964bad99b) Thanks [@ajimae](https://github.com/ajimae)! - release packages

### Patch Changes

- Updated dependencies [[`f7c3101`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f7c31015ae0e18111c31fcdb3baee8e964bad99b)]:
  - @commercetools/ts-client@4.5.0

## 1.1.0

### Minor Changes

- [#1191](https://github.com/commercetools/commercetools-sdk-typescript/pull/1191) [`2898e78`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2898e7831c731b611628e6516d99e19fa32d402e) Thanks [@ShipilA](https://github.com/ShipilA)! - **Api changes**

  <details>
  <summary>Required Property(s)</summary>
  - changed property `variantSelection` of type `ProductSelectionProductAddedMessage` to be optional
  - changed property `variantExclusion` of type `ProductSelectionProductExcludedMessage` to be optional
  - changed property `oldVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessage` to be optional
  - changed property `newVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessage` to be optional
  - changed property `oldVariantSelection` of type `ProductSelectionVariantSelectionChangedMessage` to be optional
  - changed property `newVariantSelection` of type `ProductSelectionVariantSelectionChangedMessage` to be optional
  - changed property `variantSelection` of type `ProductSelectionProductAddedMessagePayload` to be optional
  - changed property `variantExclusion` of type `ProductSelectionProductExcludedMessagePayload` to be optional
  - changed property `oldVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessagePayload` to be optional
  - changed property `newVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessagePayload` to be optional
  - changed property `oldVariantSelection` of type `ProductSelectionVariantSelectionChangedMessagePayload` to be optional
  - changed property `newVariantSelection` of type `ProductSelectionVariantSelectionChangedMessagePayload` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>
  - added property `interfaceId` to type `MyTransactionDraft`
  - added property `interfaceId` to type `Transaction`
  - added property `interfaceId` to type `TransactionDraft`
  </details>

  <details>
  <summary>Added Type(s)</summary>
  - added type `PaymentTransactionInterfaceIdSetMessage`
  - added type `PaymentTransactionInterfaceIdSetMessagePayload`
  - added type `PaymentSetTransactionInterfaceIdAction`
  </details>

### Patch Changes

- Updated dependencies [[`e2fb7fd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e2fb7fd778f849f2a1da7f5abf0643c699bb8968), [`2898e78`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2898e7831c731b611628e6516d99e19fa32d402e)]:
  - @commercetools/ts-client@4.4.0

## 1.0.0

### Major Changes

- [#1174](https://github.com/commercetools/commercetools-sdk-typescript/pull/1174) [`b054dbb`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b054dbb195bea7bb19b52e3cbe70afe65bfe5010) Thanks [@ajimae](https://github.com/ajimae)! - [Feat][DEVX-630] Add Checkout API
