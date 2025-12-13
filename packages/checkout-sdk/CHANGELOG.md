# @commercetools/checkout-sdk

## 1.1.0

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

### Patch Changes

- Updated dependencies [[`e2fb7fd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e2fb7fd778f849f2a1da7f5abf0643c699bb8968), [`2898e78`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2898e7831c731b611628e6516d99e19fa32d402e)]:
  - @commercetools/ts-client@4.4.0

## 1.0.0

### Major Changes

- [#1174](https://github.com/commercetools/commercetools-sdk-typescript/pull/1174) [`b054dbb`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b054dbb195bea7bb19b52e3cbe70afe65bfe5010) Thanks [@ajimae](https://github.com/ajimae)! - [Feat][DEVX-630] Add Checkout API
