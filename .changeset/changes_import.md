---
'@commercetools/importapi-sdk': minor
---

**Import changes**

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/product-tailorings`
- added resource `/{projectKey}/product-tailorings/import-containers`
- added resource `/{projectKey}/product-tailorings/import-containers/{importContainerKey}`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `product-tailoring` to type `ImportResourceType`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `ProductTailoringImportRequest`
- added type `ProductVariantTailoringImport`
- added type `ProductTailoringImport`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKeyValue().productTailorings().importContainers().withImportContainerKeyValue().post()`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `reservationExpirationInMinutes` to type `InventoryImport`
- added property `active` to type `StandalonePriceImport`
</details>
