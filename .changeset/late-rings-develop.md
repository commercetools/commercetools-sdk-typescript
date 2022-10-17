---
"@commercetools/platform-sdk": minor
"@commercetools/sdk-client-v2": patch
---

Update generated SDKs

Add `quotes()` method for the `My Quote endpoint`

- [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-17ea32dc184ca17b337fbf5e126f27f16651feadc9c879fae88db2580537cf8eR142)

**Usage:**
```ts
request: apiRoot
  .withProjectKey({ projectKey: 'test_projectKey' })
  .me()
  .quotes()
  .withId({ ID: 'test_ID' })
  .get({ queryArgs: { expand: 'expand' } }),
```

Add `ByProjectKeyMeQuotesByIDRequestBuilder` class for `quotes-request` model

- [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-a5bab13a41c9ece596cf0fcc545109385e16b6b1877755e58d8ec064125e2041R12)


Add `ByProjectKeyMeQuotesKeyByKeyRequestBuilder` class for `quotes-request` model

- [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-034feddaefb558f6391d5238391e177290d7f018904308b2884dfa016c81bc0dR12)

Add `ByProjectKeyMeQuotesRequestBuilder` class for `quotes-request` model

- [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-26e9b7a9cef621eaf88d81d1e2bb61858402450c444e1fe4d11bde5b51d22638R13)
