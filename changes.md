**Api changes**

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `value` of type `DirectDiscountDraft` from type `CartDiscountValue` to `CartDiscountValueDraft`
- :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessage` from type `Money` to `CentPrecisionMoney`
- :warning: changed property `value` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
- :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessage` from type `Money` to `TypedMoney`
- :warning: changed property `totalPrice` of type `OrderLineItemDiscountSetMessagePayload` from type `Money` to `CentPrecisionMoney`
- :warning: changed property `value` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
- :warning: changed property `oldValue` of type `StandalonePriceValueChangedMessagePayload` from type `Money` to `TypedMoney`
- :warning: changed property `price` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
- :warning: changed property `freeAbove` of type `ShippingRate` from type `TypedMoney` to `CentPrecisionMoney`
</details>

<details>
<summary>Required Property(s)</summary>

- changed property `stores` of type `BusinessUnit` to be optional
- changed property `stores` of type `Company` to be optional
- changed property `stores` of type `Division` to be optional
- changed property `isOnStock` of type `ProductVariantAvailability` to be optional
</details>

<details>
<summary>Added Type(s)</summary>

- added type `StagedOrderSetShippingCustomFieldAction`
- added type `StagedOrderSetShippingCustomTypeAction`
- added type `OrderSetShippingCustomFieldAction`
- added type `OrderSetShippingCustomTypeAction`
</details>
