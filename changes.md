**Api changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `ViewMyShoppingLists` to type `Permission`
- added enum `ViewOthersShoppingLists` to type `Permission`
- added enum `UpdateMyShoppingLists` to type `Permission`
- added enum `UpdateOthersShoppingLists` to type `Permission`
- added enum `CreateMyShoppingLists` to type `Permission`
- added enum `CreateOthersShoppingLists` to type `Permission`
- added enum `DeleteMyShoppingLists` to type `Permission`
- added enum `DeleteOthersShoppingLists` to type `Permission`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `OrderBusinessUnitSetMessage`
- added type `OrderBusinessUnitSetMessagePayload`
- added type `StagedOrderSetBusinessUnitAction`
- added type `OrderSetBusinessUnitAction`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/shopping-lists`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/shopping-lists/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/shopping-lists/{ID}`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withKey().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withKey().delete()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withId().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().shoppingLists().withId().delete()`
</details>
