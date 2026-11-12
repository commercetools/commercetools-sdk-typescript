---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `AgentMissingCurrencyError`
- added type `AgentShoppingListUnresolvedError`
- added type `GraphQLAgentMissingCurrencyError`
- added type `GraphQLAgentShoppingListUnresolvedError`
- added type `CategoryAddStoreWithDescendantsAction`
- added type `CategoryRemoveStoreWithDescendantsAction`
- added type `CategorySetStoresWithDescendantsAction`
- added type `TooManyRequestsError`
- added type `GraphQLTooManyRequestsError`
- added type `RecurringOrderNowRequestedMessage`
- added type `RecurringOrderNowRequestedMessagePayload`
- added type `RecurrencePolicySetMinDaysBetweenOrdersAction`
- added type `RecurringOrderRequestOrderNowAction`
- added type `StoreSettingOngoingWarning`

</details>

<details>
<summary>Required Property(s)</summary>

- changed property `prompt` of type `AgentResponsesRequest` to be optional

</details>

<details>
<summary>Added Property(s)</summary>

- added property `shoppingList` to type `AgentResponsesPayload`
- added property `shoppingList` to type `AgentResponsesRequest`
- added property `warnings` to type `Category`
- added property `isPlatformClient` to type `ClientLogging`
- added property `isPlatformClient` to type `CreatedBy`
- added property `isPlatformClient` to type `LastModifiedBy`
- added property `minDaysBetweenOrders` to type `RecurrencePolicy`
- added property `minDaysBetweenOrders` to type `RecurrencePolicyDraft`

</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `count` of type `ReviewRatingStatistics` from type `integer` to `number`

</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `ProductEnrichmentAgent` to type `AttributionSource`

</details>
