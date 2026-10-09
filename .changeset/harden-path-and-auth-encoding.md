---
'@commercetools/platform-sdk': patch
'@commercetools/history-sdk': patch
'@commercetools/importapi-sdk': patch
'@commercetools/checkout-sdk': patch
'@commercetools/sdk-client-v2': patch
'@commercetools/ts-client': patch
---

Harden request building against injection. Path parameters of `.` or `..` are now rejected (`encodeURIComponent` does not encode dots). The OAuth request builders now encode `anonymousId` and `projectKey`, and escape `% & + = #` in scopes.
