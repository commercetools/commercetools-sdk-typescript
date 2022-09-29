- http\*
- error\*
- logger - initialized with a logger function (log-level, request and response)
- auth\*
- retry\* - if there\'s an error retry the request
- correlation
- not-found - null object translator
- user-agent
- accept-gzip

- accept gzip - check node-fetch

<!-- ////////////////////////////////////////////////// -->

Things to do

- [x] client and composer
- [x] http-middleware
- [ ] error-middleware
- [x] logger-middleware\*
- [ ] auth-middleware\*
  - [x] with-client-credentials-flow
  - [x] with-anonymous-session-flow
  - [ ] with-password-flow
  - [x] with-refresh-token-flow
  - [x] with-existing-token-flow
- [x] retry-middleware
- [x] correlation-id-middleware
- [x] queue-middleware
- [x] user-agent-middleware

Extras

- accept-gzip
- not-found\* - null object translator
- accept gzip - check node-fetch
