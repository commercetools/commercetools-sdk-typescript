**Api changes**

<details>
<summary>Required Property(s)</summary>

- changed property `variantSelection` of type `ProductSelectionProductAddedMessage` to be optional
- changed property `variantExclusion` of type `ProductSelectionProductExcludedMessage` to be optional
- changed property `oldVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessage` to be optional
- changed property `newVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessage` to be optional
- changed property `oldVariantSelection` of type `ProductSelectionVariantSelectionChangedMessage` to be optional
- changed property `newVariantSelection` of type `ProductSelectionVariantSelectionChangedMessage` to be optional
- changed property `variantSelection` of type `ProductSelectionProductAddedMessagePayload` to be optional
- changed property `variantExclusion` of type `ProductSelectionProductExcludedMessagePayload` to be optional
- changed property `oldVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessagePayload` to be optional
- changed property `newVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessagePayload` to be optional
- changed property `oldVariantSelection` of type `ProductSelectionVariantSelectionChangedMessagePayload` to be optional
- changed property `newVariantSelection` of type `ProductSelectionVariantSelectionChangedMessagePayload` to be optional
</details>

<details>
<summary>Added Property(s)</summary>

- added property `interfaceId` to type `MyTransactionDraft`
- added property `interfaceId` to type `Transaction`
- added property `interfaceId` to type `TransactionDraft`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `PaymentTransactionInterfaceIdSetMessage`
- added type `PaymentTransactionInterfaceIdSetMessagePayload`
- added type `PaymentSetTransactionInterfaceIdAction`
</details>
