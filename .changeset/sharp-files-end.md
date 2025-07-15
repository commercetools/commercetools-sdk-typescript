---
'@commercetools/ts-client': minor
---

Add custom `stringBodyContentTypes` to `HttpMiddlewareOptions`
Sometimes we might want to `stringify` a request body before sending it over to
server, this functionality allows the user to add custom `header` entries that
forces the request body to be `stringified` before it's sent over to the backend.
