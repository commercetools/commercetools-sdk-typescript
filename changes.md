**Api changes**

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/me/orders/quotes`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().me().orders().quotes().post()`
</details>

<details>
<summary>Changed Property(s)</summary>

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
</details>

<details>
<summary>Required Property(s)</summary>

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
</details>

<details>
<summary>Added Property(s)</summary>

- added property `shippingDetails` to type `CartAddCustomLineItemAction`
- added property `oldValue` to type `StandalonePriceValueChangedMessage`
- added property `oldValue` to type `StandalonePriceValueChangedMessagePayload`
- added property `purchaseOrderNumber` to type `StagedOrder`
- added property `purchaseOrderNumber` to type `Order`
- added property `purchaseOrderNumber` to type `OrderFromCartDraft`
- added property `purchaseOrderNumber` to type `QuoteRequest`
- added property `purchaseOrderNumber` to type `QuoteRequestDraft`
- added property `purchaseOrderNumber` to type `Quote`
- added property `purchaseOrderNumber` to type `StagedQuote`
</details>

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `CountryNotConfiguredInStore`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `CartSetBusinessUnitAction`
- added type `CountryNotConfiguredInStoreError`
- added type `GoogleCloudFunctionDestination`
- added type `MyOrderFromQuoteDraft`
- added type `MyCartSetBusinessUnitAction`
- added type `OrderPurchaseOrderNumberSetMessage`
- added type `OrderPurchaseOrderNumberSetMessagePayload`
- added type `StagedOrderSetPurchaseOrderNumberAction`
- added type `OrderSetPurchaseOrderNumberAction`
</details>

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `sort` to method `get /{projectKey}/product-selections/key={key}/products`
- added query parameter `sort` to method `get /{projectKey}/product-selections/{ID}/products`
- added query parameter `expand` to method `get /{projectKey}/in-store/key={storeKey}/me/active-cart`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `shipping` to type `ResourceTypeId`
</details>

**Import changes**

<details>
<summary>Required Property(s)</summary>

- changed property `password` of type `CustomerImport` to be optional
</details>

<details>
<summary>Added Property(s)</summary>

- added property `authenticationMode` to type `CustomerImport`
- added property `state` to type `OrderImport`
- added property `custom` to type `Address`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `AuthenticationMode`
</details>
