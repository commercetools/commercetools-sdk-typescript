---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `CartMergeMode`
- added type `MergeCartDraft`
- added type `AddressRole`
- added type `RecurringOrderFailureError`
- added type `GraphQLRecurringOrderFailureError`
- added type `CartFrozenMessage`
- added type `CartUnfrozenMessage`
- added type `CustomerBillingAddressAddedMessage`
- added type `CustomerBillingAddressRemovedMessage`
- added type `CustomerExternalIdSetMessage`
- added type `CustomerShippingAddressAddedMessage`
- added type `CustomerShippingAddressRemovedMessage`
- added type `OrderPaymentRemovedMessage`
- added type `RecurringOrderFailedMessage`
- added type `CartFrozenMessagePayload`
- added type `CartUnfrozenMessagePayload`
- added type `CustomerBillingAddressAddedMessagePayload`
- added type `CustomerBillingAddressRemovedMessagePayload`
- added type `CustomerExternalIdSetMessagePayload`
- added type `CustomerShippingAddressAddedMessagePayload`
- added type `CustomerShippingAddressRemovedMessagePayload`
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
<summary>Required Property(s)</summary>

- :warning: changed property `customerGroupAssignments` of type `CustomerGroupAssignmentsSetMessage` to be required
- :warning: changed property `customerGroupAssignments` of type `CustomerGroupAssignmentsSetMessagePayload` to be required
</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `payment` from type `OrderPaymentAddedMessage`
- :warning: removed property `payment` from type `OrderPaymentAddedMessagePayload`
- :warning: removed property `tierMinimumQuantity` from type `StandalonePriceRemovePriceTierAction`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `addressRoles` to type `BusinessUnitAddressChangedMessage`
- added property `addressRoles` to type `BusinessUnitAddressRemovedMessage`
- added property `addressRoles` to type `CustomerAddressChangedMessage`
- added property `addressRoles` to type `CustomerAddressRemovedMessage`
- added property `email` to type `CustomerDeletedMessage`
- added property `oldEmail` to type `CustomerEmailChangedMessage`
- added property `oldCustomerGroupAssignments` to type `CustomerGroupAssignmentsSetMessage`
- added property `sku` to type `InventoryEntryQuantitySetMessage`
- added property `paymentRef` to type `OrderPaymentAddedMessage`
- added property `addressRoles` to type `BusinessUnitAddressChangedMessagePayload`
- added property `addressRoles` to type `BusinessUnitAddressRemovedMessagePayload`
- added property `addressRoles` to type `CustomerAddressChangedMessagePayload`
- added property `addressRoles` to type `CustomerAddressRemovedMessagePayload`
- added property `email` to type `CustomerDeletedMessagePayload`
- added property `oldEmail` to type `CustomerEmailChangedMessagePayload`
- added property `oldCustomerGroupAssignments` to type `CustomerGroupAssignmentsSetMessagePayload`
- added property `sku` to type `InventoryEntryQuantitySetMessagePayload`
- added property `paymentRef` to type `OrderPaymentAddedMessagePayload`
- added property `minimumQuantity` to type `StandalonePriceRemovePriceTierAction`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/carts/customer-id={customerId}/merge`
- added resource `/{projectKey}/in-store/key={storeKey}/carts/customer-id={customerId}/merge`
</details>
