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

- added property `defaultShippingAddressId` to type `BusinessUnit`
- added property `defaultShippingAddress` to type `BusinessUnitDraft`
- added property `defaultShippingAddressId` to type `Company`
- added property `defaultShippingAddress` to type `CompanyDraft`
- added property `defaultShippingAddressId` to type `Division`
- added property `defaultShippingAddress` to type `DivisionDraft`
- added property `conflictingPrice` to type `DuplicatePriceScopeError`
- added property `defaultShippingAddress` to type `MyBusinessUnitDraft`
- added property `defaultShippingAddress` to type `MyCompanyDraft`
- added property `defaultShippingAddress` to type `MyDivisionDraft`
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

- :warning: removed property `defaultShipingAddressId` from type `BusinessUnit`
- :warning: removed property `defaultShipingAddress` from type `BusinessUnitDraft`
- :warning: removed property `defaultShipingAddressId` from type `Company`
- :warning: removed property `defaultShipingAddress` from type `CompanyDraft`
- :warning: removed property `defaultShipingAddressId` from type `Division`
- :warning: removed property `defaultShipingAddress` from type `DivisionDraft`
- :warning: removed property `conflictingPrices` from type `DuplicatePriceScopeError`
- :warning: removed property `defaultShipingAddress` from type `MyBusinessUnitDraft`
- :warning: removed property `defaultShipingAddress` from type `MyCompanyDraft`
- :warning: removed property `defaultShipingAddress` from type `MyDivisionDraft`
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
<summary>Deprecated Type(s)</summary>

- type `IronMqDestination` is removed
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().shippingMethods().matchingCartLocation().get()`
</details>

**ML changes**

<details>
<summary>Deprecated Method(s)</summary>

- method `post /{projectKey}/missing-data/attributes` is removed
- method `post /{projectKey}/missing-data/images` is removed
- method `post /{projectKey}/missing-data/prices` is removed
- method `get /{projectKey}/missing-data/attributes/status/{taskId}` is removed
- method `get /{projectKey}/missing-data/images/status/{taskId}` is removed
- method `get /{projectKey}/missing-data/prices/status/{taskId}` is removed
</details>

<details>
<summary>Deprecated Property(s)</summary>

- property `MissingAttributes::attributeCount` is removed
- property `MissingAttributes::attributeCoverage` is removed
- property `MissingAttributesMeta::productLevel` is removed
- property `MissingAttributesMeta::variantLevel` is removed
- property `MissingAttributesPagedQueryResult::meta` is removed
- property `MissingDataTaskStatus::result` is removed
- property `MissingImagesMeta::productLevel` is removed
- property `MissingImagesMeta::variantLevel` is removed
- property `MissingImagesPagedQueryResult::meta` is removed
- property `MissingImagesTaskStatus::result` is removed
- property `MissingPricesMeta::productLevel` is removed
- property `MissingPricesMeta::variantLevel` is removed
- property `MissingPricesPagedQueryResult::meta` is removed
- property `MissingPricesTaskStatus::result` is removed
</details>

<details>
<summary>Deprecated Resource(s)</summary>

- resource `/{projectKey}/missing-data` is removed
- resource `/{projectKey}/missing-data/attributes` is removed
- resource `/{projectKey}/missing-data/images` is removed
- resource `/{projectKey}/missing-data/prices` is removed
- resource `/{projectKey}/missing-data/attributes/status` is removed
- resource `/{projectKey}/missing-data/attributes/status/{taskId}` is removed
- resource `/{projectKey}/missing-data/images/status` is removed
- resource `/{projectKey}/missing-data/images/status/{taskId}` is removed
- resource `/{projectKey}/missing-data/prices/status` is removed
- resource `/{projectKey}/missing-data/prices/status/{taskId}` is removed
</details>

<details>
<summary>Deprecated Type(s)</summary>

- type `AttributeCount` is removed
- type `AttributeCoverage` is removed
- type `MissingAttributesDetails` is removed
- type `MissingAttributes` is removed
- type `MissingAttributesMeta` is removed
- type `MissingAttributesSearchRequest` is removed
- type `MissingAttributesPagedQueryResult` is removed
- type `MissingDataTaskStatus` is removed
- type `MissingImages` is removed
- type `MissingImagesCount` is removed
- type `MissingImagesProductLevel` is removed
- type `MissingImagesVariantLevel` is removed
- type `MissingImagesMeta` is removed
- type `MissingImagesSearchRequest` is removed
- type `MissingImagesPagedQueryResult` is removed
- type `MissingImagesTaskStatus` is removed
- type `MissingPrices` is removed
- type `MissingPricesProductCount` is removed
- type `MissingPricesProductLevel` is removed
- type `MissingPricesVariantLevel` is removed
- type `MissingPricesMeta` is removed
- type `MissingPricesSearchRequest` is removed
- type `MissingPricesPagedQueryResult` is removed
- type `MissingPricesTaskStatus` is removed
</details>
