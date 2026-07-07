**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `BulkOperationMaxItemsExceededError`
- added type `GraphQLBulkOperationMaxItemsExceededError`
- added type `VariantCreatedMessage`
- added type `VariantDeletedMessage`
- added type `VariantImageAddedMessage`
- added type `VariantImagesSetMessage`
- added type `VariantKeySetMessage`
- added type `VariantPublishedMessage`
- added type `VariantSkuSetMessage`
- added type `VariantStagedChangesRemovedMessage`
- added type `VariantUnpublishedMessage`
- added type `VariantCreatedMessagePayload`
- added type `VariantDeletedMessagePayload`
- added type `VariantImageAddedMessagePayload`
- added type `VariantImagesSetMessagePayload`
- added type `VariantKeySetMessagePayload`
- added type `VariantPublishedMessagePayload`
- added type `VariantSkuSetMessagePayload`
- added type `VariantStagedChangesRemovedMessagePayload`
- added type `VariantUnpublishedMessagePayload`
- added type `ProductSetDefaultVariantAction`
- added type `ProductCatalogModel`
- added type `ProjectSetProductCatalogModelAction`
- added type `VariantAttributes`
- added type `VariantAttributesAttributeMetadata`
- added type `VariantAttributesAvailability`
- added type `VariantAttributesChannelAvailability`
- added type `VariantAttributesChannelAvailabilityMap`
- added type `VariantAttributesVariant`
- added type `Variant`
- added type `VariantBulkUpdate`
- added type `VariantBulkUpdateFailResult`
- added type `VariantBulkUpdateItem`
- added type `VariantBulkUpdateResource`
- added type `VariantBulkUpdateResponse`
- added type `VariantBulkUpdateResult`
- added type `VariantBulkUpdateSuccessResult`
- added type `VariantData`
- added type `VariantDraft`
- added type `VariantPagedQueryResponse`
- added type `VariantProjection`
- added type `VariantProjectionPagedQueryResponse`
- added type `VariantReference`
- added type `VariantResourceIdentifier`
- added type `VariantUpdate`
- added type `VariantUpdateAction`
- added type `VariantAddAssetAction`
- added type `VariantAddExternalImageAction`
- added type `VariantChangeAssetNameAction`
- added type `VariantChangeAssetOrderAction`
- added type `VariantPublishAction`
- added type `VariantRemoveAssetAction`
- added type `VariantRemoveImageAction`
- added type `VariantRemoveStagedChangesAction`
- added type `VariantSetAssetCustomFieldAction`
- added type `VariantSetAssetCustomTypeAction`
- added type `VariantSetAssetDescriptionAction`
- added type `VariantSetAssetKeyAction`
- added type `VariantSetAssetSourcesAction`
- added type `VariantSetAssetTagsAction`
- added type `VariantSetAssetsAction`
- added type `VariantSetAttributeAction`
- added type `VariantSetAttributesAction`
- added type `VariantSetImagesAction`
- added type `VariantSetKeyAction`
- added type `VariantSetSkuAction`
- added type `VariantUnpublishAction`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/variant-projections`
- added resource `/{projectKey}/variants`
- added resource `/{projectKey}/product-projections/key={key}/variant-attributes`
- added resource `/{projectKey}/product-projections/{ID}/variant-attributes`
- added resource `/{projectKey}/variant-projections/key={key}`
- added resource `/{projectKey}/variant-projections/{ID}`
- added resource `/{projectKey}/variants/bulk`
- added resource `/{projectKey}/variants/key={key}`
- added resource `/{projectKey}/variants/{ID}`
- added resource `/{projectKey}/in-store/key={storeKey}/variant-projections`
- added resource `/{projectKey}/in-store/key={storeKey}/product-projections/key={key}/variant-attributes`
- added resource `/{projectKey}/in-store/key={storeKey}/product-projections/{ID}/variant-attributes`
- added resource `/{projectKey}/in-store/key={storeKey}/variant-projections/key={key}`
- added resource `/{projectKey}/in-store/key={storeKey}/variant-projections/{ID}`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `defaultVariant` to type `ProductData`
- added property `productCatalogModel` to type `Project`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().variantProjections().get()`
- added method `apiRoot.withProjectKey().variantProjections().head()`
- added method `apiRoot.withProjectKey().variants().get()`
- added method `apiRoot.withProjectKey().variants().post()`
- added method `apiRoot.withProjectKey().variants().head()`
- added method `apiRoot.withProjectKey().productProjections().withKey().variantAttributes().get()`
- added method `apiRoot.withProjectKey().productProjections().withId().variantAttributes().get()`
- added method `apiRoot.withProjectKey().variantProjections().withKey().get()`
- added method `apiRoot.withProjectKey().variantProjections().withKey().head()`
- added method `apiRoot.withProjectKey().variantProjections().withId().get()`
- added method `apiRoot.withProjectKey().variantProjections().withId().head()`
- added method `apiRoot.withProjectKey().variants().bulk().post()`
- added method `apiRoot.withProjectKey().variants().withKey().get()`
- added method `apiRoot.withProjectKey().variants().withKey().head()`
- added method `apiRoot.withProjectKey().variants().withKey().post()`
- added method `apiRoot.withProjectKey().variants().withKey().delete()`
- added method `apiRoot.withProjectKey().variants().withId().get()`
- added method `apiRoot.withProjectKey().variants().withId().head()`
- added method `apiRoot.withProjectKey().variants().withId().post()`
- added method `apiRoot.withProjectKey().variants().withId().delete()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().variantProjections().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().variantProjections().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().productProjections().withKey().variantAttributes().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().productProjections().withId().variantAttributes().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().variantProjections().withKey().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().variantProjections().withKey().head()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().variantProjections().withId().get()`
- added method `apiRoot.withProjectKey().inStoreKeyWithStoreKeyValue().variantProjections().withId().head()`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `variant` to type `ReferenceTypeId`
</details>

**Import changes**

<details>
<summary>Added Type(s)</summary>

- added type `VariantImportRequest`
- added type `VariantImport`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/variants`
- added resource `/{projectKey}/variants/import-containers`
- added resource `/{projectKey}/variants/import-containers/{importContainerKey}`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKeyValue().variants().importContainers().withImportContainerKeyValue().post()`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `variant` to type `ImportResourceType`
- added enum `variant` to type `ReferenceType`
</details>
