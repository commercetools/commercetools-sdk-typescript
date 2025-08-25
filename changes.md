**Api changes**

<details>
<summary>Added Property(s)</summary>

- added property `minCartQuantity` to type `InventoryEntry`
- added property `maxCartQuantity` to type `InventoryEntry`
- added property `minCartQuantity` to type `InventoryEntryDraft`
- added property `maxCartQuantity` to type `InventoryEntryDraft`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `InventoryEntrySetInventoryLimitsAction`
- added type `CustomerDefaultBillingAddressSetMessage`
- added type `CustomerDefaultShippingAddressSetMessage`
- added type `CustomerStoresSetMessage`
- added type `CustomerDefaultBillingAddressSetMessagePayload`
- added type `CustomerDefaultShippingAddressSetMessagePayload`
- added type `CustomerStoresSetMessagePayload`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().recurrencePolicies().withKey().delete()`
- added method `apiRoot.withProjectKey().recurrencePolicies().withId().delete()`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `discount-group` to type `ChangeSubscriptionResourceTypeId`
</details>

**Import changes**

<details>
<summary>Added Type(s)</summary>

- added type `AssociateRoleKeyReference`
- added type `BusinessUnitKeyReference`
- added type `BusinessUnitImportRequest`
- added type `AssociateRoleInheritanceMode`
- added type `BusinessUnitStatus`
- added type `BusinessUnitAssociateMode`
- added type `BusinessUnitApprovalRuleMode`
- added type `BusinessUnitStoreMode`
- added type `BusinessUnitType`
- added type `AssociateRoleAssignmentDraft`
- added type `AssociateDraft`
- added type `BusinessUnitImport`
- added type `CompanyBusinessUnitImport`
- added type `DivisionBusinessUnitImport`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/business-units`
- added resource `/{projectKey}/business-units/import-containers`
- added resource `/{projectKey}/business-units/import-containers/{importContainerKey}`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKeyValue().businessUnits().importContainers().withImportContainerKeyValue().post()`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `business-unit` to type `ImportResourceType`
- added enum `associate-role` to type `ReferenceType`
- added enum `business-unit` to type `ReferenceType`
</details>
