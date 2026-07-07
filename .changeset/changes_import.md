---
'@commercetools/importapi-sdk': minor
---

**Import changes**

<details>
<summary>Added Type(s)</summary>

- added type `VariantImportRequest`
- added type `VariantImport`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/variants`
- added resource `/{projectKey}/variants/import-containers`
- added resource `/{projectKey}/variants/import-containers/{importContainerKey}`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKeyValue().variants().importContainers().withImportContainerKeyValue().post()`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `variant` to type `ImportResourceType`
- added enum `variant` to type `ReferenceType`
</details>
