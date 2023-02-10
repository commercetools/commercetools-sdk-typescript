# @commercetools/importapi-sdk

## 4.2.0

### Minor Changes

- [#411](https://github.com/commercetools/commercetools-sdk-typescript/pull/411) [`393f1f9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/393f1f95359890673eb947682c76ab3ca9a290f0) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  ## Changes

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
  <summary>Removed Type(s)</summary>

  - :warning: removed type `ProductPriceSetMessage`
  - :warning: removed type `ProductPriceSetMessagePayload`
  </details>

  <details>
  <summary>Deprecated Type(s)</summary>

  - type `IronMqDestination` is removed
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
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/shipping-methods/matching-cart-location`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().shippingMethods().matchingCartLocation().get()`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `Frozen` to type `CartState`
  </details>

  **ML changes**

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
  <summary>Deprecated Method(s)</summary>

  - method `post /{projectKey}/missing-data/attributes` is removed
  - method `post /{projectKey}/missing-data/images` is removed
  - method `post /{projectKey}/missing-data/prices` is removed
  - method `get /{projectKey}/missing-data/attributes/status/{taskId}` is removed
  - method `get /{projectKey}/missing-data/images/status/{taskId}` is removed
  - method `get /{projectKey}/missing-data/prices/status/{taskId}` is removed

### Patch Changes

- Updated dependencies [[`caca661`](https://github.com/commercetools/commercetools-sdk-typescript/commit/caca661ff4c91cf256b6ee406135a45478b7ae47)]:
  - @commercetools/sdk-client-v2@2.1.2

## 4.1.0

### Minor Changes

- [#351](https://github.com/commercetools/commercetools-sdk-typescript/pull/351) [`9c93a8e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9c93a8e92b4d523d6661567f7571f115a527b039) Thanks [@ajimae](https://github.com/ajimae)! - Update packages

  Update the `history-sdk` `DateStringFilter`, `ChangeHistoryResourceType`, `Source` and `PlatformInitiatedChange` etc. models to include a `string` type

  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-cc2fe178ca6b6be224a1703faedb4addb5aeaba6e8fed5c5fb8aa83e6b89c15c)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-d209024497a25bf47b1328575261874e3b3838708b200c576e9136881d7c2fc5)

  Add builder class and method for [`standalone-prices`](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-6c227c775a135e83a3177890fb075a57a36aca5e54585ddd12800e2fc8c868d0) for `importapi-sdk`

  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-4194831274c991aa860b804aa0e4ef37607f3648ce4b5bd1fa485fb368563414)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-cf4d4d593249abe6c99086f76491a0bd251573cde0f78291d38c12db533955e9)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-9b983bcf9b8f15645d6c0c5395b43046a37915b6269f8f1f0d113c625661b61e)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-cab14530d8df4ee940fea751e4e5afa1b36a94b92ee1360e641f46696fc3f21b)

  Update the `importapi-sdk` `MoneyType`, `ReferenceType`, `ProcessingState`, `ImportOperationState` `ProductPriceModeEnum` etc models to include a `string` type

  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-4a12dd49a3bd4416087368cf7d2adad860849ada79c1744ae27ddae67c299c43)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-098b1027a5d008b85d503e4fbfd1a7ae1c47a138e1d8fb82c7ac9ee1ea94de3f)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-66168b247234ab499100b349ea788dfc0bad6c5275d5cf7541088083cd4ad47f)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-ac6b2ee896a8ab4c39857df35774f59713a50c547a6e7cecfe6924547381cd96)

  Add class and builder methods for
  `ByProjectKeyBusinessUnitsByIDRequestBuilder`,
  `ByProjectKeyBusinessUnitsRequestBuilder`,
  `ByProjectKeyMeBusinessUnitsKeyByKeyRequestBuilder`,
  `ByProjectKeyMeBusinessUnitsRequestBuilder`,
  `ByProjectKeyBusinessUnitsKeyByKeyRequestBuilder`
  `ByProjectKeyInBusinessUnitKeyByBusinessUnitKeyMeCustomersRequestBuilder`,
  `ByProjectKeyInBusinessUnitKeyByBusinessUnitKeyMeRequestBuilder`,
  `ByProjectKeyInBusinessUnitKeyByBusinessUnitKeyRequestBuilder`
  in the `platform-sdk`

  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-cb753c87b292658be2da42c7548c3ffcad89550d99d5a433bae77b06b1e8dde8)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-61da76483d06d79e65e755f43ce8f1c8b06b62af3dd310cdeac4cac8583c9457)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-427e08314427fc8efa3e4466403eb7ad961482b0ebbfd71a65ad513b1e62d93c)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-f7e56705a0ede866385bed01616ec49604dc9921092e9c8ad8c3dc435c7f7706)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-8104137d8ff7613e73e02d11a26f3086884e2b135467f8c2d56b25e9719781c3)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-d2d796eb7f7a440dba06bc3f71f12fb9ffbfbd0ba86161a7b77eab7a62d89fb4)
  [Diff](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files#diff-c008d9ee3cd715df487ab0ebb7ce332cf31804ac533a2598e6808bf73f057b9e)

  Complete changes can be found [here](https://github.com/commercetools/commercetools-sdk-typescript/pull/346/files)

### Patch Changes

- Updated dependencies [[`f0e84dd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f0e84ddb2e34b908385a380175c6da596db6817a)]:
  - @commercetools/sdk-client-v2@2.0.1

## 4.0.0

### Major Changes

- [#341](https://github.com/commercetools/commercetools-sdk-typescript/pull/341) [`385682f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/385682fef6f0efa39a51570434d4d11789e0a220) Thanks [@ajimae](https://github.com/ajimae)! - Upgrade node versions to 14 and set engine to >= 14

### Patch Changes

- Updated dependencies [[`385682f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/385682fef6f0efa39a51570434d4d11789e0a220)]:
  - @commercetools/sdk-client-v2@2.0.0

## 3.0.1

### Patch Changes

- [#303](https://github.com/commercetools/commercetools-sdk-typescript/pull/303) [`2bc0f73`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2bc0f73d946eebb954bec8849c8697cd716ef848) Thanks [@github-actions](https://github.com/apps/github-actions)! - - Update generated SDKs
  - Updated changes for generated SDKs
    - add expand property to active-cart get endpoint.
- Updated dependencies [[`d921acd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d921acda35dadf135dffb53419b8825c915477b1), [`588a0f9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/588a0f9b981a538a16a23a449e810c56956f352c), [`7510e0b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7510e0bf69cc4b63c43d0431d338502d048524aa)]:
  - @commercetools/sdk-client-v2@1.4.1

## 3.0.0

### Major Changes

- [#291](https://github.com/commercetools/commercetools-sdk-typescript/pull/291) [`cde61f4`](https://github.com/commercetools/commercetools-sdk-typescript/commit/cde61f45563970ca1648496198268976e4f83d8e) Thanks [@github-actions](https://github.com/apps/github-actions)! - ### History API

  - add support for quotes
  - add support for authentication mode
  - add product selection support

  ### Import API

  - add support for inventory imports
  - remove import sink endpoints

  ### Platform API

  - add support for quotes
  - fix localeProjection query parameter type
  - add missing query parameters to product selection assigment
  - add HEAD request to product types
  - add DeliveryDraft model
  - removed deprecated fields from Payment models

## 2.5.1

### Patch Changes

- [#258](https://github.com/commercetools/commercetools-sdk-typescript/pull/258) [`ba52d38`](https://github.com/commercetools/commercetools-sdk-typescript/commit/ba52d38a0a00299de61f554ae753cfb984401d79) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  - add support for Standalone Prices

* [#266](https://github.com/commercetools/commercetools-sdk-typescript/pull/266) [`fd29fa7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fd29fa759f906040d76a889c2d3fbfbdf2ac6617) Thanks [@github-actions](https://github.com/apps/github-actions)! - Platform SDK updates:

  - Fix /me/email/confirm arguments and return type (https://github.com/commercetools/commercetools-sdk-typescript/issues/274)

## 2.5.0

### Minor Changes

- [#257](https://github.com/commercetools/commercetools-sdk-typescript/pull/257) [`facc47b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/facc47ba50b00056adc232d7c75a2849cdcc6689) Thanks [@ajimae](https://github.com/ajimae)! - release latest sdk

### Patch Changes

- Updated dependencies [[`facc47b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/facc47ba50b00056adc232d7c75a2849cdcc6689), [`7512c3f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7512c3f1f488645da3952f296d4f4fe3149b7fba)]:
  - @commercetools/sdk-client-v2@1.4.0

## 2.4.0

### Minor Changes

- [#241](https://github.com/commercetools/commercetools-sdk-typescript/pull/241) [`85f5be3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/85f5be349a9b0fa46539259981bfd8d5fc2ffdc6) Thanks [@ajimae](https://github.com/ajimae)! - Releasing the TS SDK with the following changelogs

  - added functionalities to extend client user agent
  - custom field added to OrderFromCardDraft

### Patch Changes

- Updated dependencies [[`85f5be3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/85f5be349a9b0fa46539259981bfd8d5fc2ffdc6)]:
  - @commercetools/sdk-client-v2@1.3.0

## 2.3.0

### Minor Changes

- [#211](https://github.com/commercetools/commercetools-sdk-typescript/pull/211) [`f3c1e3e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f3c1e3ea0ca000b309eca1de6163c3ad065d526f) Thanks [@jherey](https://github.com/jherey)! - - Change Import Summaries `processingState` to `processingstate`.
  - Add `sort` to `ByProjectKeyShippingMethodsMatchingLocationRequestBuilder`.
  - New `MyCustomerResetPassword` model added to `ByProjectKeyMePasswordResetRequestBuilder` class.
  - Other changes are detailed here: https://github.com/commercetools/commercetools-sdk-typescript/pull/192/files.

### Patch Changes

- Updated dependencies [[`f3c1e3e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f3c1e3ea0ca000b309eca1de6163c3ad065d526f)]:
  - @commercetools/sdk-client-v2@1.2.0

## 2.2.0

### Minor Changes

- [#188](https://github.com/commercetools/commercetools-sdk-typescript/pull/188) [`4c2d9b6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4c2d9b64b204200dffbeb18130239138dd2ad7d3) Thanks [@ajimae](https://github.com/ajimae)! - February package release

### Patch Changes

- [#149](https://github.com/commercetools/commercetools-sdk-typescript/pull/149) [`08caea9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/08caea93560c01e2158f018538b7a2b9f4be39c1) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

- Updated dependencies [[`08caea9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/08caea93560c01e2158f018538b7a2b9f4be39c1), [`4c2d9b6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4c2d9b64b204200dffbeb18130239138dd2ad7d3)]:
  - @commercetools/sdk-client-v2@1.1.0

## 2.1.1

### Patch Changes

- [#165](https://github.com/commercetools/commercetools-sdk-typescript/pull/165) [`1b305a1`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1b305a18602f6daceab31d7691f5b0239db2ad23) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 2.1.0

### Minor Changes

- [#148](https://github.com/commercetools/commercetools-sdk-typescript/pull/148) [`0281529`](https://github.com/commercetools/commercetools-sdk-typescript/commit/028152987cd191db2458e5b327ff275a1e6cb36e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

### Patch Changes

- Updated dependencies [[`fcd35a0`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fcd35a0f26b2780d0004c4e9d7b48233a86c2453)]:
  - @commercetools/sdk-client-v2@1.0.1

## 2.0.1

### Patch Changes

- [#161](https://github.com/commercetools/commercetools-sdk-typescript/pull/161) [`f28520f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f28520f8caa16f8203a3790e354ffc3cffc43068) Thanks [@ajimae](https://github.com/ajimae)! - Restructure dependencies, remove sdk-client-v2 from devDependencies into dependencies.

## 2.0.0

### Major Changes

- [#154](https://github.com/commercetools/commercetools-sdk-typescript/pull/154) [`25f1dea`](https://github.com/commercetools/commercetools-sdk-typescript/commit/25f1dea23eccdfdda01e9144ec2afe968ead58f2) Thanks [@jherey](https://github.com/jherey)! - This is the first major release of the sdk client

## 1.21.0

### Minor Changes

- [#146](https://github.com/commercetools/commercetools-sdk-typescript/pull/146) [`1f6f830`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1f6f830bb25d98c15ac96e06635c5e2aa07fe1e8) Thanks [@ajimae](https://github.com/ajimae)! - release a new version of typescript

### Patch Changes

- [#137](https://github.com/commercetools/commercetools-sdk-typescript/pull/137) [`f119f8a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f119f8a26255790a6faf3667e07b500497a08c21) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.20.0

### Minor Changes

- [#120](https://github.com/commercetools/commercetools-sdk-typescript/pull/120) [`4d01dba`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4d01dbac9cfe38faaa0a11d3154a016759856772) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

### Patch Changes

- [#114](https://github.com/commercetools/commercetools-sdk-typescript/pull/114) [`c93148c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c93148cbe222ba89d0aca5ceb113de208015c0e0) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.19.0

### Minor Changes

- [#108](https://github.com/commercetools/commercetools-sdk-typescript/pull/108) [`026d91a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/026d91a747b445b0913eabb7eb91ecc7f3eb257e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

* [#110](https://github.com/commercetools/commercetools-sdk-typescript/pull/110) [`44173ff`](https://github.com/commercetools/commercetools-sdk-typescript/commit/44173ffde761420d04af6a2d03a845737eec9f82) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.18.0

### Minor Changes

- [#93](https://github.com/commercetools/commercetools-sdk-typescript/pull/93) [`70f4267`](https://github.com/commercetools/commercetools-sdk-typescript/commit/70f4267958268c3a6f592c8cd10190e7acf91316) Thanks [@emmenko](https://github.com/emmenko)! - Update development tooling and monorepo setup.

* [#105](https://github.com/commercetools/commercetools-sdk-typescript/pull/105) [`274baaf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/274baaf85d1cac0379842fea68315a8d28c87821) Thanks [@ajimae](https://github.com/ajimae)! - new sdk version release

### Patch Changes

- [#94](https://github.com/commercetools/commercetools-sdk-typescript/pull/94) [`01af929`](https://github.com/commercetools/commercetools-sdk-typescript/commit/01af9297a27ba1b9f423a723b9cf02b30fa1f73b) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.17.1

### Patch Changes

- [#91](https://github.com/commercetools/commercetools-sdk-typescript/pull/91) [`2bc967a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2bc967abcddad61cecbb4ab020048fb33cc35608) Thanks [@emmenko](https://github.com/emmenko)! - Update readme structure.
