---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().discountCodes().withKey().get()`
- added method `apiRoot.withProjectKey().discountCodes().withKey().head()`
- added method `apiRoot.withProjectKey().discountCodes().withKey().post()`
- added method `apiRoot.withProjectKey().discountCodes().withKey().delete()`
</details>

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `NotEnabledError`
- :warning: removed type `GraphQLNotEnabledError`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `ApprovalFlowSetCustomFieldAction`
- added type `ApprovalFlowSetCustomTypeAction`
- added type `DiscountCodeSetKeyAction`
- added type `CartDiscountCreatedMessage`
- added type `CartDiscountDeletedMessage`
- added type `CartDiscountStoreAddedMessage`
- added type `CartDiscountStoreRemovedMessage`
- added type `CartDiscountStoresSetMessage`
- added type `DiscountCodeCreatedMessage`
- added type `DiscountCodeDeletedMessage`
- added type `DiscountCodeKeySetMessage`
- added type `CartDiscountCreatedMessagePayload`
- added type `CartDiscountDeletedMessagePayload`
- added type `CartDiscountStoreAddedMessagePayload`
- added type `CartDiscountStoreRemovedMessagePayload`
- added type `CartDiscountStoresSetMessagePayload`
- added type `DiscountCodeCreatedMessagePayload`
- added type `DiscountCodeDeletedMessagePayload`
- added type `DiscountCodeKeySetMessagePayload`
</details>

<details>
<summary>Changed MethodResponseBody(s)</summary>

- :warning: changed response body for `200: application/json` of method `get /{projectKey}/in-store/key={storeKey}/cart-discounts` from type `CartDiscount` to `CartDiscountPagedQueryResponse`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `associate-role` to type `AttributeReferenceTypeId`
- added enum `business-unit` to type `AttributeReferenceTypeId`
- added enum `cart-discount` to type `AttributeReferenceTypeId`
- added enum `approval-flow` to type `CustomFieldReferenceValue`
- added enum `approval-flow` to type `ResourceTypeId`
</details>

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `expand` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `sort` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `limit` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `offset` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `withTotal` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `where` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `/^var[.][a-zA-Z0-9]+$/` to method `get /{projectKey}/in-store/key={storeKey}/cart-discounts`
- added query parameter `expand` to method `post /{projectKey}/in-store/key={storeKey}/cart-discounts`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `custom` to type `ApprovalFlow`
- added property `perMethodExternalTaxRate` to type `CartAddLineItemAction`
- added property `key` to type `DiscountCode`
- added property `key` to type `DiscountCodeDraft`
- added property `shippingMode` to type `MyCartDraft`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/discount-codes/key={key}`
</details>
