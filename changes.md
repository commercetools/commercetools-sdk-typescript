**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `OverlappingPriceValidityError`
- added type `GraphQLOverlappingPriceValidityError`

</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/in-store/key={storeKey}/discount-codes`
- added resource `/{projectKey}/in-store/key={storeKey}/discount-codes/key={key}`
- added resource `/{projectKey}/in-store/key={storeKey}/discount-codes/{ID}`

</details>

<details>
<summary>Added Property(s)</summary>

- added property `stores` to type `DiscountCode`

</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().withKey().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().withKey().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().withId().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().discountCodes().withId().head()`

</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `variant` to type `AttributeReferenceTypeId`
- added enum `variant` to type `CustomFieldReferenceValue`

</details>

**History changes**

<details>
<summary>Required Property(s)</summary>

- changed property `total` of type `RecordPagedQueryResponse` to be optional

</details>

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `withTotal` to method `get /{projectKey}`
- added query parameter `withTotal` to method `get /{projectKey}/{resourceType}`
- added query parameter `withTotal` to method `get /{projectKey}/{resourceType}/{ID}`

</details>
