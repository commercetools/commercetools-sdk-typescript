**Api changes**

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

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `/[0-9].[0-9]*[1-9]/` from type `CategoryOrderHints`
- :warning: removed property `//` from type `ProductVariantChannelAvailabilityMap`
- :warning: removed property `messages` from type `SubscriptionSetEventsAction`
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
<summary>Added Property(s)</summary>

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
<summary>Added Enum(s)</summary>

- added enum `ApplicationStoppedByGroupBestDeal` to type `DiscountCodeState`
- added enum `discount-group` to type `ReferenceTypeId`
- added enum `payment-method` to type `ReferenceTypeId`
- added enum `payment-method` to type `ExtensionResourceTypeId`
</details>

**Import changes**

<details>
<summary>Added Type(s)</summary>

- added type `AttributeLevel`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `attributes` to type `ProductImport`
- added property `attributes` to type `ProductDraftImport`
- added property `level` to type `AttributeDefinition`
</details>

**History changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `ApplicationStoppedByGroupBestDeal` to type `DiscountCodeState`
- added enum `payment-method` to type `ReferenceTypeId`
</details>
