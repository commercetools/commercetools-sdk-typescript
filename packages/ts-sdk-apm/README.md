# @commercetools/ts-sdk-apm

_commercetools Typescript SDK Application Performance Monitoring._

This package is used to monitor the application performance of the Typescript SDK. It exposes a middleware creator method that accepts some options for monitoring and tracing the SDK performance.

## Installation

To use this package we need to install the package and add the newrelic configuration file.

Using npm

```bash
$ npm install @commercetools/ts-sdk-apm
```

or using yarn

```bash
$ yarn add @commercetools/ts-sdk-apm
```

## Usage

Import the package and add it to the SDK client using `withTelemetryMiddleware()` method.

```typescript
// import the @commercetools/ts-sdk-apm package
import { ClientBuilder } from '@commercetools/sdk-client-v2'
import { createTelemetryMiddleware } from '@commercetools/ts-sdk-apm'

// newrelic options
const telemetryOptions = {
  createTelemetryMiddleware
}

// create the client and include the telemetry middleware
const client = new ClientBuilder()
  .withClientCredentialsFlow(...)
  .withHttpMiddleware(...)
  .withTelemetryMiddleware(telemetryOptions) // telemetry middleware
  ...
  .build()
...

```

## Using a custom (user-defined options)

All the monitoring and tracing functionality has been implemented by default however, the `telemetryOptions` accepts three function parameters `createTelemetryMiddleware`, `apm` and `tracer`, the `createTelemetryMiddleware` and `tracer` can be custom implemented.

```typescript
type telemetryOptions = {
  createTelemetryMiddleware: (options: Omit<telemetryOptions, 'createTelemetryMiddleware'>) => Middleware;
  apm?: () => typeof require('newrelic');
  tracer?: () => typeof require('/absolute-path-to-a-tracer(opentelemetry)-module')
}
```

Example

```typescript
const telemetryOptions = {
  createTelemetryMiddleware, // coming from the `@commercetools/ts-sdk-apm or a custom implementation
  tracer: () =>
      require(
          require('path').join(__dirname, '..', '..', 'custom-telemetry-module.js')
      ), // make sure the require takes in an absolute path to the custom tracer module.
}
```

The tracer is responsible for tracing `http` calls right from the resource request call to the external commercetools backend service and everything that goes on in-between.
