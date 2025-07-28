**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `RecurringOrderDeletedMessage`
- added type `RecurringOrderExpiresAtSetMessage`
- added type `RecurringOrderDeletedMessagePayload`
- added type `RecurringOrderExpiresAtSetMessagePayload`
- added type `RecurringOrderSetExpiresAtAction`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().recurringOrders().withId().delete()`
- added method `apiRoot.withProjectKey().recurringOrders().withKey().delete()`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `expiresAt` to type `RecurringOrderDraft`
</details>

**History changes**

<details>
<summary>Added Type(s)</summary>

- added type `TooManyRequestsError`
- added type `GraphQLTooManyRequestsError`
- added type `GraphQLErrorObject`
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `extensions` of type `GraphQLError` from type `object` to `GraphQLErrorObject`
</details>
