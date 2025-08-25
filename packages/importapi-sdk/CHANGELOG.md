# @commercetools/importapi-sdk

## 6.7.0

### Minor Changes

- [#1151](https://github.com/commercetools/commercetools-sdk-typescript/pull/1151) [`55ba0ac`](https://github.com/commercetools/commercetools-sdk-typescript/commit/55ba0acd11fbd95b56bb75c93a7310850a95b4b8) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `AssociateRoleKeyReference`
  - added type `BusinessUnitKeyReference`
  - added type `BusinessUnitImportRequest`
  - added type `AssociateRoleInheritanceMode`
  - added type `BusinessUnitStatus`
  - added type `BusinessUnitAssociateMode`
  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitStoreMode`
  - added type `BusinessUnitType`
  - added type `AssociateRoleAssignmentDraft`
  - added type `AssociateDraft`
  - added type `BusinessUnitImport`
  - added type `CompanyBusinessUnitImport`
  - added type `DivisionBusinessUnitImport`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/business-units`
  - added resource `/{projectKey}/business-units/import-containers`
  - added resource `/{projectKey}/business-units/import-containers/{importContainerKey}`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKeyValue().businessUnits().importContainers().withImportContainerKeyValue().post()`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `business-unit` to type `ImportResourceType`
  - added enum `associate-role` to type `ReferenceType`
  - added enum `business-unit` to type `ReferenceType`
  </details>

### Patch Changes

- Updated dependencies [[`0a6ea36`](https://github.com/commercetools/commercetools-sdk-typescript/commit/0a6ea364b2acd57d5e517ca21511de5f77bca6f0)]:
  - @commercetools/ts-client@4.2.1

## 6.6.0

### Minor Changes

- [#1140](https://github.com/commercetools/commercetools-sdk-typescript/pull/1140) [`7c8b972`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7c8b9720037996099ebed2c8b1f72d1bc480a894) Thanks [@ajimae](https://github.com/ajimae)! - Update and unify common type definitions

## 6.5.0

### Minor Changes

- [#1123](https://github.com/commercetools/commercetools-sdk-typescript/pull/1123) [`0bf8af3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/0bf8af3f386de0bed5878754a79bd6cdf769d9b5) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `product-selection` to type `ImportResourceType`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `retentionPolicy` to type `ImportContainer`
  - added property `expiresAt` to type `ImportContainer`
  - added property `retentionPolicy` to type `ImportContainerDraft`
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `country` of type `ExternalTaxRateDraft` from type `string` to `CountryCode`
  - :warning: changed property `value` of type `MoneySetField` from type `Money[]` to `TypedMoney[]`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKeyValue().productSelections().importContainers().withImportContainerKeyValue().post()`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `StrategyEnum`
  - added type `RetentionPolicy`
  - added type `TimeToLiveConfig`
  - added type `TimeToLiveRetentionPolicy`
  - added type `ProductSelectionImportRequest`
  - added type `VariantSelectionType`
  - added type `VariantSelection`
  - added type `VariantExclusion`
  - added type `ProductSelectionAssignment`
  - added type `ProductSelectionMode`
  - added type `ProductSelectionImport`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/product-selections`
  - added resource `/{projectKey}/product-selections/import-containers`
  - added resource `/{projectKey}/product-selections/import-containers/{importContainerKey}`
  </details>

### Patch Changes

- Updated dependencies [[`98415e1`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98415e159e68fc59d7fcdb11cd406e9995fa4430)]:
  - @commercetools/ts-client@4.0.0

## 6.4.0

### Minor Changes

