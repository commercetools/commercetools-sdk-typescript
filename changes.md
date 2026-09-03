**Api changes**

<details>
<summary>MarkDeprecated Type(s)</summary>

- marked type `FacetRange` as deprecated
- marked type `FacetResult` as deprecated
- marked type `FacetResults` as deprecated
- marked type `FacetTerm` as deprecated
- marked type `FacetTypes` as deprecated
- marked type `FilteredFacetResult` as deprecated
- marked type `ProductProjectionPagedSearchResponse` as deprecated
- marked type `RangeFacetResult` as deprecated
- marked type `Suggestion` as deprecated
- marked type `SuggestionResult` as deprecated
- marked type `TermFacetResult` as deprecated
- marked type `TermFacetResultType` as deprecated

</details>

<details>
<summary>Added Type(s)</summary>

- added type `AgentBusinessUnitAmbiguousError`
- added type `AgentBusinessUnitLimitExceededError`
- added type `AgentBusinessUnitUnresolvedError`
- added type `AgentExtractionFailedError`
- added type `AgentFeatureDisabledError`
- added type `AgentFileNotProcessedWarning`
- added type `AgentMissingCountryError`
- added type `AgentMissingCustomerEmailError`
- added type `AgentMissingEntityTypeError`
- added type `AgentNoLineItemsExtractedError`
- added type `AgentOutOfScopeError`
- added type `AgentProductSearchNotEnabledError`
- added type `AgentProductsNotFoundError`
- added type `AgentProductsNotFoundWarning`
- added type `AgentQuoteRequestCreationFailedError`
- added type `AgentResponsesAuthError`
- added type `AgentResponsesCartSuccess`
- added type `AgentResponsesErrorResponse`
- added type `AgentResponsesMultipartRequest`
- added type `AgentResponsesOutputType`
- added type `AgentResponsesPayload`
- added type `AgentResponsesQuoteRequestSuccess`
- added type `AgentResponsesRequest`
- added type `AgentResponsesSuccess`
- added type `AgentStoreAmbiguousError`
- added type `AgentStoreDistributionChannelsUnsupportedError`
- added type `AgentStoreUnresolvedError`
- added type `EstimatedDelivery`
- added type `CartSetEstimatedDeliveryAction`
- added type `CartEstimatedDeliverySetMessage`
- added type `OrderEstimatedDeliverySetMessage`
- added type `StoreCheckoutUrlTemplateSetMessage`
- added type `StoreContactUrlSetMessage`
- added type `StoreCookiePolicyUrlSetMessage`
- added type `StoreFaqUrlSetMessage`
- added type `StoreImprintUrlSetMessage`
- added type `StoreOrderUrlTemplateSetMessage`
- added type `StorePrivacyPolicyUrlSetMessage`
- added type `StoreRefundPolicyUrlSetMessage`
- added type `StoreShippingPolicyUrlSetMessage`
- added type `StoreTermsOfServiceUrlSetMessage`
- added type `CartEstimatedDeliverySetMessagePayload`
- added type `OrderEstimatedDeliverySetMessagePayload`
- added type `StoreCheckoutUrlTemplateSetMessagePayload`
- added type `StoreContactUrlSetMessagePayload`
- added type `StoreCookiePolicyUrlSetMessagePayload`
- added type `StoreFaqUrlSetMessagePayload`
- added type `StoreImprintUrlSetMessagePayload`
- added type `StoreOrderUrlTemplateSetMessagePayload`
- added type `StorePrivacyPolicyUrlSetMessagePayload`
- added type `StoreRefundPolicyUrlSetMessagePayload`
- added type `StoreShippingPolicyUrlSetMessagePayload`
- added type `StoreTermsOfServiceUrlSetMessagePayload`
- added type `OrderSetEstimatedDeliveryAction`
- added type `ShippingMethodSetCarrierAction`
- added type `Storefront`
- added type `StoreSetCheckoutUrlTemplateAction`
- added type `StoreSetContactUrlAction`
- added type `StoreSetCookiePolicyUrlAction`
- added type `StoreSetFaqUrlAction`
- added type `StoreSetImprintUrlAction`
- added type `StoreSetOrderUrlTemplateAction`
- added type `StoreSetPrivacyPolicyUrlAction`
- added type `StoreSetRefundPolicyUrlAction`
- added type `StoreSetShippingPolicyUrlAction`
- added type `StoreSetTermsOfServiceUrlAction`
- added type `TypeRemoveEnumValuesAction`
- added type `TypeRemoveLocalizedEnumValuesAction`

</details>

<details>
<summary>Added Property(s)</summary>

- added property `estimatedDelivery` to type `ShippingInfo`
- added property `estimatedDelivery` to type `CartAddShippingMethodAction`
- added property `estimatedDelivery` to type `CartSetCustomShippingMethodAction`
- added property `estimatedDelivery` to type `CartSetShippingMethodAction`
- added property `taxedPrice` to type `CustomLineItemImportDraft`
- added property `taxedPrice` to type `LineItemImportDraft`
- added property `taxedPrice` to type `ShippingInfoImportDraft`
- added property `carrier` to type `ShippingMethod`
- added property `carrier` to type `ShippingMethodDraft`
- added property `storefront` to type `Store`
- added property `storefront` to type `StoreDraft`

</details>

<details>
<summary>MarkDeprecated Property(s)</summary>

- marked property `FacetResult::type` as deprecated
- marked property `FacetResults::/^[a-z].*$/` as deprecated
- marked property `FilteredFacetResult::type` as deprecated
- marked property `ProductProjectionPagedSearchResponse::facets` as deprecated
- marked property `RangeFacetResult::type` as deprecated
- marked property `TermFacetResult::type` as deprecated
- marked property `TermFacetResult::dataType` as deprecated

</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/agents`
- added resource `/{projectKey}/agents/intake`
- added resource `/{projectKey}/agents/intake/v1`
- added resource `/{projectKey}/agents/intake/v1/responses`

</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().agents().intake().v1().responses().post()`

</details>

<details>
<summary>MarkDeprecated Method(s)</summary>

- marked method `post /{projectKey}/product-projections/search` as deprecated
- marked method `get /{projectKey}/product-projections/search` as deprecated
- marked method `get /{projectKey}/product-projections/suggest` as deprecated

</details>
