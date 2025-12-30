# @commercetools/history-sdk

## 5.11.0

### Minor Changes

- [#1173](https://github.com/commercetools/commercetools-sdk-typescript/pull/1173) [`5373452`](https://github.com/commercetools/commercetools-sdk-typescript/commit/537345234ffd3fa9a3cb9c6f5b152ccc675230e7) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Added Type(s)</summary>
  - added type `DirectDiscount`
  - added type `DiscountTypeCombination`
  - added type `BestDeal`
  - added type `Stacking`
  - added type `ShippingMethodLabel`
  - added type `AddShippingChange`
  - added type `ChangeApprovalRuleModeChange`
  - added type `ChangeCustomerChange`
  - added type `ChangeIncludedInStatisticsChange`
  - added type `ChangeLastVariantIdChange`
  - added type `ChangeLineItemNameChange`
  - added type `ChangeLineItemPublishedChange`
  - added type `ExcludeProductChange`
  - added type `RemoveShippingChange`
  - added type `ReplaceTaxRateChange`
  - added type `RevertStagedChangesChange`
  - added type `RevertStagedVariantChangesChange`
  - added type `SetAncestorsChange`
  - added type `SetBillingAddressCustomFieldChange`
  - added type `SetBillingAddressCustomTypeChange`
  - added type `SetBusinessUnitChange`
  - added type `SetCustomLineItemDiscountedPriceChange`
  - added type `SetCustomLineItemDiscountedPricePerQuantityChange`
  - added type `SetCustomerGroupAssignmentsChange`
  - added type `SetDeliveryAddressCustomFieldChange`
  - added type `SetDeliveryAddressCustomTypeChange`
  - added type `SetDeliveryCustomFieldChange`
  - added type `SetDeliveryCustomTypeChange`
  - added type `SetDiscountOnTotalPriceChange`
  - added type `SetInheritedStoresChange`
  - added type `SetItemShippingAddressCustomFieldChange`
  - added type `SetItemShippingAddressCustomTypeChange`
  - added type `SetMaxCartQuantityChange`
  - added type `SetMinCartQuantityChange`
  - added type `SetParcelCustomFieldChange`
  - added type `SetParcelCustomTypeChange`
  - added type `SetPasswordChange`
  - added type `SetPriceKeyChange`
  - added type `SetPriceModeChange`
  - added type `SetProductAttributeChange`
  - added type `SetReturnInfoChange`
  - added type `SetReturnItemCustomLineItemCustomFieldChange`
  - added type `SetReturnItemCustomLineItemCustomTypeChange`
  - added type `SetReturnItemLineItemCustomFieldChange`
  - added type `SetReturnItemLineItemCustomTypeChange`
  - added type `SetShippingAddressCustomFieldChange`
  - added type `SetShippingAddressCustomTypeChange`
  - added type `SetShippingCustomFieldChange`
  - added type `SetShippingCustomTypeChange`
  - added type `SetTransactionCustomFieldChange`
  - added type `SetTransactionCustomTypeChange`
  - added type `SetUnitTypeChange`
  - added type `SetVariantExclusionChange`
  - added type `UpdateItemShippingAddressChange`
  - added type `SetAssociatesChange`
  - added type `SetInheritedAssociatesChange`
  - added type `ChangeTopLevelUnitChange`
  - added type `Attribute`
  - added type `BusinessUnitApprovalRuleMode`
  - added type `BusinessUnitResourceIdentifier`
  - added type `BusinessUnitType`
  - added type `CustomFieldEnumValue`
  - added type `CustomFieldLocalizedEnumValue`
  - added type `CustomerGroupAssignment`
  - added type `DiscountOnTotalPrice`
  - added type `DiscountedTotalPricePortion`
  - added type `ProductPriceModeEnum`
  - added type `ProductVariantExclusion`
  - added type `Shipping`
  - added type `ShippingInfo`
  - added type `ShippingRateInput`
  - added type `ShoppingListLineItem`
  - added type `TypeTextInputHint`
  - added type `TypedMoney`
  - added type `CentPrecisionMoney`
  - added type `DiscountedPrice`
  - added type `ShippingMethodState`
  - added type `AssociateRoleDeprecated`
  - added type `AssociateRoleKeyReference`
  - added type `AttributeLevelEnum`
  - added type `BaseAddress`
  - added type `BusinessUnitKeyReference`
  - added type `CartDiscountReference`
  - added type `CartDiscountTarget`
  - added type `CartDiscountValue`
  - added type `CategoryReference`
  - added type `ChannelReference`
  - added type `CustomFieldValue`
  - added type `CustomLineItemPriceMode`
  - added type `CustomLineItemRecurrenceInfo`
  - added type `CustomerGroupReference`
  - added type `CustomerReference`
  - added type `DiscountCodeReference`
  - added type `FieldContainer`
  - added type `GeoJson`
  - added type `InventoryMode`
  - added type `LineItemMode`
  - added type `LineItemPriceMode`
  - added type `LineItemRecurrenceInfo`
  - added type `MethodTaxRate`
  - added type `MethodTaxedPrice`
  - added type `PaymentReference`
  - added type `PriceSelectionMode`
  - added type `PriceTier`
  - added type `ProductDiscountReference`
  - added type `ProductDiscountValue`
  - added type `ProductReference`
  - added type `ProductSelectionReference`
  - added type `ProductTypeReference`
  - added type `ProductVariant`
  - added type `RecurrencePolicyReference`
  - added type `ResourceTypeId`
  - added type `ScopedPrice`
  - added type `ShippingMethodReference`
  - added type `StateReference`
  - added type `StoreKeyReference`
  - added type `TaxCategoryReference`
  - added type `TaxPortion`
  - added type `TypeReference`
  - added type `ClientLogging`
  - added type `ChangePriceRoundingModeChange`
  - added type `ChangeCustomLineItemPriceRoundingModeChange`
  - added type `ChangeLineItemPriceRoundingModeChange`
  - added type `SetDirectDiscountsChange`
  - added type `SetReferencesChange`
  - added type `SetShippingInfoDiscountedPriceChange`
  - added type `SetShippingMethodTaxCategoryChange`
  - added type `SetTaxedShippingPriceChange`
  - added type `ShippingMethodAddShippingRateChange`
  - added type `ShippingMethodAddZoneChange`
  - added type `ShippingMethodChangeActiveChange`
  - added type `ShippingMethodChangeIsDefaultChange`
  - added type `ShippingMethodChangeNameChange`
  - added type `ShippingMethodChangeTaxCategoryChange`
  - added type `ShippingMethodRemoveShippingRateChange`
  - added type `ShippingMethodRemoveZoneChange`
  - added type `ShippingMethodSetCustomFieldChange`
  - added type `ShippingMethodSetCustomTypeChange`
  - added type `ShippingMethodSetKeyChange`
  - added type `ShippingMethodSetLocalizedDescriptionChange`
  - added type `ShippingMethodSetLocalizedNameChange`
  - added type `ShippingMethodSetPredicateChange`
  - added type `ZoneResourceIdentifier`
  - added type `ChangeDiscountTypeCombinationChange`
  - added type `StandalonePriceChangeActiveChange`
  - added type `StandalonePriceChangeValueChange`
  - added type `StandalonePriceSetCustomFieldChange`
  - added type `StandalonePriceSetCustomTypeChange`
  - added type `StandalonePriceSetDiscountedPriceChange`
  - added type `StandalonePriceSetKeyChange`
  - added type `StandalonePriceSetPriceTiersChange`
  - added type `StandalonePriceSetValidFromAndUntilChange`
  - added type `StandalonePriceSetValidFromChange`
  - added type `StandalonePriceSetValidUntilChange`
  - added type `StandalonePriceLabel`
  </details>

  <details>
  <summary>Changed Type(s)</summary>
  - :warning: changed type `Address` from type `object` to `BaseAddress`
  - :warning: changed type `GeoLocation` from type `object` to `GeoJson`
  </details>

  <details>
  <summary>MarkDeprecated Type(s)</summary>
  - marked type `AddAssociateChange` as deprecated
  - marked type `AddPriceChange` as deprecated
  - marked type `AddProductSelectionChange` as deprecated
  - marked type `AddStateRolesChange` as deprecated
  - marked type `ChangeAmountAuthorizedChange` as deprecated
  - marked type `RemoveAssociateChange` as deprecated
  - marked type `RemovePriceChange` as deprecated
  - marked type `RemoveProductSelectionChange` as deprecated
  - marked type `RemoveStateRolesChange` as deprecated
  </details>

  <details>
  <summary>Added Enum(s)</summary>
  - added enum `shipping-method` to type `ChangeHistoryResourceType`
  - added enum `standalone-price` to type `ChangeHistoryResourceType`
  - added enum `addInheritedAssociate` to type `PlatformInitiatedChange`
  - added enum `changeIncludedInStatistics` to type `PlatformInitiatedChange`
  - added enum `changeInheritedAssociate` to type `PlatformInitiatedChange`
  - added enum `changeLastVariantId` to type `PlatformInitiatedChange`
  - added enum `changeLineItemPublished` to type `PlatformInitiatedChange`
  - added enum `changeTopLevelUnit` to type `PlatformInitiatedChange`
  - added enum `removeInheritedAssociate` to type `PlatformInitiatedChange`
  - added enum `setAncestors` to type `PlatformInitiatedChange`
  - added enum `setInheritedAssociates` to type `PlatformInitiatedChange`
  - added enum `setInheritedStores` to type `PlatformInitiatedChange`
  - added enum `setLineItemDeactivatedAt` to type `PlatformInitiatedChange`
  - added enum `setProductCount` to type `PlatformInitiatedChange`
  - added enum `setReservations` to type `PlatformInitiatedChange`
  - added enum `addShipping` to type `UpdateType`
  - added enum `addShippingRate` to type `UpdateType`
  - added enum `addZone` to type `UpdateType`
  - added enum `changeActive` to type `UpdateType`
  - added enum `changeApprovalRuleMode` to type `UpdateType`
  - added enum `changeCustomLineItemPriceRoundingMode` to type `UpdateType`
  - added enum `changeCustomer` to type `UpdateType`
  - added enum `changeDiscountTypeCombination` to type `UpdateType`
  - added enum `changeIncludedInStatistics` to type `UpdateType`
  - added enum `changeIsDefault` to type `UpdateType`
  - added enum `changeLastVariantId` to type `UpdateType`
  - added enum `changeLineItemPriceRoundingMode` to type `UpdateType`
  - added enum `changeLineItemPublished` to type `UpdateType`
  - added enum `changePriceRoundingMode` to type `UpdateType`
  - added enum `changeTaxCategory` to type `UpdateType`
  - added enum `changeTopLevelUnit` to type `UpdateType`
  - added enum `excludeProduct` to type `UpdateType`
  - added enum `removeShipping` to type `UpdateType`
  - added enum `removeShippingRate` to type `UpdateType`
  - added enum `removeZone` to type `UpdateType`
  - added enum `replaceTaxRate` to type `UpdateType`
  - added enum `revertStagedChanges` to type `UpdateType`
  - added enum `revertStagedVariantChanges` to type `UpdateType`
  - added enum `setAncestors` to type `UpdateType`
  - added enum `setAssociates` to type `UpdateType`
  - added enum `setBillingAddressCustomField` to type `UpdateType`
  - added enum `setBillingAddressCustomType` to type `UpdateType`
  - added enum `setBusinessUnit` to type `UpdateType`
  - added enum `setCustomLineItemDiscountedPrice` to type `UpdateType`
  - added enum `setCustomLineItemDiscountedPricePerQuantity` to type `UpdateType`
  - added enum `setCustomerGroupAssignments` to type `UpdateType`
  - added enum `setDeliveryAddressCustomField` to type `UpdateType`
  - added enum `setDeliveryAddressCustomType` to type `UpdateType`
  - added enum `setDeliveryCustomField` to type `UpdateType`
  - added enum `setDeliveryCustomType` to type `UpdateType`
  - added enum `setDirectDiscounts` to type `UpdateType`
  - added enum `setDiscountOnTotalPrice` to type `UpdateType`
  - added enum `setInheritedAssociates` to type `UpdateType`
  - added enum `setInheritedStores` to type `UpdateType`
  - added enum `setItemShippingAddressCustomField` to type `UpdateType`
  - added enum `setItemShippingAddressCustomType` to type `UpdateType`
  - added enum `setLocalizedDescription` to type `UpdateType`
  - added enum `setLocalizedName` to type `UpdateType`
  - added enum `setMaxCartQuantity` to type `UpdateType`
  - added enum `setMinCartQuantity` to type `UpdateType`
  - added enum `setParcelCustomField` to type `UpdateType`
  - added enum `setParcelCustomType` to type `UpdateType`
  - added enum `setPredicate` to type `UpdateType`
  - added enum `setPriceKey` to type `UpdateType`
  - added enum `setPriceMode` to type `UpdateType`
  - added enum `setPriceTiers` to type `UpdateType`
  - added enum `setProductAttribute` to type `UpdateType`
  - added enum `setReferences` to type `UpdateType`
  - added enum `setReturnInfo` to type `UpdateType`
  - added enum `setReturnItemCustomField` to type `UpdateType`
  - added enum `setReturnItemCustomType` to type `UpdateType`
  - added enum `setShippingAddressCustomField` to type `UpdateType`
  - added enum `setShippingAddressCustomType` to type `UpdateType`
  - added enum `setShippingCustomField` to type `UpdateType`
  - added enum `setShippingCustomType` to type `UpdateType`
  - added enum `setShippingInfoDiscountedPrice` to type `UpdateType`
  - added enum `setShippingMethodTaxCategory` to type `UpdateType`
  - added enum `setTaxedShippingPrice` to type `UpdateType`
  - added enum `setTransactionCustomField` to type `UpdateType`
  - added enum `setTransactionCustomType` to type `UpdateType`
  - added enum `setUnitType` to type `UpdateType`
  - added enum `setVariantExclusion` to type `UpdateType`
  - added enum `CreateApprovalRules` to type `Permission`
  - added enum `UpdateApprovalRules` to type `Permission`
  - added enum `UpdateApprovalFlows` to type `Permission`
  - added enum `ViewMyShoppingLists` to type `Permission`
  - added enum `ViewOthersShoppingLists` to type `Permission`
  - added enum `UpdateMyShoppingLists` to type `Permission`
  - added enum `UpdateOthersShoppingLists` to type `Permission`
  - added enum `CreateMyShoppingLists` to type `Permission`
  - added enum `CreateOthersShoppingLists` to type `Permission`
  - added enum `DeleteMyShoppingLists` to type `Permission`
  - added enum `DeleteOthersShoppingLists` to type `Permission`
  - added enum `includeOnly` to type `ProductVariantSelectionTypeEnum`
  - added enum `includeAllExcept` to type `ProductVariantSelectionTypeEnum`
  - added enum `RenegotiationAddressed` to type `QuoteState`
  - added enum `approval-flow` to type `ReferenceTypeId`
  - added enum `approval-rule` to type `ReferenceTypeId`
  - added enum `attribute-group` to type `ReferenceTypeId`
  - added enum `direct-discount` to type `ReferenceTypeId`
  - added enum `discount-group` to type `ReferenceTypeId`
  - added enum `product-price` to type `ReferenceTypeId`
  - added enum `product-tailoring` to type `ReferenceTypeId`
  - added enum `recurrence-policy` to type `ReferenceTypeId`
  - added enum `recurring-order` to type `ReferenceTypeId`
  - added enum `standalone-price` to type `ReferenceTypeId`
  - added enum `Delivered` to type `ShipmentState`
  - added enum `Canceled` to type `ShipmentState`
  </details>

  <details>
  <summary>Removed Enum(s)</summary>
  - :warning: removed enum `changeAmountAuthorized` from type `UpdateType`
  - :warning: removed enum `Failed` from type `QuoteState`
  </details>

  <details>
  <summary>Required Property(s)</summary>
  - changed property `id` of type `Address` to be optional
  - changed property `key` of type `Address` to be optional
  - changed property `title` of type `Address` to be optional
  - changed property `salutation` of type `Address` to be optional
  - changed property `firstName` of type `Address` to be optional
  - changed property `lastName` of type `Address` to be optional
  - changed property `streetName` of type `Address` to be optional
  - changed property `streetNumber` of type `Address` to be optional
  - changed property `additionalStreetInfo` of type `Address` to be optional
  - changed property `postalCode` of type `Address` to be optional
  - changed property `city` of type `Address` to be optional
  - changed property `region` of type `Address` to be optional
  - changed property `state` of type `Address` to be optional
  - changed property `company` of type `Address` to be optional
  - changed property `department` of type `Address` to be optional
  - changed property `building` of type `Address` to be optional
  - changed property `apartment` of type `Address` to be optional
  - changed property `pOBox` of type `Address` to be optional
  - changed property `phone` of type `Address` to be optional
  - changed property `mobile` of type `Address` to be optional
  - changed property `email` of type `Address` to be optional
  - changed property `fax` of type `Address` to be optional
  - changed property `additionalAddressInfo` of type `Address` to be optional
  - changed property `externalId` of type `Address` to be optional
  - changed property `description` of type `Asset` to be optional
  - changed property `custom` of type `Asset` to be optional
  - changed property `key` of type `Asset` to be optional
  - changed property `key` of type `AssetSource` to be optional
  - changed property `dimensions` of type `AssetSource` to be optional
  - changed property `contentType` of type `AssetSource` to be optional
  - changed property `inputTip` of type `AttributeDefinition` to be optional
  - changed property `taxedPrice` of type `CustomLineItem` to be optional
  - changed property `inputHint` of type `FieldDefinition` to be optional
  - changed property `label` of type `Image` to be optional
  - changed property `productSlug` of type `LineItem` to be optional
  - changed property `custom` of type `LineItem` to be optional
  - changed property `addedAt` of type `LineItem` to be optional
  - changed property `state` of type `Location` to be optional
  - changed property `measurements` of type `Parcel` to be optional
  - changed property `trackingData` of type `Parcel` to be optional
  - changed property `items` of type `Parcel` to be optional
  - changed property `heightInMillimeter` of type `ParcelMeasurements` to be optional
  - changed property `lengthInMillimeter` of type `ParcelMeasurements` to be optional
  - changed property `widthInMillimeter` of type `ParcelMeasurements` to be optional
  - changed property `weightInGram` of type `ParcelMeasurements` to be optional
  - changed property `channels` of type `ProductVariantAvailability` to be optional
  - changed property `isOnStock` of type `ProductVariantAvailability` to be optional
  - changed property `restockableInDays` of type `ProductVariantAvailability` to be optional
  - changed property `availableQuantity` of type `ProductVariantAvailability` to be optional
  - changed property `isOnStock` of type `ProductVariantChannelAvailability` to be optional
  - changed property `restockableInDays` of type `ProductVariantChannelAvailability` to be optional
  - changed property `availableQuantity` of type `ProductVariantChannelAvailability` to be optional
  - changed property `id` of type `ResourceIdentifier` to be optional
  - changed property `key` of type `ResourceIdentifier` to be optional
  - changed property `returnTrackingId` of type `ReturnInfo` to be optional
  - changed property `returnDate` of type `ReturnInfo` to be optional
  - changed property `comment` of type `ReturnItem` to be optional
  - changed property `suggestTokenizer` of type `SearchKeyword` to be optional
  - changed property `freeAbove` of type `ShippingRate` to be optional
  - changed property `isMatching` of type `ShippingRate` to be optional
  - changed property `externalId` of type `SyncInfo` to be optional
  - changed property `id` of type `TaxRate` to be optional
  - changed property `state` of type `TaxRate` to be optional
  - changed property `subRates` of type `TaxRate` to be optional
  - changed property `custom` of type `TextLineItem` to be optional
  - changed property `description` of type `TextLineItem` to be optional
  - changed property `trackingId` of type `TrackingData` to be optional
  - changed property `carrier` of type `TrackingData` to be optional
  - changed property `provider` of type `TrackingData` to be optional
  - changed property `providerTransaction` of type `TrackingData` to be optional
  - changed property `isReturn` of type `TrackingData` to be optional
  - changed property `timestamp` of type `Transaction` to be optional
  - changed property `interactionId` of type `Transaction` to be optional
  </details>

  <details>
  <summary>Changed Property(s)</summary>
  - :warning: changed property `nextValue` of type `AddEnumValueChange` from type `EnumValue` to `CustomFieldEnumValue`
  - :warning: changed property `nextValue` of type `AddInterfaceInteractionChange` from type `CustomFieldExpandedValue` to `CustomFields`
  - :warning: changed property `nextValue` of type `AddLocalizedEnumValueChange` from type `AttributeLocalizedEnumValue` to `CustomFieldLocalizedEnumValue`
  - :warning: changed property `previousValue` of type `AddShoppingListLineItemChange` from type `LineItem` to `ShoppingListLineItem`
  - :warning: changed property `nextValue` of type `AddShoppingListLineItemChange` from type `LineItem` to `ShoppingListLineItem`
  - :warning: changed property `w` of type `AssetDimensions` from type `integer` to `number`
  - :warning: changed property `h` of type `AssetDimensions` from type `integer` to `number`
  - :warning: changed property `customer` of type `Associate` from type `Reference` to `CustomerReference`
  - :warning: changed property `associateRole` of type `AssociateRoleAssignment` from type `KeyReference` to `AssociateRoleKeyReference`
  - :warning: changed property `previousValue` of type `ChangeEnumValueOrderChange` from type `EnumValue[]` to `CustomFieldEnumValue[]`
  - :warning: changed property `nextValue` of type `ChangeEnumValueOrderChange` from type `EnumValue[]` to `CustomFieldEnumValue[]`
  - :warning: changed property `previousValue` of type `ChangeInputHintChange` from type `TextInputHint` to `TypeTextInputHint`
  - :warning: changed property `nextValue` of type `ChangeInputHintChange` from type `TextInputHint` to `TypeTextInputHint`
  - :warning: changed property `previousValue` of type `ChangeLocalizedEnumValueOrderChange` from type `LocalizedEnumValue[]` to `AttributeLocalizedEnumValue[]`
  - :warning: changed property `nextValue` of type `ChangeLocalizedEnumValueOrderChange` from type `LocalizedEnumValue[]` to `AttributeLocalizedEnumValue[]`
  - :warning: changed property `previousValue` of type `ChangePlainEnumValueOrderChange` from type `EnumValue[]` to `AttributePlainEnumValue[]`
  - :warning: changed property `nextValue` of type `ChangePlainEnumValueOrderChange` from type `EnumValue[]` to `AttributePlainEnumValue[]`
  - :warning: changed property `type` of type `CustomFields` from type `Reference` to `TypeReference`
  - :warning: changed property `fields` of type `CustomFields` from type `object` to `FieldContainer`
  - :warning: changed property `money` of type `CustomLineItem` from type `Money` to `TypedMoney`
  - :warning: changed property `totalPrice` of type `CustomLineItem` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `quantity` of type `CustomLineItem` from type `integer` to `number`
  - :warning: changed property `createdAt` of type `Delivery` from type `string` to `datetime`
  - :warning: changed property `quantity` of type `DeliveryItem` from type `integer` to `number`
  - :warning: changed property `discountCode` of type `DiscountCodeInfo` from type `Reference` to `DiscountCodeReference`
  - :warning: changed property `discountedAmount` of type `DiscountedLineItemPortion` from type `Money` to `TypedMoney`
  - :warning: changed property `value` of type `DiscountedLineItemPrice` from type `Money` to `TypedMoney`
  - :warning: changed property `quantity` of type `DiscountedLineItemPriceForQuantity` from type `integer` to `number`
  - :warning: changed property `inputHint` of type `FieldDefinition` from type `TextInputHint` to `TypeTextInputHint`
  - :warning: changed property `w` of type `ImageDimensions` from type `integer` to `number`
  - :warning: changed property `h` of type `ImageDimensions` from type `integer` to `number`
  - :warning: changed property `customer` of type `InheritedAssociate` from type `Reference` to `CustomerReference`
  - :warning: changed property `associateRole` of type `InheritedAssociateRoleAssignment` from type `KeyReference` to `AssociateRoleKeyReference`
  - :warning: changed property `source` of type `InheritedAssociateRoleAssignment` from type `KeyReference` to `BusinessUnitKeyReference`
  - :warning: changed property `quantity` of type `ItemShippingTarget` from type `integer` to `number`
  - :warning: changed property `quantity` of type `ItemState` from type `integer` to `number`
  - :warning: changed property `state` of type `ItemState` from type `Reference` to `StateReference`
  - :warning: changed property `productType` of type `LineItem` from type `Reference` to `ProductTypeReference`
  - :warning: changed property `variant` of type `LineItem` from type `Variant` to `ProductVariant`
  - :warning: changed property `quantity` of type `LineItem` from type `integer` to `number`
  - :warning: changed property `addedAt` of type `LineItem` from type `string` to `datetime`
  - :warning: changed property `centAmount` of type `Money` from type `integer` to `number`
  - :warning: changed property `createdAt` of type `Parcel` from type `string` to `datetime`
  - :warning: changed property `heightInMillimeter` of type `ParcelMeasurements` from type `integer` to `number`
  - :warning: changed property `lengthInMillimeter` of type `ParcelMeasurements` from type `integer` to `number`
  - :warning: changed property `widthInMillimeter` of type `ParcelMeasurements` from type `integer` to `number`
  - :warning: changed property `weightInGram` of type `ParcelMeasurements` from type `integer` to `number`
  - :warning: changed property `payments` of type `PaymentInfo` from type `Reference[]` to `PaymentReference[]`
  - :warning: changed property `value` of type `Price` from type `Money` to `TypedMoney`
  - :warning: changed property `productSelection` of type `ProductSelectionSetting` from type `Reference` to `ProductSelectionReference`
  - :warning: changed property `restockableInDays` of type `ProductVariantAvailability` from type `integer` to `number`
  - :warning: changed property `availableQuantity` of type `ProductVariantAvailability` from type `integer` to `number`
  - :warning: changed property `restockableInDays` of type `ProductVariantChannelAvailability` from type `integer` to `number`
  - :warning: changed property `availableQuantity` of type `ProductVariantChannelAvailability` from type `integer` to `number`
  - :warning: changed property `previousValue` of type `RemoveDeliveryItemsChange` from type `Delivery` to `DeliveryChangeValue`
  - :warning: changed property `previousValue` of type `RemoveEnumValuesChange` from type `EnumValue` to `AttributePlainEnumValue`
  - :warning: changed property `previousValue` of type `RemoveLocalizedEnumValuesChange` from type `LocalizedEnumValue` to `AttributeLocalizedEnumValue`
  - :warning: changed property `previousValue` of type `RemoveShoppingListLineItemChange` from type `LineItem` to `ShoppingListLineItem`
  - :warning: changed property `nextValue` of type `RemoveShoppingListLineItemChange` from type `LineItem` to `ShoppingListLineItem`
  - :warning: changed property `returnDate` of type `ReturnInfo` from type `string` to `datetime`
  - :warning: changed property `quantity` of type `ReturnItem` from type `integer` to `number`
  - :warning: changed property `lastModifiedAt` of type `ReturnItem` from type `string` to `datetime`
  - :warning: changed property `createdAt` of type `ReturnItem` from type `string` to `datetime`
  - :warning: changed property `averageRating` of type `ReviewRatingStatistics` from type `integer` to `number`
  - :warning: changed property `highestRating` of type `ReviewRatingStatistics` from type `integer` to `number`
  - :warning: changed property `lowestRating` of type `ReviewRatingStatistics` from type `integer` to `number`
  - :warning: changed property `previousValue` of type `SetAttributeChange` from type `AttributeValue` to `Attribute`
  - :warning: changed property `nextValue` of type `SetAttributeChange` from type `AttributeValue` to `Attribute`
  - :warning: changed property `previousValue` of type `SetCustomLineItemTaxedPriceChange` from type `Money` to `TaxedItemPrice`
  - :warning: changed property `nextValue` of type `SetCustomLineItemTaxedPriceChange` from type `Money` to `TaxedItemPrice`
  - :warning: changed property `previousValue` of type `SetDiscountedPriceChange` from type `Price` to `DiscountedPrice`
  - :warning: changed property `nextValue` of type `SetDiscountedPriceChange` from type `Price` to `DiscountedPrice`
  - :warning: changed property `previousValue` of type `SetOrderTaxedPriceChange` from type `TaxedItemPrice` to `TaxedPrice`
  - :warning: changed property `nextValue` of type `SetOrderTaxedPriceChange` from type `TaxedItemPrice` to `TaxedPrice`
  - :warning: changed property `previousValue` of type `SetShippingInfoTaxedPriceChange` from type `TaxedPrice` to `TaxedItemPrice`
  - :warning: changed property `nextValue` of type `SetShippingInfoTaxedPriceChange` from type `TaxedPrice` to `TaxedItemPrice`
  - :warning: changed property `previousValue` of type `SetShippingRateChange` from type `Money` to `ShippingRate`
  - :warning: changed property `nextValue` of type `SetShippingRateChange` from type `Money` to `ShippingRate`
  - :warning: changed property `previousValue` of type `SetStoreChange` from type `Reference` to `KeyReference`
  - :warning: changed property `nextValue` of type `SetStoreChange` from type `Reference` to `KeyReference`
  - :warning: changed property `price` of type `ShippingRate` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `freeAbove` of type `ShippingRate` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `amount` of type `SubRate` from type `integer` to `number`
  - :warning: changed property `channel` of type `SyncInfo` from type `Reference` to `ChannelReference`
  - :warning: changed property `syncedAt` of type `SyncInfo` from type `string` to `datetime`
  - :warning: changed property `amount` of type `TaxRate` from type `integer` to `number`
  - :warning: changed property `totalNet` of type `TaxedItemPrice` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `totalGross` of type `TaxedItemPrice` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `totalNet` of type `TaxedPrice` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `totalGross` of type `TaxedPrice` from type `Money` to `CentPrecisionMoney`
  - :warning: changed property `addedAt` of type `TextLineItem` from type `string` to `datetime`
  - :warning: changed property `quantity` of type `TextLineItem` from type `integer` to `number`
  - :warning: changed property `timestamp` of type `Transaction` from type `string` to `datetime`
  - :warning: changed property `amount` of type `Transaction` from type `Money` to `CentPrecisionMoney`
  </details>

  <details>
  <summary>Removed Property(s)</summary>
  - :warning: removed property `/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/` from type `CategoryOrderHints`
  - :warning: removed property `variantId` from type `LineItem`
  - :warning: removed property `fractionDigits` from type `Money`
  - :warning: removed property `type` from type `Money`
  - :warning: removed property `//` from type `ProductVariantChannelAvailabilityMap`
  - :warning: removed property `skus` from type `ProductVariantSelection`
  </details>

  <details>
  <summary>Added Property(s)</summary>
  - added property `catalogData` to type `AddAssetChange`
  - added property `variant` to type `AddAssetChange`
  - added property `attributeName` to type `AddEnumValueChange`
  - added property `variant` to type `AddExternalImageChange`
  - added property `variant` to type `AddPriceChange`
  - added property `catalogData` to type `AddToCategoryChange`
  - added property `custom` to type `Address`
  - added property `sources` to type `Asset`
  - added property `tags` to type `Asset`
  - added property `roles` to type `Associate`
  - added property `level` to type `AttributeDefinition`
  - added property `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/` to type `CategoryOrderHints`
  - added property `catalogData` to type `ChangeAssetNameChange`
  - added property `variant` to type `ChangeAssetNameChange`
  - added property `catalogData` to type `ChangeAssetOrderChange`
  - added property `variant` to type `ChangeAssetOrderChange`
  - added property `addedItems` to type `ChangeCartDiscountsChange`
  - added property `removedItems` to type `ChangeCartDiscountsChange`
  - added property `attributeName` to type `ChangeEnumValueLabelChange`
  - added property `attributeName` to type `ChangeEnumValueOrderChange`
  - added property `addedItems` to type `ChangeGroupsChange`
  - added property `removedItems` to type `ChangeGroupsChange`
  - added property `variant` to type `ChangePriceChange`
  - added property `catalogData` to type `ChangeSlugChange`
  - added property `key` to type `CustomLineItem`
  - added property `taxedPricePortions` to type `CustomLineItem`
  - added property `state` to type `CustomLineItem`
  - added property `taxCategory` to type `CustomLineItem`
  - added property `taxRate` to type `CustomLineItem`
  - added property `perMethodTaxRate` to type `CustomLineItem`
  - added property `discountedPricePerQuantity` to type `CustomLineItem`
  - added property `custom` to type `CustomLineItem`
  - added property `shippingDetails` to type `CustomLineItem`
  - added property `priceMode` to type `CustomLineItem`
  - added property `recurrenceInfo` to type `CustomLineItem`
  - added property `key` to type `Delivery`
  - added property `required` to type `FieldDefinition`
  - added property `shippingMethodKey` to type `ItemShippingTarget`
  - added property `key` to type `LineItem`
  - added property `productKey` to type `LineItem`
  - added property `price` to type `LineItem`
  - added property `totalPrice` to type `LineItem`
  - added property `discountedPricePerQuantity` to type `LineItem`
  - added property `taxedPrice` to type `LineItem`
  - added property `taxedPricePortions` to type `LineItem`
  - added property `state` to type `LineItem`
  - added property `taxRate` to type `LineItem`
  - added property `perMethodTaxRate` to type `LineItem`
  - added property `supplyChannel` to type `LineItem`
  - added property `distributionChannel` to type `LineItem`
  - added property `priceMode` to type `LineItem`
  - added property `lineItemMode` to type `LineItem`
  - added property `inventoryMode` to type `LineItem`
  - added property `shippingDetails` to type `LineItem`
  - added property `lastModifiedAt` to type `LineItem`
  - added property `recurrenceInfo` to type `LineItem`
  - added property `variant` to type `MoveImageToPositionChange`
  - added property `key` to type `Parcel`
  - added property `custom` to type `Parcel`
  - added property `key` to type `Price`
  - added property `country` to type `Price`
  - added property `customerGroup` to type `Price`
  - added property `channel` to type `Price`
  - added property `validFrom` to type `Price`
  - added property `validUntil` to type `Price`
  - added property `discounted` to type `Price`
  - added property `tiers` to type `Price`
  - added property `custom` to type `Price`
  - added property `recurrencePolicy` to type `Price`
  - added property `id` to type `ProductVariantAvailability`
  - added property `version` to type `ProductVariantAvailability`
  - added property `id` to type `ProductVariantChannelAvailability`
  - added property `version` to type `ProductVariantChannelAvailability`
  - added property `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/` to type `ProductVariantChannelAvailabilityMap`
  - added property `catalogData` to type `RemoveAssetChange`
  - added property `variant` to type `RemoveAssetChange`
  - added property `catalogData` to type `RemoveFromCategoryChange`
  - added property `variant` to type `RemoveImageChange`
  - added property `variant` to type `RemovePriceChange`
  - added property `key` to type `ReturnItem`
  - added property `custom` to type `ReturnItem`
  - added property `catalogData` to type `SetAssetCustomFieldChange`
  - added property `variant` to type `SetAssetCustomFieldChange`
  - added property `catalogData` to type `SetAssetCustomTypeChange`
  - added property `variant` to type `SetAssetCustomTypeChange`
  - added property `catalogData` to type `SetAssetDescriptionChange`
  - added property `variant` to type `SetAssetDescriptionChange`
  - added property `catalogData` to type `SetAssetKeyChange`
  - added property `variant` to type `SetAssetKeyChange`
  - added property `catalogData` to type `SetAssetSourcesChange`
  - added property `variant` to type `SetAssetSourcesChange`
  - added property `catalogData` to type `SetAssetTagsChange`
  - added property `variant` to type `SetAssetTagsChange`
  - added property `variant` to type `SetAttributeChange`
  - added property `addedItems` to type `SetChannelRolesChange`
  - added property `removedItems` to type `SetChannelRolesChange`
  - added property `addedItems` to type `SetCountriesChange`
  - added property `removedItems` to type `SetCountriesChange`
  - added property `customTypeId` to type `SetCustomLineItemCustomFieldChange`
  - added property `customLineItem` to type `SetCustomLineItemShippingDetailsChange`
  - added property `price` to type `SetDiscountedPriceChange`
  - added property `addedItems` to type `SetDistributionChannelsChange`
  - added property `removedItems` to type `SetDistributionChannelsChange`
  - added property `variant` to type `SetImageLabelChange`
  - added property `addedItems` to type `SetLanguagesChange`
  - added property `removedItems` to type `SetLanguagesChange`
  - added property `lineItemId` to type `SetLineItemDiscountedPriceChange`
  - added property `lineItemId` to type `SetLineItemDiscountedPricePerQuantityChange`
  - added property `lineItemId` to type `SetLineItemPriceChange`
  - added property `lineItemId` to type `SetLineItemProductSlugChange`
  - added property `lineItem` to type `SetLineItemShippingDetailsChange`
  - added property `variant` to type `SetLineItemShippingDetailsChange`
  - added property `lineItemId` to type `SetLineItemTaxAmountChange`
  - added property `lineItemId` to type `SetLineItemTaxRateChange`
  - added property `variant` to type `SetLineItemTaxedPriceChange`
  - added property `lineItemId` to type `SetLineItemTotalPriceChange`
  - added property `variant` to type `SetLineItemTotalPriceChange`
  - added property `catalogData` to type `SetMetaDescriptionChange`
  - added property `catalogData` to type `SetMetaKeywordsChange`
  - added property `catalogData` to type `SetMetaTitleChange`
  - added property `lineItemId` to type `SetOrderLineItemCustomFieldChange`
  - added property `lineItemId` to type `SetOrderLineItemCustomTypeChange`
  - added property `addedItems` to type `SetPermissionsChange`
  - added property `removedItems` to type `SetPermissionsChange`
  - added property `addedItems` to type `SetPricesChange`
  - added property `removedItems` to type `SetPricesChange`
  - added property `variant` to type `SetProductPriceCustomFieldChange`
  - added property `priceId` to type `SetProductPriceCustomFieldChange`
  - added property `customTypeId` to type `SetProductPriceCustomFieldChange`
  - added property `name` to type `SetProductPriceCustomFieldChange`
  - added property `variant` to type `SetProductPriceCustomTypeChange`
  - added property `priceId` to type `SetProductPriceCustomTypeChange`
  - added property `addedItems` to type `SetProductSelectionsChange`
  - added property `removedItems` to type `SetProductSelectionsChange`
  - added property `variant` to type `SetProductVariantKeyChange`
  - added property `addedItems` to type `SetReservationsChange`
  - added property `removedItems` to type `SetReservationsChange`
  - added property `variant` to type `SetSkuChange`
  - added property `addedItems` to type `SetStateRolesChange`
  - added property `removedItems` to type `SetStateRolesChange`
  - added property `addedItems` to type `SetStoresChange`
  - added property `removedItems` to type `SetStoresChange`
  - added property `addedItems` to type `SetSupplyChannelsChange`
  - added property `removedItems` to type `SetSupplyChannelsChange`
  - added property `addedItems` to type `SetTransitionsChange`
  - added property `removedItems` to type `SetTransitionsChange`
  - added property `key` to type `TaxRate`
  - added property `taxPortions` to type `TaxedItemPrice`
  - added property `totalTax` to type `TaxedItemPrice`
  - added property `taxPortions` to type `TaxedPrice`
  - added property `totalTax` to type `TaxedPrice`
  - added property `key` to type `TextLineItem`
  - added property `custom` to type `Transaction`
  - added property `customLineItemId` to type `TransitionCustomLineItemStateChange`
  </details>

- [#1209](https://github.com/commercetools/commercetools-sdk-typescript/pull/1209) [`77c6132`](https://github.com/commercetools/commercetools-sdk-typescript/commit/77c61328d222dbbbde3e79c63c2bb76df3f012a6) Thanks [@ajimae](https://github.com/ajimae)! - release all packages

### Patch Changes

- Updated dependencies [[`77c6132`](https://github.com/commercetools/commercetools-sdk-typescript/commit/77c61328d222dbbbde3e79c63c2bb76df3f012a6)]:
  - @commercetools/ts-client@4.8.0

## 5.10.0

### Minor Changes

- [#1205](https://github.com/commercetools/commercetools-sdk-typescript/pull/1205) [`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04) Thanks [@ajimae](https://github.com/ajimae)! - release packages

### Patch Changes

- [#1205](https://github.com/commercetools/commercetools-sdk-typescript/pull/1205) [`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04) Thanks [@ajimae](https://github.com/ajimae)! - release packages

- [#1205](https://github.com/commercetools/commercetools-sdk-typescript/pull/1205) [`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04) Thanks [@ajimae](https://github.com/ajimae)! - release changeset

- Updated dependencies [[`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04), [`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04), [`1ceb53b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1ceb53bf00457494ad061d7fe77a8d1b5a010d04)]:
  - @commercetools/ts-client@4.7.0

## 5.9.0

### Minor Changes

- [#1203](https://github.com/commercetools/commercetools-sdk-typescript/pull/1203) [`e0b0fcc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e0b0fccaed4812c0ac47b0c8c4724e81174b0255) Thanks [@ajimae](https://github.com/ajimae)! - release packages

### Patch Changes

- [#1203](https://github.com/commercetools/commercetools-sdk-typescript/pull/1203) [`e0b0fcc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e0b0fccaed4812c0ac47b0c8c4724e81174b0255) Thanks [@ajimae](https://github.com/ajimae)! - release changeset

- Updated dependencies [[`e0b0fcc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e0b0fccaed4812c0ac47b0c8c4724e81174b0255), [`e0b0fcc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e0b0fccaed4812c0ac47b0c8c4724e81174b0255)]:
  - @commercetools/ts-client@4.6.0

## 5.8.0

### Minor Changes

- [#1201](https://github.com/commercetools/commercetools-sdk-typescript/pull/1201) [`f7c3101`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f7c31015ae0e18111c31fcdb3baee8e964bad99b) Thanks [@ajimae](https://github.com/ajimae)! - release packages

### Patch Changes

- Updated dependencies [[`f7c3101`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f7c31015ae0e18111c31fcdb3baee8e964bad99b)]:
  - @commercetools/ts-client@4.5.0

## 5.7.0

### Minor Changes

- [#1191](https://github.com/commercetools/commercetools-sdk-typescript/pull/1191) [`2898e78`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2898e7831c731b611628e6516d99e19fa32d402e) Thanks [@ShipilA](https://github.com/ShipilA)! - **Api changes**

  <details>
  <summary>Required Property(s)</summary>
  - changed property `variantSelection` of type `ProductSelectionProductAddedMessage` to be optional
  - changed property `variantExclusion` of type `ProductSelectionProductExcludedMessage` to be optional
  - changed property `oldVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessage` to be optional
  - changed property `newVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessage` to be optional
  - changed property `oldVariantSelection` of type `ProductSelectionVariantSelectionChangedMessage` to be optional
  - changed property `newVariantSelection` of type `ProductSelectionVariantSelectionChangedMessage` to be optional
  - changed property `variantSelection` of type `ProductSelectionProductAddedMessagePayload` to be optional
  - changed property `variantExclusion` of type `ProductSelectionProductExcludedMessagePayload` to be optional
  - changed property `oldVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessagePayload` to be optional
  - changed property `newVariantExclusion` of type `ProductSelectionVariantExclusionChangedMessagePayload` to be optional
  - changed property `oldVariantSelection` of type `ProductSelectionVariantSelectionChangedMessagePayload` to be optional
  - changed property `newVariantSelection` of type `ProductSelectionVariantSelectionChangedMessagePayload` to be optional
  </details>

  <details>
  <summary>Added Property(s)</summary>
  - added property `interfaceId` to type `MyTransactionDraft`
  - added property `interfaceId` to type `Transaction`
  - added property `interfaceId` to type `TransactionDraft`
  </details>

  <details>
  <summary>Added Type(s)</summary>
  - added type `PaymentTransactionInterfaceIdSetMessage`
  - added type `PaymentTransactionInterfaceIdSetMessagePayload`
  - added type `PaymentSetTransactionInterfaceIdAction`
  </details>

- [#1191](https://github.com/commercetools/commercetools-sdk-typescript/pull/1191) [`2898e78`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2898e7831c731b611628e6516d99e19fa32d402e) Thanks [@ShipilA](https://github.com/ShipilA)! - Regular release

### Patch Changes

- Updated dependencies [[`e2fb7fd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e2fb7fd778f849f2a1da7f5abf0643c699bb8968), [`2898e78`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2898e7831c731b611628e6516d99e19fa32d402e)]:
  - @commercetools/ts-client@4.4.0

## 5.6.0

### Minor Changes

- [#1182](https://github.com/commercetools/commercetools-sdk-typescript/pull/1182) [`f3200d7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f3200d7fda6fd65f3227d72d7f046cb70e9fc812) Thanks [@ShipilA](https://github.com/ShipilA)! - Regular release

### Patch Changes

- Updated dependencies [[`f3200d7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f3200d7fda6fd65f3227d72d7f046cb70e9fc812)]:
  - @commercetools/ts-client@4.3.0

## 5.5.0

### Minor Changes

- [#1135](https://github.com/commercetools/commercetools-sdk-typescript/pull/1135) [`e46b15e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e46b15ee15b2910bc16a49bc4ed9695ca0f6ce8d) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Added Type(s)</summary>
  - added type `TooManyRequestsError`
  - added type `GraphQLTooManyRequestsError`
  - added type `GraphQLErrorObject`
  </details>

  <details>
  <summary>Changed Property(s)</summary>
  - :warning: changed property `extensions` of type `GraphQLError` from type `object` to `GraphQLErrorObject`
  </details>

- [#1140](https://github.com/commercetools/commercetools-sdk-typescript/pull/1140) [`7c8b972`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7c8b9720037996099ebed2c8b1f72d1bc480a894) Thanks [@ajimae](https://github.com/ajimae)! - Update and unify common type definitions

## 5.4.1

### Patch Changes

- Updated dependencies [[`98415e1`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98415e159e68fc59d7fcdb11cd406e9995fa4430)]:
  - @commercetools/ts-client@4.0.0

## 5.4.0

### Minor Changes

- [#1107](https://github.com/commercetools/commercetools-sdk-typescript/pull/1107) [`8ec7476`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8ec74760134be5e75ec95ad77746f54218cefd2f) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Added Enum(s)</summary>
  - added enum `ApplicationStoppedByGroupBestDeal` to type `DiscountCodeState`
  - added enum `payment-method` to type `ReferenceTypeId`
  </details>

## 5.3.0

### Minor Changes

- [#1074](https://github.com/commercetools/commercetools-sdk-typescript/pull/1074) [`7aabe1f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7aabe1f5e5d74682d2e95a18db0a1bb6c3ed69ed) Thanks [@ajimae](https://github.com/ajimae)! - new sdk release

### Patch Changes

- Updated dependencies [[`7aabe1f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7aabe1f5e5d74682d2e95a18db0a1bb6c3ed69ed)]:
  - @commercetools/ts-client@3.4.0

## 5.2.1

### Patch Changes

- [#961](https://github.com/commercetools/commercetools-sdk-typescript/pull/961) [`28f0578`](https://github.com/commercetools/commercetools-sdk-typescript/commit/28f057841fcfd26b30ff41167dc88ada3c143371) Thanks [@ajimae](https://github.com/ajimae)! - Release changes for type modification

## 5.2.0

### Minor Changes

- [#941](https://github.com/commercetools/commercetools-sdk-typescript/pull/941) [`745f2c0`](https://github.com/commercetools/commercetools-sdk-typescript/commit/745f2c06e2cd0b32486e09ab53fdde43c31ef6d3) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Removed Enum(s)</summary>
  - :warning: removed enum `setAsssetKey` from type `UpdateType`
  </details>

  <details>
  <summary>Added Enum(s)</summary>
  - added enum `setAssetKey` to type `UpdateType`
  </details>

- [#936](https://github.com/commercetools/commercetools-sdk-typescript/pull/936) [`f702837`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f702837c3ec7fde11641c94abb5ed4dab138acf9) Thanks [@barbara79](https://github.com/barbara79)! - updated documentation with client v3

## 5.1.0

### Minor Changes

- [#907](https://github.com/commercetools/commercetools-sdk-typescript/pull/907) [`c5344e3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c5344e33e0cb7583f8235c1fb0cfa22393e12a42) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Required Property(s)</summary>
  - :warning: changed property `triggerPattern` of type `ChangeTargetPatternChangeValue` to be required
  </details>

## 5.0.0

### Major Changes

- [#896](https://github.com/commercetools/commercetools-sdk-typescript/pull/896) [`f9b8cb6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f9b8cb605d99fe5ece13bdc3c152eb4818e19b3b) Thanks [@lojzatran](https://github.com/lojzatran)! - Remove support of nodejs 16

### Patch Changes

- Updated dependencies [[`f9b8cb6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f9b8cb605d99fe5ece13bdc3c152eb4818e19b3b)]:
  - @commercetools/sdk-client-v2@3.0.0

## 4.10.0

### Minor Changes

- [#891](https://github.com/commercetools/commercetools-sdk-typescript/pull/891) [`4a003ca`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4a003ca0f870ec7edb63d21e8fb2932b602fb876) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Added Resource(s)</summary>
  - added resource `/{projectKey}/graphql`
  </details>

  <details>
  <summary>Added Method(s)</summary>
  - added method `apiRoot.withProjectKeyValue().graphql().post()`
  </details>

  <details>
  <summary>Added Type(s)</summary>
  - added type `GraphQLRequest`
  - added type `GraphQLResponse`
  - added type `GraphQLError`
  - added type `GraphQLErrorLocation`
  - added type `GraphQLVariablesMap`
  - added type `ChangeTargetPatternChangeValue`
  - added type `PatternComponent`
  </details>

  <details>
  <summary>Required Property(s)</summary>
  - changed property `id` of type `ModifiedBy` to be optional
  </details>

## 4.9.0

### Minor Changes

- [#890](https://github.com/commercetools/commercetools-sdk-typescript/pull/890) [`9da41f4`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9da41f4118c60009eed56f64d833432d9c0c5403) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Added Resource(s)</summary>
  - added resource `/{projectKey}/graphql`
  </details>

  <details>
  <summary>Added Method(s)</summary>
  - added method `apiRoot.withProjectKeyValue().graphql().post()`
  </details>

  <details>
  <summary>Added Type(s)</summary>
  - added type `GraphQLRequest`
  - added type `GraphQLResponse`
  - added type `GraphQLError`
  - added type `GraphQLErrorLocation`
  - added type `GraphQLVariablesMap`
  - added type `ChangeTargetPatternChangeValue`
  - added type `PatternComponent`
  </details>

  <details>
  <summary>Required Property(s)</summary>
  - changed property `id` of type `ModifiedBy` to be optional
  </details>

## 4.8.0

### Minor Changes

- [#878](https://github.com/commercetools/commercetools-sdk-typescript/pull/878) [`90ece88`](https://github.com/commercetools/commercetools-sdk-typescript/commit/90ece88d52bc1ff7d01c070bb9e548dd46eb2cda) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Required Property(s)</summary>
  - changed property `id` of type `ModifiedBy` to be optional
  </details>

## 4.7.0

### Minor Changes

- [#865](https://github.com/commercetools/commercetools-sdk-typescript/pull/865) [`15e3913`](https://github.com/commercetools/commercetools-sdk-typescript/commit/15e3913bb9625e664ca7ecb13e4932c293ffc32b) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Required Property(s)</summary>
  - changed property `id` of type `ModifiedBy` to be optional
  </details>

## 4.6.0

### Minor Changes

- [#853](https://github.com/commercetools/commercetools-sdk-typescript/pull/853) [`74f1c30`](https://github.com/commercetools/commercetools-sdk-typescript/commit/74f1c302b68aa741accfcf101138520c4488191e) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Required Property(s)</summary>
  - changed property `id` of type `ModifiedBy` to be optional
  </details>

## 4.5.0

### Minor Changes

- [#844](https://github.com/commercetools/commercetools-sdk-typescript/pull/844) [`03e722b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/03e722bbdc795382f4d8325eeb196ed772bf21cd) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Required Property(s)</summary>
  - changed property `id` of type `ModifiedBy` to be optional
  </details>

## 4.4.0

### Minor Changes

- [#837](https://github.com/commercetools/commercetools-sdk-typescript/pull/837) [`cd54482`](https://github.com/commercetools/commercetools-sdk-typescript/commit/cd544822e289be7c62d4287338f1fd943f1a5823) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Required Property(s)</summary>
  - changed property `id` of type `ModifiedBy` to be optional
  </details>

## 4.3.0

### Minor Changes

- [#602](https://github.com/commercetools/commercetools-sdk-typescript/pull/602) [`7a85bab`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7a85bab874e7bba76ecd49e776a651cd02dc20f6) Thanks [@ajimae](https://github.com/ajimae)! - Add resources as global exports

## 4.2.0

### Minor Changes

- [#587](https://github.com/commercetools/commercetools-sdk-typescript/pull/587) [`4b14237`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4b14237f89e171c2a622432665308e68d3278f14) Thanks [@ct-sdks](https://github.com/apps/ct-sdks)! - **History changes**

  <details>
  <summary>Removed Type(s)</summary>
  - :warning: removed type `ChannelRole`
  - :warning: removed type `StateRole`
  - :warning: removed type `StateType`
  </details>

  <details>
  <summary>Added Type(s)</summary>
  - added type `AttributeLocalizedEnumValue`
  - added type `AttributePlainEnumValue`
  - added type `ChannelRoleEnum`
  - added type `StateRoleEnum`
  - added type `StateTypeEnum`
  </details>

  <details>
  <summary>Removed Property(s)</summary>
  - :warning: removed property `previousValue` from type `AddAddressChange`
  - :warning: removed property `previousValue` from type `AddLocationChange`
  - :warning: removed property `nextValue` from type `RemoveLocationChange`
  - :warning: removed property `nextValue` from type `RemoveTaxRateChange`
  </details>

  <details>
  <summary>Changed Property(s)</summary>
  - :warning: changed property `previousValue` of type `AddChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
  - :warning: changed property `nextValue` of type `AddChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
  - :warning: changed property `nextValue` of type `AddLocalizedEnumValueChange` from type `LocalizedEnumValue` to `AttributeLocalizedEnumValue`
  - :warning: changed property `nextValue` of type `AddPlainEnumValueChange` from type `EnumValue` to `AttributePlainEnumValue`
  - :warning: changed property `previousValue` of type `AddStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
  - :warning: changed property `nextValue` of type `AddStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
  - :warning: changed property `previousValue` of type `ChangeStateTypeChange` from type `StateType` to `StateTypeEnum`
  - :warning: changed property `nextValue` of type `ChangeStateTypeChange` from type `StateType` to `StateTypeEnum`
  - :warning: changed property `previousValue` of type `RemoveChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
  - :warning: changed property `nextValue` of type `RemoveChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
  - :warning: changed property `previousValue` of type `RemoveStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
  - :warning: changed property `nextValue` of type `RemoveStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
  - :warning: changed property `previousValue` of type `SetChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
  - :warning: changed property `nextValue` of type `SetChannelRolesChange` from type `ChannelRole[]` to `ChannelRoleEnum[]`
  - :warning: changed property `previousValue` of type `SetStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
  - :warning: changed property `nextValue` of type `SetStateRolesChange` from type `StateRole[]` to `StateRoleEnum[]`
  </details>

## 4.1.0

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

## 4.0.0

### Major Changes

- [#551](https://github.com/commercetools/commercetools-sdk-typescript/pull/551) [`9e7939a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9e7939a1df234fd1f4f77c60f4ff75b31d7fc3fd) Thanks [@github-actions](https://github.com/apps/github-actions)! - BREAKING CHANGE:
  - fix URI parameters to be URI encoded

### Minor Changes

- [#527](https://github.com/commercetools/commercetools-sdk-typescript/pull/527) [`00c6176`](https://github.com/commercetools/commercetools-sdk-typescript/commit/00c617692543f9a8d0ac64e81d583f89e002e81b) Thanks [@github-actions](https://github.com/apps/github-actions)! - **History changes**

  <details>
  <summary>Added Property(s)</summary>
  - added property `businessUnit` to type `Record`
  </details>

  <details>
  <summary>Changed Property(s)</summary>
  - :warning: changed property `previousValue` of type `SetNameChange` from type `LocalizedString` to `string`
  - :warning: changed property `nextValue` of type `SetNameChange` from type `LocalizedString` to `string`
  </details>

  <details>
  <summary>Added QueryParameter(s)</summary>
  - added query parameter `businessUnit` to method `get /{projectKey}`
  - added query parameter `businessUnit` to method `get /{projectKey}/{resourceType}`
  - added query parameter `businessUnit` to method `get /{projectKey}/{resourceType}/{ID}`
  </details>

### Patch Changes

- Updated dependencies [[`a6d0df2`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a6d0df2034b72504db2aa2d13a8d3726d97cc881)]:
  - @commercetools/sdk-client-v2@2.2.2

## 3.6.0

### Minor Changes

- [`0e0c5bf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/0e0c5bfc7e9f9c0c30dfdd520aed768122c7933d) Thanks [@jenschude](https://github.com/jenschude)! - **History changes**

  <details>
  <summary>Added QueryParameter(s)</summary>
  - added query parameter `associateId` to method `get /{projectKey}`
  - added query parameter `associateId` to method `get /{projectKey}/{resourceType}`
  - added query parameter `associateId` to method `get /{projectKey}/{resourceType}/{ID}`
  </details>

  <details>
  <summary>Added Property(s)</summary>
  - added property `associate` to type `ModifiedBy`
  </details>

## 3.5.0

### Minor Changes

- [#514](https://github.com/commercetools/commercetools-sdk-typescript/pull/514) [`800c52f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/800c52f46dfef01ba74322c006045587efc570db) Thanks [@github-actions](https://github.com/apps/github-actions)! - **History changes**

  <details>
  <summary>Added Type(s)</summary>
  - added type `AddInheritedAssociateChange`
  - added type `AssociateRoleLabel`
  - added type `ChangeBuyerAssignableChange`
  - added type `ChangeInheritedAssociateChange`
  - added type `InheritedAssociate`
  - added type `InheritedAssociateRoleAssignment`
  - added type `Permission`
  - added type `RemoveInheritedAssociateChange`
  - added type `SetLocalizedNameChange`
  - added type `SetPermissionsChange`
  </details>

  <details>
  <summary>Added Enum(s)</summary>
  - added enum `associate-role` to type `ChangeHistoryResourceType`
  </details>

## 3.4.2

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

## 3.4.1

### Patch Changes

- [#483](https://github.com/commercetools/commercetools-sdk-typescript/pull/483) [`c87f6bf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c87f6bf6efd3b7bd66027829378108b1f260a325) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 3.4.0

### Minor Changes

- [#478](https://github.com/commercetools/commercetools-sdk-typescript/pull/478) [`98c6bac`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98c6bace1608889c16373e1a83451cf5d7a7d140) Thanks [@ajimae](https://github.com/ajimae)! - remove all remaining `querystring` package instances.

## 3.3.0

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

## 3.2.1

### Patch Changes

- [#453](https://github.com/commercetools/commercetools-sdk-typescript/pull/453) [`a83e653`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a83e653c986e50f31f71546edc721263d29990b5) Thanks [@ajimae](https://github.com/ajimae)! - - Remove all `querystring` dependency
  - Add qs dependency to requiring package
  - Refactor code to accommodate new implementation
- Updated dependencies [[`a83e653`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a83e653c986e50f31f71546edc721263d29990b5)]:
  - @commercetools/sdk-client-v2@2.1.6

## 3.2.0

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

- Updated dependencies [[`98d2d7c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98d2d7ce2abad1d8eb3466f4f3df1b877f144920)]:
  - @commercetools/sdk-client-v2@2.1.1

## 3.1.0

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

## 3.0.0

### Major Changes

- [#341](https://github.com/commercetools/commercetools-sdk-typescript/pull/341) [`385682f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/385682fef6f0efa39a51570434d4d11789e0a220) Thanks [@ajimae](https://github.com/ajimae)! - Upgrade node versions to 14 and set engine to >= 14

### Patch Changes

- Updated dependencies [[`385682f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/385682fef6f0efa39a51570434d4d11789e0a220)]:
  - @commercetools/sdk-client-v2@2.0.0

## 2.6.0

### Minor Changes

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

## 1.20.0

### Minor Changes

- [#146](https://github.com/commercetools/commercetools-sdk-typescript/pull/146) [`1f6f830`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1f6f830bb25d98c15ac96e06635c5e2aa07fe1e8) Thanks [@ajimae](https://github.com/ajimae)! - release a new version of typescript

### Patch Changes

- [#137](https://github.com/commercetools/commercetools-sdk-typescript/pull/137) [`f119f8a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f119f8a26255790a6faf3667e07b500497a08c21) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.19.0

### Minor Changes

- [#120](https://github.com/commercetools/commercetools-sdk-typescript/pull/120) [`4d01dba`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4d01dbac9cfe38faaa0a11d3154a016759856772) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.18.1

### Patch Changes

- [#108](https://github.com/commercetools/commercetools-sdk-typescript/pull/108) [`026d91a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/026d91a747b445b0913eabb7eb91ecc7f3eb257e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.18.0

### Minor Changes

- [#93](https://github.com/commercetools/commercetools-sdk-typescript/pull/93) [`70f4267`](https://github.com/commercetools/commercetools-sdk-typescript/commit/70f4267958268c3a6f592c8cd10190e7acf91316) Thanks [@emmenko](https://github.com/emmenko)! - Update development tooling and monorepo setup.

* [#105](https://github.com/commercetools/commercetools-sdk-typescript/pull/105) [`274baaf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/274baaf85d1cac0379842fea68315a8d28c87821) Thanks [@ajimae](https://github.com/ajimae)! - new sdk version release

### Patch Changes

- [#94](https://github.com/commercetools/commercetools-sdk-typescript/pull/94) [`01af929`](https://github.com/commercetools/commercetools-sdk-typescript/commit/01af9297a27ba1b9f423a723b9cf02b30fa1f73b) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 1.17.1

### Patch Changes

- [#91](https://github.com/commercetools/commercetools-sdk-typescript/pull/91) [`2bc967a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2bc967abcddad61cecbb4ab020048fb33cc35608) Thanks [@emmenko](https://github.com/emmenko)! - Update readme structure.
