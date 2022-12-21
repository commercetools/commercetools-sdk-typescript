**Api changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `Frozen` to type `CartState`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/shipping-methods/matching-cart-location`
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `amount` of type `Transaction` from type `TypedMoney` to `CentPrecisionMoney`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `conflictingPrice` to type `DuplicatePriceScopeError`
- added property `cartId` to type `MyQuoteRequestDraft`
- added property `cartVersion` to type `MyQuoteRequestDraft`
- added property `createdAt` to type `AssignedProductSelection`
- added property `quoteState` to type `Quote`
</details>

<details>
<summary>Required Property(s)</summary>

- changed property `discounted` of type `StagedStandalonePrice` to be optional
</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `conflictingPrices` from type `DuplicatePriceScopeError`
- :warning: removed property `cart` from type `MyQuoteRequestDraft`
- :warning: removed property `version` from type `MyQuoteRequestDraft`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `CartFreezeCartAction`
- added type `CartUnfreezeCartAction`
- added type `DuplicatePriceKeyError`
- added type `ProductPriceKeySetMessage`
- added type `ProductPricesSetMessage`
- added type `StandalonePriceKeySetMessage`
- added type `ProductPriceKeySetMessagePayload`
- added type `ProductPricesSetMessagePayload`
- added type `StandalonePriceKeySetMessagePayload`
- added type `ProductSetPriceKeyAction`
- added type `StandalonePriceSetKeyAction`
</details>

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `ProductPriceSetMessage`
- :warning: removed type `ProductPriceSetMessagePayload`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().shippingMethods().matchingCartLocation().get()`
</details>

**ML changes**

<details>
<summary>Deprecated Method(s)</summary>

- method `post /{projectKey}/missing-data/attributes` is deprecated
- method `post /{projectKey}/missing-data/images` is deprecated
- method `post /{projectKey}/missing-data/prices` is deprecated
- method `get /{projectKey}/missing-data/attributes/status/{taskId}` is deprecated
- method `get /{projectKey}/missing-data/images/status/{taskId}` is deprecated
- method `get /{projectKey}/missing-data/prices/status/{taskId}` is deprecated
</details>

<details>
<summary>Deprecated Property(s)</summary>

- property `MissingAttributes::attributeCount` is deprecated
- property `MissingAttributes::attributeCoverage` is deprecated
- property `MissingAttributesMeta::productLevel` is deprecated
- property `MissingAttributesMeta::variantLevel` is deprecated
- property `MissingAttributesPagedQueryResult::meta` is deprecated
- property `MissingDataTaskStatus::result` is deprecated
- property `MissingImagesMeta::productLevel` is deprecated
- property `MissingImagesMeta::variantLevel` is deprecated
- property `MissingImagesPagedQueryResult::meta` is deprecated
- property `MissingImagesTaskStatus::result` is deprecated
- property `MissingPricesMeta::productLevel` is deprecated
- property `MissingPricesMeta::variantLevel` is deprecated
- property `MissingPricesPagedQueryResult::meta` is deprecated
- property `MissingPricesTaskStatus::result` is deprecated
</details>

<details>
<summary>Deprecated Resource(s)</summary>

- resource `/{projectKey}/missing-data` is deprecated
- resource `/{projectKey}/missing-data/attributes` is deprecated
- resource `/{projectKey}/missing-data/images` is deprecated
- resource `/{projectKey}/missing-data/prices` is deprecated
- resource `/{projectKey}/missing-data/attributes/status` is deprecated
- resource `/{projectKey}/missing-data/attributes/status/{taskId}` is deprecated
- resource `/{projectKey}/missing-data/images/status` is deprecated
- resource `/{projectKey}/missing-data/images/status/{taskId}` is deprecated
- resource `/{projectKey}/missing-data/prices/status` is deprecated
- resource `/{projectKey}/missing-data/prices/status/{taskId}` is deprecated
</details>

<details>
<summary>Deprecated Type(s)</summary>

- type `AttributeCount` is deprecated
- type `AttributeCoverage` is deprecated
- type `MissingAttributesDetails` is deprecated
- type `MissingAttributes` is deprecated
- type `MissingAttributesMeta` is deprecated
- type `MissingAttributesSearchRequest` is deprecated
- type `MissingAttributesPagedQueryResult` is deprecated
- type `MissingDataTaskStatus` is deprecated
- type `MissingImages` is deprecated
- type `MissingImagesCount` is deprecated
- type `MissingImagesProductLevel` is deprecated
- type `MissingImagesVariantLevel` is deprecated
- type `MissingImagesMeta` is deprecated
- type `MissingImagesSearchRequest` is deprecated
- type `MissingImagesPagedQueryResult` is deprecated
- type `MissingImagesTaskStatus` is deprecated
- type `MissingPrices` is deprecated
- type `MissingPricesProductCount` is deprecated
- type `MissingPricesProductLevel` is deprecated
- type `MissingPricesVariantLevel` is deprecated
- type `MissingPricesMeta` is deprecated
- type `MissingPricesSearchRequest` is deprecated
- type `MissingPricesPagedQueryResult` is deprecated
- type `MissingPricesTaskStatus` is deprecated
</details>
