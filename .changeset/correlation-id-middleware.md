---
'@commercetools/ts-client': patch
---

**Bug Fix**

Fixed a potential undefined error in the correlation ID middleware by adding optional chaining when checking for the custom generate function. This prevents the middleware from throwing an error when options are not provided.
