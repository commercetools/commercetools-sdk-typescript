---
"@commercetools/history-sdk": patch
"@commercetools/importapi-sdk": patch
"@commercetools/platform-sdk": patch
---

Update generated SDKs

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
