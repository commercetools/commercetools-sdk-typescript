---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `BusinessUnitAddCustomerGroupAssignmentAction`
- added type `BusinessUnitRemoveCustomerGroupAssignmentAction`
- added type `BusinessUnitSetCustomerGroupAssignmentsAction`
- added type `CartLock`
- added type `CartMergeMode`
- added type `MergeCartDraft`
- added type `CartLockCartAction`
- added type `CartSetPurchaseOrderNumberAction`
- added type `CartUnlockCartAction`
- added type `AddressRole`
- added type `RecurringOrderFailureError`
- added type `GraphQLRecurringOrderFailureError`
- added type `BusinessUnitCustomerGroupAssignmentAddedMessage`
- added type `BusinessUnitCustomerGroupAssignmentRemovedMessage`
- added type `BusinessUnitCustomerGroupAssignmentsSetMessage`
- added type `CartFrozenMessage`
- added type `CartPurchaseOrderNumberSetMessage`
- added type `CartUnfrozenMessage`
- added type `CustomerBillingAddressAddedMessage`
- added type `CustomerBillingAddressRemovedMessage`
- added type `CustomerExternalIdSetMessage`
- added type `CustomerShippingAddressAddedMessage`
- added type `CustomerShippingAddressRemovedMessage`
- added type `OrderPaymentRemovedMessage`
- added type `RecurringOrderFailedMessage`
- added type `BusinessUnitCustomerGroupAssignmentAddedMessagePayload`
- added type `BusinessUnitCustomerGroupAssignmentRemovedMessagePayload`
- added type `BusinessUnitCustomerGroupAssignmentsSetMessagePayload`
- added type `CartFrozenMessagePayload`
- added type `CartPurchaseOrderNumberSetMessagePayload`
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
<summary>MarkDeprecated Type(s)</summary>

- marked type `ProductSearchProjectionParams` as deprecated
</details>

<details>
<summary>Deprecated Type(s)</summary>

- type `ProductLegacySetSkuAction` is removed
</details>

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `MyCartSetCustomLineItemRecurrenceInfoAction`
- :warning: removed type `MyCartSetLineItemRecurrenceInfoAction`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `payment-method` to type `ResourceTypeId`
- added enum `payment-method-info` to type `ResourceTypeId`
</details>

<details>
<summary>MarkDeprecated Property(s)</summary>

- marked property `ProductSearchRequest::productProjectionParameters` as deprecated
- marked property `ProductSearchResult::productProjection` as deprecated
</details>

<details>
<summary>Required Property(s)</summary>

- :warning: changed property `shippingAddressIds` of type `BusinessUnit` to be required
- :warning: changed property `billingAddressIds` of type `BusinessUnit` to be required
- :warning: changed property `shippingAddressIds` of type `Company` to be required
- :warning: changed property `billingAddressIds` of type `Company` to be required
- :warning: changed property `shippingAddressIds` of type `Division` to be required
- :warning: changed property `billingAddressIds` of type `Division` to be required
- :warning: changed property `shippingAddressIds` of type `Customer` to be required
- :warning: changed property `billingAddressIds` of type `Customer` to be required
- :warning: changed property `customerGroupAssignments` of type `Customer` to be required
- :warning: changed property `customerGroupAssignments` of type `CustomerGroupAssignmentsSetMessage` to be required
- :warning: changed property `customerGroupAssignments` of type `CustomerGroupAssignmentsSetMessagePayload` to be required
</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `payment` from type `OrderPaymentAddedMessage`
- :warning: removed property `order` from type `RecurringOrderCreatedMessage`
- :warning: removed property `payment` from type `OrderPaymentAddedMessagePayload`
- :warning: removed property `order` from type `RecurringOrderCreatedMessagePayload`
- :warning: removed property `tierMinimumQuantity` from type `StandalonePriceRemovePriceTierAction`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `customerGroupAssignments` to type `BusinessUnit`
- added property `customerGroupAssignments` to type `BusinessUnitDraft`
- added property `customerGroupAssignments` to type `Company`
- added property `customerGroupAssignments` to type `CompanyDraft`
- added property `customerGroupAssignments` to type `Division`
- added property `customerGroupAssignments` to type `DivisionDraft`
- added property `lock` to type `Cart`
- added property `purchaseOrderNumber` to type `Cart`
- added property `purchaseOrderNumber` to type `CartDraft`
- added property `addressRoles` to type `BusinessUnitAddressChangedMessage`
- added property `addressRoles` to type `BusinessUnitAddressRemovedMessage`
- added property `addressRoles` to type `CustomerAddressChangedMessage`
- added property `addressRoles` to type `CustomerAddressRemovedMessage`
- added property `email` to type `CustomerDeletedMessage`
- added property `oldEmail` to type `CustomerEmailChangedMessage`
- added property `oldCustomerGroupAssignments` to type `CustomerGroupAssignmentsSetMessage`
- added property `sku` to type `InventoryEntryQuantitySetMessage`
- added property `paymentRef` to type `OrderPaymentAddedMessage`
- added property `recurringOrder` to type `RecurringOrderCreatedMessage`
- added property `addressRoles` to type `BusinessUnitAddressChangedMessagePayload`
- added property `addressRoles` to type `BusinessUnitAddressRemovedMessagePayload`
- added property `addressRoles` to type `CustomerAddressChangedMessagePayload`
- added property `addressRoles` to type `CustomerAddressRemovedMessagePayload`
- added property `email` to type `CustomerDeletedMessagePayload`
- added property `oldEmail` to type `CustomerEmailChangedMessagePayload`
- added property `oldCustomerGroupAssignments` to type `CustomerGroupAssignmentsSetMessagePayload`
- added property `sku` to type `InventoryEntryQuantitySetMessagePayload`
- added property `paymentRef` to type `OrderPaymentAddedMessagePayload`
- added property `recurringOrder` to type `RecurringOrderCreatedMessagePayload`
- added property `minimumQuantity` to type `StandalonePriceRemovePriceTierAction`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().carts().customerIdWithCustomerIdValueMerge().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().customerIdWithCustomerIdValueMerge().post()`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/carts/customer-id={customerId}/merge`
- added resource `/{projectKey}/in-store/key={storeKey}/carts/customer-id={customerId}/merge`
</details>
