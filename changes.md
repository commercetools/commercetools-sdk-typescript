**Api changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `Frozen` to type `CartState` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/cart/CartState.raml:9:4)
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `amount` of type `Transaction` from type `TypedMoney` to `CentPrecisionMoney` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/payment/Transaction.raml:18:2)
</details>

<details>
<summary>Added Property(s)</summary>

- added property `conflictingPrice` to type `DuplicatePriceScopeError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/DuplicatePriceScopeError.raml:16:2)
- added property `createdAt` to type `AssignedProductSelection` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/product-selection/AssignedProductSelection.raml:12:2)
</details>

<details>
<summary>Required Property(s)</summary>

- changed property `discounted` of type `StagedStandalonePrice` to be optional (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/standalone-price/StagedStandalonePrice.raml:12:2)
</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `conflictingPrices` from type `DuplicatePriceScopeError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/error/DuplicatePriceScopeError.raml:16:2)
</details>

<details>
<summary>Added Type(s)</summary>

- added type `CartFreezeCartAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:178:0)
- added type `CartUnfreezeCartAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:229:0)
- added type `DuplicatePriceKeyError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:424:0)
- added type `ProductPriceKeySetMessage` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:755:0)
- added type `ProductPricesSetMessage` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:758:0)
- added type `StandalonePriceKeySetMessage` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:796:0)
- added type `ProductPriceKeySetMessagePayload` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:916:0)
- added type `ProductPricesSetMessagePayload` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:919:0)
- added type `StandalonePriceKeySetMessagePayload` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:960:0)
- added type `ProductSetPriceKeyAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:1421:0)
- added type `StandalonePriceSetKeyAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:1611:0)
</details>

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `ProductPriceSetMessage` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/types.raml:754:0)
- :warning: removed type `ProductPriceSetMessagePayload` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/types.raml:913:0)
</details>

**ML changes**

<details>
<summary>Deprecated Method(s)</summary>

- method `post /{projectKey}/missing-data/attributes` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:6:2)
- method `post /{projectKey}/missing-data/images` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:40:2)
- method `post /{projectKey}/missing-data/prices` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:74:2)
- method `get /{projectKey}/missing-data/attributes/status/{taskId}` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:28:6)
- method `get /{projectKey}/missing-data/images/status/{taskId}` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:62:6)
- method `get /{projectKey}/missing-data/prices/status/{taskId}` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:96:6)
- resource `/{projectKey}/missing-data` is deprecated (file:///home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/api.raml:30:2)
- resource `/{projectKey}/missing-data/attributes` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:3:0)
- resource `/{projectKey}/missing-data/images` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:37:0)
- resource `/{projectKey}/missing-data/prices` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:71:0)
- resource `/{projectKey}/missing-data/attributes/status` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:18:2)
- resource `/{projectKey}/missing-data/attributes/status/{taskId}` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:21:4)
- resource `/{projectKey}/missing-data/images/status` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:52:2)
- resource `/{projectKey}/missing-data/images/status/{taskId}` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:55:4)
- resource `/{projectKey}/missing-data/prices/status` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:86:2)
- resource `/{projectKey}/missing-data/prices/status/{taskId}` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/resources/missing-data.raml:89:4)
</details>

<details>
<summary>Deprecated Type(s)</summary>

- type `AttributeCount` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:9:2)
- type `AttributeCoverage` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:26:2)
- type `MissingAttributesDetails` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:44:2)
- type `MissingAttributes` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:61:2)
- type `MissingAttributesMeta` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:88:2)
- type `MissingAttributesSearchRequest` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:100:2)
- type `MissingAttributesPagedQueryResult` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:165:2)
- type `MissingDataTaskStatus` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:185:2)
- type `MissingImages` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:203:2)
- type `MissingImagesCount` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:217:2)
- type `MissingImagesProductLevel` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:229:2)
- type `MissingImagesVariantLevel` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:243:2)
- type `MissingImagesMeta` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:257:2)
- type `MissingImagesSearchRequest` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:270:2)
- type `MissingImagesPagedQueryResult` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:322:2)
- type `MissingImagesTaskStatus` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:341:2)
- type `MissingPrices` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:360:2)
- type `MissingPricesProductCount` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:369:2)
- type `MissingPricesProductLevel` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:379:2)
- type `MissingPricesVariantLevel` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:393:2)
- type `MissingPricesMeta` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:406:2)
- type `MissingPricesSearchRequest` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:413:2)
- type `MissingPricesPagedQueryResult` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:476:2)
- type `MissingPricesTaskStatus` is deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/ml/types/missing-data.raml:495:2)
</details>
