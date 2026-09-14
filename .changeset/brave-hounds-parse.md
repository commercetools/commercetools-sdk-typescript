---
'@commercetools/ts-client': patch
---

Keep the HTTP status code of an error response whose body is not JSON.

When `fetch` is the `httpClient`, the response body was parsed with `JSON.parse` unconditionally.
An error response carrying a non-JSON body — typically an HTML page produced by infrastructure in
front of the API, such as a load balancer returning `502 Bad Gateway` — made that parse throw, and
the failure surfaced as a generic `NetworkError` with `statusCode: 0`. The real status code was
lost, so callers could neither classify nor count these responses:

```
NetworkError: Unexpected token '<', "\n<html><hea"... is not valid JSON
  statusCode: 0
```

The parse failure is now caught for responses whose status is an error, and the unparsed body is
kept. The same response gives:

```
HttpError: Unexpected non-JSON error response
  statusCode: 502
  body: '\n<html><head><title>502 Bad Gateway</title></head>...'
```

This is what `axios` already returned for the same response, so both HTTP clients now agree.

A response whose status is not an error is still expected to carry a JSON body, and a parse failure
there keeps surfacing as before, rather than passing an unparsed body to the caller as if the
request had succeeded.

These infrastructure errors are transient, so also consider adding their status codes to
`retryConfig.retryCodes`, which is applied to the status before the body is read:

```ts
createHttpMiddleware({
  host,
  httpClient: fetch,
  enableRetry: true,
  retryConfig: { retryCodes: [502] },
})
```
