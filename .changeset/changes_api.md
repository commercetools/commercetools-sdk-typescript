---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/in-store/key={storeKey}/business-units`
- added resource `/{projectKey}/in-store/key={storeKey}/business-units/key={key}`
- added resource `/{projectKey}/in-store/key={storeKey}/business-units/{ID}`
</details>

<details>
<summary>Required Property(s)</summary>

- :warning: changed property `triggerPattern` of type `CartDiscountPatternTarget` to be required
</details>

<details>
<summary>Added Property(s)</summary>

- added property `inheritedStores` to type `BusinessUnit`
- added property `inheritedStores` to type `Company`
- added property `inheritedStores` to type `Division`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withKey().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withKey().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withKey().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withKey().delete()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withId().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withId().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().businessUnits().withId().delete()`
</details>
