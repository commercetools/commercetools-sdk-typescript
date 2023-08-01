**Api changes**

<details>
<summary>Added Property(s)</summary>

- added property `customLineItemKey` to type `CartApplyDeltaToCustomLineItemShippingDetailsTargetsAction`
- added property `customLineItemKey` to type `CartChangeCustomLineItemMoneyAction`
- added property `customLineItemKey` to type `CartChangeCustomLineItemPriceModeAction`
- added property `customLineItemKey` to type `CartChangeCustomLineItemQuantityAction`
- added property `customLineItemKey` to type `CartRemoveCustomLineItemAction`
- added property `customLineItemKey` to type `CartSetCustomLineItemCustomFieldAction`
- added property `customLineItemKey` to type `CartSetCustomLineItemCustomTypeAction`
- added property `customLineItemKey` to type `CartSetCustomLineItemShippingDetailsAction`
- added property `customLineItemKey` to type `CartSetCustomLineItemTaxAmountAction`
- added property `customLineItemKey` to type `CartSetCustomLineItemTaxRateAction`
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
- added property `customLineItemKey` to type `StagedOrderSetCustomLineItemTaxRateAction`
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
- :warning: changed property `associateRoleAssignments` of type `AssociateDraft` to be required
- :warning: changed property `paymentState` of type `StagedOrderChangePaymentStateAction` to be required
- :warning: changed property `shipmentState` of type `StagedOrderChangeShipmentStateAction` to be required
- :warning: changed property `paymentState` of type `OrderChangePaymentStateAction` to be required
- :warning: changed property `shipmentState` of type `OrderChangeShipmentStateAction` to be required
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `money` of type `CartDiscountValueFixed` from type `CentPrecisionMoney[]` to `TypedMoney[]`
- :warning: changed property `money` of type `CartDiscountValueFixedDraft` from type `Money[]` to `TypedMoneyDraft[]`
- :warning: changed property `country` of type `StagedOrder` from type `string` to `CountryCode`
- :warning: changed property `locale` of type `StagedOrder` from type `string` to `Locale`
- :warning: changed property `country` of type `StagedOrderSetCountryAction` from type `string` to `CountryCode`
- :warning: changed property `locale` of type `StagedOrderSetLocaleAction` from type `string` to `Locale`
- :warning: changed property `country` of type `Order` from type `string` to `CountryCode`
- :warning: changed property `locale` of type `Order` from type `string` to `Locale`
- :warning: changed property `country` of type `OrderImportDraft` from type `string` to `CountryCode`
- :warning: changed property `locale` of type `OrderSetLocaleAction` from type `string` to `Locale`
</details>

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `where` to method `get /{projectKey}/in-store/key={storeKey}/product-selection-assignments`
- added query parameter `/^var[.][a-zA-Z0-9]+$/` to method `get /{projectKey}/in-store/key={storeKey}/product-selection-assignments`
</details>

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `BusinessUnitParentUnitChangedMessage`
- :warning: removed type `BusinessUnitParentUnitChangedMessagePayload`
- :warning: removed type `OrderResourceIdentifier`
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
<summary>Added Enum(s)</summary>

- added enum `associate-role` to type `ChangeSubscriptionResourceTypeId`
</details>

**Import changes**

<details>
<summary>Required Property(s)</summary>

- changed property `addresses` of type `CustomerImport` to be optional
- :warning: changed property `key` of type `PriceDraftImport` to be required
</details>

**History changes**

<details>
<summary>Added Type(s)</summary>

- added type `AddInheritedAssociateChange`
- added type `AssociateRoleLabel`
- added type `ChangeBuyerAssignableChange`
- added type `ChangeInheritedAssociateChange`
- added type `InheritedAssociate`
- added type `InheritedAssociateRoleAssignment`
- added type `Permission`
- added type `RemoveInheritedAssociateChange`
- added type `SetLocalizedNameChange`
- added type `SetPermissionsChange`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `associate-role` to type `ChangeHistoryResourceType`
</details>
