---
'@commercetools/platform-sdk': minor
---

**Api changes**

<details>
<summary>Added Type(s)</summary>

- added type `ExpiredCustomerEmailTokenError`
- added type `ExpiredCustomerPasswordTokenError`
- added type `GraphQLExpiredCustomerEmailTokenError`
- added type `GraphQLExpiredCustomerPasswordTokenError`
- added type `CheckoutOrderCreationFailedEvent`
- added type `CheckoutPaymentAuthorizationCancelledEvent`
- added type `CheckoutPaymentAuthorizationFailedEvent`
- added type `CheckoutPaymentAuthorizedEvent`
- added type `CheckoutPaymentCancelAuthorizationFailedEvent`
- added type `CheckoutPaymentChargeFailedEvent`
- added type `CheckoutPaymentChargedEvent`
- added type `CheckoutPaymentRefundFailedEvent`
- added type `CheckoutPaymentRefundedEvent`
- added type `CheckoutMessageOrderPayloadBaseData`
- added type `CheckoutMessagePaymentsPayloadBaseData`
</details>

<details>
<summary>Added Property(s)</summary>

- added property `invalidateOlderTokens` to type `CustomerCreateEmailToken`
- added property `invalidateOlderTokens` to type `CustomerCreatePasswordResetToken`
- added property `invalidateOlderTokens` to type `CustomerToken`
- added property `value` to type `CustomerEmailTokenCreatedMessage`
- added property `invalidateOlderTokens` to type `CustomerEmailTokenCreatedMessage`
- added property `value` to type `CustomerPasswordTokenCreatedMessage`
- added property `invalidateOlderTokens` to type `CustomerPasswordTokenCreatedMessage`
- added property `value` to type `CustomerEmailTokenCreatedMessagePayload`
- added property `invalidateOlderTokens` to type `CustomerEmailTokenCreatedMessagePayload`
- added property `value` to type `CustomerPasswordTokenCreatedMessagePayload`
- added property `invalidateOlderTokens` to type `CustomerPasswordTokenCreatedMessagePayload`
</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `checkout` to type `EventSubscriptionResourceTypeId`
- added enum `CheckoutOrderCreationFailed` to type `EventType`
- added enum `CheckoutPaymentAuthorizationCancelled` to type `EventType`
- added enum `CheckoutPaymentAuthorizationFailed` to type `EventType`
- added enum `CheckoutPaymentAuthorized` to type `EventType`
- added enum `CheckoutPaymentCancelAuthorizationFailed` to type `EventType`
- added enum `CheckoutPaymentCharged` to type `EventType`
- added enum `CheckoutPaymentChargeFailed` to type `EventType`
- added enum `CheckoutPaymentRefunded` to type `EventType`
- added enum `CheckoutPaymentRefundFailed` to type `EventType`
</details>
