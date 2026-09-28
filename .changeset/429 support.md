---
'@commercetools/ts-client': minor
---

Handle `429 Too Many Requests` using the wait time the server provides, instead of exponential backoff.

When a request is rate limited, the client now reads the delay from the response and waits for exactly that long:

- `Retry-After` (RFC 9110) is used wherever present, in both its delta-seconds and HTTP-date forms.
- `X-RateLimit-Reset`, and its unprefixed `RateLimit-Reset` form, are used on a `429`. The Composable Commerce API gateway sends these. They should be used only on a `429`, because the gateway includes them on every response as a quota report rather than an instruction to wait.

`429` is now retried by default, alongside `500` and `503`.

A rate-limited response that carries no timing information is intentionally not retried. The quota window can be up to a minute away,
so a typical retry amount of a few attempts over a few seconds would be spent entirely on requests certain to be rejected again,
leaving the caller waiting longer only to see the same failure.

A `429` asking to wait longer than `maxDelay` is not retried either. A rate limit window is a hard boundary, so capping the wait would place the next attempt inside the same window, where it is certain to fail again. Raise `maxDelay` to
opt into waiting longer. For a `Retry-After` on a `503` the delay is still capped rather than abandoned, since that is the server's estimate of recovery rather than a fixed window.

Otherwise, the server-specified delay is given a small amount of positive jitter, so that many clients rate limited in the same window do not all retry at the same instant. The jitter never shortens the wait below what the server asked for.

Set `respectRetryAfter: false` in `retryConfig` to ignore these headers and always use the configured backoff.

Rate-limited responses now surface as a `TooManyRequests` error rather than a generic `HttpError`, matching the error code the API documents. `error.name` and `error.code` change accordingly for `429`s; `statusCode` is unchanged.
