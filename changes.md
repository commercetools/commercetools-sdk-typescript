**Api changes**

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/in-store/key={storeKey}/cart-discounts`
- added resource `/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}`
- added resource `/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `stores` to type `CartDiscount`
- added property `stores` to type `CartDiscountDraft`
- added property `key` to type `CustomLineItem`
- added property `key` to type `CustomLineItemDraft`
- added property `key` to type `CartAddCustomLineItemAction`
- added property `key` to type `StagedOrderAddCustomLineItemAction`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `CartDiscountAddStoreAction`
- added type `CartDiscountRemoveStoreAction`
- added type `CartDiscountSetStoresAction`
- added type `MaxCartDiscountsReachedError`
- added type `MaxStoreReferencesReachedError`
- added type `StoreCartDiscountsLimitReachedError`
- added type `GraphQLMaxCartDiscountsReachedError`
- added type `GraphQLMaxStoreReferencesReachedError`
- added type `GraphQLStoreCartDiscountsLimitReachedError`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().delete()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().delete()`
</details>
