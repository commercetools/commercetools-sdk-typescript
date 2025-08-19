---
'@commercetools/importapi-sdk': minor
---

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
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKeyValue().businessUnits().importContainers().withImportContainerKeyValue().post()`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/business-units`
- added resource `/{projectKey}/business-units/import-containers`
- added resource `/{projectKey}/business-units/import-containers/{importContainerKey}`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `business-unit` to type `ImportResourceType`
- added enum `associate-role` to type `ReferenceType`
- added enum `business-unit` to type `ReferenceType`
</details>
