---
'@commercetools/platform-sdk': minor
---

Update generated SDKs

#### Summary

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
