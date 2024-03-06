**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `ProductTailoringCreatedMessage`
- added type `ProductTailoringDeletedMessage`
- added type `ProductTailoringDescriptionSetMessage`
- added type `ProductTailoringNameSetMessage`
- added type `ProductTailoringPublishedMessage`
- added type `ProductTailoringSlugSetMessage`
- added type `ProductTailoringUnpublishedMessage`
- added type `ProductTailoringCreatedMessagePayload`
- added type `ProductTailoringDeletedMessagePayload`
- added type `ProductTailoringDescriptionSetMessagePayload`
- added type `ProductTailoringNameSetMessagePayload`
- added type `ProductTailoringPublishedMessagePayload`
- added type `ProductTailoringSlugSetMessagePayload`
- added type `ProductTailoringUnpublishedMessagePayload`
- added type `ProductTailoring`
- added type `ProductTailoringData`
- added type `ProductTailoringDraft`
- added type `ProductTailoringInStoreDraft`
- added type `ProductTailoringPagedQueryResponse`
- added type `ProductTailoringReference`
- added type `ProductTailoringResourceIdentifier`
- added type `ProductTailoringUpdate`
- added type `ProductTailoringUpdateAction`
- added type `ProductTailoringPublishAction`
- added type `ProductTailoringSetDescriptionAction`
- added type `ProductTailoringSetMetaAttributesAction`
- added type `ProductTailoringSetMetaDescriptionAction`
- added type `ProductTailoringSetMetaKeywordsAction`
- added type `ProductTailoringSetMetaTitleAction`
- added type `ProductTailoringSetNameAction`
- added type `ProductTailoringSetSlugAction`
- added type `ProductTailoringUnpublishAction`
</details>

<details>
<summary>Required Property(s)</summary>

- :warning: changed property `isOnStock` of type `ProductVariantAvailability` to be required
</details>

<details>
<summary>Added Property(s)</summary>

- added property `id` to type `ProductVariantAvailability`
- added property `version` to type `ProductVariantAvailability`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().productTailoring().get()`
- added method `apiRoot.withProjectKey().productTailoring().post()`
- added method `apiRoot.withProjectKey().productTailoring().withKey().get()`
- added method `apiRoot.withProjectKey().productTailoring().withKey().post()`
- added method `apiRoot.withProjectKey().productTailoring().withKey().delete()`
- added method `apiRoot.withProjectKey().productTailoring().withId().get()`
- added method `apiRoot.withProjectKey().productTailoring().withId().post()`
- added method `apiRoot.withProjectKey().productTailoring().withId().delete()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().productTailoring().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().productTailoring().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductId().productTailoring().delete()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().products().withProductKey().productTailoring().delete()`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `product-tailoring` to type `ReferenceTypeId`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/product-tailoring`
- added resource `/{projectKey}/product-tailoring/key={key}`
- added resource `/{projectKey}/product-tailoring/{ID}`
- added resource `/{projectKey}/in-store/key={storeKey}/product-tailoring`
- added resource `/{projectKey}/in-store/key={storeKey}/products`
- added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}`
- added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}`
- added resource `/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring`
- added resource `/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring`
</details>
