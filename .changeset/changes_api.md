---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `RecurringOrderDeletedMessage`
- added type `RecurringOrderDeletedMessagePayload`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().recurringOrders().withId().delete()`
- added method `apiRoot.withProjectKey().recurringOrders().withKey().delete()`
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `deleteDaysAfterLastModification` of type `CartDraft` from type `number` to `integer`
- :warning: changed property `deleteDaysAfterLastModification` of type `MyCartDraft` from type `number` to `integer`
- :warning: changed property `deleteDaysAfterLastModification` of type `MyShoppingListDraft` from type `number` to `integer`
- :warning: changed property `deleteDaysAfterLastModification` of type `MyShoppingListSetDeleteDaysAfterLastModificationAction` from type `number` to `integer`
- :warning: changed property `deleteDaysAfterLastModification` of type `CartsConfiguration` from type `number` to `integer`
- :warning: changed property `deleteDaysAfterLastModification` of type `ShoppingListsConfiguration` from type `number` to `integer`
- :warning: changed property `deleteDaysAfterLastModification` of type `ShoppingList` from type `number` to `integer`
- :warning: changed property `deleteDaysAfterLastModification` of type `ShoppingListDraft` from type `number` to `integer`
- :warning: changed property `deleteDaysAfterLastModification` of type `ShoppingListSetDeleteDaysAfterLastModificationAction` from type `number` to `integer`
</details>
