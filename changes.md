**Api changes**

<details>
<summary>Added Property(s)</summary>

- added property `shippingKey` to type `CartSetLineItemTaxAmountAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/cart/updates/CartSetLineItemTaxAmountAction.raml:12:2)
- added property `shippingKey` to type `CartSetLineItemTaxRateAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/cart/updates/CartSetLineItemTaxRateAction.raml:12:2)
- added property `discountCodeId` to type `DiscountCodeNonApplicableError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/DiscountCodeNonApplicableError.raml:27:2)
- added property `extensionErrors` to type `ExtensionBadResponseError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/ExtensionBadResponseError.raml:23:2)
- added property `extensionBody` to type `ExtensionBadResponseError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/ExtensionBadResponseError.raml:27:2)
- added property `extensionStatusCode` to type `ExtensionBadResponseError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/ExtensionBadResponseError.raml:30:2)
- added property `extensionId` to type `ExtensionBadResponseError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/ExtensionBadResponseError.raml:33:2)
- added property `extensionKey` to type `ExtensionBadResponseError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/ExtensionBadResponseError.raml:36:2)
- added property `extensionErrors` to type `ExtensionUpdateActionsFailedError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/ExtensionUpdateActionsFailedError.raml:24:2)
- added property `detailedErrorMessage` to type `InvalidJsonInputError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/InvalidJsonInputError.raml:17:2)
- added property `countries` to type `StoreCreatedMessage` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/message/StoreCreatedMessage.raml:17:2)
- added property `countries` to type `StoreCreatedMessagePayload` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/message/payload/StoreCreatedMessagePayload.raml:17:2)
- added property `shippingKey` to type `StagedOrderSetLineItemTaxAmountAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/order-edit/updates/StagedOrderSetLineItemTaxAmountAction.raml:12:2)
- added property `shippingKey` to type `StagedOrderSetLineItemTaxRateAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/order-edit/updates/StagedOrderSetLineItemTaxRateAction.raml:12:2)
- added property `priceMode` to type `ProductProjection` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/product/ProductProjection.raml:103:2)
- added property `countries` to type `Store` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/store/Store.raml:51:2)
- added property `countries` to type `StoreDraft` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/store/StoreDraft.raml:23:2)
</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `dicountCodeId` from type `DiscountCodeNonApplicableError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/error/DiscountCodeNonApplicableError.raml:10:2)
- :warning: removed property `conflictingResource` from type `DuplicateFieldError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/error/DuplicateFieldError.raml:10:2)
- :warning: removed property `error` from type `ErrorResponse` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/error/ErrorResponse.raml:9:2)
- :warning: removed property `error_description` from type `ErrorResponse` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/error/ErrorResponse.raml:11:2)
- :warning: removed property `errorByExtension` from type `ExtensionBadResponseError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/error/ExtensionBadResponseError.raml:10:2)
- :warning: removed property `errorByExtension` from type `ExtensionUpdateActionsFailedError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/error/ExtensionUpdateActionsFailedError.raml:10:2)
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `currency` of type `DuplicateStandalonePriceScopeError` from type `string` to `CurrencyCode` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/DuplicateStandalonePriceScopeError.raml:25:2)
- :warning: changed property `country` of type `DuplicateStandalonePriceScopeError` from type `string` to `CountryCode` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/DuplicateStandalonePriceScopeError.raml:29:2)
- :warning: changed property `currency` of type `MatchingPriceNotFoundError` from type `string` to `CurrencyCode` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/MatchingPriceNotFoundError.raml:29:2)
- :warning: changed property `country` of type `MatchingPriceNotFoundError` from type `string` to `CountryCode` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/MatchingPriceNotFoundError.raml:33:2)
- :warning: changed property `country` of type `MissingTaxRateForCountryError` from type `string` to `CountryCode` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/MissingTaxRateForCountryError.raml:23:2)
- :warning: changed property `currency` of type `OverlappingStandalonePriceValidityError` from type `string` to `CurrencyCode` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/OverlappingStandalonePriceValidityError.raml:25:2)
- :warning: changed property `country` of type `OverlappingStandalonePriceValidityError` from type `string` to `CountryCode` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/OverlappingStandalonePriceValidityError.raml:29:2)
- :warning: changed property `amountPlanned` of type `MyPayment` from type `TypedMoney` to `CentPrecisionMoney` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/me/MyPayment.raml:27:2)
- :warning: changed property `amountPlanned` of type `Payment` from type `TypedMoney` to `CentPrecisionMoney` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/payment/Payment.raml:49:2)
- :warning: changed property `field` of type `DuplicateFieldError` to be required (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/DuplicateFieldError.raml:14:2)
- :warning: changed property `duplicateValue` of type `DuplicateFieldError` to be required (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/error/DuplicateFieldError.raml:18:2)
- :warning: changed property `state` of type `Transaction` to be required (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/payment/Transaction.raml:27:2)
- :warning: changed property `lineItems` of type `ShoppingList` to be required (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/shopping-list/ShoppingList.raml:41:2)
- :warning: changed property `textLineItems` of type `ShoppingList` to be required (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/shopping-list/ShoppingList.raml:45:2)
</details>

