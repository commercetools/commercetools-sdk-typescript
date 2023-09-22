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
- added type `ApprovalFlowRejectAction`
- added type `ApprovalFlowRejection`
- added type `ApprovalFlowStatus`
- added type `ApprovalFlowUpdate`
- added type `ApprovalFlowUpdateAction`
- added type `ApprovalRule`
- added type `ApprovalRuleDraft`
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
- added type `CustomerGroupCustomFieldAddedMessage`
- added type `CustomerGroupCustomFieldChangedMessage`
- added type `CustomerGroupCustomFieldRemovedMessage`
- added type `CustomerGroupCustomTypeRemovedMessage`
- added type `CustomerGroupCustomTypeSetMessage`
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
- added type `CustomerGroupCustomFieldAddedMessagePayload`
- added type `CustomerGroupCustomFieldChangedMessagePayload`
- added type `CustomerGroupCustomFieldRemovedMessagePayload`
- added type `CustomerGroupCustomTypeRemovedMessagePayload`
- added type `CustomerGroupCustomTypeSetMessagePayload`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `CreateApprovalRules` to type `Permission`
- added enum `UpdateApprovalRules` to type `Permission`
- added enum `UpdateApprovalFlows` to type `Permission`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalFlows().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withId().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withKey().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalRules().withKey().post()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalFlows().withId().get()`
- added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().approvalFlows().withId().post()`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `custom` to type `StagedOrderAddParcelToDeliveryAction`
- added property `custom` to type `OrderAddParcelToDeliveryAction`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/{ID}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/key={key}`
- added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows/{ID}`
</details>

**History changes**

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
