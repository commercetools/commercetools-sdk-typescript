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
- [x] error-middleware
- [x] logger-middleware\*
  - [-] logging using winston\* <!--# won't implement this -->
- [x] auth-middleware\*
  - [x] with-client-credentials-flow
  - [x] with-anonymous-session-flow
  - [x] with-password-flow
  - [x] with-refresh-token-flow
  - [x] with-existing-token-flow
  - [x] implement token caching
- [x] retry-middleware
- [x] correlation-id-middleware
- [x] queue-middleware
- [x] user-agent-middleware
- [x] test extensively

Extras

- accept-gzip
- not-found\* - null object translator
- accept gzip - check node-fetch