<details>
<summary>Added Type(s)</summary>

- added type `AttributeGroup` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:6:0)
- added type `AttributeGroupDraft` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:7:0)
- added type `AttributeGroupPagedQueryResponse` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:8:0)
- added type `AttributeGroupReference` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:9:0)
- added type `AttributeGroupResourceIdentifier` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:10:0)
- added type `AttributeGroupUpdate` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:11:0)
- added type `AttributeGroupUpdateAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:12:0)
- added type `AttributeReference` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:13:0)
- added type `AttributeGroupAddAttributeAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:14:0)
- added type `AttributeGroupChangeNameAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:15:0)
- added type `AttributeGroupRemoveAttributeAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:16:0)
- added type `AttributeGroupSetAttributesAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:17:0)
- added type `AttributeGroupSetDescriptionAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:18:0)
- added type `AttributeGroupSetKeyAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:19:0)
- added type `AuthErrorResponse` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:412:0)
- added type `CountryNotConfiguredInStore` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:415:0)
- added type `ExtensionError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:434:0)
- added type `ExtensionPredicateEvaluationFailedError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:436:0)
- added type `ProductAssignmentMissingError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:465:0)
- added type `ProductPresentWithDifferentVariantSelectionError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:466:0)
- added type `StoreCountriesChangedMessage` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:789:0)
- added type `StoreCountriesChangedMessagePayload` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:947:0)
- added type `StoreCountry` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:1614:0)
- added type `StoreAddCountryAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:1622:0)
- added type `StoreRemoveCountryAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:1627:0)
- added type `StoreSetCountriesAction` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:1631:0)
</details>

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `AccessDeniedError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/types.raml:394:0)
- :warning: removed type `WeakPasswordError` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference-previous/api-specs/api/types/types.raml:464:0)
</details>

<details>
<summary>Changed Type(s)</summary>

- marked type `ShippingMethodSetDescriptionAction` as deprecated (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/types/types.raml:1518:0)
</details>

<details>
<summary>Added Method(s)</summary>

- added method `get /{projectKey}/attribute-groups` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:11:0)
- added method `post /{projectKey}/attribute-groups` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:25:0)
- added method `get /{projectKey}/attribute-groups/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:49:2)
- added method `post /{projectKey}/attribute-groups/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:63:2)
- added method `delete /{projectKey}/attribute-groups/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:80:2)
- added method `get /{projectKey}/attribute-groups/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:101:2)
- added method `post /{projectKey}/attribute-groups/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:115:2)
- added method `delete /{projectKey}/attribute-groups/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:132:2)
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/attribute-groups` (file:///home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/api.raml:217:2)
- added resource `/{projectKey}/attribute-groups/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:42:0)
- added resource `/{projectKey}/attribute-groups/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/resources/attribute-groups.raml:94:0)
</details>

<details>
<summary>Added QueryParameter(s)</summary>

- added query parameter `localeProjection` to method `get /{projectKey}/products` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/traits/price-selecting.raml:23:2)
- added query parameter `localeProjection` to method `post /{projectKey}/products` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/traits/price-selecting.raml:23:2)
- added query parameter `localeProjection` to method `get /{projectKey}/products/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/traits/price-selecting.raml:23:2)
- added query parameter `localeProjection` to method `post /{projectKey}/products/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/traits/price-selecting.raml:23:2)
- added query parameter `localeProjection` to method `delete /{projectKey}/products/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/traits/price-selecting.raml:23:2)
- added query parameter `localeProjection` to method `get /{projectKey}/products/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/traits/price-selecting.raml:23:2)
- added query parameter `localeProjection` to method `post /{projectKey}/products/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/traits/price-selecting.raml:23:2)
- added query parameter `localeProjection` to method `delete /{projectKey}/products/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/traits/price-selecting.raml:23:2)
- added query parameter `staged` to method `get /{projectKey}/in-store/key={storeKey}/product-projections/key={key}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/traits/projection-selecting.raml:3:2)
- added query parameter `staged` to method `get /{projectKey}/in-store/key={storeKey}/product-projections/{ID}` (file:/home/runner/work/commercetools-api-reference/commercetools-api-reference/commercetools-api-reference/api-specs/api/traits/projection-selecting.raml:3:2)
</details>
