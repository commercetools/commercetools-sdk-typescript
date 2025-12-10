**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `CartMergeMode`
- added type `MergeCartDraft`
- added type `AddressRole`
- added type `RecurringOrderFailureError`
- added type `GraphQLRecurringOrderFailureError`
- added type `CartFrozenMessage`
- added type `CartUnfrozenMessage`
- added type `CustomerBillingAddressAddedMessage`
- added type `CustomerBillingAddressRemovedMessage`
- added type `CustomerExternalIdSetMessage`
- added type `CustomerShippingAddressAddedMessage`
- added type `CustomerShippingAddressRemovedMessage`
- added type `OrderPaymentRemovedMessage`
- added type `RecurringOrderFailedMessage`
- added type `CartFrozenMessagePayload`
- added type `CartUnfrozenMessagePayload`
- added type `CustomerBillingAddressAddedMessagePayload`
- added type `CustomerBillingAddressRemovedMessagePayload`
- added type `CustomerExternalIdSetMessagePayload`
- added type `CustomerShippingAddressAddedMessagePayload`
- added type `CustomerShippingAddressRemovedMessagePayload`
- added type `OrderPaymentRemovedMessagePayload`
- added type `RecurringOrderFailedMessagePayload`
</details>

<details>
<summary>Deprecated Type(s)</summary>

- type `ProductLegacySetSkuAction` is removed
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().carts().customerIdWithCustomerIdValueMerge().post()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().carts().customerIdWithCustomerIdValueMerge().post()`
</details>

<details>
<summary>Required Property(s)</summary>

- :warning: changed property `customerGroupAssignments` of type `CustomerGroupAssignmentsSetMessage` to be required
- :warning: changed property `customerGroupAssignments` of type `CustomerGroupAssignmentsSetMessagePayload` to be required
</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `payment` from type `OrderPaymentAddedMessage`
- :warning: removed property `payment` from type `OrderPaymentAddedMessagePayload`
- :warning: removed property `tierMinimumQuantity` from type `StandalonePriceRemovePriceTierAction`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `addressRoles` to type `BusinessUnitAddressChangedMessage`
- added property `addressRoles` to type `BusinessUnitAddressRemovedMessage`
- added property `addressRoles` to type `CustomerAddressChangedMessage`
- added property `addressRoles` to type `CustomerAddressRemovedMessage`
- added property `email` to type `CustomerDeletedMessage`
- added property `oldEmail` to type `CustomerEmailChangedMessage`
- added property `oldCustomerGroupAssignments` to type `CustomerGroupAssignmentsSetMessage`
- added property `sku` to type `InventoryEntryQuantitySetMessage`
- added property `paymentRef` to type `OrderPaymentAddedMessage`
- added property `addressRoles` to type `BusinessUnitAddressChangedMessagePayload`
- added property `addressRoles` to type `BusinessUnitAddressRemovedMessagePayload`
- added property `addressRoles` to type `CustomerAddressChangedMessagePayload`
- added property `addressRoles` to type `CustomerAddressRemovedMessagePayload`
- added property `email` to type `CustomerDeletedMessagePayload`
- added property `oldEmail` to type `CustomerEmailChangedMessagePayload`
- added property `oldCustomerGroupAssignments` to type `CustomerGroupAssignmentsSetMessagePayload`
- added property `sku` to type `InventoryEntryQuantitySetMessagePayload`
- added property `paymentRef` to type `OrderPaymentAddedMessagePayload`
- added property `minimumQuantity` to type `StandalonePriceRemovePriceTierAction`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/carts/customer-id={customerId}/merge`
- added resource `/{projectKey}/in-store/key={storeKey}/carts/customer-id={customerId}/merge`
</details>

**History changes**

<details>
<summary>Added Type(s)</summary>

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

**Checkout changes**

<details>
<summary>Added Type(s)</summary>

