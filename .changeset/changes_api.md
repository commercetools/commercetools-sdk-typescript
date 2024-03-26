---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Enum(s)</summary>

- added enum `ManuallySuspended` to type `SubscriptionHealthStatus`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `productsSearch` to type `SearchIndexingConfiguration`
- added property `mode` to type `ProjectChangeProductSearchIndexingEnabledAction`
</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().products().search().post()`
- added method `apiRoot.withProjectKey().products().search().head()`
</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/products/search`
</details>

<details>
<summary>Added Type(s)</summary>

- added type `LockedFieldError`
- added type `GraphQLLockedFieldError`
- added type `ProductPagedSearchResponse`
- added type `ProductSearchErrorResponse`
- added type `ProductSearchMatchingVariantEntry`
- added type `ProductSearchMatchingVariants`
- added type `ProductSearchProjectionParams`
- added type `ProductSearchRequest`
- added type `ProductSearchResult`
- added type `ProductSearchFacetCountExpression`
- added type `ProductSearchFacetCountLevelEnum`
- added type `ProductSearchFacetCountValue`
- added type `ProductSearchFacetDistinctBucketSortBy`
- added type `ProductSearchFacetDistinctBucketSortExpression`
- added type `ProductSearchFacetDistinctExpression`
- added type `ProductSearchFacetDistinctValue`
- added type `ProductSearchFacetExpression`
- added type `ProductSearchFacetRangesExpression`
- added type `ProductSearchFacetRangesFacetRange`
- added type `ProductSearchFacetRangesValue`
- added type `ProductSearchFacetResult`
- added type `ProductSearchFacetResultBucket`
- added type `ProductSearchFacetResultBucketEntry`
- added type `ProductSearchFacetResultCount`
- added type `ProductSearchFacetScope`
- added type `ProductSearchFacetScopeEnum`
- added type `ProductSearchIndexingMode`
- added type `ProductSearchStatus`
- added type `SearchAndExpression`
- added type `SearchAnyValue`
- added type `SearchCompoundExpression`
- added type `SearchDateRangeExpression`
- added type `SearchDateRangeValue`
- added type `SearchDateTimeRangeExpression`
- added type `SearchDateTimeRangeValue`
- added type `SearchExactExpression`
- added type `SearchExistsExpression`
- added type `SearchExistsValue`
- added type `SearchFieldType`
- added type `SearchFilterExpression`
- added type `SearchFullTextExpression`
- added type `SearchFullTextPrefixExpression`
- added type `SearchFullTextPrefixValue`
- added type `SearchFullTextValue`
- added type `SearchLongRangeExpression`
- added type `SearchLongRangeValue`
- added type `SearchMatchType`
- added type `SearchMatchingVariant`
- added type `SearchNotExpression`
- added type `SearchNumberRangeExpression`
- added type `SearchNumberRangeValue`
- added type `SearchOrExpression`
- added type `SearchPrefixExpression`
- added type `SearchQuery`
- added type `SearchQueryExpression`
- added type `SearchQueryExpressionValue`
- added type `SearchSortMode`
- added type `SearchSortOrder`
- added type `SearchSorting`
- added type `SearchTimeRangeExpression`
- added type `SearchTimeRangeValue`
- added type `SearchWildCardExpression`
</details>
