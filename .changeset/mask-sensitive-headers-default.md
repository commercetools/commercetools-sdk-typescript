---
'@commercetools/ts-client': patch
---

Default `maskSensitiveHeaderData` to `true`

### What changed

The `maskSensitiveHeaderData` option of the HTTP middleware now defaults to `true`. Previously it implicitly defaulted to `false`, so sensitive headers such as `Authorization: Bearer <token>` were only masked when the option was explicitly set.

### Why

Masking should be safe by default. With the previous default, the `originalRequest` attached to error/response objects could expose the `Authorization` token unless consumers opted in. Defaulting to `true` prevents accidental leaking of credentials into logs and error payloads.

### How to update

No changes are required to benefit from the safer default. If you intentionally rely on unmasked request headers (for example, for local debugging), set the option explicitly:

```ts
const httpMiddlewareOptions = {
  host: 'https://api.<region>.commercetools.com',
  maskSensitiveHeaderData: false,
}
```
