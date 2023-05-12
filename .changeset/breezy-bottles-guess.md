---
'@commercetools/history-sdk': minor
'@commercetools/importapi-sdk': minor
'@commercetools/ml-sdk': minor
'@commercetools/platform-sdk': minor
---

## Update generated SDKs

**Api changes**

<details>
<summary>Changed Type(s)</summary>

- :warning: changed type `AssociateRole` from type `string` to `BaseResource`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `AssociateRoleDraft`
- added type `AssociateRoleKeyReference`
- added type `AssociateRolePagedQueryResponse`
- added type `AssociateRoleReference`
- added type `AssociateRoleResourceIdentifier`
- added type `AssociateRoleUpdate`
- added type `AssociateRoleUpdateAction`
- added type `Permission`
- added type `AssociateRoleAddPermissionAction`
- added type `AssociateRoleChangeBuyerAssignableAction`
- added type `AssociateRoleRemovePermissionAction`
- added type `AssociateRoleSetCustomFieldAction`
- added type `AssociateRoleSetCustomTypeAction`
- added type `AssociateRoleSetNameAction`
- added type `AssociateRoleSetPermissionsAction`
- added type `AssociateRoleAssignment`
- added type `AssociateRoleAssignmentDraft`
- added type `AssociateRoleDeprecated`
- added type `AssociateRoleInheritanceMode`
- added type `BusinessUnitAssociateMode`
- added type `InheritedAssociate`
- added type `InheritedAssociateRoleAssignment`
- added type `BusinessUnitChangeAssociateModeAction`
- added type `AssociateMissingPermissionError`
- added type `GraphQLAssociateMissingPermissionError`
- added type `AssociateRoleBuyerAssignableChangedMessage`
- added type `AssociateRoleCreatedMessage`
- added type `AssociateRoleDeletedMessage`
- added type `AssociateRoleNameChangedMessage`
- added type `AssociateRolePermissionAddedMessage`
- added type `AssociateRolePermissionRemovedMessage`
- added type `AssociateRolePermissionsSetMessage`
- added type `BusinessUnitAssociateModeChangedMessage`
- added type `AssociateRoleBuyerAssignableChangedMessagePayload`
- added type `AssociateRoleCreatedMessagePayload`
- added type `AssociateRoleDeletedMessagePayload`
- added type `AssociateRoleNameChangedMessagePayload`
- added type `AssociateRolePermissionAddedMessagePayload`
- added type `AssociateRolePermissionRemovedMessagePayload`
- added type `AssociateRolePermissionsSetMessagePayload`
- added type `BusinessUnitAssociateModeChangedMessagePayload`
- added type `ProjectSetBusinessUnitAssociateRoleOnCreationAction`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `associate-role` to type `ReferenceTypeId`
- added enum `associate-role` to type `MessageSubscriptionResourceTypeId`
- added enum `associate-role` to type `ResourceTypeId`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `associateRoleAssignments` to type `Associate`
- added property `associateRoleAssignments` to type `AssociateDraft`
- added property `associateMode` to type `BusinessUnit`
- added property `inheritedAssociates` to type `BusinessUnit`
- added property `associateMode` to type `BusinessUnitDraft`
- added property `associateMode` to type `Company`
- added property `inheritedAssociates` to type `Company`
- added property `associateMode` to type `CompanyDraft`
- added property `associateMode` to type `Division`
- added property `inheritedAssociates` to type `Division`
- added property `associateMode` to type `DivisionDraft`
- added property `myBusinessUnitAssociateRoleOnCreation` to type `BusinessUnitConfiguration`
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `roles` of type `Associate` from type `AssociateRole[]` to `AssociateRoleDeprecated[]`
- :warning: changed property `roles` of type `AssociateDraft` from type `AssociateRole[]` to `AssociateRoleDeprecated[]`
</details>

<details>
<summary>MarkDeprecated Property(s)</summary>

- marked property `Associate::roles` as deprecated
- marked property `AssociateDraft::roles` as deprecated
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/as-associate`
- added resource `/{projectKey}/associate-roles`
- added resource `/{projectKey}/as-associate/{associateId}`
- added resource `/{projectKey}/as-associate/{associateId}/business-units`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}`
- added resource `/{projectKey}/as-associate/{associateId}/business-units/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/business-units/{ID}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/quotes`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/order-number={orderNumber}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/{ID}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/{ID}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/{ID}`
- added resource `/{projectKey}/associate-roles/key={key}`
- added resource `/{projectKey}/associate-roles/{ID}`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().associateRoles().get()`
- added method `apiRoot.withProjectKey().associateRoles().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().delete()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().delete()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().orderQuote().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withOrderNumber().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withOrderNumber().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withId().post()`
- added method `apiRoot.withProjectKey().associateRoles().withKey().get()`
- added method `apiRoot.withProjectKey().associateRoles().withKey().post()`
- added method `apiRoot.withProjectKey().associateRoles().withKey().delete()`
- added method `apiRoot.withProjectKey().associateRoles().withId().get()`
- added method `apiRoot.withProjectKey().associateRoles().withId().post()`
- added method `apiRoot.withProjectKey().associateRoles().withId().delete()`
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
