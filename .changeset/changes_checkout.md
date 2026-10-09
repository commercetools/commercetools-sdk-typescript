---
'@commercetools/checkout-sdk': minor
---

**Checkout changes**

<details>
<summary>Added Type(s)</summary>

- added type `PaymentMethodReference`
- added type `ConnectorTimeoutError`
- added type `InternalConstraintViolatedError`
- added type `PaginatedRecurringPaymentJob`
- added type `RecurringPaymentJob`
- added type `RecurringPaymentJobDraft`
- added type `RecurringPaymentJobError`
- added type `RecurringPaymentJobState`
- added type `RecurringPaymentJobStatus`
- added type `PaginatedRecurringPayment`
- added type `PaymentMethodConfiguration`
- added type `RecurringOrderReference`
- added type `RecurringPayment`
- added type `RecurringPaymentDraft`
- added type `RecurringPaymentReference`
- added type `RecurringPaymentAddPaymentMethodConfigurationUpdateAction`
- added type `RecurringPaymentSetKeyUpdateAction`
- added type `RecurringPaymentSetPaymentMethodConfigurationUpdateAction`
- added type `RecurringPaymentSetRecurringOrderUpdateAction`
- added type `RecurringPaymentUpdateAction`
- added type `RecurringPaymentUpdateActions`
- added type `TransactionItemPaymentIntegration`
- added type `TransactionItemPaymentIntegrationDraft`
- added type `TransactionItemRecurring`
- added type `TransactionItemRecurringDraft`

</details>

<details>
<summary>Removed Property(s)</summary>

- :warning: removed property `paymentIntegration` from type `TransactionItem`
- :warning: removed property `paymentIntegration` from type `TransactionItemDraft`

</details>

<details>
<summary>Added Property(s)</summary>

- added property `type` to type `TransactionItem`
- added property `type` to type `TransactionItemDraft`

</details>

<details>
<summary>Required Property(s)</summary>

- :warning: changed property `cart` of type `Transaction` to be required

</details>

<details>
<summary>Added Enum(s)</summary>

- added enum `payment-method` to type `ReferenceTypeId`
- added enum `recurring-payment` to type `ReferenceTypeId`
- added enum `recurring-order` to type `ReferenceTypeId`

</details>

<details>
<summary>Added Resource(s)</summary>

- added resource `/{projectKey}/recurring-payment-jobs`
- added resource `/{projectKey}/recurring-payments`
- added resource `/{projectKey}/recurring-payment-jobs/{id}`
- added resource `/{projectKey}/recurring-payment-jobs/key={key}`
- added resource `/{projectKey}/recurring-payments/{id}`
- added resource `/{projectKey}/recurring-payments/key={key}`

</details>

<details>
<summary>Added Method(s)</summary>

- added method `apiRoot.withProjectKey().recurringPaymentJobs().get()`
- added method `apiRoot.withProjectKey().recurringPaymentJobs().post()`
- added method `apiRoot.withProjectKey().recurringPayments().get()`
- added method `apiRoot.withProjectKey().recurringPayments().post()`
- added method `apiRoot.withProjectKey().recurringPaymentJobs().withId().get()`
- added method `apiRoot.withProjectKey().recurringPaymentJobs().withId().delete()`
- added method `apiRoot.withProjectKey().recurringPaymentJobs().withKey().get()`
- added method `apiRoot.withProjectKey().recurringPaymentJobs().withKey().delete()`
- added method `apiRoot.withProjectKey().recurringPayments().withId().get()`
- added method `apiRoot.withProjectKey().recurringPayments().withId().post()`
- added method `apiRoot.withProjectKey().recurringPayments().withId().delete()`
- added method `apiRoot.withProjectKey().recurringPayments().withKey().get()`
- added method `apiRoot.withProjectKey().recurringPayments().withKey().post()`
- added method `apiRoot.withProjectKey().recurringPayments().withKey().delete()`

</details>
