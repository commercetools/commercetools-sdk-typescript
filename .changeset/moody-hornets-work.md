---
"@commercetools/sdk-client-v2": patch
---

- Fix issues with buffer request body always being converted to json (`stringified`)
- Abandon the static `Buffer.isBuffer()` method in favour of custom `isBuffer` function
