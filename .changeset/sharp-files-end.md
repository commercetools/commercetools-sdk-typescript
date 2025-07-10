---
"@commercetools/ts-client": minor
---

[Feat][DEVX-619]: Add Custom `headersWithStringBody` to HttpMiddlewareOptions
Sometimes we might want to `stringify` a request body before sending to server, 
this functionality allows the user to add custom `header` entries that forces 
the request body to be `stringified` before it's send over to the backend.
