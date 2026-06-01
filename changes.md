**Api changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `ReserveOnCart` to type `InventoryMode`
- added enum `reservation` to type `ReferenceTypeId`
- added enum `reservation` to type `ResourceTypeId`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `ReservationReference`
- added type `CartSetReservationExpirationInMinutesAction`
- added type `NonStandardCurrency`
- added type `CircularDependencyError`
- added type `ExtensionChainTooDeepError`
- added type `ExtensionChainTooWideError`
- added type `ExtensionDependencyExistsError`
- added type `LineItemQuantityAboveLimitError`
- added type `LineItemQuantityBelowLimitError`
- added type `MissingDependencyError`
- added type `GraphQLCircularDependencyError`
- added type `GraphQLExtensionChainTooDeepError`
- added type `GraphQLExtensionChainTooWideError`
- added type `GraphQLExtensionDependencyExistsError`
- added type `GraphQLLineItemQuantityAboveLimitError`
- added type `GraphQLLineItemQuantityBelowLimitError`
- added type `GraphQLMissingDependencyError`
- added type `ExtensionAdditionalContext`
- added type `ExtensionAdditionalContextDraft`
- added type `ExtensionReference`
- added type `ExtensionResourceIdentifier`
- added type `ExtensionSetAdditionalContextAction`
- added type `ExtensionSetDependenciesAction`
- added type `ExtensionSetExpansionPathsAction`
- added type `InventoryEntryStockLevels`
- added type `InventoryEntrySetReorderPointAction`
- added type `InventoryEntrySetReservationExpirationInMinutesAction`
- added type `InventoryEntrySetSafetyStockAction`
- added type `InventoryEntryOutOfStockMessage`
- added type `InventoryEntryReorderPointMessage`
- added type `InventoryEntryReservationExpirationInMinutesSetMessage`
- added type `InventoryEntrySafetyStockMessage`
- added type `InventoryEntryOutOfStockMessagePayload`
- added type `InventoryEntryReorderPointMessagePayload`
- added type `InventoryEntryReservationExpirationInMinutesSetMessagePayload`
- added type `InventoryEntrySafetyStockMessagePayload`
- added type `InventoryConfiguration`
- added type `ProjectSetReleaseExpiredReservationsAction`
- added type `ProjectSetReservationExpirationInMinutesAction`
- added type `Reservation`
- added type `ReservationState`
- added type `CannotChangeReservationExpiryWarning`
- added type `CannotCreateReservationWarning`
- added type `CannotUpdateReservationWarning`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `warnings` to type `Cart`
- added property `reservation` to type `LineItem`
- added property `dependencies` to type `Extension`
- added property `expansionPaths` to type `Extension`
- added property `additionalContext` to type `Extension`
- added property `dependencies` to type `ExtensionDraft`
- added property `expansionPaths` to type `ExtensionDraft`
- added property `additionalContext` to type `ExtensionDraft`
- added property `oldResource` to type `ExtensionInput`
- added property `reservationExpirationInMinutes` to type `InventoryEntry`
- added property `stockLevels` to type `InventoryEntry`
- added property `reservationExpirationInMinutes` to type `InventoryEntryDraft`
- added property `stockLevels` to type `InventoryEntryDraft`
- added property `inventory` to type `Project`
</details>

**Import changes**

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/product-tailorings`
- added resource `/{projectKey}/product-tailorings/import-containers`
- added resource `/{projectKey}/product-tailorings/import-containers/{importContainerKey}`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `product-tailoring` to type `ImportResourceType`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `ProductTailoringImportRequest`
- added type `ProductVariantTailoringImport`
- added type `ProductTailoringImport`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKeyValue().productTailorings().importContainers().withImportContainerKeyValue().post()`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `reservationExpirationInMinutes` to type `InventoryImport`
- added property `active` to type `StandalonePriceImport`
</details>

**History changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `setReservationExpirationInMinutes` to type `UpdateType`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `SetTransactionInterfaceIdChange`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `catalogData` to type `ChangeLocalizedNameChange`
- added property `catalogData` to type `SetLocalizedDescriptionChange`
</details>

**Checkout changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `eu-central-1.aws` to type `Region`
- added enum `us-east-2.aws` to type `Region`
</details>

<details>
<summary>Removed Type(s)</summary>

- :warning: removed type `SetConnectorDeploymentUpdateAction`
</details>
