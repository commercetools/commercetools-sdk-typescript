**Api changes**

<details>
<summary>Changed Property(s)</summary>

- :warning: changed property `productSelection` of type `ProductSelectionCreatedMessage` from type `IndividualProductSelectionType` to `ProductSelectionType`
- :warning: changed property `productSelection` of type `ProductSelectionCreatedMessagePayload` from type `IndividualProductSelectionType` to `ProductSelectionType`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `variantExclusion` to type `AssignedProductReference`
- added property `variantExclusion` to type `AssignedProductSelection`
- added property `variantExclusion` to type `ProductSelectionAssignment`
- added property `type` to type `ProductSelectionDraft`
</details>

<details>
<summary>MarkDeprecated Type(s)</summary>

- marked type `ProductVariantSelectionExclusion` as deprecated
- marked type `ProductVariantSelectionInclusion` as deprecated
</details>

<details>
<summary>Added Type(s)</summary>

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
