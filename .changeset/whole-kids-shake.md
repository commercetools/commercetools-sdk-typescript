---
'@commercetools/ts-client': minor
---

add generic type to `execute` method

```diff
- execute(request: ClientRequest): Promise<ClientResult>
+ execute<T extends object = any>(request: ClientRequest): Promise<ClientResult<T>>
```
