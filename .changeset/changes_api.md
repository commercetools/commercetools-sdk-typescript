---
'@commercetools/platform-sdk': minor
---

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
