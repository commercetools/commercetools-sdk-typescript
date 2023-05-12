**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `AssociateMissingPermissionError`
- added type `GraphQLAssociateMissingPermissionError`
</details>

**Import changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `type` to type `ImportResourceType`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/types`
- added resource `/{projectKey}/types/import-containers`
- added resource `/{projectKey}/types/import-containers/{importContainerKey}`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKeyValue().types().importContainers().withImportContainerKeyValue().post()`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `TypeImportRequest`
- added type `TypeTextInputHint`
- added type `ResourceTypeId`
- added type `FieldType`
- added type `CustomFieldBooleanType`
- added type `CustomFieldDateTimeType`
- added type `CustomFieldDateType`
- added type `CustomFieldEnumType`
- added type `CustomFieldEnumValue`
- added type `CustomFieldLocalizedEnumType`
- added type `CustomFieldLocalizedEnumValue`
- added type `CustomFieldLocalizedStringType`
- added type `CustomFieldMoneyType`
- added type `CustomFieldNumberType`
- added type `CustomFieldReferenceType`
- added type `CustomFieldReferenceValue`
- added type `CustomFieldSetType`
- added type `CustomFieldStringType`
- added type `CustomFieldTimeType`
- added type `FieldDefinition`
- added type `TypeImport`
</details>

**History changes**

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `resourceTypes` to method `get /{projectKey}`
</details>

<details>
<summary>Removed QueryParameter(s)</summary>

- :warning: removed query parameter `resourceType` from method `get /{projectKey}`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `SetCountriesChange`
- added type `SetPurchaseOrderNumberChange`
- added type `StoreCountry`
</details>
