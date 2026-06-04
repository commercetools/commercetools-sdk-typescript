---
'@commercetools/importapi-sdk': major
'@commercetools/ts-client': major
'@commercetools/checkout-sdk': major
'@commercetools/platform-sdk': major
'@commercetools/history-sdk': major
'@commercetools/sdk-client-v2': major
'@commercetools/ts-sdk-apm': major
---

## Drop support for Node.js 18 and 20

### What changed

The minimum required Node.js version has been raised from `>=18` to `>=22`. Node.js 18 and 20 are no longer supported.

### Why

Dependencies in this SDK now require Node.js 22 or higher. In particular:

- **nock 14.x** (used in tests) replaced its internal HTTP interception with `@mswjs/interceptors`, which relies on modern Node.js internals.
- **Jest 30** requires Node.js 22+ for its test runner.
- Node.js 18 reached end-of-life in April 2025. Node.js 20 reaches end-of-life in April 2026. Aligning the engine requirement with actively maintained LTS releases reduces the maintenance surface.

### How to update

Upgrade your runtime to **Node.js 22 or later** before updating to this version. No code changes are required — only the Node.js runtime version needs to change.

```bash
# Using nvm
nvm install 22
nvm use 22

# Using fnm
fnm install 22
fnm use 22
```

If you are pinned to Node.js 18 or 20 for other reasons, stay on the previous major version of this SDK until you are able to upgrade your runtime.
