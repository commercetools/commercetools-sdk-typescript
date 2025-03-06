---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `BusinessUnitAssociateResponse`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/business-units/key={key}/associates/{associateId}`
- added resource `/{projectKey}/business-units/{businessUnitId}/associates/{associateId}`
- added resource `/{projectKey}/in-store/key={storeKey}/business-units/key={key}/associates/{associateId}`
- added resource `/{projectKey}/in-store/key={storeKey}/business-units/{businessUnitId}/associates/{associateId}`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().businessUnits().keyWithKeyValueAssociatesWithAssociateIdValue().get()`
- added method `apiRoot.withProjectKey().businessUnits().withBusinessUnitIdValueAssociatesWithAssociateIdValue().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().keyWithKeyValueAssociatesWithAssociateIdValue().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withBusinessUnitIdValueAssociatesWithAssociateIdValue().get()`
</details>

<details>
<summary>MarkDeprecated Property(s)</summary>

- marked property `CountOnCustomLineItemUnits::excludeCount` as deprecated
- marked property `CountOnLineItemUnits::excludeCount` as deprecated
</details>