- [#1109](https://github.com/commercetools/commercetools-sdk-typescript/pull/1109) [`b889bbc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b889bbcf39372e615da220632755c8e105e58bae) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `attributes` to type `ProductImport`
  - added property `attributes` to type `ProductDraftImport`
  - added property `level` to type `AttributeDefinition`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `AttributeLevel`
  </details>

## 6.3.0

### Minor Changes

- [#1074](https://github.com/commercetools/commercetools-sdk-typescript/pull/1074) [`7aabe1f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7aabe1f5e5d74682d2e95a18db0a1bb6c3ed69ed) Thanks [@ajimae](https://github.com/ajimae)! - new sdk release

### Patch Changes

- Updated dependencies [[`7aabe1f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7aabe1f5e5d74682d2e95a18db0a1bb6c3ed69ed)]:
  - @commercetools/ts-client@3.4.0

## 6.2.0

### Minor Changes

- [#1064](https://github.com/commercetools/commercetools-sdk-typescript/pull/1064) [`eaaad59`](https://github.com/commercetools/commercetools-sdk-typescript/commit/eaaad59b073929feed42adcfc72035fc36d66632) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `/^[a-zA-Z]{2,3}(?:-[a-zA-Z]{4})?(?:-(?:[a-zA-Z]{2}|\d{3}))?$/` to type `SearchKeywords`
  - added property `/^[a-zA-Z]{2,3}(?:-[a-zA-Z]{4})?(?:-(?:[a-zA-Z]{2}|\d{3}))?$/` to type `LocalizedString`
  </details>

  <details>
  <summary>Removed Property(s)</summary>

  - :warning: removed property `/^[a-z]{2}(-[A-Z]{2})?$/` from type `SearchKeywords`
  - :warning: removed property `/^[a-z]{2}(-[A-Z]{2})?$/` from type `LocalizedString`
  </details>

### Patch Changes

- Updated dependencies [[`3d61678`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3d61678549f5a77690b330fac0b28012acbfbfb0)]:
  - @commercetools/ts-client@3.3.1

## 6.1.1

### Patch Changes

- [#961](https://github.com/commercetools/commercetools-sdk-typescript/pull/961) [`28f0578`](https://github.com/commercetools/commercetools-sdk-typescript/commit/28f057841fcfd26b30ff41167dc88ada3c143371) Thanks [@ajimae](https://github.com/ajimae)! - Release changes for type modification

## 6.1.0

### Minor Changes

- [#936](https://github.com/commercetools/commercetools-sdk-typescript/pull/936) [`f702837`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f702837c3ec7fde11641c94abb5ed4dab138acf9) Thanks [@barbara79](https://github.com/barbara79)! - updated documentation with client v3

## 6.0.0

### Major Changes

- [#896](https://github.com/commercetools/commercetools-sdk-typescript/pull/896) [`f9b8cb6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f9b8cb605d99fe5ece13bdc3c152eb4818e19b3b) Thanks [@lojzatran](https://github.com/lojzatran)! - Remove support of nodejs 16

### Patch Changes

- Updated dependencies [[`f9b8cb6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f9b8cb605d99fe5ece13bdc3c152eb4818e19b3b)]:
  - @commercetools/sdk-client-v2@3.0.0

## 5.20.0

### Minor Changes

- [#891](https://github.com/commercetools/commercetools-sdk-typescript/pull/891) [`4a003ca`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4a003ca0f870ec7edb63d21e8fb2932b602fb876) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `NewMasterVariantAdditionNotAllowedError`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.19.0

### Minor Changes

- [#890](https://github.com/commercetools/commercetools-sdk-typescript/pull/890) [`9da41f4`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9da41f4118c60009eed56f64d833432d9c0c5403) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `NewMasterVariantAdditionNotAllowedError`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.18.0

### Minor Changes

- [#878](https://github.com/commercetools/commercetools-sdk-typescript/pull/878) [`90ece88`](https://github.com/commercetools/commercetools-sdk-typescript/commit/90ece88d52bc1ff7d01c070bb9e548dd46eb2cda) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `NewMasterVariantAdditionNotAllowedError`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.17.0

### Minor Changes

- [#865](https://github.com/commercetools/commercetools-sdk-typescript/pull/865) [`15e3913`](https://github.com/commercetools/commercetools-sdk-typescript/commit/15e3913bb9625e664ca7ecb13e4932c293ffc32b) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `NewMasterVariantAdditionNotAllowedError`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.16.0

### Minor Changes

- [#853](https://github.com/commercetools/commercetools-sdk-typescript/pull/853) [`74f1c30`](https://github.com/commercetools/commercetools-sdk-typescript/commit/74f1c302b68aa741accfcf101138520c4488191e) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `NewMasterVariantAdditionNotAllowedError`
  - added type `ReferencedResourceNotFound`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.15.0

### Minor Changes

- [#844](https://github.com/commercetools/commercetools-sdk-typescript/pull/844) [`03e722b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/03e722bbdc795382f4d8325eeb196ed772bf21cd) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `NewMasterVariantAdditionNotAllowedError`
  - added type `ReferencedResourceNotFound`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.14.0

### Minor Changes

- [#837](https://github.com/commercetools/commercetools-sdk-typescript/pull/837) [`cd54482`](https://github.com/commercetools/commercetools-sdk-typescript/commit/cd544822e289be7c62d4287338f1fd943f1a5823) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `NewMasterVariantAdditionNotAllowedError`
  - added type `ReferencedResourceNotFound`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.13.0

### Minor Changes

- [#824](https://github.com/commercetools/commercetools-sdk-typescript/pull/824) [`7cfccb8`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7cfccb85d9488caeac9c79dc8dd1021710f14e58) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `NewMasterVariantAdditionNotAllowedError`
  - added type `ReferencedResourceNotFound`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.12.0

### Minor Changes

- [#822](https://github.com/commercetools/commercetools-sdk-typescript/pull/822) [`19d492c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/19d492cf32891312fa36aa1d2b73d484bea03b0c) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `ReferencedResourceNotFound`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.11.0

### Minor Changes

- [#819](https://github.com/commercetools/commercetools-sdk-typescript/pull/819) [`2bfc210`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2bfc210da948ac71c8e9e79f0524bb87c4602e85) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `ReferencedResourceNotFound`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.10.0

### Minor Changes

- [#817](https://github.com/commercetools/commercetools-sdk-typescript/pull/817) [`8c32f09`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8c32f09b02bafdad1ac60e41b5418c74b297d12d) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `InvalidFieldsUpdateError`
  - added type `ReferencedResourceNotFound`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.9.0

### Minor Changes

- [#805](https://github.com/commercetools/commercetools-sdk-typescript/pull/805) [`b8489ba`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b8489ba4fd76592d2f866d1f1edceb2db919c63a) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `ReferencedResourceNotFound`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

## 5.8.0

### Minor Changes

- [#797](https://github.com/commercetools/commercetools-sdk-typescript/pull/797) [`3ca2970`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3ca2970e7be09c72e022e142acfd70d894a80716) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `ReferencedResourceNotFound`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

## 5.7.0

### Minor Changes

- [#786](https://github.com/commercetools/commercetools-sdk-typescript/pull/786) [`f431518`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f431518cdac3bf31b6e526ac9a3fa7788a33e4a3) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Type(s)</summary>

  - added type `ReferencedResourceNotFound`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

## 5.6.0

### Minor Changes

- [#774](https://github.com/commercetools/commercetools-sdk-typescript/pull/774) [`f37e181`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f37e181910d132150dbb9392c466f75546007b57) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

## 5.5.0

### Minor Changes

- [#764](https://github.com/commercetools/commercetools-sdk-typescript/pull/764) [`5869749`](https://github.com/commercetools/commercetools-sdk-typescript/commit/5869749b2f865303b9d165efcd68e8c92e44b741) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `customer-group` to type `CustomFieldReferenceValue`
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `PriceImport::publish` is removed
  - property `ProductVariantImport::publish` is removed
  </details>

## 5.4.0

### Minor Changes

- [#685](https://github.com/commercetools/commercetools-sdk-typescript/pull/685) [`88c5c05`](https://github.com/commercetools/commercetools-sdk-typescript/commit/88c5c05a2bc249192fb115b97ba79379c0fbd758) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>MarkDeprecated Property(s)</summary>

  - marked property `PriceImport::publish` as deprecated
  - marked property `ProductVariantImport::publish` as deprecated
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `staged` to type `PriceImport`
  - added property `staged` to type `ProductVariantImport`
  </details>

### Patch Changes

- Updated dependencies [[`8b1aecc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8b1aecce5859248f3a90c8cc856db64d2932b5d5), [`b8bc24d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b8bc24df5db74feef7fb5743b6f24b425d43b738)]:
  - @commercetools/sdk-client-v2@2.5.0

## 5.3.0

### Minor Changes

- [#670](https://github.com/commercetools/commercetools-sdk-typescript/pull/670) [`96c319a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/96c319ace84ba80a04581a67e608d61008ddbebf) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **Import changes**

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/discount-codes`
  - added resource `/{projectKey}/discount-codes/import-containers`
  - added resource `/{projectKey}/discount-codes/import-containers/{importContainerKey}`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKeyValue().discountCodes().importContainers().withImportContainerKeyValue().post()`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `DiscountCodeImportRequest`
  - added type `DiscountCodeImport`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `discount-code` to type `ImportResourceType`
  </details>

### Patch Changes

- Updated dependencies [[`344fd2d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/344fd2d105f51a65a8a93f247ea9ea8f1a09b095)]:
  - @commercetools/sdk-client-v2@2.4.1

## 5.2.0

### Minor Changes

- [#602](https://github.com/commercetools/commercetools-sdk-typescript/pull/602) [`7a85bab`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7a85bab874e7bba76ecd49e776a651cd02dc20f6) Thanks [@ajimae](https://github.com/ajimae)! - Add resources as global exports

## 5.1.0

### Minor Changes

- [#553](https://github.com/commercetools/commercetools-sdk-typescript/pull/553) [`8e0a312`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8e0a312404020c2f14cb15786a262c78476b5152) Thanks [@github-actions](https://github.com/apps/github-actions)! - **Api changes**

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
  <summary>Changed MethodResponseBody(s)</summary>

  - :warning: changed response body for `200: application/json` of method `get /{projectKey}/in-store/key={storeKey}/cart-discounts` from type `CartDiscount` to `CartDiscountPagedQueryResponse`
  </details>

## 5.0.0

### Major Changes

- [#551](https://github.com/commercetools/commercetools-sdk-typescript/pull/551) [`9e7939a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9e7939a1df234fd1f4f77c60f4ff75b31d7fc3fd) Thanks [@github-actions](https://github.com/apps/github-actions)! - BREAKING CHANGE:

  - fix URI parameters to be URI encoded

### Minor Changes

- [#527](https://github.com/commercetools/commercetools-sdk-typescript/pull/527) [`00c6176`](https://github.com/commercetools/commercetools-sdk-typescript/commit/00c617692543f9a8d0ac64e81d583f89e002e81b) Thanks [@github-actions](https://github.com/apps/github-actions)! - **Import changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `product` to type `ProductVariantPatch`
  </details>

### Patch Changes

- Updated dependencies [[`a6d0df2`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a6d0df2034b72504db2aa2d13a8d3726d97cc881)]:
  - @commercetools/sdk-client-v2@2.2.2

## 4.7.0

### Minor Changes

- [`0e0c5bf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/0e0c5bfc7e9f9c0c30dfdd520aed768122c7933d) Thanks [@jenschude](https://github.com/jenschude)! - **Import changes**

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `canceled` to type `ProcessingState`
  </details>

## 4.6.2

### Patch Changes

- [#487](https://github.com/commercetools/commercetools-sdk-typescript/pull/487) [`d22b639`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d22b639e812f5b784842bd7d5ae94d7aa19d0ce6) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  # Api (Platform) changes

  <details>
  <summary>Added Property(s)</summary>

  - added property `perMethodTaxRate` to type `CustomLineItem`
  - added property `key` to type `LineItem`
  - added property `key` to type `LineItemDraft`
  - added property `key` to type `CartAddLineItemAction`
  - added property `lineItemKey` to type `CartApplyDeltaToLineItemShippingDetailsTargetsAction`
  - added property `lineItemKey` to type `CartChangeLineItemQuantityAction`
  - added property `lineItemKey` to type `CartRemoveLineItemAction`
  - added property `lineItemKey` to type `CartSetLineItemCustomFieldAction`
  - added property `lineItemKey` to type `CartSetLineItemCustomTypeAction`
  - added property `lineItemKey` to type `CartSetLineItemDistributionChannelAction`
  - added property `lineItemKey` to type `CartSetLineItemInventoryModeAction`
  - added property `lineItemKey` to type `CartSetLineItemPriceAction`
  - added property `lineItemKey` to type `CartSetLineItemShippingDetailsAction`
  - added property `lineItemKey` to type `CartSetLineItemSupplyChannelAction`
  - added property `lineItemKey` to type `CartSetLineItemTaxAmountAction`
  - added property `lineItemKey` to type `CartSetLineItemTaxRateAction`
  - added property `lineItemKey` to type `CartSetLineItemTotalPriceAction`
  - added property `key` to type `MyLineItemDraft`
  - added property `key` to type `MyCartAddLineItemAction`
  - added property `lineItemKey` to type `MyCartApplyDeltaToLineItemShippingDetailsTargetsAction`
  - added property `lineItemKey` to type `MyCartChangeLineItemQuantityAction`
  - added property `lineItemKey` to type `MyCartRemoveLineItemAction`
  - added property `lineItemKey` to type `MyCartSetLineItemCustomFieldAction`
  - added property `lineItemKey` to type `MyCartSetLineItemCustomTypeAction`
  - added property `lineItemKey` to type `MyCartSetLineItemDistributionChannelAction`
  - added property `lineItemKey` to type `MyCartSetLineItemShippingDetailsAction`
  - added property `lineItemKey` to type `MyCartSetLineItemSupplyChannelAction`
  - added property `lineItemKey` to type `MyShoppingListChangeLineItemQuantityAction`
  - added property `sku` to type `StandalonePriceDeletedMessage`
  - added property `sku` to type `StandalonePriceDeletedMessagePayload`
  - added property `key` to type `StagedOrderAddLineItemAction`
  - added property `parcelKey` to type `StagedOrderAddParcelToDeliveryAction`
  - added property `lineItemKey` to type `StagedOrderChangeLineItemQuantityAction`
  - added property `lineItemKey` to type `StagedOrderRemoveLineItemAction`
  - added property `parcelKey` to type `StagedOrderRemoveParcelFromDeliveryAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemCustomFieldAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemCustomTypeAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemDistributionChannelAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemPriceAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemShippingDetailsAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemTaxAmountAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemTaxRateAction`
  - added property `lineItemKey` to type `StagedOrderSetLineItemTotalPriceAction`
  - added property `parcelKey` to type `StagedOrderSetParcelCustomFieldAction`
  - added property `parcelKey` to type `StagedOrderSetParcelCustomTypeAction`
  - added property `parcelKey` to type `StagedOrderSetParcelItemsAction`
  - added property `parcelKey` to type `StagedOrderSetParcelMeasurementsAction`
  - added property `parcelKey` to type `StagedOrderSetParcelTrackingDataAction`
  - added property `key` to type `Parcel`
  - added property `key` to type `ParcelDraft`
  - added property `parcelKey` to type `OrderAddParcelToDeliveryAction`
  - added property `parcelKey` to type `OrderRemoveParcelFromDeliveryAction`
  - added property `lineItemKey` to type `OrderSetLineItemCustomFieldAction`
  - added property `lineItemKey` to type `OrderSetLineItemCustomTypeAction`
  - added property `lineItemKey` to type `OrderSetLineItemShippingDetailsAction`
  - added property `parcelKey` to type `OrderSetParcelCustomFieldAction`
  - added property `parcelKey` to type `OrderSetParcelCustomTypeAction`
  - added property `parcelKey` to type `OrderSetParcelItemsAction`
  - added property `parcelKey` to type `OrderSetParcelMeasurementsAction`
  - added property `parcelKey` to type `OrderSetParcelTrackingDataAction`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `lineItemId` of type `CartApplyDeltaToLineItemShippingDetailsTargetsAction` to be optional
  - changed property `lineItemId` of type `CartChangeLineItemQuantityAction` to be optional
  - changed property `lineItemId` of type `CartRemoveLineItemAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemCustomFieldAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemCustomTypeAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemDistributionChannelAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemInventoryModeAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemPriceAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemShippingDetailsAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemSupplyChannelAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemTaxAmountAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemTaxRateAction` to be optional
  - changed property `lineItemId` of type `CartSetLineItemTotalPriceAction` to be optional
  - changed property `lineItemId` of type `MyCartApplyDeltaToLineItemShippingDetailsTargetsAction` to be optional
  - changed property `lineItemId` of type `MyCartChangeLineItemQuantityAction` to be optional
  - changed property `lineItemId` of type `MyCartRemoveLineItemAction` to be optional
  - changed property `lineItemId` of type `MyCartSetLineItemCustomFieldAction` to be optional
  - changed property `lineItemId` of type `MyCartSetLineItemCustomTypeAction` to be optional
  - changed property `lineItemId` of type `MyCartSetLineItemDistributionChannelAction` to be optional
  - changed property `lineItemId` of type `MyCartSetLineItemShippingDetailsAction` to be optional
  - changed property `lineItemId` of type `MyCartSetLineItemSupplyChannelAction` to be optional
  - changed property `lineItemId` of type `MyShoppingListChangeLineItemQuantityAction` to be optional
  - changed property `lineItemId` of type `StagedOrderChangeLineItemQuantityAction` to be optional
  - changed property `lineItemId` of type `StagedOrderRemoveLineItemAction` to be optional
  - changed property `parcelId` of type `StagedOrderRemoveParcelFromDeliveryAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemCustomFieldAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemCustomTypeAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemDistributionChannelAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemPriceAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemShippingDetailsAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemTaxAmountAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemTaxRateAction` to be optional
  - changed property `lineItemId` of type `StagedOrderSetLineItemTotalPriceAction` to be optional
  - changed property `parcelId` of type `StagedOrderSetParcelCustomFieldAction` to be optional
  - changed property `parcelId` of type `StagedOrderSetParcelCustomTypeAction` to be optional
  - changed property `parcelId` of type `StagedOrderSetParcelItemsAction` to be optional
  - changed property `parcelId` of type `StagedOrderSetParcelMeasurementsAction` to be optional
  - changed property `parcelId` of type `StagedOrderSetParcelTrackingDataAction` to be optional
  - changed property `parcelId` of type `OrderRemoveParcelFromDeliveryAction` to be optional
  - changed property `lineItemId` of type `OrderSetLineItemCustomFieldAction` to be optional
  - changed property `lineItemId` of type `OrderSetLineItemCustomTypeAction` to be optional
  - changed property `lineItemId` of type `OrderSetLineItemShippingDetailsAction` to be optional
  - changed property `parcelId` of type `OrderSetParcelCustomFieldAction` to be optional
  - changed property `parcelId` of type `OrderSetParcelCustomTypeAction` to be optional
  - changed property `parcelId` of type `OrderSetParcelItemsAction` to be optional
  - changed property `parcelId` of type `OrderSetParcelMeasurementsAction` to be optional
  - changed property `parcelId` of type `OrderSetParcelTrackingDataAction` to be optional
  </details>

  <details>
  <summary>Deprecated Property(s)</summary>

  - property `MyCartChangeLineItemQuantityAction::externalPrice` is removed
  - property `MyCartChangeLineItemQuantityAction::externalTotalPrice` is removed
  </details>

  <details>
  <summary>Deprecated Type(s)</summary>

  - type `ProductVariantSelectionExclusion` is removed
  - type `ProductVariantSelectionInclusion` is removed
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `MyCartSetDirectDiscountsAction`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `StandalonePriceTierAddedMessage`
  - added type `StandalonePriceTierRemovedMessage`
  - added type `StandalonePriceTiersSetMessage`
  - added type `StandalonePriceValidFromAndUntilSetMessage`
  - added type `StandalonePriceValidFromSetMessage`
  - added type `StandalonePriceValidUntilSetMessage`
  - added type `StandalonePriceTierAddedMessagePayload`
  - added type `StandalonePriceTierRemovedMessagePayload`
  - added type `StandalonePriceTiersSetMessagePayload`
  - added type `StandalonePriceValidFromAndUntilSetMessagePayload`
  - added type `StandalonePriceValidFromSetMessagePayload`
  - added type `StandalonePriceValidUntilSetMessagePayload`
  - added type `StandalonePriceAddPriceTierAction`
  - added type `StandalonePriceRemovePriceTierAction`
  - added type `StandalonePriceSetPriceTiersAction`
  - added type `StandalonePriceSetValidFromAction`
  - added type `StandalonePriceSetValidFromAndUntilAction`
  - added type `StandalonePriceSetValidUntilAction`
  - added type `ConfluentCloudDestination`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `associate-role` to type `CustomFieldReferenceValue`
  - added enum `business-unit` to type `CustomFieldReferenceValue`
  </details>

  # Import changes

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `associate-role` to type `CustomFieldReferenceValue`
  - added enum `business-unit` to type `CustomFieldReferenceValue`
  </details>

  # History change

  <details>
  <summary>Added Property(s)</summary>

  - added property `variantSelection` to type `AddProductChange`
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `resource` of type `Record` from type `Reference` to `ResourceIdentifier`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `resourceKey` to method `get /{projectKey}`
  - added query parameter `resourceKey` to method `get /{projectKey}/{resourceType}`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `resourceId` from method `get /{projectKey}/{resourceType}`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `AddAssociateChange`
  - added type `AddProductSelectionChange`
  - added type `Associate`
  - added type `AssociateRoleAssignment`
  - added type `AssociateRoleInheritanceMode`
  - added type `BusinessUnitAssociateMode`
  - added type `BusinessUnitLabel`
  - added type `BusinessUnitStatus`
  - added type `BusinessUnitStoreMode`
  - added type `ChangeAssociateChange`
  - added type `ChangeAssociateModeChange`
  - added type `ChangeParentUnitChange`
  - added type `ChangeProductSelectionActiveChange`
  - added type `ChangeStatusChange`
  - added type `ProductVariantSelection`
  - added type `ProductVariantSelectionTypeEnum`
  - added type `RemoveAssociateChange`
  - added type `RemoveProductSelectionChange`
  - added type `RequestQuoteRenegotiationChange`
  - added type `ResourceIdentifier`
  - added type `SetAddressCustomFieldChange`
  - added type `SetAddressCustomTypeChange`
  - added type `SetContactEmailChange`
  - added type `SetStoreModeChange`
  - added type `SetVariantSelectionChange`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `business-unit` to type `ChangeHistoryResourceType`
  - added enum `addAssociate` to type `UpdateType`
  - added enum `addCustomLineItem` to type `UpdateType`
  - added enum `addDiscountCode` to type `UpdateType`
  - added enum `addProduct` to type `UpdateType`
  - added enum `addProductSelection` to type `UpdateType`
  - added enum `addProperty` to type `UpdateType`
  - added enum `changeAmountAuthorized` to type `UpdateType`
  - added enum `changeAssociate` to type `UpdateType`
  - added enum `changeAssociateMode` to type `UpdateType`
  - added enum `changeCustomLineItemQuantity` to type `UpdateType`
  - added enum `changeLineItemName` to type `UpdateType`
  - added enum `changeParentUnit` to type `UpdateType`
  - added enum `changeProductSelectionActive` to type `UpdateType`
  - added enum `changeQuoteRequestState` to type `UpdateType`
  - added enum `changeQuoteState` to type `UpdateType`
  - added enum `changeStagedQuoteState` to type `UpdateType`
  - added enum `changeStatus` to type `UpdateType`
  - added enum `changeTaxCalculationMode` to type `UpdateType`
  - added enum `changeTaxMode` to type `UpdateType`
  - added enum `changeTaxRoundingMode` to type `UpdateType`
  - added enum `moveImageToPosition` to type `UpdateType`
  - added enum `removeAssociate` to type `UpdateType`
  - added enum `removeCustomLineItem` to type `UpdateType`
  - added enum `removeDiscountCode` to type `UpdateType`
  - added enum `removeProduct` to type `UpdateType`
  - added enum `removeProductSelection` to type `UpdateType`
  - added enum `removeProperty` to type `UpdateType`
  - added enum `requestQuoteRenegotiation` to type `UpdateType`
  - added enum `setAddressCustomField` to type `UpdateType`
  - added enum `setAddressCustomType` to type `UpdateType`
  - added enum `setApplicationVersion` to type `UpdateType`
  - added enum `setAuthenticationMode` to type `UpdateType`
  - added enum `setContactEmail` to type `UpdateType`
  - added enum `setCountries` to type `UpdateType`
  - added enum `setCountry` to type `UpdateType`
  - added enum `setCustomLineItemMoney` to type `UpdateType`
  - added enum `setCustomLineItemTaxAmount` to type `UpdateType`
  - added enum `setCustomLineItemTaxCategory` to type `UpdateType`
  - added enum `setCustomLineItemTaxRate` to type `UpdateType`
  - added enum `setCustomLineItemTaxedPrice` to type `UpdateType`
  - added enum `setCustomLineItemTotalPrice` to type `UpdateType`
  - added enum `setCustomShippingMethod` to type `UpdateType`
  - added enum `setIsValid` to type `UpdateType`
  - added enum `setLineItemDeactivatedAt` to type `UpdateType`
  - added enum `setLineItemDiscountedPrice` to type `UpdateType`
  - added enum `setLineItemDiscountedPricePerQuantity` to type `UpdateType`
  - added enum `setLineItemDistributionChannel` to type `UpdateType`
  - added enum `setLineItemPrice` to type `UpdateType`
  - added enum `setLineItemProductKey` to type `UpdateType`
  - added enum `setLineItemProductSlug` to type `UpdateType`
  - added enum `setLineItemTaxAmount` to type `UpdateType`
  - added enum `setLineItemTaxRate` to type `UpdateType`
  - added enum `setLineItemTaxedPrice` to type `UpdateType`
  - added enum `setLineItemTotalPrice` to type `UpdateType`
  - added enum `setOrderTaxedPrice` to type `UpdateType`
  - added enum `setOrderTotalPrice` to type `UpdateType`
  - added enum `setOrderTotalTax` to type `UpdateType`
  - added enum `setPrices` to type `UpdateType`
  - added enum `setProductCount` to type `UpdateType`
  - added enum `setProductSelections` to type `UpdateType`
  - added enum `setProperty` to type `UpdateType`
  - added enum `setPurchaseOrderNumber` to type `UpdateType`
  - added enum `setReservations` to type `UpdateType`
  - added enum `setSellerComment` to type `UpdateType`
  - added enum `setShippingInfoPrice` to type `UpdateType`
  - added enum `setShippingInfoTaxedPrice` to type `UpdateType`
  - added enum `setShippingMethod` to type `UpdateType`
  - added enum `setShippingMethodTaxAmount` to type `UpdateType`
  - added enum `setShippingMethodTaxRate` to type `UpdateType`
  - added enum `setShippingRate` to type `UpdateType`
  - added enum `setShippingRateInput` to type `UpdateType`
  - added enum `setStoreMode` to type `UpdateType`
  - added enum `setSupplyChannels` to type `UpdateType`
  - added enum `setValidTo` to type `UpdateType`
  - added enum `setValue` to type `UpdateType`
  - added enum `setVariantSelection` to type `UpdateType`
  - added enum `DeclinedForRenegotiation` to type `QuoteState`
  - added enum `associate-role` to type `ReferenceTypeId`
  - added enum `business-unit` to type `ReferenceTypeId`
  </details>

## 4.6.1

### Patch Changes

- [#483](https://github.com/commercetools/commercetools-sdk-typescript/pull/483) [`c87f6bf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c87f6bf6efd3b7bd66027829378108b1f260a325) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 4.6.0

### Minor Changes

- [#478](https://github.com/commercetools/commercetools-sdk-typescript/pull/478) [`98c6bac`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98c6bace1608889c16373e1a83451cf5d7a7d140) Thanks [@ajimae](https://github.com/ajimae)! - remove all remaining `querystring` package instances.

## 4.5.0

### Minor Changes

- [#465](https://github.com/commercetools/commercetools-sdk-typescript/pull/465) [`efa9194`](https://github.com/commercetools/commercetools-sdk-typescript/commit/efa9194bd092bbb653b6d44e76fb90f563f41d53) Thanks [@github-actions](https://github.com/apps/github-actions)! - ## Update generated SDKs

  **Api changes**

  <details>
  <summary>Changed Type(s)</summary>

  - :warning: changed type `AssociateRole` from type `string` to `BaseResource`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `AssociateRoleDraft`
  - added type `AssociateRoleKeyReference`
  - added type `AssociateRolePagedQueryResponse`
  - added type `AssociateRoleReference`
  - added type `AssociateRoleResourceIdentifier`
  - added type `AssociateRoleUpdate`
  - added type `AssociateRoleUpdateAction`
  - added type `Permission`
  - added type `AssociateRoleAddPermissionAction`
  - added type `AssociateRoleChangeBuyerAssignableAction`
  - added type `AssociateRoleRemovePermissionAction`
  - added type `AssociateRoleSetCustomFieldAction`
  - added type `AssociateRoleSetCustomTypeAction`
  - added type `AssociateRoleSetNameAction`
  - added type `AssociateRoleSetPermissionsAction`
  - added type `AssociateRoleAssignment`
  - added type `AssociateRoleAssignmentDraft`
  - added type `AssociateRoleDeprecated`
  - added type `AssociateRoleInheritanceMode`
  - added type `BusinessUnitAssociateMode`
  - added type `InheritedAssociate`
  - added type `InheritedAssociateRoleAssignment`
  - added type `BusinessUnitChangeAssociateModeAction`
  - added type `AssociateMissingPermissionError`
  - added type `GraphQLAssociateMissingPermissionError`
  - added type `AssociateRoleBuyerAssignableChangedMessage`
  - added type `AssociateRoleCreatedMessage`
  - added type `AssociateRoleDeletedMessage`
  - added type `AssociateRoleNameChangedMessage`
  - added type `AssociateRolePermissionAddedMessage`
  - added type `AssociateRolePermissionRemovedMessage`
  - added type `AssociateRolePermissionsSetMessage`
  - added type `BusinessUnitAssociateModeChangedMessage`
  - added type `AssociateRoleBuyerAssignableChangedMessagePayload`
  - added type `AssociateRoleCreatedMessagePayload`
  - added type `AssociateRoleDeletedMessagePayload`
  - added type `AssociateRoleNameChangedMessagePayload`
  - added type `AssociateRolePermissionAddedMessagePayload`
  - added type `AssociateRolePermissionRemovedMessagePayload`
  - added type `AssociateRolePermissionsSetMessagePayload`
  - added type `BusinessUnitAssociateModeChangedMessagePayload`
  - added type `ProjectSetBusinessUnitAssociateRoleOnCreationAction`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `associate-role` to type `ReferenceTypeId`
  - added enum `associate-role` to type `MessageSubscriptionResourceTypeId`
  - added enum `associate-role` to type `ResourceTypeId`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `associateRoleAssignments` to type `Associate`
  - added property `associateRoleAssignments` to type `AssociateDraft`
  - added property `associateMode` to type `BusinessUnit`
  - added property `inheritedAssociates` to type `BusinessUnit`
  - added property `associateMode` to type `BusinessUnitDraft`
  - added property `associateMode` to type `Company`
  - added property `inheritedAssociates` to type `Company`
  - added property `associateMode` to type `CompanyDraft`
  - added property `associateMode` to type `Division`
  - added property `inheritedAssociates` to type `Division`
  - added property `associateMode` to type `DivisionDraft`
  - added property `myBusinessUnitAssociateRoleOnCreation` to type `BusinessUnitConfiguration`
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `roles` of type `Associate` from type `AssociateRole[]` to `AssociateRoleDeprecated[]`
  - :warning: changed property `roles` of type `AssociateDraft` from type `AssociateRole[]` to `AssociateRoleDeprecated[]`
  </details>

  <details>
  <summary>MarkDeprecated Property(s)</summary>

  - marked property `Associate::roles` as deprecated
  - marked property `AssociateDraft::roles` as deprecated
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/as-associate`
  - added resource `/{projectKey}/associate-roles`
  - added resource `/{projectKey}/as-associate/{associateId}`
  - added resource `/{projectKey}/as-associate/{associateId}/business-units`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}`
  - added resource `/{projectKey}/as-associate/{associateId}/business-units/key={key}`
  - added resource `/{projectKey}/as-associate/{associateId}/business-units/{ID}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/quotes`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/order-number={orderNumber}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/{ID}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/key={key}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/{ID}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}`
  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/{ID}`
  - added resource `/{projectKey}/associate-roles/key={key}`
  - added resource `/{projectKey}/associate-roles/{ID}`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().associateRoles().get()`
  - added method `apiRoot.withProjectKey().associateRoles().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withKey().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withKey().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().businessUnits().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withKey().delete()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().withId().delete()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().orderQuote().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withOrderNumber().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withOrderNumber().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().orders().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withKey().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withKey().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quotes().withId().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withKey().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withKey().post()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withId().get()`
  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().quoteRequests().withId().post()`
  - added method `apiRoot.withProjectKey().associateRoles().withKey().get()`
  - added method `apiRoot.withProjectKey().associateRoles().withKey().post()`
  - added method `apiRoot.withProjectKey().associateRoles().withKey().delete()`
  - added method `apiRoot.withProjectKey().associateRoles().withId().get()`
  - added method `apiRoot.withProjectKey().associateRoles().withId().post()`
  - added method `apiRoot.withProjectKey().associateRoles().withId().delete()`
  </details>

  **Import changes**

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `type` to type `ImportResourceType`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/types`
  - added resource `/{projectKey}/types/import-containers`
  - added resource `/{projectKey}/types/import-containers/{importContainerKey}`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKeyValue().types().importContainers().withImportContainerKeyValue().post()`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `TypeImportRequest`
  - added type `TypeTextInputHint`
  - added type `ResourceTypeId`
  - added type `FieldType`
  - added type `CustomFieldBooleanType`
  - added type `CustomFieldDateTimeType`
  - added type `CustomFieldDateType`
  - added type `CustomFieldEnumType`
  - added type `CustomFieldEnumValue`
  - added type `CustomFieldLocalizedEnumType`
  - added type `CustomFieldLocalizedEnumValue`
  - added type `CustomFieldLocalizedStringType`
  - added type `CustomFieldMoneyType`
  - added type `CustomFieldNumberType`
  - added type `CustomFieldReferenceType`
  - added type `CustomFieldReferenceValue`
  - added type `CustomFieldSetType`
  - added type `CustomFieldStringType`
  - added type `CustomFieldTimeType`
  - added type `FieldDefinition`
  - added type `TypeImport`
  </details>

  **History changes**

  <details>
  <summary>Added QueryParameter(s)</summary>

  - added query parameter `resourceTypes` to method `get /{projectKey}`
  </details>

  <details>
  <summary>Removed QueryParameter(s)</summary>

  - :warning: removed query parameter `resourceType` from method `get /{projectKey}`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `SetCountriesChange`
  - added type `SetPurchaseOrderNumberChange`
  - added type `StoreCountry`
  </details>

## 4.4.1

### Patch Changes

- [#453](https://github.com/commercetools/commercetools-sdk-typescript/pull/453) [`a83e653`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a83e653c986e50f31f71546edc721263d29990b5) Thanks [@ajimae](https://github.com/ajimae)! - - Remove all `querystring` dependency
  - Add qs dependency to requiring package
  - Refactor code to accommodate new implementation
- Updated dependencies [[`a83e653`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a83e653c986e50f31f71546edc721263d29990b5)]:
  - @commercetools/sdk-client-v2@2.1.6

## 4.4.0

### Minor Changes

- [`dad68dc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/dad68dcabc0d8995b1c628b6cf431c14e9504888) Thanks [@jenschude](https://github.com/jenschude)! - **Import changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `custom` to type `Parcel`
  </details>

### Patch Changes

- Updated dependencies [[`057e260`](https://github.com/commercetools/commercetools-sdk-typescript/commit/057e260b3330b7ab8df33171bb2d4aa2de0444d9)]:
  - @commercetools/sdk-client-v2@2.1.5

## 4.3.0

### Minor Changes

- [#432](https://github.com/commercetools/commercetools-sdk-typescript/pull/432) [`d06e0c5`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d06e0c58f4b9a8f69bbde63f906cc905c878aa2d) Thanks [@ajimae](https://github.com/ajimae)! - ### Required Properties

  - changed property `password` of type `CustomerImport` to be optional

  ### Added Properties

  - added property `authenticationMode` to type `CustomerImport`
  - added property `state` to type `OrderImport`
  - added property `custom` to type `Address`

  ### Added Type

  - added type `AuthenticationMode`

### Patch Changes

- Updated dependencies [[`8b4ad04`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8b4ad04e9a43a8b399fa946ab6693500a4af3fb5)]:
  - @commercetools/sdk-client-v2@2.1.4

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
