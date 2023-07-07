# @commercetools/platform-sdk

## 4.11.0

### Minor Changes

- [#496](https://github.com/commercetools/commercetools-sdk-typescript/pull/496) [`60fe7e5`](https://github.com/commercetools/commercetools-sdk-typescript/commit/60fe7e50a606da624dc794ffd714c0a719ea860a) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  ### Api changes

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/in-store/key={storeKey}/cart-discounts`
  - added resource `/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}`
  - added resource `/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `stores` to type `CartDiscount`
  - added property `stores` to type `CartDiscountDraft`
  - added property `key` to type `CustomLineItem`
  - added property `key` to type `CustomLineItemDraft`
  - added property `key` to type `CartAddCustomLineItemAction`
  - added property `key` to type `StagedOrderAddCustomLineItemAction`
  - added property `shippingKey` to type `StagedOrderAddDeliveryAction`
  </details>

  <details>
  <summary>Removed Type(s)</summary>

  - :warning: removed type `CartSetDeliveryAddressCustomFieldAction`
  - :warning: removed type `CartSetDeliveryAddressCustomTypeAction`
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `CartDiscountAddStoreAction`
  - added type `CartDiscountRemoveStoreAction`
  - added type `CartDiscountSetStoresAction`
  - added type `MaxCartDiscountsReachedError`
  - added type `MaxStoreReferencesReachedError`
  - added type `StoreCartDiscountsLimitReachedError`
  - added type `GraphQLMaxCartDiscountsReachedError`
  - added type `GraphQLMaxStoreReferencesReachedError`
  - added type `GraphQLStoreCartDiscountsLimitReachedError`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withKey().delete()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().get()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().post()`
  - added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().cartDiscounts().withId().delete()`
  </details>

## 4.10.1

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

## 4.10.0

### Minor Changes

