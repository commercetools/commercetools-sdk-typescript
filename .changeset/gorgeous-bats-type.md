---
"@commercetools/platform-sdk": minor
---

**Api changes**

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
