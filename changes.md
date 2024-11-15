**Api changes**

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

**Import changes**

<details>
<summary>Added Type(s)</summary>

- added type `InvalidFieldsUpdateError`
- added type `NewMasterVariantAdditionNotAllowedError`
- added type `ReferencedResourceNotFound`
</details>

<details>
<summary>Deprecated Property(s)</summary>

- property `PriceImport::publish` is removed
- property `ProductVariantImport::publish` is removed
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `customer-group` to type `CustomFieldReferenceValue`
</details>

**History changes**

<details>
<summary>Required Property(s)</summary>

- changed property `id` of type `ModifiedBy` to be optional
</details>
