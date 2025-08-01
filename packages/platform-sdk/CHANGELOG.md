# @commercetools/platform-sdk

## 8.13.0

### Minor Changes

- [#1135](https://github.com/commercetools/commercetools-sdk-typescript/pull/1135) [`e46b15e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e46b15ee15b2910bc16a49bc4ed9695ca0f6ce8d) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `RecurringOrderDeletedMessage`
  - added type `RecurringOrderExpiresAtSetMessage`
  - added type `RecurringOrderDeletedMessagePayload`
  - added type `RecurringOrderExpiresAtSetMessagePayload`
  - added type `RecurringOrderSetExpiresAtAction`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().recurringOrders().withId().delete()`
  - added method `apiRoot.withProjectKey().recurringOrders().withKey().delete()`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `expiresAt` to type `RecurringOrderDraft`
  </details>

- [#1140](https://github.com/commercetools/commercetools-sdk-typescript/pull/1140) [`7c8b972`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7c8b9720037996099ebed2c8b1f72d1bc480a894) Thanks [@ajimae](https://github.com/ajimae)! - Update and unify common type definitions

## 8.12.1

### Patch Changes

- Updated dependencies [[`98415e1`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98415e159e68fc59d7fcdb11cd406e9995fa4430)]:
  - @commercetools/ts-client@4.0.0

## 8.12.0

### Minor Changes

- [#1101](https://github.com/commercetools/commercetools-sdk-typescript/pull/1101) [`5befd14`](https://github.com/commercetools/commercetools-sdk-typescript/commit/5befd141cb61cf4a75253037d304934d730111fe) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `ApplicationStoppedByGroupBestDeal` to type `DiscountCodeState`
  - added enum `discount-group` to type `ReferenceTypeId`
  - added enum `payment-method` to type `ReferenceTypeId`
  - added enum `payment-method` to type `ExtensionResourceTypeId`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `makeInheritedAssociatesExplicit` to type `BusinessUnitChangeAssociateModeAction`
  - added property `discountGroup` to type `CartDiscount`
  - added property `discountGroup` to type `CartDiscountDraft`
  - added property `priceRoundingMode` to type `Cart`
  - added property `priceRoundingMode` to type `CartDraft`
  - added property `attributes` to type `ProductTailoringCreatedMessage`
  - added property `attributes` to type `ProductTailoringCreatedMessagePayload`
  - added property `priceRoundingMode` to type `StagedOrder`
  - added property `priceRoundingMode` to type `Order`
  - added property `priceRoundingMode` to type `OrderImportDraft`
  - added property `token` to type `PaymentMethodInfo`
  - added property `interfaceAccount` to type `PaymentMethodInfo`
  - added property `custom` to type `PaymentMethodInfo`
  - added property `attributes` to type `ProductTailoringData`
  - added property `attributes` to type `ProductTailoringDraft`
  - added property `attributes` to type `ProductTailoringInStoreDraft`
  - added property `level` to type `AttributeDefinition`
  - added property `level` to type `AttributeDefinitionDraft`
  - added property `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/` to type `CategoryOrderHints`
  - added property `attributes` to type `ProductData`
  - added property `attributes` to type `ProductDraft`
  - added property `attributes` to type `ProductProjection`
  - added property `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/` to type `ProductVariantChannelAvailabilityMap`
  - added property `priceRoundingMode` to type `CartsConfiguration`
  - added property `taxRoundingMode` to type `CartsConfiguration`
  - added property `priceRoundingMode` to type `QuoteRequest`
  - added property `priceRoundingMode` to type `Quote`
  - added property `events` to type `SubscriptionSetEventsAction`
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `paymentMethodInfo` of type `MyPaymentDraft` from type `PaymentMethodInfo` to `PaymentMethodInfoDraft`
  - :warning: changed property `paymentMethodInfo` of type `PaymentDraft` from type `PaymentMethodInfo` to `PaymentMethodInfoDraft`
  - :warning: changed property `filter` of type `SearchSorting` from type `SearchQueryExpression` to `SearchQuery`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `sortOrder` of type `CartDiscountDraft` to be optional
  </details>

  <details>
  <summary>Removed Property(s)</summary>

  - :warning: removed property `/[0-9].[0-9]*[1-9]/` from type `CategoryOrderHints`
  - :warning: removed property `//` from type `ProductVariantChannelAvailabilityMap`
  - :warning: removed property `messages` from type `SubscriptionSetEventsAction`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().discountGroups().get()`
  - added method `apiRoot.withProjectKey().discountGroups().head()`
  - added method `apiRoot.withProjectKey().discountGroups().post()`
  - added method `apiRoot.withProjectKey().paymentMethods().get()`
  - added method `apiRoot.withProjectKey().paymentMethods().head()`
  - added method `apiRoot.withProjectKey().paymentMethods().post()`
  - added method `apiRoot.withProjectKey().discountGroups().withKey().get()`
  - added method `apiRoot.withProjectKey().discountGroups().withKey().head()`
  - added method `apiRoot.withProjectKey().discountGroups().withKey().post()`
  - added method `apiRoot.withProjectKey().discountGroups().withKey().delete()`
  - added method `apiRoot.withProjectKey().discountGroups().withId().get()`
  - added method `apiRoot.withProjectKey().discountGroups().withId().head()`
  - added method `apiRoot.withProjectKey().discountGroups().withId().post()`
  - added method `apiRoot.withProjectKey().discountGroups().withId().delete()`
  - added method `apiRoot.withProjectKey().paymentMethods().withKey().get()`
  - added method `apiRoot.withProjectKey().paymentMethods().withKey().head()`
  - added method `apiRoot.withProjectKey().paymentMethods().withKey().post()`
  - added method `apiRoot.withProjectKey().paymentMethods().withKey().delete()`
  - added method `apiRoot.withProjectKey().paymentMethods().withId().get()`
  - added method `apiRoot.withProjectKey().paymentMethods().withId().head()`
  - added method `apiRoot.withProjectKey().paymentMethods().withId().post()`
  - added method `apiRoot.withProjectKey().paymentMethods().withId().delete()`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `CartDiscountSetDiscountGroupAction`
  - added type `CartChangePriceRoundingModeAction`
  - added type `DiscountGroup`
  - added type `DiscountGroupDraft`
  - added type `DiscountGroupPagedQueryResponse`
  - added type `DiscountGroupReference`
  - added type `DiscountGroupResourceIdentifier`
  - added type `DiscountGroupUpdate`
  - added type `DiscountGroupUpdateAction`
  - added type `DiscountGroupSetDescriptionAction`
  - added type `DiscountGroupSetKeyAction`
  - added type `DiscountGroupSetNameAction`
  - added type `DiscountGroupSetSortOrderAction`
  - added type `MyPaymentSetMethodInfoCustomFieldAction`
  - added type `MyPaymentSetMethodInfoCustomTypeAction`
  - added type `MyPaymentSetMethodInfoInterfaceAccountAction`
  - added type `DiscountGroupCreatedMessage`
  - added type `DiscountGroupDeletedMessage`
  - added type `DiscountGroupKeySetMessage`
  - added type `DiscountGroupSortOrderSetMessage`
  - added type `PaymentInterfaceIdSetMessage`
  - added type `PaymentMethodCreatedMessage`
  - added type `PaymentMethodCustomFieldAddedMessage`
  - added type `PaymentMethodCustomFieldChangedMessage`
  - added type `PaymentMethodCustomFieldRemovedMessage`
  - added type `PaymentMethodCustomTypeRemovedMessage`
  - added type `PaymentMethodCustomTypeSetMessage`
  - added type `PaymentMethodDefaultSetMessage`
  - added type `PaymentMethodDeletedMessage`
  - added type `PaymentMethodInfoCustomFieldAddedMessage`
  - added type `PaymentMethodInfoCustomFieldChangedMessage`
  - added type `PaymentMethodInfoCustomFieldRemovedMessage`
  - added type `PaymentMethodInfoCustomTypeRemovedMessage`
  - added type `PaymentMethodInfoCustomTypeSetMessage`
  - added type `PaymentMethodInfoInterfaceAccountSetMessage`
  - added type `PaymentMethodInfoInterfaceSetMessage`
  - added type `PaymentMethodInfoMethodSetMessage`
  - added type `PaymentMethodInfoNameSetMessage`
  - added type `PaymentMethodInfoTokenSetMessage`
  - added type `PaymentMethodInterfaceAccountSetMessage`
  - added type `PaymentMethodKeySetMessage`
  - added type `PaymentMethodMethodSetMessage`
  - added type `PaymentMethodNameSetMessage`
  - added type `PaymentMethodPaymentInterfaceSetMessage`
  - added type `PaymentMethodPaymentMethodStatusSetMessage`
  - added type `DiscountGroupCreatedMessagePayload`
  - added type `DiscountGroupDeletedMessagePayload`
  - added type `DiscountGroupKeySetMessagePayload`
  - added type `DiscountGroupSortOrderSetMessagePayload`
  - added type `PaymentInterfaceIdSetMessagePayload`
  - added type `PaymentMethodCreatedMessagePayload`
  - added type `PaymentMethodCustomFieldAddedMessagePayload`
  - added type `PaymentMethodCustomFieldChangedMessagePayload`
  - added type `PaymentMethodCustomFieldRemovedMessagePayload`
  - added type `PaymentMethodCustomTypeRemovedMessagePayload`
  - added type `PaymentMethodCustomTypeSetMessagePayload`
  - added type `PaymentMethodDefaultSetMessagePayload`
  - added type `PaymentMethodDeletedMessagePayload`
  - added type `PaymentMethodInfoCustomFieldAddedMessagePayload`
  - added type `PaymentMethodInfoCustomFieldChangedMessagePayload`
  - added type `PaymentMethodInfoCustomFieldRemovedMessagePayload`
  - added type `PaymentMethodInfoCustomTypeRemovedMessagePayload`
  - added type `PaymentMethodInfoCustomTypeSetMessagePayload`
  - added type `PaymentMethodInfoInterfaceAccountSetMessagePayload`
  - added type `PaymentMethodInfoInterfaceSetMessagePayload`
  - added type `PaymentMethodInfoMethodSetMessagePayload`
  - added type `PaymentMethodInfoNameSetMessagePayload`
  - added type `PaymentMethodInfoTokenSetMessagePayload`
  - added type `PaymentMethodInterfaceAccountSetMessagePayload`
  - added type `PaymentMethodKeySetMessagePayload`
  - added type `PaymentMethodMethodSetMessagePayload`
  - added type `PaymentMethodNameSetMessagePayload`
  - added type `PaymentMethodPaymentInterfaceSetMessagePayload`
  - added type `PaymentMethodPaymentMethodStatusSetMessagePayload`
  - added type `StagedOrderChangePriceRoundingModeAction`
  - added type `PaymentMethod`
  - added type `PaymentMethodDraft`
  - added type `PaymentMethodPagedQueryResponse`
  - added type `PaymentMethodReference`
  - added type `PaymentMethodStatus`
  - added type `PaymentMethodToken`
  - added type `PaymentMethodUpdate`
  - added type `PaymentMethodUpdateAction`
  - added type `PaymentMethodSetCustomFieldAction`
  - added type `PaymentMethodSetCustomTypeAction`
  - added type `PaymentMethodSetDefaultAction`
  - added type `PaymentMethodSetInterfaceAccountAction`
  - added type `PaymentMethodSetKeyAction`
  - added type `PaymentMethodSetMethodAction`
  - added type `PaymentMethodSetNameAction`
  - added type `PaymentMethodSetPaymentInterfaceAction`
  - added type `PaymentMethodSetPaymentMethodStatusAction`
  - added type `PaymentMethodInfoDraft`
  - added type `PaymentSetMethodInfoAction`
  - added type `PaymentSetMethodInfoCustomFieldAction`
  - added type `PaymentSetMethodInfoCustomTypeAction`
  - added type `PaymentSetMethodInfoInterfaceAccountAction`
  - added type `PaymentSetMethodInfoTokenAction`
  - added type `ProductTailoringSetProductAttributeAction`
  - added type `AttributeLevelEnum`
  - added type `ProductSetProductAttributeAction`
  - added type `ProjectChangePriceRoundingModeAction`
  - added type `ProjectChangeTaxRoundingModeAction`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/discount-groups`
  - added resource `/{projectKey}/payment-methods`
  - added resource `/{projectKey}/discount-groups/key={key}`
  - added resource `/{projectKey}/discount-groups/{ID}`
  - added resource `/{projectKey}/payment-methods/key={key}`
  - added resource `/{projectKey}/payment-methods/{ID}`
  </details>

## 8.11.0

### Minor Changes

- [#1077](https://github.com/commercetools/commercetools-sdk-typescript/pull/1077) [`a313308`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a3133084bd43b1d74dde3c57c9af1f0a094f939c) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `ExpiredCustomerEmailTokenError`
  - added type `ExpiredCustomerPasswordTokenError`
  - added type `GraphQLExpiredCustomerEmailTokenError`
  - added type `GraphQLExpiredCustomerPasswordTokenError`
  - added type `CheckoutOrderCreationFailedEvent`
  - added type `CheckoutPaymentAuthorizationCancelledEvent`
  - added type `CheckoutPaymentAuthorizationFailedEvent`
  - added type `CheckoutPaymentAuthorizedEvent`
  - added type `CheckoutPaymentCancelAuthorizationFailedEvent`
  - added type `CheckoutPaymentChargeFailedEvent`
  - added type `CheckoutPaymentChargedEvent`
  - added type `CheckoutPaymentRefundFailedEvent`
  - added type `CheckoutPaymentRefundedEvent`
  - added type `CheckoutMessageOrderPayloadBaseData`
  - added type `CheckoutMessagePaymentsPayloadBaseData`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `invalidateOlderTokens` to type `CustomerCreateEmailToken`
  - added property `invalidateOlderTokens` to type `CustomerCreatePasswordResetToken`
  - added property `invalidateOlderTokens` to type `CustomerToken`
  - added property `value` to type `CustomerEmailTokenCreatedMessage`
  - added property `invalidateOlderTokens` to type `CustomerEmailTokenCreatedMessage`
  - added property `value` to type `CustomerPasswordTokenCreatedMessage`
  - added property `invalidateOlderTokens` to type `CustomerPasswordTokenCreatedMessage`
  - added property `value` to type `CustomerEmailTokenCreatedMessagePayload`
  - added property `invalidateOlderTokens` to type `CustomerEmailTokenCreatedMessagePayload`
  - added property `value` to type `CustomerPasswordTokenCreatedMessagePayload`
  - added property `invalidateOlderTokens` to type `CustomerPasswordTokenCreatedMessagePayload`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `checkout` to type `EventSubscriptionResourceTypeId`
  - added enum `CheckoutOrderCreationFailed` to type `EventType`
  - added enum `CheckoutPaymentAuthorizationCancelled` to type `EventType`
  - added enum `CheckoutPaymentAuthorizationFailed` to type `EventType`
  - added enum `CheckoutPaymentAuthorized` to type `EventType`
  - added enum `CheckoutPaymentCancelAuthorizationFailed` to type `EventType`
  - added enum `CheckoutPaymentCharged` to type `EventType`
  - added enum `CheckoutPaymentChargeFailed` to type `EventType`
  - added enum `CheckoutPaymentRefunded` to type `EventType`
  - added enum `CheckoutPaymentRefundFailed` to type `EventType`
  </details>

### Patch Changes

- Updated dependencies [[`2a458b3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2a458b348a705f4a63befb04bd2680de45fe1c13)]:
  - @commercetools/ts-client@3.4.1

## 8.10.0

### Minor Changes

- [#1074](https://github.com/commercetools/commercetools-sdk-typescript/pull/1074) [`7aabe1f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7aabe1f5e5d74682d2e95a18db0a1bb6c3ed69ed) Thanks [@ajimae](https://github.com/ajimae)! - new sdk release

### Patch Changes

- Updated dependencies [[`7aabe1f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7aabe1f5e5d74682d2e95a18db0a1bb6c3ed69ed)]:
  - @commercetools/ts-client@3.4.0

## 8.9.0

### Minor Changes

- [#1048](https://github.com/commercetools/commercetools-sdk-typescript/pull/1048) [`fef9a76`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fef9a76c84ee2e8e1dc63a8aa36b4f2c3983bf06) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `published` to type `ShoppingListLineItem`
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `actions` of type `MyBusinessUnitUpdate` from type `BusinessUnitUpdateAction[]` to `MyBusinessUnitUpdateAction[]`
  </details>

## 8.8.0

### Minor Changes

- [#1017](https://github.com/commercetools/commercetools-sdk-typescript/pull/1017) [`5efac68`](https://github.com/commercetools/commercetools-sdk-typescript/commit/5efac683f31d6add5205f1cdd8477b1af9c934cb) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Type(s)</summary>

  - :warning: changed type `DeliveryPayload` from type `object` to `SubscriptionNotification`
  - :warning: changed type `EventDeliveryPayload` from type `DeliveryPayload` to `SubscriptionNotification`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitSetUnitTypeAction`
  - added type `BaseEvent`
  - added type `BusinessUnitTopLevelUnitSetMessage`
  - added type `BusinessUnitTypeSetMessage`
  - added type `BusinessUnitTopLevelUnitSetMessagePayload`
  - added type `BusinessUnitTypeSetMessagePayload`
  - added type `SubscriptionNotification`
  </details>

  <details>
  <summary>Removed Property(s)</summary>

  - :warning: removed property `data` from type `Event`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `projectKey` to type `DeliveryPayload`
  - added property `resource` to type `DeliveryPayload`
  - added property `resourceUserProvidedIdentifiers` to type `DeliveryPayload`
  </details>

## 8.7.0

### Minor Changes

- [#1007](https://github.com/commercetools/commercetools-sdk-typescript/pull/1007) [`fd17cfd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fd17cfd577957b96855e42dd792ff493d22ea361) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `Event`
  - added type `ImportContainerCreatedEvent`
  - added type `ImportContainerCreatedEventData`
  - added type `ImportContainerDeletedEvent`
  - added type `ImportContainerDeletedEventData`
  - added type `ImportOperationRejectedEvent`
  - added type `ImportOperationRejectedEventData`
  - added type `ImportUnresolvedEvent`
  - added type `ImportUnresolvedEventData`
  - added type `ImportValidationFailedEvent`
  - added type `ImportValidationFailedEventData`
  - added type `ImportWaitForMasterVariantEvent`
  - added type `ImportWaitForMasterVariantEventData`
  - added type `EventDeliveryPayload`
  - added type `EventSubscription`
  - added type `EventSubscriptionResourceTypeId`
  - added type `EventType`
  - added type `SubscriptionSetEventsAction`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `facets` of type `ProductProjectionPagedSearchResponse` to be optional
  </details>

  <details>
  <summary>Removed Property(s)</summary>

  - :warning: removed property `projectKey` from type `DeliveryPayload`
  - :warning: removed property `resource` from type `DeliveryPayload`
  - :warning: removed property `resourceUserProvidedIdentifiers` from type `DeliveryPayload`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `events` to type `Subscription`
  - added property `events` to type `SubscriptionDraft`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/search`
  </details>

### Patch Changes

- Updated dependencies [[`7473c1c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7473c1cf55532db04cf1b67536f5680bee8afcae)]:
  - @commercetools/ts-client@3.2.1

## 8.6.0

### Minor Changes

- [#972](https://github.com/commercetools/commercetools-sdk-typescript/pull/972) [`3cd9051`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3cd9051bd67a8a70eb43c8998ab96d8651d49615) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `ViewMyShoppingLists` to type `Permission`
  - added enum `ViewOthersShoppingLists` to type `Permission`
  - added enum `UpdateMyShoppingLists` to type `Permission`
  - added enum `UpdateOthersShoppingLists` to type `Permission`
  - added enum `CreateMyShoppingLists` to type `Permission`
  - added enum `CreateOthersShoppingLists` to type `Permission`
  - added enum `DeleteMyShoppingLists` to type `Permission`
  - added enum `DeleteOthersShoppingLists` to type `Permission`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `priceCustomerGroupAssignments` to method `get /{projectKey}/products`
  - added query parameter `priceCustomerGroupAssignments` to method `post /{projectKey}/products`
  - added query parameter `priceCustomerGroupAssignments` to method `get /{projectKey}/product-projections`
  - added query parameter `priceCustomerGroupAssignments` to method `get /{projectKey}/products/key={key}`
  - added query parameter `priceCustomerGroupAssignments` to method `post /{projectKey}/products/key={key}`
  - added query parameter `priceCustomerGroupAssignments` to method `delete /{projectKey}/products/key={key}`
  - added query parameter `priceCustomerGroupAssignments` to method `get /{projectKey}/products/{ID}`
  - added query parameter `priceCustomerGroupAssignments` to method `post /{projectKey}/products/{ID}`
  - added query parameter `priceCustomerGroupAssignments` to method `delete /{projectKey}/products/{ID}`
  - added query parameter `priceCustomerGroupAssignments` to method `get /{projectKey}/product-projections/search`
  - added query parameter `priceCustomerGroupAssignments` to method `get /{projectKey}/product-projections/key={key}`
  - added query parameter `priceCustomerGroupAssignments` to method `get /{projectKey}/product-projections/{ID}`
  - added query parameter `priceCustomerGroupAssignments` to method `get /{projectKey}/in-store/key={storeKey}/product-projections/key={key}`
  - added query parameter `priceCustomerGroupAssignments` to method `get /{projectKey}/in-store/key={storeKey}/product-projections/{ID}`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `CustomerGroupAssignment`
  - added type `CustomerGroupAssignmentDraft`
  - added type `CustomerAddCustomerGroupAssignmentAction`
  - added type `CustomerRemoveCustomerGroupAssignmentAction`
  - added type `CustomerSetCustomerGroupAssignmentsAction`
  - added type `CustomerGroupAssignmentAddedMessage`
  - added type `CustomerGroupAssignmentRemovedMessage`
  - added type `CustomerGroupAssignmentsSetMessage`
  - added type `OrderBusinessUnitSetMessage`
  - added type `CustomerGroupAssignmentAddedMessagePayload`
  - added type `CustomerGroupAssignmentRemovedMessagePayload`
  - added type `CustomerGroupAssignmentsSetMessagePayload`
  - added type `OrderBusinessUnitSetMessagePayload`
  - added type `StagedOrderSetBusinessUnitAction`
  - added type `OrderSetBusinessUnitAction`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/shopping-lists`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/shopping-lists/key={key}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/shopping-lists/{ID}`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withKey().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withKey().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withKey().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withKey().delete()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withId().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withId().delete()`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `customerGroupAssignments` to type `Customer`
  - added property `customerGroupAssignments` to type `CustomerDraft`
  - added property `priceCustomerGroupAssignments` to type `ProductSearchProjectionParams`
  </details>

## 8.5.0

### Minor Changes

- [#963](https://github.com/commercetools/commercetools-sdk-typescript/pull/963) [`1c731e1`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1c731e14a773769dab8af8c0a943715d3771b1ea) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitAssociateResponse`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/business-units/key={key}/associates/{associateId}`
  - added resource `/{projectKey}/business-units/{businessUnitId}/associates/{associateId}`
  - added resource `/{projectKey}/in-store/key={storeKey}/business-units/key={key}/associates/{associateId}`
  - added resource `/{projectKey}/in-store/key={storeKey}/business-units/{businessUnitId}/associates/{associateId}`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().businessUnits().keyWithKeyValueAssociatesWithAssociateIdValue().get()`
  - added method `apiRoot.withProjectKey().businessUnits().withBusinessUnitIdValueAssociatesWithAssociateIdValue().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().keyWithKeyValueAssociatesWithAssociateIdValue().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withBusinessUnitIdValueAssociatesWithAssociateIdValue().get()`
  </details>

  <details>
  <summary>MarkDeprecated Property(s)</summary>

  - marked property `CountOnCustomLineItemUnits::excludeCount` as deprecated
  - marked property `CountOnLineItemUnits::excludeCount` as deprecated
  </details>

## 8.4.0

### Minor Changes

- [#958](https://github.com/commercetools/commercetools-sdk-typescript/pull/958) [`537fb3c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/537fb3cae54c46665284534f66db9edebebb0b83) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitAssociateResponse`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/business-units/key={key}/associates/{associateId}`
  - added resource `/{projectKey}/business-units/{businessUnitId}/associates/{associateId}`
  - added resource `/{projectKey}/in-store/key={storeKey}/business-units/key={key}/associates/{associateId}`
  - added resource `/{projectKey}/in-store/key={storeKey}/business-units/{businessUnitId}/associates/{associateId}`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().businessUnits().keyWithKeyValueAssociatesWithAssociateIdValue().get()`
  - added method `apiRoot.withProjectKey().businessUnits().withBusinessUnitIdValueAssociatesWithAssociateIdValue().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().keyWithKeyValueAssociatesWithAssociateIdValue().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withBusinessUnitIdValueAssociatesWithAssociateIdValue().get()`
  </details>

### Patch Changes

- [#961](https://github.com/commercetools/commercetools-sdk-typescript/pull/961) [`28f0578`](https://github.com/commercetools/commercetools-sdk-typescript/commit/28f057841fcfd26b30ff41167dc88ada3c143371) Thanks [@ajimae](https://github.com/ajimae)! - Release changes for type modification

- Updated dependencies [[`28f0578`](https://github.com/commercetools/commercetools-sdk-typescript/commit/28f057841fcfd26b30ff41167dc88ada3c143371)]:
  - @commercetools/ts-client@3.1.1

## 8.3.0

### Minor Changes

- [#938](https://github.com/commercetools/commercetools-sdk-typescript/pull/938) [`e56d293`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e56d293bd599426084e7ec367f618bf4abbcfbda) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `BestDeal`
  - added type `DiscountTypeCombination`
  - added type `Stacking`
  - added type `AssociateRoleNameSetMessage`
  - added type `AssociateRoleNameSetMessagePayload`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `AssociateRoleNameChangedMessage`
  - :warning: removed type `AssociateRoleNameChangedMessagePayload`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `discountTypeCombination` to type `Cart`
  - added property `discountTypeCombination` to type `StagedOrder`
  - added property `discountTypeCombination` to type `Order`
  </details>

- [#936](https://github.com/commercetools/commercetools-sdk-typescript/pull/936) [`f702837`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f702837c3ec7fde11641c94abb5ed4dab138acf9) Thanks [@barbara79](https://github.com/barbara79)! - updated documentation with client v3

### Patch Changes

- Updated dependencies [[`f702837`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f702837c3ec7fde11641c94abb5ed4dab138acf9), [`e002f9d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e002f9d643d5fe59b00f7057a1e13dd6a039339a)]:
  - @commercetools/ts-client@3.1.0

## 8.2.0

### Minor Changes

- [#925](https://github.com/commercetools/commercetools-sdk-typescript/pull/925) [`624c5b2`](https://github.com/commercetools/commercetools-sdk-typescript/commit/624c5b2074073abc45676553b73e666bf16e1985) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `discount` of type `DiscountedTotalPricePortion` from type `CartDiscountReference` to `Reference`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `businessUnit` to type `ShoppingList`
  - added property `businessUnit` to type `ShoppingListDraft`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `images` of type `ProductTailoringSetExternalImagesAction` to be optional
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchFacetScope`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ShoppingListSetBusinessUnitAction`
  </details>

## 8.1.0

### Minor Changes

- [#900](https://github.com/commercetools/commercetools-sdk-typescript/pull/900) [`548c38e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/548c38e62c540cc7ca4ee96c401238a8884f8d32) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/in-store/key={storeKey}/business-units`
  - added resource `/{projectKey}/in-store/key={storeKey}/business-units/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/business-units/{ID}`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - :warning: changed property `triggerPattern` of type `CartDiscountPatternTarget` to be required
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `inheritedStores` to type `BusinessUnit`
  - added property `inheritedStores` to type `Company`
  - added property `inheritedStores` to type `Division`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withId().delete()`
  </details>

### Patch Changes

- Updated dependencies [[`a08c782`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a08c78267518c5010940a1f0887319225c8beb6d), [`626c403`](https://github.com/commercetools/commercetools-sdk-typescript/commit/626c4035544c804db96a6e5f1c63f6ea9073c649)]:
  - @commercetools/ts-client@3.0.1

## 8.0.0

### Major Changes

- [#896](https://github.com/commercetools/commercetools-sdk-typescript/pull/896) [`f9b8cb6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f9b8cb605d99fe5ece13bdc3c152eb4818e19b3b) Thanks [@lojzatran](https://github.com/lojzatran)! - Remove support of nodejs 16

### Patch Changes

- Updated dependencies [[`f9b8cb6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f9b8cb605d99fe5ece13bdc3c152eb4818e19b3b)]:
  - @commercetools/ts-client@3.0.0
  - @commercetools/sdk-client-v2@3.0.0

## 7.25.0

### Minor Changes

- [#891](https://github.com/commercetools/commercetools-sdk-typescript/pull/891) [`4a003ca`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4a003ca0f870ec7edb63d21e8fb2932b602fb876) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `line` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `column` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `StagedOrder` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `totalPrice` of type `Order` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `exact` of type `SearchExactExpression` from type `SearchAnyValue` to `SearchExactValue`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `custom` to type `ApprovalRule`
  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `applicationMode` to type `CartDiscountValueFixed`
  - added property `applicationMode` to type `CartDiscountValueFixedDraft`
  - added property `custom` to type `CartSetCustomShippingMethodAction`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `custom` to type `StagedOrderSetCustomShippingMethodAction`
  - added property `custom` to type `StagedOrderSetShippingAddressAndCustomShippingMethodAction`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `businessUnits` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  - added property `source` to type `EventBridgeDestination`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/business-units/search`
  - added resource `/{projectKey}/business-units/search/indexing-status`
  - added resource `/{projectKey}/channels/key={key}`
  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ApprovalRuleSetCustomFieldAction`
  - added type `ApprovalRuleSetCustomTypeAction`
  - added type `BusinessUnitIndexingProgress`
  - added type `BusinessUnitIndexingStatus`
  - added type `BusinessUnitPagedSearchResponse`
  - added type `BusinessUnitSearchIndexingStatusResponse`
  - added type `BusinessUnitSearchRequest`
  - added type `BusinessUnitSearchResult`
  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `CartDiscountPatternTarget`
  - added type `CountOnCustomLineItemUnits`
  - added type `CountOnLineItemUnits`
  - added type `DiscountApplicationMode`
  - added type `PatternComponent`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `ShoppingListLineItemAddedMessage`
  - added type `ShoppingListLineItemRemovedMessage`
  - added type `ShoppingListMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `ShoppingListLineItemAddedMessagePayload`
  - added type `ShoppingListLineItemRemovedMessagePayload`
  - added type `ShoppingListMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `BusinessUnitSearchStatus`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeBusinessUnitSearchStatusAction`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `SearchExactValue`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `Canceled` to type `ShipmentState`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `shopping-list` to type `MessageSubscriptionResourceTypeId`
  - added enum `approval-rule` to type `CustomFieldReferenceValue`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `approval-rule` to type `ResourceTypeId`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().productTailoring().head()`
  - added method `apiRoot.withProjectKey().businessUnits().search().post()`
  - added method `apiRoot.withProjectKey().businessUnits().search().head()`
  - added method `apiRoot.withProjectKey().businessUnits().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().channels().withKey().get()`
  - added method `apiRoot.withProjectKey().channels().withKey().head()`
  - added method `apiRoot.withProjectKey().channels().withKey().post()`
  - added method `apiRoot.withProjectKey().channels().withKey().delete()`
  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `where` to method `get /{projectKey}/product-selections/key={key}/products`
  - added query parameter `where` to method `get /{projectKey}/product-selections/{ID}/products`
  </details>

## 7.24.0

### Minor Changes

- [#890](https://github.com/commercetools/commercetools-sdk-typescript/pull/890) [`9da41f4`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9da41f4118c60009eed56f64d833432d9c0c5403) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `line` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `column` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `StagedOrder` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `totalPrice` of type `Order` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `exact` of type `SearchExactExpression` from type `SearchAnyValue` to `SearchExactValue`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `custom` to type `ApprovalRule`
  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `applicationMode` to type `CartDiscountValueFixed`
  - added property `applicationMode` to type `CartDiscountValueFixedDraft`
  - added property `custom` to type `CartSetCustomShippingMethodAction`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `custom` to type `StagedOrderSetCustomShippingMethodAction`
  - added property `custom` to type `StagedOrderSetShippingAddressAndCustomShippingMethodAction`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `businessUnits` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  - added property `source` to type `EventBridgeDestination`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/business-units/search`
  - added resource `/{projectKey}/business-units/search/indexing-status`
  - added resource `/{projectKey}/channels/key={key}`
  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ApprovalRuleSetCustomFieldAction`
  - added type `ApprovalRuleSetCustomTypeAction`
  - added type `BusinessUnitIndexingProgress`
  - added type `BusinessUnitIndexingStatus`
  - added type `BusinessUnitPagedSearchResponse`
  - added type `BusinessUnitSearchIndexingStatusResponse`
  - added type `BusinessUnitSearchRequest`
  - added type `BusinessUnitSearchResult`
  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `CartDiscountPatternTarget`
  - added type `CountOnCustomLineItemUnits`
  - added type `CountOnLineItemUnits`
  - added type `DiscountApplicationMode`
  - added type `PatternComponent`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `ShoppingListLineItemAddedMessage`
  - added type `ShoppingListLineItemRemovedMessage`
  - added type `ShoppingListMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `ShoppingListLineItemAddedMessagePayload`
  - added type `ShoppingListLineItemRemovedMessagePayload`
  - added type `ShoppingListMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `BusinessUnitSearchStatus`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeBusinessUnitSearchStatusAction`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `SearchExactValue`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `Canceled` to type `ShipmentState`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `shopping-list` to type `MessageSubscriptionResourceTypeId`
  - added enum `approval-rule` to type `CustomFieldReferenceValue`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `approval-rule` to type `ResourceTypeId`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().productTailoring().head()`
  - added method `apiRoot.withProjectKey().businessUnits().search().post()`
  - added method `apiRoot.withProjectKey().businessUnits().search().head()`
  - added method `apiRoot.withProjectKey().businessUnits().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().channels().withKey().get()`
  - added method `apiRoot.withProjectKey().channels().withKey().head()`
  - added method `apiRoot.withProjectKey().channels().withKey().post()`
  - added method `apiRoot.withProjectKey().channels().withKey().delete()`
  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `where` to method `get /{projectKey}/product-selections/key={key}/products`
  - added query parameter `where` to method `get /{projectKey}/product-selections/{ID}/products`
  </details>

### Patch Changes

- [#887](https://github.com/commercetools/commercetools-sdk-typescript/pull/887) [`3ee183a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3ee183a3329012b4bcfe6eb7a6b0044232bbdb5d) Thanks [@lojzatran](https://github.com/lojzatran)! - fix(SUPPORT-30038): clone deep the request object

- Updated dependencies [[`3ee183a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3ee183a3329012b4bcfe6eb7a6b0044232bbdb5d)]:
  - @commercetools/ts-client@2.1.7

## 7.23.0

### Minor Changes

- [#878](https://github.com/commercetools/commercetools-sdk-typescript/pull/878) [`90ece88`](https://github.com/commercetools/commercetools-sdk-typescript/commit/90ece88d52bc1ff7d01c070bb9e548dd46eb2cda) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `line` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `column` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `StagedOrder` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `totalPrice` of type `Order` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `custom` to type `ApprovalRule`
  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  - added property `source` to type `EventBridgeDestination`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/channels/key={key}`
  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ApprovalRuleSetCustomFieldAction`
  - added type `ApprovalRuleSetCustomTypeAction`
  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `approval-rule` to type `CustomFieldReferenceValue`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `approval-rule` to type `ResourceTypeId`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().productTailoring().head()`
  - added method `apiRoot.withProjectKey().channels().withKey().get()`
  - added method `apiRoot.withProjectKey().channels().withKey().head()`
  - added method `apiRoot.withProjectKey().channels().withKey().post()`
  - added method `apiRoot.withProjectKey().channels().withKey().delete()`
  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `where` to method `get /{projectKey}/product-selections/key={key}/products`
  - added query parameter `where` to method `get /{projectKey}/product-selections/{ID}/products`
  </details>

### Patch Changes

- Updated dependencies [[`3bfcd2e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3bfcd2e5bae47499bb1694f594bf01d6caa190a2)]:
  - @commercetools/ts-client@2.1.6

## 7.22.0

### Minor Changes

- [#865](https://github.com/commercetools/commercetools-sdk-typescript/pull/865) [`15e3913`](https://github.com/commercetools/commercetools-sdk-typescript/commit/15e3913bb9625e664ca7ecb13e4932c293ffc32b) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `line` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `column` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `StagedOrder` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `totalPrice` of type `Order` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `custom` to type `ApprovalRule`
  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  - added property `source` to type `EventBridgeDestination`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ApprovalRuleSetCustomFieldAction`
  - added type `ApprovalRuleSetCustomTypeAction`
  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `approval-rule` to type `CustomFieldReferenceValue`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `approval-rule` to type `ResourceTypeId`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().productTailoring().head()`
  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `where` to method `get /{projectKey}/product-selections/key={key}/products`
  - added query parameter `where` to method `get /{projectKey}/product-selections/{ID}/products`
  </details>

### Patch Changes

- Updated dependencies [[`c41025e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c41025ed47a83b60d7cd7dc69121fb965bb66c24)]:
  - @commercetools/ts-client@2.1.4

## 7.21.0

### Minor Changes

- [#853](https://github.com/commercetools/commercetools-sdk-typescript/pull/853) [`74f1c30`](https://github.com/commercetools/commercetools-sdk-typescript/commit/74f1c302b68aa741accfcf101138520c4488191e) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `line` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `column` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `StagedOrder` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `totalPrice` of type `Order` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `custom` to type `ApprovalRule`
  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  - added property `source` to type `EventBridgeDestination`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ApprovalRuleSetCustomFieldAction`
  - added type `ApprovalRuleSetCustomTypeAction`
  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `approval-rule` to type `CustomFieldReferenceValue`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `approval-rule` to type `ResourceTypeId`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().productTailoring().head()`
  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `where` to method `get /{projectKey}/product-selections/key={key}/products`
  - added query parameter `where` to method `get /{projectKey}/product-selections/{ID}/products`
  </details>

### Patch Changes

- Updated dependencies [[`878aacc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/878aacc187bdd1f3e43ab545d8d2ed43c5f61586)]:
  - @commercetools/ts-client@2.1.3

## 7.20.0

### Minor Changes

- [#844](https://github.com/commercetools/commercetools-sdk-typescript/pull/844) [`03e722b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/03e722bbdc795382f4d8325eeb196ed772bf21cd) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `line` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `column` of type `GraphQLErrorLocation` from type `integer` to `number`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `custom` to type `ApprovalRule`
  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  - added property `source` to type `EventBridgeDestination`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ApprovalRuleSetCustomFieldAction`
  - added type `ApprovalRuleSetCustomTypeAction`
  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `approval-rule` to type `CustomFieldReferenceValue`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `approval-rule` to type `ResourceTypeId`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().productTailoring().head()`
  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `where` to method `get /{projectKey}/product-selections/key={key}/products`
  - added query parameter `where` to method `get /{projectKey}/product-selections/{ID}/products`
  </details>

### Patch Changes

- Updated dependencies [[`39c5298`](https://github.com/commercetools/commercetools-sdk-typescript/commit/39c5298c8b6abb71bce47ef437e6e7359c3e8195)]:
  - @commercetools/ts-client@2.1.2

## 7.19.0

### Minor Changes

- [#837](https://github.com/commercetools/commercetools-sdk-typescript/pull/837) [`cd54482`](https://github.com/commercetools/commercetools-sdk-typescript/commit/cd544822e289be7c62d4287338f1fd943f1a5823) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().productTailoring().head()`
  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ApprovalRuleSetCustomFieldAction`
  - added type `ApprovalRuleSetCustomTypeAction`
  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `approval-rule` to type `CustomFieldReferenceValue`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `approval-rule` to type `ResourceTypeId`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `custom` to type `ApprovalRule`
  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  - added property `source` to type `EventBridgeDestination`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

## 7.18.0

### Minor Changes

- [#824](https://github.com/commercetools/commercetools-sdk-typescript/pull/824) [`7cfccb8`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7cfccb85d9488caeac9c79dc8dd1021710f14e58) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().productTailoring().head()`
  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  - added property `source` to type `EventBridgeDestination`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

### Patch Changes

- Updated dependencies [[`b2c62ba`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b2c62ba105b7fb9fe2eb6a4ae1b95c8d5b67d428)]:
  - @commercetools/ts-client@2.1.1

## 7.17.0

### Minor Changes

- [#822](https://github.com/commercetools/commercetools-sdk-typescript/pull/822) [`19d492c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/19d492cf32891312fa36aa1d2b73d484bea03b0c) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

## 7.16.0

### Minor Changes

- [#819](https://github.com/commercetools/commercetools-sdk-typescript/pull/819) [`2bfc210`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2bfc210da948ac71c8e9e79f0524bb87c4602e85) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

### Patch Changes

- Updated dependencies [[`57a16d7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/57a16d75ded60923bf080ef2270c3396fe8bc0e5)]:
  - @commercetools/ts-client@2.1.0

## 7.15.0

### Minor Changes

- [#817](https://github.com/commercetools/commercetools-sdk-typescript/pull/817) [`8c32f09`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8c32f09b02bafdad1ac60e41b5418c74b297d12d) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `SearchNotReadyError`
  - added type `GraphQLSearchNotReadyError`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductTailoringAttribute`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetAttributeAction`
  - added type `ProductTailoringSetAttributeInAllVariantsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  - added type `ImageProcessingOngoingWarning`
  - added type `WarningObject`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductSearchStatus`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `ExtensionResourceTypeId`
  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `MessageSubscriptionResourceTypeId`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  - added enum `product-tailoring` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `warnings` to type `ProductTailoring`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `warnings` to type `Product`
  - added property `customers` to type `SearchIndexingConfiguration`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

## 7.14.0

### Minor Changes

- [#805](https://github.com/commercetools/commercetools-sdk-typescript/pull/805) [`b8489ba`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b8489ba4fd76592d2f866d1f1edceb2db919c63a) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

### Patch Changes

- Updated dependencies [[`dfbe4ce`](https://github.com/commercetools/commercetools-sdk-typescript/commit/dfbe4cec72156668055cd73a05d03abc59749168)]:
  - @commercetools/ts-client@2.0.5

## 7.13.0

### Minor Changes

- [#797](https://github.com/commercetools/commercetools-sdk-typescript/pull/797) [`3ca2970`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3ca2970e7be09c72e022e142acfd70d894a80716) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `staged` to type `ProductVariantDeletedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `staged` to type `ProductVariantDeletedMessagePayload`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

### Patch Changes

- Updated dependencies [[`94a35e7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/94a35e78924ce63df8727d95ddfaed071cd90140)]:
  - @commercetools/ts-client@2.0.4

## 7.12.0

### Minor Changes

- [#786](https://github.com/commercetools/commercetools-sdk-typescript/pull/786) [`f431518`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f431518cdac3bf31b6e526ac9a3fa7788a33e4a3) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `applicationMode` to type `CartDiscountValueAbsolute`
  - added property `applicationMode` to type `CartDiscountValueAbsoluteDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `DiscountApplicationMode`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

## 7.11.0

### Minor Changes

- [#774](https://github.com/commercetools/commercetools-sdk-typescript/pull/774) [`f37e181`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f37e181910d132150dbb9392c466f75546007b57) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `DeliveryCustomFieldAddedMessage`
  - added type `DeliveryCustomFieldChangedMessage`
  - added type `DeliveryCustomFieldRemovedMessage`
  - added type `DeliveryCustomTypeRemovedMessage`
  - added type `DeliveryCustomTypeSetMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `DeliveryCustomFieldAddedMessagePayload`
  - added type `DeliveryCustomFieldChangedMessagePayload`
  - added type `DeliveryCustomFieldRemovedMessagePayload`
  - added type `DeliveryCustomTypeRemovedMessagePayload`
  - added type `DeliveryCustomTypeSetMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().businessUnits().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

### Patch Changes

- Updated dependencies [[`38c7035`](https://github.com/commercetools/commercetools-sdk-typescript/commit/38c703557964a2355c4419b0bf8f0ea0a6361ce5)]:
  - @commercetools/ts-client@2.0.2

## 7.10.0

### Minor Changes

- [#725](https://github.com/commercetools/commercetools-sdk-typescript/pull/725) [`99e7953`](https://github.com/commercetools/commercetools-sdk-typescript/commit/99e79536a119d87ca20e34850b355ccee1732d0f) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
  - :warning: changed property `customType` of type `OrderSearchAnyValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchDateRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchFullTextValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchLongRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchNumberRangeValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchQueryExpressionValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `customType` of type `OrderSearchStringValue` from type `string` to `OrderSearchCustomType`
  - :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `approvalRuleMode` to type `BusinessUnit`
  - added property `approvalRuleMode` to type `BusinessUnitDraft`
  - added property `approvalRuleMode` to type `Company`
  - added property `approvalRuleMode` to type `CompanyDraft`
  - added property `approvalRuleMode` to type `Division`
  - added property `approvalRuleMode` to type `DivisionDraft`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessage`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessage`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessage`
  - added property `metaTitle` to type `ProductTailoringCreatedMessage`
  - added property `metaDescription` to type `ProductTailoringCreatedMessage`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessage`
  - added property `variants` to type `ProductTailoringCreatedMessage`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldAddedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldChangedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomFieldRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeRemovedMessagePayload`
  - added property `addressId` to type `CustomerAddressCustomTypeSetMessagePayload`
  - added property `metaTitle` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaDescription` to type `ProductTailoringCreatedMessagePayload`
  - added property `metaKeywords` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringCreatedMessagePayload`
  - added property `variants` to type `ProductTailoringData`
  - added property `variants` to type `ProductTailoringDraft`
  - added property `variants` to type `ProductTailoringInStoreDraft`
  - added property `active` to type `ShippingMethod`
  - added property `active` to type `ShippingMethodDraft`
  - added property `store` to type `StagedQuote`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/customers/search`
  - added resource `/{projectKey}/customers/search/indexing-status`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/orders/quotes`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/quotes/{ID}`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/carts/key={key}`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/key={key}`
  - :warning: removed query parameter `localeProjection` from method `get /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `post /{projectKey}/products/{ID}`
  - :warning: removed query parameter `localeProjection` from method `delete /{projectKey}/products/{ID}`
  - :warning: removed query parameter `sort` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `offset` from method `get /{projectKey}/product-projections/suggest`
  - :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/suggest`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().customers().search().post()`
  - added method `apiRoot.withProjectKey().customers().search().head()`
  - added method `apiRoot.withProjectKey().customers().searchIndexingStatus().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().images().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quoteRequests().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().stagedQuotes().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().quotes().withId().delete()`
  </details>

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().carts().withKey().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withId().delete()`
  - :warning: removed method `apiRoot.withProjectKey().me().quoteRequests().withKey().delete()`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `shopping-list` to type `ExtensionResourceTypeId`
  - added enum `customer-group` to type `AttributeReferenceTypeId`
  - added enum `attribute-group` to type `ChangeSubscriptionResourceTypeId`
  - added enum `product-tailoring` to type `ChangeSubscriptionResourceTypeId`
  - added enum `cart-discount` to type `CustomFieldReferenceValue`
  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `product-price` from type `ChangeSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitChangeApprovalRuleModeAction`
  - added type `CartChangeLineItemsOrderAction`
  - added type `CustomerIndexingProgress`
  - added type `CustomerIndexingStatus`
  - added type `CustomerPagedSearchResponse`
  - added type `CustomerSearchIndexingStatusResponse`
  - added type `CustomerSearchRequest`
  - added type `CustomerSearchResult`
  - added type `MyCartChangeLineItemsOrderAction`
  - added type `BusinessUnitApprovalRuleModeChangedMessage`
  - added type `ProductPriceCustomFieldAddedMessage`
  - added type `ProductPriceCustomFieldChangedMessage`
  - added type `ProductPriceCustomFieldRemovedMessage`
  - added type `ProductPriceCustomFieldsRemovedMessage`
  - added type `ProductPriceCustomFieldsSetMessage`
  - added type `ProductTailoringImageAddedMessage`
  - added type `ProductTailoringImagesSetMessage`
  - added type `ProductVariantTailoringAddedMessage`
  - added type `ProductVariantTailoringRemovedMessage`
  - added type `BusinessUnitApprovalRuleModeChangedMessagePayload`
  - added type `ProductPriceCustomFieldAddedMessagePayload`
  - added type `ProductPriceCustomFieldChangedMessagePayload`
  - added type `ProductPriceCustomFieldRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsRemovedMessagePayload`
  - added type `ProductPriceCustomFieldsSetMessagePayload`
  - added type `ProductTailoringImageAddedMessagePayload`
  - added type `ProductTailoringImagesSetMessagePayload`
  - added type `ProductVariantTailoringAddedMessagePayload`
  - added type `ProductVariantTailoringRemovedMessagePayload`
  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSearchCustomType`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  - added type `ProductVariantTailoring`
  - added type `ProductVariantTailoringDraft`
  - added type `ProductTailoringAddAssetAction`
  - added type `ProductTailoringAddExternalImageAction`
  - added type `ProductTailoringAddVariantAction`
  - added type `ProductTailoringChangeAssetNameAction`
  - added type `ProductTailoringChangeAssetOrderAction`
  - added type `ProductTailoringMoveImageToPositionAction`
  - added type `ProductTailoringRemoveAssetAction`
  - added type `ProductTailoringRemoveImageAction`
  - added type `ProductTailoringRemoveVariantAction`
  - added type `ProductTailoringSetAssetCustomFieldAction`
  - added type `ProductTailoringSetAssetCustomTypeAction`
  - added type `ProductTailoringSetAssetDescriptionAction`
  - added type `ProductTailoringSetAssetKeyAction`
  - added type `ProductTailoringSetAssetSourcesAction`
  - added type `ProductTailoringSetAssetTagsAction`
  - added type `ProductTailoringSetExternalImagesAction`
  - added type `ProductTailoringSetImageLabelAction`
  - added type `CustomerSearchStatus`
  - added type `ProjectChangeCustomerSearchStatusAction`
  - added type `ShippingMethodChangeActiveAction`
  </details>

### Patch Changes

- Updated dependencies [[`d82a9e0`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d82a9e0e6666e076183172a9229ffcda8e28905a)]:
  - @commercetools/ts-client@2.0.1

## 7.9.0

### Minor Changes

- [#696](https://github.com/commercetools/commercetools-sdk-typescript/pull/696) [`3ab225d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3ab225da3e49d99e975c2469a1f884536e726b6c) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `stores` of type `BusinessUnit` to be optional
  - changed property `stores` of type `Company` to be optional
  - changed property `stores` of type `Division` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `StagedOrderSetShippingCustomFieldAction`
  - added type `StagedOrderSetShippingCustomTypeAction`
  - added type `OrderSetShippingCustomFieldAction`
  - added type `OrderSetShippingCustomTypeAction`
  </details>

### Patch Changes

- Updated dependencies [[`e7e5ac7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e7e5ac73de07a8ce141ec0bc2b2abf492462ec73)]:
  - @commercetools/ts-client@2.0.0

## 7.8.0

### Minor Changes

- [#680](https://github.com/commercetools/commercetools-sdk-typescript/pull/680) [`a00e693`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a00e6939def06a4b435b05db28a903b5c945bb3c) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `custom` of type `MyBusinessUnitDraft` from type `CustomFields` to `CustomFieldsDraft`
  - :warning: changed property `custom` of type `MyCompanyDraft` from type `CustomFields` to `CustomFieldsDraft`
  - :warning: changed property `custom` of type `MyDivisionDraft` from type `CustomFields` to `CustomFieldsDraft`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - :warning: changed property `stores` of type `BusinessUnit` to be required
  - :warning: changed property `stores` of type `Company` to be required
  - :warning: changed property `stores` of type `Division` to be required
  - :warning: changed property `stores` of type `BusinessUnitSetStoresAction` to be required
  - :warning: changed property `stores` of type `CartDiscountSetStoresAction` to be required
  - :warning: changed property `stores` of type `Customer` to be required
  - :warning: changed property `stores` of type `CustomerSetStoresAction` to be required
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `postFilter` to type `ProductSearchRequest`
  </details>

### Patch Changes

- Updated dependencies [[`8b1aecc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8b1aecce5859248f3a90c8cc856db64d2932b5d5), [`b8bc24d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b8bc24df5db74feef7fb5743b6f24b425d43b738), [`a1b43c0`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a1b43c048fac3eba3d53470314b61d36e74f0a51)]:
  - @commercetools/sdk-client-v2@2.5.0
  - @commercetools/ts-client@1.2.1

## 7.7.0

### Minor Changes

- [#670](https://github.com/commercetools/commercetools-sdk-typescript/pull/670) [`96c319a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/96c319ace84ba80a04581a67e608d61008ddbebf) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `attributedTo` to type `CreatedBy`
  - added property `attributedTo` to type `LastModifiedBy`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `Attribution`
  - added type `AttributionSource`
  </details>

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().products().search().head()`
  </details>

### Patch Changes

- Updated dependencies [[`344fd2d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/344fd2d105f51a65a8a93f247ea9ea8f1a09b095)]:
  - @commercetools/sdk-client-v2@2.4.1

## 7.6.0

### Minor Changes

- [#651](https://github.com/commercetools/commercetools-sdk-typescript/pull/651) [`6ebb725`](https://github.com/commercetools/commercetools-sdk-typescript/commit/6ebb725fe18630282c7209ba88596fd2ac315122) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `ManuallySuspended` to type `SubscriptionHealthStatus`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `productsSearch` to type `SearchIndexingConfiguration`
  - added property `mode` to type `ProjectChangeProductSearchIndexingEnabledAction`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().products().search().post()`
  - added method `apiRoot.withProjectKey().products().search().head()`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/products/search`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `LockedFieldError`
  - added type `GraphQLLockedFieldError`
  - added type `ProductPagedSearchResponse`
  - added type `ProductSearchErrorResponse`
  - added type `ProductSearchMatchingVariantEntry`
  - added type `ProductSearchMatchingVariants`
  - added type `ProductSearchProjectionParams`
  - added type `ProductSearchRequest`
  - added type `ProductSearchResult`
  - added type `ProductSearchFacetCountExpression`
  - added type `ProductSearchFacetCountLevelEnum`
  - added type `ProductSearchFacetCountValue`
  - added type `ProductSearchFacetDistinctBucketSortBy`
  - added type `ProductSearchFacetDistinctBucketSortExpression`
  - added type `ProductSearchFacetDistinctExpression`
  - added type `ProductSearchFacetDistinctValue`
  - added type `ProductSearchFacetExpression`
  - added type `ProductSearchFacetRangesExpression`
  - added type `ProductSearchFacetRangesFacetRange`
  - added type `ProductSearchFacetRangesValue`
  - added type `ProductSearchFacetResult`
  - added type `ProductSearchFacetResultBucket`
  - added type `ProductSearchFacetResultBucketEntry`
  - added type `ProductSearchFacetResultCount`
  - added type `ProductSearchFacetScope`
  - added type `ProductSearchFacetScopeEnum`
  - added type `ProductSearchIndexingMode`
  - added type `ProductSearchStatus`
  - added type `SearchAndExpression`
  - added type `SearchAnyValue`
  - added type `SearchCompoundExpression`
  - added type `SearchDateRangeExpression`
  - added type `SearchDateRangeValue`
  - added type `SearchDateTimeRangeExpression`
  - added type `SearchDateTimeRangeValue`
  - added type `SearchExactExpression`
  - added type `SearchExistsExpression`
  - added type `SearchExistsValue`
  - added type `SearchFieldType`
  - added type `SearchFilterExpression`
  - added type `SearchFullTextExpression`
  - added type `SearchFullTextPrefixExpression`
  - added type `SearchFullTextPrefixValue`
  - added type `SearchFullTextValue`
  - added type `SearchLongRangeExpression`
  - added type `SearchLongRangeValue`
  - added type `SearchMatchType`
  - added type `SearchMatchingVariant`
  - added type `SearchNotExpression`
  - added type `SearchNumberRangeExpression`
  - added type `SearchNumberRangeValue`
  - added type `SearchOrExpression`
  - added type `SearchPrefixExpression`
  - added type `SearchQuery`
  - added type `SearchQueryExpression`
  - added type `SearchQueryExpressionValue`
  - added type `SearchSortMode`
  - added type `SearchSortOrder`
  - added type `SearchSorting`
  - added type `SearchTimeRangeExpression`
  - added type `SearchTimeRangeValue`
  - added type `SearchWildCardExpression`
  </details>

## 7.5.0

### Minor Changes

- [#626](https://github.com/commercetools/commercetools-sdk-typescript/pull/626) [`774266d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/774266d736170f678154d72e5b52e794186979b0) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `ProductTailoringCreatedMessage`
  - added type `ProductTailoringDeletedMessage`
  - added type `ProductTailoringDescriptionSetMessage`
  - added type `ProductTailoringNameSetMessage`
  - added type `ProductTailoringPublishedMessage`
  - added type `ProductTailoringSlugSetMessage`
  - added type `ProductTailoringUnpublishedMessage`
  - added type `ProductTailoringCreatedMessagePayload`
  - added type `ProductTailoringDeletedMessagePayload`
  - added type `ProductTailoringDescriptionSetMessagePayload`
  - added type `ProductTailoringNameSetMessagePayload`
  - added type `ProductTailoringPublishedMessagePayload`
  - added type `ProductTailoringSlugSetMessagePayload`
  - added type `ProductTailoringUnpublishedMessagePayload`
  - added type `ProductTailoring`
  - added type `ProductTailoringData`
  - added type `ProductTailoringDraft`
  - added type `ProductTailoringInStoreDraft`
  - added type `ProductTailoringPagedQueryResponse`
  - added type `ProductTailoringReference`
  - added type `ProductTailoringResourceIdentifier`
  - added type `ProductTailoringUpdate`
  - added type `ProductTailoringUpdateAction`
  - added type `ProductTailoringPublishAction`
  - added type `ProductTailoringSetDescriptionAction`
  - added type `ProductTailoringSetMetaAttributesAction`
  - added type `ProductTailoringSetMetaDescriptionAction`
  - added type `ProductTailoringSetMetaKeywordsAction`
  - added type `ProductTailoringSetMetaTitleAction`
  - added type `ProductTailoringSetNameAction`
  - added type `ProductTailoringSetSlugAction`
  - added type `ProductTailoringUnpublishAction`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - :warning: changed property `isOnStock` of type `ProductVariantAvailability` to be required
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `taxPortions` to type `TaxedItemPrice`
  - added property `id` to type `ProductVariantAvailability`
  - added property `version` to type `ProductVariantAvailability`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().productTailoring().get()`
  - added method `apiRoot.withProjectKey().productTailoring().post()`
  - added method `apiRoot.withProjectKey().productTailoring().withKey().get()`
  - added method `apiRoot.withProjectKey().productTailoring().withKey().post()`
  - added method `apiRoot.withProjectKey().productTailoring().withKey().delete()`
  - added method `apiRoot.withProjectKey().productTailoring().withId().get()`
  - added method `apiRoot.withProjectKey().productTailoring().withId().post()`
  - added method `apiRoot.withProjectKey().productTailoring().withId().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().productTailoring().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().productTailoring().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().delete()`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `product-tailoring` to type `ReferenceTypeId`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/product-tailoring`
  - added resource `/{projectKey}/product-tailoring/key={key}`
  - added resource `/{projectKey}/product-tailoring/{ID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/product-tailoring`
  - added resource `/{projectKey}/in-store/key={storeKey}/products`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring`
  - added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring`
  </details>

- [#645](https://github.com/commercetools/commercetools-sdk-typescript/pull/645) [`bfbdfe6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/bfbdfe65042f2b8d011d40859c9542666187dd22) Thanks [@lojzatran](https://github.com/lojzatran)! - Add Datadog APM to SDK

### Patch Changes

- Updated dependencies [[`bfbdfe6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/bfbdfe65042f2b8d011d40859c9542666187dd22), [`a000d70`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a000d708a82b39ecfff26acfbb682dda9675e79f)]:
  - @commercetools/ts-client@1.2.0
  - @commercetools/sdk-client-v2@2.4.0

## 7.4.0

### Minor Changes

- [#607](https://github.com/commercetools/commercetools-sdk-typescript/pull/607) [`c924c7c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c924c7ca84188d4fe397fd35e667448896e7dd09) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `DiscountedLineItemPortionDraft`
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `includedDiscounts` of type `DiscountedLineItemPriceDraft` from type `DiscountedLineItemPortion[]` to `DiscountedLineItemPortionDraft[]`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `totalTax` to type `TaxedPriceDraft`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `priceMode` of type `CustomLineItemDraft` to be optional
  - changed property `oldShipmentState` of type `OrderShipmentStateChangedMessage` to be optional
  - changed property `oldOrderState` of type `OrderStateChangedMessage` to be optional
  - changed property `oldShipmentState` of type `OrderShipmentStateChangedMessagePayload` to be optional
  - changed property `oldOrderState` of type `OrderStateChangedMessagePayload` to be optional
  </details>

### Patch Changes

- Updated dependencies [[`f0028a3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f0028a343fe3417bbc3caeb76cc6658a5d7bff73)]:
  - @commercetools/ts-client@1.1.1

## 7.3.0

### Minor Changes

- [#602](https://github.com/commercetools/commercetools-sdk-typescript/pull/602) [`7a85bab`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7a85bab874e7bba76ecd49e776a651cd02dc20f6) Thanks [@ajimae](https://github.com/ajimae)! - Add resources as global exports

## 7.2.0

### Minor Changes

- [#587](https://github.com/commercetools/commercetools-sdk-typescript/pull/587) [`4b14237`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4b14237f89e171c2a622432665308e68d3278f14) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Api changes**

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `NotEnabledError`
  - :warning: removed type `GraphQLNotEnabledError`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ApprovalFlowSetCustomFieldAction`
  - added type `ApprovalFlowSetCustomTypeAction`
  - added type `DiscountCodeSetKeyAction`
  - added type `CartDiscountCreatedMessage`
  - added type `CartDiscountDeletedMessage`
  - added type `CartDiscountStoreAddedMessage`
  - added type `CartDiscountStoreRemovedMessage`
  - added type `CartDiscountStoresSetMessage`
  - added type `DiscountCodeCreatedMessage`
  - added type `DiscountCodeDeletedMessage`
  - added type `DiscountCodeKeySetMessage`
  - added type `CartDiscountCreatedMessagePayload`
  - added type `CartDiscountDeletedMessagePayload`
  - added type `CartDiscountStoreAddedMessagePayload`
  - added type `CartDiscountStoreRemovedMessagePayload`
  - added type `CartDiscountStoresSetMessagePayload`
  - added type `DiscountCodeCreatedMessagePayload`
  - added type `DiscountCodeDeletedMessagePayload`
  - added type `DiscountCodeKeySetMessagePayload`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `expand` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `sort` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `limit` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `offset` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `withTotal` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `where` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `/^var[.][a-zA-Z0-9]+$/` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `expand` to method `post /{projectKey}/in-store/key={storeKey}/cart-discounts`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().discountCodes().withKey().get()`
  - added method `apiRoot.withProjectKey().discountCodes().withKey().head()`
  - added method `apiRoot.withProjectKey().discountCodes().withKey().post()`
  - added method `apiRoot.withProjectKey().discountCodes().withKey().delete()`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `custom` to type `ApprovalFlow`
  - added property `perMethodExternalTaxRate` to type `CartAddLineItemAction`
  - added property `key` to type `DiscountCode`
  - added property `key` to type `DiscountCodeDraft`
  - added property `shippingMode` to type `MyCartDraft`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `associate-role` to type `AttributeReferenceTypeId`
  - added enum `business-unit` to type `AttributeReferenceTypeId`
  - added enum `cart-discount` to type `AttributeReferenceTypeId`
  - added enum `approval-flow` to type `CustomFieldReferenceValue`
  - added enum `approval-flow` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/discount-codes/key={key}`
  </details>

  <details>
  <summary>Changed MethodResponseBody(s)</summary>

  - :warning: changed response body for `200: application/json` of method `get /{projectKey}/in-store/key={storeKey}/cart-discounts` from type `CartDiscount` to `CartDiscountPagedQueryResponse`
  </details>

## 7.1.0

### Minor Changes

- [#553](https://github.com/commercetools/commercetools-sdk-typescript/pull/553) [`8e0a312`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8e0a312404020c2f14cb15786a262c78476b5152) Thanks [@github-actions](https://github.com/apps/github-actions)! - **Api changes**

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `expand` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `sort` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `limit` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `offset` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `withTotal` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `where` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `/^var[.][a-zA-Z0-9]+$/` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added query parameter `expand` to method `post /{projectKey}/in-store/key={storeKey}/cart-discounts`
  </details>

  <details>
  <summary>Changed MethodResponseBody(s)</summary>

  - :warning: changed response body for `200: application/json` of method `get /{projectKey}/in-store/key={storeKey}/cart-discounts` from type `CartDiscount` to `CartDiscountPagedQueryResponse`
  </details>

## 7.0.0

### Major Changes

- [#551](https://github.com/commercetools/commercetools-sdk-typescript/pull/551) [`9e7939a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9e7939a1df234fd1f4f77c60f4ff75b31d7fc3fd) Thanks [@github-actions](https://github.com/apps/github-actions)! - BREAKING CHANGE:

  - fix URI parameters to be URI encoded

### Minor Changes

- [#527](https://github.com/commercetools/commercetools-sdk-typescript/pull/527) [`00c6176`](https://github.com/commercetools/commercetools-sdk-typescript/commit/00c617692543f9a8d0ac64e81d583f89e002e81b) Thanks [@github-actions](https://github.com/apps/github-actions)! - **Api changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `discountOnTotalPrice` to type `Cart`
  - added property `discountOnTotalPrice` to type `StagedOrder`
  - added property `custom` to type `StagedOrderAddParcelToDeliveryAction`
  - added property `discountOnTotalPrice` to type `Order`
  - added property `custom` to type `OrderAddParcelToDeliveryAction`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `CreateApprovalRules` to type `Permission`
  - added enum `UpdateApprovalRules` to type `Permission`
  - added enum `UpdateApprovalFlows` to type `Permission`
  - added enum `approval-flow` to type `ReferenceTypeId`
  - added enum `approval-rule` to type `ReferenceTypeId`
  - added enum `customer-email-token` to type `ReferenceTypeId`
  - added enum `customer-password-token` to type `ReferenceTypeId`
  - added enum `approval-flow` to type `ChangeSubscriptionResourceTypeId`
  - added enum `approval-rule` to type `ChangeSubscriptionResourceTypeId`
  - added enum `approval-flow` to type `MessageSubscriptionResourceTypeId`
  - added enum `approval-rule` to type `MessageSubscriptionResourceTypeId`
  - added enum `customer-email-token` to type `MessageSubscriptionResourceTypeId`
  - added enum `customer-group` to type `MessageSubscriptionResourceTypeId`
  - added enum `customer-password-token` to type `MessageSubscriptionResourceTypeId`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ApprovalFlow`
  - added type `ApprovalFlowApproval`
  - added type `ApprovalFlowApproveAction`
  - added type `ApprovalFlowPagedQueryResponse`
  - added type `ApprovalFlowRejectAction`
  - added type `ApprovalFlowRejection`
  - added type `ApprovalFlowStatus`
  - added type `ApprovalFlowUpdate`
  - added type `ApprovalFlowUpdateAction`
  - added type `ApprovalRule`
  - added type `ApprovalRuleDraft`
  - added type `ApprovalRulePagedQueryResponse`
  - added type `ApprovalRuleSetApproversAction`
  - added type `ApprovalRuleSetDescriptionAction`
  - added type `ApprovalRuleSetKeyAction`
  - added type `ApprovalRuleSetNameAction`
  - added type `ApprovalRuleSetPredicateAction`
  - added type `ApprovalRuleSetRequestersAction`
  - added type `ApprovalRuleSetStatusAction`
  - added type `ApprovalRuleStatus`
  - added type `ApprovalRuleUpdate`
  - added type `ApprovalRuleUpdateAction`
  - added type `ApproverConjunction`
  - added type `ApproverConjunctionDraft`
  - added type `ApproverDisjunction`
  - added type `ApproverDisjunctionDraft`
  - added type `ApproverHierarchy`
  - added type `ApproverHierarchyDraft`
  - added type `RuleApprover`
  - added type `RuleApproverDraft`
  - added type `RuleRequester`
  - added type `RuleRequesterDraft`
  - added type `CartDiscountTotalPriceTarget`
  - added type `DiscountOnTotalPrice`
  - added type `DiscountedTotalPricePortion`
  - added type `CustomerEmailTokenReference`
  - added type `CustomerPasswordTokenReference`
  - added type `ApprovalFlowApprovedMessage`
  - added type `ApprovalFlowCompletedMessage`
  - added type `ApprovalFlowCreatedMessage`
  - added type `ApprovalFlowRejectedMessage`
  - added type `ApprovalRuleApproversSetMessage`
  - added type `ApprovalRuleCreatedMessage`
  - added type `ApprovalRuleDescriptionSetMessage`
  - added type `ApprovalRuleKeySetMessage`
  - added type `ApprovalRuleNameSetMessage`
  - added type `ApprovalRulePredicateSetMessage`
  - added type `ApprovalRuleRequestersSetMessage`
  - added type `ApprovalRuleStatusSetMessage`
  - added type `BusinessUnitAddressCustomFieldAddedMessage`
  - added type `BusinessUnitAddressCustomFieldChangedMessage`
  - added type `BusinessUnitAddressCustomFieldRemovedMessage`
  - added type `BusinessUnitAddressCustomTypeRemovedMessage`
  - added type `BusinessUnitAddressCustomTypeSetMessage`
  - added type `BusinessUnitCustomFieldAddedMessage`
  - added type `BusinessUnitCustomFieldChangedMessage`
  - added type `BusinessUnitCustomFieldRemovedMessage`
  - added type `BusinessUnitCustomTypeRemovedMessage`
  - added type `BusinessUnitCustomTypeSetMessage`
  - added type `CustomerEmailTokenCreatedMessage`
  - added type `CustomerGroupCustomFieldAddedMessage`
  - added type `CustomerGroupCustomFieldChangedMessage`
  - added type `CustomerGroupCustomFieldRemovedMessage`
  - added type `CustomerGroupCustomTypeRemovedMessage`
  - added type `CustomerGroupCustomTypeSetMessage`
  - added type `CustomerPasswordTokenCreatedMessage`
  - added type `ApprovalFlowApprovedMessagePayload`
  - added type `ApprovalFlowCompletedMessagePayload`
  - added type `ApprovalFlowCreatedMessagePayload`
  - added type `ApprovalFlowRejectedMessagePayload`
  - added type `ApprovalRuleApproversSetMessagePayload`
  - added type `ApprovalRuleCreatedMessagePayload`
  - added type `ApprovalRuleDescriptionSetMessagePayload`
  - added type `ApprovalRuleKeySetMessagePayload`
  - added type `ApprovalRuleNameSetMessagePayload`
  - added type `ApprovalRulePredicateSetMessagePayload`
  - added type `ApprovalRuleRequestersSetMessagePayload`
  - added type `ApprovalRuleStatusSetMessagePayload`
  - added type `BusinessUnitAddressCustomFieldAddedMessagePayload`
  - added type `BusinessUnitAddressCustomFieldChangedMessagePayload`
  - added type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
  - added type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
  - added type `BusinessUnitAddressCustomTypeSetMessagePayload`
  - added type `BusinessUnitCustomFieldAddedMessagePayload`
  - added type `BusinessUnitCustomFieldChangedMessagePayload`
  - added type `BusinessUnitCustomFieldRemovedMessagePayload`
  - added type `BusinessUnitCustomTypeRemovedMessagePayload`
  - added type `BusinessUnitCustomTypeSetMessagePayload`
  - added type `CustomerEmailTokenCreatedMessagePayload`
  - added type `CustomerGroupCustomFieldAddedMessagePayload`
  - added type `CustomerGroupCustomFieldChangedMessagePayload`
  - added type `CustomerGroupCustomFieldRemovedMessagePayload`
  - added type `CustomerGroupCustomTypeRemovedMessagePayload`
  - added type `CustomerGroupCustomTypeSetMessagePayload`
  - added type `CustomerPasswordTokenCreatedMessagePayload`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `CustomerMessagePayload`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().head()`
  - added method `apiRoot.withProjectKey().associateRoles().head()`
  - added method `apiRoot.withProjectKey().businessUnits().head()`
  - added method `apiRoot.withProjectKey().categories().head()`
  - added method `apiRoot.withProjectKey().carts().head()`
  - added method `apiRoot.withProjectKey().cartDiscounts().head()`
  - added method `apiRoot.withProjectKey().channels().head()`
  - added method `apiRoot.withProjectKey().customers().head()`
  - added method `apiRoot.withProjectKey().customerGroups().head()`
  - added method `apiRoot.withProjectKey().customObjects().head()`
  - added method `apiRoot.withProjectKey().discountCodes().head()`
  - added method `apiRoot.withProjectKey().inventory().head()`
  - added method `apiRoot.withProjectKey().messages().head()`
  - added method `apiRoot.withProjectKey().orders().head()`
  - added method `apiRoot.withProjectKey().payments().head()`
  - added method `apiRoot.withProjectKey().productDiscounts().head()`
  - added method `apiRoot.withProjectKey().productProjections().head()`
  - added method `apiRoot.withProjectKey().productSelections().head()`
  - added method `apiRoot.withProjectKey().quotes().head()`
  - added method `apiRoot.withProjectKey().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().stagedQuotes().head()`
  - added method `apiRoot.withProjectKey().reviews().head()`
  - added method `apiRoot.withProjectKey().shippingMethods().head()`
  - added method `apiRoot.withProjectKey().shoppingLists().head()`
  - added method `apiRoot.withProjectKey().states().head()`
  - added method `apiRoot.withProjectKey().subscriptions().head()`
  - added method `apiRoot.withProjectKey().taxCategories().head()`
  - added method `apiRoot.withProjectKey().types().head()`
  - added method `apiRoot.withProjectKey().zones().head()`
  - added method `apiRoot.withProjectKey().extensions().head()`
  - added method `apiRoot.withProjectKey().apiClients().head()`
  - added method `apiRoot.withProjectKey().stores().head()`
  - added method `apiRoot.withProjectKey().standalonePrices().head()`
  - added method `apiRoot.withProjectKey().attributeGroups().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withKey().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withId().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalFlows().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withKey().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withKey().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalFlows().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalFlows().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withOrderNumber().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withId().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().associateRoles().withKey().head()`
  - added method `apiRoot.withProjectKey().associateRoles().withId().head()`
  - added method `apiRoot.withProjectKey().businessUnits().withKey().head()`
  - added method `apiRoot.withProjectKey().businessUnits().withId().head()`
  - added method `apiRoot.withProjectKey().categories().withKey().head()`
  - added method `apiRoot.withProjectKey().categories().withId().head()`
  - added method `apiRoot.withProjectKey().carts().withCustomerId().head()`
  - added method `apiRoot.withProjectKey().carts().withKey().head()`
  - added method `apiRoot.withProjectKey().carts().withId().head()`
  - added method `apiRoot.withProjectKey().cartDiscounts().withKey().head()`
  - added method `apiRoot.withProjectKey().cartDiscounts().withId().head()`
  - added method `apiRoot.withProjectKey().channels().withId().head()`
  - added method `apiRoot.withProjectKey().customers().withKey().head()`
  - added method `apiRoot.withProjectKey().customers().withId().head()`
  - added method `apiRoot.withProjectKey().customerGroups().withKey().head()`
  - added method `apiRoot.withProjectKey().customerGroups().withId().head()`
  - added method `apiRoot.withProjectKey().discountCodes().withId().head()`
  - added method `apiRoot.withProjectKey().inventory().withId().head()`
  - added method `apiRoot.withProjectKey().inventory().withKey().head()`
  - added method `apiRoot.withProjectKey().messages().withId().head()`
  - added method `apiRoot.withProjectKey().orders().withOrderNumber().head()`
  - added method `apiRoot.withProjectKey().orders().edits().head()`
  - added method `apiRoot.withProjectKey().orders().withId().head()`
  - added method `apiRoot.withProjectKey().orders().edits().withKey().head()`
  - added method `apiRoot.withProjectKey().orders().edits().withId().head()`
  - added method `apiRoot.withProjectKey().payments().withKey().head()`
  - added method `apiRoot.withProjectKey().payments().withId().head()`
  - added method `apiRoot.withProjectKey().productDiscounts().withKey().head()`
  - added method `apiRoot.withProjectKey().productDiscounts().withId().head()`
  - added method `apiRoot.withProjectKey().productProjections().withKey().head()`
  - added method `apiRoot.withProjectKey().productProjections().withId().head()`
  - added method `apiRoot.withProjectKey().productSelections().withKey().head()`
  - added method `apiRoot.withProjectKey().productSelections().withId().head()`
  - added method `apiRoot.withProjectKey().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().stagedQuotes().withKey().head()`
  - added method `apiRoot.withProjectKey().stagedQuotes().withId().head()`
  - added method `apiRoot.withProjectKey().reviews().withKey().head()`
  - added method `apiRoot.withProjectKey().reviews().withId().head()`
  - added method `apiRoot.withProjectKey().shippingMethods().withKey().head()`
  - added method `apiRoot.withProjectKey().shippingMethods().matchingCart().head()`
  - added method `apiRoot.withProjectKey().shippingMethods().matchingCartLocation().head()`
  - added method `apiRoot.withProjectKey().shippingMethods().matchingOrderedit().head()`
  - added method `apiRoot.withProjectKey().shippingMethods().matchingLocation().head()`
  - added method `apiRoot.withProjectKey().shippingMethods().withId().head()`
  - added method `apiRoot.withProjectKey().shoppingLists().withKey().head()`
  - added method `apiRoot.withProjectKey().shoppingLists().withId().head()`
  - added method `apiRoot.withProjectKey().states().withKey().head()`
  - added method `apiRoot.withProjectKey().states().withId().head()`
  - added method `apiRoot.withProjectKey().subscriptions().withKey().head()`
  - added method `apiRoot.withProjectKey().subscriptions().withId().head()`
  - added method `apiRoot.withProjectKey().taxCategories().withKey().head()`
  - added method `apiRoot.withProjectKey().taxCategories().withId().head()`
  - added method `apiRoot.withProjectKey().types().withKey().head()`
  - added method `apiRoot.withProjectKey().types().withId().head()`
  - added method `apiRoot.withProjectKey().zones().withKey().head()`
  - added method `apiRoot.withProjectKey().zones().withId().head()`
  - added method `apiRoot.withProjectKey().me().activeCart().head()`
  - added method `apiRoot.withProjectKey().me().businessUnits().head()`
  - added method `apiRoot.withProjectKey().me().carts().head()`
  - added method `apiRoot.withProjectKey().me().orders().head()`
  - added method `apiRoot.withProjectKey().me().payments().head()`
  - added method `apiRoot.withProjectKey().me().quoteRequests().head()`
  - added method `apiRoot.withProjectKey().me().quotes().head()`
  - added method `apiRoot.withProjectKey().me().shoppingLists().head()`
  - added method `apiRoot.withProjectKey().me().businessUnits().withId().head()`
  - added method `apiRoot.withProjectKey().me().businessUnits().withKey().head()`
  - added method `apiRoot.withProjectKey().me().carts().withKey().head()`
  - added method `apiRoot.withProjectKey().me().carts().withId().head()`
  - added method `apiRoot.withProjectKey().me().orders().withId().head()`
  - added method `apiRoot.withProjectKey().me().payments().withId().head()`
  - added method `apiRoot.withProjectKey().me().quoteRequests().withId().head()`
  - added method `apiRoot.withProjectKey().me().quoteRequests().withKey().head()`
  - added method `apiRoot.withProjectKey().me().quotes().withId().head()`
  - added method `apiRoot.withProjectKey().me().quotes().withKey().head()`
  - added method `apiRoot.withProjectKey().me().shoppingLists().withId().head()`
  - added method `apiRoot.withProjectKey().me().shoppingLists().withKey().head()`
  - added method `apiRoot.withProjectKey().extensions().withKey().head()`
  - added method `apiRoot.withProjectKey().extensions().withId().head()`
  - added method `apiRoot.withProjectKey().apiClients().withId().head()`
  - added method `apiRoot.withProjectKey().stores().withKey().head()`
  - added method `apiRoot.withProjectKey().stores().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().customers().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().shoppingLists().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().withCustomerId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().withOrderNumber().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().carts().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().orders().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().activeCart().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().shoppingLists().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().carts().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().orders().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().shoppingLists().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().shoppingLists().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().customers().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().customers().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().shippingMethods().matchingCart().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().shoppingLists().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().shoppingLists().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().productProjections().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().productProjections().withId().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().head()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().head()`
  - added method `apiRoot.withProjectKey().standalonePrices().withKey().head()`
  - added method `apiRoot.withProjectKey().standalonePrices().withId().head()`
  - added method `apiRoot.withProjectKey().attributeGroups().withKey().head()`
  - added method `apiRoot.withProjectKey().attributeGroups().withId().head()`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/{ID}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/key={key}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows/{ID}`
  </details>

### Patch Changes

- Updated dependencies [[`a6d0df2`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a6d0df2034b72504db2aa2d13a8d3726d97cc881)]:
  - @commercetools/sdk-client-v2@2.2.2

## 6.0.0

### Major Changes

- [`0e0c5bf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/0e0c5bfc7e9f9c0c30dfdd520aed768122c7933d) Thanks [@jenschude](https://github.com/jenschude)! - **Api changes**

  <details>
  <summary>Required Property(s)</summary>

  - changed property `textLineItemId` of type `MyShoppingListChangeTextLineItemNameAction` to be optional
  - changed property `textLineItemId` of type `MyShoppingListChangeTextLineItemQuantityAction` to be optional
  - changed property `lineItemId` of type `MyShoppingListRemoveLineItemAction` to be optional
  - changed property `textLineItemId` of type `MyShoppingListRemoveTextLineItemAction` to be optional
  - changed property `lineItemId` of type `MyShoppingListSetLineItemCustomFieldAction` to be optional
  - changed property `textLineItemId` of type `MyShoppingListSetTextLineItemCustomFieldAction` to be optional
  - changed property `textLineItemId` of type `MyShoppingListSetTextLineItemCustomTypeAction` to be optional
  - changed property `textLineItemId` of type `MyShoppingListSetTextLineItemDescriptionAction` to be optional
  - changed property `lineItemId` of type `ShoppingListChangeLineItemQuantityAction` to be optional
  - changed property `textLineItemId` of type `ShoppingListChangeTextLineItemNameAction` to be optional
  - changed property `textLineItemId` of type `ShoppingListChangeTextLineItemQuantityAction` to be optional
  - changed property `lineItemId` of type `ShoppingListRemoveLineItemAction` to be optional
  - changed property `textLineItemId` of type `ShoppingListRemoveTextLineItemAction` to be optional
  - changed property `lineItemId` of type `ShoppingListSetLineItemCustomFieldAction` to be optional
  - changed property `lineItemId` of type `ShoppingListSetLineItemCustomTypeAction` to be optional
  - changed property `textLineItemId` of type `ShoppingListSetTextLineItemCustomFieldAction` to be optional
  - changed property `textLineItemId` of type `ShoppingListSetTextLineItemCustomTypeAction` to be optional
  - changed property `textLineItemId` of type `ShoppingListSetTextLineItemDescriptionAction` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `perMethodExternalTaxRate` to type `LineItemDraft`
  - added property `key` to type `MyShoppingListAddLineItemAction`
  - added property `key` to type `MyShoppingListAddTextLineItemAction`
  - added property `textLineItemKey` to type `MyShoppingListChangeTextLineItemNameAction`
  - added property `textLineItemKey` to type `MyShoppingListChangeTextLineItemQuantityAction`
  - added property `lineItemKey` to type `MyShoppingListRemoveLineItemAction`
  - added property `textLineItemKey` to type `MyShoppingListRemoveTextLineItemAction`
  - added property `lineItemKey` to type `MyShoppingListSetLineItemCustomFieldAction`
  - added property `textLineItemKey` to type `MyShoppingListSetTextLineItemCustomFieldAction`
  - added property `textLineItemKey` to type `MyShoppingListSetTextLineItemCustomTypeAction`
  - added property `textLineItemKey` to type `MyShoppingListSetTextLineItemDescriptionAction`
  - added property `cart` to type `QuoteRequest`
  - added property `key` to type `ShoppingListLineItem`
  - added property `key` to type `ShoppingListLineItemDraft`
  - added property `key` to type `TextLineItem`
  - added property `key` to type `TextLineItemDraft`
  - added property `key` to type `ShoppingListAddLineItemAction`
  - added property `key` to type `ShoppingListAddTextLineItemAction`
  - added property `lineItemKey` to type `ShoppingListChangeLineItemQuantityAction`
  - added property `textLineItemKey` to type `ShoppingListChangeTextLineItemNameAction`
  - added property `textLineItemKey` to type `ShoppingListChangeTextLineItemQuantityAction`
  - added property `lineItemKey` to type `ShoppingListRemoveLineItemAction`
  - added property `textLineItemKey` to type `ShoppingListRemoveTextLineItemAction`
  - added property `lineItemKey` to type `ShoppingListSetLineItemCustomFieldAction`
  - added property `lineItemKey` to type `ShoppingListSetLineItemCustomTypeAction`
  - added property `textLineItemKey` to type `ShoppingListSetTextLineItemCustomFieldAction`
  - added property `textLineItemKey` to type `ShoppingListSetTextLineItemCustomTypeAction`
  - added property `textLineItemKey` to type `ShoppingListSetTextLineItemDescriptionAction`
  - added property `staged` to type `StandalonePriceDraft`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `MethodExternalTaxRateDraft`
  - added type `QuoteRenegotiationRequestedMessage`
  - added type `StandalonePriceStagedChangesRemovedMessage`
  - added type `QuoteRenegotiationRequestedMessagePayload`
  - added type `StandalonePriceStagedChangesRemovedMessagePayload`
  - added type `StagedPriceDraft`
  - added type `StandalonePriceRemoveStagedChangesAction`
  </details>

  <details>
  <summary>Removed Method(s)</summary>

  - :warning: removed method `apiRoot.withProjectKey().me().payments().withKey().get()`
  - :warning: removed method `apiRoot.withProjectKey().me().payments().withKey().post()`
  - :warning: removed method `apiRoot.withProjectKey().me().payments().withKey().delete()`
  </details>

  <details>
  <summary>Removed Resource(s)</summary>

  - :warning: removed resource `/{projectKey}/me/payments/key={key}`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>

  - :warning: removed enum `Failed` from type `QuoteState`
  </details>

## 5.0.0

### Major Changes

- [#514](https://github.com/commercetools/commercetools-sdk-typescript/pull/514) [`800c52f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/800c52f46dfef01ba74322c006045587efc570db) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  **Api changes**

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `money` of type `CartDiscountValueFixed` from type `CentPrecisionMoney[]` to `TypedMoney[]`
  - :warning: changed property `money` of type `CartDiscountValueFixedDraft` from type `Money[]` to `TypedMoneyDraft[]`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `taxedPricePortions` to type `CustomLineItem`
  - added property `customLineItemKey` to type `CartApplyDeltaToCustomLineItemShippingDetailsTargetsAction`
  - added property `customLineItemKey` to type `CartChangeCustomLineItemMoneyAction`
  - added property `customLineItemKey` to type `CartChangeCustomLineItemPriceModeAction`
  - added property `customLineItemKey` to type `CartChangeCustomLineItemQuantityAction`
  - added property `customLineItemKey` to type `CartRemoveCustomLineItemAction`
  - added property `customLineItemKey` to type `CartSetCustomLineItemCustomFieldAction`
  - added property `customLineItemKey` to type `CartSetCustomLineItemCustomTypeAction`
  - added property `customLineItemKey` to type `CartSetCustomLineItemShippingDetailsAction`
  - added property `customLineItemKey` to type `CartSetCustomLineItemTaxAmountAction`
  - added property `shippingKey` to type `CartSetCustomLineItemTaxAmountAction`
  - added property `customLineItemKey` to type `CartSetCustomLineItemTaxRateAction`
  - added property `shippingKey` to type `CartSetCustomLineItemTaxRateAction`
  - added property `associate` to type `ClientLogging`
  - added property `associate` to type `CreatedBy`
  - added property `associate` to type `LastModifiedBy`
  - added property `customLineItemKey` to type `CustomLineItemStateTransitionMessage`
  - added property `lineItemKey` to type `LineItemStateTransitionMessage`
  - added property `customLineItemKey` to type `OrderCustomLineItemDiscountSetMessage`
  - added property `customLineItemKey` to type `OrderCustomLineItemQuantityChangedMessage`
  - added property `customLineItemKey` to type `OrderCustomLineItemRemovedMessage`
  - added property `lineItemKey` to type `OrderLineItemDiscountSetMessage`
  - added property `lineItemKey` to type `OrderLineItemDistributionChannelSetMessage`
  - added property `lineItemKey` to type `OrderLineItemRemovedMessage`
  - added property `customLineItemKey` to type `CustomLineItemStateTransitionMessagePayload`
  - added property `lineItemKey` to type `LineItemStateTransitionMessagePayload`
  - added property `customLineItemKey` to type `OrderCustomLineItemDiscountSetMessagePayload`
  - added property `customLineItemKey` to type `OrderCustomLineItemQuantityChangedMessagePayload`
  - added property `customLineItemKey` to type `OrderCustomLineItemRemovedMessagePayload`
  - added property `lineItemKey` to type `OrderLineItemDiscountSetMessagePayload`
  - added property `lineItemKey` to type `OrderLineItemDistributionChannelSetMessagePayload`
  - added property `lineItemKey` to type `OrderLineItemRemovedMessagePayload`
  - added property `directDiscounts` to type `StagedOrder`
  - added property `shippingDetails` to type `StagedOrderAddCustomLineItemAction`
  - added property `inventoryMode` to type `StagedOrderAddLineItemAction`
  - added property `customLineItemKey` to type `StagedOrderChangeCustomLineItemMoneyAction`
  - added property `customLineItemKey` to type `StagedOrderChangeCustomLineItemQuantityAction`
  - added property `customLineItemKey` to type `StagedOrderImportCustomLineItemStateAction`
  - added property `lineItemKey` to type `StagedOrderImportLineItemStateAction`
  - added property `customLineItemKey` to type `StagedOrderRemoveCustomLineItemAction`
  - added property `customLineItemKey` to type `StagedOrderSetCustomLineItemCustomFieldAction`
  - added property `customLineItemKey` to type `StagedOrderSetCustomLineItemCustomTypeAction`
  - added property `customLineItemKey` to type `StagedOrderSetCustomLineItemShippingDetailsAction`
  - added property `customLineItemKey` to type `StagedOrderSetCustomLineItemTaxAmountAction`
  - added property `shippingKey` to type `StagedOrderSetCustomLineItemTaxAmountAction`
  - added property `customLineItemKey` to type `StagedOrderSetCustomLineItemTaxRateAction`
  - added property `shippingKey` to type `StagedOrderSetCustomLineItemTaxRateAction`
  - added property `returnItemKey` to type `StagedOrderSetReturnItemCustomFieldAction`
  - added property `returnItemKey` to type `StagedOrderSetReturnItemCustomTypeAction`
  - added property `returnItemKey` to type `StagedOrderSetReturnPaymentStateAction`
  - added property `returnItemKey` to type `StagedOrderSetReturnShipmentStateAction`
  - added property `customLineItemKey` to type `StagedOrderTransitionCustomLineItemStateAction`
  - added property `lineItemKey` to type `StagedOrderTransitionLineItemStateAction`
  - added property `key` to type `CustomLineItemImportDraft`
  - added property `key` to type `CustomLineItemReturnItem`
  - added property `key` to type `LineItemImportDraft`
  - added property `key` to type `LineItemReturnItem`
  - added property `directDiscounts` to type `Order`
  - added property `purchaseOrderNumber` to type `OrderImportDraft`
  - added property `taxCalculationMode` to type `OrderImportDraft`
  - added property `key` to type `ReturnItem`
  - added property `key` to type `ReturnItemDraft`
  - added property `customLineItemKey` to type `OrderImportCustomLineItemStateAction`
  - added property `lineItemKey` to type `OrderImportLineItemStateAction`
  - added property `customLineItemKey` to type `OrderSetCustomLineItemCustomFieldAction`
  - added property `customLineItemKey` to type `OrderSetCustomLineItemCustomTypeAction`
  - added property `customLineItemKey` to type `OrderSetCustomLineItemShippingDetailsAction`
  - added property `returnItemKey` to type `OrderSetReturnItemCustomFieldAction`
  - added property `returnItemKey` to type `OrderSetReturnItemCustomTypeAction`
  - added property `returnItemKey` to type `OrderSetReturnPaymentStateAction`
  - added property `returnItemKey` to type `OrderSetReturnShipmentStateAction`
  - added property `customLineItemKey` to type `OrderTransitionCustomLineItemStateAction`
  - added property `lineItemKey` to type `OrderTransitionLineItemStateAction`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - :warning: changed property `associateRoleAssignments` of type `AssociateDraft` to be required
  - :warning: changed property `paymentState` of type `StagedOrderChangePaymentStateAction` to be required
  - :warning: changed property `shipmentState` of type `StagedOrderChangeShipmentStateAction` to be required
  - :warning: changed property `paymentState` of type `OrderChangePaymentStateAction` to be required
  - :warning: changed property `shipmentState` of type `OrderChangeShipmentStateAction` to be required
  - changed property `roles` of type `Associate` to be optional
  - changed property `customLineItemId` of type `CartApplyDeltaToCustomLineItemShippingDetailsTargetsAction` to be optional
  - changed property `customLineItemId` of type `CartChangeCustomLineItemMoneyAction` to be optional
  - changed property `customLineItemId` of type `CartChangeCustomLineItemPriceModeAction` to be optional
  - changed property `customLineItemId` of type `CartChangeCustomLineItemQuantityAction` to be optional
  - changed property `customLineItemId` of type `CartRemoveCustomLineItemAction` to be optional
  - changed property `customLineItemId` of type `CartSetCustomLineItemCustomFieldAction` to be optional
  - changed property `customLineItemId` of type `CartSetCustomLineItemCustomTypeAction` to be optional
  - changed property `customLineItemId` of type `CartSetCustomLineItemShippingDetailsAction` to be optional
  - changed property `customLineItemId` of type `CartSetCustomLineItemTaxAmountAction` to be optional
  - changed property `customLineItemId` of type `CartSetCustomLineItemTaxRateAction` to be optional
  - changed property `centAmount` of type `CentPrecisionMoneyDraft` to be optional
  - changed property `centAmount` of type `TypedMoneyDraft` to be optional
  - changed property `comment` of type `MyQuoteRequestDraft` to be optional
  - changed property `customLineItemId` of type `StagedOrderChangeCustomLineItemMoneyAction` to be optional
  - changed property `customLineItemId` of type `StagedOrderChangeCustomLineItemQuantityAction` to be optional
  - changed property `customLineItemId` of type `StagedOrderImportCustomLineItemStateAction` to be optional
  - changed property `lineItemId` of type `StagedOrderImportLineItemStateAction` to be optional
  - changed property `customLineItemId` of type `StagedOrderRemoveCustomLineItemAction` to be optional
  - changed property `customLineItemId` of type `StagedOrderSetCustomLineItemCustomFieldAction` to be optional
  - changed property `customLineItemId` of type `StagedOrderSetCustomLineItemCustomTypeAction` to be optional
  - changed property `customLineItemId` of type `StagedOrderSetCustomLineItemShippingDetailsAction` to be optional
  - changed property `customLineItemId` of type `StagedOrderSetCustomLineItemTaxAmountAction` to be optional
  - changed property `customLineItemId` of type `StagedOrderSetCustomLineItemTaxRateAction` to be optional
  - changed property `returnItemId` of type `StagedOrderSetReturnItemCustomFieldAction` to be optional
  - changed property `returnItemId` of type `StagedOrderSetReturnItemCustomTypeAction` to be optional
  - changed property `returnItemId` of type `StagedOrderSetReturnPaymentStateAction` to be optional
  - changed property `returnItemId` of type `StagedOrderSetReturnShipmentStateAction` to be optional
  - changed property `customLineItemId` of type `StagedOrderTransitionCustomLineItemStateAction` to be optional
  - changed property `lineItemId` of type `StagedOrderTransitionLineItemStateAction` to be optional
  - changed property `priceMode` of type `CustomLineItemImportDraft` to be optional
  - changed property `customLineItemId` of type `OrderImportCustomLineItemStateAction` to be optional
  - changed property `lineItemId` of type `OrderImportLineItemStateAction` to be optional
  - changed property `customLineItemId` of type `OrderSetCustomLineItemCustomFieldAction` to be optional
  - changed property `customLineItemId` of type `OrderSetCustomLineItemCustomTypeAction` to be optional
  - changed property `customLineItemId` of type `OrderSetCustomLineItemShippingDetailsAction` to be optional
  - changed property `returnItemId` of type `OrderSetReturnItemCustomFieldAction` to be optional
  - changed property `returnItemId` of type `OrderSetReturnItemCustomTypeAction` to be optional
  - changed property `returnItemId` of type `OrderSetReturnPaymentStateAction` to be optional
  - changed property `returnItemId` of type `OrderSetReturnShipmentStateAction` to be optional
  - changed property `customLineItemId` of type `OrderTransitionCustomLineItemStateAction` to be optional
  - changed property `lineItemId` of type `OrderTransitionLineItemStateAction` to be optional
  - changed property `comment` of type `QuoteRequestDraft` to be optional
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `Associate::roles` is removed
  - property `AssociateDraft::roles` is removed
  - property `IndividualExclusionProductSelectionType::type` is removed
  - property `IndividualProductSelectionType::type` is removed
  - property `ProductSelection::type` is removed
  - property `ProductSelectionDraft::type` is removed
  - property `ProductSelectionType::type` is removed
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `where` to method `get /{projectKey}/in-store/key={storeKey}/product-selection-assignments`
  - added query parameter `/^var[.][a-zA-Z0-9]+$/` to method `get /{projectKey}/in-store/key={storeKey}/product-selection-assignments`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `expand` from method `get /{projectKey}/subscriptions`
  - :warning: removed query parameter `expand` from method `post /{projectKey}/subscriptions`
  - :warning: removed query parameter `expand` from method `get /{projectKey}/extensions`
  - :warning: removed query parameter `expand` from method `post /{projectKey}/extensions`
  - :warning: removed query parameter `expand` from method `get /{projectKey}/subscriptions/key={key}`
  - :warning: removed query parameter `expand` from method `post /{projectKey}/subscriptions/key={key}`
  - :warning: removed query parameter `expand` from method `delete /{projectKey}/subscriptions/key={key}`
  - :warning: removed query parameter `expand` from method `get /{projectKey}/subscriptions/{ID}`
  - :warning: removed query parameter `expand` from method `post /{projectKey}/subscriptions/{ID}`
  - :warning: removed query parameter `expand` from method `delete /{projectKey}/subscriptions/{ID}`
  - :warning: removed query parameter `expand` from method `get /{projectKey}/extensions/key={key}`
  - :warning: removed query parameter `expand` from method `post /{projectKey}/extensions/key={key}`
  - :warning: removed query parameter `expand` from method `delete /{projectKey}/extensions/key={key}`
  - :warning: removed query parameter `expand` from method `get /{projectKey}/extensions/{ID}`
  - :warning: removed query parameter `expand` from method `post /{projectKey}/extensions/{ID}`
  - :warning: removed query parameter `expand` from method `delete /{projectKey}/extensions/{ID}`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `ContentTooLargeError`
  - added type `GraphQLContentTooLargeError`
  - added type `BusinessUnitParentChangedMessage`
  - added type `OrderCustomFieldAddedMessage`
  - added type `OrderCustomFieldChangedMessage`
  - added type `OrderCustomFieldRemovedMessage`
  - added type `OrderCustomTypeRemovedMessage`
  - added type `OrderCustomTypeSetMessage`
  - added type `BusinessUnitParentChangedMessagePayload`
  - added type `OrderCustomFieldAddedMessagePayload`
  - added type `OrderCustomFieldChangedMessagePayload`
  - added type `OrderCustomFieldRemovedMessagePayload`
  - added type `OrderCustomTypeRemovedMessagePayload`
  - added type `OrderCustomTypeSetMessagePayload`
  - added type `StagedOrderSetDirectDiscountsAction`
  - added type `StagedOrderSetStoreAction`
  </details>

  <details>
  <summary>Deprecated Type(s)</summary>

  - type `AssociateRoleDeprecated` is removed
  - type `IndividualExclusionProductSelectionType` is removed
  - type `IndividualProductSelectionType` is removed
  - type `ProductSelectionType` is removed
  - type `ProductSelectionTypeEnum` is removed
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `BusinessUnitParentUnitChangedMessage`
  - :warning: removed type `BusinessUnitParentUnitChangedMessagePayload`
  - :warning: removed type `OrderResourceIdentifier`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `associate-role` to type `ChangeSubscriptionResourceTypeId`
  </details>

## 4.11.0

### Minor Changes

- [#496](https://github.com/commercetools/commercetools-sdk-typescript/pull/496) [`60fe7e5`](https://github.com/commercetools/commercetools-sdk-typescript/commit/60fe7e50a606da624dc794ffd714c0a719ea860a) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  ### Api changes

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added resource `/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `stores` to type `CartDiscount`
  - added property `stores` to type `CartDiscountDraft`
  - added property `key` to type `CustomLineItem`
  - added property `key` to type `CustomLineItemDraft`
  - added property `key` to type `CartAddCustomLineItemAction`
  - added property `key` to type `StagedOrderAddCustomLineItemAction`
  - added property `shippingKey` to type `StagedOrderAddDeliveryAction`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `CartSetDeliveryAddressCustomFieldAction`
  - :warning: removed type `CartSetDeliveryAddressCustomTypeAction`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `CartDiscountAddStoreAction`
  - added type `CartDiscountRemoveStoreAction`
  - added type `CartDiscountSetStoresAction`
  - added type `MaxCartDiscountsReachedError`
  - added type `MaxStoreReferencesReachedError`
  - added type `StoreCartDiscountsLimitReachedError`
  - added type `GraphQLMaxCartDiscountsReachedError`
  - added type `GraphQLMaxStoreReferencesReachedError`
  - added type `GraphQLStoreCartDiscountsLimitReachedError`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().delete()`
  </details>

## 4.10.1

### Patch Changes

- [#487](https://github.com/commercetools/commercetools-sdk-typescript/pull/487) [`d22b639`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d22b639e812f5b784842bd7d5ae94d7aa19d0ce6) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  # Api (Platform) changes

  <details>
  <summary>Added Property(s)</summary>

  - added property `perMethodTaxRate` to type `CustomLineItem`
  - added property `key` to type `LineItem`
  - added property `key` to type `LineItemDraft`
  - added property `key` to type `CartAddLineItemAction`
  - added property `lineItemKey` to type `CartApplyDeltaToLineItemShippingDetailsTargetsAction`
  - added property `lineItemKey` to type `CartChangeLineItemQuantityAction`
  - added property `lineItemKey` to type `CartRemoveLineItemAction`
  - added property `lineItemKey` to type `CartSetLineItemCustomFieldAction`
  - added property `lineItemKey` to type `CartSetLineItemCustomTypeAction`
  - added property `lineItemKey` to type `CartSetLineItemDistributionChannelAction`
  - added property `lineItemKey` to type `CartSetLineItemInventoryModeAction`
  - added property `lineItemKey` to type `CartSetLineItemPriceAction`
  - added property `lineItemKey` to type `CartSetLineItemShippingDetailsAction`
  - added property `lineItemKey` to type `CartSetLineItemSupplyChannelAction`
  - added property `lineItemKey` to type `CartSetLineItemTaxAmountAction`
  - added property `lineItemKey` to type `CartSetLineItemTaxRateAction`
  - added property `lineItemKey` to type `CartSetLineItemTotalPriceAction`
  - added property `key` to type `MyLineItemDraft`
  - added property `key` to type `MyCartAddLineItemAction`
  - added property `lineItemKey` to type `MyCartApplyDeltaToLineItemShippingDetailsTargetsAction`
  - added property `lineItemKey` to type `MyCartChangeLineItemQuantityAction`
  - added property `lineItemKey` to type `MyCartRemoveLineItemAction`
  - added property `lineItemKey` to type `MyCartSetLineItemCustomFieldAction`
  - added property `lineItemKey` to type `MyCartSetLineItemCustomTypeAction`
  - added property `lineItemKey` to type `MyCartSetLineItemDistributionChannelAction`
  - added property `lineItemKey` to type `MyCartSetLineItemShippingDetailsAction`
  - added property `lineItemKey` to type `MyCartSetLineItemSupplyChannelAction`
  - added property `lineItemKey` to type `MyShoppingListChangeLineItemQuantityAction`
  - added property `sku` to type `StandalonePriceDeletedMessage`
  - added property `sku` to type `StandalonePriceDeletedMessagePayload`
  - added property `key` to type `StagedOrderAddLineItemAction`
  - added property `parcelKey` to type `StagedOrderAddParcelToDeliveryAction`
  - added property `lineItemKey` to type `StagedOrderChangeLineItemQuantityAction`
  - added property `lineItemKey` to type `StagedOrderRemoveLineItemAction`
  - added property `parcelKey` to type `StagedOrderRemoveParcelFromDeliveryAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemCustomFieldAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemCustomTypeAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemDistributionChannelAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemPriceAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemShippingDetailsAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemTaxAmountAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemTaxRateAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemTotalPriceAction`
  - added property `parcelKey` to type `StagedOrderSetParcelCustomFieldAction`
  - added property `parcelKey` to type `StagedOrderSetParcelCustomTypeAction`
  - added property `parcelKey` to type `StagedOrderSetParcelItemsAction`
  - added property `parcelKey` to type `StagedOrderSetParcelMeasurementsAction`
  - added property `parcelKey` to type `StagedOrderSetParcelTrackingDataAction`
  - added property `key` to type `Parcel`
  - added property `key` to type `ParcelDraft`
  - added property `parcelKey` to type `OrderAddParcelToDeliveryAction`
  - added property `parcelKey` to type `OrderRemoveParcelFromDeliveryAction`
  - added property `lineItemKey` to type `OrderSetLineItemCustomFieldAction`
  - added property `lineItemKey` to type `OrderSetLineItemCustomTypeAction`
  - added property `lineItemKey` to type `OrderSetLineItemShippingDetailsAction`
  - added property `parcelKey` to type `OrderSetParcelCustomFieldAction`
  - added property `parcelKey` to type `OrderSetParcelCustomTypeAction`
  - added property `parcelKey` to type `OrderSetParcelItemsAction`
  - added property `parcelKey` to type `OrderSetParcelMeasurementsAction`
  - added property `parcelKey` to type `OrderSetParcelTrackingDataAction`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `lineItemId` of type `CartApplyDeltaToLineItemShippingDetailsTargetsAction` to be optional
  - changed property `lineItemId` of type `CartChangeLineItemQuantityAction` to be optional
  - changed property `lineItemId` of type `CartRemoveLineItemAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemCustomFieldAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemCustomTypeAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemDistributionChannelAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemInventoryModeAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemPriceAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemShippingDetailsAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemSupplyChannelAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemTaxAmountAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemTaxRateAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemTotalPriceAction` to be optional
  - changed property `lineItemId` of type `MyCartApplyDeltaToLineItemShippingDetailsTargetsAction` to be optional
  - changed property `lineItemId` of type `MyCartChangeLineItemQuantityAction` to be optional
  - changed property `lineItemId` of type `MyCartRemoveLineItemAction` to be optional
  - changed property `lineItemId` of type `MyCartSetLineItemCustomFieldAction` to be optional
  - changed property `lineItemId` of type `MyCartSetLineItemCustomTypeAction` to be optional
  - changed property `lineItemId` of type `MyCartSetLineItemDistributionChannelAction` to be optional
  - changed property `lineItemId` of type `MyCartSetLineItemShippingDetailsAction` to be optional
  - changed property `lineItemId` of type `MyCartSetLineItemSupplyChannelAction` to be optional
  - changed property `lineItemId` of type `MyShoppingListChangeLineItemQuantityAction` to be optional
  - changed property `lineItemId` of type `StagedOrderChangeLineItemQuantityAction` to be optional
  - changed property `lineItemId` of type `StagedOrderRemoveLineItemAction` to be optional
  - changed property `parcelId` of type `StagedOrderRemoveParcelFromDeliveryAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemCustomFieldAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemCustomTypeAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemDistributionChannelAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemPriceAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemShippingDetailsAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemTaxAmountAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemTaxRateAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemTotalPriceAction` to be optional
  - changed property `parcelId` of type `StagedOrderSetParcelCustomFieldAction` to be optional
  - changed property `parcelId` of type `StagedOrderSetParcelCustomTypeAction` to be optional
  - changed property `parcelId` of type `StagedOrderSetParcelItemsAction` to be optional
  - changed property `parcelId` of type `StagedOrderSetParcelMeasurementsAction` to be optional
  - changed property `parcelId` of type `StagedOrderSetParcelTrackingDataAction` to be optional
  - changed property `parcelId` of type `OrderRemoveParcelFromDeliveryAction` to be optional
  - changed property `lineItemId` of type `OrderSetLineItemCustomFieldAction` to be optional
  - changed property `lineItemId` of type `OrderSetLineItemCustomTypeAction` to be optional
  - changed property `lineItemId` of type `OrderSetLineItemShippingDetailsAction` to be optional
  - changed property `parcelId` of type `OrderSetParcelCustomFieldAction` to be optional
  - changed property `parcelId` of type `OrderSetParcelCustomTypeAction` to be optional
  - changed property `parcelId` of type `OrderSetParcelItemsAction` to be optional
  - changed property `parcelId` of type `OrderSetParcelMeasurementsAction` to be optional
  - changed property `parcelId` of type `OrderSetParcelTrackingDataAction` to be optional
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `MyCartChangeLineItemQuantityAction::externalPrice` is removed
  - property `MyCartChangeLineItemQuantityAction::externalTotalPrice` is removed
  </details>

  <details>
  <summary>Deprecated Type(s)</summary>

  - type `ProductVariantSelectionExclusion` is removed
  - type `ProductVariantSelectionInclusion` is removed
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `MyCartSetDirectDiscountsAction`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `StandalonePriceTierAddedMessage`
  - added type `StandalonePriceTierRemovedMessage`
  - added type `StandalonePriceTiersSetMessage`
  - added type `StandalonePriceValidFromAndUntilSetMessage`
  - added type `StandalonePriceValidFromSetMessage`
  - added type `StandalonePriceValidUntilSetMessage`
  - added type `StandalonePriceTierAddedMessagePayload`
  - added type `StandalonePriceTierRemovedMessagePayload`
  - added type `StandalonePriceTiersSetMessagePayload`
  - added type `StandalonePriceValidFromAndUntilSetMessagePayload`
  - added type `StandalonePriceValidFromSetMessagePayload`
  - added type `StandalonePriceValidUntilSetMessagePayload`
  - added type `StandalonePriceAddPriceTierAction`
  - added type `StandalonePriceRemovePriceTierAction`
  - added type `StandalonePriceSetPriceTiersAction`
  - added type `StandalonePriceSetValidFromAction`
  - added type `StandalonePriceSetValidFromAndUntilAction`
  - added type `StandalonePriceSetValidUntilAction`
  - added type `ConfluentCloudDestination`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `associate-role` to type `CustomFieldReferenceValue`
  - added enum `business-unit` to type `CustomFieldReferenceValue`
  </details>

  # Import changes

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `associate-role` to type `CustomFieldReferenceValue`
  - added enum `business-unit` to type `CustomFieldReferenceValue`
  </details>

  # History change

  <details>
  <summary>Added Property(s)</summary>

  - added property `variantSelection` to type `AddProductChange`
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `resource` of type `Record` from type `Reference` to `ResourceIdentifier`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `resourceKey` to method `get /{projectKey}`
  - added query parameter `resourceKey` to method `get /{projectKey}/{resourceType}`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `resourceId` from method `get /{projectKey}/{resourceType}`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `AddAssociateChange`
  - added type `AddProductSelectionChange`
  - added type `Associate`
  - added type `AssociateRoleAssignment`
  - added type `AssociateRoleInheritanceMode`
  - added type `BusinessUnitAssociateMode`
  - added type `BusinessUnitLabel`
  - added type `BusinessUnitStatus`
  - added type `BusinessUnitStoreMode`
  - added type `ChangeAssociateChange`
  - added type `ChangeAssociateModeChange`
  - added type `ChangeParentUnitChange`
  - added type `ChangeProductSelectionActiveChange`
  - added type `ChangeStatusChange`
  - added type `ProductVariantSelection`
  - added type `ProductVariantSelectionTypeEnum`
  - added type `RemoveAssociateChange`
  - added type `RemoveProductSelectionChange`
  - added type `RequestQuoteRenegotiationChange`
  - added type `ResourceIdentifier`
  - added type `SetAddressCustomFieldChange`
  - added type `SetAddressCustomTypeChange`
  - added type `SetContactEmailChange`
  - added type `SetStoreModeChange`
  - added type `SetVariantSelectionChange`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `business-unit` to type `ChangeHistoryResourceType`
  - added enum `addAssociate` to type `UpdateType`
  - added enum `addCustomLineItem` to type `UpdateType`
  - added enum `addDiscountCode` to type `UpdateType`
  - added enum `addProduct` to type `UpdateType`
  - added enum `addProductSelection` to type `UpdateType`
  - added enum `addProperty` to type `UpdateType`
  - added enum `changeAmountAuthorized` to type `UpdateType`
  - added enum `changeAssociate` to type `UpdateType`
  - added enum `changeAssociateMode` to type `UpdateType`
  - added enum `changeCustomLineItemQuantity` to type `UpdateType`
  - added enum `changeLineItemName` to type `UpdateType`
  - added enum `changeParentUnit` to type `UpdateType`
  - added enum `changeProductSelectionActive` to type `UpdateType`
  - added enum `changeQuoteRequestState` to type `UpdateType`
  - added enum `changeQuoteState` to type `UpdateType`
  - added enum `changeStagedQuoteState` to type `UpdateType`
  - added enum `changeStatus` to type `UpdateType`
  - added enum `changeTaxCalculationMode` to type `UpdateType`
  - added enum `changeTaxMode` to type `UpdateType`
  - added enum `changeTaxRoundingMode` to type `UpdateType`
  - added enum `moveImageToPosition` to type `UpdateType`
  - added enum `removeAssociate` to type `UpdateType`
  - added enum `removeCustomLineItem` to type `UpdateType`
  - added enum `removeDiscountCode` to type `UpdateType`
  - added enum `removeProduct` to type `UpdateType`
  - added enum `removeProductSelection` to type `UpdateType`
  - added enum `removeProperty` to type `UpdateType`
  - added enum `requestQuoteRenegotiation` to type `UpdateType`
  - added enum `setAddressCustomField` to type `UpdateType`
  - added enum `setAddressCustomType` to type `UpdateType`
  - added enum `setApplicationVersion` to type `UpdateType`
  - added enum `setAuthenticationMode` to type `UpdateType`
  - added enum `setContactEmail` to type `UpdateType`
  - added enum `setCountries` to type `UpdateType`
  - added enum `setCountry` to type `UpdateType`
  - added enum `setCustomLineItemMoney` to type `UpdateType`
  - added enum `setCustomLineItemTaxAmount` to type `UpdateType`
  - added enum `setCustomLineItemTaxCategory` to type `UpdateType`
  - added enum `setCustomLineItemTaxRate` to type `UpdateType`
  - added enum `setCustomLineItemTaxedPrice` to type `UpdateType`
  - added enum `setCustomLineItemTotalPrice` to type `UpdateType`
  - added enum `setCustomShippingMethod` to type `UpdateType`
  - added enum `setIsValid` to type `UpdateType`
  - added enum `setLineItemDeactivatedAt` to type `UpdateType`
  - added enum `setLineItemDiscountedPrice` to type `UpdateType`
  - added enum `setLineItemDiscountedPricePerQuantity` to type `UpdateType`
  - added enum `setLineItemDistributionChannel` to type `UpdateType`
  - added enum `setLineItemPrice` to type `UpdateType`
  - added enum `setLineItemProductKey` to type `UpdateType`
  - added enum `setLineItemProductSlug` to type `UpdateType`
  - added enum `setLineItemTaxAmount` to type `UpdateType`
  - added enum `setLineItemTaxRate` to type `UpdateType`
  - added enum `setLineItemTaxedPrice` to type `UpdateType`
  - added enum `setLineItemTotalPrice` to type `UpdateType`
  - added enum `setOrderTaxedPrice` to type `UpdateType`
  - added enum `setOrderTotalPrice` to type `UpdateType`
  - added enum `setOrderTotalTax` to type `UpdateType`
  - added enum `setPrices` to type `UpdateType`
  - added enum `setProductCount` to type `UpdateType`
  - added enum `setProductSelections` to type `UpdateType`
  - added enum `setProperty` to type `UpdateType`
  - added enum `setPurchaseOrderNumber` to type `UpdateType`
  - added enum `setReservations` to type `UpdateType`
  - added enum `setSellerComment` to type `UpdateType`
  - added enum `setShippingInfoPrice` to type `UpdateType`
  - added enum `setShippingInfoTaxedPrice` to type `UpdateType`
  - added enum `setShippingMethod` to type `UpdateType`
  - added enum `setShippingMethodTaxAmount` to type `UpdateType`
  - added enum `setShippingMethodTaxRate` to type `UpdateType`
  - added enum `setShippingRate` to type `UpdateType`
  - added enum `setShippingRateInput` to type `UpdateType`
  - added enum `setStoreMode` to type `UpdateType`
  - added enum `setSupplyChannels` to type `UpdateType`
  - added enum `setValidTo` to type `UpdateType`
  - added enum `setValue` to type `UpdateType`
  - added enum `setVariantSelection` to type `UpdateType`
  - added enum `DeclinedForRenegotiation` to type `QuoteState`
  - added enum `associate-role` to type `ReferenceTypeId`
  - added enum `business-unit` to type `ReferenceTypeId`
  </details>

## 4.10.0

### Minor Changes

- [#483](https://github.com/commercetools/commercetools-sdk-typescript/pull/483) [`c87f6bf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c87f6bf6efd3b7bd66027829378108b1f260a325) Thanks [@github-actions](https://github.com/apps/github-actions)! - **Api changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `shippingKey` to type `CartSetShippingMethodTaxAmountAction`
  - added property `shippingKey` to type `CartSetShippingMethodTaxRateAction`
  - added property `deliveryKey` to type `StagedOrderAddDeliveryAction`
  - added property `deliveryKey` to type `StagedOrderAddParcelToDeliveryAction`
  - added property `deliveryKey` to type `StagedOrderRemoveDeliveryAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryAddressAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryAddressCustomFieldAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryAddressCustomTypeAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryCustomFieldAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryCustomTypeAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryItemsAction`
  - added property `shippingKey` to type `StagedOrderSetShippingMethodTaxAmountAction`
  - added property `shippingKey` to type `StagedOrderSetShippingMethodTaxRateAction`
  - added property `key` to type `Delivery`
  - added property `key` to type `DeliveryDraft`
  - added property `deliveryKey` to type `OrderAddDeliveryAction`
  - added property `deliveryKey` to type `OrderAddParcelToDeliveryAction`
  - added property `deliveryKey` to type `OrderRemoveDeliveryAction`
  - added property `deliveryKey` to type `OrderSetDeliveryAddressAction`
  - added property `deliveryKey` to type `OrderSetDeliveryAddressCustomFieldAction`
  - added property `deliveryKey` to type `OrderSetDeliveryAddressCustomTypeAction`
  - added property `deliveryKey` to type `OrderSetDeliveryCustomFieldAction`
  - added property `deliveryKey` to type `OrderSetDeliveryCustomTypeAction`
  - added property `deliveryKey` to type `OrderSetDeliveryItemsAction`
  - added property `sku` to type `ProductRemovePriceAction`
  - added property `variantId` to type `ProductRemovePriceAction`
  - added property `price` to type `ProductRemovePriceAction`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `deliveryId` of type `StagedOrderAddParcelToDeliveryAction` to be optional
  - changed property `deliveryId` of type `StagedOrderRemoveDeliveryAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryAddressAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryAddressCustomFieldAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryAddressCustomTypeAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryCustomFieldAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryCustomTypeAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryItemsAction` to be optional
  - changed property `deliveryId` of type `OrderAddParcelToDeliveryAction` to be optional
  - changed property `deliveryId` of type `OrderRemoveDeliveryAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryAddressAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryAddressCustomFieldAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryAddressCustomTypeAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryCustomFieldAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryCustomTypeAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryItemsAction` to be optional
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `CartSetLineItemInventoryModeAction`
  - added type `MoneyOverflowError`
  - added type `GraphQLMoneyOverflowError`
  - added type `MyCartSetDirectDiscountsAction`
  - added type `QuoteCustomerChangedMessage`
  - added type `QuoteRequestCustomerChangedMessage`
  - added type `QuoteCustomerChangedMessagePayload`
  - added type `QuoteRequestCustomerChangedMessagePayload`
  - added type `QuoteRequestChangeCustomerAction`
  - added type `QuoteChangeCustomerAction`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/replicate`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `ReassignMyQuotes` to type `Permission`
  - added enum `ReassignOthersQuotes` to type `Permission`
  - added enum `RenegotiationAddressed` to type `QuoteState`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().replicate().post()`
  </details>

## 4.9.0

### Minor Changes

- [#478](https://github.com/commercetools/commercetools-sdk-typescript/pull/478) [`98c6bac`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98c6bace1608889c16373e1a83451cf5d7a7d140) Thanks [@ajimae](https://github.com/ajimae)! - remove all remaining `querystring` package instances.

## 4.8.1

### Patch Changes

- [#477](https://github.com/commercetools/commercetools-sdk-typescript/pull/477) [`60ac380`](https://github.com/commercetools/commercetools-sdk-typescript/commit/60ac380c16b8739d1da7faf6ea510870051279a8) Thanks [@github-actions](https://github.com/apps/github-actions)! - ## Update generated SDKs

  **Api changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `associateRoleAssignments` to type `MyBusinessUnitAssociateDraft`
  </details>

## 4.8.0

### Minor Changes

- [#465](https://github.com/commercetools/commercetools-sdk-typescript/pull/465) [`efa9194`](https://github.com/commercetools/commercetools-sdk-typescript/commit/efa9194bd092bbb653b6d44e76fb90f563f41d53) Thanks [@github-actions](https://github.com/apps/github-actions)! - ## Update generated SDKs

  **Api changes**

  <details>
  <summary>Changed Type(s)</summary>

  - :warning: changed type `AssociateRole` from type `string` to `BaseResource`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `AssociateRoleDraft`
  - added type `AssociateRoleKeyReference`
  - added type `AssociateRolePagedQueryResponse`
  - added type `AssociateRoleReference`
  - added type `AssociateRoleResourceIdentifier`
  - added type `AssociateRoleUpdate`
  - added type `AssociateRoleUpdateAction`
  - added type `Permission`
  - added type `AssociateRoleAddPermissionAction`
  - added type `AssociateRoleChangeBuyerAssignableAction`
  - added type `AssociateRoleRemovePermissionAction`
  - added type `AssociateRoleSetCustomFieldAction`
  - added type `AssociateRoleSetCustomTypeAction`
  - added type `AssociateRoleSetNameAction`
  - added type `AssociateRoleSetPermissionsAction`
  - added type `AssociateRoleAssignment`
  - added type `AssociateRoleAssignmentDraft`
  - added type `AssociateRoleDeprecated`
  - added type `AssociateRoleInheritanceMode`
  - added type `BusinessUnitAssociateMode`
  - added type `InheritedAssociate`
  - added type `InheritedAssociateRoleAssignment`
  - added type `BusinessUnitChangeAssociateModeAction`
  - added type `AssociateMissingPermissionError`
  - added type `GraphQLAssociateMissingPermissionError`
  - added type `AssociateRoleBuyerAssignableChangedMessage`
  - added type `AssociateRoleCreatedMessage`
  - added type `AssociateRoleDeletedMessage`
  - added type `AssociateRoleNameChangedMessage`
  - added type `AssociateRolePermissionAddedMessage`
  - added type `AssociateRolePermissionRemovedMessage`
  - added type `AssociateRolePermissionsSetMessage`
  - added type `BusinessUnitAssociateModeChangedMessage`
  - added type `AssociateRoleBuyerAssignableChangedMessagePayload`
  - added type `AssociateRoleCreatedMessagePayload`
  - added type `AssociateRoleDeletedMessagePayload`
  - added type `AssociateRoleNameChangedMessagePayload`
  - added type `AssociateRolePermissionAddedMessagePayload`
  - added type `AssociateRolePermissionRemovedMessagePayload`
  - added type `AssociateRolePermissionsSetMessagePayload`
  - added type `BusinessUnitAssociateModeChangedMessagePayload`
  - added type `ProjectSetBusinessUnitAssociateRoleOnCreationAction`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `associate-role` to type `ReferenceTypeId`
  - added enum `associate-role` to type `MessageSubscriptionResourceTypeId`
  - added enum `associate-role` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `associateRoleAssignments` to type `Associate`
  - added property `associateRoleAssignments` to type `AssociateDraft`
  - added property `associateMode` to type `BusinessUnit`
  - added property `inheritedAssociates` to type `BusinessUnit`
  - added property `associateMode` to type `BusinessUnitDraft`
  - added property `associateMode` to type `Company`
  - added property `inheritedAssociates` to type `Company`
  - added property `associateMode` to type `CompanyDraft`
  - added property `associateMode` to type `Division`
  - added property `inheritedAssociates` to type `Division`
  - added property `associateMode` to type `DivisionDraft`
  - added property `myBusinessUnitAssociateRoleOnCreation` to type `BusinessUnitConfiguration`
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `roles` of type `Associate` from type `AssociateRole[]` to `AssociateRoleDeprecated[]`
  - :warning: changed property `roles` of type `AssociateDraft` from type `AssociateRole[]` to `AssociateRoleDeprecated[]`
  </details>

  <details>
  <summary>MarkDeprecated Property(s)</summary>

  - marked property `Associate::roles` as deprecated
  - marked property `AssociateDraft::roles` as deprecated
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/as-associate`
  - added resource `/{projectKey}/associate-roles`
  - added resource `/{projectKey}/as-associate/{associateId}`
  - added resource `/{projectKey}/as-associate/{associateId}/business-units`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}`
  - added resource `/{projectKey}/as-associate/{associateId}/business-units/key={key}`
  - added resource `/{projectKey}/as-associate/{associateId}/business-units/{ID}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/quotes`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/order-number={orderNumber}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/{ID}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/key={key}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/{ID}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/associate-roles/key={key}`
  - added resource `/{projectKey}/associate-roles/{ID}`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().associateRoles().get()`
  - added method `apiRoot.withProjectKey().associateRoles().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withKey().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withKey().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().delete()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().delete()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withOrderNumber().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withOrderNumber().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().associateRoles().withKey().get()`
  - added method `apiRoot.withProjectKey().associateRoles().withKey().post()`
  - added method `apiRoot.withProjectKey().associateRoles().withKey().delete()`
  - added method `apiRoot.withProjectKey().associateRoles().withId().get()`
  - added method `apiRoot.withProjectKey().associateRoles().withId().post()`
  - added method `apiRoot.withProjectKey().associateRoles().withId().delete()`
  </details>

  **Import changes**

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `type` to type `ImportResourceType`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/types`
  - added resource `/{projectKey}/types/import-containers`
  - added resource `/{projectKey}/types/import-containers/{importContainerKey}`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKeyValue().types().importContainers().withImportContainerKeyValue().post()`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `TypeImportRequest`
  - added type `TypeTextInputHint`
  - added type `ResourceTypeId`
  - added type `FieldType`
  - added type `CustomFieldBooleanType`
  - added type `CustomFieldDateTimeType`
  - added type `CustomFieldDateType`
  - added type `CustomFieldEnumType`
  - added type `CustomFieldEnumValue`
  - added type `CustomFieldLocalizedEnumType`
  - added type `CustomFieldLocalizedEnumValue`
  - added type `CustomFieldLocalizedStringType`
  - added type `CustomFieldMoneyType`
  - added type `CustomFieldNumberType`
  - added type `CustomFieldReferenceType`
  - added type `CustomFieldReferenceValue`
  - added type `CustomFieldSetType`
  - added type `CustomFieldStringType`
  - added type `CustomFieldTimeType`
  - added type `FieldDefinition`
  - added type `TypeImport`
  </details>

  **History changes**

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `resourceTypes` to method `get /{projectKey}`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `resourceType` from method `get /{projectKey}`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `SetCountriesChange`
  - added type `SetPurchaseOrderNumberChange`
  - added type `StoreCountry`
  </details>

## 4.7.1

### Patch Changes

- [#453](https://github.com/commercetools/commercetools-sdk-typescript/pull/453) [`a83e653`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a83e653c986e50f31f71546edc721263d29990b5) Thanks [@ajimae](https://github.com/ajimae)! - - Remove all `querystring` dependency
  - Add qs dependency to requiring package
  - Refactor code to accommodate new implementation
- Updated dependencies [[`a83e653`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a83e653c986e50f31f71546edc721263d29990b5)]:
  - @commercetools/sdk-client-v2@2.1.6

## 4.7.0

### Minor Changes

- [`dad68dc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/dad68dcabc0d8995b1c628b6cf431c14e9504888) Thanks [@jenschude](https://github.com/jenschude)! - **Api changes**

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

### Patch Changes

- Updated dependencies [[`057e260`](https://github.com/commercetools/commercetools-sdk-typescript/commit/057e260b3330b7ab8df33171bb2d4aa2de0444d9)]:
  - @commercetools/sdk-client-v2@2.1.5

## 4.6.0

### Minor Changes

- [#432](https://github.com/commercetools/commercetools-sdk-typescript/pull/432) [`d06e0c5`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d06e0c58f4b9a8f69bbde63f906cc905c878aa2d) Thanks [@ajimae](https://github.com/ajimae)! - ### Removed Properties

  - :warning: removed property `externalTaxRate` from type `MyCartAddLineItemAction`
  - :warning: removed property `externalPrice` from type `MyCartAddLineItemAction`
  - :warning: removed property `externalTotalPrice` from type `MyCartAddLineItemAction`

  ### Changed Properties

  - :warning: changed property `stores` of type `BusinessUnitDraft` from type `StoreKeyReference[]` to `StoreResourceIdentifier[]`
  - :warning: changed property `stores` of type `CompanyDraft` from type `StoreKeyReference[]` to `StoreResourceIdentifier[]`
  - :warning: changed property `stores` of type `DivisionDraft` from type `StoreKeyReference[]` to `StoreResourceIdentifier[]`
  - :warning: changed property `totalPrice` of type `Cart` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `locale` of type `Cart` from type `string` to `Locale`
  - :warning: changed property `country` of type `CartDraft` from type `string` to `CountryCode`
  - :warning: changed property `locale` of type `CartDraft` from type `string` to `Locale`
  - :warning: changed property `totalPrice` of type `CustomLineItem` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `externalTaxRate` of type `CustomShippingDraft` from type `string` to `ExternalTaxRateDraft`
  - :warning: changed property `deliveries` of type `CustomShippingDraft` from type `Delivery[]` to `DeliveryDraft[]`
  - :warning: changed property `custom` of type `CustomShippingDraft` from type `string` to `CustomFieldsDraft`
  - :warning: changed property `country` of type `ExternalTaxRateDraft` from type `string` to `CountryCode`
  - :warning: changed property `totalPrice` of type `LineItem` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `externalTaxRate` of type `ShippingDraft` from type `string` to `ExternalTaxRateDraft`
  - :warning: changed property `deliveries` of type `ShippingDraft` from type `Delivery[]` to `DeliveryDraft[]`
  - :warning: changed property `custom` of type `ShippingDraft` from type `string` to `CustomFieldsDraft`
  - :warning: changed property `price` of type `ShippingInfo` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `amount` of type `TaxPortion` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalNet` of type `TaxedItemPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalGross` of type `TaxedItemPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalTax` of type `TaxedItemPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalNet` of type `TaxedPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalGross` of type `TaxedPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalTax` of type `TaxedPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `externalTaxRate` of type `CartAddCustomShippingMethodAction` from type `string` to `ExternalTaxRateDraft`
  - :warning: changed property `deliveries` of type `CartAddCustomShippingMethodAction` from type `Delivery[]` to `DeliveryDraft[]`
  - :warning: changed property `custom` of type `CartAddCustomShippingMethodAction` from type `string` to `CustomFieldsDraft`
  - :warning: changed property `shippingMethod` of type `CartAddShippingMethodAction` from type `ShippingMethodReference` to `ShippingMethodResourceIdentifier`
  - :warning: changed property `externalTaxRate` of type `CartAddShippingMethodAction` from type `string` to `ExternalTaxRateDraft`
  - :warning: changed property `deliveries` of type `CartAddShippingMethodAction` from type `Delivery[]` to `DeliveryDraft[]`
  - :warning: changed property `custom` of type `CartAddShippingMethodAction` from type `string` to `CustomFieldsDraft`
  - :warning: changed property `locale` of type `CartSetLocaleAction` from type `string` to `Locale`
  - :warning: changed property `businessUnit` of type `MyCartDraft` from type `BusinessUnitKeyReference` to `BusinessUnitResourceIdentifier`
  - :warning: changed property `store` of type `MyCartDraft` from type `StoreKeyReference` to `StoreResourceIdentifier`
  - :warning: changed property `country` of type `MyCartDraft` from type `string` to `CountryCode`
  - :warning: changed property `locale` of type `MyCartDraft` from type `string` to `Locale`
  - :warning: changed property `locale` of type `MyCartSetLocaleAction` from type `string` to `Locale`

  ### Required Properties

  - :warning: changed property `inventoryMode` of type `Cart` to be required
  - :warning: changed property `itemShippingAddresses` of type `Cart` to be required
  - :warning: changed property `discountCodes` of type `Cart` to be required
  - :warning: changed property `directDiscounts` of type `Cart` to be required
  - :warning: changed property `shippingAddress` of type `ShippingDraft` to be required
  - changed property `quantity` of type `CustomLineItemDraft` to be optional
  - changed property `deliveries` of type `CustomShippingDraft` to be optional
  - changed property `deliveries` of type `ShippingDraft` to be optional
  - changed property `quantity` of type `CartAddCustomLineItemAction` to be optional
  - changed property `deliveries` of type `CartAddCustomShippingMethodAction` to be optional
  - changed property `deliveries` of type `CartAddShippingMethodAction` to be optional
  - changed property `email` of type `CartSetCustomerEmailAction` to be optional
  - changed property `quantity` of type `MyLineItemDraft` to be optional

  ### Added Properties

  - added property `shippingDetails` to type `CartAddCustomLineItemAction`
  - added property `addedAt` to type `CartAddLineItemAction`
  - added property `inventoryMode` to type `CartAddLineItemAction`
  - added property `oldValue` to type `StandalonePriceValueChangedMessage`
  - added property `oldValue` to type `StandalonePriceValueChangedMessagePayload`
  - added property `purchaseOrderNumber` to type `StagedOrder`
  - added property `purchaseOrderNumber` to type `Order`
  - added property `purchaseOrderNumber` to type `OrderFromCartDraft`
  - added property `purchaseOrderNumber` to type `QuoteRequest`
  - added property `purchaseOrderNumber` to type `QuoteRequestDraft`
  - added property `purchaseOrderNumber` to type `Quote`
  - added property `purchaseOrderNumber` to type `StagedQuote`

  ### Added Resources

  - added resource `/{projectKey}/me/orders/quotes`

  ### Added Method

  - added method `apiRoot.withProjectKey().me().orders().quotes().post()`

  ### Removed Type

  - :warning: removed type `CountryNotConfiguredInStore`

  ### Added Types

  - added type `CartSetBusinessUnitAction`
  - added type `CountryNotConfiguredInStoreError`
  - added type `GoogleCloudFunctionDestination`
  - added type `MyOrderFromQuoteDraft`
  - added type `MyCartSetBusinessUnitAction`
  - added type `OrderPurchaseOrderNumberSetMessage`
  - added type `OrderPurchaseOrderNumberSetMessagePayload`
  - added type `StagedOrderSetPurchaseOrderNumberAction`
  - added type `OrderSetPurchaseOrderNumberAction`

  ### Added QueryParameters

  - added query parameter `sort` to method `get /{projectKey}/product-selections/key={key}/products`
  - added query parameter `sort` to method `get /{projectKey}/product-selections/{ID}/products`
  - added query parameter `expand` to method `get /{projectKey}/in-store/key={storeKey}/me/active-cart`

  ### Added Enum(s)

  - added enum `shipping` to type `ResourceTypeId`

### Patch Changes

- Updated dependencies [[`8b4ad04`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8b4ad04e9a43a8b399fa946ab6693500a4af3fb5)]:
  - @commercetools/sdk-client-v2@2.1.4

## 4.5.0

### Minor Changes

- [#411](https://github.com/commercetools/commercetools-sdk-typescript/pull/411) [`393f1f9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/393f1f95359890673eb947682c76ab3ca9a290f0) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  ## Changes

  - added property `defaultShippingAddressId` to type `BusinessUnit`
  - added property `defaultShippingAddress` to type `BusinessUnitDraft`
  - added property `defaultShippingAddressId` to type `Company`
  - added property `defaultShippingAddress` to type `CompanyDraft`
  - added property `defaultShippingAddressId` to type `Division`
  - added property `defaultShippingAddress` to type `DivisionDraft`
  - added property `conflictingPrice` to type `DuplicatePriceScopeError`
  - added property `defaultShippingAddress` to type `MyBusinessUnitDraft`
  - added property `defaultShippingAddress` to type `MyCompanyDraft`
  - added property `defaultShippingAddress` to type `MyDivisionDraft`
  - added property `cartId` to type `MyQuoteRequestDraft`
  - added property `cartVersion` to type `MyQuoteRequestDraft`
  - added property `createdAt` to type `AssignedProductSelection`
  - added property `quoteState` to type `Quote`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `discounted` of type `StagedStandalonePrice` to be optional
  </details>

  <details>
  <summary>Removed Property(s)</summary>

  - :warning: removed property `defaultShipingAddressId` from type `BusinessUnit`
  - :warning: removed property `defaultShipingAddress` from type `BusinessUnitDraft`
  - :warning: removed property `defaultShipingAddressId` from type `Company`
  - :warning: removed property `defaultShipingAddress` from type `CompanyDraft`
  - :warning: removed property `defaultShipingAddressId` from type `Division`
  - :warning: removed property `defaultShipingAddress` from type `DivisionDraft`
  - :warning: removed property `conflictingPrices` from type `DuplicatePriceScopeError`
  - :warning: removed property `defaultShipingAddress` from type `MyBusinessUnitDraft`
  - :warning: removed property `defaultShipingAddress` from type `MyCompanyDraft`
  - :warning: removed property `defaultShipingAddress` from type `MyDivisionDraft`
  - :warning: removed property `cart` from type `MyQuoteRequestDraft`
  - :warning: removed property `version` from type `MyQuoteRequestDraft`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductPriceSetMessage`
  - :warning: removed type `ProductPriceSetMessagePayload`
  </details>

  <details>
  <summary>Deprecated Type(s)</summary>

  - type `IronMqDestination` is removed
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `CartFreezeCartAction`
  - added type `CartUnfreezeCartAction`
  - added type `DuplicatePriceKeyError`
  - added type `ProductPriceKeySetMessage`
  - added type `ProductPricesSetMessage`
  - added type `StandalonePriceKeySetMessage`
  - added type `ProductPriceKeySetMessagePayload`
  - added type `ProductPricesSetMessagePayload`
  - added type `StandalonePriceKeySetMessagePayload`
  - added type `ProductSetPriceKeyAction`
  - added type `StandalonePriceSetKeyAction`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/shipping-methods/matching-cart-location`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().shippingMethods().matchingCartLocation().get()`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `Frozen` to type `CartState`
  </details>

  **ML changes**

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `MissingAttributes::attributeCount` is removed
  - property `MissingAttributes::attributeCoverage` is removed
  - property `MissingAttributesMeta::productLevel` is removed
  - property `MissingAttributesMeta::variantLevel` is removed
  - property `MissingAttributesPagedQueryResult::meta` is removed
  - property `MissingDataTaskStatus::result` is removed
  - property `MissingImagesMeta::productLevel` is removed
  - property `MissingImagesMeta::variantLevel` is removed
  - property `MissingImagesPagedQueryResult::meta` is removed
  - property `MissingImagesTaskStatus::result` is removed
  - property `MissingPricesMeta::productLevel` is removed
  - property `MissingPricesMeta::variantLevel` is removed
  - property `MissingPricesPagedQueryResult::meta` is removed
  - property `MissingPricesTaskStatus::result` is removed
  </details>

  <details>
  <summary>Deprecated Type(s)</summary>

  - type `AttributeCount` is removed
  - type `AttributeCoverage` is removed
  - type `MissingAttributesDetails` is removed
  - type `MissingAttributes` is removed
  - type `MissingAttributesMeta` is removed
  - type `MissingAttributesSearchRequest` is removed
  - type `MissingAttributesPagedQueryResult` is removed
  - type `MissingDataTaskStatus` is removed
  - type `MissingImages` is removed
  - type `MissingImagesCount` is removed
  - type `MissingImagesProductLevel` is removed
  - type `MissingImagesVariantLevel` is removed
  - type `MissingImagesMeta` is removed
  - type `MissingImagesSearchRequest` is removed
  - type `MissingImagesPagedQueryResult` is removed
  - type `MissingImagesTaskStatus` is removed
  - type `MissingPrices` is removed
  - type `MissingPricesProductCount` is removed
  - type `MissingPricesProductLevel` is removed
  - type `MissingPricesVariantLevel` is removed
  - type `MissingPricesMeta` is removed
  - type `MissingPricesSearchRequest` is removed
  - type `MissingPricesPagedQueryResult` is removed
  - type `MissingPricesTaskStatus` is removed
  </details>

  <details>
  <summary>Deprecated Resource(s)</summary>

  - resource `/{projectKey}/missing-data` is removed
  - resource `/{projectKey}/missing-data/attributes` is removed
  - resource `/{projectKey}/missing-data/images` is removed
  - resource `/{projectKey}/missing-data/prices` is removed
  - resource `/{projectKey}/missing-data/attributes/status` is removed
  - resource `/{projectKey}/missing-data/attributes/status/{taskId}` is removed
  - resource `/{projectKey}/missing-data/images/status` is removed
  - resource `/{projectKey}/missing-data/images/status/{taskId}` is removed
  - resource `/{projectKey}/missing-data/prices/status` is removed
  - resource `/{projectKey}/missing-data/prices/status/{taskId}` is removed
  </details>

  <details>
  <summary>Deprecated Method(s)</summary>

  - method `post /{projectKey}/missing-data/attributes` is removed
  - method `post /{projectKey}/missing-data/images` is removed
  - method `post /{projectKey}/missing-data/prices` is removed
  - method `get /{projectKey}/missing-data/attributes/status/{taskId}` is removed
  - method `get /{projectKey}/missing-data/images/status/{taskId}` is removed
  - method `get /{projectKey}/missing-data/prices/status/{taskId}` is removed

### Patch Changes

- Updated dependencies [[`caca661`](https://github.com/commercetools/commercetools-sdk-typescript/commit/caca661ff4c91cf256b6ee406135a45478b7ae47)]:
  - @commercetools/sdk-client-v2@2.1.2

## 4.4.0

### Minor Changes

- [#399](https://github.com/commercetools/commercetools-sdk-typescript/pull/399) [`391c1cb`](https://github.com/commercetools/commercetools-sdk-typescript/commit/391c1cb33b55458649f538107527d704ff11e2bd) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  #### Summary

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `amount` of type `Transaction` from type `TypedMoney` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `defaultShippingAddressId` to type `BusinessUnit`
  - added property `defaultShippingAddress` to type `BusinessUnitDraft`
  - added property `defaultShippingAddressId` to type `Company`
  - added property `defaultShippingAddress` to type `CompanyDraft`
  - added property `defaultShippingAddressId` to type `Division`
  - added property `defaultShippingAddress` to type `DivisionDraft`
  - added property `conflictingPrice` to type `DuplicatePriceScopeError`
  - added property `defaultShippingAddress` to type `MyBusinessUnitDraft`
  - added property `defaultShippingAddress` to type `MyCompanyDraft`
  - added property `defaultShippingAddress` to type `MyDivisionDraft`
  - added property `cartId` to type `MyQuoteRequestDraft`
  - added property `cartVersion` to type `MyQuoteRequestDraft`
  - added property `createdAt` to type `AssignedProductSelection`
  - added property `quoteState` to type `Quote`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `discounted` of type `StagedStandalonePrice` to be optional
  </details>

  <details>
  <summary>Removed Property(s)</summary>

  - :warning: removed property `defaultShipingAddressId` from type `BusinessUnit`
  - :warning: removed property `defaultShipingAddress` from type `BusinessUnitDraft`
  - :warning: removed property `defaultShipingAddressId` from type `Company`
  - :warning: removed property `defaultShipingAddress` from type `CompanyDraft`
  - :warning: removed property `defaultShipingAddressId` from type `Division`
  - :warning: removed property `defaultShipingAddress` from type `DivisionDraft`
  - :warning: removed property `conflictingPrices` from type `DuplicatePriceScopeError`
  - :warning: removed property `defaultShipingAddress` from type `MyBusinessUnitDraft`
  - :warning: removed property `defaultShipingAddress` from type `MyCompanyDraft`
  - :warning: removed property `defaultShipingAddress` from type `MyDivisionDraft`
  - :warning: removed property `cart` from type `MyQuoteRequestDraft`
  - :warning: removed property `version` from type `MyQuoteRequestDraft`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductPriceSetMessage`
  - :warning: removed type `ProductPriceSetMessagePayload`
  </details>

  <details>
  <summary>Deprecated Type(s)</summary>

  - type `IronMqDestination` is removed
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `CartFreezeCartAction`
  - added type `CartUnfreezeCartAction`
  - added type `DuplicatePriceKeyError`
  - added type `ProductPriceKeySetMessage`
  - added type `ProductPricesSetMessage`
  - added type `StandalonePriceKeySetMessage`
  - added type `ProductPriceKeySetMessagePayload`
  - added type `ProductPricesSetMessagePayload`
  - added type `StandalonePriceKeySetMessagePayload`
  - added type `ProductSetPriceKeyAction`
  - added type `StandalonePriceSetKeyAction`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/shipping-methods/matching-cart-location`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().shippingMethods().matchingCartLocation().get()`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `Frozen` to type `CartState`
  </details>

## 4.3.0

### Minor Changes

- [#371](https://github.com/commercetools/commercetools-sdk-typescript/pull/371) [`f6bd1fe`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f6bd1fe02773974d1e95a50a986e846698a95322) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  #### Summary

  - The get method of `ByProjectKeyInStoreKeyByStoreKeyProductProjectionsByIDRequestBuilder` class now supports an optional `stage` property
    - [Diff link](packages/platform-sdk/src/generated/client/product-projections/by-project-key-in-store-key-by-store-key-product-projections-by-id-request-builder.ts)
  - The get method of `ByProjectKeyInStoreKeyByStoreKeyProductProjectionsKeyByKeyRequestBuilder` class now supports an optional `stage` property
    - [Diff link](packages/platform-sdk/src/generated/client/product-projections/by-project-key-in-store-key-by-store-key-product-projections-key-by-key-request-builder.ts)

  #### Snippet

  ```diff
  ...
    queryArgs?: {
  +   staged?: boolean
      priceCurrency?: string
      priceCountry?: string
      priceCustomerGroup?: string,
      ...
    }
    ...
  }) {}
  ```

  - The `get`, `post` and `delete` method query args. of `ByProjectKeyProductsByIDRequestBuilder` class now supports optional `localeProjection` property
    - [Diff link](packages/platform-sdk/src/generated/client/products/by-project-key-products-by-id-request-builder.ts)
  - The `get` and `post` method query args. of the `ByProjectKeyProductsRequestBuilder` class now supports an optional `localeProjection` property.
    - [Diff link](packages/platform-sdk/src/generated/client/products/by-project-key-products-request-builder.ts)

  ```diff
  ...
    queryArgs?: {
      where?: string | string[]
      priceCurrency?: string
      priceCountry?: string
      priceCustomerGroup?: string
      priceChannel?: string
  +   localeProjection?: string | string[]
      expand?: string | string[]
      sort?: string | string[]
      limit?: number
      offset?: number
      withTotal?: boolean
      [key: string]: QueryParam
    }
  ...
  ```

  The complete changes can be found [here](changes.md)

### Patch Changes

- [#394](https://github.com/commercetools/commercetools-sdk-typescript/pull/394) [`01dcc12`](https://github.com/commercetools/commercetools-sdk-typescript/commit/01dcc12dd808f3431736fc00d0596f82d08a28d0) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

- Updated dependencies [[`98d2d7c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98d2d7ce2abad1d8eb3466f4f3df1b877f144920)]:
  - @commercetools/sdk-client-v2@2.1.1

## 4.2.0

### Minor Changes

- [#352](https://github.com/commercetools/commercetools-sdk-typescript/pull/352) [`ef84dd4`](https://github.com/commercetools/commercetools-sdk-typescript/commit/ef84dd439c29a91f4b43eb9aae10774a56d490b6) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  Summary of changes can be seen [here](https://github.com/commercetools/commercetools-sdk-typescript/blob/master/changes.md)

### Patch Changes

- Updated dependencies [[`8cd7b08`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8cd7b08a78e13a886ed2271f6807358380b22ab2), [`fe5109c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fe5109c58c17e150e3a8fa953b829b2875cd9f96)]:
  - @commercetools/sdk-client-v2@2.1.0

## 4.1.0

### Minor Changes

- [#351](https://github.com/commercetools/commercetools-sdk-typescript/pull/351) [`9c93a8e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9c93a8e92b4d523d6661567f7571f115a527b039) Thanks [@ajimae](https://github.com/ajimae)! - Update packages

  Update the `history-sdk` `DateStringFilter`, `ChangeHistoryResourceType`, `Source` and `PlatformInitiatedChange` etc. models to include a `string` type

  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-cc2fe178ca6b6be224a1703faedb4addb5aeaba6e8fed5c5fb8aa83e6b89c15c)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-d209024497a25bf47b1328575261874e3b3838708b200c576e9136881d7c2fc5)

  Add builder class and method for [`standalone-prices`](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-6c227c775a135e83a3177890fb075a57a36aca5e54585ddd12800e2fc8c868d0) for `importapi-sdk`

  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-4194831274c991aa860b804aa0e4ef37607f3648ce4b5bd1fa485fb368563414)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-cf4d4d593249abe6c99086f76491a0bd251573cde0f78291d38c12db533955e9)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-9b983bcf9b8f15645d6c0c5395b43046a37915b6269f8f1f0d113c625661b61e)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-cab14530d8df4ee940fea751e4e5afa1b36a94b92ee1360e641f46696fc3f21b)

  Update the `importapi-sdk` `MoneyType`, `ReferenceType`, `ProcessingState`, `ImportOperationState` `ProductPriceModeEnum` etc models to include a `string` type

  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-4a12dd49a3bd4416087368cf7d2adad860849ada79c1744ae27ddae67c299c43)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-098b1027a5d008b85d503e4fbfd1a7ae1c47a138e1d8fb82c7ac9ee1ea94de3f)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-66168b247234ab499100b349ea788dfc0bad6c5275d5cf7541088083cd4ad47f)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-ac6b2ee896a8ab4c39857df35774f59713a50c547a6e7cecfe6924547381cd96)

  Add class and builder methods for
  `ByProjectKeyBusinessUnitsByIDRequestBuilder`,
  `ByProjectKeyBusinessUnitsRequestBuilder`,
  `ByProjectKeyMeBusinessUnitsKeyByKeyRequestBuilder`,
  `ByProjectKeyMeBusinessUnitsRequestBuilder`,
  `ByProjectKeyBusinessUnitsKeyByKeyRequestBuilder`
  `ByProjectKeyInBusinessUnitKeyByBusinessUnitKeyMeCustomersRequestBuilder`,
  `ByProjectKeyInBusinessUnitKeyByBusinessUnitKeyMeRequestBuilder`,
  `ByProjectKeyInBusinessUnitKeyByBusinessUnitKeyRequestBuilder`
  in the `platform-sdk`

  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-cb753c87b292658be2da42c7548c3ffcad89550d99d5a433bae77b06b1e8dde8)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-61da76483d06d79e65e755f43ce8f1c8b06b62af3dd310cdeac4cac8583c9457)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-427e08314427fc8efa3e4466403eb7ad961482b0ebbfd71a65ad513b1e62d93c)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-f7e56705a0ede866385bed01616ec49604dc9921092e9c8ad8c3dc435c7f7706)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-8104137d8ff7613e73e02d11a26f3086884e2b135467f8c2d56b25e9719781c3)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-d2d796eb7f7a440dba06bc3f71f12fb9ffbfbd0ba86161a7b77eab7a62d89fb4)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-c008d9ee3cd715df487ab0ebb7ce332cf31804ac533a2598e6808bf73f057b9e)

  Complete changes can be found [here](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files)

- [#347](https://github.com/commercetools/commercetools-sdk-typescript/pull/347) [`f0e84dd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f0e84ddb2e34b908385a380175c6da596db6817a) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  Add `quotes()` method for the `My Quote endpoint`

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-17ea32dc184ca17b337fbf5e126f27f16651feadc9c879fae88db2580537cf8eR142)

  **Usage:**

  ```ts
  request: apiRoot
    .withProjectKey({ projectKey: 'test_projectKey' })
    .me()
    .quotes()
    .withId({ ID: 'test_ID' })
    .get({ queryArgs: { expand: 'expand' } }),
  ```

  Add `ByProjectKeyMeQuotesByIDRequestBuilder` class for `quotes-request` model

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-a5bab13a41c9ece596cf0fcc545109385e16b6b1877755e58d8ec064125e2041R12)

  Add `ByProjectKeyMeQuotesKeyByKeyRequestBuilder` class for `quotes-request` model

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-034feddaefb558f6391d5238391e177290d7f018904308b2884dfa016c81bc0dR12)

  Add `ByProjectKeyMeQuotesRequestBuilder` class for `quotes-request` model

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-26e9b7a9cef621eaf88d81d1e2bb61858402450c444e1fe4d11bde5b51d22638R13)

### Patch Changes

- Updated dependencies [[`f0e84dd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f0e84ddb2e34b908385a380175c6da596db6817a)]:
  - @commercetools/sdk-client-v2@2.0.1

## 4.0.0

### Major Changes

- [#341](https://github.com/commercetools/commercetools-sdk-typescript/pull/341) [`385682f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/385682fef6f0efa39a51570434d4d11789e0a220) Thanks [@ajimae](https://github.com/ajimae)! - Upgrade node versions to 14 and set engine to >= 14

### Patch Changes

- Updated dependencies [[`385682f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/385682fef6f0efa39a51570434d4d11789e0a220)]:
  - @commercetools/sdk-client-v2@2.0.0

## 3.0.2

### Patch Changes

- [#323](https://github.com/commercetools/commercetools-sdk-typescript/pull/323) [`b11c9a8`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b11c9a834da26b7afb0b81eccbe5752823fda7da) Thanks [@github-actions](https://github.com/apps/github-actions)! - Support standalone prices reference expansion

## 3.0.1

### Patch Changes

- [#303](https://github.com/commercetools/commercetools-sdk-typescript/pull/303) [`2bc0f73`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2bc0f73d946eebb954bec8849c8697cd716ef848) Thanks [@github-actions](https://github.com/apps/github-actions)! - - Update generated SDKs
  - Updated changes for generated SDKs
    - add expand property to active-cart get endpoint.
- Updated dependencies [[`d921acd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d921acda35dadf135dffb53419b8825c915477b1), [`588a0f9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/588a0f9b981a538a16a23a449e810c56956f352c), [`7510e0b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7510e0bf69cc4b63c43d0431d338502d048524aa)]:
  - @commercetools/sdk-client-v2@1.4.1

## 3.0.0

### Major Changes

- [#291](https://github.com/commercetools/commercetools-sdk-typescript/pull/291) [`cde61f4`](https://github.com/commercetools/commercetools-sdk-typescript/commit/cde61f45563970ca1648496198268976e4f83d8e) Thanks [@github-actions](https://github.com/apps/github-actions)! - ### History API

  - add support for quotes
  - add support for authentication mode
  - add product selection support

  ### Import API

  - add support for inventory imports
  - remove import sink endpoints

  ### Platform API

  - add support for quotes
  - fix localeProjection query parameter type
  - add missing query parameters to product selection assigment
  - add HEAD request to product types
  - add DeliveryDraft model
  - removed deprecated fields from Payment models

### Minor Changes

- [#302](https://github.com/commercetools/commercetools-sdk-typescript/pull/302) [`69da036`](https://github.com/commercetools/commercetools-sdk-typescript/commit/69da036f75595831a20503bc17aa292857cecdb9) Thanks [@github-actions](https://github.com/apps/github-actions)! - ### Platform API

  #### Features

  - add LocaleprojectingTrait, StoreprojectingTrait
  - quotes to extension resource types
  - support InventoryMode for cart line items

  #### Fixes

  - removed `localeProjection` & `priceSelection` parameter from PriceselectingTrait as they are not applying to all endpoints using price selection

## 2.8.0

### Minor Changes

- [#258](https://github.com/commercetools/commercetools-sdk-typescript/pull/258) [`ba52d38`](https://github.com/commercetools/commercetools-sdk-typescript/commit/ba52d38a0a00299de61f554ae753cfb984401d79) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  - add support for Standalone Prices

### Patch Changes

- [#266](https://github.com/commercetools/commercetools-sdk-typescript/pull/266) [`fd29fa7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fd29fa759f906040d76a889c2d3fbfbdf2ac6617) Thanks [@github-actions](https://github.com/apps/github-actions)! - Platform SDK updates:

  - Fix /me/email/confirm arguments and return type (https://github.com/commercetools/commercetools-sdk-typescript/issues/274)

## 2.7.0

### Minor Changes

- [#257](https://github.com/commercetools/commercetools-sdk-typescript/pull/257) [`facc47b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/facc47ba50b00056adc232d7c75a2849cdcc6689) Thanks [@ajimae](https://github.com/ajimae)! - release latest sdk

### Patch Changes

- Updated dependencies [[`facc47b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/facc47ba50b00056adc232d7c75a2849cdcc6689), [`7512c3f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7512c3f1f488645da3952f296d4f4fe3149b7fba)]:
  - @commercetools/sdk-client-v2@1.4.0

## 2.6.0

### Minor Changes

- [#241](https://github.com/commercetools/commercetools-sdk-typescript/pull/241) [`85f5be3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/85f5be349a9b0fa46539259981bfd8d5fc2ffdc6) Thanks [@ajimae](https://github.com/ajimae)! - Releasing the TS SDK with the following changelogs

  - added functionalities to extend client user agent
  - custom field added to OrderFromCardDraft

### Patch Changes

- Updated dependencies [[`85f5be3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/85f5be349a9b0fa46539259981bfd8d5fc2ffdc6)]:
  - @commercetools/sdk-client-v2@1.3.0

## 2.5.0

### Minor Changes

- [#211](https://github.com/commercetools/commercetools-sdk-typescript/pull/211) [`f3c1e3e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f3c1e3ea0ca000b309eca1de6163c3ad065d526f) Thanks [@jherey](https://github.com/jherey)! - - Change Import Summaries `processingState` to `processingstate`.
  - Add `sort` to `ByProjectKeyShippingMethodsMatchingLocationRequestBuilder`.
  - New `MyCustomerResetPassword` model added to `ByProjectKeyMePasswordResetRequestBuilder` class.
  - Other changes are detailed here: https://github.com/commercetools/commercetools-sdk-typescript/pull/192/files.

### Patch Changes

- Updated dependencies [[`f3c1e3e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f3c1e3ea0ca000b309eca1de6163c3ad065d526f)]:
  - @commercetools/sdk-client-v2@1.2.0

## 2.4.1

### Patch Changes

- [#190](https://github.com/commercetools/commercetools-sdk-typescript/pull/190) [`5c9915f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/5c9915f8655b269cb2c1a4adf3c2ce14780c4c30) Thanks [@github-actions](https://github.com/apps/github-actions)! - Fix type in product selection query assigned to a product

## 2.4.0

### Minor Changes

- [#188](https://github.com/commercetools/commercetools-sdk-typescript/pull/188) [`4c2d9b6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4c2d9b64b204200dffbeb18130239138dd2ad7d3) Thanks [@ajimae](https://github.com/ajimae)! - February package release

### Patch Changes

- [#149](https://github.com/commercetools/commercetools-sdk-typescript/pull/149) [`08caea9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/08caea93560c01e2158f018538b7a2b9f4be39c1) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

- Updated dependencies [[`08caea9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/08caea93560c01e2158f018538b7a2b9f4be39c1), [`4c2d9b6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4c2d9b64b204200dffbeb18130239138dd2ad7d3)]:
  - @commercetools/sdk-client-v2@1.1.0

## 2.3.0

### Minor Changes

- [#177](https://github.com/commercetools/commercetools-sdk-typescript/pull/177) [`9389a07`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9389a07fa89f94049e1b3b7dbeb74adce0d0a60b) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  ### Features

  - Add support for product selection (beta)

  ### Fixes

  - Fix returnItemDraft type of field `custom` to `CustomFieldsDraft`

## 2.2.0

### Minor Changes

- [#165](https://github.com/commercetools/commercetools-sdk-typescript/pull/165) [`1b305a1`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1b305a18602f6daceab31d7691f5b0239db2ad23) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 2.1.0

### Minor Changes

- [#148](https://github.com/commercetools/commercetools-sdk-typescript/pull/148) [`0281529`](https://github.com/commercetools/commercetools-sdk-typescript/commit/028152987cd191db2458e5b327ff275a1e6cb36e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

### Patch Changes

- Updated dependencies [[`fcd35a0`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fcd35a0f26b2780d0004c4e9d7b48233a86c2453)]:
  - @commercetools/sdk-client-v2@1.0.1

## 2.0.1

### Patch Changes

- [#159](https://github.com/commercetools/commercetools-sdk-typescript/pull/159) [`1d0d397`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1d0d397a2771edf959c77506276518df9f432555) Thanks [@ajimae](https://github.com/ajimae)! - Remove sdk-client-v2 from devDependency and make it a direct dependency, remove old node.js client completely.

## 2.0.0

### Major Changes

- [#154](https://github.com/commercetools/commercetools-sdk-typescript/pull/154) [`25f1dea`](https://github.com/commercetools/commercetools-sdk-typescript/commit/25f1dea23eccdfdda01e9144ec2afe968ead58f2) Thanks [@jherey](https://github.com/jherey)! - This is the first major release of the sdk client

## 1.20.0

### Minor Changes

- [#146](https://github.com/commercetools/commercetools-sdk-typescript/pull/146) [`1f6f830`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1f6f830bb25d98c15ac96e06635c5e2aa07fe1e8) Thanks [@ajimae](https://github.com/ajimae)! - release a new version of typescript

### Patch Changes

- [#137](https://github.com/commercetools/commercetools-sdk-typescript/pull/137) [`f119f8a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f119f8a26255790a6faf3667e07b500497a08c21) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.19.0

### Minor Changes

- [#120](https://github.com/commercetools/commercetools-sdk-typescript/pull/120) [`4d01dba`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4d01dbac9cfe38faaa0a11d3154a016759856772) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

* [#114](https://github.com/commercetools/commercetools-sdk-typescript/pull/114) [`c93148c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c93148cbe222ba89d0aca5ceb113de208015c0e0) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.18.1

### Patch Changes

- [#108](https://github.com/commercetools/commercetools-sdk-typescript/pull/108) [`026d91a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/026d91a747b445b0913eabb7eb91ecc7f3eb257e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

* [#110](https://github.com/commercetools/commercetools-sdk-typescript/pull/110) [`44173ff`](https://github.com/commercetools/commercetools-sdk-typescript/commit/44173ffde761420d04af6a2d03a845737eec9f82) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.18.0

### Minor Changes

- [#93](https://github.com/commercetools/commercetools-sdk-typescript/pull/93) [`70f4267`](https://github.com/commercetools/commercetools-sdk-typescript/commit/70f4267958268c3a6f592c8cd10190e7acf91316) Thanks [@emmenko](https://github.com/emmenko)! - Update development tooling and monorepo setup.

* [#105](https://github.com/commercetools/commercetools-sdk-typescript/pull/105) [`274baaf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/274baaf85d1cac0379842fea68315a8d28c87821) Thanks [@ajimae](https://github.com/ajimae)! - new sdk version release

- [#94](https://github.com/commercetools/commercetools-sdk-typescript/pull/94) [`01af929`](https://github.com/commercetools/commercetools-sdk-typescript/commit/01af9297a27ba1b9f423a723b9cf02b30fa1f73b) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.17.1

### Patch Changes

- [#91](https://github.com/commercetools/commercetools-sdk-typescript/pull/91) [`2bc967a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2bc967abcddad61cecbb4ab020048fb33cc35608) Thanks [@emmenko](https://github.com/emmenko)! - Update readme structure.
