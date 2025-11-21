---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `CartMergeMode`
- added type `MergeCartDraft`
- added type `RecurringOrderFailureError`
- added type `GraphQLRecurringOrderFailureError`
- added type `CartFrozenMessage`
- added type `CartUnfrozenMessage`
- added type `OrderPaymentRemovedMessage`
- added type `RecurringOrderFailedMessage`
- added type `CartFrozenMessagePayload`
- added type `CartUnfrozenMessagePayload`
- added type `OrderPaymentRemovedMessagePayload`
- added type `RecurringOrderFailedMessagePayload`
</details>

<details>
<summary>Deprecated Type(s)</summary>

- type `ProductLegacySetSkuAction` is removed
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().carts().customerIdWithCustomerIdValueMerge().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().customerIdWithCustomerIdValueMerge().post()`
</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `payment` from type `OrderPaymentAddedMessage`
- :warning: removed property `payment` from type `OrderPaymentAddedMessagePayload`
- :warning: removed property `tierMinimumQuantity` from type `StandalonePriceRemovePriceTierAction`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `sku` to type `InventoryEntryQuantitySetMessage`
- added property `paymentRef` to type `OrderPaymentAddedMessage`
- added property `sku` to type `InventoryEntryQuantitySetMessagePayload`
- added property `paymentRef` to type `OrderPaymentAddedMessagePayload`
- added property `minimumQuantity` to type `StandalonePriceRemovePriceTierAction`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/carts/customer-id={customerId}/merge`
- added resource `/{projectKey}/in-store/key={storeKey}/carts/customer-id={customerId}/merge`
</details>
