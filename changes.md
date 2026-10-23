**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `CategoryAddStoreWithDescendantsAction`
- added type `CategoryRemoveStoreWithDescendantsAction`
- added type `CategorySetStoresWithDescendantsAction`
- added type `TooManyRequestsError`
- added type `GraphQLTooManyRequestsError`
- added type `RecurringOrderNowRequestedMessage`
- added type `RecurringOrderNowRequestedMessagePayload`
- added type `RecurrencePolicySetMinDaysBetweenOrdersAction`
- added type `RecurringOrderRequestOrderNowAction`
- added type `StoreSettingOngoingWarning`

</details>

<details>
<summary>Added Property(s)</summary>

- added property `warnings` to type `Category`
- added property `minDaysBetweenOrders` to type `RecurrencePolicy`
- added property `minDaysBetweenOrders` to type `RecurrencePolicyDraft`

</details>

**History changes**

<details>
<summary>Added Type(s)</summary>

- added type `ChangeSavedToLineItemChange`
- added type `SetMethodInfoCustomFieldChange`
- added type `SetMethodInfoCustomTypeChange`
- added type `SetMethodInfoInterfaceAccountChange`
- added type `SetMethodInfoTokenChange`

</details>

<details>
<summary>Added Property(s)</summary>

- added property `shippingKey` to type `AddDeliveryChange`
- added property `shippingKey` to type `AddParcelToDeliveryChange`
- added property `shippingKey` to type `RemoveDeliveryItemsChange`
- added property `shippingKey` to type `RemoveParcelFromDeliveryChange`
- added property `shippingKey` to type `SetDeliveryAddressChange`
- added property `shippingKey` to type `SetDeliveryItemsChange`
- added property `shippingKey` to type `SetParcelItemsChange`
- added property `shippingKey` to type `SetParcelMeasurementsChange`
- added property `shippingKey` to type `SetParcelTrackingDataChange`
- added property `shippingKey` to type `SetDeliveryAddressCustomFieldChange`
- added property `shippingKey` to type `SetDeliveryAddressCustomTypeChange`
- added property `shippingKey` to type `SetDeliveryCustomFieldChange`
- added property `shippingKey` to type `SetDeliveryCustomTypeChange`
- added property `shippingKey` to type `SetParcelCustomFieldChange`
- added property `shippingKey` to type `SetParcelCustomTypeChange`

</details>
