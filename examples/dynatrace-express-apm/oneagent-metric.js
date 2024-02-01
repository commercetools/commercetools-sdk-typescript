// works;
const { Resource } = require('@opentelemetry/resources')
const { MeterProvider } = require('@opentelemetry/sdk-metrics')
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api')
const {
  configureDynatraceMetricExport,
} = require('@dynatrace/opentelemetry-exporter-metrics')

// optional: set up logging for OpenTelemetry
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL)

// Configure a MeterProvider
const provider = new MeterProvider({
  resource: new Resource({
    'service.name': 'opentelemetry-metrics-sample-dynatrace',
  }),
})

const reader = configureDynatraceMetricExport(
  // exporter configuration
  {
    prefix: 'sample', // optional
    defaultDimensions: [
      // optional
      { key: 'default-dim', value: 'default-dim-value' },
    ],
    // If no OneAgent is available locally, export directly to the Dynatrace server:
    url: `https://${process.env['DYNATRACE_ENV_ID']}.live.dynatrace.com/api/v2/metrics/ingest`,
    apiToken: process.env['DT_OPEN_TOKEN'],
  },
  // metric reader configuration
  {
    exportIntervalMillis: 5000,
  }
)

provider.addMetricReader(reader)

const meter = provider.getMeter('opentelemetry-metrics-sample-dynatrace')

// Your SDK should be set up correctly now. You can create instruments...
const requestCounter = meter.createCounter('requests', {
  description: 'Example of a Counter',
})

const upDownCounter = meter.createUpDownCounter('test_up_down_counter', {
  description: 'Example of a UpDownCounter',
})

// ...set up attributes...
const attributes = {
  pid: process.pid.toString(),
  environment: 'staging',
}

// ... and start recording metrics: - usage example
// setInterval(() => {
//   requestCounter.add(Math.round(Math.random() * 1000), attributes)
//   upDownCounter.add(Math.random() > 0.5 ? 1 : -1, attributes)
// }, 1000)

export { requestCounter, upDownCounter }
