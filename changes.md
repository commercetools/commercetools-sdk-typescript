**Api changes**

<details>
<summary>Added Property(s)</summary>

- added property `attributedTo` to type `CreatedBy`
- added property `attributedTo` to type `LastModifiedBy`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `Attribution`
- added type `AttributionSource`
</details>

<details>
<summary>Removed Method(s)</summary>

- :warning: removed method `apiRoot.withProjectKey().products().search().head()`
</details>

**Import changes**

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/discount-codes`
- added resource `/{projectKey}/discount-codes/import-containers`
- added resource `/{projectKey}/discount-codes/import-containers/{importContainerKey}`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKeyValue().discountCodes().importContainers().withImportContainerKeyValue().post()`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `DiscountCodeImportRequest`
- added type `DiscountCodeImport`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `discount-code` to type `ImportResourceType`
</details>
