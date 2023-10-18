**Api changes**

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `CustomerMessagePayload`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `ApprovalFlow`
- added type `ApprovalFlowApproval`
- added type `ApprovalFlowApproveAction`
- added type `ApprovalFlowPagedQueryResponse`
- added type `ApprovalFlowRejectAction`
- added type `ApprovalFlowRejection`
- added type `ApprovalFlowStatus`
- added type `ApprovalFlowUpdate`
- added type `ApprovalFlowUpdateAction`
- added type `ApprovalRule`
- added type `ApprovalRuleDraft`
- added type `ApprovalRulePagedQueryResponse`
- added type `ApprovalRuleSetApproversAction`
- added type `ApprovalRuleSetDescriptionAction`
- added type `ApprovalRuleSetKeyAction`
- added type `ApprovalRuleSetNameAction`
- added type `ApprovalRuleSetPredicateAction`
- added type `ApprovalRuleSetRequestersAction`
- added type `ApprovalRuleSetStatusAction`
- added type `ApprovalRuleStatus`
- added type `ApprovalRuleUpdate`
- added type `ApprovalRuleUpdateAction`
- added type `ApproverConjunction`
- added type `ApproverConjunctionDraft`
- added type `ApproverDisjunction`
- added type `ApproverDisjunctionDraft`
- added type `ApproverHierarchy`
- added type `ApproverHierarchyDraft`
- added type `RuleApprover`
- added type `RuleApproverDraft`
- added type `RuleRequester`
- added type `RuleRequesterDraft`
- added type `CartDiscountTotalPriceTarget`
- added type `DiscountOnTotalPrice`
- added type `DiscountedTotalPricePortion`
- added type `CustomerEmailTokenReference`
- added type `CustomerPasswordTokenReference`
- added type `ApprovalFlowApprovedMessage`
- added type `ApprovalFlowCompletedMessage`
- added type `ApprovalFlowCreatedMessage`
- added type `ApprovalFlowRejectedMessage`
- added type `ApprovalRuleApproversSetMessage`
- added type `ApprovalRuleCreatedMessage`
- added type `ApprovalRuleDescriptionSetMessage`
- added type `ApprovalRuleKeySetMessage`
- added type `ApprovalRuleNameSetMessage`
- added type `ApprovalRulePredicateSetMessage`
- added type `ApprovalRuleRequestersSetMessage`
- added type `ApprovalRuleStatusSetMessage`
- added type `BusinessUnitAddressCustomFieldAddedMessage`
- added type `BusinessUnitAddressCustomFieldChangedMessage`
- added type `BusinessUnitAddressCustomFieldRemovedMessage`
- added type `BusinessUnitAddressCustomTypeRemovedMessage`
- added type `BusinessUnitAddressCustomTypeSetMessage`
- added type `BusinessUnitCustomFieldAddedMessage`
- added type `BusinessUnitCustomFieldChangedMessage`
- added type `BusinessUnitCustomFieldRemovedMessage`
- added type `BusinessUnitCustomTypeRemovedMessage`
- added type `BusinessUnitCustomTypeSetMessage`
- added type `CustomerEmailTokenCreatedMessage`
- added type `CustomerGroupCustomFieldAddedMessage`
- added type `CustomerGroupCustomFieldChangedMessage`
- added type `CustomerGroupCustomFieldRemovedMessage`
- added type `CustomerGroupCustomTypeRemovedMessage`
- added type `CustomerGroupCustomTypeSetMessage`
- added type `CustomerPasswordTokenCreatedMessage`
- added type `ApprovalFlowApprovedMessagePayload`
- added type `ApprovalFlowCompletedMessagePayload`
- added type `ApprovalFlowCreatedMessagePayload`
- added type `ApprovalFlowRejectedMessagePayload`
- added type `ApprovalRuleApproversSetMessagePayload`
- added type `ApprovalRuleCreatedMessagePayload`
- added type `ApprovalRuleDescriptionSetMessagePayload`
- added type `ApprovalRuleKeySetMessagePayload`
- added type `ApprovalRuleNameSetMessagePayload`
- added type `ApprovalRulePredicateSetMessagePayload`
- added type `ApprovalRuleRequestersSetMessagePayload`
- added type `ApprovalRuleStatusSetMessagePayload`
- added type `BusinessUnitAddressCustomFieldAddedMessagePayload`
- added type `BusinessUnitAddressCustomFieldChangedMessagePayload`
- added type `BusinessUnitAddressCustomFieldRemovedMessagePayload`
- added type `BusinessUnitAddressCustomTypeRemovedMessagePayload`
- added type `BusinessUnitAddressCustomTypeSetMessagePayload`
- added type `BusinessUnitCustomFieldAddedMessagePayload`
- added type `BusinessUnitCustomFieldChangedMessagePayload`
- added type `BusinessUnitCustomFieldRemovedMessagePayload`
- added type `BusinessUnitCustomTypeRemovedMessagePayload`
- added type `BusinessUnitCustomTypeSetMessagePayload`
- added type `CustomerEmailTokenCreatedMessagePayload`
- added type `CustomerGroupCustomFieldAddedMessagePayload`
- added type `CustomerGroupCustomFieldChangedMessagePayload`
- added type `CustomerGroupCustomFieldRemovedMessagePayload`
- added type `CustomerGroupCustomTypeRemovedMessagePayload`
- added type `CustomerGroupCustomTypeSetMessagePayload`
- added type `CustomerPasswordTokenCreatedMessagePayload`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/{ID}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows/{ID}`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `CreateApprovalRules` to type `Permission`
- added enum `UpdateApprovalRules` to type `Permission`
- added enum `UpdateApprovalFlows` to type `Permission`
- added enum `customer-email-token` to type `ReferenceTypeId`
- added enum `customer-password-token` to type `ReferenceTypeId`
- added enum `customer-email-token` to type `MessageSubscriptionResourceTypeId`
- added enum `customer-group` to type `MessageSubscriptionResourceTypeId`
- added enum `customer-password-token` to type `MessageSubscriptionResourceTypeId`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().head()`
- added method `apiRoot.withProjectKey().associateRoles().head()`
- added method `apiRoot.withProjectKey().businessUnits().head()`
- added method `apiRoot.withProjectKey().categories().head()`
- added method `apiRoot.withProjectKey().carts().head()`
- added method `apiRoot.withProjectKey().cartDiscounts().head()`
- added method `apiRoot.withProjectKey().channels().head()`
- added method `apiRoot.withProjectKey().customers().head()`
- added method `apiRoot.withProjectKey().customerGroups().head()`
- added method `apiRoot.withProjectKey().customObjects().head()`
- added method `apiRoot.withProjectKey().discountCodes().head()`
- added method `apiRoot.withProjectKey().inventory().head()`
- added method `apiRoot.withProjectKey().messages().head()`
- added method `apiRoot.withProjectKey().orders().head()`
- added method `apiRoot.withProjectKey().payments().head()`
- added method `apiRoot.withProjectKey().productDiscounts().head()`
- added method `apiRoot.withProjectKey().productProjections().head()`
- added method `apiRoot.withProjectKey().productSelections().head()`
- added method `apiRoot.withProjectKey().quotes().head()`
- added method `apiRoot.withProjectKey().quoteRequests().head()`
- added method `apiRoot.withProjectKey().stagedQuotes().head()`
- added method `apiRoot.withProjectKey().reviews().head()`
- added method `apiRoot.withProjectKey().shippingMethods().head()`
- added method `apiRoot.withProjectKey().shoppingLists().head()`
- added method `apiRoot.withProjectKey().states().head()`
- added method `apiRoot.withProjectKey().subscriptions().head()`
- added method `apiRoot.withProjectKey().taxCategories().head()`
- added method `apiRoot.withProjectKey().types().head()`
- added method `apiRoot.withProjectKey().zones().head()`
- added method `apiRoot.withProjectKey().extensions().head()`
- added method `apiRoot.withProjectKey().apiClients().head()`
- added method `apiRoot.withProjectKey().stores().head()`
- added method `apiRoot.withProjectKey().standalonePrices().head()`
- added method `apiRoot.withProjectKey().attributeGroups().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withKey().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withId().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalFlows().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalFlows().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalFlows().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withOrderNumber().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withId().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withKey().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withId().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withKey().head()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withId().head()`
- added method `apiRoot.withProjectKey().associateRoles().withKey().head()`
- added method `apiRoot.withProjectKey().associateRoles().withId().head()`
- added method `apiRoot.withProjectKey().businessUnits().withKey().head()`
- added method `apiRoot.withProjectKey().businessUnits().withId().head()`
- added method `apiRoot.withProjectKey().categories().withKey().head()`
- added method `apiRoot.withProjectKey().categories().withId().head()`
- added method `apiRoot.withProjectKey().carts().withCustomerId().head()`
- added method `apiRoot.withProjectKey().carts().withKey().head()`
- added method `apiRoot.withProjectKey().carts().withId().head()`
- added method `apiRoot.withProjectKey().cartDiscounts().withKey().head()`
- added method `apiRoot.withProjectKey().cartDiscounts().withId().head()`
- added method `apiRoot.withProjectKey().channels().withId().head()`
- added method `apiRoot.withProjectKey().customers().withKey().head()`
- added method `apiRoot.withProjectKey().customers().withId().head()`
- added method `apiRoot.withProjectKey().customerGroups().withKey().head()`
- added method `apiRoot.withProjectKey().customerGroups().withId().head()`
- added method `apiRoot.withProjectKey().discountCodes().withId().head()`
- added method `apiRoot.withProjectKey().inventory().withId().head()`
- added method `apiRoot.withProjectKey().inventory().withKey().head()`
- added method `apiRoot.withProjectKey().messages().withId().head()`
- added method `apiRoot.withProjectKey().orders().withOrderNumber().head()`
- added method `apiRoot.withProjectKey().orders().edits().head()`
- added method `apiRoot.withProjectKey().orders().withId().head()`
- added method `apiRoot.withProjectKey().orders().edits().withKey().head()`
- added method `apiRoot.withProjectKey().orders().edits().withId().head()`
- added method `apiRoot.withProjectKey().payments().withKey().head()`
- added method `apiRoot.withProjectKey().payments().withId().head()`
- added method `apiRoot.withProjectKey().productDiscounts().withKey().head()`
- added method `apiRoot.withProjectKey().productDiscounts().withId().head()`
- added method `apiRoot.withProjectKey().productProjections().withKey().head()`
- added method `apiRoot.withProjectKey().productProjections().withId().head()`
- added method `apiRoot.withProjectKey().productSelections().withKey().head()`
- added method `apiRoot.withProjectKey().productSelections().withId().head()`
- added method `apiRoot.withProjectKey().quotes().withKey().head()`
- added method `apiRoot.withProjectKey().quotes().withId().head()`
- added method `apiRoot.withProjectKey().quoteRequests().withKey().head()`
- added method `apiRoot.withProjectKey().quoteRequests().withId().head()`
- added method `apiRoot.withProjectKey().stagedQuotes().withKey().head()`
- added method `apiRoot.withProjectKey().stagedQuotes().withId().head()`
- added method `apiRoot.withProjectKey().reviews().withKey().head()`
- added method `apiRoot.withProjectKey().reviews().withId().head()`
- added method `apiRoot.withProjectKey().shippingMethods().withKey().head()`
- added method `apiRoot.withProjectKey().shippingMethods().matchingCart().head()`
- added method `apiRoot.withProjectKey().shippingMethods().matchingCartLocation().head()`
- added method `apiRoot.withProjectKey().shippingMethods().matchingOrderedit().head()`
- added method `apiRoot.withProjectKey().shippingMethods().matchingLocation().head()`
- added method `apiRoot.withProjectKey().shippingMethods().withId().head()`
- added method `apiRoot.withProjectKey().shoppingLists().withKey().head()`
- added method `apiRoot.withProjectKey().shoppingLists().withId().head()`
- added method `apiRoot.withProjectKey().states().withKey().head()`
- added method `apiRoot.withProjectKey().states().withId().head()`
- added method `apiRoot.withProjectKey().subscriptions().withKey().head()`
- added method `apiRoot.withProjectKey().subscriptions().withId().head()`
- added method `apiRoot.withProjectKey().taxCategories().withKey().head()`
- added method `apiRoot.withProjectKey().taxCategories().withId().head()`
- added method `apiRoot.withProjectKey().types().withKey().head()`
- added method `apiRoot.withProjectKey().types().withId().head()`
- added method `apiRoot.withProjectKey().zones().withKey().head()`
- added method `apiRoot.withProjectKey().zones().withId().head()`
- added method `apiRoot.withProjectKey().me().activeCart().head()`
- added method `apiRoot.withProjectKey().me().businessUnits().head()`
- added method `apiRoot.withProjectKey().me().carts().head()`
- added method `apiRoot.withProjectKey().me().orders().head()`
- added method `apiRoot.withProjectKey().me().payments().head()`
- added method `apiRoot.withProjectKey().me().quoteRequests().head()`
- added method `apiRoot.withProjectKey().me().quotes().head()`
- added method `apiRoot.withProjectKey().me().shoppingLists().head()`
- added method `apiRoot.withProjectKey().me().businessUnits().withId().head()`
- added method `apiRoot.withProjectKey().me().businessUnits().withKey().head()`
- added method `apiRoot.withProjectKey().me().carts().withKey().head()`
- added method `apiRoot.withProjectKey().me().carts().withId().head()`
- added method `apiRoot.withProjectKey().me().orders().withId().head()`
- added method `apiRoot.withProjectKey().me().payments().withId().head()`
- added method `apiRoot.withProjectKey().me().quoteRequests().withId().head()`
- added method `apiRoot.withProjectKey().me().quoteRequests().withKey().head()`
- added method `apiRoot.withProjectKey().me().quotes().withId().head()`
- added method `apiRoot.withProjectKey().me().quotes().withKey().head()`
- added method `apiRoot.withProjectKey().me().shoppingLists().withId().head()`
- added method `apiRoot.withProjectKey().me().shoppingLists().withKey().head()`
- added method `apiRoot.withProjectKey().extensions().withKey().head()`
- added method `apiRoot.withProjectKey().extensions().withId().head()`
- added method `apiRoot.withProjectKey().apiClients().withId().head()`
- added method `apiRoot.withProjectKey().stores().withKey().head()`
- added method `apiRoot.withProjectKey().stores().withId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().customers().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().shoppingLists().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().withCustomerId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().withKey().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().withId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().withOrderNumber().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().orders().withId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().carts().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().orders().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().activeCart().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().shoppingLists().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().carts().withId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().orders().withId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().shoppingLists().withKey().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().me().shoppingLists().withId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().customers().withKey().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().customers().withId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().shippingMethods().matchingCart().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().shoppingLists().withKey().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().shoppingLists().withId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().productProjections().withKey().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().productProjections().withId().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().head()`
- added method `apiRoot.withProjectKey().standalonePrices().withKey().head()`
- added method `apiRoot.withProjectKey().standalonePrices().withId().head()`
- added method `apiRoot.withProjectKey().attributeGroups().withKey().head()`
- added method `apiRoot.withProjectKey().attributeGroups().withId().head()`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `discountOnTotalPrice` to type `Cart`
- added property `discountOnTotalPrice` to type `StagedOrder`
- added property `custom` to type `StagedOrderAddParcelToDeliveryAction`
- added property `discountOnTotalPrice` to type `Order`
- added property `custom` to type `OrderAddParcelToDeliveryAction`
</details>

**Import changes**

<details>
<summary>Added Property(s)</summary>

- added property `product` to type `ProductVariantPatch`
</details>

**History changes**

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `previousValue` of type `SetNameChange` from type `LocalizedString` to `string`
- :warning: changed property `nextValue` of type `SetNameChange` from type `LocalizedString` to `string`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `businessUnit` to type `Record`
</details>

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `businessUnit` to method `get /{projectKey}`
- added query parameter `businessUnit` to method `get /{projectKey}/{resourceType}`
- added query parameter `businessUnit` to method `get /{projectKey}/{resourceType}/{ID}`
</details>
