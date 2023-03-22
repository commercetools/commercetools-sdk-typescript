---
'@commercetools/sdk-client-v2': patch
---

- Handle node-fetch text parse error in sdk client http middleware
- Adds `catch block` to prevent unhandled promise rejection on parsing response text
