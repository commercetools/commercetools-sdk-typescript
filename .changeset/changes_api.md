---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `Event`
- added type `ImportContainerCreatedEvent`
- added type `ImportContainerCreatedEventData`
- added type `ImportContainerDeletedEvent`
- added type `ImportContainerDeletedEventData`
- added type `ImportOperationRejectedEvent`
- added type `ImportOperationRejectedEventData`
- added type `ImportUnresolvedEvent`
- added type `ImportUnresolvedEventData`
- added type `ImportValidationFailedEvent`
- added type `ImportValidationFailedEventData`
- added type `ImportWaitForMasterVariantEvent`
- added type `ImportWaitForMasterVariantEventData`
- added type `EventDeliveryPayload`
- added type `EventSubscription`
- added type `EventSubscriptionResourceTypeId`
- added type `EventType`
- added type `SubscriptionSetEventsAction`
</details>

<details>
<summary>Required Property(s)</summary>

- changed property `facets` of type `ProductProjectionPagedSearchResponse` to be optional
</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `projectKey` from type `DeliveryPayload`
- :warning: removed property `resource` from type `DeliveryPayload`
- :warning: removed property `resourceUserProvidedIdentifiers` from type `DeliveryPayload`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `events` to type `Subscription`
- added property `events` to type `SubscriptionDraft`
</details>

<details>
<summary>Removed QueryParameter(s)</summary>

- :warning: removed query parameter `withTotal` from method `get /{projectKey}/product-projections/search`
</details>
