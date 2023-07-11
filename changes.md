**Api changes**

<details>
<summary>Added Property(s)</summary>

- added property `directDiscounts` to type `StagedOrder`
- added property `shippingDetails` to type `StagedOrderAddCustomLineItemAction`
- added property `inventoryMode` to type `StagedOrderAddLineItemAction`
- added property `directDiscounts` to type `Order`
</details>

<details>
<summary>Required Property(s)</summary>

- :warning: changed property `paymentState` of type `StagedOrderChangePaymentStateAction` to be required
- :warning: changed property `shipmentState` of type `StagedOrderChangeShipmentStateAction` to be required
- :warning: changed property `paymentState` of type `OrderChangePaymentStateAction` to be required
- :warning: changed property `shipmentState` of type `OrderChangeShipmentStateAction` to be required
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `country` of type `StagedOrder` from type `string` to `CountryCode`
- :warning: changed property `locale` of type `StagedOrder` from type `string` to `Locale`
- :warning: changed property `country` of type `StagedOrderSetCountryAction` from type `string` to `CountryCode`
- :warning: changed property `locale` of type `StagedOrderSetLocaleAction` from type `string` to `Locale`
- :warning: changed property `country` of type `Order` from type `string` to `CountryCode`
- :warning: changed property `locale` of type `Order` from type `string` to `Locale`
- :warning: changed property `locale` of type `OrderSetLocaleAction` from type `string` to `Locale`
</details>

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `where` to method `get /{projectKey}/in-store/key={storeKey}/product-selection-assignments`
- added query parameter `/^var[.][a-zA-Z0-9]+$/` to method `get /{projectKey}/in-store/key={storeKey}/product-selection-assignments`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `StagedOrderSetDirectDiscountsAction`
- added type `StagedOrderSetStoreAction`
</details>