- [#483](https://github.com/commercetools/commercetools-sdk-typescript/pull/483) [`c87f6bf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c87f6bf6efd3b7bd66027829378108b1f260a325) Thanks [@github-actions](https://github.com/apps/github-actions)! - **Api changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `shippingKey` to type `CartSetShippingMethodTaxAmountAction`
  - added property `shippingKey` to type `CartSetShippingMethodTaxRateAction`
  - added property `deliveryKey` to type `StagedOrderAddDeliveryAction`
  - added property `deliveryKey` to type `StagedOrderAddParcelToDeliveryAction`
  - added property `deliveryKey` to type `StagedOrderRemoveDeliveryAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryAddressAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryAddressCustomFieldAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryAddressCustomTypeAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryCustomFieldAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryCustomTypeAction`
  - added property `deliveryKey` to type `StagedOrderSetDeliveryItemsAction`
  - added property `shippingKey` to type `StagedOrderSetShippingMethodTaxAmountAction`
  - added property `shippingKey` to type `StagedOrderSetShippingMethodTaxRateAction`
  - added property `key` to type `Delivery`
  - added property `key` to type `DeliveryDraft`
  - added property `deliveryKey` to type `OrderAddDeliveryAction`
  - added property `deliveryKey` to type `OrderAddParcelToDeliveryAction`
  - added property `deliveryKey` to type `OrderRemoveDeliveryAction`
  - added property `deliveryKey` to type `OrderSetDeliveryAddressAction`
  - added property `deliveryKey` to type `OrderSetDeliveryAddressCustomFieldAction`
  - added property `deliveryKey` to type `OrderSetDeliveryAddressCustomTypeAction`
  - added property `deliveryKey` to type `OrderSetDeliveryCustomFieldAction`
  - added property `deliveryKey` to type `OrderSetDeliveryCustomTypeAction`
  - added property `deliveryKey` to type `OrderSetDeliveryItemsAction`
  - added property `sku` to type `ProductRemovePriceAction`
  - added property `variantId` to type `ProductRemovePriceAction`
  - added property `price` to type `ProductRemovePriceAction`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `deliveryId` of type `StagedOrderAddParcelToDeliveryAction` to be optional
  - changed property `deliveryId` of type `StagedOrderRemoveDeliveryAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryAddressAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryAddressCustomFieldAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryAddressCustomTypeAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryCustomFieldAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryCustomTypeAction` to be optional
  - changed property `deliveryId` of type `StagedOrderSetDeliveryItemsAction` to be optional
  - changed property `deliveryId` of type `OrderAddParcelToDeliveryAction` to be optional
  - changed property `deliveryId` of type `OrderRemoveDeliveryAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryAddressAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryAddressCustomFieldAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryAddressCustomTypeAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryCustomFieldAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryCustomTypeAction` to be optional
  - changed property `deliveryId` of type `OrderSetDeliveryItemsAction` to be optional
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `CartSetLineItemInventoryModeAction`
  - added type `MoneyOverflowError`
  - added type `GraphQLMoneyOverflowError`
  - added type `MyCartSetDirectDiscountsAction`
  - added type `QuoteCustomerChangedMessage`
  - added type `QuoteRequestCustomerChangedMessage`
  - added type `QuoteCustomerChangedMessagePayload`
  - added type `QuoteRequestCustomerChangedMessagePayload`
  - added type `QuoteRequestChangeCustomerAction`
  - added type `QuoteChangeCustomerAction`
  </details>

  <details>
  <summary>Added Resource(s)</summary>

  - added resource `/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/replicate`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `ReassignMyQuotes` to type `Permission`
  - added enum `ReassignOthersQuotes` to type `Permission`
  - added enum `RenegotiationAddressed` to type `QuoteState`
  </details>

  <details>
  <summary>Added Method(s)</summary>

  - added method `apiRoot.withProjectKey().asAssociate().withAssociateIdValue().inBusinessUnitKeyWithBusinessUnitKeyValue().carts().replicate().post()`
  </details>

## 4.9.0

### Minor Changes

- [#478](https://github.com/commercetools/commercetools-sdk-typescript/pull/478) [`98c6bac`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98c6bace1608889c16373e1a83451cf5d7a7d140) Thanks [@ajimae](https://github.com/ajimae)! - remove all remaining `querystring` package instances.

## 4.8.1

### Patch Changes

- [#477](https://github.com/commercetools/commercetools-sdk-typescript/pull/477) [`60ac380`](https://github.com/commercetools/commercetools-sdk-typescript/commit/60ac380c16b8739d1da7faf6ea510870051279a8) Thanks [@github-actions](https://github.com/apps/github-actions)! - ## Update generated SDKs

  **Api changes**

  <details>
  <summary>Added Property(s)</summary>

  - added property `associateRoleAssignments` to type `MyBusinessUnitAssociateDraft`
  </details>

## 4.8.0

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

## 4.7.1

### Patch Changes

- [#453](https://github.com/commercetools/commercetools-sdk-typescript/pull/453) [`a83e653`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a83e653c986e50f31f71546edc721263d29990b5) Thanks [@ajimae](https://github.com/ajimae)! - - Remove all `querystring` dependency
  - Add qs dependency to requiring package
  - Refactor code to accommodate new implementation
- Updated dependencies [[`a83e653`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a83e653c986e50f31f71546edc721263d29990b5)]:
  - @commercetools/sdk-client-v2@2.1.6

## 4.7.0

### Minor Changes

- [`dad68dc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/dad68dcabc0d8995b1c628b6cf431c14e9504888) Thanks [@jenschude](https://github.com/jenschude)! - **Api changes**

  <details>
  <summary>MarkDeprecated Type(s)</summary>

  - marked type `ProductVariantSelectionExclusion` as deprecated
  - marked type `ProductVariantSelectionInclusion` as deprecated
  </details>

  <details>
  <summary>Added Type(s)</summary>

  - added type `GraphQLAnonymousIdAlreadyInUseError`
  - added type `GraphQLAttributeDefinitionAlreadyExistsError`
  - added type `GraphQLAttributeDefinitionTypeConflictError`
  - added type `GraphQLAttributeNameDoesNotExistError`
  - added type `GraphQLBadGatewayError`
  - added type `GraphQLConcurrentModificationError`
  - added type `GraphQLCountryNotConfiguredInStoreError`
  - added type `GraphQLDiscountCodeNonApplicableError`
  - added type `GraphQLDuplicateAttributeValueError`
  - added type `GraphQLDuplicateAttributeValuesError`
  - added type `GraphQLDuplicateEnumValuesError`
  - added type `GraphQLDuplicateFieldError`
  - added type `GraphQLDuplicateFieldWithConflictingResourceError`
  - added type `GraphQLDuplicatePriceKeyError`
  - added type `GraphQLDuplicatePriceScopeError`
  - added type `GraphQLDuplicateStandalonePriceScopeError`
  - added type `GraphQLDuplicateVariantValuesError`
  - added type `GraphQLEditPreviewFailedError`
  - added type `GraphQLEnumKeyAlreadyExistsError`
  - added type `GraphQLEnumKeyDoesNotExistError`
  - added type `GraphQLEnumValueIsUsedError`
  - added type `GraphQLEnumValuesMustMatchError`
  - added type `GraphQLErrorObject`
  - added type `GraphQLExtensionBadResponseError`
  - added type `GraphQLExtensionNoResponseError`
  - added type `GraphQLExtensionPredicateEvaluationFailedError`
  - added type `GraphQLExtensionUpdateActionsFailedError`
  - added type `GraphQLExternalOAuthFailedError`
  - added type `GraphQLFeatureRemovedError`
  - added type `GraphQLGeneralError`
  - added type `GraphQLInsufficientScopeError`
  - added type `GraphQLInternalConstraintViolatedError`
  - added type `GraphQLInvalidCredentialsError`
  - added type `GraphQLInvalidCurrentPasswordError`
  - added type `GraphQLInvalidFieldError`
  - added type `GraphQLInvalidInputError`
  - added type `GraphQLInvalidItemShippingDetailsError`
  - added type `GraphQLInvalidJsonInputError`
  - added type `GraphQLInvalidOperationError`
  - added type `GraphQLInvalidSubjectError`
  - added type `GraphQLInvalidTokenError`
  - added type `GraphQLLanguageUsedInStoresError`
  - added type `GraphQLMatchingPriceNotFoundError`
  - added type `GraphQLMaxResourceLimitExceededError`
  - added type `GraphQLMissingRoleOnChannelError`
  - added type `GraphQLMissingTaxRateForCountryError`
  - added type `GraphQLNoMatchingProductDiscountFoundError`
  - added type `GraphQLNotEnabledError`
  - added type `GraphQLObjectNotFoundError`
  - added type `GraphQLOutOfStockError`
  - added type `GraphQLOverCapacityError`
  - added type `GraphQLOverlappingStandalonePriceValidityError`
  - added type `GraphQLPendingOperationError`
  - added type `GraphQLPriceChangedError`
  - added type `GraphQLProductAssignmentMissingError`
  - added type `GraphQLProductPresentWithDifferentVariantSelectionError`
  - added type `GraphQLProjectNotConfiguredForLanguagesError`
  - added type `GraphQLQueryComplexityLimitExceededError`
  - added type `GraphQLQueryTimedOutError`
  - added type `GraphQLReferenceExistsError`
  - added type `GraphQLReferencedResourceNotFoundError`
  - added type `GraphQLRequiredFieldError`
  - added type `GraphQLResourceNotFoundError`
  - added type `GraphQLResourceSizeLimitExceededError`
  - added type `GraphQLSearchDeactivatedError`
  - added type `GraphQLSearchExecutionFailureError`
  - added type `GraphQLSearchFacetPathNotFoundError`
  - added type `GraphQLSearchIndexingInProgressError`
  - added type `GraphQLSemanticErrorError`
  - added type `GraphQLShippingMethodDoesNotMatchCartError`
  - added type `GraphQLSyntaxErrorError`
  - added type `ProductSelectionProductExcludedMessage`
  - added type `ProductSelectionVariantExclusionChangedMessage`
  - added type `ProductSelectionProductExcludedMessagePayload`
  - added type `ProductSelectionVariantExclusionChangedMessagePayload`
  - added type `IndividualExclusionProductSelectionType`
  - added type `ProductVariantExclusion`
  - added type `ProductVariantSelectionIncludeAllExcept`
  - added type `ProductVariantSelectionIncludeOnly`
  - added type `ProductSelectionExcludeProductAction`
  - added type `ProductSelectionSetVariantExclusionAction`
  </details>

  <details>
  <summary>Added Enum(s)</summary>

  - added enum `individualExclusion` to type `ProductSelectionTypeEnum`
  - added enum `includeOnly` to type `ProductVariantSelectionTypeEnum`
  - added enum `includeAllExcept` to type `ProductVariantSelectionTypeEnum`
  </details>

  <details>
  <summary>Changed Property(s)</summary>

  - :warning: changed property `productSelection` of type `ProductSelectionCreatedMessage` from type `IndividualProductSelectionType` to `ProductSelectionType`
  - :warning: changed property `productSelection` of type `ProductSelectionCreatedMessagePayload` from type `IndividualProductSelectionType` to `ProductSelectionType`
  </details>

  <details>
  <summary>Added Property(s)</summary>

  - added property `extensions` to type `GraphQLError`
  - added property `variantExclusion` to type `AssignedProductReference`
  - added property `variantExclusion` to type `AssignedProductSelection`
  - added property `variantExclusion` to type `ProductSelectionAssignment`
  - added property `type` to type `ProductSelectionDraft`
  </details>

  <details>
  <summary>Required Property(s)</summary>

  - changed property `roles` of type `AssociateDraft` to be optional
  - changed property `path` of type `GraphQLError` to be optional
  </details>

### Patch Changes

- Updated dependencies [[`057e260`](https://github.com/commercetools/commercetools-sdk-typescript/commit/057e260b3330b7ab8df33171bb2d4aa2de0444d9)]:
  - @commercetools/sdk-client-v2@2.1.5

## 4.6.0

### Minor Changes

- [#432](https://github.com/commercetools/commercetools-sdk-typescript/pull/432) [`d06e0c5`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d06e0c58f4b9a8f69bbde63f906cc905c878aa2d) Thanks [@ajimae](https://github.com/ajimae)! - ### Removed Properties

  - :warning: removed property `externalTaxRate` from type `MyCartAddLineItemAction`
  - :warning: removed property `externalPrice` from type `MyCartAddLineItemAction`
  - :warning: removed property `externalTotalPrice` from type `MyCartAddLineItemAction`

  ### Changed Properties

  - :warning: changed property `stores` of type `BusinessUnitDraft` from type `StoreKeyReference[]` to `StoreResourceIdentifier[]`
  - :warning: changed property `stores` of type `CompanyDraft` from type `StoreKeyReference[]` to `StoreResourceIdentifier[]`
  - :warning: changed property `stores` of type `DivisionDraft` from type `StoreKeyReference[]` to `StoreResourceIdentifier[]`
  - :warning: changed property `totalPrice` of type `Cart` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `locale` of type `Cart` from type `string` to `Locale`
  - :warning: changed property `country` of type `CartDraft` from type `string` to `CountryCode`
  - :warning: changed property `locale` of type `CartDraft` from type `string` to `Locale`
  - :warning: changed property `totalPrice` of type `CustomLineItem` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `externalTaxRate` of type `CustomShippingDraft` from type `string` to `ExternalTaxRateDraft`
  - :warning: changed property `deliveries` of type `CustomShippingDraft` from type `Delivery[]` to `DeliveryDraft[]`
  - :warning: changed property `custom` of type `CustomShippingDraft` from type `string` to `CustomFieldsDraft`
  - :warning: changed property `country` of type `ExternalTaxRateDraft` from type `string` to `CountryCode`
  - :warning: changed property `totalPrice` of type `LineItem` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `externalTaxRate` of type `ShippingDraft` from type `string` to `ExternalTaxRateDraft`
  - :warning: changed property `deliveries` of type `ShippingDraft` from type `Delivery[]` to `DeliveryDraft[]`
  - :warning: changed property `custom` of type `ShippingDraft` from type `string` to `CustomFieldsDraft`
  - :warning: changed property `price` of type `ShippingInfo` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `amount` of type `TaxPortion` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalNet` of type `TaxedItemPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalGross` of type `TaxedItemPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalTax` of type `TaxedItemPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalNet` of type `TaxedPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalGross` of type `TaxedPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `totalTax` of type `TaxedPrice` from type `TypedMoney` to `CentPrecisionMoney`
  - :warning: changed property `externalTaxRate` of type `CartAddCustomShippingMethodAction` from type `string` to `ExternalTaxRateDraft`
  - :warning: changed property `deliveries` of type `CartAddCustomShippingMethodAction` from type `Delivery[]` to `DeliveryDraft[]`
  - :warning: changed property `custom` of type `CartAddCustomShippingMethodAction` from type `string` to `CustomFieldsDraft`
  - :warning: changed property `shippingMethod` of type `CartAddShippingMethodAction` from type `ShippingMethodReference` to `ShippingMethodResourceIdentifier`
  - :warning: changed property `externalTaxRate` of type `CartAddShippingMethodAction` from type `string` to `ExternalTaxRateDraft`
  - :warning: changed property `deliveries` of type `CartAddShippingMethodAction` from type `Delivery[]` to `DeliveryDraft[]`
  - :warning: changed property `custom` of type `CartAddShippingMethodAction` from type `string` to `CustomFieldsDraft`
  - :warning: changed property `locale` of type `CartSetLocaleAction` from type `string` to `Locale`
  - :warning: changed property `businessUnit` of type `MyCartDraft` from type `BusinessUnitKeyReference` to `BusinessUnitResourceIdentifier`
  - :warning: changed property `store` of type `MyCartDraft` from type `StoreKeyReference` to `StoreResourceIdentifier`
  - :warning: changed property `country` of type `MyCartDraft` from type `string` to `CountryCode`
  - :warning: changed property `locale` of type `MyCartDraft` from type `string` to `Locale`
  - :warning: changed property `locale` of type `MyCartSetLocaleAction` from type `string` to `Locale`

  ### Required Properties

  - :warning: changed property `inventoryMode` of type `Cart` to be required
  - :warning: changed property `itemShippingAddresses` of type `Cart` to be required
  - :warning: changed property `discountCodes` of type `Cart` to be required
  - :warning: changed property `directDiscounts` of type `Cart` to be required
  - :warning: changed property `shippingAddress` of type `ShippingDraft` to be required
  - changed property `quantity` of type `CustomLineItemDraft` to be optional
  - changed property `deliveries` of type `CustomShippingDraft` to be optional
  - changed property `deliveries` of type `ShippingDraft` to be optional
  - changed property `quantity` of type `CartAddCustomLineItemAction` to be optional
  - changed property `deliveries` of type `CartAddCustomShippingMethodAction` to be optional
  - changed property `deliveries` of type `CartAddShippingMethodAction` to be optional
  - changed property `email` of type `CartSetCustomerEmailAction` to be optional
  - changed property `quantity` of type `MyLineItemDraft` to be optional

  ### Added Properties

  - added property `shippingDetails` to type `CartAddCustomLineItemAction`
  - added property `addedAt` to type `CartAddLineItemAction`
  - added property `inventoryMode` to type `CartAddLineItemAction`
  - added property `oldValue` to type `StandalonePriceValueChangedMessage`
  - added property `oldValue` to type `StandalonePriceValueChangedMessagePayload`
  - added property `purchaseOrderNumber` to type `StagedOrder`
  - added property `purchaseOrderNumber` to type `Order`
  - added property `purchaseOrderNumber` to type `OrderFromCartDraft`
  - added property `purchaseOrderNumber` to type `QuoteRequest`
  - added property `purchaseOrderNumber` to type `QuoteRequestDraft`
  - added property `purchaseOrderNumber` to type `Quote`
  - added property `purchaseOrderNumber` to type `StagedQuote`

  ### Added Resources

  - added resource `/{projectKey}/me/orders/quotes`

  ### Added Method

  - added method `apiRoot.withProjectKey().me().orders().quotes().post()`

  ### Removed Type

  - :warning: removed type `CountryNotConfiguredInStore`

  ### Added Types

  - added type `CartSetBusinessUnitAction`
  - added type `CountryNotConfiguredInStoreError`
  - added type `GoogleCloudFunctionDestination`
  - added type `MyOrderFromQuoteDraft`
  - added type `MyCartSetBusinessUnitAction`
  - added type `OrderPurchaseOrderNumberSetMessage`
  - added type `OrderPurchaseOrderNumberSetMessagePayload`
  - added type `StagedOrderSetPurchaseOrderNumberAction`
  - added type `OrderSetPurchaseOrderNumberAction`

  ### Added QueryParameters

  - added query parameter `sort` to method `get /{projectKey}/product-selections/key={key}/products`
  - added query parameter `sort` to method `get /{projectKey}/product-selections/{ID}/products`
  - added query parameter `expand` to method `get /{projectKey}/in-store/key={storeKey}/me/active-cart`

  ### Added Enum(s)

  - added enum `shipping` to type `ResourceTypeId`

### Patch Changes

- Updated dependencies [[`8b4ad04`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8b4ad04e9a43a8b399fa946ab6693500a4af3fb5)]:
  - @commercetools/sdk-client-v2@2.1.4

## 4.5.0

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

## 4.4.0

### Minor Changes

- [#399](https://github.com/commercetools/commercetools-sdk-typescript/pull/399) [`391c1cb`](https://github.com/commercetools/commercetools-sdk-typescript/commit/391c1cb33b55458649f538107527d704ff11e2bd) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

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

## 4.3.0

### Minor Changes

- [#371](https://github.com/commercetools/commercetools-sdk-typescript/pull/371) [`f6bd1fe`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f6bd1fe02773974d1e95a50a986e846698a95322) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  #### Summary

  - The get method of `ByProjectKeyInStoreKeyByStoreKeyProductProjectionsByIDRequestBuilder` class now supports an optional `stage` property
    - [Diff link](packages/platform-sdk/src/generated/client/product-projections/by-project-key-in-store-key-by-store-key-product-projections-by-id-request-builder.ts)
  - The get method of `ByProjectKeyInStoreKeyByStoreKeyProductProjectionsKeyByKeyRequestBuilder` class now supports an optional `stage` property
    - [Diff link](packages/platform-sdk/src/generated/client/product-projections/by-project-key-in-store-key-by-store-key-product-projections-key-by-key-request-builder.ts)

  #### Snippet

  ```diff
  ...
    queryArgs?: {
  +   staged?: boolean
      priceCurrency?: string
      priceCountry?: string
      priceCustomerGroup?: string,
      ...
    }
    ...
  }) {}
  ```

  - The `get`, `post` and `delete` method query args. of `ByProjectKeyProductsByIDRequestBuilder` class now supports optional `localeProjection` property
    - [Diff link](packages/platform-sdk/src/generated/client/products/by-project-key-products-by-id-request-builder.ts)
  - The `get` and `post` method query args. of the `ByProjectKeyProductsRequestBuilder` class now supports an optional `localeProjection` property.
    - [Diff link](packages/platform-sdk/src/generated/client/products/by-project-key-products-request-builder.ts)

  ```diff
  ...
    queryArgs?: {
      where?: string | string[]
      priceCurrency?: string
      priceCountry?: string
      priceCustomerGroup?: string
      priceChannel?: string
  +   localeProjection?: string | string[]
      expand?: string | string[]
      sort?: string | string[]
      limit?: number
      offset?: number
      withTotal?: boolean
      [key: string]: QueryParam
    }
  ...
  ```

  The complete changes can be found [here](changes.md)

### Patch Changes

- [#394](https://github.com/commercetools/commercetools-sdk-typescript/pull/394) [`01dcc12`](https://github.com/commercetools/commercetools-sdk-typescript/commit/01dcc12dd808f3431736fc00d0596f82d08a28d0) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

- Updated dependencies [[`98d2d7c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98d2d7ce2abad1d8eb3466f4f3df1b877f144920)]:
  - @commercetools/sdk-client-v2@2.1.1

## 4.2.0

### Minor Changes

- [#352](https://github.com/commercetools/commercetools-sdk-typescript/pull/352) [`ef84dd4`](https://github.com/commercetools/commercetools-sdk-typescript/commit/ef84dd439c29a91f4b43eb9aae10774a56d490b6) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  Summary of changes can be seen [here](https://github.com/commercetools/commercetools-sdk-typescript/blob/master/changes.md)

### Patch Changes

- Updated dependencies [[`8cd7b08`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8cd7b08a78e13a886ed2271f6807358380b22ab2), [`fe5109c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fe5109c58c17e150e3a8fa953b829b2875cd9f96)]:
  - @commercetools/sdk-client-v2@2.1.0

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

- [#347](https://github.com/commercetools/commercetools-sdk-typescript/pull/347) [`f0e84dd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f0e84ddb2e34b908385a380175c6da596db6817a) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  Add `quotes()` method for the `My Quote endpoint`

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-17ea32dc184ca17b337fbf5e126f27f16651feadc9c879fae88db2580537cf8eR142)

  **Usage:**

  ```ts
  request: apiRoot
    .withProjectKey({ projectKey: 'test_projectKey' })
    .me()
    .quotes()
    .withId({ ID: 'test_ID' })
    .get({ queryArgs: { expand: 'expand' } }),
  ```

  Add `ByProjectKeyMeQuotesByIDRequestBuilder` class for `quotes-request` model

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-a5bab13a41c9ece596cf0fcc545109385e16b6b1877755e58d8ec064125e2041R12)

  Add `ByProjectKeyMeQuotesKeyByKeyRequestBuilder` class for `quotes-request` model

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-034feddaefb558f6391d5238391e177290d7f018904308b2884dfa016c81bc0dR12)

  Add `ByProjectKeyMeQuotesRequestBuilder` class for `quotes-request` model

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-26e9b7a9cef621eaf88d81d1e2bb61858402450c444e1fe4d11bde5b51d22638R13)

