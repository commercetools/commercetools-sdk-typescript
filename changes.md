**Api changes**

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

**Import changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `associate-role` to type `CustomFieldReferenceValue`
- added enum `business-unit` to type `CustomFieldReferenceValue`
</details>