- added type `AllowedOrigins`
- added type `Application`
- added type `ApplicationAgreement`
- added type `ApplicationAgreementDraft`
- added type `ApplicationAgreementStatus`
- added type `ApplicationAgreementType`
- added type `ApplicationDraft`
- added type `ApplicationLogo`
- added type `ApplicationMode`
- added type `ApplicationStatus`
- added type `ApplicationUpdateAction`
- added type `ApplicationUpdateActions`
- added type `DiscountsConfiguration`
- added type `PaginatedApplication`
- added type `PaymentsConfiguration`
- added type `AddAllowedOriginUpdateAction`
- added type `AddApplicationAgreementUpdateAction`
- added type `AddCountryUpdateAction`
- added type `RemoveAllowedOriginUpdateAction`
- added type `RemoveApplicationAgreementUpdateAction`
- added type `RemoveCountryUpdateAction`
- added type `ReorderApplicationAgreementUpdateAction`
- added type `SetActivePaymentComponentTypeUpdateAction`
- added type `SetAllowAllOriginsUpdateAction`
- added type `SetAllowedOriginsUpdateAction`
- added type `SetApplicationAgreementNameUpdateAction`
- added type `SetApplicationAgreementStatusUpdateAction`
- added type `SetApplicationAgreementTextUpdateAction`
- added type `SetApplicationAgreementTypeUpdateAction`
- added type `SetApplicationAgreementsUpdateAction`
- added type `SetApplicationLogoUpdateAction`
- added type `SetApplicationNameUpdateAction`
- added type `SetApplicationStatusUpdateAction`
- added type `SetCountriesUpdateAction`
- added type `SetDescriptionUpdateAction`
- added type `SetDiscountsConfigurationUpdateAction`
- added type `SetPaymentReturnUrlUpdateAction`
- added type `SetPaymentsConfigurationUpdateAction`
- added type `CreatedBy`
- added type `LastModifiedBy`
- added type `LocalizedString`
- added type `LocalizedUrl`
- added type `ConcurrentModificationError`
- added type `DuplicateFieldWithConflictingResourceError`
- added type `ErrorResponse`
- added type `InvalidFieldError`
- added type `InvalidOperationError`
- added type `MaxResourceLimitExceededError`
- added type `MissingProjectKeyError`
- added type `ReferencedResourceNotFoundError`
- added type `ServiceUnavailableError`
- added type `SyntaxErrorError`
- added type `AutomatedReversalConfiguration`
- added type `ConnectorDeploymentReference`
- added type `DisplayInfo`
- added type `PaginatedPaymentIntegration`
- added type `PaymentComponentType`
- added type `PaymentIntegration`
- added type `PaymentIntegrationDraft`
- added type `PaymentIntegrationStatus`
- added type `PaymentIntegrationType`
- added type `SortingInfo`
- added type `PaymentIntegrationUpdateAction`
- added type `PaymentIntegrationUpdateActions`
- added type `SetAutomatedReversalConfigurationPredicateUpdateAction`
- added type `SetAutomatedReversalConfigurationStatusUpdateAction`
- added type `SetAutomatedReversalConfigurationUpdateAction`
- added type `SetConnectorDeploymentUpdateAction`
- added type `SetDisplayInfoDescriptionUpdateAction`
- added type `SetDisplayInfoLabelUpdateAction`
- added type `SetDisplayInfoLogoUrlUpdateAction`
- added type `SetDisplayInfoPayButtonTextUpdateAction`
- added type `SetDisplayInfoUpdateAction`
- added type `SetKeyUpdateAction`
- added type `SetNameUpdateAction`
- added type `SetPredicateUpdateAction`
- added type `SetSortingInfoUpdateAction`
- added type `SetStatusUpdateAction`
- added type `SetTypeUpdateAction`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `deployment` to type `ReferenceTypeId`
</details>

<details>
<summary>Required Property(s)</summary>

- changed property `detailedErrorMessage` of type `InvalidJsonInputError` to be optional
</details>

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `application` of type `Transaction` from type `ApplicationResourceIdentifier` to `ApplicationReference`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `resourceIdentifier` to type `ResourceNotFoundError`
- added property `resourceId` to type `ResourceNotFoundError`
</details>

<details>
<summary>Changed MethodResponseBody(s)</summary>

- :warning: changed response body for `400: application/json` of method `post /{projectKey}/transactions` from type `null` to `ErrorResponse`
- :warning: changed response body for `400: application/json` of method `post /{projectKey}/payment-intents/{paymentId}` from type `null` to `ErrorResponse`
- :warning: changed response body for `400: application/json` of method `get /{projectKey}/transactions/{id}` from type `null` to `ErrorResponse`
- :warning: changed response body for `400: application/json` of method `get /{projectKey}/transactions/key={key}` from type `null` to `ErrorResponse`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().paymentIntegrations().get()`
- added method `apiRoot.withProjectKey().paymentIntegrations().post()`
- added method `apiRoot.withProjectKey().applications().get()`
- added method `apiRoot.withProjectKey().applications().post()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withId().get()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withId().head()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withId().post()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withId().delete()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withKey().get()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withKey().post()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withKey().head()`
- added method `apiRoot.withProjectKey().paymentIntegrations().withKey().delete()`
- added method `apiRoot.withProjectKey().applications().withId().get()`
- added method `apiRoot.withProjectKey().applications().withId().head()`
- added method `apiRoot.withProjectKey().applications().withId().post()`
- added method `apiRoot.withProjectKey().applications().withId().delete()`
- added method `apiRoot.withProjectKey().applications().withKey().get()`
- added method `apiRoot.withProjectKey().applications().withKey().post()`
- added method `apiRoot.withProjectKey().applications().withKey().head()`
- added method `apiRoot.withProjectKey().applications().withKey().delete()`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/payment-integrations`
- added resource `/{projectKey}/applications`
- added resource `/{projectKey}/payment-integrations/{id}`
- added resource `/{projectKey}/payment-integrations/key={key}`
- added resource `/{projectKey}/applications/{id}`
- added resource `/{projectKey}/applications/key={key}`
</details>
