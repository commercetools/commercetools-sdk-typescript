**Import changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `product-selection` to type `ImportResourceType`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `retentionPolicy` to type `ImportContainer`
- added property `expiresAt` to type `ImportContainer`
- added property `retentionPolicy` to type `ImportContainerDraft`
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `country` of type `ExternalTaxRateDraft` from type `string` to `CountryCode`
- :warning: changed property `value` of type `MoneySetField` from type `Money[]` to `TypedMoney[]`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKeyValue().productSelections().importContainers().withImportContainerKeyValue().post()`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `StrategyEnum`
- added type `RetentionPolicy`
- added type `TimeToLiveConfig`
- added type `TimeToLiveRetentionPolicy`
- added type `ProductSelectionImportRequest`
- added type `VariantSelectionType`
- added type `VariantSelection`
- added type `VariantExclusion`
- added type `ProductSelectionAssignment`
- added type `ProductSelectionMode`
- added type `ProductSelectionImport`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/product-selections`
- added resource `/{projectKey}/product-selections/import-containers`
- added resource `/{projectKey}/product-selections/import-containers/{importContainerKey}`
</details>
