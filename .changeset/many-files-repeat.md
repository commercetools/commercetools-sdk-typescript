---
'@commercetools/ts-client': patch
---

Add an `undefined` union type to tokenCache get method return type

```diff
- get: (tokenCacheOptions?: TokenCacheOptions) => Promise<TokenStore>
+ get: (tokenCacheOptions?: TokenCacheOptions) => Promise<TokenStore | undefined>
```