### Patch Changes

- Updated dependencies [[`f0e84dd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f0e84ddb2e34b908385a380175c6da596db6817a)]:
  - @commercetools/sdk-client-v2@2.0.1

## 4.0.0

### Major Changes

- [#341](https://github.com/commercetools/commercetools-sdk-typescript/pull/341) [`385682f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/385682fef6f0efa39a51570434d4d11789e0a220) Thanks [@ajimae](https://github.com/ajimae)! - Upgrade node versions to 14 and set engine to >= 14

### Patch Changes

- Updated dependencies [[`385682f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/385682fef6f0efa39a51570434d4d11789e0a220)]:
  - @commercetools/sdk-client-v2@2.0.0

## 3.0.2

### Patch Changes

- [#323](https://github.com/commercetools/commercetools-sdk-typescript/pull/323) [`b11c9a8`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b11c9a834da26b7afb0b81eccbe5752823fda7da) Thanks [@github-actions](https://github.com/apps/github-actions)! - Support standalone prices reference expansion

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

### Minor Changes

- [#302](https://github.com/commercetools/commercetools-sdk-typescript/pull/302) [`69da036`](https://github.com/commercetools/commercetools-sdk-typescript/commit/69da036f75595831a20503bc17aa292857cecdb9) Thanks [@github-actions](https://github.com/apps/github-actions)! - ### Platform API

  #### Features

  - add LocaleprojectingTrait, StoreprojectingTrait
  - quotes to extension resource types
  - support InventoryMode for cart line items

  #### Fixes

  - removed `localeProjection` & `priceSelection` parameter from PriceselectingTrait as they are not applying to all endpoints using price selection

## 2.8.0

### Minor Changes

- [#258](https://github.com/commercetools/commercetools-sdk-typescript/pull/258) [`ba52d38`](https://github.com/commercetools/commercetools-sdk-typescript/commit/ba52d38a0a00299de61f554ae753cfb984401d79) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  - add support for Standalone Prices

### Patch Changes

- [#266](https://github.com/commercetools/commercetools-sdk-typescript/pull/266) [`fd29fa7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fd29fa759f906040d76a889c2d3fbfbdf2ac6617) Thanks [@github-actions](https://github.com/apps/github-actions)! - Platform SDK updates:

  - Fix /me/email/confirm arguments and return type (https://github.com/commercetools/commercetools-sdk-typescript/issues/274)

## 2.7.0

### Minor Changes

- [#257](https://github.com/commercetools/commercetools-sdk-typescript/pull/257) [`facc47b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/facc47ba50b00056adc232d7c75a2849cdcc6689) Thanks [@ajimae](https://github.com/ajimae)! - release latest sdk

### Patch Changes

- Updated dependencies [[`facc47b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/facc47ba50b00056adc232d7c75a2849cdcc6689), [`7512c3f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7512c3f1f488645da3952f296d4f4fe3149b7fba)]:
  - @commercetools/sdk-client-v2@1.4.0

## 2.6.0

### Minor Changes

- [#241](https://github.com/commercetools/commercetools-sdk-typescript/pull/241) [`85f5be3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/85f5be349a9b0fa46539259981bfd8d5fc2ffdc6) Thanks [@ajimae](https://github.com/ajimae)! - Releasing the TS SDK with the following changelogs

  - added functionalities to extend client user agent
  - custom field added to OrderFromCardDraft

### Patch Changes

- Updated dependencies [[`85f5be3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/85f5be349a9b0fa46539259981bfd8d5fc2ffdc6)]:
  - @commercetools/sdk-client-v2@1.3.0

## 2.5.0

### Minor Changes

- [#211](https://github.com/commercetools/commercetools-sdk-typescript/pull/211) [`f3c1e3e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f3c1e3ea0ca000b309eca1de6163c3ad065d526f) Thanks [@jherey](https://github.com/jherey)! - - Change Import Summaries `processingState` to `processingstate`.
  - Add `sort` to `ByProjectKeyShippingMethodsMatchingLocationRequestBuilder`.
  - New `MyCustomerResetPassword` model added to `ByProjectKeyMePasswordResetRequestBuilder` class.
  - Other changes are detailed here: https://github.com/commercetools/commercetools-sdk-typescript/pull/192/files.

### Patch Changes

- Updated dependencies [[`f3c1e3e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f3c1e3ea0ca000b309eca1de6163c3ad065d526f)]:
  - @commercetools/sdk-client-v2@1.2.0

## 2.4.1

### Patch Changes

- [#190](https://github.com/commercetools/commercetools-sdk-typescript/pull/190) [`5c9915f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/5c9915f8655b269cb2c1a4adf3c2ce14780c4c30) Thanks [@github-actions](https://github.com/apps/github-actions)! - Fix type in product selection query assigned to a product

## 2.4.0

### Minor Changes

- [#188](https://github.com/commercetools/commercetools-sdk-typescript/pull/188) [`4c2d9b6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4c2d9b64b204200dffbeb18130239138dd2ad7d3) Thanks [@ajimae](https://github.com/ajimae)! - February package release

### Patch Changes

- [#149](https://github.com/commercetools/commercetools-sdk-typescript/pull/149) [`08caea9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/08caea93560c01e2158f018538b7a2b9f4be39c1) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

- Updated dependencies [[`08caea9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/08caea93560c01e2158f018538b7a2b9f4be39c1), [`4c2d9b6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4c2d9b64b204200dffbeb18130239138dd2ad7d3)]:
  - @commercetools/sdk-client-v2@1.1.0

## 2.3.0

### Minor Changes

- [#177](https://github.com/commercetools/commercetools-sdk-typescript/pull/177) [`9389a07`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9389a07fa89f94049e1b3b7dbeb74adce0d0a60b) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  ### Features

  - Add support for product selection (beta)

  ### Fixes

  - Fix returnItemDraft type of field `custom` to `CustomFieldsDraft`

## 2.2.0

### Minor Changes

- [#165](https://github.com/commercetools/commercetools-sdk-typescript/pull/165) [`1b305a1`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1b305a18602f6daceab31d7691f5b0239db2ad23) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 2.1.0

### Minor Changes

- [#148](https://github.com/commercetools/commercetools-sdk-typescript/pull/148) [`0281529`](https://github.com/commercetools/commercetools-sdk-typescript/commit/028152987cd191db2458e5b327ff275a1e6cb36e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

### Patch Changes

- Updated dependencies [[`fcd35a0`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fcd35a0f26b2780d0004c4e9d7b48233a86c2453)]:
  - @commercetools/sdk-client-v2@1.0.1

## 2.0.1

### Patch Changes

- [#159](https://github.com/commercetools/commercetools-sdk-typescript/pull/159) [`1d0d397`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1d0d397a2771edf959c77506276518df9f432555) Thanks [@ajimae](https://github.com/ajimae)! - Remove sdk-client-v2 from devDependency and make it a direct dependency, remove old node.js client completely.

## 2.0.0

### Major Changes

- [#154](https://github.com/commercetools/commercetools-sdk-typescript/pull/154) [`25f1dea`](https://github.com/commercetools/commercetools-sdk-typescript/commit/25f1dea23eccdfdda01e9144ec2afe968ead58f2) Thanks [@jherey](https://github.com/jherey)! - This is the first major release of the sdk client

## 1.20.0

### Minor Changes

- [#146](https://github.com/commercetools/commercetools-sdk-typescript/pull/146) [`1f6f830`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1f6f830bb25d98c15ac96e06635c5e2aa07fe1e8) Thanks [@ajimae](https://github.com/ajimae)! - release a new version of typescript

### Patch Changes

- [#137](https://github.com/commercetools/commercetools-sdk-typescript/pull/137) [`f119f8a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f119f8a26255790a6faf3667e07b500497a08c21) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.19.0

### Minor Changes

- [#120](https://github.com/commercetools/commercetools-sdk-typescript/pull/120) [`4d01dba`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4d01dbac9cfe38faaa0a11d3154a016759856772) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

* [#114](https://github.com/commercetools/commercetools-sdk-typescript/pull/114) [`c93148c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c93148cbe222ba89d0aca5ceb113de208015c0e0) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.18.1

### Patch Changes

- [#108](https://github.com/commercetools/commercetools-sdk-typescript/pull/108) [`026d91a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/026d91a747b445b0913eabb7eb91ecc7f3eb257e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

* [#110](https://github.com/commercetools/commercetools-sdk-typescript/pull/110) [`44173ff`](https://github.com/commercetools/commercetools-sdk-typescript/commit/44173ffde761420d04af6a2d03a845737eec9f82) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.18.0

### Minor Changes

- [#93](https://github.com/commercetools/commercetools-sdk-typescript/pull/93) [`70f4267`](https://github.com/commercetools/commercetools-sdk-typescript/commit/70f4267958268c3a6f592c8cd10190e7acf91316) Thanks [@emmenko](https://github.com/emmenko)! - Update development tooling and monorepo setup.

* [#105](https://github.com/commercetools/commercetools-sdk-typescript/pull/105) [`274baaf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/274baaf85d1cac0379842fea68315a8d28c87821) Thanks [@ajimae](https://github.com/ajimae)! - new sdk version release

- [#94](https://github.com/commercetools/commercetools-sdk-typescript/pull/94) [`01af929`](https://github.com/commercetools/commercetools-sdk-typescript/commit/01af9297a27ba1b9f423a723b9cf02b30fa1f73b) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.17.1

### Patch Changes

- [#91](https://github.com/commercetools/commercetools-sdk-typescript/pull/91) [`2bc967a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2bc967abcddad61cecbb4ab020048fb33cc35608) Thanks [@emmenko](https://github.com/emmenko)! - Update readme structure.
